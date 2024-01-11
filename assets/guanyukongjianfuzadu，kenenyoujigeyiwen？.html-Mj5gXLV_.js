import{_ as a,r as l,o,c as t,a as n,b as e,d as i,e as E}from"./app-3RcBQnkC.js";const s={},d=n("h1",{id:"空间复杂度分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#空间复杂度分析","aria-hidden":"true"},"#"),e(" 空间复杂度分析")],-1),p={href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E5%85%B3%E4%BA%8E%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E9%83%BD%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%81.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/On%E7%9A%84%E7%AE%97%E6%B3%95%E5%B1%85%E7%84%B6%E8%B6%85%E6%97%B6%E4%BA%86%EF%BC%8C%E6%AD%A4%E6%97%B6%E7%9A%84n%E7%A9%B6%E7%AB%9F%E6%98%AF%E5%A4%9A%E5%A4%A7%EF%BC%9F.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E9%80%9A%E8%BF%87%E4%B8%80%E9%81%93%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%EF%BC%8C%E8%AE%B2%E4%B8%80%E8%AE%B2%E9%80%92%E5%BD%92%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%81.html",target:"_blank",rel:"noopener noreferrer"},B=E(`<p>那么一直还没有讲空间复杂度，所以打算陆续来补上，内容不难，大家可以读一遍文章就有整体的了解了。</p><p>什么是空间复杂度呢？</p><p>是对一个算法在运行过程中占用内存空间大小的量度，记做S(n)=O(f(n)。</p><p>空间复杂度(Space Complexity)记作S(n) 依然使用大O来表示。利用程序的空间复杂度，可以对程序运行中需要多少内存有个预先估计。</p><p>关注空间复杂度有两个常见的相关问题</p><ol><li>空间复杂度是考虑程序（可执行文件）的大小么？</li></ol><p>很多同学都会混淆程序运行时内存大小和程序本身的大小。这里强调一下<strong>空间复杂度是考虑程序运行时占用内存的大小，而不是可执行文件的大小。</strong></p><ol start="2"><li>空间复杂度是准确算出程序运行时所占用的内存么？</li></ol><p>不要以为空间复杂度就已经精准的掌握了程序的内存使用大小，很多因素会影响程序真正内存使用大小，例如编译器的内存对齐，编程语言容器的底层实现等等这些都会影响到程序内存的开销。</p><p>所以空间复杂度是预先大体评估程序内存使用的大小。</p><p>说到空间复杂度，我想同学们在OJ（online judge）上应该遇到过这种错误，就是超出内存限制，一般OJ对程序运行时的所消耗的内存都有一个限制。</p><p>为了避免内存超出限制，这也需要我们对算法占用多大的内存有一个大体的预估。</p><p>同样在工程实践中，计算机的内存空间也不是无限的，需要工程师对软件运行时所使用的内存有一个大体评估，这都需要用到算法空间复杂度的分析。</p><p>来看一下例子，什么时候的空间复杂度是$O(1)$呢，C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int j = 0;
for (int i = 0; i &lt; n; i++) {
    j++;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一段代码可以看出，随着n的变化，所需开辟的内存空间并不会随着n的变化而变化。即此算法空间复杂度为一个常量，所以表示为大O(1)。</p><p>什么时候的空间复杂度是O(n)？</p><p>当消耗空间和输入参数n保持线性增长，这样的空间复杂度为O(n)，来看一下这段C++代码</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>int* a = new int(n);
for (int i = 0; i &lt; n; i++) {
    a[i] = i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们定义了一个数组出来，这个数组占用的大小为n，虽然有一个for循环，但没有再分配新的空间，因此，这段代码的空间复杂度主要看第一行即可，随着n的增大，开辟的内存大小呈线性增长，即 O(n)。</p><p>其他的 O(n^2)， O(n^3) 我想大家应该都可以以此例举出来了，<strong>那么思考一下 什么时候空间复杂度是 O(logn)呢？</strong></p><p>空间复杂度是logn的情况确实有些特殊，其实是在<strong>递归的时候，会出现空间复杂度为logn的情况</strong>。</p><p>至于如何求递归的空间复杂度，我会在专门写一篇文章来介绍的，敬请期待！</p><hr>`,24);function m(A,g){const r=l("ExternalLinkIcon");return o(),t("div",null,[d,n("ul",null,[n("li",null,[n("a",p,[e("关于时间复杂度，你不知道的都在这里！"),i(r)])]),n("li",null,[n("a",c,[e("O(n)的算法居然超时了，此时的n究竟是多大？"),i(r)])]),n("li",null,[n("a",u,[e("通过一道面试题目，讲一讲递归算法的时间复杂度！"),i(r)])])]),B])}const _=a(s,[["render",m],["__file","guanyukongjianfuzadu，kenenyoujigeyiwen？.html.vue"]]);export{_ as default};
