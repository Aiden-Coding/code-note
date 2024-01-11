import{_ as a,o as i,c as e,e as r}from"./app-3RcBQnkC.js";const t="/code-note/assets/distributed-transaction-XA-O6I6vN5k.png",s="/code-note/assets/distributed-transaction-TCC-f10nY96s.png",n="/code-note/assets/distributed-transaction-saga-rHnH7Q_N.png",o="/code-note/assets/distributed-transaction-local-message-table-Bxdjqhfl.png",d="/code-note/assets/distributed-transaction-reliable-message-1PFiP3iu.png",l={},c=r('<h1 id="分布式事务了解吗-你们是如何解决分布式事务问题的" tabindex="-1"><a class="header-anchor" href="#分布式事务了解吗-你们是如何解决分布式事务问题的" aria-hidden="true">#</a> 分布式事务了解吗？你们是如何解决分布式事务问题的？</h1><h2 id="面试官心理分析" tabindex="-1"><a class="header-anchor" href="#面试官心理分析" aria-hidden="true">#</a> 面试官心理分析</h2><p>只要聊到你做了分布式系统，必问分布式事务，你对分布式事务一无所知的话，确实会很坑，你起码得知道有哪些方案，一般怎么来做，每个方案的优缺点是什么。</p><p>现在面试，分布式系统成了标配，而分布式系统带来的<strong>分布式事务</strong>也成了标配了。因为你做系统肯定要用事务吧，如果是分布式系统，肯定要用分布式事务吧。先不说你搞过没有，起码你得明白有哪几种方案，每种方案可能有啥坑？比如 TCC 方案的网络问题、XA 方案的一致性问题。</p><h2 id="面试题剖析" tabindex="-1"><a class="header-anchor" href="#面试题剖析" aria-hidden="true">#</a> 面试题剖析</h2><p>分布式事务的实现主要有以下 6 种方案：</p><ul><li>XA 方案</li><li>TCC 方案</li><li>SAGA 方案</li><li>本地消息表</li><li>可靠消息最终一致性方案</li><li>最大努力通知方案</li></ul><h3 id="两阶段提交方案-xa-方案" tabindex="-1"><a class="header-anchor" href="#两阶段提交方案-xa-方案" aria-hidden="true">#</a> 两阶段提交方案/XA 方案</h3><p>所谓的 XA 方案，即：两阶段提交，有一个<strong>事务管理器</strong>的概念，负责协调多个数据库（资源管理器）的事务，事务管理器先问问各个数据库你准备好了吗？如果每个数据库都回复 ok，那么就正式提交事务，在各个数据库上执行操作；如果任何其中一个数据库回答不 ok，那么就回滚事务。</p><p>这种分布式事务方案，比较适合单块应用里，跨多个库的分布式事务，而且因为严重依赖于数据库层面来搞定复杂的事务，效率很低，绝对不适合高并发的场景。如果要玩儿，那么基于 <code>Spring + JTA</code> 就可以搞定，自己随便搜个 demo 看看就知道了。</p><p>这个方案，我们很少用，一般来说<strong>某个系统内部如果出现跨多个库</strong>的这么一个操作，是<strong>不合规</strong>的。我可以给大家介绍一下， 现在微服务，一个大的系统分成几十个甚至几百个服务。一般来说，我们的规定和规范，是要求<strong>每个服务只能操作自己对应的一个数据库</strong>。</p><p>如果你要操作别的服务对应的库，不允许直连别的服务的库，违反微服务架构的规范，你随便交叉胡乱访问，几百个服务的话，全体乱套，这样的一套服务是没法管理的，没法治理的，可能会出现数据被别人改错，自己的库被别人写挂等情况。</p><p>如果你要操作别人的服务的库，你必须是通过<strong>调用别的服务的接口</strong>来实现，绝对不允许交叉访问别人的数据库。</p><p><img src="'+t+'" alt="distributed-transacion-XA"></p><h3 id="tcc-方案" tabindex="-1"><a class="header-anchor" href="#tcc-方案" aria-hidden="true">#</a> TCC 方案</h3><p>TCC 的全称是： <code>Try</code> 、 <code>Confirm</code> 、 <code>Cancel</code> 。</p><ul><li>Try 阶段：这个阶段说的是对各个服务的资源做检测以及对资源进行<strong>锁定或者预留</strong>。</li><li>Confirm 阶段：这个阶段说的是在各个服务中<strong>执行实际的操作</strong>。</li><li>Cancel 阶段：如果任何一个服务的业务方法执行出错，那么这里就需要<strong>进行补偿</strong>，就是执行已经执行成功的业务逻辑的回滚操作。（把那些执行成功的回滚）</li></ul><p>这种方案说实话几乎很少人使用，我们用的也比较少，但是也有使用的场景。因为这个<strong>事务回滚</strong>实际上是<strong>严重依赖于你自己写代码来回滚和补偿</strong>了，会造成补偿代码巨大，非常之恶心。</p><p>比如说我们，一般来说跟<strong>钱</strong>相关的，跟钱打交道的，<strong>支付</strong>、<strong>交易</strong>相关的场景，我们会用 TCC，严格保证分布式事务要么全部成功，要么全部自动回滚，严格保证资金的正确性，保证在资金上不会出现问题。</p><p>而且最好是你的各个业务执行的时间都比较短。</p><p>但是说实话，一般尽量别这么搞，自己手写回滚逻辑，或者是补偿逻辑，实在太恶心了，那个业务代码是很难维护的。</p><p><img src="'+s+'" alt="distributed-transacion-TCC"></p><h3 id="saga-方案" tabindex="-1"><a class="header-anchor" href="#saga-方案" aria-hidden="true">#</a> Saga 方案</h3><p>金融核心等业务可能会选择 TCC 方案，以追求强一致性和更高的并发量，而对于更多的金融核心以上的业务系统 往往会选择补偿事务，补偿事务处理在 30 多年前就提出了 Saga 理论，随着微服务的发展，近些年才逐步受到大家的关注。目前业界比较公认的是采用 Saga 作为长事务的解决方案。</p><h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h4><p>业务流程中每个参与者都提交本地事务，若某一个参与者失败，则补偿前面已经成功的参与者。下图左侧是正常的事务流程，当执行到 T3 时发生了错误，则开始执行右边的事务补偿流程，反向执行 T3、T2、T1 的补偿服务 C3、C2、C1，将 T3、T2、T1 已经修改的数据补偿掉。</p><p><img src="'+n+'" alt="distributed-transacion-TCC"></p><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4><p>对于一致性要求高、短流程、并发高 的场景，如：金融核心系统，会优先考虑 TCC 方案。而在另外一些场景下，我们并不需要这么强的一致性，只需要保证最终一致性即可。</p><p>比如 很多金融核心以上的业务（渠道层、产品层、系统集成层），这些系统的特点是最终一致即可、流程多、流程长、还可能要调用其它公司的服务。这种情况如果选择 TCC 方案开发的话，一来成本高，二来无法要求其它公司的服务也遵循 TCC 模式。同时流程长，事务边界太长，加锁时间长，也会影响并发性能。</p><p>所以 Saga 模式的适用场景是：</p><ul><li>业务流程长、业务流程多；</li><li>参与者包含其它公司或遗留系统服务，无法提供 TCC 模式要求的三个接口。</li></ul><h4 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h4><ul><li>一阶段提交本地事务，无锁，高性能；</li><li>参与者可异步执行，高吞吐；</li><li>补偿服务易于实现，因为一个更新操作的反向操作是比较容易理解的。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>不保证事务的隔离性。</li></ul><h3 id="本地消息表" tabindex="-1"><a class="header-anchor" href="#本地消息表" aria-hidden="true">#</a> 本地消息表</h3><p>本地消息表其实是国外的 ebay 搞出来的这么一套思想。</p><p>这个大概意思是这样的：</p><ol><li>A 系统在自己本地一个事务里操作同时，插入一条数据到消息表；</li><li>接着 A 系统将这个消息发送到 MQ 中去；</li><li>B 系统接收到消息之后，在一个事务里，往自己本地消息表里插入一条数据，同时执行其他的业务操作，如果这个消息已经被处理过了，那么此时这个事务会回滚，这样<strong>保证不会重复处理消息</strong>；</li><li>B 系统执行成功之后，就会更新自己本地消息表的状态以及 A 系统消息表的状态；</li><li>如果 B 系统处理失败了，那么就不会更新消息表状态，那么此时 A 系统会定时扫描自己的消息表，如果有未处理的消息，会再次发送到 MQ 中去，让 B 再次处理；</li><li>这个方案保证了最终一致性，哪怕 B 事务失败了，但是 A 会不断重发消息，直到 B 那边成功为止。</li></ol><p>这个方案说实话最大的问题就在于<strong>严重依赖于数据库的消息表来管理事务</strong>啥的，如果是高并发场景咋办呢？咋扩展呢？所以一般确实很少用。</p><p><img src="'+o+'" alt="distributed-transaction-local-message-table"></p><h3 id="可靠消息最终一致性方案" tabindex="-1"><a class="header-anchor" href="#可靠消息最终一致性方案" aria-hidden="true">#</a> 可靠消息最终一致性方案</h3><p>这个的意思，就是干脆不要用本地的消息表了，直接基于 MQ 来实现事务。比如阿里的 RocketMQ 就支持消息事务。</p><p>大概的意思就是：</p><ol><li>A 系统先发送一个 prepared 消息到 mq，如果这个 prepared 消息发送失败那么就直接取消操作别执行了；</li><li>如果这个消息发送成功过了，那么接着执行本地事务，如果成功就告诉 mq 发送确认消息，如果失败就告诉 mq 回滚消息；</li><li>如果发送了确认消息，那么此时 B 系统会接收到确认消息，然后执行本地的事务；</li><li>mq 会自动<strong>定时轮询</strong>所有 prepared 消息回调你的接口，问你，这个消息是不是本地事务处理失败了，所有没发送确认的消息，是继续重试还是回滚？一般来说这里你就可以查下数据库看之前本地事务是否执行，如果回滚了，那么这里也回滚吧。这个就是避免可能本地事务执行成功了，而确认消息却发送失败了。</li><li>这个方案里，要是系统 B 的事务失败了咋办？重试咯，自动不断重试直到成功，如果实在是不行，要么就是针对重要的资金类业务进行回滚，比如 B 系统本地回滚后，想办法通知系统 A 也回滚；或者是发送报警由人工来手工回滚和补偿。</li><li>这个还是比较合适的，目前国内互联网公司大都是这么玩儿的，要不你就用 RocketMQ 支持的，要不你就自己基于类似 ActiveMQ？RabbitMQ？自己封装一套类似的逻辑出来，总之思路就是这样子的。</li></ol><p><img src="'+d+'" alt="distributed-transaction-reliable-message"></p><h3 id="最大努力通知方案" tabindex="-1"><a class="header-anchor" href="#最大努力通知方案" aria-hidden="true">#</a> 最大努力通知方案</h3><p>这个方案的大致意思就是：</p><ol><li>系统 A 本地事务执行完之后，发送个消息到 MQ；</li><li>这里会有个专门消费 MQ 的<strong>最大努力通知服务</strong>，这个服务会消费 MQ 然后写入数据库中记录下来，或者是放入个内存队列也可以，接着调用系统 B 的接口；</li><li>要是系统 B 执行成功就 ok 了；要是系统 B 执行失败了，那么最大努力通知服务就定时尝试重新调用系统 B，反复 N 次，最后还是不行就放弃。</li></ol><h3 id="你们公司是如何处理分布式事务的" tabindex="-1"><a class="header-anchor" href="#你们公司是如何处理分布式事务的" aria-hidden="true">#</a> 你们公司是如何处理分布式事务的？</h3><p>如果你真的被问到，可以这么说，我们某某特别严格的场景，用的是 TCC 来保证强一致性；然后其他的一些场景基于阿里的 RocketMQ 来实现分布式事务。</p><p>你找一个严格资金要求绝对不能错的场景，你可以说你是用的 TCC 方案；如果是一般的分布式事务场景，订单插入之后要调用库存服务更新库存，库存数据没有资金那么的敏感，可以用可靠消息最终一致性方案。</p><p>友情提示一下，RocketMQ 3.2.6 之前的版本，是可以按照上面的思路来的，但是之后接口做了一些改变，我这里不再赘述了。</p><p>当然如果你愿意，你可以参考可靠消息最终一致性方案来自己实现一套分布式事务，比如基于 RocketMQ 来玩儿。</p>',55),h=[c];function p(g,u){return i(),e("div",null,h)}const b=a(l,[["render",p],["__file","distributed-transaction.html.vue"]]);export{b as default};
