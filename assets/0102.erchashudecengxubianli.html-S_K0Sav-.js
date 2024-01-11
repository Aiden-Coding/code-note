import{_ as t,r as o,o as c,c as l,a as n,b as s,d as e,e as p}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"二叉树层序遍历登场",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树层序遍历登场","aria-hidden":"true"},"#"),s(" 二叉树层序遍历登场！")],-1),r=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),k={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.bilibili.com/video/BV1GY4y1u7b2",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"学会二叉树的层序遍历，可以一口气打完以下十题：",-1),m={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode.cn/problems/binary-tree-right-side-view/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://leetcode.cn/problems/n-ary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[n("img",{src:"https://code-thinking.cdn.bcebos.com/gifs/我要打十个.gif",alt:"我要打十个"})],-1),L=n("h2",{id:"_102-二叉树的层序遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_102-二叉树的层序遍历","aria-hidden":"true"},"#"),s(" 102.二叉树的层序遍历")],-1),T={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。",-1),S=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210203144842988.png",alt:"102.二叉树的层序遍历"})],-1),j=n("h3",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),z=n("p",null,"我们之前讲过了三篇关于二叉树的深度优先遍历的文章：",-1),Q={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},C=p(`<p>接下来我们再来介绍二叉树的另一种遍历方式：层序遍历。</p><p>层序遍历一个二叉树。就是从左到右一层一层的去遍历二叉树。这种遍历的方式和我们之前讲过的都不太一样。</p><p>需要借用一个辅助数据结构即队列来实现，<strong>队列先进先出，符合一层一层遍历的逻辑，而用栈先进后出适合模拟深度优先遍历也就是递归的逻辑。</strong></p><p><strong>而这种层序遍历方式就是图论中的广度优先遍历，只不过我们应用在二叉树上。</strong></p><p>使用队列实现二叉树广度优先遍历，动画如下：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/102二叉树的层序遍历.gif" alt="102二叉树的层序遍历"></p><p>这样就实现了层序从左到右遍历二叉树。</p><p>代码如下：<strong>这份代码也可以作为二叉树层序遍历的模板，打十个就靠它了</strong>。</p><p>c++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; levelOrder(TreeNode* root) {
        queue&lt;TreeNode*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;vector&lt;int&gt;&gt; result;
        while (!que.empty()) {
            int size = que.size();
            vector&lt;int&gt; vec;
            // 这里一定要使用固定大小size，不要使用que.size()，因为que.size是不断变化的
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                vec.push_back(node-&gt;val);
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            result.push_back(vec);
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code># 递归法
class Solution {
public:
    void order(TreeNode* cur, vector&lt;vector&lt;int&gt;&gt;&amp; result, int depth)
    {
        if (cur == nullptr) return;
        if (result.size() == depth) result.push_back(vector&lt;int&gt;());
        result[depth].push_back(cur-&gt;val);
        order(cur-&gt;left, result, depth + 1);
        order(cur-&gt;right, result, depth + 1);
    }
    vector&lt;vector&lt;int&gt;&gt; levelOrder(TreeNode* root) {
        vector&lt;vector&lt;int&gt;&gt; result;
        int depth = 0;
        order(root, result, depth);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java:</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 102.二叉树的层序遍历
class Solution {
    public List&lt;List&lt;Integer&gt;&gt; resList = new ArrayList&lt;List&lt;Integer&gt;&gt;();

    public List&lt;List&lt;Integer&gt;&gt; levelOrder(TreeNode root) {
        //checkFun01(root,0);
        checkFun02(root);

        return resList;
    }

    //DFS--递归方式
    public void checkFun01(TreeNode node, Integer deep) {
        if (node == null) return;
        deep++;

        if (resList.size() &lt; deep) {
            //当层级增加时，list的Item也增加，利用list的索引值进行层级界定
            List&lt;Integer&gt; item = new ArrayList&lt;Integer&gt;();
            resList.add(item);
        }
        resList.get(deep - 1).add(node.val);

        checkFun01(node.left, deep);
        checkFun01(node.right, deep);
    }

    //BFS--迭代方式--借助队列
    public void checkFun02(TreeNode node) {
        if (node == null) return;
        Queue&lt;TreeNode&gt; que = new LinkedList&lt;TreeNode&gt;();
        que.offer(node);

        while (!que.isEmpty()) {
            List&lt;Integer&gt; itemList = new ArrayList&lt;Integer&gt;();
            int len = que.size();

            while (len &gt; 0) {
                TreeNode tmpNode = que.poll();
                itemList.add(tmpNode.val);

                if (tmpNode.left != null) que.offer(tmpNode.left);
                if (tmpNode.right != null) que.offer(tmpNode.right);
                len--;
            }

            resList.add(itemList);
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 利用长度法</span>
<span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                level<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                <span class="token keyword">if</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>level<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 递归法</span>
<span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        levels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>helper<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> levels<span class="token punctuation">)</span>
        <span class="token keyword">return</span> levels
    
    <span class="token keyword">def</span> <span class="token function">helper</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> level<span class="token punctuation">,</span> levels<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>levels<span class="token punctuation">)</span> <span class="token operator">==</span> level<span class="token punctuation">:</span>
            levels<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        levels<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>helper<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> levels<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>helper<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> levels<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go:</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
102. 二叉树的递归遍历
 */</span>
<span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	depth <span class="token operator">:=</span> <span class="token number">0</span>

	<span class="token keyword">var</span> order <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> depth <span class="token builtin">int</span><span class="token punctuation">)</span>

	order <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> depth <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">==</span> depth <span class="token punctuation">{</span>
			arr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		arr<span class="token punctuation">[</span>depth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>

		<span class="token function">order</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> depth<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">order</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> depth<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">order</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> depth<span class="token punctuation">)</span>

	<span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
102. 二叉树的层序遍历
 */</span>
<span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span><span class="token comment">//防止为空</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    queue <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">var</span> tmpArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

    <span class="token keyword">for</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment">//保存当前层的长度，然后处理当前层（十分重要，防止添加下层元素影响判断层中元素的个数）</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>    <span class="token comment">//出队列</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            tmpArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>    <span class="token comment">//将值加入本层切片中</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tmpArr<span class="token punctuation">)</span>          <span class="token comment">//放入结果集</span>
        tmpArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>                  <span class="token comment">//清空层的数据</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">/**
102. 二叉树的层序遍历：使用切片模拟队列，易理解
 */</span>
<span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    curLevel <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">{</span>root<span class="token punctuation">}</span>  <span class="token comment">// 存放当前层节点</span>
    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>curLevel<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        nextLevel <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 准备通过当前层生成下一层</span>
        vals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> node <span class="token operator">:=</span> <span class="token keyword">range</span> curLevel <span class="token punctuation">{</span>
            vals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>vals<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span> <span class="token comment">// 收集当前层的值</span>
            <span class="token comment">// 收集下一层的节点</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                nextLevel <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nextLevel<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                nextLevel <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nextLevel<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> vals<span class="token punctuation">)</span>
        curLevel <span class="token operator">=</span> nextLevel <span class="token comment">// 将下一层变成当前层</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//二叉树的层序遍历</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 记录当前层级节点数</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//存放每一层的节点</span>
        <span class="token keyword">let</span> curLevel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            curLevel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 存放当前层下一层的节点</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//把每一层的结果放到结果数组</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">levelOrder</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> root <span class="token operator">=</span> root <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> result <span class="token punctuation">}</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> subarray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            subarray<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>subarray<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 102.二叉树的层序遍历</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> levelOrder<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 声明一个队列</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 把根节点加入queue</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size <span class="token comment">// 求出len的长度</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 从0到当前队列长度的所有节点都加入到结果集</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">level_order</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> temp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public IList&lt;IList&lt;int&gt;&gt; LevelOrder(TreeNode root)
{
    var res = new List&lt;IList&lt;int&gt;&gt;();
    var que = new Queue&lt;TreeNode&gt;();
    if (root == null) return res;
    que.Enqueue(root);
    while (que.Count != 0)
    {
        var size = que.Count;
        var vec = new List&lt;int&gt;();
        for (int i = 0; i &lt; size; i++)
        {
            var cur = que.Dequeue();
            vec.Add(cur.val);
            if (cur.left != null) que.Enqueue(cur.left);
            if (cur.right != null) que.Enqueue(cur.right);
        }
        res.Add(vec);


    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时我们就掌握了二叉树的层序遍历了，那么如下九道力扣上的题目，只需要修改模板的两三行代码（不能再多了），便可打倒！</strong></p><h2 id="_107-二叉树的层次遍历-ii" tabindex="-1"><a class="header-anchor" href="#_107-二叉树的层次遍历-ii" aria-hidden="true">#</a> 107.二叉树的层次遍历 II</h2>`,34),R={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/",target:"_blank",rel:"noopener noreferrer"},D=p(`<p>给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203151058308.png" alt="107.二叉树的层次遍历II"></p><h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3><p>相对于102.二叉树的层序遍历，就是最后把result数组反转一下就可以了。</p><p>C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; levelOrderBottom(TreeNode* root) {
        queue&lt;TreeNode*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;vector&lt;int&gt;&gt; result;
        while (!que.empty()) {
            int size = que.size();
            vector&lt;int&gt; vec;
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                vec.push_back(node-&gt;val);
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            result.push_back(vec);
        }
        reverse(result.begin(), result.end()); // 在这里反转一下数组即可
        return result;

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-1" tabindex="-1"><a class="header-anchor" href="#其他语言版本-1" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="python-1" tabindex="-1"><a class="header-anchor" href="#python-1" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;二叉树层序遍历II迭代解法&quot;&quot;&quot;</span>

<span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">levelOrderBottom</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                level<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                <span class="token keyword">if</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>level<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-1" tabindex="-1"><a class="header-anchor" href="#java-1" aria-hidden="true">#</a> Java：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 107. 二叉树的层序遍历 II</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">N0107</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 解法：队列，迭代。
     * 层序遍历，再翻转数组即可。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">solution1</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> que <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>que<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> levelList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> levelSize <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> peek <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">peekFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                levelList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>que<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>peek<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>peek<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>peek<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>peek<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 思路和模板相同, 对收集答案的方式做了优化, 最后不需要反转
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">levelOrderBottom</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 利用链表可以进行 O(1) 头部插入, 这样最后答案不需要再反转</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 新遍历到的层插到头部, 这样就满足按照层次反序的要求</span>
            ans<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-1" tabindex="-1"><a class="header-anchor" href="#go-1" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
107. 二叉树的层序遍历 II
 */
func levelOrderBottom(root *TreeNode) [][]int {
    queue := list.New()
    res := [][]int{}
    if root == nil{
        return res
    }
    queue.PushBack(root)

    for queue.Len() &gt; 0 {
        length := queue.Len()
        tmp := []int{}
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*TreeNode)
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
            tmp = append(tmp, node.Val)
        }
        res=append(res, tmp)
    }

    //反转结果集
    for i:=0; i&lt;len(res)/2; i++ {
        res[i], res[len(res)-i-1] = res[len(res)-i-1], res[i]
    }

    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-1" tabindex="-1"><a class="header-anchor" href="#javascript-1" aria-hidden="true">#</a> Javascript:</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> root<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 存放当前层级节点数组</span>
        <span class="token keyword">let</span> curLevel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 计算当前层级节点数量</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>length<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 把当前层节点存入curLevel数组</span>
            curLevel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 把下一层级的左右节点存入queue队列</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
	<span class="token comment">// 从数组前头插入值，避免最后反转数组，减少运算时间</span>
        res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>curLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-1" tabindex="-1"><a class="header-anchor" href="#typescript-1" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">levelOrderBottom</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-1" tabindex="-1"><a class="header-anchor" href="#swift-1" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">levelOrderBottom</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> subarray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            subarray<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>subarray<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-1" tabindex="-1"><a class="header-anchor" href="#scala-1" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 107.二叉树的层次遍历II</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> levelOrderBottom<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最后翻转一下</span>
    res<span class="token punctuation">.</span>reverse<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-1" tabindex="-1"><a class="header-anchor" href="#rust-1" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">level_order_bottom</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> temp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">into_iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public IList&lt;IList&lt;int&gt;&gt; LevelOrderBottom(TreeNode root)
{
    var res = new List&lt;IList&lt;int&gt;&gt;();
    var que = new Queue&lt;TreeNode&gt;();
    if (root == null) return res;
    que.Enqueue(root);
    while (que.Count != 0)
    {
        var size = que.Count;
        var vec = new List&lt;int&gt;();
        for (int i = 0; i &lt; size; i++)
        {
            var cur = que.Dequeue();
            vec.Add(cur.val);
            if (cur.left != null) que.Enqueue(cur.left);
            if (cur.right != null) que.Enqueue(cur.right);
        }
        res.Add(vec);
    }
    res.Reverse();
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_199-二叉树的右视图" tabindex="-1"><a class="header-anchor" href="#_199-二叉树的右视图" aria-hidden="true">#</a> 199.二叉树的右视图</h2>`,27),O={href:"https://leetcode.cn/problems/binary-tree-right-side-view/",target:"_blank",rel:"noopener noreferrer"},E=p(`<p>给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203151307377.png" alt="199.二叉树的右视图"></p><h3 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h3><p>层序遍历的时候，判断是否遍历到单层的最后面的元素，如果是，就放进result数组中，随后返回result就可以了。</p><p>C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; rightSideView(TreeNode* root) {
        queue&lt;TreeNode*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;int&gt; result;
        while (!que.empty()) {
            int size = que.size();
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if (i == (size - 1)) result.push_back(node-&gt;val); // 将每一层的最后元素放入result数组中
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-2" tabindex="-1"><a class="header-anchor" href="#其他语言版本-2" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="python-2" tabindex="-1"><a class="header-anchor" href="#python-2" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">rightSideView</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        right_view <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> i <span class="token operator">==</span> level_size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    right_view<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> right_view
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-2" tabindex="-1"><a class="header-anchor" href="#java-2" aria-hidden="true">#</a> Java:</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 199.二叉树的右视图</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">N0199</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 解法：队列，迭代。
     * 每次返回每层的最后一个字段即可。
     *
     * 小优化：每层右孩子先入队。代码略。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">rightSideView</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> que <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>que<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> levelSize <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> poll <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> levelSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-2" tabindex="-1"><a class="header-anchor" href="#go-2" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
199. 二叉树的右视图
 */
func rightSideView(root *TreeNode) []int {
    if root == nil {
        return nil
    }
    res := make([]int, 0)
    queue := list.New()
    queue.PushBack(root)

    for queue.Len() &gt; 0 {
        length := queue.Len()
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*TreeNode)
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
            // 取每层的最后一个元素，添加到结果集中
            if i == length-1 {
                res = append(res, node.Val)
            }
        }
    }
    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-2" tabindex="-1"><a class="header-anchor" href="#javascript-2" aria-hidden="true">#</a> Javascript:</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rightSideView</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//二叉树右视图 只需要把每一层最后一个节点存储到res数组</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> root<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 记录当前层级节点个数</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>length<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// length长度为0的时候表明到了层级最后一个节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-2" tabindex="-1"><a class="header-anchor" href="#typescript-2" aria-hidden="true">#</a> TypeScript：</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">rightSideView</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-2" tabindex="-1"><a class="header-anchor" href="#swift-2" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">rightSideView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span> result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">}</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-2" tabindex="-1"><a class="header-anchor" href="#scala-2" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 199.二叉树的右视图</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> rightSideView<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">var</span> curNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>   <span class="token comment">// 把最后一个节点的值加入解集</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toList  <span class="token comment">// 最后需要把res转换为List，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-2" tabindex="-1"><a class="header-anchor" href="#rust-2" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">right_side_view</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>len <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> i <span class="token operator">==</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_637-二叉树的层平均值" tabindex="-1"><a class="header-anchor" href="#_637-二叉树的层平均值" aria-hidden="true">#</a> 637.二叉树的层平均值</h2>`,24),B={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree/",target:"_blank",rel:"noopener noreferrer"},V=p(`<p>给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203151350500.png" alt="637.二叉树的层平均值"></p><h3 id="思路-3" tabindex="-1"><a class="header-anchor" href="#思路-3" aria-hidden="true">#</a> 思路</h3><p>本题就是层序遍历的时候把一层求个总和在取一个均值。</p><p>C++代码:</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;double&gt; averageOfLevels(TreeNode* root) {
        queue&lt;TreeNode*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;double&gt; result;
        while (!que.empty()) {
            int size = que.size();
            double sum = 0; // 统计每一层的和
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                sum += node-&gt;val;
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            result.push_back(sum / size); // 将每一层均值放进结果集
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-3" tabindex="-1"><a class="header-anchor" href="#其他语言版本-3" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="python-3" tabindex="-1"><a class="header-anchor" href="#python-3" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;二叉树层平均值迭代解法&quot;&quot;&quot;</span>

<span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">averageOfLevels</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        averages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            level_sum <span class="token operator">=</span> <span class="token number">0</span>
            
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                
                level_sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val
                    
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            
            averages<span class="token punctuation">.</span>append<span class="token punctuation">(</span>level_sum <span class="token operator">/</span> size<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> averages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-3" tabindex="-1"><a class="header-anchor" href="#java-3" aria-hidden="true">#</a> Java:</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 637. 二叉树的层平均值</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">N0637</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 解法：队列，迭代。
     * 每次返回每层的最后一个字段即可。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> <span class="token function">averageOfLevels</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> que <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>que<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">int</span> levelSize <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> levelSum <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> poll <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                levelSum <span class="token operator">+=</span> poll<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    que<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelSum <span class="token operator">/</span> levelSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-3" tabindex="-1"><a class="header-anchor" href="#go-3" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
637. 二叉树的层平均值
 */
func averageOfLevels(root *TreeNode) []float64 {
    if root == nil {
        // 防止为空
        return nil
    }
    res := make([]float64, 0)
    queue := list.New()
    queue.PushBack(root)

    var sum int
    for queue.Len() &gt; 0 {
        //保存当前层的长度，然后处理当前层（十分重要，防止添加下层元素影响判断层中元素的个数）
        length := queue.Len()
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*TreeNode)
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
            // 当前层元素求和
            sum += node.Val
        }
        // 计算每层的平均值，将结果添加到响应结果中
        res = append(res, float64(sum)/float64(length))
        sum = 0 // 清空该层的数据
    }
    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-3" tabindex="-1"><a class="header-anchor" href="#javascript-3" aria-hidden="true">#</a> Javascript：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">averageOfLevels</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//层级平均值</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> root<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//每一层节点个数</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//sum记录每一层的和</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//每一层的平均值存入数组res</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token operator">/</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-3" tabindex="-1"><a class="header-anchor" href="#typescript-3" aria-hidden="true">#</a> TypeScript：</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">averageOfLevels</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> total<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            total <span class="token operator">+=</span> tempNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>total <span class="token operator">/</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-3" tabindex="-1"><a class="header-anchor" href="#swift-3" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">averageOfLevels</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Double</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Double</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-3" tabindex="-1"><a class="header-anchor" href="#scala-3" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 637.二叉树的层平均值</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> averageOfLevels<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ArrayBuffer<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0.0</span>
      <span class="token keyword">var</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> curNode<span class="token punctuation">.</span>value <span class="token comment">// 累加该层的值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>sum <span class="token operator">/</span> len<span class="token punctuation">)</span> <span class="token comment">// 平均值即为sum/len</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toArray <span class="token comment">// 最后需要转换为Array，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-3" tabindex="-1"><a class="header-anchor" href="#rust-3" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">average_of_levels</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">f64</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>len <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sum <span class="token operator">+=</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sum <span class="token keyword">as</span> <span class="token keyword">f64</span><span class="token punctuation">)</span> <span class="token operator">/</span> len <span class="token keyword">as</span> <span class="token keyword">f64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_429-n叉树的层序遍历" tabindex="-1"><a class="header-anchor" href="#_429-n叉树的层序遍历" aria-hidden="true">#</a> 429.N叉树的层序遍历</h2>`,24),F={href:"https://leetcode.cn/problems/n-ary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},G=p(`<p>给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。</p><p>例如，给定一个 3叉树 :</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203151439168.png" alt="429. N叉树的层序遍历"></p><p>返回其层序遍历:</p><p>[ [1], [3,2,4], [5,6] ]</p><h3 id="思路-4" tabindex="-1"><a class="header-anchor" href="#思路-4" aria-hidden="true">#</a> 思路</h3><p>这道题依旧是模板题，只不过一个节点有多个孩子了</p><p>C++代码:</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; levelOrder(Node* root) {
        queue&lt;Node*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;vector&lt;int&gt;&gt; result;
        while (!que.empty()) {
            int size = que.size();
            vector&lt;int&gt; vec;
            for (int i = 0; i &lt; size; i++) {
                Node* node = que.front();
                que.pop();
                vec.push_back(node-&gt;val);
                for (int i = 0; i &lt; node-&gt;children.size(); i++) { // 将节点孩子加入队列
                    if (node-&gt;children[i]) que.push(node-&gt;children[i]);
                }
            }
            result.push_back(vec);
        }
        return result;

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-4" tabindex="-1"><a class="header-anchor" href="#其他语言版本-4" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="python-4" tabindex="-1"><a class="header-anchor" href="#python-4" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                level<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

                <span class="token keyword">for</span> child <span class="token keyword">in</span> node<span class="token punctuation">.</span>children<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>child<span class="token punctuation">)</span>

            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>level<span class="token punctuation">)</span>

        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># LeetCode 429. N-ary Tree Level Order Traversal</span>
<span class="token comment"># 递归法</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>depth<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token operator">==</span>depth<span class="token punctuation">:</span>result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            result<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>children<span class="token punctuation">:</span>
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>depth<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>

        traversal<span class="token punctuation">(</span>root<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-4" tabindex="-1"><a class="header-anchor" href="#java-4" aria-hidden="true">#</a> Java:</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 429. N 叉树的层序遍历</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">N0429</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 解法1：队列，迭代。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> que <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>que<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> levelSize <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> levelList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> poll <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                levelList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> poll<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> children<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> child <span class="token operator">:</span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        que<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> _val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> _val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> _val<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> _children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> _val<span class="token punctuation">;</span>
            children <span class="token operator">=</span> _children<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-4" tabindex="-1"><a class="header-anchor" href="#go-4" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
429. N 叉树的层序遍历
 */

func levelOrder(root *Node) [][]int {
    queue := list.New()
    res := [][]int{}       //结果集
    if root == nil{
        return res
    }
    queue.PushBack(root)
    for queue.Len() &gt; 0 {
        length := queue.Len()     //记录当前层的数量
        var tmp []int
        for T := 0; T &lt; length; T++ {        //该层的每个元素：一添加到该层的结果集中；二找到该元素的下层元素加入到队列中，方便下次使用
            myNode := queue.Remove(queue.Front()).(*Node)
            tmp = append(tmp, myNode.Val)
            for i := 0; i &lt; len(myNode.Children); i++ {
                queue.PushBack(myNode.Children[i])
            }
        }
        res = append(res, tmp)
    }

    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-4" tabindex="-1"><a class="header-anchor" href="#javascript-4" aria-hidden="true">#</a> JavaScript：</h4><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var levelOrder = function(root) {
    //每一层可能有2个以上,所以不再使用node.left node.right
    let res = [], queue = [];
    queue.push(root);

    while(queue.length &amp;&amp; root!==null) {
        //记录每一层节点个数还是和二叉树一致
        let length = queue.length;
        //存放每层节点 也和二叉树一致
        let curLevel = [];
        while(length--) {
            let node = queue.shift();
            curLevel.push(node.val);

            //这里不再是 ndoe.left node.right 而是循坏node.children
           for(let item of node.children){
               item &amp;&amp; queue.push(item);
           }
        }
        res.push(curLevel);
    }

    return res;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-4" tabindex="-1"><a class="header-anchor" href="#typescript-4" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> Node<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>curNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-4" tabindex="-1"><a class="header-anchor" href="#swift-4" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">levelOrder</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">Node</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Node</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> subarray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            subarray<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 下一层</span>
            <span class="token keyword">for</span> node <span class="token keyword">in</span> node<span class="token punctuation">.</span>children <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>subarray<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-4" tabindex="-1"><a class="header-anchor" href="#scala-4" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 429.N叉树的层序遍历</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> levelOrder<span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>Node<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 根节点入队</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存储每层节点</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 将该节点的值加入tmp</span>
        <span class="token comment">// 循环遍历该节点的子节点，加入队列</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>child <span class="token keyword">&lt;-</span> curNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>toList<span class="token punctuation">)</span> <span class="token comment">// 将该层的节点放到结果集</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-4" tabindex="-1"><a class="header-anchor" href="#rust-4" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span><span class="token punctuation">;</span>
<span class="token attribute attr-name">#[derive(Debug, PartialEq, Eq)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> children<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">Node</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token attribute attr-name">#[inline]</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> <span class="token punctuation">{</span>
            val<span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">level_order</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">Node</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> temp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token operator">!</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">for</span> n <span class="token keyword">in</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_515-在每个树行中找最大值" tabindex="-1"><a class="header-anchor" href="#_515-在每个树行中找最大值" aria-hidden="true">#</a> 515.在每个树行中找最大值</h2>`,28),J={href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row/",target:"_blank",rel:"noopener noreferrer"},U=p(`<p>您需要在二叉树的每一行中找到最大的值。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203151532153.png" alt="515.在每个树行中找最大值"></p><h3 id="思路-5" tabindex="-1"><a class="header-anchor" href="#思路-5" aria-hidden="true">#</a> 思路</h3><p>层序遍历，取每一层的最大值</p><p>C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; largestValues(TreeNode* root) {
        queue&lt;TreeNode*&gt; que;
        if (root != NULL) que.push(root);
        vector&lt;int&gt; result;
        while (!que.empty()) {
            int size = que.size();
            int maxValue = INT_MIN; // 取每一层的最大值
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                maxValue = node-&gt;val &gt; maxValue ? node-&gt;val : maxValue;
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            result.push_back(maxValue); // 把最大值放进数组
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-5" tabindex="-1"><a class="header-anchor" href="#其他语言版本-5" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="python-5" tabindex="-1"><a class="header-anchor" href="#python-5" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">largestValues</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            max_val <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;-inf&#39;</span><span class="token punctuation">)</span>

            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                max_val <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>max_val<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>

                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>max_val<span class="token punctuation">)</span>

        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-5" tabindex="-1"><a class="header-anchor" href="#java-5" aria-hidden="true">#</a> Java：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">largestValues</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-5" tabindex="-1"><a class="header-anchor" href="#go-5" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
515. 在每个树行中找最大值
 */
func largestValues(root *TreeNode) []int {
    if root == nil {
        //防止为空
        return nil
    }
    queue := list.New()
    queue.PushBack(root)
    ans := make([]int, 0)
    temp := math.MinInt64
    // 层序遍历
    for queue.Len() &gt; 0 {
        //保存当前层的长度，然后处理当前层（十分重要，防止添加下层元素影响判断层中元素的个数）
        length := queue.Len()
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*TreeNode)//出队列
            // 比较当前层中的最大值和新遍历的元素大小，取两者中大值
            temp = max(temp, node.Val)
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
        }
        ans = append(ans, temp)
        temp = math.MinInt64
    }
    return ans
}

func max(x, y int) int {
    if x &gt; y {
        return x
    }
    return y
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-5" tabindex="-1"><a class="header-anchor" href="#javascript-5" aria-hidden="true">#</a> Javascript：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">largestValues</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用层序遍历</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//设置max初始值就是队列的第一个元素</span>
        <span class="token keyword">let</span> max <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>length<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            max <span class="token operator">=</span> max <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>val <span class="token operator">?</span> max <span class="token operator">:</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//把每一层的最大值放到res数组</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-5" tabindex="-1"><a class="header-anchor" href="#typescript-5" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">largestValues</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> max<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> tempNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> max <span class="token operator">&gt;</span> tempNode<span class="token punctuation">.</span>val <span class="token operator">?</span> max <span class="token operator">:</span> tempNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-5" tabindex="-1"><a class="header-anchor" href="#swift-5" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">largestValues</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> max <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>val
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> max <span class="token punctuation">{</span> max <span class="token operator">=</span> node<span class="token punctuation">.</span>val <span class="token punctuation">}</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-5" tabindex="-1"><a class="header-anchor" href="#scala-5" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 515.在每个树行中找最大值</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> largestValues<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> max <span class="token operator">=</span> <span class="token builtin">Int</span><span class="token punctuation">.</span>MinValue <span class="token comment">// 初始化max为系统最小值</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        max <span class="token operator">=</span> math<span class="token punctuation">.</span>max<span class="token punctuation">(</span>max<span class="token punctuation">,</span> curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 对比求解最大值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token comment">// 将最大值放入结果集</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-5" tabindex="-1"><a class="header-anchor" href="#rust-5" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">largest_values</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                max <span class="token operator">=</span> max<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_116-填充每个节点的下一个右侧节点指针" tabindex="-1"><a class="header-anchor" href="#_116-填充每个节点的下一个右侧节点指针" aria-hidden="true">#</a> 116.填充每个节点的下一个右侧节点指针</h2>`,24),M={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/",target:"_blank",rel:"noopener noreferrer"},Y=p(`<p>给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> val<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>left<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>right<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。</p><p>初始状态下，所有 next 指针都被设置为 NULL。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203152044855.jpg" alt="116.填充每个节点的下一个右侧节点指针"></p><h3 id="思路-6" tabindex="-1"><a class="header-anchor" href="#思路-6" aria-hidden="true">#</a> 思路</h3><p>本题依然是层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点就可以了</p><p>C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    Node* connect(Node* root) {
        queue&lt;Node*&gt; que;
        if (root != NULL) que.push(root);
        while (!que.empty()) {
            int size = que.size();
            // vector&lt;int&gt; vec;
            Node* nodePre;
            Node* node;
            for (int i = 0; i &lt; size; i++) {
                if (i == 0) {
                    nodePre = que.front(); // 取出一层的头结点
                    que.pop();
                    node = nodePre;
                } else {
                    node = que.front();
                    que.pop();
                    nodePre-&gt;next = node; // 本层前一个节点next指向本节点
                    nodePre = nodePre-&gt;next;
                }
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            nodePre-&gt;next = NULL; // 本层最后一个节点指向NULL
        }
        return root;

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-6" tabindex="-1"><a class="header-anchor" href="#其他语言版本-6" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="java-6" tabindex="-1"><a class="header-anchor" href="#java-6" aria-hidden="true">#</a> Java：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> tmpQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmpQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>tmpQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    <span class="token keyword">int</span> size <span class="token operator">=</span> tmpQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Node</span> cur <span class="token operator">=</span> tmpQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmpQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmpQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Node</span> next <span class="token operator">=</span> tmpQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmpQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmpQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="python-6" tabindex="-1"><a class="header-anchor" href="#python-6" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: &#39;Node&#39; = None, right: &#39;Node&#39; = None, next: &#39;Node&#39; = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">connect</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> root
        
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            prev <span class="token operator">=</span> <span class="token boolean">None</span>
            
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> prev<span class="token punctuation">:</span>
                    prev<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> node
                
                prev <span class="token operator">=</span> node
                
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-6" tabindex="-1"><a class="header-anchor" href="#go-6" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
116. 填充每个节点的下一个右侧节点指针
117. 填充每个节点的下一个右侧节点指针 II
 */

func connect(root *Node) *Node {
    if root == nil { //防止为空
        return root
    }
    queue := list.New()
    queue.PushBack(root)
    tmpArr := make([]*Node, 0)
    for queue.Len() &gt; 0 {
        length := queue.Len() //保存当前层的长度，然后处理当前层（十分重要，防止添加下层元素影响判断层中元素的个数）
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*Node) //出队列
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
            tmpArr = append(tmpArr, node) //将值加入本层切片中
        }
        if len(tmpArr) &gt; 1 {
            // 遍历每层元素,指定next
            for i := 0; i &lt; len(tmpArr)-1; i++ {
                tmpArr[i].Next = tmpArr[i+1]
            }
        }
        tmpArr = []*Node{} //清空层的数据
    }
    return root
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-6" tabindex="-1"><a class="header-anchor" href="#javascript-6" aria-hidden="true">#</a> JavaScript:</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, left, right, next) <span class="token punctuation">{</span>
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>next <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-6" tabindex="-1"><a class="header-anchor" href="#typescript-6" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> Node<span class="token punctuation">,</span> curNode<span class="token operator">:</span> Node<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                preNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                curNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
                preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
                preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-6" tabindex="-1"><a class="header-anchor" href="#swift-6" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">Node</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Node</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Node</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> current<span class="token punctuation">,</span> previous<span class="token punctuation">:</span> <span class="token class-name">Node</span><span class="token operator">!</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                previous <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                current <span class="token operator">=</span> previous
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current
                previous <span class="token operator">=</span> current
            <span class="token punctuation">}</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-6" tabindex="-1"><a class="header-anchor" href="#scala-6" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 116.填充每个节点的下一个右侧节点指针</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>

  <span class="token keyword">def</span> connect<span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>Node<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">val</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>Node<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 处理next指针</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until tmp<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> tmp<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      tmp<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    root
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_117-填充每个节点的下一个右侧节点指针ii" tabindex="-1"><a class="header-anchor" href="#_117-填充每个节点的下一个右侧节点指针ii" aria-hidden="true">#</a> 117.填充每个节点的下一个右侧节点指针II</h2>`,25),H={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/",target:"_blank",rel:"noopener noreferrer"},K=p(`<h3 id="思路-7" tabindex="-1"><a class="header-anchor" href="#思路-7" aria-hidden="true">#</a> 思路</h3><p>这道题目说是二叉树，但116题目说是完整二叉树，其实没有任何差别，一样的代码一样的逻辑一样的味道</p><p>C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    Node* connect(Node* root) {
        queue&lt;Node*&gt; que;
        if (root != NULL) que.push(root);
        while (!que.empty()) {
            int size = que.size();
            vector&lt;int&gt; vec;
            Node* nodePre;
            Node* node;
            for (int i = 0; i &lt; size; i++) {
                if (i == 0) {
                    nodePre = que.front(); // 取出一层的头结点
                    que.pop();
                    node = nodePre;
                } else {
                    node = que.front();
                    que.pop();
                    nodePre-&gt;next = node; // 本层前一个节点next指向本节点
                    nodePre = nodePre-&gt;next;
                }
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
            nodePre-&gt;next = NULL; // 本层最后一个节点指向NULL
        }
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-7" tabindex="-1"><a class="header-anchor" href="#其他语言版本-7" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="java-7" tabindex="-1"><a class="header-anchor" href="#java-7" aria-hidden="true">#</a> Java：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 二叉树之层次遍历</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">Node</span> nodePre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    nodePre <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出本层头一个节点</span>
                    node <span class="token operator">=</span> nodePre<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    nodePre<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 本层前一个节点 next 指向当前节点</span>
                    nodePre <span class="token operator">=</span> nodePre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            nodePre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 本层最后一个节点 next 指向 null</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="python-7" tabindex="-1"><a class="header-anchor" href="#python-7" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 层序遍历解法</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: &#39;Node&#39; = None, right: &#39;Node&#39; = None, next: &#39;Node&#39; = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">connect</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&#39;Node&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> root
        
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            level_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
            prev <span class="token operator">=</span> <span class="token boolean">None</span>
            
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> prev<span class="token punctuation">:</span>
                    prev<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> node
                
                prev <span class="token operator">=</span> node
                
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-7" tabindex="-1"><a class="header-anchor" href="#go-7" aria-hidden="true">#</a> Go:</h4><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>/**
116. 填充每个节点的下一个右侧节点指针
117. 填充每个节点的下一个右侧节点指针 II
 */

func connect(root *Node) *Node {
    if root == nil { //防止为空
        return root
    }
    queue := list.New()
    queue.PushBack(root)
    tmpArr := make([]*Node, 0)
    for queue.Len() &gt; 0 {
        length := queue.Len() //保存当前层的长度，然后处理当前层（十分重要，防止添加下层元素影响判断层中元素的个数）
        for i := 0; i &lt; length; i++ {
            node := queue.Remove(queue.Front()).(*Node) //出队列
            if node.Left != nil {
                queue.PushBack(node.Left)
            }
            if node.Right != nil {
                queue.PushBack(node.Right)
            }
            tmpArr = append(tmpArr, node) //将值加入本层切片中
        }
        if len(tmpArr) &gt; 1 {
            // 遍历每层元素,指定next
            for i := 0; i &lt; len(tmpArr)-1; i++ {
                tmpArr[i].Next = tmpArr[i+1]
            }
        }
        tmpArr = []*Node{} //清空层的数据
    }
    return root
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-7" tabindex="-1"><a class="header-anchor" href="#javascript-7" aria-hidden="true">#</a> JavaScript:</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, left, right, next) <span class="token punctuation">{</span>
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> node<span class="token punctuation">.</span>next <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-7" tabindex="-1"><a class="header-anchor" href="#typescript-7" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> Node<span class="token punctuation">,</span> curNode<span class="token operator">:</span> Node<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                preNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                curNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
                preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
                preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-7" tabindex="-1"><a class="header-anchor" href="#swift-7" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">Node</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Node</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表示一层</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Node</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> root <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        <span class="token keyword">var</span> current<span class="token punctuation">,</span> previous<span class="token punctuation">:</span> <span class="token class-name">Node</span><span class="token operator">!</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                previous <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                current <span class="token operator">=</span> previous
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current
                previous <span class="token operator">=</span> current
            <span class="token punctuation">}</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-7" tabindex="-1"><a class="header-anchor" href="#scala-7" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 117.填充每个节点的下一个右侧节点指针II</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>

  <span class="token keyword">def</span> connect<span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>Node<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">val</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>Node<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 处理next指针</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until tmp<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> tmp<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      tmp<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    root
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_104-二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#_104-二叉树的最大深度" aria-hidden="true">#</a> 104.二叉树的最大深度</h2>`,20),W={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},X=p(`<p>给定一个二叉树，找出其最大深度。</p><p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p><p>说明: 叶子节点是指没有子节点的节点。</p><p>示例：</p><p>给定二叉树 [3,9,20,null,null,15,7]，</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203153031914-20230310134849764.png" alt="104. 二叉树的最大深度"></p><p>返回它的最大深度 3 。</p><h3 id="思路-8" tabindex="-1"><a class="header-anchor" href="#思路-8" aria-hidden="true">#</a> 思路</h3><p>使用迭代法的话，使用层序遍历是最为合适的，因为最大的深度就是二叉树的层数，和层序遍历的方式极其吻合。</p><p>在二叉树中，一层一层的来遍历二叉树，记录一下遍历的层数就是二叉树的深度，如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200810193056585-20230310134854803.png" alt="层序遍历"></p><p>所以这道题的迭代法就是一道模板题，可以使用二叉树层序遍历的模板来解决的。</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == NULL) return 0;
        int depth = 0;
        queue&lt;TreeNode*&gt; que;
        que.push(root);
        while(!que.empty()) {
            int size = que.size();
            depth++; // 记录深度
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
            }
        }
        return depth;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-8" tabindex="-1"><a class="header-anchor" href="#其他语言版本-8" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="java-8" tabindex="-1"><a class="header-anchor" href="#java-8" aria-hidden="true">#</a> Java：</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null)   return 0;
        Queue&lt;TreeNode&gt; que = new LinkedList&lt;&gt;();
        que.offer(root);
        int depth = 0;
        while (!que.isEmpty())
        {
            int len = que.size();
            while (len &gt; 0)
            {
                TreeNode node = que.poll();
                if (node.left != null)  que.offer(node.left);
                if (node.right != null) que.offer(node.right);
                len--;
            }
            depth++;
        }
        return depth;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="python-8" tabindex="-1"><a class="header-anchor" href="#python-8" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        
        depth <span class="token operator">=</span> <span class="token number">0</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            depth <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> depth

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-8" tabindex="-1"><a class="header-anchor" href="#go-8" aria-hidden="true">#</a> Go：</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    ans <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    queue <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">for</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        ans<span class="token operator">++</span><span class="token comment">//记录深度，其他的是层序遍历的板子</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-8" tabindex="-1"><a class="header-anchor" href="#javascript-8" aria-hidden="true">#</a> JavaScript：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最大的深度就是二叉树的层数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        height<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-8" tabindex="-1"><a class="header-anchor" href="#typescript-8" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resDepth<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resDepth<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resDepth<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-8" tabindex="-1"><a class="header-anchor" href="#swift-8" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">maxDepth</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> root <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> depth <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token operator">!</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        depth <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> depth
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-8" tabindex="-1"><a class="header-anchor" href="#scala-8" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 104.二叉树的最大深度</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> maxDepth<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">var</span> depth <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length
      depth <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    depth
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-6" tabindex="-1"><a class="header-anchor" href="#rust-6" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">max_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_111-二叉树的最小深度" tabindex="-1"><a class="header-anchor" href="#_111-二叉树的最小深度" aria-hidden="true">#</a> 111.二叉树的最小深度</h2>`,32),Z={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},$=p(`<h3 id="思路-9" tabindex="-1"><a class="header-anchor" href="#思路-9" aria-hidden="true">#</a> 思路</h3><p>相对于 104.二叉树的最大深度 ，本题还也可以使用层序遍历的方式来解决，思路是一样的。</p><p><strong>需要注意的是，只有当左右孩子都为空的时候，才说明遍历的最低点了。如果其中一个孩子为空则不是最低点</strong></p><p>代码如下：（详细注释）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == NULL) return 0;
        int depth = 0;
        queue&lt;TreeNode*&gt; que;
        que.push(root);
        while(!que.empty()) {
            int size = que.size();
            depth++; // 记录最小深度
            for (int i = 0; i &lt; size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if (node-&gt;left) que.push(node-&gt;left);
                if (node-&gt;right) que.push(node-&gt;right);
                if (!node-&gt;left &amp;&amp; !node-&gt;right) { // 当左右孩子都为空的时候，说明是最低点的一层了，退出
                    return depth;
                }
            }
        }
        return depth;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语言版本-9" tabindex="-1"><a class="header-anchor" href="#其他语言版本-9" aria-hidden="true">#</a> 其他语言版本</h3><h4 id="java-9" tabindex="-1"><a class="header-anchor" href="#java-9" aria-hidden="true">#</a> Java：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            depth<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//如果当前节点的左右孩子都为空，直接返回最小深度</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="python-9" tabindex="-1"><a class="header-anchor" href="#python-9" aria-hidden="true">#</a> Python：</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        depth <span class="token operator">=</span> <span class="token number">0</span>
        queue <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            depth <span class="token operator">+=</span> <span class="token number">1</span> 
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                node <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">.</span>left <span class="token keyword">and</span> <span class="token keyword">not</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    <span class="token keyword">return</span> depth
            
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                    
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token keyword">return</span> depth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-9" tabindex="-1"><a class="header-anchor" href="#go-9" aria-hidden="true">#</a> Go：</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    ans <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    queue <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">for</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>      <span class="token comment">//当前节点没有左右节点，则代表此层是最小层</span>
                <span class="token keyword">return</span> ans<span class="token operator">+</span><span class="token number">1</span>                                <span class="token comment">//返回当前层 ans代表是上一层</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        ans<span class="token operator">++</span><span class="token comment">//记录层数</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ans<span class="token operator">+</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-9" tabindex="-1"><a class="header-anchor" href="#javascript-9" aria-hidden="true">#</a> JavaScript：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-9" tabindex="-1"><a class="header-anchor" href="#typescript-9" aria-hidden="true">#</a> TypeScript:</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperQueue<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resMin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resMin<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode <span class="token operator">=</span> helperQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tempNode<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> resMin<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> helperQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resMin<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swift-9" tabindex="-1"><a class="header-anchor" href="#swift-9" aria-hidden="true">#</a> Swift：</h4><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">minDepth</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> root <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> depth <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token operator">!</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>count
        depth <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> count <span class="token punctuation">{</span>
            <span class="token comment">// 当前层</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">==</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 遇到叶子结点则返回</span>
                <span class="token keyword">return</span> depth
            <span class="token punctuation">}</span>

            <span class="token comment">// 下一层</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span> queue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> depth
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scala-9" tabindex="-1"><a class="header-anchor" href="#scala-9" aria-hidden="true">#</a> Scala:</h4><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// 111.二叉树的最小深度</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> minDepth<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">var</span> depth <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">val</span> queue <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Queue<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      depth <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">val</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>size
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>dequeue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span>enqueue<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curNode<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> depth
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    depth
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rust-7" tabindex="-1"><a class="header-anchor" href="#rust-7" aria-hidden="true">#</a> Rust:</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">VecDeque</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">min_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> queue <span class="token operator">=</span> <span class="token class-name">VecDeque</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>queue<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>二叉树的层序遍历，<strong>就是图论中的广度优先搜索在二叉树中的应用</strong>，需要借助队列来实现（此时又发现队列的一个应用了）。</p><p>来吧，一口气打十个：</p>`,25),nn={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.cn/problems/binary-tree-right-side-view/",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.cn/problems/binary-tree-right-side-view/",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.cn/problems/n-ary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row/",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},rn=n("p",null,[n("strong",null,"致敬叶师傅！")],-1);function kn(dn,vn){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("strong",null,[n("a",k,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",d,[s("讲透二叉树的层序遍历 | 广度优先搜索 | LeetCode：102.二叉树的层序遍历"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),v,n("ul",null,[n("li",null,[n("a",m,[s("102.二叉树的层序遍历"),e(a)])]),n("li",null,[n("a",b,[s("107.二叉树的层次遍历II"),e(a)])]),n("li",null,[n("a",h,[s("199.二叉树的右视图"),e(a)])]),n("li",null,[n("a",f,[s("637.二叉树的层平均值"),e(a)])]),n("li",null,[n("a",w,[s("429.N叉树的层序遍历"),e(a)])]),n("li",null,[n("a",y,[s("515.在每个树行中找最大值"),e(a)])]),n("li",null,[n("a",g,[s("116.填充每个节点的下一个右侧节点指针"),e(a)])]),n("li",null,[n("a",q,[s("117.填充每个节点的下一个右侧节点指针II"),e(a)])]),n("li",null,[n("a",N,[s("104.二叉树的最大深度"),e(a)])]),n("li",null,[n("a",_,[s("111.二叉树的最小深度"),e(a)])])]),x,L,n("p",null,[n("a",T,[s("力扣题目链接"),e(a)])]),P,S,j,z,n("ul",null,[n("li",null,[n("a",Q,[s("二叉树：前中后序递归法"),e(a)])]),n("li",null,[n("a",I,[s("二叉树：前中后序迭代法"),e(a)])]),n("li",null,[n("a",A,[s("二叉树：前中后序迭代方式统一写法"),e(a)])])]),C,n("p",null,[n("a",R,[s("力扣题目链接"),e(a)])]),D,n("p",null,[n("a",O,[s("力扣题目链接"),e(a)])]),E,n("p",null,[n("a",B,[s("力扣题目链接"),e(a)])]),V,n("p",null,[n("a",F,[s("力扣题目链接"),e(a)])]),G,n("p",null,[n("a",J,[s("力扣题目链接"),e(a)])]),U,n("p",null,[n("a",M,[s("力扣题目链接"),e(a)])]),Y,n("p",null,[n("a",H,[s("力扣题目链接"),e(a)])]),K,n("p",null,[n("a",W,[s("力扣题目链接"),e(a)])]),X,n("p",null,[n("a",Z,[s("力扣题目链接"),e(a)])]),$,n("ul",null,[n("li",null,[n("a",nn,[s("102.二叉树的层序遍历"),e(a)])]),n("li",null,[n("a",sn,[s("107.二叉树的层次遍历II"),e(a)])]),n("li",null,[n("a",an,[s("199.二叉树的右视图"),e(a)])]),n("li",null,[n("a",en,[s("637.二叉树的层平均值"),e(a)])]),n("li",null,[n("a",pn,[s("429.N叉树的层序遍历"),e(a)])]),n("li",null,[n("a",tn,[s("515.在每个树行中找最大值"),e(a)])]),n("li",null,[n("a",on,[s("116.填充每个节点的下一个右侧节点指针"),e(a)])]),n("li",null,[n("a",cn,[s("117.填充每个节点的下一个右侧节点指针II"),e(a)])]),n("li",null,[n("a",ln,[s("104.二叉树的最大深度"),e(a)])]),n("li",null,[n("a",un,[s("111.二叉树的最小深度"),e(a)])])]),rn])}const bn=t(i,[["render",kn],["__file","0102.erchashudecengxubianli.html.vue"]]);export{bn as default};
