import{_ as p,r as o,o as i,c,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const l={},u=n("blockquote",null,[n("p",null,"简单的反转还不够，我要花式反转")],-1),r=n("h1",{id:"_541-反转字符串ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_541-反转字符串ii","aria-hidden":"true"},"#"),s(" 541. 反转字符串II")],-1),k={href:"https://leetcode.cn/problems/reverse-string-ii/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。",-1),v=n("p",null,"如果剩余字符少于 k 个，则将剩余字符全部反转。",-1),m=n("p",null,"如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。",-1),b=n("p",null,"示例:",-1),h=n("p",null,[s('输入: s = "abcdefg", k = 2'),n("br"),s(' 输出: "bacdfeg"')],-1),g=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),f={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.bilibili.com/video/BV1dT411j7NN",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目其实也是模拟，实现题目中规定的反转规则就可以了。</p><p>一些同学可能为了处理逻辑：每隔2k个字符的前k的字符，写了一堆逻辑代码或者再搞一个计数器，来统计2k，再统计前k个字符。</p><p>其实在遍历字符串的过程中，只要让 i += (2 * k)，i 每次移动 2 * k 就可以了，然后判断是否需要有反转的区间。</p><p>因为要找的也就是每2 * k 区间的起点，这样写，程序会高效很多。</p><p><strong>所以当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章。</strong></p><p>性能如下： <img src="https://code-thinking.cdn.bcebos.com/pics/541_反转字符串II.png" alt="img"></p><p>那么这里具体反转的逻辑我们要不要使用库函数呢，其实用不用都可以，使用reverse来实现反转也没毛病，毕竟不是解题关键部分。</p><p>使用C++库函数reverse的版本如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    string reverseStr(string s, int k) {
        for (int i = 0; i &lt; s.size(); i += (2 * k)) {
            // 1. 每隔 2k 个字符的前 k 个字符进行反转
            // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
            if (i + k &lt;= s.size()) {
                reverse(s.begin() + i, s.begin() + i + k );
            } else {
                // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
                reverse(s.begin() + i, s.end());
            }
        }
        return s;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul>`,11),S={href:"https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>下面我实现的reverse函数区间是左闭右闭区间，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void reverse(string&amp; s, int start, int end) {
        for (int i = start, j = end; i &lt; j; i++, j--) {
            swap(s[i], s[j]);
        }
    }
    string reverseStr(string s, int k) {
        for (int i = 0; i &lt; s.size(); i += (2 * k)) {
            // 1. 每隔 2k 个字符的前 k 个字符进行反转
            // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
            if (i + k &lt;= s.size()) {
                reverse(s, i, i + k - 1);
                continue;
            }
            // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
            reverse(s, i, s.size() - 1);
        }
        return s;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)或O(n), 取决于使用的语言中字符串是否可以修改.</li></ul><p>另一种思路的解法</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    string reverseStr(string s, int k) {
        int n = s.size(),pos = 0;
        while(pos &lt; n){
            //剩余字符串大于等于k的情况
            if(pos + k &lt; n) reverse(s.begin() + pos, s.begin() + pos + k);
            //剩余字符串不足k的情况 
            else reverse(s.begin() + pos,s.end());
            pos += 2 * k;
        }
        return s;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断剩余字符是否少于 k</span>
        k <span class="token operator">=</span> i <span class="token operator">+</span> k <span class="token operator">&gt;</span> len <span class="token operator">?</span> len <span class="token operator">-</span> i <span class="token operator">:</span> k<span class="token punctuation">;</span>

        <span class="token keyword">int</span> left <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>right<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//解法一
class Solution {
    public String reverseStr(String s, int k) {
        StringBuffer res = new StringBuffer();
        int length = s.length();
        int start = 0;
        while (start &lt; length) {
            // 找到k处和2k处
            StringBuffer temp = new StringBuffer();
            // 与length进行判断，如果大于length了，那就将其置为length
            int firstK = (start + k &gt; length) ? length : start + k;
            int secondK = (start + (2 * k) &gt; length) ? length : start + (2 * k);

            //无论start所处位置，至少会反转一次
            temp.append(s.substring(start, firstK));
            res.append(temp.reverse());

            // 如果firstK到secondK之间有元素，这些元素直接放入res里即可。
            if (firstK &lt; secondK) { //此时剩余长度一定大于k。
                res.append(s.substring(firstK, secondK));
            }
            start += (2 * k);
        }
        return res.toString();
    }
}

//解法二（似乎更容易理解点）
//题目的意思其实概括为 每隔2k个反转前k个，尾数不够k个时候全部反转
class Solution {
    public String reverseStr(String s, int k) {
        char[] ch = s.toCharArray();
        for(int i = 0; i &lt; ch.length; i += 2 * k){
            int start = i;
            //这里是判断尾数够不够k个来取决end指针的位置
            int end = Math.min(ch.length - 1, start + k - 1);
            //用异或运算反转 
            while(start &lt; end){
                ch[start] ^= ch[end];
                ch[end] ^= ch[start];
                ch[start] ^= ch[end];
                start++;
                end--;
            }
        }
        return new String(ch);
    }
}


// 解法二还可以用temp来交换数值，会的人更多些
class Solution {
    public String reverseStr(String s, int k) {
        char[] ch = s.toCharArray();
        for(int i = 0;i &lt; ch.length;i += 2 * k){
            int start = i;
            // 判断尾数够不够k个来取决end指针的位置
            int end = Math.min(ch.length - 1,start + k - 1);
            while(start &lt; end){
                
                char temp = ch[start];
                ch[start] = ch[end];
                ch[end] = temp;

                start++;
                end--;
            }
        }
        return new String(ch);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 解法3</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1. 每隔 2k 个字符的前 k 个字符进行反转</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">&lt;=</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">reverse</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> k <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 3. 剩余字符少于 k 个，则将剩余字符全部反转</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> i<span class="token punctuation">,</span> ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>  <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token comment">// 定义翻转函数</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> temp  <span class="token operator">=</span> ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        1. 使用range(start, end, step)来确定需要调换的初始位置
        2. 对于字符串s = &#39;abc&#39;，如果使用s[0:999] ===&gt; &#39;abc&#39;。字符串末尾如果超过最大长度，则会返回至字符串最后一个值，这个特性可以避免一些边界条件的处理。
        3. 用切片整体替换，而不是一个个替换.
        &quot;&quot;&quot;</span>
        <span class="token keyword">def</span> <span class="token function">reverse_substring</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
            left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token keyword">while</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">:</span>
                text<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> text<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> text<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> text<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
                left <span class="token operator">+=</span> <span class="token number">1</span>
                right <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> text
        
        res <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

        <span class="token keyword">for</span> cur <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">:</span>
            res<span class="token punctuation">[</span>cur<span class="token punctuation">:</span> cur <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token operator">=</span> reverse_substring<span class="token punctuation">(</span>res<span class="token punctuation">[</span>cur<span class="token punctuation">:</span> cur <span class="token operator">+</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python3-v2" tabindex="-1"><a class="header-anchor" href="#python3-v2" aria-hidden="true">#</a> Python3 (v2):</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token comment"># Two pointers. Another is inside the loop.</span>
        p <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> p <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            p2 <span class="token operator">=</span> p <span class="token operator">+</span> k
            <span class="token comment"># Written in this could be more pythonic.</span>
            s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>p<span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>p<span class="token punctuation">:</span> p2<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>p2<span class="token punctuation">:</span><span class="token punctuation">]</span>
            p <span class="token operator">=</span> p <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> k
        <span class="token keyword">return</span> s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    ss <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k <span class="token punctuation">{</span>
     <span class="token comment">// 1. 每隔 2k 个字符的前 k 个字符进行反转</span>
     <span class="token comment">// 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符</span>
        <span class="token keyword">if</span> i <span class="token operator">+</span> k <span class="token operator">&lt;=</span> length <span class="token punctuation">{</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>ss<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>ss<span class="token punctuation">[</span>i<span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseStr</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 每隔 2k 个字符的前 k 个字符进行反转</span>
        <span class="token keyword">let</span> l <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> i <span class="token operator">+</span> k <span class="token operator">&gt;</span> len <span class="token operator">?</span> len <span class="token operator">:</span> i <span class="token operator">+</span> k<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">++</span>l <span class="token operator">&lt;</span> <span class="token operator">--</span>r<span class="token punctuation">)</span> <span class="token punctuation">[</span>resArr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> resArr<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>resArr<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> resArr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left <span class="token operator">=</span> i<span class="token punctuation">;</span>
        right <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> length <span class="token operator">?</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">reverseStr</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> k<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> ch<span class="token punctuation">.</span>count<span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> <span class="token keyword">left</span> <span class="token operator">=</span> i
        <span class="token keyword">var</span> <span class="token keyword">right</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">left</span> <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      
        <span class="token keyword">while</span> <span class="token keyword">left</span> <span class="token operator">&lt;</span> <span class="token keyword">right</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span>ch<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ch<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ch<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ch<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">right</span> <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ReverseStr</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> k<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Span<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">&gt;</span></span> span <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">ToCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> span<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            span<span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">&lt;</span> span<span class="token punctuation">.</span>Length <span class="token punctuation">?</span> i<span class="token range operator">..</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k<span class="token punctuation">)</span> <span class="token punctuation">:</span> i<span class="token range operator">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> span<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><p>版本一: (正常解法)</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseStr<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> s<span class="token punctuation">.</span>toCharArray <span class="token comment">// 转换为Array好处理</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> s<span class="token punctuation">.</span>indices by <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果i+k大于了res的长度，则需要全部翻转</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">&gt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reverse<span class="token punctuation">(</span>res<span class="token punctuation">,</span> i<span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        reverse<span class="token punctuation">(</span>res<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">new</span> <span class="token builtin">String</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 翻转字符串，从start到end</span>
  <span class="token keyword">def</span> reverse<span class="token punctuation">(</span>s<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> end<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> tmp <span class="token operator">=</span> s<span class="token punctuation">(</span>left<span class="token punctuation">)</span>
      s<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">=</span> s<span class="token punctuation">(</span>right<span class="token punctuation">)</span>
      s<span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">=</span> tmp
      left <span class="token operator">+=</span> <span class="token number">1</span>
      right <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本二: 首先利用grouped每隔k个进行分割，再使用zipWithIndex添加每个数组的索引，紧接着利用map做变换，如果索引%2==0则说明需要翻转，否则原封不动，最后再转换为String</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseStr<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// s = &quot;abcdefg&quot;, k = 2</span>
    s<span class="token punctuation">.</span>grouped<span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token comment">// Iterator [&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;, &quot;g&quot;]</span>
      <span class="token punctuation">.</span>zipWithIndex <span class="token comment">// Iterator [(&quot;ab&quot;, 0), (&quot;cd&quot;, 1), (&quot;ef&quot;, 2), (&quot;g&quot;, 3)]</span>
      <span class="token punctuation">.</span>map <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token punctuation">(</span>subStr<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token keyword">=&gt;</span> 
          <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> subStr<span class="token punctuation">.</span>reverse <span class="token keyword">else</span> subStr
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>mkString
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本三: (递归)</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>tailrec</span>

<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseStr<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@tailrec</span> <span class="token comment">// 这个函数已经优化成了尾递归</span>
    <span class="token keyword">def</span> reverse<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">,</span> needToReverse<span class="token operator">:</span> <span class="token builtin">Boolean</span><span class="token punctuation">,</span> history<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 截取前k个字符（判断是否翻转）</span>
      <span class="token keyword">val</span> subStr <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>needToReverse<span class="token punctuation">)</span> s<span class="token punctuation">.</span>take<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span>reverse <span class="token keyword">else</span> s<span class="token punctuation">.</span>take<span class="token punctuation">(</span>k<span class="token punctuation">)</span>
      <span class="token comment">// 如果字符串长度小于k，返回结果</span>
      <span class="token comment">// 否则，对于剩余字符串进行同样的操作</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> history <span class="token operator">+</span> subStr
      <span class="token keyword">else</span> reverse<span class="token punctuation">(</span>s<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">!</span>needToReverse<span class="token punctuation">,</span> history <span class="token operator">+</span> subStr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    reverse<span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn reverse(s: &amp;mut Vec&lt;char&gt;, mut begin: usize, mut end: usize){
        while begin &lt; end {
            let temp = s[begin];
            s[begin] = s[end];
            s[end] = temp;
            begin += 1;
            end -= 1;
        }
    }
    pub fn reverse_str(s: String, k: i32) -&gt; String {
        let len = s.len();
        let k = k as usize;
        let mut s = s.chars().collect::&lt;Vec&lt;_&gt;&gt;();
        for i in (0..len).step_by(2 * k) {
            if i + k &lt; len {
                Self::reverse(&amp;mut s, i, i + k - 1);
            }
            else {
                Self::reverse(&amp;mut s, i, len - 1);
            }
        }
        s.iter().collect::&lt;String&gt;()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function x(q,j){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,r,n("p",null,[n("a",k,[s("力扣题目链接"),e(a)])]),d,v,m,b,h,g,n("p",null,[n("strong",null,[n("a",f,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",y,[s("字符串操作进阶！ | LeetCode：541. 反转字符串II"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),w,n("p",null,[s("那么我们也可以实现自己的reverse函数，其实和题目"),n("a",S,[s("344. 反转字符串"),e(a)]),s("道理是一样的。")]),_])}const I=p(l,[["render",x],["__file","0541.fanzhuanzifuchuanII.html.vue"]]);export{I as default};
