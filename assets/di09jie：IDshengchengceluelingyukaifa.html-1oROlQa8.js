import{_ as o,r as l,o as a,c as i,a as e,b as r,d as n,e as s}from"./app-3RcBQnkC.js";const h={},c=e("h1",{id:"第09节-id生成策略领域开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第09节-id生成策略领域开发","aria-hidden":"true"},"#"),r(" 第09节：ID生成策略领域开发")],-1),_=e("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),f={href:"https://gitcode.net/KnowledgePlanet/Lottery/-/tree/210920_xfg_IdGenerator",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"描述：使用雪花算法、阿帕奇工具包 RandomStringUtils、日期拼接，三种方式生成ID，分别用在订单号、策略ID、活动号的生成上。",-1),I=e("h2",{id:"零、优秀作业",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#零、优秀作业","aria-hidden":"true"},"#"),r(" 零、优秀作业")],-1),m={href:"https://t.zsxq.com/06AmIAUZr",target:"_blank",rel:"noopener noreferrer"},g={href:"https://t.zsxq.com/06BUvZ7yB",target:"_blank",rel:"noopener noreferrer"},D={href:"https://t.zsxq.com/06m2Z7MFI",target:"_blank",rel:"noopener noreferrer"},b={href:"https://t.zsxq.com/06MbYJmeq",target:"_blank",rel:"noopener noreferrer"},k={href:"https://t.zsxq.com/06MfQzVrJ",target:"_blank",rel:"noopener noreferrer"},x={href:"https://t.zsxq.com/06m6Imimy",target:"_blank",rel:"noopener noreferrer"},q={href:"https://t.zsxq.com/104EiLW10",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.zsxq.com/11wHIwiK5",target:"_blank",rel:"noopener noreferrer"},B=s('<h2 id="一、开发日志" tabindex="-1"><a class="header-anchor" href="#一、开发日志" aria-hidden="true">#</a> 一、开发日志</h2><ul><li>【说明】从本章节开始，我们会陆续的引入一些基础内容的搭建，包括本章节关于ID的生成、以及后续章节需要引入分库分表、vo2dto方法、Redis等，这些会支撑我们继续开发业务领域中一些需要用到的订单号、活动号生成以及个人用户参与到的抽奖信息落库。</li><li>使用策略模式把三种生成ID的算法进行统一包装，由调用方决定使用哪种生成ID的策略。<em>策略模式属于行为模式的一种，一个类的行为或算法可以在运行时进行更改</em></li><li>雪花算法本章节使用的是工具包 hutool 包装好的工具类，一般在实际使用雪花算法时需要做一些优化处理，比如支持时间回拨、支持手工插入、简短生成长度、提升生成速度等。</li><li>而日期拼接和随机数工具包生成方式，都需要自己保证唯一性，一般使用此方式生成的ID，都用在单表中，本身可以在数据库配置唯一ID。<em>那为什么不用自增ID，因为自增ID通常容易被外界知晓你的运营数据，以及后续需要做数据迁移到分库分表中都会有些麻烦</em></li></ul><h2 id="二、支撑领域" tabindex="-1"><a class="header-anchor" href="#二、支撑领域" aria-hidden="true">#</a> 二、支撑领域</h2><p>在 domain 领域包下新增支撑领域，ID 的生成服务就放到这个领域下实现。</p><p>关于 ID 的生成因为有三种不同 ID 用于在不同的场景下；</p><ul><li>订单号：唯一、大量、订单创建时使用、分库分表</li><li>活动号：唯一、少量、活动创建时使用、单库单表</li><li>策略号：唯一、少量、活动创建时使用、单库单表</li></ul>',6);function v(y,L){const t=l("ExternalLinkIcon");return a(),i("div",null,[c,e("p",null,[r("作者：小傅哥 "),_,r("博客："),e("a",d,[r("https://bugstack.cn"),n(t)])]),u,e("ul",null,[e("li",null,[r("分支："),e("a",f,[r("210920_xfg_IdGenerator"),n(t)])]),p]),I,e("ul",null,[e("li",null,[e("a",m,[r("ID生成策略领域开发 @一点江南"),n(t)])]),e("li",null,[e("a",g,[r("ID生成策略领域开发 @BerserkD"),n(t)])]),e("li",null,[e("a",D,[r("ID生成领域 @Chin"),n(t)])]),e("li",null,[e("a",b,[r("策略模式实现ID生成策略领域开发 @Geroge Liu"),n(t)])]),e("li",null,[e("a",k,[r("ID生成策略领域开发，包括雪花算法、日期拼接、随机数生成ID， @liuc"),n(t)])]),e("li",null,[e("a",x,[r("ID生成策略使用策略模式 @Gourdpa"),n(t)])]),e("li",null,[e("a",q,[r("重点是活动状态变更，使用了状态模式，在抽象类中定义了七种状态 @素质男孩"),n(t)])]),e("li",null,[e("a",z,[r("第7章~第9章，学习汇总 @CCAT"),n(t)])])]),B])}const C=o(h,[["render",v],["__file","di09jie：IDshengchengceluelingyukaifa.html.vue"]]);export{C as default};
