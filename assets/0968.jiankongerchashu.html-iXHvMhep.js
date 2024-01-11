import{_ as i,r as p,o as l,c as o,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},r=n("h1",{id:"_968-监控二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_968-监控二叉树","aria-hidden":"true"},"#"),s(" 968.监控二叉树")],-1),u={href:"https://leetcode.cn/problems/binary-tree-cameras/",target:"_blank",rel:"noopener noreferrer"},d=t('<p>给定一个二叉树，我们在树的节点上安装摄像头。</p><p>节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。</p><p>计算监控树的所有节点所需的最小摄像头数量。</p><p>示例 1：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201229175736596.png" alt=""></p><ul><li>输入：[0,0,null,0,0]</li><li>输出：1</li><li>解释：如图所示，一台摄像头足以监控所有节点。</li></ul><p>示例 2：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2020122917584449.png" alt=""></p><ul><li>输入：[0,0,null,0,null,0,null,null,0]</li><li>输出：2</li><li>解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。</li></ul><p>提示：</p><ul><li>给定树的节点数的范围是 [1, 1000]。</li><li>每个节点的值都是 0。</li></ul><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',12),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1SA411U75i",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目首先要想，如何放置，才能让摄像头最小的呢？</p><p>从题目中示例，其实可以得到启发，<strong>我们发现题目示例中的摄像头都没有放在叶子节点上！</strong></p><p>这是很重要的一个线索，摄像头可以覆盖上中下三层，如果把摄像头放在叶子节点上，就浪费的一层的覆盖。</p><p>所以把摄像头放在叶子节点的父节点位置，才能充分利用摄像头的覆盖面积。</p><p>那么有同学可能问了，为什么不从头结点开始看起呢，为啥要从叶子节点看呢？</p><p>因为头结点放不放摄像头也就省下一个摄像头， 叶子节点放不放摄像头省下了的摄像头数量是指数阶别的。</p><p><strong>所以我们要从下往上看，局部最优：让叶子节点的父节点安摄像头，所用摄像头最少，整体最优：全部摄像头数量所用最少！</strong></p><p>局部最优推出全局最优，找不出反例，那么就按照贪心来！</p><p>此时，大体思路就是从低到上，先给叶子节点父节点放个摄像头，然后隔两个节点放一个摄像头，直至到二叉树头结点。</p><p>此时这道题目还有两个难点：</p><ol><li>二叉树的遍历</li><li>如何隔两个节点放一个摄像头</li></ol><h3 id="确定遍历顺序" tabindex="-1"><a class="header-anchor" href="#确定遍历顺序" aria-hidden="true">#</a> 确定遍历顺序</h3><p>在二叉树中如何从低向上推导呢？</p><p>可以使用后序遍历也就是左右中的顺序，这样就可以在回溯的过程中从下到上进行推导了。</p><p>后序遍历代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int traversal(TreeNode* cur) {

    // 空节点，该节点有覆盖
    if (终止条件) return ;

    int left = traversal(cur-&gt;left);    // 左
    int right = traversal(cur-&gt;right);  // 右

    逻辑处理                            // 中
    return ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意在以上代码中我们取了左孩子的返回值，右孩子的返回值，即left 和 right， 以后推导中间节点的状态</strong></p><h3 id="如何隔两个节点放一个摄像头" tabindex="-1"><a class="header-anchor" href="#如何隔两个节点放一个摄像头" aria-hidden="true">#</a> 如何隔两个节点放一个摄像头</h3><p>此时需要状态转移的公式，大家不要和动态的状态转移公式混到一起，本题状态转移没有择优的过程，就是单纯的状态转移！</p><p>来看看这个状态应该如何转移，先来看看每个节点可能有几种状态：</p><p>有如下三种：</p><ul><li>该节点无覆盖</li><li>本节点有摄像头</li><li>本节点有覆盖</li></ul><p>我们分别有三个数字来表示：</p><ul><li>0：该节点无覆盖</li><li>1：本节点有摄像头</li><li>2：本节点有覆盖</li></ul><p>大家应该找不出第四个节点的状态了。</p><p><strong>一些同学可能会想有没有第四种状态：本节点无摄像头，其实无摄像头就是 无覆盖 或者 有覆盖的状态，所以一共还是三个状态。</strong></p><p><strong>因为在遍历树的过程中，就会遇到空节点，那么问题来了，空节点究竟是哪一种状态呢？ 空节点表示无覆盖？ 表示有摄像头？还是有覆盖呢？</strong></p><p>回归本质，为了让摄像头数量最少，我们要尽量让叶子节点的父节点安装摄像头，这样才能摄像头的数量最少。</p><p>那么空节点不能是无覆盖的状态，这样叶子节点就要放摄像头了，空节点也不能是有摄像头的状态，这样叶子节点的父节点就没有必要放摄像头了，而是可以把摄像头放在叶子节点的爷爷节点上。</p><p><strong>所以空节点的状态只能是有覆盖，这样就可以在叶子节点的父节点放摄像头了</strong></p><p>接下来就是递推关系。</p><p>那么递归的终止条件应该是遇到了空节点，此时应该返回2（有覆盖），原因上面已经解释过了。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 空节点，该节点有覆盖
