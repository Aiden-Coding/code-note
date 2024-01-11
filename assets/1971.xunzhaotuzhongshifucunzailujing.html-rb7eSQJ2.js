import{_ as t,r as p,o as l,c,a as n,b as s,d as i,e}from"./app-3RcBQnkC.js";const o={},u=n("h1",{id:"_1971-寻找图中是否存在路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1971-寻找图中是否存在路径","aria-hidden":"true"},"#"),s(" 1971. 寻找图中是否存在路径")],-1),d={href:"https://leetcode.cn/problems/find-if-path-exists-in-graph/",target:"_blank",rel:"noopener noreferrer"},r=e('<p>有一个具有 n个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条 边连接，并且没有顶点存在与自身相连的边。</p><p>请你确定是否存在从顶点 start 开始，到顶点 end 结束的 有效路径 。</p><p>给你数组 edges 和整数 n、start和end，如果从 start 到 end 存在 有效路径 ，则返回 true，否则返回 false 。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220705101442.png" alt=""></p><p>提示:</p><ul><li>1 &lt;= n &lt;= 2 * 10^5</li><li>0 &lt;= edges.length &lt;= 2 * 10^5</li><li>edges[i].length == 2</li><li>0 &lt;= ui, vi &lt;= n - 1</li><li>ui != vi</li><li>0 &lt;= start, end &lt;= n - 1</li><li>不存在双向边</li><li>不存在指向顶点自身的边</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>',7),v={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E5%B9%B6%E6%9F%A5%E9%9B%86%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>并查集可以解决什么问题呢？</p><p>主要就是集合问题，两个节点在不在一个集合，也可以将两个节点添加到一个集合中。</p><p>这里整理出我的并查集模板如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int n = 1005; // n根据题目中节点数量而定，一般比节点数量大一点就好
vector&lt;int&gt; father = vector&lt;int&gt; (n, 0); // C++里的一种数组结构

// 并查集初始化
void init() {
    for (int i = 0; i &lt; n; ++i) {
        father[i] = i;
    }
}
// 并查集里寻根的过程
int find(int u) {
    return u == father[u] ? u : father[u] = find(father[u]); // 路径压缩
}

// 判断 u 和 v是否找到同一个根
bool isSame(int u, int v) {
    u = find(u);
    v = find(v);
    return u == v;
}

// 将v-&gt;u 这条边加入并查集
void join(int u, int v) {
    u = find(u); // 寻找u的根
    v = find(v); // 寻找v的根
    if (u == v) return ; // 如果发现根相同，则说明在一个集合，不用两个节点相连直接返回
    father[v] = u;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上模板中，只要修改 n 大小就可以，本题n不会超过2 * 10^5。</p><p>并查集主要有三个功能。</p><ol><li>寻找根节点，函数：find(int u)，也就是判断这个节点的祖先节点是哪个</li><li>将两个节点接入到同一个集合，函数：join(int u, int v)，将两个节点连在同一个根节点上</li><li>判断两个节点是否在同一个集合，函数：isSame(int u, int v)，就是判断两个节点是不是同一个根节点</li></ol><p>简单介绍并查集之后，我们再来看一下这道题目。</p><p>为什么说这道题目是并查集基础题目，题目中各个点是双向图链接，那么判断 一个顶点到另一个顶点有没有有效路径其实就是看这两个顶点是否在同一个集合里。</p><p>如何算是同一个集合呢，有边连在一起，就算是一个集合。</p><p>此时我们就可以直接套用并查集模板。</p><p>使用join(int u, int v)将每条边加入到并查集。</p><p>最后 isSame(int u, int v) 判断是否是同一个根 就可以了。</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int n = 200005; // 节点数量 20000
    vector&lt;int&gt; father = vector&lt;int&gt; (n, 0); // C++里的一种数组结构

    // 并查集初始化
    void init() {
        for (int i = 0; i &lt; n; ++i) { father[i] = i;
        }
    }
    // 并查集里寻根的过程
    int find(int u) {
        return u == father[u] ? u : father[u] = find(father[u]);
    }

    // 判断 u 和 v是否找到同一个根
    bool isSame(int u, int v) {
        u = find(u);
        v = find(v);
        return u == v;
    }

    // 将v-&gt;u 这条边加入并查集
    void join(int u, int v) {
        u = find(u); // 寻找u的根
        v = find(v); // 寻找v的根
        if (u == v) return ; // 如果发现根相同，则说明在一个集合，不用两个节点相连直接返回
        father[v] = u;
    }

public:
    bool validPath(int n, vector&lt;vector&lt;int&gt;&gt;&amp; edges, int source, int destination) {
        init();
        for (int i = 0; i &lt; edges.size(); i++) {
            join(edges[i][0], edges[i][1]);
        }
        return isSame(source, destination);

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> father<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">validPath</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> edges<span class="token punctuation">,</span> <span class="token keyword">int</span> source<span class="token punctuation">,</span> <span class="token keyword">int</span> destination<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edges<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">join</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">isSame</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 并查集初始化</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> father<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            father<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 并查集里寻根的过程</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">==</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> u<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断 u 和 v是否找到同一个根</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSame</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> u <span class="token operator">==</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将v-&gt;u 这条边加入并查集</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 寻找u的根</span>
        v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 寻找v的根</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">==</span> v<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 如果发现根相同，则说明在一个集合，不用两个节点相连直接返回</span>

        father<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><p>PYTHON并查集解法如下：</p><div class="language-PYTHON line-numbers-mode" data-ext="PYTHON"><pre class="language-PYTHON"><code>class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -&gt; bool:
        p = [i for i in range(n)]
        def find(i):
            if p[i] != i:
                p[i] = find(p[i])
            return p[i]
        for u, v in edges:
            p[find(u)] = find(v)
        return find(source) == find(destination)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function m(b,f){const a=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[n("a",d,[s("题目链接"),i(a)])]),r,n("p",null,[s("本题是并查集基础题目。 如果还不了解并查集，可以看这里："),n("a",v,[s("并查集理论基础"),i(a)])]),k])}const g=t(o,[["render",m],["__file","1971.xunzhaotuzhongshifucunzailujing.html.vue"]]);export{g as default};
