import{_ as e,r as p,o as t,c as o,a as n,b as s,d as l,e as c}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"面试题-02-07-链表相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#面试题-02-07-链表相交","aria-hidden":"true"},"#"),s(" 面试题 02.07. 链表相交")],-1),r=n("p",null,"同：160.链表相交",-1),d={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。</p><p>图示两个链表在节点 c1 开始相交：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221657.png" alt=""></p><p>题目数据 保证 整个链式结构中不存在环。</p><p>注意，函数返回结果后，链表必须 保持其原始结构 。</p><p>示例 1：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221723.png" alt=""></p><p>示例 2：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221749.png" alt=""></p><p>示例 3：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221812.png" alt=""><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221812.png" alt=""></p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>简单来说，就是求两个链表交点节点的<strong>指针</strong>。 这里同学们要注意，交点不是数值相等，而是指针相等。</p><p>为了方便举例，假设节点元素数值相等，则节点指针相等。</p><p>看如下两个链表，目前curA指向链表A的头结点，curB指向链表B的头结点：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/面试题02.07.链表相交_1.png" alt="面试题02.07.链表相交_1"></p><p>我们求出两个链表的长度，并求出两个链表长度的差值，然后让curA移动到，和curB 末尾对齐的位置，如图：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/面试题02.07.链表相交_2.png" alt="面试题02.07.链表相交_2"></p><p>此时我们就可以比较curA和curB是否相同，如果不相同，同时向后移动curA和curB，如果遇到curA == curB，则找到交点。</p><p>否则循环退出返回空指针。</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode* curA = headA;
        ListNode* curB = headB;
        int lenA = 0, lenB = 0;
        while (curA != NULL) { // 求链表A的长度
            lenA++;
            curA = curA-&gt;next;
        }
        while (curB != NULL) { // 求链表B的长度
            lenB++;
            curB = curB-&gt;next;
        }
        curA = headA;
        curB = headB;
        // 让curA为最长链表的头，lenA为其长度
        if (lenB &gt; lenA) {
            swap (lenA, lenB);
            swap (curA, curB);
        }
        // 求长度差
        int gap = lenA - lenB;
        // 让curA和curB在同一起点上（末尾位置对齐）
        while (gap--) {
            curA = curA-&gt;next;
        }
        // 遍历curA 和 curB，遇到相同则直接返回
        while (curA != NULL) {
            if (curA == curB) {
                return curA;
            }
            curA = curA-&gt;next;
            curB = curB-&gt;next;
        }
        return NULL;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n + m)</li><li>空间复杂度：O(1)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode curA = headA;
        ListNode curB = headB;
        int lenA = 0, lenB = 0;
        while (curA != null) { // 求链表A的长度
            lenA++;
            curA = curA.next;
        }
        while (curB != null) { // 求链表B的长度
            lenB++;
            curB = curB.next;
        }
        curA = headA;
        curB = headB;
        // 让curA为最长链表的头，lenA为其长度
        if (lenB &gt; lenA) {
            //1. swap (lenA, lenB);
            int tmpLen = lenA;
            lenA = lenB;
            lenB = tmpLen;
            //2. swap (curA, curB);
            ListNode tmpNode = curA;
            curA = curB;
            curB = tmpNode;
        }
        // 求长度差
        int gap = lenA - lenB;
        // 让curA和curB在同一起点上（末尾位置对齐）
        while (gap-- &gt; 0) {
            curA = curA.next;
        }
        // 遍历curA 和 curB，遇到相同则直接返回
        while (curA != null) {
            if (curA == curB) {
                return curA;
            }
            curA = curA.next;
            curB = curB.next;
        }
        return null;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
