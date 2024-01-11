import{_ as t,r as p,o as e,c as o,a as s,b as n,d as c,w as l,e as i}from"./app-3RcBQnkC.js";const u="/code-note/assets/image-Nj9HKEJP.png",k={},r=s("h1",{id:"_5-20-java注解",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_5-20-java注解","aria-hidden":"true"},"#"),n(" 5.20 Java注解")],-1),d=s("p",null,"“二哥，这节讲注解吗？”三妹问。",-1),v=s("code",null,"@Override",-1),m=i('<p>三妹毫不犹豫地摇摇头，摆摆手，不好意思地承认自己的确没有自定义过。</p><p><img src="'+u+`" alt="Alt text"></p><p>“好吧，哥来告诉你吧。”</p><p>注解（Annotation）是在 Java 1.5 时引入的概念，同 class 和 interface 一样，也属于一种类型。注解提供了一系列数据用来装饰程序代码（类、方法、字段等），但是注解并不是所装饰代码的一部分，它对代码的运行效果没有直接影响，由编译器决定该执行哪些操作。</p><p>来看一段代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutowiredTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二，一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 <code>@Autowired</code> 这个注解了吧？它本来是为 Spring（后面会讲）容器注入 Bean 的，现在被我无情地扔在了字段 name 的身上，但这段代码所在的项目中并没有启用 Spring，意味着 <code>@Autowired</code> 注解此时只是一个摆设。</p><p>“既然只是个摆设，那你这个地方为什么还要用 <code>@Autowired</code> 呢？”三妹好奇地问。</p><p>“傻呀你，就是给你举个例子，证明：注解对代码的运行效果没有直接影响，明白我的用意了吧？”我毫不客气地说。</p><p>“哦。”三妹若有所思地说。</p><p>“认真听哈，接下来给你讲讲注解的生命周期。”我瞅了瞅三妹，看她是否在专注的听，然后继续说，“注解的生命周期有 3 种策略，定义在 RetentionPolicy 枚举中。”</p><p>1）SOURCE：在源文件中有效，被编译器丢弃。</p><p>2）CLASS：在编译器生成的字节码文件中有效，但在运行时会被处理类文件的 JVM 丢弃。</p><p>3）RUNTIME：在运行时有效。这也是注解生命周期中最常用的一种策略，它允许程序通过反射的方式访问注解，并根据注解的定义执行相应的代码。</p><p>“然后我们来讲注解装饰的目标。”我看三妹还在线，就继续说。</p><p>注解的目标定义了注解将适用于哪一种级别的 Java 代码上，有些注解只适用于方法，有些只适用于成员变量，有些只适用于类，有些则都适用。截止到 Java 9，注解的类型一共有 11 种，定义在 ElementType 枚举中。</p><p>1）TYPE：用于类、接口、注解、枚举</p><p>2）FIELD：用于字段（类的成员变量），或者枚举常量</p><p>3）METHOD：用于方法</p><p>4）PARAMETER：用于普通方法或者构造方法的参数</p><p>5）CONSTRUCTOR：用于构造方法</p><p>6）LOCAL_VARIABLE：用于变量</p><p>7）ANNOTATION_TYPE：用于注解</p><p>8）PACKAGE：用于包</p><p>9）TYPE_PARAMETER：用于泛型参数</p><p>10）TYPE_USE：用于声明语句、泛型或者强制转换语句中的类型</p><p>11）MODULE：用于模块</p><p>“哥，你将这些我都记不住，能不能直接开撸注解呀！！！！！”三妹不耐烦了。</p><p>“确实哈，说再多，都不如撸个注解来得让人心动。撸个什么样的注解呢？一个字段注解吧，它用来标记对象在序列化成 JSON 的时候要不要包含这个字段。”我笑着对三妹说，“怎么样？”</p><p>“好呀！”</p><p>“来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">JsonField</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）JsonField 注解的生命周期是 RUNTIME，也就是运行时有效。</p><p>2）JsonField 注解装饰的目标是 FIELD，也就是针对字段的。</p><p>3）创建注解需要用到 <code>@interface</code> 关键字。</p><p>4）JsonField 注解有一个参数，名字为 value，类型为 String，默认值为一个空字符串。</p><p>“为什么参数名要为 value 呢？有什么特殊的含义吗？”三妹问。</p><p>“当然是有的，value 允许注解的使用者提供一个无需指定名字的参数。举个例子，我们可以在一个字段上使用 <code>@JsonField(value = &quot;沉默王二&quot;)</code>，也可以把 <code>value =</code> 省略，变成 <code>@JsonField(&quot;沉默王二&quot;)</code>。”我说。</p><p>“那 <code>default &quot;&quot;</code> 有什么特殊含义吗？”三妹继续问。</p><p>“当然也是有的，它允许我们在一个字段上直接使用 <code>@JsonField</code>，而无需指定参数的名和值。”我回答说。</p><p>“明白了，那 <code>@JsonField</code> 注解已经撸好了，是不是可以使用它了呀？”三妹激动地说。</p><p>“嗯，假设有一个 Writer 类，他有 3 个字段，分别是 age、name 和 bookName，后 2 个是必须序列化的字段。就可以这样来用 <code>@JsonField</code> 注解。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JsonField</span><span class="token punctuation">(</span><span class="token string">&quot;writerName&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JsonField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bookName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> bookName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bookName <span class="token operator">=</span> bookName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// getter / setter</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Writer{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, bookName=&#39;&quot;</span> <span class="token operator">+</span> bookName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）name 上的 <code>@JsonField</code> 注解提供了显式的字符串值。</p><p>2）bookName 上的 <code>@JsonField</code> 注解使用了缺省项。</p><p>接下来，我们来编写序列化类 JsonSerializer，内容如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonSerializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> objectClass <span class="token operator">=</span> object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> jsonElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> objectClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">JsonField</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                jsonElements<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token function">getSerializedKey</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> field<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">toJsonString</span><span class="token punctuation">(</span>jsonElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getSerializedKey</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> annotationValue <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">JsonField</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationValue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> annotationValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJsonString</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> jsonMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> elementsString <span class="token operator">=</span> jsonMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>entry <span class="token operator">-&gt;</span> <span class="token string">&quot;\\&quot;&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;:\\&quot;&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">joining</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&quot;</span> <span class="token operator">+</span> elementsString <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“JsonSerializer 类的内容看起来似乎有点多啊，二哥，我有点看不懂。”三妹说。</p><p>“不要怕，我一点点来解释，直到你搞明白为止。”</p><p>1）<code>serialize()</code> 方法是用来序列化对象的，它接收一个 Object 类型的参数。<code>objectClass.getDeclaredFields()</code> 通过反射的方式获取对象声明的所有字段，然后进行 for 循环遍历。在 for 循环中，先通过 <code>field.setAccessible(true)</code> 将反射对象的可访问性设置为 true，供序列化使用（如果没有这个步骤的话，private 字段是无法获取的，会抛出 IllegalAccessException 异常）；再通过 <code>isAnnotationPresent()</code> 判断字段是否装饰了 <code>JsonField</code> 注解，如果是的话，调用 <code>getSerializedKey()</code> 方法，以及获取该对象上由此字段表示的值，并放入 jsonElements 中。</p><p>2）<code>getSerializedKey()</code> 方法用来获取字段上注解的值，如果注解的值是空的，则返回字段名。</p><p>3）<code>toJsonString()</code> 方法借助 Stream 流的方式返回格式化后的 JSON 字符串。Stream 流你还没有接触过，不过没关系，后面我再给你讲。</p><p>“现在是不是豁然开朗了？”我问三妹，看到三妹点了点头，我继续说，“接下来，我们来写一个测试类 JsonFieldTest。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonFieldTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Writer</span> cmower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Web全栈开发进阶之路&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">JsonSerializer</span><span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span>cmower<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;bookName&quot;:&quot;Web全栈开发进阶之路&quot;,&quot;writerName&quot;:&quot;沉默王二&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从结果上来看：</p><p>1）Writer 类的 age 字段没有装饰 <code>@JsonField</code> 注解，所以没有序列化。</p><p>2）Writer 类的 name 字段装饰了 <code>@JsonField</code> 注解，并且显示指定了字符串“writerName”，所以序列化后变成了 writerName。</p><p>3）Writer 类的 bookName 字段装饰了 <code>@JsonField</code> 注解，但没有显式指定值，所以序列化后仍然是 bookName。</p><p>“怎么样，三妹，是不是也不是特别难？”我对三妹说。</p><p>“撸个注解好像真没什么难度，但你接下来的那个 JsonSerializer 我还需要再消化一下。”三妹很认真地说。</p><p>“嗯，你好好复习下，我看会《编译原理》。”说完我拿起桌子边上的一本书就走了。</p><hr>`,64);function b(g,w){const a=p("RouterLink");return e(),o("div",null,[r,d,s("p",null,[n("“是的。”我说，“注解是 Java 中非常重要的一部分，但经常被忽视也是真的。之所以这么说是因为我们更倾向成为一名注解的使用者而不是创建者。"),v,n(" 注解用过吧？"),c(a,{to:"/toBeBetterJavaer/basic-extra-meal/override-overload.html"},{default:l(()=>[n("方法重写")]),_:1}),n("的时候用到过。但你知道怎么自定义一个注解吗？”")]),m])}const f=t(k,[["render",b],["__file","annotation.html.vue"]]);export{f as default};
