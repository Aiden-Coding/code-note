import{_ as p,r as o,o as l,c as i,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},d=n("blockquote",null,[n("p",null,"找到有没有环已经很不容易了，还要让我找到环的入口?")],-1),r=n("h1",{id:"_142-环形链表ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_142-环形链表ii","aria-hidden":"true"},"#"),s(" 142.环形链表II")],-1),u={href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"题意： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。",-1),v=n("p",null,"为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。",-1),m=n("p",null,[n("strong",null,"说明"),s("：不允许修改给定的链表。")],-1),b=n("p",null,[n("img",{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20200816110112704.png",alt:"循环链表"})],-1),h=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),f={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1if4y1d7ob",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目，不仅考察对链表的操作，而且还需要一些数学运算。</p><p>主要考察两知识点：</p><ul><li>判断链表是否环</li><li>如果有环，如何找到这个环的入口</li></ul><h3 id="判断链表是否有环" tabindex="-1"><a class="header-anchor" href="#判断链表是否有环" aria-hidden="true">#</a> 判断链表是否有环</h3><p>可以使用快慢指针法，分别定义 fast 和 slow 指针，从头结点出发，fast指针每次移动两个节点，slow指针每次移动一个节点，如果 fast 和 slow指针在途中相遇 ，说明这个链表有环。</p><p>为什么fast 走两个节点，slow走一个节点，有环的话，一定会在环内相遇呢，而不是永远的错开呢</p><p>首先第一点：<strong>fast指针一定先进入环中，如果fast指针和slow指针相遇的话，一定是在环中相遇，这是毋庸置疑的。</strong></p><p>那么来看一下，<strong>为什么fast指针和slow指针一定会相遇呢？</strong></p><p>可以画一个环，然后让 fast指针在任意一个节点开始追赶slow指针。</p><p>会发现最终都是这种情况， 如下图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210318162236720.png" alt="142环形链表1"></p><p>fast和slow各自再走一步， fast和slow就相遇了</p><p>这是因为fast是走两步，slow是走一步，<strong>其实相对于slow来说，fast是一个节点一个节点的靠近slow的</strong>，所以fast一定可以和slow重合。</p><p>动画如下：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/141.环形链表.gif" alt="141.环形链表"></p><h3 id="如果有环-如何找到这个环的入口" tabindex="-1"><a class="header-anchor" href="#如果有环-如何找到这个环的入口" aria-hidden="true">#</a> 如果有环，如何找到这个环的入口</h3><p><strong>此时已经可以判断链表是否有环了，那么接下来要找这个环的入口了。</strong></p><p>假设从头结点到环形入口节点 的节点数为x。 环形入口节点到 fast指针与slow指针相遇节点 节点数为y。 从相遇节点 再到环形入口节点节点数为 z。 如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220925103433.png" alt=""></p><p>那么相遇时： slow指针走过的节点数为: <code>x + y</code>， fast指针走过的节点数：<code> x + y + n (y + z)</code>，n为fast指针在环内走了n圈才遇到slow指针， （y+z）为 一圈内节点的个数A。</p><p>因为fast指针是一步走两个节点，slow指针一步走一个节点， 所以 fast指针走过的节点数 = slow指针走过的节点数 * 2：</p><p><code>(x + y) * 2 = x + y + n (y + z)</code></p><p>两边消掉一个（x+y）: <code>x + y = n (y + z) </code></p><p>因为要找环形的入口，那么要求的是x，因为x表示 头结点到 环形入口节点的的距离。</p><p>所以要求x ，将x单独放在左面：<code>x = n (y + z) - y</code> ,</p><p>再从n(y+z)中提出一个 （y+z）来，整理公式之后为如下公式：<code>x = (n - 1) (y + z) + z </code> 注意这里n一定是大于等于1的，因为 fast指针至少要多走一圈才能相遇slow指针。</p><p>这个公式说明什么呢？</p><p>先拿n为1的情况来举例，意味着fast指针在环形里转了一圈之后，就遇到了 slow指针了。</p><p>当 n为1的时候，公式就化解为 <code>x = z</code>，</p><p>这就意味着，<strong>从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点</strong>。</p><p>也就是在相遇节点处，定义一个指针index1，在头结点处定一个指针index2。</p><p>让index1和index2同时移动，每次移动一个节点， 那么他们相遇的地方就是 环形入口的节点。</p><p>动画如下：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/142.环形链表II（求入口）.gif" alt="142.环形链表II（求入口）"></p><p>那么 n如果大于1是什么情况呢，就是fast指针在环形转n圈之后才遇到 slow指针。</p><p>其实这种情况和n为1的时候 效果是一样的，一样可以通过这个方法找到 环形的入口节点，只不过，index1 指针在环里 多转了(n-1)圈，然后再遇到index2，相遇点依然是环形的入口节点。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode* fast = head;
        ListNode* slow = head;
        while(fast != NULL &amp;&amp; fast-&gt;next != NULL) {
            slow = slow-&gt;next;
            fast = fast-&gt;next-&gt;next;
            // 快慢指针相遇，此时从head 和 相遇点，同时查找直至相遇
            if (slow == fast) {
                ListNode* index1 = fast;
                ListNode* index2 = head;
                while (index1 != index2) {
                    index1 = index1-&gt;next;
                    index2 = index2-&gt;next;
                }
                return index2; // 返回环的入口
            }
        }
        return NULL;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n)，快慢指针相遇前，指针走的次数小于链表长度，快慢指针相遇后，两个index指针走的次数也小于链表长度，总体为走的次数小于 2n</li><li>空间复杂度: O(1)</li></ul><h3 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h3><p>在推理过程中，大家可能有一个疑问就是：<strong>为什么第一次在环中相遇，slow的 步数 是 x+y 而不是 x + 若干环的长度 + y 呢？</strong></p>`,42),x={href:"https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html",target:"_blank",rel:"noopener noreferrer"},g=t('<p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210318165123581.png" alt="142环形链表5"></p><p>首先slow进环的时候，fast一定是先进环来了。</p><p>如果slow进环入口，fast也在环入口，那么把这个环展开成直线，就是如下图的样子：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021031816503266.png" alt="142环形链表3"></p><p>可以看出如果slow 和 fast同时在环入口开始走，一定会在环入口3相遇，slow走了一圈，fast走了两圈。</p><p>重点来了，slow进环的时候，fast一定是在环的任意一个位置，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021031816515727.png" alt="142环形链表4"></p><p>那么fast指针走到环入口3的时候，已经走了k + n 个节点，slow相应的应该走了(k + n) / 2 个节点。</p><p>因为k是小于n的（图中可以看出），所以(k + n) / 2 一定小于n。</p><p><strong>也就是说slow一定没有走到环入口3，而fast已经到环入口3了</strong>。</p><p>这说明什么呢？</p><p><strong>在slow开始走的那一环已经和fast相遇了</strong>。</p><p>那有同学又说了，为什么fast不能跳过去呢？ 在刚刚已经说过一次了，<strong>fast相对于slow是一次移动一个节点，所以不可能跳过去</strong>。</p>',13),N={href:"https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这次可以说把环形链表这道题目的各个细节，完完整整的证明了一遍，说这是全网最详细讲解不为过吧。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 有环</span>
                <span class="token class-name">ListNode</span> index1 <span class="token operator">=</span> fast<span class="token punctuation">;</span>
                <span class="token class-name">ListNode</span> index2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token comment">// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>index1 <span class="token operator">!=</span> index2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    index1 <span class="token operator">=</span> index1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    index2 <span class="token operator">=</span> index2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> index1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本一）快慢指针法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, x):</span>
<span class="token comment">#         self.val = x</span>
<span class="token comment">#         self.next = None</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        slow <span class="token operator">=</span> head
        fast <span class="token operator">=</span> head
        
        <span class="token keyword">while</span> fast <span class="token keyword">and</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
            
            <span class="token comment"># If there is a cycle, the slow and fast pointers will eventually meet</span>
            <span class="token keyword">if</span> slow <span class="token operator">==</span> fast<span class="token punctuation">:</span>
                <span class="token comment"># Move one of the pointers back to the start of the list</span>
                slow <span class="token operator">=</span> head
                <span class="token keyword">while</span> slow <span class="token operator">!=</span> fast<span class="token punctuation">:</span>
                    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
                    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span>
                <span class="token keyword">return</span> slow
        <span class="token comment"># If there is no cycle, return None</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本二）集合法
<span class="token comment"># Definition for singly-linked list.</span>
<span class="token comment"># class ListNode:</span>
<span class="token comment">#     def __init__(self, x):</span>
<span class="token comment">#         self.val = x</span>
<span class="token comment">#         self.next = None</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ListNode<span class="token punctuation">:</span>
        visited <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token keyword">while</span> head<span class="token punctuation">:</span>
            <span class="token keyword">if</span> head <span class="token keyword">in</span> visited<span class="token punctuation">:</span>
                <span class="token keyword">return</span> head
            visited<span class="token punctuation">.</span>add<span class="token punctuation">(</span>head<span class="token punctuation">)</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        
        <span class="token keyword">return</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        <span class="token keyword">if</span> slow <span class="token operator">==</span> fast <span class="token punctuation">{</span>
            <span class="token keyword">for</span> slow <span class="token operator">!=</span> head <span class="token punctuation">{</span>
                slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
                head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> head
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 两种循环实现方式</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 先判断是否是环形链表</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token operator">!==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fast <span class="token operator">||</span> <span class="token operator">!</span>fast<span class="token punctuation">.</span>next <span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slowNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">,</span>
        fastNode<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fastNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slowNode <span class="token operator">=</span> slowNode<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fastNode <span class="token operator">=</span> fastNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slowNode <span class="token operator">===</span> fastNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slowNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>slowNode <span class="token operator">!==</span> fastNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                slowNode <span class="token operator">=</span> slowNode<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                fastNode <span class="token operator">=</span> fastNode<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> slowNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">detectCycle</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> head<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> slow<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> head
        <span class="token keyword">var</span> fast<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> head
        <span class="token keyword">while</span> fast <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token operator">&amp;&amp;</span> fast<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token operator">?</span><span class="token punctuation">.</span>next
            fast <span class="token operator">=</span> fast<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next
            <span class="token keyword">if</span> slow <span class="token operator">==</span> fast <span class="token punctuation">{</span>
                <span class="token comment">// 环内相遇</span>
                <span class="token keyword">var</span> list1<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> slow
                <span class="token keyword">var</span> list2<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">?</span> <span class="token operator">=</span> head
                <span class="token keyword">while</span> list1 <span class="token operator">!=</span> list2 <span class="token punctuation">{</span>
                    list1 <span class="token operator">=</span> list1<span class="token operator">?</span><span class="token punctuation">.</span>next
                    list2 <span class="token operator">=</span> list2<span class="token operator">?</span><span class="token punctuation">.</span>next
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> list2
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">extension</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span>into hasher<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token class-name">Hasher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span><span class="token class-name">ObjectIdentifier</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==</span> <span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lhs <span class="token operator">===</span> rhs
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ListNode <span class="token operator">*</span><span class="token function">detectCycle</span><span class="token punctuation">(</span>ListNode <span class="token operator">*</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ListNode <span class="token operator">*</span>fast <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token operator">*</span>slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里判断两个指针是否相等，所以移位操作放在前面</span>
        slow <span class="token operator">=</span> slow<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 相交，开始找环形入口：分别从头部和从交点出发，找到相遇的点就是环形入口</span>
            ListNode <span class="token operator">*</span>f <span class="token operator">=</span> fast<span class="token punctuation">,</span> <span class="token operator">*</span>h <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>f <span class="token operator">!=</span> h<span class="token punctuation">)</span> f <span class="token operator">=</span> f<span class="token operator">-&gt;</span>next<span class="token punctuation">,</span> h <span class="token operator">=</span> h<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token keyword">return</span> h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">def</span> detectCycle<span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fast <span class="token operator">=</span> head <span class="token comment">// 快指针</span>
    <span class="token keyword">var</span> slow <span class="token operator">=</span> head <span class="token comment">// 慢指针</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token comment">// 快指针一次走两步</span>
      slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next <span class="token comment">// 慢指针一次走一步</span>
      <span class="token comment">// 如果相遇，fast快指针回到头</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> head
        <span class="token comment">// 两个指针一步一步的走，第一次相遇的节点必是入环节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
          slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> fast
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果fast指向空值，必然无环返回null</span>
    <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#:</h3><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>public class Solution
{
    public ListNode DetectCycle(ListNode head)
    {
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null &amp;&amp; fast.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow)
            {
                fast = head;
                while (fast != slow)
                {
                    fast = fast.next;
                    slow = slow.next;
                }
                return fast;
            }
        }
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function L(C,I){const a=o("ExternalLinkIcon");return l(),i("div",null,[d,r,n("p",null,[n("a",u,[s("力扣题目链接"),e(a)])]),k,v,m,b,h,n("p",null,[n("strong",null,[n("a",f,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",w,[s("把环形链表讲清楚！| LeetCode:142.环形链表II"),e(a)]),s("，相信结合视频在看本篇题解，更有助于大家对链表的理解。")])]),y,n("p",null,[s("即文章"),n("a",x,[s("链表：环找到了，那入口呢？"),e(a)]),s("中如下的地方：")]),g,n("p",null,[s("好了，这次把为什么第一次在环中相遇，slow的 步数 是 x+y 而不是 x + 若干环的长度 + y ，用数学推理了一下，算是对"),n("a",N,[s("链表：环找到了，那入口呢？"),e(a)]),s("的补充。")]),_])}const S=p(c,[["render",L],["__file","0142.huanxinglianbiaoII.html.vue"]]);export{S as default};
