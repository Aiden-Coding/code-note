import{_ as n,r as o,o as l,c as s,a as e,b as a,d as t,e as i}from"./app-3RcBQnkC.js";const f={},h=e("h1",{id:"第15节-搭建mq消息组件kafka服务环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第15节-搭建mq消息组件kafka服务环境","aria-hidden":"true"},"#"),a(" 第15节：搭建MQ消息组件Kafka服务环境")],-1),c=e("br",null,null,-1),_={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=e("blockquote",null,[e("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),d={href:"https://gitcode.net/KnowledgePlanet/Lottery/-/tree/211023_xfg_mq_kafka",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"描述：搭建MQ消息组件Kafka服务环境，并整合到SpringBoot中，完成消息的生产和消费处理",-1),p=e("h2",{id:"零、优秀作业",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#零、优秀作业","aria-hidden":"true"},"#"),a(" 零、优秀作业")],-1),g={href:"https://t.zsxq.com/06E2NzrVJ",target:"_blank",rel:"noopener noreferrer"},K={href:"https://t.zsxq.com/06Zb6623B",target:"_blank",rel:"noopener noreferrer"},m={href:"https://t.zsxq.com/06v3JmYvr",target:"_blank",rel:"noopener noreferrer"},x={href:"https://t.zsxq.com/06fQrVVNJ",target:"_blank",rel:"noopener noreferrer"},b={href:"https://t.zsxq.com/06VzrvZji",target:"_blank",rel:"noopener noreferrer"},q={href:"https://t.zsxq.com/0ciaaIy9u",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.zsxq.com/0dWiE0Eiu",target:"_blank",rel:"noopener noreferrer"},M={href:"https://t.zsxq.com/0faNgGbaT",target:"_blank",rel:"noopener noreferrer"},Q=i('<h2 id="一、开发日志" tabindex="-1"><a class="header-anchor" href="#一、开发日志" aria-hidden="true">#</a> 一、开发日志</h2><ul><li>搭建 Kafka 环境，配置消息主题 <em>注意：MQ 消息的使用不非得局限于 Kafka，也可以使用 RocketMq</em></li><li>SpringBoot 整合 Kafka，验证消息的生产和消费</li></ul><h2 id="二、kafka-安装和配置" tabindex="-1"><a class="header-anchor" href="#二、kafka-安装和配置" aria-hidden="true">#</a> 二、Kafka 安装和配置</h2><p>Apache Kafka是一个分布式发布 - 订阅消息系统和一个强大的队列，可以处理大量的数据，并使您能够将消息从一个端点传递到另一个端点。 Kafka适合离线和在线消息消费。 Kafka消息保留在磁盘上，并在群集内复制以防止数据丢失。 Kafka构建在ZooKeeper同步服务之上。 它与Apache Storm和Spark非常好地集成，用于实时流式数据分析。</p><p>以下是Kafka的几个好处：</p><ul><li><strong>可靠性</strong> - Kafka是分布式，分区，复制和容错的。</li><li><strong>可扩展性</strong> - Kafka消息传递系统轻松缩放，无需停机。</li><li><strong>耐用性</strong> - Kafka使用分布式提交日志，这意味着消息会尽可能快地保留在磁盘上，因此它是持久的。</li><li><strong>性能</strong> - Kafka对于发布和订阅消息都具有高吞吐量。 即使存储了许多TB的消息，它也保持稳定的性能。</li></ul><p>Kafka非常快，并保证零停机和零数据丢失。</p>',7);function j(B,V){const r=o("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[a("作者：小傅哥 "),c,a("博客："),e("a",_,[a("https://bugstack.cn"),t(r)])]),k,e("ul",null,[e("li",null,[a("分支："),e("a",d,[a("211023_xfg_mq_kafka"),t(r)])]),u]),p,e("ul",null,[e("li",null,[e("a",g,[a("使用MQ解耦抽奖发货流程 @BerserkD"),t(r)])]),e("li",null,[e("a",K,[a("搭建MQ消息组件Kafka服务环境 @杨杨得亿🙉"),t(r)])]),e("li",null,[e("a",m,[a("扫描库表补偿发货单MQ消息 @杨杨得亿🙉"),t(r)])]),e("li",null,[e("a",x,[a("搭建MQ消息组件Kafka服务环境 @Geroge Liu"),t(r)])]),e("li",null,[e("a",b,[a("搭建MQ消息组件Kafka服务环境 @liuc"),t(r)])]),e("li",null,[e("a",q,[a("搭建MQ消息组件Kafka服务环境【可视化Kafka】 @张=小红="),t(r)])]),e("li",null,[e("a",z,[a("打开又一个新世界的大门 —— 消息中间件：Kafka @AD钙奶"),t(r)])]),e("li",null,[e("a",M,[a("kafka环境并测试，链接失败问题总结 @念"),t(r)])])]),Q])}const v=n(f,[["render",j],["__file","di15jie：dajianMQxiaoxizujianKafkafuwuhuanjing.html.vue"]]);export{v as default};
