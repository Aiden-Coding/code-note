import{_ as e,r as t,o as p,c as o,a as n,b as s,d as c,f as l,e as r}from"./app-3RcBQnkC.js";const i="/code-note/assets/image-20201105012506187-6y8mpFOW.png",u={},d=n("h1",{id:"_16-数值的整数次方",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_16-数值的整数次方","aria-hidden":"true"},"#"),s(" 16. 数值的整数次方")],-1),k=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),v={href:"https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&tqId=11165&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),m=n("p",null,"给定一个 double 类型的浮点数 x和 int 类型的整数 n，求 x 的 n 次方。",-1),h=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),x=r('<p>最直观的解法是将 x 重复乘 n 次，x*x*x...*x，那么时间复杂度为 O(N)。因为乘法是可交换的，所以可以将上述操作拆开成两半 (x*x..*x)* (x*x..*x)，两半的计算是一样的，因此只需要计算一次。而且对于新拆开的计算，又可以继续拆开。这就是分治思想，将原问题的规模拆成多个规模较小的子问题，最后子问题的解合并起来。</p><p>本题中子问题是 x<sup>n/2</sup>，在将子问题合并时将子问题的解乘于自身相乘即可。但如果 n 不为偶数，那么拆成两半还会剩下一个 x，在将子问题合并时还需要需要多乘于一个 x。</p><p><img src="'+i+`" alt="image-20220324093855618"></p><p>因为 (x*x)<sup>n/2</sup> 可以通过递归求解，并且每次递归 n 都减小一半，因此整个算法的时间复杂度为 O(logN)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token class-name">Power</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> isNegative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> <span class="token operator">-</span>n<span class="token punctuation">;</span>
        isNegative <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">double</span> res <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> isNegative <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">/</span> res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">double</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token keyword">double</span> res <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> res <span class="token operator">*</span> res<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> res <span class="token operator">*=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(w,g){const a=t("ExternalLinkIcon");return p(),o("div",null,[d,k,n("p",null,[n("a",v,[s("牛客网"),c(a)])]),b,m,h,l(' <div align="center"><img src="https://latex.codecogs.com/gif.latex?x^n=\\left\\{\\begin{array}{rcl}x^{n/2}*x^{n/2}&&{n\\%2=0}\\\\x*(x^{n/2}*x^{n/2})&&{n\\%2=1}\\end{array}\\right." class="mathjax-pic"/></div> <br>  '),x])}const y=e(u,[["render",_],["__file","16. shuzhidezhengshucifang.html.vue"]]);export{y as default};
