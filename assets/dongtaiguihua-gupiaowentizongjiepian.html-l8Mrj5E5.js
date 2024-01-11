import{_ as r,r as s,o as p,c as a,a as i,b as e,d as l,e as d}from"./app-3RcBQnkC.js";const c={},t=i("h1",{id:"leetcode股票问题总结篇",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#leetcode股票问题总结篇","aria-hidden":"true"},"#"),e(" Leetcode股票问题总结篇!")],-1),v=i("p",null,"之前我们已经把力扣上股票系列的题目都讲过的，但没有来一篇股票总结，来帮大家高屋建瓴，所以总结篇这就来了！",-1),u=i("p",null,[i("img",{src:"https://code-thinking.cdn.bcebos.com/pics/股票问题总结.jpg",alt:"股票问题总结"})],-1),m={href:"https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/0188.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIV.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://programmercarl.com/0309.%E6%9C%80%E4%BD%B3%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E6%97%B6%E6%9C%BA%E5%90%AB%E5%86%B7%E5%86%BB%E6%9C%9F.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://programmercarl.com/0714.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%E5%90%AB%E6%89%8B%E7%BB%AD%E8%B4%B9%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},g=i("h2",{id:"卖股票的最佳时机",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#卖股票的最佳时机","aria-hidden":"true"},"#"),e(" 卖股票的最佳时机")],-1),A={href:"https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"},_=i("strong",null,"股票只能买卖一次，问最大利润",-1),C=d(`<p>【贪心解法】</p><p>取最左最小值，取最右最大值，那么得到的差值就是最大利润，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int low = INT_MAX;
        int result = 0;
        for (int i = 0; i &lt; prices.size(); i++) {
            low = min(low, prices[i]);  // 取最左最小价格
            result = max(result, prices[i] - low); // 直接取最大区间利润
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【动态规划】</p><ul><li>dp[i][0] 表示第i天持有股票所得现金。</li><li>dp[i][1] 表示第i天不持有股票所得现金。</li></ul><p>如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来</p><ul><li>第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]</li><li>第i天买入股票，所得现金就是买入今天的股票后所得现金即：-prices[i] 所以dp[i][0] = max(dp[i - 1][0], -prices[i]);</li></ul><p>如果第i天不持有股票即dp[i][1]， 也可以由两个状态推出来</p><ul><li>第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]</li><li>第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0] 所以dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0]);</li></ul><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int len = prices.size();
        if (len == 0) return 0;
        vector&lt;vector&lt;int&gt;&gt; dp(len, vector&lt;int&gt;(2));
        dp[0][0] -= prices[0];
        dp[0][1] = 0;
        for (int i = 1; i &lt; len; i++) {
            dp[i][0] = max(dp[i - 1][0], -prices[i]);
            dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
        }
        return dp[len - 1][1];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul><p>使用滚动数组，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int len = prices.size();
        vector&lt;vector&lt;int&gt;&gt; dp(2, vector&lt;int&gt;(2)); // 注意这里只开辟了一个2 * 2大小的二维数组
        dp[0][0] -= prices[0];
        dp[0][1] = 0;
        for (int i = 1; i &lt; len; i++) {
            dp[i % 2][0] = max(dp[(i - 1) % 2][0], -prices[i]);
            dp[i % 2][1] = max(dp[(i - 1) % 2][1], prices[i] + dp[(i - 1) % 2][0]);
        }
        return dp[(len - 1) % 2][1];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><h2 id="买卖股票的最佳时机ii" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机ii" aria-hidden="true">#</a> 买卖股票的最佳时机II</h2>`,16),f={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},P=d(`<p>【贪心解法】</p><p>收集每天的正利润便可，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int result = 0;
        for (int i = 1; i &lt; prices.size(); i++) {
            result += max(prices[i] - prices[i - 1], 0);
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p>【动态规划】</p><p>dp数组定义：</p><ul><li>dp[i][0] 表示第i天持有股票所得现金</li><li>dp[i][1] 表示第i天不持有股票所得最多现金</li></ul><p>如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来</p><ul><li>第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]</li><li>第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]</li></ul>`,9),x={href:"https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"},j=d(`<p>而本题，因为一只股票可以买卖多次，所以当第i天买入股票的时候，所持有的现金可能有之前买卖过的利润。</p><p>代码如下：（注意代码中的注释，标记了和121.买卖股票的最佳时机唯一不同的地方）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int len = prices.size();
        vector&lt;vector&lt;int&gt;&gt; dp(len, vector&lt;int&gt;(2, 0));
        dp[0][0] -= prices[0];
        dp[0][1] = 0;
        for (int i = 1; i &lt; len; i++) {
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]); // 注意这里是和121. 买卖股票的最佳时机唯一不同的地方。
            dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
        }
        return dp[len - 1][1];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul><h2 id="买卖股票的最佳时机iii" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机iii" aria-hidden="true">#</a> 买卖股票的最佳时机III</h2>`,5),D={href:"https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html",target:"_blank",rel:"noopener noreferrer"},k=d(`<p>【动态规划】</p><p>一天一共就有五个状态，</p><ol start="0"><li>没有操作</li><li>第一次买入</li><li>第一次卖出</li><li>第二次买入</li><li>第二次卖出</li></ol><p>dp[i][j]中 i表示第i天，j为 [0 - 4] 五个状态，dp[i][j]表示第i天状态j所剩最大现金。</p><p>达到dp[i][1]状态，有两个具体操作：</p><ul><li>操作一：第i天买入股票了，那么dp[i][1] = dp[i-1][0] - prices[i]</li><li>操作二：第i天没有操作，而是沿用前一天买入的状态，即：dp[i][1] = dp[i - 1][1]</li></ul><p>dp[i][1] = max(dp[i-1][0] - prices[i], dp[i - 1][1]);</p><p>同理dp[i][2]也有两个操作：</p><ul><li>操作一：第i天卖出股票了，那么dp[i][2] = dp[i - 1][1] + prices[i]</li><li>操作二：第i天没有操作，沿用前一天卖出股票的状态，即：dp[i][2] = dp[i - 1][2]</li></ul><p>所以dp[i][2] = max(dp[i - 1][1] + prices[i], dp[i - 1][2])</p><p>同理可推出剩下状态部分：</p><p>dp[i][3] = max(dp[i - 1][3], dp[i - 1][2] - prices[i]);</p><p>dp[i][4] = max(dp[i - 1][4], dp[i - 1][3] + prices[i]);</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        if (prices.size() == 0) return 0;
        vector&lt;vector&lt;int&gt;&gt; dp(prices.size(), vector&lt;int&gt;(5, 0));
        dp[0][1] = -prices[0];
        dp[0][3] = -prices[0];
        for (int i = 1; i &lt; prices.size(); i++) {
            dp[i][0] = dp[i - 1][0];
            dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
            dp[i][2] = max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
            dp[i][3] = max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
            dp[i][4] = max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
        }
        return dp[prices.size() - 1][4];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n × 5)</li></ul><p>当然，大家可以看到力扣官方题解里的一种优化空间写法，我这里给出对应的C++版本：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        if (prices.size() == 0) return 0;
        vector&lt;int&gt; dp(5, 0);
        dp[1] = -prices[0];
        dp[3] = -prices[0];
        for (int i = 1; i &lt; prices.size(); i++) {
            dp[1] = max(dp[1], dp[0] - prices[i]);
            dp[2] = max(dp[2], dp[1] + prices[i]);
            dp[3] = max(dp[3], dp[2] - prices[i]);
            dp[4] = max(dp[4], dp[3] + prices[i]);
        }
        return dp[4];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p><strong>这种写法看上去简单，其实思路很绕，不建议大家这么写，这么思考，很容易把自己绕进去！</strong> 对于本题，把版本一的写法研究明白，足以！</p><h2 id="买卖股票的最佳时机iv" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机iv" aria-hidden="true">#</a> 买卖股票的最佳时机IV</h2>`,21),z={href:"https://programmercarl.com/0188.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIV.html",target:"_blank",rel:"noopener noreferrer"},F=d(`<p>使用二维数组 dp[i][j] ：第i天的状态为j，所剩下的最大现金是dp[i][j]</p><p>j的状态表示为：</p><ul><li>0 表示不操作</li><li>1 第一次买入</li><li>2 第一次卖出</li><li>3 第二次买入</li><li>4 第二次卖出</li><li>.....</li></ul><p><strong>除了0以外，偶数就是卖出，奇数就是买入</strong>。</p><ol start="2"><li>确定递推公式</li></ol><p>达到dp[i][1]状态，有两个具体操作：</p><ul><li>操作一：第i天买入股票了，那么dp[i][1] = dp[i - 1][0] - prices[i]</li><li>操作二：第i天没有操作，而是沿用前一天买入的状态，即：dp[i][1] = dp[i - 1][1]</li></ul><p>dp[i][1] = max(dp[i - 1][0] - prices[i], dp[i - 1][1]);</p><p>同理dp[i][2]也有两个操作：</p><ul><li>操作一：第i天卖出股票了，那么dp[i][2] = dp[i - 1][1] + prices[i]</li><li>操作二：第i天没有操作，沿用前一天卖出股票的状态，即：dp[i][2] = dp[i - 1][2]</li></ul><p>dp[i][2] = max(dp[i - 1][1] + prices[i], dp[i - 1][2])</p><p>同理可以类比剩下的状态，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>for (int j = 0; j &lt; 2 * k - 1; j += 2) {
    dp[i][j + 1] = max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
    dp[i][j + 2] = max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(int k, vector&lt;int&gt;&amp; prices) {

        if (prices.size() == 0) return 0;
        vector&lt;vector&lt;int&gt;&gt; dp(prices.size(), vector&lt;int&gt;(2 * k + 1, 0));
        for (int j = 1; j &lt; 2 * k; j += 2) {
            dp[0][j] = -prices[0];
        }
        for (int i = 1;i &lt; prices.size(); i++) {
            for (int j = 0; j &lt; 2 * k - 1; j += 2) {
                dp[i][j + 1] = max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
                dp[i][j + 2] = max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
            }
        }
        return dp[prices.size() - 1][2 * k];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然有的解法是定义一个三维数组dp[i][j][k]，第i天，第j次买卖，k表示买还是卖的状态，从定义上来讲是比较直观。但感觉三维数组操作起来有些麻烦，直接用二维数组来模拟三维数组的情况，代码看起来也清爽一些。</p><h2 id="最佳买卖股票时机含冷冻期" tabindex="-1"><a class="header-anchor" href="#最佳买卖股票时机含冷冻期" aria-hidden="true">#</a> 最佳买卖股票时机含冷冻期</h2>`,17),O={href:"https://programmercarl.com/0309.%E6%9C%80%E4%BD%B3%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E6%97%B6%E6%9C%BA%E5%90%AB%E5%86%B7%E5%86%BB%E6%9C%9F.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},w=d(`<p>dp[i][j]：第i天状态为j，所剩的最多现金为dp[i][j]。</p><p>具体可以区分出如下四个状态：</p><ul><li>状态一：买入股票状态（今天买入股票，或者是之前就买入了股票然后没有操作）</li><li>卖出股票状态，这里就有两种卖出股票状态 <ul><li>状态二：两天前就卖出了股票，度过了冷冻期，一直没操作，今天保持卖出股票状态</li><li>状态三：今天卖出了股票</li></ul></li><li>状态四：今天为冷冻期状态，但冷冻期状态不可持续，只有一天！</li></ul><p>达到买入股票状态（状态一）即：dp[i][0]，有两个具体操作：</p><ul><li>操作一：前一天就是持有股票状态（状态一），dp[i][0] = dp[i - 1][0]</li><li>操作二：今天买入了，有两种情况 <ul><li>前一天是冷冻期（状态四），dp[i - 1][3] - prices[i]</li><li>前一天是保持卖出股票状态（状态二），dp[i - 1][1] - prices[i]</li></ul></li></ul><p>所以操作二取最大值，即：max(dp[i - 1][3], dp[i - 1][1]) - prices[i]</p><p>那么dp[i][0] = max(dp[i - 1][0], max(dp[i - 1][3], dp[i - 1][1]) - prices[i]);</p><p>达到保持卖出股票状态（状态二）即：dp[i][1]，有两个具体操作：</p><ul><li>操作一：前一天就是状态二</li><li>操作二：前一天是冷冻期（状态四）</li></ul><p>dp[i][1] = max(dp[i - 1][1], dp[i - 1][3]);</p><p>达到今天就卖出股票状态（状态三），即：dp[i][2] ，只有一个操作：</p><ul><li>操作一：昨天一定是买入股票状态（状态一），今天卖出</li></ul><p>即：dp[i][2] = dp[i - 1][0] + prices[i];</p><p>达到冷冻期状态（状态四），即：dp[i][3]，只有一个操作：</p><ul><li>操作一：昨天卖出了股票（状态三）</li></ul><p>p[i][3] = dp[i - 1][2];</p><p>综上分析，递推代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>dp[i][0] = max(dp[i - 1][0], max(dp[i - 1][3]- prices[i], dp[i - 1][1]) - prices[i];
dp[i][1] = max(dp[i - 1][1], dp[i - 1][3]);
dp[i][2] = dp[i - 1][0] + prices[i];
dp[i][3] = dp[i - 1][2];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int n = prices.size();
        if (n == 0) return 0;
        vector&lt;vector&lt;int&gt;&gt; dp(n, vector&lt;int&gt;(4, 0));
        dp[0][0] -= prices[0]; // 持股票
        for (int i = 1; i &lt; n; i++) {
            dp[i][0] = max(dp[i - 1][0], max(dp[i - 1][3], dp[i - 1][1]) - prices[i]);
            dp[i][1] = max(dp[i - 1][1], dp[i - 1][3]);
            dp[i][2] = dp[i - 1][0] + prices[i];
            dp[i][3] = dp[i - 1][2];
        }
        return max(dp[n - 1][3],max(dp[n - 1][1], dp[n - 1][2]));
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul><h2 id="买卖股票的最佳时机含手续费" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机含手续费" aria-hidden="true">#</a> 买卖股票的最佳时机含手续费</h2>`,22),N={href:"https://programmercarl.com/0714.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%E5%90%AB%E6%89%8B%E7%BB%AD%E8%B4%B9%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},T=d("<p>唯一差别在于递推公式部分，所以本篇也就不按照动规五部曲详细讲解了，主要讲解一下递推公式部分。</p><p>这里重申一下dp数组的含义：</p><p>dp[i][0] 表示第i天持有股票所省最多现金。 dp[i][1] 表示第i天不持有股票所得最多现金</p><p>如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来</p><ul><li>第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]</li><li>第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]</li></ul><p>所以：dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]);</p><p>在来看看如果第i天不持有股票即dp[i][1]的情况， 依然可以由两个状态推出来</p><ul><li>第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]</li><li>第i天卖出股票，所得现金就是按照今天股票价格卖出后所得现金，<strong>注意这里需要有手续费了</strong>即：dp[i - 1][0] + prices[i] - fee</li></ul><p>所以：dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);</p>",9),G={href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"},M=d(`<p>以上分析完毕，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices, int fee) {
        int n = prices.size();
        vector&lt;vector&lt;int&gt;&gt; dp(n, vector&lt;int&gt;(2, 0));
        dp[0][0] -= prices[0]; // 持股票
        for (int i = 1; i &lt; n; i++) {
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
            dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
        }
        return max(dp[n - 1][0], dp[n - 1][1]);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>至此，股票系列正式剧终，全部讲解完毕！</p><p>从买卖一次到买卖多次，从最多买卖两次到最多买卖k次，从冷冻期再到手续费，最后再来一个股票大总结，可以说对股票系列完美收官了。</p><p>「代码随想录」值得推荐给身边每一位学习算法的朋友同学们，关注后都会发现相见恨晚！</p>`,7);function X(q,y){const n=s("ExternalLinkIcon");return p(),a("div",null,[t,v,u,i("ul",null,[i("li",null,[i("a",m,[e("动态规划：121.买卖股票的最佳时机"),l(n)])]),i("li",null,[i("a",o,[e("动态规划：122.买卖股票的最佳时机II"),l(n)])]),i("li",null,[i("a",E,[e("动态规划：123.买卖股票的最佳时机III"),l(n)])]),i("li",null,[i("a",b,[e("动态规划：188.买卖股票的最佳时机IV"),l(n)])]),i("li",null,[i("a",h,[e("动态规划：309.最佳买卖股票时机含冷冻期"),l(n)])]),i("li",null,[i("a",B,[e("动态规划：714.买卖股票的最佳时机含手续费"),l(n)])])]),g,i("p",null,[i("a",A,[e("动态规划：121.买卖股票的最佳时机"),l(n)]),e("，"),_,e("。")]),C,i("p",null,[i("a",f,[e("动态规划：122.买卖股票的最佳时机II"),l(n)]),e("可以多次买卖股票，问最大收益。")]),P,i("p",null,[i("strong",null,[e("注意这里和"),i("a",x,[e("121. 买卖股票的最佳时机"),l(n)]),e("唯一不同的地方，就是推导dp[i][0]的时候，第i天买入股票的情况")]),e("。")]),i("p",null,[e("在"),i("a",I,[e("121. 买卖股票的最佳时机"),l(n)]),e("中，因为股票全程只能买卖一次，所以如果买入股票，那么第i天持有股票即dp[i][0]一定就是 -prices[i]。")]),j,i("p",null,[i("a",D,[e("动态规划：123.买卖股票的最佳时机III"),l(n)]),e("最多买卖两次，问最大收益。")]),k,i("p",null,[i("a",z,[e("动态规划：188.买卖股票的最佳时机IV"),l(n)]),e(" 最多买卖k笔交易，问最大收益。")]),F,i("p",null,[i("a",O,[e("动态规划：309.最佳买卖股票时机含冷冻期"),l(n)]),e("可以多次买卖但每次卖出有冷冻期1天。")]),i("p",null,[e("相对于"),i("a",S,[e("动态规划：122.买卖股票的最佳时机II"),l(n)]),e("，本题加上了一个冷冻期。")]),i("p",null,[e("在"),i("a",V,[e("动态规划：122.买卖股票的最佳时机II"),l(n)]),e(" 中有两个状态，持有股票后的最多现金，和不持有股票的最多现金。本题则可以花费为四个状态")]),w,i("p",null,[i("a",N,[e("动态规划：714.买卖股票的最佳时机含手续费"),l(n)]),e(" 可以多次买卖，但每次有手续费。")]),i("p",null,[e("相对于"),i("a",L,[e("动态规划：122.买卖股票的最佳时机II"),l(n)]),e("，本题只需要在计算卖出操作的时候减去手续费就可以了，代码几乎是一样的。")]),T,i("p",null,[i("strong",null,[e("本题和"),i("a",G,[e("动态规划：122.买卖股票的最佳时机II"),l(n)]),e("的区别就是这里需要多一个减去手续费的操作")]),e("。")]),M])}const J=r(c,[["render",X],["__file","dongtaiguihua-gupiaowentizongjiepian.html.vue"]]);export{J as default};
