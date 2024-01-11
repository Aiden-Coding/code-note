import{_ as t,r as p,o as e,c as o,a as n,b as s,d as i,e as c}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_1356-根据数字二进制下-1-的数目排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1356-根据数字二进制下-1-的数目排序","aria-hidden":"true"},"#"),s(" 1356. 根据数字二进制下 1 的数目排序")],-1),r={href:"https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits/",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>题目链接：https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits/</p><p>给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。</p><p>如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。</p><p>请你返回排序后的数组。</p><p>示例 1：</p><ul><li>输入：arr = [0,1,2,3,4,5,6,7,8]</li><li>输出：[0,1,2,4,8,3,5,6,7]</li><li>解释：[0] 是唯一一个有 0 个 1 的数。 [1,2,4,8] 都有 1 个 1 。 [3,5,6] 有 2 个 1 。 [7] 有 3 个 1 。按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]</li></ul><p>示例 2：</p><ul><li>输入：arr = [1024,512,256,128,64,32,16,8,4,2,1]</li><li>输出：[1,2,4,8,16,32,64,128,256,512,1024]</li><li>解释：数组中所有整数二进制下都只有 1 个 1 ，所以你需要按照数值大小将它们排序。</li></ul><p>示例 3：</p><ul><li>输入：arr = [10000,10000]</li><li>输出：[10000,10000]</li></ul><p>示例 4：</p><ul><li>输入：arr = [2,3,5,7,11,13,17,19]</li><li>输出：[2,3,5,17,7,11,13,19]</li></ul><p>示例 5：</p><ul><li>输入：arr = [10,100,1000,10000]</li><li>输出：[10,100,10000,1000]</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题其实是考察如何计算一个数的二进制中1的数量。</p><p>我提供两种方法：</p><ul><li>方法一：</li></ul><p>朴实无华挨个计算1的数量，最多就是循环n的二进制位数，32位。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int bitCount(int n) {
    int count = 0; // 计数器
    while (n &gt; 0) {
        if((n &amp; 1) == 1)  count++;  // 当前位是1，count++
        n &gt;&gt;= 1 ; // n向右移位
    }
    return count;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法二</li></ul><p>这种方法，只循环n的二进制中1的个数次，比方法一高效的多</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int bitCount(int n) {
    int count = 0;
    while (n) {
        n &amp;= (n - 1); // 清除最低位的1
        count++;
    }
    return count;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以计算12的二进制1的数量为例，如图所示：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/1356.根据数字二进制下1的数目排序.png" alt="img"></p><p>下面我就使用方法二，来做这道题目：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>class Solution {
private:
    static int bitCount(int n) { // 计算n的二进制中1的数量
        int count = 0;
        while(n) {
            n &amp;= (n -1); // 清除最低位的1
            count++;
        }
        return count;
    }
    static bool cmp(int a, int b) {
        int bitA = bitCount(a);
        int bitB = bitCount(b);
        if (bitA == bitB) return a &lt; b; // 如果bit中1数量相同，比较数值大小
        return bitA &lt; bitB; // 否则比较bit中1数量大小
    }
public:
    vector&lt;int&gt; sortByBits(vector&lt;int&gt;&amp; arr) {
        sort(arr.begin(), arr.end(), cmp);
        return arr;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">cntInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>val <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> val <span class="token operator">&amp;</span> <span class="token punctuation">(</span>val <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            count <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortByBits</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boxed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> cnt1 <span class="token operator">=</span> <span class="token function">cntInt</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> cnt2 <span class="token operator">=</span> <span class="token function">cntInt</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token punctuation">(</span>cnt1 <span class="token operator">==</span> cnt2<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>cnt1<span class="token punctuation">,</span> cnt2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">intValue</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortByBits</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arr<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        arr<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> num<span class="token punctuation">:</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>count_bits<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> arr

    <span class="token keyword">def</span> <span class="token function">count_bits</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        count <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> num<span class="token punctuation">:</span>
            num <span class="token operator">&amp;</span><span class="token operator">=</span> num <span class="token operator">-</span> <span class="token number">1</span>
            count <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sortByBits</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否arr[i]&lt;=arr[j]</span>
    <span class="token comment">// 先比较1的数量，后比较值本身</span>
    cmp <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        c1<span class="token punctuation">,</span> c2 <span class="token operator">:=</span> <span class="token function">bitCount</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">bitCount</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> c1 <span class="token operator">==</span> c2 <span class="token punctuation">{</span>
            <span class="token keyword">return</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> c1 <span class="token operator">&lt;=</span> c2
    <span class="token punctuation">}</span>

    <span class="token comment">// 调用库函数</span>
    <span class="token comment">// 第一个参数是待排序切片，第二个是第i位是否小于第j位的函数</span>
    sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span>

    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">bitCount</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>count <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> num <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        num <span class="token operator">&amp;=</span> num<span class="token operator">-</span><span class="token number">1</span>    <span class="token comment">// 每次运算将最右侧的1变成0</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortByBits</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">bitCount</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token comment">// 计算n的二进制中1的数量</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
            n <span class="token operator">&amp;=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 清除最低位的1</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果有差，则按bits数排，如果无差，则按原值排</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">bitCount</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">bitCount</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">||</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),i(a)])]),d])}const h=t(l,[["render",k],["__file","1356.genjushuzierjinzhixia1deshumupaixu.html.vue"]]);export{h as default};
