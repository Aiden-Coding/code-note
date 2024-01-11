import{_ as n,o as s,c as a,e as t}from"./app-3RcBQnkC.js";const p={},e=t(`<h1 id="comparable-和-comparator的理解" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator的理解" aria-hidden="true">#</a> Comparable 和 Comparator的理解</h1><ul><li><a href="#comparable-%E5%92%8C-comparator%E7%9A%84%E7%90%86%E8%A7%A3">Comparable 和 Comparator的理解</a><ul><li><a href="#%E5%AF%B9comparable-%E7%9A%84%E8%A7%A3%E9%87%8A">对Comparable 的解释</a><ul><li><a href="#compareto%E6%96%B9%E6%B3%95%E4%B8%8Eequals%E6%96%B9%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83">compareTo()方法与equals()方法的比较</a></li><li><a href="#%E4%BB%A3%E7%A0%81">代码</a><ul><li><a href="#compareto%E6%96%B9%E6%B3%95%E6%8A%9B%E5%87%BA%E5%BC%82%E5%B8%B8">compareTo()方法抛出异常</a></li></ul></li></ul></li><li><a href="#%E5%AF%B9comparator-%E7%9A%84%E8%A7%A3%E9%87%8A">对Comparator 的解释</a><ul><li><a href="#comparator%E6%AF%94%E8%BE%83%E5%99%A8%E7%9A%84%E6%96%B9%E6%B3%95">Comparator比较器的方法</a></li><li><a href="#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0">代码实现</a></li></ul></li><li><a href="#comparable-%E5%92%8C-comparator-%E7%9A%84%E5%AF%B9%E6%AF%94">Comparable 和 Comparator 的对比</a></li></ul></li></ul><h2 id="对comparable-的解释" tabindex="-1"><a class="header-anchor" href="#对comparable-的解释" aria-hidden="true">#</a> 对Comparable 的解释</h2><p>Comparable是一个排序接口</p><p>此接口给实现类提供了一个排序的方法，此接口有且只有一个方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>compareTo方法接受任意类型的参数，来进行比较</p><p>list或者数组实现了这个接口能够自动的进行排序，相关类的方法有Collections.sort()，Arrays.sort();</p><p>SortedMap 接口的key内置了compareTo方法来进行键排序，SortedSet 也是内置了compareTo方法作为其内部元素的比较手段</p><h3 id="compareto-方法与equals-方法的比较" tabindex="-1"><a class="header-anchor" href="#compareto-方法与equals-方法的比较" aria-hidden="true">#</a> compareTo()方法与equals()方法的比较</h3><p>compareTo()方法不同于equals()方法，它的返回值是一个int类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span>d <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 返回 -1 说明 a 要比 b 小</span>
c<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 返回  1 说明 c 要比 b 大</span>
d<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 返回  0 说明 d 和c  相等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而equals 方法返回的是boolean 类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>x<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token comment">// true 说明x 与 y 的值 相等 , false 说明x 与 y 的值 不相等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><p>Comparable 更像是一个内部排序接口，一个类实现了Comparable比较器，就意味着它本身支持排序；可以用Collections.sort() 或者 Arrays.sort() 进行排序</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> record<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> record<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>record <span class="token operator">=</span> record<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 拿名字和成绩进行对比</span>
        <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> record <span class="token operator">==</span> student<span class="token punctuation">.</span>record<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Student</span> stu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用String 类的compareTo方法，返回值 -1，0，1</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    get and set<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparableTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;liming&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;xiaohong&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;zhoubin&quot;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoli&quot;</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 排序前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>studentList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>studentList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>studentList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student <span class="token operator">:</span> studentList<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;xiaohong&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p>[liming = 90, xiaohong = 95, zhoubin = 88, xiaoli = 94] [liming = 90, xiaohong = 95, xiaoli = 94, zhoubin = 88]</p><p>false true false false</p><p>对 Arrays.asList() 的解释说明 http://xxxx.com</p><h4 id="compareto-方法抛出异常" tabindex="-1"><a class="header-anchor" href="#compareto-方法抛出异常" aria-hidden="true">#</a> compareTo()方法抛出异常</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>NullPointerException : 如果 对象o为null，抛出空指针异常</p><p>ClassCastException: 如果需要类型转换之后进行比较，可能会抛出ClassCastException</p><h2 id="对comparator-的解释" tabindex="-1"><a class="header-anchor" href="#对comparator-的解释" aria-hidden="true">#</a> 对Comparator 的解释</h2><p>Comparator 相当于一个比较器，作用和Comparable类似，也是使用Collections.sort() 和 Arrays.sort()来进行排序，也可以对SortedMap 和 SortedSet 的数据结构进行精准的控制，你可以不用实现此接口或者Comparable接口就可以实现次序比较。 TreeSet 和 TreeMap的数据结构底层也是使用Comparator 来实现。不同于Comparable ，比较器可以任选地允许比较null参数，同时保持要求等价关系。</p><h3 id="comparator比较器的方法" tabindex="-1"><a class="header-anchor" href="#comparator比较器的方法" aria-hidden="true">#</a> Comparator比较器的方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> o1<span class="token punctuation">,</span> <span class="token class-name">T</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>compare() 方法的用法和Comparable 的 compareTo() 用法基本一样，这个方法不允许进行null值比较，会抛出空指针异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>jdk1.8 之后又增加了很多新的方法</p><p>很多都是关于函数式编程的，在这里先不做讨论了</p><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AscComparator</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> stu1<span class="token punctuation">,</span> <span class="token class-name">Student</span> stu2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 根据成绩降序排列</span>
        <span class="token keyword">return</span> stu1<span class="token punctuation">.</span><span class="token function">getRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> stu2<span class="token punctuation">.</span><span class="token function">getRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparatorTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;liming&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;xiaohong&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;zhoubin&quot;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoli&quot;</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1. 可以实现自己的外部接口进行排序</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>studentList<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">AscComparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>studentList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2、 可以匿名内部类实现自定义排序</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>studentList<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> stu1<span class="token punctuation">,</span> <span class="token class-name">Student</span> stu2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> stu2<span class="token punctuation">.</span><span class="token function">getRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> stu1<span class="token punctuation">.</span><span class="token function">getRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>studentList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用Arrays.sort()进行排序，不过针对的数据结构是数组。</p><h2 id="comparable-和-comparator-的对比" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator-的对比" aria-hidden="true">#</a> Comparable 和 Comparator 的对比</h2><p>1、Comparable 更像是自然排序</p><p>2、Comparator 更像是定制排序</p><p><strong>同时存在时采用 Comparator（定制排序）的规则进行比较。</strong></p><p>对于一些普通的数据类型（比如 String, Integer, Double…），它们默认实现了Comparable 接口，实现了 compareTo 方法，我们可以直接使用。</p><p>而对于一些自定义类，它们可能在不同情况下需要实现不同的比较策略，我们可以新创建 Comparator 接口，然后使用特定的 Comparator 实现进行比较。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivkbczxoj31l20t8al5.jpg" alt="image-20210716163352584"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivl4khz9j31d60h8mze.jpg" alt="image-20210716163433337"></p>`,44),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","java-comparableandcomparator.html.vue"]]);export{r as default};
