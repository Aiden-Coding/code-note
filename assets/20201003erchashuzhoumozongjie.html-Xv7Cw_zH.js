import{_ as s,r as t,o as d,c as a,a as e,b as n,d as r,e as l}from"./app-3RcBQnkC.js";const o={},u=e("h1",{id:"本周小结-二叉树系列二",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本周小结-二叉树系列二","aria-hidden":"true"},"#"),n(" 本周小结！（二叉树系列二）")],-1),c=e("p",null,"本周赶上了十一国庆，估计大家已经对本周末没什么概念了，但是我们该做总结还是要做总结的。",-1),v=e("p",null,[n("本周的主题其实是"),e("strong",null,"简单但并不简单"),n("，本周所选的题目大多是看一下就会的题目，但是大家看完本周的文章估计也发现了，二叉树的简单题目其实里面都藏了很多细节。 这些细节我都给大家展现了出来。")],-1),m=e("h2",{id:"周一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),n(" 周一")],-1),p={href:"https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"这道题目的本质是要比较两个树（这两个树是根节点的左右子树），遍历两棵树而且要比较内侧和外侧节点，所以准确的来说是一个树的遍历顺序是左右中，一个树的遍历顺序是右左中。",-1),g=e("p",null,"而本题的迭代法中我们使用了队列，需要注意的是这不是层序遍历，而且仅仅通过一个容器来成对的存放我们要比较的元素，认识到这一点之后就发现：用队列，用栈，甚至用数组，都是可以的。",-1),b=e("p",null,"那么做完本题之后，在看如下两个题目。",-1),f=e("ul",null,[e("li",null,"100.相同的树"),e("li",null,"572.另一个树的子树")],-1),_={href:"https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},E=l(`<p>100.相同的树的递归代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool compare(TreeNode* left, TreeNode* right) {
        // 首先排除空节点的情况
        if (left == NULL &amp;&amp; right != NULL) return false;
        else if (left != NULL &amp;&amp; right == NULL) return false;
        else if (left == NULL &amp;&amp; right == NULL) return true;
        // 排除了空节点，再排除数值不相同的情况
        else if (left-&gt;val != right-&gt;val) return false;

        // 此时就是：左右节点都不为空，且数值相同的情况
        // 此时才做递归，做下一层的判断
        bool outside = compare(left-&gt;left, right-&gt;left);   // 左子树：左、 右子树：左 （相对于求对称二叉树，只需改一下这里的顺序）
        bool inside = compare(left-&gt;right, right-&gt;right);    // 左子树：右、 右子树：右
        bool isSame = outside &amp;&amp; inside;                    // 左子树：中、 右子树：中 （逻辑处理）
        return isSame;

    }
    bool isSymmetric(TreeNode* p, TreeNode* q) {
        return compare(p, q);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>100.相同的树，精简之后代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool compare(TreeNode* left, TreeNode* right) {
        if (left == NULL &amp;&amp; right != NULL) return false;
        else if (left != NULL &amp;&amp; right == NULL) return false;
        else if (left == NULL &amp;&amp; right == NULL) return true;
        else if (left-&gt;val != right-&gt;val) return false;
        else return compare(left-&gt;left, right-&gt;left) &amp;&amp; compare(left-&gt;right, right-&gt;right);

    }
    bool isSameTree(TreeNode* p, TreeNode* q) {
        return compare(p, q);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>100.相同的树，迭代法代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:

    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == NULL &amp;&amp; q == NULL) return true;
        if (p == NULL || q == NULL) return false;
        queue&lt;TreeNode*&gt; que;
        que.push(p);
        que.push(q);
        while (!que.empty()) {
            TreeNode* leftNode = que.front(); que.pop();
            TreeNode* rightNode = que.front(); que.pop();
            if (!leftNode &amp;&amp; !rightNode) {
                continue;
            }
            if ((!leftNode || !rightNode || (leftNode-&gt;val != rightNode-&gt;val))) {
                return false;
            }
            // 相对于求对称二叉树，这里两个树都要保持一样的遍历顺序
            que.push(leftNode-&gt;left);
            que.push(rightNode-&gt;left);
            que.push(leftNode-&gt;right);
            que.push(rightNode-&gt;right);
        }
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而572.另一个树的子树，则和 100.相同的树几乎一样的了，大家可以直接AC了。</p><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>`,8),A={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"本题可以使用前序，也可以使用后序遍历（左右中），使用前序求的就是深度，使用后序呢求的是高度。",-1),B=e("strong",null,"而根节点的高度就是二叉树的最大深度",-1),C={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},L=l(`<p>本题当然也可以使用前序，代码如下：(<strong>充分表现出求深度回溯的过程</strong>)</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
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
        if (root == 0) return result;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="周三" tabindex="-1"><a class="header-anchor" href="#周三" aria-hidden="true">#</a> 周三</h2>`,6),P={href:"https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,[e("strong",null,"注意这里最小深度是从根节点到最近叶子节点的最短路径上的节点数量。注意是叶子节点。")],-1),x=e("p",null,"什么是叶子节点，左右孩子都为空的节点才是叶子节点！",-1),k=e("p",null,[e("strong",null,"求二叉树的最小深度和求二叉树的最大深度的差别主要在于处理左右孩子不为空的逻辑。")],-1),T={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"周四",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周四","aria-hidden":"true"},"#"),n(" 周四")],-1),F={href:"https://programmercarl.com/0222.%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%AA%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"估计此时大家对这一类求二叉树节点数量以及求深度应该非常熟练了。",-1),w=e("h2",{id:"周五",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周五","aria-hidden":"true"},"#"),n(" 周五")],-1),z={href:"https://programmercarl.com/0110.%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},V=l('<p>今天讲解一道判断平衡二叉树的题目，其实 方法上我们之前讲解深度的时候都讲过了，但是这次我们通过这道题目彻底搞清楚二叉树高度与深度的问题，以及对应的遍历方式。</p><p>二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数。 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数。</p><p><strong>但leetcode中强调的深度和高度很明显是按照节点来计算的</strong>。</p><p>关于根节点的深度究竟是1 还是 0，不同的地方有不一样的标准，leetcode的题目中都是以节点为一度，即根节点深度是1。但维基百科上定义用边为一度，即根节点的深度是0，我们暂时以leetcode为准（毕竟要在这上面刷题）。</p><p>当然此题用迭代法，其实效率很低，因为没有很好的模拟回溯的过程，所以迭代法有很多重复的计算。</p><p>虽然理论上所有的递归都可以用迭代来实现，但是有的场景难度可能比较大。</p><p><strong>例如：都知道回溯法其实就是递归，但是很少人用迭代的方式去实现回溯算法！</strong></p><p>讲了这么多二叉树题目的迭代法，有的同学会疑惑，迭代法中究竟什么时候用队列，什么时候用栈？</p><p><strong>如果是模拟前中后序遍历就用栈，如果是适合层序遍历就用队列，当然还是其他情况，那么就是 先用队列试试行不行，不行就用栈。</strong></p><h2 id="周六" tabindex="-1"><a class="header-anchor" href="#周六" aria-hidden="true">#</a> 周六</h2>',10),j={href:"https://programmercarl.com/0257.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%89%80%E6%9C%89%E8%B7%AF%E5%BE%84.html",target:"_blank",rel:"noopener noreferrer"},G=l(`<p>我在题解中第一个版本的代码会把回溯的过程充分体现出来，如果大家直接看简洁的代码版本，很可能就会忽略的回溯的存在。</p><p>我在文中也强调了这一点。</p><p>有的同学还不理解 ，文中精简之后的递归代码，回溯究竟隐藏在哪里了。</p><p>文中我明确的说了：<strong>回溯就隐藏在traversal(cur-&gt;left, path + &quot;-&gt;&quot;, result);中的 path + &quot;-&gt;&quot;。 每次函数调用完，path依然是没有加上&quot;-&gt;&quot; 的，这就是回溯了。</strong></p><p>如果还不理解的话，可以把</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>traversal(cur-&gt;left, path + &quot;-&gt;&quot;, result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改成</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>string tmp = path + &quot;-&gt;&quot;;
traversal(cur-&gt;left, tmp, result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看看还行不行了，答案是这么写就不行了，因为没有回溯了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>二叉树的题目，我都是使用了递归三部曲一步一步的把整个过程分析出来，而不是上来就给出简洁的代码。</p><p>一些同学可能上来就能写出代码，大体上也知道是为啥，可以自圆其说，但往细节一扣，就不知道了。</p><p>所以刚接触二叉树的同学，建议按照文章分析的步骤一步一步来，不要上来就照着精简的代码写（那样写完了也很容易忘的，知其然不知其所以然）。</p><p><strong>简短的代码看不出遍历的顺序，也看不出分析的逻辑，还会把必要的回溯的逻辑隐藏了，所以尽量按照原理分析一步一步来，写出来之后，再去优化代码。</strong></p><p>大家加个油！！</p>`,15),I={href:"https://github.com/youngyangyang04/leetcode-master",target:"_blank",rel:"noopener noreferrer"},H={href:"https://img-blog.csdnimg.cn/20201210231711160.png",target:"_blank",rel:"noopener noreferrer"},J={href:"https://space.bilibili.com/525438321",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/youngyangyang04/leetcode-master",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.zhihu.com/people/sun-xiu-yang-64",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[e("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/2021013018121150.png",alt:""})],-1);function Q(R,W){const i=t("ExternalLinkIcon");return d(),a("div",null,[u,c,v,m,e("p",null,[n("本周刚开始我们讲解了判断二叉树是否对称的写法， "),e("a",p,[n("二叉树：我对称么？"),r(i)]),n("。")]),h,g,b,f,e("p",null,[e("strong",null,[e("a",_,[n("二叉树：我对称么？"),r(i)]),n("中的递归法和迭代法只需要稍作修改其中一个树的遍历顺序，便可刷了100.相同的树。")])]),E,e("p",null,[n("在"),e("a",A,[n("二叉树：看看这些树的最大深度"),r(i)]),n("中，我们讲解了如何求二叉树的最大深度。")]),N,e("p",null,[B,n("，所以本题中我们通过后序求的根节点高度来求的二叉树最大深度，所以"),e("a",C,[n("二叉树：看看这些树的最大深度"),r(i)]),n("中使用的是后序遍历。")]),L,e("p",null,[n("在"),e("a",P,[n("二叉树：看看这些树的最小深度"),r(i)]),n("中，我们讲解如何求二叉树的最小深度， 这道题目要是稍不留心很容易犯错。")]),q,x,k,e("p",null,[n("注意到这一点之后 递归法和迭代法 都可以参照"),e("a",T,[n("二叉树：看看这些树的最大深度"),r(i)]),n("写出来。")]),U,e("p",null,[n("我们在"),e("a",F,[n("二叉树：我有多少个节点？"),r(i)]),n("中，讲解了如何求二叉树的节点数量。")]),e("p",null,[n("这一天是十一长假的第一天，又是双节，所以简单一些，只要把之前两篇"),e("a",y,[n("二叉树：看看这些树的最大深度"),r(i)]),n("， "),e("a",S,[n("二叉树：看看这些树的最小深度"),r(i)]),n("都认真看了的话，这道题目可以分分钟刷掉了。")]),D,w,e("p",null,[n("在"),e("a",z,[n("二叉树：我平衡么？"),r(i)]),n("中讲解了如何判断二叉树是否是平衡二叉树")]),V,e("p",null,[n("在"),e("a",j,[n("二叉树：找我的所有路径？"),r(i)]),n("中正式涉及到了回溯，很多同学过了这道题目，可能都不知道自己使用了回溯，其实回溯和递归都是相伴相生的。最后我依然给出了迭代法的版本。")]),G,e("blockquote",null,[e("p",null,[e("strong",null,[n("相信很多小伙伴刷题的时候面对力扣上近两千道题目，感觉无从下手，我花费半年时间整理了Github项目：「力扣刷题攻略」"),e("a",I,[n("https://github.com/youngyangyang04/leetcode-master"),r(i)]),n("。 里面有100多道经典算法题目刷题顺序、配有40w字的详细图解，常用算法模板总结，以及难点视频讲解，按照list一道一道刷就可以了！star支持一波吧！")])])]),e("ul",null,[e("li",null,[n("公众号："),e("a",H,[n("代码随想录"),r(i)])]),e("li",null,[n("B站："),e("a",J,[n("代码随想录"),r(i)])]),e("li",null,[n("Github："),e("a",K,[n("leetcode-master"),r(i)])]),e("li",null,[n("知乎："),e("a",M,[n("代码随想录"),r(i)])])]),O])}const Y=s(o,[["render",Q],["__file","20201003erchashuzhoumozongjie.html.vue"]]);export{Y as default};
