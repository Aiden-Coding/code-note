import{_ as r,r as i,o,c as s,a as t,b as e,d as n,e as c}from"./app-3RcBQnkC.js";const l={},h=t("h1",{id:"《chatgpt-微服务应用体系构建》-chatgpt-api-第4节-工程重构和流式异步响应接口实现",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#《chatgpt-微服务应用体系构建》-chatgpt-api-第4节-工程重构和流式异步响应接口实现","aria-hidden":"true"},"#"),e(" 《ChatGPT 微服务应用体系构建》 - chatgpt-api 第4节：工程重构和流式异步响应接口实现")],-1),g=t("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},p=t("blockquote",null,[t("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),u=t("li",null,[t("strong",null,"本章难度"),e("：★★★☆☆")],-1),_=t("li",null,[t("strong",null,"本章重点"),e("：通过新的 DDD 架构模型重构工程结构，并使用和不使用，设计模式对照开发流式异步应答接口实现，让小伙伴可以学习如何使用这些技术知识来驾驭自己的项目工程。")],-1),f=t("strong",null,"课程视频",-1),m={href:"https://t.zsxq.com/10Cslo1eZ",target:"_blank",rel:"noopener noreferrer"},D=t("strong",null,"版权说明",-1),x={href:"http://www.gov.cn/zhengce/2020-12/26/content_5573623.htm",target:"_blank",rel:"noopener noreferrer"},b=t("br",null,null,-1),k={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=c('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="一、本章诉求" tabindex="-1"><a class="header-anchor" href="#一、本章诉求" aria-hidden="true">#</a> 一、本章诉求</h2><p>本章最核心的诉求就是开发一个可以用于后续提供给 ChatGPT-WEB 页面使用的异步响应接口，也就是通常我们使用 ChatGPT 那种打字机的效果。</p><p>但小傅哥开发代码，绝对不只是做个接口 CRUD 一下就完事了。所以本章<strong>既分高下，也绝生死😂</strong>。因为我们要重构下工程了，使用以下 DDD 架构模式构建工程，同时实现出一个不使用设计模式和使用设计模式的对比，方便大家更好的理解功能需求在代码中的设计实现。</p><h2 id="二、流程设计" tabindex="-1"><a class="header-anchor" href="#二、流程设计" aria-hidden="true">#</a> 二、流程设计</h2><p>整个流程为；以DDD工程结构模型，提供 HTTP 响应式接口，调用 OpenAI 应答请求信息。</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-api-04-01.png?raw=true" width="650px"></div><ul><li>整个流程其实简单，复杂点在于怎么提供一个异步响应接口，并怎么把这个需要一堆的调用代码的实现，分配到各个类里去处理。</li><li>而同时小傅哥也希望把另外一套DDD架构，通过这个项目需求给大家展示出来。</li></ul><h2 id="三、架构讲解" tabindex="-1"><a class="header-anchor" href="#三、架构讲解" aria-hidden="true">#</a> 三、架构讲解</h2><h3 id="_1-模型抽象" tabindex="-1"><a class="header-anchor" href="#_1-模型抽象" aria-hidden="true">#</a> 1. 模型抽象</h3><p>小傅哥提到了一个简单的开发模型。开发代码可以理解为：<code>“定义属性 -&gt; 创建方法 -&gt; 调用展示”</code>但这个模型结构过于简单，不太适合运用了各类分布式技术栈以及更多逻辑的 DDD 架构。所以在 DDD 这里，我们把开发代码可以抽象为：<code>“触发 -&gt; 函数 -&gt; 连接”</code> 如图；</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-02.png?raw=true" width="650px"></div><ul><li>DDD 架构常用于微服务场景，因此也一个系统的调用方式就不只是 HTTP 还包括；<code>RPC 远程</code>、<code>MQ 消息</code>、<code>TASK 任务</code>，因此这些种方式都可以理解为触发。</li><li>通过触发调用函数方法，我们这里可以把各个服务都当成一个函数方法来看。而函数方法通过连接，调用到其他的接口、数据库、缓存来完成函数逻辑。</li></ul><p>接下来，小傅哥在带着大家把这些所需的模块，拆分到对应的DDD系统架构中。</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-api-04-06.gif?raw=true" width="550px"></div><h3 id="_2-架构分层" tabindex="-1"><a class="header-anchor" href="#_2-架构分层" aria-hidden="true">#</a> 2. 架构分层</h3><p>如下是 DDD 架构的一种分层结构，也可以有其他种方式，核心的重点在于适合你所在场景的业务开发。以下的分层结构，是小傅哥在使用 DDD 架构多种的方式开发代码后，做了简化和处理的。右侧的连线是各个模块的依赖关系。接下来小傅哥就给大家做一下模块的介绍。</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230624-03.png" width="700px"></div><ul><li><strong>接口定义 - xfg-frame-api</strong>：因为微服务中引用的 RPC 需要对外提供接口的描述信息，也就是调用方在使用的时候，需要引入 Jar 包，让调用方好能依赖接口的定义做代理。</li><li><strong>应用封装 - xfg-frame-app</strong>：这是应用启动和配置的一层，如一些 aop 切面或者 config 配置，以及打包镜像都是在这一层处理。你可以把它理解为专门为了启动服务而存在的。</li><li><strong>领域封装 - xfg-frame-domain</strong>：领域模型服务，是一个非常重要的模块。无论怎么做DDD的分层架构，domain 都是肯定存在的。在一层中会有一个个细分的领域服务，在每个服务包中会有【模型、仓库、服务】这样3部分。</li><li><strong>仓储服务 - xfg-frame-infrastructure</strong>：基础层依赖于 domain 领域层，因为在 domain 层定义了仓储接口需要在基础层实现。这是依赖倒置的一种设计方式。</li><li><strong>领域封装 - xfg-frame-trigger</strong>：触发器层，一般也被叫做 adapter 适配器层。用于提供接口实现、消息接收、任务执行等。所以对于这样的操作，小傅哥把它叫做触发器层。</li><li><strong>类型定义 - xfg-frame-types</strong>：通用类型定义层，在我们的系统开发中，会有很多类型的定义，包括；基本的 Response、Constants 和枚举。它会被其他的层进行引用使用。</li><li><strong>领域编排【可选】 - xfg-frame-case</strong>：领域编排层，一般对于较大且复杂的的项目，为了更好的防腐和提供通用的服务，一般会添加 case/application 层，用于对 domain 领域的逻辑进行封装组合处理。</li></ul>',19);function w(C,T){const a=i("ExternalLinkIcon");return o(),s("div",null,[h,t("p",null,[e("作者：小傅哥 "),g,e("博客："),t("a",d,[e("https://bugstack.cn"),n(a)])]),p,t("ul",null,[u,_,t("li",null,[f,e("："),t("a",m,[e("https://t.zsxq.com/10Cslo1eZ"),n(a)])])]),t("p",null,[D,e("：©本项目与星球签约合作，受"),t("a",x,[e("《中华人民共和国著作权法实施条例》"),n(a)]),e(" 版权法保护，禁止任何理由和任何方式公开(public)源码、资料、视频等内容到Github、Gitee等，违反可追究进一步的法律行动。")]),t("p",null,[e("作者：小傅哥 "),b,e("博客："),t("a",k,[e("https://bugstack.cn"),n(a)])]),v])}const j=r(l,[["render",w],["__file","di4jie：gongchengzhonggouheliushiyibuxiangyingjiekoushixian.html.vue"]]);export{j as default};
