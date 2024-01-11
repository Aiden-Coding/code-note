import{_ as p,r as t,o,c,a as n,b as s,d as e,e as l}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"反转链表的写法很简单，一些同学甚至可以背下来但过一阵就忘了该咋写，主要是因为没有理解真正的反转过程。")],-1),r=n("h1",{id:"_206-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_206-反转链表","aria-hidden":"true"},"#"),s(" 206.反转链表")],-1),d={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"题意：反转一个单链表。",-1),v=n("p",null,"示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL",-1),m=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),b={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1nB4y1i7eL",target:"_blank",rel:"noopener noreferrer"},y=l(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>如果再定义一个新的链表，实现链表元素的反转，其实这是对内存空间的浪费。</p><p>其实只需要改变链表的next指针的指向，直接将链表反转 ，而不用重新定义一个新的链表，如图所示:</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210218090901207.png" alt="206_反转链表"></p><p>之前链表的头节点是元素1， 反转之后头结点就是元素5 ，这里并没有添加或者删除节点，仅仅是改变next指针的方向。</p><p>那么接下来看一看是如何反转的呢？</p><p>我们拿有示例中的链表来举例，如动画所示：（纠正：动画应该是先移动pre，在移动cur）</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/206.翻转链表.gif" alt=""></p><p>首先定义一个cur指针，指向头结点，再定义一个pre指针，初始化为null。</p><p>然后就要开始反转了，首先要把 cur-&gt;next 节点用tmp指针保存一下，也就是保存一下这个节点。</p><p>为什么要保存一下这个节点呢，因为接下来要改变 cur-&gt;next 的指向了，将cur-&gt;next 指向pre ，此时已经反转了第一个节点了。</p><p>接下来，就是循环走如下代码逻辑了，继续移动pre和cur指针。</p><p>最后，cur 指针已经指向了null，循环结束，链表也反转完毕了。 此时我们return pre指针就可以了，pre指针就指向了新的头结点。</p><h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h3><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
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
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(1)</li></ul><h3 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h3><p>递归法相对抽象一些，但是其实和双指针法是一样的逻辑，同样是当cur为空的时候循环结束，不断将cur指向pre的过程。</p><p>关键是初始化的地方，可能有的同学会不理解， 可以看到双指针法中初始化 cur = head，pre = NULL，在递归法中可以从如下代码看出初始化的逻辑也是一样的，只不过写法变了。</p><p>具体可以看代码（已经详细注释），<strong>双指针法写出来之后，理解如下递归写法就不难了，代码逻辑都是一样的。</strong></p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode* reverse(ListNode* pre,ListNode* cur){
        if(cur == NULL) return pre;
        ListNode* temp = cur-&gt;next;
        cur-&gt;next = pre;
        // 可以和双指针法的代码进行对比，如下递归的写法，其实就是做了这两步
        // pre = cur;
        // cur = temp;
        return reverse(cur,temp);
    }
    ListNode* reverseList(ListNode* head) {
        // 和双指针法初始化是一样的逻辑
        // ListNode* cur = head;
        // ListNode* pre = NULL;
        return reverse(NULL, head);
    }

};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n), 要递归处理链表的每个节点</li><li>空间复杂度: O(n), 递归调用了 n 层栈空间</li></ul><p>我们可以发现，上面的递归写法和双指针法实质上都是从前往后翻转指针指向，其实还有另外一种与双指针法不同思路的递归写法：从后往前翻转指针指向。</p><p>具体代码如下（带详细注释）：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // 边缘条件判断
        if(head == NULL) return NULL;
        if (head-&gt;next == NULL) return head;
        
        // 递归调用，翻转第二个节点开始往后的链表
        ListNode *last = reverseList(head-&gt;next);
        // 翻转头节点与第二个节点的指向
        head-&gt;next-&gt;next = head;
        // 此时的 head 节点为尾节点，next 需要指向 NULL
        head-&gt;next = NULL;
        return last;
    }
}; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)</li><li>空间复杂度: O(n)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 双指针</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 保存下一个节点</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 递归 </span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> prev<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 先保存下一个节点</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span><span class="token comment">// 反转</span>
        <span class="token comment">// 更新prev、cur位置</span>
        <span class="token comment">// prev = cur;</span>
        <span class="token comment">// cur = temp;</span>
        <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 从后向前递归</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 边缘条件判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        
        <span class="token comment">// 递归调用，翻转第二个节点开始往后的链表</span>
        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 翻转头节点与第二个节点的指向</span>
        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 此时的 head 节点为尾节点，next 需要指向 NULL</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本一）双指针法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, val=0, next=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.next = next</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        cur <span class="token operator">=</span> head   
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token comment"># 保存一下 cur的下一个节点，因为接下来要改变cur-&gt;next</span>
            cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre <span class="token comment">#反转</span>
            <span class="token comment">#更新pre、cur指针</span>
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> temp
        <span class="token keyword">return</span> pre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本二）递归法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, val=0, next=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.next = next</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">reverse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">:</span> ListNode<span class="token punctuation">,</span> pre<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> cur <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> pre
        temp <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
        cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span>temp<span class="token punctuation">,</span> cur<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//双指针</span>
