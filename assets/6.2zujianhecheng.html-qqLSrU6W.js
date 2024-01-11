import{_ as n,o as s,c as a,e as p}from"./app-3RcBQnkC.js";const t={},e=p(`<h1 id="_6-2-组件合成" tabindex="-1"><a class="header-anchor" href="#_6-2-组件合成" aria-hidden="true">#</a> 6.2 组件合成</h1><p>到现在为止，我们只是看到了如何创建和转换 ClassNode 对象，但还没有看到如何由一个类的字节数组表示来构造一个 ClassNode，或者反过来，由 ClassNode 构造这个字节数组。事实上，这一功能可以通过合成核心 API 和树 API 组件来完成，本节就来解释这一内容。</p><h2 id="_6-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_6-2-1-介绍" aria-hidden="true">#</a> 6.2.1 介绍</h2><p>除了图 6.1 所示的字段之外，ClassNode 类扩展了 ClassVisitor 类，还提供了一个 accept 方法，它以一个 ClassVisitor 为参数。Accept 方法基于 ClassNode 字段值生成事件，而 ClassVisitor 方法执行逆操作，即根据接到的事件设定 ClassNode 字段：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassNode</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token keyword">int</span> version<span class="token punctuation">,</span> <span class="token keyword">int</span> access<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span>
                      <span class="token class-name">String</span> signature<span class="token punctuation">,</span> <span class="token class-name">String</span> superName<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>version <span class="token operator">=</span> version<span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>access <span class="token operator">=</span> access<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>signature <span class="token operator">=</span> signature<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">ClassVisitor</span> cv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cv<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span>version<span class="token punctuation">,</span> access<span class="token punctuation">,</span> name<span class="token punctuation">,</span> signature<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要由字节数组构建 ClassNode，可以将它与 ClassReader 合在一起，使 ClassReader 生成的事件可供 ClassNode 组件使用，从而初始化其字段（由上述代码可以看出）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClassNode</span> cn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ClassReader</span> cr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassReader</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
cr<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>cn<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反过来，可以将 ClassNode 转换为其字节数组表示，只需将它与 ClassWriter 合在一起即可，从而使 ClassNode 的 accept 方法生成的事件可供 ClassWriter 使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClassWriter</span> cw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassWriter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
cn<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>cw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> cw<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-2-模式" tabindex="-1"><a class="header-anchor" href="#_6-2-2-模式" aria-hidden="true">#</a> 6.2.2 模式</h2><p>要用树 API 转换类，可以将这些元素放在一起：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClassNode</span> cn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassNode</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ClassReader</span> cr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassReader</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
cr<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>cn<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 可以在这里根据需要转换 cn </span>
<span class="token class-name">ClassWriter</span> cw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassWriter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
cn<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>cw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> cw<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可能与核心 API 一起使用基于树的类转换器，比如类适配器。有两种常见模式可用于此种情景。第一种模式使用继承：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClassAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">ClassNode</span> <span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token class-name">MyClassAdapter</span><span class="token punctuation">(</span><span class="token class-name">ClassVisitor</span> cv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>cv <span class="token operator">=</span> cv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span> 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// put your transformation code here</span>
        <span class="token function">accept</span><span class="token punctuation">(</span>cv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当这个类适配器用在一个经典的转换链时：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClassWriter</span> cw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassWriter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ClassVisitor</span> ca <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClassAdapter</span><span class="token punctuation">(</span>cw<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ClassReader</span> cr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassReader</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
cr<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>ca<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> cw<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cr 生成的事件供 ClassNode ca 使用，从而初始化这个对象的字段。最后，在使用 visitEnd 事件时，ca 执行转换，并通过调用其 accept 方法，生成与所转换类对应的新事件，然后由 cw 使用。如果假定 ca 改变了类版本，则相应原程序图如图 6.2 所示。</p><p><img src="https://bugstack.cn/assets/images/bytecode/asm-document/6.2-1.png" alt="图 6.2 MyClassAdapter 的程序图"></p><p>与图 2.7 中 ChangeVersionAdapter 的程序图进行对比，可以看出，ca 和 cw 之间的事件发生在 cr 和 ca 之间的事件之后，而不是像正常类适配器一样同时进行。事实上，对于所有基于树的转换都是如此，同时还解释了为什么它们受到的限制要少于基于事件的转换。</p><p>第二种模式可用于以类似程序图获得相同结果，它使用的是委托而非继承：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClassAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token class-name">ClassVisitor</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyClassAdapter</span><span class="token punctuation">(</span><span class="token class-name">ClassVisitor</span> cv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ClassNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        next <span class="token operator">=</span> cv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ClassNode</span> cn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ClassNode</span><span class="token punctuation">)</span> cv<span class="token punctuation">;</span>
        <span class="token comment">// 将转换代码放在这里</span>
        cn<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一模式使用两个对象而不是一个，但其工作方式完全与第一种模式相同：接收到的事件用于构造一个 ClassNode，它被转换，并在接收到最后一个事件后，变回一个基于事件的表示。</p><p>这两种模式都允许用基于事件的适配器来编写基于树的类适配器。它们也可用于将基于树的适配器组合在一起，但如果只需要组合基于树的适配器，那这并非最佳解决方案：在这种情况下， 使用诸如 ClassTransformer 的类将会避免在两种表示之间进行不必要的转换。</p>`,23),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","6.2zujianhecheng.html.vue"]]);export{k as default};
