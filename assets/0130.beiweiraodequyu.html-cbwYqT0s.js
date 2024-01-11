import{_ as e,r as l,o,c as t,a as n,b as s,d as i,e as d}from"./app-3RcBQnkC.js";const c={},r=n("h1",{id:"_130-被围绕的区域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_130-被围绕的区域","aria-hidden":"true"},"#"),s(" 130. 被围绕的区域")],-1),p={href:"https://leetcode.cn/problems/surrounded-regions/",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。",-1),v=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20220901104745.png",alt:""})],-1),b=n("ul",null,[n("li",null,'输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'),n("li",null,'输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]'),n("li",null,"解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。")],-1),m=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),k={href:"https://programmercarl.com/1020.%E9%A3%9E%E5%9C%B0%E7%9A%84%E6%95%B0%E9%87%8F.html",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>那么两题在思路上也是差不多的。</p><p>依然是从地图周边出发，将周边空格相邻的&#39;O&#39;都做上标记，然后在遍历一遍地图，遇到 &#39;O&#39; 且没做过标记的，那么都是地图中间的&#39;O&#39;，全部改成&#39;X&#39;就行。</p><p>有的录友可能想，我在定义一个 visited 二维数组，单独标记周边的&#39;O&#39;，然后遍历地图的时候同时对 数组board 和 数组visited 进行判断，是否&#39;O&#39;改成&#39;X&#39;。</p><p>这样做其实就有点麻烦了，不用额外定义空间了，标记周边的&#39;O&#39;，可以直接改board的数值为其他特殊值。</p><p>步骤一：深搜或者广搜将地图周边的&#39;O&#39;全部改成&#39;A&#39;，如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220902102337.png" alt="图一"></p><p>步骤二：在遍历地图，将&#39;O&#39;全部改成&#39;X&#39;（地图中间的&#39;O&#39;改成了&#39;X&#39;），将&#39;A&#39;改回&#39;O&#39;（保留的地图周边的&#39;O&#39;），如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220902102831.png" alt="图二"></p><p>整体C++代码如下，以下使用dfs实现，其实遍历方式dfs，bfs都是可以的。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int dir[4][2] = {-1, 0, 0, -1, 1, 0, 0, 1}; // 保存四个方向
    void dfs(vector&lt;vector&lt;char&gt;&gt;&amp; board, int x, int y) {
        board[x][y] = &#39;A&#39;;
        for (int i = 0; i &lt; 4; i++) { // 向四个方向遍历
            int nextx = x + dir[i][0];
            int nexty = y + dir[i][1];
            // 超过边界
            if (nextx &lt; 0 || nextx &gt;= board.size() || nexty &lt; 0 || nexty &gt;= board[0].size()) continue;
            // 不符合条件，不继续遍历
            if (board[nextx][nexty] == &#39;X&#39; || board[nextx][nexty] == &#39;A&#39;) continue;
            dfs (board, nextx, nexty);
        }
        return;
    }

public:
    void solve(vector&lt;vector&lt;char&gt;&gt;&amp; board) {
        int n = board.size(), m = board[0].size(); 
        // 步骤一：
        // 从左侧边，和右侧边 向中间遍历
        for (int i = 0; i &lt; n; i++) {
            if (board[i][0] == &#39;O&#39;) dfs(board, i, 0);
            if (board[i][m - 1] == &#39;O&#39;) dfs(board, i, m - 1);
        }

        // 从上边和下边 向中间遍历
        for (int j = 0; j &lt; m; j++) {
            if (board[0][j] == &#39;O&#39;) dfs(board, 0, j);
            if (board[n - 1][j] == &#39;O&#39;) dfs(board, n - 1, j);
        }
        // 步骤二：
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; m; j++) {
                if (board[i][j] == &#39;O&#39;) board[i][j] = &#39;X&#39;;
                if (board[i][j] == &#39;A&#39;) board[i][j] = &#39;O&#39;;
            }
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 广度优先遍历
// 使用 visited 数组进行标记
class Solution {
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};  // 四个方向

    public void solve(char[][] board) {
        // rowSize：行的长度，colSize：列的长度
        int rowSize = board.length, colSize = board[0].length; 
        boolean[][] visited = new boolean[rowSize][colSize];
        Queue&lt;int[]&gt; queue = new ArrayDeque&lt;&gt;();
        // 从左侧边，和右侧边遍历
        for (int row = 0; row &lt; rowSize; row++) {
            if (board[row][0] == &#39;O&#39;) {
                visited[row][0] = true;
                queue.add(new int[]{row, 0});
            }
            if (board[row][colSize - 1] == &#39;O&#39;) {
                visited[row][colSize - 1] = true;
                queue.add(new int[]{row, colSize - 1});
            }
        }
        // 从上边和下边遍历，在对左侧边和右侧边遍历时我们已经遍历了矩阵的四个角
        // 所以在遍历上边和下边时可以不用遍历四个角
        for (int col = 1; col &lt; colSize - 1; col++) {
            if (board[0][col] == &#39;O&#39;) {
                visited[0][col] = true;
                queue.add(new int[]{0, col});
            }
            if (board[rowSize - 1][col] == &#39;O&#39;) {
                visited[rowSize - 1][col] = true;
                queue.add(new int[]{rowSize - 1, col});
            }
        }
        // 广度优先遍历，把没有被 &#39;X&#39; 包围的 &#39;O&#39; 进行标记
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            for (int[] pos: position) {
                int row = current[0] + pos[0], col = current[1] + pos[1];
                // 如果范围越界、位置已被访问过、该位置的值不是 &#39;O&#39;，就直接跳过
                if (row &lt; 0 || row &gt;= rowSize || col &lt; 0 || col &gt;= colSize) continue;
                if (visited[row][col] || board[row][col] != &#39;O&#39;) continue;
                visited[row][col] = true;
                queue.add(new int[]{row, col});
            }
        }
        // 遍历数组，把没有被标记的 &#39;O&#39; 修改成 &#39;X&#39;
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                if (board[row][col] == &#39;O&#39; &amp;&amp; !visited[row][col]) board[row][col] = &#39;X&#39;;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 广度优先遍历
// 直接修改 board 的值为其他特殊值
class Solution {
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};  // 四个方向

    public void solve(char[][] board) {
        // rowSize：行的长度，colSize：列的长度
        int rowSize = board.length, colSize = board[0].length;
        Queue&lt;int[]&gt; queue = new ArrayDeque&lt;&gt;();
        // 从左侧边，和右侧边遍历
        for (int row = 0; row &lt; rowSize; row++) {
            if (board[row][0] == &#39;O&#39;)
                queue.add(new int[]{row, 0});
            if (board[row][colSize - 1] == &#39;O&#39;)
                queue.add(new int[]{row, colSize - 1});
        }
        // 从上边和下边遍历，在对左侧边和右侧边遍历时我们已经遍历了矩阵的四个角
        // 所以在遍历上边和下边时可以不用遍历四个角
        for (int col = 1; col &lt; colSize - 1; col++) {
            if (board[0][col] == &#39;O&#39;)
                queue.add(new int[]{0, col});
            if (board[rowSize - 1][col] == &#39;O&#39;)
                queue.add(new int[]{rowSize - 1, col});
        }
        // 广度优先遍历，把没有被 &#39;X&#39; 包围的 &#39;O&#39; 修改成特殊值
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            board[current[0]][current[1]] = &#39;A&#39;;
            for (int[] pos: position) {
                int row = current[0] + pos[0], col = current[1] + pos[1];
                // 如果范围越界、该位置的值不是 &#39;O&#39;，就直接跳过
                if (row &lt; 0 || row &gt;= rowSize || col &lt; 0 || col &gt;= colSize) continue;
                if (board[row][col] != &#39;O&#39;) continue;
                queue.add(new int[]{row, col});
            }
        }
        // 遍历数组，把 &#39;O&#39; 修改成 &#39;X&#39;，特殊值修改成 &#39;O&#39;
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                if (board[row][col] == &#39;A&#39;) board[row][col] = &#39;O&#39;;
                else if (board[row][col] == &#39;O&#39;) board[row][col] = &#39;X&#39;; 
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//BFS（使用helper function）
class Solution {
    int[][] dir ={{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    public void solve(char[][] board) {
        for(int i = 0; i &lt; board.length; i++){
            if(board[i][0] == &#39;O&#39;) bfs(board, i, 0);
            if(board[i][board[0].length - 1] == &#39;O&#39;) bfs(board, i, board[0].length - 1);
        }

        for(int j = 1 ; j &lt; board[0].length - 1; j++){
            if(board[0][j] == &#39;O&#39;) bfs(board, 0, j);
            if(board[board.length - 1][j] == &#39;O&#39;) bfs(board, board.length - 1, j);
        }

        for(int i = 0; i &lt; board.length; i++){
            for(int j = 0; j &lt; board[0].length; j++){
                if(board[i][j] == &#39;O&#39;) board[i][j] = &#39;X&#39;;
                if(board[i][j] == &#39;A&#39;) board[i][j] = &#39;O&#39;;
            }
        }
    }
    private void bfs(char[][] board, int x, int y){
        Queue&lt;Integer&gt; que = new LinkedList&lt;&gt;();
        board[x][y] = &#39;A&#39;;
        que.offer(x);
        que.offer(y);
        
        while(!que.isEmpty()){
            int currX = que.poll();
            int currY = que.poll();

            for(int i = 0; i &lt; 4; i++){
                int nextX = currX + dir[i][0];
                int nextY = currY + dir[i][1];

            if(nextX &lt; 0 || nextY &lt; 0 || nextX &gt;= board.length || nextY &gt;= board[0].length)
                continue;
            if(board[nextX][nextY] == &#39;X&#39;|| board[nextX][nextY] == &#39;A&#39;)
                continue;
            bfs(board, nextX, nextY);
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 深度优先遍历
// 使用 visited 数组进行标记
class Solution {
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};  // 四个方向

    public void dfs(char[][] board, int row, int col, boolean[][] visited) {
        for (int[] pos: position) {
            int nextRow = row + pos[0], nextCol = col + pos[1];
            // 位置越界
            if (nextRow &lt; 0 || nextRow &gt;= board.length || nextCol &lt; 0 || nextCol &gt;= board[0].length)
                continue;
            // 位置已被访问过、新位置值不是 &#39;O&#39;
            if (visited[nextRow][nextCol] || board[nextRow][nextCol] != &#39;O&#39;) continue;
            visited[nextRow][nextCol] = true;
            dfs(board, nextRow, nextCol, visited);
        }
    }

    public void solve(char[][] board) {
        int rowSize = board.length, colSize = board[0].length;
        boolean[][] visited = new boolean[rowSize][colSize];
        // 从左侧遍、右侧遍遍历
        for (int row = 0; row &lt; rowSize; row++) {
            if (board[row][0] == &#39;O&#39; &amp;&amp; !visited[row][0]) {
                visited[row][0] = true;
                dfs(board, row, 0, visited);
            }
            if (board[row][colSize - 1] == &#39;O&#39; &amp;&amp; !visited[row][colSize - 1]) {
                visited[row][colSize - 1] = true;
                dfs(board, row, colSize - 1, visited);
            }
        }
        // 从上边和下边遍历，在对左侧边和右侧边遍历时我们已经遍历了矩阵的四个角
        // 所以在遍历上边和下边时可以不用遍历四个角
        for (int col = 1; col &lt; colSize - 1; col++) {
            if (board[0][col] == &#39;O&#39; &amp;&amp; !visited[0][col]) {
                visited[0][col] = true;
                dfs(board, 0, col, visited);
            }
            if (board[rowSize - 1][col] == &#39;O&#39; &amp;&amp; !visited[rowSize - 1][col]) {
                visited[rowSize - 1][col] = true;
                dfs(board, rowSize - 1, col, visited);
            }
        }
        // 遍历数组，把没有被标记的 &#39;O&#39; 修改成 &#39;X&#39;
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                if (board[row][col] == &#39;O&#39; &amp;&amp; !visited[row][col]) board[row][col] = &#39;X&#39;;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 深度优先遍历
// // 直接修改 board 的值为其他特殊值
class Solution {
    private static final int[][] position = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};  // 四个方向

    public void dfs(char[][] board, int row, int col) {
        for (int[] pos: position) {
            int nextRow = row + pos[0], nextCol = col + pos[1];
            // 位置越界
            if (nextRow &lt; 0 || nextRow &gt;= board.length || nextCol &lt; 0 || nextCol &gt;= board[0].length)
                continue;
            // 新位置值不是 &#39;O&#39;
            if (board[nextRow][nextCol] != &#39;O&#39;) continue;
            board[nextRow][nextCol] = &#39;A&#39;;      // 修改为特殊值
            dfs(board, nextRow, nextCol);
        }
    }

    public void solve(char[][] board) {
        int rowSize = board.length, colSize = board[0].length;
        // 从左侧遍、右侧遍遍历
        for (int row = 0; row &lt; rowSize; row++) {
            if (board[row][0] == &#39;O&#39;) {
                board[row][0] = &#39;A&#39;;
                dfs(board, row, 0);
            }
            if (board[row][colSize - 1] == &#39;O&#39;) {
                board[row][colSize - 1] = &#39;A&#39;;
                dfs(board, row, colSize - 1);
            }
        }
        // 从上边和下边遍历，在对左侧边和右侧边遍历时我们已经遍历了矩阵的四个角
        // 所以在遍历上边和下边时可以不用遍历四个角
        for (int col = 1; col &lt; colSize - 1; col++) {
            if (board[0][col] == &#39;O&#39;) {
                board[0][col] = &#39;A&#39;;
                dfs(board, 0, col);
            }
            if (board[rowSize - 1][col] == &#39;O&#39;) {
                board[rowSize - 1][col] = &#39;A&#39;;
                dfs(board, rowSize - 1, col);
            }
        }
        // 遍历数组，把 &#39;O&#39; 修改成 &#39;X&#39;，特殊值修改成 &#39;O&#39;
        for (int row = 0; row &lt; rowSize; row++) {
            for (int col = 0; col &lt; colSize; col++) {
                if (board[row][col] == &#39;O&#39;) board[row][col] = &#39;X&#39;;
                else if (board[row][col] == &#39;A&#39;) board[row][col] = &#39;O&#39;;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//DFS(有終止條件)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dir <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> j <span class="token operator">&lt;</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>board<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> board<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">)</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;X&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;O&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>        
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;X&#39;</span><span class="token operator">||</span> board<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        board<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> nextX <span class="token operator">=</span> x <span class="token operator">+</span> dir<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> nextY <span class="token operator">=</span> y <span class="token operator">+</span> dir<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span><span class="token punctuation">(</span>nextX <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> nextY <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> nextX <span class="token operator">&gt;=</span> board<span class="token punctuation">.</span>length <span class="token operator">||</span> nextY <span class="token operator">&gt;=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token comment">// if(board[nextX][nextY] == &#39;X&#39;|| board[nextX][nextY] == &#39;A&#39;)</span>
            <span class="token comment">//     continue;</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> nextX<span class="token punctuation">,</span> nextY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python3" tabindex="-1"><a class="header-anchor" href="#python3" aria-hidden="true">#</a> Python3</h3><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>// 深度优先遍历
class Solution:
    dir_list = [(0, 1), (0, -1), (1, 0), (-1, 0)]
    def solve(self, board: List[List[str]]) -&gt; None:
        &quot;&quot;&quot;
        Do not return anything, modify board in-place instead.
        &quot;&quot;&quot;
        row_size = len(board)
        column_size = len(board[0])
        visited = [[False] * column_size for _ in range(row_size)]
        # 从边缘开始，将边缘相连的O改成A。然后遍历所有，将A改成O，O改成X
        # 第一行和最后一行
        for i in range(column_size):
            if board[0][i] == &quot;O&quot; and not visited[0][i]:
                self.dfs(board, 0, i, visited)
            if board[row_size-1][i] == &quot;O&quot; and not visited[row_size-1][i]:
                self.dfs(board, row_size-1, i, visited)

        # 第一列和最后一列
        for i in range(1, row_size-1):
            if board[i][0] == &quot;O&quot; and not visited[i][0]:
                self.dfs(board, i, 0, visited)
            if board[i][column_size-1] == &quot;O&quot; and not visited[i][column_size-1]:
                self.dfs(board, i, column_size-1, visited)
        
        for i in range(row_size):
            for j in range(column_size):
                if board[i][j] == &quot;A&quot;:
                    board[i][j] = &quot;O&quot;
                elif board[i][j] == &quot;O&quot;:
                    board[i][j] = &quot;X&quot;

    
    def dfs(self, board, x, y, visited):
        if visited[x][y] or board[x][y] == &quot;X&quot;:
            return
        visited[x][y] = True
        board[x][y] = &quot;A&quot;
        for i in range(4):
            new_x = x + self.dir_list[i][0]
            new_y = y + self.dir_list[i][1]
            if new_x &gt;= len(board) or new_y &gt;= len(board[0]) or new_x &lt; 0 or new_y &lt; 0:
                continue
            self.dfs(board, new_x, new_y, visited)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function w(h,g){const a=l("ExternalLinkIcon");return o(),t("div",null,[r,n("p",null,[n("a",p,[s("题目链接"),i(a)])]),u,v,b,m,n("p",null,[s("这道题目和1020. 飞地的数量正好反过来了，"),n("a",k,[s("1020. 飞地的数量"),i(a)]),s("是求 地图中间的空格数，而本题是要把地图中间的'O'都改成'X'。")]),f])}const O=e(c,[["render",w],["__file","0130.beiweiraodequyu.html.vue"]]);export{O as default};
