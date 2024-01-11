import{_ as s,r as t,o as l,c as d,a as e,b as i,d as a,e as r}from"./app-3RcBQnkC.js";const c={},o=e("h1",{id:"替换数字",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#替换数字","aria-hidden":"true"},"#"),i(" 替换数字")],-1),h=e("p",null,"力扣已经将剑指offer题目下架，所以我在卡码网上给大家提供类似的题目来练习",-1),u={href:"https://kamacoder.com/problempage.php?pid=1064",target:"_blank",rel:"noopener noreferrer"},p=r(`<p>给定一个字符串 s，它包含小写字母和数字字符，请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为number。</p><p>例如，对于输入字符串 &quot;a1b2c3&quot;，函数应该将其转换为 &quot;anumberbnumbercnumber&quot;。</p><p>对于输入字符串 &quot;a5b&quot;，函数应该将其转换为 &quot;anumberb&quot;</p><p>输入：一个字符串 s,s 仅包含小写字母和数字字符。</p><p>输出：打印一个新的字符串，其中每个数字字符都被替换为了number</p><p>样例输入：a1b2c3</p><p>样例输出：anumberbnumbercnumber</p><p>数据范围：1 &lt;= s.length &lt; 10000。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>如果想把这道题目做到极致，就不要只用额外的辅助空间了！ （不过使用Java刷题的录友，一定要使用辅助空间，因为Java里的string不能修改）</p><p>首先扩充数组到每个数字字符替换成 &quot;number&quot; 之后的大小。</p><p>例如 字符串 &quot;a5b&quot; 的长度为3，那么 将 数字字符变成字符串 &quot;number&quot; 之后的字符串为 &quot;anumberb&quot; 长度为 8。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231030165201.png" alt=""></p><p>然后从后向前替换数字字符，也就是双指针法，过程如下：i指向新长度的末尾，j指向旧长度的末尾。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231030173058.png" alt=""></p><p>有同学问了，为什么要从后向前填充，从前向后填充不行么？</p><p>从前向后填充就是O(n^2)的算法了，因为每次添加元素都要将添加元素之后的所有元素整体向后移动。</p><p><strong>其实很多数组填充类的问题，其做饭都是先预先给数组扩容带填充后的大小，然后在从后向前进行操作。</strong></p><p>这么做有两个好处：</p><ol><li>不用申请新数组。</li><li>从后向前填充元素，避免了从前向后填充元素时，每次添加元素都要将添加元素之后的所有元素向后移动的问题。</li></ol><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include&lt;iostream&gt;
using namespace std;
int main() {
    string s;
    while (cin &gt;&gt; s) {
        int count = 0; // 统计数字的个数
        int sOldSize = s.size();
        for (int i = 0; i &lt; s.size(); i++) {
            if (s[i] &gt;= &#39;0&#39; &amp;&amp; s[i] &lt;= &#39;9&#39;) {
                count++;
            }
        }
        // 扩充字符串s的大小，也就是每个空格替换成&quot;number&quot;之后的大小
        s.resize(s.size() + count * 5);
        int sNewSize = s.size();
        // 从后先前将空格替换为&quot;number&quot;
        for (int i = sNewSize - 1, j = sOldSize - 1; j &lt; i; i--, j--) {
            if (s[j] &gt; &#39;9&#39; || s[j] &lt; &#39;0&#39;) {
                s[i] = s[j];
            } else {
                s[i] = &#39;r&#39;;
                s[i - 1] = &#39;e&#39;;
                s[i - 2] = &#39;b&#39;;
                s[i - 3] = &#39;m&#39;;
                s[i - 4] = &#39;u&#39;;
                s[i - 5] = &#39;n&#39;;
                i -= 5;
            }
        }
        cout &lt;&lt; s &lt;&lt; endl;
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p>此时算上本题，我们已经做了七道双指针相关的题目了分别是：</p>`,25),m={href:"https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://programmercarl.com/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},E=r(`<h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><p>这里也给大家拓展一下字符串和数组有什么差别，</p><p>字符串是若干字符组成的有限序列，也可以理解为是一个字符数组，但是很多语言对字符串做了特殊的规定，接下来我来说一说C/C++中的字符串。</p><p>在C语言中，把一个字符串存入一个数组时，也把结束符 &#39;\\0&#39;存入数组，并以此作为该字符串是否结束的标志。</p><p>例如这段代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>char a[5] = &quot;asd&quot;;
for (int i = 0; a[i] != &#39;\\0&#39;; i++) {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在C++中，提供一个string类，string类会提供 size接口，可以用来判断string类字符串是否结束，就不用&#39;\\0&#39;来判断是否结束。</p><p>例如这段代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string a = &quot;asd&quot;;
for (int i = 0; i &lt; a.size(); i++) {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么vector&lt; char &gt; 和 string 又有什么区别呢？</p><p>其实在基本操作上没有区别，但是 string提供更多的字符串处理的相关接口，例如string 重载了+，而vector却没有。</p><p>所以想处理字符串，我们还是会定义一个string类型。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python：</h3><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP：</h3><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3>`,23);function x(q,B){const n=t("ExternalLinkIcon");return l(),d("div",null,[o,h,e("p",null,[e("a",u,[i("卡码网题目链接"),a(n)])]),p,e("ul",null,[e("li",null,[e("a",m,[i("27.移除元素"),a(n)])]),e("li",null,[e("a",v,[i("15.三数之和"),a(n)])]),e("li",null,[e("a",b,[i("18.四数之和"),a(n)])]),e("li",null,[e("a",g,[i("206.翻转链表"),a(n)])]),e("li",null,[e("a",f,[i("142.环形链表II"),a(n)])]),e("li",null,[e("a",_,[i("344.反转字符串"),a(n)])])]),E])}const C=s(c,[["render",x],["__file","jianzhiOffer05.tihuankongge.html.vue"]]);export{C as default};
