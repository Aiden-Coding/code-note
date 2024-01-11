import{_ as s,r as a,o as n,c as r,a as e,b as t,d as c,e as o}from"./app-3RcBQnkC.js";const u={},i=o('<p>fastjson大家一定都不陌生，这是阿里巴巴的开源一个JSON解析库，通常被用于将Java Bean和JSON 字符串之间进行转换。</p><p>前段时间，fastjson被爆出过多次存在漏洞，很多文章报道了这件事儿，并且给出了升级建议。</p><p>但是作为一个开发者，我更关注的是他为什么会频繁被爆漏洞？于是我带着疑惑，去看了下fastjson的releaseNote以及部分源代码。</p><p>最终发现，这其实和fastjson中的一个AutoType特性有关。</p><p>从2019年7月份发布的v1.2.59一直到2020年6月份发布的 v1.2.71 ，每个版本的升级中都有关于AutoType的升级。</p><p>下面是fastjson的官方releaseNotes 中，几次关于AutoType的重要升级：</p><blockquote><p>1.2.59发布，增强AutoType打开时的安全性 fastjson</p><p>1.2.60发布，增加了AutoType黑名单，修复拒绝服务安全问题 fastjson</p><p>1.2.61发布，增加AutoType安全黑名单 fastjson</p><p>1.2.62发布，增加AutoType黑名单、增强日期反序列化和JSONPath fastjson</p><p>1.2.66发布，Bug修复安全加固，并且做安全加固，补充了AutoType黑名单 fastjson</p><p>1.2.67发布，Bug修复安全加固，补充了AutoType黑名单 fastjson</p><p>1.2.68发布，支持GEOJSON，补充了AutoType黑名单。（<strong>引入一个safeMode的配置，配置safeMode后，无论白名单和黑名单，都不支持autoType。</strong>） fastjson</p><p>1.2.69发布，修复新发现高危AutoType开关绕过安全漏洞，补充了AutoType黑名单 fastjson</p><p>1.2.70发布，提升兼容性，补充了AutoType黑名单</p></blockquote><p>甚至在fastjson的开源库中，有一个Issue是建议作者提供不带autoType的版本：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/15938379635086.jpg" alt="-w747">￼</p><p>那么，什么是AutoType？为什么fastjson要引入AutoType？为什么AutoType会导致安全漏洞呢？本文就来深入分析一下。</p><h3 id="autotype-何方神圣" tabindex="-1"><a class="header-anchor" href="#autotype-何方神圣" aria-hidden="true">#</a> AutoType 何方神圣？</h3><p>fastjson的主要功能就是将Java Bean序列化成JSON字符串，这样得到字符串之后就可以通过数据库等方式进行持久化了。</p>',12),l={href:"https://www.hollischuang.com/archives/1140",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>其实，对于JSON框架来说，想要把一个Java对象转换成字符串，可以有两种选择：</p><ul><li>1、基于属性</li><li>2、基于setter/getter</li></ul><p>而我们所常用的JSON序列化框架中，FastJson和jackson在把对象序列化成json字符串的时候，是通过遍历出该类中的所有getter方法进行的。Gson并不是这么做的，他是通过反射遍历该类中的所有属性，并把其值序列化成json。</p><p>假设我们有以下一个Java类：</p><pre><code>class Store {
    private String name;
    private Fruit fruit;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Fruit getFruit() {
        return fruit;
    }
    public void setFruit(Fruit fruit) {
        this.fruit = fruit;
    }
}

interface Fruit {
}

class Apple implements Fruit {
    private BigDecimal price;
    //省略 setter/getter、toString等
}
</code></pre><p><strong>当我们要对他进行序列化的时候，fastjson会扫描其中的getter方法，即找到getName和getFruit，这时候就会将name和fruit两个字段的值序列化到JSON字符串中。</strong></p><p>那么问题来了，我们上面的定义的Fruit只是一个接口，序列化的时候fastjson能够把属性值正确序列化出来吗？如果可以的话，那么反序列化的时候，fastjson会把这个fruit反序列化成什么类型呢？</p><p>我们尝试着验证一下，基于(fastjson v 1.2.68)：</p><pre><code>Store store = new Store();
store.setName(&quot;Hollis&quot;);
Apple apple = new Apple();
apple.setPrice(new BigDecimal(0.5));
store.setFruit(apple);
String jsonString = JSON.toJSONString(store);
System.out.println(&quot;toJSONString : &quot; + jsonString);
</code></pre><p>以上代码比较简单，我们创建了一个store，为他指定了名称，并且创建了一个Fruit的子类型Apple，然后将这个store使用<code>JSON.toJSONString</code>进行序列化，可以得到以下JSON内容：</p><pre><code>toJSONString : {&quot;fruit&quot;:{&quot;price&quot;:0.5},&quot;name&quot;:&quot;Hollis&quot;}
</code></pre><p>那么，这个fruit的类型到底是什么呢，能否反序列化成Apple呢？我们再来执行以下代码：</p><pre><code>Store newStore = JSON.parseObject(jsonString, Store.class);
System.out.println(&quot;parseObject : &quot; + newStore);
Apple newApple = (Apple)newStore.getFruit();
System.out.println(&quot;getFruit : &quot; + newApple);
</code></pre><p>执行结果如下：</p><pre><code>toJSONString : {&quot;fruit&quot;:{&quot;price&quot;:0.5},&quot;name&quot;:&quot;Hollis&quot;}
parseObject : Store{name=&#39;Hollis&#39;, fruit={}}
Exception in thread &quot;main&quot; java.lang.ClassCastException: com.hollis.lab.fastjson.test.$Proxy0 cannot be cast to com.hollis.lab.fastjson.test.Apple
at com.hollis.lab.fastjson.test.FastJsonTest.main(FastJsonTest.java:26)
</code></pre><p>可以看到，在将store反序列化之后，我们尝试将Fruit转换成Apple，但是抛出了异常，尝试直接转换成Fruit则不会报错，如：</p><pre><code>Fruit newFruit = newStore.getFruit();
System.out.println(&quot;getFruit : &quot; + newFruit);
</code></pre><p>以上现象，我们知道，<strong>当一个类中包含了一个接口（或抽象类）的时候，在使用fastjson进行序列化的时候，会将子类型抹去，只保留接口（抽象类）的类型，使得反序列化时无法拿到原始类型。</strong></p><p>那么有什么办法解决这个问题呢，fastjson引入了AutoType，即在序列化的时候，把原始类型记录下来。</p><p>使用方法是通过<code>SerializerFeature.WriteClassName</code>进行标记，即将上述代码中的</p><pre><code>String jsonString = JSON.toJSONString(store);
</code></pre><p>修改成：</p><pre><code>String jsonString = JSON.toJSONString(store,SerializerFeature.WriteClassName);
</code></pre><p>即可，以上代码，输出结果如下：</p><pre><code>System.out.println(&quot;toJSONString : &quot; + jsonString);

{
    &quot;@type&quot;:&quot;com.hollis.lab.fastjson.test.Store&quot;,
    &quot;fruit&quot;:{
        &quot;@type&quot;:&quot;com.hollis.lab.fastjson.test.Apple&quot;,
        &quot;price&quot;:0.5
    },
    &quot;name&quot;:&quot;Hollis&quot;
}
</code></pre><p>可以看到，<strong>使用<code>SerializerFeature.WriteClassName</code>进行标记后，JSON字符串中多出了一个<code>@type</code>字段，标注了类对应的原始类型，方便在反序列化的时候定位到具体类型</strong></p><p>如上，将序列化后的字符串在反序列化，既可以顺利的拿到一个Apple类型，整体输出内容：</p><pre><code>toJSONString : {&quot;@type&quot;:&quot;com.hollis.lab.fastjson.test.Store&quot;,&quot;fruit&quot;:{&quot;@type&quot;:&quot;com.hollis.lab.fastjson.test.Apple&quot;,&quot;price&quot;:0.5},&quot;name&quot;:&quot;Hollis&quot;}
parseObject : Store{name=&#39;Hollis&#39;, fruit=Apple{price=0.5}}
getFruit : Apple{price=0.5}
</code></pre><p>这就是AutoType，以及fastjson中引入AutoType的原因。</p><p>但是，也正是这个特性，因为在功能设计之初在安全方面考虑的不够周全，也给后续fastjson使用者带来了无尽的痛苦</p><h3 id="autotype-何错之有" tabindex="-1"><a class="header-anchor" href="#autotype-何错之有" aria-hidden="true">#</a> AutoType 何错之有？</h3><p>因为有了autoType功能，那么fastjson在对JSON字符串进行反序列化的时候，就会读取<code>@type</code>到内容，试图把JSON内容反序列化成这个对象，并且会调用这个类的setter方法。</p><p>那么就可以利用这个特性，自己构造一个JSON字符串，并且使用<code>@type</code>指定一个自己想要使用的攻击类库。</p><p>举个例子，黑客比较常用的攻击类库是<code>com.sun.rowset.JdbcRowSetImpl</code>，这是sun官方提供的一个类库，这个类的dataSourceName支持传入一个rmi的源，当解析这个uri的时候，就会支持rmi远程调用，去指定的rmi地址中去调用方法。</p><p>而fastjson在反序列化时会调用目标类的setter方法，那么如果黑客在JdbcRowSetImpl的dataSourceName中设置了一个想要执行的命令，那么就会导致很严重的后果。</p><p>如通过以下方式定一个JSON串，即可实现远程命令执行（在早期版本中，新版本中JdbcRowSetImpl已经被加了黑名单）</p><pre><code>{&quot;@type&quot;:&quot;com.sun.rowset.JdbcRowSetImpl&quot;,&quot;dataSourceName&quot;:&quot;rmi://localhost:1099/Exploit&quot;,&quot;autoCommit&quot;:true}
</code></pre><p><strong>这就是所谓的远程命令执行漏洞，即利用漏洞入侵到目标服务器，通过服务器执行命令。</strong></p><p>在早期的fastjson版本中（v1.2.25 之前），因为AutoType是默认开启的，并且也没有什么限制，可以说是裸着的。</p><p>从v1.2.25开始，fastjson默认关闭了autotype支持，并且加入了checkAutotype，加入了黑名单+白名单来防御autotype开启的情况。</p><p>但是，也是从这个时候开始，黑客和fastjson作者之间的博弈就开始了。</p><p>因为fastjson默认关闭了autotype支持，并且做了黑白名单的校验，所以攻击方向就转变成了&quot;如何绕过checkAutotype&quot;。</p><p>下面就来细数一下各个版本的fastjson中存在的漏洞以及攻击原理，<strong>由于篇幅限制，这里并不会讲解的特别细节，如果大家感兴趣我后面可以单独写一篇文章讲讲细节</strong>。下面的内容主要是提供一些思路，目的是说明写代码的时候注意安全性的重要性。</p><h4 id="绕过checkautotype-黑客与fastjson的博弈" tabindex="-1"><a class="header-anchor" href="#绕过checkautotype-黑客与fastjson的博弈" aria-hidden="true">#</a> 绕过checkAutotype，黑客与fastjson的博弈</h4><p>在fastjson v1.2.41 之前，在checkAutotype的代码中，会先进行黑白名单的过滤，如果要反序列化的类不在黑白名单中，那么才会对目标类进行反序列化。</p><p>但是在加载的过程中，fastjson有一段特殊的处理，那就是在具体加载类的时候会去掉className前后的<code>L</code>和<code>;</code>，形如<code>Lcom.lang.Thread;</code>。</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/15938462506312.jpg" alt="-w853">￼</p><p>而黑白名单又是通过startWith检测的，那么黑客只要在自己想要使用的攻击类库前后加上<code>L</code>和<code>;</code>就可以绕过黑白名单的检查了，也不耽误被fastjson正常加载。</p><p>如<code>Lcom.sun.rowset.JdbcRowSetImpl;</code>，会先通过白名单校验，然后fastjson在加载类的时候会去掉前后的<code>L</code>和<code>;</code>，变成了<code>com.sun.rowset.JdbcRowSetImpl</code>。</p><p>为了避免被攻击，在之后的 v1.2.42版本中，在进行黑白名单检测的时候，fastjson先判断目标类的类名的前后是不是<code>L</code>和<code>;</code>，如果是的话，就截取掉前后的<code>L</code>和<code>;</code>再进行黑白名单的校验。</p><p>看似解决了问题，但是黑客发现了这个规则之后，就在攻击时在目标类前后双写<code>LL</code>和<code>;;</code>，这样再被截取之后还是可以绕过检测。如<code>LLcom.sun.rowset.JdbcRowSetImpl;;</code></p><p>魔高一尺，道高一丈。在 v1.2.43中，fastjson这次在黑白名单判断之前，增加了一个是否以<code>LL</code>开头的判断，如果目标类以<code>LL</code>开头，那么就直接抛异常，于是就又短暂的修复了这个漏洞。</p><p>黑客在<code>L</code>和<code>;</code>这里走不通了，于是想办法从其他地方下手，因为fastjson在加载类的时候，不只对<code>L</code>和<code>;</code>这样的类进行特殊处理，还对<code>[</code>特殊处理了。</p><p>同样的攻击手段，在目标类前面添加<code>[</code>，v1.2.43以前的所有版本又沦陷了。</p><p>于是，在 v1.2.44版本中，fastjson的作者做了更加严格的要求，只要目标类以<code>[</code>开头或者以<code>;</code>结尾，都直接抛异常。也就解决了 v1.2.43及历史版本中发现的bug。</p><p>在之后的几个版本中，黑客的主要的攻击方式就是绕过黑名单了，而fastjson也在不断的完善自己的黑名单。</p><h4 id="autotype不开启也能被攻击" tabindex="-1"><a class="header-anchor" href="#autotype不开启也能被攻击" aria-hidden="true">#</a> autoType不开启也能被攻击？</h4><p>但是好景不长，在升级到 v1.2.47 版本时，黑客再次找到了办法来攻击。而且这个攻击只有在autoType关闭的时候才生效。</p><p>是不是很奇怪，autoType不开启反而会被攻击。</p><p>因为**在fastjson中有一个全局缓存，在类加载的时候，如果autotype没开启，会先尝试从缓存中获取类，如果缓存中有，则直接返回。**黑客正是利用这里机制进行了攻击。</p><p>黑客先想办法把一个类加到缓存中，然后再次执行的时候就可以绕过黑白名单检测了，多么聪明的手段。</p><p>首先想要把一个黑名单中的类加到缓存中，需要使用一个不在黑名单中的类，这个类就是<code>java.lang.Class</code></p><p><code>java.lang.Class</code>类对应的deserializer为MiscCodec，反序列化时会取json串中的val值并加载这个val对应的类。</p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/1-300x116.png" alt="" width="300" height="116" class="aligncenter size-medium wp-image-5198"><p>如果fastjson cache为true，就会缓存这个val对应的class到全局缓存中</p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/2-1-300x84.png" alt="" width="300" height="84" class="aligncenter size-medium wp-image-5199"><p>如果再次加载val名称的类，并且autotype没开启，下一步就是会尝试从全局缓存中获取这个class，进而进行攻击。</p><p>所以，黑客只需要把攻击类伪装以下就行了，如下格式：</p><pre><code>{&quot;@type&quot;: &quot;java.lang.Class&quot;,&quot;val&quot;: &quot;com.sun.rowset.JdbcRowSetImpl&quot;}
</code></pre><p>于是在 v1.2.48中，fastjson修复了这个bug，在MiscCodec中，处理Class类的地方，设置了fastjson cache为false，这样攻击类就不会被缓存了，也就不会被获取到了。</p><p>在之后的多个版本中，黑客与fastjson又继续一直都在绕过黑名单、添加黑名单中进行周旋。</p><p>直到后来，黑客在 v1.2.68之前的版本中又发现了一个新的漏洞利用方式。</p><h4 id="利用异常进行攻击" tabindex="-1"><a class="header-anchor" href="#利用异常进行攻击" aria-hidden="true">#</a> 利用异常进行攻击</h4><p>在fastjson中， 如果，@type 指定的类为 Throwable 的子类，那对应的反序列化处理类就会使用到 ThrowableDeserializer</p><p>而在ThrowableDeserializer#deserialze的方法中，当有一个字段的key也是 @type时，就会把这个 value 当做类名，然后进行一次 checkAutoType 检测。</p><p>并且指定了expectClass为Throwable.class，但是<strong>在checkAutoType中，有这样一约定，那就是如果指定了expectClass ，那么也会通过校验。</strong></p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/15938495572144.jpg" alt="-w869">￼</p><p>因为fastjson在反序列化的时候会尝试执行里面的getter方法，而Exception类中都有一个getMessage方法。</p><p>黑客只需要自定义一个异常，并且重写其getMessage就达到了攻击的目的。</p><p><strong>这个漏洞就是6月份全网疯传的那个&quot;严重漏洞&quot;，使得很多开发者不得不升级到新版本。</strong></p><p>这个漏洞在 v1.2.69中被修复，主要修复方式是对于需要过滤掉的expectClass进行了修改，新增了4个新的类，并且将原来的Class类型的判断修改为hash的判断。</p><p>其实，根据fastjson的官方文档介绍，即使不升级到新版，在v1.2.68中也可以规避掉这个问题，那就是使用safeMode</p><h3 id="autotype-安全模式" tabindex="-1"><a class="header-anchor" href="#autotype-安全模式" aria-hidden="true">#</a> AutoType 安全模式？</h3><p>可以看到，这些漏洞的利用几乎都是围绕AutoType来的，于是，在 v1.2.68版本中，引入了safeMode，配置safeMode后，无论白名单和黑名单，都不支持autoType，可一定程度上缓解反序列化Gadgets类变种攻击。</p><p>设置了safeMode后，@type 字段不再生效，即当解析形如{&quot;@type&quot;: &quot;com.java.class&quot;}的JSON串时，将不再反序列化出对应的类。</p><p>开启safeMode方式如下：</p><pre><code>ParserConfig.getGlobalInstance().setSafeMode(true);
</code></pre><p>如在本文的最开始的代码示例中，使用以上代码开启safeMode模式，执行代码，会得到以下异常：</p><pre><code>Exception in thread &quot;main&quot; com.alibaba.fastjson.JSONException: safeMode not support autoType : com.hollis.lab.fastjson.test.Apple
at com.alibaba.fastjson.parser.ParserConfig.checkAutoType(ParserConfig.java:1244)
</code></pre><p>但是值得注意的是，使用这个功能，fastjson会直接禁用autoType功能，即在checkAutoType方法中，直接抛出一个异常。</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/15938532891003.jpg" alt="-w821">￼</p><h3 id="后话" tabindex="-1"><a class="header-anchor" href="#后话" aria-hidden="true">#</a> 后话</h3><p>目前fastjson已经发布到了 v1.2.72版本，历史版本中存在的已知问题在新版本中均已修复。</p><p>开发者可以将自己项目中使用的fastjson升级到最新版，并且如果代码中不需要用到AutoType的话，可以考虑使用safeMode，但是要评估下对历史代码的影响。</p><p>因为<strong>fastjson自己定义了序列化工具类，并且使用asm技术避免反射、使用缓存、并且做了很多算法优化等方式，大大提升了序列化及反序列化的效率。</strong></p><p>之前有网友对比过：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/07/15938545656293.jpg" alt="-w808">￼</p><p>当然，<strong>快的同时也带来了一些安全性问题，这是不可否认的。</strong></p><p>最后，其实我还想说几句，虽然fastjson是阿里巴巴开源出来的，但是据我所知，这个项目大部分时间都是其作者温少一个人在靠业余时间维护的。</p><p>知乎上有网友说：&quot;<strong>温少几乎凭一己之力撑起了一个被广泛使用JSON库，而其他库几乎都是靠一整个团队，就凭这一点，温少作为“初心不改的阿里初代开源人”，当之无愧。</strong>&quot;</p><p>其实，关于fastjson漏洞的问题，阿里内部也有很多人诟病过，但是诟病之后大家更多的是给予<strong>理解</strong>和<strong>包容</strong>。</p><p>fastjson目前是国产类库中比较出名的一个，可以说是倍受关注，所以渐渐成了安全研究的重点，所以会有一些深度的漏洞被发现。就像温少自己说的那样：</p><p>&quot;和发现漏洞相比，更糟糕的是有漏洞不知道被人利用。及时发现漏洞并升级版本修复是安全能力的一个体现。&quot;</p><p>就在我写这篇文章的时候，在钉钉上问了温少一个问题，他竟然秒回，这令我很惊讶。因为那天是周末，周末钉钉可以做到秒回，这说明了什么？</p><p>他大概率是在利用自己的业余维护fastjson吧...</p><p>最后，知道了fastjson历史上很多漏洞产生的原因之后，其实对我自己来说，我是&quot;更加敢用&quot;fastjson了...</p><p>致敬fastjson！致敬安全研究者！致敬温少！</p><p>参考资料：</p><p>https://github.com/alibaba/fastjson/releases</p><p>https://github.com/alibaba/fastjson/wiki/security_update_20200601</p><p>https://paper.seebug.org/1192/</p><p>https://mp.weixin.qq.com/s/EXnXCy5NoGIgpFjRGfL3wQ</p><p>http://www.lmxspace.com/2019/06/29/FastJson-反序列化学习</p>`,113);function f(h,g){const p=a("ExternalLinkIcon");return n(),r("div",null,[i,e("p",null,[t("但是，fastjson在序列化以及反序列化的过程中并没有使用"),e("a",l,[t("Java自带的序列化机制"),c(p)]),t("，而是自定义了一套机制。")]),d])}const m=s(u,[["render",f],["__file","bug-in-fastjson.html.vue"]]);export{m as default};
