import{_ as e,r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_59-螺旋矩阵ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_59-螺旋矩阵ii","aria-hidden":"true"},"#"),s(" 59.螺旋矩阵II")],-1),r={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。",-1),d=n("p",null,"示例:",-1),v=n("p",null,"输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]",-1),m=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),b={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1SL4y1N7mV",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),f=n("p",null,[s("这道题目可以说在面试中出现频率较高的题目，"),n("strong",null,"本题并不涉及到什么算法，就是模拟过程，但却十分考察对代码的掌控能力。")],-1),h=n("p",null,"要如何画出这个螺旋排列的正方形矩阵呢？",-1),g=n("p",null,"相信很多同学刚开始做这种题目的时候，上来就是一波判断猛如虎。",-1),x=n("p",null,"结果运行的时候各种问题，然后开始各种修修补补，最后发现改了这里那里有问题，改了那里这里又跑不起来了。",-1),j={href:"https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"循环不变量原则",-1),$=t(`<p>而求解本题依然是要坚持循环不变量原则。</p><p>模拟顺时针画矩阵的过程:</p><ul><li>填充上行从左到右</li><li>填充右列从上到下</li><li>填充下行从右到左</li><li>填充左列从下到上</li></ul><p>由外向内一圈一圈这么画下去。</p><p>可以发现这里的边界条件非常多，在一个循环中，如此多的边界条件，如果不按照固定规则来遍历，那就是<strong>一进循环深似海，从此offer是路人</strong>。</p><p>这里一圈下来，我们要画每四条边，这四条边怎么画，每画一条边都要坚持一致的左闭右开，或者左开右闭的原则，这样这一圈才能按照统一的规则画下来。</p><p>那么我按照左闭右开的原则，来画一圈，大家看一下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220922102236.png" alt=""></p><p>这里每一种颜色，代表一条边，我们遍历的长度，可以看出每一个拐角处的处理规则，拐角处让给新的一条边来继续画。</p><p>这也是坚持了每条边左闭右开的原则。</p><p>一些同学做这道题目之所以一直写不好，代码越写越乱。</p><p>就是因为在画每一条边的时候，一会左开右闭，一会左闭右闭，一会又来左闭右开，岂能不乱。</p><p>代码如下，已经详细注释了每一步的目的，可以看出while循环里判断的情况是很多的，代码里处理的原则也是统一的左闭右开。</p><p>整体C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; generateMatrix(int n) {
        vector&lt;vector&lt;int&gt;&gt; res(n, vector&lt;int&gt;(n, 0)); // 使用vector定义一个二维数组
        int startx = 0, starty = 0; // 定义每循环一个圈的起始位置
        int loop = n / 2; // 每个圈循环几次，例如n为奇数3，那么loop = 1 只是循环一圈，矩阵中间的值需要单独处理
        int mid = n / 2; // 矩阵中间的位置，例如：n为3， 中间的位置就是(1，1)，n为5，中间位置为(2, 2)
        int count = 1; // 用来给矩阵中每一个空格赋值
        int offset = 1; // 需要控制每一条边遍历的长度，每次循环右边界收缩一位
        int i,j;
        while (loop --) {
            i = startx;
            j = starty;

            // 下面开始的四个for就是模拟转了一圈
            // 模拟填充上行从左到右(左闭右开)
            for (j = starty; j &lt; n - offset; j++) {
                res[startx][j] = count++;
            }
            // 模拟填充右列从上到下(左闭右开)
            for (i = startx; i &lt; n - offset; i++) {
                res[i][j] = count++;
            }
            // 模拟填充下行从右到左(左闭右开)
            for (; j &gt; starty; j--) {
                res[i][j] = count++;
            }
            // 模拟填充左列从下到上(左闭右开)
            for (; i &gt; startx; i--) {
                res[i][j] = count++;
            }

            // 第二圈开始的时候，起始位置要各自加1， 例如：第一圈起始位置是(0, 0)，第二圈起始位置是(1, 1)
            startx++;
            starty++;

            // offset 控制每一圈里每一条边遍历的长度
            offset += 1;
        }

        // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
        if (n % 2) {
            res[mid][mid] = count;
        }
        return res;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度 O(n^2): 模拟遍历二维矩阵的时间</li><li>空间复杂度 O(1)</li></ul><h2 id="类似题目" tabindex="-1"><a class="header-anchor" href="#类似题目" aria-hidden="true">#</a> 类似题目</h2>`,17),X={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/",target:"_blank",rel:"noopener noreferrer"},Y=t(`<h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public int[][] generateMatrix(int n) {
        int loop = 0;  // 控制循环次数
        int[][] res = new int[n][n];
        int start = 0;  // 每次循环的开始点(start, start)
        int count = 1;  // 定义填充数字
        int i, j;

        while (loop++ &lt; n / 2) { // 判断边界后，loop从1开始
            // 模拟上侧从左到右
            for (j = start; j &lt; n - loop; j++) {
                res[start][j] = count++;
            }

            // 模拟右侧从上到下
            for (i = start; i &lt; n - loop; i++) {
                res[i][j] = count++;
            }

            // 模拟下侧从右到左
            for (; j &gt;= loop; j--) {
                res[i][j] = count++;
            }

            // 模拟左侧从下到上
            for (; i &gt;= loop; i--) {
                res[i][j] = count++;
            }
            start++;
        }

        if (n % 2 == 1) {
            res[start][start] = count;
        }

        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python3" tabindex="-1"><a class="header-anchor" href="#python3" aria-hidden="true">#</a> python3:</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> n <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span>
        startx<span class="token punctuation">,</span> starty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>               <span class="token comment"># 起始点</span>
        loop<span class="token punctuation">,</span> mid <span class="token operator">=</span> n <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">,</span> n <span class="token operator">//</span> <span class="token number">2</span>          <span class="token comment"># 迭代次数、n为奇数时，矩阵的中心点</span>
        count <span class="token operator">=</span> <span class="token number">1</span>                           <span class="token comment"># 计数</span>

        <span class="token keyword">for</span> offset <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> loop <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>      <span class="token comment"># 每循环一层偏移量加1，偏移量从1开始</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>starty<span class="token punctuation">,</span> n <span class="token operator">-</span> offset<span class="token punctuation">)</span> <span class="token punctuation">:</span>    <span class="token comment"># 从左至右，左闭右开</span>
                nums<span class="token punctuation">[</span>startx<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> count
                count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>startx<span class="token punctuation">,</span> n <span class="token operator">-</span> offset<span class="token punctuation">)</span> <span class="token punctuation">:</span>    <span class="token comment"># 从上至下</span>
                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> offset<span class="token punctuation">]</span> <span class="token operator">=</span> count
                count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">-</span> offset<span class="token punctuation">,</span> starty<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token comment"># 从右至左</span>
                nums<span class="token punctuation">[</span>n <span class="token operator">-</span> offset<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> count
                count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">-</span> offset<span class="token punctuation">,</span> startx<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token comment"># 从下至上</span>
                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>starty<span class="token punctuation">]</span> <span class="token operator">=</span> count
                count <span class="token operator">+=</span> <span class="token number">1</span>                
            startx <span class="token operator">+=</span> <span class="token number">1</span>         <span class="token comment"># 更新起始点</span>
            starty <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">if</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">:</span>			<span class="token comment"># n为奇数时，填充中心点</span>
            nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count 
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> <span class="token function-variable function">generateMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> startX <span class="token operator">=</span> startY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">// 起始位置</span>
    <span class="token keyword">let</span> loop <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 旋转圈数</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 中间位置</span>
    <span class="token keyword">let</span> offset <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">// 控制每一层填充元素个数</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>     <span class="token comment">// 更新填充数字</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>loop<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> row <span class="token operator">=</span> startX<span class="token punctuation">,</span> col <span class="token operator">=</span> startY<span class="token punctuation">;</span>
        <span class="token comment">// 上行从左到右（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右列从上到下（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 下行从右到左（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> col <span class="token operator">&gt;</span> startY<span class="token punctuation">;</span> col<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 左列做下到上（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> row <span class="token operator">&gt;</span> startX<span class="token punctuation">;</span> row<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新起始位置</span>
        startX<span class="token operator">++</span><span class="token punctuation">;</span>
        startY<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// 更新offset</span>
        offset <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果n为奇数的话，需要单独给矩阵最中间的位置赋值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> loopNum<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> chunkNum<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> startX<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> startY<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>loopNum<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> startX<span class="token punctuation">;</span>
        y <span class="token operator">=</span> startY<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> startX <span class="token operator">+</span> chunkNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            x<span class="token operator">++</span><span class="token punctuation">;</span>
            value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>y <span class="token operator">&lt;</span> startY <span class="token operator">+</span> chunkNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            y<span class="token operator">++</span><span class="token punctuation">;</span>
            value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> startX<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            x<span class="token operator">--</span><span class="token punctuation">;</span>
            value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> startY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            y<span class="token operator">--</span><span class="token punctuation">;</span>
            value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        startX<span class="token operator">++</span><span class="token punctuation">;</span>
        startY<span class="token operator">++</span><span class="token punctuation">;</span>
        chunkNum <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resArr<span class="token punctuation">[</span>startX<span class="token punctuation">]</span><span class="token punctuation">[</span>startY<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go:</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token number">3</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">generateMatrix</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	startx<span class="token punctuation">,</span> starty <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	<span class="token keyword">var</span> loop <span class="token builtin">int</span> <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span>
	<span class="token keyword">var</span> center <span class="token builtin">int</span> <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span>
	count <span class="token operator">:=</span> <span class="token number">1</span>
	offset <span class="token operator">:=</span> <span class="token number">1</span>
	res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> loop <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		i<span class="token punctuation">,</span> j <span class="token operator">:=</span> startx<span class="token punctuation">,</span> starty

		<span class="token comment">//行数不变 列数在变</span>
		<span class="token keyword">for</span> j <span class="token operator">=</span> starty<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token operator">-</span>offset<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>startx<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//列数不变是j 行数变</span>
		<span class="token keyword">for</span> i <span class="token operator">=</span> startx<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span>offset<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//行数不变 i 列数变 j--</span>
		<span class="token keyword">for</span> <span class="token punctuation">;</span> j <span class="token operator">&gt;</span> starty<span class="token punctuation">;</span> j<span class="token operator">--</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//列不变 行变</span>
		<span class="token keyword">for</span> <span class="token punctuation">;</span> i <span class="token operator">&gt;</span> startx<span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		startx<span class="token operator">++</span>
		starty<span class="token operator">++</span>
		offset<span class="token operator">++</span>
		loop<span class="token operator">--</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>center<span class="token punctuation">]</span><span class="token punctuation">[</span>center<span class="token punctuation">]</span> <span class="token operator">=</span> n <span class="token operator">*</span> n
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    top<span class="token punctuation">,</span> bottom <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span>
    left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span>
    num <span class="token operator">:=</span> <span class="token number">1</span>
    tar <span class="token operator">:=</span> n <span class="token operator">*</span> n
    matrix <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> num <span class="token operator">&lt;=</span> tar <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        top<span class="token operator">++</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        right<span class="token operator">--</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        bottom<span class="token operator">--</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        left<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> matrix
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">generateMatrix</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> n<span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> n<span class="token punctuation">)</span>

    <span class="token keyword">var</span> startRow <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> startColumn <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> loopCount <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> offset <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> row<span class="token punctuation">:</span> <span class="token class-name">Int</span>
    <span class="token keyword">var</span> column<span class="token punctuation">:</span> <span class="token class-name">Int</span>

    <span class="token keyword">while</span> loopCount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        row <span class="token operator">=</span> startRow
        column <span class="token operator">=</span> startColumn

        <span class="token keyword">for</span> c <span class="token keyword">in</span> column <span class="token operator">..&lt;</span> startColumn <span class="token operator">+</span> n <span class="token operator">-</span> offset <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>startRow<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> count
            count <span class="token operator">+=</span> <span class="token number">1</span>
            column <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> r <span class="token keyword">in</span> row <span class="token operator">..&lt;</span> startRow <span class="token operator">+</span> n <span class="token operator">-</span> offset <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">=</span> count
            count <span class="token operator">+=</span> <span class="token number">1</span>
            row <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> startColumn <span class="token operator">..&lt;</span> column <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">=</span> count
            count <span class="token operator">+=</span> <span class="token number">1</span>
            column <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> startRow <span class="token operator">..&lt;</span> row <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">=</span> count
            count <span class="token operator">+=</span> <span class="token number">1</span>
            row <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        startRow <span class="token operator">+=</span> <span class="token number">1</span>
        startColumn <span class="token operator">+=</span> <span class="token number">1</span>
        offset <span class="token operator">+=</span> <span class="token number">2</span>
        loopCount <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">generate_matrix</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> n <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">;</span> n <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> startX<span class="token punctuation">,</span> <span class="token keyword">mut</span> startY<span class="token punctuation">,</span> <span class="token keyword">mut</span> offset<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> loopIdx <span class="token operator">=</span> n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> mid<span class="token punctuation">:</span> <span class="token keyword">usize</span> <span class="token operator">=</span> loopIdx <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> i<span class="token punctuation">,</span> <span class="token keyword">mut</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> loopIdx <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> startX<span class="token punctuation">;</span>
            j <span class="token operator">=</span> startY<span class="token punctuation">;</span>
            
            <span class="token keyword">while</span> j <span class="token operator">&lt;</span> <span class="token punctuation">(</span>startY <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token operator">-</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span> 
                count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>startX <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token operator">-</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span> 
                count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">while</span> j <span class="token operator">&gt;</span> startY <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
                count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                j <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">while</span> i <span class="token operator">&gt;</span> startX <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
                count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                i <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            startX <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            startY <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>   
            offset <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
            loopIdx <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">Integer</span> <span class="token parameter">$n</span>
     * <span class="token keyword">@return</span> <span class="token class-name">Integer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">generateMatrix</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化数组</span>
        <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">array_fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$n</span><span class="token punctuation">,</span> <span class="token function">array_fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$n</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$mid</span> <span class="token operator">=</span> <span class="token variable">$loop</span> <span class="token operator">=</span> <span class="token function">floor</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$startX</span> <span class="token operator">=</span> <span class="token variable">$startY</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token variable">$offset</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token variable">$count</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$loop</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$i</span> <span class="token operator">=</span> <span class="token variable">$startX</span><span class="token punctuation">;</span>
            <span class="token variable">$j</span> <span class="token operator">=</span> <span class="token variable">$startY</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">&lt;</span> <span class="token variable">$startY</span> <span class="token operator">+</span> <span class="token variable">$n</span> <span class="token operator">-</span> <span class="token variable">$offset</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token variable">$startX</span> <span class="token operator">+</span> <span class="token variable">$n</span> <span class="token operator">-</span> <span class="token variable">$offset</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">&gt;</span> <span class="token variable">$startY</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&gt;</span> <span class="token variable">$startX</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token variable">$startX</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token variable">$startY</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token variable">$offset</span> <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token variable">$loop</span><span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$mid</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$mid</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$count</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$res</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//初始化返回的结果数组的大小</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token operator">*</span>returnColumnSizes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//初始化返回结果数组ans</span>
    <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置每次循环的起始位置</span>
    <span class="token keyword">int</span> startX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> startY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//设置二维数组的中间值，若n为奇数。需要最后在中间填入数字</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">//循环圈数</span>
    <span class="token keyword">int</span> loop <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">//偏移数</span>
    <span class="token keyword">int</span> offset <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">//当前要添加的元素</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>loop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> startX<span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> startY<span class="token punctuation">;</span>
        <span class="token comment">//模拟上侧从左到右</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> startY <span class="token operator">+</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>startX<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//模拟右侧从上到下</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> startX <span class="token operator">+</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//模拟下侧从右到左</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&gt;</span> startY<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//模拟左侧从下到上</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> startX<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//偏移值每次加2</span>
        offset<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历起始位置每次+1</span>
        startX<span class="token operator">++</span><span class="token punctuation">;</span>
        startY<span class="token operator">++</span><span class="token punctuation">;</span>
        loop<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//若n为奇数需要单独给矩阵中间赋值</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">)</span>
        ans<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">;</span>

    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> generateMatrix<span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> Array<span class="token punctuation">.</span>ofDim<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token comment">// 定义一个n*n的二维矩阵</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 标志当前到了哪个数字</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 横坐标</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 竖坐标</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 向右：当j不越界，并且下一个要填的数字是空白时</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> num <span class="token comment">// 当前坐标等于num</span>
        num <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// num++</span>
        j <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// 竖坐标+1</span>
      <span class="token punctuation">}</span>
      i <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// 下移一行</span>
      j <span class="token operator">-=</span> <span class="token number">1</span> <span class="token comment">// 左移一列</span>

      <span class="token comment">// 剩下的都同上</span>

      <span class="token comment">// 向下</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> num
        num <span class="token operator">+=</span> <span class="token number">1</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      i <span class="token operator">-=</span> <span class="token number">1</span>
      j <span class="token operator">-=</span> <span class="token number">1</span>

      <span class="token comment">// 向左</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> num
        num <span class="token operator">+=</span> <span class="token number">1</span>
        j <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      i <span class="token operator">-=</span> <span class="token number">1</span>
      j <span class="token operator">+=</span> <span class="token number">1</span>

      <span class="token comment">// 向上</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> num
        num <span class="token operator">+=</span> <span class="token number">1</span>
        i <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      i <span class="token operator">+=</span> <span class="token number">1</span>
      j <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">GenerateMatrix</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> answer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            answer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> end <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> tmp <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>tmp <span class="token operator">&lt;</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> answer<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">i</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> answer<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">end</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> end<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> answer<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">i</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> end<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> answer<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">start</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token operator">++</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> answer<span class="token punctuation">[</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby:</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">generate_matrix</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  result <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token comment">#循环次数</span>
  loop_times <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">#步长</span>
  step <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
  val <span class="token operator">=</span> <span class="token number">1</span>

 
  <span class="token keyword">while</span> loop_times <span class="token operator">&lt;</span> n <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token comment">#模拟从左向右</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>step <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token comment">#行数不变，列数变</span>
      result<span class="token punctuation">[</span>loop_times<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token operator">+</span>loop_times<span class="token punctuation">]</span> <span class="token operator">=</span> val
      val <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">end</span>
    
    <span class="token comment">#模拟从上到下</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>step <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token comment">#列数不变，行数变</span>
      result<span class="token punctuation">[</span>i<span class="token operator">+</span>loop_times<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>loop_times<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> val
      val <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">end</span>

    <span class="token comment">#模拟从右到左</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>step <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token comment">#行数不变，列数变</span>
      result<span class="token punctuation">[</span>n<span class="token operator">-</span>loop_times<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span>loop_times<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> val
      val <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">end</span>

    <span class="token comment">#模拟从下到上</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>step <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token comment">#列数不变，行数变</span>
      result<span class="token punctuation">[</span>n<span class="token operator">-</span>loop_times<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>loop_times<span class="token punctuation">]</span> <span class="token operator">=</span> val
      val <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">end</span>
    
    loop_times <span class="token operator">+=</span> <span class="token number">1</span>
    step <span class="token operator">-=</span> <span class="token number">2</span>
  <span class="token keyword">end</span>
  
  <span class="token comment">#如果是奇数，则填充最后一个元素</span>
  result<span class="token punctuation">[</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">if</span> n <span class="token operator">%</span> <span class="token number">2</span>
  
  <span class="token keyword">return</span> result
  
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function z(C,A){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),p(a)])]),k,d,v,m,n("p",null,[n("strong",null,[n("a",b,[s("《代码随想录》算法视频公开课"),p(a)]),s("："),n("a",w,[s("拿下螺旋矩阵！LeetCode：59.螺旋矩阵II"),p(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),y,f,h,g,x,n("p",null,[s("大家还记得我们在这篇文章"),n("a",j,[s("数组：每次遇到二分法，都是一看就会，一写就废"),p(a)]),s("中讲解了二分法，提到如果要写出正确的二分法一定要坚持"),_,s("。")]),$,n("ul",null,[n("li",null,[n("a",X,[s("54.螺旋矩阵"),p(a)])]),n("li",null,[n("a",I,[s("剑指Offer 29.顺时针打印矩阵"),p(a)])])]),Y])}const M=e(i,[["render",z],["__file","0059.luoxuanjuzhenII.html.vue"]]);export{M as default};
