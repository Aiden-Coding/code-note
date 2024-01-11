import{_ as p,r,o as c,c as i,a,b as n,d as s,w as t,e as o}from"./app-3RcBQnkC.js";const l={},d=o(`<h1 id="_4-6-字符串常量池" tabindex="-1"><a class="header-anchor" href="#_4-6-字符串常量池" aria-hidden="true">#</a> 4.6 字符串常量池</h1><p>“三妹，今天我们来学习一下字符串常量池，这是字符串中非常关键的一个知识点。”我话音未落，青岛路小学那边传来了嘹亮的歌声就钻进了我的耳朵，“唱 ~ 山 ~ 歌 ~”，我都有点情不自禁地哼唱起来了。</p><p>三妹赶紧拦住我说，“好了，开始吧，哥。”</p><h3 id="new-string-二哥-创建了几个对象" tabindex="-1"><a class="header-anchor" href="#new-string-二哥-创建了几个对象" aria-hidden="true">#</a> new String(&quot;二哥&quot;)创建了几个对象</h3><p>“先从这道面试题开始吧！”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),u=o(`<p>“不就一个吗？”三妹不假思索地回答。</p><p>“不，两个！”我直接否定了三妹的答案，“使用 new 关键字创建一个字符串对象时，Java 虚拟机会先在字符串常量池中查找有没有‘二哥’这个字符串对象，如果有，就不会在字符串常量池中创建‘二哥’这个对象了，直接在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的对象地址返回赋值给变量 s。”</p><p>“如果没有，先在字符串常量池中创建一个‘二哥’的字符串对象，然后再在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的字符串对象地址返回赋值给变量 s。”</p><p>我画图表示一下，会更加清楚。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string//constant-pool-6dee151e-3a13-4f85-b870-3c9d1797557a.png" alt=""></p><p>在Java中，栈上存储的是基本数据类型的变量和对象的引用，而对象本身则存储在堆上。</p><p>对于这行代码 <code>String s = new String(&quot;二哥&quot;);</code>，它创建了两个对象：一个是字符串对象 &quot;二哥&quot;，它被添加到了字符串常量池中，另一个是通过 new String() 构造函数创建的字符串对象 &quot;二哥&quot;，它被分配在堆内存中，同时引用变量 s 存储在栈上，它指向堆内存中的字符串对象 &quot;二哥&quot;。</p><p>“<strong>为什么要先在字符串常量池中创建对象，然后再在堆上创建呢</strong>？这样不就多此一举了？”三妹敏锐地发现了问题。</p><p>我回答，“是的。由于字符串的使用频率实在是太高了，所以 Java 虚拟机为了提高性能和减少内存开销，在创建字符串对象的时候进行了一些优化，特意为字符串开辟了一块空间——也就是字符串常量池。”</p><h3 id="字符串常量池的作用" tabindex="-1"><a class="header-anchor" href="#字符串常量池的作用" aria-hidden="true">#</a> 字符串常量池的作用</h3><p>通常情况下，我们会采用双引号的方式来创建字符串对象，而不是通过 new 关键字的方式，就像下面👇🏻这样，这样就不会多此一举：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当执行 <code>String s = &quot;三妹&quot;</code> 时，Java 虚拟机会先在字符串常量池中查找有没有“三妹”这个字符串对象，如果有，则不创建任何对象，直接将字符串常量池中这个“三妹”的对象地址返回，赋给变量 s；如果没有，在字符串常量池中创建“三妹”这个对象，然后将其地址返回，赋给变量 s。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string//constant-pool-80ca8b18-2446-431e-98e3-b194e1c608e3.png" alt=""></p><p>Java 虚拟机创建了一个字符串对象 &quot;三妹&quot;，它被添加到了字符串常量池中，同时引用变量 s 存储在栈上，它指向字符串常量池中的字符串对象 &quot;三妹&quot;。你看，是不是省了一步，比之前高效了。</p><p>“哦，我明白了，哥。”三妹突然插话到，“有了字符串常量池，就可以通过双引号的方式直接创建字符串对象，不用再通过 new 的方式在堆中创建对象了，对吧？”</p><p>“是滴。new 的方式始终会创建一个对象，不管字符串的内容是否已经存在，而双引号的方式会重复利用字符串常量池中已经存在的对象。”我说。</p><p>来看下面这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>按照我们之前的分析，这两行代码会创建三个对象，字符串常量池中一个，堆上两个。</p><p>再来看下面这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两行代码只会创建一个对象，就是字符串常量池中的那个。这样的话，性能肯定就提高了！</p><h3 id="字符串常量池在内存中的什么位置呢" tabindex="-1"><a class="header-anchor" href="#字符串常量池在内存中的什么位置呢" aria-hidden="true">#</a> 字符串常量池在内存中的什么位置呢？</h3><p>“那哥，字符串常量池在内存中的什么位置呢？”三妹问。</p><p>我说，“三妹，你这个问题问得好呀！”</p><p>分为三个阶段。</p><h4 id="java-7-之前" tabindex="-1"><a class="header-anchor" href="#java-7-之前" aria-hidden="true">#</a> Java 7 之前</h4><p>在 Java 7 之前，字符串常量池位于永久代（Permanent Generation）的内存区域中，主要用来存储一些字符串常量（静态数据的一种）。永久代是 Java 堆（Java Heap）的一部分，用于存储类信息、方法信息、常量池信息等静态数据。</p><p>而 Java 堆是 JVM 中存储对象实例和数组的内存区域，也就是说，永久代是 Java 堆的一个子区域。</p><p>换句话说，永久代中存储的静态数据与堆中存储的对象实例和数组是分开的，它们有不同的生命周期和分配方式。</p><p>但是，永久代和堆的大小是相互影响的，因为它们都使用了 JVM 堆内存，因此它们的大小都受到 JVM 堆大小的限制。</p><p>于是，当我们创建一个字符串常量时，它会被储存在永久代的字符串常量池中。如果我们创建一个普通字符串对象，则它将被储存在堆中。如果字符串对象的内容是一个已经存在于字符串常量池中的字符串常量，那么这个对象会指向已经存在的字符串常量，而不是重新创建一个新的字符串对象。</p><p>画幅图，大概就是这个样子。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string//constant-pool-ed6518ec-1d51-4718-ab8a-e1e2cda774bd.png" alt=""></p><h4 id="java-7" tabindex="-1"><a class="header-anchor" href="#java-7" aria-hidden="true">#</a> Java 7</h4><p>需要注意的是，永久代的大小是有限的，并且很难准确地确定一个应用程序需要多少永久代空间。如果我们在应用程序中使用了大量的类、方法、常量等静态数据，就有可能导致永久代空间不足。这种情况下，JVM 就会抛出 OutOfMemoryError 错误。</p><p>因此，从 Java 7 开始，为了解决永久代空间不足的问题，将字符串常量池从永久代中移动到堆中。这个改变也是为了更好地支持动态语言的运行时特性。</p><p>再画幅图，大概就是这样子。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string//constant-pool-f5231378-a442-421e-a470-8256da1715e8.png" alt=""></p><h4 id="java-8" tabindex="-1"><a class="header-anchor" href="#java-8" aria-hidden="true">#</a> Java 8</h4><p>到了 Java 8，永久代（PermGen）被取消，并由元空间（Metaspace）取代。元空间是一块本机内存区域，和 JVM 内存区域是分开的。不过，元空间的作用依然和之前的永久代一样，用于存储类信息、方法信息、常量池信息等静态数据。</p><p>与永久代不同，元空间具有一些优点，例如：</p><ul><li>它不会导致 OutOfMemoryError 错误，因为元空间的大小可以动态调整。</li><li>元空间使用本机内存，而不是 JVM 堆内存，这可以避免堆内存的碎片化问题。</li><li>元空间中的垃圾收集与堆中的垃圾收集是分离的，这可以避免应用程序在运行过程中因为进行类加载和卸载而频繁地触发 Full GC。</li></ul><p>再画幅图，对比来看一下，就会一目了然。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string//constant-pool-422e3214-97df-41ec-bcb5-132cfc76b669.png" alt=""></p><h3 id="永久代、方法区、元空间" tabindex="-1"><a class="header-anchor" href="#永久代、方法区、元空间" aria-hidden="true">#</a> 永久代、方法区、元空间</h3><p>“哥，能再简单给我解释一下方法区，永久代和元空间的概念吗？有点模糊。”三妹说。</p><p>“可以呀。”</p>`,49),v=a("li",null,"永久代是 HotSpot 虚拟机中对方法区的一个实现，就像是接口的实现类；",-1),h=a("li",null,"Java 8 的时候，移除了永久代，取而代之的是元空间，是方法区的另外一种实现，更灵活了。",-1),g=a("p",null,[n("永久代是放在运行时数据区中的，所以它的大小受到 Java 虚拟机本身大小的限制，所以 Java 8 之前，会经常遇到 "),a("code",null,"java.lang.OutOfMemoryError: PremGen Space"),n(" 的异常，PremGen Space 就是方法区的意思；而元空间是直接放在内存中的，所以只受本机可用内存的限制。")],-1),m=a("p",null,"“明白了吧，三妹？”我问。",-1),b=a("p",null,"“嗯嗯。”三妹回答。",-1),k=a("p",null,"“那关于字符串常量池，就先说这么多吧，是不是还挺有意思的。”我说。",-1),_=a("p",null,"“是的，我现在是彻底搞懂了字符串常量池，哥，你真棒！”三妹说。",-1),j=a("hr",null,null,-1);function q(J,f){const e=r("RouterLink");return c(),i("div",null,[d,a("p",null,[n("“这行代码创建了几个"),s(e,{to:"/toBeBetterJavaer/oo/object-class.html"},{default:t(()=>[n("对象")]),_:1}),n("？”")]),u,a("ul",null,[a("li",null,[n("方法区是 Java 虚拟机规范中的一个概念，就像是一个"),s(e,{to:"/toBeBetterJavaer/oo/interface.html"},{default:t(()=>[n("接口")]),_:1}),n("吧；")]),v,h]),g,m,b,k,_,j])}const w=p(l,[["render",q],["__file","constant-pool.html.vue"]]);export{w as default};
