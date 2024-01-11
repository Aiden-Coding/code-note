import{_ as n,r as l,o as s,c as a,a as e,b as r,d as o,e as i}from"./app-3RcBQnkC.js";const h={},c=e("h1",{id:"《api网关》-关于面试中的技能、简历、问题汇总",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《api网关》-关于面试中的技能、简历、问题汇总","aria-hidden":"true"},"#"),r(" 《API网关》，关于面试中的技能、简历、问题汇总")],-1),_=e("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},d=e("br",null,null,-1),b={href:"https://t.zsxq.com/0d7K7hJ0i",target:"_blank",rel:"noopener noreferrer"},u=i('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><p>此部分主要用于向读者提供星球项目之一的 API 网关如何体现到简历中，包括；专业技能、项目经验。</p><h2 id="一、项目介绍" tabindex="-1"><a class="header-anchor" href="#一、项目介绍" aria-hidden="true">#</a> 一、项目介绍</h2><p>面试官您好，这是我所设计和实现的一套统一《API网关》系统，该系统的核心目的是用于解决公司中所有各类服务的统一出口问题。将非业务功能的共性服务进行统一封装使用，这包括；鉴权、熔断、限流、风控、切量等。通过API网关可以将内部的 RPC 服务以及可扩展的 MQ、SQL、任务等资源，通过 HTTP 对外提供调用，让APP、WEB、H5、小程序等有一个统一标准的接入方式，降低公司在此同类功能模块的重复建设问题。</p><p>我作为项目的架构师和核心开发人员，在项目架构设计上，将工程拆分为Netty实现的核心通信模块、通信封装模块、通信引擎模块，以及注册中心、上报服务的SDK组件和后台管理系统。并通过 Nginx 动态负载驱动算力的集群使用，可以支持横向的扩展，满足高并发的接入。好的，面试者就是我做的API网关核心实现的介绍。</p><h2 id="二、简历模板" tabindex="-1"><a class="header-anchor" href="#二、简历模板" aria-hidden="true">#</a> 二、简历模板</h2><ul><li><strong>项目名称</strong>：API 网关</li><li><strong>系统架构</strong>：微服务架构设计、SpringBoot Starter 组件设计、DDD 领域驱动设计</li><li><strong>核心技术</strong>：SpringBoot、SpringBoot Starter、Netty、NGINX、SHIRO、JWT、Redis、负载均衡、RateLimiter</li><li><strong>项目描述</strong>：API网关系统用于统一管理RPC（Dubbo）通信接口，通过协议解析和泛化调用统一对外提供HTTP服务的系统。这套系统是微服务架构设计，分为核心通信、启动引擎、注册中心、管理平台以及上报接口服务。这套API网关也是随着对公司传统庞大的单体应用（All in one）拆分为众多的微服务（Microservice）以后，所引入的统一通信管理系统。用于运行在外部HTTP请求与内部RPC服务之间的一个流量入口，实现对外部请求的协议转换、参数校验、鉴权、切量、熔断、限流、监控、风控等各类共性的通用服务。</li><li><strong>核心职责</strong>： <ul><li>构建 API 网关整体核心架构分层设计，拆分出核心通信、服务助手、启动引擎、注册中心、上报服务、管理后台，这样6个工程模块。便于后续的高效迭代和维护工作。</li><li>分治处理会话流程，将复杂的会话流程划分为多个阶段，以提高处理效率；将连接(RPC\\HTTP\\其他)抽象为数据源，为数据的读取和写入提供支持；实现HTTP请求参数解析，确保请求参数的正确处理；引入执行器封装服务调用，提供对各种服务的调用支持；集成权限认证组件(Shiro+Jwt)，确保请求的合法性和安全性；实现网关会话鉴权处理，为会话的安全管理提供支持；实现网络通信配置提取，将网络通信的配置信息抽象为可配置的模块，提高配置的灵活性。</li><li>设计并实现服务发现组件搭建和注册网关连接、服务配置拉取和组件使用验证、核心通信组件管理和处理服务映射、容器关闭监听和异常管理、订阅服务注册消息驱动网关映射、网关Nginx负载模型配置、动态刷新网关Nginx负载均衡配置和实现网关算力节点动态负载功能。</li></ul></li></ul><hr><ol><li>校招生，项目方式：网关项目是我的一个技术学习实战项目，该项目以解决各类应用服务对外提供HTTP的标准和实现，对服务进行统一的管理。如 RPC(Dubbo) 通过 Netty 接收 HTTP 请求，进行泛化调用，对外提供服务。也可以扩展 MQ、Redis、MySQL、Job或各类资源位 HTTP 服务。—— 你这样介绍来讲下项目的目标和行动，会符合你目前阶段。</li><li>校招生，职责描述：首先，经过技术调研和大厂中同类产品的学习，分析设计了 API 网关的服务框架，包括；网关算力、注册中心、服务上报、动态负载等核心模块。” 其他的描述也站在个人的视角下进行描述。</li></ol><p>多从个人视角来描述，API网关有很多的技术点。在学习时候认真总结，编写简历从个人视角来编写会非常好。</p><h2 id="三、面试问题" tabindex="-1"><a class="header-anchor" href="#三、面试问题" aria-hidden="true">#</a> 三、面试问题</h2>',11),f={href:"https://t.zsxq.com/0bjcygpls",target:"_blank",rel:"noopener noreferrer"},g={href:"https://t.zsxq.com/0bkCyZGzM",target:"_blank",rel:"noopener noreferrer"},P={href:"https://t.zsxq.com/0bkCyZGzM",target:"_blank",rel:"noopener noreferrer"},k={href:"https://t.zsxq.com/0bkCyZGzM",target:"_blank",rel:"noopener noreferrer"},x={href:"https://t.zsxq.com/0bkCyZGzM",target:"_blank",rel:"noopener noreferrer"},m={href:"https://t.zsxq.com/0bkCyZGzM",target:"_blank",rel:"noopener noreferrer"},I={href:"https://t.zsxq.com/0cT5sbRmI",target:"_blank",rel:"noopener noreferrer"},T={href:"https://t.zsxq.com/104ZDRNvW",target:"_blank",rel:"noopener noreferrer"},q={href:"https://t.zsxq.com/10pg2nOx6",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.zsxq.com/11NdwNmC6",target:"_blank",rel:"noopener noreferrer"},A={href:"https://t.zsxq.com/11knrPUCI",target:"_blank",rel:"noopener noreferrer"};function N(C,R){const t=l("ExternalLinkIcon");return s(),a("div",null,[c,e("p",null,[r("作者：小傅哥 "),_,r("博客："),e("a",p,[r("https://bugstack.cn"),o(t)]),d,r("课程："),e("a",b,[r("https://t.zsxq.com/0d7K7hJ0i"),o(t)])]),u,e("ul",null,[e("li",null,[e("a",f,[r("API网关项目这个应该怎么组织语言写道简历里"),o(t)])]),e("li",null,[e("a",g,[r("我在之前的提问网关项目的简历编写这块 你有提到技术栈有使用redis和mq，这两个是在那块体现的。（因为我看到是有用redis做订阅发布，那假设我是用mq去做这个，那redis还需要去做什么呢）"),o(t)])]),e("li",null,[e("a",P,[r("对于网关项目本身的高可用我们需要做哪些处理，对于一些数据失败的情况要做怎么样的兜底呢。"),o(t)])]),e("li",null,[e("a",k,[r("在网关架构这块我看到在组件那块有看到池化技术和路由策略是体现在什么地方上，应该怎么去做。"),o(t)])]),e("li",null,[e("a",x,[r("这个测试项目的rpc注册中心和网关注册中心分开，课程里是分开的，两个注册中心这个是否有必要性的。"),o(t)])]),e("li",null,[e("a",m,[r("对于面试中问起对于网关的数据库是否分库分表以及qps tps数据应该怎么去考虑。"),o(t)])]),e("li",null,[e("a",I,[r("你这个网关跟springcloud的网关有什么区别。如果我们的系统，想要使用你们的网关，要做那些步骤。"),o(t)])]),e("li",null,[e("a",T,[r("请问下星球里的api网关应该有很多开源的项目吧，具体有哪些。要是写在简历里，面试官要是问为啥要自己搞一套，而不用开源的呢"),o(t)])]),e("li",null,[e("a",q,[r("API网关的性能瓶颈在哪? 怎么进行优化？"),o(t)])]),e("li",null,[e("a",z,[r("这套API网关怎么实现高可用？同一套网关系统怎么映射到不同的后端Dubbo服务上面？如果部署多套网关，Dubbo服务上报，如何只让网关A进行订阅服务映射，网关B不操作？"),o(t)])]),e("li",null,[e("a",A,[r("RPC服务上报过后协议改变了，网关怎么处理。服务降级方案怎么设计的？"),o(t)])])])])}const y=n(h,[["render",N],["__file","notes.html.vue"]]);export{y as default};
