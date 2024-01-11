import{_ as e,r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"双指针风骚起来，也是无敌")],-1),r=n("h1",{id:"_977-有序数组的平方",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_977-有序数组的平方","aria-hidden":"true"},"#"),s(" 977.有序数组的平方")],-1),k={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},d=t('<p>给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。</p><p>示例 1：</p><ul><li>输入：nums = [-4,-1,0,3,10]</li><li>输出：[0,1,9,16,100]</li><li>解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]</li></ul><p>示例 2：</p><ul><li>输入：nums = [-7,-3,2,3,11]</li><li>输出：[4,9,9,49,121]</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',6),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1QB4y1D7ep",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><h3 id="暴力排序" tabindex="-1"><a class="header-anchor" href="#暴力排序" aria-hidden="true">#</a> 暴力排序</h3><p>最直观的想法，莫过于：每个数平方之后，排个序，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) {
        for (int i = 0; i &lt; A.size(); i++) {
            A[i] *= A[i];
        }
        sort(A.begin(), A.end()); // 快速排序
        return A;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时间复杂度是 O(n + nlogn)， 可以说是O(nlogn)的时间复杂度，但为了和下面双指针法算法时间复杂度有鲜明对比，我记为 O(n + nlog n)。</p><h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h3><p>数组其实是有序的， 只不过负数平方之后可能成为最大数了。</p><p>那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。</p><p>此时可以考虑双指针法了，i指向起始位置，j指向终止位置。</p><p>定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置。</p><p>如果<code>A[i] * A[i] &lt; A[j] * A[j]</code> 那么<code>result[k--] = A[j] * A[j];</code> 。</p><p>如果<code>A[i] * A[i] &gt;= A[j] * A[j]</code> 那么<code>result[k--] = A[i] * A[i];</code> 。</p><p>如动画所示：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/977.有序数组的平方.gif" alt=""></p><p>不难写出如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) {
        int k = A.size() - 1;
        vector&lt;int&gt; result(A.size(), 0);
        for (int i = 0, j = A.size() - 1; i &lt;= j;) { // 注意这里要i &lt;= j，因为最后要处理两个元素
            if (A[i] * A[i] &lt; A[j] * A[j])  {
                result[k--] = A[j] * A[j];
                j--;
            }
            else {
                result[k--] = A[i] * A[i];
                i++;
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的时间复杂度为O(n)，相对于暴力排序的解法O(n + nlog n)还是提升不少的。</p><p><strong>这里还是说一下，大家不必太在意leetcode上执行用时，打败多少多少用户，这个就是一个玩具，非常不准确。</strong></p><p>做题的时候自己能分析出来时间复杂度就可以了，至于leetcode上执行用时，大概看一下就行，只要达到最优的时间复杂度就可以了，</p><p>一样的代码多提交几次可能就击败百分之百了.....</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public int[] sortedSquares(int[] nums) {
        int right = nums.length - 1;
        int left = 0;
        int[] result = new int[nums.length];
        int index = result.length - 1;
        while (left &lt;= right) {
            if (nums[left] * nums[left] &gt; nums[right] * nums[right]) {
                // 正数的相对位置是不变的， 需要调整的是负数平方后的相对位置
                result[index--] = nums[left] * nums[left];
                ++left;
            } else {
                result[index--] = nums[right] * nums[right];
                --right;
            }
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>r<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>（版本一）双指针法
class Solution:
    def sortedSquares(self, nums: List[int]) -&gt; List[int]:
        l, r, i = 0, len(nums)-1, len(nums)-1
        res = [float(&#39;inf&#39;)] * len(nums) # 需要提前定义列表，存放结果
        while l &lt;= r:
            if nums[l] ** 2 &lt; nums[r] ** 2: # 左右边界进行对比，找出最大值
                res[i] = nums[r] ** 2
                r -= 1 # 右指针往左移动
            else:
                res[i] = nums[l] ** 2
                l += 1 # 左指针往右移动
            i -= 1 # 存放结果的指针需要往前平移一位
        return res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>（版本二）暴力排序法
class Solution:
    def sortedSquares(self, nums: List[int]) -&gt; List[int]:
        for i in range(len(nums)):
            nums[i] *= nums[i]
        nums.sort()
        return nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>（版本三）暴力排序法+列表推导法
class Solution:
    def sortedSquares(self, nums: List[int]) -&gt; List[int]:
        return sorted(x*x for x in nums)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func sortedSquares(nums []int) []int {
	n := len(nums)
	i, j, k := 0, n-1, n-1
	ans := make([]int, n)
	for i &lt;= j {
		lm, rm := nums[i]*nums[i], nums[j]*nums[j]
		if lm &gt; rm {
			ans[k] = lm
			i++
		} else {
			ans[k] = rm
			j--
		}
		k--
	}
	return ans
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">sorted_squares</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> i<span class="token punctuation">,</span><span class="token keyword">mut</span> j<span class="token punctuation">,</span><span class="token keyword">mut</span> k<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> ans <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> i <span class="token operator">&lt;=</span> j<span class="token punctuation">{</span>
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
                ans<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                j <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                ans<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            k <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ans
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript：</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(0);
    let i = 0, j = n - 1, k = n - 1;
    while (i &lt;= j) {
        let left = nums[i] * nums[i],
            right = nums[j] * nums[j];
        if (left &lt; right) {
            res[k--] = right;
            j--;
        } else {
            res[k--] = left;
            i++;
        }
    }
    return res;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript：</h3><p>双指针法：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组</span>
        <span class="token comment">// 在同为负数的情况下，左侧的平方值一定大于右侧的平方值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 使用 Array.prototype.unshift() 直接在数组的首项插入当前最大值</span>
            ans<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>骚操作法（暴力思路）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">sortedSquares</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指向新数组最后一个元素</span>
    <span class="token keyword">var</span> k <span class="token operator">=</span> nums<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 指向原数组第一个元素</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 指向原数组最后一个元素</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 初始化新数组(用-1填充)</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> nums<span class="token punctuation">.</span>count<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>nums<span class="token punctuation">.</span>count <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            j <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        k <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby:</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">sorted_squares</span></span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right
    <span class="token keyword">if</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span>
      result <span class="token operator">&lt;&lt;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span>
      left <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
      result <span class="token operator">&lt;&lt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span>
      right <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>
  result<span class="token punctuation">.</span>reverse
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//返回的数组大小就是原数组大小</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> numsSize<span class="token punctuation">;</span>
    <span class="token comment">//创建两个指针，right指向数组最后一位元素，left指向数组第一位元素</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> numsSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//最后要返回的结果数组</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> numsSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> index<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>index <span class="token operator">=</span> numsSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> index<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//左指针指向元素的平方</span>
        <span class="token keyword">int</span> lSquare <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//右指针指向元素的平方</span>
        <span class="token keyword">int</span> rSquare <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//若左指针指向元素平方比右指针指向元素平方大，将左指针指向元素平方放入结果数组。左指针右移一位</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>lSquare <span class="token operator">&gt;</span> rSquare<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> lSquare<span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">//若右指针指向元素平方比左指针指向元素平方大，将右指针指向元素平方放入结果数组。右指针左移一位</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> rSquare<span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//返回结果数组</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">Integer<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token parameter">$nums</span>
     * <span class="token keyword">@return</span> <span class="token class-name">Integer<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">sortedSquares</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 双指针法</span>
        <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token variable">$k</span> <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$j</span> <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token variable">$j</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$k</span><span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token variable">$j</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$k</span><span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> 
        <span class="token keyword">return</span> <span class="token variable">$res</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin:</h3><p>双指针法</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> Solution <span class="token punctuation">{</span>
    <span class="token comment">// 双指针法</span>
    <span class="token keyword">fun</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> IntArray<span class="token punctuation">)</span><span class="token operator">:</span> IntArray <span class="token punctuation">{</span>
        <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">IntArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
        <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 指向数组的最左端</span>
        <span class="token keyword">var</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 指向数组端最右端</span>
        <span class="token comment">// 选择平方数更大的那一个往 res 数组中倒序填充</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token keyword">in</span> nums<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span> downTo <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
                left<span class="token operator">++</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
                right<span class="token operator">--</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>骚操作（暴力思路）</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> Solution <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> IntArray<span class="token punctuation">)</span><span class="token operator">:</span> IntArray <span class="token punctuation">{</span>
        <span class="token comment">// left 与 right 用来控制循环，类似于滑动窗口</span>
        <span class="token keyword">var</span> left<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> right<span class="token operator">:</span> Int <span class="token operator">=</span> nums<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">// 将每个数字的平方经过排序后加入result数值</span>
        <span class="token keyword">var</span> result<span class="token operator">:</span> IntArray <span class="token operator">=</span> <span class="token function">IntArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> k<span class="token operator">:</span> Int <span class="token operator">=</span> nums<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 从大到小，从后向前填满数组</span>
            <span class="token comment">// [left, right] 控制循环</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
                left<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
                right<span class="token operator">--</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><p>双指针:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> sortedSquares<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">var</span> top <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当左侧平方小于等于右侧，res数组顶部放右侧的平方，并且top下移，j左移</span>
        res<span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token operator">=</span> nums<span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">(</span>j<span class="token punctuation">)</span>
        top <span class="token operator">-=</span> <span class="token number">1</span>
        j <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当左侧平方大于右侧，res数组顶部放左侧的平方，并且top下移，i右移</span>
        res<span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token operator">=</span> nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        top <span class="token operator">-=</span> <span class="token number">1</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>骚操作(暴力思路):</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> sortedSquares<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">.</span>map<span class="token punctuation">(</span>x<span class="token keyword">=&gt;</span><span class="token punctuation">{</span>x<span class="token operator">*</span>x<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sortWith<span class="token punctuation">(</span>_ <span class="token operator">&lt;</span> _<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">SortedSquares</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span></span> k <span class="token operator">=</span> nums<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

C# LINQ：
\`\`\`csharp
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">SortedSquares</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function h(g,y){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("a",k,[s("力扣题目链接"),p(a)])]),d,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),p(a)]),s("："),n("a",m,[s("双指针法经典题目!LeetCode:977.有序数组的平方"),p(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),b])}const w=e(i,[["render",h],["__file","0977.youxushuzudepingfang.html.vue"]]);export{w as default};
