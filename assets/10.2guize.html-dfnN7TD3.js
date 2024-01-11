import{_ as s,o as n,c as a,e}from"./app-3RcBQnkC.js";const p={},t=e(`<h1 id="_10-2-规则" tabindex="-1"><a class="header-anchor" href="#_10-2-规则" aria-hidden="true">#</a> 10.2 规则</h1><p>本节给出一些规则，在使用 ASM 树 API 时，要想确保你的代码在所有未来 ASM 版本中都保持有效（其意义见 5.1.1 节定义的约定），就必须遵循这些规则。</p><p>首先，如果使用树 API 编写一个类生成器，那就不需要遵循什么规则（和核心 API 一样）。可以用任意构造器创建 ClassNode 和其他元素，可以使用这些类的任意方法。</p><p>另一方面，如果要用树 API 编写类分析器或类适配器，也就是说，如果使用 ClassNode 或其他直接或间接地通过 ClassReader.accept()填充的类似类，或者如果重写这些类中的一个，则必须遵循下面给出的规则。</p><h2 id="_10-2-1-基本规则" tabindex="-1"><a class="header-anchor" href="#_10-2-1-基本规则" aria-hidden="true">#</a> 10.2.1 基本规则</h2><ol><li>创建类节点</li></ol><p>考虑这样一种情景，我们创建一个 <code>ClassNode</code>，通过一个 <code>ClassReader</code> 填充它，然后分析或转换它，最终根据需要用 <code>ClassWriter</code> 写出结果（这一讨论及相关规则同样适用于其他节点类；对于由别人创建的 ClassNode，其分析或转换在下一节讨论）。在这种情况下，仅有一条规则：</p><p>规则 3：要用 ASM 版本X 的树 API 编写类分析器或适配器，则使用以这一确切版本为参数的构造器创建 ClassNode（而不是使用没有参数的默认构造器）。</p><p>本规则的目的是在通过一个 ClassReader 填充 ClassNode 时，如果遇到未知特性，则抛出一个错误（根据后向兼容性约定的定义）。如果不遵循这一规则，在以后遇到未知元素时，你 的分析或转换代码可能会失败，也许能够成功运行，但却因为没有忽略这些未知元素而给出错误结果。换言之，如果不遵循这一规则，可能无法保证约定的最后一项条款。</p><p>如何做到呢？ASM 4.0 内部对 ClassNode 的实现如下（这里重复使用 5.1.2 节的示例）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassNode</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ClassNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ClassNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> api<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>api<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitSource</span><span class="token punctuation">(</span><span class="token class-name">String</span> source<span class="token punctuation">,</span> <span class="token class-name">String</span> debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 source 和 debug 存储在局部字段中...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ASM 5.0 中，这一代码变为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassNode</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitSource</span><span class="token punctuation">(</span><span class="token class-name">String</span> source<span class="token punctuation">,</span> <span class="token class-name">String</span> debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>api <span class="token operator">&lt;</span> <span class="token constant">ASM5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">// 将source 和 debug 存储在局部字段中...</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">visitSource</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> source<span class="token punctuation">,</span> debug<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitSource</span><span class="token punctuation">(</span><span class="token class-name">Sring</span> author<span class="token punctuation">,</span> <span class="token class-name">String</span> source<span class="token punctuation">,</span> <span class="token class-name">String</span> debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>api <span class="token operator">&lt;</span> <span class="token constant">ASM5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>author <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token function">visitSource</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> debug<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
             <span class="token comment">// 将author、source 和 debug 存储在局部字段中...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitLicense</span><span class="token punctuation">(</span><span class="token class-name">String</span> license<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>api <span class="token operator">&lt;</span> <span class="token constant">ASM5</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将 license 存储在局部字段中</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 ASM 4.0，那创建 ClassNode(ASM4)没有什么特别之处。但如果升级到 ASM 5.0，但不修改代码，那就会得到一个 ClassNode 5.0，它的 api 字段将为 ASM4 &lt; ASM5。于是容易看出，如果输入类包含一个非 null 作者或许可属性，那通过 ClassReader 填充ClassNode 时将会失败，如约定中的定义。如果还升级你的代码，将 api 字段改为 ASM5，并升级剩余代码，将这些新属性考虑在内，那在填充代码时就不会抛出错误。</p><p>注意，ClassNode 5.0 代码非常类似于 ClassVisitor 5.0 代码。这是为了确保在定义 ClassNode 的子类时能够拥有正确的语义（类似于 ClassVisitor 的子类——见 10.2.2 节）。</p><ol start="2"><li>使用现有类代码</li></ol><p>如果你的类分析器或适配器收到别人创建的 ClassNode，那你就不能肯定在创建它时传送 给其构造器的 ASM 版本。当然可以自行检查 api 字段，但如果发现这个版本高于你支持的版本， 直接拒绝这个类可能太过保守了。事实上，这个类中可能没有包含任何未知特性。另一方面，你不能检查是否存在未知特性（在我们的示例情景中，在为 ASM 4.0 编写代码时，你如何判断你的 ClassNode 中不存在未知的 license 字段呢？因为你在这里还不知道未来会添加这样一个字段）。于是设计了 ClassNode.check()方法来解决这个问题。这就引出了以下规则：</p><p>规则 4：要用 ASM 版本 X 的树 API 编写一个类分析器或适配器，使用别人创建的ClassNode，在以任何方式使用这个 ClassNode 之前，都要以这个确切版本号为参数，调用它的 check()方法。</p><p>其目的与规则 3 相同：如果不遵循这一规则，可能无法保证约定的最后一项条款。如何做到的呢？这个检查方法在 ASM 4.0 内部的实现如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassNode</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> api<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不做任何事</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ASM 5.0中，这一代码变为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassNode</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> api<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>api <span class="token operator">&lt;</span> <span class="token constant">ASM5</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>author <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> license <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的代码是为 ASM 4.0 编写的，而且如果得到一个 ClassNode 4.0，它的 api 字段将为 ASM4，这样不会有问题，check 也不做任何事情。但如果你得到一个 ClassNode 5.0，如果这个节点实际上包含了非 null author 或 license，也就是说，它包含了 ASM 4.0 中未知的新特性，那 check(ASM4)方法将会失败。</p><p><em>注意：如果你自己创建 ClassNode，也可以使用这一规则。那就不需要遵循规则 3，也就是说，不需要在ClassNode 构造器中指明 ASM 版本。这一检查将在 check 方法中进行（但在填充 ClassNode 时，这种做法的效率要低于在之前进行检查）。</em></p><h2 id="_10-2-2-继承规则" tabindex="-1"><a class="header-anchor" href="#_10-2-2-继承规则" aria-hidden="true">#</a> 10.2.2 继承规则</h2><p>如果希望提供 ClassNode 的子类或者其他类似节点类，那么规则 1 和 2 都是适用的。注意， 在一个 MethodNode 匿名子类的一个常用特例中，visitEnd()方法被重写：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyClassVisitor</span> <span class="token keyword">extends</span> <span class="token class-name">ClassVisitor</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token class-name">MethodVisitor</span> <span class="token function">visitMethod</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">MethodVisitor</span> mv <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">visitMethod</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>mv <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MethodNode</span><span class="token punctuation">(</span><span class="token constant">ASM4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visitEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// perform a transformation accept(mv);</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那就自动适用规则 2（匿名类不能被重写，尽管没有明确将它声明为 final 的）。你只需要遵循规则 3，也就是说，在 MehtodNode 构造器中指定 ASM 版本（或者遵循规则 4，也就是在执行转换之前调用 check(ASM4)）。</p><h2 id="_10-2-3-其他包" tabindex="-1"><a class="header-anchor" href="#_10-2-3-其他包" aria-hidden="true">#</a> 10.2.3 其他包</h2><p><strong>asm.util</strong> 和 <strong>asm.commons</strong> 中的类都有两个构造函数变体：一个有 ASM 版本参数，一个没有。</p><p>如果只是希望像 asm.util 中的 ASMifier、Textifier 或 CheckXxx Adapter 类或者asm.commons 包中的任意类一样，加以实例化和应用，那可以用没有 ASM 版本参数的构造器来实例化它们。也可以使用带有 ASM 版本参数的构造器，那就会不必要地将这些组件限制于特定的 ASM 版本（而使用无参数构造器相当于在说“使用最新的 ASM 版本”）。这就是为什么使用 ASM 版本参数的构造器被声明为 protected。</p><p>另一方面，如果希望重写 asm.util 中的 ASMifier、Textifier 或 CheckXxx Adapter 类或者 asm.commons 包中的任意类，那适用规则 1 和 2。具体来说，你的构造器必须以你希望用作参数的 ASM 版本来调用 super(…)。</p><p>最后，如果希望使用或重写 asm.tree.analysis 中的 Interpreter 类或其子类，必须做出同样的区分。还要注意，在使用这个分析包之前，创建一个 MethodNode 或者从别人那里获取一个，那在将这一代码传送给 Analyzer 之前必须使用规则 3 和 4。</p>`,33),o=[t];function c(l,i){return n(),a("div",null,o)}const d=s(p,[["render",c],["__file","10.2guize.html.vue"]]);export{d as default};
