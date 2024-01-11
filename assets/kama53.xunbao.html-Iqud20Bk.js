import{_ as i,o as n,c as e,e as l}from"./app-3RcBQnkC.js";const s={},v=l(`<p>如果你的图相对较小且比较密集，而且你更注重简单性和空间效率，数组实现可能更合适。</p><p>如果你的图规模较大，尤其是在稀疏图中，而且你更注重时间效率和通用性，优先级队列实现可能更合适。</p><p>其关键 在于弄清楚 minDist 的定义</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;queue&gt;
#include &lt;climits&gt;

using namespace std;

// 定义图的邻接矩阵表示
const int INF = INT_MAX; // 表示无穷大
typedef vector&lt;vector&lt;int&gt;&gt; Graph;

// 使用Prim算法找到最小生成树
void primMST(const Graph&amp; graph, int startVertex) {
    int V = graph.size();

    // 存储顶点是否在最小生成树中
    vector&lt;bool&gt; inMST(V, false);

    // 存储最小生成树的边权重
    vector&lt;int&gt; key(V, INF);

    // 优先队列，存储边权重和目标顶点
    priority_queue&lt;pair&lt;int, int&gt;, vector&lt;pair&lt;int, int&gt;&gt;, greater&lt;pair&lt;int, int&gt;&gt;&gt; pq;

    // 初始顶点的权重设为0，加入优先队列
    key[startVertex] = 0;
    pq.push({0, startVertex});

    while (!pq.empty()) {
        // 从优先队列中取出权重最小的边
        int u = pq.top().second;
        pq.pop();

        // 将顶点u标记为在最小生成树中
        inMST[u] = true;

        // 遍历u的所有邻居
        for (int v = 0; v &lt; V; ++v) {
            // 如果v未在最小生成树中，且u到v的权重小于v的当前权重
            if (!inMST[v] &amp;&amp; graph[u][v] &lt; key[v]) {
                // 更新v的权重为u到v的权重
                key[v] = graph[u][v];
                // 将(u, v)添加到最小生成树
                pq.push({key[v], v});
            }
        }
    }

    // 输出最小生成树的边
    cout &lt;&lt; &quot;Edges in the Minimum Spanning Tree:\\n&quot;;
    for (int i = 1; i &lt; V; ++i) {
        cout &lt;&lt; i &lt;&lt; &quot; - &quot; &lt;&lt; key[i] &lt;&lt; &quot; - &quot; &lt;&lt; i &lt;&lt; &quot;\\n&quot;;
    }
}

int main() {
    // 例子：无向图的邻接矩阵表示
    Graph graph = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    // 从顶点0开始运行Prim算法
    primMST(graph, 0);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;climits&gt;

using namespace std;

// 定义图的邻接矩阵表示
const int INF = INT_MAX; // 表示无穷大
typedef vector&lt;vector&lt;int&gt;&gt; Graph;

// 使用Prim算法找到最小生成树
void primMST(const Graph&amp; graph, int startVertex) {
    int V = graph.size();

    // 存储顶点是否在最小生成树中
    vector&lt;bool&gt; inMST(V, false);

    // 存储每个顶点的权重
    vector&lt;int&gt; key(V, INF);

    // 初始化起始顶点的权重为0
    key[startVertex] = 0;

    // 存储最小生成树的边权重
    vector&lt;int&gt; parent(V, -1);

    // 构建最小生成树
    for (int count = 0; count &lt; V - 1; ++count) {
        // 从未在最小生成树中的顶点中找到权重最小的顶点
        int u = -1;
        for (int v = 0; v &lt; V; ++v) {
            if (!inMST[v] &amp;&amp; (u == -1 || key[v] &lt; key[u])) {
                u = v;
            }
        }

        // 将顶点u标记为在最小生成树中
        inMST[u] = true;

        // 更新u的邻居的权重和父节点
        for (int v = 0; v &lt; V; ++v) {
            if (graph[u][v] != 0 &amp;&amp; !inMST[v] &amp;&amp; graph[u][v] &lt; key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    // 输出最小生成树的边
    cout &lt;&lt; &quot;Edges in the Minimum Spanning Tree:\\n&quot;;
    for (int i = 1; i &lt; V; ++i) {
        cout &lt;&lt; parent[i] &lt;&lt; &quot; - &quot; &lt;&lt; key[i] &lt;&lt; &quot; - &quot; &lt;&lt; i &lt;&lt; &quot;\\n&quot;;
    }
}

int main() {
    // 例子：无向图的邻接矩阵表示
    Graph graph = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    // 从顶点0开始运行Prim算法
    primMST(graph, 0);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[v];function r(a,u){return n(),e("div",null,d)}const c=i(s,[["render",r],["__file","kama53.xunbao.html.vue"]]);export{c as default};
