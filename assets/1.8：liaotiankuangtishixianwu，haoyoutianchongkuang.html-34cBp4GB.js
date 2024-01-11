import{_ as t,r as o,o as i,c as r,a as e,b as a,d as c,f as l,e as s}from"./app-3RcBQnkC.js";const h={},_=e("h1",{id:"_1-8-聊天框体实现五-好友填充框",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-8-聊天框体实现五-好友填充框","aria-hidden":"true"},"#"),a(" 1.8：聊天框体实现五(好友填充框)")],-1),d=e("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},p=s('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>这一章节里我们需要实现的是将好友栏中四个内容；“新的朋友”、“公众号”、“群组”、“好友”，添加完善相应的功能。如下；</p><ul><li>在“新的朋友”里添加好友搜索和添加的功能。因为我们实现的 PC 端微信，是没有手机端的，所以我们需要在这里添加好友搜索功能。如果你开发的是企业聊天软件，那么这里的好友就是你的企业组织关系。</li><li>在“公众号”里添加一个公众号的展示。因为这部分不是我们主要实现的功能，所以只做一个展示即可。</li><li>剩下两个“群组”、“好友”，目前我只做一个 发送消息 的按钮。像是群组中好友展示以及个人信息展示都可以完善的，但我们这里尽可能将最核心的功能代码展示给大家。</li></ul><p>那么，接下来我们就开始从设计到编码来实现这部分功能。</p><h2 id="二、框体分析" tabindex="-1"><a class="header-anchor" href="#二、框体分析" aria-hidden="true">#</a> 二、框体分析</h2>',6),f=e("ul",null,[e("li",null,"在这部分我们需要实现右侧的四个面板内容的填充，相对来说逻辑加多是第一个好友的搜索和添加。另外三个主要做简单展示和跳转。"),e("li",null,"除了开发 UI 界面的展示，还需要增加一部分内部的事件操作，当点击 发送消息 时候，需要跳转到聊天页，并将对话好友填充到对话栏。")],-1);function k(m,g){const n=o("ExternalLinkIcon");return i(),r("div",null,[_,e("p",null,[a("作者：小傅哥 "),d,a("博客："),e("a",u,[a("https://bugstack.cn"),c(n)])]),p,l(" ![](/images/article/project/im/project-im-1.8-01.png) "),f])}const b=t(h,[["render",k],["__file","1.8：liaotiankuangtishixianwu，haoyoutianchongkuang.html.vue"]]);export{b as default};
