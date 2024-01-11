import{_ as p,r as o,o as c,c as l,a,b as n,d as e,e as t}from"./app-3RcBQnkC.js";const i={},u=t(`<p>本文主要介绍 Java 中的自动拆箱与自动装箱的有关知识。</p><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2><p>基本类型，或者叫做内置类型，是 Java 中不同于类(Class)的特殊类型。它们是我们编程中使用最频繁的类型。</p><p>Java 是一种强类型语言，第一次申明变量必须说明数据类型，第一次变量赋值称为变量的初始化。</p><p>Java 基本类型共有八种，基本类型可以分为三类：</p><blockquote><p>字符类型 <code>char</code></p><p>布尔类型 <code>boolean</code></p><p>数值类型 <code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code>、<code>float</code>、<code>double</code>。</p></blockquote><p>数值类型又可以分为整数类型 <code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code> 和浮点数类型 <code>float</code>、<code>double</code>。</p><p>Java 中的数值类型不存在无符号的，它们的取值范围是固定的，不会随着机器硬件环境或者操作系统的改变而改变。</p><p>实际上，Java 中还存在另外一种基本类型 <code>void</code>，它也有对应的包装类 <code>java.lang.Void</code>，不过我们无法直接对它们进行操作。</p><h3 id="基本数据类型有什么好处" tabindex="-1"><a class="header-anchor" href="#基本数据类型有什么好处" aria-hidden="true">#</a> 基本数据类型有什么好处</h3><p>我们都知道在 Java 语言中，<code>new</code> 一个对象是存储在堆里的，我们通过栈中的引用来使用这些对象；所以，对象本身来说是比较消耗资源的。</p><p>对于经常用到的类型，如 int 等，如果我们每次使用这种变量的时候都需要 new 一个 Java 对象的话，就会比较笨重。所以，和 C++ 一样，Java 提供了基本数据类型，这种数据的变量不需要使用 new 创建，他们不会在堆上创建，而是直接在栈内存中存储，因此会更加高效。</p><h3 id="整型的取值范围" tabindex="-1"><a class="header-anchor" href="#整型的取值范围" aria-hidden="true">#</a> 整型的取值范围</h3><p>Java 中的整型主要包含<code>byte</code>、<code>short</code>、<code>int</code>和<code>long</code>这四种，表示的数字范围也是从小到大的，之所以表示范围不同主要和他们存储数据时所占的字节数有关。</p><p>先来个简答的科普，1 字节= 8 位（bit）。Java 中的整型属于有符号数。</p><p>先来看计算中 8 bit 可以表示的数字：</p><pre><code>最小值：10000000 （-128）(-2^7)
最大值：01111111（127）(2^7-1)
</code></pre><p>整型的这几个类型中，</p><ul><li><p>byte：byte 用 1 个字节来存储，范围为 -128(-2^7) 到 127(2^7-1)，在变量初始化的时候，byte 类型的默认值为 0。</p></li><li><p>short：short 用 2 个字节存储，范围为 -32,768(-2^15) 到 32,767(2^15-1)，在变量初始化的时候，short 类型的默认值为 0，一般情况下，因为 Java 本身转型的原因，可以直接写为 0。</p></li><li><p>int：int 用 4 个字节存储，范围为 -2,147,483,648(-2^31) 到 2,147,483,647(2^31-1)，在变量初始化的时候，int 类型的默认值为 0。</p></li><li><p>long：long 用 8 个字节存储，范围为 -9,223,372,036,854,775,808(-2^63) 到 9,223,372,036, 854,775,807(2^63-1)，在变量初始化的时候，long 类型的默认值为 0L 或 0l，也可直接写为 0。</p></li></ul><h3 id="超出范围怎么办" tabindex="-1"><a class="header-anchor" href="#超出范围怎么办" aria-hidden="true">#</a> 超出范围怎么办</h3><p>上面说过了，整型中，每个类型都有一定的表示范围，但是，在程序中有些计算会导致超出表示范围，即溢出。如以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i (&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;) + j (&quot;</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token string">&quot;) = k (&quot;</span> <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：i (2147483647) + j (2147483647) = k (-2)</p><p><strong>这就是发生了溢出，溢出的时候并不会抛异常，也没有任何提示。</strong> 所以，在程序中，使用同类型的数据进行运算的时候，<strong>一定要注意数据溢出的问题。</strong></p><h2 id="包装类型" tabindex="-1"><a class="header-anchor" href="#包装类型" aria-hidden="true">#</a> 包装类型</h2><p>Java 语言是一个面向对象的语言，但是 Java 中的基本数据类型却是不面向对象的，这在实际使用时存在很多的不便，为了解决这个不足，在设计类时为每个基本数据类型设计了一个对应的类进行代表，这样八个和基本数据类型对应的类统称为包装类(Wrapper Class)。</p><p>包装类均位于 <code>java.lang</code> 包，包装类和基本数据类型的对应关系如下表所示</p><table><thead><tr><th>基本数据类型</th><th>包装类</th></tr></thead><tbody><tr><td>byte</td><td>Byte</td></tr><tr><td>boolean</td><td>Boolean</td></tr><tr><td>short</td><td>Short</td></tr><tr><td>char</td><td>Character</td></tr><tr><td>int</td><td>Integer</td></tr><tr><td>long</td><td>Long</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>double</td><td>Double</td></tr></tbody></table><p>在这八个类名中，除了 Integer 和 Character 类以后，其它六个类的类名和基本数据类型一致，只是类名的第一个字母大写即可。</p><h3 id="为什么需要包装类" tabindex="-1"><a class="header-anchor" href="#为什么需要包装类" aria-hidden="true">#</a> 为什么需要包装类</h3><p>很多人会有疑问，既然 Java 中为了提高效率，提供了八种基本数据类型，为什么还要提供包装类呢？</p><p>这个问题，其实前面已经有了答案，因为 Java 是一种面向对象语言，很多地方都需要使用对象而不是基本数据类型。比如，在集合类中，我们是无法将 int 、double 等类型放进去的。因为集合的容器要求元素是 Object 类型。</p><p>为了让基本类型也具有对象的特征，就出现了包装类型，它相当于将基本类型“包装起来”，使得它具有了对象的性质，并且为其添加了属性和方法，丰富了基本类型的操作。</p><h2 id="拆箱与装箱" tabindex="-1"><a class="header-anchor" href="#拆箱与装箱" aria-hidden="true">#</a> 拆箱与装箱</h2><p>那么，有了基本数据类型和包装类，肯定有些时候要在他们之间进行转换。比如把一个基本数据类型的 int 转换成一个包装类型的 Integer 对象。</p><p>我们认为包装类是对基本类型的包装，所以，把基本数据类型转换成包装类的过程就是打包装，英文对应于 boxing，中文翻译为装箱。</p><p>反之，把包装类转换成基本数据类型的过程就是拆包装，英文对应于 unboxing，中文翻译为拆箱。</p><p>在 Java SE5 之前，要进行装箱，可以通过以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自动拆箱与自动装箱" tabindex="-1"><a class="header-anchor" href="#自动拆箱与自动装箱" aria-hidden="true">#</a> 自动拆箱与自动装箱</h2><p>在 Java SE5 中，为了减少开发人员的工作，Java 提供了自动拆箱与自动装箱功能。</p><p>自动装箱: 就是将基本数据类型自动转换成对应的包装类。</p><p>自动拆箱：就是将包装类自动转换成对应的基本数据类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//自动装箱</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> i<span class="token punctuation">;</span>     <span class="token comment">//自动拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Integer i=10</code> 可以替代 <code>Integer i = new Integer(10);</code>，这就是因为 Java 帮我们提供了自动装箱的功能，不需要开发者手动去 new 一个 Integer 对象。</p><h2 id="自动装箱与自动拆箱的实现原理" tabindex="-1"><a class="header-anchor" href="#自动装箱与自动拆箱的实现原理" aria-hidden="true">#</a> 自动装箱与自动拆箱的实现原理</h2><p>既然 Java 提供了自动拆装箱的能力，那么，我们就来看一下，到底是什么原理，Java 是如何实现的自动拆装箱功能。</p><p>我们有以下自动拆装箱的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> integer<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//装箱</span>
        <span class="token keyword">int</span> i<span class="token operator">=</span>integer<span class="token punctuation">;</span> <span class="token comment">//拆箱</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对以上代码进行反编译后可以得到以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> integer<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token operator">=</span>integer<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面反编译后的代码可以看出，int 的自动装箱都是通过 <code>Integer.valueOf()</code> 方法来实现的，Integer 的自动拆箱都是通过 <code>integer.intValue</code> 来实现的。如果读者感兴趣，可以试着将八种类型都反编译一遍 ，你会发现以下规律：</p><blockquote><p>自动装箱都是通过包装类的 <code>valueOf()</code> 方法来实现的.自动拆箱都是通过包装类对象的 <code>xxxValue()</code> 来实现的。</p></blockquote><h2 id="哪些地方会自动拆装箱" tabindex="-1"><a class="header-anchor" href="#哪些地方会自动拆装箱" aria-hidden="true">#</a> 哪些地方会自动拆装箱</h2><p>我们了解过原理之后，在来看一下，什么情况下，Java 会帮我们进行自动拆装箱。前面提到的变量的初始化和赋值的场景就不介绍了，那是最简单的也最容易理解的。</p><p>我们主要来看一下，那些可能被忽略的场景。</p><h3 id="场景一、将基本数据类型放入集合类" tabindex="-1"><a class="header-anchor" href="#场景一、将基本数据类型放入集合类" aria-hidden="true">#</a> 场景一、将基本数据类型放入集合类</h3><p>我们知道，Java 中的集合类只能接收对象类型，那么以下代码为什么会不报错呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> li <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        li<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面代码进行反编译，可以得到以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> li <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        li<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上，我们可以得出结论，当我们把基本数据类型放入集合类中的时候，会进行自动装箱。</p><h3 id="场景二、包装类型和基本类型的大小比较" tabindex="-1"><a class="header-anchor" href="#场景二、包装类型和基本类型的大小比较" aria-hidden="true">#</a> 场景二、包装类型和基本类型的大小比较</h3><p>有没有人想过，当我们对 Integer 对象与基本类型进行大小比较的时候，实际上比较的是什么内容呢？看以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;等于&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;不等于&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Boolean</span> bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bool <span class="token operator">?</span> <span class="token string">&quot;真&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;假&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对以上代码进行反编译，得到以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;等于&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;不等于&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Boolean</span> bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bool<span class="token punctuation">.</span>booleanValue <span class="token operator">?</span> <span class="token string">&quot;真&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;假&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，包装类与基本数据类型进行比较运算，是先将包装类进行拆箱成基本数据类型，然后进行比较的。</p><h3 id="场景三、包装类型的运算" tabindex="-1"><a class="header-anchor" href="#场景三、包装类型的运算" aria-hidden="true">#</a> 场景三、包装类型的运算</h3><p>有没有人想过，当我们对 Integer 对象进行四则运算的时候，是如何进行的呢？看以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反编译后代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> j <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> j<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，两个包装类型之间的运算，会被自动拆箱成基本类型进行。</p><h3 id="场景四、三目运算符的使用" tabindex="-1"><a class="header-anchor" href="#场景四、三目运算符的使用" aria-hidden="true">#</a> 场景四、三目运算符的使用</h3><p>这是很多人不知道的一个场景，作者也是一次线上的血淋淋的 Bug 发生后才了解到的一种案例。看一个简单的三目运算符的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> flag <span class="token operator">?</span> i <span class="token operator">:</span> j<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),r=a("code",null,"int k = flag ? i : j;",-1),d={href:"https://www.hollischuang.com/archives/4749",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>反编译后代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> flag <span class="token operator">?</span> i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> j<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这其实是三目运算符的语法规范。当第二，第三位操作数分别为基本类型和对象时，其中的对象就会拆箱为基本类型进行操作。</p>`,3),v=a("code",null,"flag ? i : j;",-1),m=a("code",null,"null",-1),b={href:"http://www.hollischuang.com/archives/435",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="场景五、函数参数与返回值" tabindex="-1"><a class="header-anchor" href="#场景五、函数参数与返回值" aria-hidden="true">#</a> 场景五、函数参数与返回值</h3><p>这个比较容易理解，直接上代码了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//自动拆箱</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNum1</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//自动装箱</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getNum2</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动拆装箱与缓存" tabindex="-1"><a class="header-anchor" href="#自动拆装箱与缓存" aria-hidden="true">#</a> 自动拆装箱与缓存</h2><p>Java SE 的自动拆装箱还提供了一个和缓存有关的功能，我们先来看以下代码，猜测一下输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> integer2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>integer1 <span class="token operator">==</span> integer2<span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer1 == integer2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer1 != integer2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> integer3 <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> integer4 <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>integer3 <span class="token operator">==</span> integer4<span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer3 == integer4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer3 != integer4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们普遍认为上面的两个判断的结果都是 false。虽然比较的值是相等的，但是由于比较的是对象，而对象的引用不一样，所以会认为两个 if 判断都是 false 的。在 Java 中，<code>==</code> 比较的是对象引用，而 <code>equals</code> 比较的是值。所以，在这个例子中，不同的对象有不同的引用，所以在进行比较的时候都将返回 false。奇怪的是，这里两个类似的 if 条件判断返回不同的布尔值。</p><p>上面这段代码真正的输出结果：</p><pre><code>integer1 == integer2
integer3 != integer4
</code></pre><p>原因就和 Integer 中的缓存机制有关。在 Java 5 中，在 Integer 的操作上引入了一个新功能来节省内存和提高性能。整型对象通过使用相同的对象引用实现了缓存和重用。</p><blockquote><p>适用于整数值区间 -128 至 +127。</p><p>只适用于自动装箱。使用构造函数创建对象不适用。</p></blockquote>`,11),h={href:"http://www.hollischuang.com/archives/1174",target:"_blank",rel:"noopener noreferrer"},f=t('<p>我们只需要知道，当需要进行自动装箱时，如果数字在 -128 至 127 之间时，会直接使用缓存中的对象，而不是重新创建一个对象。</p><p>其中的 Javadoc 详细的说明了缓存支持 -128 到 127 之间的自动装箱过程。最大值 127 可以通过 <code>-XX:AutoBoxCacheMax=size</code> 修改。</p><p>实际上这个功能在 Java 5 中引入的时候,范围是固定的 -128 至 +127。后来在 Java 6 中，可以通过 <code>java.lang.Integer.IntegerCache.high</code> 设置最大值。</p><p>这使我们可以根据应用程序的实际情况灵活地调整来提高性能。到底是什么原因选择这个 -128 到 127 范围呢？因为这个范围的数字是最被广泛使用的。 在程序中，第一次使用 Integer 的时候也需要一定的额外时间来初始化这个缓存。</p><p>在 Boxing Conversion 部分的 Java 语言规范(JLS)规定如下：</p><p>如果一个变量 p 的值是：</p><ul><li>-128 至 127 之间的整数 (§3.10.1)</li><li>true 和 false 的布尔值 (§3.10.3)</li><li><code>\\u0000</code> 至 <code>\\u007f</code> 之间的字符 (§3.10.4)</li></ul><p>范围内的时，将 p 包装成 a 和 b 两个对象时，可以直接使用 a == b 判断 a 和 b 的值是否相等。</p><h2 id="自动拆装箱带来的问题" tabindex="-1"><a class="header-anchor" href="#自动拆装箱带来的问题" aria-hidden="true">#</a> 自动拆装箱带来的问题</h2><p>当然，自动拆装箱是一个很好的功能，大大节省了开发人员的精力，不再需要关心到底什么时候需要拆装箱。但是，他也会引入一些问题。</p><blockquote><p>包装对象的数值比较，不能简单的使用 <code>==</code>，虽然 -128 到 127 之间的数字可以，但是这个范围之外还是需要使用 <code>equals</code> 比较。</p><p>前面提到，有些场景会进行自动拆装箱，同时也说过，由于自动拆箱，如果包装类对象为 null ，那么自动拆箱时就有可能抛出 NPE。</p><p>如果一个 for 循环中有大量拆装箱操作，会浪费很多资源。</p></blockquote><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',12),j={href:"https://www.jianshu.com/p/cc9312104876",target:"_blank",rel:"noopener noreferrer"};function y(w,x){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,a("p",null,[n("很多人不知道，其实在 "),r,n(" 这一行，会发生自动拆箱（ JDK1.8 之前，详见："),a("a",d,[n("《阿里巴巴Java开发手册-泰山版》提到的三目运算符的空指针问题到底是个怎么回事？"),e(s)]),n(" ）。")]),k,a("p",null,[n("因为例子中，"),v,n(" 片段中，第二段的 i 是一个包装类型的对象，而第三段的 j 是一个基本类型，所以会对包装类进行自动拆箱。如果这个时候 i 的值为 "),m,n("，那么就会发生 NPE。（"),a("a",b,[n("自动拆箱导致空指针异常"),e(s)]),n("）")]),g,a("p",null,[n("具体的代码实现可以阅读"),a("a",h,[n("Java中整型的缓存机制"),e(s)]),n("一文，这里不再阐述。")]),f,a("p",null,[a("a",j,[n("Java 的自动拆装箱"),e(s)])])])}const q=p(i,[["render",y],["__file","boxing-unboxing.html.vue"]]);export{q as default};
