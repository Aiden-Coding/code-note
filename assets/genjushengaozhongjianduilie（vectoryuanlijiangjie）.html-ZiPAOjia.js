import{_ as p,r as i,o as c,c as o,a as s,b as n,d as e,e as t}from"./app-3RcBQnkC.js";const l={},u=s("h1",{id:"贪心算法-根据身高重建队列-续集",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#贪心算法-根据身高重建队列-续集","aria-hidden":"true"},"#"),n(" 贪心算法：根据身高重建队列（续集）")],-1),r={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>这里专门写一篇文章来详细说一说这个问题。</p><p>使用vector的代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一，使用vector（动态数组）
class Solution {
public:
    static bool cmp(const vector&lt;int&gt; a, const vector&lt;int&gt; b) {
        if (a[0] == b[0]) return a[1] &lt; b[1];
        return a[0] &gt; b[0];
    }
    vector&lt;vector&lt;int&gt;&gt; reconstructQueue(vector&lt;vector&lt;int&gt;&gt;&amp; people) {
        sort (people.begin(), people.end(), cmp);
        vector&lt;vector&lt;int&gt;&gt; que;
        for (int i = 0; i &lt; people.size(); i++) {
            int position = people[i][1];
            que.insert(que.begin() + position, people[i]);
        }
        return que;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>耗时如下： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201218203611181.png" alt="vectorinsert"></p><p>其直观上来看数组的insert操作是O(n)的，整体代码的时间复杂度是O(n^2)。</p><p>这么一分析好像和版本二链表实现的时间复杂度是一样的啊，为什么提交之后效率会差距这么大呢？</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二，使用list（链表）
class Solution {
public:
    // 身高从大到小排（身高相同k小的站前面）
    static bool cmp(const vector&lt;int&gt; a, const vector&lt;int&gt; b) {
        if (a[0] == b[0]) return a[1] &lt; b[1];
        return a[0] &gt; b[0];
    }
    vector&lt;vector&lt;int&gt;&gt; reconstructQueue(vector&lt;vector&lt;int&gt;&gt;&amp; people) {
        sort (people.begin(), people.end(), cmp);
        list&lt;vector&lt;int&gt;&gt; que; // list底层是链表实现，插入效率比vector高的多
        for (int i = 0; i &lt; people.size(); i++) {
            int position = people[i][1]; // 插入到下标为position的位置
            std::list&lt;vector&lt;int&gt;&gt;::iterator it = que.begin();
            while (position--) { // 寻找在插入位置
                it++;
            }
            que.insert(it, people[i]);
        }
        return vector&lt;vector&lt;int&gt;&gt;(que.begin(), que.end());
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>耗时如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201218200756257.png" alt="使用链表"></p><p>大家都知道对于普通数组，一旦定义了大小就不能改变，例如int a[10];，这个数组a至多只能放10个元素，改不了的。</p><p>对于动态数组，就是可以不用关心初始时候的大小，可以随意往里放数据，那么耗时的原因就在于动态数组的底层实现。</p><p>动态数组为什么可以不受初始大小的限制，可以随意push_back数据呢？</p><p><strong>首先vector的底层实现也是普通数组</strong>。</p><p>vector的大小有两个维度一个是size一个是capicity，size就是我们平时用来遍历vector时候用的，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (int i = 0; i &lt; vec.size(); i++) {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而capicity是vector底层数组（就是普通数组）的大小，capicity可不一定就是size。</p><p>当insert数据的时候，如果已经大于capicity，capicity会成倍扩容，但对外暴漏的size其实仅仅是+1。</p><p>那么既然vector底层实现是普通数组，怎么扩容的？</p><p>就是重新申请一个二倍于原数组大小的数组，然后把数据都拷贝过去，并释放原数组内存。（对，就是这么原始粗暴的方法！）</p><p>举一个例子，如图： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201218185902217.png" alt="vector原理"></p><p>原vector中的size和capicity相同都是3，初始化为1 2 3，此时要push_back一个元素4。</p><p>那么底层其实就要申请一个大小为6的普通数组，并且把原元素拷贝过去，释放原数组内存，<strong>注意图中底层数组的内存起始地址已经变了</strong>。</p><p><strong>同时也注意此时capicity和size的变化，关键的地方我都标红了</strong>。</p>`,23),v={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},k=s("strong",null,"虽然表面上复杂度是O(n^2)，但是其底层都不知道额外做了多少次全量拷贝了，所以算上vector的底层拷贝，整体时间复杂度可以认为是O(n^2 + t × n)级别的，t是底层拷贝的次数",-1),m={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>这种方法需要自己模拟插入的操作，不仅没有直接调用insert接口那么方便，需要手动模拟插入操作，而且效率也不高！</p><p>手动模拟的过程其实不是很简单的，需要很多细节，我粗略写了一个版本，如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本三
// 使用vector，但不让它动态扩容
class Solution {
public:
    static bool cmp(const vector&lt;int&gt; a, const vector&lt;int&gt; b) {
        if (a[0] == b[0]) return a[1] &lt; b[1];
        return a[0] &gt; b[0];
    }
    vector&lt;vector&lt;int&gt;&gt; reconstructQueue(vector&lt;vector&lt;int&gt;&gt;&amp; people) {
        sort (people.begin(), people.end(), cmp);
        vector&lt;vector&lt;int&gt;&gt; que(people.size(), vector&lt;int&gt;(2, -1));
        for (int i = 0; i &lt; people.size(); i++) {
            int position = people[i][1];
            if (position == que.size() - 1) que[position] = people[i];
            else { // 将插入位置后面的元素整体向后移
                for (int j = que.size() - 2; j &gt;= position; j--) que[j + 1] = que[j];
                que[position] = people[i];
            }
        }
        return que;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>耗时如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201218200626718.png" alt="vector手动模拟insert"></p><p>这份代码就是不让vector动态扩容，全程我们自己模拟insert的操作，大家也可以直观的看出是一个O(n^2)的方法了。</p><p>但这份代码在leetcode上统计的耗时甚至比版本一的还高，我们都不让它动态扩容了，为什么耗时更高了呢？</p><p>一方面是leetcode的耗时统计本来就不太准，忽高忽低的，只能测个大概。</p><p>另一方面：可能是就算避免的vector的底层扩容，但这个固定大小的数组，每次向后移动元素赋值的次数比方法一中移动赋值的次数要多很多。</p><p>因为方法一中一开始数组是很小的，插入操作，向后移动元素次数比较少，即使有偶尔的扩容操作。而方法三每次都是按照最大数组规模向后移动元素的。</p><p>所以对于两种使用数组的方法一和方法三，也不好确定谁优，但一定都没有使用方法二链表的效率高！</p>`,11),g={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>大家应该发现了，编程语言中一个普通容器的insert，delete的使用，都可能对写出来的算法的有很大影响！</p><p>如果抛开语言谈算法，除非从来不用代码写算法纯分析，<strong>否则的话，语言功底不到位O(n)的算法可以写出O(n^2)的性能</strong>。</p><p>相信在这里学习算法的录友们，都是想在软件行业长远发展的，都是要从事编程的工作，那么一定要深耕好一门编程语言，这个非常重要！</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 版本二，使用list（链表）</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">LinkedList</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span><span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">reconstruct_queue</span><span class="token punctuation">(</span><span class="token keyword">mut</span> people<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">LinkedList</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        people<span class="token punctuation">.</span><span class="token function">sort_by</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>a<span class="token punctuation">,</span> b<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>people<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> v <span class="token keyword">in</span> people<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> <span class="token keyword">mut</span> back_link <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">split_off</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> back_link<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        queue<span class="token punctuation">.</span><span class="token function">into_iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><p>Go中slice的<code>append</code>操作和C++中vector的扩容机制基本相同。</p><p>说是基本呢，其实是因为大家平时刷题和工作中遇到的数据不会特别大。</p><p>具体来说，当当前slice的长度小于<strong>1024</strong>时，执行<code>append</code>操作，新slice的capacity会变成当前的2倍；而当slice长度大于等于<strong>1024</strong>时，slice的扩容变成了每次增加当前slice长度的<strong>1/4</strong>。</p><p>在Go Slice的底层实现中，如果capacity不够时，会做一个reslice的操作，底层数组也会重新被复制到另一块内存区域中，所以<code>append</code>一个元素，不一定是O(1), 也可能是O(n)哦。</p>`,12);function f(_,E){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,s("p",null,[n("在讲解"),s("a",r,[n("贪心算法：根据身高重建队列"),e(a)]),n("中，我们提到了使用vector（C++中的动态数组）来进行insert操作是费时的。")]),d,s("p",null,[n("而在"),s("a",v,[n("贪心算法：根据身高重建队列"),e(a)]),n("中，我们使用vector来做insert的操作，此时大家可会发现，"),k,n("。")]),s("p",null,[n("那么是不是可以直接确定好vector的大小，不让它在动态扩容了，例如在"),s("a",m,[n("贪心算法：根据身高重建队列"),e(a)]),n("中已经给出了有people.size这么多的人，可以定义好一个固定大小的vector，这样我们就可以控制vector，不让它底层动态扩容。")]),b,s("p",null,[n("一波分析之后，对于"),s("a",g,[n("贪心算法：根据身高重建队列"),e(a)]),n(" ，大家就安心使用链表吧！别折腾了，相当于我替大家折腾了一下。")]),h])}const B=p(l,[["render",f],["__file","genjushengaozhongjianduilie（vectoryuanlijiangjie）.html.vue"]]);export{B as default};
