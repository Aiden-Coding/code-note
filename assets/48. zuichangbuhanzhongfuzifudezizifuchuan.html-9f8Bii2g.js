import{_ as n,o as s,c as a,e as p}from"./app-3RcBQnkC.js";const t={},e=p(`<h1 id="_48-最长不含重复字符的子字符串" tabindex="-1"><a class="header-anchor" href="#_48-最长不含重复字符的子字符串" aria-hidden="true">#</a> 48. 最长不含重复字符的子字符串</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一个字符串（只包含 a~z 的字符），求其最长不含重复字符的子字符串的长度。例如对于 arabcacfr，最长不含重复字符的子字符串为 acfr，长度为 4。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">longestSubStringWithoutDuplication</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> curLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> maxLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preIndexs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>preIndexs<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> curI <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> curI <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> curI<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>curI<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> preI <span class="token operator">=</span> preIndexs<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preI <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> curI <span class="token operator">-</span> preI <span class="token operator">&gt;</span> curLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curLen<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            maxLen <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> curLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
            curLen <span class="token operator">=</span> curI <span class="token operator">-</span> preI<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        preIndexs<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> curI<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    maxLen <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> curLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> maxLen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","48. zuichangbuhanzhongfuzifudezizifuchuan.html.vue"]]);export{r as default};
