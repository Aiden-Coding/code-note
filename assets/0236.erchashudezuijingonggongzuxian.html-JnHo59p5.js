import{_ as o,r as p,o as l,c as i,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},r=n("blockquote",null,[n("p",null,"本来是打算将二叉树和二叉搜索树的公共祖先问题一起讲，后来发现篇幅过长了，只能先说一说二叉树的公共祖先问题。")],-1),u=n("h1",{id:"_236-二叉树的最近公共祖先",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_236-二叉树的最近公共祖先","aria-hidden":"true"},"#"),s(" 236. 二叉树的最近公共祖先")],-1),d={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p><p>百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”</p><p>例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201016173414722.png" alt="236. 二叉树的最近公共祖先"></p><p>示例 1: 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 输出: 3 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。</p><p>示例 2: 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 输出: 5 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。</p><p>说明:</p><ul><li>所有节点的值都是唯一的。</li><li>p、q 为不同节点且均存在于给定的二叉树中。</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',9),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1jd4y1B7E2",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>遇到这个题目首先想的是要是能自底向上查找就好了，这样就可以找到公共祖先了。</p><p>那么二叉树如何可以自底向上查找呢？</p><p>回溯啊，二叉树回溯的过程就是从低到上。</p><p>后序遍历（左右中）就是天然的回溯过程，可以根据左右子树的返回值，来处理中节点的逻辑。</p><p>接下来就看如何判断一个节点是节点q和节点p的公共祖先呢。</p><p><strong>首先最容易想到的一个情况：如果找到一个节点，发现左子树出现结点p，右子树出现节点q，或者 左子树出现结点q，右子树出现节点p，那么该节点就是节点p和q的最近公共祖先。</strong> 即情况一：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220922173502.png" alt=""></p><p>判断逻辑是 如果递归遍历遇到q，就将q返回，遇到p 就将p返回，那么如果 左右子树的返回值都不为空，说明此时的中节点，一定是q 和p 的最近祖先。</p><p>那么有录友可能疑惑，会不会左子树 遇到q 返回，右子树也遇到q返回，这样并没有找到 q 和p的最近祖先。</p><p>这么想的录友，要审题了，题目强调：<strong>二叉树节点数值是不重复的，而且一定存在 q 和 p</strong>。</p><p><strong>但是很多人容易忽略一个情况，就是节点本身p(q)，它拥有一个子孙节点q(p)。</strong> 情况二：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220922173530.png" alt=""></p><p>其实情况一 和 情况二 代码实现过程都是一样的，也可以说，实现情况一的逻辑，顺便包含了情况二。</p><p>因为遇到 q 或者 p 就返回，这样也包含了 q 或者 p 本身就是 公共祖先的情况。</p><p>这一点是很多录友容易忽略的，在下面的代码讲解中，可以再去体会。</p><p>递归三部曲：</p><ul><li>确定递归函数返回值以及参数</li></ul><p>需要递归函数返回值，来告诉我们是否找到节点q或者p，那么返回值为bool类型就可以了。</p><p>但我们还要返回最近公共节点，可以利用上题目中返回值是TreeNode * ，那么如果遇到p或者q，就把q或者p返回，返回值不为空，就说明找到了q或者p。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定终止条件</li></ul><p>遇到空的话，因为树都是空了，所以返回空。</p><p>那么我们来说一说，如果 root == q，或者 root == p，说明找到 q p ，则将其返回，这个返回值，后面在中节点的处理过程中会用到，那么中节点的处理逻辑，下面讲解。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (root == q || root == p || root == NULL) return root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>确定单层递归逻辑</li></ul><p>值得注意的是 本题函数有返回值，是因为回溯的过程需要递归函数的返回值做判断，但本题我们依然要遍历树的所有节点。</p>`,29),g={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>如果递归函数有返回值，如何区分要搜索一条边，还是搜索整个树呢？</p><p>搜索一条边的写法：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (递归函数(root-&gt;left)) return ;

if (递归函数(root-&gt;right)) return ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索整个树写法：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>left = 递归函数(root-&gt;left);  // 左
right = 递归函数(root-&gt;right); // 右
left与right的逻辑处理;         // 中 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看出区别了没？</p><p><strong>在递归函数有返回值的情况下：如果要搜索一条边，递归函数返回值不为空的时候，立刻返回，如果搜索整个树，直接用一个变量left、right接住返回值，这个left、right后序还有逻辑处理的需要，也就是后序遍历中处理中间节点的逻辑（也是回溯）</strong>。</p><p>那么为什么要遍历整棵树呢？直观上来看，找到最近公共祖先，直接一路返回就可以了。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021020415105872.png" alt="236.二叉树的最近公共祖先"></p><p>就像图中一样直接返回7。</p><p>但事实上还要遍历根节点右子树（即使此时已经找到了目标节点了），也就是图中的节点4、15、20。</p><p>因为在如下代码的后序遍历中，如果想利用left和right做逻辑处理， 不能立刻返回，而是要等left与right逻辑处理完之后才能返回。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>left = 递归函数(root-&gt;left);  // 左
right = 递归函数(root-&gt;right); // 右
left与right的逻辑处理;         // 中 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以此时大家要知道我们要遍历整棵树。知道这一点，对本题就有一定深度的理解了。</p><p>那么先用left和right接住左子树和右子树的返回值，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>TreeNode* left = lowestCommonAncestor(root-&gt;left, p, q);
TreeNode* right = lowestCommonAncestor(root-&gt;right, p, q);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果left 和 right都不为空，说明此时root就是最近公共节点。这个比较好理解</strong></p><p><strong>如果left为空，right不为空，就返回right，说明目标节点是通过right返回的，反之依然</strong>。</p><p>这里有的同学就理解不了了，为什么left为空，right不为空，目标节点通过right返回呢？</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204151125844.png" alt="236.二叉树的最近公共祖先1"></p><p>图中节点10的左子树返回null，右子树返回目标值7，那么此时节点10的处理逻辑就是把右子树的返回值（最近公共祖先7）返回上去！</p><p>这里也很重要，可能刷过这道题目的同学，都不清楚结果究竟是如何从底层一层一层传到头结点的。</p><p>那么如果left和right都为空，则返回left或者right都是可以的，也就是返回空。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (left == NULL &amp;&amp; right != NULL) return right;
else if (left != NULL &amp;&amp; right == NULL) return left;
else  { //  (left == NULL &amp;&amp; right == NULL)
    return NULL;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么寻找最小公共祖先，完整流程图如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/202102041512582.png" alt="236.二叉树的最近公共祖先2"></p><p><strong>从图中，大家可以看到，我们是如何回溯遍历整棵二叉树，将结果返回给头结点的！</strong></p><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == q || root == p || root == NULL) return root;
        TreeNode* left = lowestCommonAncestor(root-&gt;left, p, q);
        TreeNode* right = lowestCommonAncestor(root-&gt;right, p, q);
        if (left != NULL &amp;&amp; right != NULL) return root;

        if (left == NULL &amp;&amp; right != NULL) return right;
        else if (left != NULL &amp;&amp; right == NULL) return left;
        else  { //  (left == NULL &amp;&amp; right == NULL)
            return NULL;
        }

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍加精简，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == q || root == p || root == NULL) return root;
        TreeNode* left = lowestCommonAncestor(root-&gt;left, p, q);
        TreeNode* right = lowestCommonAncestor(root-&gt;right, p, q);
        if (left != NULL &amp;&amp; right != NULL) return root;
        if (left == NULL) return right;
        return left;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这道题目刷过的同学未必真正了解这里面回溯的过程，以及结果是如何一层一层传上去的。</p><p><strong>那么我给大家归纳如下三点</strong>：</p><ol><li><p>求最小公共祖先，需要从底向上遍历，那么二叉树，只能通过后序遍历（即：回溯）实现从底向上的遍历方式。</p></li><li><p>在回溯的过程中，必然要遍历整棵二叉树，即使已经找到结果了，依然要把其他节点遍历完，因为要使用递归函数的返回值（也就是代码中的left和right）做逻辑判断。</p></li><li><p>要理解如果返回值left为空，right不为空为什么要返回right，为什么可以用返回right传给上一层结果。</p></li></ol><p>可以说这里每一步，都是有难度的，都需要对二叉树，递归和回溯有一定的理解。</p><p>本题没有给出迭代法，因为迭代法不适合模拟回溯的过程。理解递归的解法就够了。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) { // 递归结束条件
            return root;
        }

        // 后序遍历
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if(left == null &amp;&amp; right == null) { // 若未找到节点 p 或 q
            return null;
        }else if(left == null &amp;&amp; right != null) { // 若找到一个节点
            return right;
        }else if(left != null &amp;&amp; right == null) { // 若找到一个节点
            return left;
        }else { // 若找到两个节点
            return root;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>递归法（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token operator">==</span> q <span class="token keyword">or</span> root <span class="token operator">==</span> p <span class="token keyword">or</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>

        <span class="token keyword">if</span> left <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">and</span> right <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root

        <span class="token keyword">if</span> left <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">and</span> right <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> right
        <span class="token keyword">elif</span> left <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">and</span> right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> left
        <span class="token keyword">else</span><span class="token punctuation">:</span> 
            <span class="token keyword">return</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法（版本二）精简</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token operator">==</span> q <span class="token keyword">or</span> root <span class="token operator">==</span> p <span class="token keyword">or</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>

        <span class="token keyword">if</span> left <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">and</span> right <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root

        <span class="token keyword">if</span> left <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> right
        <span class="token keyword">return</span> left

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    // check
    if root == nil {
        return root
    }
    // 相等 直接返回root节点即可
    if root == p || root == q {
        return root
    }
    // Divide
    left := lowestCommonAncestor(root.Left, p, q)
    right := lowestCommonAncestor(root.Right, p, q)

    // Conquer
    // 左右两边都不为空，则根节点为祖先
    if left != nil &amp;&amp; right != nil {
        return root
    }
    if left != nil {
        return left
    }
    if right != nil {
        return right
    }
    return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用递归的方法</span>
    <span class="token comment">// 需要从下到上，所以使用后序遍历</span>
    <span class="token comment">// 1. 确定递归的函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">travelTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 确定递归终止条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">===</span> p <span class="token operator">||</span> root <span class="token operator">===</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3. 确定递归单层逻辑</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">travelTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">travelTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token keyword">return</span>  <span class="token function">travelTree</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">===</span> p <span class="token operator">||</span> root <span class="token operator">===</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> right<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> p<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归结束条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> root
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> left <span class="token operator">=</span> lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token keyword">var</span> right <span class="token operator">=</span> lowestCommonAncestor<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> right
    left
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">lowest_common_ancestor</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        p<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        q<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q <span class="token operator">||</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">lowest_common_ancestor</span><span class="token punctuation">(</span>
            root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            p<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            q<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">lowest_common_ancestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>left<span class="token punctuation">,</span> <span class="token operator">&amp;</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> right<span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> root<span class="token punctuation">,</span>
            _ <span class="token operator">=&gt;</span> left<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
{
    if (root == null || root == p || root == q) return root;
    TreeNode left = LowestCommonAncestor(root.left, p, q);
    TreeNode right = LowestCommonAncestor(root.right, p, q);
    if (left != null &amp;&amp; right != null) return root;
    if (left == null &amp;&amp; right != null) return right;
    if (left != null &amp;&amp; right == null) return left;
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60);function f(w,y){const a=p("ExternalLinkIcon");return l(),i("div",null,[r,u,n("p",null,[n("a",d,[s("力扣题目链接"),e(a)])]),k,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",m,[s("自底向上查找，有点难度！ | LeetCode：236. 二叉树的最近公共祖先"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),b,n("p",null,[s("我们在"),n("a",g,[s("二叉树：递归函数究竟什么时候需要返回值，什么时候不要返回值？"),e(a)]),s("中说了 递归函数有返回值就是要遍历某一条边，但有返回值也要看如何处理返回值！")]),h])}const N=o(c,[["render",f],["__file","0236.erchashudezuijingonggongzuxian.html.vue"]]);export{N as default};
