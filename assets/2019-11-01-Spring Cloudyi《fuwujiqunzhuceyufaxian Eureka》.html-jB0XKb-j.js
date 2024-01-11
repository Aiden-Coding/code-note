import{_ as e,r as o,o as t,c as p,a as n,b as a,d as r,e as i}from"./app-3RcBQnkC.js";const l={},c=n("h1",{id:"第1章-服务集群注册与发现-eureka",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第1章-服务集群注册与发现-eureka","aria-hidden":"true"},"#"),a(" 第1章：服务集群注册与发现 Eureka")],-1),d=n("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=i(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><ol><li><p>对于能提供完整领域服务接口功能的RPC而言，例如；gRPC、Thrift、Dubbo等，服务的注册与发现都是核心功能中非常重要的一环，使得微服务得到统一管理。</p></li><li><p>在分布式领域中有个著名的CAP理论；一致性（Consistency）、可用性（Availability）、分区容错性（Partition tolerance），这三个要素在分布式系统中，最多满足两个，不可能三者兼顾。</p></li><li><p>通常我们在使用dubbo时zookeeper作为注册中心以选主配置为核心，保证CP特性，即任何时刻对 Zookeeper 的访问请求能得到一致的数据结果，同时系统对网络分割具备容错性，但是它不能保证每次服务请求的可用性。</p></li><li><p>而 Spring Cloud Netflix 在设计 Eureka 时遵守的就是 AP 原则，因为对于服务发现而言，可用性比数据一致性显得尤为重要。</p></li><li><p>Spring Cloud Eureka 是 Spring Cloud Netflix 微服务套件的一部分，主要负责完成微服务架构中的服务治理功能，服务治理可以说是微服务架构中最为核心和基础的模块，他主要用来实现各个微服务实例的自动化注册与发现。</p></li><li><p>另外Eureka服务集群有自我保护模式，在每分钟收到心跳低于阀值时，就会触发自我保护；</p></li></ol><blockquote><p>阈值 = instance的数量 × (60 / instance的心跳间隔秒数) × 自我保护系数 {实际计算为；this.expectedNumberOfRenewsPerMin + 2}</p></blockquote><h2 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明" aria-hidden="true">#</a> 案例说明</h2><p>采用 Eureka Server 运行3个实例｛node01、node02、node03｝构建服务发现集群，解决单点问题(zookeeper也是至少部署三组以上构建一个集群)。但Eureka Server 采用的是去中心化的架构的 Peer to Peer 对等通信，没有 master/slave 区分，每一个 Peer 都是对等的。在这种架构中，节点通过彼此互相注册来提高可用性，每个节点需要添加一个或多个有效的 serviceUrl 指向其他节点。每个节点都可被视为其他节点的副本。</p><p><img src="https://bugstack.cn/assets/images/pic-content/2019/11/SpringCloud-1-1.jpg" alt="微信公众号：bugstack虫洞栈 &amp; Eureka 官网的架构图"></p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>jdk 1.8</li><li>Spring Boot 2.0.6.RELEASE</li><li>Spring Cloud Finchley.SR2</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span><span class="token number">01</span>
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>node01
│   └── src
│		└── main
│		    ├── java
│		    │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│	        │        └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
│           └── resources	
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>node02
│   └── src
│		└── main
│		    ├── java
│		    │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│	        │        └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
│           └── resources	
│               └── application<span class="token punctuation">.</span>yml
└── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>node03
    └── src
 		└── main
 		    ├── java
 		    │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
 	        │        └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
            └── resources	
                └── application<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码欢迎关注公众号：bugstack虫洞栈 | 回复“SpringCloud专题”进行下载</strong></p><blockquote><p>EurekaServerApplication.java | 三组node代码一致，只需要一个普通的springboot添加@EnableEurekaServer即可启动</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>itstack-demo-node01/application.yml | node1 指向另外两台服务，registerWithEureka、fetchRegistry和单实例不同需要配置为true</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>eureka<span class="token operator">-</span>server

server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">8081</span>

eureka<span class="token operator">:</span>
  instance<span class="token operator">:</span>
    hostname<span class="token operator">:</span> node01
  client<span class="token operator">:</span>
    registerWithEureka<span class="token operator">:</span> <span class="token boolean">true</span>
    fetchRegistry<span class="token operator">:</span> <span class="token boolean">true</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node02<span class="token operator">:</span><span class="token number">8082</span><span class="token operator">/</span>eureka<span class="token operator">/</span><span class="token punctuation">,</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node03<span class="token operator">:</span><span class="token number">8083</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>itstack-demo-node02/application.yml | node2 指向另外两台服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>eureka<span class="token operator">-</span>server

server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">8082</span>

eureka<span class="token operator">:</span>
  instance<span class="token operator">:</span>
    hostname<span class="token operator">:</span> node02
  client<span class="token operator">:</span>
    registerWithEureka<span class="token operator">:</span> <span class="token boolean">true</span>
    fetchRegistry<span class="token operator">:</span> <span class="token boolean">true</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node03<span class="token operator">:</span><span class="token number">8083</span><span class="token operator">/</span>eureka<span class="token operator">/</span><span class="token punctuation">,</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node01<span class="token operator">:</span><span class="token number">8081</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>itstack-demo-node03/application.yml | node3 指向另外两台服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>eureka<span class="token operator">-</span>server

server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">8083</span>

eureka<span class="token operator">:</span>
  instance<span class="token operator">:</span>
    hostname<span class="token operator">:</span> node03
  client<span class="token operator">:</span>
    registerWithEureka<span class="token operator">:</span> <span class="token boolean">true</span>
    fetchRegistry<span class="token operator">:</span> <span class="token boolean">true</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node01<span class="token operator">:</span><span class="token number">8081</span><span class="token operator">/</span>eureka<span class="token operator">/</span><span class="token punctuation">,</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>node02<span class="token operator">:</span><span class="token number">8082</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证" aria-hidden="true">#</a> 测试验证</h2><ol><li>配置host；127.0.0.1 node01 node02 node03</li><li>分别启动node1、node2、node3</li><li>访问；http://localhost:8081/ <img src="https://bugstack.cn/assets/images/pic-content/2019/11/SpringCloud-1-2.jpg" alt="微信公众号：bugstack虫洞栈 &amp; Eureka集群"></li></ol><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>SpringCloud专题</strong>」获取本文源码&amp;更多原创专题案例！</p>`,23);function v(m,b){const s=o("ExternalLinkIcon");return t(),p("div",null,[c,n("p",null,[a("作者：小傅哥 "),d,a("博客："),n("a",u,[a("https://bugstack.cn"),r(s)])]),k])}const g=e(l,[["render",v],["__file","2019-11-01-Spring Cloudyi《fuwujiqunzhuceyufaxian Eureka》.html.vue"]]);export{g as default};
