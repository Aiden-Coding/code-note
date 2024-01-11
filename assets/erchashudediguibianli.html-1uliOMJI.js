import{_ as p,r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const i={},r=n("blockquote",null,[n("p",null,"一看就会，一写就废！")],-1),u=n("h1",{id:"二叉树的递归遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树的递归遍历","aria-hidden":"true"},"#"),s(" 二叉树的递归遍历")],-1),d=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),k={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1Wh411S7xt",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这次我们要好好谈一谈递归，为什么很多同学看递归算法都是“一看就会，一写就废”。</p><p>主要是对递归不成体系，没有方法论，<strong>每次写递归算法 ，都是靠玄学来写代码</strong>，代码能不能编过都靠运气。</p><p><strong>本篇将介绍前后中序的递归写法，一些同学可能会感觉很简单，其实不然，我们要通过简单题目把方法论确定下来，有了方法论，后面才能应付复杂的递归。</strong></p><p>这里帮助大家确定下来递归算法的三个要素。<strong>每次写递归，都按照这三要素来写，可以保证大家写出正确的递归算法！</strong></p><ol><li><p><strong>确定递归函数的参数和返回值：</strong> 确定哪些参数是递归的过程中需要处理的，那么就在递归函数里加上这个参数， 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型。</p></li><li><p><strong>确定终止条件：</strong> 写完了递归算法, 运行的时候，经常会遇到栈溢出的错误，就是没写终止条件或者终止条件写的不对，操作系统也是用一个栈的结构来保存每一层递归的信息，如果递归没有终止，操作系统的内存栈必然就会溢出。</p></li><li><p><strong>确定单层递归的逻辑：</strong> 确定每一层递归需要处理的信息。在这里也就会重复调用自己来实现递归的过程。</p></li></ol><p>好了，我们确认了递归的三要素，接下来就来练练手：</p><p><strong>以下以前序遍历为例：</strong></p><ol><li><strong>确定递归函数的参数和返回值</strong>：因为要打印出前序遍历节点的数值，所以参数里需要传入vector来放节点的数值，除了这一点就不需要再处理什么数据了也不需要有返回值，所以递归函数返回类型就是void，代码如下：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">traversal</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> cur<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> vec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>确定终止条件</strong>：在递归的过程中，如何算是递归结束了呢，当然是当前遍历的节点是空了，那么本层递归就要结束了，所以如果当前遍历的这个节点是空，就直接return，代码如下：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><strong>确定单层递归的逻辑</strong>：前序遍历是中左右的循序，所以在单层递归的逻辑，是要先取中节点的数值，代码如下：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vec<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 中</span>
<span class="token function">traversal</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> vec<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 左</span>
<span class="token function">traversal</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> vec<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单层递归的逻辑就是按照中左右的顺序来处理的，这样二叉树的前序遍历，基本就写完了，再看一下完整代码：</p><p>前序遍历：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void traversal(TreeNode* cur, vector&lt;int&gt;&amp; vec) {
        if (cur == NULL) return;
        vec.push_back(cur-&gt;val);    // 中
        traversal(cur-&gt;left, vec);  // 左
        traversal(cur-&gt;right, vec); // 右
    }
    vector&lt;int&gt; preorderTraversal(TreeNode* root) {
        vector&lt;int&gt; result;
        traversal(root, result);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么前序遍历写出来之后，中序和后序遍历就不难理解了，代码如下：</p><p>中序遍历：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void traversal(TreeNode* cur, vector&lt;int&gt;&amp; vec) {
    if (cur == NULL) return;
    traversal(cur-&gt;left, vec);  // 左
    vec.push_back(cur-&gt;val);    // 中
    traversal(cur-&gt;right, vec); // 右
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void traversal(TreeNode* cur, vector&lt;int&gt;&amp; vec) {
    if (cur == NULL) return;
    traversal(cur-&gt;left, vec);  // 左
    traversal(cur-&gt;right, vec); // 右
    vec.push_back(cur-&gt;val);    // 中
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时大家可以做一做leetcode上三道题目，分别是：</p>`,23),b={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>可能有同学感觉前后中序遍历的递归太简单了，要打迭代法（非递归），别急，我们明天打迭代法，打个通透！</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 前序遍历·递归·LC144_二叉树的前序遍历
class Solution {
    public List&lt;Integer&gt; preorderTraversal(TreeNode root) {
        List&lt;Integer&gt; result = new ArrayList&lt;Integer&gt;();
        preorder(root, result);
        return result;
    }

    public void preorder(TreeNode root, List&lt;Integer&gt; result) {
        if (root == null) {
            return;
        }
        result.add(root.val);
        preorder(root.left, result);
        preorder(root.right, result);
    }
}
// 中序遍历·递归·LC94_二叉树的中序遍历
class Solution {
    public List&lt;Integer&gt; inorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        inorder(root, res);
        return res;
    }

    void inorder(TreeNode root, List&lt;Integer&gt; list) {
        if (root == null) {
            return;
        }
        inorder(root.left, list);
        list.add(root.val);             // 注意这一句
        inorder(root.right, list);
    }
}
// 后序遍历·递归·LC145_二叉树的后序遍历
class Solution {
    public List&lt;Integer&gt; postorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        postorder(root, res);
        return res;
    }

    void postorder(TreeNode root, List&lt;Integer&gt; list) {
        if (root == null) {
            return;
        }
        postorder(root.left, list);
        postorder(root.right, list);
        list.add(root.val);             // 注意这一句
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 前序遍历-递归-LC144_二叉树的前序遍历</span>
<span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>preorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>preorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token keyword">return</span>  <span class="token punctuation">[</span>root<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">+</span> left <span class="token operator">+</span>  right

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 中序遍历-递归-LC94_二叉树的中序遍历</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>inorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>inorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token keyword">return</span> left <span class="token operator">+</span> <span class="token punctuation">[</span>root<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">+</span> right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>

<span class="token comment"># 后序遍历-递归-LC145_二叉树的后序遍历</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>postorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>postorderTraversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token keyword">return</span> left <span class="token operator">+</span> right <span class="token operator">+</span> <span class="token punctuation">[</span>root<span class="token punctuation">.</span>val<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><p>前序遍历:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> traversal <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
    traversal <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> traversal <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
    traversal <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	    <span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
	res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> traversal <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
    traversal <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	    <span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
	<span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript：</h3><p>前序遍历：</p><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var preorderTraversal = function(root) {
 let res=[];
 const dfs=function(root){
     if(root===null)return ;
     //先序遍历所以从父节点开始
     res.push(root.val);
     //递归左子树
     dfs(root.left);
     //递归右子树
     dfs(root.right);
 }
 //只使用一个参数 使用闭包进行存储结果
 dfs(root);
 return res;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 前序遍历</span>
<span class="token keyword">function</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中序遍历</span>
<span class="token keyword">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 后序遍历</span>
<span class="token keyword">function</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//前序遍历：</span>
<span class="token keyword">void</span> <span class="token function">preOrder</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> ret<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    ret<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">*</span>returnSize<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ret <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//中序遍历：</span>
<span class="token keyword">void</span> <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> ret<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ret<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">*</span>returnSize<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ret <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//后序遍历：</span>
<span class="token keyword">void</span> <span class="token function">postOrder</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> ret<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> 
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">postOrder</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">postOrder</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ret<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">*</span>returnSize<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ret<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">postOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> ret<span class="token punctuation">,</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><p>前序遍历：（144.二叉树的前序遍历）</p><div class="language-Swift line-numbers-mode" data-ext="Swift"><pre class="language-Swift"><code>func preorderTraversal(_ root: TreeNode?) -&gt; [Int] {
    var res = [Int]()
    preorder(root, res: &amp;res)
    return res
}
func preorder(_ root: TreeNode?, res: inout [Int]) {
    if root == nil {
        return
    }
    res.append(root!.val)
    preorder(root!.left, res: &amp;res)
    preorder(root!.right, res: &amp;res)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历：（94. 二叉树的中序遍历）</p><div class="language-Swift line-numbers-mode" data-ext="Swift"><pre class="language-Swift"><code>func inorderTraversal(_ root: TreeNode?) -&gt; [Int] {
    var res = [Int]()
    inorder(root, res: &amp;res)
    return res
}
func inorder(_ root: TreeNode?, res: inout [Int]) {
    if root == nil {
        return
    }
    inorder(root!.left, res: &amp;res)
    res.append(root!.val)
    inorder(root!.right, res: &amp;res)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历：（145. 二叉树的后序遍历）</p><div class="language-Swift line-numbers-mode" data-ext="Swift"><pre class="language-Swift"><code>func postorderTraversal(_ root: TreeNode?) -&gt; [Int] {
    var res = [Int]()
    postorder(root, res: &amp;res)
    return res
}
func postorder(_ root: TreeNode?, res: inout [Int]) {
    if root == nil {
        return
    }
    postorder(root!.left, res: &amp;res)
    postorder(root!.right, res: &amp;res)
    res.append(root!.val)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><p>前序遍历：（144.二叉树的前序遍历）</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable<span class="token punctuation">.</span></span>ListBuffer
  <span class="token keyword">def</span> preorderTraversal<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> traversal<span class="token punctuation">(</span>curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历：（94. 二叉树的中序遍历）</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>  
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable<span class="token punctuation">.</span></span>ListBuffer
  <span class="token keyword">def</span> inorderTraversal<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> traversal<span class="token punctuation">(</span>curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历：（145. 二叉树的后序遍历）</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable<span class="token punctuation">.</span></span>ListBuffer
  <span class="token keyword">def</span> postorderTraversal<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> traversal<span class="token punctuation">(</span>curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">preorder_traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res
    <span class="token punctuation">}</span>

<span class="token comment">//前序遍历</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> root <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">//后序遍历</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> root <span class="token punctuation">{</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">//中序遍历</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> root <span class="token punctuation">{</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 前序遍历
public IList&lt;int&gt; PreorderTraversal(TreeNode root)
{
    var res = new List&lt;int&gt;();
    if (root == null) return res;
    Traversal(root, res);
    return res;

}
public void Traversal(TreeNode cur, IList&lt;int&gt; res)
{
    if (cur == null) return;
    res.Add(cur.val);
    Traversal(cur.left, res);
    Traversal(cur.right, res);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 中序遍历
public IList&lt;int&gt; InorderTraversal(TreeNode root)
{
    var res = new List&lt;int&gt;();
    if (root == null) return res;
    Traversal(root, res);
    return res;
}
public void Traversal(TreeNode cur, IList&lt;int&gt; res)
{
    if (cur == null) return;
    Traversal(cur.left, res);
    res.Add(cur.val);
    Traversal(cur.right, res);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 后序遍历
public IList&lt;int&gt; PostorderTraversal(TreeNode root)
{
    var res = new List&lt;int&gt;();
    if (root == null) return res;
    Traversal(root, res);
    return res;
}
public void Traversal(TreeNode cur, IList&lt;int&gt; res)
{
    if (cur == null) return;
    Traversal(cur.left, res);
    Traversal(cur.right, res);
    res.Add(cur.val);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function y(h,T){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,u,d,n("p",null,[n("strong",null,[n("a",k,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",v,[s("每次写递归都要靠直觉？ 这次带你学透二叉树的递归遍历！"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),m,n("ul",null,[n("li",null,[n("a",b,[s("144.二叉树的前序遍历"),e(a)])]),n("li",null,[n("a",f,[s("145.二叉树的后序遍历"),e(a)])]),n("li",null,[n("a",g,[s("94.二叉树的中序遍历"),e(a)])])]),w])}const _=p(i,[["render",y],["__file","erchashudediguibianli.html.vue"]]);export{_ as default};
