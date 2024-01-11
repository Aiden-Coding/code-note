import{_ as e,r as t,o as p,c as o,a as n,b as s,d as c,e as l}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_143-重排链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_143-重排链表","aria-hidden":"true"},"#"),s(" 143.重排链表")],-1),r={href:"https://leetcode.cn/problems/reorder-list/submissions/",target:"_blank",rel:"noopener noreferrer"},d=l(`<p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210726160122.png" alt=""></p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本篇将给出三种C++实现的方法</p><ul><li>数组模拟</li><li>双向队列模拟</li><li>直接分割链表</li></ul><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>把链表放进数组中，然后通过双指针法，一前一后，来遍历数组，构造链表。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void reorderList(ListNode* head) {
        vector&lt;ListNode*&gt; vec;
        ListNode* cur = head;
        if (cur == nullptr) return;
        while(cur != nullptr) {
            vec.push_back(cur);
            cur = cur-&gt;next;
        }
        cur = head;
        int i = 1;
        int j = vec.size() - 1;  // i j为之前前后的双指针
        int count = 0; // 计数，偶数去后面，奇数取前面
        while (i &lt;= j) {
            if (count % 2 == 0) {
                cur-&gt;next = vec[j];
                j--;
            } else {
                cur-&gt;next = vec[i];
                i++;
            }
            cur = cur-&gt;next;
            count++;
        }
        cur-&gt;next = nullptr; // 注意结尾
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>把链表放进双向队列，然后通过双向队列一前一后弹出数据，来构造新的链表。这种方法比操作数组容易一些，不用双指针模拟一前一后了</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void reorderList(ListNode* head) {
        deque&lt;ListNode*&gt; que;
        ListNode* cur = head;
        if (cur == nullptr) return;

        while(cur-&gt;next != nullptr) {
            que.push_back(cur-&gt;next);
            cur = cur-&gt;next;
        }

        cur = head;
        int count = 0; // 计数，偶数去后面，奇数取前面
        ListNode* node;
        while(que.size()) {
            if (count % 2 == 0) {
                node = que.back();
                que.pop_back();
            } else {
                node = que.front();
                que.pop_front();
            }
            count++;
            cur-&gt;next = node;
            cur = cur-&gt;next;
        }
        cur-&gt;next = nullptr; // 注意结尾
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三</h3><p>将链表分割成两个链表，然后把第二个链表反转，之后在通过两个链表拼接成新的链表。</p><p>如图：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/143.重排链表.png" alt="img"></p><p>这种方法，比较难，平均切割链表，看上去很简单，真正代码写的时候有很多细节，同时两个链表最后拼装整一个新的链表也有一些细节需要注意！</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    // 反转链表
    ListNode* reverseList(ListNode* head) {
        ListNode* temp; // 保存cur的下一个节点
        ListNode* cur = head;
        ListNode* pre = NULL;
        while(cur) {
            temp = cur-&gt;next;  // 保存一下 cur的下一个节点，因为接下来要改变cur-&gt;next
            cur-&gt;next = pre; // 翻转操作
            // 更新pre 和 cur指针
            pre = cur;
            cur = temp;
        }
        return pre;
    }

public:
    void reorderList(ListNode* head) {
        if (head == nullptr) return;
        // 使用快慢指针法，将链表分成长度均等的两个链表head1和head2
        // 如果总链表长度为奇数，则head1相对head2多一个节点
        ListNode* fast = head;
        ListNode* slow = head;
        while (fast &amp;&amp; fast-&gt;next &amp;&amp; fast-&gt;next-&gt;next) {
            fast = fast-&gt;next-&gt;next;
            slow = slow-&gt;next;
        }
        ListNode* head1 = head;
        ListNode* head2;
        head2 = slow-&gt;next;
        slow-&gt;next = nullptr;

        // 对head2进行翻转
        head2 = reverseList(head2);

        // 将head1和head2交替生成新的链表head
        ListNode* cur1 = head1;
        ListNode* cur2 = head2;
        ListNode* cur = head;
        cur1 = cur1-&gt;next;
        int count = 0; // 偶数取head2的元素，奇数取head1的元素
        while (cur1 &amp;&amp; cur2) {
            if (count % 2 == 0) {
                cur-&gt;next = cur2;
                cur2 = cur2-&gt;next;
            } else {
                cur-&gt;next = cur1;
                cur1 = cur1-&gt;next;
            }
            count++;
            cur = cur-&gt;next;
        }
        if (cur2 != nullptr) { // 处理结尾
            cur-&gt;next = cur2;
        }
        if (cur1 != nullptr) {
            cur-&gt;next = cur1;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token comment">// 方法一 Java实现，使用数组存储节点</span>
 <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reorderList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 双指针的做法</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// ArrayList底层是数组，可以使用下标随机访问</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> head<span class="token punctuation">;</span>  <span class="token comment">// 重新回到头部</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 注意左边是从1开始</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 偶数</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
                r<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 奇数</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
                l<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 每一次指针都需要移动</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 注意结尾要结束一波</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 方法二：使用双端队列，简化了数组的操作，代码相对于前者更简洁（避免一些边界条件）</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reorderList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用双端队列的方法来解决</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> de <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里是取head的下一个节点，head不需要再入队了，避免造成重复</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>  
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            de<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> head<span class="token punctuation">;</span>  <span class="token comment">// 回到头部</span>

        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>de<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 偶数，取出队列右边尾部的值</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> de<span class="token punctuation">.</span><span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 奇数，取出队列左边头部的值</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> de<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cur  <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法三</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReorderList</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reorderList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">//求出中点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//right就是右半部分 12345 就是45  1234 就是34</span>
        <span class="token class-name">ListNode</span> right <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">//断开左部分和右部分</span>
        slow<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//反转右部分 right就是反转后右部分的起点</span>
        right <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//左部分的起点</span>
        <span class="token class-name">ListNode</span> left <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">//进行左右部分来回连接 </span>
        <span class="token comment">//这里左部分的节点个数一定大于等于右部分的节点个数 因此只判断right即可</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> curLeft <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            left<span class="token punctuation">.</span>next <span class="token operator">=</span> right<span class="token punctuation">;</span>
            left <span class="token operator">=</span> curLeft<span class="token punctuation">;</span>

            <span class="token class-name">ListNode</span> curRight <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            right<span class="token punctuation">.</span>next <span class="token operator">=</span> left<span class="token punctuation">;</span>
            right <span class="token operator">=</span> curRight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> headNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> headNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            headNode<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> headNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 方法二 双向队列</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Do not return anything, modify head in-place instead.
        &quot;&quot;&quot;</span>
        d <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">)</span>
        tmp <span class="token operator">=</span> head
        <span class="token keyword">while</span> tmp<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span> <span class="token comment"># 链表除了首元素全部加入双向队列</span>
            d<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tmp<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
            tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span><span class="token builtin">next</span>
        tmp <span class="token operator">=</span> head
        <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 一后一前加入链表</span>
            tmp<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> d<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">:</span>
                tmp<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> d<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
                tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span><span class="token builtin">next</span>
        tmp<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 尾部置空</span>
 
<span class="token comment"># 方法三 反转链表</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">None</span> <span class="token keyword">or</span> head<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        slow<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> head
        <span class="token keyword">while</span> fast <span class="token keyword">and</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
        right <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token comment"># 分割右半边</span>
        slow<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 切断</span>
        right <span class="token operator">=</span> self<span class="token punctuation">.</span>reverseList<span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token comment">#反转右半边</span>
        left <span class="token operator">=</span> head
        <span class="token comment"># 左半边一定比右半边长, 因此判断右半边即可</span>
        <span class="token keyword">while</span> right<span class="token punctuation">:</span>
            curLeft <span class="token operator">=</span> left<span class="token punctuation">.</span><span class="token builtin">next</span>
            left<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> right
            left <span class="token operator">=</span> curLeft

            curRight <span class="token operator">=</span> right<span class="token punctuation">.</span><span class="token builtin">next</span>
            right<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> left
            right <span class="token operator">=</span> curRight


    <span class="token keyword">def</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        cur <span class="token operator">=</span> head   
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token operator">!=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token comment"># 保存一下cur的下一个节点</span>
            cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre <span class="token comment"># 反转</span>
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> temp
        <span class="token keyword">return</span> pre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># 方法三 分割链表
<span class="token keyword">func</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">var</span> slow<span class="token operator">=</span>head
    <span class="token keyword">var</span> fast<span class="token operator">=</span>head
    <span class="token keyword">for</span> fast<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token operator">&amp;&amp;</span>fast<span class="token punctuation">.</span>Next<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        slow<span class="token operator">=</span>slow<span class="token punctuation">.</span>Next
        fast<span class="token operator">=</span>fast<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>  <span class="token comment">//双指针将链表分为左右两部分</span>
    <span class="token keyword">var</span> right <span class="token operator">=</span><span class="token function">new</span><span class="token punctuation">(</span>ListNode<span class="token punctuation">)</span>
    <span class="token keyword">for</span> slow<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        temp<span class="token operator">:=</span>slow<span class="token punctuation">.</span>Next
        slow<span class="token punctuation">.</span>Next<span class="token operator">=</span>right<span class="token punctuation">.</span>Next
        right<span class="token punctuation">.</span>Next<span class="token operator">=</span>slow
        slow<span class="token operator">=</span>temp
    <span class="token punctuation">}</span>  <span class="token comment">//翻转链表右半部分</span>
    right<span class="token operator">=</span>right<span class="token punctuation">.</span>Next  <span class="token comment">//right为反转后得右半部分</span>
    h<span class="token operator">:=</span>head
    <span class="token keyword">for</span> right<span class="token punctuation">.</span>Next<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        temp<span class="token operator">:=</span>right<span class="token punctuation">.</span>Next
        right<span class="token punctuation">.</span>Next<span class="token operator">=</span>h<span class="token punctuation">.</span>Next
        h<span class="token punctuation">.</span>Next<span class="token operator">=</span>right
        h<span class="token operator">=</span>h<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        right<span class="token operator">=</span>temp
    <span class="token punctuation">}</span> <span class="token comment">//将左右两部分重新组合</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一 使用数组存储节点</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tmp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// list是数组，可以使用下标随机访问</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 重新回到头部</span>
    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 注意左边是从1开始</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// even</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
            r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// odd</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 每一次指针都需要移动</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 注意结尾要结束一波</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法二 使用双端队列的方法来解决 js中运行很慢</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tmp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// js数组作为双端队列</span>
    <span class="token keyword">const</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里是取head的下一个节点，head不需要再入队了，避免造成重复</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur <span class="token operator">=</span> head<span class="token punctuation">;</span>  <span class="token comment">// 回到头部</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// even，取出队列右边尾部的值</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// odd, 取出队列左边头部的值</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//方法三 将链表分割成两个链表，然后把第二个链表反转，之后在通过两个链表拼接成新的链表</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tmp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token parameter">head</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> headNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> headNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            headNode<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> headNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">//求出中点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//right就是右半部分 12345 就是45  1234 就是34</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">//断开左部分和右部分</span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">//反转右部分 right就是反转后右部分的起点</span>
    right <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//左部分的起点</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">//进行左右部分来回连接 </span>
    <span class="token comment">//这里左部分的节点个数一定大于等于右部分的节点个数 因此只判断right即可</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curLeft <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        left<span class="token punctuation">.</span>next <span class="token operator">=</span> right<span class="token punctuation">;</span>
        left <span class="token operator">=</span> curLeft<span class="token punctuation">;</span>

        <span class="token keyword">let</span> curRight <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        right<span class="token punctuation">.</span>next <span class="token operator">=</span> left<span class="token punctuation">;</span>
        right <span class="token operator">=</span> curRight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>辅助数组法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> helperArr<span class="token operator">:</span> ListNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        helperArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> node<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> left<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> helperArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> helperArr<span class="token punctuation">[</span>right<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> helperArr<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分割链表法：</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> fastNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">,</span>
        slowNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slowNode <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">;</span>
        fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> head1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 反转后半部分链表</span>
    <span class="token keyword">let</span> head2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>slowNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分割链表</span>
    slowNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    	直接在head1链表上进行插入
        head1 链表长度一定大于或等于head2,
        因此在下面的循环中，只要head2不为null, head1 一定不为null
     */</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> tempNode1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head1<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">,</span>
            tempNode2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head1<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head2<span class="token punctuation">;</span>
        head2<span class="token punctuation">.</span>next <span class="token operator">=</span> tempNode1<span class="token punctuation">;</span>
        head1 <span class="token operator">=</span> tempNode1<span class="token punctuation">;</span>
        head2 <span class="token operator">=</span> tempNode2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">,</span>
        preNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> tempNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> preNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h3><p>方法三：反转链表</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//翻转链表</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span><span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>preNode <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token operator">*</span>curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建tempNode记录curNode-&gt;next（即将被更新）</span>
        <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> tempNode <span class="token operator">=</span> curNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">//将curNode-&gt;next指向preNode</span>
        curNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        <span class="token comment">//更新preNode为curNode</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        <span class="token comment">//curNode更新为原链表中下一个元素</span>
        curNode <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> preNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">reorderList</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//slow用来截取到链表的中间节点(第一个链表的最后节点)，每次循环跳一个节点。fast用来辅助，每次循环跳两个节点</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>fast <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token operator">*</span>slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token operator">-&gt;</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//fast每次跳两个节点</span>
        fast <span class="token operator">=</span> fast<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">//slow每次跳一个节点</span>
        slow <span class="token operator">=</span> slow<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将slow-&gt;next后的节点翻转</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>sndLst <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>slow<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//将第一个链表与第二个链表断开</span>
    slow<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">//因为插入从curNode-&gt;next开始，curNode刚开始已经head。所以fstList要从head-&gt;next开始</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>fstLst <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//当第一个链表和第二个链表中都有节点时循环</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>sndLst <span class="token operator">&amp;&amp;</span> fstLst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//count为奇数，插入fstLst中的节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> fstLst<span class="token punctuation">;</span>
            fstLst <span class="token operator">=</span> fstLst<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">//count为偶数，插入sndList的节点</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            curNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> sndLst<span class="token punctuation">;</span>
            sndLst <span class="token operator">=</span> sndLst<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//设置下一个节点</span>
        curNode <span class="token operator">=</span> curNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">//更新count</span>
        <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//若两个链表fstList和sndLst中还有节点，将其放入链表</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>fstLst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> fstLst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>sndLst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> sndLst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回链表</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),c(a)])]),d])}const h=e(i,[["render",k],["__file","0143.zhongpailianbiao.html.vue"]]);export{h as default};
