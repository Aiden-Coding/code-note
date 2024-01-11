import{_ as t,r as p,o,c as l,a as n,b as s,d as e,e as c}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"链表操作中，可以使用原链表来直接进行删除操作，也可以设置一个虚拟头结点再进行删除操作，接下来看一看哪种方式更方便。")],-1),d=n("h1",{id:"_203-移除链表元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_203-移除链表元素","aria-hidden":"true"},"#"),s(" 203.移除链表元素")],-1),r={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"题意：删除链表中等于给定值 val 的所有节点。",-1),v=n("p",null,"示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]",-1),m=n("p",null,"示例 2： 输入：head = [], val = 1 输出：[]",-1),b=n("p",null,"示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]",-1),h=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),y={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV18B4y1s7R9",target:"_blank",rel:"noopener noreferrer"},w=c(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这里以链表 1 4 2 4 来举例，移除元素4。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210316095351161.png" alt="203_链表删除元素1"></p><p>如果使用C，C++编程语言的话，不要忘了还要从内存中删除这两个移除的节点， 清理节点内存之后如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210316095418280.png" alt="203_链表删除元素2"></p><p><strong>当然如果使用java ，python的话就不用手动管理内存了。</strong></p><p>还要说明一下，就算使用C++来做leetcode，如果移除一个节点之后，没有手动在内存中删除这个节点，leetcode依然也是可以通过的，只不过，内存使用的空间大一些而已，但建议依然要养成手动清理内存的习惯。</p><p>这种情况下的移除操作，就是让节点next指针直接指向下下一个节点就可以了，</p><p>那么因为单链表的特殊性，只能指向下一个节点，刚刚删除的是链表的中第二个，和第四个节点，那么如果删除的是头结点又该怎么办呢？</p><p>这里就涉及如下链表操作的两种方式：</p><ul><li><strong>直接使用原来的链表来进行删除操作。</strong></li><li><strong>设置一个虚拟头结点在进行删除操作。</strong></li></ul><p>来看第一种操作：直接使用原来的链表来进行移除。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021031609544922.png" alt="203_链表删除元素3"></p><p>移除头结点和移除其他节点的操作是不一样的，因为链表的其他节点都是通过前一个节点来移除当前节点，而头结点没有前一个节点。</p><p>所以头结点如何移除呢，其实只要将头结点向后移动一位就可以，这样就从链表中移除了一个头结点。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210316095512470.png" alt="203_链表删除元素4"></p><p>依然别忘将原头结点从内存中删掉。 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210316095543775.png" alt="203_链表删除元素5"></p><p>这样移除了一个头结点，是不是发现，在单链表中移除头结点 和 移除其他节点的操作方式是不一样，其实在写代码的时候也会发现，需要单独写一段逻辑来处理移除头结点的情况。</p><p>那么可不可以 以一种统一的逻辑来移除 链表的节点呢。</p><p>其实<strong>可以设置一个虚拟头结点</strong>，这样原链表的所有节点就都可以按照统一的方式进行移除了。</p><p>来看看如何设置一个虚拟头。依然还是在这个链表中，移除元素1。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210316095619221.png" alt="203_链表删除元素6"></p><p>这里来给链表添加一个虚拟头结点为新的头结点，此时要移除这个旧头结点元素1。</p><p>这样是不是就可以使用和移除链表其他节点的方式统一了呢？</p><p>来看一下，如何移除元素1 呢，还是熟悉的方式，然后从内存中删除元素1。</p><p>最后呢在题目中，return 头结点的时候，别忘了 <code>return dummyNode-&gt;next;</code>， 这才是新的头结点</p><p><strong>直接使用原来的链表来进行移除节点操作：</strong></p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        // 删除头结点
        while (head != NULL &amp;&amp; head-&gt;val == val) { // 注意这里不是if
            ListNode* tmp = head;
            head = head-&gt;next;
            delete tmp;
        }

        // 删除非头结点
        ListNode* cur = head;
        while (cur != NULL &amp;&amp; cur-&gt;next!= NULL) {
            if (cur-&gt;next-&gt;val == val) {
                ListNode* tmp = cur-&gt;next;
                cur-&gt;next = cur-&gt;next-&gt;next;
                delete tmp;
            } else {
                cur = cur-&gt;next;
            }
        }
        return head;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><p><strong>设置一个虚拟头结点在进行移除节点操作：</strong></p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummyHead = new ListNode(0); // 设置一个虚拟头结点
        dummyHead-&gt;next = head; // 将虚拟头结点指向head，这样方便后面做删除操作
        ListNode* cur = dummyHead;
        while (cur-&gt;next != NULL) {
            if(cur-&gt;next-&gt;val == val) {
                ListNode* tmp = cur-&gt;next;
                cur-&gt;next = cur-&gt;next-&gt;next;
                delete tmp;
            } else {
                cur = cur-&gt;next;
            }
        }
        head = dummyHead-&gt;next;
        delete dummyHead;
        return head;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><p>用原来的链表操作：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> temp<span class="token punctuation">;</span>
    <span class="token comment">// 当头结点存在并且头结点的值等于val时</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token operator">-&gt;</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 将新的头结点设置为head-&gt;next并删除原来的头结点</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 当cur存在并且cur-&gt;next存在时</span>
    <span class="token comment">// 此解法需要判断cur存在因为cur指向head。若head本身为NULL或者原链表中元素都为val的话，cur也会为NULL</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>temp <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 若cur-&gt;next的值等于val</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-&gt;</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将cur-&gt;next设置为cur-&gt;next-&gt;next并删除cur-&gt;next</span>
            cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 若cur-&gt;next不等于val，则将cur后移一位</span>
        <span class="token keyword">else</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回头结点</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置一个虚拟头结点：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>


<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span> ListNode<span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>shead<span class="token punctuation">;</span>
    shead <span class="token operator">=</span> <span class="token punctuation">(</span>ListNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ListNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shead<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>cur <span class="token operator">=</span> shead<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            ListNode <span class="token operator">*</span>tmp <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    head <span class="token operator">=</span> shead<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>shead<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 添加虚节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 因为删除可能涉及到头节点，所以设置dummy节点，统一操作</span>
    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 不添加虚拟节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已经为null，提前退出</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已确定当前head.val != val</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 不添加虚拟节点and pre Node方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val<span class="token operator">==</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span> curr <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            curr<span class="token punctuation">.</span>next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本一）虚拟头节点法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, val=0, next=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.next = next</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token comment"># 创建虚拟头部节点以简化删除过程</span>
        dummy_head <span class="token operator">=</span> ListNode<span class="token punctuation">(</span><span class="token builtin">next</span> <span class="token operator">=</span> head<span class="token punctuation">)</span>
        
        <span class="token comment"># 遍历列表并删除值为val的节点</span>
        current <span class="token operator">=</span> dummy_head
        <span class="token keyword">while</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">:</span>
                current<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> dummy_head<span class="token punctuation">.</span><span class="token builtin">next</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummyHead <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    dummyHead<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    cur <span class="token operator">:=</span> dummyHead
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> ret<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span>  cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><p>版本一（在原链表上直接删除）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// 删除头部节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">,</span> cur<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 删除非头部节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next <span class="token keyword">as</span> ListNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本二（虚拟头节点）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加虚拟节点</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> data<span class="token punctuation">,</span> cur <span class="token operator">=</span> data<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift：</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function-definition function">removeElements</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> head<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> val<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dummyNode <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head
    <span class="token keyword">var</span> currentNode <span class="token operator">=</span> dummyNode
    <span class="token keyword">while</span> <span class="token keyword">let</span> curNext <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next <span class="token punctuation">{</span>
        <span class="token keyword">if</span> curNext<span class="token punctuation">.</span>val <span class="token operator">==</span> val <span class="token punctuation">{</span>
            currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNext<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            currentNode <span class="token operator">=</span> curNext
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * type ListNode struct <span class="token punctuation">{</span>
 *     Val int
 *     Next *ListNode
 * <span class="token punctuation">}</span>
 */</span>
 <span class="token comment">// 虚拟头+双指针</span>
func <span class="token function">removeElements</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummyHead <span class="token punctuation">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    dummyHead<span class="token operator">.</span>Next <span class="token operator">=</span> head
    pred <span class="token punctuation">:</span><span class="token operator">=</span> dummyHead
    cur <span class="token punctuation">:</span><span class="token operator">=</span> head
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
        <span class="token keyword">if</span> cur<span class="token operator">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
            pred<span class="token operator">.</span>Next <span class="token operator">=</span> cur<span class="token operator">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pred <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token operator">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token operator">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// Definition for singly-linked list.</span>
<span class="token comment">// #[derive(PartialEq, Eq, Clone, Debug)]</span>
<span class="token comment">// pub struct ListNode {</span>
<span class="token comment">//   pub val: i32,</span>
<span class="token comment">//   pub next: Option&lt;Box&lt;ListNode&gt;&gt;</span>
<span class="token comment">// }</span>
<span class="token comment">//</span>
<span class="token comment">// impl ListNode {</span>
<span class="token comment">//   #[inline]</span>
<span class="token comment">//   fn new(val: i32) -&gt; Self {</span>
<span class="token comment">//     ListNode {</span>
<span class="token comment">//       next: None,</span>
<span class="token comment">//       val</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">remove_elements</span><span class="token punctuation">(</span>head<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dummyHead <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> dummyHead<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 使用take()替换std::men::replace(&amp;mut node.next, None)达到相同的效果，并且更普遍易读</span>
        <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>nxt<span class="token punctuation">)</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> nxt<span class="token punctuation">.</span>val <span class="token operator">==</span> val <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> nxt<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>nxt<span class="token punctuation">)</span><span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        dummyHead<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */</span>
<span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> removeElements<span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
    <span class="token keyword">var</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span> <span class="token comment">// 定义虚拟头节点</span>
    <span class="token keyword">var</span> cur <span class="token operator">=</span> head <span class="token comment">// cur 表示当前节点</span>
    <span class="token keyword">var</span> pre <span class="token operator">=</span> dummy <span class="token comment">// pre 表示cur前一个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>x <span class="token operator">==</span> \`<span class="token keyword">val</span>\`<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 相等，就删除那么cur的前一个节点pre执行cur的下一个</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不相等，pre就等于当前cur节点</span>
        pre <span class="token operator">=</span> cur
      <span class="token punctuation">}</span>
      <span class="token comment">// 向下迭代</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 最终返回dummy的下一个，就是链表的头</span>
    dummy<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin:</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/**
 * Example:
 * var li = ListNode(5)
 * var v = li.\`val\`
 * Definition for singly-linked list.
 * class ListNode(var \`val\`: Int) {
 *     var next: ListNode? = null
 * }
 */</span>
<span class="token keyword">class</span> Solution <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token operator">?</span><span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用虚拟节点，令该节点指向head</span>
        <span class="token keyword">var</span> dummyNode <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head
        <span class="token comment">// 使用cur遍历链表各个节点</span>
        <span class="token keyword">var</span> cur <span class="token operator">=</span> dummyNode
        <span class="token comment">// 判断下个节点是否为空</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 符合条件，移除节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>\`<span class="token keyword">val</span>\` <span class="token operator">==</span> \`<span class="token keyword">val</span>\`<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token comment">// 不符合条件，遍历下一节点</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 注意：返回的不是虚拟节点</span>
        <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode RemoveElements(ListNode head, int val)
    {
        ListNode dummyHead = new ListNode(0,head);
        ListNode temp = dummyHead;
        while(temp.next != null)
        {
            if(temp.next.val == val)
            {
                temp.next = temp.next.next;
            }
            else
            {
                temp = temp.next;
            }
        }
        return dummyHead.next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63);function g(N,f){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,d,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),k,v,m,b,h,n("p",null,[n("strong",null,[n("a",y,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",x,[s("链表基础操作| LeetCode：203.移除链表元素"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),w])}const _=t(i,[["render",g],["__file","0203.yichulianbiaoyuansu.html.vue"]]);export{_ as default};