<span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pre <span class="token operator">*</span>ListNode
    cur <span class="token operator">:=</span> head
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> pre
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token comment">//递归</span>
<span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">help</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span><span class="token operator">*</span>ListNode<span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre
    <span class="token punctuation">}</span>
    next <span class="token operator">:=</span> head<span class="token punctuation">.</span>Next
    head<span class="token punctuation">.</span>Next <span class="token operator">=</span> pre
    <span class="token keyword">return</span> <span class="token function">help</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>

<span class="token comment">// 双指针：</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// temp = cur = null;</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 递归：</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> head
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 递归2</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 从后往前翻</span>
    <span class="token keyword">const</span> pre <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 双指针法</span>
<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">,</span>
        tempNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> preNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 递归（从前往后翻转）</span>
<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>preNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> curNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> preNode<span class="token punctuation">;</span>
        <span class="token keyword">let</span> tempNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">recur</span><span class="token punctuation">(</span>preNode<span class="token punctuation">,</span> curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">recur</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 递归（从后往前翻转）</span>
<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newHead<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> preNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newHead <span class="token operator">=</span> node<span class="token punctuation">;</span>
            newHead<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">recur</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">recur</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby:</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># 双指针</span>
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode</span>
<span class="token comment">#     attr_accessor :val, :next</span>
<span class="token comment">#     def initialize(val = 0, _next = nil)</span>
<span class="token comment">#         @val = val</span>
<span class="token comment">#         @next = _next</span>
<span class="token comment">#     end</span>
<span class="token comment"># end</span>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">reverse_list</span></span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
  <span class="token comment"># return nil if head.nil?	# 循环判断条件亦能起到相同作用因此不必单独判断</span>
  cur<span class="token punctuation">,</span> per <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token keyword">nil</span>
  <span class="token keyword">until</span> cur<span class="token punctuation">.</span><span class="token keyword">nil</span><span class="token operator">?</span>
    tem <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token keyword">next</span>
    cur<span class="token punctuation">.</span><span class="token keyword">next</span> <span class="token operator">=</span> per
    per <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> tem
  <span class="token keyword">end</span>
  per
<span class="token keyword">end</span>

