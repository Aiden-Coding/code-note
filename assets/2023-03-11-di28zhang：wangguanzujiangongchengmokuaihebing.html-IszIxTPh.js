import{_ as i,r as s,o,c as r,a as e,b as a,d as t,e as c}from"./app-3RcBQnkC.js";const l={},h=e("h1",{id:"《api网关》第28章-网关组件工程模块合并",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《api网关》第28章-网关组件工程模块合并","aria-hidden":"true"},"#"),a(" 《API网关》第28章：网关组件工程模块合并")],-1),d=e("br",null,null,-1),g={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},p=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),_=e("li",null,[e("strong",null,"本章难度"),a("：★★☆☆☆")],-1),u=e("li",null,[e("strong",null,"本章重点"),a("：通过合并网关六个模块【admin、center、core、assist、engine、sdk】到统一服务下管理，完成API网关的多模块组装，为后续功能迭代做铺垫。")],-1),m=e("strong",null,"课程视频",-1),b={href:"https://t.zsxq.com/0bhopMJJc",target:"_blank",rel:"noopener noreferrer"},k=c('<h2 id="一、学习指引" tabindex="-1"><a class="header-anchor" href="#一、学习指引" aria-hidden="true">#</a> 一、学习指引</h2><p>截止到本章整个API网关的核心流程就已经全部开发完成了，并可以完成基本测试调用。从本章开始将是对网关功能的细节迭代，因为这些内容会涉及到对网关六个模块【admin、center、core、assist、engine、sdk】的开发。所以到本章开始把整个工程合并，后续的章节将按照创建分支的方式进行开发。</p><p>前面的教学方式为模块的渐进迭代，主要为了帮助小白在学习过程中可以逐个模块的验证，不用切换分支，更方便理解和学习。那么在有了前面的学习基础之上，后续再通过拉分支迭代开发就更容易理解了。分支迭代也是各大互联网公司最为标准的需求迭代方式，所以读者也是有必要学习、理解和掌握的。</p><h2 id="二、模块服务" tabindex="-1"><a class="header-anchor" href="#二、模块服务" aria-hidden="true">#</a> 二、模块服务</h2><p>到本章大家可以回想下，我们一共开发了几个微服务模块工程，来支持网关的整体服务。其实目前网关的这六个模块工程，主要分为3个大的部分在运行。如图所示；</p><div align="center"><img src="https://bugstack.cn/images/article/assembly/api-gateway/api-gateway-28-01.png?raw=true" width="800px"></div><ul><li>第一组：网关算力，由 api-gateway-core、api-gateway-assit、api-gateway-engine 组成，core 提供算力、assist 处理封装、engine 镜像打包和启动。</li><li>第二组：管理中心，由 api-gateway-admin、api-gateway-center 组成，admin 后台运营、center 注册中心。</li><li>第三组：接口上报，由 api-gateway-sdk 提供，它被应用系统引入，在应用系统中以注解的方式摘取应用RPC接口信息并向注册中心发送。</li></ul><p>那么现在，为了后续可以更好的迭代和维护，我们把几组系统进行模块的工程合并。</p>',8);function f(w,x){const n=s("ExternalLinkIcon");return o(),r("div",null,[h,e("p",null,[a("作者：小傅哥 "),d,a("博客："),e("a",g,[a("https://bugstack.cn"),t(n)])]),p,e("ul",null,[_,u,e("li",null,[m,a("："),e("a",b,[a("https://t.zsxq.com/0bhopMJJc"),t(n)])])]),k])}const z=i(l,[["render",f],["__file","2023-03-11-di28zhang：wangguanzujiangongchengmokuaihebing.html.vue"]]);export{z as default};
