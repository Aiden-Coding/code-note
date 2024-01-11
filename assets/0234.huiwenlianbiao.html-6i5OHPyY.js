import{_ as e,r as p,o as t,c as o,a as n,b as s,d as l,e as c}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_234-回文链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_234-回文链表","aria-hidden":"true"},"#"),s(" 234.回文链表")],-1),r={href:"https://leetcode.cn/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>请判断一个链表是否为回文链表。</p><p>示例 1:</p><ul><li>输入: 1-&gt;2</li><li>输出: false</li></ul><p>示例 2:</p><ul><li>输入: 1-&gt;2-&gt;2-&gt;1</li><li>输出: true</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><h3 id="数组模拟" tabindex="-1"><a class="header-anchor" href="#数组模拟" aria-hidden="true">#</a> 数组模拟</h3><p>最直接的想法，就是把链表装成数组，然后再判断是否回文。</p><p>代码也比较简单。如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool isPalindrome(ListNode* head) {
        vector&lt;int&gt; vec;
        ListNode* cur  = head;
        while (cur) {
            vec.push_back(cur-&gt;val);
            cur = cur-&gt;next;
        }
        // 比较数组回文
        for (int i = 0, j = vec.size() - 1; i &lt; j; i++, j--) {
            if (vec[i] != vec[j]) return false;
        }
        return true;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码可以在优化，就是先求出链表长度，然后给定vector的初始长度，这样避免vector每次添加节点重新开辟空间</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool isPalindrome(ListNode* head) {

        ListNode* cur  = head;
        int length = 0;
        while (cur) {
            length++;
            cur = cur-&gt;next;
        }
        vector&lt;int&gt; vec(length, 0); // 给定vector的初始长度，这样避免vector每次添加节点重新开辟空间
        cur = head;
        int index = 0;
        while (cur) {
            vec[index++] = cur-&gt;val;
            cur = cur-&gt;next;
        }
        // 比较数组回文
        for (int i = 0, j = vec.size() - 1; i &lt; j; i++, j--) {
            if (vec[i] != vec[j]) return false;
        }
        return true;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反转后半部分链表" tabindex="-1"><a class="header-anchor" href="#反转后半部分链表" aria-hidden="true">#</a> 反转后半部分链表</h3><p>分为如下几步：</p><ul><li>用快慢指针，快指针有两步，慢指针走一步，快指针遇到终止位置时，慢指针就在链表中间位置</li><li>同时用pre记录慢指针指向节点的前一个节点，用来分割链表</li><li>将链表分为前后均等两部分，如果链表长度是奇数，那么后半部分多一个节点</li><li>将后半部分反转 ，得cur2，前半部分为cur1</li><li>按照cur1的长度，一次比较cur1和cur2的节点数值</li></ul><p>如图所示：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/234.回文链表.png" alt="img"></p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (head == nullptr || head-&gt;next == nullptr) return true;
        ListNode* slow = head; // 慢指针，找到链表中间分位置，作为分割
        ListNode* fast = head;
        ListNode* pre = head; // 记录慢指针的前一个节点，用来分割链表
        while (fast &amp;&amp; fast-&gt;next) {
            pre = slow;
            slow = slow-&gt;next;
            fast = fast-&gt;next-&gt;next;
        }
        pre-&gt;next = nullptr; // 分割链表

        ListNode* cur1 = head;  // 前半部分
        ListNode* cur2 = reverseList(slow); // 反转后半部分，总链表长度如果是奇数，cur2比cur1多一个节点

        // 开始两个链表的比较
        while (cur1) {
            if (cur1-&gt;val != cur2-&gt;val) return false;
            cur1 = cur1-&gt;next;
            cur2 = cur2-&gt;next;
        }
        return true;
    }
    // 反转链表
    ListNode* reverseList(ListNode* head) {
        ListNode* temp; // 保存cur的下一个节点
        ListNode* cur = head;
        ListNode* pre = nullptr;
        while(cur) {
            temp = cur-&gt;next;  // 保存一下 cur的下一个节点，因为接下来要改变cur-&gt;next
            cur-&gt;next = pre; // 翻转操作
            // 更新pre 和 cur指针
            pre = cur;
            cur = temp;
        }
        return pre;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 方法一，使用数组</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 统计链表长度</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            len<span class="token operator">++</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 将元素加到数组之中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 比较回文</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> res<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法二，快慢指针</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果为空或者仅有一个节点，返回true</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre <span class="token operator">=</span> slow<span class="token punctuation">;</span>  <span class="token comment">// 记录slow的前一个结点</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  <span class="token comment">// 分割两个链表</span>

        <span class="token comment">// 前半部分</span>
        <span class="token class-name">ListNode</span> cur1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 后半部分。这里使用了反转链表</span>
        <span class="token class-name">ListNode</span> cur2 <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur1<span class="token punctuation">.</span>val <span class="token operator">!=</span> cur2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            <span class="token comment">// 注意要移动两个结点</span>
            cur1 <span class="token operator">=</span> cur1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur2 <span class="token operator">=</span> cur2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 反转链表</span>
        <span class="token class-name">ListNode</span> tmp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#数组模拟</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token builtin">list</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> head<span class="token punctuation">:</span> 
            <span class="token builtin">list</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            head<span class="token operator">=</span>head<span class="token punctuation">.</span><span class="token builtin">next</span>
        l<span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
        <span class="token keyword">while</span> l<span class="token operator">&lt;=</span>r<span class="token punctuation">:</span> 
            <span class="token keyword">if</span> <span class="token builtin">list</span><span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token builtin">list</span><span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            l<span class="token operator">+=</span><span class="token number">1</span>
            r<span class="token operator">-=</span><span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>   
      
<span class="token comment">#反转后半部分链表</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        fast <span class="token operator">=</span> slow <span class="token operator">=</span> head

        <span class="token comment"># find mid point which including (first) mid point into the first half linked list</span>
        <span class="token keyword">while</span> fast <span class="token keyword">and</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
        node <span class="token operator">=</span> <span class="token boolean">None</span>

        <span class="token comment"># reverse second half linked list</span>
        <span class="token keyword">while</span> slow<span class="token punctuation">:</span>
            slow<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">,</span> slow<span class="token punctuation">,</span> node <span class="token operator">=</span> node<span class="token punctuation">,</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">,</span> slow

        <span class="token comment"># compare reversed and original half; must maintain reversed linked list is shorter than 1st half</span>
        <span class="token keyword">while</span> node<span class="token punctuation">:</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>val <span class="token operator">!=</span> head<span class="token punctuation">.</span>val<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token builtin">next</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token comment">//方法一，使用数组</span>
<span class="token keyword">func</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">bool</span><span class="token punctuation">{</span>
    <span class="token comment">//计算切片长度，避免切片频繁扩容</span>
    cur<span class="token punctuation">,</span>ln<span class="token operator">:=</span>head<span class="token punctuation">,</span><span class="token number">0</span>
    <span class="token keyword">for</span> cur<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        ln<span class="token operator">++</span>
        cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    nums<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span>ln<span class="token punctuation">)</span>
    index<span class="token operator">:=</span><span class="token number">0</span>
    <span class="token keyword">for</span> head<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">=</span>head<span class="token punctuation">.</span>Val
        index<span class="token operator">++</span>
        head<span class="token operator">=</span>head<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token comment">//比较回文切片</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">,</span>ln<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>j<span class="token punctuation">;</span>i<span class="token punctuation">,</span>j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法二，快慢指针</span>
