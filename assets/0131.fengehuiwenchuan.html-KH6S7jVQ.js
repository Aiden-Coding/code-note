import{_ as e,r as i,o,c,a as n,b as s,d as t,e as p}from"./app-3RcBQnkC.js";const l={},u=n("blockquote",null,[n("p",null,"切割问题其实是一种组合问题！")],-1),r=n("h1",{id:"_131-分割回文串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_131-分割回文串","aria-hidden":"true"},"#"),s(" 131.分割回文串")],-1),d={href:"https://leetcode.cn/problems/palindrome-partitioning/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。",-1),v=n("p",null,"返回 s 所有可能的分割方案。",-1),m=n("p",null,'示例: 输入: "aab" 输出: [ ["aa","b"], ["a","a","b"] ]',-1),b=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),g={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1c54y1e7k6",target:"_blank",rel:"noopener noreferrer"},f=p('<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题这涉及到两个关键问题：</p><ol><li>切割问题，有不同的切割方式</li><li>判断回文</li></ol><p>相信这里不同的切割方式可以搞懵很多同学了。</p><p>这种题目，想用for循环暴力解法，可能都不那么容易写出来，所以要换一种暴力的方式，就是回溯。</p><p>一些同学可能想不清楚 回溯究竟是如何切割字符串呢？</p><p>我们来分析一下切割，<strong>其实切割问题类似组合问题</strong>。</p><p>例如对于字符串abcdef：</p><ul><li>组合问题：选取一个a之后，在bcdef中再去选取第二个，选取b之后在cdef中再选取第三个.....。</li><li>切割问题：切割一个a之后，在bcdef中再去切割第二段，切割b之后在cdef中再切割第三段.....。</li></ul><p>感受出来了不？</p><p>所以切割问题，也可以抽象为一棵树形结构，如图：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/131.分割回文串.jpg" alt="131.分割回文串"></p><p>递归用来纵向遍历，for循环用来横向遍历，切割线（就是图中的红线）切割到字符串的结尾位置，说明找到了一个切割方法。</p><p>此时可以发现，切割问题的回溯搜索的过程和组合问题的回溯搜索的过程是差不多的。</p><h3 id="回溯三部曲" tabindex="-1"><a class="header-anchor" href="#回溯三部曲" aria-hidden="true">#</a> 回溯三部曲</h3><ul><li>递归函数参数</li></ul><p>全局变量数组path存放切割后回文的子串，二维数组result存放结果集。 （这两个参数可以放到函数参数里）</p><p>本题递归函数参数还需要startIndex，因为切割过的地方，不能重复切割，和组合问题也是保持一致的。</p>',18),y={href:"https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},w=p(`<p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>vector&lt;vector&lt;string&gt;&gt; result;
vector&lt;string&gt; path; // 放已经回文的子串
void backtracking (const string&amp; s, int startIndex) {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>递归函数终止条件</li></ul><p><img src="https://code-thinking.cdn.bcebos.com/pics/131.分割回文串.jpg" alt="131.分割回文串"></p><p>从树形结构的图中可以看出：切割线切到了字符串最后面，说明找到了一种切割方法，此时就是本层递归的终止条件。</p><p><strong>那么在代码里什么是切割线呢？</strong></p><p>在处理组合问题的时候，递归参数需要传入startIndex，表示下一轮递归遍历的起始位置，这个startIndex就是切割线。</p><p>所以终止条件代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void backtracking (const string&amp; s, int startIndex) {
    // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
    if (startIndex &gt;= s.size()) {
        result.push_back(path);
        return;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单层搜索的逻辑</li></ul><p><strong>来看看在递归循环中如何截取子串呢？</strong></p><p>在<code>for (int i = startIndex; i &lt; s.size(); i++)</code>循环中，我们 定义了起始位置startIndex，那么 [startIndex, i] 就是要截取的子串。</p><p>首先判断这个子串是不是回文，如果是回文，就加入在<code>vector&lt;string&gt; path</code>中，path用来记录切割过的回文子串。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>for (int i = startIndex; i &lt; s.size(); i++) {
    if (isPalindrome(s, startIndex, i)) { // 是回文子串
        // 获取[startIndex,i]在s中的子串
        string str = s.substr(startIndex, i - startIndex + 1);
        path.push_back(str);
    } else {                // 如果不是则直接跳过
        continue;
    }
    backtracking(s, i + 1); // 寻找i+1为起始位置的子串
    path.pop_back();        // 回溯过程，弹出本次已经添加的子串
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意切割过的位置，不能重复切割，所以，backtracking(s, i + 1); 传入下一层的起始位置为i + 1</strong>。</p><h3 id="判断回文子串" tabindex="-1"><a class="header-anchor" href="#判断回文子串" aria-hidden="true">#</a> 判断回文子串</h3><p>最后我们看一下回文子串要如何判断了，判断一个字符串是否是回文。</p><p>可以使用双指针法，一个指针从前向后，一个指针从后向前，如果前后指针所指向的元素是相等的，就是回文字符串了。</p><p>那么判断回文的C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code> bool isPalindrome(const string&amp; s, int start, int end) {
     for (int i = start, j = end; i &lt; j; i++, j--) {
         if (s[i] != s[j]) {
             return false;
         }
     }
     return true;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),x={href:"https://programmercarl.com/%E5%8F%8C%E6%8C%87%E9%92%88%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"},I=p(`<p>此时关键代码已经讲解完毕，整体代码如下（详细注释了）</p><p>根据Carl给出的回溯算法模板：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难写出如下代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    vector&lt;vector&lt;string&gt;&gt; result;
    vector&lt;string&gt; path; // 放已经回文的子串
    void backtracking (const string&amp; s, int startIndex) {
        // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
        if (startIndex &gt;= s.size()) {
            result.push_back(path);
            return;
        }
        for (int i = startIndex; i &lt; s.size(); i++) {
            if (isPalindrome(s, startIndex, i)) {   // 是回文子串
                // 获取[startIndex,i]在s中的子串
                string str = s.substr(startIndex, i - startIndex + 1);
                path.push_back(str);
            } else {                                // 不是回文，跳过
                continue;
            }
            backtracking(s, i + 1); // 寻找i+1为起始位置的子串
            path.pop_back(); // 回溯过程，弹出本次已经添加的子串
        }
    }
    bool isPalindrome(const string&amp; s, int start, int end) {
        for (int i = start, j = end; i &lt; j; i++, j--) {
            if (s[i] != s[j]) {
                return false;
            }
        }
        return true;
    }
public:
    vector&lt;vector&lt;string&gt;&gt; partition(string s) {
        result.clear();
        path.clear();
        backtracking(s, 0);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n * 2^n)</li><li>空间复杂度: O(n^2)</li></ul><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>上面的代码还存在一定的优化空间, 在于如何更高效的计算一个子字符串是否是回文字串。上述代码<code>isPalindrome</code>函数运用双指针的方法来判定对于一个字符串<code>s</code>, 给定起始下标和终止下标, 截取出的子字符串是否是回文字串。但是其中有一定的重复计算存在:</p><p>例如给定字符串<code>&quot;abcde&quot;</code>, 在已知<code>&quot;bcd&quot;</code>不是回文字串时, 不再需要去双指针操作<code>&quot;abcde&quot;</code>而可以直接判定它一定不是回文字串。</p><p>具体来说, 给定一个字符串<code>s</code>, 长度为<code>n</code>, 它成为回文字串的充分必要条件是<code>s[0] == s[n-1]</code>且<code>s[1:n-1]</code>是回文字串。</p><p>大家如果熟悉动态规划这种算法的话, 我们可以高效地事先一次性计算出, 针对一个字符串<code>s</code>, 它的任何子串是否是回文字串, 然后在我们的回溯函数中直接查询即可, 省去了双指针移动判定这一步骤.</p><p>具体参考代码如下:</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    vector&lt;vector&lt;string&gt;&gt; result;
    vector&lt;string&gt; path; // 放已经回文的子串
    vector&lt;vector&lt;bool&gt;&gt; isPalindrome; // 放事先计算好的是否回文子串的结果
    void backtracking (const string&amp; s, int startIndex) {
        // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
        if (startIndex &gt;= s.size()) {
            result.push_back(path);
            return;
        }
        for (int i = startIndex; i &lt; s.size(); i++) {
            if (isPalindrome[startIndex][i]) {   // 是回文子串
                // 获取[startIndex,i]在s中的子串
                string str = s.substr(startIndex, i - startIndex + 1);
                path.push_back(str);
            } else {                                // 不是回文，跳过
                continue;
            }
            backtracking(s, i + 1); // 寻找i+1为起始位置的子串
            path.pop_back(); // 回溯过程，弹出本次已经添加的子串
        }
    }
    void computePalindrome(const string&amp; s) {
        // isPalindrome[i][j] 代表 s[i:j](双边包括)是否是回文字串 
        isPalindrome.resize(s.size(), vector&lt;bool&gt;(s.size(), false)); // 根据字符串s, 刷新布尔矩阵的大小
        for (int i = s.size() - 1; i &gt;= 0; i--) { 
            // 需要倒序计算, 保证在i行时, i+1行已经计算好了
            for (int j = i; j &lt; s.size(); j++) {
                if (j == i) {isPalindrome[i][j] = true;}
                else if (j - i == 1) {isPalindrome[i][j] = (s[i] == s[j]);}
                else {isPalindrome[i][j] = (s[i] == s[j] &amp;&amp; isPalindrome[i+1][j-1]);}
            }
        }
    }
public:
    vector&lt;vector&lt;string&gt;&gt; partition(string s) {
        result.clear();
        path.clear();
        computePalindrome(s);
        backtracking(s, 0);
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这道题目在leetcode上是中等，但可以说是hard的题目了，但是代码其实就是按照模板的样子来的。</p><p>那么难究竟难在什么地方呢？</p><p><strong>我列出如下几个难点：</strong></p><ul><li>切割问题可以抽象为组合问题</li><li>如何模拟那些切割线</li><li>切割问题中递归如何终止</li><li>在递归循环中如何截取子串</li><li>如何判断回文</li></ul><p><strong>我们平时在做难题的时候，总结出来难究竟难在哪里也是一种需要锻炼的能力</strong>。</p><p>一些同学可能遇到题目比较难，但是不知道题目难在哪里，反正就是很难。其实这样还是思维不够清晰，这种总结的能力需要多接触多锻炼。</p><p><strong>本题我相信很多同学主要卡在了第一个难点上：就是不知道如何切割，甚至知道要用回溯法，也不知道如何用。也就是没有体会到按照求组合问题的套路就可以解决切割</strong>。</p><p>如果意识到这一点，算是重大突破了。接下来就可以对着模板照葫芦画瓢。</p><p><strong>但接下来如何模拟切割线，如何终止，如何截取子串，其实都不好想，最后判断回文算是最简单的了</strong>。</p><p>关于模拟切割线，其实就是index是上一层已经确定了的分割线，i是这一层试图寻找的新分割线</p><p>除了这些难点，<strong>本题还有细节，例如：切割过的地方不能重复切割所以递归函数需要传入i + 1</strong>。</p><p>所以本题应该是一道hard题目了。</p><p><strong>可能刷过这道题目的录友都没感受到自己原来克服了这么多难点，就把这道题目AC了</strong>，这应该叫做无招胜有招，人码合一。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    List&lt;List&lt;String&gt;&gt; lists = new ArrayList&lt;&gt;();
    Deque&lt;String&gt; deque = new LinkedList&lt;&gt;();

    public List&lt;List&lt;String&gt;&gt; partition(String s) {
        backTracking(s, 0);
        return lists;
    }

    private void backTracking(String s, int startIndex) {
        //如果起始位置大于s的大小，说明找到了一组分割方案
        if (startIndex &gt;= s.length()) {
            lists.add(new ArrayList(deque));
            return;
        }
        for (int i = startIndex; i &lt; s.length(); i++) {
            //如果是回文子串，则记录
            if (isPalindrome(s, startIndex, i)) {
                String str = s.substring(startIndex, i + 1);
                deque.addLast(str);
            } else {
                continue;
            }
            //起始位置后移，保证不重复
            backTracking(s, i + 1);
            deque.removeLast();
        }
    }
    //判断是否是回文串
    private boolean isPalindrome(String s, int startIndex, int end) {
        for (int i = startIndex, j = end; i &lt; j; i++, j--) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
        }
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-1" tabindex="-1"><a class="header-anchor" href="#java-1" aria-hidden="true">#</a> Java</h3><p>回溯+动态规划优化回文串判断</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    List&lt;List&lt;String&gt;&gt; result;
    LinkedList&lt;String&gt; path;
    boolean[][] dp;

    public List&lt;List&lt;String&gt;&gt; partition(String s) {
        result = new ArrayList&lt;&gt;();
        char[] str = s.toCharArray();
        path = new LinkedList&lt;&gt;();
        dp = new boolean[str.length + 1][str.length + 1];
        isPalindrome(str);
        backtracking(s, 0);
        return result;
    }

    public void backtracking(String str, int startIndex) {
        if (startIndex &gt;= str.length()) {
            //如果起始位置大于s的大小，说明找到了一组分割方案
            result.add(new ArrayList&lt;&gt;(path));
        } else {
            for (int i = startIndex; i &lt; str.length(); ++i) {
                if (dp[startIndex][i]) {
                    //是回文子串，进入下一步递归
                    //先将当前子串保存入path
                    path.addLast(str.substring(startIndex, i + 1));
                    //起始位置后移，保证不重复
                    backtracking(str, i + 1);
                    path.pollLast();
                } else {
                    //不是回文子串，跳过
                    continue;
                }
            }
        }
    }

    //通过动态规划判断是否是回文串,参考动态规划篇 52 回文子串
    public void isPalindrome(char[] str) {
        for (int i = 0; i &lt;= str.length; ++i) {
            dp[i][i] = true;
        }
        for (int i = 1; i &lt; str.length; ++i) {
            for (int j = i; j &gt;= 0; --j) {
                if (str[j] == str[i]) {
                    if (i - j &lt;= 1) {
                        dp[j][i] = true;
                    } else if (dp[j + 1][i - 1]) {
                        dp[j][i] = true;
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>回溯 基本版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">partition</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        递归用于纵向遍历
        for循环用于横向遍历
        当切割线迭代至字符串末尾，说明找到一种方法
        类似组合问题，为了不重复切割同一位置，需要start_index来做标记下一轮递归的起始位置(切割线)
        &#39;&#39;&#39;</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">,</span> start_index<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result <span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Base Case</span>
        <span class="token keyword">if</span> start_index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        
        <span class="token comment"># 单层递归逻辑</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_index<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 此次比其他组合题目多了一步判断：</span>
            <span class="token comment"># 判断被截取的这一段子串([start_index, i])是否为回文串</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>is_palindrome<span class="token punctuation">(</span>s<span class="token punctuation">,</span> start_index<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">:</span>
                path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>s<span class="token punctuation">[</span>start_index<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>   <span class="token comment"># 递归纵向遍历：从下一处进行切割，判断其余是否仍为回文串</span>
                path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 回溯</span>


    <span class="token keyword">def</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> start<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        i<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> start        
        j<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> end
        <span class="token keyword">while</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">:</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            i <span class="token operator">+=</span> <span class="token number">1</span>
            j <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯+优化判定回文函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">partition</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">,</span> start_index<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result <span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Base Case</span>
        <span class="token keyword">if</span> start_index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        
        <span class="token comment"># 单层递归逻辑</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_index<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 若反序和正序相同，意味着这是回文串</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>start_index<span class="token punctuation">:</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>start_index<span class="token punctuation">:</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>s<span class="token punctuation">[</span>start_index<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>   <span class="token comment"># 递归纵向遍历：从下一处进行切割，判断其余是否仍为回文串</span>
                path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 回溯</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯+高效判断回文子串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">partition</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        isPalindrome <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 初始化isPalindrome矩阵</span>
        self<span class="token punctuation">.</span>computePalindrome<span class="token punctuation">(</span>s<span class="token punctuation">,</span> isPalindrome<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> isPalindrome<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">,</span> isPalindrome<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> startIndex <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> isPalindrome<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>   <span class="token comment"># 是回文子串</span>
                substring <span class="token operator">=</span> s<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
                path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>substring<span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>s<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">,</span> isPalindrome<span class="token punctuation">)</span>  <span class="token comment"># 寻找i+1为起始位置的子串</span>
                path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 回溯过程，弹出本次已经添加的子串</span>

    <span class="token keyword">def</span> <span class="token function">computePalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">,</span> isPalindrome<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 需要倒序计算，保证在i行时，i+1行已经计算好了</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> j <span class="token operator">==</span> i<span class="token punctuation">:</span>
                    isPalindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">elif</span> j <span class="token operator">-</span> i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    isPalindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    isPalindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token keyword">and</span> isPalindrome<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯+使用all函数判断回文子串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">partition</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>partition_helper<span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">partition_helper</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">,</span> start_index<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> start_index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            sub <span class="token operator">=</span> s<span class="token punctuation">[</span>start_index<span class="token punctuation">:</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>isPalindrome<span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">:</span>
                path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>partition_helper<span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
                path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">all</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
    path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>  <span class="token comment">// 放已经回文的子串</span>
    res  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">partition</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> start <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> start <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果起始位置等于s的大小，说明已经找到了一组分割方案了</span>
        tmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">copy</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        str <span class="token operator">:=</span> s<span class="token punctuation">[</span>start <span class="token punctuation">:</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 是回文子串</span>
            path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>         <span class="token comment">// 寻找i+1为起始位置的子串</span>
            path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment">// 回溯过程，弹出本次已经添加的子串</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token punctuation">,</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> l<span class="token punctuation">,</span> j <span class="token operator">=</span> r<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>startIndex <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">partition</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> isHuiwen <span class="token operator">=</span> <span class="token punctuation">(</span>
        str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> 
        startIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> 
        endIndex<span class="token operator">:</span> <span class="token builtin">number</span>
        <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> startIndex <span class="token operator">&lt;</span> endIndex<span class="token punctuation">;</span> startIndex<span class="token operator">++</span><span class="token punctuation">,</span> endIndex<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>endIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> rec <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isHuiwen</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> index<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">rec</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">rec</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> path<span class="token punctuation">;</span>
<span class="token keyword">int</span> pathTop<span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> ansTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ansSize<span class="token punctuation">;</span>

<span class="token comment">//将path中的字符串全部复制到ans中</span>
<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建一个临时tempPath保存path中的字符串</span>
    <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> tempPath <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> pathTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pathTop<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//保存tempPath</span>
    ans<span class="token punctuation">[</span>ansTop<span class="token punctuation">]</span> <span class="token operator">=</span> tempPath<span class="token punctuation">;</span>
    <span class="token comment">//将当前path的长度（pathTop）保存在ansSize中</span>
    ansSize<span class="token punctuation">[</span>ansTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> pathTop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//判断字符串是否为回文字符串</span>
bool <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//双指针法：当endIndex（右指针）的值比startIndex（左指针）大时进行遍历</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>endIndex <span class="token operator">&gt;=</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//若左指针和右指针指向元素不一样，返回False</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>endIndex<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">!=</span> str<span class="token punctuation">[</span>startIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//切割从startIndex到endIndex子字符串</span>
<span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">cutString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//开辟字符串的空间</span>
    <span class="token keyword">char</span><span class="token operator">*</span> tempString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>endIndex <span class="token operator">-</span> startIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//复制子字符串</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        tempString<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//用&#39;\\0&#39;作为字符串结尾</span>
    tempString<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> tempString<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">backTracking</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> strLen<span class="token punctuation">,</span>  <span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>startIndex <span class="token operator">&gt;=</span> strLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将path拷贝到ans中</span>
        <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//若从subString到i的子串是回文字符串，将其放入path中</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">[</span>pathTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cutString</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//若从startIndex到i的子串不为回文字符串，跳过这一层 </span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//递归判断下一层</span>
        <span class="token function">backTracking</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> strLen<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//回溯，将path中最后一位元素弹出</span>
        pathTop<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> strLen <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//因为path中的字符串最多为strLen个（即单个字符的回文字符串），所以开辟strLen个char*空间</span>
    path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> strLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//存放path中的数组结果</span>
    ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">40000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//存放ans数组中每一个char**数组的长度</span>
    ansSize <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">40000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ansTop <span class="token operator">=</span> pathTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//回溯函数</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> strLen<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//将ansTop设置为ans数组的长度</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ansTop<span class="token punctuation">;</span>
    <span class="token comment">//设置ans数组中每一个数组的长度</span>
    <span class="token operator">*</span>returnColumnSizes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> ansTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ansTop<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token operator">*</span>returnColumnSizes<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> ansSize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">partition</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把字符串转为字符数组以便于通过索引访问和取子串</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token comment">// 使用双指针法判断子串是否回文</span>
    <span class="token keyword">func</span> <span class="token function-definition function">isPalindrome</span><span class="token punctuation">(</span>start<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> start <span class="token operator">=</span> start<span class="token punctuation">,</span> end <span class="token operator">=</span> end
        <span class="token keyword">while</span> start <span class="token operator">&lt;</span> end <span class="token punctuation">{</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
            start <span class="token operator">+=</span> <span class="token number">1</span>
            end <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 切割方案</span>
    <span class="token keyword">func</span> <span class="token function-definition function">backtracking</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 终止条件，收集结果</span>
        <span class="token keyword">guard</span> startIndex <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>count <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> startIndex <span class="token operator">..&lt;</span> s<span class="token punctuation">.</span>count <span class="token punctuation">{</span>
            <span class="token comment">// 回文则收集，否则跳过</span>
            <span class="token keyword">guard</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>start<span class="token punctuation">:</span> startIndex<span class="token punctuation">,</span> end<span class="token punctuation">:</span> i<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
            <span class="token keyword">let</span> substring <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>startIndex <span class="token operator">...</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span> <span class="token comment">// 处理</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">:</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 寻找下一个起始位置的子串</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>path<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span> path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// 回溯</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><p><strong>回溯+函数判断回文串</strong></p><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn partition(s: String) -&gt; Vec&lt;Vec&lt;String&gt;&gt; {
        let mut ret = vec![];
        let mut path = vec![];
        let sub_str: Vec&lt;char&gt; = s.chars().collect();
        
        Self::backtracing(&amp;sub_str, 0, &amp;mut ret, &amp;mut path);
        
        ret
    }
    
    fn backtracing(sub_str: &amp;Vec&lt;char&gt;, start: usize, ret: &amp;mut Vec&lt;Vec&lt;String&gt;&gt;, path: &amp;mut Vec&lt;String&gt;) {
        //如果起始位置大于s的大小，说明找到了一组分割方案
        if start &gt;= sub_str.len() {
            ret.push(path.clone());
            return;
        }
        
        for i in start..sub_str.len() {
            if !Self::is_palindrome(sub_str, start, i) {
                continue;
            }
            //如果是回文子串，则记录
            let s: String = sub_str[start..i+1].into_iter().collect();
            path.push(s);
            
            //起始位置后移，保证不重复
            Self::backtracing(sub_str, i+1, ret, path); 
            path.pop();
        }
        
    }
    
    fn is_palindrome(s: &amp;Vec&lt;char&gt;, start: usize, end: usize) -&gt; bool {
        let (mut start, mut end) = (start, end);
        
        while start &lt; end {
            if s[start] != s[end] {
                return false;
            }
            
            start += 1;
            end -= 1;
        }

        true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>回溯+动态规划预处理判断回文串</strong></p><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>impl Solution {
    pub fn backtracking(is_palindrome: &amp;Vec&lt;Vec&lt;bool&gt;&gt;, result: &amp;mut Vec&lt;Vec&lt;String&gt;&gt;, path: &amp;mut Vec&lt;String&gt;, s: &amp;Vec&lt;char&gt;, start_index: usize) {
        let len = s.len();
        if start_index &gt;= len {
            result.push(path.to_vec());
            return;
        }
        for i in start_index..len {
            if is_palindrome[start_index][i] { path.push(s[start_index..=i].iter().collect::&lt;String&gt;()); } else { continue; }
            Self::backtracking(is_palindrome, result, path, s, i + 1);
            path.pop();
        }
    }

    pub fn partition(s: String) -&gt; Vec&lt;Vec&lt;String&gt;&gt; {
        let mut result: Vec&lt;Vec&lt;String&gt;&gt; = Vec::new();
        let mut path: Vec&lt;String&gt; = Vec::new();
        let s = s.chars().collect::&lt;Vec&lt;char&gt;&gt;();
        let len: usize = s.len();
	// 使用动态规划预先打表
	// 当且仅当其为空串(i&gt;j)，或其长度为1(i=j)，或者首尾字符相同且(s[i+1..j−1])时为回文串
        let mut is_palindrome = vec![vec![true; len]; len];
        for i in (0..len).rev() {
            for j in (i + 1)..len {
                is_palindrome[i][j] = s[i] == s[j] &amp;&amp; is_palindrome[i + 1][j - 1];
            }
        }
        Self::backtracking(&amp;is_palindrome, &amp;mut result, &amp;mut path, &amp;s, 0);
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>

  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>

  <span class="token keyword">def</span> partition<span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 判断字符串是否回文</span>
    <span class="token keyword">def</span> isPalindrome<span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> end<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> <span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">!=</span> s<span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        left <span class="token operator">+=</span> <span class="token number">1</span>
        right <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 回溯算法</span>
    <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>startIndex<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&gt;=</span> s<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>toList<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 添加循环守卫，如果当前分割是回文子串则进入回溯</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> startIndex until s<span class="token punctuation">.</span>size <span class="token keyword">if</span> isPalindrome<span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>s<span class="token punctuation">.</span>substring<span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        backtracking<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        path <span class="token operator">=</span> path<span class="token punctuation">.</span>take<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    backtracking<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    result<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csharp" tabindex="-1"><a class="header-anchor" href="#csharp" aria-hidden="true">#</a> CSharp</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">IList<span class="token punctuation">&lt;</span>IList<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>IList<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">IList<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IList<span class="token punctuation">&lt;</span>IList<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">Partition</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">BackTracking</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BackTracking</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;=</span> s<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">IsPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> start<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                path<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">BackTracking</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">RemoveAt</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsPalindrome</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> end<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> start<span class="token punctuation">,</span> j <span class="token operator">=</span> end<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function _(P,j){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),t(a)])]),k,v,m,b,n("p",null,[n("strong",null,[n("a",g,[s("《代码随想录》算法视频公开课"),t(a)]),s("："),n("a",h,[s("131.分割回文串"),t(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),f,n("p",null,[s("在"),n("a",y,[s("回溯算法：求组合总和（二）"),t(a)]),s("中我们深入探讨了组合问题什么时候需要startIndex，什么时候不需要startIndex。")]),w,n("p",null,[s("如果大家对双指针法有生疏了，传送门："),n("a",x,[s("双指针法：总结篇！"),t(a)])]),I])}const L=e(l,[["render",_],["__file","0131.fengehuiwenchuan.html.vue"]]);export{L as default};
