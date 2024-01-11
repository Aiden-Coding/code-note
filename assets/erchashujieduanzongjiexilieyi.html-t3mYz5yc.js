import{_ as s,r as t,o as d,c as a,a as e,b as n,d as i,e as l}from"./app-3RcBQnkC.js";const o={},c=e("h1",{id:"本周小结-二叉树",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本周小结-二叉树","aria-hidden":"true"},"#"),n(" 本周小结！（二叉树）")],-1),v=e("p",null,[e("strong",null,"周日我做一个针对本周的打卡留言疑问以及在刷题群里的讨论内容做一下梳理吧。"),n("，这样也有助于大家补一补本周的内容，消化消化。")],-1),u=e("p",null,[e("strong",null,"注意这个周末总结和系列总结还是不一样的（二叉树还远没有结束），这个总结是针对留言疑问以及刷题群里讨论内容的归纳。")],-1),m={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},_={id:"关于二叉树-你该了解这些",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#关于二叉树-你该了解这些","aria-hidden":"true"},"#",-1),A={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},B=l(`<p>有同学会把红黑树和二叉平衡搜索树弄分开了，其实红黑树就是一种二叉平衡搜索树，这两个树不是独立的，所以C++中map、multimap、set、multiset的底层实现机制是二叉平衡搜索树，再具体一点是红黑树。</p><p>对于二叉树节点的定义，C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个定义中<code>TreeNode(int x) : val(x), left(NULL), right(NULL) {}</code> 有同学不清楚干什么的。</p><p>这是构造函数，这么说吧C语言中的结构体是C++中类的祖先，所以C++结构体也可以有构造函数。</p><p>构造函数也可以不写，但是new一个新的节点的时候就比较麻烦。</p><p>例如有构造函数，定义初始值为9的节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TreeNode* a = new TreeNode(9);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有构造函数的话就要这么写：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>TreeNode* a = new TreeNode();
a-&gt;val = 9;
a-&gt;left = NULL;
a-&gt;right = NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在介绍前中后序遍历的时候，有递归和迭代（非递归），还有一种牛逼的遍历方式：morris遍历。</p><p>morris遍历是二叉树遍历算法的超强进阶算法，morris遍历可以将非递归遍历中的空间复杂度降为$O(1)$，感兴趣大家就去查一查学习学习，比较小众，面试几乎不会考。我其实也没有研究过，就不做过多介绍了。</p>`,12),C={id:"二叉树的递归遍历",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#二叉树的递归遍历","aria-hidden":"true"},"#",-1),P={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},F=e("ul",null,[e("li",null,[e("ol",{start:"589"},[e("li",null,"N叉树的前序遍历")])]),e("li",null,[e("ol",{start:"590"},[e("li",null,"N叉树的后序遍历")])])],-1),L=e("p",null,"大家可以再去把这两道题目做了。",-1),k={id:"二叉树的非递归遍历",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#二叉树的非递归遍历","aria-hidden":"true"},"#",-1),U={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>细心的同学发现文中前后序遍历空节点是入栈的，其实空节点入不入栈都差不多，但感觉空节点不入栈确实清晰一些，符合文中动画的演示。</p><p>前序遍历空节点不入栈的代码：（注意注释部分，和文章中的区别）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; preorderTraversal(TreeNode* root) {
        stack&lt;TreeNode*&gt; st;
        vector&lt;int&gt; result;
        if (root == NULL) return result;
        st.push(root);
        while (!st.empty()) {
            TreeNode* node = st.top();                       // 中
            st.pop();
            result.push_back(node-&gt;val);
            if (node-&gt;right) st.push(node-&gt;right);           // 右（空节点不入栈）
            if (node-&gt;left) st.push(node-&gt;left);             // 左（空节点不入栈）
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后序遍历空节点不入栈的代码：（注意注释部分，和文章中的区别）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; postorderTraversal(TreeNode* root) {
        stack&lt;TreeNode*&gt; st;
        vector&lt;int&gt; result;
        if (root == NULL) return result;
        st.push(root);
        while (!st.empty()) {
            TreeNode* node = st.top();
            st.pop();
            result.push_back(node-&gt;val);
            if (node-&gt;left) st.push(node-&gt;left); // 相对于前序遍历，这更改一下入栈顺序 （空节点不入栈）
            if (node-&gt;right) st.push(node-&gt;right); // 空节点不入栈
        }
        reverse(result.begin(), result.end()); // 将结果反转之后就是左右中的顺序了
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实现迭代法的过程中，有同学问了：递归与迭代究竟谁优谁劣呢？</p><p>从时间复杂度上其实迭代法和递归法差不多（在不考虑函数调用开销和函数调用产生的堆栈开销），但是空间复杂度上，递归开销会大一些，因为递归需要系统堆栈存参数返回值等等。</p><p>递归更容易让程序员理解，但收敛不好，容易栈溢出。</p><p>这么说吧，递归是方便了程序员，难为了机器（各种保存参数，各种进栈出栈）。</p><p><strong>在实际项目开发的过程中我们是要尽量避免递归！因为项目代码参数、调用关系都比较复杂，不容易控制递归深度，甚至会栈溢出。</strong></p><h2 id="周四" tabindex="-1"><a class="header-anchor" href="#周四" aria-hidden="true">#</a> 周四</h2>`,11),y={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"此时又多了一种前中后序的迭代写法，那么有同学问了：前中后序迭代法是不是一定要统一来写，这样才算是规范。",-1),j=e("p",null,"其实没必要，还是自己感觉哪一种更好记就用哪种。",-1),V=e("p",null,[n("但是"),e("strong",null,"一定要掌握前中后序一种迭代的写法，并不因为某种场景的题目一定要用迭代，而是现场面试的时候，面试官看你顺畅的写出了递归，一般会进一步考察能不能写出相应的迭代。")],-1),z=e("h2",{id:"周五",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周五","aria-hidden":"true"},"#"),n(" 周五")],-1),I={href:"https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,"看完这篇文章，去leetcode上怒刷五题，文章中 编号107题目的样例图放错了（原谅我匆忙之间总是手抖），但不影响大家理解。",-1),O=e("p",null,"只有同学发现leetcode上“515. 在每个树行中找最大值”，也是层序遍历的应用，依然可以分分钟解决，所以就是一鼓作气解决六道了。",-1),q=e("p",null,[e("strong",null,"层序遍历遍历相对容易一些，只要掌握基本写法（也就是框架模板），剩下的就是在二叉树每一行遍历的时候做做逻辑修改。")],-1),G=e("h2",{id:"周六",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周六","aria-hidden":"true"},"#"),n(" 周六")],-1),H={href:"https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},J=l(`<p><strong>文中我指的是递归的中序遍历是不行的，因为使用递归的中序遍历，某些节点的左右孩子会翻转两次。</strong></p><p>如果非要使用递归中序的方式写，也可以，如下代码就可以避免节点左右孩子翻转两次的情况：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == NULL) return root;
        invertTree(root-&gt;left);         // 左
        swap(root-&gt;left, root-&gt;right);  // 中
        invertTree(root-&gt;left);         // 注意 这里依然要遍历左孩子，因为中间节点已经翻转了
        return root;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码虽然可以，但这毕竟不是真正的递归中序遍历了。</p><p>但使用迭代方式统一写法的中序是可以的。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        stack&lt;TreeNode*&gt; st;
        if (root != NULL) st.push(root);
        while (!st.empty()) {
            TreeNode* node = st.top();
            if (node != NULL) {
                st.pop();
                if (node-&gt;right) st.push(node-&gt;right);  // 右
                st.push(node);                          // 中
                st.push(NULL);
                if (node-&gt;left) st.push(node-&gt;left);    // 左

            } else {
                st.pop();
                node = st.top();
                st.pop();
                swap(node-&gt;left, node-&gt;right);          // 节点处理逻辑
            }
        }
        return root;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么这个中序就是可以的呢，因为这是用栈来遍历，而不是靠指针来遍历，避免了递归法中翻转了两次的情况，大家可以画图理解一下，这里有点意思的。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>本周我们都是讲解了二叉树，从理论基础到遍历方式，从递归到迭代，从深度遍历到广度遍历，最后再用了一个翻转二叉树的题目把我们之前讲过的遍历方式都串了起来。</strong></p>`,10);function K(M,Q){const r=t("ExternalLinkIcon");return d(),a("div",null,[c,v,u,e("ol",null,[e("li",null,[e("a",m,[n("关于二叉树，你该了解这些！"),i(r)])]),e("li",null,[e("a",p,[n("二叉树：一入递归深似海，从此offer是路人"),i(r)])]),e("li",null,[e("a",h,[n("二叉树：听说递归能做的，栈也能做！"),i(r)])]),e("li",null,[e("a",b,[n("二叉树：前中后序迭代方式的写法就不能统一一下么？"),i(r)])]),e("li",null,[e("a",E,[n("二叉树：层序遍历登场！"),i(r)])]),e("li",null,[e("a",g,[n("二叉树：你真的会翻转二叉树么？"),i(r)])])]),e("h2",_,[f,n(),e("a",A,[n("关于二叉树，你该了解这些！"),i(r)])]),B,e("h2",C,[N,n(),e("a",P,[n("二叉树的递归遍历"),i(r)])]),e("p",null,[n("在"),e("a",x,[n("二叉树：一入递归深似海，从此offer是路人"),i(r)]),n("中讲到了递归三要素，以及前中后序的递归写法。")]),e("p",null,[n("文章中我给出了leetcode上三道二叉树的前中后序题目，但是看完"),e("a",T,[n("二叉树：一入递归深似海，从此offer是路人"),i(r)]),n("，依然可以解决n叉树的前后序遍历，在leetcode上分别是")]),F,L,e("h2",k,[D,n(),e("a",U,[n("二叉树的非递归遍历"),i(r)])]),w,e("p",null,[n("在"),e("a",y,[n("二叉树：前中后序迭代方式的写法就不能统一一下么？"),i(r)]),n("中我们使用空节点作为标记，给出了统一的前中后序迭代法。")]),S,j,V,z,e("p",null,[n("在"),e("a",I,[n("二叉树：层序遍历登场！"),i(r)]),n("中我们介绍了二叉树的另一种遍历方式（图论中广度优先搜索在二叉树上的应用）即：层序遍历。")]),$,O,q,G,e("p",null,[n("在"),e("a",H,[n("二叉树：你真的会翻转二叉树么？"),i(r)]),n("中我们把翻转二叉树这么一道简单又经典的问题，充分的剖析了一波，相信就算做过这道题目的同学，看完本篇之后依然有所收获！")]),J])}const W=s(o,[["render",K],["__file","erchashujieduanzongjiexilieyi.html.vue"]]);export{W as default};
