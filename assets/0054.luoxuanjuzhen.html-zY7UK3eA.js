import{_ as p,r as o,o as i,c as l,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const c={},u=n("h1",{id:"_54-螺旋矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_54-螺旋矩阵","aria-hidden":"true"},"#"),s(" 54.螺旋矩阵")],-1),r={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。",-1),k=n("p",null,"示例1:",-1),m=n("p",null,"输入: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 输出:[1,2,3,6,9,8,7,4,5]",-1),v=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),b={href:"https://www.programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html",target:"_blank",rel:"noopener noreferrer"},w=e(`<p>与59.螺旋矩阵II相同的是：两者都是模拟矩形的顺时针旋转，所以核心依然是依然是坚持循环不变量，按照左闭右开的原则</p><p>模拟顺时针画矩阵的过程:</p><ul><li>填充上行从左到右</li><li>填充右列从上到下</li><li>填充下行从右到左</li><li>填充左列从下到上</li></ul><p>由外向内一圈一圈这么画下去，如下所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220922102236.png" alt=""></p><p>这里每一种颜色，代表一条边，我们遍历的长度，可以看出每一个拐角处的处理规则，拐角处让给新的一条边来继续画。</p><p>与59.螺旋矩阵II不同的是：前题中的螺旋矩阵是正方形，只有正方形的边长n一个边界条件，而本题中，需要考虑长方形的长和宽(m行和n列)两个边界条件。自然，m可以等于n，即前题可视为本题在m==n的特殊情况。</p><p>我们从最一般的情况开始考虑，与59.螺旋矩阵II题解对比起来，m和n的带入，主要引来两方面的差异：</p><ul><li>loop的计算： 本题的loop计算与59.螺旋矩阵II算法略微差异，因为存在rows和columns两个维度，可自行分析，loop只能取min(rows, columns)，例如rows = 5, columns = 7，那loop = 5 / 7 = 2</li><li>mid的计算及填充： 1、同样的原理，本题的mid计算也存在上述差异； 2、 如果min(rows, columns)为偶数，则不需要在最后单独考虑矩阵最中间位置的赋值 如果min(rows, columns)为奇数，则矩阵最中间位置不只是[mid][mid],而是会留下来一个特殊的中间行或者中间列，具体是中间行还是中间列，要看rows和columns的大小，如果rows &gt; columns,则是中间列，相反，则是中间行</li></ul><p>代码如下，已经详细注释了每一步的目的，可以看出while循环里判断的情况是很多的，代码里处理的原则也是统一的左闭右开。</p><p>整体C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; spiralOrder(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) {
        if (matrix.size() == 0 || matrix[0].size() == 0)
            return {};
        int rows = matrix.size(), columns = matrix[0].size();
        int total = rows * columns;
        vector&lt;int&gt; res(total); // 使用vector定义一个一维数组存放结果
        int startx = 0, starty = 0; // 定义每循环一个圈的起始位置
        int loop = min(rows, columns) / 2; 
        // 本题的loop计算与59.螺旋矩阵II算法略微差异，因为存在rows和columns两个维度，可自行分析，loop只能取min(rows, columns)，例如rows = 5, columns = 7，那loop = 5 / 7 = 2
        int mid = min(rows, columns) / 2; 
        // 1、同样的原理，本题的mid计算也存在上述差异；
        // 2、
            //如果min(rows, columns)为偶数，则不需要在最后单独考虑矩阵最中间位置的赋值
            //如果min(rows, columns)为奇数，则矩阵最中间位置不只是[mid][mid],而是会留下来一个特殊的中间行或者中间列，具体是中间行还是中间列，要看rows和columns的大小，如果rows &gt; columns,则是中间列，相反，则是中间行
        //相信这一点不好理解，建议自行画图理解
        int count = 0;// 用来给矩阵中每一个空格赋值
        int offset = 1;// 每一圈循环，需要控制每一条边遍历的长度
        int i,j;
        while (loop --) {
            i = startx;
            j = starty;

            // 下面开始的四个for就是模拟转了一圈
            // 模拟填充上行从左到右(左闭右开)
            for (j = starty; j &lt; starty + columns - offset; j++) {
                res[count++] = matrix[startx][j];
            }
            // 模拟填充右列从上到下(左闭右开)
            for (i = startx; i &lt; startx + rows - offset; i++) {
                res[count++] = matrix[i][j];
            }
            // 模拟填充下行从右到左(左闭右开)
            for (; j &gt; starty; j--) {
                res[count++] = matrix[i][j];
            }
            // 模拟填充左列从下到上(左闭右开)
            for (; i &gt; startx; i--) {
                res[count++] = matrix[i][starty];
            }

            // 第二圈开始的时候，起始位置要各自加1， 例如：第一圈起始位置是(0, 0)，第二圈起始位置是(1, 1)
            startx++;
            starty++;

            // offset 控制每一圈里每一条边遍历的长度
            offset += 2;
        }

        // 如果min(rows, columns)为奇数的话，需要单独给矩阵最中间的位置赋值
        if (min(rows, columns) % 2) {
            if(rows &gt; columns){
                for (int i = mid; i &lt; mid + rows - columns + 1; ++i) {
                    res[count++] = matrix[i][mid];
                }

            } else {
                for (int i = mid; i &lt; mid + columns - rows + 1; ++i) {
                    res[count++] = matrix[mid][i];
                }
            }
        }
        return res;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类似题目" tabindex="-1"><a class="header-anchor" href="#类似题目" aria-hidden="true">#</a> 类似题目</h2>`,13),f={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/",target:"_blank",rel:"noopener noreferrer"},x=e(`<h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//存放数组的数</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//列数</span>
        <span class="token keyword">int</span> columns <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//行数</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//遍历起点</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//循环的次数 行数和列数中的最小值除以二</span>
        <span class="token keyword">int</span> loop <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>rows<span class="token punctuation">,</span>columns<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">//未遍历的中间列（行）的列（行）下标</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> loop<span class="token punctuation">;</span>
        <span class="token comment">//终止条件</span>
        <span class="token keyword">int</span> offSet <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>loop<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//初始化起点</span>
            i <span class="token operator">=</span> j <span class="token operator">=</span> start<span class="token punctuation">;</span>
            
            <span class="token comment">//从左往右</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> columns <span class="token operator">-</span> offSet<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
                ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从上往下</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows <span class="token operator">-</span> offSet<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从右往左</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&gt;</span> start<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
                ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//从下往上</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
                ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//每循环一次 改变起点位置</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">//终止条件改变</span>
            offSet<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//如果行和列中的最小值是奇数 则会产生中间行或者中间列没有遍历</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>rows<span class="token punctuation">,</span>columns<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//行大于列则产生中间列</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>rows <span class="token operator">&gt;</span> columns<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//中间列的行的最大下标的下一位的下标为mid + rows - columns + 1</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> mid<span class="token punctuation">;</span> k <span class="token operator">&lt;</span> mid <span class="token operator">+</span> rows <span class="token operator">-</span> columns <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//列大于等于行则产生中间行</span>
                <span class="token comment">//中间行的列的最大下标的下一位的下标为mid + columns - rows + 1</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> mid<span class="token punctuation">;</span> k <span class="token operator">&lt;</span> mid <span class="token operator">+</span> columns <span class="token operator">-</span> rows <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    let startX = startY = 0
    let i = 0
    let arr = new Array(m*n).fill(0)
    let offset = 1
    let loop = mid = Math.floor(Math.min(m,n) / 2)
    while (loop--) {
        let row = startX
        let col = startY
        // --&gt;
        for (; col &lt; n + startY - offset; col++) {
            arr[i++] = matrix[row][col]
        }
        // down
        for (; row &lt; m + startX - offset; row++) {
            arr[i++] = matrix[row][col]
        }
        // &lt;--
        for (; col &gt; startY; col--) {
            arr[i++] = matrix[row][col]
        }
        for (; row &gt; startX; row--) {
            arr[i++] = matrix[row][col]
        }
        startX++
        startY++
        offset += 2
    }
    if (Math.min(m, n) % 2 === 1) {
        if (n &gt; m) {
            for (let j = mid; j &lt; mid + n - m + 1; j++) {
                arr[i++] = matrix[mid][j]
            }
        } else {
            for (let j = mid; j &lt; mid + m - n + 1; j++) {
                arr[i++] = matrix[j][mid]
            }
        }
    }
    return arr
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type matrix: List[List[int]]
        :rtype: List[int]
        &quot;&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token comment"># 判定List是否为空</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        row<span class="token punctuation">,</span> col <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 行数，列数</span>
        loop <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span> <span class="token comment"># 循环轮数</span>
        stx<span class="token punctuation">,</span> sty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token comment"># 起始x，y坐标</span>
        i<span class="token punctuation">,</span> j <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
        count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 计数</span>
        offset <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 每轮减少的格子数</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>row <span class="token operator">*</span> col<span class="token punctuation">)</span>
        <span class="token keyword">while</span> loop<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token punctuation">:</span><span class="token comment"># 左闭右开</span>
            i<span class="token punctuation">,</span> j <span class="token operator">=</span> stx<span class="token punctuation">,</span> sty
            <span class="token keyword">while</span> j <span class="token operator">&lt;</span> col <span class="token operator">-</span> offset <span class="token punctuation">:</span>   <span class="token comment"># 从左到右</span>
                result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
                j <span class="token operator">+=</span> <span class="token number">1</span>  
            <span class="token keyword">while</span> i <span class="token operator">&lt;</span> row <span class="token operator">-</span> offset <span class="token punctuation">:</span> <span class="token comment"># 从上到下</span>
                result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
                i <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">while</span> j<span class="token operator">&gt;</span>sty <span class="token punctuation">:</span>  <span class="token comment"># 从右到左</span>
                result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
                j <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token keyword">while</span> i<span class="token operator">&gt;</span>stx <span class="token punctuation">:</span>  <span class="token comment"># 从下到上</span>
                result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
                i <span class="token operator">-=</span> <span class="token number">1</span>
            stx <span class="token operator">+=</span> <span class="token number">1</span>
            sty <span class="token operator">+=</span> <span class="token number">1</span>
            offset <span class="token operator">+=</span> <span class="token number">1</span>
            loop <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token builtin">min</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">:</span>  <span class="token comment"># 判定是否需要填充多出来的一行</span>
            i <span class="token operator">=</span> stx
            <span class="token keyword">if</span> row <span class="token operator">&lt;</span> col <span class="token punctuation">:</span>
                <span class="token keyword">while</span> i <span class="token operator">&lt;</span> stx <span class="token operator">+</span> col <span class="token operator">-</span> row <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">:</span>
                    result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>stx<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    count <span class="token operator">+=</span> <span class="token number">1</span>
                    i <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">else</span> <span class="token punctuation">:</span>
                <span class="token keyword">while</span> i <span class="token operator">&lt;</span> stx <span class="token operator">+</span> row <span class="token operator">-</span> col <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">:</span>
                    result<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>stx<span class="token punctuation">]</span>
                    count <span class="token operator">+=</span> <span class="token number">1</span>
                    i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(g,j){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),d,k,m,v,n("p",null,[s("本题解决思路继承自"),n("a",b,[s("59.螺旋矩阵II"),t(a)]),s("，建议看完59.螺旋矩阵II之后再看本题")]),w,n("ul",null,[n("li",null,[n("a",f,[s("59.螺旋矩阵II"),t(a)])]),n("li",null,[n("a",h,[s("剑指Offer 29.顺时针打印矩阵"),t(a)])])]),x])}const I=p(c,[["render",y],["__file","0054.luoxuanjuzhen.html.vue"]]);export{I as default};
