import{_ as a,r,o as n,c as d,f as s,a as e,b as t,d as i,e as c}from"./app-3RcBQnkC.js";const l={},h=e("p",null,"作者：转转技术团队",-1),g={href:"https://mp.weixin.qq.com/s/ONMuELjdHYa0yQceTj01Iw",target:"_blank",rel:"noopener noreferrer"},p=c('<h2 id="老权限系统的问题与现状" tabindex="-1"><a class="header-anchor" href="#老权限系统的问题与现状" aria-hidden="true">#</a> 老权限系统的问题与现状</h2><p>转转公司在过去并没有一个统一的权限管理系统，权限管理由各业务自行研发或是使用其他业务的权限系统，权限管理的不统一带来了不少问题：</p><ol><li>各业务重复造轮子，维护成本高</li><li>各系统只解决部分场景问题，方案不够通用，新项目选型时没有可靠的权限管理方案</li><li>缺乏统一的日志管理与审批流程，在授权信息追溯上十分困难</li></ol><p>基于上述问题，去年底公司启动建设转转统一权限系统，目标是开发一套灵活、易用、安全的权限管理系统，供各业务使用。</p><h2 id="业界权限系统的设计方式" tabindex="-1"><a class="header-anchor" href="#业界权限系统的设计方式" aria-hidden="true">#</a> 业界权限系统的设计方式</h2><p>目前业界主流的权限模型有两种，下面分别介绍下：</p><ul><li><strong>基于角色的访问控制（RBAC）</strong></li><li><strong>基于属性的访问控制（ABAC）</strong></li></ul><h3 id="rbac-模型" tabindex="-1"><a class="header-anchor" href="#rbac-模型" aria-hidden="true">#</a> RBAC 模型</h3><p><strong>基于角色的访问控制（Role-Based Access Control，简称 RBAC）</strong> 指的是通过用户的角色（Role）授权其相关权限，实现了灵活的访问控制，相比直接授予用户权限，要更加简单、高效、可扩展。</p><p>一个用户可以拥有若干角色，每一个角色又可以被分配若干权限这样，就构造成“用户-角色-权限” 的授权模型。在这种模型中，用户与角色、角色与权限之间构成了多对多的关系。</p><p>用一个图来描述如下：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/rbac.png" alt="RBAC 权限模型示意图"></p><p>当使用 <code>RBAC模型</code> 时，通过分析用户的实际情况，基于共同的职责和需求，授予他们不同角色。这种 <code>用户 -&gt; 角色 -&gt; 权限</code> 间的关系，让我们可以不用再单独管理单个用户权限，用户从授予的角色里面获取所需的权限。</p><p>以一个简单的场景（Gitlab 的权限系统）为例，用户系统中有 <code>Admin</code>、<code>Maintainer</code>、<code>Operator</code> 三种角色，这三种角色分别具备不同的权限，比如只有 <code>Admin</code> 具备创建代码仓库、删除代码仓库的权限，其他的角色都不具备。我们授予某个用户 <code>Admin</code> 这个角色，他就具备了 <strong>创建代码仓库</strong> 和 <strong>删除代码仓库</strong> 这两个权限。</p><p>通过 <code>RBAC模型</code> ，当存在多个用户拥有相同权限时，我们只需要创建好拥有该权限的角色，然后给不同的用户分配不同的角色，后续只需要修改角色的权限，就能自动修改角色内所有用户的权限。</p><h3 id="abac-模型" tabindex="-1"><a class="header-anchor" href="#abac-模型" aria-hidden="true">#</a> ABAC 模型</h3><p><strong>基于属性的访问控制（Attribute-Based Access Control，简称 ABAC）</strong> 是一种比 <code>RBAC模型</code> 更加灵活的授权模型，它的原理是通过各种属性来动态判断一个操作是否可以被允许。这个模型在云系统中使用的比较多，比如 AWS，阿里云等。</p><p>考虑下面这些场景的权限控制：</p><ol><li>授权某个人具体某本书的编辑权限</li><li>当一个文档的所属部门跟用户的部门相同时，用户可以访问这个文档</li><li>当用户是一个文档的拥有者并且文档的状态是草稿，用户可以编辑这个文档</li><li>早上九点前禁止 A 部门的人访问 B 系统</li><li>在除了上海以外的地方禁止以管理员身份访问 A 系统</li><li>用户对 2022-06-07 之前创建的订单有操作权限</li></ol><p>可以发现上述的场景通过 <code>RBAC模型</code> 很难去实现，因为 <code>RBAC模型</code> 仅仅描述了用户可以做什么操作，但是操作的条件，以及操作的数据，<code>RBAC模型</code> 本身是没有这些限制的。但这恰恰是 <code>ABAC模型</code> 的长处，<code>ABAC模型</code> 的思想是基于用户、访问的数据的属性、以及各种环境因素去动态计算用户是否有权限进行操作。</p><h4 id="abac-模型的原理" tabindex="-1"><a class="header-anchor" href="#abac-模型的原理" aria-hidden="true">#</a> ABAC 模型的原理</h4><p>在 <code>ABAC模型</code> 中，一个操作是否被允许是基于对象、资源、操作和环境信息共同动态计算决定的。</p><ul><li><strong>对象</strong>：对象是当前请求访问资源的用户。用户的属性包括 ID，个人资源，角色，部门和组织成员身份等</li><li><strong>资源</strong>：资源是当前用户要访问的资产或对象，例如文件，数据，服务器，甚至 API</li><li><strong>操作</strong>：操作是用户试图对资源进行的操作。常见的操作包括“读取”，“写入”，“编辑”，“复制”和“删除”</li><li><strong>环境</strong>：环境是每个访问请求的上下文。环境属性包含访问的时间和位置，对象的设备，通信协议和加密强度等</li></ul><p>在 <code>ABAC模型</code> 的决策语句的执行过程中，决策引擎会根据定义好的决策语句，结合对象、资源、操作、环境等因素动态计算出决策结果。每当发生访问请求时，<code>ABAC模型</code> 决策系统都会分析属性值是否与已建立的策略匹配。如果有匹配的策略，访问请求就会被通过。</p><h2 id="新权限系统的设计思想" tabindex="-1"><a class="header-anchor" href="#新权限系统的设计思想" aria-hidden="true">#</a> 新权限系统的设计思想</h2><p>结合转转的业务现状，<code>RBAC模型</code> 满足了转转绝大部分业务场景，并且开发成本远低于 <code>ABAC模型</code> 的权限系统，所以新权限系统选择了基于 <code>RBAC模型</code> 来实现。对于实在无法满足的业务系统，我们选择了暂时性不支持，这样可以保障新权限系统的快速落地，更快的让业务使用起来。</p><p>标准的 <code>RBAC模型</code> 是完全遵守 <code>用户 -&gt; 角色 -&gt; 权限</code> 这个链路的，也就是用户的权限完全由他所拥有的角色来控制，但是这样会有一个缺点，就是给用户加权限必须新增一个角色，导致实际操作起来效率比较低。所以我们在 <code>RBAC模型</code> 的基础上，新增了给用户直接增加权限的能力，也就是说既可以给用户添加角色，也可以给用户直接添加权限。最终用户的权限是由拥有的角色和权限点组合而成。</p><p><strong>新权限系统的权限模型</strong>：用户最终权限 = 用户拥有的角色带来的权限 + 用户独立配置的权限，两者取并集。</p><p>新权限系统方案如下图：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/new-authority-system-design.png" alt="新权限系统方案"></p><ul><li>首先，将集团所有的用户（包括外部用户），通过 <strong>统一登录与注册</strong> 功能实现了统一管理，同时与公司的组织架构信息模块打通，实现了同一个人员在所有系统中信息的一致，这也为后续基于组织架构进行权限管理提供了可行性。</li><li>其次，因为新权限系统需要服务集团所有业务，所以需要支持多系统权限管理。用户进行权限管理前，需要先选择相应的系统，然后配置该系统的 <strong>菜单权限</strong> 和 <strong>数据权限</strong> 信息，建立好系统的各个权限点。<em>PS：菜单权限和数据权限的具体说明，下文会详细介绍。</em></li><li>最后，创建该系统下的不同角色，给不同角色配置好权限点。比如店长角色，拥有店员操作权限、本店数据查看权限等，配置好这个角色后，后续只需要给店长增加这个角色，就可以让他拥有对应的权限。</li></ul><p>完成上述配置后，就可以进行用户的权限管理了。有两种方式可以给用户加权限：</p><ol><li>先选用户，然后添加权限。该方式可以给用户添加任意角色或是菜单/数据权限点。</li><li>先选择角色，然后关联用户。该方式只可给用户添加角色，不能单独添加菜单/数据权限点。</li></ol><p>这两种方式的具体设计方案，后文会详细说明。</p><h3 id="权限系统自身的权限管理" tabindex="-1"><a class="header-anchor" href="#权限系统自身的权限管理" aria-hidden="true">#</a> 权限系统自身的权限管理</h3><p>对于权限系统来说，首先需要设计好系统自身的权限管理，也就是需要管理好 ”谁可以进入权限系统，谁可以管理其他系统的权限“，对于权限系统自身的用户，会分为三类：</p><ol><li><strong>超级管理员</strong>：拥有权限系统的全部操作权限，可以进行系统自身的任何操作，也可以管理接入权限的应用系统的管理操作。</li><li><strong>权限操作用户</strong>：拥有至少一个已接入的应用系统的超级管理员角色的用户。该用户能进行的操作限定在所拥有的应用系统权限范围内。权限操作用户是一种身份，无需分配，而是根据规则自动获得的。</li><li><strong>普通用户</strong>：普通用户也可以认为是一种身份，除去上述 2 类人，其余的都为普通用户。他们只能申请接入系统以及访问权限申请页面。</li></ol><h3 id="权限类型的定义" tabindex="-1"><a class="header-anchor" href="#权限类型的定义" aria-hidden="true">#</a> 权限类型的定义</h3><p>新权限系统中，我们把权限分为两大类，分别是：</p><ul><li><strong>菜单功能权限</strong>：包括系统的目录导航、菜单的访问权限，以及按钮和 API 操作的权限</li><li><strong>数据权限</strong>：包括定义数据的查询范围权限，在不同系统中，通常叫做 “组织”、”站点“等，在新权限系统中，统一称作 ”组织“ 来管理数据权限</li></ul><h3 id="默认角色的分类" tabindex="-1"><a class="header-anchor" href="#默认角色的分类" aria-hidden="true">#</a> 默认角色的分类</h3><p>每个系统中设计了三个默认角色，用来满足基本的权限管理需求，分别如下：</p><ul><li><strong>超级管理员</strong>：该角色拥有该系统的全部权限，可以修改系统的角色权限等配置，可以给其他用户授权。</li><li><strong>系统管理员</strong>：该角色拥有给其他用户授权以及修改系统的角色权限等配置能力，但角色本身不具有任何权限。</li><li><strong>授权管理员</strong>：该角色拥有给其他用户授权的能力。但是授权的范围不超出自己所拥有的权限。</li></ul><blockquote><p>举个栗子：授权管理员 A 可以给 B 用户添加权限，但添加的范围 小于等于 A 用户已拥有的权限。</p></blockquote><p>经过这么区分，把 <strong>拥有权限</strong> 和 <strong>拥有授权能力</strong> ，这两部分给分隔开来，可以满足所有的权限控制的场景。</p><h2 id="新权限系统的核心模块设计" tabindex="-1"><a class="header-anchor" href="#新权限系统的核心模块设计" aria-hidden="true">#</a> 新权限系统的核心模块设计</h2><p>上面介绍了新权限系统的整体设计思想，接下来分别介绍下核心模块的设计</p><h3 id="系统-菜单-数据权限管理" tabindex="-1"><a class="header-anchor" href="#系统-菜单-数据权限管理" aria-hidden="true">#</a> 系统/菜单/数据权限管理</h3><p>把一个新系统接入权限系统有下列步骤：</p><ol><li>创建系统</li><li>配置菜单功能权限</li><li>配置数据权限（可选）</li><li>创建系统的角色</li></ol><p>其中，1、2、3 的步骤，都是在系统管理模块完成，具体流程如下图:</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/new-authority-system-design-access-flow-chart.png" alt="系统接入流程图"></p><p>用户可以对系统的基本信息进行增删改查的操作，不同系统之间通过 <code>系统编码</code> 作为唯一区分。同时 <code>系统编码</code> 也会用作于菜单和数据权限编码的前缀，通过这样的设计保证权限编码全局唯一性。</p><p>例如系统的编码为 <code>test_online</code>，那么该系统的菜单编码格式便为 <code>test_online:m_xxx</code>。</p><p>系统管理界面设计如下：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/new-authority-system-management-interface.png" alt="系统管理界面设计"></p><h4 id="菜单管理" tabindex="-1"><a class="header-anchor" href="#菜单管理" aria-hidden="true">#</a> 菜单管理</h4><p>新权限系统首先对菜单进行了分类，分别是 <code>目录</code>、<code>菜单</code> 和 <code>操作</code>，示意如下图</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/new-authority-system-menu.png" alt="菜单管理界面"></p><p>它们分别代表的含义是：</p><ul><li><strong>目录</strong>：指的是应用系统中最顶部的一级目录，通常在系统 Logo 的右边</li><li><strong>菜单</strong>：指的是应用系统左侧的多层级菜单，通常在系统 Logo 的下面，也是最常用的菜单结构</li><li><strong>操作</strong>：指页面中的按钮、接口等一系列可以定义为操作或页面元素的部分。</li></ul><p>菜单管理界面设计如下：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/new-authority-system-menu-management-interface.png" alt="菜单管理界面设计"></p><p>菜单权限数据的使用，也提供两种方式：</p><ul><li><strong>动态菜单模式</strong>：这种模式下，菜单的增删完全由权限系统接管。也就是说在权限系统增加菜单，应用系统会同步增加。这种模式好处是修改菜单无需项目上线。</li><li><strong>静态菜单模式</strong>：菜单的增删由应用系统的前端控制，权限系统只控制访问权限。这种模式下，权限系统只能标识出用户是否拥有当前菜单的权限，而具体的显示控制是由前端根据权限数据来决定。</li></ul><h3 id="角色与用户管理" tabindex="-1"><a class="header-anchor" href="#角色与用户管理" aria-hidden="true">#</a> 角色与用户管理</h3><p>角色与用户管理都是可以直接改变用户权限的核心模块，整个设计思路如下图：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/role-and-user-management.png" alt="角色与用户管理模块设计"></p><p>这个模块设计重点是需要考虑到批量操作。无论是通过角色关联用户，还是给用户批量增加/删除/重置权限，批量操作的场景都是系统需要设计好的。</p><h3 id="权限申请" tabindex="-1"><a class="header-anchor" href="#权限申请" aria-hidden="true">#</a> 权限申请</h3><p>除了给其他用户添加权限外，新权限系统同时支持了用户自主申请权限。这个模块除了常规的审批流（申请、审批、查看）等，有一个比较特别的功能，就是如何让用户能选对自己要的权限。所以在该模块的设计上，除了直接选择角色外，还支持通过菜单/数据权限点，反向选择角色，如下图：</p><p><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/design-of-authority-system/permission-application.png" alt="权限申请界面"></p><h3 id="操作日志" tabindex="-1"><a class="header-anchor" href="#操作日志" aria-hidden="true">#</a> 操作日志</h3><p>系统操作日志会分为两大类：</p><ol><li><strong>操作流水日志</strong>：用户可看、可查的关键操作日志</li><li><strong>服务 Log 日志</strong>：系统服务运行过程中产生的 Log 日志,其中，服务 Log 日志信息量大于操作流水日志，但是不方便搜索查看。所以权限系统需要提供操作流水日志功能。</li></ol><p>在新权限系统中，用户所有的操作可以分为三类，分别为新增、更新、删除。所有的模块也可枚举，例如用户管理、角色管理、菜单管理等。明确这些信息后，那么一条日志就可以抽象为：什么人(Who)在什么时间(When)对哪些人(Target)的哪些模块做了哪些操作。 这样把所有的记录都入库，就可以方便的进行日志的查看和筛选了。</p><h2 id="总结与展望" tabindex="-1"><a class="header-anchor" href="#总结与展望" aria-hidden="true">#</a> 总结与展望</h2><p>至此，新权限系统的核心设计思路与模块都已介绍完成，新系统在转转内部有大量的业务接入使用，权限管理相比以前方便了许多。权限系统作为每家公司的一个基础系统，灵活且完备的设计可以助力日后业务的发展更加高效。</p><p>后续两篇：</p>',79),u={href:"https://mp.weixin.qq.com/s/hFTDckfxhSnoM_McP18Vkg",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/a_P4JAwxgunhfmJvpBnWYA",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),t(" 参考")],-1),f={href:"https://docs.authing.cn/v2/guides/access-control/choose-the-right-access-control-model.html",target:"_blank",rel:"noopener noreferrer"};function y(b,_){const o=r("ExternalLinkIcon");return n(),d("div",null,[s(" @include: @article-header.snippet.md "),e("blockquote",null,[h,e("p",null,[t("原文："),e("a",g,[t("https://mp.weixin.qq.com/s/ONMuELjdHYa0yQceTj01Iw"),i(o)])])]),p,e("ul",null,[e("li",null,[e("a",u,[t("转转统一权限系统的设计与实现（后端实现篇）"),i(o)])]),e("li",null,[e("a",m,[t("转转统一权限系统的设计与实现（前端实现篇）"),i(o)])])]),A,e("ul",null,[e("li",null,[t("选择合适的权限模型："),e("a",f,[t("https://docs.authing.cn/v2/guides/access-control/choose-the-right-access-control-model.html"),i(o)])])]),s(" @include: @article-footer.snippet.md ")])}const B=a(l,[["render",y],["__file","design-of-authority-system.html.vue"]]);export{B as default};
