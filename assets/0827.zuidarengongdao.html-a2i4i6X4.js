import{_ as t,r as l,o as c,c as p,a as n,b as s,d as i,e}from"./app-3RcBQnkC.js";const o={},r=n("h1",{id:"_827-最大人工岛",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_827-最大人工岛","aria-hidden":"true"},"#"),s(" 827.最大人工岛")],-1),d={href:"https://leetcode.cn/problems/making-a-large-island/",target:"_blank",rel:"noopener noreferrer"},u=e('<p>给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。</p><p>返回执行此操作后，grid 中最大的岛屿面积是多少？</p><p>岛屿 由一组上、下、左、右四个方向相连的 1 形成。</p><p>示例 1:</p><ul><li>输入: grid = [[1, 0], [0, 1]]</li><li>输出: 3</li><li>解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。</li></ul><p>示例 2:</p><ul><li>输入: grid = [[1, 1], [1, 0]]</li><li>输出: 4</li><li>解释: 将一格0变成1，岛屿的面积扩大为 4。</li></ul><p>示例 3:</p><ul><li>输入: grid = [[1, 1], [1, 1]]</li><li>输出: 4</li><li>解释: 没有0可以让我们变成1，面积依然为 4。</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题的一个暴力想法，应该是遍历地图尝试 将每一个 0 改成1，然后去搜索地图中的最大的岛屿面积。</p><p>计算地图的最大面积：遍历地图 + 深搜岛屿，时间复杂度为 n * n。</p><p>（其实使用深搜还是广搜都是可以的，其目的就是遍历岛屿做一个标记，相当于染色，那么使用哪个遍历方式都行，以下我用深搜来讲解）</p><p>每改变一个0的方格，都需要重新计算一个地图的最大面积，所以 整体时间复杂度为：n^4。</p>',14),v={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E6%B7%B1%E6%90%9C%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="优化思路" tabindex="-1"><a class="header-anchor" href="#优化思路" aria-hidden="true">#</a> 优化思路</h2><p>其实每次深搜遍历计算最大岛屿面积，我们都做了很多重复的工作。</p><p>只要用一次深搜把每个岛屿的面积记录下来就好。</p><p>第一步：一次遍历地图，得出各个岛屿的面积，并做编号记录。可以使用map记录，key为岛屿编号，value为岛屿面积 第二步：在遍历地图，遍历0的方格（因为要将0变成1），并统计该1（由0变成的1）周边岛屿面积，将其相邻面积相加在一起，遍历所有 0 之后，就可以得出 选一个0变成1 之后的最大面积。</p><p>拿如下地图的岛屿情况来举例： （1为陆地）</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220829104834.png" alt=""></p><p>第一步，则遍历题目，并将岛屿到编号和面积上的统计，过程如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220829105644.png" alt=""></p><p>本过程代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int dir[4][2] = {0, 1, 1, 0, -1, 0, 0, -1}; // 四个方向
void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; grid, vector&lt;vector&lt;bool&gt;&gt;&amp; visited, int x, int y, int mark) {
    if (visited[x][y] || grid[x][y] == 0) return; // 终止条件：访问过的节点 或者 遇到海水
    visited[x][y] = true; // 标记访问过
    grid[x][y] = mark; // 给陆地标记新标签
    count++;
    for (int i = 0; i &lt; 4; i++) {
        int nextx = x + dir[i][0];
        int nexty = y + dir[i][1];
        if (nextx &lt; 0 || nextx &gt;= grid.size() || nexty &lt; 0 || nexty &gt;= grid[0].size()) continue;  // 越界了，直接跳过
        dfs(grid, visited, nextx, nexty, mark);
    }
}

int largestIsland(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {
    int n = grid.size(), m = grid[0].size();
    vector&lt;vector&lt;bool&gt;&gt; visited = vector&lt;vector&lt;bool&gt;&gt;(n, vector&lt;bool&gt;(m, false)); // 标记访问过的点
    unordered_map&lt;int ,int&gt; gridNum;
    int mark = 2; // 记录每个岛屿的编号
    bool isAllGrid = true; // 标记是否整个地图都是陆地
    for (int i = 0; i &lt; n; i++) {
        for (int j = 0; j &lt; m; j++) {
            if (grid[i][j] == 0) isAllGrid = false;
            if (!visited[i][j] &amp;&amp; grid[i][j] == 1) {
                count = 0;
                dfs(grid, visited, i, j, mark); // 将与其链接的陆地都标记上 true
                gridNum[mark] = count; // 记录每一个岛屿的面积
                mark++; // 记录下一个岛屿编号
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个过程时间复杂度 n * n 。可能有录友想：分明是两个for循环下面套这一个dfs，时间复杂度怎么回事 n * n呢？</p><p>其实大家可以仔细看一下代码，<strong>n * n这个方格地图中，每个节点我们就遍历一次，并不会重复遍历</strong>。</p><p>第二步过程如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220829105249.png" alt=""></p><p>也就是遍历每一个0的方格，并统计其相邻岛屿面积，最后取一个最大值。</p><p>这个过程的时间复杂度也为 n * n。</p><p>所以整个解法的时间复杂度，为 n * n + n * n 也就是 n^2。</p><p>当然这里还有一个优化的点，就是 可以不用 visited数组，因为有mark来标记，所以遍历过的grid[i][j]是不等于1的。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>    int dir[4][2] = {0, 1, 1, 0, -1, 0, 0, -1}; // 四个方向
    void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; grid, int x, int y, int mark) {
        if (grid[x][y] != 1 || grid[x][y] == 0) return; // 终止条件：访问过的节点 或者 遇到海水
        grid[x][y] = mark; // 给陆地标记新标签
        count++;
        for (int i = 0; i &lt; 4; i++) {
            int nextx = x + dir[i][0];
            int nexty = y + dir[i][1];
            if (nextx &lt; 0 || nextx &gt;= grid.size() || nexty &lt; 0 || nexty &gt;= grid[0].size()) continue;  // 越界了，直接跳过
            dfs(grid, nextx, nexty, mark);
        }
    }

public:
    int largestIsland(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {
        int n = grid.size(), m = grid[0].size();
        unordered_map&lt;int ,int&gt; gridNum;
        int mark = 2; // 记录每个岛屿的编号
        bool isAllGrid = true; // 标记是否整个地图都是陆地
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; m; j++) {
                if (grid[i][j] == 0) isAllGrid = false;
                if (grid[i][j] == 1) {
                    count = 0;
                    dfs(grid, i, j, mark); // 将与其链接的陆地都标记上 true
                    gridNum[mark] = count; // 记录每一个岛屿的面积
                    mark++; // 记录下一个岛屿编号
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过为了让各个变量各司其事，代码清晰一些，完整代码还是使用visited数组来标记。</p><p>最后，整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int count;
    int dir[4][2] = {0, 1, 1, 0, -1, 0, 0, -1}; // 四个方向
    void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; grid, vector&lt;vector&lt;bool&gt;&gt;&amp; visited, int x, int y, int mark) {
        if (visited[x][y] || grid[x][y] == 0) return; // 终止条件：访问过的节点 或者 遇到海水
        visited[x][y] = true; // 标记访问过
        grid[x][y] = mark; // 给陆地标记新标签
        count++;
        for (int i = 0; i &lt; 4; i++) {
            int nextx = x + dir[i][0];
            int nexty = y + dir[i][1];
            if (nextx &lt; 0 || nextx &gt;= grid.size() || nexty &lt; 0 || nexty &gt;= grid[0].size()) continue;  // 越界了，直接跳过
            dfs(grid, visited, nextx, nexty, mark);
        }
    }

public:
    int largestIsland(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {
        int n = grid.size(), m = grid[0].size();
        vector&lt;vector&lt;bool&gt;&gt; visited = vector&lt;vector&lt;bool&gt;&gt;(n, vector&lt;bool&gt;(m, false)); // 标记访问过的点
        unordered_map&lt;int ,int&gt; gridNum;
        int mark = 2; // 记录每个岛屿的编号
        bool isAllGrid = true; // 标记是否整个地图都是陆地
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; m; j++) {
                if (grid[i][j] == 0) isAllGrid = false;
                if (!visited[i][j] &amp;&amp; grid[i][j] == 1) {
                    count = 0;
                    dfs(grid, visited, i, j, mark); // 将与其链接的陆地都标记上 true
                    gridNum[mark] = count; // 记录每一个岛屿的面积
                    mark++; // 记录下一个岛屿编号
                }
            }
        }
        if (isAllGrid) return n * m; // 如果都是陆地，返回全面积

        // 以下逻辑是根据添加陆地的位置，计算周边岛屿面积之和
        int result = 0; // 记录最后结果
        unordered_set&lt;int&gt; visitedGrid; // 标记访问过的岛屿
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; m; j++) {
                int count = 1; // 记录连接之后的岛屿数量
                visitedGrid.clear(); // 每次使用时，清空
                if (grid[i][j] == 0) {
                    for (int k = 0; k &lt; 4; k++) {
                        int neari = i + dir[k][1]; // 计算相邻坐标
                        int nearj = j + dir[k][0];
                        if (neari &lt; 0 || neari &gt;= grid.size() || nearj &lt; 0 || nearj &gt;= grid[0].size()) continue;
                        if (visitedGrid.count(grid[neari][nearj])) continue; // 添加过的岛屿不要重复添加
                        // 把相邻四面的岛屿数量加起来
                        count += gridNum[grid[neari][nearj]];
                        visitedGrid.insert(grid[neari][nearj]); // 标记该岛屿已经添加过
                    }
                }
                result = max(result, count);
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};  // 四个方向

    /**
     * @param grid 矩阵数组
     * @param row 当前遍历的节点的行号
     * @param col 当前遍历的节点的列号
     * @param mark 当前区域的标记
     * @return 返回当前区域内 1 的数量
     */
    public int dfs(int[][] grid, int row, int col, int mark) {
        int ans = 0;
        grid[row][col] = mark;
        for (int[] current: position) {
            int curRow = row + current[0], curCol = col + current[1];
            if (curRow &lt; 0 || curRow &gt;= grid.length || curCol &lt; 0 || curCol &gt;= grid.length) continue;  // 越界
            if (grid[curRow][curCol] == 1)
                ans += 1 + dfs(grid, curRow, curCol, mark);
        }
        return ans;
    }

    public int largestIsland(int[][] grid) {
        int ans = Integer.MIN_VALUE, size = grid.length, mark = 2;
        Map&lt;Integer, Integer&gt; getSize = new HashMap&lt;&gt;();
        for (int row = 0; row &lt; size; row++) {
            for (int col = 0; col &lt; size; col++) {
                if (grid[row][col] == 1) {
                    int areaSize = 1 + dfs(grid, row, col, mark);
                    getSize.put(mark++, areaSize);
                }
            }
        }
        for (int row = 0; row &lt; size; row++) {
            for (int col = 0; col &lt; size; col++) {
                // 当前位置如果不是 0 那么直接跳过，因为我们只能把 0 变成 1
                if (grid[row][col] != 0) continue;
                Set&lt;Integer&gt; hashSet = new HashSet&lt;&gt;();     // 防止同一个区域被重复计算
                // 计算从当前位置开始获取的 1 的数量，初始化 1 是因为把当前位置的 0 转换成了 1 
                int curSize = 1;
                for (int[] current: position) {
                    int curRow = row + current[0], curCol = col + current[1];
                    if (curRow &lt; 0 || curRow &gt;= grid.length || curCol &lt; 0 || curCol &gt;= grid.length) continue;
                    int curMark = grid[curRow][curCol];     // 获取对应位置的标记
                    // 如果标记存在 hashSet 中说明该标记被记录过一次，如果不存在 getSize 中说明该标记是无效标记(此时 curMark = 0)
                    if (hashSet.contains(curMark) || !getSize.containsKey(curMark)) continue;
                    hashSet.add(curMark);
                    curSize += getSize.get(curMark);
                }
                ans = Math.max(ans, curSize);
            }
        }
        // 当 ans == Integer.MIN_VALUE 说明矩阵数组中不存在 0，全都是有效区域，返回数组大小即可
        return ans == Integer.MIN_VALUE ? size * size : ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">largestIsland</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> grid<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        visited <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">#标记访问过的位置</span>
        m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token number">0</span>
        island_size <span class="token operator">=</span> <span class="token number">0</span>     <span class="token comment">#用于保存当前岛屿的尺寸</span>
        directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">#四个方向</span>
        islands_size <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token comment">#保存每个岛屿的尺寸</span>

        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>island_num<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">:</span>
            visited<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
            grid<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> island_num     <span class="token comment">#访问过的位置标记为岛屿编号</span>
            <span class="token keyword">nonlocal</span> island_size
            island_size <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                nextR <span class="token operator">=</span> r <span class="token operator">+</span> directions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                nextC <span class="token operator">=</span> c <span class="token operator">+</span> directions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>nextR <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token keyword">or</span>     <span class="token comment">#行坐标越界</span>
                    nextC <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token keyword">or</span>     <span class="token comment">#列坐标越界</span>
                    <span class="token punctuation">(</span>nextR<span class="token punctuation">,</span> nextC<span class="token punctuation">)</span> <span class="token keyword">in</span> visited<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">#坐标已访问</span>
                    <span class="token keyword">continue</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>nextR<span class="token punctuation">]</span><span class="token punctuation">[</span>nextC<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>      <span class="token comment">#遇到有效坐标，进入下一个层搜索</span>
                    dfs<span class="token punctuation">(</span>island_num<span class="token punctuation">,</span> nextR<span class="token punctuation">,</span> nextC<span class="token punctuation">)</span>

        island_num <span class="token operator">=</span> <span class="token number">2</span>             <span class="token comment">#初始岛屿编号设为2， 因为grid里的数据有0和1， 所以从2开始编号</span>
        all_land <span class="token operator">=</span> <span class="token boolean">True</span>            <span class="token comment">#标记是否整个地图都是陆地</span>
        <span class="token keyword">for</span> r <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    all_land <span class="token operator">=</span> <span class="token boolean">False</span>    <span class="token comment">#地图里不全是陆地</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token keyword">not</span> <span class="token keyword">in</span> visited <span class="token keyword">and</span> grid<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    island_size <span class="token operator">=</span> <span class="token number">0</span>     <span class="token comment">#遍历每个位置前重置岛屿尺寸为0</span>
                    dfs<span class="token punctuation">(</span>island_num<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
                    islands_size<span class="token punctuation">[</span>island_num<span class="token punctuation">]</span> <span class="token operator">=</span> island_size <span class="token comment">#保存当前岛屿尺寸</span>
                    island_num <span class="token operator">+=</span> <span class="token number">1</span>     <span class="token comment">#下一个岛屿编号加一</span>
        <span class="token keyword">if</span> all_land<span class="token punctuation">:</span>
            <span class="token keyword">return</span> m <span class="token operator">*</span> n     <span class="token comment">#如果全是陆地， 返回地图面积</span>

        count <span class="token operator">=</span> <span class="token number">0</span>            <span class="token comment">#某个位置0变成1后当前岛屿尺寸</span>
        <span class="token comment">#因为后续计算岛屿面积要往四个方向遍历，但某2个或3个方向的位置可能同属于一个岛，</span>
        <span class="token comment">#所以为避免重复累加，把已经访问过的岛屿编号加入到这个集合</span>
        visited_island <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#保存访问过的岛屿</span>
        <span class="token keyword">for</span> r <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    count <span class="token operator">=</span> <span class="token number">1</span>        <span class="token comment">#把由0转换为1的位置计算到面积里</span>
                    visited_island<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">#遍历每个位置前清空集合</span>
                    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                        nearR <span class="token operator">=</span> r <span class="token operator">+</span> directions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                        nearC <span class="token operator">=</span> c <span class="token operator">+</span> directions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                        <span class="token keyword">if</span> nearR <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token keyword">or</span> nearC <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#周围位置越界</span>
                            <span class="token keyword">continue</span>
                        <span class="token keyword">if</span> grid<span class="token punctuation">[</span>nearR<span class="token punctuation">]</span><span class="token punctuation">[</span>nearC<span class="token punctuation">]</span> <span class="token keyword">in</span> visited_island<span class="token punctuation">:</span>  <span class="token comment">#岛屿已访问</span>
                            <span class="token keyword">continue</span>
                        count <span class="token operator">+=</span> islands_size<span class="token punctuation">[</span>grid<span class="token punctuation">[</span>nearR<span class="token punctuation">]</span><span class="token punctuation">[</span>nearC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">#累加连在一起的岛屿面积</span>
                        visited_island<span class="token punctuation">.</span>add<span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nearR<span class="token punctuation">]</span><span class="token punctuation">[</span>nearC<span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">#标记当前岛屿已访问</span>
                    res <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> count<span class="token punctuation">)</span> 
        <span class="token keyword">return</span> res


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function k(b,g){const a=l("ExternalLinkIcon");return c(),p("div",null,[r,n("p",null,[n("a",d,[s("力扣链接"),i(a)])]),u,n("p",null,[s("如果对深度优先搜索不了解的录友，可以看这里："),n("a",v,[s("深度优先搜索精讲"),i(a)])]),m])}const y=t(o,[["render",k],["__file","0827.zuidarengongdao.html.vue"]]);export{y as default};
