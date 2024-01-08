import{_ as t,r as p,o as l,c as o,a as n,b as s,d as e,e as i}from"./app-cCF93fuz.js";const c={},r=n("h1",{id:"架构的本质之-ddd-架构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#架构的本质之-ddd-架构","aria-hidden":"true"},"#"),s(" 架构的本质之 DDD 架构")],-1),u=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),m=n("iframe",{id:"B-Video",src:"//player.bilibili.com/player.html?aid=402885332&bvid=BV1kV411g7GX&cid=1182477982&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"480"}," ",-1),k=i('<p>从最早接触 DDD 架构，到后来用 DDD 架构不断的承接项目开发，一次次在项目开发中的经验积累。对 DDD 有了不少的理解。DDD 是一种思想，落地的形态和结构会有不同的方式，甚至在编码上也会有风格的差异。但终期目标就一个；”提供代码的可维护性，降低迭代开发成本。“也是康威定律所述：”任何组织在设计一套系统时，所交付的设计方案在结构上都与该组织的沟通结构保持一致。“</p><p>但 DDD 与 MVC 相比的概率较多，贸然用理论驱动代码开发，会让整个工程变得非常混乱，甚至可能虽然是用的 DDD 但最后写出来了一片四不像的 MVC 代码。所以对于程序员👨🏻‍💻来说，先能上手一个工程，在从工程了解理论会更加容易。为此小傅哥想以此文，通过实战编码的方式向大家分享 DDD 架构，并能让大家上手的 DDD 架构。</p><h2 id="一、问题碰撞" tabindex="-1"><a class="header-anchor" href="#一、问题碰撞" aria-hidden="true">#</a> 一、问题碰撞</h2><p><code>你用 MVC 写代码，遇到过最大的问题是什么？</code>🤔</p><p>简单、容易、好理解，是 MVC 架构的特点，但也正因为简单的分层逻辑，在适配较复杂的场景并且需要长周期的维护时，代码的迭代成本就会越来越高。如图；</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-01.png?raw=true" width="650px"></div><ul><li>如果你接触过较大型且已经长期维护项目的 MVC 架构，你就会发现这里的 DAO、PO、VO 对象，在 Service 层相互调用。那么长期开发后，就导致了各个 PO 里的属性字段数量都被撑的特别大。这样的开发方式，将<code>”状态”</code>、<code>“行为“</code>分离到不同的对象中，代码的意图渐渐模糊，膨胀、臃肿和不稳定的架构，让迭代成本增加。</li><li>而 DDD 架构首先以解决此类问题为主，将各个属于自己领域范围内的行为和逻辑封装到自己的领域包下处理。这也是 DDD 架构设计的精髓之一。它希望在分治层面合理切割问题空间为更小规模的若干子问题，而问题越小就容易被理解和处理，做到高内聚低耦合。这也是康威定律所提到的，解决复杂场景的设计主要分为：分治、抽象和知识。</li></ul><h2 id="二、简化理解" tabindex="-1"><a class="header-anchor" href="#二、简化理解" aria-hidden="true">#</a> 二、简化理解</h2><p>在给大家讲解 MVC 架构的时候，小傅哥提到了一个简单的开发模型。开发代码可以理解为：<code>“定义属性 -&gt; 创建方法 -&gt; 调用展示” </code>但这个模型结构过于简单，不太适合运用了各类分布式技术栈以及更多逻辑的 DDD 架构。所以在 DDD 这里，我们把开发代码可以抽象为：<code>“触发 -&gt; 函数 -&gt; 连接”</code> 如图；</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-02.png?raw=true" width="550px"></div><ul><li>DDD 架构常用于微服务场景，因此也一个系统的调用方式就不只是 HTTP 还包括；<code>RPC 远程</code>、<code>MQ 消息</code>、<code>TASK 任务</code>，因此这些种方式都可以理解为触发。</li><li>通过触发调用函数方法，我们这里可以把各个服务都当成一个函数方法来看。而函数方法通过连接，调用到其他的接口、数据库、缓存来完成函数逻辑。</li></ul><p>接下来，小傅哥在带着大家把这些所需的模块，拆分到对应的DDD系统架构中。</p><h2 id="三、架构分层" tabindex="-1"><a class="header-anchor" href="#三、架构分层" aria-hidden="true">#</a> 三、架构分层</h2><p>如下是 DDD 架构的一种分层结构，也可以有其他种方式，核心的重点在于适合你所在场景的业务开发。以下的分层结构，是小傅哥在使用 DDD 架构多种的方式开发代码后，做了简化和处理的。右侧的连线是各个模块的依赖关系。接下来小傅哥就给大家做一下模块的介绍。</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-03.png?raw=true" width="850px"></div><ul><li><strong>接口定义 - xfg-frame-api</strong>：因为微服务中引用的 RPC 需要对外提供接口的描述信息，也就是调用方在使用的时候，需要引入 Jar 包，让调用方好能依赖接口的定义做代理。</li><li><strong>应用封装 - xfg-frame-app</strong>：这是应用启动和配置的一层，如一些 aop 切面或者 config 配置，以及打包镜像都是在这一层处理。你可以把它理解为专门为了启动服务而存在的。</li><li><strong>领域封装 - xfg-frame-domain</strong>：领域模型服务，是一个非常重要的模块。无论怎么做DDD的分层架构，domain 都是肯定存在的。在一层中会有一个个细分的领域服务，在每个服务包中会有【模型、仓库、服务】这样3部分。</li><li><strong>仓储服务 - xfg-frame-infrastructure</strong>：基础层依赖于 domain 领域层，因为在 domain 层定义了仓储接口需要在基础层实现。这是依赖倒置的一种设计方式。</li><li><strong>领域封装 - xfg-frame-trigger</strong>：触发器层，一般也被叫做 adapter 适配器层。用于提供接口实现、消息接收、任务执行等。所以对于这样的操作，小傅哥把它叫做触发器层。</li><li><strong>类型定义 - xfg-frame-types</strong>：通用类型定义层，在我们的系统开发中，会有很多类型的定义，包括；基本的 Response、Constants 和枚举。它会被其他的层进行引用使用。</li><li><strong>领域编排【可选】 - xfg-frame-case</strong>：领域编排层，一般对于较大且复杂的的项目，为了更好的防腐和提供通用的服务，一般会添加 case/application 层，用于对 domain 领域的逻辑进行封装组合处理。</li></ul><h2 id="四、领域分层" tabindex="-1"><a class="header-anchor" href="#四、领域分层" aria-hidden="true">#</a> 四、领域分层</h2><p>DDD 领域驱动设计的中心，主要在于领域模型的设计，以领域所需驱动功能实现和数据建模。一个领域服务下面会有多个领域模型，每个领域模型都是一个充血结构。<strong>一个领域模型 = 一个充血结构</strong></p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-ddd-01.png?raw=true" width="950px"></div><ul><li><p>model 模型对象；</p><ul><li>aggreate：聚合对象，实体对象、值对象的协同组织，就是聚合对象。</li><li>entity：实体对象，大多数情况下，实体对象(Entity)与数据库持久化对象(PO)是1v1的关系，但也有为了封装一些属性信息，会出现1vn的关系。</li><li>valobj：值对象，通过对象属性值来识别的对象 By 《实现领域驱动设计》</li></ul></li><li><p>repository 仓储服务；从数据库等数据源中获取数据，传递的对象可以是聚合对象、实体对象，返回的结果可以是；实体对象、值对象。因为仓储服务是由基础层(infrastructure) 引用领域层(domain)，是一种依赖倒置的结构，但它可以天然的隔离PO数据库持久化对象被引用。</p></li><li><p>service 服务设计；这里要注意，不要以为定义了聚合对象，就把超越1个对象以外的逻辑，都封装到聚合中，这会让你的代码后期越来越难维护。聚合更应该注重的是和本对象相关的单一简单封装场景，而把一些重核心业务方到 service 里实现。<strong>此外；如果你的设计模式应用不佳，那么无论是领域驱动设计、测试驱动设计还是换了三层和四层架构，你的工程质量依然会非常差。</strong></p></li><li><p>对象解释</p><ul><li>DTO 数据传输对象 (data transfer object)，DAO与业务对象或数据访问对象的区别是：DTO的数据的变异子与访问子（mutator和accessor）、语法分析（parser）、序列化（serializer）时不会有任何存储、获取、序列化和反序列化的异常。即DTO是简单对象，不含任何业务逻辑，但可包含序列化和反序列化以用于传输数据。</li></ul></li></ul><h2 id="五、架构源码" tabindex="-1"><a class="header-anchor" href="#五、架构源码" aria-hidden="true">#</a> 五、架构源码</h2><h3 id="_1-环境" tabindex="-1"><a class="header-anchor" href="#_1-环境" aria-hidden="true">#</a> 1. 环境</h3>',22),b=n("li",null,"JDK 1.8",-1),g=n("li",null,"Maven 3.8.6",-1),f=n("li",null,"SpringBoot 2.7.2",-1),h=n("li",null,"MySQL 5.7 - 如果你使用 8.0 记得更改 pom.xml 中的 mysql 引用",-1),j={href:"https://cn.dubbo.apache.org/zh-cn/overview/mannual/java-sdk/reference-manual/registry/multicast/",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"_2-架构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-架构","aria-hidden":"true"},"#"),s(" 2. 架构")],-1),D=n("strong",null,"源码",-1),x={href:"https://gitcode.net/KnowledgePlanet/road-map/xfg-frame-ddd",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"https://gitcode.net/KnowledgePlanet/road-map/xfg-frame-ddd",-1),_=n("li",null,[n("strong",null,"树形"),s("："),n("code",null,"安装 brew install tree"),s(),n("code",null,"IntelliJ IDEA Terminal 使用 tree")],-1),R=i(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span>
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
├── docs
│   ├── dev<span class="token operator">-</span>ops
│   │   ├── environment
│   │   │   └── environment<span class="token operator">-</span>docker<span class="token operator">-</span>compose<span class="token punctuation">.</span>yml
│   │   ├── siege<span class="token punctuation">.</span>sh
│   │   └── skywalking
│   │       └── skywalking<span class="token operator">-</span>docker<span class="token operator">-</span>compose<span class="token punctuation">.</span>yml
│   ├── doc<span class="token punctuation">.</span>md
│   ├── sql
│   │   └── road<span class="token operator">-</span>map<span class="token punctuation">.</span>sql
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>ddd<span class="token punctuation">.</span>drawio
├── pom<span class="token punctuation">.</span>xml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>api
│   ├── pom<span class="token punctuation">.</span>xml
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── cn
│   │               └── bugstack
│   │                   └── xfg
│   │                       └── frame
│   │                           └── api
│   │                               ├── <span class="token class-name">IAccountService</span><span class="token punctuation">.</span>java
│   │                               ├── <span class="token class-name">IRuleService</span><span class="token punctuation">.</span>java
│   │                               ├── model
│   │                               │   ├── request
│   │                               │   │   └── <span class="token class-name">DecisionMatterRequest</span><span class="token punctuation">.</span>java
│   │                               │   └── response
│   │                               │       └── <span class="token class-name">DecisionMatterResponse</span><span class="token punctuation">.</span>java
│   │                               └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>api<span class="token punctuation">.</span>iml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>app
│   ├── <span class="token class-name">Dockerfile</span>
│   ├── build<span class="token punctuation">.</span>sh
│   ├── pom<span class="token punctuation">.</span>xml
│   ├── src
│   │   ├── main
│   │   │   ├── bin
│   │   │   │   ├── start<span class="token punctuation">.</span>sh
│   │   │   │   └── stop<span class="token punctuation">.</span>sh
│   │   │   ├── java
│   │   │   │   └── cn
│   │   │   │       └── bugstack
│   │   │   │           └── xfg
│   │   │   │               └── frame
│   │   │   │                   ├── <span class="token class-name">Application</span><span class="token punctuation">.</span>java
│   │   │   │                   ├── aop
│   │   │   │                   │   ├── <span class="token class-name">RateLimiterAop</span><span class="token punctuation">.</span>java
│   │   │   │                   │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │   │   │                   └── config
│   │   │   │                       ├── <span class="token class-name">RateLimiterAopConfig</span><span class="token punctuation">.</span>java
│   │   │   │                       ├── <span class="token class-name">RateLimiterAopConfigProperties</span><span class="token punctuation">.</span>java
│   │   │   │                       ├── <span class="token class-name">ThreadPoolConfig</span><span class="token punctuation">.</span>java
│   │   │   │                       ├── <span class="token class-name">ThreadPoolConfigProperties</span><span class="token punctuation">.</span>java
│   │   │   │                       └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │   │   └── resources
│   │   │       ├── application<span class="token operator">-</span>dev<span class="token punctuation">.</span>yml
│   │   │       ├── application<span class="token operator">-</span>prod<span class="token punctuation">.</span>yml
│   │   │       ├── application<span class="token operator">-</span>test<span class="token punctuation">.</span>yml
│   │   │       ├── application<span class="token punctuation">.</span>yml
│   │   │       ├── logback<span class="token operator">-</span>spring<span class="token punctuation">.</span>xml
│   │   │       └── mybatis
│   │   │           ├── config
│   │   │           │   └── mybatis<span class="token operator">-</span>config<span class="token punctuation">.</span>xml
│   │   │           └── mapper
│   │   │               ├── <span class="token class-name">RuleTreeNodeLine_Mapper</span><span class="token punctuation">.</span>xml
│   │   │               ├── <span class="token class-name">RuleTreeNode_Mapper</span><span class="token punctuation">.</span>xml
│   │   │               └── <span class="token class-name">RuleTree_Mapper</span><span class="token punctuation">.</span>xml
│   │   └── test
│   │       └── java
│   │           └── cn
│   │               └── bugstack
│   │                   └── xfg
│   │                       └── frame
│   │                           └── test
│   │                               └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>app<span class="token punctuation">.</span>iml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>ddd<span class="token punctuation">.</span>iml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>domain
│   ├── pom<span class="token punctuation">.</span>xml
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── cn
│   │               └── bugstack
│   │                   └── xfg
│   │                       └── frame
│   │                           └── domain
│   │                               ├── order
│   │                               │   ├── model
│   │                               │   │   ├── aggregates
│   │                               │   │   │   └── <span class="token class-name">OrderAggregate</span><span class="token punctuation">.</span>java
│   │                               │   │   ├── entity
│   │                               │   │   │   ├── <span class="token class-name">OrderItemEntity</span><span class="token punctuation">.</span>java
│   │                               │   │   │   └── <span class="token class-name">ProductEntity</span><span class="token punctuation">.</span>java
│   │                               │   │   ├── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               │   │   └── valobj
│   │                               │   │       ├── <span class="token class-name">OrderIdVO</span><span class="token punctuation">.</span>java
│   │                               │   │       ├── <span class="token class-name">ProductDescriptionVO</span><span class="token punctuation">.</span>java
│   │                               │   │       └── <span class="token class-name">ProductNameVO</span><span class="token punctuation">.</span>java
│   │                               │   ├── repository
│   │                               │   │   ├── <span class="token class-name">IOrderRepository</span><span class="token punctuation">.</span>java
│   │                               │   │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               │   └── service
│   │                               │       ├── <span class="token class-name">OrderService</span><span class="token punctuation">.</span>java
│   │                               │       └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               ├── rule
│   │                               │   ├── model
│   │                               │   │   ├── aggregates
│   │                               │   │   │   └── <span class="token class-name">TreeRuleAggregate</span><span class="token punctuation">.</span>java
│   │                               │   │   ├── entity
│   │                               │   │   │   ├── <span class="token class-name">DecisionMatterEntity</span><span class="token punctuation">.</span>java
│   │                               │   │   │   └── <span class="token class-name">EngineResultEntity</span><span class="token punctuation">.</span>java
│   │                               │   │   ├── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               │   │   └── valobj
│   │                               │   │       ├── <span class="token class-name">TreeNodeLineVO</span><span class="token punctuation">.</span>java
│   │                               │   │       ├── <span class="token class-name">TreeNodeVO</span><span class="token punctuation">.</span>java
│   │                               │   │       └── <span class="token class-name">TreeRootVO</span><span class="token punctuation">.</span>java
│   │                               │   ├── repository
│   │                               │   │   ├── <span class="token class-name">IRuleRepository</span><span class="token punctuation">.</span>java
│   │                               │   │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               │   └── service
│   │                               │       ├── engine
│   │                               │       │   ├── <span class="token class-name">EngineBase</span><span class="token punctuation">.</span>java
│   │                               │       │   ├── <span class="token class-name">EngineConfig</span><span class="token punctuation">.</span>java
│   │                               │       │   ├── <span class="token class-name">EngineFilter</span><span class="token punctuation">.</span>java
│   │                               │       │   └── impl
│   │                               │       │       └── <span class="token class-name">RuleEngineHandle</span><span class="token punctuation">.</span>java
│   │                               │       ├── logic
│   │                               │       │   ├── <span class="token class-name">BaseLogic</span><span class="token punctuation">.</span>java
│   │                               │       │   ├── <span class="token class-name">LogicFilter</span><span class="token punctuation">.</span>java
│   │                               │       │   └── impl
│   │                               │       │       ├── <span class="token class-name">UserAgeFilter</span><span class="token punctuation">.</span>java
│   │                               │       │       └── <span class="token class-name">UserGenderFilter</span><span class="token punctuation">.</span>java
│   │                               │       └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               └── user
│   │                                   ├── model
│   │                                   │   └── valobj
│   │                                   │       └── <span class="token class-name">UserVO</span><span class="token punctuation">.</span>java
│   │                                   ├── repository
│   │                                   │   └── <span class="token class-name">IUserRepository</span><span class="token punctuation">.</span>java
│   │                                   └── service
│   │                                       ├── <span class="token class-name">UserService</span><span class="token punctuation">.</span>java
│   │                                       └── impl
│   │                                           └── <span class="token class-name">UserServiceImpl</span><span class="token punctuation">.</span>java
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>domain<span class="token punctuation">.</span>iml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>infrastructure
│   ├── pom<span class="token punctuation">.</span>xml
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── cn
│   │               └── bugstack
│   │                   └── xfg
│   │                       └── frame
│   │                           └── infrastructure
│   │                               ├── dao
│   │                               │   ├── <span class="token class-name">IUserDao</span><span class="token punctuation">.</span>java
│   │                               │   ├── <span class="token class-name">RuleTreeDao</span><span class="token punctuation">.</span>java
│   │                               │   ├── <span class="token class-name">RuleTreeNodeDao</span><span class="token punctuation">.</span>java
│   │                               │   └── <span class="token class-name">RuleTreeNodeLineDao</span><span class="token punctuation">.</span>java
│   │                               ├── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               ├── po
│   │                               │   ├── <span class="token class-name">RuleTreeNodeLinePO</span><span class="token punctuation">.</span>java
│   │                               │   ├── <span class="token class-name">RuleTreeNodePO</span><span class="token punctuation">.</span>java
│   │                               │   ├── <span class="token class-name">RuleTreePO</span><span class="token punctuation">.</span>java
│   │                               │   └── <span class="token class-name">UserPO</span><span class="token punctuation">.</span>java
│   │                               └── repository
│   │                                   ├── <span class="token class-name">RuleRepository</span><span class="token punctuation">.</span>java
│   │                                   └── <span class="token class-name">UserRepository</span><span class="token punctuation">.</span>java
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>infrastructure<span class="token punctuation">.</span>iml
├── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>trigger
│   ├── pom<span class="token punctuation">.</span>xml
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── cn
│   │               └── bugstack
│   │                   └── xfg
│   │                       └── frame
│   │                           └── trigger
│   │                               ├── http
│   │                               │   ├── <span class="token class-name">Controller</span><span class="token punctuation">.</span>java
│   │                               │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               ├── mq
│   │                               │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               ├── rpc
│   │                               │   ├── <span class="token class-name">AccountService</span><span class="token punctuation">.</span>java
│   │                               │   ├── <span class="token class-name">RuleService</span><span class="token punctuation">.</span>java
│   │                               │   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   │                               └── task
│   │                                   └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
│   └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>trigger<span class="token punctuation">.</span>iml
└── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>types
    ├── pom<span class="token punctuation">.</span>xml
    ├── src
    │   └── main
    │       └── java
    │           └── cn
    │               └── bugstack
    │                   └── xfg
    │                       └── frame
    │                           └── types
    │                               ├── <span class="token class-name">Constants</span><span class="token punctuation">.</span>java
    │                               ├── <span class="token class-name">Response</span><span class="token punctuation">.</span>java
    │                               └── <span class="token keyword">package</span><span class="token operator">-</span>info<span class="token punctuation">.</span>java
    └── xfg<span class="token operator">-</span>frame<span class="token operator">-</span>types<span class="token punctuation">.</span>iml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是整个🏭工程架构的 tree 树形图。整个工程由 xfg-frame-app 模的 SpringBoot 驱动。这里小傅哥在 domain 领域模型下提供了 order、rule、user 三个领域模块。并在每个模块下提供了对应的测试内容。这块是整个模型的重点，其他模块都可以通过测试看到这里的调用过程。</p><h3 id="_3-领域" tabindex="-1"><a class="header-anchor" href="#_3-领域" aria-hidden="true">#</a> 3. 领域</h3><p>一个领域模型中包含3个部分；model、repository、service 三部分；</p><ul><li>model 对象的定义 【含有；valobj = VO、entity、Aggregate】</li><li>repository 仓储的定义【含有PO】</li><li>service 服务实现</li></ul><p>以上3个模块，一般也是大家在使用 DDD 时候最不容易理解的分层。比如 model 里还分为；valobj - 值对象、entity 实体对象、aggregates 聚合对象；</p><ul><li><strong>值对象</strong>：表示没有唯一标识的业务实体，例如商品的名称、描述、价格等。</li><li><strong>实体对象</strong>：表示具有唯一标识的业务实体，例如订单、商品、用户等；</li><li><strong>聚合对象</strong>：是一组相关的实体对象的根，用于保证实体对象之间的一致性和完整性；</li></ul><p>关于model中各个对象的拆分，尤其是聚合的定义，会牵引着整个模型的设计。当然你可以在初期使用 DDD 的时候不用过分在意领域模型的设计，可以把整个 domain 下的一个个包当做充血模型结构，这样编写出来的代码也是非常适合维护的。</p><h3 id="_4-环境-开发-测试-上线" tabindex="-1"><a class="header-anchor" href="#_4-环境-开发-测试-上线" aria-hidden="true">#</a> 4. 环境(开发/测试/上线)</h3><p><strong>源码</strong>：<code>xfg-frame-ddd/pom.xml</code></p><div class="language-pom line-numbers-mode" data-ext="pom"><pre class="language-pom"><code>&lt;profile&gt;
    &lt;id&gt;dev&lt;/id&gt;
    &lt;activation&gt;
        &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
    &lt;/activation&gt;
    &lt;properties&gt;
        &lt;profileActive&gt;dev&lt;/profileActive&gt;
    &lt;/properties&gt;
&lt;/profile&gt;
&lt;profile&gt;
    &lt;id&gt;test&lt;/id&gt;
    &lt;properties&gt;
        &lt;profileActive&gt;test&lt;/profileActive&gt;
    &lt;/properties&gt;
&lt;/profile&gt;
&lt;profile&gt;
    &lt;id&gt;prod&lt;/id&gt;
    &lt;properties&gt;
        &lt;profileActive&gt;prod&lt;/profileActive&gt;
    &lt;/properties&gt;
&lt;/profile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义环境；开发、测试、上线。</li></ul><p><strong>源码</strong>：<code>xfg-frame-app/application.yml</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  config<span class="token operator">:</span>
    name<span class="token operator">:</span> xfg<span class="token operator">-</span>frame
  profiles<span class="token operator">:</span>
    active<span class="token operator">:</span> dev # dev、test、prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>除了 pom 的配置，还需要在 application.yml 中指定环境。这样就可以对应的加载到；<code>application-dev.yml</code>、<code>application-prod.yml</code>、<code>application-test.yml</code> 这样就可以很方便的加载对应的配置信息了。尤其是各个场景中切换会更加方便。</li></ul><h3 id="_5-切面" tabindex="-1"><a class="header-anchor" href="#_5-切面" aria-hidden="true">#</a> 5. 切面</h3><p>一个工程开发中，有时候可能会有很多的统一切面和启动配置的处理，这些内容都可以在 xfg-frame-app 完成。</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-04.png?raw=true" width="450px"></div><p><strong>源码</strong>：<code>cn.bugstack.xfg.frame.aop.RateLimiterAop</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RateLimiterAop</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timeout<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">double</span> permitsPerSecond<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RateLimiter</span> limiter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RateLimiterAop</span><span class="token punctuation">(</span><span class="token keyword">double</span> permitsPerSecond<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>permitsPerSecond <span class="token operator">=</span> permitsPerSecond<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> timeout<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>limiter <span class="token operator">=</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>permitsPerSecond<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(* cn.bugstack.xfg.frame.trigger..*.*(..))&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointCut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;pointCut()&quot;</span><span class="token punctuation">,</span> argNames <span class="token operator">=</span> <span class="token string">&quot;jp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> jp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> tryAcquire <span class="token operator">=</span> limiter<span class="token punctuation">.</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>timeout<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tryAcquire<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Method</span> method <span class="token operator">=</span> <span class="token function">getMethod</span><span class="token punctuation">(</span>jp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;方法 {}.{} 请求已被限流，超过限流配置[{}/秒]&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">.</span><span class="token function">getDeclaringClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCanonicalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> permitsPerSecond<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">Response</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span><span class="token class-name">Constants<span class="token punctuation">.</span>ResponseCode</span><span class="token punctuation">.</span><span class="token constant">RATE_LIMITER</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token class-name">Constants<span class="token punctuation">.</span>ResponseCode</span><span class="token punctuation">.</span><span class="token constant">RATE_LIMITER</span><span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> jp<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Method</span> <span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> jp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchMethodException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Signature</span> sig <span class="token operator">=</span> jp<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MethodSignature</span> methodSignature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> sig<span class="token punctuation">;</span>
        <span class="token keyword">return</span> jp<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodSignature<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> methodSignature<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 限流配置
rate<span class="token operator">-</span>limiter<span class="token operator">:</span>
  <span class="token keyword">permits</span><span class="token operator">-</span>per<span class="token operator">-</span>second<span class="token operator">:</span> <span class="token number">1</span>
  timeout<span class="token operator">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这样你所有的通用配置，又和业务没有太大的关系的，就可以直接写到这里了。—— 具体可以参考代码。</li></ul><h2 id="六、测试验证" tabindex="-1"><a class="header-anchor" href="#六、测试验证" aria-hidden="true">#</a> 六、测试验证</h2><ul><li>首先；整个工程由 SpringBoot 驱动，提供了 road-map.sql 测试 SQL 库表语句。你可以在自己的本地mysql上进行执行。它会创建库表。</li><li>之后；在 application.yml 配置数据库链接信息。</li><li>之后就可以打开 ApiTest 进行测试了。你可以点击 Application 类的绿色箭头启动工程，使用触发器里的接口调用测试，或者单元测试RPC接口，小傅哥也提供了泛化调用的方式。</li></ul><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-05.png?raw=true" width="950px"></div><ul><li>如果你正常获取了这样的结果信息，那么说明你已经启动成功。接下来就可以对照着DDD的结构进行学习，以及使用这样的工程结构开发自己的项目。</li></ul>`,27);function A(P,T){const a=p("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",d,[s("https://bugstack.cn"),e(a)])]),v,m,k,n("ul",null,[b,g,f,h,n("li",null,[s("Dubbo - "),n("a",j,[s("https://cn.dubbo.apache.org/zh-cn/overview/mannual/java-sdk/reference-manual/registry/multicast/"),e(a)]),s(" 文档&广播模式地址说明")])]),y,n("ul",null,[n("li",null,[D,s("："),n("a",x,[w,e(a)])]),_]),R])}const O=t(c,[["render",A],["__file","ddd.html.vue"]]);export{O as default};
