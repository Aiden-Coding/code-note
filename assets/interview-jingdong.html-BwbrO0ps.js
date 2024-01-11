import{_ as p,o as i,c as l,e as a}from"./app-3RcBQnkC.js";const e={},r=a('<h1 id="双非渣本菜鸡的面试之路" tabindex="-1"><a class="header-anchor" href="#双非渣本菜鸡的面试之路" aria-hidden="true">#</a> 双非渣本菜鸡的面试之路</h1><p>从春节过后，我，一位双非渣本的大三学生，便踏上了实习之旅，面试了不下三十场，虽然很菜，但是也相应地拿了一些 offer ,例如京东金融、人人车等五六家 offer</p><p>总结一下春招就是一个字：难。</p><p>没学历，技术还凑合，简历能过但是面试就有点困难。这期间收到了 N 个面试官的歧视，有些面试官感觉骨子里瞧不起我们这些双非的人。一下内容仅凭记忆回想起，还有一些必问的东西，总结在这里，希望能帮到大家！</p><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><p>这个真的就只能靠刷题，不敢说每家公司对于笔试的重视程度怎么样，反正笔试基本上是必须要过的一关</p><ul><li><p>队列。</p></li><li><p>数组。</p></li><li><p>栈。</p></li><li><p>链表。</p></li><li><p>树。</p></li><li><p>散列表(哈希表)。</p></li><li><p>堆。</p></li><li><p>图。</p></li><li><p>无序树：树中任意节点的子结点之间没有顺序关系、这种树称为无序树、也称为自由树。</p></li><li><p>有序树：树中任意节点的子结点之间有顺序关系、这种树称为有序树。</p></li><li><p>二叉树：每个节点最多含有两个子树的树称为二叉树。</p></li><li><p>完全二叉树。</p></li><li><p>满二叉树。</p></li><li><p>斜树。</p></li><li><p>平衡二叉树。</p></li><li><p>霍夫曼树：带权路径最短的二叉树称为哈夫曼树或最优二叉树。</p></li><li><p>红黑树。</p></li></ul><p>以及各种遍历方式、按层打印、统计距离等等。</p><p>树是基础，基本的数据结构还包括图、图的遍历方式。</p><p>DFS、BFS以及各种优缺点、贪心算法、回溯、以及建模等等等等，只能靠刷题来提升。</p><h3 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h3><ul><li>GET/POST 区别。</li><li>UDP/TCP区别。</li><li>TCP 三次握手。以及衍生出来一些列的 TCP 的问题：什么是 TIME-WAIT、为什么可以是三次挥手、为什么不能是两次握手、流量控制、滑动窗口、Nagle 算法、糊涂窗口综合症、拥塞控制、慢启动、拥塞避免、快重传、快恢复、长连接 VS 短连接、应用场景是什么。</li><li>HTTP 1.0、1.1、2.0。</li><li>说一下 HTTPS 的流程、SSL 是什么、什么是非对称加密、对称加密、RSA 具体实现。</li><li>OSI 七层模型是什么、都有哪些协议、TCP/IP 四层是什么。</li><li>DNS、ARP 协议原理。</li><li>地址栏输入 URL 发生了什么。</li><li>WebSocket 是什么。</li><li>一些网络安全问题、比如 DOS 攻击如何解决、DNS 欺骗如何解决、ARP欺骗、SQL注入、XSS、CSRF、iframe 安全问题、本地存储数据问题、第三方依赖的安全性问题。</li><li>HTTP 是不保存状态的协议、那么如何保存用户状态。</li><li>Cookie 的作用是什么、和 Session 有什么区别。</li><li>Session 的实现机制是什么、分布式环境下有什么注意事项、如果注销 Session、设置 Session 的时长如何操作、默认时长是多少。</li><li>HTTP 1.0 和 HTTP 1.1 的主要区别是什么。</li><li>各种协议与 HTTP 协议之间的关系。</li><li>Servlet、Filter 和 Listener 分别是什么，用在什么地方，JSP 页面如何进行处理。</li><li>请求转发、URL 重定向和包含有什么区别，如何实现。</li><li>如何判断远程机器上某个端口是否开启，项目中需要查看域名在本地的解析 IP ，如何操作。</li><li>Servlet 中，调用 JSP 展示元素和返回 String（即 api，一般是 json 数据）有什么区别。</li><li>nginx + tomcat 模式下，服务器段如何获取客户端请求 IP 。</li><li>Servlet 的生命周期是什么。</li><li>Servlet 是否是线程安全的。</li></ul><h3 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> Java基础</h3><ul><li><p>描述一下值传递和引用传递的区别。</p></li><li><p>== 和 equals 区别是什么、String 中的 equals 方法是如何重写的、为什么要重写 equals 方法、为什么要重写 hashCode 方法。</p></li><li><p>String s1 = new String(&quot;abc&quot;)、String s2 = &quot;abc&quot;、s1 == s2 。语句1在内存中创建了几个对象。</p></li><li><p>String 为什么是不可变的、jdk源码中的 String 如何定义的、为什么这么设计。</p></li><li><p>请描述一下 static 关键字和 final 关键字的用法。</p></li><li><p>接口和抽象类的区别是什么。</p></li><li><p>重载和重写的区别。</p></li><li><p>面向对象的三大特性，谈谈你对 xx 的理解。</p></li><li><p>考察的是基本类型的转换，及原码反码补码的运算。</p></li><li><p>byte 的取值范围是多少、怎么计算出来的。</p></li><li><p>HashMap 相关、HashMap 和 Hashtable 的区别、HashMap 和 HashSet 区别、HashMap 底层实现、HashMap 的长度为什么是 2 的幂次方、HashMap 多线程操作导致死循环问题、HashMap 的线程安全实现有哪些、ConcurrentHashMap 的底层实现。</p></li><li><p>Integer 缓存池。</p></li><li><p>UTF-8 和 Unicode 的关系。</p></li><li><p>项目为 UTF-8 环境，char c = ‘中’，是否合法。</p></li><li><p>Arrays.asList 获得的 List 使用时需要注意什么。</p></li><li><p>Collection 和 Collections 区别。</p></li><li><p>你知道 fail-fast 和 fail-safe 吗。</p></li><li><p>ArrayList 和 LinkedList 和 Vector 的区别。</p></li><li><p>Set 和 List 区别、Set 如何保证元素不重复。</p></li><li><p>UTF-8 与 GBK 互转、为什么会乱码。</p></li><li><p>重载和重写的区别。</p></li><li><p>为什么 Java 是解释性语言。</p></li><li><p>ConcurrentHashMap 1.7和1.8的区别：整体结构；put（）方法、get（）方法、resize（）方法、size（）方法</p></li><li><p>地址栏输入 URL 发生了什么。</p></li><li><p>组合和聚合的区别。</p></li><li><p>讲一下 CMS 垃圾回收器。</p></li><li><p>JDK 动态代理和 CGLib 动态代理、JDK 动态代理具体实现原理、CGLib 动态代理、两者对比。</p></li><li><p>Threadlocal 内存泄漏问题。</p></li><li><p>StringBuilder 安全怎么实现的、详细描述怎么扩容的。</p></li></ul><h3 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> MyBatis</h3><ul><li><p>Mybatis 执行流程。</p></li><li><p>Mybatis缓存。</p></li><li><p>Mybatis用到的设计模式。</p></li></ul><h3 id="java锁" tabindex="-1"><a class="header-anchor" href="#java锁" aria-hidden="true">#</a> Java锁</h3><ul><li><p>锁类型</p></li><li><p>悲观锁 VS 乐观锁</p><p>悲观锁代表 Synchronized 关键字。</p><p>Synchronized 关键字实现方法。</p><p>乐观锁代表 CAS 操作。</p><p>CAS 带来的 ABA 问题。</p><p>CAS 带来的循环时间长开销大问题。</p><p>CAS 带来的只能保证一个共享变量的原子操作问题。</p><p>CAS 是如何保证原子操作的。</p><p>AtomticXXX 实现的原理。</p><p>volatile 关键字。</p><p>内存可见性的原因。</p><p>禁止指令重排序的原因。</p><p>volatile 关键字不能保证原子操作的原因。</p><p>关于 volatile 关键字的讨论。</p><p>happen-before 规则介绍。</p></li><li><p>可重入锁、 可中断锁、公平锁、读写锁</p><p>谈谈对 AQS 的理解。</p><p>可重入锁。</p><p>可中断锁。</p><p>公平锁。</p><p>读写锁。</p></li><li><p>偏向锁/轻量级锁/重量级锁 升级过程。</p></li><li><p>补充</p><p>自旋锁。</p><p>分段锁。</p><p>轻量级锁就一定比重量级锁快吗。</p></li></ul><h3 id="java多线程" tabindex="-1"><a class="header-anchor" href="#java多线程" aria-hidden="true">#</a> Java多线程</h3><ul><li><p>线程与进程的区别</p><p>线程的状态。</p><p>Notify 和 wait 。</p><p>Thread.sleep() 和 Thread.yield() 的异同。</p><p>死锁的概念。</p><p>并发和并行的区别。</p><p>线程安全三要素。</p><p>如何实现线程安全。</p><p>保证线程安全的机制。</p><p>谈谈对对多线程的理解。</p><p>run 和 Start 方法的区别。</p></li><li><p>多线程</p><p>创建线程的方法。</p><p>线程池创建线程。</p><p>ThreadPoolExecutor介绍。</p><p>BlockingQueue。</p><p>ArrayBlockingQueue。</p><p>LinkedBlockingQueue。</p><p>LinkedBlockingQueue 和 ArrayBlockingQueue 的主要区别。</p><p>handler 拒绝策略。</p><p>线程池五种状态。</p><p>深入理解 ThreadPoolExecutor。</p><p>线程池中 ctl 属性的作用是什么。</p><p>shutdownNow 和 shutdown 的区别。</p><p>线程复用原理。</p><p>灵魂拷问：你如何设置你的线程池参数。</p><p>CountDownLatch 和 CyclicBarrier 区别。</p></li><li><p>多线程间通信的几种方式</p><p>使用 volatile 关键字。</p><p>锁机制。</p><p>final 关键词。</p><p>ThreadLocal 类。</p><p>JUC 包中的相关 lock 类</p></li></ul><h3 id="jvm内存模型" tabindex="-1"><a class="header-anchor" href="#jvm内存模型" aria-hidden="true">#</a> Jvm内存模型</h3><ul><li><p>JVM内存模型</p><p>程序计数器（记录当前线程）。</p><p>Java栈（虚拟机栈）。</p><p>本地方法栈。</p><p>堆。</p><p>方法区。</p><p>直接内存。</p></li><li><p>JVM 垃圾回收</p><p>垃圾判断标准。</p><p>引用计数法。</p><p>可达性分析算法（根索法）。</p></li><li><p>垃圾回收算法</p><p>标记清除。</p><p>复制算法。</p><p>标记整理。</p><p>分代回收。</p><p>GC 垃圾回收器。</p></li><li><p>垃圾收集器</p><p>Serial 垃圾收集器（单线程、复制算法） （新生代）。</p><p>ParNew 垃圾收集器（Serial+多线程） （新生代）。</p><p>Parallel Scavenge 收集器（多线程复制算法、高效） （新生代）。</p><p>Serial Old 收集器（单线程标记整理算法 ） （老年代）。</p><p>Parallel Old 收集器（多线程标记整理算法）（老年代）。</p><p>CMS 收集器（多线程标记清除算法） （老年代）。</p><p>G1垃圾回收器。</p></li><li><p>目前 web 应用中的垃圾收集器。</p></li><li><p>吞吐优先与响应优先。</p></li><li><p>Minor GC 和 Full GC。</p></li><li><p>Full Gc 触发条件。</p></li><li><p>对象内存布局。</p></li><li><p>为什么新生代存在两个 survivor 区。</p></li><li><p>一个对象真正不可用，要经历两次标记过程。</p></li></ul><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ul><li><p>什么是数据库事务、数据库事务的四个特性是什么。</p></li><li><p>请分别举例说明幻读和不可重复读、并描述一下它们之间的区别。</p></li><li><p>MySQL 的默认隔离级别是什么。</p></li><li><p>为什么要使用索引。</p></li><li><p>索引这么多优点，为什么不对表中每个字段都创建索引呢。</p></li><li><p>索引是如何提升查询速度的。</p></li><li><p>请说出你知道的索引失效的几种情况。</p></li><li><p>什么是聚簇索引与非聚簇索引</p></li><li><p>MySQL 索引主要使用的数据结构有哪些。</p></li><li><p>谈谈 MyISAM 和 InnoDb 实现 BTree 索引方式的区别。</p></li><li><p>什么是覆盖索引、请举例说明。</p></li><li><p>谈谈你对最左前缀原则的理解。</p></li><li><p>MySQL 中 InnoDb 和 MyISAM 有什么区别。</p></li><li><p>谈谈如何对SQL进行优化。</p></li><li><p>如何用 explain 分析 SQL 执行效率。</p></li><li><p>explain 显示的字段具体解释下。</p></li><li><p>请举出可能形成数据库死锁的原因、如何能避免死锁。</p></li><li><p>数据库中的乐观锁和悲观锁有什么区别、各适用于什么场景。</p></li><li><p>请结合你的开发经历，谈谈数据库中的乐观锁和悲观锁是具体如何被应用的。</p></li><li><p>索引的本质。</p></li><li><p>MySQL 存储引擎。</p></li><li><p>MySQL 索引</p><p>数据结构，B-Tree 和 B+Tree。</p><p>带有顺序访问指针的 B+Tree</p><p>索引的物理存储。</p><p>与 B-Tree 相比，B+Tree 有什么不同。</p><p>为什么 B+Tree 更适合做文件索引。</p><p>为什么不用 AVL 树或者红黑树做索引。</p><p>两种引擎的索引存储机制。</p><p>MyISAM 索引实现。</p><p>InnoDB 索引实现。</p><p>索引失效条件。</p><p>索引类型</p><p>哈希索引。</p><p>有序数组。</p><p>B+ 树索引（InnoDB）。</p><p>联合索引。</p><p>最左前缀原则。</p><p>覆盖索引。</p><p>索引下推。</p></li></ul><h3 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h3><ul><li><p>Spring bean 的生命周期</p><p>初始化容器。</p><p>Bean 属性注入、更改以及初始化。</p><p>Bean 的使用。</p><p>关闭容器、销毁 Bean。</p></li><li><p>Spring如何解决 bean 的循环依赖</p><p>容器循环依赖。</p><p>setter循环依赖。</p><p>构造器循环依赖</p></li><li><p>Bean 的加载过程</p></li><li><p>BeanFactory 和 FactoryBean 的区别</p></li><li><p>Bean 注册与使用</p></li><li><p>Spring 三级缓存如何解决循环依赖。</p></li><li><p>Spring事务、原理、传播行为、失效条件。</p></li><li><p>AOP</p></li><li><p>IOC</p></li><li><p>SpringBoot 自动注入原理、stater原理、启动流程。</p></li><li><p>Spring 事务管理原理。</p></li></ul><h3 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h3><ul><li><p>Dubbo 支持哪些协议、每种协议的应用场景、优缺点。</p></li><li><p>Dubbo 超时时间怎样设置。</p></li><li><p>Dubbo 有些哪些注册中心。</p></li><li><p>Dubbo 集群的负载均衡有哪些策略。</p></li><li><p>Dubbo 的主要应用场景。</p></li><li><p>Dubbo 的核心功能。</p></li><li><p>Dubbo 的核心组件。</p></li><li><p>Dubbo 服务注册与发现的流程。</p></li><li><p>Dubbo 的服务调用流程。</p></li><li><p>Dubbo 支持哪些协议、每种协议的应用场景、优缺点。</p></li><li><p>Dubbo 的注册中心集群挂掉，发布者和订阅者之间还能通信么。</p></li><li><p>Dubbo与 Spring 的关系。</p></li><li><p>Dubbo 使用的是什么通信框架。</p></li><li><p>Dubbo 的集群容错方案有哪些。</p></li><li><p>Dubbo 支持哪些序列化方式。</p></li></ul><h3 id="zookpeer" tabindex="-1"><a class="header-anchor" href="#zookpeer" aria-hidden="true">#</a> zookpeer</h3><ul><li><p>zookpeer 节点类型。</p></li><li><p>zookpeer 的作用。</p></li><li><p>zookpeer 的 watcher 机制。</p></li><li><p>zookpeer 如何实现分布式锁。</p></li><li><p>zookpeer 选举算法。</p></li><li><p>Paxos 算法。</p></li><li><p>Raft 算法。</p></li><li><p>ZAB 协议。</p></li><li><p>什么是分布式事务。</p><p>分布式事务解决方案。</p><p>了解 seata 吗。</p><p>一致性哈希？</p><p>哈希槽、以及为什么是2^14。</p></li><li><p>SpringCloud组件？</p></li><li><p>什么是 Hystrix、它如何实现容错。</p></li><li><p>什么是 RestTemplate。</p></li><li><p>什么是 Ribbn。</p></li><li><p>nacos/Eureka 的对比。</p></li><li><p>什么是 zuul。</p></li><li><p>什么是 Getway。</p></li><li><p>什么是 Config。</p></li><li><p>什么是微服务</p><p>什么是SOA。</p><p>SOA和微服务的区别。</p></li><li><p>为什么要用微服务。</p></li><li><p>使用微服务存在的问题以及解决办法。</p></li><li><p>微服务之间如何通信。</p></li></ul><ul><li><p>微服务如何发现。</p></li><li><p>微服务挂了、如何解决。</p></li><li><p>重试机制、幂等性。</p><p>限流</p><p>熔断、降级</p></li></ul><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><ul><li><p>linux 常用命令有哪些、分别举例。</p></li><li><p>查询 3306 端口占用情况的 linux 指令如何写。</p></li><li><p>linux 中查看某个 java 进行的进程号 pid、如何操作呢。</p></li><li><p>进程通信方式。</p></li><li><p>进程、线程、协程。</p></li><li><p>进程调度算法。</p></li><li><p>Liunx下的 I/O 模型。</p></li><li><p>用户态、内核态。</p></li><li><p>如何减少内核态到用户态的拷贝（mmap）。</p></li><li><p>常用的命令。</p></li><li><p>查看日志。</p></li></ul><h3 id="如何复习" tabindex="-1"><a class="header-anchor" href="#如何复习" aria-hidden="true">#</a> 如何复习</h3><p>Java笼统一点来讲，无非是：JUC、多线程、锁、集合、基础知识、框架、分布式。</p><p><strong>一个知识体系一定要一块学，</strong></p><p>比如 JUC，这个是一个很大的包，系统学习会比较消耗时间，但是收益也是比较不错的，能够吧一些细节的点都串联起来，这样记忆比较更深刻一些</p><p>比如 HashMap 可以揉碎了学习，为什么0.75的负载因子，为什么要无符号右移16位？为什么是2的倍数？为什么是8而不是7、9？</p><p>**工具类的东西很容易被替代，**曾今的 SSH 现在的 Spring-Boot、Cloud，也许过几年之后又是新花样，但技术底层是差不多的原理，了解了底层，不仅有助于问题的排查，对于程序猿的整个晋升的道路而言，更是不错的一种思维、学习方式。</p><p>忌讳东一榔头，西一棒槌的学习，那样知识为了应付面试，面试过了，很容易就会忘。</p><p>一般这样的一个顺序：</p><ul><li><p>看源码，抠细节</p></li><li><p>看博客、公众号的相应解释</p></li><li><p>自己总结一遍，写到自己的MD文件或者博客里</p></li><li><p>一周之后，或者几天之后在复习一遍，(艾宾浩斯遗忘曲线)温故而知新</p></li></ul><h3 id="刷题" tabindex="-1"><a class="header-anchor" href="#刷题" aria-hidden="true">#</a> 刷题</h3><p>刷题两个好地方:</p><ul><li><p>牛客，也是我推荐大家去的，所有题目免费，而且基本上都有大佬们讨论</p></li><li><p>LeetCode，这个也可以，但是相应地会收取一定的费用，VIP之类的</p></li></ul><p>字节跳动对于算法十分钟爱，几乎每一面都会至少两到算法题，所以，要想进字节，至少俩月算法题刷起来。</p><p>不要扯什么算法不重要，程序猿搞不定算法就像厨子不会颠勺，司机不会挂挡。</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200417134243534-567189492.png" alt=""></p>',48),n=[r];function o(t,h){return i(),l("div",null,n)}const d=p(e,[["render",o],["__file","interview-jingdong.html.vue"]]);export{d as default};
