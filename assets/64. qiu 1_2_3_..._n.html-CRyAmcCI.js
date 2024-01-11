import{_ as e,r as t,o,c as p,a as n,b as a,d as c,e as r}from"./app-3RcBQnkC.js";const i={},l=n("h1",{id:"_64-求-1-2-3-n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_64-求-1-2-3-n","aria-hidden":"true"},"#"),a(" 64. 求 1+2+3+...+n")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),d={href:"https://www.nowcoder.com/practice/7a0da8fc483247ff8800059e12d7caf1?tpId=13&tqId=11200&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>要求不能使用乘除法、for、while、if、else、switch、case 等关键字及条件判断语句 A ? B : C。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用递归解法最重要的是指定返回条件，但是本题无法直接使用 if 语句来指定返回条件。</p><p>条件与 &amp;&amp; 具有短路原则，即在第一个条件语句为 false 的情况下不会去执行第二个条件语句。利用这一特性，将递归的返回条件取非然后作为 &amp;&amp; 的第一个条件语句，递归的主体转换为第二个条件语句，那么当递归的返回条件为 true 的情况下就不会执行递归的主体部分，递归返回。</p><p>本题的递归返回条件为 n &lt;= 0，取非后就是 n &gt; 0；递归的主体部分为 sum += Sum_Solution(n - 1)，转换为条件语句后就是 (sum += Sum_Solution(n - 1)) &gt; 0。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">Sum_Solution</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>sum <span class="token operator">+=</span> <span class="token class-name">Sum_Solution</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function _(m,h){const s=t("ExternalLinkIcon");return o(),p("div",null,[l,u,n("p",null,[n("a",d,[a("NowCoder"),c(s)])]),k])}const v=e(i,[["render",_],["__file","64. qiu 1_2_3_..._n.html.vue"]]);export{v as default};
