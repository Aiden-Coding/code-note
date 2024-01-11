import{_ as e,r as t,o,c as p,a as n,b as s,d as c,e as i}from"./app-3RcBQnkC.js";const l="/code-note/assets/05a08f2e-9914-4a77-92ef-aebeaecf4f66-uDvQe_iA.jpg",r={},u=n("h1",{id:"_36-二叉搜索树与双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_36-二叉搜索树与双向链表","aria-hidden":"true"},"#"),s(" 36. 二叉搜索树与双向链表")],-1),d={href:"https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5?tpId=13&tqId=11179&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},k=i('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。</p><p><img src="'+l+`" alt="image-20220324093855618"></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">TreeNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">TreeNode</span> head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token class-name">Convert</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>left <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        head <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(m,h){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",d,[s("NowCoder"),c(a)])]),k])}const _=e(r,[["render",v],["__file","36. erchasousuoshuyushuangxianglianbiao.html.vue"]]);export{_ as default};
