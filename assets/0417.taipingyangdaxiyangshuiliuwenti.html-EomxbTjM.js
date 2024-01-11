import{_ as d,r,o as v,c as t,a as n,b as i,d as s,e as l}from"./app-3RcBQnkC.js";const c={},a=n("h1",{id:"_417-太平洋大西洋水流问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_417-太平洋大西洋水流问题","aria-hidden":"true"},"#"),i(" 417. 太平洋大西洋水流问题")],-1),u={href:"https://leetcode.cn/problems/pacific-atlantic-water-flow/",target:"_blank",rel:"noopener noreferrer"},o=l(`<p>有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。</p><p>这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。</p><p>岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。</p><p>返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。</p><p>示例 1：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20230129103212.png" alt=""></p><ul><li>输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]</li><li>输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]</li></ul><p>示例 2：</p><ul><li>输入: heights = [[2,1],[1,2]]</li><li>输出: [[0,0],[0,1],[1,0],[1,1]]</li></ul><p>提示：</p><ul><li>m == heights.length</li><li>n == heights[r].length</li><li>1 &lt;= m, n &lt;= 200</li><li>0 &lt;= heights[r][c] &lt;= 10^5</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>不少同学可能被这道题的题目描述迷惑了，其实就是找到哪些点 可以同时到达太平洋和大西洋。 流动的方式只能从高往低流。</p><p>那么一个比较直白的想法，其实就是 遍历每个点，然后看这个点 能不能同时到达太平洋和大西洋。</p><p>至于遍历方式，可以用dfs，也可以用bfs，以下用dfs来举例。</p><p>那么这种思路的实现代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int dir[4][2] = {-1, 0, 0, -1, 1, 0, 0, 1};
    void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; heights, vector&lt;vector&lt;bool&gt;&gt;&amp; visited, int x, int y) {
        if (visited[x][y]) return;

        visited[x][y] = true;

        for (int i = 0; i &lt; 4; i++) {
            int nextx = x + dir[i][0];
            int nexty = y + dir[i][1];
            if (nextx &lt; 0 || nextx &gt;= heights.size() || nexty &lt; 0 || nexty &gt;= heights[0].size()) continue;
            if (heights[x][y] &lt; heights[nextx][nexty]) continue; // 高度不合适

            dfs (heights, visited, nextx, nexty);
        }
        return;
    }
    bool isResult(vector&lt;vector&lt;int&gt;&gt;&amp; heights, int x, int y) {
        vector&lt;vector&lt;bool&gt;&gt; visited = vector&lt;vector&lt;bool&gt;&gt;(heights.size(), vector&lt;bool&gt;(heights[0].size(), false));

        // 深搜，将x,y出发 能到的节点都标记上。 
        dfs(heights, visited, x, y);
        bool isPacific = false;
        bool isAtlantic = false;

        // 以下就是判断x，y出发，是否到达太平洋和大西洋 
        for (int j = 0; j &lt; heights[0].size(); j++) {
            if (visited[0][j]) {
                isPacific = true;
                break;
            }
        }
        for (int i = 0; i &lt; heights.size(); i++) {
            if (visited[i][0]) {
                isPacific = true;
                break;
            }
        }
        for (int j = 0; j &lt; heights[0].size(); j++) {
            if (visited[heights.size() - 1][j]) {
                isAtlantic = true;
                break;
            }
        }
        for (int i = 0; i &lt; heights.size(); i++) {
            if (visited[i][heights[0].size() - 1]) {
                isAtlantic = true;
                break;
            }
        }
        if (isAtlantic &amp;&amp; isPacific) return true;
        return false;
    }
public:

    vector&lt;vector&lt;int&gt;&gt; pacificAtlantic(vector&lt;vector&lt;int&gt;&gt;&amp; heights) {
        vector&lt;vector&lt;int&gt;&gt; result;
        // 遍历每一个点，看是否能同时到达太平洋和大西洋 
        for (int i = 0; i &lt; heights.size(); i++) {
            for (int j = 0; j &lt; heights[0].size(); j++) {
                if (isResult(heights, i, j)) result.push_back({i, j});
            }
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种思路很直白，但很明显，以上代码超时了。 来看看时间复杂度。</p><p>遍历每一个节点，是 m * n，遍历每一个节点的时候，都要做深搜，深搜的时间复杂度是： m * n</p><p>那么整体时间复杂度 就是 O(m^2 * n^2) ，这是一个四次方的时间复杂度。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>那么我们可以 反过来想，从太平洋边上的节点 逆流而上，将遍历过的节点都标记上。 从大西洋的边上节点 逆流而长，将遍历过的节点也标记上。 然后两方都标记过的节点就是既可以流太平洋也可以流大西洋的节点。</p><p>从太平洋边上节点出发，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220722103029.png" alt="图一"></p><p>从大西洋边上节点出发，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220722103330.png" alt="图二"></p><p>按照这样的逻辑，就可以写出如下遍历代码：（详细注释）</p>`,27),m={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E6%B7%B1%E6%90%9C%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/0797.%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E8%B7%AF%E5%BE%84.html",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int dir[4][2] = {-1, 0, 0, -1, 1, 0, 0, 1}; // 保存四个方向

    // 从低向高遍历，注意这里visited是引用，即可以改变传入的pacific和atlantic的值
    void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; heights, vector&lt;vector&lt;bool&gt;&gt;&amp; visited, int x, int y) {
        if (visited[x][y]) return;
        visited[x][y] = true;
        for (int i = 0; i &lt; 4; i++) { // 向四个方向遍历
            int nextx = x + dir[i][0];
            int nexty = y + dir[i][1];
            // 超过边界
            if (nextx &lt; 0 || nextx &gt;= heights.size() || nexty &lt; 0 || nexty &gt;= heights[0].size()) continue;
            // 高度不合适，注意这里是从低向高判断
            if (heights[x][y] &gt; heights[nextx][nexty]) continue;

            dfs (heights, visited, nextx, nexty);
        }
        return;

    }

