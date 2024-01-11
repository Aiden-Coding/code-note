import{_ as p,r as i,o as l,c,a as s,b as n,d as e,e as t}from"./app-3RcBQnkC.js";const o={},u={href:"https://mp.weixin.qq.com/s/606_N9j8ACKCODoCbV1lSA",target:"_blank",rel:"noopener noreferrer"},r=s("h1",{id:"_45-跳跃游戏-ii",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_45-跳跃游戏-ii","aria-hidden":"true"},"#"),n(" 45.跳跃游戏 II")],-1),d={href:"https://leetcode.cn/problems/jump-game-ii/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>给定一个非负整数数组，你最初位于数组的第一个位置。</p><p>数组中的每个元素代表你在该位置可以跳跃的最大长度。</p><p>你的目标是使用最少的跳跃次数到达数组的最后一个位置。</p><p>示例:</p><ul><li>输入: [2,3,1,1,4]</li><li>输出: 2</li><li>解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳  1  步，然后跳  3  步到达数组的最后一个位置。</li></ul><p>说明: 假设你总是可以到达数组的最后一个位置。</p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',7),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1Y24y1r7XZ",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),h={href:"https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>但思路是相似的，还是要看最大覆盖范围。</p><p>本题要计算最少步数，那么就要想清楚什么时候步数才一定要加一呢？</p><p>贪心的思路，局部最优：当前可移动距离尽可能多走，如果还没到终点，步数再加一。整体最优：一步尽可能多走，从而达到最少步数。</p><p>思路虽然是这样，但在写代码的时候还不能真的能跳多远就跳多远，那样就不知道下一步最远能跳到哪里了。</p><p><strong>所以真正解题的时候，要从覆盖范围出发，不管怎么跳，覆盖范围内一定是可以跳到的，以最小的步数增加覆盖范围，覆盖范围一旦覆盖了终点，得到的就是最少步数！</strong></p><p><strong>这里需要统计两个覆盖范围，当前这一步的最大覆盖和下一步最大覆盖</strong>。</p><p>如果移动下标达到了当前这一步的最大覆盖最远距离了，还没有到终点的话，那么就必须再走一步来增加覆盖范围，直到覆盖范围覆盖了终点。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201201232309103.png" alt="45.跳跃游戏II"></p><p><strong>图中覆盖范围的意义在于，只要红色的区域，最多两步一定可以到！（不用管具体怎么跳，反正一定可以跳到）</strong></p><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>从图中可以看出来，就是移动下标达到了当前覆盖的最远距离下标时，步数就要加一，来增加覆盖距离。最后的步数就是最少步数。</p><p>这里还是有个特殊情况需要考虑，当移动下标达到了当前覆盖的最远距离下标时</p><ul><li>如果当前覆盖最远距离下标不是是集合终点，步数就加一，还需要继续走。</li><li>如果当前覆盖最远距离下标就是是集合终点，步数不用加一，因为不能再往后走了。</li></ul><p>C++代码如下：（详细注释）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int jump(vector&lt;int&gt;&amp; nums) {
        if (nums.size() == 1) return 0;
        int curDistance = 0;    // 当前覆盖最远距离下标
        int ans = 0;            // 记录走的最大步数
        int nextDistance = 0;   // 下一步覆盖最远距离下标
        for (int i = 0; i &lt; nums.size(); i++) {
            nextDistance = max(nums[i] + i, nextDistance);  // 更新下一步覆盖最远距离下标
            if (i == curDistance) {                         // 遇到当前覆盖最远距离下标
                ans++;                                  // 需要走下一步
                curDistance = nextDistance;             // 更新当前覆盖最远距离下标（相当于加油了）
                if (nextDistance &gt;= nums.size() - 1) break;  // 当前覆盖最远距到达集合终点，不用做ans++操作了，直接结束
            }
        }
        return ans;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>依然是贪心，思路和方法一差不多，代码可以简洁一些。</p><p><strong>针对于方法一的特殊情况，可以统一处理</strong>，即：移动下标只要遇到当前覆盖最远距离的下标，直接步数加一，不考虑是不是终点的情况。</p><p>想要达到这样的效果，只要让移动下标，最大只能移动到 nums.size - 2 的地方就可以了。</p><p>因为当移动下标指向 nums.size - 2 时：</p><ul><li><p>如果移动下标等于当前覆盖最大距离下标， 需要再走一步（即 ans++），因为最后一步一定是可以到的终点。（题目假设总是可以到达数组的最后一个位置），如图： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201201232445286.png" alt="45.跳跃游戏II2"></p></li><li><p>如果移动下标不等于当前覆盖最大距离下标，说明当前覆盖最远距离就可以直接达到终点了，不需要再走一步。如图：</p></li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201201232338693.png" alt="45.跳跃游戏II1"></p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
public:
    int jump(vector&lt;int&gt;&amp; nums) {
        int curDistance = 0;    // 当前覆盖的最远距离下标
        int ans = 0;            // 记录走的最大步数
        int nextDistance = 0;   // 下一步覆盖的最远距离下标
        for (int i = 0; i &lt; nums.size() - 1; i++) { // 注意这里是小于nums.size() - 1，这是关键所在
            nextDistance = max(nums[i] + i, nextDistance); // 更新下一步覆盖的最远距离下标
            if (i == curDistance) {                 // 遇到当前覆盖的最远距离下标
                curDistance = nextDistance;         // 更新当前覆盖的最远距离下标
                ans++;
            }
        }
        return ans;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><p>可以看出版本二的代码相对于版本一简化了不少！</p><p><strong>其精髓在于控制移动下标 i 只移动到 nums.size() - 2 的位置</strong>，所以移动下标只要遇到当前覆盖最远距离的下标，直接步数加一，不用考虑别的了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>`,30),x={href:"https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>但代码又十分简单，贪心就是这么巧妙。</p><p>理解本题的关键在于：<strong>以最小的步数增加最大的覆盖范围，直到覆盖范围覆盖了终点</strong>，这个范围内最少步数一定可以跳到，不用管具体是怎么跳的，不纠结于一步究竟跳一个单位还是两个单位。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 版本一
class Solution {
    public int jump(int[] nums) {
        if (nums == null || nums.length == 0 || nums.length == 1) {
            return 0;
        }
        //记录跳跃的次数
        int count=0;
        //当前的覆盖最大区域
        int curDistance = 0;
        //最大的覆盖区域
        int maxDistance = 0;
        for (int i = 0; i &lt; nums.length; i++) {
            //在可覆盖区域内更新最大的覆盖区域
            maxDistance = Math.max(maxDistance,i+nums[i]);
            //说明当前一步，再跳一步就到达了末尾
            if (maxDistance&gt;=nums.length-1){
                count++;
                break;
            }
            //走到当前覆盖的最大区域时，更新下一步可达的最大区域
            if (i==curDistance){
                curDistance = maxDistance;
                count++;
            }
        }
        return count;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 版本二</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 当前覆盖的最远距离下标</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 下一步覆盖的最远距离下标</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end <span class="token operator">&amp;&amp;</span> end <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 可达位置的改变次数就是跳跃次数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                end <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                result<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>贪心（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">jump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        
        cur_distance <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 当前覆盖最远距离下标</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 记录走的最大步数</span>
        next_distance <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 下一步覆盖最远距离下标</span>
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            next_distance <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> next_distance<span class="token punctuation">)</span>  <span class="token comment"># 更新下一步覆盖最远距离下标</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> cur_distance<span class="token punctuation">:</span>  <span class="token comment"># 遇到当前覆盖最远距离下标</span>
                ans <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># 需要走下一步</span>
                cur_distance <span class="token operator">=</span> next_distance  <span class="token comment"># 更新当前覆盖最远距离下标（相当于加油了）</span>
                <span class="token keyword">if</span> next_distance <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 当前覆盖最远距离达到数组末尾，不用再做ans++操作，直接结束</span>
                    <span class="token keyword">break</span>
        
        <span class="token keyword">return</span> ans

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>贪心（版本二）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">jump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        cur_distance <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 当前覆盖的最远距离下标</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 记录走的最大步数</span>
        next_distance <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 下一步覆盖的最远距离下标</span>
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 注意这里是小于len(nums) - 1，这是关键所在</span>
            next_distance <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> next_distance<span class="token punctuation">)</span>  <span class="token comment"># 更新下一步覆盖的最远距离下标</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> cur_distance<span class="token punctuation">:</span>  <span class="token comment"># 遇到当前覆盖的最远距离下标</span>
                cur_distance <span class="token operator">=</span> next_distance  <span class="token comment"># 更新当前覆盖的最远距离下标</span>
                ans <span class="token operator">+=</span> <span class="token number">1</span>
        
        <span class="token keyword">return</span> ans

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>贪心（版本三） 类似‘55-跳跃游戏’写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">jump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 如果数组只有一个元素，不需要跳跃，步数为0</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        
        i <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 当前位置</span>
        count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 步数计数器</span>
        cover <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 当前能够覆盖的最远距离</span>
        
        <span class="token keyword">while</span> i <span class="token operator">&lt;=</span> cover<span class="token punctuation">:</span>  <span class="token comment"># 当前位置小于等于当前能够覆盖的最远距离时循环</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> cover<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历从当前位置到当前能够覆盖的最远距离之间的所有位置</span>
                cover <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>i<span class="token punctuation">,</span> cover<span class="token punctuation">)</span>  <span class="token comment"># 更新当前能够覆盖的最远距离</span>
                <span class="token keyword">if</span> cover <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 如果当前能够覆盖的最远距离达到或超过数组的最后一个位置，直接返回步数+1</span>
                    <span class="token keyword">return</span> count<span class="token operator">+</span><span class="token number">1</span>
            count <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># 每一轮遍历结束后，步数+1</span>

        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态规划</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">jump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token operator">**</span><span class="token number">4</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>  <span class="token comment"># 初始化结果数组，初始值为一个较大的数</span>
        result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 起始位置的步数为0</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历数组</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 在当前位置能够跳跃的范围内遍历</span>
                <span class="token keyword">if</span> i <span class="token operator">+</span> j <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 确保下一跳的位置不超过数组范围</span>
                    result<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 更新到达下一跳位置的最少步数</span>

        <span class="token keyword">return</span> result<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 返回到达最后一个位置的最少步数</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 贪心版本一</span>
<span class="token keyword">func</span> <span class="token function">jump</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">,</span> next <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    step <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>i<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> cur <span class="token punctuation">{</span>
            <span class="token keyword">if</span> cur <span class="token operator">!=</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
                step<span class="token operator">++</span>
                cur <span class="token operator">=</span> next
                <span class="token keyword">if</span> cur <span class="token operator">&gt;=</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> step
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> step
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> step
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 贪心版本二</span>
<span class="token keyword">func</span> <span class="token function">jump</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">,</span> next <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    step <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>i<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> cur <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> next
            step<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> step
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var jump = function(nums) {
    let curIndex = 0
    let nextIndex = 0
    let steps = 0
    for(let i = 0; i &lt; nums.length - 1; i++) {
        nextIndex = Math.max(nums[i] + i, nextIndex)
        if(i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }

    return steps
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">jump</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> curFarthestIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    nextFarthestIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> curIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> stepNum<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curIndex <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextFarthestIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nextFarthestIndex<span class="token punctuation">,</span> curIndex <span class="token operator">+</span> nums<span class="token punctuation">[</span>curIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curIndex <span class="token operator">===</span> curFarthestIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curFarthestIndex <span class="token operator">=</span> nextFarthestIndex<span class="token punctuation">;</span>
      stepNum<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curIndex<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stepNum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> jump<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 记录走的最大步数</span>
    <span class="token keyword">var</span> curDistance <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 当前覆盖最远距离下标</span>
    <span class="token keyword">var</span> nextDistance <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 下一步覆盖最远距离下标</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> nums<span class="token punctuation">.</span>indices<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nextDistance <span class="token operator">=</span> math<span class="token punctuation">.</span>max<span class="token punctuation">(</span>nums<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> nextDistance<span class="token punctuation">)</span> <span class="token comment">// 更新下一步覆盖最远距离下标</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> curDistance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curDistance <span class="token operator">!=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">+=</span> <span class="token number">1</span>
          curDistance <span class="token operator">=</span> nextDistance
          <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDistance <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> result
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>//版本一
impl Solution {
    pub fn jump(nums: Vec&lt;i32&gt;) -&gt; i32 {
        if nums.len() == 1 {
            return 0;
        }
        let mut cur_distance = 0;
        let mut ans = 0;
        let mut next_distance = 0;
        for (i, &amp;n) in nums.iter().enumerate().take(nums.len() - 1) {
            next_distance = (n as usize + i).max(next_distance);
            if i == cur_distance {
                if cur_distance &lt; nums.len() - 1 {
                    ans += 1;
                    cur_distance = next_distance;
                    if next_distance &gt;= nums.len() - 1 {
                        break;
                    };
                } else {
                    break;
                }
            }
        }
        ans
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>//版本二
impl Solution {
    pub fn jump(nums: Vec&lt;i32&gt;) -&gt; i32 {
        if nums.len() == 1 {
            return 0;
        }
        let mut cur_distance = 0;
        let mut ans = 0;
        let mut next_distance = 0;
        for (i, &amp;n) in nums.iter().enumerate().take(nums.len() - 1) {
            next_distance = (n as usize + i).max(next_distance);
            if i == cur_distance {
                cur_distance = next_distance;
                ans += 1;
            }
        }
        ans
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function f(w,_){const a=i("ExternalLinkIcon");return l(),c("div",null,[s("blockquote",null,[s("p",null,[n("相对于"),s("a",u,[n("贪心算法：跳跃游戏"),e(a)]),n("难了不少，做好心里准备！")])]),r,s("p",null,[s("a",d,[n("力扣题目链接"),e(a)])]),k,s("p",null,[s("strong",null,[s("a",v,[n("《代码随想录》算法视频公开课"),e(a)]),n("："),s("a",m,[n("贪心算法，最少跳几步还得看覆盖范围 | LeetCode： 45.跳跃游戏 II"),e(a)]),n("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),n("。")]),b,s("p",null,[n("本题相对于"),s("a",h,[n("55.跳跃游戏"),e(a)]),n("还是难了不少。")]),g,s("p",null,[n("相信大家可以发现，这道题目相当于"),s("a",x,[n("55.跳跃游戏"),e(a)]),n("难了不止一点。")]),y])}const D=p(o,[["render",f],["__file","0045.tiaoyueyouxiII.html.vue"]]);export{D as default};
