import{_ as e,r as o,o as c,c as i,a as s,b as n,d as t,e as p}from"./app-3RcBQnkC.js";const l={},u=s("blockquote",null,[s("p",null,"综合考察字符串操作的好题。")],-1),r=s("h1",{id:"_151-翻转字符串里的单词",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_151-翻转字符串里的单词","aria-hidden":"true"},"#"),n(" 151.翻转字符串里的单词")],-1),k={href:"https://leetcode.cn/problems/reverse-words-in-a-string/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>给定一个字符串，逐个翻转字符串中的每个单词。</p><p>示例 1：<br> 输入: &quot;the sky is blue&quot;<br> 输出: &quot;blue is sky the&quot;</p><p>示例 2：<br> 输入: &quot;  hello world!  &quot;<br> 输出: &quot;world! hello&quot;<br> 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。</p><p>示例 3：<br> 输入: &quot;a good   example&quot;<br> 输出: &quot;example good a&quot;<br> 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。</p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',5),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1uT41177fX",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p><strong>这道题目可以说是综合考察了字符串的多种操作。</strong></p><p>一些同学会使用split库函数，分隔单词，然后定义一个新的string字符串，最后再把单词倒序相加，那么这道题题目就是一道水题了，失去了它的意义。</p><p>所以这里我还是提高一下本题的难度：<strong>不要使用辅助空间，空间复杂度要求为O(1)。</strong></p><p>不能使用辅助空间之后，那么只能在原字符串上下功夫了。</p><p>想一下，我们将整个字符串都反转过来，那么单词的顺序指定是倒序了，只不过单词本身也倒序了，那么再把单词反转一下，单词不就正过来了。</p><p>所以解题思路如下：</p><ul><li>移除多余空格</li><li>将整个字符串反转</li><li>将每个单词反转</li></ul><p>举个例子，源字符串为：&quot;the sky is blue &quot;</p><ul><li>移除多余空格 : &quot;the sky is blue&quot;</li><li>字符串反转：&quot;eulb si yks eht&quot;</li><li>单词反转：&quot;blue is sky the&quot;</li></ul><p>这样我们就完成了翻转字符串里的单词。</p><p>思路很明确了，我们说一说代码的实现细节，就拿移除多余空格来说，一些同学会上来写如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void removeExtraSpaces(string&amp; s) {
    for (int i = s.size() - 1; i &gt; 0; i--) {
        if (s[i] == s[i - 1] &amp;&amp; s[i] == &#39; &#39;) {
            s.erase(s.begin() + i);
        }
    }
    // 删除字符串最后面的空格
    if (s.size() &gt; 0 &amp;&amp; s[s.size() - 1] == &#39; &#39;) {
        s.erase(s.begin() + s.size() - 1);
    }
    // 删除字符串最前面的空格
    if (s.size() &gt; 0 &amp;&amp; s[0] == &#39; &#39;) {
        s.erase(s.begin());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑很简单，从前向后遍历，遇到空格了就erase。</p><p>如果不仔细琢磨一下erase的时间复杂度，还以为以上的代码是O(n)的时间复杂度呢。</p><p>想一下真正的时间复杂度是多少，一个erase本来就是O(n)的操作。</p><p>erase操作上面还套了一个for循环，那么以上代码移除冗余空格的代码时间复杂度为O(n^2)。</p><p>那么使用双指针法来去移除空格，最后resize（重新设置）一下字符串的大小，就可以做到O(n)的时间复杂度。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>//版本一 
void removeExtraSpaces(string&amp; s) {
    int slowIndex = 0, fastIndex = 0; // 定义快指针，慢指针
    // 去掉字符串前面的空格
    while (s.size() &gt; 0 &amp;&amp; fastIndex &lt; s.size() &amp;&amp; s[fastIndex] == &#39; &#39;) {
        fastIndex++;
    }
    for (; fastIndex &lt; s.size(); fastIndex++) {
        // 去掉字符串中间部分的冗余空格
        if (fastIndex - 1 &gt; 0
                &amp;&amp; s[fastIndex - 1] == s[fastIndex]
                &amp;&amp; s[fastIndex] == &#39; &#39;) {
            continue;
        } else {
            s[slowIndex++] = s[fastIndex];
        }
    }
    if (slowIndex - 1 &gt; 0 &amp;&amp; s[slowIndex - 1] == &#39; &#39;) { // 去掉字符串末尾的空格
        s.resize(slowIndex - 1);
    } else {
        s.resize(slowIndex); // 重新设置字符串大小
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有的同学可能发现用erase来移除空格，在leetcode上性能也还行。主要是以下几点；：</p><ol><li>leetcode上的测试集里，字符串的长度不够长，如果足够长，性能差距会非常明显。</li><li>leetcode的测程序耗时不是很准确的。</li></ol><p>版本一的代码是一般的思考过程，就是 先移除字符串前的空格，再移除中间的，再移除后面部分。</p>`,22),h={href:"https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},w=p(`<p>所以代码可以写的很精简，大家可以看 如下 代码 removeExtraSpaces 函数的实现：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二 
void removeExtraSpaces(string&amp; s) {//去除所有空格并在相邻单词之间添加空格, 快慢指针。
    int slow = 0;   //整体思想参考https://programmercarl.com/0027.移除元素.html
    for (int i = 0; i &lt; s.size(); ++i) { //
        if (s[i] != &#39; &#39;) { //遇到非空格就处理，即删除所有空格。
            if (slow != 0) s[slow++] = &#39; &#39;; //手动控制空格，给单词之间添加空格。slow != 0说明不是第一个单词，需要在单词前添加空格。
            while (i &lt; s.size() &amp;&amp; s[i] != &#39; &#39;) { //补上该单词，遇到空格说明单词结束。
                s[slow++] = s[i++];
            }
        }
    }
    s.resize(slow); //slow的大小即为去除多余空格后的大小。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={href:"https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/BV12A4y1Z7LP",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,"此时我们已经实现了removeExtraSpaces函数来移除冗余空格。",-1),x={href:"https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 反转字符串s中左闭右闭的区间[start, end]
void reverse(string&amp; s, int start, int end) {
    for (int i = start, j = end; i &lt; j; i++, j--) {
        swap(s[i], s[j]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void reverse(string&amp; s, int start, int end){ //翻转，区间写法：左闭右闭 []
        for (int i = start, j = end; i &lt; j; i++, j--) {
            swap(s[i], s[j]);
        }
    }

    void removeExtraSpaces(string&amp; s) {//去除所有空格并在相邻单词之间添加空格, 快慢指针。
        int slow = 0;   //整体思想参考https://programmercarl.com/0027.移除元素.html
        for (int i = 0; i &lt; s.size(); ++i) { //
            if (s[i] != &#39; &#39;) { //遇到非空格就处理，即删除所有空格。
                if (slow != 0) s[slow++] = &#39; &#39;; //手动控制空格，给单词之间添加空格。slow != 0说明不是第一个单词，需要在单词前添加空格。
                while (i &lt; s.size() &amp;&amp; s[i] != &#39; &#39;) { //补上该单词，遇到空格说明单词结束。
                    s[slow++] = s[i++];
                }
            }
        }
        s.resize(slow); //slow的大小即为去除多余空格后的大小。
    }

    string reverseWords(string s) {
        removeExtraSpaces(s); //去除多余空格，保证单词之间之只有一个空格，且字符串首尾没空格。
        reverse(s, 0, s.size() - 1);
        int start = 0; //removeExtraSpaces后保证第一个单词的开始下标一定是0。
        for (int i = 0; i &lt;= s.size(); ++i) {
            if (i == s.size() || s[i] == &#39; &#39;) { //到达空格或者串尾，说明一个单词结束。进行翻转。
                reverse(s, start, i - 1); //翻转，注意是左闭右闭 []的翻转。
                start = i + 1; //更新下一个单词的开始下标start
            }
        }
        return s;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1) 或 O(n)，取决于语言中字符串是否可变</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
   /**
     * 不使用Java内置方法实现
     * &lt;p&gt;
     * 1.去除首尾以及中间多余空格
     * 2.反转整个字符串
     * 3.反转各个单词
     */
    public String reverseWords(String s) {
        // System.out.println(&quot;ReverseWords.reverseWords2() called with: s = [&quot; + s + &quot;]&quot;);
        // 1.去除首尾以及中间多余空格
        StringBuilder sb = removeSpace(s);
        // 2.反转整个字符串
        reverseString(sb, 0, sb.length() - 1);
        // 3.反转各个单词
        reverseEachWord(sb);
        return sb.toString();
    }

    private StringBuilder removeSpace(String s) {
        // System.out.println(&quot;ReverseWords.removeSpace() called with: s = [&quot; + s + &quot;]&quot;);
        int start = 0;
        int end = s.length() - 1;
        while (s.charAt(start) == &#39; &#39;) start++;
        while (s.charAt(end) == &#39; &#39;) end--;
        StringBuilder sb = new StringBuilder();
        while (start &lt;= end) {
            char c = s.charAt(start);
            if (c != &#39; &#39; || sb.charAt(sb.length() - 1) != &#39; &#39;) {
                sb.append(c);
            }
            start++;
        }
        // System.out.println(&quot;ReverseWords.removeSpace returned: sb = [&quot; + sb + &quot;]&quot;);
        return sb;
    }

    /**
     * 反转字符串指定区间[start, end]的字符
     */
    public void reverseString(StringBuilder sb, int start, int end) {
        // System.out.println(&quot;ReverseWords.reverseString() called with: sb = [&quot; + sb + &quot;], start = [&quot; + start + &quot;], end = [&quot; + end + &quot;]&quot;);
        while (start &lt; end) {
            char temp = sb.charAt(start);
            sb.setCharAt(start, sb.charAt(end));
            sb.setCharAt(end, temp);
            start++;
            end--;
        }
        // System.out.println(&quot;ReverseWords.reverseString returned: sb = [&quot; + sb + &quot;]&quot;);
    }

    private void reverseEachWord(StringBuilder sb) {
        int start = 0;
        int end = 1;
        int n = sb.length();
        while (start &lt; n) {
            while (end &lt; n &amp;&amp; sb.charAt(end) != &#39; &#39;) {
                end++;
            }
            reverseString(sb, start, end - 1);
            start = end + 1;
            end = start + 1;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//解法二：创建新字符数组填充。时间复杂度O(n)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//源字符数组</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> initialArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//新字符数组</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>initialArr<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//下面循环添加&quot;单词 &quot;，最终末尾的空格不会返回</span>
        <span class="token keyword">int</span> newArrPos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//i来进行整体对源字符数组从后往前遍历</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> initialArr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> initialArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>i<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">}</span>  <span class="token comment">//跳过空格</span>
            <span class="token comment">//此时i位置是边界或!=空格，先记录当前索引，之后的while用来确定单词的首字母的位置</span>
            <span class="token keyword">int</span> right <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> initialArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>i<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">}</span> 
            <span class="token comment">//指定区间单词取出(由于i为首字母的前一位，所以这里+1,)，取出的每组末尾都带有一个空格</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newArr<span class="token punctuation">[</span>newArrPos<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> initialArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    newArr<span class="token punctuation">[</span>newArrPos<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span><span class="token comment">//空格</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//若是原始字符串没有单词，直接返回空字符串；若是有单词，返回0-末尾空格索引前范围的字符数组(转成String返回)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newArrPos <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>newArr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>newArrPos<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//解法三：双反转+移位，String 的 toCharArray() 方法底层会 new 一个和原字符串相同大小的 char 数组，空间复杂度：O(n)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 思路：
     *	①反转字符串  &quot;the sky is blue &quot; =&gt; &quot; eulb si yks eht&quot;
     *	②遍历 &quot; eulb si yks eht&quot;，每次先对某个单词进行反转再移位
     *	   这里以第一个单词进行为演示：&quot; eulb si yks eht&quot; ==反转=&gt; &quot; blue si yks eht&quot; ==移位=&gt; &quot;blue si yks eht&quot;
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//步骤1：字符串整体反转（此时其中的单词也都反转了）</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> initialArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>initialArr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> initialArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>initialArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> tempCur <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> initialArr<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> initialArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> tempCur<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> tempCur<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//步骤二：二次反转</span>
                    <span class="token function">reverse</span><span class="token punctuation">(</span>initialArr<span class="token punctuation">,</span> tempCur<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//对指定范围字符串进行反转，不反转从后往前遍历一个个填充有问题</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//步骤三：移动操作</span>
                initialArr<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> initialArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//遍历结束</span>
                    <span class="token comment">//避免越界情况，例如=&gt; &quot;asdasd df f&quot;，不加判断最后就会数组越界</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> initialArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        initialArr<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//参数三：以防出现如&quot;asdasd df f&quot;=&gt;&quot;f df asdasd&quot;正好凑满不需要省略空格情况</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>initialArr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> initialArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>initialArr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> k <span class="token operator">:</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">,</span> <span class="token keyword">int</span> begin<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> begin<span class="token punctuation">,</span> j <span class="token operator">=</span> end<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 解法四：时间复杂度 O(n)
 * 参考卡哥 c++ 代码的三步骤：先移除多余空格，再将整个字符串反转，最后把单词逐个反转
 * 有别于解法一 ：没有用 StringBuilder  实现，而是对 String 的 char[] 数组操作来实现以上三个步骤
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">//用 char[] 来实现 String 的 removeExtraSpaces，reverse 操作</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1.去除首尾以及中间多余空格</span>
        chars <span class="token operator">=</span> <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.整个字符串反转</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> chars<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.单词反转</span>
        <span class="token function">reverseEachWord</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//1.用 快慢指针 去除首尾以及中间多余空格，可参考数组元素移除的题解</span>
    <span class="token keyword">public</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fast <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//先用 fast 移除所有空格</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//在用 slow 加空格。 除第一个单词外，单词末尾要加空格</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    chars<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
                <span class="token comment">//fast 遇到空格或遍历到字符串末尾，就证明遍历完一个单词了</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> chars<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span>
                    chars<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span>fast<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//相当于 c++ 里的 resize()</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newChars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newChars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> slow<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">return</span> newChars<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//双指针实现指定范围内字符串反转，可参考字符串反转题解</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;set a wrong right&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            chars<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">^=</span> chars<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//3.单词反转</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseEachWord</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//end &lt;= s.length() 这里的 = ，是为了让 end 永远指向单词末尾后一个位置，这样 reverse 的实参更好设置</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> end <span class="token operator">&lt;=</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// end 每次到单词末尾后的空格或串尾,开始反转单词</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">==</span> chars<span class="token punctuation">.</span>length <span class="token operator">||</span> chars<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">reverse</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h3><p>（版本一）先删除空白，然后整个反转，最后单词反转。 <strong>因为字符串是不可变类型，所以反转单词的时候，需要将其转换成列表，然后通过join函数再将其转换成列表，所以空间复杂度不是O(1)</strong></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Solution:
    def reverseWords(self, s: str) -&gt; str:
        # 删除前后空白
        s = s.strip()
        # 反转整个字符串
        s = s[::-1]
        # 将字符串拆分为单词，并反转每个单词
        s = &#39; &#39;.join(word[::-1] for word in s.split())
        return s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（版本二）使用双指针</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token comment"># 将字符串拆分为单词，即转换成列表类型</span>
        words <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 反转单词</span>
        left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">:</span>
            words<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> words<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> words<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> words<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
            left <span class="token operator">+=</span> <span class="token number">1</span>
            right <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token comment"># 将列表转换成字符串</span>
        <span class="token keyword">return</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>words<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><p>版本一：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token comment">// 移除前面、中间、后面存在的多余空格</span>
    slow <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> slow <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                b<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39; &#39;</span>
                slow<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span> <span class="token comment">// 复制逻辑</span>
                b<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                slow<span class="token operator">++</span>
                i<span class="token operator">++</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>slow<span class="token punctuation">]</span>
    
    <span class="token comment">// 翻转整个字符串</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token comment">// 翻转每个单词</span>
    last <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">||</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>last<span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            last <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">:=</span> <span class="token number">0</span>
    right <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
        b<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
        left<span class="token operator">++</span>
        right<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本二：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">//1.使用双指针删除冗余的空格</span>
	slowIndex<span class="token punctuation">,</span> fastIndex <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token comment">//删除头部冗余空格</span>
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> fastIndex <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
		fastIndex<span class="token operator">++</span>
	<span class="token punctuation">}</span>
    <span class="token comment">//删除单词间冗余空格</span>
	<span class="token keyword">for</span> <span class="token punctuation">;</span> fastIndex <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> fastIndex<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> fastIndex<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>fastIndex<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		b<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span>
		slowIndex<span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//删除尾部冗余空格</span>
	<span class="token keyword">if</span> slowIndex<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>slowIndex<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
		b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token punctuation">:</span>slowIndex<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token punctuation">:</span>slowIndex<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//2.反转整个字符串</span>
	<span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	<span class="token comment">//3.反转单个单词  i单词开始位置，j单词结束位置</span>
	i <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		j <span class="token operator">:=</span> i
		<span class="token keyword">for</span> <span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
		<span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">:</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
		i <span class="token operator">=</span> j
		i<span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">:=</span> <span class="token number">0</span>
    right <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
        b<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
        left<span class="token operator">++</span>
        right<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 字符串转数组</span>
   <span class="token keyword">const</span> strArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 移除多余空格</span>
   <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span>strArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 翻转</span>
   <span class="token function">reverse</span><span class="token punctuation">(</span>strArr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> strArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> strArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>strArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">||</span> i <span class="token operator">===</span> strArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 翻转单词</span>
       <span class="token function">reverse</span><span class="token punctuation">(</span>strArr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       start <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> strArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 删除多余空格</span>
<span class="token keyword">function</span> <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span><span class="token parameter">strArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span><span class="token punctuation">(</span>fastIndex <span class="token operator">&lt;</span> strArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 移除开始位置和重复的空格</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>strArr<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> strArr<span class="token punctuation">[</span>fastIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fastIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      strArr<span class="token punctuation">[</span>slowIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> strArr<span class="token punctuation">[</span>fastIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 移除末尾空格</span>
  strArr<span class="token punctuation">.</span>length <span class="token operator">=</span> strArr<span class="token punctuation">[</span>slowIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">?</span> slowIndex <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> slowIndex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 翻转从 start 到 end 的字符</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">strArr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> start<span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> end<span class="token punctuation">;</span>

  <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 交换</span>
    <span class="token punctuation">[</span>strArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> strArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>strArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> strArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Utils **/</span>
    <span class="token comment">// 删除多余空格, 如&#39;   hello     world   &#39; =&gt; &#39;hello world&#39;</span>
    <span class="token keyword">function</span> <span class="token function">delExtraSpace</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> length <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                right<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            arr<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span>length <span class="token operator">=</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span>length <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 翻转字符串，如：&#39;hello&#39; =&gt; &#39;olleh&#39;</span>
    <span class="token keyword">function</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>strArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> end<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> strArr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
            strArr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> strArr<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            strArr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** Main code **/</span>
    <span class="token keyword">let</span> strArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">delExtraSpace</span><span class="token punctuation">(</span>strArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> strArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 翻转整个字符串</span>
    <span class="token function">reverseWords</span><span class="token punctuation">(</span>strArr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> start<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        end<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        end <span class="token operator">=</span> start<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>strArr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> end <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 翻转单个单词</span>
        <span class="token function">reverseWords</span><span class="token punctuation">(</span>strArr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> strArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">reverseWords</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> stringArr <span class="token operator">=</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stringArr<span class="token punctuation">,</span> startIndex<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> endIndex<span class="token punctuation">:</span> stringArr<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverseWord</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stringArr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span>stringArr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/// 1、移除多余的空格（前后所有的空格，中间只留一个空格）</span>
<span class="token keyword">func</span> <span class="token function-definition function">removeSpace</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ch <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token keyword">var</span> <span class="token keyword">left</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> <span class="token keyword">right</span> <span class="token operator">=</span> ch<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 忽略字符串前面的所有空格</span>
    <span class="token keyword">while</span> ch<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略字符串后面的所有空格</span>
    <span class="token keyword">while</span> ch<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">right</span> <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 接下来就是要处理中间的多余空格</span>
    <span class="token keyword">var</span> lastArr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">Character</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token keyword">left</span> <span class="token operator">&lt;=</span> <span class="token keyword">right</span> <span class="token punctuation">{</span>
        <span class="token comment">// 准备加到新字符串当中的字符</span>
        <span class="token keyword">let</span> char <span class="token operator">=</span> ch<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span>
        <span class="token comment">// 新的字符串的最后一个字符；或者原字符串中，准备加到新字符串的那个字符；这两个字符当中，只要有一个不是空格，就可以加到新的字符串当中</span>
        <span class="token keyword">if</span> char <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token operator">||</span> lastArr<span class="token punctuation">[</span>lastArr<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span>  <span class="token punctuation">{</span>
            lastArr<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      
        <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> lastArr
<span class="token punctuation">}</span>

<span class="token comment">/// 2、反转整个字符串</span>
<span class="token keyword">func</span> <span class="token function-definition function">reverseString</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">,</span> startIndex<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> endIndex<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">var</span> start <span class="token operator">=</span> startIndex
    <span class="token keyword">var</span> end <span class="token operator">=</span> endIndex
    <span class="token keyword">while</span> start <span class="token operator">&lt;</span> end <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>s<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>
        start <span class="token operator">+=</span> <span class="token number">1</span>
        end <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/// 3、再次将字符串里面的单词反转</span>
<span class="token keyword">func</span> <span class="token function-definition function">reverseWord</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> start <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> end <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> entry <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>s<span class="token punctuation">.</span>count <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token operator">!</span>entry <span class="token punctuation">{</span>
            start <span class="token operator">=</span> i
            entry <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      
        <span class="token keyword">if</span> entry <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
            entry <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span> startIndex<span class="token punctuation">:</span> start<span class="token punctuation">,</span> endIndex<span class="token punctuation">:</span> end<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> entry <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> s<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> i
            entry <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span> startIndex<span class="token punctuation">:</span> start<span class="token punctuation">,</span> endIndex<span class="token punctuation">:</span> end<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseWords<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sb <span class="token operator">=</span> removeSpace<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// 移除多余的空格</span>
    reverseString<span class="token punctuation">(</span>sb<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> sb<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 翻转字符串</span>
    reverseEachWord<span class="token punctuation">(</span>sb<span class="token punctuation">)</span>
    sb<span class="token punctuation">.</span>mkString
  <span class="token punctuation">}</span>

  <span class="token comment">// 移除多余的空格</span>
  <span class="token keyword">def</span> removeSpace<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> start <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> end <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 移除字符串前面的空格</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> start <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token comment">// 移除字符串后面的空格</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>end <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> end <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> sb <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token comment">// String</span>
    <span class="token comment">// 当start小于等于end的时候，执行添加操作</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> c <span class="token operator">=</span> s<span class="token punctuation">(</span>start<span class="token punctuation">)</span>
      <span class="token comment">// 当前字符不等于空，sb的最后一个字符不等于空的时候添加到sb</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token operator">||</span> sb<span class="token punctuation">(</span>sb<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sb <span class="token operator">++</span><span class="token operator">=</span> c<span class="token punctuation">.</span>toString
      <span class="token punctuation">}</span>
      start <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// 指针向右移动</span>
    <span class="token punctuation">}</span>
    sb<span class="token punctuation">.</span>toArray
  <span class="token punctuation">}</span>

  <span class="token comment">// 翻转字符串</span>
  <span class="token keyword">def</span> reverseString<span class="token punctuation">(</span>s<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> end<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> tmp <span class="token operator">=</span> s<span class="token punctuation">(</span>left<span class="token punctuation">)</span>
      s<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">=</span> s<span class="token punctuation">(</span>right<span class="token punctuation">)</span>
      s<span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">=</span> tmp
      left <span class="token operator">+=</span> <span class="token number">1</span>
      right <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 翻转每个单词</span>
  <span class="token keyword">def</span> reverseEachWord<span class="token punctuation">(</span>s<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token comment">// 向后迭代寻找每个单词的坐标</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> j <span class="token operator">+=</span> <span class="token number">1</span>
      reverseString<span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 翻转每个单词</span>
      i <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>   <span class="token comment">// i往后更新</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">reverseWords</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将每个单词反转</span>
    <span class="token variable">$start</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 到达空格或者串尾，说明一个单词结束。进行翻转。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">==</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">// 翻转，注意是左闭右闭 []的翻转。</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">,</span> <span class="token variable">$start</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// +1: 单词与单词直接有个空格</span>
            <span class="token variable">$start</span> <span class="token operator">=</span> <span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token variable">$s</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 移除多余空格</span>
<span class="token keyword">function</span> <span class="token function-definition function">removeExtraSpaces</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">$slow</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$slow</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$slow</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$slow</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 移动覆盖处理，丢弃多余的脏数据。</span>
    <span class="token variable">$s</span> <span class="token operator">=</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$slow</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 翻转字符串</span>
<span class="token keyword">function</span> <span class="token function-definition function">reverseString</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$s</span><span class="token punctuation">,</span> <span class="token variable">$start</span><span class="token punctuation">,</span> <span class="token variable">$end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token variable">$start</span><span class="token punctuation">,</span> <span class="token variable">$j</span> <span class="token operator">=</span> <span class="token variable">$end</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token variable">$j</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">,</span> <span class="token variable">$j</span><span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$tmp</span> <span class="token operator">=</span> <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$s</span><span class="token punctuation">[</span><span class="token variable">$j</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$tmp</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>// 根据C++版本二思路进行实现
// 函数名根据Rust编译器建议由驼峰命名法改为蛇形命名法
impl Solution {
    pub fn reverse(s: &amp;mut Vec&lt;char&gt;, mut begin: usize, mut end: usize){
        while begin &lt; end {
            let temp = s[begin];
            s[begin] = s[end];
            s[end] = temp;
            begin += 1;
            end -= 1;
        }
}
pub fn remove_extra_spaces(s: &amp;mut Vec&lt;char&gt;) {
        let mut slow: usize = 0;
        let len = s.len();
        // 注意这里不能用for循环，不然在里面那个while循环中对i的递增会失效
        let mut i: usize = 0;
        while i &lt; len {
            if !s[i].is_ascii_whitespace() {
                if slow != 0 {
                    s[slow] = &#39; &#39;;
                    slow += 1;
                }
                while i &lt; len &amp;&amp; !s[i].is_ascii_whitespace() {
                    s[slow] = s[i];
                    slow += 1;
                    i += 1;
                }
            }
            i += 1;
        }
        s.resize(slow, &#39; &#39;);
    }
    pub fn reverse_words(s: String) -&gt; String {
        let mut s = s.chars().collect::&lt;Vec&lt;char&gt;&gt;();
        Self::remove_extra_spaces(&amp;mut s);
        let len = s.len();
        Self::reverse(&amp;mut s, 0, len - 1);
        let mut start = 0;
        for i in 0..=len {
            if i == len || s[i].is_ascii_whitespace() {
                Self::reverse(&amp;mut s, start, i - 1);
                start = i + 1;
            }
        }
        s.iter().collect::&lt;String&gt;()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>// 翻转字符串中指定范围的字符
void reverse(char* s, int start, int end) {
    for (int i = start, j = end; i &lt; j; i++, j--) {
        int tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
    }
}

// 删除字符串两端和中间多余的空格
void removeExtraSpace(char* s) {
    int start = 0; // 指向字符串开头的指针
    int end = strlen(s) - 1; // 指向字符串结尾的指针
    while (s[start] == &#39; &#39;) start++; // 移动指针 start，直到找到第一个非空格字符
    while (s[end] == &#39; &#39;) end--; // 移动指针 end，直到找到第一个非空格字符
    int slow = 0; // 指向新字符串的下一个写入位置的指针
    for (int i = start; i &lt;= end; i++) { // 遍历整个字符串
        if (s[i] == &#39; &#39; &amp;&amp; s[i+1] == &#39; &#39;)  { // 如果当前字符是空格，并且下一个字符也是空格，则跳过
            continue;
        }
        s[slow] = s[i]; // 否则，将当前字符复制到新字符串的 slow 位置
        slow++; // 将 slow 指针向后移动
    }
    s[slow] = &#39;\\0&#39;; // 在新字符串的末尾添加一个空字符
}

// 翻转字符串中的单词
char * reverseWords(char * s){
    removeExtraSpace(s); // 先删除字符串两端和中间的多余空格
    reverse(s, 0, strlen(s) - 1); // 翻转整个字符串
    int slow = 0; // 指向每个单词的开头位置的指针
    for (int i = 0; i &lt;= strlen(s); i++) { // 遍历整个字符串
        if (s[i] ==&#39; &#39; || s[i] == &#39;\\0&#39;) { // 如果当前字符是空格或空字符，说明一个单词结束了
            reverse(s, slow, i-1); // 翻转单词
            slow = i + 1; // 将 slow 指针指向下一个单词的开头位置
        }
    }
    return s; // 返回处理后的字符串
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public string ReverseWords(string s) {
    return string.Join(&#39; &#39;, s.Trim().Split(&#39; &#39;,StringSplitOptions.RemoveEmptyEntries).Reverse());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function q(_,j){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,r,s("p",null,[s("a",k,[n("力扣题目链接"),t(a)])]),d,s("p",null,[s("strong",null,[s("a",v,[n("《代码随想录》算法视频公开课"),t(a)]),n("："),s("a",m,[n("字符串复杂操作拿捏了！ | LeetCode:151.翻转字符串里的单词"),t(a)]),n("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),n("。")]),b,s("p",null,[n("不过其实还可以优化，这部分和"),s("a",h,[n("27.移除元素"),t(a)]),n("的逻辑是一样一样的，本题是移除空格，而 27.移除元素 就是移除元素。")]),w,s("p",null,[n("如果以上代码看不懂，建议先把 "),s("a",g,[n("27.移除元素"),t(a)]),n("这道题目做了，或者看视频讲解："),s("a",f,[n("数组中移除元素并不容易！LeetCode：27. 移除元素"),t(a)]),n(" 。")]),y,s("p",null,[n("还要实现反转字符串的功能，支持反转字符串子区间，这个实现我们分别在"),s("a",x,[n("344.反转字符串"),t(a)]),n("和"),s("a",A,[n("541.反转字符串II"),t(a)]),n("里已经讲过了。")]),S])}const $=e(l,[["render",q],["__file","0151.fanzhuanzifuchuanlidedanci.html.vue"]]);export{$ as default};
