import{_ as t,r as s,o as d,c as a,a as i,b as e,d as l,e as r}from"./app-3RcBQnkC.js";const o={},c=i("h1",{id:"本周小结-动态规划系列六",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#本周小结-动态规划系列六","aria-hidden":"true"},"#"),e(" 本周小结！（动态规划系列六）")],-1),v=i("p",null,"本周我们主要讲解了打家劫舍系列，这个系列也是dp解决的经典问题，那么来看看我们收获了哪些呢，一起来回顾一下吧。",-1),u=i("h2",{id:"周一",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),e(" 周一")],-1),p={href:"https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<ol><li>确定dp数组含义</li></ol><p><strong>dp[i]：考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]</strong>。</p><ol start="2"><li>确定递推公式</li></ol><p>dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);</p><ol start="3"><li>dp数组如何初始化</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vector&lt;int&gt; dp(nums.size());
dp[0] = nums[0];
dp[1] = max(nums[0], nums[1]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>确定遍历顺序</li></ol><p>从前到后遍历</p><ol start="5"><li>举例推导dp数组</li></ol><p>以示例二，输入[2,7,9,3,1]为例。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210221170954115-20230310133425353.jpg" alt="198.打家劫舍"></p><p>红框dp[nums.size() - 1]为结果。</p><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>`,13),g={href:"https://programmercarl.com/0213.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8DII.html",target:"_blank",rel:"noopener noreferrer"},b=r('<p>这里主要考虑清楚三种情况：</p><ul><li>情况一：考虑不包含首尾元素</li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210129160748643.jpg" alt="213.打家劫舍II"></p><ul><li>情况二：考虑包含首元素，不包含尾元素</li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210129160821374.jpg" alt="213.打家劫舍II1"></p><ul><li>情况三：考虑包含尾元素，不包含首元素</li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210129160842491.jpg" alt="213.打家劫舍II2"></p><p>需要注意的是，<strong>“考虑” 不等于 “偷”</strong>，例如情况三，虽然是考虑包含尾元素，但不一定要选尾部元素！对于情况三，取nums[1] 和 nums[3]就是最大的。</p><p>所以情况二 和 情况三 都包含了情况一了，<strong>所以只考虑情况二和情况三就可以了</strong>。</p><p>成环之后还是难了一些的， 不少题解没有把“考虑房间”和“偷房间”说清楚。</p><p>这就导致大家会有这样的困惑：“情况三怎么就包含了情况一了呢？本文图中最后一间房不能偷啊，偷了一定不是最优结果”。</p><p>所以我在本文重点强调了情况一二三是“考虑”的范围，而具体房间偷与不偷交给递推公式去抉择。</p>',12),h={href:"https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html",target:"_blank",rel:"noopener noreferrer"},f=i("h2",{id:"周三",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#周三","aria-hidden":"true"},"#"),e(" 周三")],-1),P={href:"https://programmercarl.com/0337.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8DIII.html",target:"_blank",rel:"noopener noreferrer"},_=r(`<p>这道题目是树形DP的入门题目，其实树形DP其实就是在树上进行递推公式的推导，没有什么神秘的。</p><p>这道题目我给出了暴力的解法：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int rob(TreeNode* root) {
        if (root == NULL) return 0;
        if (root-&gt;left == NULL &amp;&amp; root-&gt;right == NULL) return root-&gt;val;
        // 偷父节点
        int val1 = root-&gt;val;
        if (root-&gt;left) val1 += rob(root-&gt;left-&gt;left) + rob(root-&gt;left-&gt;right); // 跳过root-&gt;left，相当于不考虑左孩子了
        if (root-&gt;right) val1 += rob(root-&gt;right-&gt;left) + rob(root-&gt;right-&gt;right); // 跳过root-&gt;right，相当于不考虑右孩子了
        // 不偷父节点
        int val2 = rob(root-&gt;left) + rob(root-&gt;right); // 考虑root的左右孩子
        return max(val1, val2);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然超时了，因为我们计算了root的四个孙子（左右孩子的孩子）为头结点的子树的情况，又计算了root的左右孩子为头结点的子树的情况，计算左右孩子的时候其实又把孙子计算了一遍。</p><p>那么使用一个map把计算过的结果保存一下，这样如果计算过孙子了，那么计算孩子的时候可以复用孙子节点的结果。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    unordered_map&lt;TreeNode* , int&gt; umap; // 记录计算过的结果
    int rob(TreeNode* root) {
        if (root == NULL) return 0;
        if (root-&gt;left == NULL &amp;&amp; root-&gt;right == NULL) return root-&gt;val;
        if (umap[root]) return umap[root]; // 如果umap里已经有记录则直接返回
        // 偷父节点
        int val1 = root-&gt;val;
        if (root-&gt;left) val1 += rob(root-&gt;left-&gt;left) + rob(root-&gt;left-&gt;right); // 跳过root-&gt;left
        if (root-&gt;right) val1 += rob(root-&gt;right-&gt;left) + rob(root-&gt;right-&gt;right); // 跳过root-&gt;right
        // 不偷父节点
        int val2 = rob(root-&gt;left) + rob(root-&gt;right); // 考虑root的左右孩子
        umap[root] = max(val1, val2); // umap记录一下结果
        return max(val1, val2);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们还是给出动态规划的解法。</p><p>因为是在树上进行状态转移，我们在讲解二叉树的时候说过递归三部曲，那么下面我以递归三部曲为框架，其中融合动规五部曲的内容来进行讲解。</p><ol><li>确定递归函数的参数和返回值</li></ol><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>vector&lt;int&gt; robTree(TreeNode* cur) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>dp数组含义：下标为0记录不偷该节点所得到的的最大金钱，下标为1记录偷该节点所得到的的最大金钱。</p><p><strong>所以本题dp数组就是一个长度为2的数组！</strong></p><p>那么有同学可能疑惑，长度为2的数组怎么标记树中每个节点的状态呢？</p><p><strong>别忘了在递归的过程中，系统栈会保存每一层递归的参数</strong>。</p><ol start="2"><li>确定终止条件</li></ol><p>在遍历的过程中，如果遇到空间点的话，很明显，无论偷还是不偷都是0，所以就返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (cur == NULL) return vector&lt;int&gt;{0, 0};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>确定遍历顺序</li></ol><p>采用后序遍历，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 下标0：不偷，下标1：偷
vector&lt;int&gt; left = robTree(cur-&gt;left); // 左
vector&lt;int&gt; right = robTree(cur-&gt;right); // 右
// 中

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>确定单层递归的逻辑</li></ol><p>如果是偷当前节点，那么左右孩子就不能偷，val1 = cur-&gt;val + left[0] + right[0];</p><p>如果不偷当前节点，那么左右孩子就可以偷，至于到底偷不偷一定是选一个最大的，所以：val2 = max(left[0], left[1]) + max(right[0], right[1]);</p><p>最后当前节点的状态就是{val2, val1}; 即：{不偷当前节点得到的最大金钱，偷当前节点得到的最大金钱}</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>vector&lt;int&gt; left = robTree(cur-&gt;left); // 左
vector&lt;int&gt; right = robTree(cur-&gt;right); // 右

// 偷cur
int val1 = cur-&gt;val + left[0] + right[0];
// 不偷cur
int val2 = max(left[0], left[1]) + max(right[0], right[1]);
return {val2, val1};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>举例推导dp数组</li></ol><p>以示例1为例，dp数组状态如下：（<strong>注意用后序遍历的方式推导</strong>）</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210129181331613.jpg" alt="337.打家劫舍III"></p><p><strong>最后头结点就是 取下标0 和 下标1的最大值就是偷得的最大金钱</strong>。</p><p>树形DP为什么比较难呢？</p><p>因为平时我们习惯了在一维数组或者二维数组上推导公式，一下子换成了树，就需要对树的遍历方式足够了解！</p>`,33),x={href:"https://programmercarl.com/0968.%E7%9B%91%E6%8E%A7%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},E=i("strong",null,"那我也可以把这个算法起一个名字，叫做树形贪心",-1),C=i("p",null,"“树形贪心”词汇从此诞生，来自「代码随想录」",-1),A=i("h2",{id:"周四",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#周四","aria-hidden":"true"},"#"),e(" 周四")],-1),B={href:"https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"},I=r(`<p>这里我给出了三种解法：</p><p>暴力解法代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int result = 0;
        for (int i = 0; i &lt; prices.size(); i++) {
            for (int j = i + 1; j &lt; prices.size(); j++){
                result = max(result, prices[j] - prices[i]);
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n^2)</li><li>空间复杂度：O(1)</li></ul><p>贪心解法代码如下：</p><p>因为股票就买卖一次，那么贪心的想法很自然就是取最左最小值，取最右最大值，那么得到的差值就是最大利润。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p>动规解法，版本一，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int len = prices.size();
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul><p>从递推公式可以看出，dp[i]只是依赖于dp[i - 1]的状态。</p><p>那么我们只需要记录 当前天的dp状态和前一天的dp状态就可以了，可以使用滚动数组来节省空间，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p>建议先写出版本一，然后在版本一的基础上优化成版本二，而不是直接就写出版本二。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>刚刚结束了背包问题，本周主要讲解打家劫舍系列。</p><p><strong>劫舍系列简单来说就是 数组上连续元素二选一，成环之后连续元素二选一，在树上连续元素二选一，所能得到的最大价值</strong>。</p><p>那么这里每一种情况 我在文章中都做了详细的介绍。</p><p>周四我们开始讲解股票系列了，大家应该预测到了，我们下周的主题就是股票！敬请期待吧！</p><p><strong>代码随想录温馨提醒：投资有风险，入市需谨慎！</strong></p>`,22);function L(N,k){const n=s("ExternalLinkIcon");return d(),a("div",null,[c,v,u,i("p",null,[i("a",p,[e("动态规划：开始打家劫舍！"),l(n)]),e("中就是给一个数组相邻之间不能连着偷，如何偷才能得到最大金钱。")]),m,i("p",null,[i("a",g,[e("动态规划：继续打家劫舍！"),l(n)]),e("就是数组成环了，然后相邻的不能连着偷。")]),b,i("p",null,[e("剩下的就和"),i("a",h,[e("动态规划：开始打家劫舍！"),l(n)]),e("是一个逻辑了。")]),f,i("p",null,[i("a",P,[e("动态规划：还要打家劫舍！"),l(n)]),e("这次是在一棵二叉树上打家劫舍了，条件还是一样的，相临的不能偷。")]),_,i("p",null,[e("大家还记不记得我在讲解贪心专题的时候，讲到这道题目："),i("a",x,[e("贪心算法：我要监控二叉树！"),l(n)]),e("，这也是贪心算法在树上的应用。"),E]),C,A,i("p",null,[i("a",B,[e("动态规划：买卖股票的最佳时机"),l(n)]),e(" 一段时间，只能买卖一次，问最大收益。")]),I])}const z=t(o,[["render",L],["__file","20210225dongguizhoumozongjie.html.vue"]]);export{z as default};
