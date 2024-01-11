import{_ as e,r as o,o as i,c,a as s,b as n,d as t,e as p}from"./app-3RcBQnkC.js";const l={},u=s("h1",{id:"_377-组合总和-iv",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_377-组合总和-iv","aria-hidden":"true"},"#"),n(" 377. 组合总和 Ⅳ")],-1),r={href:"https://leetcode.cn/problems/combination-sum-iv/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>难度：中等</p><p>给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。</p><p>示例:</p><ul><li>nums = [1, 2, 3]</li><li>target = 4</li></ul><p>所有可能的组合为： (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1)</p><p>请注意，顺序不同的序列被视作不同的组合。</p><p>因此输出为 7。</p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',8),k={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1V14y1n7B6/",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),b={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,[n("本题题目描述说是求组合，但又说是可以元素相同顺序不同的组合算两个组合，"),s("strong",null,"其实就是求排列！")],-1),g=s("p",null,"弄清什么是组合，什么是排列很重要。",-1),f=s("p",null,"组合不强调顺序，(1,5)和(5,1)是同一个组合。",-1),_=s("p",null,"排列强调顺序，(1,5)和(5,1)是两个不同的排列。",-1),y={href:"https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html",target:"_blank",rel:"noopener noreferrer"},w=p('<p>但其本质是本题求的是排列总和，而且仅仅是求排列总和的个数，并不是把所有的排列都列出来。</p><p><strong>如果本题要把排列都列出来的话，只能使用回溯算法爆搜</strong>。</p><p>动规五部曲分析如下：</p><ol><li>确定dp数组以及下标的含义</li></ol><p><strong>dp[i]: 凑成目标正整数为i的排列个数为dp[i]</strong></p><ol start="2"><li>确定递推公式</li></ol><p>dp[i]（考虑nums[j]）可以由 dp[i - nums[j]]（不考虑nums[j]） 推导出来。</p><p>因为只要得到nums[j]，排列个数dp[i - nums[j]]，就是dp[i]的一部分。</p>',8),E={href:"https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},B=p('<p>本题也一样。</p><ol start="3"><li>dp数组如何初始化</li></ol><p>因为递推公式dp[i] += dp[i - nums[j]]的缘故，dp[0]要初始化为1，这样递归其他dp[i]的时候才会有数值基础。</p><p>至于dp[0] = 1 有没有意义呢？</p><p>其实没有意义，所以我也不去强行解释它的意义了，因为题目中也说了：给定目标值是正整数！ 所以dp[0] = 1是没有意义的，仅仅是为了推导递推公式。</p><p>至于非0下标的dp[i]应该初始为多少呢？</p><p>初始化为0，这样才不会影响dp[i]累加所有的dp[i - nums[j]]。</p><ol start="4"><li>确定遍历顺序</li></ol><p>个数可以不限使用，说明这是一个完全背包。</p><p>得到的集合是排列，说明需要考虑元素之间的顺序。</p><p>本题要求的是排列，那么这个for循环嵌套的顺序可以有说法了。</p>',11),I={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},A=p(`<p><strong>如果求组合数就是外层for循环遍历物品，内层for遍历背包</strong>。</p><p><strong>如果求排列数就是外层for遍历背包，内层for循环遍历物品</strong>。</p><p>如果把遍历nums（物品）放在外循环，遍历target的作为内循环的话，举一个例子：计算dp[4]的时候，结果集只有 {1,3} 这样的集合，不会有{3,1}这样的集合，因为nums遍历放在外层，3只能出现在1后面！</p><p>所以本题遍历顺序最终遍历顺序：<strong>target（背包）放在外循环，将nums（物品）放在内循环，内循环从前到后遍历</strong>。</p><ol start="5"><li>举例来推导dp数组</li></ol><p>我们再来用示例中的例子推导一下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20230310000625.png" alt="377.组合总和Ⅳ"></p><p>如果代码运行处的结果不是想要的结果，就把dp[i]都打出来，看看和我们推导的一不一样。</p><p>以上分析完毕，C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int combinationSum4(vector&lt;int&gt;&amp; nums, int target) {
        vector&lt;int&gt; dp(target + 1, 0);
        dp[0] = 1;
        for (int i = 0; i &lt;= target; i++) { // 遍历背包
            for (int j = 0; j &lt; nums.size(); j++) { // 遍历物品
                if (i - nums[j] &gt;= 0 &amp;&amp; dp[i] &lt; INT_MAX - dp[i - nums[j]]) {
                    dp[i] += dp[i - nums[j]];
                }
            }
        }
        return dp[target];
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(target * n)，其中 n 为 nums 的长度</li><li>空间复杂度: O(target)</li></ul><p>C++测试用例有两个数相加超过int的数据，所以需要在if里加上dp[i] &lt; INT_MAX - dp[i - num]。</p><p>但java就不用考虑这个限制，java里的int也是四个字节吧，也有可能leetcode后台对不同语言的测试数据不一样。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>求装满背包有几种方法，递归公式都是一样的，没有什么差别，但关键在于遍历顺序！</strong></p>`,15),C={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>如果对遍历顺序没有深度理解的话，做这种完全背包的题目会很懵逼，即使题目刷过了可能也不太清楚具体是怎么过的。</p><p>此时大家应该对动态规划中的遍历顺序又有更深的理解了。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int i = 0; i &lt;= target; i++) {
            for (int j = 0; j &lt; nums.length; j++) {
                if (i &gt;= nums[j]) {
                    dp[i] += dp[i - nums[j]];
                }
            }
        }
        return dp[target];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><p>卡哥版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">combinationSum4</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历背包</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历物品</span>
                <span class="token keyword">if</span> i <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">combinationSum4</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 创建动态规划数组，用于存储组合总数</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 初始化背包容量为0时的组合总数为1</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历背包容量</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> nums<span class="token punctuation">:</span>  <span class="token comment"># 遍历物品列表</span>
                <span class="token keyword">if</span> i <span class="token operator">&gt;=</span> j<span class="token punctuation">:</span>  <span class="token comment"># 当背包容量大于等于当前物品重量时</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span>  <span class="token comment"># 更新组合总数</span>

        <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 返回背包容量为target时的组合总数</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">combinationSum4</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义dp数组</span>
	dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token comment">// 初始化</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token comment">// 遍历顺序, 先遍历背包,再循环遍历物品</span>
	<span class="token keyword">for</span> j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>target<span class="token punctuation">;</span>j<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span> <span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> j <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">combinationSum4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> target<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">combinationSum4</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历背包</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> target<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遍历物品</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn combination_sum4(nums: Vec&lt;i32&gt;, target: i32) -&gt; i32 {
        let target = target as usize;
        let mut dp = vec![0; target + 1];
        dp[0] = 1;
        for i in 1..=target {
            for &amp;n in &amp;nums {
                if i &gt;= n as usize {
                    dp[i] += dp[i - n as usize];
                }
            }
        }
        dp[target]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function z(V,P){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,s("p",null,[s("a",r,[n("力扣题目链接"),t(a)])]),d,s("p",null,[s("strong",null,[s("a",k,[n("《代码随想录》算法视频公开课"),t(a)]),n("："),s("a",m,[n("装满背包有几种方法？求排列数？| LeetCode：377.组合总和IV"),t(a)]),n("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),n("。")]),v,s("p",null,[n("对完全背包还不了解的同学，可以看这篇："),s("a",b,[n("动态规划：关于完全背包，你该了解这些！"),t(a)])]),h,g,f,_,s("p",null,[n("大家在公众号里学习回溯算法专题的时候，一定做过这两道题目"),s("a",y,[n("回溯算法：39.组合总和"),t(a)]),n("和"),s("a",j,[n("回溯算法：40.组合总和II"),t(a)]),n("会感觉这两题和本题很像！")]),w,s("p",null,[n("在"),s("a",E,[n("动态规划：494.目标和"),t(a)]),n(" 和 "),s("a",x,[n("动态规划：518.零钱兑换II"),t(a)]),n("中我们已经讲过了，求装满背包有几种方法，递推公式一般都是dp[i] += dp[i - nums[j]];")]),B,s("p",null,[n("在"),s("a",I,[n("动态规划：518.零钱兑换II"),t(a)]),n(" 中就已经讲过了。")]),A,s("p",null,[n("本题与"),s("a",C,[n("动态规划：518.零钱兑换II"),t(a)]),n("就是一个鲜明的对比，一个是求排列，一个是求组合，遍历顺序完全不同。")]),S])}const J=e(l,[["render",z],["__file","0377.zuhezongheⅣ.html.vue"]]);export{J as default};
