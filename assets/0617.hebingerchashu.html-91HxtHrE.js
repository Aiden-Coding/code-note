import{_ as p,r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_617-合并二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_617-合并二叉树","aria-hidden":"true"},"#"),s(" 617.合并二叉树")],-1),r={href:"https://leetcode.cn/problems/merge-two-binary-trees/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。",-1),k=n("p",null,"你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。",-1),v=n("p",null,"示例 1:",-1),m=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20230310000854.png",alt:"617.合并二叉树"})],-1),b=n("p",null,"注意: 合并必须从两个树的根节点开始。",-1),f=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),g={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1m14y1Y7JK",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>相信这道题目很多同学疑惑的点是如何同时遍历两个二叉树呢？</p><p>其实和遍历一个树逻辑是一样的，只不过传入两个树的节点，同时操作。</p><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><p>二叉树使用递归，就要想使用前中后哪种遍历方式？</p><p><strong>本题使用哪种遍历都是可以的！</strong></p><p>我们下面以前序遍历为例。</p><p>动画如下：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/617.合并二叉树.gif" alt="617.合并二叉树"></p><p>那么我们来按照递归三部曲来解决：</p><ol><li><strong>确定递归函数的参数和返回值：</strong></li></ol><p>首先要合入两个二叉树，那么参数至少是要传入两个二叉树的根节点，返回值就是合并之后二叉树的根节点。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>确定终止条件：</strong></li></ol><p>因为是传入了两个树，那么就有两个树遍历的节点t1 和 t2，如果t1 == NULL 了，两个树合并就应该是 t2 了（如果t2也为NULL也无所谓，合并之后就是NULL）。</p><p>反过来如果t2 == NULL，那么两个数合并就是t1（如果t1也为NULL也无所谓，合并之后就是NULL）。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (t1 == NULL) return t2; // 如果t1为空，合并之后就应该是t2
if (t2 == NULL) return t1; // 如果t2为空，合并之后就应该是t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>确定单层递归的逻辑：</strong></li></ol><p>单层递归的逻辑就比较好写了，这里我们重复利用一下t1这个树，t1就是合并之后树的根节点（就是修改了原来树的结构）。</p><p>那么单层递归中，就要把两棵树的元素加到一起。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>t1-&gt;val += t2-&gt;val;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来t1 的左子树是：合并 t1左子树 t2左子树之后的左子树。</p><p>t1 的右子树：是 合并 t1右子树 t2右子树之后的右子树。</p><p>最终t1就是合并之后的根节点。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>t1-&gt;left = mergeTrees(t1-&gt;left, t2-&gt;left);
t1-&gt;right = mergeTrees(t1-&gt;right, t2-&gt;right);
return t1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时前序遍历，完整代码就写出来了，如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 == NULL) return t2; // 如果t1为空，合并之后就应该是t2
        if (t2 == NULL) return t1; // 如果t2为空，合并之后就应该是t1
        // 修改了t1的数值和结构
        t1-&gt;val += t2-&gt;val;                             // 中
        t1-&gt;left = mergeTrees(t1-&gt;left, t2-&gt;left);      // 左
        t1-&gt;right = mergeTrees(t1-&gt;right, t2-&gt;right);   // 右
        return t1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么中序遍历也是可以的，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 == NULL) return t2; // 如果t1为空，合并之后就应该是t2
        if (t2 == NULL) return t1; // 如果t2为空，合并之后就应该是t1
        // 修改了t1的数值和结构
        t1-&gt;left = mergeTrees(t1-&gt;left, t2-&gt;left);      // 左
        t1-&gt;val += t2-&gt;val;                             // 中
        t1-&gt;right = mergeTrees(t1-&gt;right, t2-&gt;right);   // 右
        return t1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历依然可以，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 == NULL) return t2; // 如果t1为空，合并之后就应该是t2
        if (t2 == NULL) return t1; // 如果t2为空，合并之后就应该是t1
        // 修改了t1的数值和结构
        t1-&gt;left = mergeTrees(t1-&gt;left, t2-&gt;left);      // 左
        t1-&gt;right = mergeTrees(t1-&gt;right, t2-&gt;right);   // 右
        t1-&gt;val += t2-&gt;val;                             // 中
        return t1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但是前序遍历是最好理解的，我建议大家用前序遍历来做就OK。</strong></p><p>如上的方法修改了t1的结构，当然也可以不修改t1和t2的结构，重新定义一个树。</p><p>不修改输入树的结构，前序遍历，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 == NULL) return t2;
        if (t2 == NULL) return t1;
        // 重新定义新的节点，不修改原有两个树的结构
        TreeNode* root = new TreeNode(0);
        root-&gt;val = t1-&gt;val + t2-&gt;val;
        root-&gt;left = mergeTrees(t1-&gt;left, t2-&gt;left);
        root-&gt;right = mergeTrees(t1-&gt;right, t2-&gt;right);
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3><p>使用迭代法，如何同时处理两棵树呢？</p>`,40),w={href:"https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},N=t(`<p>本题我们也使用队列，模拟的层序遍历，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 == NULL) return t2;
        if (t2 == NULL) return t1;
        queue&lt;TreeNode*&gt; que;
        que.push(t1);
        que.push(t2);
        while(!que.empty()) {
            TreeNode* node1 = que.front(); que.pop();
            TreeNode* node2 = que.front(); que.pop();
            // 此时两个节点一定不为空，val相加
            node1-&gt;val += node2-&gt;val;

            // 如果两棵树左节点都不为空，加入队列
            if (node1-&gt;left != NULL &amp;&amp; node2-&gt;left != NULL) {
                que.push(node1-&gt;left);
                que.push(node2-&gt;left);
            }
            // 如果两棵树右节点都不为空，加入队列
            if (node1-&gt;right != NULL &amp;&amp; node2-&gt;right != NULL) {
                que.push(node1-&gt;right);
                que.push(node2-&gt;right);
            }

            // 当t1的左节点 为空 t2左节点不为空，就赋值过去
            if (node1-&gt;left == NULL &amp;&amp; node2-&gt;left != NULL) {
                node1-&gt;left = node2-&gt;left;
            }
            // 当t1的右节点 为空 t2右节点不为空，就赋值过去
            if (node1-&gt;right == NULL &amp;&amp; node2-&gt;right != NULL) {
                node1-&gt;right = node2-&gt;right;
            }
        }
        return t1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><p>当然也可以秀一波指针的操作，这是我写的野路子，大家就随便看看就行了，以防带跑偏了。</p><p>如下代码中，想要更改二叉树的值，应该传入指向指针的指针。</p><p>代码如下：（前序遍历）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void process(TreeNode** t1, TreeNode** t2) {
        if ((*t1) == NULL &amp;&amp; (*t2) == NULL) return;
        if ((*t1) != NULL &amp;&amp; (*t2) != NULL) {
            (*t1)-&gt;val += (*t2)-&gt;val;
        }
        if ((*t1) == NULL &amp;&amp; (*t2) != NULL) {
            *t1 = *t2;
            return;
        }
        if ((*t1) != NULL &amp;&amp; (*t2) == NULL) {
            return;
        }
        process(&amp;((*t1)-&gt;left), &amp;((*t2)-&gt;left));
        process(&amp;((*t1)-&gt;right), &amp;((*t2)-&gt;right));
    }
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        process(&amp;t1, &amp;t2);
        return t1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>合并二叉树，也是二叉树操作的经典题目，如果没有接触过的话，其实并不简单，因为我们习惯了操作一个二叉树，一起操作两个二叉树，还会有点懵懵的。</p>`,9),T={href:"https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>迭代法中，一般一起操作两个树都是使用队列模拟类似层序遍历，同时处理两个树的节点，这种方式最好理解，如果用模拟递归的思路的话，要复杂一些。</p><p>最后拓展中，我给了一个操作指针的野路子，大家随便看看就行了，如果学习C++的话，可以再去研究研究。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    // 递归
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) return root2;
        if (root2 == null) return root1;

        root1.val += root2.val;
        root1.left = mergeTrees(root1.left,root2.left);
        root1.right = mergeTrees(root1.right,root2.right);
        return root1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    // 使用栈迭代
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) {
            return root2;
        }
        if (root2 == null) {
            return root1;
        }
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        stack.push(root2);
        stack.push(root1);
        while (!stack.isEmpty()) {
            TreeNode node1 = stack.pop();
            TreeNode node2 = stack.pop();
            node1.val += node2.val;
            if (node2.right != null &amp;&amp; node1.right != null) {
                stack.push(node2.right);
                stack.push(node1.right);
            } else {
                if (node1.right == null) {
                    node1.right = node2.right;
                }
            }
            if (node2.left != null &amp;&amp; node1.left != null) {
                stack.push(node2.left);
                stack.push(node1.left);
            } else {
                if (node1.left == null) {
                    node1.left = node2.left;
                }
            }
        }
        return root1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用队列迭代</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root1<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> root2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> node1 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TreeNode</span> node2 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 此时两个节点一定不为空，val相加</span>
            node1<span class="token punctuation">.</span>val <span class="token operator">=</span> node1<span class="token punctuation">.</span>val <span class="token operator">+</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token comment">// 如果两棵树左节点都不为空，加入队列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 如果两棵树右节点都不为空，加入队列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 若node1的左节点为空，直接赋值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 若node1的右节点为空，直接赋值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>(版本一) 递归 - 前序 - 修改root1</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root1<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token comment"># 递归终止条件: </span>
        <span class="token comment">#  但凡有一个节点为空, 就立刻返回另外一个. 如果另外一个也为None就直接返回None. </span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root1<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root2
        <span class="token keyword">if</span> <span class="token keyword">not</span> root2<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root1
        <span class="token comment"># 上面的递归终止条件保证了代码执行到这里root1, root2都非空. </span>
        root1<span class="token punctuation">.</span>val <span class="token operator">+=</span> root2<span class="token punctuation">.</span>val <span class="token comment"># 中</span>
        root1<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">#左</span>
        root1<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment"># 右</span>
        
        <span class="token keyword">return</span> root1 <span class="token comment"># ⚠️ 注意: 本题我们重复使用了题目给出的节点而不是创建新节点. 节省时间, 空间. </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本二) 递归 - 前序 - 新建root</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root1<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token comment"># 递归终止条件: </span>
        <span class="token comment">#  但凡有一个节点为空, 就立刻返回另外一个. 如果另外一个也为None就直接返回None. </span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root1<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root2
        <span class="token keyword">if</span> <span class="token keyword">not</span> root2<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root1
        <span class="token comment"># 上面的递归终止条件保证了代码执行到这里root1, root2都非空. </span>
        root <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 创建新节点</span>
        root<span class="token punctuation">.</span>val <span class="token operator">+=</span> root1<span class="token punctuation">.</span>val <span class="token operator">+</span> root2<span class="token punctuation">.</span>val<span class="token comment"># 中</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">#左</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment"># 右</span>
        
        <span class="token keyword">return</span> root <span class="token comment"># ⚠️ 注意: 本题我们创建了新节点. </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本三) 迭代</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root1<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root1<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root2
        <span class="token keyword">if</span> <span class="token keyword">not</span> root2<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> root1

        queue <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root1<span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root2<span class="token punctuation">)</span>

        <span class="token keyword">while</span> queue<span class="token punctuation">:</span> 
            node1 <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
            node2 <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment"># 更新queue</span>
            <span class="token comment"># 只有两个节点都有左节点时, 再往queue里面放.</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>left <span class="token keyword">and</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">:</span> 
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token comment"># 只有两个节点都有右节点时, 再往queue里面放.</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>right <span class="token keyword">and</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">:</span> 
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

            <span class="token comment"># 更新当前节点. 同时改变当前节点的左右孩子. </span>
            node1<span class="token punctuation">.</span>val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>val
            <span class="token keyword">if</span> <span class="token keyword">not</span> node1<span class="token punctuation">.</span>left <span class="token keyword">and</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">:</span> 
                node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left
            <span class="token keyword">if</span> <span class="token keyword">not</span> node1<span class="token punctuation">.</span>right <span class="token keyword">and</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">:</span> 
                node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right

        <span class="token keyword">return</span> root1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(版本四) 迭代 + 代码优化</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root1<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root1<span class="token punctuation">:</span>
            <span class="token keyword">return</span> root2
        <span class="token keyword">if</span> <span class="token keyword">not</span> root2<span class="token punctuation">:</span>
            <span class="token keyword">return</span> root1

        queue <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>root1<span class="token punctuation">,</span> root2<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
            node1<span class="token punctuation">,</span> node2 <span class="token operator">=</span> queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
            node1<span class="token punctuation">.</span>val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>val

            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>left <span class="token keyword">and</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> <span class="token keyword">not</span> node1<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left

            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>right <span class="token keyword">and</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> <span class="token keyword">not</span> node1<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right

        <span class="token keyword">return</span> root1


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 前序遍历</span>
<span class="token keyword">func</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1 <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> root2 <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> root2
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> root2 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> root1
    <span class="token punctuation">}</span>
    root1<span class="token punctuation">.</span>Val <span class="token operator">+=</span> root2<span class="token punctuation">.</span>Val
    root1<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    root1<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root1
<span class="token punctuation">}</span>

<span class="token comment">// 迭代版本</span>
<span class="token keyword">func</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1 <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> root2 <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    queue <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> root1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> root2
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> root2 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> root1
    <span class="token punctuation">}</span>
    queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>root1<span class="token punctuation">)</span>
    queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>root2<span class="token punctuation">)</span>

    <span class="token keyword">for</span> size <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span> size<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">;</span> size<span class="token operator">=</span><span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node1 <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        node2 <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        node1<span class="token punctuation">.</span>Val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>Val
        <span class="token comment">// 左子树都不为空</span>
        <span class="token keyword">if</span> node1<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>node1<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>node2<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右子树都不为空</span>
        <span class="token keyword">if</span> node1<span class="token punctuation">.</span>Right <span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>Right <span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
            queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node1<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 树 1 的左子树为 nil，直接接上树 2 的左子树</span>
        <span class="token keyword">if</span> node1<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            node1<span class="token punctuation">.</span>Left <span class="token operator">=</span> node2<span class="token punctuation">.</span>Left
        <span class="token punctuation">}</span>
        <span class="token comment">// 树 1 的右子树为 nil，直接接上树 2 的右子树</span>
        <span class="token keyword">if</span> node1<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            node1<span class="token punctuation">.</span>Right <span class="token operator">=</span> node2<span class="token punctuation">.</span>Right
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><blockquote><p>递归法：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTrees</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">preOrder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root1<span class="token punctuation">)</span>
            <span class="token keyword">return</span> root2
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root2<span class="token punctuation">)</span>
            <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
        root1<span class="token punctuation">.</span>val <span class="token operator">+=</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        root1<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">preOrder</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root1<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">preOrder</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">preOrder</span><span class="token punctuation">(</span>root1<span class="token punctuation">,</span> root2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTrees</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>

    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node1 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> node2 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span>val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>递归法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> root2<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
    <span class="token keyword">const</span> resNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>val <span class="token operator">+</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> root2<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
    <span class="token keyword">const</span> helperQueue1<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        helperQueue2<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    helperQueue1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    helperQueue2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode1<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span>
        tempNode2<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperQueue1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempNode1 <span class="token operator">=</span> helperQueue1<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
        tempNode2 <span class="token operator">=</span> helperQueue2<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
        tempNode1<span class="token punctuation">.</span>val <span class="token operator">+=</span> tempNode2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tempNode2<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            helperQueue1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            helperQueue2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode1<span class="token punctuation">.</span>left <span class="token operator">=</span> tempNode2<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tempNode2<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            helperQueue1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            helperQueue2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode1<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempNode1<span class="token punctuation">.</span>right <span class="token operator">=</span> tempNode2<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>递归:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> mergeTrees<span class="token punctuation">(</span>root1<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2 <span class="token comment">// 如果root1为空，返回root2</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1 <span class="token comment">// 如果root2为空，返回root1</span>
    <span class="token comment">// 新建一个节点，值为两个节点的和</span>
    <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token keyword">new</span> TreeNode<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>value <span class="token operator">+</span> root2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token comment">// 往下递归</span>
    node<span class="token punctuation">.</span>left <span class="token operator">=</span> mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>right <span class="token operator">=</span> mergeTrees<span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    node <span class="token comment">// 返回node，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> mergeTrees<span class="token punctuation">(</span>root1<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> root2<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1
    <span class="token keyword">var</span> stack <span class="token operator">=</span> mutable<span class="token punctuation">.</span>Stack<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 先放node2再放node1</span>
    stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>root2<span class="token punctuation">)</span>
    stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>root1<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> node1 <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> node2 <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
      node1<span class="token punctuation">.</span>value <span class="token operator">+=</span> node2<span class="token punctuation">.</span>value
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    root1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><p>递归：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">merge_trees</span><span class="token punctuation">(</span>
        root1<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        root2<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root1<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> root2<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> binding <span class="token operator">=</span> root1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> node1 <span class="token operator">=</span> binding<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> node2 <span class="token operator">=</span> root2<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">merge_trees</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">merge_trees</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span>val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

        root1
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">merge_trees</span><span class="token punctuation">(</span>
        root1<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        root2<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root1<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> root2<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> stack <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node1 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> node2 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> node1 <span class="token operator">=</span> node1<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> node2 <span class="token operator">=</span> node2<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node1<span class="token punctuation">.</span>val <span class="token operator">+=</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node1<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        root1
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public TreeNode MergeTrees(TreeNode root1, TreeNode root2)
{
    if (root1 == null) return root2;
    if (root2 == null) return root1;

    root1.val += root2.val;
    root1.left = MergeTrees(root1.left, root2.left);
    root1.right = MergeTrees(root1.right, root2.right);

    return root1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function q(L,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),d,k,v,m,b,f,n("p",null,[n("strong",null,[n("a",g,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",h,[s("一起操作两个二叉树？有点懵！| LeetCode：617.合并二叉树"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),y,n("p",null,[s("思路我们在"),n("a",w,[s("二叉树：我对称么？"),e(a)]),s("中的迭代法已经讲过一次了，求二叉树对称的时候就是把两个树的节点同时加入队列进行比较。")]),N,n("p",null,[s("这不是我们第一次操作两棵二叉树了，在"),n("a",T,[s("二叉树：我对称么？"),e(a)]),s("中也一起操作了两棵二叉树。")]),_])}const U=p(i,[["render",q],["__file","0617.hebingerchashu.html.vue"]]);export{U as default};
