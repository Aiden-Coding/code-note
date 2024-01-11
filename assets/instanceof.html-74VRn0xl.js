import{_ as e,r as t,o as p,c,a as l,b as n,d as o,w as i,e as a}from"./app-3RcBQnkC.js";const u={},d=a(`<h1 id="_5-17-java-instanceof关键字" tabindex="-1"><a class="header-anchor" href="#_5-17-java-instanceof关键字" aria-hidden="true">#</a> 5.17 Java instanceof关键字</h1><p>“三妹，今天我们来过一个非常简单的知识点，instanceof关键字。”</p><p>“用不着哥你来讲了，今天就换个形式，我来讲给你听。”三妹雄赳赳气昂昂地说。</p><p>instanceof 关键字的用法其实很简单：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),r=a(`<p>我们来建这样一个简单的类 Round：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Round</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新增一个扩展类 Ring：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Ring</span> <span class="token keyword">extends</span> <span class="token class-name">Round</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，我们就可以通过 instanceof 来检查 Ring 对象是否属于 Round 类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Ring</span> ring <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ring <span class="token keyword">instanceof</span> <span class="token class-name">Round</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果会输出 true，因为 Ring 继承了 Round，也就意味着 Ring 和 Round 符合 <code> is-a</code> 的关系，而 instanceof 操作符正是基于类与类之间的继承关系，以及类与接口之间的实现关系的。</p><p>我们再来新建一个接口 Shape：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新建 Circle 类实现 Shape 接口并继承 Round 类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Round</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对象是由该类创建的，那么 instanceof 的结果肯定为 true。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Circle</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个肯定没毛病，instanceof 就是干这个活的，大家也很好理解。那如果类型是父类呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Round</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果肯定还是 true，因为依然符合 <code>is-a</code> 的关系。那如果类型为接口呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Shape</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果仍然为 true， 因为也符合 <code>is-a</code> 的关系。如果要比较的对象和要比较的类型之间没有关系，当然是不能使用 instanceof 进行比较的。</p><p>为了验证这一点，我们来创建一个实现了 Shape 但与 Circle 无关的 Triangle 类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，再使用 instanceof 进行比较的话，编译器就报错了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Triangle</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>错误信息如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Inconvertible types; cannot cast &#39;com.itwanger.twentyfour.instanceof1.Circle&#39; to &#39;com.itwanger.twentyfour.instanceof1.Triangle&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思就是类型不匹配，不能转换，我们使用 instanceof 比较的目的，也就是希望如果结果为 true 的时候能进行类型转换。但显然 Circle 不能转为 Triangle。</p><p>编译器已经提前帮我们预知了，很聪明。</p><p>Java 是一门面向对象的编程语言，也就意味着除了基本数据类型，所有的类都会隐式继承 Object 类。所以下面的结果肯定也会输出 true。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>thread <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>“那如果对象为 null 呢？”我这时候插话了。</p><p>“这个还真的是一个好问题啊。”三妹忍不住对我竖了一个大拇指。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只有对象才会有 null 值，所以编译器是不会报错的，只不过，对于 null 来说，instanceof 的结果为 false。因为所有的对象都可以为 null，所以也不好确定 null 到底属于哪一个类。</p><p>通常，我们是这样使用 instanceof 操作符的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 先判断类型</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 然后强制转换</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
    <span class="token comment">// 然后才能使用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先用 instanceof 进行类型判断，然后再把 obj 强制转换成我们期望的类型再进行使用。</p><p>JDK 16 的时候，instanceof 模式匹配转了正，意味着使用 instanceof 的时候更便捷了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果类型匹配 直接使用 s</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接在 if 条件判断类型的时候添加一个变量，就不需要再强转和声明新的变量了。</p><p>“哇，这样就简洁了呀！”为了配合三妹，我不仅惊叹到！</p><p>“好了，关于 instanceof 操作符我们就先讲到这吧，难是一点都不难，希望哥也能够很好的掌握。”三妹笑嘻嘻地说，看来她很享受这个讲的过程嘛。</p><hr>`,41);function v(k,m){const s=t("RouterLink");return p(),c("div",null,[d,l("p",null,[n("用意也非常简单，判断对象是否符合指定的类型，结果要么是 true，要么是 false。在"),o(s,{to:"/toBeBetterJavaer/io/serialize.html"},{default:i(()=>[n("反序列化")]),_:1}),n("的时候，instanceof 操作符还是蛮常用的，因为这时候我们不太确定对象属不属于指定的类型，如果不进行判断的话，就容易抛出 ClassCastException 异常。")]),r])}const b=e(u,[["render",v],["__file","instanceof.html.vue"]]);export{b as default};
