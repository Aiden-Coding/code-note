import{_ as a,r as o,o as r,c as s,a as e,b as t,d as c,f as i}from"./app-3RcBQnkC.js";const d={},l=e("h1",{id:"第04节-进入开发阶段",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第04节-进入开发阶段","aria-hidden":"true"},"#"),t(" 第04节：进入开发阶段")],-1),_=e("br",null,null,-1),h={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),p=e("p",null,"当研发系统设计评审完成以后，接下来就会进入正式的研发阶段了。这个我们按照一个完整的新系统开发过程中，需要的做的事情为准，看看都需要做哪些事情。",-1),f=e("h2",{id:"系统搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统搭建","aria-hidden":"true"},"#"),t(" 系统搭建")],-1),m=e("p",null,"通常我们会按照一个系统需要服务建设的复杂度来选择搭建的框架，比如：单体架构、分布式架构、分库分表架构、分层架构等，按照不同的体量进行选择。如果是较大型的系统开发则会把不同的职责拆分为独立的系统进行开发，包括：基础层、业务层、网关层、任务层、异步层，基础层处理数据库、Redis、ES的使用以及提供原子接口。业务层用于包装业务、网关提供Http接口、任务层处理分布式任务、异步层用于接收MQ消息。",-1),b=e("h2",{id:"数据服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据服务","aria-hidden":"true"},"#"),t(" 数据服务")],-1),k=e("p",null,"一般互联网中的系统大部分都是使用 MySql 作为数据库服务使用，因为它是免费的，如果数聚力较大还可以使用分库分表策略进行设计数据库。如果分库分表那么散落在各个库表里的数据，就需要基于binlog 把数据使用 otter 工具同步到 ES 中，便于汇总查询。",-1);function x(j,g){const n=o("ExternalLinkIcon");return r(),s("div",null,[l,e("p",null,[t("作者：小傅哥 "),_,t("博客："),e("a",h,[t("https://bugstack.cn"),c(n)])]),u,p,f,m,b,k,i(" ![](/images/article/project/lottery/Part-1/1-04.png) ")])}const N=a(d,[["render",x],["__file","di04jie：jinrukaifajieduan.html.vue"]]);export{N as default};
