import{_ as e,r as o,o as c,c as i,a as s,b as n,d as t,e as p}from"./app-3RcBQnkC.js";const l={},u=s("h1",{id:"第77题-组合",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第77题-组合","aria-hidden":"true"},"#"),n(" 第77题. 组合")],-1),r={href:"https://leetcode.cn/problems/combinations/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。",-1),d=s("p",null,"示例: 输入: n = 4, k = 2 输出: [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4], ]",-1),v=s("h2",{id:"算法公开课",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),n(" 算法公开课")],-1),m={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1ti4y1L7cv",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1wi4y157er",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题是回溯法的经典题目。</p><p>直接的解法当然是使用for循环，例如示例中k为2，很容易想到 用两个for循环，这样就可以输出 和示例中一样的结果。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int n = 4;
for (int i = 1; i &lt;= n; i++) {
    for (int j = i + 1; j &lt;= n; j++) {
        cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; endl;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入：n = 100, k = 3 那么就三层for循环，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int n = 100;
for (int i = 1; i &lt;= n; i++) {
    for (int j = i + 1; j &lt;= n; j++) {
        for (int u = j + 1; u &lt;= n; n++) {
            cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; &quot; &quot; &lt;&lt; u &lt;&lt; endl;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果n为100，k为50呢，那就50层for循环，是不是开始窒息</strong>。</p><p><strong>此时就会发现虽然想暴力搜索，但是用for循环嵌套连暴力都写不出来！</strong></p><p>咋整？</p><p>回溯搜索法来了，虽然回溯法也是暴力，但至少能写出来，不像for循环嵌套k层让人绝望。</p><p>那么回溯法怎么暴力搜呢？</p><p>上面我们说了<strong>要解决 n为100，k为50的情况，暴力写法需要嵌套50层for循环，那么回溯法就用递归来解决嵌套层数的问题</strong>。</p><p>递归来做层叠嵌套（可以理解是开k层for循环），<strong>每一次的递归中嵌套一个for循环，那么递归就可以用于解决多层嵌套循环的问题了</strong>。</p><p>此时递归的层数大家应该知道了，例如：n为100，k为50的情况下，就是递归50层。</p><p>一些同学本来对递归就懵，回溯法中递归还要嵌套for循环，可能就直接晕倒了！</p><p>如果脑洞模拟回溯搜索的过程，绝对可以让人窒息，所以需要抽象图形结构来进一步理解。</p>`,17),f={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},y=p('<p>那么我把组合问题抽象为如下树形结构：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201123195223940.png" alt="77.组合"></p><p>可以看出这棵树，一开始集合是 1，2，3，4， 从左向右取数，取过的数，不再重复取。</p><p>第一次取1，集合变为2，3，4 ，因为k为2，我们只需要再取一个数就可以了，分别取2，3，4，得到集合[1,2] [1,3] [1,4]，以此类推。</p><p><strong>每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围</strong>。</p><p><strong>图中可以发现n相当于树的宽度，k相当于树的深度</strong>。</p><p>那么如何在这个树上遍历，然后收集到我们要的结果集呢？</p><p><strong>图中每次搜索到了叶子节点，我们就找到了一个结果</strong>。</p><p>相当于只需要把达到叶子节点的结果收集起来，就可以求得 n个数中k个数的组合集合。</p>',9),w={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},x=p(`<h3 id="回溯法三部曲" tabindex="-1"><a class="header-anchor" href="#回溯法三部曲" aria-hidden="true">#</a> 回溯法三部曲</h3><ul><li>递归函数的返回值以及参数</li></ul><p>在这里要定义两个全局变量，一个用来存放符合条件单一结果，一个用来存放符合条件结果的集合。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> result<span class="token punctuation">;</span> <span class="token comment">// 存放符合条件结果的集合</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> path<span class="token punctuation">;</span> <span class="token comment">// 用来存放符合条件结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实不定义这两个全局变量也是可以的，把这两个变量放进递归函数的参数里，但函数里参数太多影响可读性，所以我定义全局变量了。</p><p>函数里一定有两个参数，既然是集合n里面取k个数，那么n和k是两个int型的参数。</p><p>然后还需要一个参数，为int型变量startIndex，这个参数用来记录本层递归的中，集合从哪里开始遍历（集合就是[1,...,n] ）。</p><p>为什么要有这个startIndex呢？</p>`,9),I={href:"https://www.bilibili.com/video/BV1ti4y1L7cv",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>从下图中红线部分可以看出，在集合[1,2,3,4]取1之后，下一层递归，就要在[2,3,4]中取数了，那么下一层递归如何知道从[2,3,4]中取数呢，靠的就是startIndex。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201123195328976.png" alt="77.组合2"></p><p>所以需要startIndex来记录下一层递归，搜索的起始位置。</p><p>那么整体代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> result<span class="token punctuation">;</span> <span class="token comment">// 存放符合条件结果的集合</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> path<span class="token punctuation">;</span> <span class="token comment">// 用来存放符合条件单一结果</span>
<span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回溯函数终止条件</li></ul><p>什么时候到达所谓的叶子节点了呢？</p><p>path这个数组的大小如果达到k，说明我们找到了一个子集大小为k的组合了，在图中path存的就是根节点到叶子节点的路径。</p><p>如图红色部分：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201123195407907.png" alt="77.组合3"></p><p>此时用result二维数组，把path保存起来，并终止本层递归。</p><p>所以终止条件代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单层搜索的过程</li></ul><p>回溯法的搜索过程就是一个树型结构的遍历过程，在如下图中，可以看出for循环用来横向遍历，递归的过程是纵向遍历。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201123195242899.png" alt="77.组合1"></p><p>如此我们才遍历完图中的这棵树。</p><p>for循环每次从startIndex开始遍历，然后用path保存取到的节点i。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>for (int i = startIndex; i &lt;= n; i++) { // 控制树的横向遍历
    path.push_back(i); // 处理节点
    backtracking(n, k, i + 1); // 递归：控制树的纵向遍历，注意下一层搜索要从i+1开始
    path.pop_back(); // 回溯，撤销处理的节点
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出backtracking（递归函数）通过不断调用自己一直往深处遍历，总会遇到叶子节点，遇到了叶子节点就要返回。</p><p>backtracking的下面部分就是回溯的操作了，撤销本次处理的结果。</p><p>关键地方都讲完了，组合问题C++完整代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    vector&lt;vector&lt;int&gt;&gt; result; // 存放符合条件结果的集合
    vector&lt;int&gt; path; // 用来存放符合条件结果
    void backtracking(int n, int k, int startIndex) {
        if (path.size() == k) {
            result.push_back(path);
            return;
        }
        for (int i = startIndex; i &lt;= n; i++) {
            path.push_back(i); // 处理节点
            backtracking(n, k, i + 1); // 递归
            path.pop_back(); // 回溯，撤销处理的节点
        }
    }
public:
    vector&lt;vector&lt;int&gt;&gt; combine(int n, int k) {
        result.clear(); // 可以不写
        path.clear();   // 可以不写
        backtracking(n, k, 1);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n * 2^n)</li><li>空间复杂度: O(n)</li></ul>`,25),L={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},z=p(`<p>如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对比一下本题的代码，是不是发现有点像！</strong> 所以有了这个模板，就有解题的大体方向，不至于毫无头绪。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>组合问题是回溯法解决的经典问题，我们开始的时候给大家列举一个很形象的例子，就是n为100，k为50的话，直接想法就需要50层for循环。</p><p>从而引出了回溯法就是解决这种k层for循环嵌套的问题。</p><p>然后进一步把回溯法的搜索过程抽象为树形结构，可以直观的看出搜索的过程。</p><p>接着用回溯法三部曲，逐步分析了函数参数、终止条件和单层搜索的过程。</p><h2 id="剪枝优化" tabindex="-1"><a class="header-anchor" href="#剪枝优化" aria-hidden="true">#</a> 剪枝优化</h2><p>我们说过，回溯法虽然是暴力搜索，但也有时候可以有点剪枝优化一下的。</p><p>在遍历的过程中有如下代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个遍历的范围是可以剪枝优化的，怎么优化呢？</p><p>来举一个例子，n = 4，k = 4的话，那么第一层for循环的时候，从元素2开始的遍历都没有意义了。 在第二层for循环，从元素3开始的遍历都没有意义了。</p><p>这么说有点抽象，如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210130194335207-20230310134409532.png" alt="77.组合4"></p><p>图中每一个节点（图中为矩形），就代表本层的一个for循环，那么每一层的for循环从第二个数开始遍历的话，都没有意义，都是无效遍历。</p><p><strong>所以，可以剪枝的地方就在递归中每一层的for循环所选择的起始位置</strong>。</p><p><strong>如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了</strong>。</p><p>注意代码中i，就是for循环里选择的起始位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (int i = startIndex; i &lt;= n; i++) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来看一下优化过程如下：</p><ol><li><p>已经选择的元素个数：path.size();</p></li><li><p>还需要的元素个数为: k - path.size();</p></li><li><p>在集合n中至多要从该起始位置 : n - (k - path.size()) + 1，开始遍历</p></li></ol><p>为什么有个+1呢，因为包括起始位置，我们要是一个左闭的集合。</p><p>举个例子，n = 4，k = 3， 目前已经选取的元素为0（path.size为0），n - (k - 0) + 1 即 4 - ( 3 - 0) + 1 = 2。</p><p>从2开始搜索都是合理的，可以是组合[2, 3, 4]。</p><p>这里大家想不懂的话，建议也举一个例子，就知道是不是要+1了。</p><p>所以优化之后的for循环是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (int i = startIndex; i &lt;= n - (k - path.size()) + 1; i++) // i为本次搜索的起始位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优化后整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    vector&lt;vector&lt;int&gt;&gt; result;
    vector&lt;int&gt; path;
    void backtracking(int n, int k, int startIndex) {
        if (path.size() == k) {
            result.push_back(path);
            return;
        }
        for (int i = startIndex; i &lt;= n - (k - path.size()) + 1; i++) { // 优化的地方
            path.push_back(i); // 处理节点
            backtracking(n, k, i + 1);
            path.pop_back(); // 回溯，撤销处理的节点
        }
    }
public:

    vector&lt;vector&lt;int&gt;&gt; combine(int n, int k) {
        backtracking(n, k, 1);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剪枝总结" tabindex="-1"><a class="header-anchor" href="#剪枝总结" aria-hidden="true">#</a> 剪枝总结</h2><p>本篇我们准对求组合问题的回溯法代码做了剪枝优化，这个优化如果不画图的话，其实不好理解，也不好讲清楚。</p><p>所以我依然是把整个回溯过程抽象为一棵树形结构，然后可以直观的看出，剪枝究竟是剪的哪里。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><p>未剪枝优化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> k<span class="token punctuation">,</span><span class="token keyword">int</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span>startIndex<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝优化：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">combineHelper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围，就是要靠startIndex
     * <span class="token keyword">@param</span> <span class="token parameter">startIndex</span> 用来记录本层递归的中，集合从哪里开始遍历（集合就是[1,...,n] ）。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">combineHelper</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//终止条件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">combineHelper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>未剪枝优化</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">combine</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 存放结果集</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 需要优化的地方</span>
            path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment"># 处理节点</span>
            self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 回溯，撤销处理的节点</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝优化：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">combine</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 存放结果集</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 优化的地方</span>
            path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment"># 处理节点</span>
            self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 回溯，撤销处理的节点</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>var (
    path []int
    res  [][]int
)

func combine(n int, k int) [][]int {
    path, res = make([]int, 0, k), make([][]int, 0)
    dfs(n, k, 1)
    return res
}

func dfs(n int, k int, start int) {
    if len(path) == k {  // 说明已经满足了k个数的要求
        tmp := make([]int, k)
        copy(tmp, path)
        res = append(res, tmp)
        return
    }
    for i := start; i &lt;= n; i++ {  // 从start开始，不往回走，避免出现重复组合
        if n - i + 1 &lt; k - len(path) {  // 剪枝
            break
        }
        path = append(path, i)
        dfs(n, k, i+1)
        path = path[:len(path)-1]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><p>剪枝：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function">combineHelper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">combineHelper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> startIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token function">combineHelper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">combine</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> startIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> tempArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempArr<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> tempArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> tempArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            tempArr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    fn backtracking(result: &amp;mut Vec&lt;Vec&lt;i32&gt;&gt;, path: &amp;mut Vec&lt;i32&gt;, n: i32, k: i32, start_index: i32) {
        let len= path.len() as i32;
        if len == k{
            result.push(path.to_vec());
            return;
        }
        for i in start_index..= n {
            path.push(i);
            Self::backtracking(result, path, n, k, i+1);
            path.pop();
        }
    }
    pub fn combine(n: i32, k: i32) -&gt; Vec&lt;Vec&lt;i32&gt;&gt; {
        let mut result = vec![];
        let mut path = vec![];
        Self::backtracking(&amp;mut result, &amp;mut path, n, k, 1);
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝</p><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    fn backtracking(result: &amp;mut Vec&lt;Vec&lt;i32&gt;&gt;, path: &amp;mut Vec&lt;i32&gt;, n: i32, k: i32, start_index: i32) {
        let len= path.len() as i32;
        if len == k{
            result.push(path.to_vec());
            return;
        }
	// 此处剪枝
        for i in start_index..= n - (k - len) + 1 {
            path.push(i);
            Self::backtracking(result, path, n, k, i+1);
            path.pop();
        }
    }
    pub fn combine(n: i32, k: i32) -&gt; Vec&lt;Vec&lt;i32&gt;&gt; {
        let mut result = vec![];
        let mut path = vec![];
        Self::backtracking(&amp;mut result, &amp;mut path, n, k, 1);
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> path<span class="token punctuation">;</span>
<span class="token keyword">int</span> pathTop<span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> ansTop<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span><span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//当path中元素个数为k个时，我们需要将path数组放入ans二维数组中</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>pathTop <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//path数组为我们动态申请，若直接将其地址放入二维数组，path数组中的值会随着我们回溯而逐渐变化</span>
        <span class="token comment">//因此创建新的数组存储path中的值</span>
        <span class="token keyword">int</span><span class="token operator">*</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ans<span class="token punctuation">[</span>ansTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span>n <span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将当前结点放入path数组</span>
        path<span class="token punctuation">[</span>pathTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token comment">//进行递归</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//进行回溯，将数组最上层结点弹出</span>
        pathTop<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//path数组存储符合条件的结果</span>
    path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//ans二维数组存储符合条件的结果数组的集合。（数组足够大，避免极端情况）</span>
    ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pathTop <span class="token operator">=</span> ansTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//回溯算法</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//最后的返回大小为ans数组大小</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ansTop<span class="token punctuation">;</span>
    <span class="token comment">//returnColumnSizes数组存储ans二维数组对应下标中一维数组的长度（都为k）</span>
    <span class="token operator">*</span>returnColumnSizes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>returnSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token operator">*</span>returnSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//返回ans二维数组</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> path<span class="token punctuation">;</span>
<span class="token keyword">int</span> pathTop<span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> ansTop<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span><span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//当path中元素个数为k个时，我们需要将path数组放入ans二维数组中</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>pathTop <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//path数组为我们动态申请，若直接将其地址放入二维数组，path数组中的值会随着我们回溯而逐渐变化</span>
        <span class="token comment">//因此创建新的数组存储path中的值</span>
        <span class="token keyword">int</span><span class="token operator">*</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ans<span class="token punctuation">[</span>ansTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> pathTop<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将当前结点放入path数组</span>
        path<span class="token punctuation">[</span>pathTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token comment">//进行递归</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//进行回溯，将数组最上层结点弹出</span>
        pathTop<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//path数组存储符合条件的结果</span>
    path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//ans二维数组存储符合条件的结果数组的集合。（数组足够大，避免极端情况）</span>
    ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pathTop <span class="token operator">=</span> ansTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//回溯算法</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//最后的返回大小为ans数组大小</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ansTop<span class="token punctuation">;</span>
    <span class="token comment">//returnColumnSizes数组存储ans二维数组对应下标中一维数组的长度（都为k）</span>
    <span class="token operator">*</span>returnColumnSizes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>returnSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token operator">*</span>returnSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//返回ans二维数组</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">combine</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> k<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">func</span> <span class="token function-definition function">backtracking</span><span class="token punctuation">(</span>start<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 结束条件，并收集结果</span>
        <span class="token keyword">if</span> path<span class="token punctuation">.</span>count <span class="token operator">==</span> k <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 单层逻辑</span>
        <span class="token comment">// let end = n</span>
        <span class="token comment">// 剪枝优化</span>
        <span class="token keyword">let</span> end <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">guard</span> start <span class="token operator">&lt;=</span> end <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> start <span class="token operator">...</span> end <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 处理结点</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>start<span class="token punctuation">:</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 递归</span>
            path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 回溯</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">backtracking</span><span class="token punctuation">(</span>start<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>暴力:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span> <span class="token comment">// 导包</span>
  <span class="token keyword">def</span> combine<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存放结果集</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//存放符合条件的结果</span>

    <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> startIndex<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果path的size == k就达到题目要求，添加到结果集，并返回</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> startIndex to <span class="token namespace">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历从startIndex到n</span>
        path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 先把数字添加进去</span>
        backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 进行下一步回溯</span>
        path <span class="token operator">=</span> path<span class="token punctuation">.</span>take<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 回溯完再删除掉刚刚添加的数字</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 执行回溯</span>
    result<span class="token punctuation">.</span>toList <span class="token comment">// 最终返回result的List形式，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span> <span class="token comment">// 导包</span>
  <span class="token keyword">def</span> combine<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存放结果集</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//存放符合条件的结果</span>

    <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> startIndex<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果path的size == k就达到题目要求，添加到结果集，并返回</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 剪枝优化</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> startIndex to <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 先把数字添加进去</span>
        backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 进行下一步回溯</span>
        path <span class="token operator">=</span> path<span class="token punctuation">.</span>take<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 回溯完再删除掉刚刚添加的数字</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 执行回溯</span>
    result<span class="token punctuation">.</span>toList <span class="token comment">// 最终返回result的List形式，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">combine</span></span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  backtracking<span class="token punctuation">(</span>result<span class="token punctuation">,</span> path<span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token keyword">end</span>

<span class="token comment">#剪枝优化</span>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">backtracking</span></span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> path<span class="token punctuation">,</span> n<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token keyword">if</span> path<span class="token punctuation">.</span>size <span class="token operator">==</span> k
    result <span class="token operator">&lt;&lt;</span> path<span class="token punctuation">.</span>map <span class="token punctuation">{</span><span class="token operator">|</span>item<span class="token operator">|</span> item<span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token keyword">end</span>

  <span class="token keyword">for</span> i <span class="token keyword">in</span> j<span class="token operator">..</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token comment">#处理节点</span>
    path <span class="token operator">&lt;&lt;</span> i
    backtracking<span class="token punctuation">(</span>result<span class="token punctuation">,</span> path<span class="token punctuation">,</span> n<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token comment">#回溯，撤销处理过的节点</span>
    path<span class="token punctuation">.</span>pop
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 暴力
public class Solution
{
    public IList&lt;IList&lt;int&gt;&gt; res = new List&lt;IList&lt;int&gt;&gt;();
    public IList&lt;int&gt; path = new List&lt;int&gt;();
    public IList&lt;IList&lt;int&gt;&gt; Combine(int n, int k)
    {
        BackTracking(n, k, 1);
        return res;
    }
    public void BackTracking(int n, int k, int start)
    {
        if (path.Count == k)
        {
            res.Add(new List&lt;int&gt;(path));
            return;
        }
        for (int i = start; i &lt;= n; i++)
        {
            path.Add(i);
            BackTracking(n, k, i + 1);
            path.RemoveAt(path.Count - 1);
        }
    }
}
// 剪枝
public class Solution
{
    public IList&lt;IList&lt;int&gt;&gt; res = new List&lt;IList&lt;int&gt;&gt;();
    public IList&lt;int&gt; path = new List&lt;int&gt;();
    public IList&lt;IList&lt;int&gt;&gt; Combine(int n, int k)
    {
        BackTracking(n, k, 1);
        return res;
    }
    public void BackTracking(int n, int k, int start)
    {
        if (path.Count == k)
        {
            res.Add(new List&lt;int&gt;(path));
            return;
        }
        for (int i = start; i &lt;= n - (k - path.Count) + 1; i++)
        {
            path.Add(i);
            BackTracking(n, k, i + 1);
            path.RemoveAt(path.Count - 1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71);function A(j,C){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,s("p",null,[s("a",r,[n("力扣题目链接"),t(a)])]),k,d,v,s("p",null,[s("strong",null,[s("a",m,[n("《代码随想录》算法视频公开课"),t(a)]),n("："),s("a",b,[n("带你学透回溯算法-组合问题（对应力扣题目：77.组合）"),t(a)]),n("，"),s("a",h,[n("组合问题的剪枝操作"),t(a)]),n("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),n("。")]),g,s("p",null,[s("strong",null,[n("我们在"),s("a",f,[n("关于回溯算法，你该了解这些！"),t(a)]),n("中说到回溯法解决的问题都可以抽象为树形结构（N叉树），用树形结构来理解回溯就容易多了")]),n("。")]),y,s("p",null,[n("在"),s("a",w,[n("关于回溯算法，你该了解这些！"),t(a)]),n("中我们提到了回溯法三部曲，那么我们按照回溯法三部曲开始正式讲解代码了。")]),x,s("p",null,[s("strong",null,[n("建议在"),s("a",I,[n("77.组合视频讲解"),t(a)]),n("中，07:36的时候开始听，startIndex 就是防止出现重复的组合")]),n("。")]),_,s("p",null,[n("还记得我们在"),s("a",L,[n("关于回溯算法，你该了解这些！"),t(a)]),n("中给出的回溯法模板么？")]),z])}const S=e(l,[["render",A],["__file","0077.zuhe.html.vue"]]);export{S as default};
