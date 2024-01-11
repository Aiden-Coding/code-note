import{_ as e,r as i,o as t,c as l,a as n,b as a,d as c,e as r}from"./app-3RcBQnkC.js";const d={},o=n("h1",{id:"_3-7-服务端控制台搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-7-服务端控制台搭建","aria-hidden":"true"},"#"),a(" 3.7：服务端控制台搭建")],-1),u=n("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=r(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>到本章节我们通信的基本功能已经完成，那么接下来我们需要对通信服务做一个管理，例如 Netty 服务的运行状态、用户列表和在线状态以及各种纬度的通信信息查询等等。这些都是服务端控制台的用途，我们可以使用网页版的后台来进行搭建我们的控制台。</p><p>接下来，我们就开发完善这一个后台的基础功能，有了这样的基础的服务端控制台，小伙伴就可以在里面进行不断的扩展控制功能。</p><h2 id="二、工程结构" tabindex="-1"><a class="header-anchor" href="#二、工程结构" aria-hidden="true">#</a> 二、工程结构</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>naive<span class="token operator">-</span>chat<span class="token operator">-</span>server
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>naive<span class="token punctuation">.</span>chat
    │   │       ├── application
    │   │       ├── domain
    │   │       ├── infrastructure
    │   │       ├── interfaces
    │   │       └── <span class="token class-name">Application</span><span class="token punctuation">.</span>java
    │   ├── resources
    │   │   ├── mybatis
    │   │   ├── spring
    │   │   └── application<span class="token punctuation">.</span>yml
    │   └── webapp
    │       ├── chat
    │       ├── res
    │       ├── index<span class="token punctuation">.</span>html
    │       └── res_layui<span class="token punctuation">.</span>html
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里我们选用 Layui 作为我们服务端的后台页面，因为他简单、干净、整洁，并有多种的集成方式。</li><li>在 webapp 层是我们的后台页面结构，有如下的内容；</li></ul>`,7);function m(b,h){const s=i("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[a("作者：小傅哥 "),u,a("博客："),n("a",p,[a("https://bugstack.cn"),c(s)])]),v])}const _=e(d,[["render",m],["__file","3.7：fuwuduankongzhitaidajian.html.vue"]]);export{_ as default};
