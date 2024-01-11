import{_ as e,r as t,o,c,a,b as n,d as p,e as r}from"./app-3RcBQnkC.js";const i={},l=a("h1",{id:"_65-不用加减乘除做加法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_65-不用加减乘除做加法","aria-hidden":"true"},"#"),n(" 65. 不用加减乘除做加法")],-1),d=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),n(" 题目链接")],-1),u={href:"https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&tqId=11201&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>写一个函数，求两个整数之和，要求不得使用 +、-、*、/ 四则运算符号。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>a ^ b 表示没有考虑进位的情况下两数的和，(a &amp; b) &lt;&lt; 1 就是进位。</p><p>递归会终止的原因是 (a &amp; b) &lt;&lt; 1 最右边会多一个 0，那么继续递归，进位最右边的 0 会慢慢增多，最后进位会变为 0，递归终止。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token class-name">Add</span><span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">,</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(_,b){const s=t("ExternalLinkIcon");return o(),c("div",null,[l,d,a("p",null,[a("a",u,[n("NowCoder"),p(s)])]),h])}const f=e(i,[["render",k],["__file","65. buyongjiajianchengchuzuojiafa.html.vue"]]);export{f as default};
