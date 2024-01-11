import{_ as s,r as d,o as a,c as l,a as n,b as e,d as r,e as t}from"./app-3RcBQnkC.js";const o={},c=n("h1",{id:"看了这么多代码-谈一谈代码风格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#看了这么多代码-谈一谈代码风格","aria-hidden":"true"},"#"),e(" 看了这么多代码，谈一谈代码风格！")],-1),p={href:"https://mp.weixin.qq.com/s/wZRTrA9Rbvgq1yEkSw4vfQ",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>很多录友对代码规范应该了解得不多，代码看起来并不舒服。</p><p>所以呢，我给大家讲一讲代码规范，我主要以C++代码为例。</p><p>需要强调一下，代码规范并不是仅仅是让代码看着舒服，这是一个很重要的习惯。</p><h2 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话" aria-hidden="true">#</a> 题外话</h2><p>工作之后，<strong>特别是在大厂，看谁的技术牛不牛逼，不用看谁写出多牛逼的代码，就代码风格扫一眼，立刻就能看出来是正规军还是野生程序员</strong>。</p><p>很多人甚至不屑于了解代码规范，认为实现功能就行，这种观点其实在上个世纪是很普遍的，因为那时候一般写代码不需要合作，自己一个人撸整个项目，想怎么写就怎么写。</p><p>现在一些小公司，甚至大公司里的某些技术团队也不注重代码规范，赶进度撸出功能就完事，这种情况就要分两方面看：</p><ul><li><p>第一种情况：这个项目在业务上具有巨大潜力，需要抢占市场，只要先站住市场就能赚到钱，每年年终好几十万，那项目前期还关心啥代码风格，赶进度把功能撸出来，赚钱就完事了，例如12年的微信，15年的王者荣耀。这些项目都是后期再不断优化的。</p></li><li><p>第二种情况：这个项目没赚到钱，半死不活的，代码还没有设计也没有规范，这样对技术人员的伤害就非常大了。</p></li></ul><p><strong>而不注重代码风格的团队，99.99%都是第二种情况</strong>，如果你赶上了第一种情况，那就恭喜你了，本文下面的内容可以不用看了。</p><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h2><h3 id="变量命名" tabindex="-1"><a class="header-anchor" href="#变量命名" aria-hidden="true">#</a> 变量命名</h3><p>这里我简单说一说规范问题。</p><p><strong>权威的C++规范以Google为主</strong>，我给大家下载了一份中文版本，在公众号「代码随想录」后台回复：编程规范，就可以领取。</p><p><strong>具体的规范要以自己团队风格为主</strong>，融入团队才是最重要的。</p><p>我先来说说变量的命名。</p><p>主流有如下三种变量规则：</p><ul><li>小驼峰、大驼峰命名法</li><li>下划线命名法</li><li>匈牙利命名法</li></ul><p>小驼峰，第一个单词首字母小写，后面其他单词首字母大写。例如 <code>int myAge;</code></p><p>大驼峰法把第一个单词的首字母也大写了。例如：<code>int MyAge;</code></p><p>通常来讲 java和go都使用驼峰，C++的函数和结构体命名也是用大驼峰，<strong>大家可以看到题解中我的C++代码风格就是小驼峰，因为leetcode上给出的默认函数的命名就是小驼峰，所以我入乡随俗</strong>。</p><p>下划线命名法是名称中的每一个逻辑断点都用一个下划线来标记，例如：<code>int my_age</code>，<strong>下划线命名法是随着C语言的出现流行起来的，如果大家看过UNIX高级编程或者UNIX网络编程，就会发现大量使用这种命名方式</strong>。</p><p>匈牙利命名法是：变量名 = 属性 + 类型 + 对象描述，例如：<code>int iMyAge</code>，这种命名是一个来此匈牙利的程序员在微软内部推广起来，然后推广给了全世界的Windows开发人员。</p><p>这种命名方式在没有IDE的时代，可以很好的提醒开发人员遍历的意义，例如看到iMyAge，就知道它是一个int型的变量，而不用找它的定义，缺点是一旦改变变量的属性，那么整个项目里这个变量名字都要改动，所以带来代码维护困难。</p><p><strong>目前IDE已经很发达了，都不用标记变量属性了，IDE就会帮我们识别了，所以基本没人用匈牙利命名法了</strong>，虽然我不用IDE，VIM大法好。</p><p>我做了一下总结如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201119173039835.png" alt="编程风格"></p><h3 id="水平留白-代码空格" tabindex="-1"><a class="header-anchor" href="#水平留白-代码空格" aria-hidden="true">#</a> 水平留白（代码空格）</h3><p>经常看到有的同学的代码都堆在一起，看起来都费劲，或者是有的间隔有空格，有的没有空格，很不统一，有的同学甚至为了让代码精简，把所有空格都省略掉了。</p><p>大家如果注意我题解上的代码风格，我的空格都是有统一规范的。</p><p><strong>我所有题解的C++代码，都是严格按照Google C++编程规范来的，这样代码看起来就让人感觉清爽一些</strong>。</p><p>我举一些例子：</p><p>操作符左右一定有空格，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>i = i + 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分隔符（<code>,</code> 和<code>;</code>）前一位没有空格，后一位保持空格，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int i, j;
for (int fastIndex = 0; fastIndex &lt; nums.size(); fastIndex++)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>大括号和函数保持同一行，并有一个空格例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (n) {
    n--;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制语句（while，if，for）后都有一个空格，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (n) {
    if (k &gt; 0) return 9;
    n--;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是我刚写的力扣283.移动零的代码，大家可以看一下整体风格，注意空格的细节！</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void moveZeroes(vector&lt;int&gt;&amp; nums) {
        int slowIndex = 0;
        for (int fastIndex = 0; fastIndex &lt; nums.size(); fastIndex++) {
            if (nums[fastIndex] != 0) {
                nums[slowIndex++] = nums[fastIndex];
            }
        }
        for (int i = slowIndex; i &lt; nums.size(); i++) {
            nums[i] = 0;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里关于大括号是否要重启一行？</p><p>Google规范是 大括号和 控制语句保持同一行的，我个人也很认可这种写法，因为可以缩短代码的行数，特别是项目中代码行数很多的情况下，这种写法是可以提高阅读代码的效率。</p><p>当然我并不是说一定要按照Google的规范来，<strong>代码风格其实统一就行，没有严格的说谁对谁错</strong>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>如果还是学生，使用C++的话，可以按照题解中我的代码风格来，还是比较标准的。</p><p>如果不是C++就自己选一种代码风格坚持下来，</p><p>如果已经工作的录友，就要融入团队的代码风格了，团队怎么写，自己就怎么来，毕竟不是一个人在战斗。</p><p>就酱，以后我还会陆续分享，关于代码，求职，学习工作之类的内容。</p><hr>`,50);function v(m,g){const i=d("ExternalLinkIcon");return a(),l("div",null,[c,n("p",null,[e("最近看了很多录友在"),n("a",p,[e("leetcode-master"),r(i)]),e("上提交的代码，发现很多录友的代码其实并不规范，这一点平时在交流群和知识星球里也能看出来。")]),u])}const b=s(o,[["render",v],["__file","daimafengge.html.vue"]]);export{b as default};
