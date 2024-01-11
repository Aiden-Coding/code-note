import{_ as l,r as t,o as i,c as o,a as n,b as s,d as e,e as p}from"./app-3RcBQnkC.js";const c={},u=n("h1",{id:"_860-柠檬水找零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_860-柠檬水找零","aria-hidden":"true"},"#"),s(" 860.柠檬水找零")],-1),r={href:"https://leetcode.cn/problems/lemonade-change/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>在柠檬水摊上，每一杯柠檬水的售价为 5 美元。</p><p>顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。</p><p>每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。</p><p>注意，一开始你手头没有任何零钱。</p><p>如果你能给每位顾客正确找零，返回 true ，否则返回 false 。</p><p>示例 1：</p><ul><li>输入：[5,5,5,10,20]</li><li>输出：true</li><li>解释： <ul><li>前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。</li><li>第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。</li><li>第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。</li><li>由于所有客户都得到了正确的找零，所以我们输出 true。</li></ul></li></ul><p>示例 2：</p><ul><li>输入：[5,5,10]</li><li>输出：true</li></ul><p>示例 3：</p><ul><li>输入：[10,10]</li><li>输出：false</li></ul><p>示例 4：</p><ul><li>输入：[5,5,10,10,20]</li><li>输出：false</li><li>解释： <ul><li>前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。</li><li>对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。</li><li>对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。</li><li>由于不是每位顾客都得到了正确的找零，所以答案是 false。</li></ul></li></ul><p>提示：</p><ul><li>0 &lt;= bills.length &lt;= 10000</li><li>bills[i] 不是 5 就是 10 或是 20</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',16),k={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV12x4y1j7DD",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这是前几天的leetcode每日一题，感觉不错，给大家讲一下。</p><p>这道题目刚一看，可能会有点懵，这要怎么找零才能保证完成全部账单的找零呢？</p><p><strong>但仔细一琢磨就会发现，可供我们做判断的空间非常少！</strong></p><p>只需要维护三种金额的数量，5，10和20。</p><p>有如下三种情况：</p><ul><li>情况一：账单是5，直接收下。</li><li>情况二：账单是10，消耗一个5，增加一个10</li><li>情况三：账单是20，优先消耗一个10和一个5，如果不够，再消耗三个5</li></ul><p>此时大家就发现 情况一，情况二，都是固定策略，都不用我们来做分析了，而唯一不确定的其实在情况三。</p><p>而情况三逻辑也不复杂甚至感觉纯模拟就可以了，其实情况三这里是有贪心的。</p><p>账单是20的情况，为什么要优先消耗一个10和一个5呢？</p><p><strong>因为美元10只能给账单20找零，而美元5可以给账单10和账单20找零，美元5更万能！</strong></p><p>所以局部最优：遇到账单20，优先消耗美元10，完成本次找零。全局最优：完成全部账单的找零。</p><p>局部最优可以推出全局最优，并找不出反例，那么就试试贪心算法！</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool lemonadeChange(vector&lt;int&gt;&amp; bills) {
        int five = 0, ten = 0, twenty = 0;
        for (int bill : bills) {
            // 情况一
            if (bill == 5) five++;
            // 情况二
            if (bill == 10) {
                if (five &lt;= 0) return false;
                ten++;
                five--;
            }
            // 情况三
            if (bill == 20) {
                // 优先消耗10美元，因为5美元的找零用处更大，能多留着就多留着
                if (five &gt; 0 &amp;&amp; ten &gt; 0) {
                    five--;
                    ten--;
                    twenty++; // 其实这行代码可以删了，因为记录20已经没有意义了，不会用20来找零
                } else if (five &gt;= 3) {
                    five -= 3;
                    twenty++; // 同理，这行代码也可以删了
                } else return false;
            }
        }
        return true;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>咋眼一看好像很复杂，分析清楚之后，会发现逻辑其实非常固定。</p><p>这道题目可以告诉大家，遇到感觉没有思路的题目，可以静下心来把能遇到的情况分析一下，只要分析到具体情况了，一下子就豁然开朗了。</p><p>如果一直陷入想从整体上寻找找零方案，就会把自己陷进去，各种情况一交叉，只会越想越复杂了。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lemonadeChange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bills<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> five <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ten <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bills<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                five<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                five<span class="token operator">--</span><span class="token punctuation">;</span>
                ten<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ten <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ten<span class="token operator">--</span><span class="token punctuation">;</span>
                    five<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    five <span class="token operator">-=</span> <span class="token number">3</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> ten <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">lemonadeChange</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> bills<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        five <span class="token operator">=</span> <span class="token number">0</span>
        ten <span class="token operator">=</span> <span class="token number">0</span>
        twenty <span class="token operator">=</span> <span class="token number">0</span>
        
        <span class="token keyword">for</span> bill <span class="token keyword">in</span> bills<span class="token punctuation">:</span>
            <span class="token comment"># 情况一：收到5美元</span>
            <span class="token keyword">if</span> bill <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
                five <span class="token operator">+=</span> <span class="token number">1</span>
            
            <span class="token comment"># 情况二：收到10美元</span>
            <span class="token keyword">if</span> bill <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> five <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">False</span>
                ten <span class="token operator">+=</span> <span class="token number">1</span>
                five <span class="token operator">-=</span> <span class="token number">1</span>
            
            <span class="token comment"># 情况三：收到20美元</span>
            <span class="token keyword">if</span> bill <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">:</span>
                <span class="token comment"># 先尝试使用10美元和5美元找零</span>
                <span class="token keyword">if</span> five <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">and</span> ten <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    five <span class="token operator">-=</span> <span class="token number">1</span>
                    ten <span class="token operator">-=</span> <span class="token number">1</span>
                    <span class="token comment">#twenty += 1</span>
                <span class="token comment"># 如果无法使用10美元找零，则尝试使用三张5美元找零</span>
                <span class="token keyword">elif</span> five <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">:</span>
                    five <span class="token operator">-=</span> <span class="token number">3</span>
                    <span class="token comment">#twenty += 1</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">False</span>
        
        <span class="token keyword">return</span> <span class="token boolean">True</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">lemonadeChange</span><span class="token punctuation">(</span>bills <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    ten<span class="token punctuation">,</span> five <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>bills<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
            five<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> five <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
            ten<span class="token operator">++</span><span class="token punctuation">;</span> five<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> ten <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> five <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                ten<span class="token operator">--</span><span class="token punctuation">;</span> five<span class="token operator">--</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> five <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
                five <span class="token operator">-=</span> <span class="token number">3</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var lemonadeChange = function(bills) {
    let fiveCount = 0
    let tenCount = 0

    for(let i = 0; i &lt; bills.length; i++) {
        let bill = bills[i]
        if(bill === 5) {
            fiveCount += 1
        } else if (bill === 10) {
            if(fiveCount &gt; 0) {
                fiveCount -=1
                tenCount += 1
            } else {
                return false
            }
        } else {
            if(tenCount &gt; 0 &amp;&amp; fiveCount &gt; 0) {
                tenCount -= 1
                fiveCount -= 1 
            } else if(fiveCount &gt;= 3) {
                fiveCount -= 3
            } else {
                return false
            }
        } 
    }
    return true
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn lemonade_change(bills: Vec&lt;i32&gt;) -&gt; bool {
        let mut five = 0;
        let mut ten = 0;
        // let mut twenty = 0;
        for bill in bills {
            if bill == 5 { five += 1; }
            if bill == 10 {
                if five &lt;= 0 { return false; }
                ten += 1;
                five -= 1;
            }
            if bill == 20 {
                if five &gt; 0 &amp;&amp; ten &gt; 0 {
                    five -= 1;
                    ten -= 1;
                    // twenty += 1;
                } else if five &gt;= 3 {
                    five -= 3;
                    // twenty += 1;
                } else { return false; }
            }
        }
        true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>bool <span class="token function">lemonadeChange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> bills<span class="token punctuation">,</span> <span class="token keyword">int</span> billsSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 分别记录五元、十元的数量（二十元不用记录，因为不会用到20元找零）</span>
    <span class="token keyword">int</span> fiveCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">int</span> tenCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> billsSize<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 分情况讨论每位顾客的付款</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>bills<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 情况一：直接收款五元</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
                fiveCount<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token comment">// 情况二：收款十元</span>
            <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span>
                <span class="token comment">// 若没有五元找零，返回false</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>fiveCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> false<span class="token punctuation">;</span>
                <span class="token comment">// 收款十元并找零五元</span>
                fiveCount<span class="token operator">--</span><span class="token punctuation">;</span>
                tenCount<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token comment">// 情况三：收款二十元</span>
            <span class="token keyword">case</span> <span class="token number">20</span><span class="token operator">:</span>
                <span class="token comment">// 若可以，优先用十元和五元找零（因为十元只能找零20，所以需要尽量用掉。而5元能找零十元和二十元）</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>fiveCount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> tenCount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    fiveCount<span class="token operator">--</span><span class="token punctuation">;</span>
                    tenCount<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> 
                <span class="token comment">// 若没有十元，但是有三张五元。用三张五元找零</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>fiveCount <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> 
                    fiveCount<span class="token operator">-=</span><span class="token number">3</span><span class="token punctuation">;</span>
                <span class="token comment">// 无法找开，返回false</span>
                <span class="token keyword">else</span>
                    <span class="token keyword">return</span> false<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 全部可以找开，返回true</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lemonadeChange</span><span class="token punctuation">(</span>bills<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> five<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        ten<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> bill <span class="token keyword">of</span> bills<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>bill<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
                five<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                five<span class="token operator">--</span><span class="token punctuation">;</span>
                ten<span class="token operator">++</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">20</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ten <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> five <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    five<span class="token operator">--</span><span class="token punctuation">;</span>
                    ten<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    five <span class="token operator">-=</span> <span class="token number">3</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> lemonadeChange<span class="token punctuation">(</span>bills<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fiveNum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> tenNum <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> bills<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> fiveNum <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fiveNum <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        tenNum <span class="token operator">+=</span> <span class="token number">1</span>
        fiveNum <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fiveNum <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> tenNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          tenNum <span class="token operator">-=</span> <span class="token number">1</span>
          fiveNum <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fiveNum <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          fiveNum <span class="token operator">-=</span> <span class="token number">3</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function m(f,h){const a=t("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),d,n("p",null,[n("strong",null,[n("a",k,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",v,[s("贪心算法，看上去复杂，其实逻辑都是固定的！LeetCode：860.柠檬水找零"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),b])}const w=l(c,[["render",m],["__file","0860.ninmengshuizhaoling.html.vue"]]);export{w as default};
