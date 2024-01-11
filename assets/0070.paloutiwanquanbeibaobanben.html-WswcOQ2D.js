import{_ as l,r as t,o as s,c as d,a as n,b as e,d as r,e as a}from"./app-3RcBQnkC.js";const o={},p=n("h1",{id:"_70-爬楼梯-进阶版",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_70-爬楼梯-进阶版","aria-hidden":"true"},"#"),e(" 70. 爬楼梯（进阶版）")],-1),c={href:"https://kamacoder.com/problempage.php?pid=1067",target:"_blank",rel:"noopener noreferrer"},h=a('<p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。</p><p>每次你可以爬至多m (1 &lt;= m &lt; n)个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><p>注意：给定 n 是一个正整数。</p><p>输入描述：输入共一行，包含两个正整数，分别表示n, m</p><p>输出描述：输出一个整数，表示爬到楼顶的方法数。</p><p>输入示例：3 2</p><p>输出示例：3</p><p>提示：</p><p>当 m = 2，n = 3 时，n = 3 这表示一共有三个台阶，m = 2 代表你每次可以爬一个台阶或者两个台阶。</p><p>此时你有三种方法可以爬到楼顶。</p><ul><li>1 阶 + 1 阶 + 1 阶段</li><li>1 阶 + 2 阶</li><li>2 阶 + 1 阶</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>之前讲这道题目的时候，因为还没有讲背包问题，所以就只是讲了一下爬楼梯最直接的动规方法（斐波那契）。</p><p><strong>这次终于讲到了背包问题，我选择带录友们再爬一次楼梯！</strong></p>',14),m={href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://kamacoder.com/problempage.php?pid=1067",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"我们之前做的 爬楼梯 是只能至多爬两个台阶。",-1),b=n("p",null,[e("这次"),n("strong",null,"改为：一步一个台阶，两个台阶，三个台阶，.......，直到 m个台阶。问有多少种不同的方法可以爬到楼顶呢？")],-1),_=n("p",null,"这又有难度了，这其实是一个完全背包问题。",-1),g=n("p",null,"1阶，2阶，.... m阶就是物品，楼顶就是背包。",-1),f=n("p",null,"每一阶可以重复使用，例如跳了1阶，还可以继续跳1阶。",-1),E=n("p",null,"问跳到楼顶有几种方法其实就是问装满背包有几种方法。",-1),j=n("p",null,[n("strong",null,"此时大家应该发现这就是一个完全背包问题了！")],-1),x={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,"动规五部曲分析如下：",-1),k=n("ol",null,[n("li",null,"确定dp数组以及下标的含义")],-1),C=n("p",null,[n("strong",null,"dp[i]：爬到有i个台阶的楼顶，有dp[i]种方法"),e("。")],-1),A=n("ol",{start:"2"},[n("li",null,"确定递推公式")],-1),S={href:"https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},P=a('<p>本题呢，dp[i]有几种来源，dp[i - 1]，dp[i - 2]，dp[i - 3] 等等，即：dp[i - j]</p><p>那么递推公式为：dp[i] += dp[i - j]</p><ol start="3"><li>dp数组如何初始化</li></ol><p>既然递归公式是 dp[i] += dp[i - j]，那么dp[0] 一定为1，dp[0]是递归中一切数值的基础所在，如果dp[0]是0的话，其他数值都是0了。</p><p>下标非0的dp[i]初始化为0，因为dp[i]是靠dp[i-j]累计上来的，dp[i]本身为0这样才不会影响结果</p><ol start="4"><li>确定遍历顺序</li></ol><p>这是背包里求排列问题，即：<strong>1、2 步 和 2、1 步都是上三个台阶，但是这两种方法不一样！</strong></p><p>所以需将target放在外循环，将nums放在内循环。</p><p>每一步可以走多次，这是完全背包，内循环需要从前向后遍历。</p><ol start="5"><li>举例来推导dp数组</li></ol>',10),w={href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"},J=a(`<p>以上分析完毕，C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;
int main() {
    int n, m;
    while (cin &gt;&gt; n &gt;&gt; m) {
        vector&lt;int&gt; dp(n + 1, 0);
        dp[0] = 1;
        for (int i = 1; i &lt;= n; i++) { // 遍历背包
            for (int j = 1; j &lt;= m; j++) { // 遍历物品
                if (i - j &gt;= 0) dp[i] += dp[i - j];
            }
        }
        cout &lt;&lt; dp[n] &lt;&lt; endl;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n * m)</li><li>空间复杂度: O(n)</li></ul><p>代码中m表示最多可以爬m个台阶，代码中把m改成2就是 力扣：70.爬楼梯的解题思路。</p><p><strong>当然注意 力扣是 核心代码模式，卡码网是ACM模式</strong></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>本题看起来是一道简单题目，稍稍进阶一下其实就是一个完全背包！</strong></p><p>如果我来面试的话，我就会先给候选人出一个 本题原题，看其表现，如果顺利写出来，进而在要求每次可以爬[1 - m]个台阶应该怎么写。</p><p>顺便再考察一下两个for循环的嵌套顺序，为什么target放外面，nums放里面。</p><p>这就能考察对背包问题本质的掌握程度，候选人是不是刷题背公式，一眼就看出来了。</p><p>这么一连套下来，如果候选人都能答出来，相信任何一位面试官都是非常满意的。</p><p><strong>本题代码不长，题目也很普通，但稍稍一进阶就可以考察完全背包，而且题目进阶的内容在leetcode上并没有原题，一定程度上就可以排除掉刷题党了，简直是面试题目的绝佳选择！</strong></p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java:</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Scanner;
class climbStairs{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int m, n;
        while (sc.hasNextInt()) {
            // 从键盘输入参数，中间用空格隔开
            n = sc.nextInt();
            m = sc.nextInt();

            // 求排列问题，先遍历背包再遍历物品
            int[] dp = new int[n + 1];
            dp[0] = 1;
            for (int j = 1; j &lt;= n; j++) {
                for (int i = 1; i &lt;= m; i++) {
                    if (j - i &gt;= 0) dp[j] += dp[j - i];
                }
            }
            System.out.println(dp[n]);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python3" tabindex="-1"><a class="header-anchor" href="#python3" aria-hidden="true">#</a> Python3：</h3><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3>`,20);function N(V,q){const i=t("ExternalLinkIcon");return s(),d("div",null,[p,n("p",null,[n("a",c,[e("卡码网：57. 爬楼梯"),r(i)])]),h,n("p",null,[e("这道题目 我们在"),n("a",m,[e("动态规划：爬楼梯"),r(i)]),e(" 中已经讲过一次了，这次我又给本题加点料，力扣上没有原题，所以可以在卡码网"),n("a",u,[e("57. 爬楼梯"),r(i)]),e("上来刷这道题目。")]),v,b,_,g,f,E,j,n("p",null,[e("和昨天的题目"),n("a",x,[e("动态规划：377. 组合总和 Ⅳ"),r(i)]),e("基本就是一道题了。")]),B,k,C,A,n("p",null,[e("在"),n("a",S,[e("动态规划：494.目标和"),r(i)]),e(" 、 "),n("a",I,[e("动态规划：518.零钱兑换II"),r(i)]),e("、"),n("a",y,[e("动态规划：377. 组合总和 Ⅳ"),r(i)]),e("中我们都讲过了，求装满背包有几种方法，递推公式一般都是dp[i] += dp[i - nums[j]];")]),P,n("p",null,[e("介于本题和"),n("a",w,[e("动态规划：377. 组合总和 Ⅳ"),r(i)]),e("几乎是一样的，这里我就不再重复举例了。")]),J])}const O=l(o,[["render",N],["__file","0070.paloutiwanquanbeibaobanben.html.vue"]]);export{O as default};