public:

    vector&lt;vector&lt;int&gt;&gt; pacificAtlantic(vector&lt;vector&lt;int&gt;&gt;&amp; heights) {
        vector&lt;vector&lt;int&gt;&gt; result;
        int n = heights.size();
        int m = heights[0].size(); // 这里不用担心空指针，题目要求说了长宽都大于1

        // 记录从太平洋边出发，可以遍历的节点
        vector&lt;vector&lt;bool&gt;&gt; pacific = vector&lt;vector&lt;bool&gt;&gt;(n, vector&lt;bool&gt;(m, false));

        // 记录从大西洋出发，可以遍历的节点
        vector&lt;vector&lt;bool&gt;&gt; atlantic = vector&lt;vector&lt;bool&gt;&gt;(n, vector&lt;bool&gt;(m, false));

        // 从最上最下行的节点出发，向高处遍历
        for (int i = 0; i &lt; n; i++) {
            dfs (heights, pacific, i, 0); // 遍历最左列，接触太平洋 
            dfs (heights, atlantic, i, m - 1); // 遍历最右列，接触大西 
        }

        // 从最左最右列的节点出发，向高处遍历
        for (int j = 0; j &lt; m; j++) {
            dfs (heights, pacific, 0, j); // 遍历最上行，接触太平洋
            dfs (heights, atlantic, n - 1, j); // 遍历最下行，接触大西洋
        }
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; m; j++) {
                // 如果这个节点，从太平洋和大西洋出发都遍历过，就是结果
                if (pacific[i][j] &amp;&amp; atlantic[i][j]) result.push_back({i, j});
            }
        }
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度分析， 关于dfs函数搜索的过程 时间复杂度是 O(n * m)，这个大家比较容易想。</p><p>关键看主函数，那么每次dfs的时候，上面还是有for循环的。</p><p>第一个for循环，时间复杂度是：n * (n * m) 。</p><p>第二个for循环，时间复杂度是：m * (n * m)。</p><p>所以本题看起来 时间复杂度好像是 ： n * (n * m) + m * (n * m) = (m * n) * (m + n) 。</p><p>其实这是一个误区，大家再自己看 dfs函数的实现，其实 有visited函数记录 走过的节点，而走过的节点是不会再走第二次的。</p><p>所以 调用dfs函数，<strong>只要参数传入的是 数组pacific，那么地图中 每一个节点其实就遍历一次，无论你调用多少次</strong>。</p><p>同理，调用 dfs函数，只要 参数传入的是 数组atlantic，地图中每个节点也只会遍历一次。</p><p>所以，以下这段代码的时间复杂度是 2 * n * m。 地图用每个节点就遍历了两次，参数传入pacific的时候遍历一次，参数传入atlantic的时候遍历一次。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 从最上最下行的节点出发，向高处遍历
for (int i = 0; i &lt; n; i++) {
    dfs (heights, pacific, i, 0); // 遍历最上行，接触太平洋
    dfs (heights, atlantic, i, m - 1); // 遍历最下行，接触大西洋
}

