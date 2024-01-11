import{_ as p,r as o,o as c,c as l,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"野路子搞算法《两数之和》-带着小白刷面试算法题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#野路子搞算法《两数之和》-带着小白刷面试算法题","aria-hidden":"true"},"#"),s(" 野路子搞算法《两数之和》，带着小白刷面试算法题")],-1),r=n("blockquote",null,[n("p",null,[s("Github： https://github.com/MyGitBooks/niubility-algorithm "),n("br"),s("本文档是作者小傅哥通过从leetcode 剑指offer 编程之美 等资料中收集算法题目并加以逻辑分析和编码搞定题目，最终编写资料到本文档中，为大家提供在算法领域的帮助。如果本文能为您提供帮助，请给予支持(加入、点赞、分享)！")])],-1),k=n("h2",{id:"一、前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、前言","aria-hidden":"true"},"#"),s(" 一、前言")],-1),d=n("p",null,[s("在这之前我基本没怎么关注过"),n("code",null,"leetcode"),s("，还是最近有人经常说面试刷题，算法刷到谷歌上班去了。我才开始了解下，仔细一看原来虽然没关注过，但是类似的题还是做过的并且还买过一本《编程之美》的书。")],-1),m={href:"https://leetcode-cn.com/problemset/all",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"1 2 3 ... 1566",-1),v=n("code",null,"谷歌",-1),h=n("code",null,"字节跳动",-1),g=n("code",null,"腾讯",-1),y=n("code",null,"阿里",-1),w=n("code",null,"等等",-1),_=e(`<p>对于这个算法题来说我还是蛮喜欢的，因为我是属于那种很偏科的男人，通常数学：<code>140</code>分，英语：<code>40</code>分(<em>当年</em>)。好！理由找好了，开始刷个题。<em>听说数学好的男人都不简单！</em> 所以我打算接下来定期的做一些算法题，同时将我的思路进行整理，写成笔记分享给新人，一起从算法中成长。</p><h2 id="二、时间复杂度" tabindex="-1"><a class="header-anchor" href="#二、时间复杂度" aria-hidden="true">#</a> 二、时间复杂度</h2><p>时间复杂度可以说是算法的基础，如果不在乎时间复杂度，那么没有 <code>for</code> 循环解决不了问题！而我们一般所说的时间复杂度以及耗时排列包括；<code>O(1)</code> &lt; <code>O(logn)</code> &lt; <code>O(n)</code> &lt; <code>O(nlogn)</code> &lt; <code>O(n^2)</code> &lt; <code>O(n^3)</code> &lt; <code>O(2^n)</code> &lt; <code>O(n!)</code> &lt; <code>O(n^n)</code> 等。那么一段代码的耗时主要由各个行为块的执行次数相加并去掉最小影响系数而得出的，接下来先看下这种东西是如何计算出来的。</p><h3 id="_1-o-n" tabindex="-1"><a class="header-anchor" href="#_1-o-n" aria-hidden="true">#</a> 1. O(n)</h3><blockquote><p>代码块</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">代码块</th><th style="text-align:left;">耗时</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">int n = 10</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">int i = 0</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">i &lt; n</td><td style="text-align:left;">n + 1</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">i++</td><td style="text-align:left;">n</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">System.out.println(i)</td><td style="text-align:left;">n</td></tr></tbody></table><p><strong>最终耗时：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sum = 1 + 1 + n + 1+ n + n
	= 3n+3
	= n (忽略低阶梯)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-00.png" alt=""></p><hr><p>从公式和象限图中可以看到，当我们的公式<code>3n+3</code>，随着 n 的数值越来越大的时候，常数3就可以忽略低阶梯不记了。所以在这段代码中的时间复杂度就是；O(n)</p><blockquote><p>所谓低阶项，简单地说就是当n非常大时，这个项相对于另外一个项很小，可以忽略，比如n相对于n^2,n就是低阶项</p></blockquote><h3 id="_2-o-logn" tabindex="-1"><a class="header-anchor" href="#_2-o-logn" aria-hidden="true">#</a> 2. O(logn)</h3><blockquote><p>代码块</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> sum <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最终耗时：</strong></p><p>这回我们只看执行次数最多的，很明显这是一个 <code>2 * 2 * 2 ··· n</code>，大于 n 跳出循环。 那么我们使用函数；2^x = n，x = logn，就可以表示出整体的时间复杂度为 O(logn)</p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-07.png" alt=""></p><p>好！结合这两个例子，相信你对时间复杂度已经有所理解，后面的算法题中就可以知道自己的算法是否好坏。</p><h2 id="三、算法题-两数之和" tabindex="-1"><a class="header-anchor" href="#三、算法题-两数之和" aria-hidden="true">#</a> 三、算法题：两数之和</h2>`,21),f={href:"https://leetcode-cn.com/problems/two-sum/submissions/",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>给定一个整数数组 <code>nums</code> 和一个目标值 <code>target</code>，请你在该数组中找出和为目标值的那 <strong>两个</strong> 整数，并返回他们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p><p>示例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>给定 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target <span class="token operator">=</span> <span class="token number">9</span>
 
因为 nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">=</span> <span class="token number">9</span>
所以返回 <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// todo</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、解题" tabindex="-1"><a class="header-anchor" href="#四、解题" aria-hidden="true">#</a> 四、解题</h2><p>这是leetcode的第一题，难度<code>简单</code>，其实如果要是使用两层for循环嵌套，确实不太难。但是如果想打败99%的选手还是需要斟酌斟酌算法。</p><h3 id="思路1-双层循环" tabindex="-1"><a class="header-anchor" href="#思路1-双层循环" aria-hidden="true">#</a> 思路1，双层循环</h3><p>先不考虑时间复杂度的话，最直接的就是双层<code>for</code>循环，用每一个数和数组中其他数做家和比对，如下；</p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-01.png" alt=""></p><p>可以看到这样的时间复杂度是；n*(n-1) ··· 4<em>3、4</em>2、4*1，也就是O(n!)，有点像九九乘法表的结构。</p><p><strong>代码：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> idxs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                idxs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                idxs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> idxs<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>耗时：</strong></p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-02.png" alt=""></p><ul><li>对于这样的算法虽然能解决问题，但是并不能满足我们的需求，毕竟这个级别的时间复杂度下实在是太慢了。</li></ul><h3 id="思路2-单层循环" tabindex="-1"><a class="header-anchor" href="#思路2-单层循环" aria-hidden="true">#</a> 思路2，单层循环</h3><p>为了把这样一个双层循环简化为单层，我们最能直接想到的就事放到 Map 这样的数据结构中，方便我们存取比对。那么这样的一个计算过程如下图；</p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-03.png" alt=""></p><ul><li>这个过程的核心内容是将原来的两数之和改成差值计算，并将每次的差与 Map 中元素进行比对。如果差值正好存在 Map 中，那么直接取出。否则将数存入到 Map 中，继续执行。</li><li>这个过程就可以将原来的双层循环改为单层，时间复杂度也到了 O(n) 级别。</li></ul><p><strong>代码：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> hashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        hashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>耗时：</strong></p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-04.png" alt=""></p><ul><li>可以看到当我们使用 Map 结构的时候，整个执行执行用时已经有了很大的改善。但是你有考虑过<code>containsKey</code> 与 <code>get</code> 是否为 null 相比哪个快吗？</li><li>这个算法已经很良好了，但是这个对 key 值的比对还是很耗时的，需要反复的对 map 进行操作，那么我们还需要再优化一下。</li></ul><h3 id="思路3-bit结构" tabindex="-1"><a class="header-anchor" href="#思路3-bit结构" aria-hidden="true">#</a> 思路3，Bit结构</h3><p>如果说想把我们上面使用 Map 结构的地方优化掉，我们可以考虑下 Map 数据是如何存放的，他有一种算法是自身扩容 2^n - 1 &amp; 元素，求地址。之后按照地址在进行存放数据。那么我们可以把这部分算法拿出来，我们自己设计一个数组结构，将元素进行与运算存放到我们自己定义的数组中。如下图；</p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-05.png" alt=""></p><ul><li>左侧是我们假定的入参<code>int[] nums</code>，32是我们设定的值，这个值的设定需要满足存放大小够用，否则地址会混乱。</li><li>接下来我们使用 32 - 1，也就是二进制 <code>011111</code>与每一个数组中的值进行与运算，求存放地址。</li><li>当算好地址后，将元素存放在数组中，设置值。这个值就是我们的元素本身位置了，但是需要<code>+1</code>，因为默认数组是0，如果不加1，就看不到位置了。最终使用的时候，可以再将位置结果 <code>-1</code>。</li></ul><p><strong>代码：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">towSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> volume <span class="token operator">=</span> <span class="token number">2048</span><span class="token punctuation">;</span>              
    <span class="token keyword">int</span> bitMode <span class="token operator">=</span> volume <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>       
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>volume<span class="token punctuation">]</span><span class="token punctuation">;</span>      
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token punctuation">(</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> bitMode<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>t<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">}</span><span class="token punctuation">;</span>
        t<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> bitMode<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这个2048是我们试出来的，主要根据leetcode中的单测用例决定。</li></ul><p><strong>耗时：</strong></p><p><img src="https://bugstack.cn/assets/images/2020/niubility-algorithm-0001-06.png" alt=""></p><ul><li>出现0毫秒耗时，100%击败，这个不一定每次都这样，可能你试的时候不一样。得益于数据结构的优化使得这个算法的耗时很少。</li></ul><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>`,37),j=n("li",null,"野路子搞算法，没有看过算法导论、也没有套用模板，但如果需要后续的不断的加深自己的知识点，也是需要学习的。目前在我看来这些更像是数学题，主要可以提升对同一件事情的多种处理方式，同时也增加个人的编程能力。",-1),M=n("li",null,"算法的学习也不太应该套用各种理论，当然每个人看法不一样，我允许你的观点，也要接受我的想法。",-1),O=n("li",null,"在各个大厂面试过程中，都有；算法、源码、项目、技术栈以及个人的一些优点，如果你能在前两个点上给面试官很好的印象，那么你就放心的要工资吧。",-1),q={href:"https://github.com/MyGitBooks/niubility-algorithm",target:"_blank",rel:"noopener noreferrer"};function S(B,z){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,k,d,n("p",null,[s("在 "),n("a",m,[s("leetcode-cn.com"),t(a)]),s(" 中每个算法题都有编号；"),b,s("，而且还在增加。你我都是新人，既然没了解过那就从第一题开始吧，尝试从算法中吸取一些创新的思路。否则为什么那么多公司面试招聘都会去考下算法！"),v,s(),h,s(),g,s(),y,s(),w]),_,n("p",null,[n("a",f,[s("https://leetcode-cn.com/problems/two-sum/submissions/"),t(a)])]),x,n("ul",null,[j,M,O,n("li",null,[s("从这篇文章开始，我会陆续做一做算法题，提升自己的功夫底子，也分析给小白。欢迎小白跟随！Git地址："),n("a",q,[s("https://github.com/MyGitBooks/niubility-algorithm"),t(a)])])])])}const G=p(i,[["render",S],["__file","2020-03-14-yeluzigaosuanfa《liangshuzhihe》，daizhouxiaobaishuamianshi.html.vue"]]);export{G as default};
