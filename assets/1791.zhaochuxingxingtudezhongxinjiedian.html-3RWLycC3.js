import{_ as d,r as s,o as l,c as r,a as e,b as i,d as t,e as a}from"./app-3RcBQnkC.js";const c={},v=e("h1",{id:"_1791-找出星型图的中心节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1791-找出星型图的中心节点","aria-hidden":"true"},"#"),i(" 1791.找出星型图的中心节点")],-1),u={href:"https://leetcode.cn/problems/find-center-of-star-graph/",target:"_blank",rel:"noopener noreferrer"},o=a(`<p>本题思路就是统计各个节点的度（这里没有区别入度和出度），如果某个节点的度等于这个图边的数量。 那么这个节点一定是中心节点。</p><p>什么是度，可以理解为，链接节点的边的数量。 题目中度如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220704113207.png" alt="1791.找出星型图的中心节点"></p><p>至于出度和入度，那就是在有向图里的概念了，本题是无向图。</p><p>本题代码如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
class Solution {
public:
    int findCenter(vector&lt;vector&lt;int&gt;&gt;&amp; edges) {
        unordered_map&lt;int ,int&gt; du;
        for (int i = 0; i &lt; edges.size(); i++) { // 统计各个节点的度    
                du[edges[i][1]]++;
                du[edges[i][0]]++;
        }
        unordered_map&lt;int, int&gt;::iterator iter;  // 找出度等于边熟练的节点
        for (iter = du.begin(); iter != du.end(); iter++) { 
            if (iter-&gt;second == edges.size()) return iter-&gt;first;
        }
        return -1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实可以只记录度不用最后统计，因为题目说了一定是星状图，所以 一旦有 节点的度 大于1，就返回该节点数值就行，只有中心节点的度会大于1。</p><p>代码如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
public:
    int findCenter(vector&lt;vector&lt;int&gt;&gt;&amp; edges) {
        vector&lt;int&gt; du(edges.size() + 2);  // edges.size() + 1 为节点数量，下标表示节点数，所以+2 
        for (int i = 0; i &lt; edges.size(); i++) {
            du[edges[i][1]]++;
            du[edges[i][0]]++;
            if (du[edges[i][1]] &gt; 1) return edges[i][1];
            if (du[edges[i][0]] &gt; 1) return edges[i][0];

        }
        return -1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中没有使用 unordered_map，因为遍历的时候，开辟新空间会浪费时间，而采用 vector，这是 空间换时间的一种策略。</p><p>代码其实可以再精简：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
public:
    int findCenter(vector&lt;vector&lt;int&gt;&gt;&amp; edges) {
        vector&lt;int&gt; du(edges.size() + 2);
        for (int i = 0; i &lt; edges.size(); i++) {
            if (++du[edges[i][1]] &gt; 1) return edges[i][1];
            if (++du[edges[i][0]] &gt; 1) return edges[i][0];
        }
        return -1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(g,b){const n=s("ExternalLinkIcon");return l(),r("div",null,[v,e("p",null,[e("a",u,[i("题目链接"),t(n)])]),o])}const _=d(c,[["render",m],["__file","1791.zhaochuxingxingtudezhongxinjiedian.html.vue"]]);export{_ as default};
