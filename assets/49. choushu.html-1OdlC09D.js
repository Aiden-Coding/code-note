import{_ as p,r as t,o as e,c as o,a as n,b as s,d as c,e as l}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_49-丑数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_49-丑数","aria-hidden":"true"},"#"),s(" 49. 丑数")],-1),r={href:"https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b?tpId=13&tqId=11186&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。例如 6、8 都是丑数，但 14 不是，因为它包含因子 7。习惯上我们把 1 当做是第一个丑数。求按从小到大的顺序的第 N 个丑数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetUglyNumber_Solution</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">N</span> <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i5 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> next2 <span class="token operator">=</span> dp<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> next3 <span class="token operator">=</span> dp<span class="token punctuation">[</span>i3<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">,</span> next5 <span class="token operator">=</span> dp<span class="token punctuation">[</span>i5<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>next2<span class="token punctuation">,</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>next3<span class="token punctuation">,</span> next5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> next2<span class="token punctuation">)</span>
            i2<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> next3<span class="token punctuation">)</span>
            i3<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> next5<span class="token punctuation">)</span>
            i5<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token class-name">N</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,v){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("NowCoder"),c(a)])]),k])}const h=p(i,[["render",d],["__file","49. choushu.html.vue"]]);export{h as default};
