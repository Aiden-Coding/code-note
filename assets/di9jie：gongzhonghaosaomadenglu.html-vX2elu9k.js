import{_ as c,r as o,o as r,c as s,a as t,b as e,d as n,e as l}from"./app-3RcBQnkC.js";const h={},i=t("h1",{id:"《chatgpt-微服务应用体系构建》-chatgpt-web-第9节-公众号扫码登录",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#《chatgpt-微服务应用体系构建》-chatgpt-web-第9节-公众号扫码登录","aria-hidden":"true"},"#"),e(" 《ChatGPT 微服务应用体系构建》 - chatgpt-web 第9节：公众号扫码登录")],-1),d=t("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},g=t("blockquote",null,[t("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),_=t("li",null,[t("strong",null,"本章难度"),e("：★★★☆☆")],-1),u=t("li",null,[t("strong",null,"本章重点"),e("：跨域处理，流式应答接口 React 对接和数据渐显处理。这里会用到 fetch 调用接口，ReadableStream 处理流式数据。")],-1),b=t("strong",null,"课程视频",-1),m={href:"https://t.zsxq.com/11YKNcb5w",target:"_blank",rel:"noopener noreferrer"},f=l('<h2 id="一、本章诉求" tabindex="-1"><a class="header-anchor" href="#一、本章诉求" aria-hidden="true">#</a> 一、本章诉求</h2><p>当你自身的角色发生改变的时候，从使用产品的用户视角到提供产品服务的老板视角，你会有不同的感受。尤其是你提供一款产品的时候，如果没有登录，随便的用，用完就走。其实很难沉淀下来用户，那么做的产品最终也难有价值体现。</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-web-09-01.png?raw=true" width="650px"></div><p>所以本章我们以微信公众号扫码输入验证码为例，做一个登录操作，把用户沉淀到自己所选择的平台中。按照你个人的诉求，可以是手机号注册、邮箱注册、Github注册等等。</p><h2 id="二、目标效果" tabindex="-1"><a class="header-anchor" href="#二、目标效果" aria-hidden="true">#</a> 二、目标效果</h2><p>本章所体现的核心内容为开发一个登录页面，并在对话信息中的必要位置进行权限拦截校验。之后对接 chatgpt-data 所提供的登录授权接口。</p><div align="center"><img src="https://bugstack.cn/images/article/project/chatgpt/chatgpt-web-09-02.png?raw=true" width="650px"></div><ul><li>那么这里小傅哥是把授权的登录操作与公众号结合，首先通过公众号进行验证码获取，之后填写登录就可以使用服务了。</li></ul>',8);function x(k,w){const a=o("ExternalLinkIcon");return r(),s("div",null,[i,t("p",null,[e("作者：小傅哥 "),d,e("博客："),t("a",p,[e("https://bugstack.cn"),n(a)])]),g,t("ul",null,[_,u,t("li",null,[b,e("："),t("a",m,[e("https://t.zsxq.com/11YKNcb5w"),n(a)])])]),f])}const N=c(h,[["render",x],["__file","di9jie：gongzhonghaosaomadenglu.html.vue"]]);export{N as default};
