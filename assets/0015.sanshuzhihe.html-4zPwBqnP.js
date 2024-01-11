import{_ as p,r as i,o as l,c as o,a as n,b as s,d as t,e}from"./app-3RcBQnkC.js";const c={},u={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},r=n("h1",{id:"第15题-三数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第15题-三数之和","aria-hidden":"true"},"#"),s(" 第15题. 三数之和")],-1),d={href:"https://leetcode.cn/problems/3sum/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。",-1),v=n("p",null,[n("strong",null,"注意："),s(" 答案中不可以包含重复的三元组。")],-1),m=n("p",null,"示例：",-1),b=n("p",null,"给定数组 nums = [-1, 0, 1, 2, -1, -4]，",-1),h=n("p",null,"满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]",-1),g=n("h2",{id:"算法公开课",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法公开课","aria-hidden":"true"},"#"),s(" 算法公开课")],-1),f={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1GW4y127qo",target:"_blank",rel:"noopener noreferrer"},y=e(`<p><strong>注意[0， 0， 0， 0] 这组数据</strong></p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><h3 id="哈希解法" tabindex="-1"><a class="header-anchor" href="#哈希解法" aria-hidden="true">#</a> 哈希解法</h3><p>两层for循环就可以确定 a 和b 的数值了，可以使用哈希法来确定 0-(a+b) 是否在 数组里出现过，其实这个思路是正确的，但是我们有一个非常棘手的问题，就是题目中说的不可以包含重复的三元组。</p><p>把符合条件的三元组放进vector中，然后再去重，这样是非常费时的，很容易超时，也是这道题目通过率如此之低的根源所在。</p><p>去重的过程不好处理，有很多小细节，如果在面试中很难想到位。</p><p>时间复杂度可以做到O(n^2)，但还是比较费时的，因为不好做剪枝操作。</p><p>大家可以尝试使用哈希法写一写，就知道其困难的程度了。</p><p>哈希法C++代码:</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {
        vector&lt;vector&lt;int&gt;&gt; result;
        sort(nums.begin(), nums.end());
        // 找出a + b + c = 0
        // a = nums[i], b = nums[j], c = -(a + b)
        for (int i = 0; i &lt; nums.size(); i++) {
            // 排序之后如果第一个元素已经大于零，那么不可能凑成三元组
            if (nums[i] &gt; 0) {
                break;
            }
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) { //三元组元素a去重
                continue;
            }
            unordered_set&lt;int&gt; set;
            for (int j = i + 1; j &lt; nums.size(); j++) {
                if (j &gt; i + 2
                        &amp;&amp; nums[j] == nums[j-1]
                        &amp;&amp; nums[j-1] == nums[j-2]) { // 三元组元素b去重
                    continue;
                }
                int c = 0 - (nums[i] + nums[j]);
                if (set.find(c) != set.end()) {
                    result.push_back({nums[i], nums[j], c});
                    set.erase(c);// 三元组元素c去重
                } else {
                    set.insert(nums[j]);
                }
            }
        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n^2)</li><li>空间复杂度: O(n)，额外的 set 开销</li></ul><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><p><strong>其实这道题目使用哈希法并不十分合适</strong>，因为在去重的操作中有很多细节需要注意，在面试中很难直接写出没有bug的代码。</p><p>而且使用哈希法 在使用两层for循环的时候，能做的剪枝操作很有限，虽然时间复杂度是O(n^2)，也是可以在leetcode上通过，但是程序的执行时间依然比较长 。</p><p>接下来我来介绍另一个解法：双指针法，<strong>这道题目使用双指针法 要比哈希法高效一些</strong>，那么来讲解一下具体实现的思路。</p><p>动画效果如下：</p><p><img src="https://code-thinking.cdn.bcebos.com/gifs/15.三数之和.gif" alt="15.三数之和"></p><p>拿这个nums数组来举例，首先将数组排序，然后有一层for循环，i从下标0的地方开始，同时定一个下标left 定义在i+1的位置上，定义下标right 在数组结尾的位置上。</p><p>依然还是在数组中找到 abc 使得a + b +c =0，我们这里相当于 a = nums[i]，b = nums[left]，c = nums[right]。</p><p>接下来如何移动left 和right呢， 如果nums[i] + nums[left] + nums[right] &gt; 0 就说明 此时三数之和大了，因为数组是排序后了，所以right下标就应该向左移动，这样才能让三数之和小一些。</p><p>如果 nums[i] + nums[left] + nums[right] &lt; 0 说明 此时 三数之和小了，left 就向右移动，才能让三数之和大一些，直到left与right相遇为止。</p><p>时间复杂度：O(n^2)。</p><p>C++代码代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {
        vector&lt;vector&lt;int&gt;&gt; result;
        sort(nums.begin(), nums.end());
        // 找出a + b + c = 0
        // a = nums[i], b = nums[left], c = nums[right]
        for (int i = 0; i &lt; nums.size(); i++) {
            // 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
            if (nums[i] &gt; 0) {
                return result;
            }
            // 错误去重a方法，将会漏掉-1,-1,2 这种情况
            /*
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            */
            // 正确去重a方法
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = nums.size() - 1;
            while (right &gt; left) {
                // 去重复逻辑如果放在这里，0，0，0 的情况，可能直接导致 right&lt;=left 了，从而漏掉了 0,0,0 这种三元组
                /*
                while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;
                */
                if (nums[i] + nums[left] + nums[right] &gt; 0) right--;
                else if (nums[i] + nums[left] + nums[right] &lt; 0) left++;
                else {
                    result.push_back(vector&lt;int&gt;{nums[i], nums[left], nums[right]});
                    // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
                    while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                    while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;

                    // 找到答案时，双指针同时收缩
                    right--;
                    left++;
                }
            }

        }
        return result;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: O(n^2)</li><li>空间复杂度: O(1)</li></ul><h3 id="去重逻辑的思考" tabindex="-1"><a class="header-anchor" href="#去重逻辑的思考" aria-hidden="true">#</a> 去重逻辑的思考</h3><h4 id="a的去重" tabindex="-1"><a class="header-anchor" href="#a的去重" aria-hidden="true">#</a> a的去重</h4><p>说到去重，其实主要考虑三个数的去重。 a, b ,c, 对应的就是 nums[i]，nums[left]，nums[right]</p><p>a 如果重复了怎么办，a是nums里遍历的元素，那么应该直接跳过去。</p><p>但这里有一个问题，是判断 nums[i] 与 nums[i + 1]是否相同，还是判断 nums[i] 与 nums[i-1] 是否相同。</p><p>有同学可能想，这不都一样吗。</p><p>其实不一样！</p><p>都是和 nums[i]进行比较，是比较它的前一个，还是比较它的后一个。</p><p>如果我们的写法是 这样：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>if (nums[i] == nums[i + 1]) { // 去重操作
    continue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们就把 三元组中出现重复元素的情况直接pass掉了。 例如{-1, -1 ,2} 这组数据，当遍历到第一个-1 的时候，判断 下一个也是-1，那这组数据就pass了。</p><p><strong>我们要做的是 不能有重复的三元组，但三元组内的元素是可以重复的！</strong></p><p>所以这里是有两个重复的维度。</p><p>那么应该这么写：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) {
    continue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写就是当前使用 nums[i]，我们判断前一位是不是一样的元素，在看 {-1, -1 ,2} 这组数据，当遍历到 第一个 -1 的时候，只要前一位没有-1，那么 {-1, -1 ,2} 这组数据一样可以收录到 结果集里。</p><p>这是一个非常细节的思考过程。</p><h4 id="b与c的去重" tabindex="-1"><a class="header-anchor" href="#b与c的去重" aria-hidden="true">#</a> b与c的去重</h4><p>很多同学写本题的时候，去重的逻辑多加了 对right 和left 的去重：（代码中注释部分）</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>while (right &gt; left) {
    if (nums[i] + nums[left] + nums[right] &gt; 0) {
        right--;
        // 去重 right
        while (left &lt; right &amp;&amp; nums[right] == nums[right + 1]) right--;
    } else if (nums[i] + nums[left] + nums[right] &lt; 0) {
        left++;
        // 去重 left
        while (left &lt; right &amp;&amp; nums[left] == nums[left - 1]) left++;
    } else {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但细想一下，这种去重其实对提升程序运行效率是没有帮助的。</p><p>拿right去重为例，即使不加这个去重逻辑，依然根据 <code>while (right &gt; left) </code> 和 <code>if (nums[i] + nums[left] + nums[right] &gt; 0)</code> 去完成right-- 的操作。</p><p>多加了 <code> while (left &lt; right &amp;&amp; nums[right] == nums[right + 1]) right--;</code> 这一行代码，其实就是把 需要执行的逻辑提前执行了，但并没有减少 判断的逻辑。</p><p>最直白的思考过程，就是right还是一个数一个数的减下去的，所以在哪里减的都是一样的。</p><p>所以这种去重 是可以不加的。 仅仅是 把去重的逻辑提前了而已。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2>`,51),_={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},$=n("p",null,[s("如果不能，题意如何更改就可以使用双指针法呢？ "),n("strong",null,"大家留言说出自己的想法吧！")],-1),S={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},j=e(`<h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {
        List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
        Arrays.sort(nums);
	// 找出a + b + c = 0
        // a = nums[i], b = nums[left], c = nums[right]
        for (int i = 0; i &lt; nums.length; i++) {
	    // 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
            if (nums[i] &gt; 0) { 
                return result;
            }

            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) {  // 去重a
                continue;
            }

            int left = i + 1;
            int right = nums.length - 1;
            while (right &gt; left) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum &gt; 0) {
                    right--;
                } else if (sum &lt; 0) {
                    left++;
                } else {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
		    // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
                    while (right &gt; left &amp;&amp; nums[right] == nums[right - 1]) right--;
                    while (right &gt; left &amp;&amp; nums[left] == nums[left + 1]) left++;
                    
                    right--; 
                    left++;
                }
            }
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><p>（版本一） 双指针</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Solution:
    def threeSum(self, nums: List[int]) -&gt; List[List[int]]:
        result = []
        nums.sort()
        
        for i in range(len(nums)):
            # 如果第一个元素已经大于0，不需要进一步检查
            if nums[i] &gt; 0:
                return result
            
            # 跳过相同的元素以避免重复
            if i &gt; 0 and nums[i] == nums[i - 1]:
                continue
                
            left = i + 1
            right = len(nums) - 1
            
            while right &gt; left:
                sum_ = nums[i] + nums[left] + nums[right]
                
                if sum_ &lt; 0:
                    left += 1
                elif sum_ &gt; 0:
                    right -= 1
                else:
                    result.append([nums[i], nums[left], nums[right]])
                    
                    # 跳过相同的元素以避免重复
                    while right &gt; left and nums[right] == nums[right - 1]:
                        right -= 1
                    while right &gt; left and nums[left] == nums[left + 1]:
                        left += 1
                        
                    right -= 1
                    left += 1
                    
        return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（版本二） 使用字典</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 找出a + b + c = 0</span>
        <span class="token comment"># a = nums[i], b = nums[j], c = -(a + b)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 排序之后如果第一个元素已经大于零，那么不可能凑成三元组</span>
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment">#三元组元素a去重</span>
                <span class="token keyword">continue</span>
            d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">2</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># 三元组元素b去重</span>
                    <span class="token keyword">continue</span>
                c <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">-</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> c <span class="token keyword">in</span> d<span class="token punctuation">:</span>
                    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">)</span>
                    d<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment"># 三元组元素c去重</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    d<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> j
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}
	// 找出a + b + c = 0
	// a = nums[i], b = nums[left], c = nums[right]
	for i := 0; i &lt; len(nums)-2; i++ {
		// 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
		n1 := nums[i]
		if n1 &gt; 0 {
			break
		}
		// 去重a
		if i &gt; 0 &amp;&amp; n1 == nums[i-1] {
			continue
		}
		l, r := i+1, len(nums)-1
		for l &lt; r {
			n2, n3 := nums[l], nums[r]
			if n1+n2+n3 == 0 {
				res = append(res, []int{n1, n2, n3})
				// 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
				for l &lt; r &amp;&amp; nums[l] == n2 {
					l++
				}
				for l &lt; r &amp;&amp; nums[r] == n3 {
					r--
				}
			} else if n1+n2+n3 &lt; 0 {
				l++
			} else {
				r--
			}
		}
	}
	return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token comment">// 将数组排序</span>
    nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> l <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> iNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 数组排过序，如果第一个数大于0直接返回res</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>iNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res
        <span class="token comment">// 去重</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>iNum <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> lNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> rNum <span class="token operator">=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> threeSum <span class="token operator">=</span> iNum <span class="token operator">+</span> lNum <span class="token operator">+</span> rNum
            <span class="token comment">// 三数之和小于0，则左指针向右移动</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>threeSum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> l<span class="token operator">++</span> 
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>threeSum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> r<span class="token operator">--</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>iNum<span class="token punctuation">,</span> lNum<span class="token punctuation">,</span> rNum<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token comment">// 去重</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    l<span class="token operator">++</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>r <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    r<span class="token operator">--</span>
                <span class="token punctuation">}</span>
                l<span class="token operator">++</span>
                r<span class="token operator">--</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解法二：nSum通用解法。递归</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 *  nsum通用解法，支持2sum，3sum，4sum...等等
 *  时间复杂度分析：
 *  1. n = 2时，时间复杂度O(NlogN)，排序所消耗的时间。、
 *  2. n &gt; 2时，时间复杂度为O(N^n-1)，即N的n-1次方，至少是2次方，此时可省略排序所消耗的时间。举例：3sum为O(n^2)，4sum为O(n^3)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// nsum通用解法核心方法</span>
    <span class="token keyword">function</span> <span class="token function">nSumTarget</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> n<span class="token punctuation">,</span> start<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 前提：nums要先排序好</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token function">towSumTarget</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 递归求(n - 1)sum</span>
                <span class="token keyword">let</span> subRes <span class="token operator">=</span> <span class="token function">nSumTarget</span><span class="token punctuation">(</span>
                    nums<span class="token punctuation">,</span>
                    n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> subRes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>subRes<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 跳过相同元素</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">towSumTarget</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 前提：nums要先排序好</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> start<span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 相等</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 跳过相同元素</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// n = 3，此时求3sum之和</span>
    <span class="token keyword">return</span> <span class="token function">nSumTarget</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> left<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> resArr<span class="token punctuation">;</span> <span class="token comment">//nums经过排序后，只要nums[i]&gt;0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。	</span>
	<span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        right <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> total<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                resArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby" aria-hidden="true">#</a> Ruby:</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">is_valid</span></span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
    symbol_map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&#39;)&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;(&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;}&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;{&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;]&#39;</span></span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&#39;[&#39;</span></span><span class="token punctuation">}</span>
    stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    strs<span class="token punctuation">.</span>size<span class="token punctuation">.</span>times <span class="token punctuation">{</span><span class="token operator">|</span>i<span class="token operator">|</span>
        c <span class="token operator">=</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> symbol_map<span class="token punctuation">.</span>has_key<span class="token operator">?</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
            top_e <span class="token operator">=</span> stack<span class="token punctuation">.</span>shift
            <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token keyword">if</span> symbol_map<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">!=</span> top_e
        <span class="token keyword">else</span>
            stack<span class="token punctuation">.</span>unshift<span class="token punctuation">(</span>c<span class="token punctuation">)</span>
        <span class="token keyword">end</span>
    <span class="token punctuation">}</span>
    stack<span class="token punctuation">.</span>empty<span class="token operator">?</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP:</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">Integer<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token parameter">$nums</span>
     * <span class="token keyword">@return</span> <span class="token class-name">Integer<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">threeSum</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">sort</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token variable">$res</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token variable">$left</span> <span class="token operator">=</span> <span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token variable">$right</span> <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$nums</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$left</span> <span class="token operator">&lt;</span> <span class="token variable">$right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$sum</span> <span class="token operator">=</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$left</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$right</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$sum</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$left</span><span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$sum</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$right</span><span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$left</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$right</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$left</span> <span class="token operator">&lt;</span> <span class="token variable">$right</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$left</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$left</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token variable">$left</span><span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$left</span> <span class="token operator">&lt;</span> <span class="token variable">$right</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$right</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">$nums</span><span class="token punctuation">[</span><span class="token variable">$right</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token variable">$right</span><span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token variable">$left</span><span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token variable">$right</span><span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$res</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// 双指针法</span>
<span class="token keyword">func</span> <span class="token function-definition function">threeSum</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> nums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> sorted <span class="token operator">=</span> nums
    sorted<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> sorted<span class="token punctuation">.</span>count <span class="token punctuation">{</span>
        <span class="token keyword">if</span> sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> sorted<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> <span class="token keyword">left</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">var</span> <span class="token keyword">right</span> <span class="token operator">=</span> sorted<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> <span class="token keyword">left</span> <span class="token operator">&lt;</span> <span class="token keyword">right</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> sum <span class="token operator">=</span> sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> sorted<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span> <span class="token operator">+</span> sorted<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> sum <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> sum <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">right</span> <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span>sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> sorted<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sorted<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                
                <span class="token keyword">while</span> <span class="token keyword">left</span> <span class="token operator">&lt;</span> <span class="token keyword">right</span> <span class="token operator">&amp;&amp;</span> sorted<span class="token punctuation">[</span><span class="token keyword">left</span><span class="token punctuation">]</span> <span class="token operator">==</span> sorted<span class="token punctuation">[</span><span class="token keyword">left</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">while</span> <span class="token keyword">left</span> <span class="token operator">&lt;</span> <span class="token keyword">right</span> <span class="token operator">&amp;&amp;</span> sorted<span class="token punctuation">[</span><span class="token keyword">right</span><span class="token punctuation">]</span> <span class="token operator">==</span> sorted<span class="token punctuation">[</span><span class="token keyword">right</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    <span class="token keyword">right</span> <span class="token operator">-=</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
                
                <span class="token keyword">left</span> <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token keyword">right</span> <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>// 哈希解法
use std::collections::HashSet;
impl Solution {
    pub fn three_sum(nums: Vec&lt;i32&gt;) -&gt; Vec&lt;Vec&lt;i32&gt;&gt; {
        let mut result: Vec&lt;Vec&lt;i32&gt;&gt; = Vec::new();
        let mut nums = nums;
        nums.sort();
        let len = nums.len();
        for i in 0..len {
            if nums[i] &gt; 0 { break; }
            if i &gt; 0 &amp;&amp; nums[i] == nums[i - 1] { continue; }
            let mut set = HashSet::new();
            for j in (i + 1)..len {
                if j &gt; i + 2 &amp;&amp; nums[j] == nums[j - 1] &amp;&amp; nums[j] == nums[j - 2] { continue; }
                let c = 0 - (nums[i] + nums[j]);
                if set.contains(&amp;c) {
                    result.push(vec![nums[i], nums[j], c]);
                    set.remove(&amp;c);
                } else { set.insert(nums[j]); }
            }
        }
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Rust line-numbers-mode" data-ext="Rust"><pre class="language-Rust"><code>// 双指针法
use std::cmp::Ordering;
impl Solution {
    pub fn three_sum(nums: Vec&lt;i32&gt;) -&gt; Vec&lt;Vec&lt;i32&gt;&gt; {
        let mut result: Vec&lt;Vec&lt;i32&gt;&gt; = Vec::new();
        let mut nums = nums;
        nums.sort();
        let len = nums.len();
        for i in 0..len {
            if nums[i] &gt; 0 { return result; }
            if i &gt; 0 &amp;&amp; nums[i] == nums[i - 1] { continue; }
            let (mut left, mut right) = (i + 1, len - 1);
            while left &lt; right {
                match (nums[i] + nums[left] + nums[right]).cmp(&amp;0){
		    Ordering::Equal =&gt;{
		        result.push(vec![nums[i], nums[left], nums[right]]);
			left +=1;
			right -=1;
			while left &lt; right &amp;&amp; nums[left] == nums[left - 1]{
			    left += 1;
			}
			while left &lt; right &amp;&amp; nums[right] == nums[right+1]{
			    right -= 1;
			}
		    }
		    Ordering::Greater =&gt; right -= 1,
		    Ordering::Less =&gt; left += 1,
		}
            }
        }
        result
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//qsort辅助cmp函数
int cmp(const void* ptr1, const void* ptr2) {
    return *((int*)ptr1) &gt; *((int*)ptr2);
}

int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    //开辟ans数组空间
    int **ans = (int**)malloc(sizeof(int*) * 18000);
    int ansTop = 0;
    //若传入nums数组大小小于3，则需要返回数组大小为0
    if(numsSize &lt; 3) {
        *returnSize = 0;
        return ans;
    }
    //对nums数组进行排序
    qsort(nums, numsSize, sizeof(int), cmp);
    

    int i;
    //用for循环遍历数组，结束条件为i &lt; numsSize - 2(因为要预留左右指针的位置)
    for(i = 0; i &lt; numsSize - 2; i++) {
        //若当前i指向元素&gt;0，则代表left和right以及i的和大于0。直接break
        if(nums[i] &gt; 0)
            break;
        //去重：i &gt; 0 &amp;&amp; nums[i] == nums[i-1]
        if(i &gt; 0 &amp;&amp; nums[i] == nums[i-1])
            continue;
        //定义左指针和右指针
        int left = i + 1;
        int right = numsSize - 1;
        //当右指针比左指针大时进行循环
        while(right &gt; left) {
            //求出三数之和
            int sum = nums[right] + nums[left] + nums[i];
            //若和小于0，则左指针+1（因为左指针右边的数比当前所指元素大）
            if(sum &lt; 0)
                left++;
            //若和大于0，则将右指针-1
            else if(sum &gt; 0)
                right--;
            //若和等于0
            else {
                //开辟一个大小为3的数组空间，存入nums[i], nums[left]和nums[right]
                int* arr = (int*)malloc(sizeof(int) * 3);
                arr[0] = nums[i];
                arr[1] = nums[left];
                arr[2] = nums[right];
                //将开辟数组存入ans中
                ans[ansTop++] = arr;
                //去重
                while(right &gt; left &amp;&amp; nums[right] == nums[right - 1])
                    right--;
                while(left &lt; right &amp;&amp; nums[left] == nums[left + 1])
                    left++;
                //更新左右指针
                left++;
                right--;
            }
        }
    }

    //设定返回的数组大小
    *returnSize = ansTop;
    *returnColumnSizes = (int*)malloc(sizeof(int) * ansTop);
    int z;
    for(z = 0; z &lt; ansTop; z++) {
        (*returnColumnSizes)[z] = 3;
    }
    return ans;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#:</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IList<span class="token punctuation">&lt;</span>IList<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">ThreeSum</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>IList<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        Array<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">int</span></span> n1 <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n1 <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">int</span></span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">int</span></span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">int</span></span> n2 <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">int</span></span> n3 <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">int</span></span> sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2 <span class="token operator">+</span> n3<span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span>
                <span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n3 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> n2<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> n3<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">object</span> Solution <span class="token punctuation">{</span>
  <span class="token comment">// 导包</span>
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>mutable<span class="token punctuation">.</span></span>ListBuffer
  <span class="token keyword">import</span> <span class="token namespace">scala<span class="token punctuation">.</span>util<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span>Breaks<span class="token punctuation">.</span><span class="token punctuation">{</span>break<span class="token punctuation">,</span> breakable<span class="token punctuation">}</span>

  <span class="token keyword">def</span> threeSum<span class="token punctuation">(</span>nums<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义结果集，最后需要转换为List</span>
    <span class="token keyword">val</span> res <span class="token operator">=</span> ListBuffer<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> nums_tmp <span class="token operator">=</span> nums<span class="token punctuation">.</span>sorted <span class="token comment">// 对nums进行排序</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> nums_tmp<span class="token punctuation">.</span>indices<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果要排的第一个数字大于0，直接返回结果</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums_tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>toList
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果i大于0并且和前一个数字重复，则跳过本次循环，相当于continue</span>
      breakable <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums_tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> nums_tmp<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          break
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
          <span class="token keyword">var</span> right <span class="token operator">=</span> nums_tmp<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> sum <span class="token operator">=</span> nums_tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> nums_tmp<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> nums_tmp<span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token comment">// 求三数之和</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> left <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> right <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
              res <span class="token operator">+=</span> List<span class="token punctuation">(</span>nums_tmp<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> nums_tmp<span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> nums_tmp<span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 如果等于0 添加进结果集</span>
              <span class="token comment">// 为了避免重复，对left和right进行移动</span>
              <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums_tmp<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">==</span> nums_tmp<span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> left <span class="token operator">+=</span> <span class="token number">1</span>
              <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums_tmp<span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">==</span> nums_tmp<span class="token punctuation">(</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> right <span class="token operator">-=</span> <span class="token number">1</span>
              left <span class="token operator">+=</span> <span class="token number">1</span>
              right <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最终返回需要转换为List，return关键字可以省略</span>
    res<span class="token punctuation">.</span>toList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function L(C,z){const a=i("ExternalLinkIcon");return l(),o("div",null,[n("blockquote",null,[n("p",null,[s("用哈希表解决了"),n("a",u,[s("两数之和"),t(a)]),s("，那么三数之和呢？")])]),r,n("p",null,[n("a",d,[s("力扣题目链接"),t(a)])]),k,v,m,b,h,g,n("p",null,[n("strong",null,[n("a",f,[s("《代码随想录》算法视频公开课"),t(a)]),s("："),n("a",w,[s("梦破碎的地方！| LeetCode：15.三数之和"),t(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),y,n("p",null,[s("既然三数之和可以使用双指针法，我们之前讲过的"),n("a",_,[s("1.两数之和"),t(a)]),s("，可不可以使用双指针法呢？")]),$,n("p",null,[s("两数之和 就不能使用双指针法，因为"),n("a",S,[s("1.两数之和"),t(a)]),s("要求返回的是索引下标， 而双指针法一定要排序，一旦排序之后原数组的索引就被改变了。")]),n("p",null,[s("如果"),n("a",x,[s("1.两数之和"),t(a)]),s("要求返回的是数值的话，就可以使用双指针法了。")]),j])}const E=p(c,[["render",L],["__file","0015.sanshuzhihe.html.vue"]]);export{E as default};