<span class="token keyword">func</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head<span class="token operator">==</span><span class="token boolean">nil</span><span class="token operator">&amp;&amp;</span>head<span class="token punctuation">.</span>Next<span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
    <span class="token comment">//慢指针，找到链表中间分位置，作为分割</span>
    slow<span class="token operator">:=</span>head
    fast<span class="token operator">:=</span>head
    <span class="token comment">//记录慢指针的前一个节点，用来分割链表</span>
    pre<span class="token operator">:=</span>head
    <span class="token keyword">for</span> fast<span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>Next<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        pre<span class="token operator">=</span>slow
        slow<span class="token operator">=</span>slow<span class="token punctuation">.</span>Next
        fast<span class="token operator">=</span>fast<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token comment">//分割链表</span>
    pre<span class="token punctuation">.</span>Next<span class="token operator">=</span><span class="token boolean">nil</span>
    <span class="token comment">//前半部分</span>
    cur1<span class="token operator">:=</span>head
    <span class="token comment">//反转后半部分，总链表长度如果是奇数，cur2比cur1多一个节点</span>
    cur2<span class="token operator">:=</span><span class="token function">ReverseList</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span>

    <span class="token comment">//开始两个链表的比较</span>
    <span class="token keyword">for</span> cur1<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> cur1<span class="token punctuation">.</span>Val<span class="token operator">!=</span>cur2<span class="token punctuation">.</span>Val<span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
        cur1<span class="token operator">=</span>cur1<span class="token punctuation">.</span>Next
        cur2<span class="token operator">=</span>cur2<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">//反转链表</span>
<span class="token keyword">func</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode<span class="token punctuation">{</span>
    <span class="token keyword">var</span> pre <span class="token operator">*</span>ListNode
    cur<span class="token operator">:=</span>head
    <span class="token keyword">for</span> cur<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        tmp<span class="token operator">:=</span>cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next<span class="token operator">=</span>pre
        pre<span class="token operator">=</span>cur
        cur<span class="token operator">=</span>tmp
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token parameter">head</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">// 反转链表</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果为空或者仅有一个节点，返回true</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        pre <span class="token operator">=</span> slow<span class="token punctuation">;</span> <span class="token comment">// 记录slow的前一个结点</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 分割两个链表</span>
    <span class="token comment">// 前半部分</span>
    <span class="token keyword">let</span> cur1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 后半部分。这里使用了反转链表</span>
    <span class="token keyword">let</span> cur2 <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur1<span class="token punctuation">.</span>val <span class="token operator">!=</span> cur2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 注意要移动两个结点</span>
        cur1 <span class="token operator">=</span> cur1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur2 <span class="token operator">=</span> cur2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>数组模拟</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> helperArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        helperArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> left<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> helperArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>helperArr<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">!==</span> helperArr<span class="token punctuation">[</span>right<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>反转后半部分链表</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> fastNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">,</span>
        slowNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">,</span>
        preNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fastNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preNode <span class="token operator">=</span> slowNode<span class="token punctuation">;</span>
        slowNode <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">;</span>
        fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>slowNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur1<span class="token punctuation">.</span>val <span class="token operator">!==</span> cur2<span class="token operator">!</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        cur1 <span class="token operator">=</span> cur1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur2 <span class="token operator">=</span> cur2<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">,</span>
        preNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tempNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> preNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function k(v,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),l(a)])]),d])}const h=e(i,[["render",k],["__file","0234.huiwenlianbiao.html.vue"]]);export{h as default};
