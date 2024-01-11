import{_ as a,r as o,o as i,c as s,a as e,b as t,d as l,f as r}from"./app-3RcBQnkC.js";const c={},_=e("h1",{id:"_1-7-聊天框体实现四-好友栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-7-聊天框体实现四-好友栏","aria-hidden":"true"},"#"),t(" 1.7：聊天框体实现四(好友栏)")],-1),h=e("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),p=e("h2",{id:"一、前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、前言","aria-hidden":"true"},"#"),t(" 一、前言")],-1),f=e("p",null,"截至到本章节我们将聊天框体中的主页面 UI 内容实现完成，可以展示对话列表、选中模拟发送消息、删除对话框等功能。那么接下来我们将开发 好友 页的 UI，目前这一部分还是一个块空白的白板，我们需要在里面首先开发好友列表的功能。大家都经常使用 PC 端的微信，可以知道在好友栏里是分了几段内容的，其中包含；新的朋友、公众号、群组和最下面的好友。那么这样的 UI 结构你是否有所思考该如何开发吗？可以先主动的思考，每个人的逻辑出发点不一样，你可能会创造出更好的方式。",-1),m=e("h2",{id:"二、框体分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、框体分析","aria-hidden":"true"},"#"),t(" 二、框体分析")],-1),x=e("p",null,"接下来我同样将 UI 结构拆分，这有点像产品经理给的原型图，如下；",-1),k=e("ul",null,[e("li",null,"最上面的搜索框这部分内容不变，和前面的一样。我们目前使用的方式是 fxml 设计，例如这部分是通用功能，可以抽取出来放到代码中，设计成一个组件元素类。"),e("li",null,"经过我们的分析，在使用 JavaFx 组件开发为基础下，这部分是一种嵌套 ListView，也就是最底层的面板是一个 ListView，好友和群组有各是一个 ListView，这样处理后我们会很方便的进行数据填充。"),e("li",null,"另外这样的结构主要有利于在我们程序运行过程中，如果你添加了好友，那么我们需要将好友信息刷新到好友栏中，而在数据填充的时候，为了更加便捷高效，所以我们设计了嵌套的 ListView。如果还不是特别理解，可以从后续的代码中获得答案。")],-1);function b(V,g){const n=o("ExternalLinkIcon");return i(),s("div",null,[_,e("p",null,[t("作者：小傅哥 "),h,t("博客："),e("a",d,[t("https://bugstack.cn"),l(n)])]),u,p,f,m,x,r(" ![](/images/article/project/im/project-im-1.7-01.png) "),k])}const L=a(c,[["render",b],["__file","1.7：liaotiankuangtishixiansi，haoyoulan.html.vue"]]);export{L as default};
