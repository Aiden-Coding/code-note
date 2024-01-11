import{_ as n,o as s,c as a,e}from"./app-3RcBQnkC.js";const t={},p=e(`<h1 id="java-锁之乐观锁和悲观锁" tabindex="-1"><a class="header-anchor" href="#java-锁之乐观锁和悲观锁" aria-hidden="true">#</a> Java 锁之乐观锁和悲观锁</h1><ul><li><a href="#java-%E9%94%81%E4%B9%8B%E4%B9%90%E8%A7%82%E9%94%81%E5%92%8C%E6%82%B2%E8%A7%82%E9%94%81">Java 锁之乐观锁和悲观锁</a><ul><li><a href="#%E6%82%B2%E8%A7%82%E9%94%81">悲观锁</a></li><li><a href="#%E4%B9%90%E8%A7%82%E9%94%81">乐观锁</a></li><li><a href="#%E4%B8%A4%E7%A7%8D%E9%94%81%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF">两种锁的使用场景</a></li><li><a href="#%E4%B9%90%E8%A7%82%E9%94%81%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F">乐观锁的实现方式</a><ul><li><a href="#%E7%89%88%E6%9C%AC%E5%8F%B7%E6%9C%BA%E5%88%B6">版本号机制</a></li><li><a href="#cas-%E7%AE%97%E6%B3%95">CAS 算法</a></li></ul></li><li><a href="#%E4%B9%90%E8%A7%82%E9%94%81%E7%9A%84%E7%BC%BA%E7%82%B9">乐观锁的缺点</a><ul><li><a href="#aba-%E9%97%AE%E9%A2%98">ABA 问题</a></li><li><a href="#%E5%BE%AA%E7%8E%AF%E5%BC%80%E9%94%80%E5%A4%A7">循环开销大</a></li></ul></li><li><a href="#cas%E4%B8%8Esynchronized%E7%9A%84%E4%BD%BF%E7%94%A8%E6%83%85%E6%99%AF">CAS与synchronized的使用情景</a></li></ul></li></ul><p>Java 按照锁的实现分为乐观锁和悲观锁，乐观锁和悲观锁并不是一种真实存在的锁，而是一种设计思想，乐观锁和悲观锁对于理解 Java 多线程和数据库来说至关重要，那么本篇文章就来详细探讨一下这两种锁的概念以及实现方式。</p><h2 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h2><p><code>悲观锁</code>是一种悲观思想，它总认为最坏的情况可能会出现，它认为数据很可能会被其他人所修改，所以悲观锁在持有数据的时候总会把<code>资源</code> 或者 <code>数据</code> 锁住，这样其他线程想要请求这个资源的时候就会阻塞，直到等到悲观锁把资源释放为止。传统的关系型数据库里边就用到了很多这种锁机制，**比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。**悲观锁的实现往往依靠数据库本身的锁功能实现。</p><p>Java 中的 <code>Synchronized</code> 和 <code>ReentrantLock</code> 等独占锁(排他锁)也是一种悲观锁思想的实现，因为 Synchronzied 和 ReetrantLock 不管是否持有资源，它都会尝试去加锁，生怕自己心爱的宝贝被别人拿走。</p><h2 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h2><p>乐观锁的思想与悲观锁的思想相反，它总认为资源和数据不会被别人所修改，所以读取不会上锁，但是乐观锁在进行写入操作的时候会判断当前数据是否被修改过(具体如何判断我们下面再说)。乐观锁的实现方案一般来说有两种： <code>版本号机制</code> 和 <code>CAS实现</code> 。乐观锁多适用于多度的应用类型，这样可以提高吞吐量。</p><p>在Java中<code>java.util.concurrent.atomic</code>包下面的原子变量类就是使用了乐观锁的一种实现方式CAS实现的。</p><h2 id="两种锁的使用场景" tabindex="-1"><a class="header-anchor" href="#两种锁的使用场景" aria-hidden="true">#</a> 两种锁的使用场景</h2><p>上面介绍了两种锁的基本概念，并提到了两种锁的适用场景，一般来说，悲观锁不仅会对写操作加锁还会对读操作加锁，一个典型的悲观锁调用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from student where name=&quot;cxuan&quot; for update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条 sql 语句从 Student 表中选取 name = &quot;cxuan&quot; 的记录并对其加锁，那么其他写操作再这个事务提交之前都不会对这条数据进行操作，起到了独占和排他的作用。</p><p>悲观锁因为对读写都加锁，所以它的性能比较低，对于现在互联网提倡的<code>三高</code>(高性能、高可用、高并发)来说，悲观锁的实现用的越来越少了，但是一般多读的情况下还是需要使用悲观锁的，因为虽然加锁的性能比较低，但是也阻止了像乐观锁一样，遇到写不一致的情况下一直重试的时间。</p><p>相对而言，乐观锁用于读多写少的情况，即很少发生冲突的场景，这样可以省去锁的开销，增加系统的吞吐量。</p><p>乐观锁的适用场景有很多，典型的比如说成本系统，柜员要对一笔金额做修改，为了保证数据的准确性和实效性，使用悲观锁锁住某个数据后，再遇到其他需要修改数据的操作，那么此操作就无法完成金额的修改，对产品来说是灾难性的一刻，使用乐观锁的版本号机制能够解决这个问题，我们下面说。</p><h2 id="乐观锁的实现方式" tabindex="-1"><a class="header-anchor" href="#乐观锁的实现方式" aria-hidden="true">#</a> 乐观锁的实现方式</h2><p>乐观锁一般有两种实现方式：采用<code>版本号机制</code> 和 <code>CAS（Compare-and-Swap，即比较并替换）算法</code>实现。</p><h3 id="版本号机制" tabindex="-1"><a class="header-anchor" href="#版本号机制" aria-hidden="true">#</a> 版本号机制</h3><p>版本号机制是在数据表中加上一个 <code>version</code> 字段来实现的，表示数据被修改的次数，当执行写操作并且写入成功后，version = version + 1，当线程A要更新数据时，在读取数据的同时也会读取 version 值，在提交更新时，若刚才读取到的 version 值为当前数据库中的version值相等时才更新，否则重试更新操作，直到更新成功。</p><p>我们以上面的金融系统为例，来简述一下这个过程。</p><p><img src="https://img2018.cnblogs.com/blog/1515111/201909/1515111-20190927071316758-1458509347.jpg" alt="file"></p><ul><li>成本系统中有一个数据表，表中有两个字段分别是 <code>金额</code> 和 <code>version</code>，金额的属性是能够实时变化，而 version 表示的是金额每次发生变化的版本，一般的策略是，当金额发生改变时，version 采用递增的策略每次都在上一个版本号的基础上 + 1。</li><li>在了解了基本情况和基本信息之后，我们来看一下这个过程：公司收到回款后，需要把这笔钱放在金库中，假如金库中存有100 元钱 <ul><li>下面开启事务一：当男柜员执行回款写入操作前，他会先查看(读)一下金库中还有多少钱，此时读到金库中有 100 元，可以执行写操作，并把数据库中的钱更新为 120 元，提交事务，金库中的钱由 100 -&gt; 120，version的版本号由 0 -&gt; 1。</li><li>开启事务二：女柜员收到给员工发工资的请求后，需要先执行读请求，查看金库中的钱还有多少，此时的版本号是多少，然后从金库中取出员工的工资进行发放，提交事务，成功后版本 + 1，此时版本由 1 -&gt; 2。</li></ul></li></ul><p><strong>上面两种情况是最乐观的情况，上面的两个事务都是顺序执行的，也就是事务一和事务二互不干扰，那么事务要并行执行会如何呢？</strong></p><p><img src="https://img2018.cnblogs.com/blog/1515111/201909/1515111-20190927071317090-1824449206.jpg" alt="file"></p><ul><li><p>事务一开启，男柜员先执行读操作，取出金额和版本号，执行写操作</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>begin
update 表 set 金额 = 120,version = version + 1 where 金额 = 100 and version = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时金额改为 120，版本号为1，事务还没有提交</p><p>事务二开启，女柜员先执行读操作，取出金额和版本号，执行写操作</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>begin
update 表 set 金额 = 50,version = version + 1 where 金额 = 100 and version = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时金额改为 50，版本号变为 1，事务未提交</p><p>现在提交事务一，金额改为 120，版本变为1，提交事务。理想情况下应该变为 金额 = 50，版本号 = 2，但是实际上事务二 的更新是建立在金额为 100 和 版本号为 0 的基础上的，所以事务二不会提交成功，应该重新读取金额和版本号，再次进行写操作。</p><p>这样，就避免了女柜员 用基于 version=0 的旧数据修改的结果覆盖男操作员操作结果的可能。</p></li></ul><h3 id="cas-算法" tabindex="-1"><a class="header-anchor" href="#cas-算法" aria-hidden="true">#</a> CAS 算法</h3><p>先来看一道经典的并发执行 1000次递增和递减后的问题：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token class-name">Counter</span> counter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token class-name">Counter</span> counter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> counter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j <span class="token operator">&lt;</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token constant">LOOP</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            counter<span class="token punctuation">.</span><span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token class-name">Counter</span> counter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span><span class="token class-name">Counter</span> counter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> counter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token constant">LOOP</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
            counter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">LOOP</span> <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">Counter</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Producer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Consumer</span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>

        producer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        producer<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多次测试的结果都不为 0，也就是说出现了并发后数据不一致的问题，原因是 count -= 1 和 count += 1 都是非原子性操作，它们的执行步骤分为三步：</p><ul><li>从内存中读取 count 的值，把它放入寄存器中</li><li>执行 + 1 或者 - 1 操作</li><li>执行完成的结果再复制到内存中</li></ul><p>如果要把证它们的原子性，必须进行加锁，使用 <code>Synchronzied</code> 或者 <code>ReentrantLock</code>，我们前面介绍它们是悲观锁的实现，我们现在讨论的是乐观锁，那么用哪种方式保证它们的原子性呢？请继续往下看</p><p>CAS 即 <code>compare and swap（比较与交换）</code>，是一种有名的无锁算法。即不使用锁的情况下实现多线程之间的变量同步，也就是在没有线程被阻塞的情况下实现变量的同步，所以也叫非阻塞同步（Non-blocking Synchronization</p><p>CAS 中涉及三个要素：</p><ul><li>需要读写的内存值 V</li><li>进行比较的值 A</li><li>拟写入的新值 B</li></ul><p>当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。</p><p>JAVA对CAS的支持：在JDK1.5 中新添加 java.util.concurrent (J.U.C) 就是建立在 CAS 之上的。对于 synchronized 这种阻塞算法，CAS是非阻塞算法的一种实现。所以J.U.C在性能上有了很大的提升。</p><p>我们以 java.util.concurrent 中的<code> AtomicInteger</code> 为例，看一下在不用锁的情况下是如何保证线程安全的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicCounter</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> integer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AtomicInteger</span> <span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> integer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInteger</span><span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span> integer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>integer <span class="token operator">=</span> integer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        integer<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        integer<span class="token punctuation">.</span><span class="token function">decrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicProducer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">AtomicCounter</span> atomicCounter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AtomicProducer</span><span class="token punctuation">(</span><span class="token class-name">AtomicCounter</span> atomicCounter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atomicCounter <span class="token operator">=</span> atomicCounter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token class-name">AtomicTest</span><span class="token punctuation">.</span><span class="token constant">LOOP</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;producer : &quot;</span> <span class="token operator">+</span> atomicCounter<span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            atomicCounter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicConsumer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">AtomicCounter</span> atomicCounter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AtomicConsumer</span><span class="token punctuation">(</span><span class="token class-name">AtomicCounter</span> atomicCounter<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atomicCounter <span class="token operator">=</span> atomicCounter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token class-name">AtomicTest</span><span class="token punctuation">.</span><span class="token constant">LOOP</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumer : &quot;</span> <span class="token operator">+</span> atomicCounter<span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            atomicCounter<span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">LOOP</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">AtomicCounter</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AtomicProducer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicProducer</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AtomicConsumer</span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicConsumer</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>

        producer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        producer<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经测试可得，不管循环多少次最后的结果都是0，也就是多线程并行的情况下，使用 AtomicInteger 可以保证线程安全性。 incrementAndGet 和 decrementAndGet 都是原子性操作。本篇文章暂不探讨它们的实现方式。</p><h2 id="乐观锁的缺点" tabindex="-1"><a class="header-anchor" href="#乐观锁的缺点" aria-hidden="true">#</a> 乐观锁的缺点</h2><p>任何事情都是有利也有弊，软件行业没有完美的解决方案只有最优的解决方案，所以乐观锁也有它的弱点和缺陷：</p><h3 id="aba-问题" tabindex="-1"><a class="header-anchor" href="#aba-问题" aria-hidden="true">#</a> ABA 问题</h3><p>ABA 问题说的是，如果一个变量第一次读取的值是 A，准备好需要对 A 进行写操作的时候，发现值还是 A，那么这种情况下，能认为 A 的值没有被改变过吗？可以是由 A -&gt; B -&gt; A 的这种情况，但是 AtomicInteger 却不会这么认为，它只相信它看到的，它看到的是什么就是什么。</p><p>JDK 1.5 以后的 <code>AtomicStampedReference </code>类就提供了此种能力，其中的 <code>compareAndSet 方法</code>就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p><p>也可以采用CAS的一个变种DCAS来解决这个问题。 DCAS，是对于每一个V增加一个引用的表示修改次数的标记符。对于每个V，如果引用修改了一次，这个计数器就加1。然后再这个变量需要update的时候，就同时检查变量的值和计数器的值。</p><h3 id="循环开销大" tabindex="-1"><a class="header-anchor" href="#循环开销大" aria-hidden="true">#</a> 循环开销大</h3><p>我们知道乐观锁在进行写操作的时候会判断是否能够写入成功，如果写入不成功将触发等待 -&gt; 重试机制，这种情况是一个自旋锁，简单来说就是适用于短期内获取不到，进行等待重试的锁，它不适用于长期获取不到锁的情况，另外，自旋循环对于性能开销比较大。</p><h2 id="cas与synchronized的使用情景" tabindex="-1"><a class="header-anchor" href="#cas与synchronized的使用情景" aria-hidden="true">#</a> CAS与synchronized的使用情景</h2><p>简单的来说 CAS 适用于写比较少的情况下（多读场景，冲突一般较少），synchronized 适用于写比较多的情况下（多写场景，冲突一般较多）</p><ul><li>对于资源竞争较少（线程冲突较轻）的情况，使用 synchronized 同步锁进行线程阻塞和唤醒切换以及用户态内核态间的切换操作额外浪费消耗 cpu 资源；而 CAS 基于硬件实现，不需要进入内核，不需要切换线程，操作自旋几率较少，因此可以获得更高的性能。</li><li>对于资源竞争严重（线程冲突严重）的情况，CAS 自旋的概率会比较大，从而浪费更多的 CPU 资源，效率低于 synchronized。</li></ul><blockquote><p>补充： Java并发编程这个领域中 synchronized 关键字一直都是元老级的角色，很久之前很多人都会称它为 “重量级锁” 。但是，在JavaSE 1.6之后进行了主要包括为了减少获得锁和释放锁带来的性能消耗而引入的 偏向锁 和 轻量级锁 以及其它各种优化之后变得在某些情况下并不是那么重了。synchronized 的底层实现主要依靠 Lock-Free 的队列，基本思路是 自旋后阻塞，竞争切换后继续竞争锁，稍微牺牲了公平性，但获得了高吞吐量。在线程冲突较少的情况下，可以获得和 CAS 类似的性能；而线程冲突严重的情况下，性能远高于CAS。</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivkbczxoj31l20t8al5.jpg" alt="image-20210716163352584"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivl4khz9j31d60h8mze.jpg" alt="image-20210716163433337"></p>`,55),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","java-optimisticlock.html.vue"]]);export{r as default};
