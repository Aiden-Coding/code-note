import{_ as o,r as n,o as s,c as l,a as e,b as t,d as a,e as c}from"./app-3RcBQnkC.js";const i={},h=e("h1",{id:"【付费】第13章-通过注解配置执行sql语句",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#【付费】第13章-通过注解配置执行sql语句","aria-hidden":"true"},"#"),t(" 【付费】第13章：通过注解配置执行SQL语句")],-1),p=e("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),_={href:"https://t.zsxq.com/Ja27ujq",target:"_blank",rel:"noopener noreferrer"},L=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),b=e("h2",{id:"零、优秀作业",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#零、优秀作业","aria-hidden":"true"},"#"),t(" 零、优秀作业")],-1),f={href:"https://t.zsxq.com/08lyBSRqq",target:"_blank",rel:"noopener noreferrer"},g={href:"https://t.zsxq.com/09QD8QCKL",target:"_blank",rel:"noopener noreferrer"},m={href:"https://t.zsxq.com/11hp9XMGK",target:"_blank",rel:"noopener noreferrer"},x=c('<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p><code>谁提出问题，就要解决问题吗？</code></p><p>似乎从什么时间开发，作为公司里编码主力的码农，在一些会上并不爱发言了。即使是领导有一些鼓励的话术，激励的行为，也很难让码农动嘴。</p><p>可能领导也都觉得可能就是码农不爱说话，其实不爱说话是一方面，但还有另外一方面是有些领导对于码农提出的问题，给出的回复往往是：“你提出这个问题，你就要给出这个问题的解决办法！”</p><p>那咋弄，肯定愿意发言的人越来越少了，即使发现现在有了哪些不合理的地方，也不愿意发言。毕竟很大一部分都是没有什么管理实权在手的编码码农，根本没有解决这个问题的手段，但发现问题提出来又可能让自己解决问题，解决不了问题可能就解决提出问题的人。这多吓人，想想还是算了，消停的做个码农不挺好。</p><p>所以不同的岗位要执行各自的职责，无论领导、产品、研发、测试、业务，都应该环环相扣，各司其职，不过分包装结果，正确看待问题。才可能做出像苹果那样的优秀产品，而不是那么割裂的独立功能。</p><h2 id="二、目标" tabindex="-1"><a class="header-anchor" href="#二、目标" aria-hidden="true">#</a> 二、目标</h2><p>在日常业务需求开发中，研发人员使用 Mybatis 框架的时候，除了可以基于 Mapper XML 方式配置执行 SQL 信息以外，也可以通过注解的方式在 DAO 接口方法上配置执行 SQL 语句。</p><p>大部分时候一些研发规范中，都比较倾向于将 SQL 语句维护在 XML 中，因为这样可以进行统一管理，也能在发包后需要做一些修改 SQL 配置进行测试和验证时，基于 XML 配置变更 SQL 语句。如果是基于方法注解那么就需要重新打包，上传部分文件或者全部文件，才能进行这样的验证了。</p><p>不过在一些简单的场景下，使用注解直接维护 SQL 信息在对应的 DAO 接口上，还是非常方便的。那么本章节我们就基于前面所开发完成的框架结构下，扩展 ORM 框架的功能，实现配置方法注解的方式处理增删改查操作。如图 13-1 所示 注解配置执行 SQL 语句</p><p><img src="https://bugstack.cn/images/article/spring/mybatis-220614-01.png" alt="图 13-1 注解配置执行 SQL 语句"></p><ul><li>对应研发人员来说，日常使用 Mybatis 框架，对于 XML 和注解配置也都是可以共用的，主要基于配置文件 mappers 中，引入的是哪类资源。在之前本章节之前我们只实现了 mapper 中是 <code>resource=&quot;mapper/User_Mapper.xml&quot;</code> 的配置类型，那么本章节因为需要支持注解配置 SQL 语句，所以这里还需要支持 <code>class=&quot;cn.bugstack.mybatis.test.dao.IUserDao&quot;</code> 这样配置到 DAO 接口类上的方式，解析 SQL 语句。</li><li>读者在阅读到这里的时候，可以思考下 Mybatis 中两种不同的使用方式有哪些共性特征。其实主要在于无论使用哪种方式，都需要基于这些提供的信息，获取出；SQL语句、入参、出参等，并把这些信息包装成一个整体的映射语句，串联整个流程。</li></ul>',12);function Q(S,q){const r=n("ExternalLinkIcon");return s(),l("div",null,[h,e("p",null,[t("作者：小傅哥 "),p,t("博客："),e("a",d,[t("https://bugstack.cn"),a(r)]),u,t("星球："),e("a",_,[t("https://t.zsxq.com/Ja27ujq"),a(r)])]),L,b,e("ul",null,[e("li",null,[e("a",f,[t("做了以下修改，生成了4个注解，在读取核心配置文件的时候读到resource的时候继续解析Mapper文件中的内容 @Liuliuliu"),a(r)])]),e("li",null,[e("a",g,[t("通过注解配置执行SQL语句 @liuc"),a(r)])]),e("li",null,[e("a",m,[t("只要对于流程熟悉，就能很容易知道每一步做什么，在扩展的时候也清楚上下文如何对接。发现越到后面章节，越有种柳暗花明的感觉。@AD钙奶"),a(r)])])]),x])}const z=o(i,[["render",Q],["__file","2022-06-14-di13zhang：tongguozhujiepeizhizhixingSQLyuju.html.vue"]]);export{z as default};
