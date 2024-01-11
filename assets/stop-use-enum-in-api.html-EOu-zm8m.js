import{_ as e,o as n,c as p,e as t}from"./app-3RcBQnkC.js";const o={},a=t(`<p>最近，我们的线上环境出现了一个问题，线上代码在执行过程中抛出了一个IllegalArgumentException，分析堆栈后，发现最根本的的异常是以下内容：</p><pre><code>java.lang.IllegalArgumentException: 
No enum constant com.a.b.f.m.a.c.AType.P_M
</code></pre><p>大概就是以上的内容，看起来还是很简单的，提示的错误信息就是在AType这个枚举类中没有找到P_M这个枚举项。</p><p>于是经过排查，我们发现，在线上开始有这个异常之前，该应用依赖的一个下游系统有发布，而发布过程中是一个API包发生了变化，主要变化内容是在一个RPC接口的Response返回值类中的一个枚举参数AType中增加了P_M这个枚举项。</p><p>但是下游系统发布时，并未通知到我们负责的这个系统进行升级，所以就报错了。</p><p>我们来分析下为什么会发生这样的情况。</p><h3 id="问题重现" tabindex="-1"><a class="header-anchor" href="#问题重现" aria-hidden="true">#</a> 问题重现</h3><p>首先，下游系统A提供了一个二方库的某一个接口的返回值中有一个参数类型是枚举类型。</p><blockquote><p>一方库指的是本项目中的依赖 二方库指的是公司内部其他项目提供的依赖 三方库指的是其他组织、公司等来自第三方的依赖</p></blockquote><pre><code>public interface AFacadeService {

    public AResponse doSth(ARequest aRequest);
}

public Class AResponse{

    private Boolean success;

    private AType aType;
}

public enum AType{

    P_T,

    A_B
}
</code></pre><p>然后B系统依赖了这个二方库，并且会通过RPC远程调用的方式调用AFacadeService的doSth方法。</p><pre><code>public class BService {

    @Autowired
    AFacadeService aFacadeService;

    public void doSth(){
        ARequest aRequest = new ARequest();

        AResponse aResponse = aFacadeService.doSth(aRequest);

        AType aType = aResponse.getAType();
    }
}
</code></pre><p>这时候，如果A和B系统依赖的都是同一个二方库的话，两者使用到的枚举AType会是同一个类，里面的枚举项也都是一致的，这种情况不会有什么问题。</p><p>但是，如果有一天，这个二方库做了升级，在AType这个枚举类中增加了一个新的枚举项P_M，这时候只有系统A做了升级，但是系统B并没有做升级。</p><p>那么A系统依赖的的AType就是这样的：</p><pre><code>public enum AType{

    P_T,

    A_B,

    P_M
}
</code></pre><p>而B系统依赖的AType则是这样的：</p><pre><code>public enum AType{

    P_T,

    A_B
}
</code></pre><p>这种情况下**，在B系统通过RPC调用A系统的时候，如果A系统返回的AResponse中的aType的类型位新增的P_M时候，B系统就会无法解析。一般在这种时候，RPC框架就会发生反序列化异常。导致程序被中断。**</p><h3 id="原理分析" tabindex="-1"><a class="header-anchor" href="#原理分析" aria-hidden="true">#</a> 原理分析</h3><p>这个问题的现象我们分析清楚了，那么再来看下原理是怎样的，为什么出现这样的异常呢。</p><p>其实这个原理也不难，这类<strong>RPC框架大多数会采用JSON的格式进行数据传输</strong>，也就是客户端会将返回值序列化成JSON字符串，而服务端会再将JSON字符串反序列化成一个Java对象。</p><p>而JSON在反序列化的过程中，对于一个枚举类型，会尝试调用对应的枚举类的valueOf方法来获取到对应的枚举。</p><p>而我们查看枚举类的valueOf方法的实现时，就可以发现，<strong>如果从枚举类中找不到对应的枚举项的时候，就会抛出IllegalArgumentException</strong>：</p><pre><code>public static &lt;T extends Enum&lt;T&gt;&gt; T valueOf(Class&lt;T&gt; enumType,
                                            String name) {
    T result = enumType.enumConstantDirectory().get(name);
    if (result != null)
        return result;
    if (name == null)
        throw new NullPointerException(&quot;Name is null&quot;);
    throw new IllegalArgumentException(
        &quot;No enum constant &quot; + enumType.getCanonicalName() + &quot;.&quot; + name);
}
</code></pre><p>关于这个问题，其实在《阿里巴巴Java开发手册》中也有类似的约定：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/11/16066271055035-scaled.jpg" alt="-w1538">￼</p><p>这里面规定&quot;<strong>对于二方库的参数可以使用枚举，但是返回值不允许使用枚举</strong>&quot;。这背后的思考就是本文上面提到的内容。</p><h3 id="扩展思考" tabindex="-1"><a class="header-anchor" href="#扩展思考" aria-hidden="true">#</a> 扩展思考</h3><p><strong>为什么参数中可以有枚举？</strong></p><p>不知道大家有没有想过这个问题，其实这个就和二方库的职责有点关系了。</p><p>一般情况下，A系统想要提供一个远程接口给别人调用的时候，就会定义一个二方库，告诉其调用方如何构造参数，调用哪个接口。</p><p>而这个二方库的调用方会根据其中定义的内容来进行调用。而参数的构造过程是由B系统完成的，如果B系统使用到的是一个旧的二方库，使用到的枚举自然是已有的一些，新增的就不会被用到，所以这样也不会出现问题。</p><p>比如前面的例子，B系统在调用A系统的时候，构造参数的时候使用到AType的时候就只有P_T和A_B两个选项，虽然A系统已经支持P_M了，但是B系统并没有使用到。</p><p>如果B系统想要使用P_M，那么就需要对该二方库进行升级。</p><p>但是，返回值就不一样了，返回值并不受客户端控制，服务端返回什么内容是根据他自己依赖的二方库决定的。</p><p>但是，其实相比较于手册中的规定，<strong>我更加倾向于，在RPC的接口中入参和出参都不要使用枚举。</strong></p><p>一般，我们要使用枚举都是有几个考虑：</p><ul><li><p>1、枚举严格控制下游系统的传入内容，避免非法字符。</p></li><li><p>2、方便下游系统知道都可以传哪些值，不容易出错。</p></li></ul><p>不可否认，使用枚举确实有一些好处，但是我不建议使用主要有以下原因：</p><ul><li><p>1、如果二方库升级，并且删除了一个枚举中的部分枚举项，那么入参中使用枚举也会出现问题，调用方将无法识别该枚举项。</p></li><li><p>2、有的时候，上下游系统有多个，如C系统通过B系统间接调用A系统，A系统的参数是由C系统传过来的，B系统只是做了一个参数的转换与组装。这种情况下，一旦A系统的二方库升级，那么B和C都要同时升级，任何一个不升级都将无法兼容。</p></li></ul><p><strong>我其实建议大家在接口中使用字符串代替枚举</strong>，相比较于枚举这种强类型，字符串算是一种弱类型。</p><p>如果使用字符串代替RPC接口中的枚举，那么就可以避免上面我们提到的两个问题，上游系统只需要传递字符串就行了，而具体的值的合法性，只需要在A系统内自己进行校验就可以了。</p><p><strong>为了方便调用者使用，可以使用javadoc的@see注解表明这个字符串字段的取值从那个枚举中获取。</strong></p><pre><code>public Class AResponse{

    private Boolean success;

    /**
    *  @see AType 
    */
    private String aType;
}
</code></pre><p>对于像阿里这种比较庞大的互联网公司，<strong>随便提供出去的一个接口，可能有上百个调用方</strong>，而接口升级也是常态，<strong>我们根本做不到每次二方库升级之后要求所有调用者跟着一起升级</strong>，这是完全不现实的，并且对于有些调用者来说，他用不到新特性，完全没必要做升级。</p><p>还有一种看起来比较特殊，但是实际上比较常见的情况，就是有的时候一个接口的声明在A包中，而一些枚举常量定义在B包中，比较常见的就是阿里的交易相关的信息，订单分很多层次，每次引入一个包的同时都需要引入几十个包。</p><p>对于调用者来说，我肯定是不希望我的系统引入太多的依赖的，<strong>一方面依赖多了会导致应用的编译过程很慢，并且很容易出现依赖冲突问题。</strong></p><p>所以，在调用下游接口的时候，如果参数中字段的类型是枚举的话，那我没办法，必须得依赖他的二方库。但是如果不是枚举，只是一个字符串，那我就可以选择不依赖。</p><p>所以，我们在定义接口的时候，会尽量避免使用枚举这种强类型。规范中规定在返回值中不允许使用，而我自己要求更高，就是即使在接口的入参中我也很少使用。</p><p>最后，我只是不建议在对外提供的接口的出入参中使用枚举，并不是说彻底不要用枚举，我之前很多文章也提到过，枚举有很多好处，我在代码中也经常使用。所以，切不可因噎废食。</p><p>当然，文中的观点仅代表我个人，具体是是不是适用其他人，其他场景或者其他公司的实践，需要读者们自行分辨下，建议大家在使用的时候可以多思考一下。</p>`,52),s=[a];function r(c,l){return n(),p("div",null,s)}const i=e(o,[["render",r],["__file","stop-use-enum-in-api.html.vue"]]);export{i as default};
