import{_ as l,r as p,o as i,c as a,a as e,b as r,d as t,e as n}from"./app-3RcBQnkC.js";const s={},d=e("h1",{id:"本周小结-动态规划系列四",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本周小结-动态规划系列四","aria-hidden":"true"},"#"),r(" 本周小结！（动态规划系列四）")],-1),c=e("h2",{id:"周一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),r(" 周一")],-1),h={href:"https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},u=n('<p>所有数的总和为sum，假设加法的总和为x，那么可以推出x = (S + sum) / 2。</p><p>S 和 sum都是固定的，那此时问题就转化为01背包问题（数列中的数只能使用一次）: 给你一些物品（数字），装满背包（就是x）有几种方法。</p><ol><li>确定dp数组以及下标的含义</li></ol><p><strong>dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法</strong></p><ol start="2"><li>确定递推公式</li></ol><p>dp[j] += dp[j - nums[i]]</p><p><strong>注意：求装满背包有几种方法类似的题目，递推公式基本都是这样的</strong>。</p><ol start="3"><li>dp数组如何初始化</li></ol><p>dp[0] 初始化为1 ，dp[j]其他下标对应的数值应该初始化为0。</p><ol start="4"><li>确定遍历顺序</li></ol><p>01背包问题一维dp的遍历，nums放在外循环，target在内循环，且内循环倒序。</p><ol start="5"><li>举例推导dp数组</li></ol><p>输入：nums: [1, 1, 1, 1, 1], S: 3</p><p>bagSize = (S + sum) / 2 = (3 + 5) / 2 = 4</p><p>dp数组状态变化如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210125120743274-20230310132918821.jpg" alt="494.目标和"></p><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>',17),m={href:"https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html",target:"_blank",rel:"noopener noreferrer"},_=n('<p><strong>不少同学都以为是多重背包，其实这是一道标准的01背包</strong>。</p><p>这不过这个背包有两个维度，一个是m 一个是n，而不同长度的字符串就是不同大小的待装物品。</p><p><strong>所以这是一个二维01背包！</strong></p><ol><li>确定dp数组（dp table）以及下标的含义</li></ol><p><strong>dp[i][j]：最多有i个0和j个1的strs的最大子集的大小为dp[i][j]。</strong></p><ol start="2"><li>确定递推公式</li></ol><p>dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);</p><p>字符串集合中的一个字符串0的数量为zeroNum，1的数量为oneNum。</p><ol start="3"><li>dp数组如何初始化</li></ol><p>因为物品价值不会是负数，初始为0，保证递推的时候dp[i][j]不会被初始值覆盖。</p><ol start="4"><li>确定遍历顺序</li></ol><p>01背包一定是外层for循环遍历物品，内层for循环遍历背包容量且从后向前遍历！</p><ol start="5"><li>举例推导dp数组</li></ol><p>以输入：[&quot;10&quot;,&quot;0001&quot;,&quot;111001&quot;,&quot;1&quot;,&quot;0&quot;]，m = 3，n = 3为例</p><p>最后dp数组的状态如下所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210120111201512-20230310132936011.jpg" alt="474.一和零"></p><h2 id="周三" tabindex="-1"><a class="header-anchor" href="#周三" aria-hidden="true">#</a> 周三</h2><p>此时01背包我们就讲完了，正式开始完全背包。</p>',18),E={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>其实完全背包和01背包区别就是完全背包的物品是无限数量。</p><p>递推公式也是一样的，但难点在于遍历顺序上！</p><p>完全背包的物品是可以添加多次的，所以遍历背包容量要从小到大去遍历，即：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 先遍历物品，再遍历背包
for(int i = 0; i &lt; weight.size(); i++) { // 遍历物品
    for(int j = weight[i]; j &lt; bagWeight ; j++) { // 遍历背包容量
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本网上题的题解介绍到这里就到此为止了。</p><p><strong>那么为什么要先遍历物品，在遍历背包呢？</strong> （灵魂拷问）</p>`,6),f={href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[r("这个细节是很多同学忽略掉的点，其实也不算细节了，"),e("strong",null,"相信不少同学在写背包的时候，两层for循环的先后循序搞不清楚，靠感觉来的"),r("。")],-1),b=e("p",null,"所以理解究竟是先遍历啥，后遍历啥非常重要，这也体现出遍历顺序的重要性！",-1),j=e("p",null,"在文中，我也强调了是对纯完全背包，两个for循环先后循序无所谓，那么题目稍有变化，可就有所谓了。",-1),v=e("h2",{id:"周四",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周四","aria-hidden":"true"},"#"),r(" 周四")],-1),x={href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"},C=n('<p><strong>注意这里组合数和排列数的区别！</strong></p><p>看到无限零钱个数就知道是完全背包，</p><p>但本题不是纯完全背包了（求是否能装满背包），而是求装满背包有几种方法。</p><p>这里在遍历顺序上可就有说法了。</p><ul><li>如果求组合数就是外层for循环遍历物品，内层for遍历背包。</li><li>如果求排列数就是外层for遍历背包，内层for循环遍历物品。</li></ul><p>这里同学们需要理解一波，我在文中也给出了详细的解释，下周我们将介绍求排列数的完全背包题目来加深对这个遍历顺序的理解。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>相信通过本周的学习，大家已经初步感受到遍历顺序的重要性！</p><p>很多对动规理解不深入的同学都会感觉：动规嘛，就是把递推公式推出来其他都easy了。</p><p>其实这是一种错觉，或者说对动规理解的不够深入！</p>',10),B={href:"https://programmercarl.com/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"递推公式仅仅是 动规五部曲里的一小部分， dp数组的定义、初始化、遍历顺序，哪一点没有搞透的话，即使知道递推公式，遇到稍稍难一点的动规题目立刻会感觉写不出来了",-1),q=e("p",null,[r("此时相信大家对动规五部曲也有更深的理解了，同样也验证了Carl之前讲过的："),e("strong",null,"简单题是用来学习方法论的，而遇到难题才体现出方法论的重要性！")],-1);function z(N,S){const o=p("ExternalLinkIcon");return i(),a("div",null,[d,c,e("p",null,[e("a",h,[r("动态规划：目标和！"),t(o)]),r("要求在数列之间加入+ 或者 -，使其和为S。")]),u,e("p",null,[r("这道题目"),e("a",m,[r("动态规划：一和零！"),t(o)]),r("算有点难度。")]),_,e("p",null,[r("在"),e("a",E,[r("动态规划：关于完全背包，你该了解这些！"),t(o)]),r("中我们讲解了完全背包的理论基础。")]),g,e("p",null,[r("其实对于纯完全背包，先遍历物品，再遍历背包 与 先遍历背包，再遍历物品都是可以的。我在文中"),e("a",f,[r("动态规划：关于完全背包，你该了解这些！"),t(o)]),r("也给出了详细的解释。")]),A,b,j,v,e("p",null,[r("在"),e("a",x,[r("动态规划：给你一些零钱，你要怎么凑？"),t(o)]),r("中就是给你一堆零钱（零钱个数无限），为凑成amount的组合数有几种。")]),C,e("p",null,[r("我在动规专题开篇介绍"),e("a",B,[r("关于动态规划，你该了解这些！"),t(o)]),r("中就强调了 "),k,r("。")]),q])}const I=l(s,[["render",z],["__file","20210128dongguizhoumozongjie.html.vue"]]);export{I as default};
