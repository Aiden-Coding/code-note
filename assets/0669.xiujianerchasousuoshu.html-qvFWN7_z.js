import{_ as o,r as p,o as l,c as i,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const c={},u=n("blockquote",null,[n("p",null,"如果不对递归有深刻的理解，本题有点难 单纯移除一个节点那还不够，要修剪！")],-1),r=n("h1",{id:"_669-修剪二叉搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_669-修剪二叉搜索树","aria-hidden":"true"},"#"),s(" 669. 修剪二叉搜索树")],-1),d={href:"https://leetcode.cn/problems/trim-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个二叉搜索树，同时给定最小边界L 和最大边界 R。通过修剪二叉搜索树，使得所有节点的值在[L, R]中 (R>=L) 。你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。",-1),v=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20201014173115788.png",alt:"669.修剪二叉搜索树"})],-1),m=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20201014173219142.png",alt:"669.修剪二叉搜索树1"})],-1),h=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),b={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/BV17P41177ud?share_source=copy_web",target:"_blank",rel:"noopener noreferrer"},w=e(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>相信看到这道题目大家都感觉是一道简单题（事实上leetcode上也标明是简单）。</p><p>但还真的不简单！</p><h3 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h3><p>直接想法就是：递归处理，然后遇到 <code>root-&gt;val &lt; low || root-&gt;val &gt; high</code> 的时候直接return NULL，一波修改，赶紧利落。</p><p>不难写出如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        if (root == nullptr || root-&gt;val &lt; low || root-&gt;val &gt; high) return nullptr;
        root-&gt;left = trimBST(root-&gt;left, low, high);
        root-&gt;right = trimBST(root-&gt;right, low, high);
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然而[1, 3]区间在二叉搜索树的中可不是单纯的节点3和左孩子节点0就决定的，还要考虑节点0的右子树</strong>。</p><p>我们在重新关注一下第二个示例，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204155302751.png" alt="669.修剪二叉搜索树"></p><p><strong>所以以上的代码是不可行的！</strong></p><p>从图中可以看出需要重构二叉树，想想是不是本题就有点复杂了。</p><p>其实不用重构那么复杂。</p><p>在上图中我们发现节点0并不符合区间要求，那么将节点0的右孩子 节点2 直接赋给 节点3的左孩子就可以了（就是把节点0从二叉树中移除），如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204155327203.png" alt="669.修剪二叉搜索树1"></p><p>理解了最关键部分了我们再递归三部曲：</p><ul><li>确定递归函数的参数以及返回值</li></ul><p>这里我们为什么需要返回值呢？</p><p>因为是要遍历整棵树，做修改，其实不需要返回值也可以，我们也可以完成修剪（其实就是从二叉树中移除节点）的操作。</p><p>但是有返回值，更方便，可以通过递归函数的返回值来移除节点。</p>`,20),f={href:"https://programmercarl.com/0701.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%8F%92%E5%85%A5%E6%93%8D%E4%BD%9C.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://programmercarl.com/0450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html",target:"_blank",rel:"noopener noreferrer"},T=e(`<p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TreeNode* trimBST(TreeNode* root, int low, int high)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定终止条件</li></ul><p>修剪的操作并不是在终止条件上进行的，所以就是遇到空节点返回就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root == nullptr ) return nullptr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定单层递归的逻辑</li></ul><p>如果root（当前节点）的元素小于low的数值，那么应该递归右子树，并返回右子树符合条件的头结点。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root-&gt;val &lt; low) {
    TreeNode* right = trimBST(root-&gt;right, low, high); // 寻找符合区间[low, high]的节点
    return right;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果root(当前节点)的元素大于high的，那么应该递归左子树，并返回左子树符合条件的头结点。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root-&gt;val &gt; high) {
    TreeNode* left = trimBST(root-&gt;left, low, high); // 寻找符合区间[low, high]的节点
    return left;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来要将下一层处理完左子树的结果赋给root-&gt;left，处理完右子树的结果赋给root-&gt;right。</p><p>最后返回root节点，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root-&gt;left = trimBST(root-&gt;left, low, high); // root-&gt;left接入符合条件的左孩子
root-&gt;right = trimBST(root-&gt;right, low, high); // root-&gt;right接入符合条件的右孩子
return root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时大家是不是还没发现这多余的节点究竟是如何从二叉树中移除的呢？</p><p>在回顾一下上面的代码，针对下图中二叉树的情况：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204155327203-20230310120126738.png" alt="669.修剪二叉搜索树1"></p><p>如下代码相当于把节点0的右孩子（节点2）返回给上一层，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root-&gt;val &lt; low) {
    TreeNode* right = trimBST(root-&gt;right, low, high); // 寻找符合区间[low, high]的节点
    return right;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后如下代码相当于用节点3的左孩子 把下一层返回的 节点0的右孩子（节点2） 接住。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root-&gt;left = trimBST(root-&gt;left, low, high);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时节点3的左孩子就变成了节点2，将节点0从二叉树中移除了。</p><p>最后整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        if (root == nullptr ) return nullptr;
        if (root-&gt;val &lt; low) {
            TreeNode* right = trimBST(root-&gt;right, low, high); // 寻找符合区间[low, high]的节点
            return right;
        }
        if (root-&gt;val &gt; high) {
            TreeNode* left = trimBST(root-&gt;left, low, high); // 寻找符合区间[low, high]的节点
            return left;
        }
        root-&gt;left = trimBST(root-&gt;left, low, high); // root-&gt;left接入符合条件的左孩子
        root-&gt;right = trimBST(root-&gt;right, low, high); // root-&gt;right接入符合条件的右孩子
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>精简之后代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        if (root == nullptr) return nullptr;
        if (root-&gt;val &lt; low) return trimBST(root-&gt;right, low, high);
        if (root-&gt;val &gt; high) return trimBST(root-&gt;left, low, high);
        root-&gt;left = trimBST(root-&gt;left, low, high);
        root-&gt;right = trimBST(root-&gt;right, low, high);
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只看代码，其实不太好理解节点是如何移除的，这一块大家可以自己再模拟模拟！</p><h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3><p>因为二叉搜索树的有序性，不需要使用栈模拟递归的过程。</p><p>在剪枝的时候，可以分为三步：</p><ul><li>将root移动到[L, R] 范围内，注意是左闭右闭区间</li><li>剪枝左子树</li><li>剪枝右子树</li></ul><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* trimBST(TreeNode* root, int L, int R) {
        if (!root) return nullptr;

        // 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭
        while (root != nullptr &amp;&amp; (root-&gt;val &lt; L || root-&gt;val &gt; R)) {
            if (root-&gt;val &lt; L) root = root-&gt;right; // 小于L往右走
            else root = root-&gt;left; // 大于R往左走
        }
        TreeNode *cur = root;
        // 此时root已经在[L, R] 范围内，处理左孩子元素小于L的情况
        while (cur != nullptr) {
            while (cur-&gt;left &amp;&amp; cur-&gt;left-&gt;val &lt; L) {
                cur-&gt;left = cur-&gt;left-&gt;right;
            }
            cur = cur-&gt;left;
        }
        cur = root;

        // 此时root已经在[L, R] 范围内，处理右孩子大于R的情况
        while (cur != nullptr) {
            while (cur-&gt;right &amp;&amp; cur-&gt;right-&gt;val &gt; R) {
                cur-&gt;right = cur-&gt;right-&gt;left;
            }
            cur = cur-&gt;right;
        }
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>修剪二叉搜索树其实并不难，但在递归法中大家可看出我费了很大的功夫来讲解如何删除节点的，这个思路其实是比较绕的。</p><p>最终的代码倒是很简洁。</p><p><strong>如果不对递归有深刻的理解，这道题目还是有难度的！</strong></p><p>本题我依然给出递归法和迭代法，初学者掌握递归就可以了，如果想进一步学习，就把迭代法也写一写。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><p><strong>递归</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) {
            return null;
        }
        if (root.val &lt; low) {
            return trimBST(root.right, low, high);
        }
        if (root.val &gt; high) {
            return trimBST(root.left, low, high);
        }
        // root在[low,high]范围内
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    //iteration
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if(root == null)
            return null;
        while(root != null &amp;&amp; (root.val &lt; low || root.val &gt; high)){
            if(root.val &lt; low)
                root = root.right;
            else
                root = root.left;
        }

        TreeNode curr = root;
        
        //deal with root&#39;s left sub-tree, and deal with the value smaller than low.
        while(curr != null){
            while(curr.left != null &amp;&amp; curr.left.val &lt; low){
                curr.left = curr.left.right;
            }
            curr = curr.left;
        }
        //go back to root;
        curr = root;

        //deal with root&#39;s righg sub-tree, and deal with the value bigger than high.
        while(curr != null){
            while(curr.right != null &amp;&amp; curr.right.val &gt; high){
                curr.right = curr.right.left;
            }
            curr = curr.right;
        }
        return root;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>递归法（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> low<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> high<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">:</span>
            <span class="token comment"># 寻找符合区间 [low, high] 的节点</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">:</span>
            <span class="token comment"># 寻找符合区间 [low, high] 的节点</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>  <span class="token comment"># root.left 接入符合条件的左孩子</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>  <span class="token comment"># root.right 接入符合条件的右孩子</span>
        <span class="token keyword">return</span> root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> L<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> R<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        
        <span class="token comment"># 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭</span>
        <span class="token keyword">while</span> root <span class="token keyword">and</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> L <span class="token keyword">or</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> R<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> L<span class="token punctuation">:</span>
                root <span class="token operator">=</span> root<span class="token punctuation">.</span>right  <span class="token comment"># 小于L往右走</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                root <span class="token operator">=</span> root<span class="token punctuation">.</span>left  <span class="token comment"># 大于R往左走</span>
        
        cur <span class="token operator">=</span> root
        
        <span class="token comment"># 此时root已经在[L, R] 范围内，处理左孩子元素小于L的情况</span>
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            <span class="token keyword">while</span> cur<span class="token punctuation">.</span>left <span class="token keyword">and</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> L<span class="token punctuation">:</span>
                cur<span class="token punctuation">.</span>left <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
        
        cur <span class="token operator">=</span> root
        
        <span class="token comment"># 此时root已经在[L, R] 范围内，处理右孩子大于R的情况</span>
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            <span class="token keyword">while</span> cur<span class="token punctuation">.</span>right <span class="token keyword">and</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> R<span class="token punctuation">:</span>
                cur<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">.</span>left
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
        
        <span class="token keyword">return</span> root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 递归</span>
<span class="token keyword">func</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> low <span class="token builtin">int</span><span class="token punctuation">,</span> high <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> low <span class="token punctuation">{</span>     <span class="token comment">//如果该节点值小于最小值，则该节点更换为该节点的右节点值，继续遍历</span>
        right <span class="token operator">:=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
        <span class="token keyword">return</span> right
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Val <span class="token operator">&gt;</span> high <span class="token punctuation">{</span>    <span class="token comment">//如果该节点的值大于最大值，则该节点更换为该节点的左节点值，继续遍历</span>
        left <span class="token operator">:=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
        <span class="token keyword">return</span> left
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token comment">// 迭代</span>
<span class="token keyword">func</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> low <span class="token builtin">int</span><span class="token punctuation">,</span> high <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 处理 root，让 root 移动到[low, high] 范围内，注意是左闭右闭</span>
    <span class="token keyword">for</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> low <span class="token operator">||</span> root<span class="token punctuation">.</span>Val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> low <span class="token punctuation">{</span>
            root <span class="token operator">=</span> root<span class="token punctuation">.</span>Right
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            root <span class="token operator">=</span> root<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cur <span class="token operator">:=</span> root
    <span class="token comment">// 此时 root 已经在[low, high] 范围内，处理左孩子元素小于 low 的情况（左节点是一定小于 root.Val，因此天然小于 high）</span>
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> cur<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> low <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Left <span class="token operator">=</span> cur<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Right
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Left
    <span class="token punctuation">}</span>
    cur <span class="token operator">=</span> root
    <span class="token comment">// 此时 root 已经在[low, high] 范围内，处理右孩子大于 high 的情况</span>
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> cur<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val <span class="token operator">&gt;</span> high <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Right <span class="token operator">=</span> cur<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><p>迭代：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">trimBST</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low <span class="token operator">||</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           root <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
           root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           cur<span class="token punctuation">.</span>left <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   cur <span class="token operator">=</span>  root<span class="token punctuation">;</span>
   <span class="token comment">//判断右子树大于high的情况</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           cur<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">trimBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span>low<span class="token punctuation">,</span>high</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>递归法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> low<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> high<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">trimBST</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> low<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> high<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low <span class="token operator">||</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode<span class="token punctuation">.</span>left <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curNode <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curNode<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode<span class="token punctuation">.</span>right <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>递归法:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> trimBST<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> low<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> high<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> low<span class="token punctuation">)</span> <span class="token keyword">return</span> trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> high<span class="token punctuation">)</span> <span class="token keyword">return</span> trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> trimBST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    root
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><p>// 递归</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">trim_bst</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        low<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        high<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> node <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> low <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">trim_bst</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> high <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">trim_bst</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">trim_bst</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">trim_bst</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">drop</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 递归
public TreeNode TrimBST(TreeNode root, int low, int high)
{
    if (root == null) return null;
    if (root.val &lt; low)
        return TrimBST(root.right, low, high);

    if (root.val &gt; high)
        return TrimBST(root.left, low, high);

    root.left = TrimBST(root.left, low, high);
    root.right = TrimBST(root.right, low, high);
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70);function S(B,x){const a=p("ExternalLinkIcon");return l(),i("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),t(a)])]),k,v,m,h,n("p",null,[n("strong",null,[n("a",b,[s("《代码随想录》算法视频公开课"),t(a)]),s("："),n("a",g,[s("你修剪的方式不对，我来给你纠正一下！| LeetCode：669. 修剪二叉搜索树"),t(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),w,n("p",null,[s("这样的做法在"),n("a",f,[s("二叉树：搜索树中的插入操作"),t(a)]),s("和"),n("a",y,[s("二叉树：搜索树中的删除操作"),t(a)]),s("中大家已经了解过了。")]),T])}const _=o(c,[["render",S],["__file","0669.xiujianerchasousuoshu.html.vue"]]);export{_ as default};
