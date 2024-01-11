import{_ as i,r as l,o as d,c as h,a as e,b as t,d as n,w as o,e as r}from"./app-3RcBQnkC.js";const a={},u=e("h1",{id:"高并发架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#高并发架构","aria-hidden":"true"},"#"),t(" 高并发架构")],-1),_={id:"消息队列",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#消息队列","aria-hidden":"true"},"#",-1),g={id:"搜索引擎",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#搜索引擎","aria-hidden":"true"},"#",-1),y=e("h2",{id:"缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#缓存","aria-hidden":"true"},"#"),t(" 缓存")],-1),p=e("h2",{id:"分库分表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分库分表","aria-hidden":"true"},"#"),t(" 分库分表")],-1),b=e("h2",{id:"读写分离",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#读写分离","aria-hidden":"true"},"#"),t(" 读写分离")],-1),x=e("h2",{id:"高并发系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#高并发系统","aria-hidden":"true"},"#"),t(" 高并发系统")],-1),R=e("hr",null,null,-1),w=e("h2",{id:"公众号",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#公众号","aria-hidden":"true"},"#"),t(" 公众号")],-1),v={href:"https://github.com/doocs",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"Doocs",-1),k=e("strong",null,"专注分享技术领域相关知识及行业最新资讯",-1),q=r('<table><tr><td align="center" style="width:260px;"><img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/images/qrcode-for-doocs.png" style="width:400px;"><br></td><td align="center" style="width:260px;"><img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/images/qrcode-for-yanglbme.png" style="width:400px;"><br></td></tr></table><p>关注「<strong>Doocs</strong>」公众号，回复 <strong>PDF</strong>，即可获取本项目离线 PDF 文档（283 页精华），学习更加方便！</p><p><img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/advanced-java@main/images/pdf.png" style="width:600px;"><br></p>',3);function E(L,M){const c=l("RouterLink"),s=l("ExternalLinkIcon");return d(),h("div",null,[u,e("h2",_,[m,t(),n(c,{to:"/docs/high-concurrency/mq-interview.html"},{default:o(()=>[t("消息队列")]),_:1})]),e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/why-mq.html"},{default:o(()=>[t("为什么使用消息队列？消息队列有什么优点和缺点？Kafka、ActiveMQ、RabbitMQ、RocketMQ 都有什么优点和缺点？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/how-to-ensure-high-availability-of-message-queues.html"},{default:o(()=>[t("如何保证消息队列的高可用？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/how-to-ensure-that-messages-are-not-repeatedly-consumed.html"},{default:o(()=>[t("如何保证消息不被重复消费？（如何保证消息消费的幂等性）")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/how-to-ensure-the-reliable-transmission-of-messages.html"},{default:o(()=>[t("如何保证消息的可靠性传输？（如何处理消息丢失的问题）")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/how-to-ensure-the-order-of-messages.html"},{default:o(()=>[t("如何保证消息的顺序性？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/mq-time-delay-and-expired-failure.html"},{default:o(()=>[t("如何解决消息队列的延时以及过期失效问题？消息队列满了以后该怎么处理？有几百万消息持续积压几小时，说说怎么解决？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/mq-design.html"},{default:o(()=>[t("如果让你写一个消息队列，该如何进行架构设计啊？说一下你的思路。")]),_:1})])]),e("h2",g,[f,t(),n(c,{to:"/docs/high-concurrency/es-introduction.html"},{default:o(()=>[t("搜索引擎")]),_:1})]),e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/es-architecture.html"},{default:o(()=>[t("ES 的分布式架构原理能说一下么（ES 是如何实现分布式的啊）？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/es-write-query-search.html"},{default:o(()=>[t("ES 写入数据的工作原理是什么啊？ES 查询数据的工作原理是什么啊？底层的 Lucene 介绍一下呗？倒排索引了解吗？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/es-optimizing-query-performance.html"},{default:o(()=>[t("ES 在数据量很大的情况下（数十亿级别）如何提高查询效率啊？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/es-production-cluster.html"},{default:o(()=>[t("ES 生产集群的部署架构是什么？每个索引的数据量大概有多少？每个索引大概有多少个分片？")]),_:1})])]),y,e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/why-cache.html"},{default:o(()=>[t("在项目中缓存是如何使用的？缓存如果使用不当会造成什么后果？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-single-thread-model.html"},{default:o(()=>[t("Redis 和 Memcached 有什么区别？Redis 的线程模型是什么？为什么单线程的 Redis 比多线程的 Memcached 效率要高得多？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-data-types.html"},{default:o(()=>[t("Redis 都有哪些数据类型？分别在哪些场景下使用比较合适？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-expiration-policies-and-lru.html"},{default:o(()=>[t("Redis 的过期策略都有哪些？手写一下 LRU 代码实现？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/how-to-ensure-high-concurrency-and-high-availability-of-redis.html"},{default:o(()=>[t("如何保证 Redis 高并发、高可用？Redis 的主从复制原理能介绍一下么？Redis 的哨兵原理能介绍一下么？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-persistence.html"},{default:o(()=>[t("Redis 的持久化有哪几种方式？不同的持久化机制都有什么优缺点？持久化机制具体底层是如何实现的？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-cluster.html"},{default:o(()=>[t("Redis 集群模式的工作原理能说一下么？在集群模式下，Redis 的 key 是如何寻址的？分布式寻址都有哪些算法？了解一致性 hash 算法吗？如何动态增加和删除一个节点？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-caching-avalanche-and-caching-penetration.html"},{default:o(()=>[t("了解什么是 redis 的雪崩、穿透和击穿？Redis 崩溃之后会怎么样？系统该如何应对这种情况？如何处理 Redis 的穿透？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-consistence.html"},{default:o(()=>[t("如何保证缓存与数据库的双写一致性？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-cas.html"},{default:o(()=>[t("Redis 的并发竞争问题是什么？如何解决这个问题？了解 Redis 事务的 CAS 方案吗？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-production-environment.html"},{default:o(()=>[t("生产环境中的 Redis 是怎么部署的？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/redis-rehash.html"},{default:o(()=>[t("有了解过 Redis rehash 的过程吗？")]),_:1})])]),p,e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/database-shard.html"},{default:o(()=>[t("为什么要分库分表（设计高并发系统的时候，数据库层面该如何设计）？用过哪些分库分表中间件？不同的分库分表中间件都有什么优点和缺点？你们具体是如何对数据库如何进行垂直拆分或水平拆分的？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/database-shard-method.html"},{default:o(()=>[t("现在有一个未分库分表的系统，未来要分库分表，如何设计才可以让系统从未分库分表动态切换到分库分表上？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/database-shard-dynamic-expand.html"},{default:o(()=>[t("如何设计可以动态扩容缩容的分库分表方案？")]),_:1})]),e("li",null,[n(c,{to:"/docs/high-concurrency/database-shard-global-id-generate.html"},{default:o(()=>[t("分库分表之后，id 主键如何处理？")]),_:1})])]),b,e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/mysql-read-write-separation.html"},{default:o(()=>[t("如何实现 MySQL 的读写分离？MySQL 主从复制原理是啥？如何解决 MySQL 主从同步的延时问题？")]),_:1})])]),x,e("ul",null,[e("li",null,[n(c,{to:"/docs/high-concurrency/high-concurrency-design.html"},{default:o(()=>[t("如何设计一个高并发系统？")]),_:1})])]),R,w,e("p",null,[t("GitHub 技术社区 "),e("a",v,[t("Doocs"),n(s)]),t(" 旗下唯一公众号「"),S,t("」​，欢迎扫码关注，"),k,t("。当然，也可以加我个人微信（备注：GitHub），拉你进技术交流群。")]),q])}const D=i(a,[["render",E],["__file","index.html.vue"]]);export{D as default};
