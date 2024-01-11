import{_ as e,r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-3RcBQnkC.js";const i={},u=n("blockquote",null,[n("p",null,"二叉树上应该怎么求，二叉搜索树上又应该怎么求？")],-1),r=n("h1",{id:"_501-二叉搜索树中的众数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_501-二叉搜索树中的众数","aria-hidden":"true"},"#"),s(" 501.二叉搜索树中的众数")],-1),k={href:"https://leetcode.cn/problems/find-mode-in-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},d=t('<p>给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。</p><p>假定 BST 有如下定义：</p><ul><li>结点左子树中所含结点的值小于等于当前结点的值</li><li>结点右子树中所含结点的值大于等于当前结点的值</li><li>左子树和右子树都是二叉搜索树</li></ul><p>例如：</p><p>给定 BST [1,null,2,2],</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201014221532206.png" alt="501. 二叉搜索树中的众数"></p><p>返回[2].</p><p>提示：如果众数超过1个，不需考虑输出顺序</p><p>进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）</p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',10),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1fD4y117gp",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目呢，递归法我从两个维度来讲。</p><p>首先如果不是二叉搜索树的话，应该怎么解题，是二叉搜索树，又应该如何解题，两种方式做一个比较，可以加深大家对二叉树的理解。</p><h3 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h3><h4 id="如果不是二叉搜索树" tabindex="-1"><a class="header-anchor" href="#如果不是二叉搜索树" aria-hidden="true">#</a> 如果不是二叉搜索树</h4><p>如果不是二叉搜索树，最直观的方法一定是把这个树都遍历了，用map统计频率，把频率排个序，最后取前面高频的元素的集合。</p><p>具体步骤如下：</p><ol><li>这个树都遍历了，用map统计频率</li></ol><p>至于用前中后序哪种遍历也不重要，因为就是要全遍历一遍，怎么个遍历法都行，层序遍历都没毛病！</p><p>这里采用前序遍历，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// map&lt;int, int&gt; key:元素，value:出现频率
void searchBST(TreeNode* cur, unordered_map&lt;int, int&gt;&amp; map) { // 前序遍历
    if (cur == NULL) return ;
    map[cur-&gt;val]++; // 统计元素频率
    searchBST(cur-&gt;left, map);
    searchBST(cur-&gt;right, map);
    return ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>把统计的出来的出现频率（即map中的value）排个序</li></ol><p>有的同学可能可以想直接对map中的value排序，还真做不到，C++中如果使用std::map或者std::multimap可以对key排序，但不能对value排序。</p><p>所以要把map转化数组即vector，再进行排序，当然vector里面放的也是<code>pair&lt;int, int&gt;</code>类型的数据，第一个int为元素，第二个int为出现频率。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>bool static cmp (const pair&lt;int, int&gt;&amp; a, const pair&lt;int, int&gt;&amp; b) {
    return a.second &gt; b.second; // 按照频率从大到小排序
}

vector&lt;pair&lt;int, int&gt;&gt; vec(map.begin(), map.end());
sort(vec.begin(), vec.end(), cmp); // 给频率排个序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>取前面高频的元素</li></ol><p>此时数组vector中已经是存放着按照频率排好序的pair，那么把前面高频的元素取出来就可以了。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>result.push_back(vec[0].first);
for (int i = 1; i &lt; vec.size(); i++) {
    // 取最高的放到result数组中
    if (vec[i].second == vec[0].second) result.push_back(vec[i].first);
    else break;
}
return result;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:

void searchBST(TreeNode* cur, unordered_map&lt;int, int&gt;&amp; map) { // 前序遍历
    if (cur == NULL) return ;
    map[cur-&gt;val]++; // 统计元素频率
    searchBST(cur-&gt;left, map);
    searchBST(cur-&gt;right, map);
    return ;
}
bool static cmp (const pair&lt;int, int&gt;&amp; a, const pair&lt;int, int&gt;&amp; b) {
    return a.second &gt; b.second;
}
public:
    vector&lt;int&gt; findMode(TreeNode* root) {
        unordered_map&lt;int, int&gt; map; // key:元素，value:出现频率
        vector&lt;int&gt; result;
        if (root == NULL) return result;
        searchBST(root, map);
        vector&lt;pair&lt;int, int&gt;&gt; vec(map.begin(), map.end());
        sort(vec.begin(), vec.end(), cmp); // 给频率排个序
        result.push_back(vec[0].first);
        for (int i = 1; i &lt; vec.size(); i++) {
            // 取最高的放到result数组中
            if (vec[i].second == vec[0].second) result.push_back(vec[i].first);
            else break;
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>所以如果本题没有说是二叉搜索树的话，那么就按照上面的思路写！</strong></p><h4 id="是二叉搜索树" tabindex="-1"><a class="header-anchor" href="#是二叉搜索树" aria-hidden="true">#</a> 是二叉搜索树</h4><p><strong>既然是搜索树，它中序遍历就是有序的</strong>。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210204152758889.png" alt="501.二叉搜索树中的众数1"></p><p>中序遍历代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void searchBST(TreeNode* cur) {
    if (cur == NULL) return ;
    searchBST(cur-&gt;left);       // 左
    （处理节点）                // 中
    searchBST(cur-&gt;right);      // 右
    return ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历有序数组的元素出现频率，从头遍历，那么一定是相邻两个元素作比较，然后就把出现频率最高的元素输出就可以了。</p><p>关键是在有序数组上的话，好搞，在树上怎么搞呢？</p><p>这就考察对树的操作了。</p>`,32),f={href:"https://programmercarl.com/0530.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%9D%E5%AF%B9%E5%B7%AE.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>弄一个指针指向前一个节点，这样每次cur（当前节点）才能和pre（前一个节点）作比较。</p><p>而且初始化的时候pre = NULL，这样当pre为NULL时候，我们就知道这是比较的第一个元素。</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (pre == NULL) { // 第一个节点
    count = 1; // 频率为1
} else if (pre-&gt;val == cur-&gt;val) { // 与前一个节点数值相同
    count++;
} else { // 与前一个节点数值不同
    count = 1;
}
pre = cur; // 更新上一个节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时又有问题了，因为要求最大频率的元素集合（注意是集合，不是一个元素，可以有多个众数），如果是数组上大家一般怎么办？</p><p>应该是先遍历一遍数组，找出最大频率（maxCount），然后再重新遍历一遍数组把出现频率为maxCount的元素放进集合。（因为众数有多个）</p><p>这种方式遍历了两遍数组。</p><p>那么我们遍历两遍二叉搜索树，把众数集合算出来也是可以的。</p><p>但这里其实只需要遍历一次就可以找到所有的众数。</p><p>那么如何只遍历一遍呢？</p><p>如果 频率count 等于 maxCount（最大频率），当然要把这个元素加入到结果集中（以下代码为result数组），代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (count == maxCount) { // 如果和最大值相同，放进result中
    result.push_back(cur-&gt;val);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是感觉这里有问题，result怎么能轻易就把元素放进去了呢，万一，这个maxCount此时还不是真正最大频率呢。</p><p>所以下面要做如下操作：</p><p>频率count 大于 maxCount的时候，不仅要更新maxCount，而且要清空结果集（以下代码为result数组），因为结果集之前的元素都失效了。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (count &gt; maxCount) { // 如果计数大于最大值
    maxCount = count;   // 更新最大频率
    result.clear();     // 很关键的一步，不要忘记清空result，之前result里的元素都失效了
    result.push_back(cur-&gt;val);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键代码都讲完了，完整代码如下：（<strong>只需要遍历一遍二叉搜索树，就求出了众数的集合</strong>）</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
private:
    int maxCount = 0; // 最大频率
    int count = 0; // 统计频率
    TreeNode* pre = NULL;
    vector&lt;int&gt; result;
    void searchBST(TreeNode* cur) {
        if (cur == NULL) return ;

        searchBST(cur-&gt;left);       // 左
                                    // 中
        if (pre == NULL) { // 第一个节点
            count = 1;
        } else if (pre-&gt;val == cur-&gt;val) { // 与前一个节点数值相同
            count++;
        } else { // 与前一个节点数值不同
            count = 1;
        }
        pre = cur; // 更新上一个节点

        if (count == maxCount) { // 如果和最大值相同，放进result中
            result.push_back(cur-&gt;val);
        }

        if (count &gt; maxCount) { // 如果计数大于最大值频率
            maxCount = count;   // 更新最大频率
            result.clear();     // 很关键的一步，不要忘记清空result，之前result里的元素都失效了
            result.push_back(cur-&gt;val);
        }

        searchBST(cur-&gt;right);      // 右
        return ;
    }

public:
    vector&lt;int&gt; findMode(TreeNode* root) {
        count = 0;
        maxCount = 0;
        pre = NULL; // 记录前一个节点
        result.clear();

        searchBST(root);
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3><p>只要把中序遍历转成迭代，中间节点的处理逻辑完全一样。</p><p>二叉树前中后序转迭代，传送门：</p>`,21),g={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>下面我给出其中的一种中序遍历的迭代法，其中间处理逻辑一点都没有变（我从递归法直接粘过来的代码，连注释都没改）</p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;int&gt; findMode(TreeNode* root) {
        stack&lt;TreeNode*&gt; st;
        TreeNode* cur = root;
        TreeNode* pre = NULL;
        int maxCount = 0; // 最大频率
        int count = 0; // 统计频率
        vector&lt;int&gt; result;
        while (cur != NULL || !st.empty()) {
            if (cur != NULL) { // 指针来访问节点，访问到最底层
                st.push(cur); // 将访问的节点放进栈
                cur = cur-&gt;left;                // 左
            } else {
                cur = st.top();
                st.pop();                       // 中
                if (pre == NULL) { // 第一个节点
                    count = 1;
                } else if (pre-&gt;val == cur-&gt;val) { // 与前一个节点数值相同
                    count++;
                } else { // 与前一个节点数值不同
                    count = 1;
                }
                if (count == maxCount) { // 如果和最大值相同，放进result中
                    result.push_back(cur-&gt;val);
                }

                if (count &gt; maxCount) { // 如果计数大于最大值频率
                    maxCount = count;   // 更新最大频率
                    result.clear();     // 很关键的一步，不要忘记清空result，之前result里的元素都失效了
                    result.push_back(cur-&gt;val);
                }
                pre = cur;
                cur = cur-&gt;right;               // 右
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本题在递归法中，我给出了如果是普通二叉树，应该怎么求众数。</p><p>知道了普通二叉树的做法时候，我再进一步给出二叉搜索树又应该怎么求众数，这样鲜明的对比，相信会对二叉树又有更深层次的理解了。</p><p>在递归遍历二叉搜索树的过程中，我还介绍了一个统计最高出现频率元素集合的技巧， 要不然就要遍历两次二叉搜索树才能把这个最高出现频率元素的集合求出来。</p><p><strong>为什么没有这个技巧一定要遍历两次呢？ 因为要求的是集合，会有多个众数，如果规定只有一个众数，那么就遍历一次稳稳的了。</strong></p><p>最后我依然给出对应的迭代法，其实就是迭代法中序遍历的模板加上递归法中中间节点的处理逻辑，分分钟就可以写出来，中间逻辑的代码我都是从递归法中直接粘过来的。</p><p><strong>求二叉搜索树中的众数其实是一道简单题，但大家可以发现我写了这么一大篇幅的文章来讲解，主要是为了尽量从各个角度对本题进剖析，帮助大家更快更深入理解二叉树</strong>。</p><blockquote><p><strong>需要强调的是 leetcode上的耗时统计是非常不准确的，看个大概就行，一样的代码耗时可以差百分之50以上</strong>，所以leetcode的耗时统计别太当回事，知道理论上的效率优劣就行了。</p></blockquote><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><p>暴力法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">findMode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">intValue</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获得频率 Map</span>
		<span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> mapList <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> c2<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mapList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 把频率最高的加入 list</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> mapList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>mapList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> mapList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mapList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">intValue</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">void</span> <span class="token function">searchBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> curr<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>curr <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>val<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">searchBST</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>left<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">searchBST</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>right<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历-不使用额外空间，利用二叉搜索树特性</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    ArrayList&lt;Integer&gt; resList;
    int maxCount;
    int count;
    TreeNode pre;

    public int[] findMode(TreeNode root) {
        resList = new ArrayList&lt;&gt;();
        maxCount = 0;
        count = 0;
        pre = null;
        findMode1(root);
        int[] res = new int[resList.size()];
        for (int i = 0; i &lt; resList.size(); i++) {
            res[i] = resList.get(i);
        }
        return res;
    }

    public void findMode1(TreeNode root) {
        if (root == null) {
            return;
        }
        findMode1(root.left);

        int rootValue = root.val;
        // 计数
        if (pre == null || rootValue != pre.val) {
            count = 1;
        } else {
            count++;
        }
        // 更新结果以及maxCount
        if (count &gt; maxCount) {
            resList.clear();
            resList.add(rootValue);
            maxCount = count;
        } else if (count == maxCount) {
            resList.add(rootValue);
        }
        pre = root;

        findMode1(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">findMode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> maxCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
                cur <span class="token operator">=</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 计数</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> cur<span class="token punctuation">.</span>val <span class="token operator">!=</span> pre<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    count<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 更新结果</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    maxCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
                    result<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">intValue</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统一迭代法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public int[] findMode(TreeNode root) {
        int count = 0;
        int maxCount = 0;
        TreeNode pre = null;
        LinkedList&lt;Integer&gt; res = new LinkedList&lt;&gt;();
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();

        if(root != null)
            stack.add(root);
        
        while(!stack.isEmpty()){
            TreeNode curr = stack.peek();
            if(curr != null){
                stack.pop();
                if(curr.right != null)
                    stack.add(curr.right);
                stack.add(curr);
                stack.add(null);
                if(curr.left != null)
                    stack.add(curr.left);
            }else{
                stack.pop();
                TreeNode temp = stack.pop();
                if(pre == null)
                    count = 1;
                else if(pre != null &amp;&amp; pre.val == temp.val)
                    count++;
                else
                    count = 1;
                pre = temp;
                if(count == maxCount)
                    res.add(temp.val);
                if(count &gt; maxCount){
                    maxCount = count;
                    res.clear();
                    res.add(temp.val);
                }
            }
        }
        int[] result = new int[res.size()];
        int i = 0;
        for (int x : res){
            result[i] = x;
            i++;
        }
        return result;    
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>递归法（版本一）利用字典</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, val=0, left=None, right=None):</span>
<span class="token comment">#         self.val = val</span>
<span class="token comment">#         self.left = left</span>
<span class="token comment">#         self.right = right</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> defaultdict

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> freq_map<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cur <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        freq_map<span class="token punctuation">[</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># 统计元素频率</span>
        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span> freq_map<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span> freq_map<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">findMode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">:</span>
        freq_map <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token comment"># key:元素，value:出现频率</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>root<span class="token punctuation">,</span> freq_map<span class="token punctuation">)</span>
        max_freq <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>freq_map<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> key<span class="token punctuation">,</span> freq <span class="token keyword">in</span> freq_map<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> freq <span class="token operator">==</span> max_freq<span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归法（版本二）利用二叉搜索树性质</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>maxCount <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 最大频率</span>
        self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 统计频率</span>
        self<span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cur <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span>

        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>  <span class="token comment"># 左</span>
        <span class="token comment"># 中</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>pre <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 第一个节点</span>
            self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>pre<span class="token punctuation">.</span>val <span class="token operator">==</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">:</span>  <span class="token comment"># 与前一个节点数值相同</span>
            self<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 与前一个节点数值不同</span>
            self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
        self<span class="token punctuation">.</span>pre <span class="token operator">=</span> cur  <span class="token comment"># 更新上一个节点</span>

        <span class="token keyword">if</span> self<span class="token punctuation">.</span>count <span class="token operator">==</span> self<span class="token punctuation">.</span>maxCount<span class="token punctuation">:</span>  <span class="token comment"># 如果与最大值频率相同，放进result中</span>
            self<span class="token punctuation">.</span>result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

        <span class="token keyword">if</span> self<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>maxCount<span class="token punctuation">:</span>  <span class="token comment"># 如果计数大于最大值频率</span>
            self<span class="token punctuation">.</span>maxCount <span class="token operator">=</span> self<span class="token punctuation">.</span>count  <span class="token comment"># 更新最大频率</span>
            self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">]</span>  <span class="token comment"># 很关键的一步，不要忘记清空result，之前result里的元素都失效了</span>

        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>  <span class="token comment"># 右</span>
        <span class="token keyword">return</span>

    <span class="token keyword">def</span> <span class="token function">findMode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>maxCount <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 记录前一个节点</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        self<span class="token punctuation">.</span>searchBST<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">findMode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">:</span>
        st <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        cur <span class="token operator">=</span> root
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        maxCount <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 最大频率</span>
        count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 统计频率</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        <span class="token keyword">while</span> cur <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">or</span> st<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cur <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 指针来访问节点，访问到最底层</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>  <span class="token comment"># 将访问的节点放进栈</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left  <span class="token comment"># 左</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> pre <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 第一个节点</span>
                    count <span class="token operator">=</span> <span class="token number">1</span>
                <span class="token keyword">elif</span> pre<span class="token punctuation">.</span>val <span class="token operator">==</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">:</span>  <span class="token comment"># 与前一个节点数值相同</span>
                    count <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 与前一个节点数值不同</span>
                    count <span class="token operator">=</span> <span class="token number">1</span>

                <span class="token keyword">if</span> count <span class="token operator">==</span> maxCount<span class="token punctuation">:</span>  <span class="token comment"># 如果和最大值相同，放进result中</span>
                    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

                <span class="token keyword">if</span> count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">:</span>  <span class="token comment"># 如果计数大于最大值频率</span>
                    maxCount <span class="token operator">=</span> count  <span class="token comment"># 更新最大频率</span>
                    result <span class="token operator">=</span> <span class="token punctuation">[</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">]</span>  <span class="token comment"># 很关键的一步，不要忘记清空result，之前result里的元素都失效了</span>

                pre <span class="token operator">=</span> cur
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right  <span class="token comment"># 右</span>

        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><p>计数法，不使用额外空间，利用二叉树性质，中序遍历</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    count <span class="token operator">:=</span> <span class="token number">1</span>
    max <span class="token operator">:=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> prev <span class="token operator">*</span>TreeNode
    <span class="token keyword">var</span> travel <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> 
    travel <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token function">travel</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> prev <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>Val <span class="token operator">==</span> node<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            count <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> count <span class="token operator">&gt;=</span> max <span class="token punctuation">{</span>
            <span class="token keyword">if</span> count <span class="token operator">&gt;</span> max <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            max <span class="token operator">=</span> count
        <span class="token punctuation">}</span>
        prev <span class="token operator">=</span> node
        <span class="token function">travel</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><p>使用额外空间map的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findMode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用递归中序遍历</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1. 确定递归函数以及函数参数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">traverTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 确定递归终止条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">traverTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 3. 单层递归逻辑</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token operator">?</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">traverTree</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//上面把数据都存储到map</span>
    <span class="token comment">//下面开始寻找map里面的</span>
    <span class="token comment">// 定义一个最大出现次数的初始值为root.val的出现次数</span>
    <span class="token keyword">let</span> maxCount <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 定义一个存放结果的数组res</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span>value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前值等于最大出现次数就直接在res增加该值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token operator">&gt;</span>maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            maxCount <span class="token operator">=</span> value<span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用额外空间，利用二叉树性质，中序遍历(有序)：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findMode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>maxCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> root<span class="token punctuation">,</span>res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.确定递归函数及函数参数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">travelTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 确定递归终止条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">travelTree</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3. 单层递归逻辑</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            maxCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">travelTree</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">travelTree</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><blockquote><p>辅助Map法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> countMap<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        countMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">(</span>countMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> countArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>countMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    countArr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> maxCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> countArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> countArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>递归中直接解决</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个节点</span>
            count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>val <span class="token operator">===</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            maxCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
            resArr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        preNode <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findMode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> helperStack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> preNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> helperStack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            helperStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> helperStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个节点</span>
                count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>val <span class="token operator">===</span> curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                maxCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
                resArr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h3><p>暴力:</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token comment">// 导包</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span> <span class="token comment">// 集合包</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>util<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span>Breaks<span class="token punctuation">.</span><span class="token punctuation">{</span>break<span class="token punctuation">,</span> breakable<span class="token punctuation">}</span> <span class="token comment">// 流程控制包</span>
  <span class="token keyword">def</span> findMode<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> map <span class="token operator">=</span> mutable<span class="token punctuation">.</span>HashMap<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存储节点的值，和该值出现的次数</span>
    <span class="token keyword">def</span> searchBST<span class="token punctuation">(</span>curNode<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span>getOrElse<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      map<span class="token punctuation">.</span>put<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> 
      searchBST<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      searchBST<span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    searchBST<span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 前序遍历把每个节点的值加入到里面</span>
    <span class="token comment">// 将map转换为list，随后根据元组的第二个值进行排序</span>
    <span class="token keyword">val</span> list <span class="token operator">=</span> map<span class="token punctuation">.</span>toList<span class="token punctuation">.</span>sortWith<span class="token punctuation">(</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> map2<span class="token punctuation">)</span> <span class="token keyword">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span>_2 <span class="token operator">&gt;</span> map2<span class="token punctuation">.</span>_2<span class="token punctuation">)</span> <span class="token boolean">true</span> <span class="token keyword">else</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ArrayBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>list<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_1<span class="token punctuation">)</span> <span class="token comment">// 将第一个加入结果集</span>
    breakable <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">1</span> until list<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果值相同就加入结果集合，反之break</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>_2 <span class="token operator">==</span> list<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_2<span class="token punctuation">)</span> res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>list<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>_1<span class="token punctuation">)</span>
        <span class="token keyword">else</span> break
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span>toArray <span class="token comment">// 最终返回res的Array格式，return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归(利用二叉搜索树的性质):</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable</span>
  <span class="token keyword">def</span> findMode<span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> maxCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 最大频率</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 统计频率</span>
    <span class="token keyword">var</span> pre<span class="token operator">:</span> TreeNode <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> mutable<span class="token punctuation">.</span>ArrayBuffer<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> searchBST<span class="token punctuation">(</span>cur<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 等于空置为1</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>value <span class="token operator">==</span> cur<span class="token punctuation">.</span>value<span class="token punctuation">)</span> count <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// 与上一个节点的值相同加1</span>
      <span class="token keyword">else</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 与上一个节点的值不同</span>
      pre <span class="token operator">=</span> cur

      <span class="token comment">// 如果和最大值相同，则放入结果集</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> maxCount<span class="token punctuation">)</span> result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

      <span class="token comment">// 如果当前计数大于最大值频率，更新最大值，清空结果集</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxCount <span class="token operator">=</span> count
        result<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      searchBST<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    searchBST<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    result<span class="token punctuation">.</span>toArray  <span class="token comment">// return关键字可以省略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><p>递归：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_mode</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> pre <span class="token operator">=</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">search_bst</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> pre<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> res<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> count<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> max_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res
    <span class="token punctuation">}</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">search_bst</span><span class="token punctuation">(</span>
        cur<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token keyword">mut</span> pre<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        count<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        max_count<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> cur_node <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">search_bst</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cur_node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pre<span class="token punctuation">,</span> res<span class="token punctuation">,</span> count<span class="token punctuation">,</span> max_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token operator">*</span>pre <span class="token operator">==</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span> <span class="token punctuation">{</span>
            <span class="token operator">*</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token operator">*</span>pre <span class="token operator">==</span> cur_node<span class="token punctuation">.</span>val <span class="token punctuation">{</span>
            <span class="token operator">*</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token operator">*</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">match</span> count<span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>max_count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Equal</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur_node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Greater</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token operator">*</span>max_count <span class="token operator">=</span> <span class="token operator">*</span>count<span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur_node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            _ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token operator">*</span>pre <span class="token operator">=</span> cur_node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">search_bst</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cur_node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pre<span class="token punctuation">,</span> res<span class="token punctuation">,</span> count<span class="token punctuation">,</span> max_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_mode</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> cur<span class="token punctuation">,</span> <span class="token keyword">mut</span> pre<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> stack <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> count<span class="token punctuation">,</span> <span class="token keyword">mut</span> max_count<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> cur<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> cur <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> pre <span class="token operator">==</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span> <span class="token punctuation">{</span>
                    count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> pre <span class="token operator">==</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token punctuation">{</span>
                    count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">match</span> count<span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>max_count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Equal</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Greater</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        max_count <span class="token operator">=</span> count<span class="token punctuation">;</span>
                        res<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    _ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                pre <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 递归 
public class Solution
{
    public List&lt;int&gt; res = new List&lt;int&gt;();
    public int count = 0;
    public int maxCount = 0;
    public TreeNode pre = null;
    public int[] FindMode(TreeNode root)
    {
        SearchBST(root);
        return res.ToArray();
    }
    public void SearchBST(TreeNode root)
    {
        if (root == null) return;
        SearchBST(root.left);
        if (pre == null)
            count = 1;
        else if (pre.val == root.val)
            count++;
        else
            count = 1;

        pre = root;
        if (count == maxCount)
        {
            res.Add(root.val);
        }
        else if (count &gt; maxCount)
        {
            res.Clear();
            res.Add(root.val);
            maxCount = count;
        }
        SearchBST(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55);function x(C,_){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("a",k,[s("力扣题目链接"),p(a)])]),d,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),p(a)]),s("："),n("a",m,[s("不仅双指针，还有代码技巧可以惊艳到你！ | LeetCode：501.二叉搜索树中的众数"),p(a)]),s("，相信结合视频在看本篇题解，更有助于大家对本题的理解")]),s("。")]),b,n("p",null,[s("在"),n("a",f,[s("二叉树：搜索树的最小绝对差"),p(a)]),s("中我们就使用了pre指针和cur指针的技巧，这次又用上了。")]),y,n("ul",null,[n("li",null,[n("a",g,[s("二叉树：前中后序迭代法"),p(a)])]),n("li",null,[n("a",w,[s("二叉树：前中后序统一风格的迭代方式"),p(a)])])]),h])}const T=e(i,[["render",x],["__file","0501.erchasousuoshuzhongdezhongshu.html.vue"]]);export{T as default};
