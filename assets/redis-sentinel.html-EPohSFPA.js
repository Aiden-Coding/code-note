import{_ as e,o as a,c as s,e as i}from"./app-3RcBQnkC.js";const r="/code-note/assets/async-replication-data-lose-case-vSE3hjDR.png",n="/code-note/assets/redis-cluster-split-brain-1NQIQLnc.png",l={},d=i(`<h1 id="redis-哨兵集群实现高可用" tabindex="-1"><a class="header-anchor" href="#redis-哨兵集群实现高可用" aria-hidden="true">#</a> Redis 哨兵集群实现高可用</h1><h2 id="哨兵的介绍" tabindex="-1"><a class="header-anchor" href="#哨兵的介绍" aria-hidden="true">#</a> 哨兵的介绍</h2><p>sentinel，中文名是哨兵。哨兵是 Redis 集群架构中非常重要的一个组件，主要有以下功能：</p><ul><li>集群监控：负责监控 Redis master 和 slave 进程是否正常工作。</li><li>消息通知：如果某个 Redis 实例有故障，那么哨兵负责发送消息作为报警通知给管理员。</li><li>故障转移：如果 master node 挂掉了，会自动转移到 slave node 上。</li><li>配置中心：如果故障转移发生了，通知 client 客户端新的 master 地址。</li></ul><p>哨兵用于实现 Redis 集群的高可用，本身也是分布式的，作为一个哨兵集群去运行，互相协同工作。</p><ul><li>故障转移时，判断一个 master node 是否宕机了，需要大部分的哨兵都同意才行，涉及到了分布式选举的问题。</li><li>即使部分哨兵节点挂掉了，哨兵集群还是能正常工作的，因为如果一个作为高可用机制重要组成部分的故障转移系统本身是单点的，那就很坑爹了。</li></ul><h2 id="哨兵的核心知识" tabindex="-1"><a class="header-anchor" href="#哨兵的核心知识" aria-hidden="true">#</a> 哨兵的核心知识</h2><ul><li>哨兵至少需要 3 个实例，来保证自己的健壮性。</li><li>哨兵 + Redis 主从的部署架构，是<strong>不保证数据零丢失</strong>的，只能保证 Redis 集群的高可用性。</li><li>对于哨兵 + Redis 主从这种复杂的部署架构，尽量在测试环境和生产环境，都进行充足的测试和演练。</li></ul><p>哨兵集群必须部署 2 个以上节点，如果哨兵集群仅仅部署了 2 个哨兵实例，quorum = 1。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+         +----+
| M1 |---------| R1 |
| S1 |         | S2 |
+----+         +----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code>quorum=1</code> ，如果 master 宕机， s1 和 s2 中只要有 1 个哨兵认为 master 宕机了，就可以进行切换，同时 s1 和 s2 会选举出一个哨兵来执行故障转移。但是同时这个时候，需要 majority，也就是大多数哨兵都是运行的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2 个哨兵，majority=2
3 个哨兵，majority=2
4 个哨兵，majority=2
5 个哨兵，majority=3
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果此时仅仅是 M1 进程宕机了，哨兵 s1 正常运行，那么故障转移是 OK 的。但是如果是整个 M1 和 S1 运行的机器宕机了，那么哨兵只有 1 个，此时就没有 majority 来允许执行故障转移，虽然另外一台机器上还有一个 R1，但是故障转移不会执行。</p><p>经典的 3 节点哨兵集群是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>       +----+
       | M1 |
       | S1 |
       +----+
          |
+----+    |    +----+
| R2 |----+----| R3 |
| S2 |         | S3 |
+----+         +----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code>quorum=2</code> ，如果 M1 所在机器宕机了，那么三个哨兵还剩下 2 个，S2 和 S3 可以一致认为 master 宕机了，然后选举出一个来执行故障转移，同时 3 个哨兵的 majority 是 2，所以还剩下的 2 个哨兵运行着，就可以允许执行故障转移。</p><h2 id="redis-哨兵主备切换的数据丢失问题" tabindex="-1"><a class="header-anchor" href="#redis-哨兵主备切换的数据丢失问题" aria-hidden="true">#</a> Redis 哨兵主备切换的数据丢失问题</h2><h3 id="导致数据丢失的两种情况" tabindex="-1"><a class="header-anchor" href="#导致数据丢失的两种情况" aria-hidden="true">#</a> 导致数据丢失的两种情况</h3><p>主备切换的过程，可能会导致数据丢失：</p><ul><li>异步复制导致的数据丢失</li></ul><p>因为 master-&gt;slave 的复制是异步的，所以可能有部分数据还没复制到 slave，master 就宕机了，此时这部分数据就丢失了。</p><p><img src="`+r+'" alt="async-replication-data-lose-case"></p><ul><li>脑裂导致的数据丢失</li></ul><p>脑裂，也就是说，某个 master 所在机器突然<strong>脱离了正常的网络</strong>，跟其他 slave 机器不能连接，但是实际上 master 还运行着。此时哨兵可能就会<strong>认为</strong> master 宕机了，然后开启选举，将其他 slave 切换成了 master。这个时候，集群里就会有两个 master ，也就是所谓的<strong>脑裂</strong>。</p><p>此时虽然某个 slave 被切换成了 master，但是可能 client 还没来得及切换到新的 master，还继续向旧 master 写数据。因此旧 master 再次恢复的时候，会被作为一个 slave 挂到新的 master 上去，自己的数据会清空，重新从新的 master 复制数据。而新的 master 并没有后来 client 写入的数据，因此，这部分数据也就丢失了。</p><p><img src="'+n+`" alt="Redis-cluster-split-brain"></p><h3 id="数据丢失问题的解决方案" tabindex="-1"><a class="header-anchor" href="#数据丢失问题的解决方案" aria-hidden="true">#</a> 数据丢失问题的解决方案</h3><p>进行如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>min-slaves-to-write <span class="token number">1</span>
min-slaves-max-lag <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示，要求至少有 1 个 slave，数据复制和同步的延迟不能超过 10 秒。</p><p>如果说一旦所有的 slave，数据复制和同步的延迟都超过了 10 秒钟，那么这个时候，master 就不会再接收任何请求了。</p><ul><li>减少异步复制数据的丢失</li></ul><p>有了 <code>min-slaves-max-lag</code> 这个配置，就可以确保说，一旦 slave 复制数据和 ack 延时太长，就认为可能 master 宕机后损失的数据太多了，那么就拒绝写请求，这样可以把 master 宕机时由于部分数据未同步到 slave 导致的数据丢失降低的可控范围内。</p><ul><li>减少脑裂的数据丢失</li></ul><p>如果一个 master 出现了脑裂，跟其他 slave 丢了连接，那么上面两个配置可以确保说，如果不能继续给指定数量的 slave 发送数据，而且 slave 超过 10 秒没有给自己 ack 消息，那么就直接拒绝客户端的写请求。因此在脑裂场景下，最多就丢失 10 秒的数据。</p><h2 id="sdown-和-odown-转换机制" tabindex="-1"><a class="header-anchor" href="#sdown-和-odown-转换机制" aria-hidden="true">#</a> sdown 和 odown 转换机制</h2><ul><li>sdown 是主观宕机，就一个哨兵如果自己觉得一个 master 宕机了，那么就是主观宕机</li><li>odown 是客观宕机，如果 quorum 数量的哨兵都觉得一个 master 宕机了，那么就是客观宕机</li></ul><p>sdown 达成的条件很简单，如果一个哨兵 ping 一个 master，超过了 <code>is-master-down-after-milliseconds</code> 指定的毫秒数之后，就主观认为 master 宕机了；如果一个哨兵在指定时间内，收到了 quorum 数量的其它哨兵也认为那个 master 是 sdown 的，那么就认为是 odown 了。</p><h2 id="哨兵集群的自动发现机制" tabindex="-1"><a class="header-anchor" href="#哨兵集群的自动发现机制" aria-hidden="true">#</a> 哨兵集群的自动发现机制</h2><p>哨兵互相之间的发现，是通过 Redis 的 <code>pub/sub</code> 系统实现的，每个哨兵都会往 <code>__sentinel__:hello</code> 这个 channel 里发送一个消息，这时候所有其他哨兵都可以消费到这个消息，并感知到其他的哨兵的存在。</p><p>每隔两秒钟，每个哨兵都会往自己监控的某个 master+slaves 对应的 <code>__sentinel__:hello</code> channel 里<strong>发送一个消息</strong>，内容是自己的 host、ip 和 runid 还有对这个 master 的监控配置。</p><p>每个哨兵也会去<strong>监听</strong>自己监控的每个 master+slaves 对应的 <code>__sentinel__:hello</code> channel，然后去感知到同样在监听这个 master+slaves 的其他哨兵的存在。</p><p>每个哨兵还会跟其他哨兵交换对 <code>master</code> 的监控配置，互相进行监控配置的同步。</p><h2 id="slave-配置的自动纠正" tabindex="-1"><a class="header-anchor" href="#slave-配置的自动纠正" aria-hidden="true">#</a> slave 配置的自动纠正</h2><p>哨兵会负责自动纠正 slave 的一些配置，比如 slave 如果要成为潜在的 master 候选人，哨兵会确保 slave 复制现有 master 的数据；如果 slave 连接到了一个错误的 master 上，比如故障转移之后，那么哨兵会确保它们连接到正确的 master 上。</p><h2 id="slave-master-选举算法" tabindex="-1"><a class="header-anchor" href="#slave-master-选举算法" aria-hidden="true">#</a> slave-&gt;master 选举算法</h2><p>如果一个 master 被认为 odown 了，而且 majority 数量的哨兵都允许主备切换，那么某个哨兵就会执行主备切换操作，此时首先要选举一个 slave 来，会考虑 slave 的一些信息：</p><ul><li>跟 master 断开连接的时长</li><li>slave 优先级</li><li>复制 offset</li><li>run id</li></ul><p>如果一个 slave 跟 master 断开连接的时间已经超过了 <code>down-after-milliseconds</code> 的 10 倍，外加 master 宕机的时长，那么 slave 就被认为不适合选举为 master。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(down-after-milliseconds * 10) + milliseconds_since_master_is_in_SDOWN_state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来会对 slave 进行排序：</p><ul><li>按照 slave 优先级进行排序，slave priority 越低，优先级就越高。</li><li>如果 slave priority 相同，那么看 replica offset，哪个 slave 复制了越多的数据，offset 越靠后，优先级就越高。</li><li>如果上面两个条件都相同，那么选择一个 run id 比较小的那个 slave。</li></ul><h2 id="quorum-和-majority" tabindex="-1"><a class="header-anchor" href="#quorum-和-majority" aria-hidden="true">#</a> quorum 和 majority</h2><p>每次一个哨兵要做主备切换，首先需要 quorum 数量的哨兵认为 odown，然后选举出一个哨兵来做切换，这个哨兵还需要得到 majority 哨兵的授权，才能正式执行切换。</p><p>如果 quorum &lt; majority，比如 5 个哨兵，majority 就是 3，quorum 设置为 2，那么就 3 个哨兵授权就可以执行切换。</p><p>但是如果 quorum &gt;= majority，那么必须 quorum 数量的哨兵都授权，比如 5 个哨兵，quorum 是 5，那么必须 5 个哨兵都同意授权，才能执行切换。</p><h2 id="configuration-epoch" tabindex="-1"><a class="header-anchor" href="#configuration-epoch" aria-hidden="true">#</a> configuration epoch</h2><p>哨兵会对一套 Redis master+slaves 进行监控，有相应的监控的配置。</p><p>执行切换的那个哨兵，会从要切换到的新 master（salve-&gt;master）那里得到一个 configuration epoch，这就是一个 version 号，每次切换的 version 号都必须是唯一的。</p><p>如果第一个选举出的哨兵切换失败了，那么其他哨兵，会等待 failover-timeout 时间，然后接替继续执行切换，此时会重新获取一个新的 configuration epoch，作为新的 version 号。</p><h2 id="configuration-传播" tabindex="-1"><a class="header-anchor" href="#configuration-传播" aria-hidden="true">#</a> configuration 传播</h2><p>哨兵完成切换之后，会在自己本地更新生成最新的 master 配置，然后同步给其他的哨兵，就是通过之前说的 <code>pub/sub</code> 消息机制。</p><p>这里之前的 version 号就很重要了，因为各种消息都是通过一个 channel 去发布和监听的，所以一个哨兵完成一次新的切换之后，新的 master 配置是跟着新的 version 号的。其他的哨兵都是根据版本号的大小来更新自己的 master 配置的。</p>`,63),t=[d];function o(c,m){return a(),s("div",null,t)}const v=e(l,[["render",o],["__file","redis-sentinel.html.vue"]]);export{v as default};