// 从最左最右列的节点出发，向高处遍历
for (int j = 0; j &lt; m; j++) {
    dfs (heights, pacific, 0, j); // 遍历最左列，接触太平洋
    dfs (heights, atlantic, n - 1, j); // 遍历最右列，接触大西洋
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么本题整体的时间复杂度其实是： 2 * n * m + n * m ，所以最终时间复杂度为 O(n * m) 。</p><p>空间复杂度为：O(n * m) 这个就不难理解了。开了几个 n * m 的数组。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><p>深度优先遍历：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    // 四个位置
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

    /**
     * @param heights 题目给定的二维数组
     * @param row 当前位置的行号
     * @param col 当前位置的列号
     * @param sign 记录是哪一条河，两条河中可以一个为 0，一个为 1
     * @param visited 记录这个位置可以到哪条河
     */
    public void dfs(int[][] heights, int row, int col, int sign, boolean[][][] visited) {
        for (int[] current: position) {
            int curRow = row + current[0], curCol = col + current[1];
            // 越界
            if (curRow &lt; 0 || curRow &gt;= heights.length || curCol &lt; 0 || curCol &gt;= heights[0].length)
                continue;
            // 高度不合适或者已经被访问过了
            if (heights[curRow][curCol] &lt; heights[row][col] || visited[curRow][curCol][sign]) continue;
            visited[curRow][curCol][sign] = true;
            dfs(heights, curRow, curCol, sign, visited);
        }
    }

    public List&lt;List&lt;Integer&gt;&gt; pacificAtlantic(int[][] heights) {
        int rowSize = heights.length, colSize = heights[0].length;
        List&lt;List&lt;Integer&gt;&gt; ans = new ArrayList&lt;&gt;();
        // 记录 [row, col] 位置是否可以到某条河，可以为 true，反之为 false；
        // 假设太平洋的标记为 1，大西洋为 0
        boolean[][][] visited = new boolean[rowSize][colSize][2];
        for (int row = 0; row &lt; rowSize; row++) {
            visited[row][colSize - 1][0] = true;
            visited[row][0][1] = true;
            dfs(heights, row, colSize - 1, 0, visited);
            dfs(heights, row, 0, 1, visited);
        }
        for (int col = 0; col &lt; colSize; col++) {
            visited[rowSize - 1][col][0] = true;
            visited[0][col][1] = true;
            dfs(heights, rowSize - 1, col, 0, visited);
            dfs(heights, 0, col, 1, visited);
        }
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                // 如果该位置即可以到太平洋又可以到大西洋，就放入答案数组
                if (visited[row][col][0] &amp;&amp; visited[row][col][1])
                    ans.add(List.of(row, col));
            }
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>广度优先遍历：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    // 四个位置
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

    /**
     * @param heights 题目给定的二维数组
     * @param queue 记录可以到达边界的节点
     * @param visited 记录这个位置可以到哪条河
     */
    public void bfs(int[][] heights, Queue&lt;int[]&gt; queue, boolean[][][] visited) {
        while (!queue.isEmpty()) {
            int[] curPos = queue.poll();
            for (int[] current: position) {
                int row = curPos[0] + current[0], col = curPos[1] + current[1], sign = curPos[2];
                // 越界
                if (row &lt; 0 || row &gt;= heights.length || col &lt; 0 || col &gt;= heights[0].length) continue;
                // 高度不合适或者已经被访问过了
                if (heights[row][col] &lt; heights[curPos[0]][curPos[1]] || visited[row][col][sign]) continue;
                visited[row][col][sign] = true;
                queue.add(new int[]{row, col, sign});
            }
        }
    }

    public List&lt;List&lt;Integer&gt;&gt; pacificAtlantic(int[][] heights) {
        int rowSize = heights.length, colSize = heights[0].length;
        List&lt;List&lt;Integer&gt;&gt; ans = new ArrayList&lt;&gt;();
        boolean[][][] visited = new boolean[rowSize][colSize][2];
        // 队列，保存的数据为 [行号, 列号, 标记]
        // 假设太平洋的标记为 1，大西洋为 0
        Queue&lt;int[]&gt; queue = new ArrayDeque&lt;&gt;();
        for (int row = 0; row &lt; rowSize; row++) {
            visited[row][colSize - 1][0] = true;
            visited[row][0][1] = true;
            queue.add(new int[]{row, colSize - 1, 0});
            queue.add(new int[]{row, 0, 1});
        }
        for (int col = 0; col &lt; colSize; col++) {
            visited[rowSize - 1][col][0] = true;
            visited[0][col][1] = true;
            queue.add(new int[]{rowSize - 1, col, 0});
            queue.add(new int[]{0, col, 1});
        }
        bfs(heights, queue, visited);
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                // 如果该位置即可以到太平洋又可以到大西洋，就放入答案数组
                if (visited[row][col][0] &amp;&amp; visited[row][col][1])
                    ans.add(List.of(row, col));
            }
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>深度优先遍历</p><div class="language-Python3 line-numbers-mode" data-ext="Python3"><pre class="language-Python3"><code>class Solution:
    def __init__(self):
        self.position = [[-1, 0], [0, 1], [1, 0], [0, -1]]	# 四个方向

    # heights：题目给定的二维数组， row：当前位置的行号， col：当前位置的列号
    # sign：记录是哪一条河，两条河中可以一个为 0，一个为 1
    # visited：记录这个位置可以到哪条河
    def dfs(self, heights: List[List[int]], row: int, col: int, sign: int, visited: List[List[List[int]]]):
        for current in self.position:
            curRow, curCol = row + current[0], col + current[1]
            # 索引下标越界
            if curRow &lt; 0 or curRow &gt;= len(heights) or curCol &lt; 0 or curCol &gt;= len(heights[0]): continue
            # 不满足条件或者已经被访问过
            if heights[curRow][curCol] &lt; heights[row][col] or visited[curRow][curCol][sign]: continue
            visited[curRow][curCol][sign] = True
            self.dfs(heights, curRow, curCol, sign, visited)

    def pacificAtlantic(self, heights: List[List[int]]) -&gt; List[List[int]]:
        rowSize, colSize = len(heights), len(heights[0])
        # visited 记录 [row, col] 位置是否可以到某条河，可以为 true，反之为 false；
        # 假设太平洋的标记为 1，大西洋为 0
        # ans 用来保存满足条件的答案
        ans, visited = [], [[[False for _ in range(2)] for _ in range(colSize)] for _ in range(rowSize)]
        for row in range(rowSize):
            visited[row][0][1] = True
            visited[row][colSize - 1][0] = True
            self.dfs(heights, row, 0, 1, visited)
            self.dfs(heights, row, colSize - 1, 0, visited)
        for col in range(0, colSize):
            visited[0][col][1] = True
            visited[rowSize - 1][col][0] = True
            self.dfs(heights, 0, col, 1, visited)
            self.dfs(heights, rowSize - 1, col, 0, visited)
        for row in range(rowSize):
            for col in range(colSize):
                # 如果该位置即可以到太平洋又可以到大西洋，就放入答案数组
                if visited[row][col][0] and visited[row][col][1]:
                    ans.append([row, col])
        return ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>广度优先遍历</p><div class="language-Python3 line-numbers-mode" data-ext="Python3"><pre class="language-Python3"><code>class Solution:
    def __init__(self):
        self.position = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    # heights：题目给定的二维数组，visited：记录这个位置可以到哪条河
    def bfs(self, heights: List[List[int]], queue: deque, visited: List[List[List[int]]]):
        while queue:
            curPos = queue.popleft()
            for current in self.position:
                row, col, sign = curPos[0] + current[0], curPos[1] + current[1], curPos[2]
                # 越界
                if row &lt; 0 or row &gt;= len(heights) or col &lt; 0 or col &gt;= len(heights[0]): continue
                # 不满足条件或已经访问过
                if heights[row][col] &lt; heights[curPos[0]][curPos[1]] or visited[row][col][sign]: continue
                visited[row][col][sign] = True
                queue.append([row, col, sign])

    def pacificAtlantic(self, heights: List[List[int]]) -&gt; List[List[int]]:
        rowSize, colSize = len(heights), len(heights[0])
        # visited 记录 [row, col] 位置是否可以到某条河，可以为 true，反之为 false；
        # 假设太平洋的标记为 1，大西洋为 0
        # ans 用来保存满足条件的答案
        ans, visited = [], [[[False for _ in range(2)] for _ in range(colSize)] for _ in range(rowSize)]
        # 队列，保存的数据为 [行号, 列号, 标记]
        # 假设太平洋的标记为 1，大西洋为 0
        queue = deque()
        for row in range(rowSize):
            visited[row][0][1] = True
            visited[row][colSize - 1][0] = True
            queue.append([row, 0, 1])
            queue.append([row, colSize - 1, 0])
        for col in range(0, colSize):
            visited[0][col][1] = True
            visited[rowSize - 1][col][0] = True
            queue.append([0, col, 1])
            queue.append([rowSize - 1, col, 0])
        self.bfs(heights, queue, visited)	# 广度优先遍历
        for row in range(rowSize):
            for col in range(colSize):
                # 如果该位置即可以到太平洋又可以到大西洋，就放入答案数组
                if visited[row][col][0] and visited[row][col][1]:
                    ans.append([row, col])
        return ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function g(p,f){const e=r("ExternalLinkIcon");return v(),t("div",null,[a,n("p",null,[n("a",u,[i("题目链接"),s(e)])]),o,n("p",null,[i("（如果对dfs基础内容就不懂，建议看 "),n("a",m,[i("「代码随想录」DFS算法精讲！"),s(e)]),i("，还可以顺便解决 "),n("a",b,[i("797. 所有可能的路径"),s(e)]),i("）")]),h])}const x=d(c,[["render",g],["__file","0417.taipingyangdaxiyangshuiliuwenti.html.vue"]]);export{x as default};
