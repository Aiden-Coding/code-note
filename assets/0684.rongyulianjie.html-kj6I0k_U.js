import{_ as e,r as o,o as i,c,a as n,b as s,d as t,e as p}from"./app-3RcBQnkC.js";const u={},l=n("h1",{id:"_684-冗余连接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_684-冗余连接","aria-hidden":"true"},"#"),s(" 684.冗余连接")],-1),k={href:"https://leetcode.cn/problems/redundant-connection/",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>树可以看成是一个连通且 无环 的 无向 图。</p><p>给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。</p><p>请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210727150215.png" alt=""></p><p>提示:</p><ul><li>n == edges.length</li><li>3 &lt;= n &lt;= 1000</li><li>edges[i].length == 2</li><li>1 &lt;= ai &lt; bi &lt;= edges.length</li><li>ai != bi</li><li>edges 中无重复元素</li><li>给定的图是连通的</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目也是并查集基础题目。</p><p>首先要知道并查集可以解决什么问题呢？</p><p>主要就是集合问题，两个节点在不在一个集合，也可以将两个节点添加到一个集合中。</p><p>这里整理出我的并查集模板如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int n = 1005; // n根据题目中节点数量而定，一般比节点数量大一点就好
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上模板 只要修改 n 就可以了，本题 节点数量不会超过1000。</p><p>并查集主要有三个功能。</p><ol><li>寻找根节点，函数：find(int u)，也就是判断这个节点的祖先节点是哪个</li><li>将两个节点接入到同一个集合，函数：join(int u, int v)，将两个节点连在同一个根节点上</li><li>判断两个节点是否在同一个集合，函数：isSame(int u, int v)，就是判断两个节点是不是同一个根节点</li></ol>`,15),r={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E5%B9%B6%E6%9F%A5%E9%9B%86%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>我们再来看一下这道题目。</p><p>题目说是无向图，返回一条可以删去的边，使得结果图是一个有着N个节点的树（即：只有一个根节点）。</p><p>如果有多个答案，则返回二维数组中最后出现的边。</p><p>那么我们就可以从前向后遍历每一条边（因为优先让前面的边连上），边的两个节点如果不在同一个集合，就加入集合（即：同一个根节点）。</p><p>如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20230604104720.png" alt=""></p><p>节点A 和节点 B 不在同一个集合，那么就可以将两个 节点连在一起。</p><p>（如果题目中说：如果有多个答案，则返回二维数组中最前出现的边。 那我们就要 从后向前遍历每一条边了）</p><p>如果边的两个节点已经出现在同一个集合里，说明着边的两个节点已经连在一起了，再加入这条边一定就出现环了。</p><p>如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20230604104330.png" alt=""></p><p>已经判断 节点A 和 节点B 在在同一个集合（同一个根），如果将 节点A 和 节点B 连在一起就一定会出现环。</p><p>这个思路清晰之后，代码就很好写了。</p><p>并查集C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int n = 1005; // 节点数量3 到 1000
    vector&lt;int&gt; father = vector&lt;int&gt; (n, 0); // C++里的一种数组结构

    // 并查集初始化
    void init() {
        for (int i = 0; i &lt; n; ++i) {
            father[i] = i;
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
    vector&lt;int&gt; findRedundantConnection(vector&lt;vector&lt;int&gt;&gt;&amp; edges) {
        init();
        for (int i = 0; i &lt; edges.size(); i++) {
            if (isSame(edges[i][0], edges[i][1])) return edges[i];
            else join(edges[i][0], edges[i][1]);
        }
        return {};
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，主函数的代码很少，就判断一下边的两个节点在不在同一个集合就可以了。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>  <span class="token comment">// 节点数量3 到 1000</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> father<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> <span class="token number">1005</span><span class="token punctuation">;</span>
        father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 并查集初始化</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            father<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 并查集里寻根的过程</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>u <span class="token operator">==</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> u<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将v-&gt;u 这条边加入并查集</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">==</span> v<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">;</span>
        father<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断 u 和 v是否找到同一个根，本题用不上</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> <span class="token function">same</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> u <span class="token operator">==</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">findRedundantConnection</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edges<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">same</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token punctuation">{</span>
                <span class="token function">join</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        初始化
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>n <span class="token operator">=</span> <span class="token number">1005</span>
        self<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span>


    <span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        并查集里寻根的过程
        &quot;&quot;&quot;</span>
        <span class="token keyword">if</span> u <span class="token operator">==</span> self<span class="token punctuation">.</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> u
        self<span class="token punctuation">.</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>self<span class="token punctuation">.</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">join</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        将v-&gt;u 这条边加入并查集
        &quot;&quot;&quot;</span>
        u <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>u<span class="token punctuation">)</span>
        v <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token keyword">if</span> u <span class="token operator">==</span> v <span class="token punctuation">:</span> <span class="token keyword">return</span>
        self<span class="token punctuation">.</span>father<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u
        <span class="token keyword">pass</span>


    <span class="token keyword">def</span> <span class="token function">same</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> u<span class="token punctuation">,</span> v <span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        判断 u 和 v是否找到同一个根，本题用不上
        &quot;&quot;&quot;</span>
        u <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>u<span class="token punctuation">)</span>
        v <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token keyword">return</span> u <span class="token operator">==</span> v

    <span class="token keyword">def</span> <span class="token function">findRedundantConnection</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edges<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>edges<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>same<span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
                <span class="token keyword">return</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">else</span> <span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>join<span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python简洁写法" tabindex="-1"><a class="header-anchor" href="#python简洁写法" aria-hidden="true">#</a> Python简洁写法：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">findRedundantConnection</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edges<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>edges<span class="token punctuation">)</span>
        p <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">:</span>
                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> find<span class="token punctuation">(</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">for</span> u<span class="token punctuation">,</span> v <span class="token keyword">in</span> edges<span class="token punctuation">:</span>
            <span class="token keyword">if</span> p<span class="token punctuation">[</span>find<span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">==</span> find<span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>u<span class="token punctuation">,</span> v<span class="token punctuation">]</span>
            p<span class="token punctuation">[</span>find<span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> find<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token comment">// 全局变量</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    n <span class="token operator">=</span> <span class="token number">1005</span> <span class="token comment">// 节点数量3 到 1000</span>
    father <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1005</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// 并查集初始化</span>
<span class="token keyword">func</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		father<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 并查集里寻根的过程</span>
<span class="token keyword">func</span> <span class="token function">find</span><span class="token punctuation">(</span>u <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> u <span class="token operator">==</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> u
	<span class="token punctuation">}</span>
	father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将v-&gt;u 这条边加入并查集</span>
<span class="token keyword">func</span> <span class="token function">join</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
	v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token keyword">if</span> u <span class="token operator">==</span> v <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	father<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u
<span class="token punctuation">}</span>

<span class="token comment">// 判断 u 和 v是否找到同一个根，本题用不上</span>
<span class="token keyword">func</span> <span class="token function">same</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
	v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token keyword">return</span> u <span class="token operator">==</span> v
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">findRedundantConnection</span><span class="token punctuation">(</span>edges <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>edges<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token function">same</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token function">join</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">1005</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 并查集里寻根的过程</span>
<span class="token keyword">const</span> <span class="token function-variable function">find</span> <span class="token operator">=</span> <span class="token parameter">u</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> u <span class="token operator">==</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">?</span> u <span class="token operator">:</span> father<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>father<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 将v-&gt;u 这条边加入并查集</span>
<span class="token keyword">const</span> <span class="token function-variable function">join</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">u<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
    v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>u <span class="token operator">==</span> v<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    father<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 判断 u 和 v是否找到同一个根，本题用不上</span>
<span class="token keyword">const</span> <span class="token function-variable function">same</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">u<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    u <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
    v <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> u <span class="token operator">==</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRedundantConnection</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">edges</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 并查集初始化</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        father<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edges<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">same</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token function">join</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> edges<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function m(b,f){const a=o("ExternalLinkIcon");return i(),c("div",null,[l,n("p",null,[n("a",k,[s("力扣题目链接"),t(a)])]),d,n("p",null,[s("如果还不了解并查集，可以看这里："),n("a",r,[s("并查集理论基础"),t(a)])]),v])}const h=e(u,[["render",m],["__file","0684.rongyulianjie.html.vue"]]);export{h as default};
