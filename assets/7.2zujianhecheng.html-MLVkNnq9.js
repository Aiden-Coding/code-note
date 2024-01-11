import{_ as n,o as s,c as a,e as t}from"./app-3RcBQnkC.js";const e={},p=t(`<h1 id="_7-2-组件合成" tabindex="-1"><a class="header-anchor" href="#_7-2-组件合成" aria-hidden="true">#</a> 7.2 组件合成</h1><p>前为止，我们仅看到了如何创建和转换 MethodNode 对象，却还没有看到与类的字节数组表示进行链接。和类的情景一样，这一链接过程也是通过合成核心 API 和树 API 组件完成的，本节就来进行解释。</p><h2 id="_7-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-2-1-介绍" aria-hidden="true">#</a> 7.2.1 介绍</h2><p>除了图 7.1 显示的字段之外，MethodNode 类扩展了 MethodVisitor 类，还提供了两个 accept 方法，它以一个 MethodVisitor 或一个 ClassVisitor 为参数。accept 方法基于 MethodNode 字段值生成事件，而 MethodVisitor 方法执行逆操作，即根据接收到的事件设定 MethodNode 字段。</p><h2 id="_7-2-2-模式" tabindex="-1"><a class="header-anchor" href="#_7-2-2-模式" aria-hidden="true">#</a> 7.2.2 模式</h2><p>和类的情景一样，有可能与核心 API 使用一个基于树的方法转换器，比如一个方法适配器。用于类的两种模式实际上对于方法也是有效的，其工作方式完全相同。基于继承的模式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMethodAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">MethodNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyMethodAdapter</span><span class="token punctuation">(</span><span class="token keyword">int</span> access<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> desc<span class="token punctuation">,</span> <span class="token class-name">String</span> signature<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> exceptions<span class="token punctuation">,</span> <span class="token class-name">MethodVisitor</span> mv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">,</span> access<span class="token punctuation">,</span> name<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> signature<span class="token punctuation">,</span> exceptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mv <span class="token operator">=</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将你的转换代码放在这儿</span>
        <span class="token function">accept</span><span class="token punctuation">(</span>mv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而基于委托的模式为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMethodAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">MethodVisitor</span> <span class="token punctuation">{</span>
    <span class="token class-name">MethodVisitor</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyMethodAdapter</span><span class="token punctuation">(</span><span class="token keyword">int</span> access<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> desc<span class="token punctuation">,</span> <span class="token class-name">String</span> signature<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> exceptions<span class="token punctuation">,</span> <span class="token class-name">MethodVisitor</span> mv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">MethodNode</span><span class="token punctuation">(</span>access<span class="token punctuation">,</span> name<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> signature<span class="token punctuation">,</span> exceptions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        next <span class="token operator">=</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MethodNode</span> mn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodNode</span><span class="token punctuation">)</span> mv<span class="token punctuation">;</span>
        <span class="token comment">//将你的转换代码放在这儿</span>
        mn<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一种模式的一种变体是直接在 ClassAdapter 的 visitMethod 中将它与一个匿名内部类一起使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">MethodVisitor</span> <span class="token function">visitMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> access<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> desc<span class="token punctuation">,</span> <span class="token class-name">String</span> signature<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> exceptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MethodNode</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">,</span> access<span class="token punctuation">,</span> name<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> signature<span class="token punctuation">,</span> exceptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//将你的转换代码放在这儿</span>
            <span class="token function">accept</span><span class="token punctuation">(</span>cv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些模式表明，可以将树 API 仅用于方法，将核心 API 用于类。<strong>在实践中经常使用这一策略</strong>。</p>`,12),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","7.2zujianhecheng.html.vue"]]);export{d as default};
