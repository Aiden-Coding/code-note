import{_ as l,r as o,o as r,c as a,f as i,a as e,b as t,d,w as n,e as p}from"./app-3RcBQnkC.js";const c={},u=p('<p>网上有很多分布式锁相关的文章，写了一个相对简洁易懂的版本，针对面试和工作应该够用了。</p><p>这篇文章我们先介绍一下分布式锁的基本概念。</p><h2 id="为什么需要分布式锁" tabindex="-1"><a class="header-anchor" href="#为什么需要分布式锁" aria-hidden="true">#</a> 为什么需要分布式锁？</h2><p>在多线程环境中，如果多个线程同时访问共享资源（例如商品库存、外卖订单），会发生数据竞争，可能会导致出现脏数据或者系统问题，威胁到程序的正常运行。</p><p>举个例子，假设现在有 100 个用户参与某个限时秒杀活动，每位用户限购 1 件商品，且商品的数量只有 3 个。如果不对共享资源进行互斥访问，就可能出现以下情况：</p><ul><li>线程 1、2、3 等多个线程同时进入抢购方法，每一个线程对应一个用户。</li><li>线程 1 查询用户已经抢购的数量，发现当前用户尚未抢购且商品库存还有 1 个，因此认为可以继续执行抢购流程。</li><li>线程 2 也执行查询用户已经抢购的数量，发现当前用户尚未抢购且商品库存还有 1 个，因此认为可以继续执行抢购流程。</li><li>线程 1 继续执行，将库存数量减少 1 个，然后返回成功。</li><li>线程 2 继续执行，将库存数量减少 1 个，然后返回成功。</li><li>此时就发生了超卖问题，导致商品被多卖了一份。</li></ul><p><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/distributed-lock/oversold-without-locking.png" alt="共享资源未互斥访问导致出现问题"></p><p>为了保证共享资源被安全地访问，我们需要使用互斥操作对共享资源进行保护，即同一时刻只允许一个线程访问共享资源，其他线程需要等待当前线程释放后才能访问。这样可以避免数据竞争和脏数据问题，保证程序的正确性和稳定性。</p><p><strong>如何才能实现共享资源的互斥访问呢？</strong> 锁是一个比较通用的解决方案，更准确点来说是悲观锁。</p><p>悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，<strong>共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程</strong>。</p><p>对于单机多线程来说，在 Java 中，我们通常使用 <code>ReetrantLock</code> 类、<code>synchronized</code> 关键字这类 JDK 自带的 <strong>本地锁</strong> 来控制一个 JVM 进程内的多个线程对本地共享资源的访问。</p><p>下面是我对本地锁画的一张示意图。</p><p><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/distributed-lock/jvm-local-lock.png" alt="本地锁"></p><p>从图中可以看出，这些线程访问共享资源是互斥的，同一时刻只有一个线程可以获取到本地锁访问共享资源。</p><p>分布式系统下，不同的服务/客户端通常运行在独立的 JVM 进程上。如果多个 JVM 进程共享同一份资源的话，使用本地锁就没办法实现资源的互斥访问了。于是，<strong>分布式锁</strong> 就诞生了。</p><p>举个例子：系统的订单服务一共部署了 3 份，都对外提供服务。用户下订单之前需要检查库存，为了防止超卖，这里需要加锁以实现对检查库存操作的同步访问。由于订单服务位于不同的 JVM 进程中，本地锁在这种情况下就没办法正常工作了。我们需要用到分布式锁，这样的话，即使多个线程不在同一个 JVM 进程中也能获取到同一把锁，进而实现共享资源的互斥访问。</p><p>下面是我对分布式锁画的一张示意图。</p><p><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/distributed-lock/distributed-lock.png" alt="分布式锁"></p><p>从图中可以看出，这些独立的进程中的线程访问共享资源是互斥的，同一时刻只有一个线程可以获取到分布式锁访问共享资源。</p><h2 id="分布式锁应该具备哪些条件" tabindex="-1"><a class="header-anchor" href="#分布式锁应该具备哪些条件" aria-hidden="true">#</a> 分布式锁应该具备哪些条件？</h2><p>一个最基本的分布式锁需要满足：</p><ul><li><strong>互斥</strong>：任意一个时刻，锁只能被一个线程持有。</li><li><strong>高可用</strong>：锁服务是高可用的，当一个锁服务出现问题，能够自动切换到另外一个锁服务。并且，即使客户端的释放锁的代码逻辑出现问题，锁最终一定还是会被释放，不会影响其他线程对共享资源的访问。这一般是通过超时机制实现的。</li><li><strong>可重入</strong>：一个节点获取了锁之后，还可以再次获取锁。</li></ul><p>除了上面这三个基本条件之外，一个好的分布式锁还需要满足下面这些条件：</p><ul><li><strong>高性能</strong>：获取和释放锁的操作应该快速完成，并且不应该对整个系统的性能造成过大影响。</li><li><strong>非阻塞</strong>：如果获取不到锁，不能无限期等待，避免对系统正常运行造成影响。</li></ul><h2 id="分布式锁的常见实现方式有哪些" tabindex="-1"><a class="header-anchor" href="#分布式锁的常见实现方式有哪些" aria-hidden="true">#</a> 分布式锁的常见实现方式有哪些？</h2><p>常见分布式锁实现方案如下：</p><ul><li>基于关系型数据库比如 MySQL 实现分布式锁。</li><li>基于分布式协调服务 ZooKeeper 实现分布式锁。</li><li>基于分布式键值存储系统比如 Redis 、Etcd 实现分布式锁。</li></ul><p>关系型数据库的方式一般是通过唯一索引或者排他锁实现。不过，一般不会使用这种方式，问题太多比如性能太差、不具备锁失效机制。</p>',28),h=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),t(" 总结")],-1),g=e("p",null,"这篇文章我们主要介绍了：",-1),m=e("ul",null,[e("li",null,"分布式锁的用途：分布式系统下，不同的服务/客户端通常运行在独立的 JVM 进程上。如果多个 JVM 进程共享同一份资源的话，使用本地锁就没办法实现资源的互斥访问了。"),e("li",null,"分布式锁的应该具备的条件：互斥、高可用、可重入、高性能、非阻塞。"),e("li",null,"分布式锁的常见实现方式：关系型数据库比如 MySQL、分布式协调服务 ZooKeeper、分布式键值存储系统比如 Redis 、Etcd 。")],-1);function _(b,f){const s=o("RouterLink");return r(),a("div",null,[i(" @include: @small-advertisement.snippet.md "),u,e("p",null,[t("基于 ZooKeeper 或者 Redis 实现分布式锁这两种实现方式要用的更多一些，我专门写了一篇文章来详细介绍这两种方案："),d(s,{to:"/JavaGuide/distributed-system/distributed-lock-implementations.html"},{default:n(()=>[t("分布式锁常见实现方案总结")]),_:1}),t("。")]),h,g,m,i(" @include: @article-footer.snippet.md ")])}const v=l(c,[["render",_],["__file","distributed-lock.html.vue"]]);export{v as default};
