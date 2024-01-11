import{_ as l,r as d,o as a,c as t,a as n,b as i,d as r,e as s}from"./app-3RcBQnkC.js";const o={},c=n("h1",{id:"本周小结-动态规划系列五",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本周小结-动态规划系列五","aria-hidden":"true"},"#"),i(" 本周小结！（动态规划系列五）")],-1),v=n("h2",{id:"周一",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),i(" 周一")],-1),m={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"题目面试虽然是组合，但又强调顺序不同的序列被视作不同的组合，其实这道题目求的是排列数！",-1),p=n("p",null,"递归公式：dp[i] += dp[i - nums[j]];",-1),b=n("p",null,"这个和前上周讲的组合问题又不一样，关键就体现在遍历顺序上！",-1),h={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},_=s(`<p><strong>如果求组合数就是外层for循环遍历物品，内层for遍历背包</strong>。</p><p><strong>如果求排列数就是外层for遍历背包，内层for循环遍历物品</strong>。</p><p>如果把遍历nums（物品）放在外循环，遍历target的作为内循环的话，举一个例子：计算dp[4]的时候，结果集只有 {1,3} 这样的集合，不会有{3,1}这样的集合，因为nums遍历放在外层，3只能出现在1后面！</p><p>所以本题遍历顺序最终遍历顺序：<strong>target（背包）放在外循环，将nums（物品）放在内循环，内循环从前到后遍历</strong>。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int combinationSum4(vector&lt;int&gt;&amp; nums, int target) {
        vector&lt;int&gt; dp(target + 1, 0);
        dp[0] = 1;
        for (int i = 0; i &lt;= target; i++) { // 遍历背包
            for (int j = 0; j &lt; nums.size(); j++) { // 遍历物品
                if (i - nums[j] &gt;= 0 &amp;&amp; dp[i] &lt; INT_MAX - dp[i - nums[j]]) {
                    dp[i] += dp[i - nums[j]];
                }
            }
        }
        return dp[target];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>`,6),g={href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"改为：每次可以爬 1 、 2、.....、m 个台阶。问有多少种不同的方法可以爬到楼顶呢？",-1),f=n("p",null,"1阶，2阶，.... m阶就是物品，楼顶就是背包。",-1),j=n("p",null,"每一阶可以重复使用，例如跳了1阶，还可以继续跳1阶。",-1),C=n("p",null,"问跳到楼顶有几种方法其实就是问装满背包有几种方法。",-1),B=n("p",null,[n("strong",null,"此时大家应该发现这就是一个完全背包问题了！")],-1),A={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},P=s(`<p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int climbStairs(int n) {
        vector&lt;int&gt; dp(n + 1, 0);
        dp[0] = 1;
        for (int i = 1; i &lt;= n; i++) { // 遍历背包
            for (int j = 1; j &lt;= m; j++) { // 遍历物品
                if (i - j &gt;= 0) dp[i] += dp[i - j];
            }
        }
        return dp[n];
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中m表示最多可以爬m个台阶，代码中把m改成2就是本题70.爬楼梯可以AC的代码了。</p><h2 id="周三" tabindex="-1"><a class="header-anchor" href="#周三" aria-hidden="true">#</a> 周三</h2>`,4),I={href:"https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>这里我们都知道这是完全背包。</p><p>递归公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);</p><p>关键看遍历顺序。</p><p>本题求钱币最小个数，<strong>那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数</strong>。</p><p>所以本题并不强调集合是组合还是排列。</p><p><strong>那么本题的两个for循环的关系是：外层for循环遍历物品，内层for遍历背包或者外层for遍历背包，内层for循环遍历物品都是可以的！</strong></p><p>外层for循环遍历物品，内层for遍历背包：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int coinChange(vector&lt;int&gt;&amp; coins, int amount) {
        vector&lt;int&gt; dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 0; i &lt; coins.size(); i++) { // 遍历物品
            for (int j = coins[i]; j &lt;= amount; j++) { // 遍历背包
                if (dp[j - coins[i]] != INT_MAX) { // 如果dp[j - coins[i]]是初始值则跳过
                    dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
                }
            }
        }
        if (dp[amount] == INT_MAX) return -1;
        return dp[amount];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外层for遍历背包，内层for循环遍历物品：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
public:
    int coinChange(vector&lt;int&gt;&amp; coins, int amount) {
        vector&lt;int&gt; dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i &lt;= amount; i++) {  // 遍历背包
            for (int j = 0; j &lt; coins.size(); j++) { // 遍历物品
                if (i - coins[j] &gt;= 0 &amp;&amp; dp[i - coins[j]] != INT_MAX ) {
                    dp[i] = min(dp[i - coins[j]] + 1, dp[i]);
                }
            }
        }
        if (dp[amount] == INT_MAX) return -1;
        return dp[amount];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="周四" tabindex="-1"><a class="header-anchor" href="#周四" aria-hidden="true">#</a> 周四</h2>`,11),k={href:"https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html",target:"_blank",rel:"noopener noreferrer"},S=s(`<p>要是没有前面的基础上来做这道题，那这道题目就有点难度了。</p><p><strong>这也体现了刷题顺序的重要性</strong>。</p><p>先遍历背包，再遍历物品：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int numSquares(int n) {
        vector&lt;int&gt; dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 0; i &lt;= n; i++) { // 遍历背包
            for (int j = 1; j * j &lt;= i; j++) { // 遍历物品
                dp[i] = min(dp[i - j * j] + 1, dp[i]);
            }
        }
        return dp[n];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先遍历物品，再遍历背包：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
public:
    int numSquares(int n) {
        vector&lt;int&gt; dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i * i &lt;= n; i++) { // 遍历物品
            for (int j = 1; j &lt;= n; j++) { // 遍历背包
                if (j - i * i &gt;= 0) {
                    dp[j] = min(dp[j - i * i] + 1, dp[j]);
                }
            }
        }
        return dp[n];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本周的主题其实就是背包问题中的遍历顺序！</p><p>我这里做一下总结：</p>`,9),T={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,"此时我们就已经把完全背包的遍历顺序研究的透透的了！",-1);function q(F,L){const e=d("ExternalLinkIcon");return a(),t("div",null,[c,v,n("p",null,[n("a",m,[i("动态规划：377. 组合总和 Ⅳ"),r(e)]),i("中给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数（顺序不同的序列被视作不同的组合）。")]),u,p,b,n("p",null,[i("在"),n("a",h,[i("动态规划：518.零钱兑换II"),r(e)]),i(" 中就已经讲过了。")]),_,n("p",null,[i("爬楼梯之前我们已经做过了，就是斐波那契数列，很好解，但"),n("a",g,[i("动态规划：70. 爬楼梯进阶版（完全背包）"),r(e)]),i("中我们进阶了一下。")]),E,f,j,C,B,n("p",null,[i("和昨天的题目"),n("a",A,[i("动态规划：377. 组合总和 Ⅳ"),r(e)]),i("基本就是一道题了，遍历顺序也是一样一样的！")]),P,n("p",null,[n("a",I,[i("动态规划：322.零钱兑换"),r(e)]),i("给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数（每种硬币的数量是无限的）。")]),x,n("p",null,[n("a",k,[i("动态规划：279.完全平方数"),r(e)]),i("给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少（平方数可以重复使用）。")]),n("p",null,[i("如果按顺序把前面的文章都看了，这道题目就是简单题了。 dp[i]的定义，递推公式，初始化，遍历顺序，都是和"),n("a",N,[i("动态规划：322. 零钱兑换"),r(e)]),i(" 一样一样的。")]),S,n("p",null,[i("求组合数："),n("a",T,[i("动态规划：518.零钱兑换II"),r(e)]),i(" 求排列数："),n("a",M,[i("动态规划：377. 组合总和 Ⅳ"),r(e)]),i("、"),n("a",X,[i("动态规划：70. 爬楼梯进阶版（完全背包）"),r(e)]),i(" 求最小数："),n("a",z,[i("动态规划：322. 零钱兑换"),r(e)]),i("、"),n("a",D,[i("动态规划：279.完全平方数"),r(e)])]),V])}const y=l(o,[["render",q],["__file","20210204dongguizhoumozongjie.html.vue"]]);export{y as default};
