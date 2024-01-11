import{_ as e,r as p,o,c as i,a as s,b as n,d as c,e as a}from"./app-3RcBQnkC.js";const l={},u=a(`<h1 id="使用spring-api进行验证" tabindex="-1"><a class="header-anchor" href="#使用spring-api进行验证" aria-hidden="true">#</a> 使用Spring API进行验证</h1><p>验证在任何时候都非常关键。考虑将数据验证作为业务逻辑开发有利也有弊，Spring 认为，验证不应该只在Web 端进行处理，在服务端也要进行相应的处理，可以防止脏数据存入数据库中，从而避免为运维同学和测试同学造成更大的困扰，因为数据造成的bug会更加难以发现，而且开发人员关注点也不会放在数据本身的问题上，所以做服务端的验证也是非常有必要的。 考虑到上面这些问题，Spring 提供了两种主要类型的验证：</p><ul><li>一个是实现<code>Validator</code> 接口来创建自定义验证器，用于服务端数据校验。</li><li>一种是通过Spring 对<code> Bean Validation</code> 支持实现的。</li></ul><h2 id="通过使用-spring-validator-接口进行验证" tabindex="-1"><a class="header-anchor" href="#通过使用-spring-validator-接口进行验证" aria-hidden="true">#</a> 通过使用 Spring Validator 接口进行验证</h2><p>Spring 提供 <code>Validator</code> 接口用于验证对象。Validator 接口通过使用 <code>Errors</code> 对象来工作，以便在验证时，验证器可以向 Errors 对象报告验证失败。下面是一个简单的 对象示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// get and set...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面一个例子为 Person 对象提供了一种验证方式，通过实现了 <code>org.springframework.validation.Validator</code> 接口 的两个方法:</p><ul><li><code>supports(Class)</code>: 表示此 Validator 是否能够验证提供的类的实例</li><li><code>validate(Object, org.springframework.validation.Errors)</code>: 验证给定的对象，如果验证错误，则注册具有给定 Errors 对象。</li></ul><p>实现一个 <code>Validator</code> 非常简单，而且Spring 也提供了 <code>ValidationUtils</code> 工具类帮助进行验证。下面是一个验证 Person 对象的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonValidator</span> <span class="token keyword">implements</span> <span class="token class-name">Validator</span> <span class="token punctuation">{</span>

    <span class="token comment">// 此 Validator 只验证 Person 实例</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Class</span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">Errors</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ValidationUtils</span><span class="token punctuation">.</span><span class="token function">rejectIfEmpty</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name.empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码示例中的静态方法 <code>rejectIfEmpty()</code> 方法用于拒绝name属性，当name 属性是 null 或者是 空串的时候。查看 ValidationUtils 文档关于它能够提供的功能。</p><p>然后再来编写配置类 <code>AppConfig</code>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.spring.validation&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d={href:"https://mp.weixin.qq.com/s?__biz=MzU2NDg0OTgyMA==&mid=2247483982&idx=1&sn=628c19492b92ae3dbba84a6bf598e03d&chksm=fc45ffbdcb3276ab4aebc84bd159fce7d3446c0f1494762e774434dcf127ab9a57ad173e1a45&token=1177970741&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>配置@ComponentScan 注解用于自动装配，默认是使用 <code>basePackages</code> 扫描指定包，字符串表示。</p><p>然后对上面的程序进行验证</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringValidationApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">PersonValidator</span> personValidator <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;personValidator&quot;</span><span class="token punctuation">,</span> <span class="token class-name">PersonValidator</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanPropertyBindingResult</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanPropertyBindingResult</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&quot;cxuan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ValidationUtils</span><span class="token punctuation">.</span><span class="token function">invokeValidator</span><span class="token punctuation">(</span>personValidator<span class="token punctuation">,</span>person<span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ObjectError</span><span class="token punctuation">&gt;</span></span> allErrors <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">getAllErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        allErrors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>e<span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是基于注解的配置，所以使用 <code>AnnotationConfigApplicationContext</code>上下文启动类，把配置类 AppConfig 当作参数，然后构建一个Person 类，为了测试验证有效性，把 name 设置为 null，然后通过上下问的 <code>getBean</code> 方法获得 personValidator 的实例，通过使用 <code>BeanPropertyBindingResult</code> 把 person 绑定为 <code>cxuan</code> 的名字，然后使用 <code>ValidationUtils</code> 工具类进行验证，最后把验证的结果进行检查。</p><p>上面程序经验证后的结果如下：</p><p>org.springframework.validation.ValidationUtils - Invoking validator [com.spring.validation.PersonValidator@37918c79] DEBUG org.springframework.validation.ValidationUtils - Validator found 1 errors name.empty</p><h2 id="使用-bean-validation-进行验证" tabindex="-1"><a class="header-anchor" href="#使用-bean-validation-进行验证" aria-hidden="true">#</a> 使用 Bean Validation 进行验证</h2><p>从 Spring4 开始，就已经实现对 JSR-349 Bean Validation 的全面支持。Bean Validation API 在 <code>javax.validation.constraints</code> 包中以 Java 注解(例如 @NonNull) 形式定义了一组可用域对象的约束。</p><p>通过使用 Bean Validation API ，可以避免耦合到特定的验证服务提供程序。Spring 对 Bean Validation API 提供了无缝支持，主要使用一些注解进行验证，下面一起来看一下</p><h3 id="定义对象属性上的验证约束" tabindex="-1"><a class="header-anchor" href="#定义对象属性上的验证约束" aria-hidden="true">#</a> 定义对象属性上的验证约束</h3><p>首先，将验证约束应用于域对象属性。使用maven 配置需要引入对应的依赖</p><div class="language-xml-dtd line-numbers-mode" data-ext="xml-dtd"><pre class="language-xml-dtd"><code>&lt;dependency&gt;
    &lt;groupId&gt;javax.validation&lt;/groupId&gt;
    &lt;artifactId&gt;validation-api&lt;/artifactId&gt;
    &lt;version&gt;1.1.0.Final&lt;/version&gt;
&lt;/dependency&gt;
    &lt;dependency&gt;
    &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
    &lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;
    &lt;version&gt;5.2.4.Final&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后定义了一些实体类，使用 <code>javax.validation.constraints</code> 包中的注释进行标注</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@NotNull</span>
    <span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span>min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>max <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> firstName<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> lastName<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@NotNull</span>
    <span class="token keyword">private</span> <span class="token class-name">Genre</span> genre<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Gender</span> gender<span class="token punctuation">;</span>

    get and set<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 firstName ，定义了两个约束，第一个约束由 <code>@NotNull</code> 进行控制，它表示该值不能为空。此外，<code>@Size</code>注解控制着 firstName 的长度在 2 - 60 之间。@NotNull 还用于 genre 属性。下面是<code>Genre</code> 和 <code>Gender</code> 的枚举类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Genre</span> <span class="token punctuation">{</span>

    <span class="token function">POP</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">JAZZ</span><span class="token punctuation">(</span><span class="token string">&quot;J&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">BLUES</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">COUNTRY</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Genre</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Gender</span> <span class="token punctuation">{</span>

    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token string">&quot;M&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token string">&quot;F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token class-name">Gender</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Genre 表示歌手所属的音乐类型，而 Gender 与音乐事业不相关，所以可以为空</p><h3 id="在-spring-中配置-bean-validation-支持" tabindex="-1"><a class="header-anchor" href="#在-spring-中配置-bean-validation-支持" aria-hidden="true">#</a> 在 Spring 中配置 Bean Validation 支持</h3><p>为了在 Spring 的 ApplicationContext 中配置对 Bean Validation API 的支持，可以在Spring 的配置中定义一个 <code>LocalValidatorFactoryBean</code> 的 bean如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.spring.validation&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ValidationConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">LocalValidatorFactoryBean</span> <span class="token function">validatorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LocalValidatorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个 <code>LocalValidatorFactoryBean</code> 的 bean 是必须的。默认情况下，Spring 会在类路径下搜索 <code>Hibernate Validator</code>库，验证它是否存在。</p><p>下面我们编写一个为 Singer 类提供验证服务的服务类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingerValidationService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Validator</span> validator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConstraintViolation</span><span class="token punctuation">&lt;</span><span class="token class-name">Singer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">validateSinger</span><span class="token punctuation">(</span><span class="token class-name">Singer</span> singer<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>singer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入一个 <code>javax.validation.Validator</code> 实例(请注意与 Spring 提供的 Validator 接口不同)。一旦定义了 LocalValidatorFactoryBean ,就可以在应用程序中的任意位置创建 Validator 的句柄。要在 POJO 上进行验证，需要调用 <code>validator.validate</code> 方法，验证结果以 <code>ConstraintViolation&lt;T&gt;</code> 接口的集合形式返回。下面是上面例子程序的验证</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBeanValidationTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ValidationConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SingerValidationService</span> singerBean <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">SingerValidationService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Singer</span> singer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singer<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singer<span class="token punctuation">.</span><span class="token function">setLastName</span><span class="token punctuation">(</span><span class="token string">&quot;xuan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singer<span class="token punctuation">.</span><span class="token function">setGenre</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singer<span class="token punctuation">.</span><span class="token function">setGender</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">validateSinger</span><span class="token punctuation">(</span>singer<span class="token punctuation">,</span>singerBean<span class="token punctuation">)</span><span class="token punctuation">;</span>

        applicationContext<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">validateSinger</span><span class="token punctuation">(</span><span class="token class-name">Singer</span> singer<span class="token punctuation">,</span><span class="token class-name">SingerValidationService</span> singerValidationService<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConstraintViolation</span><span class="token punctuation">&lt;</span><span class="token class-name">Singer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> violationSet <span class="token operator">=</span> singerValidationService<span class="token punctuation">.</span><span class="token function">validateSinger</span><span class="token punctuation">(</span>singer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">listViolations</span><span class="token punctuation">(</span>violationSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">listViolations</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConstraintViolation</span><span class="token punctuation">&lt;</span><span class="token class-name">Singer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> violations<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;violations.size() = &quot;</span> <span class="token operator">+</span> violations<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">ConstraintViolation</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Singer</span><span class="token punctuation">&gt;</span></span> violation <span class="token operator">:</span> violations<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Validation error for property : &quot;</span> <span class="token operator">+</span> violation<span class="token punctuation">.</span><span class="token function">getPropertyPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;with value : &quot;</span> <span class="token operator">+</span> violation<span class="token punctuation">.</span><span class="token function">getInvalidValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;with error message : &quot;</span> <span class="token operator">+</span> violation<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码构建了一个 Singer 类进行验证，因为 firstname 属性的要求是长度介于 2 - 60 之间并且不能为null，所以这里只用了一个字符验证，genre 属性不能为null，最核心的验证方法就是 <code>singerValidationService.validateSinger(singer).</code>方法，它会调用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConstraintViolation</span><span class="token punctuation">&lt;</span><span class="token class-name">Singer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">validateSinger</span><span class="token punctuation">(</span><span class="token class-name">Singer</span> singer<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>singer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进行验证，验证的结果返回的是 <code>ConstraintViolation&lt;Singler&gt; </code>类型，然后把对应的错误信息输出，上面的错误信息是</p><p>violations.size() = 2 Validation error for property : firstName with value : c with error message : 个数必须在2和60之间 Validation error for property : genre with value : null with error message : 不能为null</p><p>可以打印出两个错误，并输出错误的属性、值以及错误信息。</p>`,30);function k(v,m){const t=p("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("使用 @Configuration 注解声明此类为配置类(更多 @Configuration 的用法，请参照 "),s("a",d,[n("原创 | 我被面试官给虐懵了，竟然是因为我不懂Spring中的@Configuration"),c(t)]),n(" )")]),r])}const b=e(l,[["render",k],["__file","spring-databind.html.vue"]]);export{b as default};
