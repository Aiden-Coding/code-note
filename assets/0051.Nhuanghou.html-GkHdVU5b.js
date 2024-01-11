import{_ as e,r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_51-n皇后",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_51-n皇后","aria-hidden":"true"},"#"),s(" 51. N皇后")],-1),r={href:"https://leetcode.cn/problems/n-queens/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。</p><p>给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。</p><p>每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 &#39;Q&#39; 和 &#39;.&#39; 分别代表了皇后和空位。</p><p>示例 1：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211020232201.png" alt=""></p><ul><li>输入：n = 4</li><li>输出：[[&quot;.Q..&quot;,&quot;...Q&quot;,&quot;Q...&quot;,&quot;..Q.&quot;],[&quot;..Q.&quot;,&quot;Q...&quot;,&quot;...Q&quot;,&quot;.Q..&quot;]]</li><li>解释：如上图所示，4 皇后问题存在两个不同的解法。</li></ul><p>示例 2：</p><ul><li>输入：n = 1</li><li>输出：[[&quot;Q&quot;]]</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',9),d={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1Rd4y1c7Bq/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>都知道n皇后问题是回溯算法解决的经典问题，但是用回溯解决多了组合、切割、子集、排列问题之后，遇到这种二维矩阵还会有点不知所措。</p><p>首先来看一下皇后们的约束条件：</p><ol><li>不能同行</li><li>不能同列</li><li>不能同斜线</li></ol><p>确定完约束条件，来看看究竟要怎么去搜索皇后们的位置，其实搜索皇后的位置，可以抽象为一棵树。</p><p>下面我用一个 3 * 3 的棋盘，将搜索过程抽象为一棵树，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210130182532303.jpg" alt="51.N皇后"></p><p>从图中，可以看出，二维矩阵中矩阵的高就是这棵树的高度，矩阵的宽就是树形结构中每一个节点的宽度。</p><p>那么我们用皇后们的约束条件，来回溯搜索这棵树，<strong>只要搜索到了树的叶子节点，说明就找到了皇后们的合理位置了</strong>。</p><h3 id="回溯三部曲" tabindex="-1"><a class="header-anchor" href="#回溯三部曲" aria-hidden="true">#</a> 回溯三部曲</h3><p>按照我总结的如下回溯模板，我们来依次分析：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void backtracking(参数) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>递归函数参数</li></ul><p>我依然是定义全局变量二维数组result来记录最终结果。</p><p>参数n是棋盘的大小，然后用row来记录当前遍历到棋盘的第几层了。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;&gt;</span> result<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token operator">&amp;</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>递归终止条件</li></ul><p>在如下树形结构中： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210130182532303-20230310122134167.jpg" alt="51.N皇后"></p><p>可以看出，当递归到棋盘最底层（也就是叶子节点）的时候，就可以收集结果并返回了。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>chessboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单层搜索的逻辑</li></ul><p>递归深度就是row控制棋盘的行，每一层里for循环的col控制棋盘的列，一行一列，确定了放置皇后的位置。</p><p>每次都是要从新的一行的起始位置开始搜，所以都是从0开始。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> chessboard<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 验证合法就可以放</span>
        chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 放置皇后</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
        chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 回溯，撤销皇后</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证棋盘是否合法</li></ul><p>按照如下标准去重：</p><ol><li>不能同行</li><li>不能同列</li><li>不能同斜线 （45度和135度角）</li></ol><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>bool isValid(int row, int col, vector&lt;string&gt;&amp; chessboard, int n) {
    // 检查列
    for (int i = 0; i &lt; row; i++) { // 这是一个剪枝
        if (chessboard[i][col] == &#39;Q&#39;) {
            return false;
        }
    }
    // 检查 45度角是否有皇后
    for (int i = row - 1, j = col - 1; i &gt;=0 &amp;&amp; j &gt;= 0; i--, j--) {
        if (chessboard[i][j] == &#39;Q&#39;) {
            return false;
        }
    }
    // 检查 135度角是否有皇后
    for(int i = row - 1, j = col + 1; i &gt;= 0 &amp;&amp; j &lt; n; i--, j++) {
        if (chessboard[i][j] == &#39;Q&#39;) {
            return false;
        }
    }
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这份代码中，细心的同学可以发现为什么没有在同行进行检查呢？</p><p>因为在单层搜索的过程中，每一层递归，只会选for循环（也就是同一行）里的一个元素，所以不用去重了。</p><p>那么按照这个模板不难写出如下C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
vector&lt;vector&lt;string&gt;&gt; result;
// n 为输入的棋盘大小
// row 是当前递归到棋盘的第几行了
void backtracking(int n, int row, vector&lt;string&gt;&amp; chessboard) {
    if (row == n) {
        result.push_back(chessboard);
        return;
    }
    for (int col = 0; col &lt; n; col++) {
        if (isValid(row, col, chessboard, n)) { // 验证合法就可以放
            chessboard[row][col] = &#39;Q&#39;; // 放置皇后
            backtracking(n, row + 1, chessboard);
            chessboard[row][col] = &#39;.&#39;; // 回溯，撤销皇后
        }
    }
}
bool isValid(int row, int col, vector&lt;string&gt;&amp; chessboard, int n) {
    // 检查列
    for (int i = 0; i &lt; row; i++) { // 这是一个剪枝
        if (chessboard[i][col] == &#39;Q&#39;) {
            return false;
        }
    }
    // 检查 45度角是否有皇后
    for (int i = row - 1, j = col - 1; i &gt;=0 &amp;&amp; j &gt;= 0; i--, j--) {
        if (chessboard[i][j] == &#39;Q&#39;) {
            return false;
        }
    }
    // 检查 135度角是否有皇后
    for(int i = row - 1, j = col + 1; i &gt;= 0 &amp;&amp; j &lt; n; i--, j++) {
        if (chessboard[i][j] == &#39;Q&#39;) {
            return false;
        }
    }
    return true;
}
public:
    vector&lt;vector&lt;string&gt;&gt; solveNQueens(int n) {
        result.clear();
        std::vector&lt;std::string&gt; chessboard(n, std::string(n, &#39;.&#39;));
        backtracking(n, 0, chessboard);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n!)</li><li>空间复杂度: O(n)</li></ul><p>可以看出，除了验证棋盘合法性的代码，省下来部分就是按照回溯法模板来的。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本题是我们解决棋盘问题的第一道题目。</p><p>如果从来没有接触过N皇后问题的同学看着这样的题会感觉无从下手，可能知道要用回溯法，但也不知道该怎么去搜。</p><p><strong>这里我明确给出了棋盘的宽度就是for循环的长度，递归的深度就是棋盘的高度，这样就可以套进回溯法的模板里了</strong>。</p><p>大家可以在仔细体会体会！</p><h2 id="其他语言补充" tabindex="-1"><a class="header-anchor" href="#其他语言补充" aria-hidden="true">#</a> 其他语言补充</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">:</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">backTrack</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">backTrack</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Array2List</span><span class="token punctuation">(</span>chessboard<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> n<span class="token punctuation">,</span> chessboard<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">;</span>
                <span class="token function">backTrack</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
                chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token class-name">Array2List</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">:</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">copyValueOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查列</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>row<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 相当于剪枝</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 检查45度对角线</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">=</span>col<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 检查135度对角线</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">=</span>col<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;=</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 方法2：使用boolean数组表示已经占用的直(斜)线</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> usedCol<span class="token punctuation">,</span> usedDiag45<span class="token punctuation">,</span> usedDiag135<span class="token punctuation">;</span>    <span class="token comment">// boolean数组中的每个元素代表一条直(斜)线</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        usedCol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>                  <span class="token comment">// 列方向的直线条数为 n</span>
        usedDiag45 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>       <span class="token comment">// 45°方向的斜线条数为 2 * n - 1</span>
        usedDiag135 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">// 135°方向的斜线条数为 2 * n - 1</span>
		<span class="token comment">//用于收集结果, 元素的index表示棋盘的row，元素的value代表棋盘的column</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">backTracking</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">backTracking</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//收集结果</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> board<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>usedCol<span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">|</span> usedDiag45<span class="token punctuation">[</span>row <span class="token operator">+</span> col<span class="token punctuation">]</span> <span class="token operator">|</span> usedDiag135<span class="token punctuation">[</span>row <span class="token operator">-</span> col <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            board<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> col<span class="token punctuation">;</span>
			<span class="token comment">// 标记该列出现过</span>
            usedCol<span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token comment">// 同一45°斜线上元素的row + col为定值, 且各不相同</span>
            usedDiag45<span class="token punctuation">[</span>row <span class="token operator">+</span> col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token comment">// 同一135°斜线上元素row - col为定值, 且各不相同</span>
			<span class="token comment">// row - col 值有正有负, 加 n - 1 是为了对齐零点</span>
            usedDiag135<span class="token punctuation">[</span>row <span class="token operator">-</span> col <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token comment">// 递归</span>
            <span class="token function">backTracking</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> n<span class="token punctuation">,</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            usedCol<span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            usedDiag45<span class="token punctuation">[</span>row <span class="token operator">+</span> col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            usedDiag135<span class="token punctuation">[</span>row <span class="token operator">-</span> col <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 存储最终结果的二维字符串数组</span>

        chessboard <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;.&#39;</span> <span class="token operator">*</span> n <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 初始化棋盘</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">,</span> result<span class="token punctuation">)</span>  <span class="token comment"># 回溯求解</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token keyword">for</span> row <span class="token keyword">in</span> solution<span class="token punctuation">]</span> <span class="token keyword">for</span> solution <span class="token keyword">in</span> result<span class="token punctuation">]</span>  <span class="token comment"># 返回结果集</span>

    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> row <span class="token operator">==</span> n<span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>chessboard<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 棋盘填满，将当前解加入结果集</span>
            <span class="token keyword">return</span>

        <span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>isValid<span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> chessboard<span class="token punctuation">)</span><span class="token punctuation">:</span>
                chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span>col<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;Q&#39;</span> <span class="token operator">+</span> chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># 放置皇后</span>
                self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>n<span class="token punctuation">,</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">,</span> result<span class="token punctuation">)</span>  <span class="token comment"># 递归到下一行</span>
                chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span>col<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">+</span> chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># 回溯，撤销当前位置的皇后</span>

    <span class="token keyword">def</span> <span class="token function">isValid</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> chessboard<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token comment"># 检查列</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>  <span class="token comment"># 当前列已经存在皇后，不合法</span>

        <span class="token comment"># 检查 45 度角是否有皇后</span>
        i<span class="token punctuation">,</span> j <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> col <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>  <span class="token comment"># 左上方向已经存在皇后，不合法</span>
            i <span class="token operator">-=</span> <span class="token number">1</span>
            j <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token comment"># 检查 135 度角是否有皇后</span>
        i<span class="token punctuation">,</span> j <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> col <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> j <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>chessboard<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>  <span class="token comment"># 右上方向已经存在皇后，不合法</span>
            i <span class="token operator">-=</span> <span class="token number">1</span>
            j <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">return</span> <span class="token boolean">True</span>  <span class="token comment"># 当前位置合法</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func solveNQueens(n int) [][]string {
    var res [][]string
	chessboard := make([][]string, n)
	for i := 0; i &lt; n; i++ {
		chessboard[i] = make([]string, n)
	}
	for i := 0; i &lt; n; i++ {
		for j := 0; j &lt; n; j++ {
			chessboard[i][j] = &quot;.&quot;
		}
	}
	var backtrack func(int)
	backtrack = func(row int) {
		if row == n {
			temp := make([]string, n)
			for i, rowStr := range chessboard {
				temp[i] = strings.Join(rowStr, &quot;&quot;)
			}
			res = append(res, temp)
			return
		}
		for i := 0; i &lt; n; i++ {
			if isValid(n, row, i, chessboard) {
				chessboard[row][i] = &quot;Q&quot;
				backtrack(row + 1)
				chessboard[row][i] = &quot;.&quot;
			}
		}
	}
	backtrack(0)
	return res
}

func isValid(n, row, col int, chessboard [][]string) bool {
	for i := 0; i &lt; row; i++ {
		if chessboard[i][col] == &quot;Q&quot; {
			return false
		}
	}
	for i, j := row-1, col-1; i &gt;= 0 &amp;&amp; j &gt;= 0; i, j = i-1, j-1 {
		if chessboard[i][j] == &quot;Q&quot; {
			return false
		}
	}
	for i, j := row-1, col+1; i &gt;= 0 &amp;&amp; j &lt; n; i, j = i-1, j+1 {
		if chessboard[i][j] == &quot;Q&quot; {
			return false
		}
	}
	return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	const ans = [];
	const path = [];
	const matrix = new Array(n).fill(0).map(() =&gt; new Array(n).fill(&quot;.&quot;));
	// 判断是否能相互攻击
	const canAttack = (matrix, row, col) =&gt; {
		let i;
		let j;
		// 判断正上方和正下方是否有皇后
		for (i = 0, j = col; i &lt; n; i++) {
			if (matrix[i][j] === &quot;Q&quot;) {
				return true;
			}
		}
		// 判断正左边和正右边是否有皇后
		for (i = row, j = 0; j &lt; n; j++) {
			if (matrix[i][j] === &quot;Q&quot;) {
				return true;
			}
		}
		// 判断左上方是否有皇后
		for (i = row - 1, j = col - 1; i &gt;= 0 &amp;&amp; j &gt;= 0; i--, j--) {
			if (matrix[i][j] === &quot;Q&quot;) {
				return true;
			}
		}
         // 判断右上方是否有皇后
		for (i = row - 1, j = col + 1; i &gt;= 0 &amp;&amp; j &lt; n; i--, j++) {
			if (matrix[i][j] === &quot;Q&quot;) {
				return true;
			}
		}
		return false;
	};
	const backtrack = (matrix, row, col) =&gt; {
		if (path.length === matrix.length) {
			ans.push(path.slice());
			return;
		}
		for (let i = row; i &lt; matrix.length; i++) {
			for (let j = col; j &lt; matrix.length; j++) {
				// 当前位置会导致互相攻击 继续下一轮搜索
				if (canAttack(matrix, i, j)) {
					continue;
				}
				matrix[i][j] = &quot;Q&quot;;
				path.push(matrix[i].join(&quot;&quot;));
				// 另起一行搜索 同一行只能有一个皇后
				backtrack(matrix, i + 1, 0);
				matrix[i][j] = &quot;.&quot;;
				path.pop();
			}
		}
	};
	backtrack(matrix, 0, 0);
	return ans;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowNum<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rowNum <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">transformBoard</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> rowNum<span class="token punctuation">,</span> board<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                board<span class="token punctuation">[</span>rowNum<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">;</span>
                <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> rowNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">;</span>
                board<span class="token punctuation">[</span>rowNum<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span>col<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>col <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> col <span class="token operator">&gt;=</span> n <span class="token operator">||</span> row <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> row <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// 检查列</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token keyword">of</span> board<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 检查45度方向</span>
    <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> col<span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> row<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>y<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 检查135度方向</span>
    x <span class="token operator">=</span> col<span class="token punctuation">;</span>
    y <span class="token operator">=</span> row<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>y<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">transformBoard</span><span class="token punctuation">(</span>board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token keyword">of</span> board<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">solveNQueens</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 棋盘，使用Character的二维数组，以便于更新元素</span>
    <span class="token keyword">var</span> chessboard <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;.&quot;</span></span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> n<span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> n<span class="token punctuation">)</span>
    <span class="token comment">// 检查棋盘是否符合N皇后</span>
    <span class="token keyword">func</span> <span class="token function-definition function">isVaild</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查列</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> row <span class="token punctuation">{</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;Q&quot;</span></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">:</span> <span class="token class-name">Int</span>
        <span class="token comment">// 检查45度</span>
        i <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span>
        j <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;Q&quot;</span></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
            i <span class="token operator">-=</span> <span class="token number">1</span>
            j <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 检查135度</span>
        i <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span>
        j <span class="token operator">=</span> col <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
            <span class="token keyword">if</span> chessboard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;Q&quot;</span></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
            i <span class="token operator">-=</span> <span class="token number">1</span>
            j <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">func</span> <span class="token function-definition function">backtracking</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> row <span class="token operator">==</span> n <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>chessboard<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> n <span class="token punctuation">{</span>
            <span class="token keyword">guard</span> <span class="token function">isVaild</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> row<span class="token punctuation">,</span> col<span class="token punctuation">:</span> col<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
            chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Q&quot;</span></span> <span class="token comment">// 放置皇后</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            chessboard<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;.&quot;</span></span> <span class="token comment">// 回溯</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    fn is_valid(row: usize, col: usize, chessboard: &amp;mut Vec&lt;Vec&lt;char&gt;&gt;, n: usize) -&gt; bool {
        let mut i = 0 as usize;
        while i &lt; row { 
            if chessboard[i][col] == &#39;Q&#39; { return false; }
            i += 1;
        }
        let (mut i, mut j) = (row as i32 - 1, col as i32 - 1);
        while i &gt;= 0 &amp;&amp; j &gt;= 0 {
            if chessboard[i as usize][j as usize] == &#39;Q&#39; { return false; }
            i -= 1;
            j -= 1;
        }
        let (mut i, mut j) = (row as i32 - 1, col as i32 + 1);
        while i &gt;= 0 &amp;&amp; j &lt; n as i32 {
            if chessboard[i as usize][j as usize] == &#39;Q&#39; { return false; }
            i -= 1;
            j += 1;
        }
        return true;
    }
    fn backtracking(result: &amp;mut Vec&lt;Vec&lt;String&gt;&gt;, n: usize, row: usize, chessboard: &amp;mut Vec&lt;Vec&lt;char&gt;&gt;) {
        if row == n {
            let mut chessboard_clone: Vec&lt;String&gt; = Vec::new();
            for i in chessboard {
                chessboard_clone.push(i.iter().collect::&lt;String&gt;());
            }
            result.push(chessboard_clone);
            return;
        }
        for col in 0..n {
            if Self::is_valid(row, col, chessboard, n) {
                chessboard[row][col] = &#39;Q&#39;;
                Self::backtracking(result, n, row + 1, chessboard);
                chessboard[row][col] = &#39;.&#39;;
            }
        }
    }
    pub fn solve_n_queens(n: i32) -&gt; Vec&lt;Vec&lt;String&gt;&gt; {
        let mut result: Vec&lt;Vec&lt;String&gt;&gt; = Vec::new();
        let mut chessboard: Vec&lt;Vec&lt;char&gt;&gt; = vec![vec![&#39;.&#39;; n as usize]; n as usize];
        Self::backtracking(&amp;mut result, n as usize, 0, &amp;mut chessboard);
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ans<span class="token punctuation">;</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>path<span class="token punctuation">;</span>
<span class="token keyword">int</span> ansTop<span class="token punctuation">,</span> pathTop<span class="token punctuation">;</span>
<span class="token comment">//将path中元素复制到ans中</span>
<span class="token keyword">void</span> <span class="token function">copyPath</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>tempPath <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> pathTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pathTop<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span>
            tempPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        tempPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    ans<span class="token punctuation">[</span>ansTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tempPath<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//判断当前位置是否有效（是否不被其它皇后影响）</span>
<span class="token keyword">int</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token comment">//检查同一行以及同一列是否有效</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span> <span class="token operator">||</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//下面两个for循环检查斜角45度是否有效</span>
    i <span class="token operator">=</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token operator">--</span>i<span class="token punctuation">,</span> <span class="token operator">--</span>j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    i <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token operator">++</span>i<span class="token punctuation">,</span> <span class="token operator">++</span>j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//下面两个for循环检查135度是否有效</span>
    i <span class="token operator">=</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token operator">--</span>i<span class="token punctuation">,</span> <span class="token operator">++</span>j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    i <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> x <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token operator">++</span>i<span class="token punctuation">,</span> <span class="token operator">--</span>j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">backTracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//若path中有四个元素，将其拷贝到ans中。从当前层返回</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>pathTop <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">copyPath</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//遍历横向棋盘</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//若当前位置有效</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> depth<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//在当前位置放置皇后</span>
            path<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;Q&#39;</span><span class="token punctuation">;</span>
            <span class="token comment">//path中元素数量+1</span>
            <span class="token operator">++</span>pathTop<span class="token punctuation">;</span>

            <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//进行回溯</span>
            path<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">;</span>
            <span class="token comment">//path中元素数量-1</span>
            <span class="token operator">--</span>pathTop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//初始化存储char*数组path，将path中所有元素设为&#39;.&#39;</span>
<span class="token keyword">void</span> <span class="token function">initPath</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//为path中每个char*开辟空间</span>
        path<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将path中所有字符设为&#39;.&#39;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
            path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">//在每个字符串结尾加入&#39;\\0&#39;</span>
        path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//初始化辅助变量</span>
    ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ansTop <span class="token operator">=</span> pathTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//初始化path数组</span>
    <span class="token function">initPath</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//设置返回数组大小</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ansTop<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span> 
    <span class="token operator">*</span>returnColumnSizes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> ansTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ansTop<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> solveNQueens<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> judge<span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> maze<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Boolean</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 正上方</span>
      <span class="token keyword">var</span> xx <span class="token operator">=</span> x
      <span class="token keyword">while</span> <span class="token punctuation">(</span>xx <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maze<span class="token punctuation">(</span>xx<span class="token punctuation">)</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        xx <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 左边</span>
      <span class="token keyword">var</span> yy <span class="token operator">=</span> y
      <span class="token keyword">while</span> <span class="token punctuation">(</span>yy <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maze<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">(</span>yy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        yy <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 左上方</span>
      xx <span class="token operator">=</span> x
      yy <span class="token operator">=</span> y
      <span class="token keyword">while</span> <span class="token punctuation">(</span>xx <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> yy <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maze<span class="token punctuation">(</span>xx<span class="token punctuation">)</span><span class="token punctuation">(</span>yy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        xx <span class="token operator">-=</span> <span class="token number">1</span>
        yy <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      xx <span class="token operator">=</span> x
      yy <span class="token operator">=</span> y
      <span class="token comment">// 右上方</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>xx <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> yy <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maze<span class="token punctuation">(</span>xx<span class="token punctuation">)</span><span class="token punctuation">(</span>yy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        xx <span class="token operator">-=</span> <span class="token number">1</span>
        yy <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> maze<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Boolean</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将结果转换为题目所需要的形式</span>
        <span class="token keyword">var</span> path <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>x <span class="token keyword">&lt;-</span> maze<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> tmp <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span>y <span class="token keyword">&lt;-</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;Q&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span> tmp<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>mkString<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">&lt;-</span> <span class="token number">0</span> until n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断这个位置是否可以放置皇后</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>judge<span class="token punctuation">(</span>row<span class="token punctuation">,</span> j<span class="token punctuation">,</span> maze<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          maze<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
          backtracking<span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> maze<span class="token punctuation">)</span>
          maze<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    backtracking<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span>ofDim<span class="token punctuation">[</span><span class="token builtin">Boolean</span><span class="token punctuation">]</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
    result<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63);function b(w,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),p(a)])]),k,n("p",null,[n("strong",null,[n("a",d,[s("《代码随想录》算法视频公开课"),p(a)]),s("："),n("a",v,[s("这就是传说中的N皇后？ 回溯算法安排！| LeetCode：51.N皇后"),p(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),m])}const g=e(i,[["render",b],["__file","0051.Nhuanghou.html.vue"]]);export{g as default};
