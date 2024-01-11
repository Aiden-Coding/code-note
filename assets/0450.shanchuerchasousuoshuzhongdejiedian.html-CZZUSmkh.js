import{_ as t,r as p,o,c as l,a as n,b as s,d as e,e as c}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"二叉搜索树删除节点就涉及到结构调整了")],-1),r=n("h1",{id:"_450-删除二叉搜索树中的节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_450-删除二叉搜索树中的节点","aria-hidden":"true"},"#"),s(" 450.删除二叉搜索树中的节点")],-1),d={href:"https://leetcode.cn/problems/delete-node-in-a-bst/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。",-1),v=n("p",null,"一般来说，删除节点可分为两个步骤：",-1),m=n("p",null,"首先找到需要删除的节点； 如果找到了，删除它。 说明： 要求算法时间复杂度为 $O(h)$，h 为树的高度。",-1),b=n("p",null,"示例:",-1),y=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20201020171048265.png",alt:"450.删除二叉搜索树中的节点"})],-1),f=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),g={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1tP41177us?share_source=copy_web",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),N=n("p",null,"搜索树的节点删除要比节点增加复杂的多，有很多情况需要考虑，做好心理准备。",-1),T=n("h3",{id:"递归",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#递归","aria-hidden":"true"},"#"),s(" 递归")],-1),_=n("p",null,"递归三部曲：",-1),x=n("ul",null,[n("li",null,"确定递归函数参数以及返回值")],-1),L={href:"https://programmercarl.com/0701.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%8F%92%E5%85%A5%E6%93%8D%E4%BD%9C.html",target:"_blank",rel:"noopener noreferrer"},S=c(`<p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TreeNode* deleteNode(TreeNode* root, int key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定终止条件</li></ul><p>遇到空返回，其实这也说明没找到删除的节点，遍历到空节点直接返回了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root == nullptr) return root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定单层递归的逻辑</li></ul><p>这里就把二叉搜索树中删除节点遇到的情况都搞清楚。</p><p>有以下五种情况：</p><ul><li>第一种情况：没找到删除的节点，遍历到空节点直接返回了</li><li>找到删除的节点 <ul><li>第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点</li><li>第三种情况：删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点</li><li>第四种情况：删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点</li><li>第五种情况：左右孩子节点都不为空，则将删除节点的左子树头结点（左孩子）放到删除节点的右子树的最左面节点的左孩子上，返回删除节点右孩子为新的根节点。</li></ul></li></ul><p>第五种情况有点难以理解，看下面动画：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/450.删除二叉搜索树中的节点.gif" alt="450.删除二叉搜索树中的节点"></p><p>动画中的二叉搜索树中，删除元素7， 那么删除节点（元素7）的左孩子就是5，删除节点（元素7）的右子树的最左面节点是元素8。</p><p>将删除节点（元素7）的左孩子放到删除节点（元素7）的右子树的最左面节点（元素8）的左孩子上，就是把5为根节点的子树移到了8的左孩子的位置。</p><p>要删除的节点（元素7）的右孩子（元素9）为新的根节点。.</p><p>这样就完成删除元素7的逻辑，最好动手画一个图，尝试删除一个节点试试。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (root-&gt;val == key) {
    // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
    // 第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
    if (root-&gt;left == nullptr) return root-&gt;right;
    // 第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
    else if (root-&gt;right == nullptr) return root-&gt;left;
    // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
    // 并返回删除节点右孩子为新的根节点。
    else {
        TreeNode* cur = root-&gt;right; // 找右子树最左面的节点
        while(cur-&gt;left != nullptr) {
            cur = cur-&gt;left;
        }
        cur-&gt;left = root-&gt;left; // 把要删除的节点（root）左子树放在cur的左孩子的位置
        TreeNode* tmp = root;   // 把root节点保存一下，下面来删除
        root = root-&gt;right;     // 返回旧root的右孩子作为新root
        delete tmp;             // 释放节点内存（这里不写也可以，但C++最好手动释放一下吧）
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里相当于把新的节点返回给上一层，上一层就要用 root-&gt;left 或者 root-&gt;right接住，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (root-&gt;val &gt; key) root-&gt;left = deleteNode(root-&gt;left, key);
if (root-&gt;val &lt; key) root-&gt;right = deleteNode(root-&gt;right, key);
return root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>整体代码如下：（注释中：情况1，2，3，4，5和上面分析严格对应）</strong></p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root == nullptr) return root; // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
        if (root-&gt;val == key) {
            // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
            if (root-&gt;left == nullptr &amp;&amp; root-&gt;right == nullptr) {
                ///! 内存释放
                delete root;
                return nullptr;
            }
            // 第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
            else if (root-&gt;left == nullptr) {
                auto retNode = root-&gt;right;
                ///! 内存释放
                delete root;
                return retNode;
            }
            // 第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
            else if (root-&gt;right == nullptr) {
                auto retNode = root-&gt;left;
                ///! 内存释放
                delete root;
                return retNode;
            }
            // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
            // 并返回删除节点右孩子为新的根节点。
            else {
                TreeNode* cur = root-&gt;right; // 找右子树最左面的节点
                while(cur-&gt;left != nullptr) {
                    cur = cur-&gt;left;
                }
                cur-&gt;left = root-&gt;left; // 把要删除的节点（root）左子树放在cur的左孩子的位置
                TreeNode* tmp = root;   // 把root节点保存一下，下面来删除
                root = root-&gt;right;     // 返回旧root的右孩子作为新root
                delete tmp;             // 释放节点内存（这里不写也可以，但C++最好手动释放一下吧）
                return root;
            }
        }
        if (root-&gt;val &gt; key) root-&gt;left = deleteNode(root-&gt;left, key);
        if (root-&gt;val &lt; key) root-&gt;right = deleteNode(root-&gt;right, key);
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通二叉树的删除方式" tabindex="-1"><a class="header-anchor" href="#普通二叉树的删除方式" aria-hidden="true">#</a> 普通二叉树的删除方式</h3><p>这里我在介绍一种通用的删除，普通二叉树的删除方式（没有使用搜索树的特性，遍历整棵树），用交换值的操作来删除目标节点。</p><p>代码中目标节点（要删除的节点）被操作了两次：</p><ul><li>第一次是和目标节点的右子树最左面节点交换。</li><li>第二次直接被NULL覆盖了。</li></ul><p>思路有点绕，感兴趣的同学可以画图自己理解一下。</p><p>代码如下：（关键部分已经注释）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root == nullptr) return root;
        if (root-&gt;val == key) {
            if (root-&gt;right == nullptr) { // 这里第二次操作目标值：最终删除的作用
                return root-&gt;left;
            }
            TreeNode *cur = root-&gt;right;
            while (cur-&gt;left) {
                cur = cur-&gt;left;
            }
            swap(root-&gt;val, cur-&gt;val); // 这里第一次操作目标值：交换目标值其右子树最左面节点。
        }
        root-&gt;left = deleteNode(root-&gt;left, key);
        root-&gt;right = deleteNode(root-&gt;right, key);
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个代码是简短一些，思路也巧妙，但是不太好想，实操性不强，推荐第一种写法！</p><h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3><p>删除节点的迭代法还是复杂一些的，但其本质我在递归法里都介绍了，最关键就是删除节点的操作（动画模拟的过程）</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    // 将目标节点（删除节点）的左子树放到 目标节点的右子树的最左面节点的左孩子位置上
    // 并返回目标节点右孩子为新的根节点
    // 是动画里模拟的过程
    TreeNode* deleteOneNode(TreeNode* target) {
        if (target == nullptr) return target;
        if (target-&gt;right == nullptr) return target-&gt;left;
        TreeNode* cur = target-&gt;right;
        while (cur-&gt;left) {
            cur = cur-&gt;left;
        }
        cur-&gt;left = target-&gt;left;
        return target-&gt;right;
    }
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root == nullptr) return root;
        TreeNode* cur = root;
        TreeNode* pre = nullptr; // 记录cur的父节点，用来删除cur
        while (cur) {
            if (cur-&gt;val == key) break;
            pre = cur;
            if (cur-&gt;val &gt; key) cur = cur-&gt;left;
            else cur = cur-&gt;right;
        }
        if (pre == nullptr) { // 如果搜索树只有头结点
            return deleteOneNode(cur);
        }
        // pre 要知道是删左孩子还是右孩子
        if (pre-&gt;left &amp;&amp; pre-&gt;left-&gt;val == key) {
            pre-&gt;left = deleteOneNode(cur);
        }
        if (pre-&gt;right &amp;&amp; pre-&gt;right-&gt;val == key) {
            pre-&gt;right = deleteOneNode(cur);
        }
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>读完本篇，大家会发现二叉搜索树删除节点比增加节点复杂的多。</p><p><strong>因为二叉搜索树添加节点只需要在叶子上添加就可以的，不涉及到结构的调整，而删除节点操作涉及到结构的调整</strong>。</p><p>这里我们依然使用递归函数的返回值来完成把节点从二叉树中移除的操作。</p><p><strong>这里最关键的逻辑就是第五种情况（删除一个左右孩子都不为空的节点），这种情况一定要想清楚</strong>。</p><p>而且就算想清楚了，对应的代码也未必可以写出来，所以<strong>这道题目既考察思维逻辑，也考察代码能力</strong>。</p><p>递归中我给出了两种写法，推荐大家学会第一种（利用搜索树的特性）就可以了，第二种递归写法其实是比较绕的。</p><p>最后我也给出了相应的迭代法，就是模拟递归法中的逻辑来删除节点，但需要一个pre记录cur的父节点，方便做删除操作。</p><p>迭代法其实不太容易写出来，所以如果是初学者的话，彻底掌握第一种递归写法就够了。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 解法1(最好理解的版本)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        root <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root <span class="token operator">=</span> <span class="token function">delete</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">delete</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">delete</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token class-name">TreeNode</span> tmp <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            root<span class="token punctuation">.</span>val <span class="token operator">=</span> tmp<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">delete</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>tmp<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//寻找对应的对应的前面的节点，以及他的前一个节点</span>
    <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>left <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
      pre<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>right <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
      pre<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>递归法（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">:</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>left <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">and</span> root<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">None</span>
            <span class="token keyword">elif</span> root<span class="token punctuation">.</span>left <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right
            <span class="token keyword">elif</span> root<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>left
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> root<span class="token punctuation">.</span>right
                <span class="token keyword">while</span> cur<span class="token punctuation">.</span>left <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
                cur<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">:</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> key<span class="token punctuation">:</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法（版本二）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 如果根节点为空，直接返回</span>
            <span class="token keyword">return</span> root
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">:</span>  <span class="token comment"># 找到要删除的节点</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 如果右子树为空，直接返回左子树作为新的根节点</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>left
            cur <span class="token operator">=</span> root<span class="token punctuation">.</span>right
            <span class="token keyword">while</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">:</span>  <span class="token comment"># 找到右子树中的最左节点</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
            root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>val <span class="token operator">=</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val  <span class="token comment"># 将要删除的节点值与最左节点值交换</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>  <span class="token comment"># 在左子树中递归删除目标节点</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>  <span class="token comment"># 在右子树中递归删除目标节点</span>
        <span class="token keyword">return</span> root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        将目标节点（删除节点）的左子树放到目标节点的右子树的最左面节点的左孩子位置上
        并返回目标节点右孩子为新的根节点
        是动画里模拟的过程
        &quot;&quot;&quot;</span>
        <span class="token keyword">if</span> target <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> target
        <span class="token keyword">if</span> target<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> target<span class="token punctuation">.</span>left
        cur <span class="token operator">=</span> target<span class="token punctuation">.</span>right
        <span class="token keyword">while</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
        cur<span class="token punctuation">.</span>left <span class="token operator">=</span> target<span class="token punctuation">.</span>left
        <span class="token keyword">return</span> target<span class="token punctuation">.</span>right

    <span class="token keyword">def</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root
        cur <span class="token operator">=</span> root
        pre <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 记录cur的父节点，用来删除cur</span>
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cur<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            pre <span class="token operator">=</span> cur
            <span class="token keyword">if</span> cur<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">:</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
        <span class="token keyword">if</span> pre <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 如果搜索树只有头结点</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>deleteOneNode<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token comment"># pre 要知道是删左孩子还是右孩子</span>
        <span class="token keyword">if</span> pre<span class="token punctuation">.</span>left <span class="token keyword">and</span> pre<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">:</span>
            pre<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteOneNode<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">if</span> pre<span class="token punctuation">.</span>right <span class="token keyword">and</span> pre<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">:</span>
            pre<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>deleteOneNode<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 递归版本
func deleteNode(root *TreeNode, key int) *TreeNode {
    if root == nil {
        return nil
    }
    if key &lt; root.Val {
        root.Left = deleteNode(root.Left, key)
        return root
    }
    if key &gt; root.Val {
        root.Right = deleteNode(root.Right, key)
        return root
    }
    if root.Right == nil {
        return root.Left
    }
    if root.Left == nil{
        return root.Right
    }
    minnode := root.Right
    for minnode.Left != nil {
        minnode = minnode.Left
    }
    root.Val = minnode.Val
    root.Right = deleteNode1(root.Right)
    return root
}

func deleteNode1(root *TreeNode)*TreeNode {
    if root.Left == nil {
        pRight := root.Right
        root.Right = nil
        return pRight
    }
    root.Left = deleteNode1(root.Left)
    return root
}
// 迭代版本
func deleteOneNode(target *TreeNode) *TreeNode {
	if target == nil {
		return target
	}
	if target.Right == nil {
		return target.Left
	}
	cur := target.Right
	for cur.Left != nil {
		cur = cur.Left
	}
	cur.Left = target.Left
	return target.Right
}
func deleteNode(root *TreeNode, key int) *TreeNode {
	// 特殊情况处理
	if root == nil {
		return root
	}
	cur := root
	var pre *TreeNode
	for cur != nil {
		if cur.Val == key {
			break
		}
		pre = cur
		if cur.Val &gt; key {
			cur = cur.Left
		} else {
			cur = cur.Right
		}
	}
	if pre == nil {
		return deleteOneNode(cur)
	}
	// pre 要知道是删除左孩子还有右孩子
	if pre.Left != nil &amp;&amp; pre.Left.Val == key {
		pre.Left = deleteOneNode(cur)
	}
	if pre.Right != nil &amp;&amp; pre.Right.Val == key {
		pre.Right = deleteOneNode(cur)
	}
	return root
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><p>递归</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 场景1: 该节点是叶节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 场景2: 有一个孩子节点不存在</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 场景3: 左右节点都存在</span>
        <span class="token keyword">const</span> rightNode <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token comment">// 获取最小值节点</span>
        <span class="token keyword">const</span> minNode <span class="token operator">=</span> <span class="token function">getMinNode</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将待删除节点的值替换为最小值节点值</span>
        root<span class="token punctuation">.</span>val <span class="token operator">=</span> minNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token comment">// 删除最小值节点</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> minNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getMinNode</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">deleteOneNode</span> <span class="token operator">=</span> <span class="token parameter">target</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> <span class="token keyword">return</span> target
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> target<span class="token punctuation">.</span>left
        <span class="token keyword">let</span> cur <span class="token operator">=</span> target<span class="token punctuation">.</span>right
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
        cur<span class="token punctuation">.</span>left <span class="token operator">=</span> target<span class="token punctuation">.</span>left
        <span class="token keyword">return</span> target<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">let</span> cur <span class="token operator">=</span> root
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token keyword">break</span>
        pre <span class="token operator">=</span> cur
        cur<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key <span class="token operator">?</span> cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left <span class="token operator">:</span> cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteOneNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>递归法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token keyword">let</span> curNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curNode<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">removeTargetNode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">let</span> curNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curNode<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        curNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除头节点</span>
        <span class="token keyword">return</span> <span class="token function">removeTargetNode</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">removeTargetNode</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        preNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">removeTargetNode</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> deleteNode<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root <span class="token comment">// 第一种情况，没找到删除的节点，遍历到空节点直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 第二种情况: 左右孩子都为空，直接删除节点，返回null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token comment">// 第三种情况: 左孩子为空，右孩子不为空，右孩子补位</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>right
      <span class="token comment">// 第四种情况: 左孩子不为空，右孩子为空，左孩子补位</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>left
      <span class="token comment">// 第五种情况: 左右孩子都不为空，将删除节点的左子树头节点(左孩子)放到</span>
      <span class="token comment">//           右子树的最左边节点的左孩子上，返回删除节点的右孩子</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> tmp <span class="token operator">=</span> root<span class="token punctuation">.</span>right
        <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>left
        tmp<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>left <span class="token operator">=</span> deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> root<span class="token punctuation">.</span>right <span class="token operator">=</span> deleteNode<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

    root <span class="token comment">// 返回根节点，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">delete_node</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> <span class="token keyword">mut</span> node <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">match</span> node<span class="token punctuation">.</span>val<span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Less</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">delete_node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Equal</span> <span class="token operator">=&gt;</span> <span class="token keyword">match</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        cur <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    cur<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Greater</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">delete_node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token function">drop</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><blockquote><p>递归法：</p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    public TreeNode DeleteNode(TreeNode root, int key) {
        // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
        if (root == null) return null;
        if(key == root.val) {
            //第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
            if(root.left == null &amp;&amp; root.right == null) return null;
            //第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
            if (root.left == null &amp;&amp; root.right != null) return root.right;
            //第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
            if (root.left != null &amp;&amp; root.right == null) return root.left;
            //第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
            // 并返回删除节点右孩子为新的根节点。
            if(root.left != null &amp;&amp; root.right != null) {
                TreeNode leftNode = root.right;	// 找右子树最左面的节点
                while(leftNode.left != null)
                    leftNode = leftNode.left;
                leftNode.left = root.left;	// 把要删除的节点（root）左子树放在leftNode的左孩子的位置
                return root.right;		// 返回旧root的右孩子作为新root
            }
        }

        if(root.val &gt; key) root.left = DeleteNode(root.left, key);
        if(root.val &lt; key) root.right = DeleteNode(root.right, key);

        return root;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74);function O(P,C){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),e(a)])]),k,v,m,b,y,f,n("p",null,[n("strong",null,[n("a",g,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",w,[s("调整二叉树的结构最难！| LeetCode：450.删除二叉搜索树中的节点"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),h,N,T,_,x,n("p",null,[s("说到递归函数的返回值，在"),n("a",L,[s("二叉树：搜索树中的插入操作"),e(a)]),s("中通过递归返回值来加入新节点， 这里也可以通过递归返回值删除节点。")]),S])}const j=t(i,[["render",O],["__file","0450.shanchuerchasousuoshuzhongdejiedian.html.vue"]]);export{j as default};