if (cur == NULL) return 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>递归的函数，以及终止条件已经确定了，再来看单层逻辑处理。</p><p>主要有如下四类情况：</p><ul><li>情况1：左右节点都有覆盖</li></ul><p>左孩子有覆盖，右孩子有覆盖，那么此时中间节点应该就是无覆盖的状态了。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201229203710729.png" alt="968.监控二叉树2"></p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 左右节点都有覆盖
if (left == 2 &amp;&amp; right == 2) return 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>情况2：左右节点至少有一个无覆盖的情况</li></ul><p>如果是以下情况，则中间节点（父节点）应该放摄像头：</p><ul><li>left == 0 &amp;&amp; right == 0 左右节点无覆盖</li><li>left == 1 &amp;&amp; right == 0 左节点有摄像头，右节点无覆盖</li><li>left == 0 &amp;&amp; right == 1 左节点有无覆盖，右节点摄像头</li><li>left == 0 &amp;&amp; right == 2 左节点无覆盖，右节点覆盖</li><li>left == 2 &amp;&amp; right == 0 左节点覆盖，右节点无覆盖</li></ul><p>这个不难理解，毕竟有一个孩子没有覆盖，父节点就应该放摄像头。</p><p>此时摄像头的数量要加一，并且return 1，代表中间节点放摄像头。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (left == 0 || right == 0) {
    result++;
    return 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>情况3：左右节点至少有一个有摄像头</li></ul><p>如果是以下情况，其实就是 左右孩子节点有一个有摄像头了，那么其父节点就应该是2（覆盖的状态）</p><ul><li>left == 1 &amp;&amp; right == 2 左节点有摄像头，右节点有覆盖</li><li>left == 2 &amp;&amp; right == 1 左节点有覆盖，右节点有摄像头</li><li>left == 1 &amp;&amp; right == 1 左右节点都有摄像头</li></ul><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (left == 1 || right == 1) return 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>从这个代码中，可以看出，如果left == 1, right == 0 怎么办？其实这种条件在情况2中已经判断过了</strong>，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2020122920362355.png" alt="968.监控二叉树1"></p><p>这种情况也是大多数同学容易迷惑的情况。</p><ol start="4"><li>情况4：头结点没有覆盖</li></ol><p>以上都处理完了，递归结束之后，可能头结点 还有一个无覆盖的情况，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201229203742446.png" alt="968.监控二叉树3"></p><p>所以递归结束之后，还要判断根节点，如果没有覆盖，result++，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int minCameraCover(TreeNode* root) {
    result = 0;
    if (traversal(root) == 0) { // root 无覆盖
        result++;
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上四种情况我们分析完了，代码也差不多了，整体代码如下：</p><p>（<strong>以下我的代码注释很详细，为了把情况说清楚，特别把每种情况列出来。</strong>）</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
private:
    int result;
    int traversal(TreeNode* cur) {

        // 空节点，该节点有覆盖
        if (cur == NULL) return 2;

        int left = traversal(cur-&gt;left);    // 左
        int right = traversal(cur-&gt;right);  // 右

        // 情况1
        // 左右节点都有覆盖
        if (left == 2 &amp;&amp; right == 2) return 0;

        // 情况2
        // left == 0 &amp;&amp; right == 0 左右节点无覆盖
        // left == 1 &amp;&amp; right == 0 左节点有摄像头，右节点无覆盖
        // left == 0 &amp;&amp; right == 1 左节点有无覆盖，右节点摄像头
        // left == 0 &amp;&amp; right == 2 左节点无覆盖，右节点覆盖
        // left == 2 &amp;&amp; right == 0 左节点覆盖，右节点无覆盖
        if (left == 0 || right == 0) {
            result++;
            return 1;
        }

        // 情况3
        // left == 1 &amp;&amp; right == 2 左节点有摄像头，右节点有覆盖
        // left == 2 &amp;&amp; right == 1 左节点有覆盖，右节点有摄像头
        // left == 1 &amp;&amp; right == 1 左右节点都有摄像头
        // 其他情况前段代码均已覆盖
        if (left == 1 || right == 1) return 2;

        // 以上代码我没有使用else，主要是为了把各个分支条件展现出来，这样代码有助于读者理解
        // 这个 return -1 逻辑不会走到这里。
        return -1;
    }

public:
    int minCameraCover(TreeNode* root) {
        result = 0;
        // 情况4
        if (traversal(root) == 0) { // root 无覆盖
            result++;
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码的基础上，再进行精简，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
private:
    int result;
    int traversal(TreeNode* cur) {
        if (cur == NULL) return 2;
        int left = traversal(cur-&gt;left);    // 左
        int right = traversal(cur-&gt;right);  // 右
        if (left == 2 &amp;&amp; right == 2) return 0;
        else if (left == 0 || right == 0) {
            result++;
            return 1;
        } else return 2;
    }
public:
    int minCameraCover(TreeNode* root) {
        result = 0;
        if (traversal(root) == 0) { // root 无覆盖
            result++;
        }
        return result;
    }
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)，需要遍历二叉树上的每个节点</li><li>空间复杂度: O(n)</li></ul><p>大家可能会惊讶，居然可以这么简短，<strong>其实就是在版本一的基础上，使用else把一些情况直接覆盖掉了</strong>。</p><p>在网上关于这道题解可以搜到很多这种神级别的代码，但都没讲不清楚，如果直接看代码的话，指定越看越晕，<strong>所以建议大家对着版本一的代码一步一步来，版本二中看不中用！</strong>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本题的难点首先是要想到贪心的思路，然后就是遍历和状态推导。</p><p>在二叉树上进行状态推导，其实难度就上了一个台阶了，需要对二叉树的操作非常娴熟。</p><p>这道题目是名副其实的hard，大家感受感受。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span>  res<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对根节点的状态做检验,防止根节点是无覆盖状态 .</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">minCame</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     节点的状态值：
       0 表示无覆盖
       1 表示 有摄像头
       2 表示有覆盖
    后序遍历，根据左右节点的情况,来判读 自己的状态
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minCame</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 空节点默认为 有覆盖状态，避免在叶子节点上放摄像头</span>
            <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> left<span class="token operator">=</span><span class="token function">minCame</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span>  right<span class="token operator">=</span><span class="token function">minCame</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果左右节点都覆盖了的话, 那么本节点的状态就应该是无覆盖,没有摄像头</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">==</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span>right<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//(2,2)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">==</span><span class="token number">0</span><span class="token operator">||</span>right<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 左右节点都是无覆盖状态,那 根节点此时应该放一个摄像头</span>
            <span class="token comment">// (0,0) (0,1) (0,2) (1,0) (2,0)</span>
            <span class="token comment">// 状态值为 1 摄像头数 ++;</span>
            res<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// 左右节点的 状态为 (1,1) (1,2) (2,1) 也就是左右节点至少存在 1个摄像头，</span>
            <span class="token comment">// 那么本节点就是处于被覆盖状态</span>
            <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>贪心（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
         <span class="token comment"># Greedy Algo:</span>
        <span class="token comment"># 从下往上安装摄像头：跳过leaves这样安装数量最少，局部最优 -&gt; 全局最优</span>
        <span class="token comment"># 先给leaves的父节点安装，然后每隔两层节点安装一个摄像头，直到Head</span>
        <span class="token comment"># 0: 该节点未覆盖</span>
        <span class="token comment"># 1: 该节点有摄像头</span>
        <span class="token comment"># 2: 该节点有覆盖</span>
    <span class="token keyword">def</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token comment"># 定义递归函数</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 用于记录摄像头的安装数量</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">return</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

        
    <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> result<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> cur<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span>

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>

        <span class="token comment"># 情况1: 左右节点都有覆盖</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> right <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>

        <span class="token comment"># 情况2:</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 0 左右节点无覆盖</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 0 左节点有摄像头，右节点无覆盖</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 1 左节点无覆盖，右节点有摄像头</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 2 左节点无覆盖，右节点覆盖</span>
        <span class="token comment"># left == 2 &amp;&amp; right == 0 左节点覆盖，右节点无覆盖</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> right <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> <span class="token number">1</span>

        <span class="token comment"># 情况3:</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 2 左节点有摄像头，右节点有覆盖</span>
        <span class="token comment"># left == 2 &amp;&amp; right == 1 左节点有覆盖，右节点有摄像头</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 1 左右节点都有摄像头</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">or</span> right <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>贪心（版本二）利用elif精简代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
         <span class="token comment"># Greedy Algo:</span>
        <span class="token comment"># 从下往上安装摄像头：跳过leaves这样安装数量最少，局部最优 -&gt; 全局最优</span>
        <span class="token comment"># 先给leaves的父节点安装，然后每隔两层节点安装一个摄像头，直到Head</span>
        <span class="token comment"># 0: 该节点未覆盖</span>
        <span class="token comment"># 1: 该节点有摄像头</span>
        <span class="token comment"># 2: 该节点有覆盖</span>
    <span class="token keyword">def</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token comment"># 定义递归函数</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 用于记录摄像头的安装数量</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">return</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

        
    <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">:</span> TreeNode<span class="token punctuation">,</span> result<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> cur<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span>

        left <span class="token operator">=</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>

        <span class="token comment"># 情况1: 左右节点都有覆盖</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> right <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>

        <span class="token comment"># 情况2:</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 0 左右节点无覆盖</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 0 左节点有摄像头，右节点无覆盖</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 1 左节点无覆盖，右节点有摄像头</span>
        <span class="token comment"># left == 0 &amp;&amp; right == 2 左节点无覆盖，右节点覆盖</span>
        <span class="token comment"># left == 2 &amp;&amp; right == 0 左节点覆盖，右节点无覆盖</span>
        <span class="token keyword">elif</span> left <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> right <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> <span class="token number">1</span>

        <span class="token comment"># 情况3:</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 2 左节点有摄像头，右节点有覆盖</span>
        <span class="token comment"># left == 2 &amp;&amp; right == 1 左节点有覆盖，右节点有摄像头</span>
        <span class="token comment"># left == 1 &amp;&amp; right == 1 左右节点都有摄像头</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> inf <span class="token operator">=</span> math<span class="token punctuation">.</span>MaxInt64 <span class="token operator">/</span> <span class="token number">2</span>

<span class="token keyword">func</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span><span class="token punctuation">)</span>
    dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> inf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
        lefta<span class="token punctuation">,</span> leftb<span class="token punctuation">,</span> leftc <span class="token operator">:=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
        righta<span class="token punctuation">,</span> rightb<span class="token punctuation">,</span> rightc <span class="token operator">:=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
        a <span class="token operator">=</span> leftc <span class="token operator">+</span> rightc <span class="token operator">+</span> <span class="token number">1</span>
        b <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token function">min</span><span class="token punctuation">(</span>lefta<span class="token operator">+</span>rightb<span class="token punctuation">,</span> righta<span class="token operator">+</span>leftb<span class="token punctuation">)</span><span class="token punctuation">)</span>
        c <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> leftb<span class="token operator">+</span>rightb<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> ans<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;=</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>var minCameraCover = function(root) {
    let result = 0
    function traversal(cur) {
        if(cur === null) {
            return 2
        }

        let left = traversal(cur.left)
        let right = traversal(cur.right)

        if(left === 2 &amp;&amp; right === 2) {
            return 0
        }

        if(left === 0 || right === 0) {
            result++
            return 1
        }

        if(left === 1 || right === 1) {
            return 2
        }

        return -1
    }

    if(traversal(root) === 0) {
        result++
    }

    return result

};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 0-无覆盖， 1-有摄像头， 2-有覆盖 */</span>
    <span class="token keyword">type</span> <span class="token class-name">statusCode</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> resCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resCount<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> statusCode <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> left<span class="token operator">:</span> statusCode <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> statusCode <span class="token operator">=</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> resStatus<span class="token operator">:</span> statusCode <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resStatus <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            resCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resStatus <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            resStatus <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> resStatus<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
**函数后序遍历二叉树。判断一个结点状态时，根据其左右孩子结点的状态进行判断
**状态：0为没有被摄像头覆盖到。1为此结点处应设置摄像头。2为此结点已被摄像头覆盖
*/</span>
<span class="token keyword">int</span> <span class="token function">traversal</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> ans<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//递归结束条件：传入结点为NULL，假设此结点能被摄像头覆盖。这样方便与对叶子结点的判断，将叶子结点设为0</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">//后序遍历二叉树，记录左右孩子的状态。根据左右孩子状态更新结点自身状态</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> ans<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//若左右孩子都可以被摄像头覆盖，将父亲结点状态设为0</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//若左右孩子有一个结点状态为没有被覆盖（0），则将父亲结点状态设置为摄像头</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>ans<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//若左右孩子有一个为摄像头，证明父亲结点可以被覆盖。将父亲结点状态变为2</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">//逻辑不会走到-1，语句不会执行</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">minCameraCover</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//在对整个二叉树遍历后。头结点可能未被覆盖，这时候如果函数返回值为0，证明头结点未被覆盖。说明头结点也需要添置摄像头，ans++</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ans<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        ans<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> minCameraCover<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">def</span> traversal<span class="token punctuation">(</span>cur<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 空节点，该节点有覆盖</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span>
      <span class="token keyword">var</span> left <span class="token operator">=</span> traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token keyword">var</span> right <span class="token operator">=</span> traversal<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token comment">// 情况1，左右节点都有覆盖</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 情况2</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 情况3</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
      <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>/// 版本一
impl Solution {
    pub fn min_camera_cover(root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;) -&gt; i32 {
        let mut res = 0;
        if Self::traversal(&amp;root, &amp;mut res) == 0 {
            res += 1;
        }
        res
    }

    pub fn traversal(cur: &amp;Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;, ans: &amp;mut i32) -&gt; i32 {
        // 0 未覆盖 1 节点已设置摄像头 2 节点已覆盖
        if let Some(node) = cur {
            let node = node.borrow();

            let left = Self::traversal(&amp;node.left, ans);
            let right = Self::traversal(&amp;node.right, ans);

            // 左右节点都被覆盖
            if left == 2 &amp;&amp; right == 2 {
                return 0; // 无覆盖
            }

            // left == 0 right == 0 左右无覆盖
            // left == 0 right == 1 左节点无覆盖 右节点有摄像头
            // left == 1 right == 0 左节点有摄像头 左节点无覆盖
            // left == 0 right == 2 左节点无覆盖 右节点有覆盖
            // left == 2 right == 0 左节点有覆盖 右节点无覆盖
            if left == 0 || right == 0 {
                *ans += 1;
                return 1;
            }

            // left == 1 right == 1 左节点有摄像头 右节点有摄像头
            // left == 1 right == 2 左节点有摄像头 右节点覆盖
            // left == 2 right == 1 左节点覆盖 右节点有摄像头
            if left == 1 || right == 1 {
                return 2; // 已覆盖
            }
        } else {
            return 2;
        }
        -1
    }
}

/// 版本二
enum NodeState {
    NoCover = 0,
    Camera = 1,
    Covered = 2,
}

impl Solution {
    pub fn min_camera_cover(root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;) -&gt; i32 {
        let mut res = 0;
        let state = Self::traversal(&amp;root, &amp;mut res);
        match state {
            NodeState::NoCover =&gt; res + 1,
            _ =&gt; res,
        }
    }

    pub fn traversal(cur: &amp;Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;, ans: &amp;mut i32) -&gt; NodeState {
        if let Some(node) = cur {
            let node = node.borrow();
            let left_state = Self::traversal(&amp;node.left, ans);
            let right_state = Self::traversal(&amp;node.right, ans);
            match (left_state, right_state) {
                (NodeState::NoCover, _) | (_, NodeState::NoCover) =&gt; {
                    *ans += 1;
                    NodeState::Camera
                }
                (NodeState::Camera, _) | (_, NodeState::Camera) =&gt; NodeState::Covered,
                (_, _) =&gt; NodeState::NoCover,
            }
        } else {
            NodeState::Covered
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96);function b(f,g){const a=p("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[n("a",u,[s("力扣题目链接"),e(a)])]),d,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",m,[s("贪心算法，二叉树与贪心的结合，有点难...... LeetCode:968.监督二叉树"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),k])}const y=i(c,[["render",b],["__file","0968.jiankongerchashu.html.vue"]]);export{y as default};
