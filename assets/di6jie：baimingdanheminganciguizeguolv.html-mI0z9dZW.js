import{_ as o,r,o as l,c,a as e,b as t,d as a,e as i}from"./app-3RcBQnkC.js";const s={},h=e("h1",{id:"《chatgpt-微服务应用体系构建》-chatgpt-api-第6节-白名单和敏感词规则过滤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《chatgpt-微服务应用体系构建》-chatgpt-api-第6节-白名单和敏感词规则过滤","aria-hidden":"true"},"#"),t(" 《ChatGPT 微服务应用体系构建》 - chatgpt-api 第6节：白名单和敏感词规则过滤")],-1),p=e("br",null,null,-1),_={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},d=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),u=e("li",null,[e("strong",null,"本章难度"),t("：★★★☆☆")],-1),g=e("li",null,[e("strong",null,"本章重点"),t("：通过策略模式 + 工厂服务，实现规则过滤功能。并将这样的功能结合到会话模型中。通过这样的设计，解耦核心流程与旁路分支。—— 重点：你必须要理解，规则是一个随着业务发展频繁变动的流程，但核心的代码并不会总调整。所以我们需要将这两部分分离。")],-1),b=e("strong",null,"课程视频",-1),f={href:"https://t.zsxq.com/12o12nG8i",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"版权说明",-1),k={href:"http://www.gov.cn/zhengce/2020-12/26/content_5573623.htm",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),v={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},q=i('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="一、本章诉求" tabindex="-1"><a class="header-anchor" href="#一、本章诉求" aria-hidden="true">#</a> 一、本章诉求</h2><p>生成式服务的调用和响应，只能算是一个半成品，还缺少必备的控制和管理。比如；你部署服务后，外部的用户调用时是要做频次限制的，此外还要做非常重要的敏感词过滤。</p><p>所以本章节我们设计一个规则过滤模型教会大家来开发这样的功能，此外本章中的规则是做了2个实现，一个频次、一个敏感词。小傅哥建议你学习后，可以再添加一个频率限制。这样做完后，你就彻底学会这套规则的模型设计和实现了。</p><h2 id="二、流程设计" tabindex="-1"><a class="header-anchor" href="#二、流程设计" aria-hidden="true">#</a> 二、流程设计</h2><p>频次、频率、白名单、敏感词等，都是用于支撑核心业务之外辅助流程，这些流程都是比较容易随着业务的变动而发生变化。所以我们要把这类东西设计在核心流程之外，而不能直接把规则的代码与核心业务的代码写在一块。因为区分不出边界的代码，会让工程的腐化程度不断加剧。</p><p>所以这里小傅哥带着你设计一个规则引擎，来扩展这些快内容的实现；</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-api-06-01.png?raw=true" width="750px"></div><ul><li>在前面章节中，我们把应答的处理设计为一个独立的 openai 领域模型结构，并对应答流程设计了接口和抽象类。</li><li>那么现在我们就可以在 openai 领域模型中设计规则模型的实现和调用，来处理流程中的规则内容处理。</li></ul>',9);function w(z,G){const n=r("ExternalLinkIcon");return l(),c("div",null,[h,e("p",null,[t("作者：小傅哥 "),p,t("博客："),e("a",_,[t("https://bugstack.cn"),a(n)])]),d,e("ul",null,[u,g,e("li",null,[b,t("："),e("a",f,[t("https://t.zsxq.com/12o12nG8i"),a(n)])])]),e("p",null,[m,t("：©本项目与星球签约合作，受"),e("a",k,[t("《中华人民共和国著作权法实施条例》"),a(n)]),t(" 版权法保护，禁止任何理由和任何方式公开(public)源码、资料、视频等内容到Github、Gitee等，违反可追究进一步的法律行动。")]),e("p",null,[t("作者：小傅哥 "),x,t("博客："),e("a",v,[t("https://bugstack.cn"),a(n)])]),q])}const V=o(s,[["render",w],["__file","di6jie：baimingdanheminganciguizeguolv.html.vue"]]);export{V as default};
