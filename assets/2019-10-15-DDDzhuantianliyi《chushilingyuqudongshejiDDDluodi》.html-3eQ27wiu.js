import{_ as t,r as i,o as p,c,a as n,b as s,d as e,e as l}from"./app-cCF93fuz.js";const o={},u=n("h1",{id:"ddd专题案例一《初识领域驱动设计ddd落地》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ddd专题案例一《初识领域驱动设计ddd落地》","aria-hidden":"true"},"#"),s(" DDD专题案例一《初识领域驱动设计DDD落地》")],-1),r=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://t.zsxq.com/jAi2nUf",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><p>领域驱动设计DDD{Domain-Driven Design}历史较长但随着微服务的兴起DDD又活跃到人们的视线，它提供的是一套架构设计思想，我们可以使用这套方法论将架构设计的尽可能做到高内聚、低耦合、可扩展性强的应用服务。本专题以DDD实战落地为根本，分章节设计不同的架构模型。学习并实战是奔入应用级最快的方法，Hi HelloWorld！我来了。</p><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><blockquote><p>DDD（Domain-Driven Design 领域驱动设计）是由Eric Evans最先提出，目的是对软件所涉及到的领域进行建模，以应对系统规模过大时引起的软件复杂性的问题。整个过程大概是这样的，开发团队和领域专家一起通过 通用语言(Ubiquitous Language)去理解和消化领域知识，从领域知识中提取和划分为一个一个的子领域（核心子域，通用子域，支撑子域），并在子领域上建立模型，再重复以上步骤，这样周而复始，构建出一套符合当前领域的模型。</p></blockquote><p><img src="https://bugstack.cn/assets/images/pic-content/2019/10/DDD-01-1.png" alt="微信公众号：bugstack虫洞栈 &amp; DDD概述"></p><p><strong>开发目标</strong></p><p>依靠领域驱动设计的设计思想，通过事件风暴建立领域模型，合理划分领域逻辑和物理边界，建立领域对象及服务矩阵和服务架构图，定义符合DDD分层架构思想的代码结构模型，保证业务模型与代码模型的一致性。通过上述设计思想、方法和过程，指导团队按照DDD设计思想完成微服务设计和开发。</p><ol><li>拒绝泥球小单体、拒绝污染功能与服务、拒绝一加功能排期一个月</li><li>架构出高可用极易符合互联网高速迭代的应用服务</li><li>物料化、组装化、可编排的服务，提高人效</li></ol><p><strong>服务架构</strong><img src="https://bugstack.cn/assets/images/pic-content/2019/10/DDD-01-2.png" alt="微信公众号：bugstack虫洞栈 &amp; 服务架构"></p><ul><li><p>应用层{application}</p><ul><li>应用服务位于应用层。用来表述应用和用户行为，负责服务的组合、编排和转发，负责处理业务用例的执行顺序以及结果的拼装。</li><li>应用层的服务包括应用服务和领域事件相关服务。</li><li>应用服务可对微服务内的领域服务以及微服务外的应用服务进行组合和编排，或者对基础层如文件、缓存等数据直接操作形成应用服务，对外提供粗粒度的服务。</li><li>领域事件服务包括两类：领域事件的发布和订阅。通过事件总线和消息队列实现异步数据传输，实现微服务之间的解耦。</li></ul></li><li><p>领域层{domain}</p><ul><li>领域服务位于领域层，为完成领域中跨实体或值对象的操作转换而封装的服务，领域服务以与实体和值对象相同的方式参与实施过程。</li><li>领域服务对同一个实体的一个或多个方法进行组合和封装，或对多个不同实体的操作进行组合或编排，对外暴露成领域服务。领域服务封装了核心的业务逻辑。实体自身的行为在实体类内部实现，向上封装成领域服务暴露。</li><li>为隐藏领域层的业务逻辑实现，所有领域方法和服务等均须通过领域服务对外暴露。</li><li>为实现微服务内聚合之间的解耦，原则上禁止跨聚合的领域服务调用和跨聚合的数据相互关联。</li></ul></li><li><p>基础层{infrastructrue}</p><ul><li>基础服务位于基础层。为各层提供资源服务（如数据库、缓存等），实现各层的解耦，降低外部资源变化对业务逻辑的影响。</li><li>基础服务主要为仓储服务，通过依赖反转的方式为各层提供基础资源服务，领域服务和应用服务调用仓储服务接口，利用仓储实现持久化数据对象或直接访问基础资源。</li></ul></li><li><p>接口层{interfaces}</p><ul><li>接口服务位于用户接口层，用于处理用户发送的Restful请求和解析用户输入的配置文件等，并将信息传递给应用层。</li></ul></li></ul><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><ol><li>jdk1.8【jdk1.7以下只能部分支持netty】</li><li>springboot 2.0.6.RELEASE</li><li>idea + maven</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span><span class="token number">01</span>
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
    │   │       ├── application
    │   │       │	├── event
    │   │       │	│   └── <span class="token class-name">ApplicationRunner</span><span class="token punctuation">.</span>java	
    │   │       │	└── service
    │   │       │	    └── <span class="token class-name">UserService</span><span class="token punctuation">.</span>java	
    │   │       ├── domain
    │   │       │	├── model
    │   │       │	│   ├── aggregates
    │   │       │	│   │   └── <span class="token class-name">UserRichInfo</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── vo
    │   │       │	│       ├── <span class="token class-name">UserInfo</span><span class="token punctuation">.</span>java	
    │   │       │	│       └── <span class="token class-name">UserSchool</span><span class="token punctuation">.</span>java	
    │   │       │	├── repository
    │   │       │	│   └── <span class="token class-name">IuserRepository</span><span class="token punctuation">.</span>java	
    │   │       │	└── service
    │   │       │	    └── <span class="token class-name">UserServiceImpl</span><span class="token punctuation">.</span>java	
    │   │       ├── infrastructure
    │   │       │	├── dao
    │   │       │	│   ├── impl
    │   │       │	│   │   └── <span class="token class-name">UserDaoImpl</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── <span class="token class-name">UserDao</span><span class="token punctuation">.</span>java	
    │   │       │	├── po
    │   │       │	│   └── <span class="token class-name">UserEntity</span><span class="token punctuation">.</span>java	
    │   │       │	├── repository
    │   │       │	│   ├── mysql
    │   │       │	│   │   └── <span class="token class-name">UserMysqlRepository</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── redis
    │   │       │	│   │   └── <span class="token class-name">UserRedisRepository</span><span class="token punctuation">.</span>java		
    │   │       │	│   └── <span class="token class-name">UserRepository</span><span class="token punctuation">.</span>java	
    │   │       │	└── util
    │   │       │	    └── <span class="token class-name">RdisUtil</span><span class="token punctuation">.</span>java
    │   │       ├── interfaces
    │   │       │	├── dto
    │   │       │	│	└── <span class="token class-name">UserInfoDto</span><span class="token punctuation">.</span>java	
    │   │       │	└── facade
    │   │       │		└── <span class="token class-name">DDDController</span><span class="token punctuation">.</span>java
    │   │       └── <span class="token class-name">DDDApplication</span><span class="token punctuation">.</span>java
    │   ├── resources	
    │   │   └── application<span class="token punctuation">.</span>yml
    │   └── webapp	
    │       └── <span class="token constant">WEB</span><span class="token operator">-</span><span class="token constant">INF</span>
    │        	└── index<span class="token punctuation">.</span>jsp	
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>演示部分重点代码块，完整代码下载关注公众号；bugstack虫洞栈 | 回复DDD落地</strong></p><blockquote><p>application/UserService.java | 应用层用户服务，领域层服务做具体实现</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 应用层用户服务
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token class-name">UserRichInfo</span> <span class="token function">queryUserInfoById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>domain/repository/IuserRepository.java | 领域层资源库，由基础层实现</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IUserRepository</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">UserEntity</span> userEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UserEntity</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>domain/service/UserServiceImpl.java | 应用层实现类，应用层是很薄的一层可以只做服务编排</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;userRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">IUserRepository</span> userRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserRichInfo</span> <span class="token function">queryUserInfoById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// 查询资源库</span>
        <span class="token class-name">UserEntity</span> userEntity <span class="token operator">=</span> userRepository<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserInfo</span> userInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userInfo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO 查询学校信息，外部接口</span>
        <span class="token class-name">UserSchool</span> userSchool_01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserSchool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userSchool_01<span class="token punctuation">.</span><span class="token function">setSchoolName</span><span class="token punctuation">(</span><span class="token string">&quot;振华高级实验中学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserSchool</span> userSchool_02 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserSchool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userSchool_02<span class="token punctuation">.</span><span class="token function">setSchoolName</span><span class="token punctuation">(</span><span class="token string">&quot;东北电力大学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserSchool</span><span class="token punctuation">&gt;</span></span> userSchoolList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userSchoolList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>userSchool_01<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userSchoolList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>userSchool_02<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UserRichInfo</span> userRichInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserRichInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRichInfo<span class="token punctuation">.</span><span class="token function">setUserInfo</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRichInfo<span class="token punctuation">.</span><span class="token function">setUserSchoolList</span><span class="token punctuation">(</span>userSchoolList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> userRichInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>infrastructure/po/UserEntity.java | 数据库对象类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 数据库实体对象；用户实体
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserEntity</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    get<span class="token operator">/</span>set <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>infrastructrue/repository/UserRepository.java | 领域层定义接口，基础层资源库实现</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token annotation punctuation">@Repository</span><span class="token punctuation">(</span><span class="token string">&quot;userRepository&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserRepository</span> <span class="token keyword">implements</span> <span class="token class-name">IUserRepository</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;userMysqlRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">IUserRepository</span> userMysqlRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;userRedisRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">IUserRepository</span> userRedisRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">UserEntity</span> userEntity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//保存到DB</span>
        userMysqlRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//保存到Redis</span>
        userRedisRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserEntity</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">UserEntity</span> userEntityRedis <span class="token operator">=</span> userRedisRepository<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> userEntityRedis<span class="token punctuation">)</span> <span class="token keyword">return</span> userEntityRedis<span class="token punctuation">;</span>

        <span class="token class-name">UserEntity</span> userEntityMysql <span class="token operator">=</span> userMysqlRepository<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> userEntityMysql<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//保存到Redis</span>
            userRedisRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>userEntityMysql<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> userEntityMysql<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 查询为NULL</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>interfaces/dto/UserInfoDto.java | DTO对象类，隔离数据库类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfoDto</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>        <span class="token comment">// ID</span>

    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>interfaces/facade/DDDController.java | 门面接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈 | 欢迎关注并获取更多专题案例源码
 * Create by fuzhengwei on @2019
 */</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DDDController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/user/queryUserInfo&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">UserInfoDto</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>userService<span class="token punctuation">.</span><span class="token function">queryUserInfoById</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">OK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综上总结" tabindex="-1"><a class="header-anchor" href="#综上总结" aria-hidden="true">#</a> 综上总结</h2><ul><li><strong>以上基于DDD一个基本入门的结构演示完成，实际开发可以按照此模式进行调整。</strong></li><li><strong>目前这个架构分层还不能很好的进行分离，以及层级关系的引用还不利于扩展。</strong></li><li><strong>后续会持续完善以及可以组合搭建RPC框架等，让整个架构更利于互联网开发。</strong></li></ul>`,31),b=n("strong",null,"bugstack虫洞栈",-1),y=n("strong",null,"DDD落地案例",-1),g={href:"https://t.zsxq.com/jAi2nUf",target:"_blank",rel:"noopener noreferrer"};function h(f,D){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("作者：小傅哥 "),r,s("博客："),n("a",d,[s("https://bugstack.cn"),e(a)]),v,s("DDD项目："),n("a",k,[s("https://t.zsxq.com/jAi2nUf"),e(a)])]),m,n("p",null,[s("微信搜索「"),b,s("」公众号，关注后回复「"),y,s("」获取本文源码&更多原创专题案例！此外推荐你一个可以上手实践的DDD项目，看看如何从流程中提炼领域设计代码实现，在应用层、领域层以及基础层的仓储实现是如何完成开发和调用的，项目地址："),n("a",g,[s("https://t.zsxq.com/jAi2nUf"),e(a)])])])}const w=t(o,[["render",h],["__file","2019-10-15-DDDzhuantianliyi《chushilingyuqudongshejiDDDluodi》.html.vue"]]);export{w as default};
