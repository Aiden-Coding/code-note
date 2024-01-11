import{_ as a,o as e,c as r,e as t}from"./app-3RcBQnkC.js";const o={},i=t('<h1 id="如何找出某一天访问百度网站最多的-ip" tabindex="-1"><a class="header-anchor" href="#如何找出某一天访问百度网站最多的-ip" aria-hidden="true">#</a> 如何找出某一天访问百度网站最多的 IP？</h1><h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h3><p>现有海量日志数据保存在一个超大文件中，该文件无法直接读入内存，要求从中提取某天访问百度次数最多的那个 IP。</p><h3 id="解答思路" tabindex="-1"><a class="header-anchor" href="#解答思路" aria-hidden="true">#</a> 解答思路</h3><p>这道题只关心某一天访问百度最多的 IP，因此，可以首先对文件进行一次遍历，把这一天访问百度 IP 的相关信息记录到一个单独的大文件中。接下来采用的方法与上一题一样，大致就是先对 IP 进行哈希映射，接着使用 HashMap 统计重复 IP 的次数，最后计算出重复次数最多的 IP。</p><blockquote><p>注：这里只需要找出出现次数最多的 IP，可以不必使用堆，直接用一个变量 max 即可。</p></blockquote><h3 id="方法总结" tabindex="-1"><a class="header-anchor" href="#方法总结" aria-hidden="true">#</a> 方法总结</h3><ol><li>分而治之，进行哈希取余；</li><li>使用 HashMap 统计频数；</li><li>求解<strong>最大</strong>的 TopN 个，用<strong>小顶堆</strong>；求解<strong>最小</strong>的 TopN 个，用<strong>大顶堆</strong>。</li></ol>',8),n=[i];function s(h,d){return e(),r("div",null,n)}const l=a(o,[["render",s],["__file","find-top-1-ip.html.vue"]]);export{l as default};
