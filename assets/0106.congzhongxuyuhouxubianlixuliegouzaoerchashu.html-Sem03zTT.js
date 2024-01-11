import{_ as p,r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},r=n("p",null,"看完本文，可以一起解决如下两道题目",-1),u=n("ul",null,[n("li",null,"106.从中序与后序遍历序列构造二叉树"),n("li",null,"105.从前序与中序遍历序列构造二叉树")],-1),d=n("h1",{id:"_106-从中序与后序遍历序列构造二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_106-从中序与后序遍历序列构造二叉树","aria-hidden":"true"},"#"),s(" 106.从中序与后序遍历序列构造二叉树")],-1),k={href:"https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"根据一棵树的中序遍历与后序遍历构造二叉树。",-1),m=n("p",null,"注意: 你可以假设树中没有重复的元素。",-1),b=n("p",null,"例如，给出",-1),g=n("ul",null,[n("li",null,"中序遍历 inorder = [9,3,15,20,7]"),n("li",null,"后序遍历 postorder = [9,15,7,20,3] 返回如下的二叉树：")],-1),f=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210203154316774.png",alt:"106. 从中序与后序遍历序列构造二叉树1"})],-1),h=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),y={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1vW4y1i7dn",target:"_blank",rel:"noopener noreferrer"},I=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>首先回忆一下如何根据两个顺序构造一个唯一的二叉树，相信理论知识大家应该都清楚，就是以 后序数组的最后一个元素为切割点，先切中序数组，根据中序数组，反过来再切后序数组。一层一层切下去，每次后序数组最后一个元素就是节点元素。</p><p>如果让我们肉眼看两个序列，画一棵二叉树的话，应该分分钟都可以画出来。</p><p>流程如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203154249860.png" alt="106.从中序与后序遍历序列构造二叉树"></p><p>那么代码应该怎么写呢？</p><p>说到一层一层切割，就应该想到了递归。</p><p>来看一下一共分几步：</p><ul><li><p>第一步：如果数组大小为零的话，说明是空节点了。</p></li><li><p>第二步：如果不为空，那么取后序数组最后一个元素作为节点元素。</p></li><li><p>第三步：找到后序数组最后一个元素在中序数组的位置，作为切割点</p></li><li><p>第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）</p></li><li><p>第五步：切割后序数组，切成后序左数组和后序右数组</p></li><li><p>第六步：递归处理左区间和右区间</p></li></ul><p>不难写出如下代码：（先把框架写出来）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>TreeNode* traversal (vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {

    // 第一步
    if (postorder.size() == 0) return NULL;

    // 第二步：后序遍历数组最后一个元素，就是当前的中间节点
    int rootValue = postorder[postorder.size() - 1];
    TreeNode* root = new TreeNode(rootValue);

    // 叶子节点
    if (postorder.size() == 1) return root;

    // 第三步：找切割点
    int delimiterIndex;
    for (delimiterIndex = 0; delimiterIndex &lt; inorder.size(); delimiterIndex++) {
        if (inorder[delimiterIndex] == rootValue) break;
    }

    // 第四步：切割中序数组，得到 中序左数组和中序右数组
    // 第五步：切割后序数组，得到 后序左数组和后序右数组

    // 第六步
    root-&gt;left = traversal(中序左数组, 后序左数组);
    root-&gt;right = traversal(中序右数组, 后序右数组);

    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>难点大家应该发现了，就是如何切割，以及边界值找不好很容易乱套。</strong></p><p>此时应该注意确定切割的标准，是左闭右开，还有左开右闭，还是左闭右闭，这个就是不变量，要在递归中保持这个不变量。</p><p><strong>在切割的过程中会产生四个区间，把握不好不变量的话，一会左闭右开，一会左闭右闭，必然乱套！</strong></p>`,14),x={href:"https://programmercarl.com/0035.%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>首先要切割中序数组，为什么先切割中序数组呢？</p><p>切割点在后序数组的最后一个元素，就是用这个元素来切割中序数组的，所以必要先切割中序数组。</p><p>中序数组相对比较好切，找到切割点（后序数组的最后一个元素）在中序数组的位置，然后切割，如下代码中我坚持左闭右开的原则：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 找到中序遍历的切割点
int delimiterIndex;
for (delimiterIndex = 0; delimiterIndex &lt; inorder.size(); delimiterIndex++) {
    if (inorder[delimiterIndex] == rootValue) break;
}

// 左闭右开区间：[0, delimiterIndex)
vector&lt;int&gt; leftInorder(inorder.begin(), inorder.begin() + delimiterIndex);
// [delimiterIndex + 1, end)
vector&lt;int&gt; rightInorder(inorder.begin() + delimiterIndex + 1, inorder.end() );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就要切割后序数组了。</p><p>首先后序数组的最后一个元素指定不能要了，这是切割点 也是 当前二叉树中间节点的元素，已经用了。</p><p>后序数组的切割点怎么找？</p><p>后序数组没有明确的切割元素来进行左右切割，不像中序数组有明确的切割点，切割点左右分开就可以了。</p><p><strong>此时有一个很重的点，就是中序数组大小一定是和后序数组的大小相同的（这是必然）。</strong></p><p>中序数组我们都切成了左中序数组和右中序数组了，那么后序数组就可以按照左中序数组的大小来切割，切成左后序数组和右后序数组。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// postorder 舍弃末尾元素，因为这个元素就是中间节点，已经用过了
postorder.resize(postorder.size() - 1);

// 左闭右开，注意这里使用了左中序数组大小作为切割点：[0, leftInorder.size)
vector&lt;int&gt; leftPostorder(postorder.begin(), postorder.begin() + leftInorder.size());
// [leftInorder.size(), end)
vector&lt;int&gt; rightPostorder(postorder.begin() + leftInorder.size(), postorder.end());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，中序数组切成了左中序数组和右中序数组，后序数组切割成左后序数组和右后序数组。</p><p>接下来可以递归了，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>root-&gt;left = traversal(leftInorder, leftPostorder);
root-&gt;right = traversal(rightInorder, rightPostorder);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    TreeNode* traversal (vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (postorder.size() == 0) return NULL;

        // 后序遍历数组最后一个元素，就是当前的中间节点
        int rootValue = postorder[postorder.size() - 1];
        TreeNode* root = new TreeNode(rootValue);

        // 叶子节点
        if (postorder.size() == 1) return root;

        // 找到中序遍历的切割点
        int delimiterIndex;
        for (delimiterIndex = 0; delimiterIndex &lt; inorder.size(); delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }

        // 切割中序数组
        // 左闭右开区间：[0, delimiterIndex)
        vector&lt;int&gt; leftInorder(inorder.begin(), inorder.begin() + delimiterIndex);
        // [delimiterIndex + 1, end)
        vector&lt;int&gt; rightInorder(inorder.begin() + delimiterIndex + 1, inorder.end() );

        // postorder 舍弃末尾元素
        postorder.resize(postorder.size() - 1);

        // 切割后序数组
        // 依然左闭右开，注意这里使用了左中序数组大小作为切割点
        // [0, leftInorder.size)
        vector&lt;int&gt; leftPostorder(postorder.begin(), postorder.begin() + leftInorder.size());
        // [leftInorder.size(), end)
        vector&lt;int&gt; rightPostorder(postorder.begin() + leftInorder.size(), postorder.end());

        root-&gt;left = traversal(leftInorder, leftPostorder);
        root-&gt;right = traversal(rightInorder, rightPostorder);

        return root;
    }
public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (inorder.size() == 0 || postorder.size() == 0) return NULL;
        return traversal(inorder, postorder);
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相信大家自己就算是思路清晰， 代码写出来一定是各种问题，所以一定要加日志来调试，看看是不是按照自己思路来切割的，不要大脑模拟，那样越想越糊涂。</p><p>加了日志的代码如下：（加了日志的代码不要在leetcode上提交，容易超时）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    TreeNode* traversal (vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (postorder.size() == 0) return NULL;

        int rootValue = postorder[postorder.size() - 1];
        TreeNode* root = new TreeNode(rootValue);

        if (postorder.size() == 1) return root;

        int delimiterIndex;
        for (delimiterIndex = 0; delimiterIndex &lt; inorder.size(); delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }

        vector&lt;int&gt; leftInorder(inorder.begin(), inorder.begin() + delimiterIndex);
        vector&lt;int&gt; rightInorder(inorder.begin() + delimiterIndex + 1, inorder.end() );

        postorder.resize(postorder.size() - 1);

        vector&lt;int&gt; leftPostorder(postorder.begin(), postorder.begin() + leftInorder.size());
        vector&lt;int&gt; rightPostorder(postorder.begin() + leftInorder.size(), postorder.end());

        // 以下为日志
        cout &lt;&lt; &quot;----------&quot; &lt;&lt; endl;

        cout &lt;&lt; &quot;leftInorder :&quot;;
        for (int i : leftInorder) {
            cout &lt;&lt; i &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;rightInorder :&quot;;
        for (int i : rightInorder) {
            cout &lt;&lt; i &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;leftPostorder :&quot;;
        for (int i : leftPostorder) {
            cout &lt;&lt; i &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;
         cout &lt;&lt; &quot;rightPostorder :&quot;;
        for (int i : rightPostorder) {
            cout &lt;&lt; i &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        root-&gt;left = traversal(leftInorder, leftPostorder);
        root-&gt;right = traversal(rightInorder, rightPostorder);

        return root;
    }
public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (inorder.size() == 0 || postorder.size() == 0) return NULL;
        return traversal(inorder, postorder);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时应该发现了，如上的代码性能并不好，因为每层递归定义了新的vector（就是数组），既耗时又耗空间，但上面的代码是最好理解的，为了方便读者理解，所以用如上的代码来讲解。</strong></p><p>下面给出用下标索引写出的代码版本：（思路是一样的，只不过不用重复定义vector了，每次用下标索引来分割）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    // 中序区间：[inorderBegin, inorderEnd)，后序区间[postorderBegin, postorderEnd)
    TreeNode* traversal (vector&lt;int&gt;&amp; inorder, int inorderBegin, int inorderEnd, vector&lt;int&gt;&amp; postorder, int postorderBegin, int postorderEnd) {
        if (postorderBegin == postorderEnd) return NULL;

        int rootValue = postorder[postorderEnd - 1];
        TreeNode* root = new TreeNode(rootValue);

        if (postorderEnd - postorderBegin == 1) return root;

        int delimiterIndex;
        for (delimiterIndex = inorderBegin; delimiterIndex &lt; inorderEnd; delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }
        // 切割中序数组
        // 左中序区间，左闭右开[leftInorderBegin, leftInorderEnd)
        int leftInorderBegin = inorderBegin;
        int leftInorderEnd = delimiterIndex;
        // 右中序区间，左闭右开[rightInorderBegin, rightInorderEnd)
        int rightInorderBegin = delimiterIndex + 1;
        int rightInorderEnd = inorderEnd;

        // 切割后序数组
        // 左后序区间，左闭右开[leftPostorderBegin, leftPostorderEnd)
        int leftPostorderBegin =  postorderBegin;
        int leftPostorderEnd = postorderBegin + delimiterIndex - inorderBegin; // 终止位置是 需要加上 中序区间的大小size
        // 右后序区间，左闭右开[rightPostorderBegin, rightPostorderEnd)
        int rightPostorderBegin = postorderBegin + (delimiterIndex - inorderBegin);
        int rightPostorderEnd = postorderEnd - 1; // 排除最后一个元素，已经作为节点了

        root-&gt;left = traversal(inorder, leftInorderBegin, leftInorderEnd,  postorder, leftPostorderBegin, leftPostorderEnd);
        root-&gt;right = traversal(inorder, rightInorderBegin, rightInorderEnd, postorder, rightPostorderBegin, rightPostorderEnd);

        return root;
    }
public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (inorder.size() == 0 || postorder.size() == 0) return NULL;
        // 左闭右开的原则
        return traversal(inorder, 0, inorder.size(), postorder, 0, postorder.size());
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么这个版本写出来依然要打日志进行调试，打日志的版本如下：（<strong>该版本不要在leetcode上提交，容易超时</strong>）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    TreeNode* traversal (vector&lt;int&gt;&amp; inorder, int inorderBegin, int inorderEnd, vector&lt;int&gt;&amp; postorder, int postorderBegin, int postorderEnd) {
        if (postorderBegin == postorderEnd) return NULL;

        int rootValue = postorder[postorderEnd - 1];
        TreeNode* root = new TreeNode(rootValue);

        if (postorderEnd - postorderBegin == 1) return root;

        int delimiterIndex;
        for (delimiterIndex = inorderBegin; delimiterIndex &lt; inorderEnd; delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }
        // 切割中序数组
        // 左中序区间，左闭右开[leftInorderBegin, leftInorderEnd)
        int leftInorderBegin = inorderBegin;
        int leftInorderEnd = delimiterIndex;
        // 右中序区间，左闭右开[rightInorderBegin, rightInorderEnd)
        int rightInorderBegin = delimiterIndex + 1;
        int rightInorderEnd = inorderEnd;

        // 切割后序数组
        // 左后序区间，左闭右开[leftPostorderBegin, leftPostorderEnd)
        int leftPostorderBegin =  postorderBegin;
        int leftPostorderEnd = postorderBegin + delimiterIndex - inorderBegin; // 终止位置是 需要加上 中序区间的大小size
        // 右后序区间，左闭右开[rightPostorderBegin, rightPostorderEnd)
        int rightPostorderBegin = postorderBegin + (delimiterIndex - inorderBegin);
        int rightPostorderEnd = postorderEnd - 1; // 排除最后一个元素，已经作为节点了

        cout &lt;&lt; &quot;----------&quot; &lt;&lt; endl;
        cout &lt;&lt; &quot;leftInorder :&quot;;
        for (int i = leftInorderBegin; i &lt; leftInorderEnd; i++) {
            cout &lt;&lt; inorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;rightInorder :&quot;;
        for (int i = rightInorderBegin; i &lt; rightInorderEnd; i++) {
            cout &lt;&lt; inorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;leftpostorder :&quot;;
        for (int i = leftPostorderBegin; i &lt; leftPostorderEnd; i++) {
            cout &lt;&lt; postorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;rightpostorder :&quot;;
        for (int i = rightPostorderBegin; i &lt; rightPostorderEnd; i++) {
            cout &lt;&lt; postorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        root-&gt;left = traversal(inorder, leftInorderBegin, leftInorderEnd,  postorder, leftPostorderBegin, leftPostorderEnd);
        root-&gt;right = traversal(inorder, rightInorderBegin, rightInorderEnd, postorder, rightPostorderBegin, rightPostorderEnd);

        return root;
    }
public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; inorder, vector&lt;int&gt;&amp; postorder) {
        if (inorder.size() == 0 || postorder.size() == 0) return NULL;
        return traversal(inorder, 0, inorder.size(), postorder, 0, postorder.size());
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐" aria-hidden="true">#</a> 相关题目推荐</h2><h3 id="_105-从前序与中序遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#_105-从前序与中序遍历序列构造二叉树" aria-hidden="true">#</a> 105.从前序与中序遍历序列构造二叉树</h3>`,27),P={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},N=t(`<p>根据一棵树的前序遍历与中序遍历构造二叉树。</p><p>注意: 你可以假设树中没有重复的元素。</p><p>例如，给出</p><p>前序遍历 preorder = [3,9,20,15,7] 中序遍历 inorder = [9,3,15,20,7] 返回如下的二叉树：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203154626672.png" alt="105. 从前序与中序遍历序列构造二叉树"></p><h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3><p>本题和106是一样的道理。</p><p>我就直接给出代码了。</p><p>带日志的版本C++代码如下： （<strong>带日志的版本仅用于调试，不要在leetcode上提交，会超时</strong>）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
        TreeNode* traversal (vector&lt;int&gt;&amp; inorder, int inorderBegin, int inorderEnd, vector&lt;int&gt;&amp; preorder, int preorderBegin, int preorderEnd) {
        if (preorderBegin == preorderEnd) return NULL;

        int rootValue = preorder[preorderBegin]; // 注意用preorderBegin 不要用0
        TreeNode* root = new TreeNode(rootValue);

        if (preorderEnd - preorderBegin == 1) return root;

        int delimiterIndex;
        for (delimiterIndex = inorderBegin; delimiterIndex &lt; inorderEnd; delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }
        // 切割中序数组
        // 中序左区间，左闭右开[leftInorderBegin, leftInorderEnd)
        int leftInorderBegin = inorderBegin;
        int leftInorderEnd = delimiterIndex;
        // 中序右区间，左闭右开[rightInorderBegin, rightInorderEnd)
        int rightInorderBegin = delimiterIndex + 1;
        int rightInorderEnd = inorderEnd;

        // 切割前序数组
        // 前序左区间，左闭右开[leftPreorderBegin, leftPreorderEnd)
        int leftPreorderBegin =  preorderBegin + 1;
        int leftPreorderEnd = preorderBegin + 1 + delimiterIndex - inorderBegin; // 终止位置是起始位置加上中序左区间的大小size
        // 前序右区间, 左闭右开[rightPreorderBegin, rightPreorderEnd)
        int rightPreorderBegin = preorderBegin + 1 + (delimiterIndex - inorderBegin);
        int rightPreorderEnd = preorderEnd;

        cout &lt;&lt; &quot;----------&quot; &lt;&lt; endl;
        cout &lt;&lt; &quot;leftInorder :&quot;;
        for (int i = leftInorderBegin; i &lt; leftInorderEnd; i++) {
            cout &lt;&lt; inorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;rightInorder :&quot;;
        for (int i = rightInorderBegin; i &lt; rightInorderEnd; i++) {
            cout &lt;&lt; inorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;leftPreorder :&quot;;
        for (int i = leftPreorderBegin; i &lt; leftPreorderEnd; i++) {
            cout &lt;&lt; preorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;

        cout &lt;&lt; &quot;rightPreorder :&quot;;
        for (int i = rightPreorderBegin; i &lt; rightPreorderEnd; i++) {
            cout &lt;&lt; preorder[i] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;


        root-&gt;left = traversal(inorder, leftInorderBegin, leftInorderEnd,  preorder, leftPreorderBegin, leftPreorderEnd);
        root-&gt;right = traversal(inorder, rightInorderBegin, rightInorderEnd, preorder, rightPreorderBegin, rightPreorderEnd);

        return root;
    }

public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; preorder, vector&lt;int&gt;&amp; inorder) {
        if (inorder.size() == 0 || preorder.size() == 0) return NULL;
        return traversal(inorder, 0, inorder.size(), preorder, 0, preorder.size());

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105.从前序与中序遍历序列构造二叉树，最后版本，C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
        TreeNode* traversal (vector&lt;int&gt;&amp; inorder, int inorderBegin, int inorderEnd, vector&lt;int&gt;&amp; preorder, int preorderBegin, int preorderEnd) {
        if (preorderBegin == preorderEnd) return NULL;

        int rootValue = preorder[preorderBegin]; // 注意用preorderBegin 不要用0
        TreeNode* root = new TreeNode(rootValue);

        if (preorderEnd - preorderBegin == 1) return root;

        int delimiterIndex;
        for (delimiterIndex = inorderBegin; delimiterIndex &lt; inorderEnd; delimiterIndex++) {
            if (inorder[delimiterIndex] == rootValue) break;
        }
        // 切割中序数组
        // 中序左区间，左闭右开[leftInorderBegin, leftInorderEnd)
        int leftInorderBegin = inorderBegin;
        int leftInorderEnd = delimiterIndex;
        // 中序右区间，左闭右开[rightInorderBegin, rightInorderEnd)
        int rightInorderBegin = delimiterIndex + 1;
        int rightInorderEnd = inorderEnd;

        // 切割前序数组
        // 前序左区间，左闭右开[leftPreorderBegin, leftPreorderEnd)
        int leftPreorderBegin =  preorderBegin + 1;
        int leftPreorderEnd = preorderBegin + 1 + delimiterIndex - inorderBegin; // 终止位置是起始位置加上中序左区间的大小size
        // 前序右区间, 左闭右开[rightPreorderBegin, rightPreorderEnd)
        int rightPreorderBegin = preorderBegin + 1 + (delimiterIndex - inorderBegin);
        int rightPreorderEnd = preorderEnd;

        root-&gt;left = traversal(inorder, leftInorderBegin, leftInorderEnd,  preorder, leftPreorderBegin, leftPreorderEnd);
        root-&gt;right = traversal(inorder, rightInorderBegin, rightInorderEnd, preorder, rightPreorderBegin, rightPreorderEnd);

        return root;
    }

public:
    TreeNode* buildTree(vector&lt;int&gt;&amp; preorder, vector&lt;int&gt;&amp; inorder) {
        if (inorder.size() == 0 || preorder.size() == 0) return NULL;

        // 参数坚持左闭右开的原则
        return traversal(inorder, 0, inorder.size(), preorder, 0, preorder.size());
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p>前序和中序可以唯一确定一棵二叉树。</p><p>后序和中序可以唯一确定一棵二叉树。</p><p>那么前序和后序可不可以唯一确定一棵二叉树呢？</p><p><strong>前序和后序不能唯一确定一棵二叉树！</strong>，因为没有中序遍历无法确定左右部分，也就是无法分割。</p><p>举一个例子：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210203154720326.png" alt="106.从中序与后序遍历序列构造二叉树2"></p><p>tree1 的前序遍历是[1 2 3]， 后序遍历是[3 2 1]。</p><p>tree2 的前序遍历是[1 2 3]， 后序遍历是[3 2 1]。</p><p>那么tree1 和 tree2 的前序和后序完全相同，这是一棵树么，很明显是两棵树！</p><p>所以前序和后序不能唯一确定一棵二叉树！</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>之前我们讲的二叉树题目都是各种遍历二叉树，这次开始构造二叉树了，思路其实比较简单，但是真正代码实现出来并不容易。</p><p>所以要避免眼高手低，踏实地把代码写出来。</p><p>我同时给出了添加日志的代码版本，因为这种题目是不太容易写出来调一调就能过的，所以一定要把流程日志打出来，看看符不符合自己的思路。</p><p>大家遇到这种题目的时候，也要学会打日志来调试（如何打日志有时候也是个技术活），不要脑动模拟，脑动模拟很容易越想越乱。</p><p>最后我还给出了为什么前序和中序可以唯一确定一棵二叉树，后序和中序可以唯一确定一棵二叉树，而前序和后序却不行。</p><p>认真研究完本篇，相信大家对二叉树的构造会清晰很多。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><p>106.从中序与后序遍历序列构造二叉树</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>  <span class="token comment">// 方便根据数值查找位置</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 用map保存中序序列的数值对应位置</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">findNode</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 前闭后开</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">findNode</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inBegin<span class="token punctuation">,</span> <span class="token keyword">int</span> inEnd<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">,</span> <span class="token keyword">int</span> postBegin<span class="token punctuation">,</span> <span class="token keyword">int</span> postEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 参数里的范围都是前闭后开</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inBegin <span class="token operator">&gt;=</span> inEnd <span class="token operator">||</span> postBegin <span class="token operator">&gt;=</span> postEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 不满足左闭右开，说明没有元素，返回空树</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> rootIndex <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>postorder<span class="token punctuation">[</span>postEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 找到后序遍历的最后一个元素在中序遍历中的位置</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>rootIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 构造结点</span>
        <span class="token keyword">int</span> lenOfLeft <span class="token operator">=</span> rootIndex <span class="token operator">-</span> inBegin<span class="token punctuation">;</span>  <span class="token comment">// 保存中序左子树个数，用来确定后序数列的个数</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">findNode</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> inBegin<span class="token punctuation">,</span> rootIndex<span class="token punctuation">,</span>
                            postorder<span class="token punctuation">,</span> postBegin<span class="token punctuation">,</span> postBegin <span class="token operator">+</span> lenOfLeft<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">findNode</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> inEnd<span class="token punctuation">,</span>
                            postorder<span class="token punctuation">,</span> postBegin <span class="token operator">+</span> lenOfLeft<span class="token punctuation">,</span> postEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>postorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> inorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">buildHelper</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">buildHelper</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inorderStart<span class="token punctuation">,</span> <span class="token keyword">int</span> inorderEnd<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">,</span> <span class="token keyword">int</span> postorderStart<span class="token punctuation">,</span> <span class="token keyword">int</span> postorderEnd<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>postorderStart <span class="token operator">==</span> postorderEnd<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rootVal <span class="token operator">=</span> postorder<span class="token punctuation">[</span>postorderEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> middleIndex<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>middleIndex <span class="token operator">=</span> inorderStart<span class="token punctuation">;</span> middleIndex <span class="token operator">&lt;</span> inorderEnd<span class="token punctuation">;</span> middleIndex<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span> <span class="token operator">==</span> rootVal<span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> leftInorderStart <span class="token operator">=</span> inorderStart<span class="token punctuation">;</span> 
        <span class="token keyword">int</span> leftInorderEnd <span class="token operator">=</span> middleIndex<span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightInorderStart <span class="token operator">=</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightInorderEnd <span class="token operator">=</span> inorderEnd<span class="token punctuation">;</span>


        <span class="token keyword">int</span> leftPostorderStart <span class="token operator">=</span> postorderStart<span class="token punctuation">;</span>
        <span class="token keyword">int</span> leftPostorderEnd <span class="token operator">=</span> postorderStart <span class="token operator">+</span> <span class="token punctuation">(</span>middleIndex <span class="token operator">-</span> inorderStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightPostorderStart <span class="token operator">=</span> leftPostorderEnd<span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightPostorderEnd <span class="token operator">=</span> postorderEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildHelper</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> leftInorderStart<span class="token punctuation">,</span> leftInorderEnd<span class="token punctuation">,</span>  postorder<span class="token punctuation">,</span> leftPostorderStart<span class="token punctuation">,</span> leftPostorderEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildHelper</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> rightInorderStart<span class="token punctuation">,</span> rightInorderEnd<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> rightPostorderStart<span class="token punctuation">,</span> rightPostorderEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105.从前序与中序遍历序列构造二叉树</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 用map保存中序序列的数值对应位置</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">findNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 前闭后开</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">findNode</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span> preBegin<span class="token punctuation">,</span> <span class="token keyword">int</span> preEnd<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inBegin<span class="token punctuation">,</span> <span class="token keyword">int</span> inEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 参数里的范围都是前闭后开</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preBegin <span class="token operator">&gt;=</span> preEnd <span class="token operator">||</span> inBegin <span class="token operator">&gt;=</span> inEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 不满足左闭右开，说明没有元素，返回空树</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> rootIndex <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>preBegin<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 找到前序遍历的第一个元素在中序遍历中的位置</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>rootIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 构造结点</span>
        <span class="token keyword">int</span> lenOfLeft <span class="token operator">=</span> rootIndex <span class="token operator">-</span> inBegin<span class="token punctuation">;</span>  <span class="token comment">// 保存中序左子树个数，用来确定前序数列的个数</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">findNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> preBegin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preBegin <span class="token operator">+</span> lenOfLeft <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            inorder<span class="token punctuation">,</span> inBegin<span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">findNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> preBegin <span class="token operator">+</span> lenOfLeft <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preEnd<span class="token punctuation">,</span>
                            inorder<span class="token punctuation">,</span> rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> inEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>105.从前序与中序遍历序列构造二叉树</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> preorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token comment"># 第一步: 特殊情况讨论: 树为空. 或者说是递归终止条件</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> preorder<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>

        <span class="token comment"># 第二步: 前序遍历的第一个就是当前的中间节点.</span>
        root_val <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        root <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>root_val<span class="token punctuation">)</span>

        <span class="token comment"># 第三步: 找切割点.</span>
        separator_idx <span class="token operator">=</span> inorder<span class="token punctuation">.</span>index<span class="token punctuation">(</span>root_val<span class="token punctuation">)</span>

        <span class="token comment"># 第四步: 切割inorder数组. 得到inorder数组的左,右半边.</span>
        inorder_left <span class="token operator">=</span> inorder<span class="token punctuation">[</span><span class="token punctuation">:</span>separator_idx<span class="token punctuation">]</span>
        inorder_right <span class="token operator">=</span> inorder<span class="token punctuation">[</span>separator_idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

        <span class="token comment"># 第五步: 切割preorder数组. 得到preorder数组的左,右半边.</span>
        <span class="token comment"># ⭐️ 重点1: 中序数组大小一定跟前序数组大小是相同的.</span>
        preorder_left <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">len</span><span class="token punctuation">(</span>inorder_left<span class="token punctuation">)</span><span class="token punctuation">]</span>
        preorder_right <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">len</span><span class="token punctuation">(</span>inorder_left<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

        <span class="token comment"># 第六步: 递归</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>buildTree<span class="token punctuation">(</span>preorder_left<span class="token punctuation">,</span> inorder_left<span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>buildTree<span class="token punctuation">(</span>preorder_right<span class="token punctuation">,</span> inorder_right<span class="token punctuation">)</span>
        <span class="token comment"># 第七步: 返回答案</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>106.从中序与后序遍历序列构造二叉树</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> inorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token comment"># 第一步: 特殊情况讨论: 树为空. (递归终止条件)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> postorder<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>

        <span class="token comment"># 第二步: 后序遍历的最后一个就是当前的中间节点.</span>
        root_val <span class="token operator">=</span> postorder<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        root <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>root_val<span class="token punctuation">)</span>

        <span class="token comment"># 第三步: 找切割点.</span>
        separator_idx <span class="token operator">=</span> inorder<span class="token punctuation">.</span>index<span class="token punctuation">(</span>root_val<span class="token punctuation">)</span>

        <span class="token comment"># 第四步: 切割inorder数组. 得到inorder数组的左,右半边.</span>
        inorder_left <span class="token operator">=</span> inorder<span class="token punctuation">[</span><span class="token punctuation">:</span>separator_idx<span class="token punctuation">]</span>
        inorder_right <span class="token operator">=</span> inorder<span class="token punctuation">[</span>separator_idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

        <span class="token comment"># 第五步: 切割postorder数组. 得到postorder数组的左,右半边.</span>
        <span class="token comment"># ⭐️ 重点1: 中序数组大小一定跟后序数组大小是相同的.</span>
        postorder_left <span class="token operator">=</span> postorder<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>inorder_left<span class="token punctuation">)</span><span class="token punctuation">]</span>
        postorder_right <span class="token operator">=</span> postorder<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>inorder_left<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>postorder<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>

        <span class="token comment"># 第六步: 递归</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>buildTree<span class="token punctuation">(</span>inorder_left<span class="token punctuation">,</span> postorder_left<span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>buildTree<span class="token punctuation">(</span>inorder_right<span class="token punctuation">,</span> postorder_right<span class="token punctuation">)</span>
         <span class="token comment"># 第七步: 返回答案</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><p>106 从中序与后序遍历序列构造二叉树</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    hash <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> postorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    hash <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> inorder <span class="token punctuation">{</span>  <span class="token comment">// 用map保存中序序列的数值对应位置</span>
        hash<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token comment">// 以左闭右闭的原则进行切分</span>
    root <span class="token operator">:=</span> <span class="token function">rebuild</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>postorder<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
<span class="token comment">// rootIdx表示根节点在后序数组中的索引，l, r 表示在中序数组中的前后切分点</span>
<span class="token keyword">func</span> <span class="token function">rebuild</span><span class="token punctuation">(</span>inorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> postorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> rootIdx <span class="token builtin">int</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> l <span class="token operator">&gt;</span> r <span class="token punctuation">{</span>    <span class="token comment">// 说明没有元素，返回空树</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> l <span class="token operator">==</span> r <span class="token punctuation">{</span>  <span class="token comment">// 只剩唯一一个元素，直接返回</span>
        <span class="token keyword">return</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val <span class="token punctuation">:</span> inorder<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    rootV <span class="token operator">:=</span> postorder<span class="token punctuation">[</span>rootIdx<span class="token punctuation">]</span>  <span class="token comment">// 根据后序数组找到根节点的值</span>
    rootIn <span class="token operator">:=</span> hash<span class="token punctuation">[</span>rootV<span class="token punctuation">]</span>        <span class="token comment">// 找到根节点在对应的中序数组中的位置</span>
    root <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val <span class="token punctuation">:</span> rootV<span class="token punctuation">}</span>   <span class="token comment">// 构造根节点</span>
    <span class="token comment">// 重建左节点和右节点</span>
    root<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">rebuild</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> rootIdx<span class="token operator">-</span><span class="token punctuation">(</span>r<span class="token operator">-</span>rootIn<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> rootIn<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">rebuild</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> rootIdx<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> rootIn<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105 从前序与中序遍历序列构造二叉树</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    hash <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> inorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    hash <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> inorder <span class="token punctuation">{</span>
        hash<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    root <span class="token operator">:=</span> <span class="token function">build</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// l, r 表示构造的树在中序遍历数组中的范围</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">build</span><span class="token punctuation">(</span>pre <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> in <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> root <span class="token builtin">int</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> l <span class="token operator">&gt;</span> r <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    rootVal <span class="token operator">:=</span> pre<span class="token punctuation">[</span>root<span class="token punctuation">]</span>  <span class="token comment">// 找到本次构造的树的根节点</span>
    index <span class="token operator">:=</span> hash<span class="token punctuation">[</span>rootVal<span class="token punctuation">]</span>  <span class="token comment">// 根节点在中序数组中的位置</span>
    node <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode <span class="token punctuation">{</span>Val<span class="token punctuation">:</span> rootVal<span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> in<span class="token punctuation">,</span> root <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> in<span class="token punctuation">,</span> root <span class="token operator">+</span> <span class="token punctuation">(</span>index<span class="token operator">-</span>l<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">inorder<span class="token punctuation">,</span> postorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootVal <span class="token operator">=</span> postorder<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从后序遍历的数组中获取中间节点的值， 即数组最后一个值</span>
    <span class="token keyword">let</span> rootIndex <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取中间节点在中序遍历中的下标</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建中间节点</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建左节点</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建右节点</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从前序与中序遍历序列构造二叉树</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rootVal <span class="token operator">=</span> preorder<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从前序遍历的数组中获取中间节点的值， 即数组第一个值</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取中间节点在中序遍历中的下标</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建中间节点</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建左节点</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建右节点</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>106.从中序与后序遍历序列构造二叉树</p></blockquote><p><strong>创建新数组:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>postorder<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootVal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> postorder<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootValIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootValIndex<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootValIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootValIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> rootNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用数组索引:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>
        inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        inBegin<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> inEnd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
        postBegin<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> postEnd<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>postBegin <span class="token operator">===</span> postEnd<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootVal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> postorder<span class="token punctuation">[</span>postEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootValIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">,</span> inBegin<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> leftInorderBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inBegin<span class="token punctuation">;</span>
        <span class="token keyword">const</span> leftInorderEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> rootValIndex<span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightInorderBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightInorderEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inEnd<span class="token punctuation">;</span>

        <span class="token keyword">const</span> leftPostorderBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> postBegin<span class="token punctuation">;</span>
        <span class="token keyword">const</span> leftPostorderEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> postBegin <span class="token operator">+</span> rootValIndex <span class="token operator">-</span> inBegin<span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightPostorderBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> leftPostorderEnd<span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightPostorderEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> postEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        rootNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>
            inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span>
            leftInorderBegin<span class="token punctuation">,</span> leftInorderEnd<span class="token punctuation">,</span>
            leftPostorderBegin<span class="token punctuation">,</span> leftPostorderEnd
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        rootNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>
            inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span>
            rightInorderBegin<span class="token punctuation">,</span> rightInorderEnd<span class="token punctuation">,</span>
            rightPostorderBegin<span class="token punctuation">,</span> rightPostorderEnd
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> rootNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">recur</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>105.从前序与中序遍历序列构造二叉树</p></blockquote><p><strong>新建数组：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootVal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootValIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootValIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> rootNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用数组索引:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>
        preorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        preBegin<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> preEnd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
        inBegin<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> inEnd<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preBegin <span class="token operator">===</span> preEnd<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootVal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> preorder<span class="token punctuation">[</span>preBegin<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootNode<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rootValIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">,</span> inBegin<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> leftPreBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> preBegin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> leftPreEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> preBegin <span class="token operator">+</span> rootValIndex <span class="token operator">-</span> inBegin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> leftInBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inBegin<span class="token punctuation">;</span>
        <span class="token keyword">const</span> leftInEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> rootValIndex<span class="token punctuation">;</span>

        <span class="token keyword">const</span> rightPreBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> leftPreEnd<span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightPreEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> preEnd<span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightInBegin<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> rootValIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> rightInEnd<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> inEnd<span class="token punctuation">;</span>

        rootNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> leftPreBegin<span class="token punctuation">,</span> leftPreEnd<span class="token punctuation">,</span> leftInBegin<span class="token punctuation">,</span> leftInEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        rootNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> rightPreBegin<span class="token punctuation">,</span> rightPreEnd<span class="token punctuation">,</span> rightInBegin<span class="token punctuation">,</span> rightInEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> rootNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">recur</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><p>106 从中序与后序遍历序列构造二叉树</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">linearSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> arrSize<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arrSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inorderSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> postorder<span class="token punctuation">,</span> <span class="token keyword">int</span> postorderSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//若中序遍历数组中没有元素，则返回NULL</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>inorderSize<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">//创建一个新的结点，将node的val设置为后序遍历的最后一个元素</span>
    <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>val <span class="token operator">=</span> postorder<span class="token punctuation">[</span>postorderSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//通过线性查找找到中间结点在中序数组中的位置</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">linearSearch</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> inorderSize<span class="token punctuation">,</span> postorder<span class="token punctuation">[</span>postorderSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//左子树数组大小为index</span>
    <span class="token comment">//右子树的数组大小为数组大小减index减1（减的1为中间结点）</span>
    <span class="token keyword">int</span> rightSize <span class="token operator">=</span> inorderSize <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> index<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rightSize<span class="token punctuation">,</span> postorder <span class="token operator">+</span> index<span class="token punctuation">,</span> rightSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105 从前序与中序遍历序列构造二叉树</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span> preorderSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inorderSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 递归结束条件：传入的数组大小为0</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>preorderSize<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 1.找到前序遍历数组的第一个元素， 创建结点。左右孩子设置为NULL。</span>
    <span class="token keyword">int</span> rootValue <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token operator">-&gt;</span>val <span class="token operator">=</span> rootValue<span class="token punctuation">;</span>
    root<span class="token operator">-&gt;</span>left <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    root<span class="token operator">-&gt;</span>right <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 2.若前序遍历数组的大小为1，返回该结点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>preorderSize <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>

    <span class="token comment">// 3.根据该结点切割中序遍历数组，将中序遍历数组分割成左右两个数组。算出他们的各自大小</span>
    <span class="token keyword">int</span> index<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> inorderSize<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> rootValue<span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> leftNum <span class="token operator">=</span> index<span class="token punctuation">;</span>
    <span class="token keyword">int</span> rightNum <span class="token operator">=</span> inorderSize <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span><span class="token operator">*</span> leftInorder <span class="token operator">=</span> inorder<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span> rightInorder <span class="token operator">=</span> inorder <span class="token operator">+</span> leftNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 4.根据中序遍历数组左右数组的各子大小切割前序遍历数组。也分为左右数组</span>
    <span class="token keyword">int</span><span class="token operator">*</span> leftPreorder <span class="token operator">=</span> preorder<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span> rightPreorder <span class="token operator">=</span> preorder <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> leftNum<span class="token punctuation">;</span>

    <span class="token comment">// 5.递归进入左右数组，将返回的结果作为根结点的左右孩子</span>
    root<span class="token operator">-&gt;</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>leftPreorder<span class="token punctuation">,</span> leftNum<span class="token punctuation">,</span> leftInorder<span class="token punctuation">,</span> leftNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token operator">-&gt;</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>rightPreorder<span class="token punctuation">,</span> rightNum<span class="token punctuation">,</span> rightInorder<span class="token punctuation">,</span> rightNum<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 6.返回根节点</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><p>105 从前序与中序遍历序列构造二叉树</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">buildTree</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> preorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> inorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">:</span> preorder<span class="token punctuation">,</span>
                      preorderBegin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                      preorderEnd<span class="token punctuation">:</span> preorder<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
                      inorder<span class="token punctuation">:</span> inorder<span class="token punctuation">,</span>
                      inorderBegin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                      inorderEnd<span class="token punctuation">:</span> inorder<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">helper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> preorderBegin<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> preorderEnd<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> inorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorderBegin<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> inorderEnd<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> preorderBegin <span class="token operator">==</span> preorderEnd <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 前序遍历数组的第一个元素作为分割点</span>
        <span class="token keyword">let</span> rootValue <span class="token operator">=</span> preorder<span class="token punctuation">[</span>preorderBegin<span class="token punctuation">]</span>
        <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootValue<span class="token punctuation">)</span>


        <span class="token keyword">if</span> preorderEnd <span class="token operator">-</span> preorderBegin <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root
        <span class="token punctuation">}</span>

        <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 从中序遍历数组中找到根节点的下标</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> ind <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">firstIndex</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> rootValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> ind
        <span class="token punctuation">}</span>

        <span class="token comment">// 递归</span>
        root<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">:</span> preorder<span class="token punctuation">,</span>
                           preorderBegin<span class="token punctuation">:</span> preorderBegin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                           preorderEnd<span class="token punctuation">:</span> preorderBegin <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> index <span class="token operator">-</span> inorderBegin<span class="token punctuation">,</span>
                           inorder<span class="token punctuation">:</span> inorder<span class="token punctuation">,</span>
                           inorderBegin<span class="token punctuation">:</span> inorderBegin<span class="token punctuation">,</span>
                           inorderEnd<span class="token punctuation">:</span> index<span class="token punctuation">)</span>
        root<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">:</span> preorder<span class="token punctuation">,</span>
                            preorderBegin<span class="token punctuation">:</span> preorderBegin <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> index <span class="token operator">-</span> inorderBegin<span class="token punctuation">,</span>
                            preorderEnd<span class="token punctuation">:</span> preorderEnd<span class="token punctuation">,</span>
                            inorder<span class="token punctuation">:</span> inorder<span class="token punctuation">,</span>
                            inorderBegin<span class="token punctuation">:</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            inorderEnd<span class="token punctuation">:</span> inorderEnd<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>106 从中序与后序遍历序列构造二叉树</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Solution_0106</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorderBegin<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> inorderEnd<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> postorder<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorderBegin<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> postorderEnd<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> postorderEnd <span class="token operator">-</span> postorderBegin <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 后序遍历数组的最后一个元素作为分割点</span>
        <span class="token keyword">let</span> rootValue <span class="token operator">=</span> postorder<span class="token punctuation">[</span>postorderEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootValue<span class="token punctuation">)</span>

        <span class="token keyword">if</span> postorderEnd <span class="token operator">-</span> postorderBegin <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root
        <span class="token punctuation">}</span>

        <span class="token comment">// 从中序遍历数组中找到根节点的下标</span>
        <span class="token keyword">var</span> delimiterIndex <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">firstIndex</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> rootValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            delimiterIndex <span class="token operator">=</span> index
        <span class="token punctuation">}</span>

        root<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">:</span> inorder<span class="token punctuation">,</span>
                              inorderBegin<span class="token punctuation">:</span> inorderBegin<span class="token punctuation">,</span>
                              inorderEnd<span class="token punctuation">:</span> delimiterIndex<span class="token punctuation">,</span>
                              postorder<span class="token punctuation">:</span> postorder<span class="token punctuation">,</span>
                              postorderBegin<span class="token punctuation">:</span> postorderBegin<span class="token punctuation">,</span>
                              postorderEnd<span class="token punctuation">:</span> postorderBegin <span class="token operator">+</span> <span class="token punctuation">(</span>delimiterIndex <span class="token operator">-</span> inorderBegin<span class="token punctuation">)</span><span class="token punctuation">)</span>

        root<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">:</span> inorder<span class="token punctuation">,</span>
                               inorderBegin<span class="token punctuation">:</span> delimiterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                               inorderEnd<span class="token punctuation">:</span> inorderEnd<span class="token punctuation">,</span>
                               postorder<span class="token punctuation">:</span> postorder<span class="token punctuation">,</span>
                               postorderBegin<span class="token punctuation">:</span> postorderBegin <span class="token operator">+</span> <span class="token punctuation">(</span>delimiterIndex <span class="token operator">-</span> inorderBegin<span class="token punctuation">)</span><span class="token punctuation">,</span>
                               postorderEnd<span class="token punctuation">:</span> postorderEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>106 从中序与后序遍历序列构造二叉树</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> buildTree<span class="token punctuation">(</span>inorder<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> postorder<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1、如果长度为0，则直接返回null</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> inorder<span class="token punctuation">.</span>size
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token comment">// 2、后序数组的最后一个元素是当前根元素</span>
    <span class="token keyword">var</span> rootValue <span class="token operator">=</span> postorder<span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> root<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">new</span> TreeNode<span class="token punctuation">(</span>rootValue<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root   <span class="token comment">// 如果数组只有一个节点，就直接返回</span>
    <span class="token comment">// 3、在中序数组中找到切割点的索引</span>
    <span class="token keyword">var</span> delimiterIndex<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> inorder<span class="token punctuation">.</span>indexOf<span class="token punctuation">(</span>rootValue<span class="token punctuation">)</span>
    <span class="token comment">// 4、切分数组往下迭代</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> buildTree<span class="token punctuation">(</span>inorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> delimiterIndex<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> delimiterIndex<span class="token punctuation">)</span><span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> buildTree<span class="token punctuation">(</span>inorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span>delimiterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span>delimiterIndex<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    root   <span class="token comment">// 返回root，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105 从前序与中序遍历序列构造二叉树</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> buildTree<span class="token punctuation">(</span>preorder<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1、如果长度为0，直接返回空</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> inorder<span class="token punctuation">.</span>size
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token comment">// 2、前序数组的第一个元素是当前子树根节点</span>
    <span class="token keyword">var</span> rootValue <span class="token operator">=</span> preorder<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> root <span class="token operator">=</span> <span class="token keyword">new</span> TreeNode<span class="token punctuation">(</span>rootValue<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root <span class="token comment">// 如果数组元素只有一个，那么返回根节点</span>
    <span class="token comment">// 3、在中序数组中，找到切割点</span>
    <span class="token keyword">var</span> delimiterIndex <span class="token operator">=</span> inorder<span class="token punctuation">.</span>indexOf<span class="token punctuation">(</span>rootValue<span class="token punctuation">)</span>

    <span class="token comment">// 4、切分数组往下迭代</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> buildTree<span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> delimiterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> delimiterIndex<span class="token punctuation">)</span><span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> buildTree<span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span>delimiterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preorder<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>slice<span class="token punctuation">(</span>delimiterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span>

    root
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><p>106 从中序与后序遍历序列构造二叉树</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">build_tree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> postorder<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> inorder<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> postorder <span class="token operator">=</span> postorder<span class="token punctuation">;</span>
        <span class="token keyword">let</span> root <span class="token operator">=</span> postorder<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token operator">&amp;</span>x<span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">==</span> root<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> root <span class="token operator">=</span> <span class="token class-name">TreeNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build_tree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span><span class="token punctuation">..</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">[</span><span class="token punctuation">..</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build_tree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">[</span>index<span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>105 从前序与中序遍历序列构造二叉树</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">build_tree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> inorder<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> preorder<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> root <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token operator">&amp;</span>x<span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">==</span> root<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> root <span class="token operator">=</span> <span class="token class-name">TreeNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build_tree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">..</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build_tree</span><span class="token punctuation">(</span>
            preorder<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            inorder<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public TreeNode BuildTree(int[] inorder, int[] postorder)
{
    if (inorder.Length == 0 || postorder.Length == null) return null;
    int rootValue = postorder.Last();
    TreeNode root = new TreeNode(rootValue);
    int delimiterIndex = Array.IndexOf(inorder, rootValue);
    root.left = BuildTree(inorder.Take(delimiterIndex).ToArray(), postorder.Take(delimiterIndex).ToArray());
    root.right = BuildTree(inorder.Skip(delimiterIndex + 1).ToArray(), postorder.Skip(delimiterIndex).Take(inorder.Length - delimiterIndex - 1).ToArray());
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84);function T(_,V){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,u,d,n("p",null,[n("a",k,[s("力扣题目链接"),e(a)])]),v,m,b,g,f,h,n("p",null,[n("strong",null,[n("a",y,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",w,[s("坑很多！来看看你掉过几次坑 | LeetCode：106.从中序与后序遍历序列构造二叉树"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),I,n("p",null,[s("我在"),n("a",x,[s("数组：每次遇到二分法，都是一看就会，一写就废"),e(a)]),s("和"),n("a",B,[s("数组：这个循环可以转懵很多人！"),e(a)]),s("中都强调过循环不变量的重要性，在二分查找以及螺旋矩阵的求解中，坚持循环不变量非常重要，本题也是。")]),E,n("p",null,[n("a",P,[s("力扣题目链接"),e(a)])]),N])}const S=p(c,[["render",T],["__file","0106.congzhongxuyuhouxubianlixuliegouzaoerchashu.html.vue"]]);export{S as default};
