import{_ as n,o as s,c as a,e as t}from"./app-3RcBQnkC.js";const p={},e=t(`<h1 id="java-开发最容易犯的-10-个错误" tabindex="-1"><a class="header-anchor" href="#java-开发最容易犯的-10-个错误" aria-hidden="true">#</a> Java 开发最容易犯的 10 个错误</h1><ul><li><a href="#java-%E5%BC%80%E5%8F%91%E6%9C%80%E5%AE%B9%E6%98%93%E7%8A%AF%E7%9A%84-10-%E4%B8%AA%E9%94%99%E8%AF%AF">Java 开发最容易犯的 10 个错误</a><ul><li><a href="#%E9%94%99%E8%AF%AF%E4%B8%80array-%E8%BD%AC%E6%8D%A2%E6%88%90-arraylist">错误一：Array 转换成 ArrayList</a></li><li><a href="#%E9%94%99%E8%AF%AF%E4%BA%8C%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E6%9F%90%E4%B8%AA%E5%80%BC">错误二：检查数组是否包含某个值</a></li><li><a href="#%E9%94%99%E8%AF%AF%E4%B8%89%E5%9C%A8-list-%E4%B8%AD%E5%BE%AA%E7%8E%AF%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">错误三：在 List 中循环删除元素</a></li><li><a href="#%E9%94%99%E8%AF%AF%E5%9B%9Bhashtable-%E5%92%8C-hashmap">错误四：Hashtable 和 HashMap</a></li><li><a href="#%E9%94%99%E8%AF%AF%E4%BA%94%E4%BD%BF%E7%94%A8%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%9B%86%E5%90%88">错误五：使用原始类型的集合</a></li><li><a href="#%E9%94%99%E8%AF%AF%E5%85%AD%E8%AE%BF%E9%97%AE%E7%BA%A7%E5%88%AB%E9%97%AE%E9%A2%98">错误六：访问级别问题</a></li><li><a href="#%E9%94%99%E8%AF%AF%E4%B8%83arraylist-%E5%92%8C-linkedlist">错误七：ArrayList 和 LinkedList</a></li><li><a href="#%E9%94%99%E8%AF%AF%E5%85%AB%E5%8F%AF%E5%8F%98%E5%92%8C%E4%B8%8D%E5%8F%AF%E5%8F%98">错误八：可变和不可变</a></li><li><a href="#%E9%94%99%E8%AF%AF%E4%B9%9D%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">错误九：构造函数</a></li><li><a href="#%E9%94%99%E8%AF%AF%E5%8D%81%E5%88%B0%E5%BA%95%E6%98%AF%E4%BD%BF%E7%94%A8--%E8%BF%98%E6%98%AF%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">错误十：到底是使用 &quot;&quot; 还是构造函数</a></li><li><a href="#%E5%90%8E%E8%AE%B0">后记</a></li></ul></li></ul><p>那个谁，今天又写 bug 了，没错，他说的好像就是我。。。。。。</p><p>作为 Java 开发，我们在写代码的过程中难免会产生各种奇思妙想的 bug ，有些 bug 就挺让人无奈的，比如说各种空指针异常，在 ArrayList 的迭代中进行删除操作引发异常，数组下标越界异常等。</p><p>如果你不小心看到同事的代码出现了我所描述的这些 bug 后，那你就把我这篇文章甩给他！！！你甩给他一篇文章，并让他关注了一波 cxuan，你会收获他在后面像是如获至宝并满眼崇拜大神的目光。</p><p>废话不多说，下面进入正题。</p><h2 id="错误一-array-转换成-arraylist" tabindex="-1"><a class="header-anchor" href="#错误一-array-转换成-arraylist" aria-hidden="true">#</a> 错误一：Array 转换成 ArrayList</h2><p>Array 转换成 ArrayList 还能出错？这是哪个笨。。。。。。</p><p>等等，你先别着急说，先来看看是怎么回事。</p><p>如果要将数组转换为 ArrayList，我们一般的做法会是这样</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Arrays.asList() 将返回一个 ArrayList，它是 Arrays 中的私有静态类，它不是 java.util.ArrayList 类。如下图所示</p><p><img src="http://www.cxuan.vip/image-20230203180823167.png" alt=""></p><p>Arrays 内部的 ArrayList 只有 set、get、contains 等方法，但是没有能够像是 add 这种能够使其内部结构进行改变的方法，所以 Arrays 内部的 ArrayList 的大小是固定的。</p><p><img src="http://www.cxuan.vip/image-20230203180838777.png" alt=""></p><p>如果要创建一个能够添加元素的 ArrayList ，你可以使用下面这种创建方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> arrayList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 ArrayList 的构造方法是可以接收一个 Collection 集合的，所以这种创建方式是可行的。</p><p><img src="http://www.cxuan.vip/image-20230203180857076.png" alt=""></p><h2 id="错误二-检查数组是否包含某个值" tabindex="-1"><a class="header-anchor" href="#错误二-检查数组是否包含某个值" aria-hidden="true">#</a> 错误二：检查数组是否包含某个值</h2><p>检查数组中是否包含某个值，部分程序员经常会这么做：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>targetValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码虽然没错，但是有额外的性能损耗，正常情况下，不用将其再转换为 <em>set</em>，直接这么做就好了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>targetValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用下面这种方式（穷举法，循环判断）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>targetValue<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面第一段代码比第二段更具有可读性。</p><h2 id="错误三-在-list-中循环删除元素" tabindex="-1"><a class="header-anchor" href="#错误三-在-list-中循环删除元素" aria-hidden="true">#</a> 错误三：在 List 中循环删除元素</h2><p>这个错误我相信很多小伙伴都知道了，在循环中删除元素是个禁忌，有段时间内我在审查代码的时候就喜欢看团队的其他小伙伴有没有犯这个错误。</p><p><img src="http://www.cxuan.vip/image-20230203180916978.png" alt=""></p><p>说到底，为什么不能这么做（集合内删除元素）呢？且看下面代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个输出结果你能想到么？是不是蠢蠢欲动想试一波了？</p><p>答案其实是 [b,d]</p><p>为什么只有两个值？我这不是循环输出的么？</p><p>其实，在列表内部，当你使用<strong>外部</strong> remove 的时候，一旦 remove 一个元素后，其列表的内部结构会发生改变，一开始集合总容量是 4，remove 一个元素之后就会变为 3，然后再和 i 进行比较判断。。。。。。所以只能输出两个元素。</p><p>你可能知道使用迭代器是正确的 remove 元素的方式，你还可能知道 for-each 和 iterator 这种工作方式类似，所以你写下了如下代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你充满自信的 run xxx.main() 方法，结果。。。。。。<em>ConcurrentModificationException</em></p><p>为啥呢？</p><p>那是因为使用 ArrayList 中外部 remove 元素，会造成其内部结构和游标的改变。</p><p>在阿里开发规范上，也有不要在 for-each 循环内对元素进行 remove/add 操作的说明。</p><p><img src="http://www.cxuan.vip/image-20230203180933892.png" alt=""></p><p>所以大家要使用 List 进行元素的添加或者删除操作，一定要使用迭代器进行删除。也就是</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> iter <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>iter<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> s <span class="token operator">=</span> iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		iter<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.next() 必须在 .remove() 之前调用。 在 foreach 循环中，编译器会在删除元素的操作后调用 .next()，导致ConcurrentModificationException。</p><h2 id="错误四-hashtable-和-hashmap" tabindex="-1"><a class="header-anchor" href="#错误四-hashtable-和-hashmap" aria-hidden="true">#</a> 错误四：Hashtable 和 HashMap</h2><p>这是一条算法方面的规约：按照算法的约定，Hashtable 是数据结构的名称，但是在 Java 中，数据结构的名称是 HashMap，Hashtable 和 HashMap 的主要区别之一就是 Hashtable 是同步的，所以很多时候你不需要 Hashtable ，而是使用 HashMap。</p><h2 id="错误五-使用原始类型的集合" tabindex="-1"><a class="header-anchor" href="#错误五-使用原始类型的集合" aria-hidden="true">#</a> 错误五：使用原始类型的集合</h2><p>这是一条泛型方面的约束：</p><p>在 Java 中，原始类型和无界通配符类型很容易混合在一起。以 Set 为例，Set 是原始类型，而 Set&lt;?&gt; 是无界通配符类型。</p><p>比如下面使用原始类型 List 作为参数的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token punctuation">{</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">add</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> s <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码会抛出 <em>java.lang.ClassCastException</em> 异常，为啥呢？</p><p><img src="http://www.cxuan.vip/image-20230203180954305.png" alt=""></p><p>使用原始类型集合是比较危险的，因为原始类型会跳过泛型检查而且不安全，<code>Set、Set&lt;?&gt; 和 Set&lt;Object&gt;</code> 存在巨大的差异，而且泛型在使用中很容易造成类型擦除。</p><p>大家都知道，Java 的泛型是伪泛型，这是因为 Java 在编译期间，所有的泛型信息都会被擦掉，正确理解泛型概念的首要前提是理解类型擦除。Java 的泛型基本上都是在编译器这个层次上实现的，在生成的字节码中是不包含泛型中的类型信息的，使用泛型的时候加上类型参数，在编译器编译的时候会去掉，这个过程成为<strong>类型擦除</strong>。</p><p>如在代码中定义<code>List&lt;Object&gt;</code>和<code>List&lt;String&gt;</code>等类型，在编译后都会变成<code>List</code>，JVM 看到的只是<code>List</code>，而由泛型附加的类型信息对 JVM 是看不到的。Java 编译器会在编译时尽可能的发现可能出错的地方，但是仍然无法在运行时刻出现的类型转换异常的情况，类型擦除也是 Java 的泛型与 C++ 模板机制实现方式之间的重要区别。</p><p>比如下面这段示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> list2<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了两个<code>ArrayList</code>数组，不过一个是<code>ArrayList&lt;String&gt;</code>泛型类型的，只能存储字符串；一个是<code>ArrayList&lt;Integer&gt;</code>泛型类型的，只能存储整数，最后，我们通过<code>list1</code>对象和<code>list2</code>对象的<code>getClass()</code>方法获取他们的类的信息，最后发现结果为<code>true</code>。说明泛型类型<code>String</code>和<code>Integer</code>都被擦除掉了，只剩下原始类型。</p><p>所以，最上面那段代码，把 10 添加到 Object 类型中是完全可以的，然而将 Object 类型的 &quot;10&quot; 转换为 String 类型就会抛出类型转换异常。</p><h2 id="错误六-访问级别问题" tabindex="-1"><a class="header-anchor" href="#错误六-访问级别问题" aria-hidden="true">#</a> 错误六：访问级别问题</h2><p>我相信大部分开发在设计 class 或者成员变量的时候，都会简单粗暴的直接声明 <em>public xxx</em>，这是一种糟糕的设计，声明为 public 就很容易赤身裸体，这样对于类或者成员变量来说，都存在一定危险性。</p><h2 id="错误七-arraylist-和-linkedlist" tabindex="-1"><a class="header-anchor" href="#错误七-arraylist-和-linkedlist" aria-hidden="true">#</a> 错误七：ArrayList 和 LinkedList</h2><p>哈哈哈，ArrayList 是我见过程序员使用频次最高的工具类，没有之一。</p><p>当开发人员不知道 ArrayList 和 LinkedList 的区别时，他们经常使用 ArrayList（其实实际上，就算知道他们的区别，他们也不用 LinkedList，因为这点性能不值一提），因为看起来 ArrayList 更熟悉。。。。。。</p><p>但是实际上，ArrayList 和 LinkedList 存在巨大的性能差异，简而言之，如果添加/删除操作大量且随机访问操作不是很多，则应首选 LinkedList。如果存在大量的访问操作，那么首选 ArrayList，但是 ArrayList 不适合进行大量的添加/删除操作。</p><h2 id="错误八-可变和不可变" tabindex="-1"><a class="header-anchor" href="#错误八-可变和不可变" aria-hidden="true">#</a> 错误八：可变和不可变</h2><p>不可变对象有很多优点，比如简单、安全等。但是不可变对象需要为每个不同的值分配一个单独的对象，对象不具备<strong>复用性</strong>，如果这类对象过多可能会导致垃圾回收的成本很高。在可变和不可变之间进行选择时需要有一个平衡。</p><p>一般来说，可变对象用于避免产生过多的中间对象。 比如你要连接大量字符串。 如果你使用一个不可变的字符串，你会产生很多可以立即进行垃圾回收的对象。 这会浪费 CPU 的时间和精力，使用可变对象是正确的解决方案（例如 StringBuilder）。如下代码所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> result<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	result <span class="token operator">=</span> result <span class="token operator">+</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，正确选择可变对象还是不可变对象需要慎重抉择。</p><h2 id="错误九-构造函数" tabindex="-1"><a class="header-anchor" href="#错误九-构造函数" aria-hidden="true">#</a> 错误九：构造函数</h2><p>首先看一段代码，分析为什么会编译不通过？</p><p><img src="http://www.cxuan.vip/image-20230203181025470.png" alt=""></p><p>发生此编译错误是因为未定义默认 Super 的构造函数。 在 Java 中，如果一个类没有定义构造函数，编译器会默认为该类插入一个默认的无参数构造函数。 如果在 Super 类中定义了构造函数，在这种情况下 Super(String s)，编译器将不会插入默认的无参数构造函数。 这就是上面 Super 类的情况。</p><p>要想解决这个问题，只需要在 Super 中添加一个无参数的构造函数即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Super&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误十-到底是使用-还是构造函数" tabindex="-1"><a class="header-anchor" href="#错误十-到底是使用-还是构造函数" aria-hidden="true">#</a> 错误十：到底是使用 &quot;&quot; 还是构造函数</h2><p>考虑下面代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> x <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两段代码有什么区别吗？</p><p>可能下面这段代码会给出你回答</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> b <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// True</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// True</span>
 
<span class="token class-name">String</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// False</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是一个典型的内存分配问题。</p><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记" aria-hidden="true">#</a> 后记</h2><p>今天我给你汇总了一下 Java 开发中常见的 10 个错误，虽然比较简单，但是很容易忽视的问题，细节成就完美，看看你还会不会再犯了，如果再犯，嘿嘿嘿。</p><p>点赞在看分享朋友圈是基操哦！快来一键三连！！！</p>`,89),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","java-ignoretenmistakes.html.vue"]]);export{r as default};
