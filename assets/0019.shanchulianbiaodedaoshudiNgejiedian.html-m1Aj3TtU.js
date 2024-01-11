import{_ as t,r as p,o,c as l,a as n,b as s,d as e,e as c}from"./app-3RcBQnkC.js";const i={},u=n("h1",{id:"_19-删除链表的倒数第n个节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_19-删除链表的倒数第n个节点","aria-hidden":"true"},"#"),s(" 19.删除链表的倒数第N个节点")],-1),r={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",-1),k=n("p",null,"进阶：你能尝试使用一趟扫描实现吗？",-1),v=n("p",null,"示例 1：",-1),m=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210510085957392.png",alt:"19.删除链表的倒数第N个节点"})],-1),b=n("p",null,"输入：head = [1,2,3,4,5], n = 2 输出：[1,2,3,5] 示例 2：",-1),h=n("p",null,"输入：head = [1], n = 1 输出：[] 示例 3：",-1),w=n("p",null,"输入：head = [1,2], n = 1 输出：[1]",-1),f=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),y={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV1vW4y1U7Gf",target:"_blank",rel:"noopener noreferrer"},N=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),g=n("p",null,"双指针的经典应用，如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。删掉slow所指向的节点就可以了。",-1),_=n("p",null,"思路是这样的，但要注意一些细节。",-1),L=n("p",null,"分为如下几步：",-1),H={href:"https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,[n("p",null,"定义fast指针和slow指针，初始值为虚拟头结点，如图：")],-1),$=c(`<p><img src="https://code-thinking.cdn.bcebos.com/pics/19.删除链表的倒数第N个节点.png" alt="img"></p><ul><li><p>fast首先走n + 1步 ，为什么是n+1呢，因为只有这样同时移动的时候slow才能指向删除节点的上一个节点（方便做删除操作），如图： <img src="https://code-thinking.cdn.bcebos.com/pics/19.删除链表的倒数第N个节点1.png" alt="img"></p></li><li><p>fast和slow同时移动，直到fast指向末尾，如题： <img src="https://code-thinking.cdn.bcebos.com/pics/19.删除链表的倒数第N个节点2.png" alt="img"></p></li><li><p>删除slow指向的下一个节点，如图： <img src="https://code-thinking.cdn.bcebos.com/pics/19.删除链表的倒数第N个节点3.png" alt="img"></p></li></ul><p>此时不难写出如下C++代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummyHead = new ListNode(0);
        dummyHead-&gt;next = head;
        ListNode* slow = dummyHead;
        ListNode* fast = dummyHead;
        while(n-- &amp;&amp; fast != NULL) {
            fast = fast-&gt;next;
        }
        fast = fast-&gt;next; // fast再提前走一步，因为需要让slow指向删除节点的上一个节点
        while (fast != NULL) {
            fast = fast-&gt;next;
            slow = slow-&gt;next;
        }
        slow-&gt;next = slow-&gt;next-&gt;next; 
        
        // ListNode *tmp = slow-&gt;next;  C++释放内存的逻辑
        // slow-&gt;next = tmp-&gt;next;
        // delete nth;
        
        return dummyHead-&gt;next;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java:</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> dummyNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token class-name">ListNode</span> fastIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> slowIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>

    <span class="token comment">// 只要快慢指针相差 n 个结点即可</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n  <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slowIndex <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//此时 slowIndex 的位置就是待删除元素的前一个位置。</span>
    <span class="token comment">//具体情况可自己画一个链表长度为 3 的图来模拟代码来理解</span>
    slowIndex<span class="token punctuation">.</span>next <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, val=0, next=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.next = next</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token comment"># 创建一个虚拟节点，并将其下一个指针设置为链表的头部</span>
        dummy_head <span class="token operator">=</span> ListNode<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
        
        <span class="token comment"># 创建两个指针，慢指针和快指针，并将它们初始化为虚拟节点</span>
        slow <span class="token operator">=</span> fast <span class="token operator">=</span> dummy_head
        
        <span class="token comment"># 快指针比慢指针快 n+1 步</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token comment"># 移动两个指针，直到快速指针到达链表的末尾</span>
        <span class="token keyword">while</span> fast<span class="token punctuation">:</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token comment"># 通过更新第 (n-1) 个节点的 next 指针删除第 n 个节点</span>
        slow<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> dummy_head<span class="token punctuation">.</span><span class="token builtin">next</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go:</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    dummyHead := &amp;ListNode{}
    dummyHead.Next = head
    cur := head
    prev := dummyHead
    i := 1
    for cur != nil {
        cur = cur.Next
        if i &gt; n {
            prev = prev.Next
        }
        i++
    }
    prev.Next = prev.Next.Next
    return dummyHead.Next
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">,</span>
        slow <span class="token operator">=</span> fast <span class="token operator">=</span> ret<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span> 
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><p>版本一（快慢指针法）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newHead<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//根据leetcode题目的定义可推断这里快慢指针均不需要定义为ListNode | null。</span>
    <span class="token keyword">let</span> slowNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> newHead<span class="token punctuation">;</span>
    <span class="token keyword">let</span> fastNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> newHead<span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">//由虚拟头节点前进n个节点时,fastNode.next可推断不为null。</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fastNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。</span>
        fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slowNode <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    slowNode<span class="token punctuation">.</span>next <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//倒数第n个节点可推断其next节点不为空。 </span>
    <span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本二（计算节点总数法）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> listSize<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        listSize<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>listSize <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listSize <span class="token operator">-</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本三（递归倒退n法）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newHead<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">===</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">recur</span><span class="token punctuation">(</span>newHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin:</h3><div class="language-Kotlin line-numbers-mode" data-ext="Kotlin"><pre class="language-Kotlin"><code>fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
    val pre = ListNode(0).apply {
        this.next = head
    }
    var fastNode: ListNode? = pre
    var slowNode: ListNode? = pre
    for (i in 0..n) {
        fastNode = fastNode?.next
    }
    while (fastNode != null) {
        slowNode = slowNode?.next
        fastNode = fastNode.next
    }
    slowNode?.next = slowNode?.next?.next
    return pre.next
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift：</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> head<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
    <span class="token keyword">var</span> fast<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> dummyHead
    <span class="token keyword">var</span> slow<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> dummyHead
    <span class="token comment">// fast 前移 n</span>
    <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> n <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token operator">?</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> fast<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token operator">?</span><span class="token punctuation">.</span>next
        slow <span class="token operator">=</span> slow<span class="token operator">?</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    slow<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token variable">$head</span><span class="token punctuation">,</span> <span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置虚拟头节点</span>
    <span class="token variable">$dummyHead</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$dummyHead</span><span class="token operator">-&gt;</span><span class="token property">next</span> <span class="token operator">=</span> <span class="token variable">$head</span><span class="token punctuation">;</span>

    <span class="token variable">$slow</span> <span class="token operator">=</span> <span class="token variable">$fast</span> <span class="token operator">=</span> <span class="token variable">$dummyHead</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token operator">--</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$fast</span> <span class="token operator">!=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$fast</span> <span class="token operator">=</span> <span class="token variable">$fast</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// fast 再走一步，让 slow 指向删除节点的上一个节点</span>
    <span class="token variable">$fast</span> <span class="token operator">=</span> <span class="token variable">$fast</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span> 
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$fast</span> <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$fast</span> <span class="token operator">=</span> <span class="token variable">$fast</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
        <span class="token variable">$slow</span> <span class="token operator">=</span> <span class="token variable">$slow</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token variable">$slow</span><span class="token operator">-&gt;</span><span class="token property">next</span> <span class="token operator">=</span> <span class="token variable">$slow</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$dummyHead</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> removeNthFromEnd<span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span> <span class="token comment">// 定义虚拟头节点</span>
    <span class="token keyword">var</span> fast <span class="token operator">=</span> head <span class="token comment">// 快指针从头开始走</span>
    <span class="token keyword">var</span> slow <span class="token operator">=</span> dummy <span class="token comment">// 慢指针从虚拟头开始头</span>
    <span class="token comment">// 因为参数 n 是不可变量，所以不能使用 while(n&gt;0){n-=1}的方式</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 快指针和满指针一起走，直到fast走到null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 删除slow的下一个节点 </span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token comment">// 返回虚拟头节点的下一个</span>
    dummy<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">remove_nth_from_end</span><span class="token punctuation">(</span>head<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> <span class="token keyword">mut</span> n<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dummy_head <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummy_head<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> fast <span class="token operator">=</span> <span class="token operator">&amp;</span>dummy_head<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> slow <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> dummy_head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummy_head<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**c语言单链表的定义
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义虚拟头节点dummy 并初始化使其指向head</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> dummy <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummy<span class="token operator">-&gt;</span>val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    dummy<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">//定义 fast slow 双指针</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> slow <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    slow<span class="token operator">-&gt;</span>next <span class="token operator">=</span> slow<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//删除倒数第n个节点</span>
    head <span class="token operator">=</span> dummy<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>dummy<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除虚拟节点dummy</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ListNode</span> <span class="token function">RemoveNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummpHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummpHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> fastNode <span class="token operator">=</span> dummpHead<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> slowNode <span class="token operator">=</span> dummpHead<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> fastNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>fastNode<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            slowNode <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        slowNode<span class="token punctuation">.</span>next <span class="token operator">=</span> slowNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dummpHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function I(F,S){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),d,k,v,m,b,h,w,f,n("p",null,[n("strong",null,[n("a",y,[s("《代码随想录》算法视频公开课"),e(a)]),s("：："),n("a",x,[s("链表遍历学清楚！ | LeetCode：19.删除链表倒数第N个节点"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对链表的理解。")])]),N,g,_,L,n("ul",null,[n("li",null,[n("p",null,[s("首先这里我推荐大家使用虚拟头结点，这样方便处理删除实际头结点的逻辑，如果虚拟头结点不清楚，可以看这篇： "),n("a",H,[s("链表：听说用虚拟头节点会方便很多？"),e(a)])])]),E]),$])}const B=t(i,[["render",I],["__file","0019.shanchulianbiaodedaoshudiNgejiedian.html.vue"]]);export{B as default};
