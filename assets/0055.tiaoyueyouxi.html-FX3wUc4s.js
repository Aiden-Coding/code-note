import{_ as t,r as o,o as i,c,a as n,b as s,d as e,e as p}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_55-跳跃游戏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_55-跳跃游戏","aria-hidden":"true"},"#"),s(" 55. 跳跃游戏")],-1),r={href:"https://leetcode.cn/problems/jump-game/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>给定一个非负整数数组，你最初位于数组的第一个位置。</p><p>数组中的每个元素代表你在该位置可以跳跃的最大长度。</p><p>判断你是否能够到达最后一个位置。</p><p>示例  1:</p><ul><li>输入: [2,3,1,1,4]</li><li>输出: true</li><li>解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。</li></ul><p>示例  2:</p><ul><li>输入: [3,2,1,0,4]</li><li>输出: false</li><li>解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',8),k={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1VG4y1X7kB",target:"_blank",rel:"noopener noreferrer"},m=p(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>刚看到本题一开始可能想：当前位置元素如果是 3，我究竟是跳一步呢，还是两步呢，还是三步呢，究竟跳几步才是最优呢？</p><p>其实跳几步无所谓，关键在于可跳的覆盖范围！</p><p>不一定非要明确一次究竟跳几步，每次取最大的跳跃步数，这个就是可以跳跃的覆盖范围。</p><p>这个范围内，别管是怎么跳的，反正一定可以跳过来。</p><p><strong>那么这个问题就转化为跳跃覆盖范围究竟可不可以覆盖到终点！</strong></p><p>每次移动取最大跳跃步数（得到最大的覆盖范围），每移动一个单位，就更新最大覆盖范围。</p><p><strong>贪心算法局部最优解：每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点</strong>。</p><p>局部最优推出全局最优，找不出反例，试试贪心！</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20230203105634.png" alt=""></p><p>i 每次移动只能在 cover 的范围内移动，每移动一个元素，cover 得到该元素数值（新的覆盖范围）的补充，让 i 继续移动下去。</p><p>而 cover 每次只取 max(该元素数值补充后的范围, cover 本身范围)。</p><p>如果 cover 大于等于了终点下标，直接 return true 就可以了。</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool canJump(vector&lt;int&gt;&amp; nums) {
        int cover = 0;
        if (nums.size() == 1) return true; // 只有一个元素，就是能达到
        for (int i = 0; i &lt;= cover; i++) { // 注意这里是小于等于cover
            cover = max(i + nums[i], cover);
            if (cover &gt;= nums.size() - 1) return true; // 说明可以覆盖到终点了
        }
        return false;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这道题目关键点在于：不用拘泥于每次究竟跳几步，而是看覆盖范围，覆盖范围内一定是可以跳过来的，不用管是怎么跳的。</p><p>大家可以看出思路想出来了，代码还是非常简单的。</p><p>一些同学可能感觉，我在讲贪心系列的时候，题目和题目之间貌似没有什么联系？</p><p><strong>是真的就是没什么联系，因为贪心无套路</strong>！没有个整体的贪心框架解决一系列问题，只能是接触各种类型的题目锻炼自己的贪心思维！</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public boolean canJump(int[] nums) {
        if (nums.length == 1) {
            return true;
        }
        //覆盖范围, 初始覆盖范围应该是0，因为下面的迭代是从下标0开始的
        int coverRange = 0;
        //在覆盖范围内更新最大的覆盖范围
        for (int i = 0; i &lt;= coverRange; i++) {
            coverRange = Math.max(coverRange, i + nums[i]);
            if (coverRange &gt;= nums.length - 1) {
                return true;
            }
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">canJump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        cover <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
        i <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># python不支持动态修改for循环中变量,使用while循环代替</span>
        <span class="token keyword">while</span> i <span class="token operator">&lt;=</span> cover<span class="token punctuation">:</span>
            cover <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> cover<span class="token punctuation">)</span>
            <span class="token keyword">if</span> cover <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
            i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## for循环</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">canJump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        cover <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">&lt;=</span> cover<span class="token punctuation">:</span>
                cover <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> cover<span class="token punctuation">)</span>
                <span class="token keyword">if</span> cover <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 贪心</span>
<span class="token keyword">func</span> <span class="token function">canJump</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    cover <span class="token operator">:=</span> <span class="token number">0</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> cover<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">// 每次与覆盖值比较</span>
        cover <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>i<span class="token operator">+</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> cover<span class="token punctuation">)</span> <span class="token comment">//每走一步都将 cover 更新为最大值</span>
        <span class="token keyword">if</span> cover <span class="token operator">&gt;=</span> n <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var canJump = function(nums) {
    if(nums.length === 1) return true
    let cover = 0
    for(let i = 0; i &lt;= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if(cover &gt;= nums.length - 1) {
            return true
        }
    }
    return false
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn can_jump(nums: Vec&lt;i32&gt;) -&gt; bool {
        if nums.len() == 1 {
            return true;
        }
        let (mut i, mut cover) = (0, 0);
        while i &lt;= cover {
            cover = (i + nums[i] as usize).max(cover);
            if cover &gt;= nums.len() - 1 {
                return true;
            }
            i += 1;
        }
        false
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">max</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>

bool <span class="token function">canJump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> cover <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token comment">// 只可能获取cover范围中的步数，所以i&lt;=cover</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> cover<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新cover为从i出发能到达的最大值/cover的值中较大值</span>
        cover <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> cover<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 若更新后cover可以到达最后的元素，返回true</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cover <span class="token operator">&gt;=</span> numsSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">canJump</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> farthestIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&lt;=</span> farthestIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    farthestIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>farthestIndex<span class="token punctuation">,</span> cur <span class="token operator">+</span> nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>farthestIndex <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    cur<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> canJump<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cover <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 如果只有一个元素，那么必定到达</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> cover<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// i表示下标，当前只能够走cover步</span>
      cover <span class="token operator">=</span> math<span class="token punctuation">.</span>max<span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> cover<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cover <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 说明可以覆盖到终点，直接返回</span>
      i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token boolean">false</span> <span class="token comment">// 如果上面没有返回就是跳不到</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function b(h,g){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),d,n("p",null,[n("strong",null,[n("a",k,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",v,[s("贪心算法，怎么跳跃不重要，关键在覆盖范围 | LeetCode：55.跳跃游戏"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),m])}const y=t(l,[["render",b],["__file","0055.tiaoyueyouxi.html.vue"]]);export{y as default};
