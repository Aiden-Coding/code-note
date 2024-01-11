import{_ as n,r as d,o as t,c as s,a as e,d as r,w as h,b as c,e as o}from"./app-3RcBQnkC.js";const i={},l=o('<h1 id="项目中缓存是如何使用的-为什么要用缓存-缓存使用不当会造成什么后果" tabindex="-1"><a class="header-anchor" href="#项目中缓存是如何使用的-为什么要用缓存-缓存使用不当会造成什么后果" aria-hidden="true">#</a> 项目中缓存是如何使用的？为什么要用缓存？缓存使用不当会造成什么后果？</h1><h2 id="面试官心理分析" tabindex="-1"><a class="header-anchor" href="#面试官心理分析" aria-hidden="true">#</a> 面试官心理分析</h2><p>这个问题，互联网公司必问，要是一个人连缓存都不太清楚，那确实比较尴尬。</p><p>只要问到缓存，上来第一个问题，肯定是先问问你项目哪里用了缓存？为啥要用？不用行不行？如果用了以后可能会有什么不良的后果？</p><p>这就是看看你对缓存这个东西背后有没有思考，如果你就是傻乎乎的瞎用，没法给面试官一个合理的解答，那面试官对你印象肯定不太好，觉得你平时思考太少，就知道干活儿。</p><h2 id="面试题剖析" tabindex="-1"><a class="header-anchor" href="#面试题剖析" aria-hidden="true">#</a> 面试题剖析</h2><h3 id="项目中缓存是如何使用的" tabindex="-1"><a class="header-anchor" href="#项目中缓存是如何使用的" aria-hidden="true">#</a> 项目中缓存是如何使用的？</h3><p>这个，需要结合自己项目的业务来。</p><h3 id="为什么要用缓存" tabindex="-1"><a class="header-anchor" href="#为什么要用缓存" aria-hidden="true">#</a> 为什么要用缓存？</h3><p>用缓存，主要有两个用途：<strong>高性能</strong>、<strong>高并发</strong>。</p><h4 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h4><p>假设这么个场景，你有个操作，一个请求过来，吭哧吭哧你各种乱七八糟操作 mysql，半天查出来一个结果，耗时 600ms。但是这个结果可能接下来几个小时都不会变了，或者变了也可以不用立即反馈给用户。那么此时咋办？</p><p>缓存啊，折腾 600ms 查出来的结果，扔缓存里，一个 key 对应一个 value，下次再有人查，别走 mysql 折腾 600ms 了，直接从缓存里，通过一个 key 查出来一个 value，2ms 搞定。性能提升 300 倍。</p><p>就是说对于一些需要复杂操作耗时查出来的结果，且确定后面不怎么变化，但是有很多读请求，那么直接将查询出来的结果放在缓存中，后面直接读缓存就好。</p><h4 id="高并发" tabindex="-1"><a class="header-anchor" href="#高并发" aria-hidden="true">#</a> 高并发</h4><p>mysql 这么重的数据库，压根儿设计不是让你玩儿高并发的，虽然也可以玩儿，但是天然支持不好。mysql 单机支撑到 <code>2000QPS</code> 也开始容易报警了。</p><p>所以要是你有个系统，高峰期一秒钟过来的请求有 1 万，那一个 mysql 单机绝对会死掉。你这个时候就只能上缓存，把很多数据放缓存，别放 mysql。缓存功能简单，说白了就是 <code>key-value</code> 式操作，单机支撑的并发量轻松一秒几万十几万，支撑高并发 so easy。单机承载并发量是 mysql 单机的几十倍。</p><blockquote><p>缓存是走内存的，内存天然就支撑高并发。</p></blockquote><h3 id="用了缓存之后会有什么不良后果" tabindex="-1"><a class="header-anchor" href="#用了缓存之后会有什么不良后果" aria-hidden="true">#</a> 用了缓存之后会有什么不良后果？</h3><p>常见的缓存问题有以下几个：</p>',20),p=e("p",null,"点击超链接，可直接查看缓存相关问题及解决方案。",-1);function u(m,_){const a=d("RouterLink");return t(),s("div",null,[l,e("ul",null,[e("li",null,[r(a,{to:"/docs/high-concurrency/redis-consistence.html"},{default:h(()=>[c("缓存与数据库双写不一致")]),_:1})]),e("li",null,[r(a,{to:"/docs/high-concurrency/redis-caching-avalanche-and-caching-penetration.html"},{default:h(()=>[c("缓存雪崩、缓存穿透、缓存击穿")]),_:1})]),e("li",null,[r(a,{to:"/docs/high-concurrency/redis-cas.html"},{default:h(()=>[c("缓存并发竞争")]),_:1})])]),p])}const y=n(i,[["render",u],["__file","why-cache.html.vue"]]);export{y as default};