（版本一）求长度，同时出发

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headA<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> headB<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        lenA<span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
        cur <span class="token operator">=</span> headA
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>         <span class="token comment"># 求链表A的长度</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span> 
            lenA <span class="token operator">+=</span> <span class="token number">1</span>
        cur <span class="token operator">=</span> headB 
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>         <span class="token comment"># 求链表B的长度</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span> 
            lenB <span class="token operator">+=</span> <span class="token number">1</span>
        curA<span class="token punctuation">,</span> curB <span class="token operator">=</span> headA<span class="token punctuation">,</span> headB
        <span class="token keyword">if</span> lenA <span class="token operator">&gt;</span> lenB<span class="token punctuation">:</span>     <span class="token comment"># 让curB为最长链表的头，lenB为其长度</span>
            curA<span class="token punctuation">,</span> curB <span class="token operator">=</span> curB<span class="token punctuation">,</span> curA
            lenA<span class="token punctuation">,</span> lenB <span class="token operator">=</span> lenB<span class="token punctuation">,</span> lenA 
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>lenB <span class="token operator">-</span> lenA<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 让curA和curB在同一起点上（末尾位置对齐）</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span><span class="token builtin">next</span> 
        <span class="token keyword">while</span> curA<span class="token punctuation">:</span>         <span class="token comment">#  遍历curA 和 curB，遇到相同则直接返回</span>
            <span class="token keyword">if</span> curA <span class="token operator">==</span> curB<span class="token punctuation">:</span>
                <span class="token keyword">return</span> curA
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                curA <span class="token operator">=</span> curA<span class="token punctuation">.</span><span class="token builtin">next</span> 
                curB <span class="token operator">=</span> curB<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本二）求长度，同时出发 （代码复用）
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headA<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> headB<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        lenA <span class="token operator">=</span> self<span class="token punctuation">.</span>getLength<span class="token punctuation">(</span>headA<span class="token punctuation">)</span>
        lenB <span class="token operator">=</span> self<span class="token punctuation">.</span>getLength<span class="token punctuation">(</span>headB<span class="token punctuation">)</span>
        
        <span class="token comment"># 通过移动较长的链表，使两链表长度相等</span>
        <span class="token keyword">if</span> lenA <span class="token operator">&gt;</span> lenB<span class="token punctuation">:</span>
            headA <span class="token operator">=</span> self<span class="token punctuation">.</span>moveForward<span class="token punctuation">(</span>headA<span class="token punctuation">,</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            headB <span class="token operator">=</span> self<span class="token punctuation">.</span>moveForward<span class="token punctuation">(</span>headB<span class="token punctuation">,</span> lenB <span class="token operator">-</span> lenA<span class="token punctuation">)</span>
        
        <span class="token comment"># 将两个头向前移动，直到它们相交</span>
        <span class="token keyword">while</span> headA <span class="token keyword">and</span> headB<span class="token punctuation">:</span>
            <span class="token keyword">if</span> headA <span class="token operator">==</span> headB<span class="token punctuation">:</span>
                <span class="token keyword">return</span> headA
            headA <span class="token operator">=</span> headA<span class="token punctuation">.</span><span class="token builtin">next</span>
            headB <span class="token operator">=</span> headB<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> <span class="token boolean">None</span>
    
    <span class="token keyword">def</span> <span class="token function">getLength</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> head<span class="token punctuation">:</span>
            length <span class="token operator">+=</span> <span class="token number">1</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">return</span> length
    
    <span class="token keyword">def</span> <span class="token function">moveForward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> steps<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token keyword">while</span> steps <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
            steps <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本三）求长度，同时出发 （代码复用 <span class="token operator">+</span> 精简）
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headA<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> headB<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        dis <span class="token operator">=</span> self<span class="token punctuation">.</span>getLength<span class="token punctuation">(</span>headA<span class="token punctuation">)</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>getLength<span class="token punctuation">(</span>headB<span class="token punctuation">)</span>
        
        <span class="token comment"># 通过移动较长的链表，使两链表长度相等</span>
        <span class="token keyword">if</span> dis <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            headA <span class="token operator">=</span> self<span class="token punctuation">.</span>moveForward<span class="token punctuation">(</span>headA<span class="token punctuation">,</span> dis<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            headB <span class="token operator">=</span> self<span class="token punctuation">.</span>moveForward<span class="token punctuation">(</span>headB<span class="token punctuation">,</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>dis<span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 将两个头向前移动，直到它们相交</span>
        <span class="token keyword">while</span> headA <span class="token keyword">and</span> headB<span class="token punctuation">:</span>
            <span class="token keyword">if</span> headA <span class="token operator">==</span> headB<span class="token punctuation">:</span>
                <span class="token keyword">return</span> headA
            headA <span class="token operator">=</span> headA<span class="token punctuation">.</span><span class="token builtin">next</span>
            headB <span class="token operator">=</span> headB<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> <span class="token boolean">None</span>
    
    <span class="token keyword">def</span> <span class="token function">getLength</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> head<span class="token punctuation">:</span>
            length <span class="token operator">+=</span> <span class="token number">1</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">return</span> length
    
    <span class="token keyword">def</span> <span class="token function">moveForward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> steps<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token keyword">while</span> steps <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
            steps <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本四）等比例法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, x):</span>
<span class="token comment">#         self.val = x</span>
<span class="token comment">#         self.next = None</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headA<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> headB<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token comment"># 处理边缘情况</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> headA <span class="token keyword">or</span> <span class="token keyword">not</span> headB<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        
        <span class="token comment"># 在每个链表的头部初始化两个指针</span>
        pointerA <span class="token operator">=</span> headA
        pointerB <span class="token operator">=</span> headB
        
        <span class="token comment"># 遍历两个链表直到指针相交</span>
        <span class="token keyword">while</span> pointerA <span class="token operator">!=</span> pointerB<span class="token punctuation">:</span>
            <span class="token comment"># 将指针向前移动一个节点</span>
            pointerA <span class="token operator">=</span> pointerA<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">if</span> pointerA <span class="token keyword">else</span> headB
            pointerB <span class="token operator">=</span> pointerB<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">if</span> pointerB <span class="token keyword">else</span> headA
        
        <span class="token comment"># 如果相交，指针将位于交点节点，如果没有交点，值为None</span>
        <span class="token keyword">return</span> pointerA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go:</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token punctuation">,</span> headB <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    curA <span class="token operator">:=</span> headA
    curB <span class="token operator">:=</span> headB
    lenA<span class="token punctuation">,</span> lenB <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token comment">// 求A，B的长度</span>
    <span class="token keyword">for</span> curA <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>Next
        lenA<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> curB <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>Next
        lenB<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> step <span class="token builtin">int</span>
    <span class="token keyword">var</span> fast<span class="token punctuation">,</span> slow <span class="token operator">*</span>ListNode
    <span class="token comment">// 请求长度差，并且让更长的链表先走相差的长度</span>
    <span class="token keyword">if</span> lenA <span class="token operator">&gt;</span> lenB <span class="token punctuation">{</span>
        step <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB
        fast<span class="token punctuation">,</span> slow <span class="token operator">=</span> headA<span class="token punctuation">,</span> headB
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        step <span class="token operator">=</span> lenB <span class="token operator">-</span> lenA
        fast<span class="token punctuation">,</span> slow <span class="token operator">=</span> headB<span class="token punctuation">,</span> headA
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> step<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历两个链表遇到相同则跳出遍历</span>
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> slow <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fast
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双指针</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token punctuation">,</span> headB <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    l1<span class="token punctuation">,</span>l2 <span class="token operator">:=</span> headA<span class="token punctuation">,</span> headB
    <span class="token keyword">for</span> l1 <span class="token operator">!=</span> l2 <span class="token punctuation">{</span>
        <span class="token keyword">if</span> l1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l1 <span class="token operator">=</span> headB
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> l2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l2 <span class="token operator">=</span> headA
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> l1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">getListLen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       len<span class="token operator">++</span><span class="token punctuation">;</span>
       cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curA <span class="token operator">=</span> headA<span class="token punctuation">,</span>curB <span class="token operator">=</span> headB<span class="token punctuation">,</span>
        lenA <span class="token operator">=</span> <span class="token function">getListLen</span><span class="token punctuation">(</span>headA<span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// 求链表A的长度</span>
        lenB <span class="token operator">=</span> <span class="token function">getListLen</span><span class="token punctuation">(</span>headB<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">if</span><span class="token punctuation">(</span>lenA <span class="token operator">&lt;</span> lenB<span class="token punctuation">)</span> <span class="token punctuation">{</span>       <span class="token comment">// 让curA为最长链表的头，lenA为其长度</span>
    
        <span class="token comment">// 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时</span>
        <span class="token comment">// 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]</span>
        
        <span class="token punctuation">[</span>curA<span class="token punctuation">,</span> curB<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>curB<span class="token punctuation">,</span> curA<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>lenA<span class="token punctuation">,</span> lenB<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>lenB<span class="token punctuation">,</span> lenA<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>   <span class="token comment">// 求长度差</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>       <span class="token comment">// 让curA和curB在同一起点上（末尾位置对齐）</span>
        curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curA <span class="token operator">&amp;&amp;</span> curA <span class="token operator">!==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 遍历curA 和 curB，遇到相同则直接返回</span>
        curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> headB<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sizeA<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    sizeB<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> curA<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> headA<span class="token punctuation">,</span>
    curB<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> headB<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sizeA<span class="token operator">++</span><span class="token punctuation">;</span>
    curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sizeB<span class="token operator">++</span><span class="token punctuation">;</span>
    curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
  curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sizeA <span class="token operator">&lt;</span> sizeB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>sizeA<span class="token punctuation">,</span> sizeB<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>sizeB<span class="token punctuation">,</span> sizeA<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>curA<span class="token punctuation">,</span> curB<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>curB<span class="token punctuation">,</span> curA<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> gap <span class="token operator">=</span> sizeA <span class="token operator">-</span> sizeB<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span> <span class="token operator">&amp;&amp;</span> curA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">&amp;&amp;</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curA <span class="token operator">===</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ListNode <span class="token operator">*</span><span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>ListNode <span class="token operator">*</span>headA<span class="token punctuation">,</span> ListNode <span class="token operator">*</span>headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ListNode <span class="token operator">*</span>l <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> lenA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> gap <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 求出两个链表的长度</span>
    s <span class="token operator">=</span> headA<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lenA <span class="token operator">++</span><span class="token punctuation">;</span>
        s <span class="token operator">=</span> s<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    s <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lenB <span class="token operator">++</span><span class="token punctuation">;</span>
        s <span class="token operator">=</span> s<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 求出两个链表长度差</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lenA <span class="token operator">&gt;</span> lenB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        l <span class="token operator">=</span> headA<span class="token punctuation">,</span> s <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        l <span class="token operator">=</span> headB<span class="token punctuation">,</span> s <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        gap <span class="token operator">=</span> lenB <span class="token operator">-</span> lenA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 尾部对齐</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span><span class="token punctuation">)</span> l <span class="token operator">=</span> l<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 移动，并检查是否有相同的元素</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> s<span class="token punctuation">)</span> <span class="token keyword">return</span> l<span class="token punctuation">;</span>
        l <span class="token operator">=</span> l<span class="token operator">-&gt;</span>next<span class="token punctuation">,</span> s <span class="token operator">=</span> s<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> getIntersectionNode<span class="token punctuation">(</span>headA<span class="token operator">:</span> ListNode<span class="token punctuation">,</span> headB<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> lenA <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// headA链表的长度</span>
    <span class="token keyword">var</span> lenB <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// headB链表的长度</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> headA <span class="token comment">// 临时变量</span>
    <span class="token comment">// 统计headA的长度</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lenA <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 统计headB的长度</span>
    tmp <span class="token operator">=</span> headB <span class="token comment">// 临时变量赋值给headB</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lenB <span class="token operator">+=</span> <span class="token number">1</span>
      tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 因为传递过来的参数是不可变量，所以需要重新定义</span>
    <span class="token keyword">var</span> listA <span class="token operator">=</span> headA
    <span class="token keyword">var</span> listB <span class="token operator">=</span> headB
    <span class="token comment">// 两个链表的长度差</span>
    <span class="token comment">// 如果gap&gt;0，lenA&gt;lenB，headA(listA)链表往前移动gap步</span>
    <span class="token comment">// 如果gap&lt;0，lenA&lt;lenB，headB(listB)链表往前移动-gap步</span>
    <span class="token keyword">var</span> gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB
    <span class="token keyword">if</span> <span class="token punctuation">(</span>gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 因为不可以i-=1，所以可以使用for</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        listA <span class="token operator">=</span> listA<span class="token punctuation">.</span>next <span class="token comment">// 链表headA(listA) 移动</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      gap <span class="token operator">=</span> math<span class="token punctuation">.</span>abs<span class="token punctuation">(</span>gap<span class="token punctuation">)</span> <span class="token comment">// 此刻gap为负值，取绝对值</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        listB <span class="token operator">=</span> listB<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 现在两个链表同时往前走，如果相等则返回</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>listA <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> listB <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>listA <span class="token operator">==</span> listB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> listA
      <span class="token punctuation">}</span>
      listA <span class="token operator">=</span> listA<span class="token punctuation">.</span>next
      listB <span class="token operator">=</span> listB<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果链表没有相交则返回null，return可以省略</span>
    <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public ListNode GetIntersectionNode(ListNode headA, ListNode headB)
{
    if (headA == null || headB == null) return null;
    ListNode cur1 = headA, cur2 = headB;
    while (cur1 != cur2)
    {
        cur1 = cur1 == null ? headB : cur1.next;
        cur2 = cur2 == null ? headA : cur2.next;
    }
    return cur1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function v(m,b){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),l(a)])]),k])}const A=e(i,[["render",v],["__file","mianshiti02.07.lianbiaoxiangjiao.html.vue"]]);export{A as default};
