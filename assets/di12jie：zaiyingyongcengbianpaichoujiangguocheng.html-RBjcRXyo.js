import{_ as o,r as l,o as a,c as s,a as e,b as t,d as n,f as i,e as c}from"./app-3RcBQnkC.js";const _={},h=e("h1",{id:"第12节-在应用层编排抽奖过程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第12节-在应用层编排抽奖过程","aria-hidden":"true"},"#"),t(" 第12节：在应用层编排抽奖过程")],-1),d=e("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},p=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),f={href:"https://gitcode.net/KnowledgePlanet/Lottery/-/tree/211003_xfg_ApplicationActivityProcess",target:"_blank",rel:"noopener noreferrer"},g={href:"https://gitcode.net/KnowledgePlanet/db-router-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"打包最新路由组件包",-1),m=e("li",null,"描述：在 application 应用层调用领域服务功能，编排抽奖过程，包括：领取活动、执行抽奖、落库结果，这其中还有一部分待实现的发送 MQ 消息，后续处理。",-1),k=e("h2",{id:"零、优秀作业",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#零、优秀作业","aria-hidden":"true"},"#"),t(" 零、优秀作业")],-1),x={href:"https://t.zsxq.com/06JuV3nmA",target:"_blank",rel:"noopener noreferrer"},y={href:"https://t.zsxq.com/06zZZFIuZ",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.zsxq.com/067uJY3jI",target:"_blank",rel:"noopener noreferrer"},q={href:"https://t.zsxq.com/06aI6Qfu7",target:"_blank",rel:"noopener noreferrer"},v={href:"https://t.zsxq.com/066a2jYv7",target:"_blank",rel:"noopener noreferrer"},j={href:"https://t.zsxq.com/06JuV3nmA",target:"_blank",rel:"noopener noreferrer"},A={href:"https://t.zsxq.com/09BE0r8ZR",target:"_blank",rel:"noopener noreferrer"},V={href:"https://t.zsxq.com/0cefmYbB3",target:"_blank",rel:"noopener noreferrer"},B={href:"https://t.zsxq.com/0doPzYuW3",target:"_blank",rel:"noopener noreferrer"},I={href:"https://t.zsxq.com/0esX76oWF",target:"_blank",rel:"noopener noreferrer"},P={href:"https://t.zsxq.com/10Owe1lwg",target:"_blank",rel:"noopener noreferrer"},L=c('<h2 id="一、开发日志" tabindex="-1"><a class="header-anchor" href="#一、开发日志" aria-hidden="true">#</a> 一、开发日志</h2><ul><li>分别在两个分库的表 lottery_01.user_take_activity、lottery_02.user_take_activity 中添加 state<code>【活动单使用状态 0未使用、1已使用】</code> 状态字段，这个状态字段用于写入中奖信息到 user_strategy_export_000~003 表中时候，两个表可以做一个幂等性的事务。同时还需要加入 strategy_id 策略ID字段，用于处理领取了活动单但执行抽奖失败时，可以继续获取到此抽奖单继续执行抽奖，而不需要重新领取活动。<em>其实领取活动就像是一种活动镜像信息，可以在控制幂等反复使用</em></li><li>在 lottery-application 模块下新增 process 包用于流程编排，其实它也是 service 服务包是对领域功能的封装，很薄的一层。那么定义成 process 是想大家对流程编排有个概念，一般这一层的处理可以使用可视化的流程编排工具通过拖拽的方式，处理这部分代码的逻辑。</li><li>学习本章记得更新分支下的最新SQL语句，另外本章节还连带引入了需要MQ、Worker的场景，后续开发到这些功能的时候，会继续完善。</li></ul><h2 id="二、编排流程" tabindex="-1"><a class="header-anchor" href="#二、编排流程" aria-hidden="true">#</a> 二、编排流程</h2>',3),N=e("ul",null,[e("li",null,"抽奖整个活动过程的流程编排，主要包括：对活动的领取、对抽奖的操作、对中奖结果的存放，以及如何处理发奖，对于发奖流程我们设计为MQ触发，后续再补全这部分内容。"),e("li",null,[t("对于每一个流程节点编排的内容，都是在领域层开发完成的，而应用层只是做最为简单的且很薄的一层。"),e("em",null,"其实这块也很符合目前很多低代码的使用场景，通过界面可视化控制流程编排，生成代码")])],-1);function Q(w,E){const r=l("ExternalLinkIcon");return a(),s("div",null,[h,e("p",null,[t("作者：小傅哥 "),d,t("博客："),e("a",u,[t("https://bugstack.cn"),n(r)])]),p,e("ul",null,[e("li",null,[t("应用分支："),e("a",f,[t("211003_xfg_ApplicationActivityProcess"),n(r)])]),e("li",null,[t("路由组件："),e("a",g,[t("db-router-spring-boot-starter "),b,n(r)])]),m]),k,e("ul",null,[e("li",null,[e("a",x,[t("应用层编排抽奖流程 @微风"),n(r)])]),e("li",null,[e("a",y,[t("在应用层编排抽奖过程 @一点江南"),n(r)])]),e("li",null,[e("a",z,[t("在应用层编排抽奖过程 @BerserkD"),n(r)])]),e("li",null,[e("a",q,[t("需要将之前写的领域层进行编排，实现完整的抽奖服务 @Chin"),n(r)])]),e("li",null,[e("a",v,[t("应用层抽奖活动过程编排 @Geroge Liu"),n(r)])]),e("li",null,[e("a",j,[t("应用层编排抽奖流程 @微风"),n(r)])]),e("li",null,[e("a",A,[t("对12节进行了学习，因为表内又增添字段了，本来是又有点迷茫的，但是在单元测试的时候出了bug，就一步步地打断点调试，将整个流程又走了一遍，感觉就很清晰了。@在九月"),n(r)])]),e("li",null,[e("a",V,[t("开发application层，对前面章节的流程进行编排，发现并完善之前章节遗留的bug @AD钙奶"),n(r)])]),e("li",null,[e("a",B,[t("在这一章节的学习中我首次了解到幂等性的事务 @星期一"),n(r)])]),e("li",null,[e("a",I,[t("花了挺多时间梳理了下整个抽奖流程，复习了下前面的内容 @错否"),n(r)])]),e("li",null,[e("a",P,[t("从六月初学到现在七月中旬，开始逐渐理解整个抽奖系统的设计思路了。对于小白来说，如果咬牙坚持下来，收获也是巨大的。比起做四五个零碎的项目，做一个lottery项目就囊括了所有需要掌握的技巧知识。"),n(r)])])]),L,i(" ![](/images/article/project/lottery/Part-2/12-01.png) "),N])}const Z=o(_,[["render",Q],["__file","di12jie：zaiyingyongcengbianpaichoujiangguocheng.html.vue"]]);export{Z as default};
