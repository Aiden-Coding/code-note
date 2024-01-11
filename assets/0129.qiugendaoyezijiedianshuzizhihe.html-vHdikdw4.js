import{_ as p,r as e,o,c,a as n,b as s,d as t,e as l}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_129-求根节点到叶节点数字之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_129-求根节点到叶节点数字之和","aria-hidden":"true"},"#"),s(" 129. 求根节点到叶节点数字之和")],-1),r={href:"https://leetcode.cn/problems/sum-root-to-leaf-numbers/",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),k={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#_113-%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8Cii",target:"_blank",rel:"noopener noreferrer"},v={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#_113-%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8Cii",target:"_blank",rel:"noopener noreferrer"},m={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#_112-%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E9%80%92%E5%BD%92%E5%B8%A6%E7%9D%80%E5%9B%9E%E6%BA%AF.html",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"接下来我们来看题：",-1),g=n("p",null,"首先思路很明确，就是要遍历整个树把更节点到叶子节点组成的数字相加。",-1),y=n("p",null,"那么先按递归三部曲来分析：",-1),w=n("h3",{id:"递归三部曲",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#递归三部曲","aria-hidden":"true"},"#"),s(" 递归三部曲")],-1),_={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},E=n("ul",null,[n("li",null,"确定递归函数返回值及其参数")],-1),B={href:"https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<p>参数只需要把根节点传入，此时还需要定义两个全局遍历，一个是result，记录最终结果，一个是<code>vector&lt;int&gt; path</code> 。</p><p><strong>为什么用vector类型（就是数组）呢？ 因为用vector方便我们做回溯！</strong></p><p>所以代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int result;
vector&lt;int&gt; path;
void traversal(TreeNode* cur) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确定终止条件</li></ul><p>递归什么时候终止呢？</p><p>当然是遇到叶子节点，此时要收集结果了，通知返回本层递归，因为单条路径的结果使用vector，我们需要一个函数vectorToInt把vector转成int。</p><p>终止条件代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (!cur-&gt;left &amp;&amp; !cur-&gt;right) { // 遇到了叶子节点
    result += vectorToInt(path);
    return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里vectorToInt函数就是把数组转成int，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int vectorToInt(const vector&lt;int&gt;&amp; vec) {
    int sum = 0;
    for (int i = 0; i &lt; vec.size(); i++) {
        sum = sum * 10 + vec[i];
    }
    return sum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确定递归单层逻辑</li></ul><p>本题其实采用前中后序都不无所谓， 因为也没有中间几点的处理逻辑。</p><p>这里主要是当左节点不为空，path收集路径，并递归左孩子，右节点同理。</p><p><strong>但别忘了回溯</strong>。</p><p>如图：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/129.求根到叶子节点数字之和.png" alt="img"></p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>                 // 中
if (cur-&gt;left) { // 左 （空节点不遍历）
    path.push_back(cur-&gt;left-&gt;val);
    traversal(cur-&gt;left);    // 递归
    path.pop_back();         // 回溯
}
if (cur-&gt;right) { // 右 （空节点不遍历）
    path.push_back(cur-&gt;right-&gt;val);
    traversal(cur-&gt;right);   // 递归
    path.pop_back();         // 回溯
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意回溯和递归要永远在一起，一个递归，对应一个回溯，是一对一的关系，有的同学写成如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (cur-&gt;left) { // 左 （空节点不遍历）
    path.push_back(cur-&gt;left-&gt;val);
    traversal(cur-&gt;left);    // 递归
}
if (cur-&gt;right) { // 右 （空节点不遍历）
    path.push_back(cur-&gt;right-&gt;val);
    traversal(cur-&gt;right);   // 递归
}
path.pop_back();         // 回溯
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>把回溯放在花括号外面了，世界上最遥远的距离，是你在花括号里，而我在花括号外！</strong> 这就不对了。</p><p>整体C++代码</p><p>关键逻辑分析完了，整体C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int result;
    vector&lt;int&gt; path;
    // 把vector转化为int
    int vectorToInt(const vector&lt;int&gt;&amp; vec) {
        int sum = 0;
        for (int i = 0; i &lt; vec.size(); i++) {
            sum = sum * 10 + vec[i];
        }
        return sum;
    }
    void traversal(TreeNode* cur) {
        if (!cur-&gt;left &amp;&amp; !cur-&gt;right) { // 遇到了叶子节点
            result += vectorToInt(path);
            return;
        }

        if (cur-&gt;left) { // 左 （空节点不遍历）
            path.push_back(cur-&gt;left-&gt;val);     // 处理节点
            traversal(cur-&gt;left);               // 递归
            path.pop_back();                    // 回溯，撤销
        }
        if (cur-&gt;right) { // 右 （空节点不遍历）
            path.push_back(cur-&gt;right-&gt;val);    // 处理节点
            traversal(cur-&gt;right);              // 递归
            path.pop_back();                    // 回溯，撤销
        }
        return ;
    }
public:
    int sumNumbers(TreeNode* root) {
        path.clear();
        if (root == nullptr) return 0;
        path.push_back(root-&gt;val);
        traversal(root);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>过于简洁的代码，很容易让初学者忽视了本题中回溯的精髓，甚至作者本身都没有想清楚自己用了回溯。</p><p><strong>我这里提供的代码把整个回溯过程充分体现出来，希望可以帮助大家看的明明白白！</strong></p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果节点为0，那么就返回0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 首先将根节点放到集合中</span>
        path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 开始递归</span>
        <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recur</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当是叶子节点的时候，开始处理</span>
            res <span class="token operator">+=</span> <span class="token function">listToInt</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 注意有回溯</span>
            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 注意有回溯</span>
            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">listToInt</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> num<span class="token operator">:</span>path<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// sum * 10 表示进位</span>
            sum <span class="token operator">=</span> sum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        res <span class="token operator">=</span> <span class="token number">0</span>
        path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">backtrace</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">nonlocal</span> res
            <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token comment"># 节点空则返回</span>
            path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">.</span>left <span class="token keyword">and</span> <span class="token keyword">not</span> root<span class="token punctuation">.</span>right<span class="token punctuation">:</span> <span class="token comment"># 遇到了叶子节点</span>
                res <span class="token operator">+=</span> get_sum<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>left<span class="token punctuation">:</span> <span class="token comment"># 左子树不空</span>
                backtrace<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span> root<span class="token punctuation">.</span>right<span class="token punctuation">:</span> <span class="token comment"># 右子树不空</span>
                backtrace<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">get_sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>
            s <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                s <span class="token operator">=</span> s <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">return</span> s

        backtrace<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> <span class="token operator">&amp;</span>sum<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> tmpSum <span class="token builtin">int</span><span class="token punctuation">,</span> sum <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token operator">*</span>sum <span class="token operator">+=</span> tmpSum
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> tmpSum<span class="token operator">*</span><span class="token number">10</span> <span class="token operator">+</span> root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> tmpSum<span class="token operator">*</span><span class="token number">10</span> <span class="token operator">+</span> root<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sumNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">listToInt</span> <span class="token operator">=</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> path<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// sum * 10 表示进位</span>
            sum <span class="token operator">=</span> sum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">recur</span> <span class="token operator">=</span> <span class="token parameter">root</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当是叶子节点的时候，开始处理</span>
            res <span class="token operator">+=</span> <span class="token function">listToInt</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 注意有回溯</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 注意有回溯</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果节点为0，那么就返回0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 首先将根节点放到集合中</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 开始递归</span>
    <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录最终结果</span>
    <span class="token keyword">let</span> resTotal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录路径中遇到的节点值</span>
    <span class="token keyword">const</span> route<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 递归初始值</span>
    route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">recur</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resTotal<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> route<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resTotal <span class="token operator">+=</span> <span class="token function">listToSum</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            route<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            route<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">listToSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数组求和</span>
        <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//sum记录总和</span>
<span class="token keyword">int</span> sum<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span> <span class="token operator">*</span>node<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//更新val为根节点到当前节点的和</span>
    val <span class="token operator">=</span> val <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> node<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
    <span class="token comment">//若当前节点为叶子节点，记录val</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token operator">-&gt;</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum<span class="token operator">+=</span>val<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//若有左/右节点，遍历左/右节点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span> 
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sumNumbers</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
    sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function T(C,P){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),d,n("p",null,[s("本题和"),n("a",k,[s("113.路径总和II"),t(a)]),s("是类似的思路，做完这道题，可以顺便把"),n("a",v,[s("113.路径总和II"),t(a)]),s(" 和 "),n("a",m,[s("112.路径总和"),t(a)]),s(" 做了。")]),n("p",null,[s("结合112.路径总和 和 113.路径总和II，我在讲了"),n("a",b,[s("二叉树：递归函数究竟什么时候需要返回值，什么时候不要返回值？"),t(a)]),s("，如果大家对二叉树递归函数什么时候需要返回值很迷茫，可以看一下。")]),n("p",null,[s("接下来在看本题，就简单多了，本题其实需要使用回溯，但一些同学可能都不知道自己用了回溯，在"),n("a",h,[s("二叉树：以为使用了递归，其实还隐藏着回溯"),t(a)]),s("中，我详细讲解了二叉树的递归中，如何使用了回溯。")]),f,g,y,w,n("p",null,[s("如果对递归三部曲不了解的话，可以看这里："),n("a",_,[s("二叉树：前中后递归详解"),t(a)])]),E,n("p",null,[s("这里我们要遍历整个二叉树，且需要要返回值做逻辑处理，所有返回值为void，在"),n("a",B,[s("二叉树：递归函数究竟什么时候需要返回值，什么时候不要返回值？"),t(a)]),s("中，详细讲解了返回值问题。")]),x])}const I=p(i,[["render",T],["__file","0129.qiugendaoyezijiedianshuzizhihe.html.vue"]]);export{I as default};
