import{_ as e,r as o,o as l,c,a as n,b as s,d as t,e as p}from"./app-3RcBQnkC.js";const i={},u={href:"https://mp.weixin.qq.com/s/wDd5azGIYWjbU0fdua_qBg",target:"_blank",rel:"noopener noreferrer"},r=n("h1",{id:"_37-解数独",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_37-解数独","aria-hidden":"true"},"#"),s(" 37. 解数独")],-1),k={href:"https://leetcode.cn/problems/sudoku-solver/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>编写一个程序，通过填充空格来解决数独问题。</p><p>一个数独的解法需遵循如下规则： 数字 1-9 在每一行只能出现一次。 数字 1-9 在每一列只能出现一次。 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。 空白格用 &#39;.&#39; 表示。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/202011171912586.png" alt="解数独"></p><p>一个数独。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201117191340669.png" alt="解数独"></p><p>答案被标成红色。</p><p>提示：</p><ul><li>给定的数独序列只包含数字 1-9 和字符 &#39;.&#39; 。</li><li>你可以假设给定的数独只有唯一解。</li><li>给定数独永远是 9x9 形式的。</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',9),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1TW4y1471V/",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),f=n("p",null,[s("棋盘搜索问题可以使用回溯法暴力搜索，只不过这次我们要做的是"),n("strong",null,"二维递归"),s("。")],-1),w=n("p",null,"怎么做二维递归呢？",-1),y={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://programmercarl.com/0051.N%E7%9A%87%E5%90%8E.html",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[n("strong",null,"如果以上这几道题目没有做过的话，不建议上来就做这道题哈！")],-1),C={href:"https://programmercarl.com/0051.N%E7%9A%87%E5%90%8E.html",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>本题就不一样了，<strong>本题中棋盘的每一个位置都要放一个数字（而N皇后是一行只放一个皇后），并检查数字是否合法，解数独的树形结构要比N皇后更宽更深</strong>。</p><p>因为这个树形结构太大了，我抽取一部分，如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2020111720451790-20230310131816104.png" alt="37.解数独"></p><h3 id="回溯三部曲" tabindex="-1"><a class="header-anchor" href="#回溯三部曲" aria-hidden="true">#</a> 回溯三部曲</h3><ul><li>递归函数以及参数</li></ul><p><strong>递归函数的返回值需要是bool类型，为什么呢？</strong></p><p>因为解数独找到一个符合的条件（就在树的叶子节点上）立刻就返回，相当于找从根节点到叶子节点一条唯一路径，所以需要使用bool返回值。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;&gt;</span><span class="token operator">&amp;</span> board<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>递归终止条件</li></ul><p>本题递归不用终止条件，解数独是要遍历整个树形结构寻找可能的叶子节点就立刻返回。</p><p><strong>不用终止条件会不会死循环？</strong></p><p>递归的下一层的棋盘一定比上一层的棋盘多一个数，等数填满了棋盘自然就终止（填满当然好了，说明找到结果了），所以不需要终止条件！</p><p><strong>那么有没有永远填不满的情况呢？</strong></p><p>这个问题我在递归单层搜索逻辑里再来讲！</p><ul><li>递归单层搜索逻辑</li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2020111720451790-20230310131822254.png" alt="37.解数独"></p><p>在树形图中可以看出我们需要的是一个二维的递归（也就是两个for循环嵌套着递归）</p><p><strong>一个for循环遍历棋盘的行，一个for循环遍历棋盘的列，一行一列确定下来之后，递归遍历这个位置放9个数字的可能性！</strong></p><p>代码如下：（<strong>详细看注释</strong>）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>bool backtracking(vector&lt;vector&lt;char&gt;&gt;&amp; board) {
    for (int i = 0; i &lt; board.size(); i++) {        // 遍历行
        for (int j = 0; j &lt; board[0].size(); j++) { // 遍历列
            if (board[i][j] != &#39;.&#39;) continue;
            for (char k = &#39;1&#39;; k &lt;= &#39;9&#39;; k++) {     // (i, j) 这个位置放k是否合适
                if (isValid(i, j, k, board)) {
                    board[i][j] = k;                // 放置k
                    if (backtracking(board)) return true; // 如果找到合适一组立刻返回
                    board[i][j] = &#39;.&#39;;              // 回溯，撤销k
                }
            }
            return false;                           // 9个数都试完了，都不行，那么就返回false
        }
    }
    return true; // 遍历完没有返回false，说明找到了合适棋盘位置了
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意这里return false的地方，这里放return false 是有讲究的</strong>。</p><p>因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！</p><p>那么会直接返回， <strong>这也就是为什么没有终止条件也不会永远填不满棋盘而无限递归下去！</strong></p><h3 id="判断棋盘是否合法" tabindex="-1"><a class="header-anchor" href="#判断棋盘是否合法" aria-hidden="true">#</a> 判断棋盘是否合法</h3><p>判断棋盘是否合法有如下三个维度：</p><ul><li>同行是否重复</li><li>同列是否重复</li><li>9宫格里是否重复</li></ul><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>bool isValid(int row, int col, char val, vector&lt;vector&lt;char&gt;&gt;&amp; board) {
    for (int i = 0; i &lt; 9; i++) { // 判断行里是否重复
        if (board[row][i] == val) {
            return false;
        }
    }
    for (int j = 0; j &lt; 9; j++) { // 判断列里是否重复
        if (board[j][col] == val) {
            return false;
        }
    }
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    for (int i = startRow; i &lt; startRow + 3; i++) { // 判断9方格里是否重复
        for (int j = startCol; j &lt; startCol + 3; j++) {
            if (board[i][j] == val ) {
                return false;
            }
        }
    }
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后整体C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
bool backtracking(vector&lt;vector&lt;char&gt;&gt;&amp; board) {
    for (int i = 0; i &lt; board.size(); i++) {        // 遍历行
        for (int j = 0; j &lt; board[0].size(); j++) { // 遍历列
            if (board[i][j] == &#39;.&#39;) {
                for (char k = &#39;1&#39;; k &lt;= &#39;9&#39;; k++) {     // (i, j) 这个位置放k是否合适
                    if (isValid(i, j, k, board)) {
                        board[i][j] = k;                // 放置k
                        if (backtracking(board)) return true; // 如果找到合适一组立刻返回
                        board[i][j] = &#39;.&#39;;              // 回溯，撤销k
                    }
                }
                return false;  // 9个数都试完了，都不行，那么就返回false
            }
        }
    }
    return true; // 遍历完没有返回false，说明找到了合适棋盘位置了
}
bool isValid(int row, int col, char val, vector&lt;vector&lt;char&gt;&gt;&amp; board) {
    for (int i = 0; i &lt; 9; i++) { // 判断行里是否重复
        if (board[row][i] == val) {
            return false;
        }
    }
    for (int j = 0; j &lt; 9; j++) { // 判断列里是否重复
        if (board[j][col] == val) {
            return false;
        }
    }
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    for (int i = startRow; i &lt; startRow + 3; i++) { // 判断9方格里是否重复
        for (int j = startCol; j &lt; startCol + 3; j++) {
            if (board[i][j] == val ) {
                return false;
            }
        }
    }
    return true;
}
public:
    void solveSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) {
        backtracking(board);
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>解数独可以说是非常难的题目了，如果还一直停留在单层递归的逻辑中，这道题目可以让大家瞬间崩溃。</p><p>所以我在开篇就提到了<strong>二维递归</strong>，这也是我自创词汇，希望可以帮助大家理解解数独的搜索过程。</p><p>一波分析之后，再看代码会发现其实也不难，唯一难点就是理解<strong>二维递归</strong>的思维逻辑。</p><p><strong>这样，解数独这么难的问题，也被我们攻克了</strong>。</p><p><strong>恭喜一路上坚持打卡的录友们，回溯算法已经接近尾声了，接下来就是要一波总结了</strong>。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">solveSudoku</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">solveSudokuHelper</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">solveSudokuHelper</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//「一个for循环遍历棋盘的行，一个for循环遍历棋盘的列，</span>
        <span class="token comment">// 一行一列确定下来之后，递归遍历这个位置放9个数字的可能性！」</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遍历行</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遍历列</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 跳过原始数字</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> k <span class="token operator">=</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// (i, j) 这个位置放k是否合适</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidSudoku</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">solveSudokuHelper</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 如果找到合适一组立刻返回</span>
                            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 9个数都试完了，都不行，那么就返回false</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token comment">// 因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！</span>
                <span class="token comment">// 那么会直接返回， 「这也就是为什么没有终止条件也不会永远填不满棋盘而无限递归下去！」</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历完没有返回false，说明找到了合适棋盘位置了</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断棋盘是否合法有如下三个维度:
     *     同行是否重复
     *     同列是否重复
     *     9宫格里是否重复
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">isValidSudoku</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">char</span> val<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 同行是否重复</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 同列是否重复</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 9宫格里是否重复</span>
        <span class="token keyword">int</span> startRow <span class="token operator">=</span> <span class="token punctuation">(</span>row <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> startCol <span class="token operator">=</span> <span class="token punctuation">(</span>col <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startRow<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> startRow <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> startCol<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> startCol <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">solveSudoku</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> board<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Do not return anything, modify board in-place instead.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> board<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token comment"># 若有解，返回True；若无解，返回False</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 遍历行</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历列</span>
                <span class="token comment"># 若空格内已有数字，跳过</span>
                <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">:</span> <span class="token keyword">continue</span>
                <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">if</span> self<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">:</span>
                        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
                        <span class="token keyword">if</span> self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
                        board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span>
                <span class="token comment"># 若数字1-9都不能成功填入空格，返回False无解</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span> <span class="token comment"># 有解</span>

    <span class="token keyword">def</span> <span class="token function">is_valid</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> board<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token comment"># 判断同一行是否冲突</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token comment"># 判断同一列是否冲突</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> board<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token comment"># 判断同一九宫格是否有冲突</span>
        start_row <span class="token operator">=</span> <span class="token punctuation">(</span>row <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
        start_col <span class="token operator">=</span> <span class="token punctuation">(</span>col <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_row<span class="token punctuation">,</span> start_row <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_col<span class="token punctuation">,</span> start_col <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">solveSudoku</span><span class="token punctuation">(</span>board <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> backtracking <span class="token keyword">func</span><span class="token punctuation">(</span>board <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
	backtracking <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>board <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
				<span class="token comment">//判断此位置是否适合填数字</span>
				<span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;.&#39;</span> <span class="token punctuation">{</span>
					<span class="token keyword">continue</span>
				<span class="token punctuation">}</span>
				<span class="token comment">//尝试填1-9</span>
				<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token function">isvalid</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token function">byte</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">,</span> board<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span> <span class="token comment">//如果满足要求就填</span>
						board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">byte</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
						<span class="token keyword">if</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
							<span class="token keyword">return</span> <span class="token boolean">true</span>
						<span class="token punctuation">}</span>
						board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
	<span class="token function">backtracking</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//判断填入数字是否满足要求</span>
<span class="token keyword">func</span> <span class="token function">isvalid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col <span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">byte</span><span class="token punctuation">,</span> board <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">//行</span>
		<span class="token keyword">if</span> board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> k <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">//列</span>
		<span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> k <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//方格</span>
	startrow <span class="token operator">:=</span> <span class="token punctuation">(</span>row <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
	startcol <span class="token operator">:=</span> <span class="token punctuation">(</span>col <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> startrow<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> startrow<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> startcol<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> startcol<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> k <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var solveSudoku = function(board) {
    function isValid(row, col, val, board) {
        let len = board.length
        // 行不能重复
        for(let i = 0; i &lt; len; i++) {
            if(board[row][i] === val) {
                return false
            }
        }
        // 列不能重复
        for(let i = 0; i &lt; len; i++) {
            if(board[i][col] === val) {
                return false
            }
        }
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3

        for(let i = startRow; i &lt; startRow + 3; i++) {
            for(let j = startCol; j &lt; startCol + 3; j++) {
                if(board[i][j] === val) {
                    return false
                }
            }
        }

        return true
    }

    function backTracking() {
        for(let i = 0; i &lt; board.length; i++) {
            for(let j = 0; j &lt; board[0].length; j++) {
                if(board[i][j] !== &#39;.&#39;) continue
                for(let val = 1; val &lt;= 9; val++) {
                    if(isValid(i, j, \`\${val}\`, board)) {
                        board[i][j] = \`\${val}\`
                        if (backTracking()) {
                            return true
                        }

                        board[i][j] = \`.\`
                    }
                }
                return false
            }
        }
        return true
    }
    backTracking(board)
    return board

};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 Do not return anything, modify board in-place instead.
 */</span>
<span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span>col<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 列向检查</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> rowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rowIndex <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> rowIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 横向检查</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> colIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> colIndex <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> colIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>colIndex<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 九宫格检查</span>
    <span class="token keyword">const</span> startX <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>col <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> startY <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>row <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> rowIndex <span class="token operator">=</span> startY<span class="token punctuation">;</span> rowIndex <span class="token operator">&lt;</span> startY <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> rowIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> colIndex <span class="token operator">=</span> startX<span class="token punctuation">;</span> colIndex <span class="token operator">&lt;</span> startX <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> colIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>colIndex<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">solveSudoku</span><span class="token punctuation">(</span>board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>col<span class="token punctuation">,</span> row<span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">backTracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> board<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                            board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    fn is_valid(row: usize, col: usize, val: char, board: &amp;mut Vec&lt;Vec&lt;char&gt;&gt;) -&gt; bool{
        for i in 0..9 {
            if board[row][i] == val { return false; }
        }
        for j in 0..9 {
            if board[j][col] == val {
                return false;
            }
        }
        let  start_row = (row / 3) * 3;
        let  start_col = (col / 3) * 3;
        for i in start_row..(start_row + 3) {
            for j in start_col..(start_col + 3) {
                if board[i][j] == val { return false; }
            }
        }
        return true;
    }

    fn backtracking(board: &amp;mut Vec&lt;Vec&lt;char&gt;&gt;) -&gt; bool{
        for i in 0..board.len() {
            for j in 0..board[0].len() {
                if board[i][j] != &#39;.&#39; { continue; }
                for k in &#39;1&#39;..=&#39;9&#39; {
                    if Self::is_valid(i, j, k, board) {
                        board[i][j] = k;
                        if Self::backtracking(board) { return true; }
                        board[i][j] = &#39;.&#39;;
                    }
                }
                return false;
            }
        }
        return true;
    }

    pub fn solve_sudoku(board: &amp;mut Vec&lt;Vec&lt;char&gt;&gt;) {
        Self::backtracking(board);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>bool isValid(char** board, int row, int col, int k) {
    /* 判断当前行是否有重复元素 */
    for (int i = 0; i &lt; 9; i++) {
        if (board[i][col] == k) {
            return false;
        }
    }
    /* 判断当前列是否有重复元素 */
    for (int j = 0; j &lt; 9; j++) {
        if (board[row][j] == k) {
            return false;
        }
    }
    /* 计算当前9宫格左上角的位置 */
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    /* 判断当前元素所在九宫格是否有重复元素 */
    for (int i = startRow; i &lt; startRow + 3; i++) {
        for (int j = startCol; j &lt; startCol + 3; j++) {
            if (board[i][j] == k) {
                return false;
            }
        }
    }
    /* 满足条件，返回true */
    return true;
}

bool backtracking(char** board, int boardSize, int* boardColSize) {
    /* 从上到下、从左到右依次遍历输入数组 */
    for (int i = 0; i &lt; boardSize; i++) {
        for (int j = 0; j &lt; *boardColSize; j++) {
            /* 遇到数字跳过 */
            if (board[i][j] != &#39;.&#39;) {
                continue;
            }
            /* 依次将数组1到9填入当前位置 */
            for (int k = &#39;1&#39;; k &lt;= &#39;9&#39;; k++) {
                /* 判断当前位置是否与满足条件，是则进入下一层 */
                if (isValid(board, i, j, k)) {
                    board[i][j] = k;
                    /* 判断下一层递归之后是否找到一种解法，是则返回true */
                    if (backtracking(board, boardSize, boardColSize)) {
                        return true;
                    }
                    /* 回溯，将当前位置清零 */
                    board[i][j] = &#39;.&#39;;
                }
            }
            /* 若填入的9个数均不满足条件，返回false，说明此解法无效 */
            return false;
        }
    }
    /* 遍历完所有的棋盘，没有返回false，说明找到了解法，返回true */
    return true;
}

void solveSudoku(char** board, int boardSize, int* boardColSize) {
    bool res = backtracking(board, boardSize, boardColSize);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">solveSudoku</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> board<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断对应格子的值是否合法</span>
    <span class="token keyword">func</span> <span class="token function-definition function">isValid</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token class-name">Character</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// 行中是否重复</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token number">9</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 列中是否重复</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token number">9</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> board<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> val <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 9方格内是否重复</span>
        <span class="token keyword">let</span> startRow <span class="token operator">=</span> row <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">3</span>
        <span class="token keyword">let</span> startCol <span class="token operator">=</span> col <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">3</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> startRow <span class="token operator">..&lt;</span> startRow <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> startCol <span class="token operator">..&lt;</span> startCol <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> val <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@discardableResult</span>
    <span class="token keyword">func</span> <span class="token function-definition function">backtracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> board<span class="token punctuation">.</span>count <span class="token punctuation">{</span> <span class="token comment">// i：行坐标</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>count <span class="token punctuation">{</span> <span class="token comment">// j：列坐标</span>
                <span class="token keyword">guard</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;.&quot;</span></span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span> <span class="token comment">// 跳过已填写格子</span>
                <span class="token comment">// 填写格子</span>
                <span class="token keyword">for</span> val <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">...</span> <span class="token number">9</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> charVal <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">val</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
                    <span class="token keyword">guard</span> <span class="token function">isValid</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> i<span class="token punctuation">,</span> col<span class="token punctuation">:</span> j<span class="token punctuation">,</span> val<span class="token punctuation">:</span> charVal<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span> <span class="token comment">// 跳过不合法的</span>
                    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> charVal <span class="token comment">// 填写</span>
                    <span class="token keyword">if</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
                    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;.&quot;</span></span> <span class="token comment">// 回溯：擦除</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// 遍历完数字都不行</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 没有不合法的，填写正确</span>
    <span class="token punctuation">}</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>详细写法：</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>

  <span class="token keyword">def</span> solveSudoku<span class="token punctuation">(</span>board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 必须是为 . 的数字才放数字</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span>k <span class="token keyword">&lt;-</span> <span class="token char">&#39;1&#39;</span> to <span class="token char">&#39;9&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 这个位置放k是否合适</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isVaild<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> k
              <span class="token keyword">if</span> <span class="token punctuation">(</span>backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 找到了立刻返回</span>
              board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span> <span class="token comment">// 回溯</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// 9个数都试完了，都不行就返回false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token boolean">true</span> <span class="token comment">// 遍历完所有的都没返回false，说明找到了</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> isVaild<span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">Char</span><span class="token punctuation">,</span> board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 列</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 宫</span>
    <span class="token keyword">var</span> row <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token keyword">var</span> col <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> row until row <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">&lt;-</span> col until col <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遵循Scala至简原则写法：</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>

  <span class="token keyword">def</span> solveSudoku<span class="token punctuation">(</span>board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 双重for循环 + 循环守卫</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span><span class="token punctuation">;</span> j <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span> <span class="token keyword">if</span> board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 必须是为 . 的数字才放数字，使用循环守卫判断该位置是否可以放置当前循环的数字</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>k <span class="token keyword">&lt;-</span> <span class="token char">&#39;1&#39;</span> to <span class="token char">&#39;9&#39;</span> <span class="token keyword">if</span> isVaild<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 这个位置放k是否合适</span>
        board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> k
        <span class="token keyword">if</span> <span class="token punctuation">(</span>backtracking<span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 找到了立刻返回</span>
        board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">&#39;.&#39;</span> <span class="token comment">// 回溯</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// 9个数都试完了，都不行就返回false</span>
    <span class="token punctuation">}</span>
    <span class="token boolean">true</span> <span class="token comment">// 遍历完所有的都没返回false，说明找到了</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> isVaild<span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">Char</span><span class="token punctuation">,</span> board<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 行，循环守卫进行判断</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span> <span class="token keyword">if</span> board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token comment">// 列，循环守卫进行判断</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">9</span> <span class="token keyword">if</span> board<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token comment">// 宫，循环守卫进行判断</span>
    <span class="token keyword">var</span> row <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token keyword">var</span> col <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> row until row <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> j <span class="token keyword">&lt;-</span> col until col <span class="token operator">+</span> <span class="token number">3</span> <span class="token keyword">if</span> board<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token boolean">true</span> <span class="token comment">// 最终没有返回false，就说明该位置可以填写true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function V(I,E){const a=o("ExternalLinkIcon");return l(),c("div",null,[n("blockquote",null,[n("p",null,[s("如果对回溯法理论还不清楚的同学，可以先看这个视频"),n("a",u,[s("视频来了！！带你学透回溯算法（理论篇）"),t(a)])])]),r,n("p",null,[n("a",k,[s("力扣题目链接"),t(a)])]),d,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),t(a)]),s("："),n("a",b,[s("回溯算法二维递归？解数独不过如此！| LeetCode：37. 解数独"),t(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),m,f,w,n("p",null,[s("大家已经跟着「代码随想录」刷过了如下回溯法题目，例如："),n("a",y,[s("77.组合（组合问题）"),t(a)]),s("，"),n("a",h,[s("131.分割回文串（分割问题）"),t(a)]),s("，"),n("a",g,[s("78.子集（子集问题）"),t(a)]),s("，"),n("a",j,[s("46.全排列（排列问题）"),t(a)]),s("，以及"),n("a",_,[s("51.N皇后（N皇后问题）"),t(a)]),s("，其实这些题目都是一维递归。")]),x,n("p",null,[n("a",C,[s("N皇后问题"),t(a)]),s("是因为每一行每一列只放一个皇后，只需要一层for循环遍历一行，递归来遍历列，然后一行一列确定皇后的唯一位置。")]),S])}const q=e(i,[["render",V],["__file","0037.jieshudu.html.vue"]]);export{q as default};