<span class="token comment"># 递归</span>
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode</span>
<span class="token comment">#     attr_accessor :val, :next</span>
<span class="token comment">#     def initialize(val = 0, _next = nil)</span>
<span class="token comment">#         @val = val</span>
<span class="token comment">#         @next = _next</span>
<span class="token comment">#     end</span>
<span class="token comment"># end</span>
<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">reverse_list</span></span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
  reverse<span class="token punctuation">(</span><span class="token keyword">nil</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">reverse</span></span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">)</span>
  <span class="token keyword">return</span> pre <span class="token keyword">if</span> cur<span class="token punctuation">.</span><span class="token keyword">nil</span><span class="token operator">?</span>
  tem <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token keyword">next</span>
  cur<span class="token punctuation">.</span><span class="token keyword">next</span> <span class="token operator">=</span> pre
  reverse<span class="token punctuation">(</span>cur<span class="token punctuation">,</span> tem<span class="token punctuation">)</span>	<span class="token comment"># 通过递归实现双指针法中的更新操作</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin:</h3><div class="language-Kotlin line-numbers-mode" data-ext="Kotlin"><pre class="language-Kotlin"><code>fun reverseList(head: ListNode?): ListNode? {
    var pre: ListNode? = null
    var cur = head
    while (cur != null) {
        val temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/**
 * Example:
 * var li = ListNode(5)
 * var v = li.\`val\`
 * Definition for singly-linked list.
 * class ListNode(var \`val\`: Int) {
 *     var next: ListNode? = null
 * }
 */</span>
<span class="token keyword">class</span> Solution <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token operator">?</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token comment">// temp用来存储临时的节点</span>
        <span class="token keyword">var</span> temp<span class="token operator">:</span> ListNode<span class="token operator">?</span>
        <span class="token comment">// cur用来遍历链表</span>
        <span class="token keyword">var</span> cur<span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token operator">=</span> head
        <span class="token comment">// pre用来作为链表反转的工具</span>
        <span class="token comment">// pre是比pre前一位的节点</span>
        <span class="token keyword">var</span> pre<span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 临时存储原本cur的下一个节点</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
            <span class="token comment">// 使cur下一节点地址为它之前的</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
            <span class="token comment">// 之后随着cur的遍历移动pre</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            <span class="token comment">// 移动cur遍历链表各个节点</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 由于开头使用pre为null,所以cur等于链表本身长度+1，</span>
        <span class="token comment">// 此时pre在cur前一位，所以此时pre为头节点</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift：</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">/// 双指针法 (迭代)</span>
<span class="token comment">/// - Parameter head: 头结点</span>
<span class="token comment">/// - Returns: 翻转后的链表头结点</span>
<span class="token keyword">func</span> <span class="token function-definition function">reverseList</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> head<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token operator">||</span> head<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> pre<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token keyword">var</span> cur<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> head
    <span class="token keyword">var</span> temp<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token keyword">while</span> cur <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token comment">/// 递归</span>
<span class="token comment">/// - Parameter head: 头结点</span>
<span class="token comment">/// - Returns: 翻转后的链表头结点</span>
<span class="token keyword">func</span> <span class="token function-definition function">reverseList2</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> head<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> cur<span class="token punctuation">:</span> head<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function-definition function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">,</span> cur<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> cur <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> temp<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
    cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">:</span> cur<span class="token punctuation">,</span> cur<span class="token punctuation">:</span> temp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><p>双指针法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//保存cur的下一个结点</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> temp<span class="token punctuation">;</span>
    <span class="token comment">//pre指针指向前一个当前结点的前一个结点</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> pre <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">//用head代替cur，也可以再定义一个cur结点指向head。</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//保存下一个结点的位置</span>
        temp <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">//翻转操作</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token comment">//更新结点</span>
        pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> pre<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> temp <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    <span class="token comment">//将cur作为pre传入下一层</span>
    <span class="token comment">//将temp作为cur传入下一层，改变其指针指向当前cur</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 双指针法：</span>
<span class="token keyword">function</span> <span class="token function-definition function">reverseList</span><span class="token punctuation">(</span><span class="token variable">$head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$cur</span> <span class="token operator">=</span> <span class="token variable">$head</span><span class="token punctuation">;</span>
    <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$cur</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$temp</span> <span class="token operator">=</span> <span class="token variable">$cur</span><span class="token operator">-&gt;</span><span class="token property">next</span><span class="token punctuation">;</span> 
        <span class="token variable">$cur</span><span class="token operator">-&gt;</span><span class="token property">next</span> <span class="token operator">=</span> <span class="token variable">$pre</span><span class="token punctuation">;</span>
        <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token variable">$cur</span><span class="token punctuation">;</span>
        <span class="token variable">$cur</span> <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token variable">$pre</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><p>双指针法：</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseList<span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pre<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">var</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> tmp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
      pre <span class="token operator">=</span> cur
      cur <span class="token operator">=</span> tmp
    <span class="token punctuation">}</span>
    pre
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法：</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> reverseList<span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    reverse<span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">def</span> reverse<span class="token punctuation">(</span>pre<span class="token operator">:</span> ListNode<span class="token punctuation">,</span> cur<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> pre    <span class="token comment">// 如果当前cur为空，则返回pre</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">val</span> tmp<span class="token operator">:</span> ListNode <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
    reverse<span class="token punctuation">(</span>cur<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>   <span class="token comment">// 此时cur成为前一个节点，tmp是当前节点</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><p>双指针法：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">reverse_list</span><span class="token punctuation">(</span>head<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> pre <span class="token operator">=</span> <span class="token class-name">None</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">mut</span> node<span class="token punctuation">)</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">reverse_list</span><span class="token punctuation">(</span>head<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">fn</span> <span class="token function-definition function">rev</span><span class="token punctuation">(</span>
            <span class="token keyword">mut</span> head<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
            <span class="token keyword">mut</span> pre<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">mut</span> node<span class="token punctuation">)</span> <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> cur <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                node<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
                pre <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token function">rev</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> pre<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pre
        <span class="token punctuation">}</span>
        <span class="token function">rev</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#:</h3><p>三指针法， 感觉会更直观：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">LinkNumbers</span> <span class="token function">Reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">///用三指针，写的过程中能够弥补二指针在翻转过程中的想象</span>
    <span class="token class-name">LinkNumbers</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> move <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> next <span class="token operator">=</span> root<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        next <span class="token operator">=</span> next<span class="token punctuation">.</span>linknext<span class="token punctuation">;</span>
        move<span class="token punctuation">.</span>linknext <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> move<span class="token punctuation">;</span>
        move <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">///LinkNumbers的定义</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkNumbers</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 链表值</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span> <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 链表指针</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name">LinkNumbers</span> linknext <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他解法" tabindex="-1"><a class="header-anchor" href="#其他解法" aria-hidden="true">#</a> 其他解法</h2><h3 id="使用虚拟头结点解决链表反转" tabindex="-1"><a class="header-anchor" href="#使用虚拟头结点解决链表反转" aria-hidden="true">#</a> 使用虚拟头结点解决链表反转</h3><blockquote><p>使用虚拟头结点，通过头插法实现链表的反转（不需要栈）</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 迭代方法：增加虚头结点，使用头插法实现链表翻转</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList1</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建虚头结点</span>
    <span class="token class-name">ListNode</span> dumpyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dumpyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历所有节点</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 头插法</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> dumpyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        dumpyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dumpyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用栈解决反转链表的问题" tabindex="-1"><a class="header-anchor" href="#使用栈解决反转链表的问题" aria-hidden="true">#</a> 使用栈解决反转链表的问题</h3><ul><li>首先将所有的结点入栈</li><li>然后创建一个虚拟虚拟头结点，让cur指向虚拟头结点。然后开始循环出栈，每出来一个元素，就把它加入到以虚拟头结点为头结点的链表当中，最后返回即可。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果链表为空，则返回空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果链表中只有只有一个元素，则直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 创建栈 每一个结点都入栈</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 创建一个虚拟头结点</span>
    <span class="token class-name">ListNode</span> pHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cur <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最后一个元素的next要赋值为空</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>采用这种方法需要注意一点。就是当整个出栈循环结束以后，cur正好指向原来链表的第一个结点，而此时结点1中的next指向的是结点2，因此最后还需要<code>cur.next = null</code><img src="https://raw.githubusercontent.com/liyuxuan7762/MyImageOSS/master/md_images/image-20230117195418626.png" alt="image-20230117195418626"></p></blockquote>`,75);function w(f,L){const a=t("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",d,[s("力扣题目链接"),e(a)])]),k,v,m,n("p",null,[n("strong",null,[n("a",b,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",h,[s("帮你拿下反转链表 | LeetCode：206.反转链表"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),y])}const N=p(i,[["render",w],["__file","0206.fanzhuanlianbiao.html.vue"]]);export{N as default};
