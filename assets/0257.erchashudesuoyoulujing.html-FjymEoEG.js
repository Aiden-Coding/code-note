import{_ as p,r as o,o as i,c,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const l={},u=n("blockquote",null,[n("p",null,"以为只用了递归，其实还用了回溯")],-1),r=n("h1",{id:"_257-二叉树的所有路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_257-二叉树的所有路径","aria-hidden":"true"},"#"),s(" 257. 二叉树的所有路径")],-1),d={href:"https://leetcode.cn/problems/binary-tree-paths/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个二叉树，返回所有从根节点到叶子节点的路径。",-1),v=n("p",null,"说明: 叶子节点是指没有子节点的节点。",-1),m=n("p",null,[s("示例: "),n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/2021020415161576.png",alt:"257.二叉树的所有路径1"})],-1),b=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),g={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1ZG411G7Dh",target:"_blank",rel:"noopener noreferrer"},f=e(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目要求从根节点到叶子的路径，所以需要前序遍历，这样才方便让父节点指向孩子节点，找到对应的路径。</p><p>在这道题目中将第一次涉及到回溯，因为我们要把路径记录下来，需要回溯来回退一个路径再进入另一个路径。</p><p>前序遍历以及回溯的过程如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204151702443.png" alt="257.二叉树的所有路径"></p><p>我们先使用递归的方式，来做前序遍历。<strong>要知道递归和回溯就是一家的，本题也需要回溯。</strong></p><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><ol><li>递归函数参数以及返回值</li></ol><p>要传入根节点，记录每一条路径的path，和存放结果集的result，这里递归不需要返回值，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void traversal(TreeNode* cur, vector&lt;int&gt;&amp; path, vector&lt;string&gt;&amp; result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>确定递归终止条件</li></ol><p>在写递归的时候都习惯了这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (cur == NULL) {
    终止处理逻辑
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是本题的终止条件这样写会很麻烦，因为本题要找到叶子节点，就开始结束的处理逻辑了（把路径放进result里）。</p><p><strong>那么什么时候算是找到了叶子节点？</strong> 是当 cur不为空，其左右孩子都为空的时候，就找到叶子节点。</p><p>所以本题的终止条件是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (cur-&gt;left == NULL &amp;&amp; cur-&gt;right == NULL) {
    终止处理逻辑
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么没有判断cur是否为空呢，因为下面的逻辑可以控制空节点不入循环。</p><p>再来看一下终止处理的逻辑。</p><p>这里使用<code>vector&lt;int&gt; </code>结构path来记录路径，所以要把<code>vector&lt;int&gt;</code> 结构的path转为string格式，再把这个string 放进 result里。</p><p><strong>那么为什么使用了<code>vector&lt;int&gt;</code> 结构来记录路径呢？</strong> 因为在下面处理单层递归逻辑的时候，要做回溯，使用vector方便来做回溯。</p><p>可能有的同学问了，我看有些人的代码也没有回溯啊。</p><p><strong>其实是有回溯的，只不过隐藏在函数调用时的参数赋值里</strong>，下文我还会提到。</p><p>这里我们先使用<code>vector&lt;int&gt;</code>结构的path容器来记录路径，那么终止处理逻辑如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left == NULL &amp;&amp; cur-&gt;right == NULL) { // 遇到叶子节点
    string sPath;
    for (int i = 0; i &lt; path.size() - 1; i++) { // 将path里记录的路径转为string格式
        sPath += to_string(path[i]);
        sPath += &quot;-&gt;&quot;;
    }
    sPath += to_string(path[path.size() - 1]); // 记录最后一个节点（叶子节点）
    result.push_back(sPath); // 收集一个路径
    return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>确定单层递归逻辑</li></ol><p>因为是前序遍历，需要先处理中间节点，中间节点就是我们要记录路径上的节点，先放进path中。</p><p><code>path.push_back(cur-&gt;val);</code></p><p>然后是递归和回溯的过程，上面说过没有判断cur是否为空，那么在这里递归的时候，如果为空就不进行下一层递归了。</p><p>所以递归前要加上判断语句，下面要递归的节点是否为空，如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (cur-&gt;left) {
    traversal(cur-&gt;left, path, result);
}
if (cur-&gt;right) {
    traversal(cur-&gt;right, path, result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时还没完，递归完，要做回溯啊，因为path 不能一直加入节点，它还要删节点，然后才能加入新的节点。</p><p>那么回溯要怎么回溯呢，一些同学会这么写，如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) {
    traversal(cur-&gt;left, path, result);
}
if (cur-&gt;right) {
    traversal(cur-&gt;right, path, result);
}
path.pop_back();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个回溯就有很大的问题，我们知道，<strong>回溯和递归是一一对应的，有一个递归，就要有一个回溯</strong>，这么写的话相当于把递归和回溯拆开了， 一个在花括号里，一个在花括号外。</p><p><strong>所以回溯要和递归永远在一起，世界上最遥远的距离是你在花括号里，而我在花括号外！</strong></p><p>那么代码应该这么写：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) {
    traversal(cur-&gt;left, path, result);
    path.pop_back(); // 回溯
}
if (cur-&gt;right) {
    traversal(cur-&gt;right, path, result);
    path.pop_back(); // 回溯
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么本题整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
private:

    void traversal(TreeNode* cur, vector&lt;int&gt;&amp; path, vector&lt;string&gt;&amp; result) {
        path.push_back(cur-&gt;val); // 中，中为什么写在这里，因为最后一个节点也要加入到path中 
        // 这才到了叶子节点
        if (cur-&gt;left == NULL &amp;&amp; cur-&gt;right == NULL) {
            string sPath;
            for (int i = 0; i &lt; path.size() - 1; i++) {
                sPath += to_string(path[i]);
                sPath += &quot;-&gt;&quot;;
            }
            sPath += to_string(path[path.size() - 1]);
            result.push_back(sPath);
            return;
        }
        if (cur-&gt;left) { // 左 
            traversal(cur-&gt;left, path, result);
            path.pop_back(); // 回溯
        }
        if (cur-&gt;right) { // 右
            traversal(cur-&gt;right, path, result);
            path.pop_back(); // 回溯
        }
    }

public:
    vector&lt;string&gt; binaryTreePaths(TreeNode* root) {
        vector&lt;string&gt; result;
        vector&lt;int&gt; path;
        if (root == NULL) return result;
        traversal(root, path, result);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上的C++代码充分体现了回溯。</p><p>那么如上代码可以精简成如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:

    void traversal(TreeNode* cur, string path, vector&lt;string&gt;&amp; result) {
        path += to_string(cur-&gt;val); // 中
        if (cur-&gt;left == NULL &amp;&amp; cur-&gt;right == NULL) {
            result.push_back(path);
            return;
        }
        if (cur-&gt;left) traversal(cur-&gt;left, path + &quot;-&gt;&quot;, result); // 左
        if (cur-&gt;right) traversal(cur-&gt;right, path + &quot;-&gt;&quot;, result); // 右
    }

public:
    vector&lt;string&gt; binaryTreePaths(TreeNode* root) {
        vector&lt;string&gt; result;
        string path;
        if (root == NULL) return result;
        traversal(root, path, result);
        return result;

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上代码精简了不少，也隐藏了不少东西。</p><p>注意在函数定义的时候<code>void traversal(TreeNode* cur, string path, vector&lt;string&gt;&amp; result)</code> ，定义的是<code>string path</code>，每次都是复制赋值，不用使用引用，否则就无法做到回溯的效果。（这里涉及到C++语法知识）</p><p>那么在如上代码中，<strong>貌似没有看到回溯的逻辑，其实不然，回溯就隐藏在<code>traversal(cur-&gt;left, path + &quot;-&gt;&quot;, result);</code>中的 <code>path + &quot;-&gt;&quot;</code>。</strong> 每次函数调用完，path依然是没有加上&quot;-&gt;&quot; 的，这就是回溯了。</p><p>为了把这份精简代码的回溯过程展现出来，大家可以试一试把：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) traversal(cur-&gt;left, path + &quot;-&gt;&quot;, result); // 左  回溯就隐藏在这里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改成如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>path += &quot;-&gt;&quot;;
traversal(cur-&gt;left, path, result); // 左
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>即：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) {
    path += &quot;-&gt;&quot;;
    traversal(cur-&gt;left, path, result); // 左
}
if (cur-&gt;right) {
    path += &quot;-&gt;&quot;;
    traversal(cur-&gt;right, path, result); // 右
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就没有回溯了，这个代码就是通过不了的了。</p><p>如果想把回溯加上，就要 在上面代码的基础上，加上回溯，就可以AC了。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) {
    path += &quot;-&gt;&quot;;
    traversal(cur-&gt;left, path, result); // 左
    path.pop_back(); // 回溯 &#39;&gt;&#39;
    path.pop_back(); // 回溯 &#39;-&#39;
}
if (cur-&gt;right) {
    path += &quot;-&gt;&quot;;
    traversal(cur-&gt;right, path, result); // 右
    path.pop_back(); // 回溯 &#39;&gt;&#39; 
    path.pop_back(); //  回溯 &#39;-&#39; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>//版本二
class Solution {
private:
    void traversal(TreeNode* cur, string path, vector&lt;string&gt;&amp; result) {
        path += to_string(cur-&gt;val); // 中，中为什么写在这里，因为最后一个节点也要加入到path中
        if (cur-&gt;left == NULL &amp;&amp; cur-&gt;right == NULL) {
            result.push_back(path);
            return;
        }
        if (cur-&gt;left) {
            path += &quot;-&gt;&quot;;
            traversal(cur-&gt;left, path, result); // 左
            path.pop_back(); // 回溯 &#39;&gt;&#39;
            path.pop_back(); // 回溯 &#39;-&#39;
        }
        if (cur-&gt;right) {
            path += &quot;-&gt;&quot;;
            traversal(cur-&gt;right, path, result); // 右
            path.pop_back(); // 回溯&#39;&gt;&#39;
            path.pop_back(); // 回溯 &#39;-&#39;
        }
    }

public:
    vector&lt;string&gt; binaryTreePaths(TreeNode* root) {
        vector&lt;string&gt; result;
        string path;
        if (root == NULL) return result;
        traversal(root, path, result);
        return result;

    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>大家应该可以感受出来，如果把 <code>path + &quot;-&gt;&quot;</code>作为函数参数就是可以的，因为并没有改变path的数值，执行完递归函数之后，path依然是之前的数值（相当于回溯了）</strong></p><p><strong>综合以上，第二种递归的代码虽然精简但把很多重要的点隐藏在了代码细节里，第一种递归写法虽然代码多一些，但是把每一个逻辑处理都完整的展现出来了。</strong></p><h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h3><p>这里讲解本题解的写法逻辑以及一些更具体的细节，下面的讲解中，涉及到C++语法特性，如果不是C++的录友，就可以不看了，避免越看越晕。</p><p>如果是C++的录友，建议本题独立刷过两遍，再看下面的讲解，同样避免越看越晕，造成不必要的负担。</p><p>在第二版本的代码中，其实仅仅是回溯了 <code>-&gt;</code> 部分（调用两次pop_back，一个pop<code>&gt;</code> 一次pop<code>-</code>），大家应该疑惑那么 <code>path += to_string(cur-&gt;val);</code> 这一步为什么没有回溯呢？ 一条路径能持续加节点 不做回溯吗？</p><p>其实关键还在于 参数，使用的是 <code>string path</code>，这里并没有加上引用<code>&amp;</code> ，即本层递归中，path + 该节点数值，但该层递归结束，上一层path的数值并不会受到任何影响。 如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220831173322.png" alt=""></p><p>节点4 的path，在遍历到节点3，path+3，遍历节点3的递归结束之后，返回节点4（回溯的过程），path并不会把3加上。</p><p>所以这是参数中，不带引用，不做地址拷贝，只做内容拷贝的效果。（这里涉及到C++引用方面的知识）</p><p>在第一个版本中，函数参数我就使用了引用，即 <code>vector&lt;int&gt;&amp; path</code> ，这是会拷贝地址的，所以 本层递归逻辑如果有<code>path.push_back(cur-&gt;val);</code> 就一定要有对应的 <code>path.pop_back()</code></p><p>那有同学可能想，为什么不去定义一个 <code>string&amp; path</code> 这样的函数参数呢，然后也可能在递归函数中展现回溯的过程，但关键在于，<code>path += to_string(cur-&gt;val);</code> 每次是加上一个数字，这个数字如果是个位数，那好说，就调用一次<code>path.pop_back()</code>，但如果是 十位数，百位数，千位数呢？ 百位数就要调用三次<code>path.pop_back()</code>，才能实现对应的回溯操作，这样代码实现就太冗余了。</p><p>所以，第一个代码版本中，我才使用 vector 类型的path，这样方便给大家演示代码中回溯的操作。 vector类型的path，不管 每次 路径收集的数字是几位数，总之一定是int，所以就一次 pop_back就可以。</p><h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3>`,71),y={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},P=e(`<p>这里除了模拟递归需要一个栈，同时还需要一个栈来存放对应的遍历路径。</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;string&gt; binaryTreePaths(TreeNode* root) {
        stack&lt;TreeNode*&gt; treeSt;// 保存树的遍历节点
        stack&lt;string&gt; pathSt;   // 保存遍历路径的节点
        vector&lt;string&gt; result;  // 保存最终路径集合
        if (root == NULL) return result;
        treeSt.push(root);
        pathSt.push(to_string(root-&gt;val));
        while (!treeSt.empty()) {
            TreeNode* node = treeSt.top(); treeSt.pop(); // 取出节点 中
            string path = pathSt.top();pathSt.pop();    // 取出该节点对应的路径
            if (node-&gt;left == NULL &amp;&amp; node-&gt;right == NULL) { // 遇到叶子节点
                result.push_back(path);
            }
            if (node-&gt;right) { // 右
                treeSt.push(node-&gt;right);
                pathSt.push(path + &quot;-&gt;&quot; + to_string(node-&gt;right-&gt;val));
            }
            if (node-&gt;left) { // 左
                treeSt.push(node-&gt;left);
                pathSt.push(path + &quot;-&gt;&quot; + to_string(node-&gt;left-&gt;val));
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，使用java的同学，可以直接定义一个成员变量为object的栈<code>Stack&lt;Object&gt; stack = new Stack&lt;&gt;();</code>，这样就不用定义两个栈了，都放到一个栈里就可以了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>本文我们开始初步涉及到了回溯，很多同学过了这道题目，可能都不知道自己其实使用了回溯，回溯和递归都是相伴相生的。</strong></p><p>我在第一版递归代码中，把递归与回溯的细节都充分的展现了出来，大家可以自己感受一下。</p><p>第二版递归代码对于初学者其实非常不友好，代码看上去简单，但是隐藏细节于无形。</p><p>最后我依然给出了迭代法。</p><p>对于本题充分了解递归与回溯的过程之后，有精力的同学可以再去实现迭代法。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//解法一

//方式一
class Solution {
    /**
     * 递归法
     */
    public List&lt;String&gt; binaryTreePaths(TreeNode root) {
        List&lt;String&gt; res = new ArrayList&lt;&gt;();// 存最终的结果
        if (root == null) {
            return res;
        }
        List&lt;Integer&gt; paths = new ArrayList&lt;&gt;();// 作为结果中的路径
        traversal(root, paths, res);
        return res;
    }

    private void traversal(TreeNode root, List&lt;Integer&gt; paths, List&lt;String&gt; res) {
        paths.add(root.val);// 前序遍历，中
        // 遇到叶子结点
        if (root.left == null &amp;&amp; root.right == null) {
            // 输出
            StringBuilder sb = new StringBuilder();// StringBuilder用来拼接字符串，速度更快
            for (int i = 0; i &lt; paths.size() - 1; i++) {
                sb.append(paths.get(i)).append(&quot;-&gt;&quot;);
            }
            sb.append(paths.get(paths.size() - 1));// 记录最后一个节点
            res.add(sb.toString());// 收集一个路径
            return;
        }
        // 递归和回溯是同时进行，所以要放在同一个花括号里
        if (root.left != null) { // 左
            traversal(root.left, paths, res);
            paths.remove(paths.size() - 1);// 回溯
        }
        if (root.right != null) { // 右
            traversal(root.right, paths, res);
            paths.remove(paths.size() - 1);// 回溯
        }
    }
}

//方式二
class Solution {

    List&lt;String&gt; result = new ArrayList&lt;&gt;();

    public List&lt;String&gt; binaryTreePaths(TreeNode root) {
        deal(root, &quot;&quot;);
        return result;
    }

    public void deal(TreeNode node, String s) {
        if (node == null)
            return;
        if (node.left == null &amp;&amp; node.right == null) {
            result.add(new StringBuilder(s).append(node.val).toString());
            return;
        }
        String tmp = new StringBuilder(s).append(node.val).append(&quot;-&gt;&quot;).toString();
        deal(node.left, tmp);
        deal(node.right, tmp);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 解法二</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 迭代法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 节点和路径同时入栈</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 节点和路径同时出栈</span>
            <span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 若找到叶子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//右子节点不为空</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//左子节点不为空</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h3><p>递归法+回溯</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># Definition for a binary tree node.
class Solution:
    def traversal(self, cur, path, result):
        path.append(cur.val)  # 中
        if not cur.left and not cur.right:  # 到达叶子节点
            sPath = &#39;-&gt;&#39;.join(map(str, path))
            result.append(sPath)
            return
        if cur.left:  # 左
            self.traversal(cur.left, path, result)
            path.pop()  # 回溯
        if cur.right:  # 右
            self.traversal(cur.right, path, result)
            path.pop()  # 回溯

    def binaryTreePaths(self, root):
        result = []
        path = []
        if not root:
            return result
        self.traversal(root, path, result)
        return result


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法+隐形回溯（版本一）</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List, Optional

class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -&gt; List[str]:
        if not root:
            return []
        result = []
        self.traversal(root, [], result)
        return result
    
    def traversal(self, cur: TreeNode, path: List[int], result: List[str]) -&gt; None:
        if not cur:
            return
        path.append(cur.val)
        if not cur.left and not cur.right:
            result.append(&#39;-&gt;&#39;.join(map(str, path)))
        if cur.left:
            self.traversal(cur.left, path[:], result)
        if cur.right:
            self.traversal(cur.right, path[:], result)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法+隐形回溯（版本二）</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode) -&gt; List[str]:
        path = &#39;&#39;
        result = []
        if not root: return result
        self.traversal(root, path, result)
        return result
    
    def traversal(self, cur: TreeNode, path: str, result: List[str]) -&gt; None:
        path += str(cur.val)
        # 若当前节点为leave，直接输出
        if not cur.left and not cur.right:
            result.append(path)

        if cur.left:
            # + &#39;-&gt;&#39; 是隐藏回溯
            self.traversal(cur.left, path + &#39;-&gt;&#39;, result)
        
        if cur.right:
            self.traversal(cur.right, path + &#39;-&gt;&#39;, result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Solution:

    def binaryTreePaths(self, root: TreeNode) -&gt; List[str]:
        # 题目中节点数至少为1
        stack, path_st, result = [root], [str(root.val)], []

        while stack:
            cur = stack.pop()
            path = path_st.pop()
            # 如果当前节点为叶子节点，添加路径到结果中
            if not (cur.left or cur.right):
                result.append(path)
            if cur.right:
                stack.append(cur.right)
                path_st.append(path + &#39;-&gt;&#39; + str(cur.right.val))
            if cur.left:
                stack.append(cur.left)
                path_st.append(path + &#39;-&gt;&#39; + str(cur.left.val))

        return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><p>递归法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> travel <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span>
    travel <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            v <span class="token operator">:=</span> s <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        s <span class="token operator">=</span> s <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">travel</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">travel</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
	stack <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
	paths <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
		paths <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>paths<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		l <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span>
		node <span class="token operator">:=</span> stack<span class="token punctuation">[</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		path <span class="token operator">:=</span> paths<span class="token punctuation">[</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		stack <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token punctuation">:</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		paths <span class="token operator">=</span> paths<span class="token punctuation">[</span><span class="token punctuation">:</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> path<span class="token operator">+</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
			paths <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>paths<span class="token punctuation">,</span> path<span class="token operator">+</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
			paths <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>paths<span class="token punctuation">,</span> path<span class="token operator">+</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><p>递归法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">binaryTreePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//递归遍历+递归三部曲</span>
   <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token comment">//1. 确定递归函数 函数参数</span>
   <span class="token keyword">const</span> <span class="token function-variable function">getPath</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span>curPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//2. 确定终止条件，到叶子节点就终止</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           curPath <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
           res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">return</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token comment">//3. 确定单层递归逻辑</span>
       curPath <span class="token operator">+=</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span><span class="token punctuation">;</span>
       node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token function">getPath</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> curPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
       node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token function">getPath</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> curPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">binaryTreePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">,</span> paths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> path <span class="token operator">=</span> paths<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 到叶子节点终止, 添加路径到结果中</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path <span class="token operator">+</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    path <span class="token operator">+=</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 右节点存在</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      paths<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 左节点存在</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      paths<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><blockquote><p>递归法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> route<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> resArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        route <span class="token operator">+=</span> <span class="token function">String</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> route <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span><span class="token punctuation">,</span> resArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> route <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span><span class="token punctuation">,</span> resArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
    <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> resArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 迭代法2</span>
<span class="token keyword">function</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> helperStack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tempNode<span class="token operator">:</span> TreeNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> routeArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        helperStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        routeArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>helperStack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempNode <span class="token operator">=</span> helperStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> route<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> routeArr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">// tempNode 对应的路径</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tempNode<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            helperStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            routeArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> tempNode<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// tempNode.right 对应的路径</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            helperStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            routeArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> tempNode<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// tempNode.left 对应的路径</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><blockquote><p>递归/回溯</p></blockquote><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">binaryTreePaths</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> root <span class="token operator">=</span> root <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">_binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function-definition function">_binaryTreePaths</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">==</span>  <span class="token nil constant">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> path<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            str<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">path<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">-&gt;&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        str<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">path<span class="token punctuation">.</span>last<span class="token operator">!</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token keyword">left</span> <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span>
        <span class="token function">_binaryTreePaths</span><span class="token punctuation">(</span><span class="token keyword">left</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token keyword">right</span> <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span>
        <span class="token function">_binaryTreePaths</span><span class="token punctuation">(</span><span class="token keyword">right</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代</p></blockquote><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">binaryTreePaths</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> root<span class="token punctuation">:</span> <span class="token class-name">TreeNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> root <span class="token operator">=</span> root <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> stackNode <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">TreeNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    stackNode<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    
    <span class="token keyword">var</span> stackStr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    stackStr<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">root<span class="token punctuation">.</span>val</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    
    <span class="token keyword">while</span> <span class="token operator">!</span>stackNode<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> stackNode<span class="token punctuation">.</span><span class="token function">popLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> stackStr<span class="token punctuation">.</span><span class="token function">popLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
        <span class="token keyword">if</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token keyword">left</span> <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token punctuation">{</span>
            stackNode<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">left</span><span class="token punctuation">)</span>
            stackStr<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">str</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">-&gt;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation"><span class="token keyword">left</span><span class="token punctuation">.</span>val</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token keyword">right</span> <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token punctuation">{</span>
            stackNode<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">right</span><span class="token punctuation">)</span>
            stackStr<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">str</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">-&gt;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation"><span class="token keyword">right</span><span class="token punctuation">.</span>val</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><p>递归:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable<span class="token punctuation">.</span></span>ListBuffer
  <span class="token keyword">def</span> binaryTreePaths<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> traversal<span class="token punctuation">(</span>curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> path<span class="token operator">:</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curNode<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>mkString<span class="token punctuation">(</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// mkString函数: 将数组的所有值按照指定字符串拼接</span>
        <span class="token keyword">return</span> <span class="token comment">// 处理完可以直接return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        traversal<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    traversal<span class="token punctuation">(</span>root<span class="token punctuation">,</span> ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 递归</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">binary_tree_paths</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">recur</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>root<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res
    <span class="token punctuation">}</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">mut</span> path<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        path <span class="token operator">+=</span> <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> r<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">recur</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>left<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">recur</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>right<span class="token punctuation">,</span> path <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public IList&lt;string&gt; BinaryTreePaths(TreeNode root)
{
    List&lt;int&gt; path = new();
    List&lt;string&gt; res = new();
    if (root == null) return res;
    Traversal(root, path, res);
    return res;
}
public void Traversal(TreeNode node, List&lt;int&gt; path, List&lt;string&gt; res)
{
    path.Add(node.val);
    if (node.left == null &amp;&amp; node.right == null)
    {
        string sPath = &quot;&quot;;
        for (int i = 0; i &lt; path.Count - 1; i++)
        {
            sPath += path[i].ToString();
            sPath += &quot;-&gt;&quot;;
        }
        sPath += path[path.Count - 1].ToString();
        res.Add(sPath);
        return;
    }
    if (node.left != null)
    {
        Traversal(node.left, path, res);
        path.RemoveAt(path.Count-1);
    }
    if (node.right != null)
    {
        Traversal(node.right, path, res);
        path.RemoveAt(path.Count-1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function _(N,q){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),t(a)])]),k,v,m,b,n("p",null,[n("strong",null,[n("a",g,[s("《代码随想录》算法视频公开课"),t(a)]),s("：："),n("a",h,[s("递归中带着回溯，你感受到了没？| LeetCode：257. 二叉树的所有路径"),t(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),f,n("p",null,[s("至于非递归的方式，我们可以依然可以使用前序遍历的迭代方式来模拟遍历路径的过程，对该迭代方式不了解的同学，可以看文章"),n("a",y,[s("二叉树：听说递归能做的，栈也能做！"),t(a)]),s("和"),n("a",w,[s("二叉树：前中后序迭代方式统一写法"),t(a)]),s("。")]),P])}const L=p(l,[["render",_],["__file","0257.erchashudesuoyoulujing.html.vue"]]);export{L as default};
