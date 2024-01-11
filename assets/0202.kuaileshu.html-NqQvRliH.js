import{_ as t,r as o,o as c,c as l,a as n,b as s,d as p,e}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"该用set的时候，还是得用set")],-1),r=n("h1",{id:"第202题-快乐数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第202题-快乐数","aria-hidden":"true"},"#"),s(" 第202题. 快乐数")],-1),k={href:"https://leetcode.cn/problems/happy-number/",target:"_blank",rel:"noopener noreferrer"},d=e('<p>编写一个算法来判断一个数 n 是不是快乐数。</p><p>「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。</p><p>如果 n 是快乐数就返回 True ；不是，则返回 False 。</p><p><strong>示例：</strong></p><p>输入：19<br> 输出：true<br> 解释：<br> 1^2 + 9^2 = 82<br> 8^2 + 2^2 = 68<br> 6^2 + 8^2 = 100<br> 1^2 + 0^2 + 0^2 = 1</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目看上去貌似一道数学问题，其实并不是！</p><p>题目中说了会 <strong>无限循环</strong>，那么也就是说<strong>求和的过程中，sum会重复出现，这对解题很重要！</strong></p>',8),v={href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法了。",-1),b=e(`<p>所以这道题目使用哈希法，来判断这个sum是否重复出现，如果重复了就是return false， 否则一直找到sum为1为止。</p><p>判断sum是否重复出现就可以使用unordered_set。</p><p><strong>还有一个难点就是求和的过程，如果对取数值各个位上的单数操作不熟悉的话，做这道题也会比较艰难。</strong></p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    // 取数值各个位上的单数之和
    int getSum(int n) {
        int sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        return sum;
    }
    bool isHappy(int n) {
        unordered_set&lt;int&gt; set;
        while(1) {
            int sum = getSum(n);
            if (sum == 1) {
                return true;
            }
            // 如果这个sum曾经出现过，说明已经陷入了无限循环了，立刻return false
            if (set.find(sum) != set.end()) {
                return false;
            } else {
                set.insert(sum);
            }
            n = sum;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(logn)</li><li>空间复杂度: O(logn)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isHappy</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> record <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>record<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            record<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">=</span> <span class="token function">getNextNumber</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getNextNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            res <span class="token operator">+=</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
            n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><p>(版本一)使用集合</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>        
        record <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            n <span class="token operator">=</span> self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
            
            <span class="token comment"># 如果中间结果重复出现，说明陷入死循环了，该数不是快乐数</span>
            <span class="token keyword">if</span> n <span class="token keyword">in</span> record<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                record<span class="token punctuation">.</span>add<span class="token punctuation">(</span>n<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">get_sum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span> 
        new_num <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> n<span class="token punctuation">:</span>
            n<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token builtin">divmod</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
            new_num <span class="token operator">+=</span> r <span class="token operator">**</span> <span class="token number">2</span>
        <span class="token keyword">return</span> new_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本二)使用集合</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
   <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
       record <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">while</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> record<span class="token punctuation">:</span>
           record<span class="token punctuation">.</span>add<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
           new_num <span class="token operator">=</span> <span class="token number">0</span>
           n_str <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
           <span class="token keyword">for</span> i <span class="token keyword">in</span> n_str<span class="token punctuation">:</span>
               new_num<span class="token operator">+=</span><span class="token builtin">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span>
           <span class="token keyword">if</span> new_num<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
           <span class="token keyword">else</span><span class="token punctuation">:</span> n <span class="token operator">=</span> new_num
       <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本三)使用数组</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
   <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
       record <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
       <span class="token keyword">while</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> record<span class="token punctuation">:</span>
           record<span class="token punctuation">.</span>append<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
           new_num <span class="token operator">=</span> <span class="token number">0</span>
           n_str <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
           <span class="token keyword">for</span> i <span class="token keyword">in</span> n_str<span class="token punctuation">:</span>
               new_num<span class="token operator">+=</span><span class="token builtin">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span>
           <span class="token keyword">if</span> new_num<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
           <span class="token keyword">else</span><span class="token punctuation">:</span> n <span class="token operator">=</span> new_num
       <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本四)使用快慢指针</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
   <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>        
       slow <span class="token operator">=</span> n
       fast <span class="token operator">=</span> n
       <span class="token keyword">while</span> self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token keyword">and</span> self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>fast<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
           slow <span class="token operator">=</span> self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>slow<span class="token punctuation">)</span>
           fast <span class="token operator">=</span> self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>self<span class="token punctuation">.</span>get_sum<span class="token punctuation">(</span>fast<span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token keyword">if</span> slow <span class="token operator">==</span> fast<span class="token punctuation">:</span>
               <span class="token keyword">return</span> <span class="token boolean">False</span>
       <span class="token keyword">return</span> <span class="token boolean">True</span>
   <span class="token keyword">def</span> <span class="token function">get_sum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span> 
       new_num <span class="token operator">=</span> <span class="token number">0</span>
       <span class="token keyword">while</span> n<span class="token punctuation">:</span>
           n<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token builtin">divmod</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
           new_num <span class="token operator">+=</span> r <span class="token operator">**</span> <span class="token number">2</span>
       <span class="token keyword">return</span> new_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本五)使用集合+精简</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
   <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
       seen <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">while</span> n <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
           n <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token keyword">if</span> n <span class="token keyword">in</span> seen<span class="token punctuation">:</span>
               <span class="token keyword">return</span> <span class="token boolean">False</span>
           seen<span class="token punctuation">.</span>add<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
       <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本六)使用数组+精简</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
   <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
       seen <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
       <span class="token keyword">while</span> n <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
           n <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token keyword">if</span> n <span class="token keyword">in</span> seen<span class="token punctuation">:</span>
               <span class="token keyword">return</span> <span class="token boolean">False</span>
           seen<span class="token punctuation">.</span>append<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
       <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> n <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>m<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> m<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
        n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">getSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span>
            n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// n出现过，证明已陷入无限循环</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        n <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法二：使用环形链表的思想 说明出现闭环 退出循环</span>
