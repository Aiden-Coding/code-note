import{_ as o,r as i,o as r,c,a as t,b as e,d as s,e as n}from"./app-3RcBQnkC.js";const l={},h=t("h1",{id:"敲了几万行源码后-我给mybatis画了张-全地图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#敲了几万行源码后-我给mybatis画了张-全地图","aria-hidden":"true"},"#"),e(" 敲了几万行源码后，我给Mybatis画了张“全地图”")],-1),d=t("br",null,null,-1),p={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},u=t("blockquote",null,[t("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),b=t("h2",{id:"一、说说-产-后感受",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一、说说-产-后感受","aria-hidden":"true"},"#"),e(" 一、说说：“产”后感受")],-1),g=t("p",null,[t("code",null,"🤔有人跟我说，手写Spring难，手写Mybatis易？")],-1),_=t("div",{align:"center"},[t("img",{src:"https://bugstack.cn/images/article/about/about-220616-01.jpg?raw=true",width:"180px"})],-1),B=t("strong",null,"一股神奇的力量",-1),E={href:"https://bugstack.cn/md/spring/develop-spring/2021-05-16-%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%BC%80%E7%AF%87%E4%BB%8B%E7%BB%8D%EF%BC%8C%E6%89%8B%E5%86%99Spring%E8%83%BD%E7%BB%99%E4%BD%A0%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%EF%BC%9F.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://bugstack.cn/md/spring/develop-mybatis/2022-03-20-%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%BC%80%E7%AF%87%E4%BB%8B%E7%BB%8D%EF%BC%8C%E6%89%8B%E5%86%99Mybatis%E8%83%BD%E7%BB%99%E4%BD%A0%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%EF%BC%9F.html",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"事情没那么简单",-1),M=n('<p>为什么事情没那么简单？因为如果说只是为了体现出一个 ORM 框架的核心结构和功能，<strong>7/8</strong> 个类就能实现出来。但假如是实现一个完整的串联出重要核心脉络流程的 ORM 框架，至少要在 <strong>100</strong>个类以上，才能把 Mybatis 这些功能全部串联出来。</p><p><img src="https://bugstack.cn/images/article/about/about-220616-02.png" alt=""></p><p><strong>那为什么</strong>几个类就能搞定的事要，却把开整个 Mybatis 手写一堆的代码来实现呢？</p><p>其实这里有一个非常重要的点，就是你学习源码的目的是什么，<em>是为了面试？</em> <em>为了熟悉流程？</em> <em>为了跟风？</em> 其实在小傅哥看来，这些都不是学习源码的核心目的和期待的结果。我们学习源码更多的是为了学习这些源码在<strong>面对复杂系统问题时候</strong>，如何设计工程架构，运用了什么设计原则和哪些设计模式，而这些运用到的思想在代码中又是如何落地的。</p><p>这样的东西，才是学习源码应该重视的内容，而且这也是能真的帮助研发人员<strong>提高编码思维高度</strong>的东西。所以你会看到小傅哥逐步拆解 Mybatis 核心功能模块，通过渐进式的逐步开发实现，层层展开 Mybatis 的设计和实现的神秘面纱（<code>PS：写过以后也不太神秘</code>）。</p><h2 id="二、源码-全貌地图" tabindex="-1"><a class="header-anchor" href="#二、源码-全貌地图" aria-hidden="true">#</a> 二、源码：全貌地图</h2><p>在小傅哥手写完 Mybatis 框架以后，梳理了一张全貌地图，预览整个 Mybatis 框架的执行脉络体系。有了这张打开了战争迷雾地图的指引，再学习起来 Mybatis 的技术，也就变得非常清晰了。</p><p><img src="https://bugstack.cn/images/article/spring/mybatis-220320-00.png" alt="小傅哥 Mybatis 框架源码技术全貌地图"></p>',8),f={href:"https://bugstack.cn/md/spring/develop-mybatis/2022-03-20-%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%BC%80%E7%AF%87%E4%BB%8B%E7%BB%8D%EF%BC%8C%E6%89%8B%E5%86%99Mybatis%E8%83%BD%E7%BB%99%E4%BD%A0%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%EF%BC%9F.html",target:"_blank",rel:"noopener noreferrer"},k=t("li",null,[t("em",null,"通常如果你不是支离破碎的拼凑式学习，而是成体系的建设自己的知识栈，那么你在学习后，也一定能梳理出一套关于学习过内容的技术地图。")],-1),A=n('<h2 id="三、查看-小册目录" tabindex="-1"><a class="header-anchor" href="#三、查看-小册目录" aria-hidden="true">#</a> 三、查看：小册目录</h2><p><strong>🤔要吹牛了！</strong> <code>傅哥，手写Mybatis 而已，你怎么把 Mybatis 都手写了！</code></p><p>哈哈哈，写的爽了，就顺便都给敲了，包括：解析、绑定、反射、缓存、事务，这还有注解、数据源、MetaObject 都给干了！</p><h3 id="_1-目录" tabindex="-1"><a class="header-anchor" href="#_1-目录" aria-hidden="true">#</a> 1. 目录</h3><p><img src="https://bugstack.cn/images/article/about/about-220616-03.png" alt="《手写Mybatis》小册目录：4部分18章"></p>',5),C={href:"https://bugstack.cn/",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"博客菜单中 Spring 栏目下 -> 手撸 Mybatis",-1),F=t("li",null,"说明：在18章课程中，会逐步带着读者手写出一套 Mybatis 框架，并且是一套串联所有核心流程的 Mybatis 框架，阅读学习后会对 ORM 源码有透彻清晰的了解。",-1),w=n('<h3 id="_2-源码" tabindex="-1"><a class="header-anchor" href="#_2-源码" aria-hidden="true">#</a> 2. 源码</h3><p><img src="https://bugstack.cn/images/article/about/about-220616-04.png" alt="《手写Mybatis》源码内容：渐进式迭代开发"></p><ul><li>源码：每一个章节的代码，都会在上一章节的基础上进行扩展和迭代，这样可以更加清晰的知晓，每一个章节都在添加什么功能，改动了哪些代码，新增了什么模块。这样的方式能让即使是小白读者，也可以逐步学习掌握。</li></ul><h3 id="_3-视频-b站" tabindex="-1"><a class="header-anchor" href="#_3-视频-b站" aria-hidden="true">#</a> 3. 视频(B站)</h3><p><img src="https://bugstack.cn/images/article/about/about-220616-05.png" alt="《手写Mybatis》视频课程：B站视频"></p>',5),D={href:"https://www.bilibili.com/video/BV1nY4y1B7eT",target:"_blank",rel:"noopener noreferrer"},v=t("li",null,"说明：整套源码编写内容，还会附带着视频讲解，帮助有意愿学习 Mybatis 源码的伙伴，可以快速上手并加深学习理解。",-1),q=n('<h2 id="四、加入-手写源码" tabindex="-1"><a class="header-anchor" href="#四、加入-手写源码" aria-hidden="true">#</a> 四、加入：手写源码</h2><p>全部解锁🔓此项目的学习，可以加入小傅哥的<code>知识星球：码农会锁</code>。之所以开放一部分小册的文章和少量的代码，是为了告诉读者在跟随一个什么样的有技术热情的人在学习，能得到什么样的成长。</p><p>也正因为我对技术的折腾，😄看似牛皮的能力，才能让读者放心的追求。一少部分的付费，也是为了把技术分享这条路走的更加坚定。<em>如果不是付费，那么大部分阅读的可能都是别人的潦草笔记，而不是深度的拆解分析，展示给读者来龙去脉。</em></p><p><strong>星球适合</strong>：有需要校招、面试、晋升，想提高自己的技术深度，为自己的职业生涯续期，可以长稳发展，完善自己的技术体系，奔着高级开发和架构师路线的研发伙伴。</p><p><img src="https://bugstack.cn/images/article/about/about-220605-06.png?raw=true" alt=""></p><p><img src="https://bugstack.cn/images/article/about/about-220605-07.png?raw=true" alt="留言来自加入知识星球：码农会锁，伙伴的认可"></p>',6),S=t("strong",null,"链接",-1),j={href:"https://t.zsxq.com/Ja27ujq",target:"_blank",rel:"noopener noreferrer"},V=t("li",null,[t("strong",null,"优惠"),e("：关注公众号【bugstack虫洞栈】回复【星球】可获得优惠券 - "),t("code",null,"如果优惠用尽，可以在公众号获取")],-1),O=t("li",null,[t("strong",null,"说明"),e("：加入星球后，阅读阅读星球置顶消息，里面有清晰明确的学习说明和视频介绍，以及包括PDF资料下载、加入项目仓库、简历模板等。"),t("em",null,"加入星球可以学习到更多的知识内容")],-1),z=n('<h2 id="五、总结-我的经验" tabindex="-1"><a class="header-anchor" href="#五、总结-我的经验" aria-hidden="true">#</a> 五、总结：我的经验</h2><p>其实我能知道大部分从事开发人员或者正在上学阶段的同学，其实对于源码的学习，都是非常好的提高技术的方式。但其实一大部分人都不知道对于一个源码框架该从哪下手，很多时候即使阅读源码也是感觉<code>拿绣花针搅拌一缸水</code>，没啥收获还弄的挺疲惫😫。</p><p>这是因为与平常的业务需求开发或者自己学习的案例代码相比，框架源码中运用了大量的<strong>设计原则</strong>和<strong>设计模式</strong>对系统功能进行<code>解耦</code>和<code>实现</code>，也使用了不少如<code>反射</code>、<code>代理</code>、<code>字节码</code>等相关技术。</p><p>所以如果没有大牛<code>带着你开路</code>，而是自己硬摸索，其实很难里清一套源码的全部脉络。因为人在学习的过程中，总需要一份经验的借鉴、积累和使用，所以在学习源码的过程中也是要借鉴他人的经验，丰富的自己的羽翼，而后再用这些套路去学习其他的源码内容也就变得容易了。</p>',4);function N(R,T){const a=i("ExternalLinkIcon");return r(),c("div",null,[h,t("p",null,[e("作者：小傅哥 "),d,e("博客："),t("a",p,[e("https://bugstack.cn"),s(a)])]),u,b,g,_,t("p",null,[B,e("，让我在"),t("a",E,[e("手写完 Spring 后"),s(a)]),e("，开始对 "),t("a",m,[e("Mybatis 下手"),s(a)]),e("。最开始我也觉得 Spring 那么大都写下来了，Mybatis 能有多难？但随着我开始梳理、拆解、细化，Mybatis 框架源码的架构模型后发现，"),y,e("！")]),M,t("ul",null,[t("li",null,[e("这是整个"),t("a",f,[e("《手写 Mybatis》"),s(a)]),e("的全貌地图，小傅哥会带着大家逐步实现这里面的功能模块，分章节细化各个模块的实现流程，最终让读者实现出一个丰富、全面、细致的 ORM 框架。在学习的过程中，大家也可以参考这张图来对照手写的代码以及 Mybatis 的源码，这样更加有利于对 Mybatis 框架的理解。")]),k]),A,t("ul",null,[t("li",null,[e("博客："),t("a",C,[e("https://bugstack.cn"),s(a)]),e(" - "),x]),F]),w,t("ul",null,[t("li",null,[e("视频："),t("a",D,[e("https://www.bilibili.com/video/BV1nY4y1B7eT"),s(a)])]),v]),q,t("ul",null,[t("li",null,[S,e("："),t("a",j,[e("https://t.zsxq.com/Ja27ujq"),s(a)])]),V,O]),z])}const J=o(l,[["render",N],["__file","2022-06-16-qiaoliaojiwanxingyuanmahou，wogeiMybatishualiaozhang“quanditu”.html.vue"]]);export{J as default};
