import{_ as l,r as c,o as t,c as r,a as n,b as a,d as e,e as i}from"./app-3RcBQnkC.js";const d={},o=n("h1",{id:"架构的本质之-mvc-架构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#架构的本质之-mvc-架构","aria-hidden":"true"},"#"),a(" 架构的本质之 MVC 架构")],-1),p=n("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),m=n("iframe",{id:"B-Video",src:"//player.bilibili.com/player.html?aid=870115608&bvid=BV1fV4y1C7PW&cid=1172934643&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"480"}," ",-1),h=i('<p>如果我们尝试把编程的复杂架构缩小到最容易理解的程度，那么编程开发其实只做3件事：”<code>定义属性</code>、<code>创建方法</code>、<code>调用展示</code>“。但因为同类所需的内容较多，如一系列的属性，一堆的方法实现，一组的接口封装，那么就需要合理的把这些内容分配到不同的层次中去实现，因此有了分层架构的设计。</p><p>那么本文小傅哥会向大家介绍一套MVC架构的分层设计以及如何创建使用，并提供相应的简单的案例。你可以复制这套架构在自己的场景中使用，也更能方便编程的小白可以更快的上手开发。</p><p><strong>注意</strong>：此套MVC架构模型适合提供HTTP服务的工程架构，适合简单的小场景开发使用。特点；轻便、简单、学习成本低。</p><h2 id="一、编程三步" tabindex="-1"><a class="header-anchor" href="#一、编程三步" aria-hidden="true">#</a> 一、编程三步</h2><p>如果说你是一个特别小的<code>玩具项目</code>，你甚至可以把编程的3步写到一个类里。但因为你做的是正经项目，你的各种类；对象类、库表类、方法类，就会成群结队的来。如果你想把这些成群结队的类的内容，都写到一个类里去，那么就是几万行的代码了。—— 当然你也可以吹牛逼，你一个人做过一个项目，这项目大到啥程度呢。就是有一个类里有上万行代码。</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230623-01.png?raw=true" width="650px"></div><p>所以，为了不至于让一个类撑到爆💥，需要把黄色的对象、绿色的方法、红色的接口，都分配到不同的包结构下。这就是你编码人生中所接触到的第一个解耦操作。</p><h2 id="二、分层框架" tabindex="-1"><a class="header-anchor" href="#二、分层框架" aria-hidden="true">#</a> 二、分层框架</h2><p>MVC 是一种非常常见且常用的分层架构，主要包括；M - mode 对象层，封装到 domain 里。V - view 展示层，但因为目前都是前后端分离的项目，几乎不会在后端项目里写 JSP 文件了。C - Controller 控制层，对外提供接口实现类。DAO 算是单独拿出来用户处理数据库操作的层。</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230623-02.png?raw=true" width="750px"></div><ul><li>如图，在 MVC 的分层架构下。我们编程3步的所需各类对象、方法、接口，都分配到 MVC 的各个层次中去。</li><li>因为这样分层以后，就可以很清晰明了的知道各个层都在做什么内容，也更加方便后续的维护和迭代。</li><li>对于一个真正的项目来说，是没有一锤子买卖的，最开始的开发远不是成本所在。最大的开发成本是后期的维护和迭代。而架构设计的意义更多的就是在解决系统的反复的维护和迭代时，如何降低成本，这也是架构分层的意义所在。</li></ul><h2 id="三、调用流程" tabindex="-1"><a class="header-anchor" href="#三、调用流程" aria-hidden="true">#</a> 三、调用流程</h2><p>接下来我们再看下一套 MVC 架构中各个模块在调用时的串联关系；</p><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230623-03.png?raw=true" width="750px"></div><ul><li>以用户发起 HTTP 请求开始，Controller 在接收到请求后，调用由 Spring 注入到类里的 Service 方法，进入 Service 方法后有些逻辑会走数据库，有些逻辑是直接内部自己处理后就直接返回给 Controller 了。最后由 Controller 封装结果返回给 HTTP 响应。</li><li>同时我们也可以看到各个对象在这些请求间的一个作用，如；请求对象、库表对象、返回对象。</li></ul><h2 id="四、架构源码" tabindex="-1"><a class="header-anchor" href="#四、架构源码" aria-hidden="true">#</a> 四、架构源码</h2><h3 id="_1-环境" tabindex="-1"><a class="header-anchor" href="#_1-环境" aria-hidden="true">#</a> 1. 环境</h3><ul><li>JDK 1.8</li><li>Maven 3.8.6 - 下载安装maven后，本地记得配置阿里云镜像，方便快速拉取jar包。源码中 <code>docs/maven/settings.xml</code> 有阿里云镜像地址。</li><li>SpringBoot 2.7.2</li><li>MySQL 5.7 - 如果你使用 8.0 记得更改 pom.xml 中的 mysql 引用</li></ul><h3 id="_2-架构" tabindex="-1"><a class="header-anchor" href="#_2-架构" aria-hidden="true">#</a> 2. 架构</h3>',19),b=n("strong",null,"源码",-1),g={href:"https://gitcode.net/KnowledgePlanet/road-map/xfg-frame-mvc",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"https://gitcode.net/KnowledgePlanet/road-map/xfg-frame-mvc",-1),_=n("li",null,[n("strong",null,"树形"),a("："),n("code",null,"安装 brew install tree"),a(),n("code",null,"IntelliJ IDEA Terminal 使用 tree")],-1),f=i(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span>
├── docs
│   └── mvc<span class="token punctuation">.</span>drawio <span class="token operator">-</span> 架构文档
├── pom<span class="token punctuation">.</span>xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── cn
│   │   │       └── bugstack
│   │   │           └── xfg
│   │   │               └── frame
│   │   │                   ├── <span class="token class-name">Application</span><span class="token punctuation">.</span>java
│   │   │                   ├── common
│   │   │                   │   ├── <span class="token class-name">Constants</span><span class="token punctuation">.</span>java
│   │   │                   │   └── <span class="token class-name">Result</span><span class="token punctuation">.</span>java
│   │   │                   ├── controller
│   │   │                   │   └── <span class="token class-name">UserController</span><span class="token punctuation">.</span>java
│   │   │                   ├── dao
│   │   │                   │   └── <span class="token class-name">IUserDao</span><span class="token punctuation">.</span>java
│   │   │                   ├── domain
│   │   │                   │   ├── po
│   │   │                   │   │   └── <span class="token class-name">User</span><span class="token punctuation">.</span>java
│   │   │                   │   ├── req
│   │   │                   │   │   └── <span class="token class-name">UserReq</span><span class="token punctuation">.</span>java
│   │   │                   │   ├── res
│   │   │                   │   │   └── <span class="token class-name">UserRes</span><span class="token punctuation">.</span>java
│   │   │                   │   └── vo
│   │   │                   │       └── <span class="token class-name">UserInfo</span><span class="token punctuation">.</span>java
│   │   │                   └── service
│   │   │                       ├── <span class="token class-name">IUserService</span><span class="token punctuation">.</span>java
│   │   │                       └── impl
│   │   │                           └── <span class="token class-name">UserServiceImpl</span><span class="token punctuation">.</span>java
│   │   └── resources
│   │       ├── application<span class="token punctuation">.</span>yml
│   │       └── mybatis
│   │           ├── config
│   │           │   └── mybatis<span class="token operator">-</span>config<span class="token punctuation">.</span>xml
│   │           └── mapper
│   │               └── <span class="token class-name">User_Mapper</span><span class="token punctuation">.</span>xml
│   └── test
│       └── java
│           └── cn
│               └── bugstack
│                   └── xfg
│                       └── frame
│                           └── test
│                               └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
└── road<span class="token operator">-</span>map<span class="token punctuation">.</span>sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是整个🏭工程架构的 tree 树形图。整个工程由 SpringBoot 驱动。</p><ul><li>Application.java 是启动程序的 SpringBoot 应用</li><li>common 是额外添加的一个层，用于定义通用的类</li><li>controller 控制层，提供接口实现。</li><li>dao 数据库操作层</li><li>domain 对象定义层</li><li>service 服务实现层</li></ul><h2 id="五、测试验证" tabindex="-1"><a class="header-anchor" href="#五、测试验证" aria-hidden="true">#</a> 五、测试验证</h2><ul><li>首先；整个工程由 SpringBoot 驱动，提供了 road-map.sql 测试 SQL 库表语句。你可以在自己的本地mysql上进行执行。它会创建库表。</li><li>之后；在 application.yml 配置数据库链接信息。</li><li>之后就可以打开 ApiTest 进行测试了。你可以点击 Application 类的绿色箭头启动工程，使用 UserController 类提供接口的方式调用程序；http://localhost:8089/queryUserInfo</li></ul><div align="center"><img src="https://bugstack.cn/images/roadmap/tutorial/road-map-230623-04.png?raw=true" width="950px"></div>`,6);function x(j,C){const s=c("ExternalLinkIcon");return t(),r("div",null,[o,n("p",null,[a("作者：小傅哥 "),p,a("博客："),n("a",u,[a("https://bugstack.cn"),e(s)])]),v,m,h,n("ul",null,[n("li",null,[b,a("："),n("a",g,[k,e(s)])]),_]),f,a(" - 如果你正常获取了这样的结果信息，那么说明你已经启动成功。接下来就可以对照着MVC的结构进行学习，以及使用这样的工程结构开发自己的项目。 ")])}const w=l(d,[["render",x],["__file","mvc.html.vue"]]);export{w as default};
