import{_ as i,r as t,o as l,c as p,a as n,b as a,d as e,e as c}from"./app-3RcBQnkC.js";const o={},d=n("h1",{id:"ddd专题案例三《领域驱动设计架构基于springcloud搭建微服务》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ddd专题案例三《领域驱动设计架构基于springcloud搭建微服务》","aria-hidden":"true"},"#"),a(" DDD专题案例三《领域驱动设计架构基于SpringCloud搭建微服务》")],-1),r=n("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://t.zsxq.com/jAi2nUf",target:"_blank",rel:"noopener noreferrer"},m=c(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><p>微服务不是泥球小单体，而是具备更加清晰职责边界的完整一体的业务功能服务。领域驱动设计的思想通过Domain的功能域设计，可以把核心功能与支撑功能很好的区分开。而在MVC的设计模式尝尝是把所有的；数据服务、定义的属性类、提供的功能都在一条线上，这样是非常快速的开发方式但在做微服务部署时候确很麻烦。</p><p>按照不同的业务场景可能设计出软件在数据库使用上会有单库单表或者分库分表，如果是一个体量足够需要分库分表设计的系统，在扩容时候它是否能满足你的需求包括；</p><ol><li>核心计算不涉及库扩容，但是系统功能都在一起怎么办，已扩容都扩容了很浪费</li><li>所有的扩容都涉及到数据库连接数增加，但并不是每个行为都直达到所有库表</li><li>持续发展的业务会带来数据激增，将来怎么进行扩展，重新洗数据并不是很好的选择</li></ol><p>那么实际开发大泥球架构时，不只是会遇到上面的问题，还可能会遇到工期很赶加个人也不提升效率，反复交接代码扶不过三代等等，因此我们将服务拆分为独立单体具备此核心域完整功能的系统是非常必要的。</p><p>如图，是微服务数据库使用的一种思想，我们希望路由层从最开始就被执行，用户分群动态扩展 <img src="https://bugstack.cn/assets/images/pic-content/2019/10/ddd-03-1.png" alt="微信公众号：bugstack虫洞栈 &amp; 微服务数据库路由"></p><h2 id="案例目标" tabindex="-1"><a class="header-anchor" href="#案例目标" aria-hidden="true">#</a> 案例目标</h2><p>本案例通过使用SpringCloud将我们的服务架构扩展为通过路由调用的微服务</p><ol><li>首先通过Eureka作为服务注册与发现中心</li><li>然后使用Feign模式作为调用API接口</li><li>最后依赖于zuul设置路由转发功能</li></ol><p>为了方便测试，本案例会在itstack-demo-ddd-03中建4个工程；</p><ul><li>itstack-demo-ddd-case｛基于DDD的微服务｝</li><li>itstack-demo-ddd-eureka-server｛服务注册与发现｝</li><li>itstack-demo-ddd-feign｛调用方，通过API接口调用｝</li><li>itstack-demo-ddd-zuul｛网关路由组件｝</li></ul><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><p>1、jdk1.8 2、springboot 2.0.6.RELEASE 以及SpringCloud相关服务 3、idea + maven</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><h3 id="itstack-demo-ddd-case-基于ddd的微服务-本段代码在上一章节已经演示" tabindex="-1"><a class="header-anchor" href="#itstack-demo-ddd-case-基于ddd的微服务-本段代码在上一章节已经演示" aria-hidden="true">#</a> itstack-demo-ddd-case | 基于DDD的微服务 {本段代码在上一章节已经演示}</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span><span class="token keyword">case</span>
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
    │   │       ├── application
    │   │       │	├── <span class="token class-name">MallRuleService</span><span class="token punctuation">.</span>java	
    │   │       │	└── <span class="token class-name">MallTreeService</span><span class="token punctuation">.</span>java	
    │   │       ├── domain
    │   │       │	├── rule
    │   │       │	│   ├── model
    │   │       │	│   │   ├── aggregates
    │   │       │	│   │   │   └── <span class="token class-name">UserRichInfo</span><span class="token punctuation">.</span>java	
    │   │       │	│   │   └── vo
    │   │       │	│   │       ├── <span class="token class-name">DecisionMatter</span><span class="token punctuation">.</span>java
    │   │       │	│   │       ├── <span class="token class-name">EngineResult</span><span class="token punctuation">.</span>java
    │   │       │	│   │       ├── <span class="token class-name">TreeNodeInfo</span><span class="token punctuation">.</span>java
    │   │       │	│   │       ├── <span class="token class-name">TreeNodeLineInfo</span><span class="token punctuation">.</span>java	
    │   │       │	│   │       └── <span class="token class-name">UserSchool</span><span class="token punctuation">.</span>java	
    │   │       │	│   ├── repository
    │   │       │	│   │   └── <span class="token class-name">IRuleRepository</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── service
    │   │       │	│       ├── engine
    │   │       │	│       │   ├── impl	
    │   │       │	│       │   └── <span class="token class-name">EngineFilter</span><span class="token punctuation">.</span>java	
    │   │       │	│       ├── logic
    │   │       │	│       │   ├── impl	
    │   │       │	│       │   └── <span class="token class-name">LogicFilter</span><span class="token punctuation">.</span>java	
    │   │       │	│       └── <span class="token class-name">MallRuleServiceImpl</span><span class="token punctuation">.</span>java	
    │   │       │	└── tree
    │   │       │	    ├── model
    │   │       │	    │   ├── aggregates
    │   │       │	    │   │   └── <span class="token class-name">TreeCollect</span><span class="token punctuation">.</span>java	
    │   │       │	    │   └── vo
    │   │       │	    │       ├── <span class="token class-name">TreeInfo</span><span class="token punctuation">.</span>java	
    │   │       │	    │       └── <span class="token class-name">TreeRulePoint</span><span class="token punctuation">.</span>java	
    │   │       │	    ├── repository
    │   │       │	    │   └── <span class="token class-name">ITreeRepository</span><span class="token punctuation">.</span>java	
    │   │       │	    └── service
    │   │       │	        └── <span class="token class-name">MallTreeServiceImpl</span><span class="token punctuation">.</span>java	
    │   │       ├── infrastructure
    │   │       │	├── common
    │   │       │	│   └── <span class="token class-name">Constants</span><span class="token punctuation">.</span>java
    │   │       │	├── dao
    │   │       │	│   ├── <span class="token class-name">RuleTreeDao</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── <span class="token class-name">RuleTreeNodeDao</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── <span class="token class-name">RuleTreeNodeLineDao</span><span class="token punctuation">.</span>java	
    │   │       │	├── po
    │   │       │	│   ├── <span class="token class-name">RuleTree</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── <span class="token class-name">RuleTreeConfig</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── <span class="token class-name">RuleTreeNode</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── <span class="token class-name">RuleTreeNodeLine</span><span class="token punctuation">.</span>java		
    │   │       │	├── repository
    │   │       │	│   ├── cache
    │   │       │	│   │   └── <span class="token class-name">RuleCacheRepository</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── mysql
    │   │       │	│   │   ├── <span class="token class-name">RuleMysqlRepository</span><span class="token punctuation">.</span>java	
    │   │       │	│   │   └── <span class="token class-name">TreeMysqlRepository</span><span class="token punctuation">.</span>java
    │   │       │	│   ├── <span class="token class-name">RuleRepository</span><span class="token punctuation">.</span>java	
    │   │       │	│   └── <span class="token class-name">TreeRepository</span><span class="token punctuation">.</span>java	
    │   │       │	└── util
    │   │       │	    └── <span class="token class-name">CacheUtil</span><span class="token punctuation">.</span>java
    │   │       ├── interfaces
    │   │       │	├── dto
    │   │       │	│	├── <span class="token class-name">DecisionMatterDTO</span><span class="token punctuation">.</span>java
    │   │       │	│	└── <span class="token class-name">TreeDTO</span><span class="token punctuation">.</span>java	
    │   │       │	└── <span class="token class-name">DDDController</span><span class="token punctuation">.</span>java
    │   │       └── <span class="token class-name">DDDApplication</span><span class="token punctuation">.</span>java
    │   └── resources	
    │       ├── mybatis
    │       └── application<span class="token punctuation">.</span>yml
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-ddd-eureka-server-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#itstack-demo-ddd-eureka-server-服务注册与发现" aria-hidden="true">#</a> itstack-demo-ddd-eureka-server | 服务注册与发现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>eureka<span class="token operator">-</span>server
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
    │   │       └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
    │   └── resources	
    │       └── application<span class="token punctuation">.</span>yml
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>EurekaServerApplication.java | 启动服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaServerApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span> <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | 服务配置</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">8989</span>

eureka<span class="token operator">:</span>
  instance<span class="token operator">:</span>
    hostname<span class="token operator">:</span> localhost
  client<span class="token operator">:</span>
    registerWithEureka<span class="token operator">:</span> <span class="token boolean">false</span>
    fetchRegistry<span class="token operator">:</span> <span class="token boolean">false</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>$<span class="token punctuation">{</span>eureka<span class="token punctuation">.</span>instance<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span><span class="token operator">:</span>$<span class="token punctuation">{</span>server<span class="token punctuation">.</span>port<span class="token punctuation">}</span><span class="token operator">/</span>eureka<span class="token operator">/</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>eureka<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-ddd-feign-调用方-通过api接口调用" tabindex="-1"><a class="header-anchor" href="#itstack-demo-ddd-feign-调用方-通过api接口调用" aria-hidden="true">#</a> itstack-demo-ddd-feign | 调用方，通过API接口调用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>feign
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
    │   │       ├── domain
    │   │       │	└── <span class="token class-name">TreeDTO</span><span class="token punctuation">.</span>java
    │   │       ├── service
    │   │       │	└── <span class="token class-name">MallService</span><span class="token punctuation">.</span>java
    │   │       ├── web
    │   │       │	└── <span class="token class-name">FeignController</span><span class="token punctuation">.</span>java
    │   │       └── <span class="token class-name">FeignApplication</span><span class="token punctuation">.</span>java
    │   └── resources	
    │       └── application<span class="token punctuation">.</span>yml
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MallService.java | 通过注册方式调用API</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;itstack-demo-ddd-case&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MallService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/api/tree/queryTreeSummaryInfo&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
    <span class="token class-name">Object</span> <span class="token function">queryTreeSummaryInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">TreeDTO</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>FeignApplication.java | 启动服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">FeignApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | 服务配置</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">9090</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>feign

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8989</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-ddd-zuul-网关路由组件" tabindex="-1"><a class="header-anchor" href="#itstack-demo-ddd-zuul-网关路由组件" aria-hidden="true">#</a> itstack-demo-ddd-zuul| 网关路由组件</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>zuul
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
    │   │       └── <span class="token class-name">ZuulApplication</span><span class="token punctuation">.</span>java
    │   └── resources	
    │       └── application<span class="token punctuation">.</span>yml
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ZuulApplication.java | 启动服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableZuulProxy</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZuulApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ZuulApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | 服务配置{本案例是静态路由，按需可以开发为动态路由}</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">9191</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>zuul

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8989</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
zuul<span class="token operator">:</span>
  routes<span class="token operator">:</span>
    api<span class="token operator">-</span>a<span class="token operator">:</span>
      path<span class="token operator">:</span> <span class="token operator">/</span>route<span class="token operator">-</span>a<span class="token doc-comment comment">/**
      serviceId: itstack-demo-ddd-feign
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证" aria-hidden="true">#</a> 测试验证</h2><p>按照顺序启动；itstack-demo-ddd-eureka-server、itstack-demo-ddd-case｛可以模拟启动多个｝、itstack-demo-ddd-feign、itstack-demo-ddd-zuul</p><blockquote><p>访问；http://localhost:8989/ | 服务中心 <img src="https://bugstack.cn/assets/images/pic-content/2019/10/ddd-03-2.png" alt="微信公众号：bugstack虫洞栈 &amp; 服务中心"></p></blockquote><blockquote><p>访问：http://localhost:9191/route-a/api/queryTreeSummaryInfo?treeId=10001 | 通过网关路由调用DDD服务接口</p></blockquote><p><img src="https://bugstack.cn/assets/images/pic-content/2019/10/ddd-03-3.png" alt="微信公众号：bugstack虫洞栈 &amp; 调用网关接口测试"></p><h2 id="综上总结" tabindex="-1"><a class="header-anchor" href="#综上总结" aria-hidden="true">#</a> 综上总结</h2><ol><li>DDD的设计模式加上SpringBoot与SpringCloud非常适合开发微服务</li><li>以上案例可以进行扩展，使不同的用户群体在网关接口调用时就打到不同的服务上</li><li>另外目前没有使用dubbo类型的rpc框架，也就是没有对外提供定义接口jar包，后续会进行延展</li></ol>`,44),b=n("strong",null,"bugstack虫洞栈",-1),g=n("strong",null,"DDD落地案例",-1),h={href:"https://t.zsxq.com/jAi2nUf",target:"_blank",rel:"noopener noreferrer"};function j(f,y){const s=t("ExternalLinkIcon");return l(),p("div",null,[d,n("p",null,[a("作者：小傅哥 "),r,a("博客："),n("a",u,[a("https://bugstack.cn"),e(s)]),v,a("DDD项目："),n("a",k,[a("https://t.zsxq.com/jAi2nUf"),e(s)])]),m,n("p",null,[a("微信搜索「"),b,a("」公众号，关注后回复「"),g,a("」获取本文源码&更多原创专题案例！此外推荐你一个可以上手实践的DDD项目，看看如何从流程中提炼领域设计代码实现，在应用层、领域层以及基础层的仓储实现是如何完成开发和调用的，项目地址："),n("a",h,[a("https://t.zsxq.com/jAi2nUf"),e(s)])])])}const q=i(o,[["render",j],["__file","2019-10-17-DDDzhuantianlisan《lingyuqudongshejijiagoujiyuSpringClouddajianweifuwu》.html.vue"]]);export{q as default};
