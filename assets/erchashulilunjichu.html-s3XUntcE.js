import{_ as p,r as t,o,c as l,a as n,b as s,d as e,e as c}from"./app-3RcBQnkC.js";const i={},r=n("h1",{id:"二叉树理论基础篇",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树理论基础篇","aria-hidden":"true"},"#"),s(" 二叉树理论基础篇")],-1),d=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),u={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.bilibili.com/video/BV1Hy4y1t7ij",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="题目分类" tabindex="-1"><a class="header-anchor" href="#题目分类" aria-hidden="true">#</a> 题目分类</h2><p>题目分类大纲如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210219190809451.png" alt="img"></p><p>说到二叉树，大家对于二叉树其实都很熟悉了，本文呢我也不想教科书式的把二叉树的基础内容再啰嗦一遍，所以以下我讲的都是一些比较重点的内容。</p><p>相信只要耐心看完，都会有所收获。</p><h2 id="二叉树的种类" tabindex="-1"><a class="header-anchor" href="#二叉树的种类" aria-hidden="true">#</a> 二叉树的种类</h2><p>在我们解题过程中二叉树有两种主要的形式：满二叉树和完全二叉树。</p><h3 id="满二叉树" tabindex="-1"><a class="header-anchor" href="#满二叉树" aria-hidden="true">#</a> 满二叉树</h3><p>满二叉树：如果一棵二叉树只有度为0的结点和度为2的结点，并且度为0的结点在同一层上，则这棵二叉树为满二叉树。</p><p>如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806185805576.png" alt="img"></p><p>这棵二叉树为满二叉树，也可以说深度为k，有2^k-1个节点的二叉树。</p><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h3><p>什么是完全二叉树？</p><p>完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（h从1开始），则该层包含 1~ 2^(h-1) 个节点。</p><p><strong>大家要自己看完全二叉树的定义，很多同学对完全二叉树其实不是真正的懂了。</strong></p><p>我来举一个典型的例子如题：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200920221638903.png" alt="img"></p><p>相信不少同学最后一个二叉树是不是完全二叉树都中招了。</p><p><strong>之前我们刚刚讲过优先级队列其实是一个堆，堆就是一棵完全二叉树，同时保证父子节点的顺序关系。</strong></p><h3 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h3><p>前面介绍的树，都没有数值的，而二叉搜索树是有数值的了，<strong>二叉搜索树是一个有序树</strong>。</p><ul><li>若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；</li><li>若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；</li><li>它的左、右子树也分别为二叉排序树</li></ul><p>下面这两棵树都是搜索树</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806190304693.png" alt="img"></p><h3 id="平衡二叉搜索树" tabindex="-1"><a class="header-anchor" href="#平衡二叉搜索树" aria-hidden="true">#</a> 平衡二叉搜索树</h3><p>平衡二叉搜索树：又被称为AVL（Adelson-Velsky and Landis）树，且具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806190511967.png" alt="img"></p><p>最后一棵 不是平衡二叉树，因为它的左右两个子树的高度差的绝对值超过了1。</p><p><strong>C++中map、set、multimap，multiset的底层实现都是平衡二叉搜索树</strong>，所以map、set的增删操作时间时间复杂度是logn，注意我这里没有说unordered_map、unordered_set，unordered_map、unordered_set底层实现是哈希表。</p><p><strong>所以大家使用自己熟悉的编程语言写算法，一定要知道常用的容器底层都是如何实现的，最基本的就是map、set等等，否则自己写的代码，自己对其性能分析都分析不清楚！</strong></p><h2 id="二叉树的存储方式" tabindex="-1"><a class="header-anchor" href="#二叉树的存储方式" aria-hidden="true">#</a> 二叉树的存储方式</h2><p><strong>二叉树可以链式存储，也可以顺序存储。</strong></p><p>那么链式存储方式就用指针， 顺序存储的方式就是用数组。</p><p>顾名思义就是顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。</p><p>链式存储如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2020092019554618.png" alt="img"></p><p>链式存储是大家很熟悉的一种方式，那么我们来看看如何顺序存储呢？</p><p>其实就是用数组来存储二叉树，顺序存储的方式如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200920200429452.png" alt="img"></p><p>用数组来存储二叉树如何遍历的呢？</p><p><strong>如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。</strong></p><p>但是用链式表示的二叉树，更有利于我们理解，所以一般我们都是用链式存储二叉树。</p><p><strong>所以大家要了解，用数组依然可以表示二叉树。</strong></p><h2 id="二叉树的遍历方式" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历方式" aria-hidden="true">#</a> 二叉树的遍历方式</h2><p>关于二叉树的遍历方式，要知道二叉树遍历的基本方式都有哪些。</p><p>一些同学用做了很多二叉树的题目了，可能知道前中后序遍历，可能知道层序遍历，但是却没有框架。</p><p>我这里把二叉树的几种遍历方式列出来，大家就可以一一串起来了。</p><p>二叉树主要有两种遍历方式：</p><ol><li>深度优先遍历：先往深走，遇到叶子节点再往回走。</li><li>广度优先遍历：一层一层的去遍历。</li></ol><p><strong>这两种遍历是图论中最基本的两种遍历方式</strong>，后面在介绍图论的时候 还会介绍到。</p><p>那么从深度优先遍历和广度优先遍历进一步拓展，才有如下遍历方式：</p><ul><li>深度优先遍历 <ul><li>前序遍历（递归法，迭代法）</li><li>中序遍历（递归法，迭代法）</li><li>后序遍历（递归法，迭代法）</li></ul></li><li>广度优先遍历 <ul><li>层次遍历（迭代法）</li></ul></li></ul><p>在深度优先遍历中：有三个顺序，前中后序遍历， 有同学总分不清这三个顺序，经常搞混，我这里教大家一个技巧。</p><p><strong>这里前中后，其实指的就是中间节点的遍历顺序</strong>，只要大家记住 前中后序指的就是中间节点的位置就可以了。</p><p>看如下中间节点的顺序，就可以发现，中间节点的顺序就是所谓的遍历方式</p><ul><li>前序遍历：中左右</li><li>中序遍历：左中右</li><li>后序遍历：左右中</li></ul><p>大家可以对着如下图，看看自己理解的前后中序有没有问题。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806191109896.png" alt="img"></p><p>最后再说一说二叉树中深度优先和广度优先遍历实现方式，我们做二叉树相关题目，经常会使用递归的方式来实现深度优先遍历，也就是实现前中后序遍历，使用递归是比较方便的。</p><p><strong>之前我们讲栈与队列的时候，就说过栈其实就是递归的一种实现结构</strong>，也就说前中后序遍历的逻辑其实都是可以借助栈使用递归的方式来实现的。</p><p>而广度优先遍历的实现一般使用队列来实现，这也是队列先进先出的特点所决定的，因为需要先进先出的结构，才能一层一层的来遍历二叉树。</p><p><strong>这里其实我们又了解了栈与队列的一个应用场景了。</strong></p><p>具体的实现我们后面都会讲的，这里大家先要清楚这些理论基础。</p><h2 id="二叉树的定义" tabindex="-1"><a class="header-anchor" href="#二叉树的定义" aria-hidden="true">#</a> 二叉树的定义</h2><p>刚刚我们说过了二叉树有两种存储方式顺序存储，和链式存储，顺序存储就是用数组来存，这个定义没啥可说的，我们来看看链式存储的二叉树节点的定义方式。</p><p>C++代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    TreeNode <span class="token operator">*</span>left<span class="token punctuation">;</span>
    TreeNode <span class="token operator">*</span>right<span class="token punctuation">;</span>
    <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">val</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">right</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家会发现二叉树的定义 和链表是差不多的，相对于链表 ，二叉树的节点里多了一个指针， 有两个指针，指向左右孩子。</p><p>这里要提醒大家要注意二叉树节点定义的书写方式。</p><p><strong>在现场面试的时候 面试官可能要求手写代码，所以数据结构的定义以及简单逻辑的代码一定要锻炼白纸写出来。</strong></p><p>因为我们在刷leetcode的时候，节点的定义默认都定义好了，真到面试的时候，需要自己写节点定义的时候，有时候会一脸懵逼！</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>二叉树是一种基础数据结构，在算法面试中都是常客，也是众多数据结构的基石。</p><p>本篇我们介绍了二叉树的种类、存储方式、遍历方式以及定义，比较全面的介绍了二叉树各个方面的重点，帮助大家扫一遍基础。</p><p><strong>说到二叉树，就不得不说递归，很多同学对递归都是又熟悉又陌生，递归的代码一般很简短，但每次都是一看就会，一写就废。</strong></p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> right<span class="token punctuation">;</span>

    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> left<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">,</span> left <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Val <span class="token builtin">int</span>
    Left <span class="token operator">*</span>TreeNode
    Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> left<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> right<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> left<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> right<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-Swift line-numbers-mode" data-ext="Swift"><pre class="language-Swift"><code>class TreeNode&lt;T&gt; {
    var value: T
    var left: TreeNode?
    var right: TreeNode?
    init(_ value: T,
         left: TreeNode? = nil,
         right: TreeNode? = nil) {
        self.value = value
        self.left = left
        self.right = right
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">class</span> TreeNode<span class="token punctuation">(</span>_value<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> _left<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> _right<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> value<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> _value
  <span class="token keyword">var</span> left<span class="token operator">:</span> TreeNode <span class="token operator">=</span> _left
  <span class="token keyword">var</span> right<span class="token operator">:</span> TreeNode <span class="token operator">=</span> _right
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug, PartialEq, Eq)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">TreeNode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> val<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> left<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> right<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token class-name">TreeNode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token attribute attr-name">#[inline]</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>val<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
            val<span class="token punctuation">,</span>
            left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
            right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94);function h(m,g){const a=t("ExternalLinkIcon");return o(),l("div",null,[r,d,n("p",null,[n("strong",null,[n("a",u,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",k,[s("关于二叉树，你该了解这些！"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),v])}const f=p(i,[["render",h],["__file","erchashulilunjichu.html.vue"]]);export{f as default};
