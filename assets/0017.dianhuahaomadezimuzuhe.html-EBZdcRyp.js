import{_ as e,r as o,o as i,c,a as n,b as s,d as t,e as p}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"_17-电话号码的字母组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_17-电话号码的字母组合","aria-hidden":"true"},"#"),s(" 17.电话号码的字母组合")],-1),r={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。",-1),d=n("p",null,"给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。",-1),v=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/2020102916424043.png",alt:"17.电话号码的字母组合"})],-1),m=n("p",null,"示例:",-1),b=n("ul",null,[n("li",null,'输入："23"'),n("li",null,'输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].')],-1),g=n("p",null,"说明：尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。",-1),h=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),q={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/BV1yV4y1V7Ug",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),w=n("p",null,'从示例上来说，输入"23"，最直接的想法就是两层for循环遍历了吧，正好把组合的情况都输出了。',-1),_=n("p",null,'如果输入"233"呢，那么就三层for循环，如果"2333"呢，就四层for循环.......',-1),x={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},E=p(`<p>理解本题后，要解决如下三个问题：</p><ol><li>数字和字母如何映射</li><li>两个字母就两个for循环，三个字符我就三个for循环，以此类推，然后发现代码根本写不出来</li><li>输入1 * #按键等等异常情况</li></ol><h3 id="数字和字母如何映射" tabindex="-1"><a class="header-anchor" href="#数字和字母如何映射" aria-hidden="true">#</a> 数字和字母如何映射</h3><p>可以使用map或者定义一个二维数组，例如：string letterMap[10]，来做映射，我这里定义一个二维数组，代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> string letterMap<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 0</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 1</span>
    <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 2</span>
    <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 3</span>
    <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 4</span>
    <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 5</span>
    <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 6</span>
    <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 7</span>
    <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 8</span>
    <span class="token string">&quot;wxyz&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 9</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回溯法来解决n个for循环的问题" tabindex="-1"><a class="header-anchor" href="#回溯法来解决n个for循环的问题" aria-hidden="true">#</a> 回溯法来解决n个for循环的问题</h3>`,6),S={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,'例如：输入："23"，抽象为树形结构，如图所示：',-1),C=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20201123200304469.png",alt:"17. 电话号码的字母组合"})],-1),z=n("p",null,'图中可以看出遍历的深度，就是输入"23"的长度，而叶子节点就是我们要收集的结果，输出["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]。',-1),j=n("p",null,"回溯三部曲：",-1),I=n("ul",null,[n("li",null,"确定回溯函数参数")],-1),A=n("p",null,"首先需要一个字符串s来收集叶子节点的结果，然后用一个字符串数组result保存起来，这两个变量我依然定义为全局。",-1),M=n("p",null,"再来看参数，参数指定是有题目中给的string digits，然后还要有一个参数就是int型的index。",-1),T={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"},P=p(`<p>这个index是记录遍历第几个数字了，就是用来遍历digits的（题目中给出数字字符串），同时index也表示树的深度。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> result<span class="token punctuation">;</span>
string s<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">const</span> string<span class="token operator">&amp;</span> digits<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确定终止条件</li></ul><p>例如输入用例&quot;23&quot;，两个数字，那么根节点往下递归两层就可以了，叶子节点就是要收集的结果集。</p><p>那么终止条件就是如果index 等于 输入的数字个数（digits.size）了（本来index就是用来遍历digits的）。</p><p>然后收集结果，结束本层递归。</p><p>代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> digits<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确定单层遍历逻辑</li></ul><p>首先要取index指向的数字，并找到对应的字符集（手机键盘的字符集）。</p><p>然后for循环来处理这个字符集，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int digit = digits[index] - &#39;0&#39;;        // 将index指向的数字转为int
string letters = letterMap[digit];      // 取数字对应的字符集
for (int i = 0; i &lt; letters.size(); i++) {
    s.push_back(letters[i]);            // 处理
    backtracking(digits, index + 1);    // 递归，注意index+1，一下层要处理下一个数字了
    s.pop_back();                       // 回溯
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),V={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,"注意：输入1 * #按键等等异常情况",-1),D=n("p",null,"代码中最好考虑这些异常情况，但题目的测试数据中应该没有异常情况的数据，所以我就没有加了。",-1),O=n("p",null,[n("strong",null,"但是要知道会有这些异常，如果是现场面试中，一定要考虑到！")],-1),U={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},$=p(`<div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
class Solution {
private:
    const string letterMap[10] = {
        &quot;&quot;, // 0
        &quot;&quot;, // 1
        &quot;abc&quot;, // 2
        &quot;def&quot;, // 3
        &quot;ghi&quot;, // 4
        &quot;jkl&quot;, // 5
        &quot;mno&quot;, // 6
        &quot;pqrs&quot;, // 7
        &quot;tuv&quot;, // 8
        &quot;wxyz&quot;, // 9
    };
public:
    vector&lt;string&gt; result;
    string s;
    void backtracking(const string&amp; digits, int index) {
        if (index == digits.size()) {
            result.push_back(s);
            return;
        }
        int digit = digits[index] - &#39;0&#39;;        // 将index指向的数字转为int
        string letters = letterMap[digit];      // 取数字对应的字符集
        for (int i = 0; i &lt; letters.size(); i++) {
            s.push_back(letters[i]);            // 处理
            backtracking(digits, index + 1);    // 递归，注意index+1，一下层要处理下一个数字了
            s.pop_back();                       // 回溯
        }
    }
    vector&lt;string&gt; letterCombinations(string digits) {
        s.clear();
        result.clear();
        if (digits.size() == 0) {
            return result;
        }
        backtracking(digits, 0);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(3^m * 4^n)，其中 m 是对应四个字母的数字个数，n 是对应三个字母的数字个数</li><li>空间复杂度: O(3^m * 4^n)</li></ul><p>一些写法，是把回溯的过程放在递归函数里了，例如如下代码，我可以写成这样：（注意注释中不一样的地方）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二
class Solution {
private:
        const string letterMap[10] = {
            &quot;&quot;, // 0
            &quot;&quot;, // 1
            &quot;abc&quot;, // 2
            &quot;def&quot;, // 3
            &quot;ghi&quot;, // 4
            &quot;jkl&quot;, // 5
            &quot;mno&quot;, // 6
            &quot;pqrs&quot;, // 7
            &quot;tuv&quot;, // 8
            &quot;wxyz&quot;, // 9
        };
public:
    vector&lt;string&gt; result;
    void getCombinations(const string&amp; digits, int index, const string&amp; s) { // 注意参数的不同
        if (index == digits.size()) {
            result.push_back(s);
            return;
        }
        int digit = digits[index] - &#39;0&#39;;
        string letters = letterMap[digit];
        for (int i = 0; i &lt; letters.size(); i++) {
            getCombinations(digits, index + 1, s + letters[i]);  // 注意这里的不同
        }
    }
    vector&lt;string&gt; letterCombinations(string digits) {
        result.clear();
        if (digits.size() == 0) {
            return result;
        }
        getCombinations(digits, 0, &quot;&quot;);
        return result;

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),G={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E9%80%92%E5%BD%92%E5%B8%A6%E7%9D%80%E5%9B%9E%E6%BA%AF.html",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,"所以大家可以按照版本一来写就可以了。",-1),K=n("h2",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),s(" 总结")],-1),Q={href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"},X=p(`<p>其实本题不算难，但也处处是细节，大家还要自己亲自动手写一写。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {

    //设置全局列表存储最后的结果
    List&lt;String&gt; list = new ArrayList&lt;&gt;();

    public List&lt;String&gt; letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return list;
        }
        //初始对应所有的数字，为了直接对应2-9，新增了两个无效的字符串&quot;&quot;
        String[] numString = {&quot;&quot;, &quot;&quot;, &quot;abc&quot;, &quot;def&quot;, &quot;ghi&quot;, &quot;jkl&quot;, &quot;mno&quot;, &quot;pqrs&quot;, &quot;tuv&quot;, &quot;wxyz&quot;};
        //迭代处理
        backTracking(digits, numString, 0);
        return list;

    }

    //每次迭代获取一个字符串，所以会设计大量的字符串拼接，所以这里选择更为高效的 StringBuilder
    StringBuilder temp = new StringBuilder();

    //比如digits如果为&quot;23&quot;,num 为0，则str表示2对应的 abc
    public void backTracking(String digits, String[] numString, int num) {
        //遍历全部一次记录一次得到的字符串
        if (num == digits.length()) {
            list.add(temp.toString());
            return;
        }
        //str 表示当前num对应的字符串
        String str = numString[digits.charAt(num) - &#39;0&#39;];
        for (int i = 0; i &lt; str.length(); i++) {
            temp.append(str.charAt(i));
            //c
            backTracking(digits, numString, num + 1);
            //剔除末尾的继续尝试
            temp.deleteCharAt(temp.length() - 1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>回溯</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letterMap <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 0</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 1</span>
            <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 2</span>
            <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 3</span>
            <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 4</span>
            <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 5</span>
            <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 6</span>
            <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 7</span>
            <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 8</span>
            <span class="token string">&quot;wxyz&quot;</span>  <span class="token comment"># 9</span>
        <span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>s<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        digit <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment"># 将索引处的数字转换为整数</span>
        letters <span class="token operator">=</span> self<span class="token punctuation">.</span>letterMap<span class="token punctuation">[</span>digit<span class="token punctuation">]</span>    <span class="token comment"># 获取对应的字符集</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>letters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>s <span class="token operator">+=</span> letters<span class="token punctuation">[</span>i<span class="token punctuation">]</span>    <span class="token comment"># 处理字符</span>
            self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>    <span class="token comment"># 递归调用，注意索引加1，处理下一个数字</span>
            self<span class="token punctuation">.</span>s <span class="token operator">=</span> self<span class="token punctuation">.</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>    <span class="token comment"># 回溯，删除最后添加的字符</span>
    
    <span class="token keyword">def</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>result
        self<span class="token punctuation">.</span>backtracking<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>result

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯精简（版本一）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letterMap <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 0</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 1</span>
            <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 2</span>
            <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 3</span>
            <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 4</span>
            <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 5</span>
            <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 6</span>
            <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 7</span>
            <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 8</span>
            <span class="token string">&quot;wxyz&quot;</span>  <span class="token comment"># 9</span>
        <span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">getCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> index<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        digit <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        letters <span class="token operator">=</span> self<span class="token punctuation">.</span>letterMap<span class="token punctuation">[</span>digit<span class="token punctuation">]</span>
        <span class="token keyword">for</span> letter <span class="token keyword">in</span> letters<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> s <span class="token operator">+</span> letter<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>result
        self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>result

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯精简（版本二）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letterMap <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 0</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 1</span>
            <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 2</span>
            <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 3</span>
            <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 4</span>
            <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 5</span>
            <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 6</span>
            <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 7</span>
            <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 8</span>
            <span class="token string">&quot;wxyz&quot;</span>  <span class="token comment"># 9</span>
        <span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">getCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> index<span class="token punctuation">,</span> s<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        digit <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        letters <span class="token operator">=</span> self<span class="token punctuation">.</span>letterMap<span class="token punctuation">[</span>digit<span class="token punctuation">]</span>
        <span class="token keyword">for</span> letter <span class="token keyword">in</span> letters<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> s <span class="token operator">+</span> letter<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯优化使用列表</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letterMap <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 0</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 1</span>
            <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 2</span>
            <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 3</span>
            <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 4</span>
            <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 5</span>
            <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 6</span>
            <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 7</span>
            <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 8</span>
            <span class="token string">&quot;wxyz&quot;</span>  <span class="token comment"># 9</span>
        <span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">getCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> index<span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        digit <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        letters <span class="token operator">=</span> self<span class="token punctuation">.</span>letterMap<span class="token punctuation">[</span>digit<span class="token punctuation">]</span>
        <span class="token keyword">for</span> letter <span class="token keyword">in</span> letters<span class="token punctuation">:</span>
            path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>letter<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digits<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        self<span class="token punctuation">.</span>getCombinations<span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><p>主要在于递归中传递下一个数字</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
    m <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>digits <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    m <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wxyz&quot;</span><span class="token punctuation">}</span>
    path<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> digits <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>digits <span class="token builtin">string</span><span class="token punctuation">,</span> start <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//终止条件，字符串长度等于digits的长度</span>
        tmp <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    digit <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 将index指向的数字转为int（确定下一个数字）</span>
    str <span class="token operator">:=</span> m<span class="token punctuation">[</span>digit<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>   <span class="token comment">// 取数字对应的字符集（注意和map中的对应）</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> start<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
        path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">letterCombinations</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> k <span class="token operator">=</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wxyz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> map<span class="token punctuation">[</span>digits<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> v <span class="token keyword">of</span> map<span class="token punctuation">[</span>n<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>digits <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> strMap<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">4</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">5</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;l&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">6</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">7</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">8</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">9</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backTracking</span><span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> curIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> route<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curIndex <span class="token operator">===</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> tempArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> strMap<span class="token punctuation">[</span>digits<span class="token punctuation">[</span>curIndex<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">=</span> tempArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backTracking</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> curIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            route<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>const map: [&amp;str; 10] = [
    &quot;&quot;, &quot;&quot;, &quot;abc&quot;, &quot;def&quot;, &quot;ghi&quot;, &quot;jkl&quot;, &quot;mno&quot;, &quot;pqrs&quot;, &quot;tuv&quot;, &quot;wxyz&quot;,
];
impl Solution {
    fn back_trace(result: &amp;mut Vec&lt;String&gt;, s: &amp;mut String, digits: &amp;String, index: usize) {
        let len = digits.len();
        if len == index {
            result.push(s.to_string());
            return;
        }
        let digit = (digits.as_bytes()[index] - b&#39;0&#39;) as usize;
        for i in map[digit].chars() {
            s.push(i);
            Self::back_trace(result, s, digits, index + 1);
            s.pop();
        }
    }
    pub fn letter_combinations(digits: String) -&gt; Vec&lt;String&gt; {
        if digits.is_empty() {
            return vec![];
        }
        let mut res = vec![];
        let mut s = String::new();
        Self::back_trace(&amp;mut res, &amp;mut s, &amp;digits, 0);
        res
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> path<span class="token punctuation">;</span>
<span class="token keyword">int</span> pathTop<span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> result<span class="token punctuation">;</span>
<span class="token keyword">int</span> resultTop<span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token operator">*</span> letterMap<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//0</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//1</span>
        <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token comment">//2</span>
        <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span> <span class="token comment">//3</span>
        <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span> <span class="token comment">//4</span>
        <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span> <span class="token comment">//5</span>
        <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span> <span class="token comment">//6</span>
        <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token comment">//7</span>
        <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span> <span class="token comment">//8</span>
        <span class="token string">&quot;wxyz&quot;</span><span class="token punctuation">,</span> <span class="token comment">//9</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">backTracking</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> digits<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//若当前下标等于digits数组长度</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//复制digits数组，因为最后要多存储一个0，所以数组长度要+1</span>
        <span class="token keyword">char</span><span class="token operator">*</span> tempString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempString<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//char数组最后要以0结尾</span>
        tempString<span class="token punctuation">[</span><span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        result<span class="token punctuation">[</span>resultTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tempString<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将字符数字转换为真的数字</span>
    <span class="token keyword">int</span> digit <span class="token operator">=</span> digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//找到letterMap中对应的字符串</span>
    <span class="token keyword">char</span><span class="token operator">*</span> letters <span class="token operator">=</span> letterMap<span class="token punctuation">[</span>digit<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span>letters<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        path<span class="token punctuation">[</span>pathTop<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> letters<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//递归，处理下一层数字</span>
        <span class="token function">backTracking</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pathTop<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token function">letterCombinations</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> digits<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//初始化path和result</span>
    path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token operator">*</span>returnSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//若digits数组中元素个数为0，返回空集</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> 
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    pathTop <span class="token operator">=</span> resultTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">backTracking</span><span class="token punctuation">(</span>digits<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>returnSize <span class="token operator">=</span> resultTop<span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">letterCombinations</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> digits<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// 按键与字母串映射</span>
    <span class="token keyword">let</span> letterMap <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;abc&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;def&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">&quot;ghi&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;jkl&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;mno&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">&quot;pqrs&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;tuv&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;wxyz&quot;</span></span>
    <span class="token punctuation">]</span>
    <span class="token comment">// 把输入的按键字符串转成Int数组</span>
    <span class="token keyword">let</span> baseCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;0&quot;</span></span> <span class="token keyword">as</span> <span class="token class-name">Character</span><span class="token punctuation">)</span><span class="token punctuation">.</span>asciiValue<span class="token operator">!</span>
    <span class="token keyword">let</span> digits <span class="token operator">=</span> digits<span class="token punctuation">.</span>map <span class="token punctuation">{</span> c <span class="token keyword">in</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> code <span class="token operator">=</span> c<span class="token punctuation">.</span>asciiValue <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>code <span class="token operator">-</span> baseCode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">.</span>filter <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token short-argument">$0</span> <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token punctuation">}</span>
    <span class="token keyword">guard</span> <span class="token operator">!</span>digits<span class="token punctuation">.</span>isEmpty <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span>
    <span class="token keyword">func</span> <span class="token function-definition function">backtracking</span><span class="token punctuation">(</span>index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 结束条件：收集结果</span>
        <span class="token keyword">if</span> index <span class="token operator">==</span> digits<span class="token punctuation">.</span>count <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 遍历当前按键对应的字母串</span>
        <span class="token keyword">let</span> letters <span class="token operator">=</span> letterMap<span class="token punctuation">[</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> letter <span class="token keyword">in</span> letters <span class="token punctuation">{</span>
            s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span> <span class="token comment">// 处理</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>index<span class="token punctuation">:</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 递归，记得+1</span>
            s<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 回溯</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>index<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> letterCombinations<span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>digits <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">.</span>toList <span class="token comment">// 如果参数为空，返回空结果集的List形式</span>
    <span class="token keyword">var</span> path <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ListBuffer<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 数字和字符的映射关系</span>
    <span class="token keyword">val</span> map <span class="token operator">=</span> Array<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ghi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pqrs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tuv&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wxyz&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> backtracking<span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> digits<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">.</span>mkString<span class="token punctuation">)</span>  <span class="token comment">// mkString语法：将数组类型直接转换为字符串</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> digit <span class="token operator">=</span> digits<span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span> <span class="token comment">// 这里使用toInt会报错！必须 -&#39;0&#39;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until map<span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>map<span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        backtracking<span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        path <span class="token operator">=</span> path<span class="token punctuation">.</span>take<span class="token punctuation">(</span>path<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    backtracking<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    result<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">letter_combinations</span></span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span>
  letter_map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;a&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;b&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;c&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;d&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;e&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;f&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;g&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;h&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;i&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">5</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;j&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;k&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;l&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">6</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;m&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;n&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;o&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">7</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;p&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;q&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;r&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;s&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">8</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;t&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;u&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;v&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">9</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;w&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;x&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;y&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;z&#39;</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  
  result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">return</span> result <span class="token keyword">if</span> digits<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span>

  backtracking<span class="token punctuation">(</span>result<span class="token punctuation">,</span> letter_map<span class="token punctuation">,</span> digits<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  result
<span class="token keyword">end</span>

<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">backtracking</span></span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> letter_map<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> path<span class="token punctuation">,</span> index<span class="token punctuation">)</span> 
  <span class="token keyword">if</span> path<span class="token punctuation">.</span>size <span class="token operator">==</span> digits<span class="token punctuation">.</span>size
    result <span class="token operator">&lt;&lt;</span> path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token keyword">end</span>

  hash<span class="token punctuation">[</span>digits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>to_i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>chr<span class="token operator">|</span>
    path <span class="token operator">&lt;&lt;</span> chr
    <span class="token comment">#index + 1代表处理下一个数字</span>
    backtracking<span class="token punctuation">(</span>result<span class="token punctuation">,</span> letter_map<span class="token punctuation">,</span> digits<span class="token punctuation">,</span> path<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">#回溯，撤销处理过的数字</span>
    path<span class="token punctuation">.</span>pop
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public class Solution
{
    public IList&lt;string&gt; res = new List&lt;string&gt;();
    public string s;
    public string[] letterMap = new string[10] { &quot;&quot;, &quot;&quot;, &quot;abc&quot;, &quot;def&quot;, &quot;ghi&quot;, &quot;jkl&quot;, &quot;mno&quot;, &quot;pqrs&quot;, &quot;tuv&quot;, &quot;wxyz&quot; };
    public IList&lt;string&gt; LetterCombinations(string digits)
    {
        if (digits.Length == 0)
            return res;
        BackTracking(digits, 0);
        return res;
    }
    public void BackTracking(string digits, int index)
    {
        if (index == digits.Length)
        {
            res.Add(s);
            return;
        }
        int digit = digits[index] - &#39;0&#39;;
        string letters = letterMap[digit];
        for (int i = 0; i &lt; letters.Length; i++)
        {
            s += letters[i];
            BackTracking(digits, index + 1);
            s = s.Substring(0, s.Length - 1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function Y(Z,nn){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),k,d,v,m,b,g,h,n("p",null,[n("strong",null,[n("a",q,[s("《代码随想录》算法视频公开课"),t(a)]),s("：："),n("a",f,[s("还得用回溯算法！| LeetCode：17.电话号码的字母组合"),t(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),y,w,_,n("p",null,[s("大家应该感觉出和"),n("a",x,[s("77.组合"),t(a)]),s("遇到的一样的问题，就是这for循环的层数如何写出来，此时又是回溯法登场的时候了。")]),E,n("p",null,[s("对于回溯法还不了解的同学看这篇："),n("a",S,[s("关于回溯算法，你该了解这些！"),t(a)])]),B,C,z,j,I,A,M,n("p",null,[s("注意这个index可不是 "),n("a",T,[s("77.组合"),t(a)]),s("和"),n("a",L,[s("216.组合总和III"),t(a)]),s("中的startIndex了。")]),P,n("p",null,[n("strong",null,[s("注意这里for循环，可不像是在"),n("a",V,[s("回溯算法：求组合问题！"),t(a)]),s("和"),n("a",F,[s("回溯算法：求组合总和！"),t(a)]),s("中从startIndex开始遍历的")]),s("。")]),n("p",null,[n("strong",null,[s("因为本题每一个数字代表的是不同集合，也就是求不同集合之间的组合，而"),n("a",J,[s("77. 组合"),t(a)]),s("和"),n("a",R,[s("216.组合总和III"),t(a)]),s("都是求同一个集合中的组合！")])]),N,D,O,n("p",null,[s("关键地方都讲完了，按照"),n("a",U,[s("关于回溯算法，你该了解这些！"),t(a)]),s("中的回溯法模板，不难写出如下C++代码：")]),$,n("p",null,[s("我不建议把回溯藏在递归的参数里这种写法，很不直观，我在"),n("a",G,[s("二叉树：以为使用了递归，其实还隐藏着回溯"),t(a)]),s("这篇文章中也深度分析了，回溯隐藏在了哪里。")]),H,K,n("p",null,[s("本篇将题目的三个要点一一列出，并重点强调了和前面讲解过的"),n("a",Q,[s("77. 组合"),t(a)]),s("和"),n("a",W,[s("216.组合总和III"),t(a)]),s("的区别，本题是多个集合求组合，所以在回溯的搜索过程中，都有一些细节需要注意的。")]),X])}const an=e(l,[["render",Y],["__file","0017.dianhuahaomadezimuzuhe.html.vue"]]);export{an as default};
