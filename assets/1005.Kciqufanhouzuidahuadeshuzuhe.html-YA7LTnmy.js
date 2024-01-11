import{_ as p,r as o,o as i,c,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_1005-k次取反后最大化的数组和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1005-k次取反后最大化的数组和","aria-hidden":"true"},"#"),s(" 1005.K次取反后最大化的数组和")],-1),r={href:"https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/",target:"_blank",rel:"noopener noreferrer"},k=e('<p>给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）</p><p>以这种方式修改数组后，返回数组可能的最大和。</p><p>示例 1：</p><ul><li>输入：A = [4,2,3], K = 1</li><li>输出：5</li><li>解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。</li></ul><p>示例 2：</p><ul><li>输入：A = [3,-1,0,2], K = 3</li><li>输出：6</li><li>解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。</li></ul><p>示例 3：</p><ul><li>输入：A = [2,-3,-1,5,-4], K = 2</li><li>输出：13</li><li>解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。</li></ul><p>提示：</p><ul><li>1 &lt;= A.length &lt;= 10000</li><li>1 &lt;= K &lt;= 10000</li><li>-100 &lt;= A[i] &lt;= 100</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',11),d={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV138411G7LY",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题思路其实比较好想了，如何可以让数组和最大呢？</p><p>贪心的思路，局部最优：让绝对值大的负数变为正数，当前数值达到最大，整体最优：整个数组和达到最大。</p><p>局部最优可以推出全局最优。</p><p>那么如果将负数都转变为正数了，K依然大于0，此时的问题是一个有序正整数序列，如何转变K次正负，让 数组和 达到最大。</p><p>那么又是一个贪心：局部最优：只找数值最小的正整数进行反转，当前数值和可以达到最大（例如正整数数组{5, 3, 1}，反转1 得到-1 比 反转5得到的-5 大多了），全局最优：整个 数组和 达到最大。</p><p>虽然这道题目大家做的时候，可能都不会去想什么贪心算法，一鼓作气，就AC了。</p><p><strong>我这里其实是为了给大家展现出来 经常被大家忽略的贪心思路，这么一道简单题，就用了两次贪心！</strong></p><p>那么本题的解题步骤为：</p><ul><li>第一步：将数组按照绝对值大小从大到小排序，<strong>注意要按照绝对值的大小</strong></li><li>第二步：从前向后遍历，遇到负数将其变为正数，同时K--</li><li>第三步：如果K还大于0，那么反复转变数值最小的元素，将K用完</li><li>第四步：求和</li></ul><p>对应C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
static bool cmp(int a, int b) {
    return abs(a) &gt; abs(b);
}
public:
    int largestSumAfterKNegations(vector&lt;int&gt;&amp; A, int K) {
        sort(A.begin(), A.end(), cmp);       // 第一步
        for (int i = 0; i &lt; A.size(); i++) { // 第二步
            if (A[i] &lt; 0 &amp;&amp; K &gt; 0) {
                A[i] *= -1;
                K--;
            }
        }
        if (K % 2 == 1) A[A.size() - 1] *= -1; // 第三步
        int result = 0;
        for (int a : A) result += a;        // 第四步
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(nlogn)</li><li>空间复杂度: O(1)</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>贪心的题目如果简单起来，会让人简单到开始怀疑：本来不就应该这么做么？这也算是算法？我认为这不是贪心？</p><p>本题其实很简单，不会贪心算法的同学都可以做出来，但是我还是全程用贪心的思路来讲解。</p><p>因为贪心的思考方式一定要有！</p><p><strong>如果没有贪心的思考方式（局部最优，全局最优），很容易陷入贪心简单题凭感觉做，贪心难题直接不会做，其实这样就锻炼不了贪心的思考方式了</strong>。</p><p>所以明知道是贪心简单题，也要靠贪心的思考方式来解题，这样对培养解题感觉很有帮助。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestSumAfterKNegations</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// 将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小</span>
	nums <span class="token operator">=</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
		     <span class="token punctuation">.</span><span class="token function">boxed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		     <span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">)</span>
		     <span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">intValue</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>	    
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">//从前向后遍历，遇到负数将其变为正数，同时K--</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">K</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	    	<span class="token class-name">K</span><span class="token operator">--</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果K还大于0，那么反复转变数值最小的元素，将K用完</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">K</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> nums<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>贪心</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">largestSumAfterKNegations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> A<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> K<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        A<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 第一步：按照绝对值降序排序数组A</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 第二步：执行K次取反操作</span>
            <span class="token keyword">if</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">and</span> K <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span>
                K <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token keyword">if</span> K <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 第三步：如果K还有剩余次数，将绝对值最小的元素取反</span>
            A<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span>

        result <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>  <span class="token comment"># 第四步：计算数组A的元素和</span>
        <span class="token keyword">return</span> result

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func largestSumAfterKNegations(nums []int, K int) int {
	sort.Slice(nums, func(i, j int) bool {
		return math.Abs(float64(nums[i])) &gt; math.Abs(float64(nums[j]))
	})
  
	for i := 0; i &lt; len(nums); i++ {
		if K &gt; 0 &amp;&amp; nums[i] &lt; 0 {
			nums[i] = -nums[i]
			K--
		}
	}

	if K%2 == 1 {
		nums[len(nums)-1] = -nums[len(nums)-1]
	}

	result := 0
	for i := 0; i &lt; len(nums); i++ {
		result += nums[i]
	}
	return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var largestSumAfterKNegations = function(nums, k) {

    nums.sort((a,b) =&gt; Math.abs(b) - Math.abs(a))
    
    for(let i = 0 ;i &lt; nums.length; i++){
        if(nums[i] &lt; 0 &amp;&amp; k &gt; 0){
            nums[i] = - nums[i];
            k--;
        }
    }

    // 若k还大于0,则寻找最小的数进行不断取反
    while( k &gt; 0 ){
        nums[nums.length-1] = - nums[nums.length-1]
        k--;
    }

    // 使用箭头函数的隐式返回值时，需使用简写省略花括号，否则要在 a + b 前加上 return
    return nums.reduce((a, b) =&gt; a + b)
};

// 版本二 (优化: 一次遍历)
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) =&gt; Math.abs(b) - Math.abs(a)); // 排序
    let sum = 0;
    for(let i = 0; i &lt; nums.length; i++) {
        if(nums[i] &lt; 0 &amp;&amp; k-- &gt; 0) { // 负数取反（k 数量足够时）
            nums[i] = -nums[i];
        }
        sum += nums[i]; // 求和
    }
    if(k % 2 &gt; 0) { // k 有多余的（k若消耗完则应为 -1）
        sum -= 2 * nums[nums.length - 1]; // 减去两倍的最小值（因为之前加过一次）
    }
    return sum;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn largest_sum_after_k_negations(mut nums: Vec&lt;i32&gt;, mut k: i32) -&gt; i32 {
        nums.sort_by_key(|b| std::cmp::Reverse(b.abs()));
        for v in nums.iter_mut() {
            if *v &lt; 0 &amp;&amp; k &gt; 0 {
                *v *= -1;
                k -= 1;
            }
        }
        if k % 2 == 1 {
            *nums.last_mut().unwrap() *= -1;
        }
        nums.iter().sum()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">abs</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>

<span class="token comment">// 对数组求和</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>nums<span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numsSize<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span><span class="token operator">*</span> v1<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span><span class="token operator">*</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span>v2<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">largestSumAfterKNegations</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">qsort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> numsSize<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numsSize<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遍历数组，若当前元素&lt;0则将当前元素转变，k--</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token operator">--</span>k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 若遍历完数组后k还有剩余（此时所有元素应均为正），则将绝对值最小的元素nums[numsSize - 1]变为负</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        nums<span class="token punctuation">[</span>numsSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> numsSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">largestSumAfterKNegations</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curIndex <span class="token operator">&lt;</span> length <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>curIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>curIndex<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            k<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> largestSumAfterKNegations<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> nums<span class="token punctuation">.</span>sortWith<span class="token punctuation">(</span>math<span class="token punctuation">.</span>abs<span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">&gt;</span> math<span class="token punctuation">.</span>abs<span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> kk <span class="token operator">=</span> k <span class="token comment">// 因为k是不可变量，所以要赋值给一个可变量</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> num<span class="token punctuation">.</span>indices<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>num<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> kk <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// 取反</span>
        kk <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// kk对2取余，结果为0则为偶数不需要取反，结果为1为奇数，只需要对最后的数字进行反转就可以</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>kk <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> num<span class="token punctuation">(</span>num<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span>

    num<span class="token punctuation">.</span>sum <span class="token comment">// 最后返回数字的和</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function b(h,g){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),k,n("p",null,[n("strong",null,[n("a",d,[s("《代码随想录》算法视频公开课"),t(a)]),s("："),n("a",m,[s("贪心算法，这不就是常识？还能叫贪心？LeetCode：1005.K次取反后最大化的数组和"),t(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),v])}const y=p(l,[["render",b],["__file","1005.Kciqufanhouzuidahuadeshuzuhe.html.vue"]]);export{y as default};
