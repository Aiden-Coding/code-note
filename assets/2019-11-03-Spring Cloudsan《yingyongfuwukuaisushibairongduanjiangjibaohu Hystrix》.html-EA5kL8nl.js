import{_ as e,r as t,o as i,c as p,a as n,b as s,d as o,e as l}from"./app-cCF93fuz.js";const c={},r=n("h1",{id:"第3章-应用服务快速失败熔断降级保护-hystrix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第3章-应用服务快速失败熔断降级保护-hystrix","aria-hidden":"true"},"#"),s(" 第3章：应用服务快速失败熔断降级保护 Hystrix")],-1),u=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=l(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><p>在互联网开发中经常会听到雪崩效应，比如某明星发一些状态某猿就要回去加班了！那么为了应对雪崩我们经常会进行服务扩容、添加缓存、优化流程但往往突发的事件依然有击穿缓存、应用负载、数据库IO、网络异常等等带来的风险，所以一些常见的做法有服务降级、限流、熔断，在逐步恢复系统可用率来保护系统。</p><p><strong>Hystrix</strong> 是一种熔断降级的中间件，由 Spring Cloud 集成整合后在Ribbon与Fegin中提供使用。</p><blockquote><p>Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.</p></blockquote><p><img src="https://bugstack.cn/assets/images/pic-content/2019/11/SpringCloud-3-1.png" alt="微信公众号：bugstack虫洞栈 &amp; Hystrix工作原理(官网)"></p><h2 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明" aria-hidden="true">#</a> 案例说明</h2><p>本案例在itstack-demo-springcloud-02的基础上添加Hystrix服务，当我们的itstack-demo-springcloud-eureka-client尚未启动或主动停止后，我们在调用接口服务时候会进行熔断保护。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>jdk 1.8</li><li>Spring Boot 2.0.6.RELEASE</li><li>Spring Cloud Finchley.SR2</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span><span class="token number">03</span>
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>client
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── web
│           │        │   └── <span class="token class-name">EurekaClientController</span><span class="token punctuation">.</span>java
│           │        └── <span class="token class-name">EurekaClientApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>server
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>hystrix<span class="token operator">-</span>feign
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── service
│           │        │   ├── hystrix
│           │        │   │   └── <span class="token class-name">FeignServiceHystrix</span><span class="token punctuation">.</span>java
│           │        │   └── <span class="token class-name">FeignService</span><span class="token punctuation">.</span>java
│           │        ├── web
│           │        │   └── <span class="token class-name">FeignController</span><span class="token punctuation">.</span>java
│           │        └── <span class="token class-name">FeignApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
└── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>hystrix<span class="token operator">-</span>ribbon
    └── src
        └── main
            ├── java
            │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
            │        ├── service
            │        │   └── <span class="token class-name">RibbonService</span><span class="token punctuation">.</span>java
            │        ├── web
            │        │   └── <span class="token class-name">RibbonController</span><span class="token punctuation">.</span>java		
            │        └── <span class="token class-name">RibbonApplication</span><span class="token punctuation">.</span>java
            └── resources   
                └── application<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码欢迎关注公众号：bugstack虫洞栈 | 回复“SpringCloud专题”进行下载</strong></p><h3 id="itstack-demo-springcloud-eureka-client-服务提供方" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-eureka-client-服务提供方" aria-hidden="true">#</a> itstack-demo-springcloud-eureka-client | 服务提供方</h3><p>提供一个查询用户信息的简单方法，在配置文件中通过修改端口启动2次，模拟双实例应用，为调用方负载做准备。</p><blockquote><p>web/EurekaClientController.java | 注意@EnableEurekaClient用于向注册中心提供服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaClientController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${server.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/api/queryUserInfo&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hi 微信公众号：bugstack虫洞栈 | &quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot; &gt;: from eureka client port: &quot;</span> <span class="token operator">+</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>EurekaClientApplication.java | 服务启动类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaClientApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EurekaClientApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | 配置文件链接服务注册中心,8001\\8002分别配置启动</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">8001</span> <span class="token operator">/</span> <span class="token number">8002</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>client

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">7397</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-springcloud-eureka-server-单个服务注册中心" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-eureka-server-单个服务注册中心" aria-hidden="true">#</a> itstack-demo-springcloud-eureka-server | 单个服务注册中心</h3><p>服务注册中心用于承载接口提供方向上注册，同时正在调用方链接后可以获取指定应用的服务实例。</p><blockquote><p>EurekaServerApplication.java | 通过注解@EnableEurekaServer启动服务注册与发现中心</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | 服务注册中心配置文件，端口7397和我们之前写netty的服务的端口一致</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">7397</span>

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
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-springcloud-feign-feign服务调用方-添加熔断hystrix" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-feign-feign服务调用方-添加熔断hystrix" aria-hidden="true">#</a> itstack-demo-springcloud-feign | Feign服务调用方，添加熔断Hystrix</h3><p>Feign 是一个声明式的 Web Service 客户端，它的目的就是让 Web Service 调用更加简单。它整合了 Ribbon 和 Hystrix，从而让我们不再需要显式地使用这两个组件。Feign 还提供了 HTTP 请求的模板，通过编写简单的接口和插入注解，我们就可以定义好 HTTP 请求的参数、格式、地址等信息。接下来，Feign 会完全代理 HTTP 的请求，我们只需要像调用方法一样调用它就可以完成服务请求。</p><p>Feign 具有如下特性：</p><p>可插拔的注解支持，包括 Feign 注解和 JAX-RS 注解 支持可插拔的 HTTP 编码器和解码器 支持 Hystrix 和它的 Fallback 支持 Ribbon 的负载均衡 支持 HTTP 请求和响应的压缩</p><blockquote><p>service/FeignService.java | 注解方式调用，方便易用。@FeignClient会在调用时进行解析服务到具体的http://ip:port/</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;itstack-demo-springcloud-eureka-client&quot;</span><span class="token punctuation">,</span> fallback <span class="token operator">=</span> <span class="token class-name">FeignServiceHystrix</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FeignService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/api/queryUserInfo&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>service/hystrix/FeignServiceHystrix.java | 提供熔断服务，当发生异常时主动返回预定结果</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignServiceHystrix</span> <span class="token keyword">implements</span> <span class="token class-name">FeignService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;queryUserInfo by userId：&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot; err！from feign hystrix&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>web/FeignController.java | 使用接口提供服务 From Feign</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">FeignService</span> ribbonService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/api/queryUserInfo&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ribbonService<span class="token punctuation">.</span><span class="token function">queryUserInfo</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; From Feign&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>FeignApplication.java | 注解@EnableEurekaClient、@EnableFeignClients、@EnableDiscoveryClient获取调用注册中心服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | eureka服务配置，从注册中心获取可用服务。开启hystrix=true</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">9001</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>feign

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">7397</span><span class="token operator">/</span>eureka<span class="token operator">/</span>

feign<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>enabled<span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-springcloud-ribbon-ribbon服务调用方" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-ribbon-ribbon服务调用方" aria-hidden="true">#</a> itstack-demo-springcloud-ribbon | Ribbon服务调用方</h3><p>Ribbon是一个基于 HTTP 和 TCP 的客户端负载均衡器。它可以通过在客户端中配置 ribbonServerList 来设置服务端列表去轮询访问以达到均衡负载的作用。</p><p>当 Ribbon 与 Eureka 联合使用时，ribbonServerList 会被 DiscoveryEnabledNIWSServerList 重写，扩展成从 Eureka 注册中心中获取服务实例列表。同时它也会用 NIWSDiscoveryPing 来取代 IPing，它将职责委托给 Eureka 来确定服务端是否已经启动。</p><blockquote><p>service/RibbonService.java | 接口式硬编码调用不太易于维护，因此也是比较少用的方式。hystrix实际通过getFallback()返回熔断结果</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RibbonService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;queryUserInfoFallback&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://ITSTACK-DEMO-SPRINGCLOUD-EUREKA-CLIENT/api/queryUserInfo?userId=&quot;</span> <span class="token operator">+</span> userId<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Specifies a method to process fallback logic.
     * A fallback method should be defined in the same class where is HystrixCommand.
     * Also a fallback method should have same signature to a method which was invoked as hystrix command.
     * for example:
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>
     <span class="token code-section">*      <span class="token line"><span class="token code language-java"><span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getByIdFallback&quot;</span><span class="token punctuation">)</span></span></span>
     *      <span class="token line"><span class="token code language-java"><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span></span>
     *
     *      <span class="token line"><span class="token code language-java"><span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getByIdFallback</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span></span>
     *</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
     * Also a fallback method can be annotated with <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">}</span>
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">/&gt;</span></span>
     * default =&gt; see <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>command<span class="token punctuation">.</span></span><span class="token class-name">GenericCommand</span><span class="token punctuation">#</span><span class="token function">getFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span>
     *
     * <span class="token keyword">@return</span> method name
     *
     * getFallback()
     * 
     * @Override
     * protected Object getFallback() <span class="token punctuation">{</span>
     *     final CommandAction commandAction = getFallbackAction();
     *     if (commandAction != null) <span class="token punctuation">{</span>
     *         try <span class="token punctuation">{</span>
     *             return process(new Action() <span class="token punctuation">{</span>
     *                 @Override
     *                 Object execute() <span class="token punctuation">{</span>
     *                     MetaHolder metaHolder = commandAction.getMetaHolder();
     *                     Object[] args = createArgsForFallback(metaHolder, getExecutionException());
     *                     return commandAction.executeWithArgs(metaHolder.getFallbackExecutionType(), args);
     *                 <span class="token punctuation">}</span>
     *             <span class="token punctuation">}</span>);
     *         <span class="token punctuation">}</span> catch (Throwable e) <span class="token punctuation">{</span>
     *             LOGGER.error(FallbackErrorMessageBuilder.create()
     *                     .append(commandAction, e).build());
     *             throw new FallbackInvocationException(unwrapCause(e));
     *         <span class="token punctuation">}</span>
     *     <span class="token punctuation">}</span> else <span class="token punctuation">{</span>
     *         return super.getFallback();
     *     <span class="token punctuation">}</span>
     * <span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfoFallback</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;queryUserInfo by userId：&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot; err！from ribbon hystrix&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>web/RibbonController.java | 使用接口提供服务 From Ribbon</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RibbonController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">RibbonService</span> ribbonService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/api/queryUserInfo&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ribbonService<span class="token punctuation">.</span><span class="token function">queryUserInfo</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; From Ribbon&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>RibbonApplication.java | 通过注解@LoadBalanced注册rest模版，用于Ribbon接口调用。并启动@EnableHystrix</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token annotation punctuation">@EnableHystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RibbonApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RibbonApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@LoadBalanced</span>
    <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml | eureka服务配置，从注册中心获取可用服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">9002</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>ribbon

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">7397</span><span class="token operator">/</span>eureka<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证" aria-hidden="true">#</a> 测试验证</h2><ol><li>启动服务注册中心itstack-demo-springcloud-eureka-server</li><li>本地测试不启动eureka-client，以达到服务不可以用的效果</li><li>启动itstack-demo-springcloud-feign</li><li>启动itstack-demo-springcloud-ribbon</li><li>访问Feign服务调用方，在熔断的保护下会返回预定熔断结果：http://localhost:9001/api/queryUserInfo?userId=1024</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>queryUserInfo by userId：<span class="token number">1024</span> err！from feign hystrix <span class="token class-name">From</span> <span class="token class-name">Feign</span>
queryUserInfo by userId：<span class="token number">1024</span> err！from feign hystrix <span class="token class-name">From</span> <span class="token class-name">Feign</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>访问Ribbon服务调用方，在熔断的保护下会返回预定熔断结果：http://localhost:9002/api/queryUserInfo?userId=1024</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>queryUserInfo by userId：<span class="token number">1024</span> err！from ribbon hystrix <span class="token class-name">From</span> <span class="token class-name">Ribbon</span>
queryUserInfo by userId：<span class="token number">1024</span> err！from ribbon hystrix <span class="token class-name">From</span> <span class="token class-name">Ribbon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综上总结" tabindex="-1"><a class="header-anchor" href="#综上总结" aria-hidden="true">#</a> 综上总结</h2><ol><li>Spring Cloud 将Hystrix整合后提供非常简单的使用方式，并且提供了丰富的配置可以满足实际应用开发</li><li>Hystrix Git开源代码；https://github.com/Netflix/Hystrix</li><li>在熔断降级就像是电闸的保险丝，可以在非常重要的时刻快速失败保护系统</li></ol><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>SpringCloud专题</strong>」获取本文源码&amp;更多原创专题案例！</p>`,60);function v(m,b){const a=t("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",d,[s("https://bugstack.cn"),o(a)])]),k])}const h=e(c,[["render",v],["__file","2019-11-03-Spring Cloudsan《yingyongfuwukuaisushibairongduanjiangjibaohu Hystrix》.html.vue"]]);export{h as default};
