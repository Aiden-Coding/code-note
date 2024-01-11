import{_ as e,r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"字节码编程-byte-buddy篇二《监控方法执行耗时动态获取出入参类型和值》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字节码编程-byte-buddy篇二《监控方法执行耗时动态获取出入参类型和值》","aria-hidden":"true"},"#"),s(" 字节码编程，Byte-buddy篇二《监控方法执行耗时动态获取出入参类型和值》")],-1),k=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},r=p('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p><strong>案例</strong>是剥去外衣包装展示出核心功能的最佳学习方式！</p><p>就像是我们研究字节码编程最终是需要应用到实际场景中，例如：实现一款非入侵的全链路最终监控系统，那么这里就会包括一些基本的核心功能点；<code>方法执行耗时</code>、<code>出入参获取</code>、<code>异常捕获</code>、<code>添加链路ID</code>等等。而这些一个个的功能点，最快的掌握方式就是去实现他最基本的功能验证，这个阶段基本也是技术选型的阶段，验证各项技术点是否可以满足你后续开发的需求。否则在后续开发中，如果已经走了很远的时候再发现不适合，那么到时候就很麻烦了。</p>',4),m=n("code",null,"ASM",-1),v=n("code",null,"Javassist",-1),b=n("em",null,"字节码控制",-1),h=n("code",null,"ASM",-1),g=n("code",null,"Java虚拟机规范",-1),y=n("code",null,"ASM",-1),f=n("strong",null,"关于这部分系列文章可以访问链接进行专题系列的学习",-1),_={href:"https://bugstack.cn/itstack/itstack-demo-bytecode.html",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,[n("strong",null,"那么"),s("，本章节我们会使用 "),n("code",null,"Byte-buddy"),s(" 来实现这一功能，在接下来的操作中你会感受到这个字节码框架的魅力，它的"),n("em",null,"API"),s("更加高级也更符合普遍易接受的操作方式进行处理。")],-1),w=n("h2",{id:"二、开发环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二、开发环境","aria-hidden":"true"},"#"),s(" 二、开发环境")],-1),j=n("li",null,"JDK 1.8.0",-1),S=n("li",null,"byte-buddy 1.10.9",-1),x=n("li",null,"byte-buddy-agent 1.10.9",-1),M=n("code",null,"itstack-demo-bytecode-2-02",-1),T=n("strong",null,"公众号",-1),B={href:"https://bugstack.cn/assets/images/qrcode.png",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"bugstack虫洞栈",-1),O=n("code",null,"你会获得一个下载链接列表，打开后里面的第17个「因为我有好多开源代码」",-1),C=n("code",null,"Star",-1),D=p(`<h2 id="三、案例目标" tabindex="-1"><a class="header-anchor" href="#三、案例目标" aria-hidden="true">#</a> 三、案例目标</h2><p>在这里我们定义一个类并创建出等待被监控的方法，当方法执行时监控方法的各项信息；<code>执行耗时</code>、<code>出入参信息</code>等。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BizMethod</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> uid<span class="token punctuation">,</span> <span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;德莱联盟，王牌工程师。小傅哥(公众号：bugstack虫洞栈)，申请出栈！&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们这里模拟监控并没有使用 <code>Javaagent</code> 去做字节码加载时的增强，主要为了将<strong>最核心</strong>的内容体现出来。后续的章节会陆续讲解各个核心功能的组合使用，做出一套监控系统。</li></ul><h2 id="四、技术实现" tabindex="-1"><a class="header-anchor" href="#四、技术实现" aria-hidden="true">#</a> 四、技术实现</h2><p>在技术实现的过程中，我会陆续的将需要监控的内容一步步完善。这样将一个总体的内容进行拆解后，方便学习和理解。</p><h3 id="_1-创建监控主体类" tabindex="-1"><a class="header-anchor" href="#_1-创建监控主体类" aria-hidden="true">#</a> 1. 创建监控主体类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test_byteBuddy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">DynamicType<span class="token punctuation">.</span>Unloaded</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> dynamicType <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteBuddy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">subclass</span><span class="token punctuation">(</span><span class="token class-name">BizMethod</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">named</span><span class="token punctuation">(</span><span class="token string">&quot;queryUserInfo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">MethodDelegation</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token class-name">MonitorDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 加载类</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> dynamicType<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">ApiTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">getLoaded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

    <span class="token comment">// 反射调用</span>
    clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;queryUserInfo&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;10001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Adhl9dkl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这一部分是 <code>Byte Buddy</code> 的模版代码，定义需要被加载的类和方法；<em>BizMethod.class</em>、<em>ElementMatchers.named(&quot;queryUserInfo&quot;)</em>，这一步也就是让程序可以定位到你的被监控内容。</li><li>接下来就是最重要的一部分<strong>委托</strong>；<code>MethodDelegation.to(MonitorDemo.class)</code>，最终所有的监控操作都会被 <code>MonitorDemo.class</code> 类中的方法进行处理。</li><li>最后就是类的加载和反射调用，这部分主要用于每次的测试验证。<em>查找方法，传递对象和入参信息</em></li></ul><h3 id="_2-监控方法耗时" tabindex="-1"><a class="header-anchor" href="#_2-监控方法耗时" aria-hidden="true">#</a> 2. 监控方法耗时</h3><p>如上一步所述这里主要需要使用到，委托类进行控制监控信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MonitorDemo</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RuntimeType</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token annotation punctuation">@SuperCall</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> callable<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> callable<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法耗时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里面包括几个核心的知识点；<code>@RuntimeType</code>：定义运行时的目标方法。<code>@SuperCall</code>：用于调用父类版本的方法。</li><li>定义好方法后，下面有一个 <code>callable.call();</code> 这个方法是调用原方法的内容，返回结果。而前后包装的。</li><li>最后在<code>finally</code>中，打印方法的执行耗时。<code>System.currentTimeMillis() - start</code></li></ul><p><strong>测试结果：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>方法耗时：<span class="token number">419</span>ms

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-获取方法信息" tabindex="-1"><a class="header-anchor" href="#_3-获取方法信息" aria-hidden="true">#</a> 3. 获取方法信息</h3><p>获取方法信息的过程其实就是在获取方法的描述内容，也就是你编写的方法拆解为各个内容进行输出。那么为了实现这样的功能我们需要使用到新的注解 <code>@Origin Method method</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RuntimeType</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Origin</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token annotation punctuation">@SuperCall</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> callable<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> resObj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        resObj <span class="token operator">=</span> callable<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> resObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法名称：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;入参个数：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;入参类型：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;、&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出参类型：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getReturnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出参结果：&quot;</span> <span class="token operator">+</span> resObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法耗时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@Origin</code>，用于拦截原有方法，这样就可以获取到方法中的相关信息。</li><li>这一部分的信息相对来说比较全，尤其也获取到了参数的个数和类型，这样就可以在后续的处理参数时进行循环输出。</li></ul><p><strong>测试结果：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>方法名称：queryUserInfo
入参个数：<span class="token number">2</span>
入参类型：<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>、<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>
出参类型：<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>
出参结果：德莱联盟，王牌工程师。小傅哥<span class="token punctuation">(</span>公众号：bugstack虫洞栈<span class="token punctuation">)</span>，申请出栈！
方法耗时：<span class="token number">490</span>ms

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-获取入参内容" tabindex="-1"><a class="header-anchor" href="#_4-获取入参内容" aria-hidden="true">#</a> 4. 获取入参内容</h3><p>当我们能获取入参的基本描述以后，再者就是获取入参的内容。在一段方法执行的过程中，如果可以在必要的时候拿到当时入参的信息，那么就可以非常方便的进行排查异常快速定位问题。在这里我们会用到新的注解；<code>@AllArguments</code> 、<code>@Argument(0)</code>，一个用于获取全部参数，一个获取指定的参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RuntimeType</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Origin</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token annotation punctuation">@AllArguments</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token annotation punctuation">@Argument</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token class-name">Object</span> arg0<span class="token punctuation">,</span> <span class="token annotation punctuation">@SuperCall</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> callable<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> resObj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        resObj <span class="token operator">=</span> callable<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> resObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法名称：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;入参个数：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;入参类型：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;、&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;入参内容：&quot;</span> <span class="token operator">+</span> arg0 <span class="token operator">+</span> <span class="token string">&quot;、&quot;</span> <span class="token operator">+</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出参类型：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getReturnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出参结果：&quot;</span> <span class="token operator">+</span> resObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法耗时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>与上面的代码块相比，多了参数的获取和打印。主要知道这个方法就可以很方便的获取入参的内容。</li></ul><p><strong>测试结果：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>方法名称：queryUserInfo
入参个数：<span class="token number">2</span>
入参类型：<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>、<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>
入参内容：<span class="token number">10001</span>、<span class="token class-name">Adhl9dkl</span>
出参类型：<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span>
出参结果：德莱联盟，王牌工程师。小傅哥<span class="token punctuation">(</span>公众号：bugstack虫洞栈<span class="token punctuation">)</span>，申请出栈！
方法耗时：<span class="token number">405</span>ms

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-其他注解汇总" tabindex="-1"><a class="header-anchor" href="#_5-其他注解汇总" aria-hidden="true">#</a> 5. 其他注解汇总</h3><p>除了以上为了获取方法的执行信息使用到的注解外，<code>Byte Buddy</code> 还提供了很多其他的注解。如下；</p><table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@Argument</td><td>绑定单个参数</td></tr><tr><td>@AllArguments</td><td>绑定所有参数的数组</td></tr><tr><td>@This</td><td>当前被拦截的、动态生成的那个对象</td></tr><tr><td>@Super</td><td>当前被拦截的、动态生成的那个对象的父类对象</td></tr><tr><td>@Origin</td><td>可以绑定到以下类型的参数：Method 被调用的原始方法 Constructor 被调用的原始构造器 Class 当前动态创建的类 MethodHandle MethodType String 动态类的toString()的返回值 int 动态方法的修饰符</td></tr><tr><td>@DefaultCall</td><td>调用默认方法而非super的方法</td></tr><tr><td>@SuperCall</td><td>用于调用父类版本的方法</td></tr><tr><td>@Super</td><td>注入父类型对象，可以是接口，从而调用它的任何方法</td></tr><tr><td>@RuntimeType</td><td>可以用在返回值、参数上，提示ByteBuddy禁用严格的类型检查</td></tr><tr><td>@Empty</td><td>注入参数的类型的默认值</td></tr><tr><td>@StubValue</td><td>注入一个存根值。对于返回引用、void的方法，注入null；对于返回原始类型的方法，注入0</td></tr><tr><td>@FieldValue</td><td>注入被拦截对象的一个字段的值</td></tr><tr><td>@Morph</td><td>类似于@SuperCall，但是允许指定调用参数</td></tr></tbody></table><h3 id="_6-常用核心api" tabindex="-1"><a class="header-anchor" href="#_6-常用核心api" aria-hidden="true">#</a> 6. 常用核心API</h3><ol><li><p><code>ByteBuddy</code></p><ul><li>流式API方式的入口类</li><li>提供Subclassing/Redefining/Rebasing方式改写字节码</li><li>所有的操作依赖DynamicType.Builder进行,创建不可变的对象</li></ul></li><li><p><code>ElementMatchers(ElementMatcher)</code></p><ul><li>提供一系列的元素匹配的工具类(named/any/nameEndsWith等等)</li><li>ElementMatcher(提供对类型、方法、字段、注解进行matches的方式,类似于Predicate)</li><li>Junction对多个ElementMatcher进行了and/or操作</li></ul></li><li><p><code>DynamicType</code>(动态类型,所有字节码操作的开始,非常值得关注)</p><ul><li>Unloaded(动态创建的字节码还未加载进入到虚拟机,需要类加载器进行加载)</li><li>Loaded(已加载到jvm中后,解析出Class表示)</li><li>Default(DynamicType的默认实现,完成相关实际操作)</li></ul></li><li><p><code>Implementation</code>(用于提供动态方法的实现)</p><ul><li>FixedValue(方法调用返回固定值)</li><li>MethodDelegation(方法调用委托,支持两种方式: Class的static方法调用、object的instance method方法调用)</li></ul></li><li><p><code>Builder</code>(用于创建DynamicType,相关接口以及实现后续待详解)</p><ul><li>MethodDefinition</li><li>FieldDefinition</li><li>AbstractBase</li></ul></li></ol><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>`,33),I=n("li",null,"在这一章节的实现过程来看，只要知道相关API就可以很方便的解决我们的监控方法信息的诉求，他所处理的方式非常易于使用。而在本章节中也要学会几个关键知识点；委托、方法注解、返回值注解以及入参注解。",-1),E=n("code",null,"Javaagent",-1),z={href:"https://tianchi.aliyun.com/competition/entrance/231790/introduction",target:"_blank",rel:"noopener noreferrer"},P=n("li",null,[n("strong",null,"最佳的学习体验和方式"),s("是，在学习和探索的过程中不断的对知识进行深度的学习，通过一个个实践的方式让知识成结构化和体系的建设。")],-1);function N(R,U){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("作者：小傅哥 "),k,s("博客："),n("a",d,[s("https://bugstack.cn"),t(a)])]),r,n("p",null,[s("在前面的"),m,s("、"),v,s(" 章节中也有陆续实现过获取方法的出入参信息，但实现的方式还是偏向于"),b,s("，尤其"),h,s("，更是需要使用到字节码指令将入参信息压栈操作保存到局部变量用于输出，在这个过程中需要深入了解"),g,s("，否则很不好完成这一项的开发。但！"),y,s("也是性能最牛的。其他的字节码编程框架都是基于它所开发的。"),f,s("："),n("a",_,[s("https://bugstack.cn/itstack/itstack-demo-bytecode.html"),t(a)])]),q,w,n("ol",null,[j,S,x,n("li",null,[s("本章涉及源码在："),M,s("，可以关注"),T,s("："),n("a",B,[A,t(a)]),s("，回复源码下载获取。"),O,s("，记得给个"),C,s("！")])]),D,n("ul",null,[I,n("li",null,[s("当我们学会了监控的核心功能，在后续与"),E,s("结合使用时就可以很容易扩展进去，而不是看到了陌生的代码。对于这一部分非入侵的入侵链路监控，也是目前比较热门的话题和需要探索的解决方案，就像最近阿里云也举办了类似的编程挑战赛。"),n("a",z,[s("首届云原生编程挑战赛1：实现一个分布式统计和过滤的链路追踪"),t(a)])]),P])])}const J=e(i,[["render",N],["__file","2020-05-12-zijiemabiancheng，Byte-buddypianer《jiankongfangfazhixinghaoshidongtaihuoquchurucanleixinghezhi》.html.vue"]]);export{J as default};
