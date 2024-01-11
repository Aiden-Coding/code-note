import{_ as l,r as a,o as t,c as d,a as n,b as i,d as c,e}from"./app-3RcBQnkC.js";const r={},o=e('<h1 id="力扣上的代码想在本地编译运行" tabindex="-1"><a class="header-anchor" href="#力扣上的代码想在本地编译运行" aria-hidden="true">#</a> 力扣上的代码想在本地编译运行？</h1><p>很多录友都问过我一个问题，就是力扣上的代码如何在本地编译运行？</p><p>其实在代码随想录刷题群里也经常出现这个场景，就是录友发一段代码上来，问大家这个代码怎么有问题？ 如果我看到了一般我的回复：都是把那几个变量或者数组打印一下看看对不对，就知道了。</p><p>然后录友就问了：如何打日志呢？</p><p>其实在力扣上打日志也挺方便的，我一般调试就是直接在力扣上打日志，偶尔需要把代码粘到本地来运行添加日志debug一下。</p><p>在力扣上直接打日志，这个就不用讲，C++的话想打啥直接cout啥就可以了。</p><p>我来说一说力扣代码如何在本地运行。</p><p>毕竟我们天天用力扣刷题，也应该知道力扣上的代码如何在本地编译运行。</p><p>其实挺简单的，大家看一遍就会了。</p>',9),v={href:"https://programmercarl.com/0746.%E4%BD%BF%E7%94%A8%E6%9C%80%E5%B0%8F%E8%8A%B1%E8%B4%B9%E7%88%AC%E6%A5%BC%E6%A2%AF.html",target:"_blank",rel:"noopener noreferrer"},u=e(`<p>力扣746. 使用最小花费爬楼梯，完整的可以在直接本地运行的C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

class Solution {
public:
    int minCostClimbingStairs(vector&lt;int&gt;&amp; cost) {
        vector&lt;int&gt; dp(cost.size());
        dp[0] = cost[0];
        dp[1] = cost[1];
        for (int i = 2; i &lt; cost.size(); i++) {
            dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i];
        }
        return min(dp[cost.size() - 1], dp[cost.size() - 2]);
    }
};

int main() {
    int a[] = {1, 100, 1, 1, 1, 100, 1, 1, 100, 1};
    vector&lt;int&gt; cost(a, a + sizeof(a) / sizeof(int));
    Solution solution;
    cout &lt;&lt; solution.minCostClimbingStairs(cost) &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以拿去跑一跑，直接粘到编译器上就行了。</p><p>我用的是linux下gcc来编译的，估计粘到其他编译器也没问题。</p><p>代码中可以看出，其实就是定义个main函数，构造个输入用例，然后定义一个solution变量，调用minCostClimbingStairs函数就可以了。</p><p>此时大家就可以随意构造测试数据，然后想怎么打日志就怎么打日志，没有找不出的bug。</p><hr>`,7);function m(p,b){const s=a("ExternalLinkIcon");return t(),d("div",null,[o,n("p",null,[i("我拿我们刚讲过的这道题"),n("a",v,[i("动态规划：使用最小花费爬楼梯"),c(s)]),i("来做示范。")]),u])}const _=l(r,[["render",m],["__file","likoushangdedaimaxiangzaibendibianyiyunxing？.html.vue"]]);export{_ as default};