<span class="token keyword">var</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">getN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token function">getN</span><span class="token punctuation">(</span><span class="token function">getN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果 a === b </span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token function">getN</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">!==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token function">getN</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token function">getN</span><span class="token punctuation">(</span><span class="token function">getN</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">getN</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 方法三：使用Set()更简洁</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">getSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span>  Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Set() 里的数是惟一的</span>
    <span class="token comment">// 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 方法四：使用Set()，求和用reduce</span>
<span class="token keyword">var</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> totalCount<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>totalCount <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token operator">+</span><span class="token punctuation">(</span>totalCount <span class="token operator">||</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalCount <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> total <span class="token operator">+</span> num <span class="token operator">*</span> num
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>totalCount<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>totalCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token comment">// Utils</span>
    <span class="token comment">// 计算val各位的平方和</span>
    <span class="token keyword">function</span> <span class="token function">calcSum</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>pre <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> storeSet<span class="token operator">:</span> Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>storeSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        storeSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> <span class="token function">calcSum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift：</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// number 每个位置上的数字的平方和</span>
<span class="token keyword">func</span> <span class="token function-definition function">getSum</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> number<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> number
    <span class="token keyword">while</span> num <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">10</span>
        sum <span class="token operator">+=</span> <span class="token punctuation">(</span>temp <span class="token operator">*</span> temp<span class="token punctuation">)</span>
        num <span class="token operator">/=</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function-definition function">isHappy</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token keyword">set</span> <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> n
    <span class="token keyword">while</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">getSum</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token keyword">if</span> sum <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果这个sum曾经出现过，说明已经陷入了无限循环了</span>
        <span class="token keyword">if</span> <span class="token keyword">set</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">set</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        num <span class="token operator">=</span> sum
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">Integer</span> <span class="token parameter">$n</span>
     * <span class="token keyword">@return</span> <span class="token class-name">Boolean</span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">isHappy</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// use a set to record sum</span>
        <span class="token comment">// whenever there is a duplicated, stop</span>
        <span class="token comment">// == 1 return true, else false</span>
        <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$table</span><span class="token punctuation">[</span><span class="token variable">$n</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$table</span><span class="token punctuation">[</span><span class="token variable">$n</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token variable">$n</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">getNextN</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$n</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">getNextN</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$temp</span> <span class="token operator">=</span> <span class="token variable">$n</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token variable">$res</span> <span class="token operator">+=</span> <span class="token variable">$temp</span> <span class="token operator">*</span> <span class="token variable">$temp</span><span class="token punctuation">;</span>
            <span class="token variable">$n</span> <span class="token operator">=</span> <span class="token function">floor</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$res</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>use std::collections::HashSet;
impl Solution {
    pub fn get_sum(mut n: i32) -&gt; i32 {
        let mut sum = 0;
        while n &gt; 0 {
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        sum
    }

    pub fn is_happy(n: i32) -&gt; bool {
        let mut n = n;
        let mut set = HashSet::new();
        loop {
            let sum = Self::get_sum(n);
            if sum == 1 {
                return true;
            }
            if set.contains(&amp;sum) {
                return false;
            } else { set.insert(sum); }
            n = sum;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int get_sum(int n) {
    int sum = 0;
    div_t n_div = { .quot = n };
    while (n_div.quot != 0) {
        n_div = div(n_div.quot, 10);
        sum += n_div.rem * n_div.rem;
    }
    return sum;
}

// (版本1)使用数组
bool isHappy(int n) {
    // sum = a1^2 + a2^2 + ... ak^2
    // first round:
    // 1 &lt;= k &lt;= 10
    // 1 &lt;= sum &lt;= 1 + 81 * 9 = 730
    // second round:
    // 1 &lt;= k &lt;= 3
    // 1 &lt;= sum &lt;= 36 + 81 * 2 = 198
    // third round:
    // 1 &lt;= sum &lt;= 81 * 2 = 162
    // fourth round:
    // 1 &lt;= sum &lt;= 81 * 2 = 162

    uint8_t visited[163] = { 0 };
    int sum = get_sum(get_sum(n));
    int next_n = sum;

    while (next_n != 1) {
        sum = get_sum(next_n);

        if (visited[sum]) return false;

        visited[sum] = 1;
        next_n = sum;
    };

    return true;
}

// (版本2)使用快慢指针
bool isHappy(int n) {
    int slow = n;
    int fast = n;

    do {
        slow = get_sum(slow);
        fast = get_sum(get_sum(fast));
    } while (slow != fast);

    return (fast == 1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token comment">// 引入mutable</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> isHappy<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存放每次计算后的结果</span>
    <span class="token keyword">val</span> set<span class="token operator">:</span> mutable<span class="token punctuation">.</span>HashSet<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> mutable<span class="token punctuation">.</span>HashSet<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> n <span class="token comment">// 因为形参是不可变量，所以需要找到一个临时变量</span>
    <span class="token comment">// 开始进入循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> sum <span class="token operator">=</span> getSum<span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token comment">// 获取这个数每个值的平方和</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 如果最终等于 1，则返回true</span>
      <span class="token comment">// 如果set里面已经有这个值了，说明进入无限循环，可以返回false，否则添加这个值到set</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span>contains<span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token keyword">else</span> set<span class="token punctuation">.</span>add<span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
      tmp <span class="token operator">=</span> sum
    <span class="token punctuation">}</span>
    <span class="token comment">// 最终需要返回值，直接返回个false</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> getSum<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> n
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> <span class="token punctuation">(</span>tmp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>tmp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
      tmp <span class="token operator">=</span> tmp <span class="token operator">/</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
    sum
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span></span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//每位数的换算</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsHappy</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashSet <span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">set</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HashSet<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">set</span><span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断避免循环</span>
            <span class="token keyword">set</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function w(y,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("a",k,[s("力扣题目链接"),p(a)])]),d,n("p",null,[s("正如："),n("a",v,[s("关于哈希表，你该了解这些！"),p(a)]),s("中所说，"),m]),b])}const g=t(i,[["render",w],["__file","0202.kuaileshu.html.vue"]]);export{g as default};
