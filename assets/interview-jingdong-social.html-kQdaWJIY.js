import{_ as i,o as l,c as a,e}from"./app-3RcBQnkC.js";const r={},d=e('<h2 id="个人情况" tabindex="-1"><a class="header-anchor" href="#个人情况" aria-hidden="true">#</a> 个人情况</h2><p>本人 92 年 5 年传统行业 Java 开发。出于对技术（金钱）的热爱，面试了几家 互联网大厂，最终入职<code>京东</code>。下面是我的面经分享</p><h2 id="美团" tabindex="-1"><a class="header-anchor" href="#美团" aria-hidden="true">#</a> 美团</h2><p>美团面试难度较大，基本上问到的所有内容都会深挖原理。所以有些东西自己对于原理不熟 尽量不要自己主动提出来，不然就是给自己挖坑。当时不懂这个道理，所以美团一面 2 个小时还是被 pass 了（谁让自己扯那么多了），面试体验也不是很好，面试官全程口罩无表情给人压力较大。</p><h3 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h3><ul><li><p>自我介绍。自我介绍要简洁抓住要点，最好不要超过 3 分钟。</p></li><li><p>项目有没有进行 mysql 调优，如何做的？为什么这么做？</p></li><li><p>mysql 事务隔离级别知道吗？mvcc了解吗？mvcc 解决了什么问题？</p></li><li><p>redis 项目中使用了吗？怎么用的？</p></li><li><p>redis 的数据结构你知道的说一下</p></li><li><p>redis 常见问题以及解决方案（雪崩、穿透、击穿）</p></li><li><p>跳表、布隆过滤器数据结构说一下。有什么使用场景、好处。</p></li><li><p>redis 集群，项目中如何使用的</p></li><li><p>redis 内存淘汰策略</p></li><li><p>juc 包下用过哪些类，有没有看过源码</p></li><li><p>线程池执行过程</p></li><li><p>线程池淘汰策略</p></li><li><p>AQS 原理</p></li><li><p>手写 LRU 算法</p></li></ul><h3 id="个人感受" tabindex="-1"><a class="header-anchor" href="#个人感受" aria-hidden="true">#</a> 个人感受</h3><p>我面试的美团部门，对于技术的要求还是很高的。</p><p>基本上你简历上写到的技能点以及项目上用到的技能点都会深挖原理的，所以千万不要给自 己挖坑。本来面试只是问 redis 基本数据结构，你非要提底层是什么实现的，那么对应的 sds、跳表、布隆过滤你都要理解不然就会被自己挖的坑埋了。</p><p>另外美团面试官全程口罩根本感觉不出他的表情和情绪，给人的压迫感很大。所以要提前做好心里准备，当然只要技术过硬这些都不是问题。</p><h2 id="滴滴" tabindex="-1"><a class="header-anchor" href="#滴滴" aria-hidden="true">#</a> 滴滴</h2><p>滴滴面试整体体验不错，但是二面和三面难度较大。基本上是一周一面。</p><h3 id="一面-1" tabindex="-1"><a class="header-anchor" href="#一面-1" aria-hidden="true">#</a> 一面</h3><ul><li><p>自我介绍</p></li><li><p>Object 类了解吗？有哪些方法，具体说下每个方法的作用。</p></li><li><p>== 和 equals 有什么区别</p></li><li><p>java 的几个特性。继承、封装、多态并说说你对他们的理解</p></li><li><p>说下你了解的设计模式，项目中如何使用的。</p></li><li><p>设计模式的 8 大原则知道吗？开闭原则你如何理解的。</p></li><li><p>hashMap 了解吗？底层数据结构是什么，有没有看过源码，扩容机制了解吗？</p></li><li><p>mysql 了解吗？索引底层数据结构，为什么是 B+ 树。</p></li><li><p>mysql 事务的原子性实现原理</p></li><li><p>说下 juc 下的 lock</p></li><li><p>线程池的参数以及各自的作用</p></li><li><p>AQS 了解吗？说一下它的原理。</p></li><li><p>手写一个字符串压缩算法。（就是 aaaabbbbcccc 变成 a4b4c4 ）</p></li></ul><h3 id="二面" tabindex="-1"><a class="header-anchor" href="#二面" aria-hidden="true">#</a> 二面</h3><ul><li>自我介绍</li><li>介绍一个自己熟悉的项目，主要是业务逻辑。</li><li>项目中的难点，哪些地方做的不好有什么改进的方法。</li><li>设计一个可以支撑峰值20万QPS，5千写库操作的系统。</li><li>系统设计（上一个问题）的缺陷在哪里，如何解决。</li></ul><h3 id="三面" tabindex="-1"><a class="header-anchor" href="#三面" aria-hidden="true">#</a> 三面</h3><ul><li>自我介绍</li><li>介绍一下自己做的最好的一个项目，有哪些亮点。具体说一下细节。</li><li>数据库与缓存一致性解决方案，不同方案适用场景以及存在的问题。</li><li>设计一个支撑 10 万 QPS 的系统查看当前滴滴司机查看历史订单的系统。</li><li>手写一个时间复杂度为O（n），空间复杂度为O（1）的将一个单链表转为为一个新的按照奇偶顺序的新的单链表。</li></ul><h3 id="个人感受-1" tabindex="-1"><a class="header-anchor" href="#个人感受-1" aria-hidden="true">#</a> 个人感受</h3><p>滴滴的面试是他们客服流量分发部门，面试曲线感觉很陡峭。</p><p>一面都是基础问题略简单（当然一定要基础过关），算法也不难。吸取美团的教训面试过程并没有主动拓展太多很顺利就二面了。</p><p>但是二面和三面的难度陡增，可能和面试职位是 D7 有关系吧。直接要求设计一个支撑具体 QPS、TPS 值的系统，三面甚至直接要设计滴滴（WTF？黑人问号脸），这种问题对于我这 种没有互联网经验的老 crud 来说真的很棘手。只能按照自己平时积累的关于系统设计的所有点和层面进行分析，从服务端 nginx、网关层、应用层、redis 集群、分库分表（运行之后的扩容）各个点去逐个分析了，虽然通过了面试但是这种面试让我感觉挺痛苦的（当然这也正是我想提高自己的地方，不然还搞啥互联网啊？）。所以滴滴这边更重视你的大局观，系统设计分析能力。</p><h2 id="京东" tabindex="-1"><a class="header-anchor" href="#京东" aria-hidden="true">#</a> 京东</h2><p>京东面试体验不错，比较注重对于知识的理解。面试官很善于引导你，所以压力没有那么大。</p><h3 id="一面-2" tabindex="-1"><a class="header-anchor" href="#一面-2" aria-hidden="true">#</a> 一面</h3><ul><li>自我介绍</li><li>hashMap 底层数据结构，扩容过程。树化的条件，平时项目怎么使用的。</li><li>synchronized 和 lock 的区别。各自实现原理</li><li>说说你对并发中的原子性、可见性、有序性的理解</li><li>线程有几个状态？线程池各个参数说一下</li><li>jvm 垃圾回收算法有哪些</li><li>jvm 垃圾回收器你知道哪些？jdk8 默认垃圾回收器是什么？</li><li>项目中有没有 jvm 调优的经验</li><li>如果让你设计一个 jvm 内存管理系统，你会怎么做。</li></ul><h3 id="二面-1" tabindex="-1"><a class="header-anchor" href="#二面-1" aria-hidden="true">#</a> 二面</h3><ul><li>自我介绍</li><li>说下你认为做的最好的一个项目的业务逻辑。</li><li>项目中遇到最大的问题，你是如何解决的。</li><li>java8 新特性了解吗？项目中怎么使用的</li><li>有没有进行过代码重构，怎么做的以及原因</li><li>项目中如何进行 mysql 调优的，说下过程</li><li>为什么使用索引会加快查询速度</li><li>项目中怎么使用 redis 的</li><li>分布式锁了解吗？什么场景下会用，怎么使用。</li><li>redis 集群有几种，热 key 问题如何解决。</li><li>redis 持久化方式有几种，原理是什么？</li><li>手写一个 demo 可以控制多个线程在同一时间同时执行相同任务。</li></ul><h3 id="三面-1" tabindex="-1"><a class="header-anchor" href="#三面-1" aria-hidden="true">#</a> 三面</h3><ul><li>自我介绍</li><li>spring 中 bean 的生命周期 spring 事务实现原理，事务不生效的场景有哪些</li><li>分布式事务了解吗？如何实现，各自优缺点</li><li>java 自带的 jvm 监控工具使用过吗？可以说一下具体使用案例吗？</li><li>线上 oom 如何排查</li><li>如何在不影响线上系统运行的情况下进行数据库水平扩容，给出一个可行的方案</li></ul><h3 id="个人感受-2" tabindex="-1"><a class="header-anchor" href="#个人感受-2" aria-hidden="true">#</a> 个人感受</h3><p>京东这边面试相对美团和滴滴来说更加注重你对知识的理解（确定入职之后，面试官亲口和我说的）。所以回答问题要带上自己的理解，除了问题本身都会问你项目中怎么用的问什么。</p><p>一面就问我如何设计一个 jvm 内存管理系统，那么就需要你对 jvm 内存管理（GC）这一块很熟。也不是说每个人都会这样问，肯定是跟着你的简历内容走。当然你要是自己给自己挖坑那就没办法了。</p><p>京东二面三面都很注重你的业务理解能力，不单纯是技术层面。也会让你去表述自己所做系统的业务逻辑，面试官人还是很好的，非常乐意引导你。相对来说给我感觉是最好的。</p>',34),h=[d];function p(n,s){return l(),a("div",null,h)}const t=i(r,[["render",p],["__file","interview-jingdong-social.html.vue"]]);export{t as default};
