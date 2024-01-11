import{_ as l,r as a,o as s,c as r,a as i,b as n,d as t,e as d}from"./app-3RcBQnkC.js";const v={},c=i("h1",{id:"动态规划-关于多重背包-你该了解这些",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#动态规划-关于多重背包-你该了解这些","aria-hidden":"true"},"#"),n(" 动态规划：关于多重背包，你该了解这些！")],-1),u={href:"https://kamacoder.com/problempage.php?pid=1066",target:"_blank",rel:"noopener noreferrer"},m=i("p",null,"之前我们已经系统的讲解了01背包和完全背包，如果没有看过的录友，建议先把如下三篇文章仔细阅读一波。",-1),b={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-2.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"},g=d('<p>这次我们再来说一说多重背包</p><h2 id="多重背包" tabindex="-1"><a class="header-anchor" href="#多重背包" aria-hidden="true">#</a> 多重背包</h2><p>对于多重背包，我在力扣上还没发现对应的题目，所以这里就做一下简单介绍，大家大概了解一下。</p><p>有N种物品和一个容量为V 的背包。第i种物品最多有Mi件可用，每件耗费的空间是Ci ，价值是Wi 。求解将哪些物品装入背包可使这些物品的耗费的空间 总和不超过背包容量，且价值总和最大。</p><p>多重背包和01背包是非常像的， 为什么和01背包像呢？</p><p>每件物品最多有Mi件可用，把Mi件摊开，其实就是一个01背包问题了。</p><p>例如：</p><p>背包最大重量为10。</p><p>物品为：</p><table><thead><tr><th></th><th>重量</th><th>价值</th><th>数量</th></tr></thead><tbody><tr><td>物品0</td><td>1</td><td>15</td><td>2</td></tr><tr><td>物品1</td><td>3</td><td>20</td><td>3</td></tr><tr><td>物品2</td><td>4</td><td>30</td><td>2</td></tr></tbody></table><p>问背包能背的物品最大价值是多少？</p><p>和如下情况有区别么？</p><table><thead><tr><th></th><th>重量</th><th>价值</th><th>数量</th></tr></thead><tbody><tr><td>物品0</td><td>1</td><td>15</td><td>1</td></tr><tr><td>物品0</td><td>1</td><td>15</td><td>1</td></tr><tr><td>物品1</td><td>3</td><td>20</td><td>1</td></tr><tr><td>物品1</td><td>3</td><td>20</td><td>1</td></tr><tr><td>物品1</td><td>3</td><td>20</td><td>1</td></tr><tr><td>物品2</td><td>4</td><td>30</td><td>1</td></tr><tr><td>物品2</td><td>4</td><td>30</td><td>1</td></tr></tbody></table><p>毫无区别，这就转成了一个01背包问题了，且每个物品只用一次。</p>',14),p={href:"https://kamacoder.com/problempage.php?pid=1066",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 超时了
#include&lt;iostream&gt;
#include&lt;vector&gt;
using namespace std;
int main() {
    int bagWeight,n;
    cin &gt;&gt; bagWeight &gt;&gt; n;
    vector&lt;int&gt; weight(n, 0); 
    vector&lt;int&gt; value(n, 0);
    vector&lt;int&gt; nums(n, 0);
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; weight[i];
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; value[i];
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; nums[i];    
    
    for (int i = 0; i &lt; n; i++) {
        while (nums[i] &gt; 1) { // 物品数量不是一的，都展开
            weight.push_back(weight[i]);
            value.push_back(value[i]);
            nums[i]--;
        }
    }
 
    vector&lt;int&gt; dp(bagWeight + 1, 0);
    for(int i = 0; i &lt; weight.size(); i++) { // 遍历物品，注意此时的物品数量不是n
        for(int j = bagWeight; j &gt;= weight[i]; j--) { // 遍历背包容量
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    cout &lt;&lt; dp[bagWeight] &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家去提交之后，发现这个解法超时了，为什么呢，哪里耗时呢？</p><p>耗时就在 这段代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>for (int i = 0; i &lt; n; i++) {
    while (nums[i] &gt; 1) { // 物品数量不是一的，都展开
        weight.push_back(weight[i]);
        value.push_back(value[i]);
        nums[i]--;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果物品数量很多的话，C++中，这种操作十分费时，主要消耗在vector的动态底层扩容上。（其实这里也可以优化，先把 所有物品数量都计算好，一起申请vector的空间。</p><p>这里也有另一种实现方式，就是把每种商品遍历的个数放在01背包里面在遍历一遍。</p><p>代码如下：（详看注释）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include&lt;iostream&gt;
#include&lt;vector&gt;
using namespace std;
int main() {
    int bagWeight,n;
    cin &gt;&gt; bagWeight &gt;&gt; n;
    vector&lt;int&gt; weight(n, 0);
    vector&lt;int&gt; value(n, 0);
    vector&lt;int&gt; nums(n, 0);
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; weight[i];
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; value[i];
    for (int i = 0; i &lt; n; i++) cin &gt;&gt; nums[i];

    vector&lt;int&gt; dp(bagWeight + 1, 0);

    for(int i = 0; i &lt; n; i++) { // 遍历物品
        for(int j = bagWeight; j &gt;= weight[i]; j--) { // 遍历背包容量
            // 以上为01背包，然后加一个遍历个数
            for (int k = 1; k &lt;= nums[i] &amp;&amp; (j - k * weight[i]) &gt;= 0; k++) { // 遍历个数
                dp[j] = max(dp[j], dp[j - k * weight[i]] + k * value[i]);
            }
        }
    }

    cout &lt;&lt; dp[bagWeight] &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(m × n × k)，m：物品种类个数，n背包容量，k单类物品数量</p><p>从代码里可以看出是01背包里面在加一个for循环遍历一个每种商品的数量。 和01背包还是如出一辙的。</p><p>当然还有那种二进制优化的方法，其实就是把每种物品的数量，打包成一个个独立的包。</p><p>和以上在循环遍历上有所不同，因为是分拆为各个包最后可以组成一个完整背包，具体原理我就不做过多解释了，大家了解一下就行，面试的话基本不会考完这个深度了，感兴趣可以自己深入研究一波。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>多重背包在面试中基本不会出现，力扣上也没有对应的题目，大家对多重背包的掌握程度知道它是一种01背包，并能在01背包的基础上写出对应代码就可以了。</p><p>至于背包九讲里面还有混合背包，二维费用背包，分组背包等等这些，大家感兴趣可以自己去学习学习，这里也不做介绍了，面试也不会考。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Scanner;
class multi_pack{
    public static void main(String [] args) {
        Scanner sc = new Scanner(System.in);

        /**
         * bagWeight:背包容量
         * n:物品种类
         */
        int bagWeight, n;
        
        //获取用户输入数据，中间用空格隔开，回车键换行
        bagWeight = sc.nextInt();
        n = sc.nextInt();
        int[] weight = new int[n];
        int[] value = new int[n];
        int[] nums = new int[n];
        for (int i = 0; i &lt; n; i++) weight[i] = sc.nextInt();
        for (int i = 0; i &lt; n; i++) value[i] = sc.nextInt();
        for (int i = 0; i &lt; n; i++) nums[i] = sc.nextInt();

        int[] dp = new int[bagWeight + 1];

        //先遍历物品再遍历背包，作为01背包处理
        for (int i = 0; i &lt; n; i++) {
            for (int j = bagWeight; j &gt;= weight[i]; j--) {
                //遍历每种物品的个数
                for (int k = 1; k &lt;= nums[i] &amp;&amp; (j - k * weight[i]) &gt;= 0; k++) {
                    dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + k * value[i]);
                }
            }
        }
        System.out.println(dp[bagWeight]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3>`,22);function _(E,k){const e=a("ExternalLinkIcon");return s(),r("div",null,[c,i("p",null,[n("本题力扣上没有原题，大家可以去"),i("a",u,[n("卡码网第56题"),t(e)]),n("去练习，题意是一样的。")]),m,i("ul",null,[i("li",null,[i("a",b,[n("动态规划：关于01背包问题，你该了解这些！"),t(e)])]),i("li",null,[i("a",h,[n("动态规划：关于01背包问题，你该了解这些！（滚动数组）"),t(e)])]),i("li",null,[i("a",o,[n("动态规划：关于完全背包，你该了解这些！"),t(e)])])]),g,i("p",null,[n("练习题目："),i("a",p,[n("卡码网第56题，多重背包"),t(e)])]),f])}const x=l(v,[["render",_],["__file","beibaowentililunjichuduozhongbeibao.html.vue"]]);export{x as default};
