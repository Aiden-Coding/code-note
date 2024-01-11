import{_ as e,r as o,o as c,c as i,a as n,b as s,d as p,e as t}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_5-最长回文子串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-最长回文子串","aria-hidden":"true"},"#"),s(" 5.最长回文子串")],-1),r={href:"https://leetcode.cn/problems/longest-palindromic-substring/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>给你一个字符串 s，找到 s 中最长的回文子串。</p><p>示例 1：</p><ul><li>输入：s = &quot;babad&quot;</li><li>输出：&quot;bab&quot;</li><li>解释：&quot;aba&quot; 同样是符合题意的答案。</li></ul><p>示例 2：</p><ul><li>输入：s = &quot;cbbd&quot;</li><li>输出：&quot;bb&quot;</li></ul><p>示例 3：</p><ul><li>输入：s = &quot;a&quot;</li><li>输出：&quot;a&quot;</li></ul><p>示例 4：</p><ul><li>输入：s = &quot;ac&quot;</li><li>输出：&quot;a&quot;</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>',10),d={href:"https://programmercarl.com/0647.%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="暴力解法" tabindex="-1"><a class="header-anchor" href="#暴力解法" aria-hidden="true">#</a> 暴力解法</h3><p>两层for循环，遍历区间起始位置和终止位置，然后判断这个区间是不是回文。</p><p>时间复杂度：O(n^3)</p><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h3><p>动规五部曲：</p><ol><li>确定dp数组（dp table）以及下标的含义</li></ol><p>布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false。</p><ol start="2"><li>确定递推公式</li></ol><p>在确定递推公式时，就要分析如下几种情况。</p><p>整体上是两种，就是s[i]与s[j]相等，s[i]与s[j]不相等这两种。</p><p>当s[i]与s[j]不相等，那没啥好说的了，dp[i][j]一定是false。</p><p>当s[i]与s[j]相等时，这就复杂一些了，有如下三种情况</p><ul><li>情况一：下标i 与 j相同，同一个字符例如a，当然是回文子串</li><li>情况二：下标i 与 j相差为1，例如aa，也是文子串</li><li>情况三：下标：i 与 j相差大于1的时候，例如cabac，此时s[i]与s[j]已经相同了，我们看i到j区间是不是回文子串就看aba是不是回文就可以了，那么aba的区间就是 i+1 与 j-1区间，这个区间是不是回文就看dp[i + 1][j - 1]是否为true。</li></ul><p>以上三种情况分析完了，那么递归公式如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (s[i] == s[j]) {
    if (j - i &lt;= 1) { // 情况一 和 情况二
        dp[i][j] = true;
    } else if (dp[i + 1][j - 1]) { // 情况三
        dp[i][j] = true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这里我没有列出当s[i]与s[j]不相等的时候，因为在下面dp[i][j]初始化的时候，就初始为false。</p><p>在得到[i,j]区间是否是回文子串的时候，直接保存最长回文子串的左边界和右边界，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (s[i] == s[j]) {
    if (j - i &lt;= 1) { // 情况一 和 情况二
        dp[i][j] = true;
    } else if (dp[i + 1][j - 1]) { // 情况三
        dp[i][j] = true;
    }
}
if (dp[i][j] &amp;&amp; j - i + 1 &gt; maxlenth) {
    maxlenth = j - i + 1;
    left = i;
    right = j;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>dp数组如何初始化</li></ol><p>dp[i][j]可以初始化为true么？ 当然不行，怎能刚开始就全都匹配上了。</p><p>所以dp[i][j]初始化为false。</p><ol start="4"><li>确定遍历顺序</li></ol><p>遍历顺序可有有点讲究了。</p><p>首先从递推公式中可以看出，情况三是根据dp[i + 1][j - 1]是否为true，在对dp[i][j]进行赋值true的。</p><p>dp[i + 1][j - 1] 在 dp[i][j]的左下角，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210121171032473.jpg" alt="647.回文子串"></p><p>如果这矩阵是从上到下，从左到右遍历，那么会用到没有计算过的dp[i + 1][j - 1]，也就是根据不确定是不是回文的区间[i+1,j-1]，来判断了[i,j]是不是回文，那结果一定是不对的。</p><p><strong>所以一定要从下到上，从左到右遍历，这样保证dp[i + 1][j - 1]都是经过计算的</strong>。</p><p>有的代码实现是优先遍历列，然后遍历行，其实也是一个道理，都是为了保证dp[i + 1][j - 1]都是经过计算的。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>for (int i = s.size() - 1; i &gt;= 0; i--) { // 注意遍历顺序
    for (int j = i; j &lt; s.size(); j++) {
        if (s[i] == s[j]) {
            if (j - i &lt;= 1) { // 情况一 和 情况二
                dp[i][j] = true;
            } else if (dp[i + 1][j - 1]) { // 情况三
                dp[i][j] = true;
            }
        }
        if (dp[i][j] &amp;&amp; j - i + 1 &gt; maxlenth) {
            maxlenth = j - i + 1;
            left = i;
            right = j;
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>举例推导dp数组</li></ol><p>举例，输入：&quot;aaa&quot;，dp[i][j]状态如下：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210121171059951.jpg" alt="647.回文子串1"></p><p><strong>注意因为dp[i][j]的定义，所以j一定是大于等于i的，那么在填充dp[i][j]的时候一定是只填充右上半部分</strong>。</p><p>以上分析完毕，C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    string longestPalindrome(string s) {
        vector&lt;vector&lt;int&gt;&gt; dp(s.size(), vector&lt;int&gt;(s.size(), 0));
        int maxlenth = 0;
        int left = 0;
        int right = 0;
        for (int i = s.size() - 1; i &gt;= 0; i--) {
            for (int j = i; j &lt; s.size(); j++) {
                if (s[i] == s[j]) {
                    if (j - i &lt;= 1) { // 情况一 和 情况二
                        dp[i][j] = true;
                    } else if (dp[i + 1][j - 1]) { // 情况三
                        dp[i][j] = true;
                    }
                }
                if (dp[i][j] &amp;&amp; j - i + 1 &gt; maxlenth) {
                    maxlenth = j - i + 1;
                    left = i;
                    right = j;
                }
            }

        }
        return s.substr(left, right - left + 1);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码是为了凸显情况一二三，当然是可以简洁一下的，如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    string longestPalindrome(string s) {
        vector&lt;vector&lt;int&gt;&gt; dp(s.size(), vector&lt;int&gt;(s.size(), 0));
        int maxlenth = 0;
        int left = 0;
        int right = 0;
        for (int i = s.size() - 1; i &gt;= 0; i--) {
            for (int j = i; j &lt; s.size(); j++) {
                if (s[i] == s[j] &amp;&amp; (j - i &lt;= 1 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                }
                if (dp[i][j] &amp;&amp; j - i + 1 &gt; maxlenth) {
                    maxlenth = j - i + 1;
                    left = i;
                    right = j;
                }
            }
        }
        return s.substr(left, maxlenth);
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n^2)</li><li>空间复杂度：O(n^2)</li></ul><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><p>动态规划的空间复杂度是偏高的，我们再看一下双指针法。</p><p>首先确定回文串，就是找中心然后想两边扩散看是不是对称的就可以了。</p><p><strong>在遍历中心点的时候，要注意中心点有两种情况</strong>。</p><p>一个元素可以作为中心点，两个元素也可以作为中心点。</p><p>那么有的同学问了，三个元素还可以做中心点呢。其实三个元素就可以由一个元素左右添加元素得到，四个元素则可以由两个元素左右添加元素得到。</p><p>所以我们在计算的时候，要注意一个元素为中心点和两个元素为中心点的情况。</p><p><strong>这两种情况可以放在一起计算，但分别计算思路更清晰，我倾向于分别计算</strong>，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int left = 0;
    int right = 0;
    int maxLength = 0;
    string longestPalindrome(string s) {
        int result = 0;
        for (int i = 0; i &lt; s.size(); i++) {
            extend(s, i, i, s.size()); // 以i为中心
            extend(s, i, i + 1, s.size()); // 以i和i+1为中心
        }
        return s.substr(left, maxLength);
    }
    void extend(const string&amp; s, int i, int j, int n) {
        while (i &gt;= 0 &amp;&amp; j &lt; n &amp;&amp; s[i] == s[j]) {
            if (j - i + 1 &gt; maxLength) {
                left = i;
                right = j;
                maxLength = j - i + 1;
            }
            i--;
            j++;
        }
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n^2)</li><li>空间复杂度：O(1)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 双指针 动态规划</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> palindrome <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            palindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token class-name">L</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token class-name">L</span> <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">L</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token class-name">L</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    palindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        palindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        palindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> palindrome<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>palindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    length <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    index <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> index <span class="token operator">+</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 双指针 中心扩散法</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 分两种情况：即一个元素作为中心点，两个元素作为中心点</span>
            s1 <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 情况1</span>
            res <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> res<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> s1 <span class="token operator">:</span> res<span class="token punctuation">;</span>
            s2 <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 情况2</span>
            res <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> res<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> s2 <span class="token operator">:</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>  <span class="token comment">// 返回最长的</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> tmp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> end <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Java中substring是左闭右开的，所以要+1</span>
            <span class="token comment">// 向两边扩散</span>
            start<span class="token operator">--</span><span class="token punctuation">;</span>
            end<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        maxlenth <span class="token operator">=</span> <span class="token number">0</span>
        left <span class="token operator">=</span> <span class="token number">0</span>
        right <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token keyword">if</span> j <span class="token operator">-</span> i <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token keyword">or</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token keyword">and</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxlenth<span class="token punctuation">:</span>
                    maxlenth <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span>
                    left <span class="token operator">=</span> i
                    right <span class="token operator">=</span> j
        <span class="token keyword">return</span> s<span class="token punctuation">[</span>left<span class="token punctuation">:</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双指针：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>

        <span class="token keyword">def</span> <span class="token function">find_point</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> j <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">and</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                i <span class="token operator">-=</span> <span class="token number">1</span>
                j <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j

        <span class="token keyword">def</span> <span class="token function">compare</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> right <span class="token operator">-</span> left <span class="token operator">&gt;</span> end <span class="token operator">-</span> start<span class="token punctuation">:</span>
                <span class="token keyword">return</span> left<span class="token punctuation">,</span> right
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> start<span class="token punctuation">,</span> end

        start <span class="token operator">=</span> <span class="token number">0</span>
        end <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            left<span class="token punctuation">,</span> right <span class="token operator">=</span> find_point<span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
            start<span class="token punctuation">,</span> end <span class="token operator">=</span> compare<span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>

            left<span class="token punctuation">,</span> right <span class="token operator">=</span> find_point<span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
            start<span class="token punctuation">,</span> end <span class="token operator">=</span> compare<span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
        <span class="token keyword">return</span> s<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    maxLen <span class="token operator">:=</span> <span class="token number">0</span>
    left <span class="token operator">:=</span> <span class="token number">0</span>
    length <span class="token operator">:=</span> <span class="token number">0</span>
    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> j<span class="token operator">-</span>i <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">{</span> <span class="token comment">// 情况一和情况二</span>
                    length <span class="token operator">=</span> j<span class="token operator">-</span>i
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token comment">// 情况三</span>
                    length <span class="token operator">=</span> j<span class="token operator">-</span>i
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> length <span class="token operator">&gt;</span> maxLen <span class="token punctuation">{</span>
            maxLen <span class="token operator">=</span> length
            left <span class="token operator">=</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">[</span>left<span class="token punctuation">:</span> left<span class="token operator">+</span>maxLen<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//动态规划解法</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// left起始位置  maxlenth回文串长度</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maxlenth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 情况一：下标i 与 j相同，同一个字符例如a，当然是回文子串 j - i == 0</span>
            <span class="token comment">// 情况二：下标i 与 j相差为1，例如aa，也是文子串 j - i == 1</span>
            <span class="token comment">// 情况一和情况二 可以合并为 j - i &lt;= 1</span>
            <span class="token comment">// 情况三：下标：i 与 j相差大于1的时候，例如cabac，此时s[i]与s[j]已经相同了，我们看i到j区间是不是回文子串就看aba是不是回文就可以了，那么aba的区间就是 i+1 与 j-1区间，这个区间是不是回文就看dp[i + 1][j - 1]===true</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxlenth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                maxlenth <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 回文串长度</span>
                left <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 起始位置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> maxlenth<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 找到子串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//双指针</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">// s为字符串 i,j为双指针 n为字符串长度</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">{</span>
                left <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新开始位置</span>
                right <span class="token operator">=</span> j<span class="token punctuation">;</span> <span class="token comment">// 更新结尾位置</span>
                maxLength <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 更新子串最大长度</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 指针移动</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">,</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 以i为中心</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 以i和i+1为中心</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//Manacher算法</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//Manacher算法,利用回文对称的性质，根据i在上一个回文中心的臂长里的位置去判断i的回文性</span>
    <span class="token comment">//需要知道上一个回文中心，以及其臂长</span>
    <span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//注意这里使用了maxRight的而不是真实的臂长length,因为之后需要判断i在臂长的什么位置</span>
    <span class="token comment">//如果这里臂长用了length,之后还要 计算i - center 去和 length比较，太繁琐</span>
    <span class="token keyword">let</span> maxRight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//考虑到回文串的长度是偶数的情况,所以这里预处理一下字符串,每个字符间插入特殊字符,把可能性都化为奇数</span>
    <span class="token comment">//这个处理把回文串长度的可能性都化为了奇数</span>
    <span class="token comment">//#c#b#b#a#</span>
    <span class="token comment">//#c#b#a#b#d#</span>
    <span class="token keyword">let</span> ss <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ss <span class="token operator">+=</span> <span class="token string">&quot;#&quot;</span><span class="token operator">+</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    ss <span class="token operator">+=</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//需要维护一个每个位置臂长的信息数组positionLength</span>
    <span class="token keyword">const</span> pl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>ss<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//这里需要注意参考的是i关于center对称的点i&#39;的回文性</span>
    <span class="token comment">//i&#39; = 2*center - i;</span>
    <span class="token comment">//所以列下情况:</span>
    <span class="token comment">//1.i&gt;maxRight,找不到i&#39;,无法参考，自己算自己的</span>
    <span class="token comment">//2.i&lt;=maxRight:</span>
    <span class="token comment">//2.1 i&lt;maxRight-pl[i&#39;],pl[i&#39;]的臂长没有超过center的臂长,根据对称性,pl[i] = pl[i&#39;]</span>
    <span class="token comment">//2.2 i=maxRight-pl[i&#39;],pl[i&#39;]的臂长刚好等于center的臂长,根据对称性,pl[i] &gt;= pl[i‘],大多少需要尝试扩散</span>
    <span class="token comment">//2.3 i&gt;maxRight-pl[i&#39;],pl[i&#39;]的臂长超过了center的臂长,根据对称性,i中心扩散到MaxRight处,</span>
    <span class="token comment">// s[2*i-maxRight] !== s[MaxRight]必不相等，所以pl[i] = maxRight-i;</span>
    <span class="token comment">//总结就是pl[i] = Math.min(maxRight-i,pl[i&#39;]);提示i&lt;maxRight-pl[i&#39;] 也可写成 pl[i&#39;]&lt;maxRight-i</span>
    <span class="token comment">//0没有意义,从1开始计算</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ss<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> maxRight<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//可以参考之前的</span>
            pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>maxRight <span class="token operator">-</span> i<span class="token punctuation">,</span> pl<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> center <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//尝试中心扩散</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//注意到i&lt;maxRight时都要尝试中心扩散,所以写else完全无意义,把中心扩散的代码写在下面</span>
        <span class="token comment">// else{//i不在之前回文中心的臂长范围里,之前的信息就完全无法参考,只能从i中心扩散把，然后去维护maxRight和center的定义</span>
        <span class="token comment">//尝试中心扩散</span>
        <span class="token comment">//这里不要动center和maxRight</span>
        <span class="token comment">// center = i;</span>
        <span class="token comment">// maxRight = pl[i] + i + 1;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">-</span> pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right<span class="token operator">&lt;</span>ss<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> ss<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> ss<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
            left<span class="token operator">--</span><span class="token punctuation">;</span>
            pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// }</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">&gt;</span> maxRight<span class="token punctuation">)</span><span class="token punctuation">{</span>
            center <span class="token operator">=</span> i<span class="token punctuation">;</span>
            maxRight <span class="token operator">=</span> pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">{</span>
            maxLength <span class="token operator">=</span> pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            index <span class="token operator">=</span> i <span class="token operator">-</span> pl<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ss<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">#</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><p>动态规划：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//初始化dp数组，全部初始为false</span>
bool <span class="token operator">*</span><span class="token operator">*</span><span class="token function">initDP</span><span class="token punctuation">(</span><span class="token keyword">int</span> strLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bool <span class="token operator">*</span><span class="token operator">*</span>dp <span class="token operator">=</span> <span class="token punctuation">(</span>bool <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>bool <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> strLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strLen<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>bool <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span> <span class="token operator">*</span> strLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> strLen<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//求出字符串长度</span>
    <span class="token keyword">int</span> strLen <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//初始化dp数组，元素初始化为false</span>
    bool <span class="token operator">*</span><span class="token operator">*</span>dp <span class="token operator">=</span> <span class="token function">initDP</span><span class="token punctuation">(</span>strLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//从下到上，从左到右遍历</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> strLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> strLen<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//若当前i与j所指字符一样</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//若i、j指向相邻字符或同一字符，则为回文字符串</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>
                <span class="token comment">//若i+1与j-1所指字符串为回文字符串，则i、j所指字符串为回文字符串</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//若新的字符串的长度大于之前的最大长度，进行更新</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                maxLength <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                left <span class="token operator">=</span> i<span class="token punctuation">;</span>
                right <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//复制回文字符串，并返回</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>ret <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>maxLength <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memcpy</span><span class="token punctuation">(</span>ret<span class="token punctuation">,</span> s <span class="token operator">+</span> left<span class="token punctuation">,</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ret<span class="token punctuation">[</span>maxLength<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双指针：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> left<span class="token punctuation">,</span> maxLength<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>str<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//若当前子字符串长度大于最长的字符串长度，进行更新</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            maxLength <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            left <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//左指针左移，右指针右移。扩大搜索范围</span>
        <span class="token operator">++</span>j<span class="token punctuation">,</span> <span class="token operator">--</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    left <span class="token operator">=</span> right <span class="token operator">=</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//长度为单数的子字符串</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//长度为双数的子字符串</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//复制子字符串</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>subStr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>maxLength <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memcpy</span><span class="token punctuation">(</span>subStr<span class="token punctuation">,</span> s <span class="token operator">+</span> left<span class="token punctuation">,</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    subStr<span class="token punctuation">[</span>maxLength<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> subStr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><p>動態規則：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Solution {
    
    public string LongestPalindrome(string s) {
        bool[,] dp = new bool[s.Length, s.Length];
        int maxlenth = 0;
        int left = 0;
        int right = 0;
        for(int i = s.Length-1 ; i&gt;=0; i--){
            for(int j = i; j &lt;s.Length;j++){
                if(s[i] == s[j]){
                    if(j - i &lt;= 1){ // 情况一和情况二
                        dp[i, j] = true;
                    }else if( dp[i+1, j-1] ){ // 情况三
                        dp[i, j] = true;
                    }
                }
                if(dp[i, j] &amp;&amp; j-i+1 &gt; maxlenth){
                    maxlenth = j-i+1;
                    left = i;
                    right = j;
                }
            }
        }
        return s.Substring(left, maxlenth);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>雙指針：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public class Solution {
    int maxlenth = 0;
    int left = 0;
    int right = 0;
    
    public string LongestPalindrome(string s) {
         int result = 0;
        for (int i = 0; i &lt; s.Length; i++) {
            extend(s, i, i, s.Length); // 以i為中心
            extend(s, i, i + 1, s.Length); // 以i和i+1為中心
        }
        return s.Substring(left, maxlenth);
    }
    
    private void extend(string s, int i, int j, int n) {
        while (i &gt;= 0 &amp;&amp; j &lt; n &amp;&amp; s[i] == s[j]) {
            if (j - i + 1 &gt; maxlenth) {
                left = i;
                right = j;
                maxlenth = j - i + 1;
            }
            i--;
            j++;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72);function m(b,g){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),p(a)])]),k,n("p",null,[s("本题和"),n("a",d,[s("647.回文子串"),p(a)]),s(" 差不多是一样的，但647.回文子串更基本一点，建议可以先做647.回文子串")]),v])}const f=e(l,[["render",m],["__file","0005.zuichanghuiwenzichuan.html.vue"]]);export{f as default};
