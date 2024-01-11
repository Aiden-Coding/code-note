import{_ as p,r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},u=n("blockquote",null,[n("p",null,"求高度还是求深度，你搞懂了不？")],-1),r=n("h1",{id:"_110-平衡二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_110-平衡二叉树","aria-hidden":"true"},"#"),s(" 110.平衡二叉树")],-1),d={href:"https://leetcode.cn/problems/balanced-binary-tree/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p><p>本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。</p><p>示例 1:</p><p>给定二叉树 [3,9,20,null,null,15,7]</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021020315542230.png" alt="110.平衡二叉树"></p><p>返回 true 。</p><p>示例 2:</p><p>给定二叉树 [1,2,2,3,3,null,null,4,4]</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203155447919.png" alt="110.平衡二叉树1"></p><p>返回 false 。</p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',11),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1Ug411S7my",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"题外话",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题外话","aria-hidden":"true"},"#"),s(" 题外话")],-1),h={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"这里强调一波概念：",-1),f=n("ul",null,[n("li",null,"二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数。"),n("li",null,"二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数。")],-1),y=n("p",null,"但leetcode中强调的深度和高度很明显是按照节点来计算的，如图：",-1),w=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210203155515650.png",alt:"110.平衡二叉树2"})],-1),N=n("p",null,"关于根节点的深度究竟是1 还是 0，不同的地方有不一样的标准，leetcode的题目中都是以节点为一度，即根节点深度是1。但维基百科上定义用边为一度，即根节点的深度是0，我们暂时以leetcode为准（毕竟要在这上面刷题）。",-1),_=n("p",null,"因为求深度可以从上到下去查 所以需要前序遍历（中左右），而高度只能从下到上去查，所以只能后序遍历（左右中）",-1),H={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,[n("strong",null,"那是因为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这棵树的最大深度，所以才可以使用后序遍历。")],-1),x={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int result;
    void getDepth(TreeNode* node, int depth) {
        result = depth &gt; result ? depth : result; // 中

        if (node-&gt;left == NULL &amp;&amp; node-&gt;right == NULL) return ;

        if (node-&gt;left) { // 左
            depth++;    // 深度+1
            getDepth(node-&gt;left, depth);
            depth--;    // 回溯，深度-1
        }
        if (node-&gt;right) { // 右
            depth++;    // 深度+1
            getDepth(node-&gt;right, depth);
            depth--;    // 回溯，深度-1
        }
        return ;
    }
    int maxDepth(TreeNode* root) {
        result = 0;
        if (root == NULL) return result;
        getDepth(root, 1);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以看出使用了前序（中左右）的遍历顺序，这才是真正求深度的逻辑！</strong></p><p>注意以上代码是为了把细节体现出来，简化一下代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int result;
    void getDepth(TreeNode* node, int depth) {
        result = depth &gt; result ? depth : result; // 中
        if (node-&gt;left == NULL &amp;&amp; node-&gt;right == NULL) return ;
        if (node-&gt;left) { // 左
            getDepth(node-&gt;left, depth + 1);
        }
        if (node-&gt;right) { // 右
            getDepth(node-&gt;right, depth + 1);
        }
        return ;
    }
    int maxDepth(TreeNode* root) {
        result = 0;
        if (root == 0) return result;
        getDepth(root, 1);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本题思路" tabindex="-1"><a class="header-anchor" href="#本题思路" aria-hidden="true">#</a> 本题思路</h2><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><p>此时大家应该明白了既然要求比较高度，必然是要后序遍历。</p><p>递归三步曲分析：</p><ol><li>明确递归函数的参数和返回值</li></ol><p>参数：当前传入节点。 返回值：以当前传入节点为根节点的树的高度。</p><p>那么如何标记左右子树是否差值大于1呢？</p><p>如果当前传入节点为根节点的二叉树已经不是二叉平衡树了，还返回高度的话就没有意义了。</p><p>所以如果已经不是二叉平衡树了，可以返回-1 来标记已经不符合平衡树的规则了。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// -1 表示已经不是平衡二叉树了，否则返回值是以该节点为根节点树的高度
int getHeight(TreeNode* node)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>明确终止条件</li></ol><p>递归的过程中依然是遇到空节点了为终止，返回0，表示当前节点为根节点的树高度为0</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (node == NULL) {
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>明确单层递归的逻辑</li></ol><p>如何判断以当前传入节点为根节点的二叉树是否是平衡二叉树呢？当然是其左子树高度和其右子树高度的差值。</p><p>分别求出其左右子树的高度，然后如果差值小于等于1，则返回当前二叉树的高度，否则返回-1，表示已经不是二叉平衡树了。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int leftHeight = getHeight(node-&gt;left); // 左
if (leftHeight == -1) return -1;
int rightHeight = getHeight(node-&gt;right); // 右
if (rightHeight == -1) return -1;

int result;
if (abs(leftHeight - rightHeight) &gt; 1) {  // 中
    result = -1;
} else {
    result = 1 + max(leftHeight, rightHeight); // 以当前节点为根节点的树的最大高度
}

return result;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码精简之后如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int leftHeight = getHeight(node-&gt;left);
if (leftHeight == -1) return -1;
int rightHeight = getHeight(node-&gt;right);
if (rightHeight == -1) return -1;
return abs(leftHeight - rightHeight) &gt; 1 ? -1 : 1 + max(leftHeight, rightHeight);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时递归的函数就已经写出来了，这个递归的函数传入节点指针，返回以该节点为根节点的二叉树的高度，如果不是二叉平衡树，则返回-1。</p><p>getHeight整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int getHeight(TreeNode* node) {
    if (node == NULL) {
        return 0;
    }
    int leftHeight = getHeight(node-&gt;left);
    if (leftHeight == -1) return -1;
    int rightHeight = getHeight(node-&gt;right);
    if (rightHeight == -1) return -1;
    return abs(leftHeight - rightHeight) &gt; 1 ? -1 : 1 + max(leftHeight, rightHeight);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后本题整体递归代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    // 返回以该节点为根节点的二叉树的高度，如果不是平衡二叉树了则返回-1
    int getHeight(TreeNode* node) {
        if (node == NULL) {
            return 0;
        }
        int leftHeight = getHeight(node-&gt;left);
        if (leftHeight == -1) return -1;
        int rightHeight = getHeight(node-&gt;right);
        if (rightHeight == -1) return -1;
        return abs(leftHeight - rightHeight) &gt; 1 ? -1 : 1 + max(leftHeight, rightHeight);
    }
    bool isBalanced(TreeNode* root) {
        return getHeight(root) == -1 ? false : true;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3>`,32),D={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},C=t(`<p>本题的迭代方式可以先定义一个函数，专门用来求高度。</p><p>这个函数通过栈模拟的后序遍历找每一个节点的高度（其实是通过求传入节点为根节点的最大深度来求的高度）</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// cur节点的最大深度，就是cur的高度
int getDepth(TreeNode* cur) {
    stack&lt;TreeNode*&gt; st;
    if (cur != NULL) st.push(cur);
    int depth = 0; // 记录深度
    int result = 0;
    while (!st.empty()) {
        TreeNode* node = st.top();
        if (node != NULL) {
            st.pop();
            st.push(node);                          // 中
            st.push(NULL);
            depth++;
            if (node-&gt;right) st.push(node-&gt;right);  // 右
            if (node-&gt;left) st.push(node-&gt;left);    // 左

        } else {
            st.pop();
            node = st.top();
            st.pop();
            depth--;
        }
        result = result &gt; depth ? result : depth;
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再用栈来模拟后序遍历，遍历每一个节点的时候，再去判断左右孩子的高度是否符合，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>bool isBalanced(TreeNode* root) {
    stack&lt;TreeNode*&gt; st;
    if (root == NULL) return true;
    st.push(root);
    while (!st.empty()) {
        TreeNode* node = st.top();                       // 中
        st.pop();
        if (abs(getDepth(node-&gt;left) - getDepth(node-&gt;right)) &gt; 1) { // 判断左右孩子高度是否符合
            return false;
        }
        if (node-&gt;right) st.push(node-&gt;right);           // 右（空节点不入栈）
        if (node-&gt;left) st.push(node-&gt;left);             // 左（空节点不入栈）
    }
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int getDepth(TreeNode* cur) {
        stack&lt;TreeNode*&gt; st;
        if (cur != NULL) st.push(cur);
        int depth = 0; // 记录深度
        int result = 0;
        while (!st.empty()) {
            TreeNode* node = st.top();
            if (node != NULL) {
                st.pop();
                st.push(node);                          // 中
                st.push(NULL);
                depth++;
                if (node-&gt;right) st.push(node-&gt;right);  // 右
                if (node-&gt;left) st.push(node-&gt;left);    // 左

            } else {
                st.pop();
                node = st.top();
                st.pop();
                depth--;
            }
            result = result &gt; depth ? result : depth;
        }
        return result;
    }

public:
    bool isBalanced(TreeNode* root) {
        stack&lt;TreeNode*&gt; st;
        if (root == NULL) return true;
        st.push(root);
        while (!st.empty()) {
            TreeNode* node = st.top();                       // 中
            st.pop();
            if (abs(getDepth(node-&gt;left) - getDepth(node-&gt;right)) &gt; 1) {
                return false;
            }
            if (node-&gt;right) st.push(node-&gt;right);           // 右（空节点不入栈）
            if (node-&gt;left) st.push(node-&gt;left);             // 左（空节点不入栈）
        }
        return true;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然此题用迭代法，其实效率很低，因为没有很好的模拟回溯的过程，所以迭代法有很多重复的计算。</p><p>虽然理论上所有的递归都可以用迭代来实现，但是有的场景难度可能比较大。</p><p><strong>例如：都知道回溯法其实就是递归，但是很少人用迭代的方式去实现回溯算法！</strong></p><p>因为对于回溯算法已经是非常复杂的递归了，如果再用迭代的话，就是自己给自己找麻烦，效率也并不一定高。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过本题可以了解求二叉树深度 和 二叉树高度的差异，求深度适合用前序遍历，而求高度适合用后序遍历。</p><p>本题迭代法其实有点复杂，大家可以有一个思路，也不一定说非要写出来。</p><p>但是递归方式是一定要掌握的！</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java:</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
   /**
     * 递归法
     */
    public boolean isBalanced(TreeNode root) {
        return getHeight(root) != -1;
    }

    private int getHeight(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftHeight = getHeight(root.left);
        if (leftHeight == -1) {
            return -1;
        }
        int rightHeight = getHeight(root.right);
        if (rightHeight == -1) {
            return -1;
        }
        // 左右子树高度差大于1，return -1表示已经不是平衡树了
        if (Math.abs(leftHeight - rightHeight) &gt; 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

class Solution {
   /**
     * 迭代法，效率较低，计算高度时会重复遍历
     * 时间复杂度：O(n^2)
     */
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        TreeNode pre = null;
        while (root!= null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            TreeNode inNode = stack.peek();
            // 右结点为null或已经遍历过
            if (inNode.right == null || inNode.right == pre) {
                // 比较左右子树的高度差，输出
                if (Math.abs(getHeight(inNode.left) - getHeight(inNode.right)) &gt; 1) {
                    return false;
                }
                stack.pop();
                pre = inNode;
                root = null;// 当前结点下，没有要遍历的结点了
            } else {
                root = inNode.right;// 右结点还没遍历，遍历右结点
            }
        }
        return true;
    }

    /**
     * 层序遍历，求结点的高度
     */
    public int getHeight(TreeNode root) {
        if (root == null) {
            return 0;
        }
        Deque&lt;TreeNode&gt; deque = new LinkedList&lt;&gt;();
        deque.offer(root);
        int depth = 0;
        while (!deque.isEmpty()) {
            int size = deque.size();
            depth++;
            for (int i = 0; i &lt; size; i++) {
                TreeNode poll = deque.poll();
                if (poll.left != null) {
                    deque.offer(poll.left);
                }
                if (poll.right != null) {
                    deque.offer(poll.right);
                }
            }
        }
        return depth;
    }
}

class Solution {
   /**
     * 优化迭代法，针对暴力迭代法的getHeight方法做优化，利用TreeNode.val来保存当前结点的高度，这样就不会有重复遍历
     * 获取高度算法时间复杂度可以降到O(1)，总的时间复杂度降为O(n)。
     * 时间复杂度：O(n)
     */
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        TreeNode pre = null;
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            TreeNode inNode = stack.peek();
            // 右结点为null或已经遍历过
            if (inNode.right == null || inNode.right == pre) {
                // 输出
                if (Math.abs(getHeight(inNode.left) - getHeight(inNode.right)) &gt; 1) {
                    return false;
                }
                stack.pop();
                pre = inNode;
                root = null;// 当前结点下，没有要遍历的结点了
            } else {
                root = inNode.right;// 右结点还没遍历，遍历右结点
            }
        }
        return true;
    }

    /**
     * 求结点的高度
     */
    public int getHeight(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftHeight = root.left != null ? root.left.val : 0;
        int rightHeight = root.right != null ? root.right.val : 0;
        int height = Math.max(leftHeight, rightHeight) + 1;
        root.val = height;// 用TreeNode.val来保存当前结点的高度
        return height;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h3><p>递归法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>get_height<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">get_height</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token comment"># Base Case</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        <span class="token comment"># 左</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left_height <span class="token operator">:=</span> self<span class="token punctuation">.</span>get_height<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token comment"># 右</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right_height <span class="token operator">:=</span> self<span class="token punctuation">.</span>get_height<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token comment"># 中</span>
        <span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>left_height <span class="token operator">-</span> right_height<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left_height<span class="token punctuation">,</span> right_height<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法精简版：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>get_hight<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">def</span> <span class="token function">get_hight</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        left <span class="token operator">=</span> self<span class="token punctuation">.</span>get_hight<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>get_hight<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">or</span> right <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">or</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>left <span class="token operator">-</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">:</span>
        st <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> cur <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        depth <span class="token operator">=</span> <span class="token number">0</span>
        result <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> st<span class="token punctuation">:</span>
            node <span class="token operator">=</span> st<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> node <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">)</span>                           <span class="token comment"># 中</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>
                depth <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                    st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>                 <span class="token comment"># 右</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                    st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>                   <span class="token comment"># 左</span>

            <span class="token keyword">else</span><span class="token punctuation">:</span>               
                node <span class="token operator">=</span> st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                depth <span class="token operator">-=</span> <span class="token number">1</span>
            result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> depth<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">:</span>
        st <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">while</span> st<span class="token punctuation">:</span>
            node <span class="token operator">=</span> st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>                                 <span class="token comment"># 中</span>
            <span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>getDepth<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>getDepth<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>                       <span class="token comment"># 右（空节点不入栈）</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>                         <span class="token comment"># 左（空节点不入栈）</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法精简版：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>TreeNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>

        height_map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
        <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
            node <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">)</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span> stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span> stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                real_node <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                left<span class="token punctuation">,</span> right <span class="token operator">=</span> height_map<span class="token punctuation">.</span>get<span class="token punctuation">(</span>real_node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> height_map<span class="token punctuation">.</span>get<span class="token punctuation">(</span>real_node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>left <span class="token operator">-</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">False</span>
                height_map<span class="token punctuation">[</span>real_node<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go:</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func isBalanced(root *TreeNode) bool {
    h := getHeight(root)
    if h == -1 {
        return false
    }
    return true
}
// 返回以该节点为根节点的二叉树的高度，如果不是平衡二叉树了则返回-1
func getHeight(root *TreeNode) int {
    if root == nil {
        return 0
    }
    l, r := getHeight(root.Left), getHeight(root.Right)
    if l == -1 || r == -1 {
        return -1
    }
    if l - r &gt; 1 || r - l &gt; 1 {
        return -1
    }
    return max(l, r) + 1
}
func max(a, b int) int {
    if a &gt; b {
        return a
    }
    return b
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><p>递归法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isBalanced</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1</span>
    <span class="token comment">// 1. 确定递归函数参数以及返回值</span>
    <span class="token keyword">const</span> <span class="token function-variable function">getDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 确定递归函数终止条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 3. 确定单层递归逻辑</span>
        <span class="token keyword">let</span> leftDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//左子树高度</span>
        <span class="token comment">// 当判定左子树不为平衡二叉树时,即可直接返回-1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>leftDepth <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> rightDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//右子树高度</span>
        <span class="token comment">// 当判定右子树不为平衡二叉树时,即可直接返回-1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>rightDepth <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>leftDepth <span class="token operator">-</span> rightDepth<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftDepth<span class="token punctuation">,</span> rightDepth<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取当前节点的高度</span>
<span class="token keyword">var</span> <span class="token function-variable function">getHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">curNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 压入当前元素</span>
    <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">[</span>queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 取出栈顶</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 中</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            depth<span class="token operator">++</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 右</span>
            node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 左</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node <span class="token operator">=</span> queue<span class="token punctuation">[</span>queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            depth<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">=</span> res <span class="token operator">&gt;</span> depth <span class="token operator">?</span> res <span class="token operator">:</span> depth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isBalanced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">[</span>queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 取出栈顶</span>
        queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">getHeight</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">getHeight</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 递归法</span>
<span class="token keyword">function</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> leftDepth<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDepth <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> rightDepth<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rightDepth <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>leftDepth <span class="token operator">-</span> rightDepth<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftDepth<span class="token punctuation">,</span> rightDepth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><p>递归法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//如果结点不存在，返回0</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//求出右子树深度</span>
    <span class="token keyword">int</span> rightDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//求出左子树深度</span>
    <span class="token keyword">int</span> leftDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//返回左右子树中的较大值+1</span>
    <span class="token keyword">return</span> rightDepth <span class="token operator">&gt;</span> leftDepth <span class="token operator">?</span> rightDepth <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> leftDepth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">isBalanced</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//递归结束条件为：传入结点为NULL，返回True</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">//求出左右子树的深度</span>
    <span class="token keyword">int</span> leftDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> rightDepth <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> diff<span class="token punctuation">;</span>
    <span class="token comment">//若左右子树绝对值差距大于1，返回False</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">=</span> leftDepth <span class="token operator">-</span> rightDepth<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">||</span> diff <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//检查左右子树是否为平衡二叉树</span>
    <span class="token keyword">return</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//计算结点深度</span>
<span class="token keyword">int</span> <span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//开辟栈空间</span>
    <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token operator">*</span> stack <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> stackTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//若传入结点存在，将其入栈。若不存在，函数直接返回0</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//当栈中有元素时，进行迭代遍历</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stackTop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//取出栈顶元素</span>
        <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> tempNode <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token operator">--</span>stackTop<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//若栈顶元素非NULL，则将深度+1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            depth<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">//将栈顶元素再次入栈，添加NULL表示此结点已被遍历</span>
            stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
            stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            <span class="token comment">//若栈顶元素有左右孩子，则将孩子结点入栈</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>tempNode<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span>
                stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tempNode<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>tempNode<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span>
                stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tempNode<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
            <span class="token comment">//更新结果</span>
            result <span class="token operator">=</span> result <span class="token operator">&gt;</span> depth <span class="token operator">?</span> result <span class="token operator">:</span> depth<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//若为NULL，则代表当前结点已被遍历，深度-1</span>
            tempNode <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token operator">--</span>stackTop<span class="token punctuation">]</span><span class="token punctuation">;</span>
            depth<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">isBalanced</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//开辟栈空间</span>
    <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token operator">*</span> stack <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> stackTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//若根节点不存在，返回True</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">//将根节点入栈</span>
    stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token comment">//当栈中有元素时，进行遍历</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stackTop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将栈顶元素出栈</span>
        <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token operator">--</span>stackTop<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//计算左右子树的深度</span>
        <span class="token keyword">int</span> diff <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//若深度的绝对值大于1，返回False</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">||</span> diff <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//如果栈顶结点有左右结点，将左右结点入栈</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span>
            stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span>
            stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//若二叉树遍历结束后没有返回False，则返回True</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><blockquote><p>递归</p></blockquote><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">isBalanced</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// -1 已经不是平衡二叉树</span>
    <span class="token keyword">return</span> <span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token punctuation">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function-definition function">getHeight</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> root <span class="token operator">=</span> root <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> leftHeight <span class="token operator">=</span> <span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token keyword">left</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> leftHeight <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> rightHeight <span class="token operator">=</span> <span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token keyword">right</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> rightHeight <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token function">abs</span><span class="token punctuation">(</span>leftHeight <span class="token operator">-</span> rightHeight<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">max</span><span class="token punctuation">(</span>leftHeight<span class="token punctuation">,</span> rightHeight<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><p>递归</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_balanced</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">get_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">get_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">get_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">get_depth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> right <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token number">1</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public bool IsBalanced(TreeNode root)
{
    return GetHeight(root) == -1 ? false : true;
}
public int GetHeight(TreeNode root)
{
    if (root == null) return 0;
    int left = GetHeight(root.left);
    if (left == -1) return -1;
    int right = GetHeight(root.right);
    if (right == -1) return -1;
    int res;
    if (Math.Abs(left - right) &gt; 1)
    {
        res = -1;
    }
    else
    {
        res = 1 + Math.Max(left, right);
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function L(B,E){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),e(a)])]),k,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",m,[s("后序遍历求高度，高度判断是否平衡 | LeetCode：110.平衡二叉树"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),b,n("p",null,[s("咋眼一看这道题目和"),n("a",h,[s("104.二叉树的最大深度"),e(a)]),s("很像，其实有很大区别。")]),g,f,y,w,N,_,n("p",null,[s("有的同学一定疑惑，为什么"),n("a",H,[s("104.二叉树的最大深度"),e(a)]),s("中求的是二叉树的最大深度，也用的是后序遍历。")]),T,n("p",null,[s("在"),n("a",x,[s("104.二叉树的最大深度"),e(a)]),s("中，如果真正求取二叉树的最大深度，代码应该写成如下：（前序遍历）")]),P,n("p",null,[s("在"),n("a",D,[s("104.二叉树的最大深度"),e(a)]),s("中我们可以使用层序遍历来求深度，但是就不能直接用层序遍历来求高度了，这就体现出求高度和求深度的不同。")]),C])}const A=p(c,[["render",L],["__file","0110.pinghengerchashu.html.vue"]]);export{A as default};
