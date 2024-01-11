import{_ as o,r as s,o as i,c as a,a as e,b as r,d as t,e as n}from"./app-3RcBQnkC.js";const h={},_=e("h1",{id:"《lottery-分布式抽奖系统》-关于面试中的技能、简历、问题汇总",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《lottery-分布式抽奖系统》-关于面试中的技能、简历、问题汇总","aria-hidden":"true"},"#"),r(" 《Lottery 分布式抽奖系统》，关于面试中的技能、简历、问题汇总")],-1),c=e("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),f={href:"https://t.zsxq.com/0d7K7hJ0i",target:"_blank",rel:"noopener noreferrer"},d=n('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><p>此部分主要用于向读者提供星球项目之一的 Lottery 分布式抽奖系统如何体现到简历中，包括；专业技能、项目经验。</p><h2 id="一、项目介绍" tabindex="-1"><a class="header-anchor" href="#一、项目介绍" aria-hidden="true">#</a> 一、项目介绍</h2><p>面试官您好，Lottery 是我的一个(学习/工作)项目，此项目不只是一个简单单一的抽奖，而是符合营销平台架构设计具备可扩展性的微服务架构设计。核心流程为根据不同人群标签的人群规律，选择不同的抽奖活动，每个活动的参与为一个抽奖单。可以有效的控制参与用户数和异常流程的补偿。领取抽奖单后执行使用了模板、工厂、策略的抽奖玩法设计。在这里设计了分段锁，避免独占锁的竞争，从而挺高效率。最后抽奖完成异步发送 MQ 消息方式进行驱动后续的发奖流程。</p><p>Lottery 系统的全方面技术栈的使用，多场景的问题的解决方案，让我在这个过程中学习到非常多的内容，这写技术学习的内容，也可以更好的应对以后的开发工作。非常感谢您给我这次面试机会。</p><h2 id="二、简历模板" tabindex="-1"><a class="header-anchor" href="#二、简历模板" aria-hidden="true">#</a> 二、简历模板</h2><ul><li><strong>项目名称</strong>：营销活动平台 - Lottery 微服务抽奖系统</li><li><strong>系统架构</strong>：以 DDD 领域驱动设计开发，微服务拆分的分布式系统架构</li><li><strong>核心技术</strong>：SpringBoot、MyBatis、Dubbo、MQ、MySQL、XDB-Router、ES、ZK</li><li><strong>项目描述</strong>：抽奖系统是营销平台的重要微服务之一，可以满足 C 端人群的需求，例如拉新、促活、留存等。该系统运用抽象、分治和 DDD 知识，拆解服务边界，凝练领域服务功能。围绕抽奖服务建设领域服务，包括规则引擎、抽奖策略、活动玩法、奖品发放等。这可以满足业务产品快速迭代上线的需求，同时减少研发成本，提高交付效率。</li><li><strong>核心职责</strong>： <ul><li>【高级】构建以 DDD 分层结构的处理方式，搭建整个抽奖系统架构。运用设计原则和工厂、代理、模板、组合、策略等设计模式的综合使用，搭建易于维护和迭代的系统工程。</li><li>【高级】鉴于系统内有较多的规则策略过滤，包括准入、人群、风控、A/BTest等需求，为适应系统规模可快速开发和使用的方式，搭建了去中心化的量化人群规则引擎组件。通过业务需求对逻辑的扩展和内置引擎执行器的使用，完成自由组合的人群过滤服务。这降低了共性功能重复开发所带来的成本问题，并提高了研发效率。</li><li>【高级】根据实际秒杀峰值场景 <code>TPS 5000 ~ 8000</code> 的需求，开发了统一路由组件。该组件不仅可以满足差异化不同字段的分库分表组合，还支持 Redis 库存分片和秒杀滑动库存分块。而且，开发了统一路由 XDB-Router 的 SpringBoot Starter 技术组件。该套组件已经经历了多次大促活动场景的考验，支持横向扩展，可以满足业务规模的快速增长。</li><li>【简单】运用模板、策略、工厂三个设计模式，定义抽奖过程标准和实现对应的多类型抽奖的服务模块。</li><li>【简单】因活动秒杀的并发场景，将秒杀从最开始的数据库行级锁优化为Redis Key 加锁，又从 Redis Key 的独占锁，优化为滑块锁。优化后整体秒杀有了非常可观的性能提升。</li><li>【简单】解耦抽奖流程，把抽奖和发奖用MQ消息串联起来，避免一个流程太长，导致用户一直等待。</li></ul></li></ul><h2 id="三、项目问答" tabindex="-1"><a class="header-anchor" href="#三、项目问答" aria-hidden="true">#</a> 三、项目问答</h2><h3 id="_1-营销架构介绍" tabindex="-1"><a class="header-anchor" href="#_1-营销架构介绍" aria-hidden="true">#</a> 1. 营销架构介绍</h3><p>鉴于有些伙伴在面试时候，不知道怎么叙述抽奖这个微服务所在的位置，特此补充图</p><div align="center"><img src="https://bugstack.cn/images/article/project/lottery/Part-1/1-00.png?raw=true" width="750px"></div><ol><li>营销，是一个非常庞大的系统体系。包括众多的模块组成，其中抽奖只是一个重要的微服务之一。</li><li>包括，营销平台、返利平台、积分账户、抽奖系统、券系统、灌券系统、售卖系统，以及各类玩法的组件系统。它们的关系如图所示。</li></ol><h3 id="_2-为什么自研路由组件" tabindex="-1"><a class="header-anchor" href="#_2-为什么自研路由组件" aria-hidden="true">#</a> 2. 为什么自研路由组件</h3><p>如果面试问：“为什么要自研，市面不是有吗，怎么回答？” 可以从以下3个点解答；</p><ol><li>维护性；市面的路由组件比如 shardingsphere 但过于庞大，还需要随着版本做一些升级。而我们需要更少的维护成本。</li><li>扩展性；结合自身的业务需求，我们的路由组件可以分库分表、自定义路由协议，扫描指定库表数据等各类方式。研发扩展性好，简单易用。</li><li>安全性；自研的组件更好的控制了安全问题，不会因为一些额外引入的jar包，造成安全风险。</li></ol><p>当然，我们的组件主要是为了更好的适应目前系统的诉求，所以使用自研的方式处理。就像shardingsphere 的市场占有率也不是 100% 那么肯定还有很多公司在自研，甚至各个大厂也都自研一整套分布式服务，来让自己的系统更稳定的运行。分库分表基本是单表200万，才分。那么面试怎么说；</p><p>你们为什么分库分表？</p><ol><li>我们分库分表用的非常熟。但不能为了等到系统到了200万数据，才拆。那么工作量会非常大</li><li>我们的做法是，因为有成熟方案，所以前期就分库分表了。但，为了解释服务器空间。所以把分库分表的库，用服务器虚拟出来机器安装。这样即不过多的占用服务器资源，也方便后续数据量真的上来了，好拆分。</li><li>同时，抽奖系统，是瞬时峰值较高的系统，历史数据不一定多。所以我们希望，用户可以快速的检索到个人数据，做最优响应。因为大家都知道，抽奖这东西，push发完，基本就1~3分钟结束，10分钟人都没了。所以我们这也是做了分库分表的理由。</li></ol><h3 id="_3-规则引擎的设计目的" tabindex="-1"><a class="header-anchor" href="#_3-规则引擎的设计目的" aria-hidden="true">#</a> 3. 规则引擎的设计目的</h3><ol><li>面试官您好。关于规则引擎这块，首先；这是一个基于降低重复编码和提高可维护性的，并需要符合当前项目诉求的，同时不过渡的设计和减少运维成本的前提下，在技术调研后所做的微型规则引擎设计实现。</li><li>此规则引擎的主要作用是解决，抽奖业务场景中对个性化运营诉求的处理，如；人群身份标签、交易记录、活动资格、授信状态等规则的可配置化的交叉使用。</li><li>所以基于这样的情况，此规则引擎的设计是一个二叉树判断，实现手段运用到了组合模式、工厂模式等。并为了便于维护和使用，进行了库表对二叉树的抽象设计，树根、节点、子叶，映射为二叉树编码的相关属性信息。同时，也可以基于这样的库表做前端页面的托拉拽配置操作，降低运营成本。</li><li>最后，其实动态的规则引擎配置，其实放大了看就是 BPMN + Drools + Groovy，的一个低代码实现框架。综上，面试官这个就是我在做规则引擎设计的一些思考、调研和落地。如果以后咱公司有其他更大的场景，我也可以扩展为 Reta 算法和低代码方案进行架构落地实现。</li></ol><h3 id="_4-秒杀的滑块锁讲解" tabindex="-1"><a class="header-anchor" href="#_4-秒杀的滑块锁讲解" aria-hidden="true">#</a> 4. 秒杀的滑块锁讲解</h3>',21),b=e("li",null,"是针对于用户参与的活动库存加锁的，如果是独占锁是针对于活动ID加锁的。",-1),m={href:"https://bugstack.cn/md/road-map/redis.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://t.zsxq.com/12sNS4E2J",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"对于非交易的活动类场景，要的就是一个快。快速响应、快速释放，可接受容错失败概率。但不要磨磨唧唧影响我的主核心交易链路。但凡在618、双11，营销敢超时，就直接下掉。保证用户可下单可支付。否则这黄金时间点，你耽误1分钟都是几个亿的成交额。所以，这类营销秒杀场景下，根本就是保证不超卖，也不恢复库存。",-1),x=e("p",null,"注意：独占锁是加给个人流程的 - 无资源竞争，如贷款单受理。分段/滑块/无锁化，是加给库存的 - 有资源竞争，如秒杀、商品发货等集中资源类。就跟大超时的收银台一样。原来就1个出口，后来一排出口，在后来又有无人化的电子出口。点点那个软件。",-1),q=e("p",null,"举例；incr 的速度很快，就像进入了公共的卫生间🚾。一个坑一个门，谁进去谁就锁上。没有就跑到下一个门。你说你不锁门吧，也没问题。但别人不知道，一拽开就比较尴尬。所以要加锁，锁门。",-1),z=e("h2",{id:"四、面试刷题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、面试刷题","aria-hidden":"true"},"#"),r(" 四、面试刷题")],-1),D={href:"https://t.zsxq.com/07yKZJFkR",target:"_blank",rel:"noopener noreferrer"},y={href:"https://t.zsxq.com/04EYNRF6m",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://t.zsxq.com/04zNzZVFa",target:"_blank",rel:"noopener noreferrer"},R={href:"https://t.zsxq.com/04Am6mIqR",target:"_blank",rel:"noopener noreferrer"},M={href:"https://t.zsxq.com/04yzF27UB",target:"_blank",rel:"noopener noreferrer"},B={href:"https://t.zsxq.com/04fA6meyB",target:"_blank",rel:"noopener noreferrer"},N={href:"https://t.zsxq.com/04ZrJYBy7",target:"_blank",rel:"noopener noreferrer"},S={href:"https://t.zsxq.com/04eqV7YNf",target:"_blank",rel:"noopener noreferrer"},j={href:"https://t.zsxq.com/04y3FAmq3",target:"_blank",rel:"noopener noreferrer"},P={href:"https://t.zsxq.com/04BMN7myv",target:"_blank",rel:"noopener noreferrer"},V={href:"https://t.zsxq.com/043BiQje6",target:"_blank",rel:"noopener noreferrer"},U={href:"https://t.zsxq.com/04jyRjA6I",target:"_blank",rel:"noopener noreferrer"},A={href:"https://t.zsxq.com/04EAameYz",target:"_blank",rel:"noopener noreferrer"},v={href:"https://t.zsxq.com/04EuvJe6U",target:"_blank",rel:"noopener noreferrer"},F={href:"https://t.zsxq.com/04vjAq3RR",target:"_blank",rel:"noopener noreferrer"},E={href:"https://t.zsxq.com/05zRvbUJ2",target:"_blank",rel:"noopener noreferrer"},L={href:"https://t.zsxq.com/05iQN7AU3",target:"_blank",rel:"noopener noreferrer"},J={href:"https://t.zsxq.com/053RVFeuZ",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://t.zsxq.com/05MJyZ7Yf",target:"_blank",rel:"noopener noreferrer"},I={href:"https://t.zsxq.com/05Nr3rjUf",target:"_blank",rel:"noopener noreferrer"},w={href:"https://t.zsxq.com/05EYNRF6m",target:"_blank",rel:"noopener noreferrer"},K={href:"https://t.zsxq.com/05UJUFaur",target:"_blank",rel:"noopener noreferrer"},C={href:"https://t.zsxq.com/05e662Vb2",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://t.zsxq.com/05YVjEYny",target:"_blank",rel:"noopener noreferrer"},G={href:"https://t.zsxq.com/05urRRzBi",target:"_blank",rel:"noopener noreferrer"},T={href:"https://t.zsxq.com/05qFun6Uj",target:"_blank",rel:"noopener noreferrer"},X={href:"https://t.zsxq.com/053ZrZZFU",target:"_blank",rel:"noopener noreferrer"},H={href:"https://t.zsxq.com/06buB2niu",target:"_blank",rel:"noopener noreferrer"},O={href:"https://t.zsxq.com/05UrVfmQB",target:"_blank",rel:"noopener noreferrer"},W={href:"https://t.zsxq.com/05yfAiMji",target:"_blank",rel:"noopener noreferrer"},$={href:"https://t.zsxq.com/05MjE2f6a",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://t.zsxq.com/05nQBiUZN",target:"_blank",rel:"noopener noreferrer"},re={href:"https://t.zsxq.com/05rVNfurN",target:"_blank",rel:"noopener noreferrer"},le={href:"https://t.zsxq.com/05rbM7IYr",target:"_blank",rel:"noopener noreferrer"},te={href:"https://t.zsxq.com/05YFQ3byr",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://t.zsxq.com/05QVrnE6I",target:"_blank",rel:"noopener noreferrer"},oe=e("ul",null,[e("li",null,"问：抽奖的奖品是优惠券，那金额多大呢？候选集有多大？多少人参与？"),e("li",null,"问：你说你用的决策树，那决策树是什么时候创建的呢？是每个用户参与抽奖就创建一次（个性化），还是一开始就创建好？"),e("li",null,"问：筛选的标签是什么，根据什么来过滤呢？"),e("li",null,"问：那有没有可能你制定的这些标签，数据传进来的时候是丢失的，用户没有某个路径上的数据，是不是就到不了叶子节点了，按你说的就没法领取活动了？"),e("li",null,"问：既然你的这些规则都是确定的，为什么要用决策树？决策树和布尔检索有什么区别知道吗？")],-1),se={href:"https://t.zsxq.com/05RniU7un",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://t.zsxq.com/05A6qfiun",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://t.zsxq.com/05f2zVRfq",target:"_blank",rel:"noopener noreferrer"},he={href:"https://t.zsxq.com/06MRnYBaI",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://t.zsxq.com/06NZNzvrv",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://t.zsxq.com/06mUvjA2N",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://t.zsxq.com/067aqrFqF",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://t.zsxq.com/07E6YzZf6",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://t.zsxq.com/07uzvnurR",target:"_blank",rel:"noopener noreferrer"},de=n("<ul><li>抽奖系统设计到了哪些设计模式</li><li>为什么不使用自增ID</li><li>Redis滑动库存分布式锁是如何实现的</li><li>分布式锁有哪些实现方式？为什么使用Redis实现分布式锁</li><li>Redis 是单机的吗，如果单机的话 Redis 分布式锁有没有什么问题</li><li>保证活动库存最终一致性</li><li>为什么使用RocketMQ，而不考虑kafka等其他 MQ 组件呢</li><li>项目中哪些地方使用了MQ</li><li>说说MQ解耦发奖流程，为什么要解耦</li><li>MQ 解耦发奖后的具体流程</li><li>消息丢失怎么办</li><li>为什么选择xxl-job执行定时任务，了解其他任务调度组件吗</li><li>筛选的标签是什么，根据什么来过滤</li><li>如果用户没有定制的标签，数据传进来是丢失的，用户没有某个路径上的数据，是不是无法到达叶子节点，就无法领取活动</li><li>规则树是每个用户都有自己的规则树吗</li><li>决策树能否复用</li><li>抽奖算法是怎么设计的</li><li>DDD的优势</li><li>谈谈整个抽奖系统的总体流程</li><li>整个系统的吞吐量，QPS，等相关参数</li><li>有遇到过线上问题吗？怎么解决的</li></ul>",1),be={href:"https://t.zsxq.com/07Mv3nQBE",target:"_blank",rel:"noopener noreferrer"},me={href:"https://t.zsxq.com/07qrZjmIu",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://t.zsxq.com/07jqm9sJW",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://t.zsxq.com/08QtwM6N5",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://t.zsxq.com/086oIHSzT",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://t.zsxq.com/08HdrYmK3",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://t.zsxq.com/08GUhI1kE",target:"_blank",rel:"noopener noreferrer"},De={href:"https://t.zsxq.com/09z8st5wJ",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://t.zsxq.com/0anzjonAp",target:"_blank",rel:"noopener noreferrer"},Qe=e("ol",null,[e("li",null,"你们项目中的微服务是如何划分的？是只有一个抽奖的微服务吗？"),e("li",null,"项目中的分布式是如何理解的？"),e("li",null,"项目中的接口幂等是如何实现的？"),e("li",null,"为什么要使用到ES？"),e("li",null,"项目中用到了哪些Redis数据结构？"),e("li",null,"项目会出现Redis缓存穿透击穿的情况吗？是如何解决的？")],-1),Re={href:"https://t.zsxq.com/0aJ9iPHpr",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://t.zsxq.com/0awf3MMkl",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://t.zsxq.com/0awVJX07F",target:"_blank",rel:"noopener noreferrer"},Ne=e("ol",null,[e("li",null,"抽奖系统中遇到什么困难？"),e("li",null,"抽奖系统TPS要求5000-8000，用什么技术实现？"),e("li",null,"抽奖系统日活多少？"),e("li",null,"抽奖系统和其他部门的交互是怎么做的？"),e("li",null,"抽奖系统涉及到的路由组件？"),e("li",null,"抽奖系统负载均衡怎么做的？")],-1),Se={href:"https://t.zsxq.com/0aFaNx8Cd",target:"_blank",rel:"noopener noreferrer"},je={href:"https://t.zsxq.com/0atvavVVP",target:"_blank",rel:"noopener noreferrer"},Pe=e("ol",null,[e("li",null,"1500 QPS指的是单接口的嘛？还是怎么来的？我回答单接口。"),e("li",null,"你的抽奖服务有多少台应用机器？我回答4台。"),e("li",null,"既然你1500 QPS，那你是RT是多少？ 我回答100ms。"),e("li",null,"接上面那个问题，面试官说那我就不太理解了，你的RT既然是100ms，那峰值是如何支撑到3000 QPS的，因为你只有4台机器啊？（接我的回答 2）"),e("li",null,"峰值 3000 QPS 持续 半分钟的话，你 4台机器 100ms 是完全支撑不了的，你可能得去看看你 3000 QPS怎么压出来的。"),e("li",null,"我看你写了DDD的分层架构，那讲下每个领域的实体。（这个我蒙了）"),e("li",null,"有哪些表你设置了唯一键？（我一开始以为他说的主键，我给他讲了UUID，他不是很满意）"),e("li",null,"既然你是做核心接口的，那肯定其他下游会依赖你的服务吧，那你是怎么解决你和其他服务之间的 分布式事务的？"),e("li",null,"你能给我讲讲为什么用kafka吗？ 我理解的是kafka业务方面其实很少用，主要在大数据方面，存在消息丢失的场景，kafka丢消息的话 不会造成客诉吗？")],-1),Ve={href:"https://t.zsxq.com/0aUPkgzge",target:"_blank",rel:"noopener noreferrer"},Ue=e("ol",null,[e("li",null,"你们这个项目的人员配备是什么样子的？你是属于核心成员吗？"),e("li",null,"你负责的是核心模块，其他系统的模块依赖于你吗？那你是怎么保证你的服务出错，不会影响到别人的服务的呢？"),e("li",null,"DDD每个领域内有哪些实体，以及实体的职能是做什么的？"),e("li",null,"压测的数据你是怎么来的，用了什么工具去压测？压测的机子配置是怎么样的？"),e("li",null,"你整个营销系统里还有哪些模板，能跟我讲讲其他模块嘛？"),e("li",null,"如果跨部门的项目，你和其他团队的成员意见不一致怎么办？"),e("li",null,"讲一讲项目中最能够体现你owner意识的几件事情。"),e("li",null,"讲一讲你入职到现在哪些方面取得成长了，最好能有事例论证。")],-1),Ae={href:"https://t.zsxq.com/0bUpPAPCX",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://t.zsxq.com/0b9LylPxO",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://t.zsxq.com/0bDjq99jG",target:"_blank",rel:"noopener noreferrer"},Ee=e("ol",null,[e("li",null,"你的DDD是怎么分层的？"),e("li",null,"核心域的主要职责有哪些？"),e("li",null,"核心域这边有哪些实体，哪些聚合？"),e("li",null,"领域层有一个原则，就是尽量保证领域层的一个纯粹，那你如何保证领域层的一个纯粹性？"),e("li",null,"防腐层的职责是什么？"),e("li",null,"你扣库存的时候，如果库存在缓存扣成功了，但是消息队列没发送成功怎么办？"),e("li",null,"你依赖于缓存，那假设Redis全down机了怎么办（虽然概率比较小），虽然有故障恢复，但是故障恢复有可能会数据丢失？")],-1),Le={href:"https://t.zsxq.com/0cnuKOBTQ",target:"_blank",rel:"noopener noreferrer"},Je=e("ul",null,[e("li",null,"Q1:规则引擎中，如果有两个同类型的节点怎么办？比如说规则树中有两个节点代表的同一类型的条件，比如考虑一个年龄大于10，一个岁数大于25，位于不同的规则树节点中，在高并发的情况下，通过rpc调用接口，对于用户的年龄数据查询会查两遍，但是实际上查一次就可以，但是调用端相当于耗费了两次的查询，应该怎么解决？(这个问题我听蒙了"),e("li",null,"Q2:如果是千万级的数据，应该会需要怎么优化？可以从数据存储和查询优化的角度？"),e("li",null,"Q3:你们的分库分表是怎么做的？(这里回答了基于用户ID分表)在分库分表的场景下，如果想要查询当前这个活动所有的抽奖结果的明细应该怎么去查询呢？"),e("li",null,"Q4:怎么保证消息队列的消息不重复消费？或者说是一定被消费了？"),e("li",null,"Q5:如果保证系统的幂等性？有没有考虑同一个用户如果抽了两次奖的情况？（回答会做一个重复性的校验）"),e("li",null,"Q6:如果前端的用户非常快地点击了两次，也就是说查询这条数据的时候同时都是空的，这种情况下怎么保证一致性？")],-1),Ye={href:"https://t.zsxq.com/0cOV9vOr0",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://t.zsxq.com/0cLTx0t9E",target:"_blank",rel:"noopener noreferrer"},we={href:"https://t.zsxq.com/0dKA27XNz",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://t.zsxq.com/0e09EDxHu",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://t.zsxq.com/0ekXNK2Qq",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://t.zsxq.com/0fxyr6Mb4",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://t.zsxq.com/0fBVqDbtl",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://t.zsxq.com/107LwTD9I",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://t.zsxq.com/10ibGRmAK",target:"_blank",rel:"noopener noreferrer"},He={href:"https://t.zsxq.com/10jP1UY42",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://t.zsxq.com/10ciJnGDj",target:"_blank",rel:"noopener noreferrer"},We={href:"https://t.zsxq.com/10XnBD1w8",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://t.zsxq.com/10G4nY9UP",target:"_blank",rel:"noopener noreferrer"},er={href:"https://t.zsxq.com/10WwhYDKy",target:"_blank",rel:"noopener noreferrer"},rr={href:"https://t.zsxq.com/107LFRcAH",target:"_blank",rel:"noopener noreferrer"},lr={href:"https://t.zsxq.com/11VOoFhHX",target:"_blank",rel:"noopener noreferrer"},tr={href:"https://t.zsxq.com/11ckhUMeW",target:"_blank",rel:"noopener noreferrer"},nr={href:"https://t.zsxq.com/11j6zWN6k",target:"_blank",rel:"noopener noreferrer"},or={href:"https://t.zsxq.com/115w0DAUw",target:"_blank",rel:"noopener noreferrer"},sr={href:"https://t.zsxq.com/11qoK5xep",target:"_blank",rel:"noopener noreferrer"},ir=e("ol",null,[e("li",null,"除了使用mq解耦发奖流程外，有没有别的解决方案？（除了使用mq外有没有其他方式解决用户一直等待的问题？或者有没有比mq更优的方式？）"),e("li",null,"如果这个项目真正应用于实际中还有哪些地方需要改进？"),e("li",null,"如果让你来评估项目的QPS的话，你会用什么方式来评估？（补充：不要做压测，就通过现在的设计以及硬件配置推导QPS应该达到什么水准？）"),e("li",null,"比如说：16核64G的机器，普通机械硬盘，这种情况下让你来做秒杀的系统，你会去修改和配置哪些参数？（不考虑redis、kafka等，只考虑springboot的应用） 我答了要考虑线程数、jvm堆大小，面试官问我具体数值，我答不上来"),e("li",null,"JVM堆配置过大的副作用有哪些？"),e("li",null,"接上面，SpringBoot和JVM需要配置的参数还有哪些？"),e("li",null,"秒杀场景下用哪种垃圾回收器合适？"),e("li",null,"Full GC卡顿时间长短跟什么有关系？如果堆大小为128G的话，Full GC可能停顿多久？"),e("li",null,"写代码时候有没有什么方式尽量减少Full GC的概率？")],-1),ar={href:"https://t.zsxq.com/12aAYyPQC",target:"_blank",rel:"noopener noreferrer"},hr={href:"https://t.zsxq.com/120qjagAj",target:"_blank",rel:"noopener noreferrer"},_r={href:"https://t.zsxq.com/12pc2umy0",target:"_blank",rel:"noopener noreferrer"};function cr(pr,ur){const l=s("ExternalLinkIcon");return i(),a("div",null,[_,e("p",null,[r("作者：小傅哥 "),c,r("博客："),e("a",p,[r("https://bugstack.cn"),t(l)]),u,r("课程："),e("a",f,[r("https://t.zsxq.com/0d7K7hJ0i"),t(l)])]),d,e("ol",null,[b,e("li",null,[r("滑块锁的核心是去竞态，避免独占影响系统的响应性能。关于此类锁，这里又做了视频做了详细的讲解；"),e("a",m,[r("Redis | bugstack 虫洞栈"),t(l)]),r(" - 如图。别看提秒杀一堆人说，但如果还讲用独占锁做活动的秒杀场景，就没做过大规模的秒杀。独占是会很大概率出事故的。")]),e("li",null,[r("那为什么加一个锁呢，incr 不就可以。加锁是兜底，你不知道什么时候会出现 incr 不对的情况。如；集群配置问题【特例】、出现redis问题，需要恢复库存。如果没有锁，可能会超卖。"),e("a",k,[r("https://t.zsxq.com/12sNS4E2J"),t(l)]),r(" - 第一条评论加了说明。")]),g]),x,q,z,e("ul",null,[e("li",null,[e("a",D,[r("关于抽奖系统怎么写到简历里"),t(l)])]),e("li",null,[e("a",y,[r("抽奖系统，面试被问到表的设计，要怎么答？"),t(l)])]),e("li",null,[e("a",Q,[r("抽奖系统一般部署多少实例比较合适，系统大概能抗住多大的流量？"),t(l)])]),e("li",null,[e("a",R,[r("抽奖系统为什么自研路由组件？"),t(l)])]),e("li",null,[e("a",M,[r("抽奖项目分布式事务如何解决?"),t(l)])]),e("li",null,[e("a",B,[r("抽奖系统 TPS 5000~8000 服务器配置大概情况"),t(l)])]),e("li",null,[e("a",N,[r("抽奖系统mq重发的时候是怎么保证幂等性"),t(l)])]),e("li",null,[e("a",S,[r("面试时抽奖系统被问到类似qps、tps这些指标如何回答？"),t(l)])]),e("li",null,[e("a",j,[r("问分库分表，别给我回答分2个库，每个库4个表，那你分那个毛用，一看就是假的"),t(l)])]),e("li",null,[e("a",P,[r("想问问大家在面试的时候自我介绍，是怎么介绍抽奖项目的，个人项目还是公司项目？"),t(l)])]),e("li",null,[e("a",V,[r("说一下抽奖系统拓扑结构"),t(l)])]),e("li",null,[e("a",U,[r("聚合和聚合根在抽奖系统的体现?"),t(l)])]),e("li",null,[e("a",A,[r("抽奖系统DDD和MVC的区别"),t(l)])]),e("li",null,[e("a",v,[r("描述你遇到的一个技术问题-抽奖事故及优化"),t(l)])]),e("li",null,[e("a",F,[r("为什么用户领取活动完毕，发送MQ去更新数据库中的库存"),t(l)])]),e("li",null,[e("a",E,[r("量化规则引擎是一个组件，如果有一个新的业务进来，如何复用? 它的复用性体现在哪?能否支持风控可A/Btest需求?"),t(l)])]),e("li",null,[e("a",L,[r("抽奖系统自己写成MVC架构怎么讲？"),t(l)])]),e("li",null,[e("a",J,[r("抽奖流程阐述"),t(l)])]),e("li",null,[e("a",Y,[r("抽奖系统配置相关"),t(l)])]),e("li",null,[e("a",I,[r("Lottery项目包装为实验室项目，面试时被问对接的是什么甲方，为什么数据量会这么大"),t(l)])]),e("li",null,[e("a",w,[r("针对于抽奖系统，面试被问到表的设计，要怎么答？"),t(l)])]),e("li",null,[e("a",K,[r("这个项目的业务数据，例如用户量、活跃用户量，以及核心业务数据，例如订单系统的下单量等"),t(l)])]),e("li",null,[e("a",C,[r("技术和业务19道面试题汇总"),t(l)])]),e("li",null,[e("a",Z,[r("抽奖和发奖关于库存的扣减，防超发漏发，监控和弥补有没有设计思路和流程图之类的，添加库存，扣减库存的操作日志怎么设计"),t(l)])]),e("li",null,[e("a",G,[r("路由散列算法：idx / tbCount + 1 & idx - tbCount * (dbIdx - 1)"),t(l)])]),e("li",null,[e("a",T,[r("Lottery项目的抽奖算法，抽奖概率是100万怎么处理？"),t(l)])]),e("li",null,[e("a",X,[r("Lottery项目的抽奖算法，抽奖概率是100万的另外一种双色球设计？"),t(l)])]),e("li",null,[e("a",H,[r("抽奖码，抽奖策略；类似这种抽奖活动，假定这个抽奖码是随机的6位数，也就是有1-999999这么多的抽签码，用户每次获取都是随机的抽奖码"),t(l)])]),e("li",null,[e("a",O,[r("Lottery向内部应用提供了RPC接口，那么当h5端需要提供一个http的请求，这个接口应该写在哪里呢"),t(l)])]),e("li",null,[e("a",W,[r("多种抽象策略是怎么注入使用的 | 手动、ist、注解、Map？"),t(l)])]),e("li",null,[e("a",$,[r("如果redis作为分布式锁的时候，主节点挂掉了，但是数据还没有同步到从节点，这种情况怎么办？"),t(l)])]),e("li",null,[e("a",ee,[r("活动库存与奖品库存的配置关系"),t(l)])]),e("li",null,[e("a",re,[r("抽奖系统用到了分库分表，那目前市面上还有那些成熟的规则引擎组件？"),t(l)])]),e("li",null,[e("a",le,[r("抽奖策略&斐波那契散列&活动库存&任务扫描时效性&并发编程场景"),t(l)])]),e("li",null,[e("a",te,[r("关于抽奖算法自己整理的一些面试题和回答：采用了什么设计模式、实现了什么抽奖算法"),t(l)])]),e("li",null,[e("a",ne,[r("我把抽奖系统包装到实习经历里了。今天面试的那个部门是做广告架构的，可能有广告投放的场景，所以对我简历上的规则引擎量化人群参与活动模块比较感兴趣"),t(l)]),oe]),e("li",null,[e("a",se,[r("抽奖系统包装到自己的电商业务中，描述案例"),t(l)])]),e("li",null,[e("a",ie,[r("抽奖系统的领域事件有哪些？是如何实现的？"),t(l)])]),e("li",null,[e("a",ae,[r("结合美团DDD抽奖进行扩展"),t(l)])]),e("li",null,[e("a",he,[r("想问一下抽奖系统中，各个领域是按照什么划分的？有什么规则或标准么？"),t(l)])]),e("li",null,[e("a",_e,[r("现在的抽奖系统是可能存在活动刚上线，所有的奖品就被抽完了，问如何避免这种情况发生？"),t(l)])]),e("li",null,[e("a",ce,[r("面试的时候问到了，抽奖项目里边 接口间的幂等性是如何保证的？"),t(l)])]),e("li",null,[e("a",pe,[r("像抽奖系统这种ddd架构的项目一般是怎么开发的？开发周期是多久？"),t(l)])]),e("li",null,[e("a",ue,[r("规则条件，跟需要过滤的数据不在一张表中，那实际业务中该怎么根据规则引擎去筛选符合条件的数据？"),t(l)])]),e("li",null,[e("a",fe,[r("面试问题汇总，问的比较全面。"),t(l)]),de]),e("li",null,[e("a",be,[r("为什么在总体概率算法 DefaultRateRandomDrawAlgorithm 这个类中，要使用SecureRandom这个类生成随机数？"),t(l)])]),e("li",null,[e("a",me,[r("抽奖系统秒杀库存分片"),t(l)])]),e("li",null,[e("a",ke,[r("在抽奖系统中，前端访问的接口是写在网关中的，但是网关一般负责的是一些公共操作，例如鉴权，限流，给白名单等等，写在这里合适吗？"),t(l)])]),e("li",null,[e("a",ge,[r("为什么使用DDD，主要用于解决什么问题？抽奖系统中有哪些聚合？"),t(l)])]),e("li",null,[e("a",xe,[r("你的抽奖系统中，包的命名是怎样的？res和vo有什么区别，为什么想着这么分包呢？有什么语义和使用上的区别吗"),t(l)])]),e("li",null,[e("a",qe,[r("抽奖系统，我想在简历上体现微服务，但是，熔断，降级，限流有好几个组件可以同时实现一个功能，我想问一下，该怎么组织这些组件 @面条"),t(l)])]),e("li",null,[e("a",ze,[r("抽奖系统中 db-router 定义了一个切面又定义了 MyBatis 拦截器，这两个东西有前后执行顺序吗？他们之间的关系是什么呢？"),t(l)])]),e("li",null,[e("a",De,[r("抽奖系统的核心域，支撑域和通用域分别对应哪些呢？"),t(l)])]),e("li",null,[e("a",ye,[r("近期关于抽奖系统面试题汇总"),t(l)]),Qe]),e("li",null,[e("a",Re,[r("关于抽奖系统，活动配置黑名单，白名单，在获得抽奖次数前看是否存在黑名单，在黑名单用户不能获得次数。对应业务应该怎么逻辑是怎样的"),t(l)])]),e("li",null,[e("a",Me,[r("抽奖系统面试问到2个问题，不知道怎么回答好，傅哥帮我想想话术【把抽奖项目重新做一边，有哪些方面可以做的更好】【项目遇到最大的挑战是什么】"),t(l)])]),e("li",null,[e("a",Be,[r("抽奖遇到的一些面试题"),t(l)]),Ne]),e("li",null,[e("a",Se,[r("面试问我: 这个营销系统是之前就有，你去接手了。还是你从0到1构建的"),t(l)])]),e("li",null,[e("a",je,[r("今天被一个技术专家问麻了，付哥快出来对波线（下面的记录我听录音回放的）"),t(l)]),Pe]),e("li",null,[e("a",Ve,[r("二面更偏向业务多点，帮我看下怎么回答好，圆润圆润话术"),t(l)]),Ue]),e("li",null,[e("a",Ae,[r("抽奖后台配置了用户可以获得抽奖次数限制，每天最多3次，每周最多18次，每个月最多70次。如何设计实现。"),t(l)])]),e("li",null,[e("a",ve,[r("面试官问了我抽奖系统中MQ的丢失风险有多大"),t(l)])]),e("li",null,[e("a",Fe,[r("面试被问到抽奖项目的问题"),t(l)]),Ee]),e("li",null,[e("a",Le,[r("Lottery抽奖系统被面试官问穿了...结合项目问了很多场景题："),t(l)]),Je]),e("li",null,[e("a",Ye,[r("面试官问我，抽奖项目里面的redis减库存，redis如果发生丢失现象，比如一条命令还在路上的时候丢失了，那会不会导致库存超发现象呢？"),t(l)])]),e("li",null,[e("a",Ie,[r("从无到有进行领域驱动设计，是怎样的一个流程？"),t(l)])]),e("li",null,[e("a",we,[r("对于你的滑动库存锁，假设有1000个库存，有几个或者十几个线程因为某种原因抢到了锁，但是后续流程失败了，也就是说1000个库存还剩下了几个或几十个参与名额，这个时候你怎么去保证所有的库存都能消耗完呢？"),t(l)])]),e("li",null,[e("a",Ke,[r("关于数据库路由组件这个小项目，在面试中，可能被问到的问题大概有什么？可以给个准备方向吗？"),t(l)])]),e("li",null,[e("a",Ce,[r("在使用redis的incr来扣减库存，如果redis宕机了，丢失了一部分数据，是不是就有可能incr得到重复的key，这个时候相应的key滑块锁如果恰好又已经被释放了，是不是就超买了，这时候怎么解决呢？"),t(l)])]),e("li",null,[e("a",Ze,[r("Lottery的异常情况有哪些"),t(l)])]),e("li",null,[e("a",Ge,[r("有没有考虑到分库分表对运维和后续开发难度造成的影响，这个是怎么考量了，后续会有什么麻烦"),t(l)])]),e("li",null,[e("a",Te,[r("请问下大家在面试的时候，如果抽奖系统是1500qps，接口响应300ms，然后每秒的并发量是450个，然后面试官问参与人数的时候怎么回答呢？"),t(l)])]),e("li",null,[e("a",Xe,[r("关于抽奖系统的负载均衡和集群问题还有些疑问，假设QPS是50000的话，那服务的应用层和网关层要部署多少个实例，这些实例是都部署在不同的物理机上，还是一台物理机可以有多个实例？还有redis和kafka的话要配置多少实例？"),t(l)])]),e("li",null,[e("a",He,[r("MQ有没有做持久化？redis做分布式锁，如果这个过程中redis挂了，怎么处理？分布式事务是怎么实现的？"),t(l)])]),e("li",null,[e("a",Oe,[r("抽奖系统 MySql 连接数配置了多少，如何查看和修改"),t(l)])]),e("li",null,[e("a",We,[r("项目里面一般什么时候会用到线程池哇，你这个抽奖项目里面可以用线程池吗"),t(l)])]),e("li",null,[e("a",$e,[r("每次领取活动都要查看是否有未消费的活动单，这个操作要访问db，如果大量请求的话是不是会击垮db？"),t(l)])]),e("li",null,[e("a",er,[r("抽奖系统，被问到系统的瓶颈在哪里"),t(l)])]),e("li",null,[e("a",rr,[r("为什么要选redis，redis 主从集群下潜在的锁失效问题怎么考虑怎么解决。ookeeper 作为分布式锁优缺点"),t(l)])]),e("li",null,[e("a",lr,[r("这个抽奖系统里的聚合、聚合根、实体是具体对应的哪些部分"),t(l)])]),e("li",null,[e("a",tr,[r("百度提前批被问了一些关于路由组件的问题（我把路由组件单独作为一个小项目）"),t(l)])]),e("li",null,[e("a",nr,[r("关于db-router的redis路由问题：假设并发量还是很高，那么把库存分摊到不同的stockKey上，不同用户去不同的key上incr。但是这和自研路由有什么关系"),t(l)])]),e("li",null,[e("a",or,[r("项目中为什么用dubbo不用fegin，这个问题怎么答"),t(l)])]),e("li",null,[e("a",sr,[r("昨天字节二面被疯狂拷打项目，特来请教一下相关问题"),t(l)]),ir]),e("li",null,[e("a",ar,[r("面试官问我100个用户，只有1个库存，怎么控制并发访问？"),t(l)])]),e("li",null,[e("a",hr,[r("面试被拷打了规则引擎, 感觉这块的内容有点抽象, 问我怎么实现的"),t(l)])]),e("li",null,[e("a",_r,[r("我最近几次面试抽奖项目都被问到了redis加锁的滑块锁是针对用户还是针对活动"),t(l)])])])])}const dr=o(h,[["render",cr],["__file","notes.html.vue"]]);export{dr as default};
