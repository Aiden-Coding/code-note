import{_ as a,r,o as n,c as l,a as e,b as t,d as c,e as d}from"./app-3RcBQnkC.js";const i={},s=e("h1",{id:"openai-大模型应用服务体系构建-api-sdk、鉴权、公众号、企业微信、支付服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#openai-大模型应用服务体系构建-api-sdk、鉴权、公众号、企业微信、支付服务","aria-hidden":"true"},"#"),t(" OpenAi 大模型应用服务体系构建 - API-SDK、鉴权、公众号、企业微信、支付服务")],-1),h=e("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},g=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),u=e("iframe",{id:"B-Video",src:"//player.bilibili.com/player.html?aid=996017673&bvid=BV1xs4y1Q7C4&cid=1128307317&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"480"}," ",-1),_=e("p",null,[t("说来奇怪🤔，我们从0到1的事往往较少，但从1到100的"),e("code",null,"嫁衣神功"),t("却很多也很快。就像 ChatGPT 还没有多成熟，但 ChatGPT 的各种付费模式已经非常成熟。"),e("code",null,"但说奇怪也不奇怪"),t("，因为本身大部分一样的我，所经历过的不少事，也都是在紧赶慢赶的完成OKR。 这让我们感觉就像陷入了一个旋转飞轮中，不能思考，只能往前跑。")],-1),b={href:"https://itedus.cn",target:"_blank",rel:"noopener noreferrer"},E=d('<p><strong>不过</strong>，之所以让大家这么体验，也是想让你要知道。不是你能用上 ChatGPT 你就牛了，啥都能干了。<strong>是你强它才强</strong>，你要是对一个行业不了解，没有深度的积累，你问 ChatGPT 的结果，可能也只是 <code>HelloWord</code> 级别。</p><h2 id="一、启动新项目" tabindex="-1"><a class="header-anchor" href="#一、启动新项目" aria-hidden="true">#</a> 一、<code>启动</code>新项目</h2><p><strong>那小傅哥想干啥？做一个 ChatGPT 资料社群吗？不，不做。</strong></p><p>作为一个纯搞技术的号主，我更希望做符合技术人员长期发展的学习事项。如 ChatGPT、文心一言、通义千问、AIGC、Civita，这样的东西会越来越多，而作为研发更应该注重以<code>生成式服务</code>所搭建出一套体系化应用微服务。所以小傅哥的星球又要带着大家搞新项目了 <strong>《ChatGPT 微服务应用体系构建》</strong> - 说到又，那小傅哥的星球搞了多少项目🤔？</p><p>除技术小册外，星球历经项目5个：- <code>加入小傅哥的知识星球，相当于付费1个项目的价格，就可以学习所有过往的项目！</code></p>',5),m=e("li",null,[t("《ChatGPT 微服务应用体系构建 - API-SDK、鉴权、公众号对接、微信对接、交易支付》- "),e("strong",null,"5.1日启动"),t(" 🌲")],-1),B={href:"https://bugstack.cn/md/project/chatbot-api/chatbot-api.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://bugstack.cn/md/assembly/api-gateway/api-gateway.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://bugstack.cn/md/assembly/middleware/2019-12-02-SpringBoot%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B9%8B%E7%BB%9F%E4%B8%80%E7%99%BD%E5%90%8D%E5%8D%95%E9%AA%8C%E8%AF%81.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://bugstack.cn/md/project/lottery/introduce/Lottery%E6%8A%BD%E5%A5%96%E7%B3%BB%E7%BB%9F.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://bugstack.cn/md/project/im/2020-03-04-%E3%80%8ANetty+JavaFx%E5%AE%9E%E6%88%98%EF%BC%9A%E4%BB%BF%E6%A1%8C%E9%9D%A2%E7%89%88%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E3%80%8B.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://bugstack.cn/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"平均一个课程也就10来块！！！—— 公众号【bugstack】回复【星球】优惠加入",-1),G=d('<p><strong>说到这</strong>，肯定有小伙伴已经刺激中带着疑虑🤔：”这下终于有号主带着我卷 ChatGPT服务项目开发了，那这个项目到底要开发成啥样呢？“ 接下来，小傅哥就给大家讲讲这个项目的目标和架构。</p><h2 id="二、项目的架构" tabindex="-1"><a class="header-anchor" href="#二、项目的架构" aria-hidden="true">#</a> 二、<code>项目</code>的架构</h2><ul><li><strong>目标</strong>：此项目以围绕类似 ChatGPT 生成式服务，构建微服务应用架构体系组件。包括；用户鉴权、公众号、多方支付、企业微信等对接方式，满足不同诉求的使用。并以模块化设计，积木式构建应用，让不同的场景诉求都可以配置化对接。</li><li><strong>功能</strong>：更直白一些就是通过这套微服务体系，可以构建出；<code>网页版ChatGPT对接</code>、<code>用户鉴权校验接口</code>、<code>关注公众号解锁</code>、<code>支付付费购买</code>、<code>公众号自动回复</code>、<code>企业微信聊天对接</code>、<code>知识星球对接</code>等。</li></ul><p>那么这套系统是以<code>视频</code>和<code>小册</code>的教程为导向，教会大家开发这些各个模块的技术组件和技术服务。同时这里的组件和服务，都是微服务实现，可以被替换成其他任何一个你所需的内容。比如不是对接 ChatGPT 而是你想对接一个其他的服务也是可以的。</p><p><strong>整个系统架构如下</strong>：</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-230422-01.png?raw=true" width="750px"></div><p>如图；以用户请求为入口，通过 <code>Nginx SSL 443</code> 校验转发到对应的服务，并做相关的鉴权和服务控制，并完成最终的 token 授权使用。整套微服务包括系统；<code>chatgpt-api-sdk</code>、<code>chatgpt-auth</code>、<code>chatgpt-wx</code>、<code>chatgpt-pay</code>、<code>chatgpt-zsxq</code>、<code>chatgpt-admin</code>、<code>chatgpt-web</code> 服务。</p><h2 id="三、开发的计划" tabindex="-1"><a class="header-anchor" href="#三、开发的计划" aria-hidden="true">#</a> 三、<code>开发</code>的计划</h2><p><strong>死鬼</strong>，5.1 假期即将来临，又到了疯狂的带着星球伙伴卷代码的时候。所以从 5.1 放假开始，小傅哥会逐步更新课程内容，粗略计划；</p><ul><li>OpenAI 接口服务 + Nginx SSL 配置</li><li>OpenAI SDK</li><li>公众号回复应答</li><li>企业微信对接，开发微信机器人</li><li>支付宝交易对接</li><li>服务整合等</li></ul><p>每一个模块和章节都会有对应的视频和小册，每一个模块也都可以独立进行学习和使用。这样小伙伴即使想部分学习积累自己的技术或者用到实际的项目都是非常容易的。并且因为有这样的完整的资料和教程问题服务，粉丝伙伴都是可以学习会的！</p><h2 id="四、你能得到啥" tabindex="-1"><a class="header-anchor" href="#四、你能得到啥" aria-hidden="true">#</a> 四、<code>你能</code>得到啥</h2><p>因为此项目是以教程为导向，所以会以从<code>设计思考</code>、<code>工程搭建</code>、<code>仓库使用</code>、<code>代码提交</code>、<code>模块开发</code>、<code>服务调试</code>、<code>打包构建</code>、<code>容器部署</code>等步骤进行推进。在这个过程中会视频和小册的方式进行讲解。</p><p>那么你可以在这套项目学习中掌握到；</p><ol><li>掌握一整套标准化，工程架构设计、项目搭建配置、服务打包上线的流程；—— 可能很多新人或者工作中的，完整搭建项目的经验都是缺失的。</li><li>学习微服务架构设计思想和相关的编码经验，以及如何落地相关的技术项目；—— 有思想有高度的项目，才能锻炼编码能力，提升编程技术。</li><li>积累 <code>Nginx SSL 443 多模型配置和鉴权使用</code>、<code>公众号开发</code>、<code>企业微信对接</code>、<code>支付包对接交易流程</code>等；—— 这都是锻炼的真实场景经验，每一项技能的积累都是非常宝贵的经验。</li><li>简历服务；对，每开发一个项目，小傅哥都会给这个项目编写简历介绍、简历优化、面试题目汇总，让学习的伙伴享受一条龙服务🐲。</li></ol><p><strong>说直白喽，没有这套项目，你可能都不知道 Nginx 怎么配置的 SSL，镜像怎么打包和发布、公众号怎么开发、微信机器人怎么对接的、微服务怎么架构的、DDD如何设计的！所以，上车吧！全是干货！</strong></p><h2 id="五、早到享优惠" tabindex="-1"><a class="header-anchor" href="#五、早到享优惠" aria-hidden="true">#</a> 五、<code>早到</code>享优惠</h2><p>小傅哥致力于把星球【<code>码农会锁</code>】开发成<strong>最具互联网应用级实战项目开发学习社群</strong>，让加入的伙伴都能学习到<code>干刺啦</code>的硬核干货项目，学习后即可<code>提升编程思维</code>也能<code>锻炼编码能力</code>。</p><p>对于星球的运营，我没有任何OKR压力，所以我可以以100%的纯粹的<code>技术热情</code>和<code>技术追求</code>进行建设和维护。用我多年从事互联网行业里丰富的架构经验和编程能力，开发出每一个高质量的技术项目。—— 做一件喜欢的事，并把一件事做的长久和有价值，让用户值得信赖和认可，是我最大的追求。</p><hr><p>好啦，想加入学习的伙伴，记得早些下手。</p><div align="center"><img src="https://bugstack.cn/images/article/zsxq/zsxq-youhuiquan.png?raw=true" width="400px"></div>',22);function T(y,S){const o=r("ExternalLinkIcon");return n(),l("div",null,[s,e("p",null,[t("作者：小傅哥 "),h,t("博客："),e("a",p,[t("https://bugstack.cn"),c(o)])]),g,u,_,e("p",null,[t("不过也不能说各类的付费 ChatGPT 就都是用提前了解到的资料和认知割羊毛，要是没有这些资料、服务、工具、软件，可能大部分外行，也没有机会了解和使用到 ChatGPT 这样的工具。当然也有像小傅哥一样的伙伴，自己花钱购买API Keys和服务器，部署了一套免费的 ChatGPT 服务 - "),e("a",b,[t("itedus.cn"),c(o)]),t(" 让大家体验。就当为科技做点贡献💐。")]),E,e("ul",null,[m,e("li",null,[e("a",B,[t("《ChatGPT AI 问答助手》"),c(o)])]),e("li",null,[e("a",f,[t("《API网关 - 中间件设计和实践》"),c(o)])]),e("li",null,[e("a",k,[t("《SpringBoot 中间件设计和开发》"),c(o)])]),e("li",null,[e("a",x,[t("《Lottery 抽奖系统 - 基于领域驱动设计的四层架构实践》"),c(o)])]),e("li",null,[e("a",A,[t("《Netty+JavaFx实战：仿桌面版微信聊天》"),c(o)])])]),e("p",null,[t("技术小册、手撕源码、插件开发等更多内容："),e("a",C,[t("https://bugstack.cn/md/zsxq/introduce.html"),c(o)]),t(" - 加入小傅哥的知识星球，这些内容都可以学习到。"),P]),G])}const v=a(i,[["render",T],["__file","chatgpt.html.vue"]]);export{v as default};
