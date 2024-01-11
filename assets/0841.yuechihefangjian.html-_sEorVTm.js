import{_ as p,r as o,o as i,c,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_841-钥匙和房间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_841-钥匙和房间","aria-hidden":"true"},"#"),s(" 841.钥匙和房间")],-1),r={href:"https://leetcode.cn/problems/keys-and-rooms/",target:"_blank",rel:"noopener noreferrer"},k=e('<p>有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。</p><p>在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。</p><p>最初，除 0 号房间外的其余所有房间都被锁住。</p><p>你可以自由地在房间之间来回走动。</p><p>如果能进入每个房间返回 true，否则返回 false。</p><p>示例 1：</p><ul><li>输入: [[1],[2],[3],[]]</li><li>输出: true</li><li>解释: 我们从 0 号房间开始，拿到钥匙 1。 之后我们去 1 号房间，拿到钥匙 2。 然后我们去 2 号房间，拿到钥匙 3。 最后我们去了 3 号房间。 由于我们能够进入每个房间，我们返回 true。</li></ul><p>示例 2：</p><ul><li>输入：[[1,3],[3,0,1],[2],[0]]</li><li>输出：false</li><li>解释：我们不能进入 2 号房间。</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题其实给我们是一个有向图， 意识到这是有向图很重要！</p><p>图中给我的两个示例： <code>[[1],[2],[3],[]]</code> <code>[[1,3],[3,0,1],[2],[0]]</code>，画成对应的图如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220714101414.png" alt=""></p><p>我们可以看出图1的所有节点都是链接的，而图二中，节点2 是孤立的。</p><p>这就很容易让我们想起岛屿问题，只要发现独立的岛，就是不能进入所有房间。</p><p>此时也容易想到用并查集的方式去解决。</p><p><strong>但本题是有向图</strong>，在有向图中，即使所有节点都是链接的，但依然不可能从0出发遍历所有边。 给大家举一个例子：</p><p>图3：[[5], [], [1, 3], [5]] ，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220714102201.png" alt=""></p><p>在图3中，大家可以发现，节点0只能到节点5，然后就哪也去不了了。</p><p>所以本题是一个有向图搜索全路径的问题。 只能用深搜（DFS）或者广搜（BFS）来搜。</p>',21),d={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E6%B7%B1%E6%90%9C%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<p><strong>以下dfs分析 大家一定要仔细看，本题有两种dfs的解法，很多题解没有讲清楚</strong>。 看完之后 相信你对dfs会有更深的理解。</p><p>深搜三部曲：</p><ol><li>确认递归函数，参数</li></ol><p>需要传入二维数组rooms来遍历地图，需要知道当前我们拿到的key，以至于去下一个房间。</p><p>同时还需要一个数组，用来记录我们都走过了哪些房间，这样好知道最后有没有把所有房间都遍历的，可以定义一个一维数组。</p><p>所以 递归函数参数如下：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>// key 当前得到的可以 
// visited 记录访问过的房间 
void dfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms, int key, vector&lt;bool&gt;&amp; visited) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>确认终止条件</li></ol><p>遍历的时候，什么时候终止呢？</p><p>这里有一个很重要的逻辑，就是在递归中，<strong>我们是处理当前访问的节点，还是处理下一个要访问的节点</strong>。</p><p>这决定 终止条件怎么写。</p><p>首先明确，本题中什么叫做处理，就是 visited数组来记录访问过的节点，该节点默认 数组里元素都是false，把元素标记为true就是处理 本节点了。</p><p>如果我们是处理当前访问的节点，当前访问的节点如果是 true ，说明是访问过的节点，那就终止本层递归，如果不是true，我们就把它赋值为true，因为这是我们处理本层递归的节点。</p><p>代码就是这样：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>// 写法一：处理当前访问的节点
void dfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms, int key, vector&lt;bool&gt;&amp; visited) {
    if (visited[key]) { // 本层递归是true，说明访问过，立刻返回
        return;
    }
    visited[key] = true; // 给当前遍历的节点赋值true 
    vector&lt;int&gt; keys = rooms[key];
    for (int key : keys) {
        // 深度优先搜索遍历
        dfs(rooms, key, visited);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们是处理下一层访问的节点，而不是当前层。那么就要在 深搜三部曲中第三步：处理目前搜索节点出发的路径的时候对 节点进行处理。</p><p>这样的话，就不需要终止条件，而是在 搜索下一个节点的时候，直接判断 下一个节点是否是我们要搜的节点。</p><p>代码就是这样的：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>// 写法二：处理下一个要访问的节点
void dfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms, int key, vector&lt;bool&gt;&amp; visited) {
    // 这里 没有终止条件，而是在 处理下一层节点的时候来判断
    vector&lt;int&gt; keys = rooms[key];
    for (int key : keys) { 
        if (visited[key] == false) { // 处理下一层节点，判断是否要进行递归
            visited[key] = true;
            dfs(rooms, key, visited);
        }       
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，如果看待 我们要访问的节点，直接决定了两种不一样的写法，很多录友对这一块很模糊，可能做过这道题，但没有思考到这个维度上。</p><ol start="3"><li>处理目前搜索节点出发的路径</li></ol><p>其实在上面，深搜三部曲 第二部，就已经讲了，因为终止条件的两种写法， 直接决定了两种不一样的递归写法。</p><p>这里还有细节：</p><p>看上面两个版本的写法中， 好像没有发现回溯的逻辑。</p>`,24),m={href:"https://programmercarl.com/0797.%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E8%B7%AF%E5%BE%84.html",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"为什么本题就没有回溯呢？",-1),y=n("p",null,"代码中可以看到dfs函数下面并没有回溯的操作。",-1),f=n("p",null,"此时就要在思考本题的要求了，本题是需要判断 0节点是否能到所有节点，那么我们就没有必要回溯去撤销操作了，只要遍历过的节点一律都标记上。",-1),g=n("p",null,[n("strong",null,"那什么时候需要回溯操作呢？")],-1),w={href:"https://programmercarl.com/0797.%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E8%B7%AF%E5%BE%84.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>以上分析完毕，DFS整体实现C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 写法一：处理当前访问的节点
class Solution {
private:
    void dfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms, int key, vector&lt;bool&gt;&amp; visited) {
        if (visited[key]) {
            return;
        }
        visited[key] = true;
        vector&lt;int&gt; keys = rooms[key];
        for (int key : keys) {
            // 深度优先搜索遍历
            dfs(rooms, key, visited);
        }
    }
public:
    bool canVisitAllRooms(vector&lt;vector&lt;int&gt;&gt;&amp; rooms) {
        vector&lt;bool&gt; visited(rooms.size(), false);
        dfs(rooms, 0, visited);
        //检查是否都访问到了
        for (int i : visited) {
            if (i == false) return false;
        }
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>写法二：处理下一个要访问的节点
class Solution {
private:  
    void dfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms, int key, vector&lt;bool&gt;&amp; visited) {
        vector&lt;int&gt; keys = rooms[key];
        for (int key : keys) { 
            if (visited[key] == false) {
                visited[key] = true;
                dfs(rooms, key, visited);
            }       
        }
    }
public:
    bool canVisitAllRooms(vector&lt;vector&lt;int&gt;&gt;&amp; rooms) {
        vector&lt;bool&gt; visited(rooms.size(), false); 
        visited[0] = true; // 0 节点是出发节点，一定被访问过
        dfs(rooms, 0, visited);  
        //检查是否都访问到了
        for (int i : visited) {
            if (i == false) return false;
        }
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E6%B7%B1%E6%90%9C%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
bool bfs(const vector&lt;vector&lt;int&gt;&gt;&amp; rooms) {
    vector&lt;int&gt; visited(rooms.size(), 0); // 标记房间是否被访问过
    visited[0] = 1; //  0 号房间开始
    queue&lt;int&gt; que;
    que.push(0); //  0 号房间开始

    // 广度优先搜索的过程
    while (!que.empty()) {
        int key = que.front(); que.pop();
         vector&lt;int&gt; keys = rooms[key];
         for (int key : keys) {
             if (!visited[key]) {
                 que.push(key);
                 visited[key] = 1;
             }
         }
    }
    // 检查房间是不是都遍历过了
    for (int i : visited) {
        if (i == 0) return false;
    }
    return true;

}
public:
    bool canVisitAllRooms(vector&lt;vector&lt;int&gt;&gt;&amp; rooms) {
        return bfs(rooms);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span>  rooms<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">:</span> rooms<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 深度优先搜索遍历</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> rooms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rooms<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">add</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//检查是否都访问到了</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">boolean</span> flag <span class="token operator">:</span> visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 广度优先搜索
class Solution {
    public boolean canVisitAllRooms(List&lt;List&lt;Integer&gt;&gt; rooms) {
        boolean[] visited = new boolean[rooms.size()];    // 用一个 visited 数据记录房间是否被访问
        visited[0] = true;
        Queue&lt;Integer&gt; queue = new ArrayDeque&lt;&gt;();
        queue.add(0);           // 第 0 个房间标记为已访问
        while (!queue.isEmpty()) {
            int curKey = queue.poll();
            for (int key: rooms.get(curKey)) {
                if (visited[key]) continue;
                visited[key] = true;
                queue.add(key);
            }
        }
        for (boolean key: visited)
            if (!key) return false;
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 广度优先遍历(时间优化)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> rooms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>      <span class="token comment">// 用来记录可以被访问的房间数目，因为初始状态下 0 号房间可以被访问，所以置为 1</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>rooms<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">// 用一个 visited 数据记录房间是否被访问</span>
        visited<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>          <span class="token comment">// 第 0 个房间标记为已访问</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> curKey <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token operator">:</span> rooms<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token operator">++</span>count<span class="token punctuation">;</span>                <span class="token comment">// 每访问一个访问房间就让 count 加 1</span>
                visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count <span class="token operator">==</span> rooms<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 如果 count 等于房间数目，表示能进入所有房间，反之不能</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python3" tabindex="-1"><a class="header-anchor" href="#python3" aria-hidden="true">#</a> python3</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 深度搜索优先</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> rooms<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token punctuation">,</span> visited <span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">bool</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">:</span>
        <span class="token keyword">if</span> visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
        keys <span class="token operator">=</span> rooms<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
            <span class="token comment"># 深度优先搜索遍历</span>
            self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> rooms<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">False</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rooms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

        self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span>

        <span class="token comment"># 检查是否都访问到了</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>visited<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token comment"># 广度搜索优先</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> rooms<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rooms<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>bfs<span class="token punctuation">(</span>rooms<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> visited<span class="token punctuation">)</span>
        
        <span class="token keyword">for</span> room <span class="token keyword">in</span> visited<span class="token punctuation">:</span>
            <span class="token keyword">if</span> room <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    
    <span class="token keyword">def</span> <span class="token function">bfs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> index<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">:</span>
        q <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        visited<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>

        <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            index <span class="token operator">=</span> q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> nextIndex <span class="token keyword">in</span> rooms<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> visited<span class="token punctuation">[</span>nextIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
                    q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>nextIndex<span class="token punctuation">)</span>
                    visited<span class="token punctuation">[</span>nextIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> rooms <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> visited <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	keys <span class="token operator">:=</span> rooms<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token punctuation">,</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
		<span class="token comment">// 深度优先搜索遍历</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span>rooms <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	visited <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>rooms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//检查是否都访问到了</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>visited<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//DFS</span>
<span class="token keyword">var</span> <span class="token function-variable function">canVisitAllRooms</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">rooms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        visited<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">of</span> rooms<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 深度优先搜索遍历</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>rooms<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rooms<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//检查是否都访问到了</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//BFS</span>
<span class="token keyword">var</span> <span class="token function-variable function">canVisitAllRooms</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">rooms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token parameter">rooms</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>rooms<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标记房间是否被访问过</span>
        visited<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0 号房间开始</span>
        <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//js数组作为队列使用</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  0 号房间开始</span>
        <span class="token comment">// 广度优先搜索的过程</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> key <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">of</span> rooms<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    visited<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 检查房间是不是都遍历过了</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> visited<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">bfs</span><span class="token punctuation">(</span>rooms<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// BFS</span>
<span class="token comment">// rooms :就是一个链接表 表示的有向图</span>
<span class="token comment">// 转换问题就是，一次遍历从 0开始 能不能 把所有的节点访问了,实质问题就是一个</span>
<span class="token comment">// 层序遍历</span>
<span class="token keyword">function</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span>rooms<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> rooms<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">//  cnt[i] 代表节点 i 的访问顺序， cnt[i] = 0, 代表没被访问过</span>
  <span class="token keyword">let</span> cnt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  cnt<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> from <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rooms<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> to <span class="token operator">=</span> rooms<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cnt<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 只要其中有一个节点 没被访问过，那么就返回 false</span>
  <span class="token keyword">return</span> cnt<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function x(q,A){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),k,n("p",null,[s("关于DFS的理论，如果大家有困惑，可以先看我这篇题解： "),n("a",d,[s("DFS理论基础"),t(a)])]),v,n("p",null,[s("我们都知道，有递归就有回溯，回溯就在递归函数的下面， 那么之前我们做的dfs题目，都需要回溯操作，例如："),n("a",m,[s("797.所有可能的路径"),t(a)]),s("， "),b]),y,f,g,n("p",null,[s("当我们需要搜索一条可行路径的时候，就需要回溯操作了，因为没有回溯，就没法“调头”， 如果不理解的话，去看我写的 "),n("a",w,[s("797.所有可能的路径"),t(a)]),s(" 的题解。")]),h,n("p",null,[s("本题我也给出 BFS C++代码，"),n("a",_,[s("BFS理论基础"),t(a)]),s("，代码如下：")]),E])}const F=p(l,[["render",x],["__file","0841.yuechihefangjian.html.vue"]]);export{F as default};
