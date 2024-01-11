import{_ as o,r as l,o as r,c,a as n,b as s,d as e,f as t,e as p}from"./app-3RcBQnkC.js";const i={},d=n("h1",{id:"第04节-抽奖活动策略库表设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第04节-抽奖活动策略库表设计","aria-hidden":"true"},"#"),s(" 第04节：抽奖活动策略库表设计")],-1),u=n("br",null,null,-1),k={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),h={href:"https://gitcode.net/KnowledgePlanet/Lottery/-/tree/210808_xfg_tableDesign",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"描述：整体设计抽奖活动所需要的库表信息",-1),b=n("h2",{id:"零、优秀作业",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#零、优秀作业","aria-hidden":"true"},"#"),s(" 零、优秀作业")],-1),v={href:"https://t.zsxq.com/06RrnqJa6",target:"_blank",rel:"noopener noreferrer"},g={href:"https://t.zsxq.com/06VRRFaei",target:"_blank",rel:"noopener noreferrer"},y={href:"https://t.zsxq.com/06MbMBMnu",target:"_blank",rel:"noopener noreferrer"},f={href:"https://t.zsxq.com/06r7QJyfm",target:"_blank",rel:"noopener noreferrer"},w={href:"https://t.zsxq.com/06bYni2bY",target:"_blank",rel:"noopener noreferrer"},x={href:"https://t.zsxq.com/07jqneQJI",target:"_blank",rel:"noopener noreferrer"},q={href:"https://t.zsxq.com/08bPVYcNf",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.zsxq.com/09ZnvdhRF",target:"_blank",rel:"noopener noreferrer"},D={href:"https://t.zsxq.com/09M3UIWih",target:"_blank",rel:"noopener noreferrer"},j={href:"https://t.zsxq.com/0cbgzGYkX",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"一、需要建哪些表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、需要建哪些表","aria-hidden":"true"},"#"),s(" 一、需要建哪些表")],-1),N=n("p",null,"一个满足业务需求的抽奖系统，需要提供抽奖活动配置、奖品概率配置、奖品梳理配置等内容，同时用户在抽奖后需要记录用户的抽奖数据，这就是一个抽奖活动系统的基本诉求。",-1),V=n("p",null,"那么为了满足这个诉求，我们可以提供表包括：",-1),C=n("ul",null,[n("li",null,"活动配置，activity：提供活动的基本配置"),n("li",null,"策略配置，strategy：用于配置抽奖策略，概率、玩法、库存、奖品"),n("li",null,"策略明细，strategy_detail：抽奖策略的具体明细配置"),n("li",null,"奖品配置，award：用于配置具体可以得到的奖品"),n("li",null,"用户参与活动记录表，user_take_activity：每个用户参与活动都会记录下他的参与信息，时间、次数"),n("li",null,"用户活动参与次数表，user_take_activity_count：用于记录当前参与了多少次"),n("li",null,"用户策略计算结果表，user_strategy_export_001~004：最终策略结果的一个记录，也就是奖品中奖信息的内容")],-1),P=n("h2",{id:"二、建表语句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二、建表语句","aria-hidden":"true"},"#"),s(" 二、建表语句")],-1),T=p(`<h3 id="_1-lottery-sql" tabindex="-1"><a class="header-anchor" href="#_1-lottery-sql" aria-hidden="true">#</a> 1. lottery.sql</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> lottery<span class="token punctuation">;</span>

<span class="token comment">-- auto-generated definition</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> activity
<span class="token punctuation">(</span>
    id            <span class="token keyword">bigint</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">&#39;自增ID&#39;</span><span class="token punctuation">,</span>
    activityId    <span class="token keyword">bigint</span>       <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;活动ID&#39;</span><span class="token punctuation">,</span>
    activityName  <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>  <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;活动名称&#39;</span><span class="token punctuation">,</span>
    activityDesc  <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;活动描述&#39;</span><span class="token punctuation">,</span>
    beginDateTime <span class="token keyword">datetime</span>     <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;开始时间&#39;</span><span class="token punctuation">,</span>
    endDateTime   <span class="token keyword">datetime</span>     <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;结束时间&#39;</span><span class="token punctuation">,</span>
    stockCount    <span class="token keyword">int</span>          <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;库存&#39;</span><span class="token punctuation">,</span>
    takeCount     <span class="token keyword">int</span>          <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;每人可参与次数&#39;</span><span class="token punctuation">,</span>
    state         <span class="token keyword">int</span>          <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;活动状态：编辑、提审、撤审、通过、运行、拒绝、关闭、开启&#39;</span><span class="token punctuation">,</span>
    creator       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>  <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;创建人&#39;</span><span class="token punctuation">,</span>
    createTime    <span class="token keyword">datetime</span>     <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
    updateTime    <span class="token keyword">datetime</span>     <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;修改时间&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">constraint</span> activity_id_uindex
        <span class="token keyword">unique</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
    <span class="token keyword">comment</span> <span class="token string">&#39;活动配置&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function B(L,M){const a=l("ExternalLinkIcon");return r(),c("div",null,[d,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",k,[s("https://bugstack.cn"),e(a)])]),_,n("ul",null,[n("li",null,[s("分支："),n("a",h,[s("210808_xfg_tableDesign"),e(a)])]),m]),b,n("ul",null,[n("li",null,[n("a",v,[s("抽奖活动策略库表设计 @远航"),e(a)])]),n("li",null,[n("a",g,[s("抽奖活动策略库表设计 @Geroge Liu"),e(a)])]),n("li",null,[n("a",y,[s("更深一步理解DDD，实现抽奖算法，用模板模式实现抽奖流程，使用P3C @Chin"),e(a)])]),n("li",null,[n("a",f,[s("将抽奖流程基于模板化设计 @一行。"),e(a)])]),n("li",null,[n("a",w,[s("分库，分表，分库分表是三件事 分库：解决qps过高，连接数不够用 分表：解决数据量过大 @御剑听风起"),e(a)])]),n("li",null,[n("a",x,[s("抽奖活动策略库表设计 @浩"),e(a)])]),n("li",null,[n("a",q,[s("研究了一下为什么需要分库分表，何时分库 @爱奋斗的小鲨鱼"),e(a)])]),n("li",null,[n("a",z,[s("抽奖系统知识结构梳理 @神呢八点半独享"),e(a)])]),n("li",null,[n("a",D,[s("第四章节主要介绍了活动策略库表的设计，我对分表分库以及表依赖相对亲切一些也很好理解 @燃起骚气"),e(a)])]),n("li",null,[n("a",j,[s("领取活动表梳理图 @A"),e(a)])])]),I,N,V,t(" ![](/images/article/project/lottery/Part-2/4-01.png) "),C,P,t(" ![](/images/article/project/lottery/Part-2/4-02.png) "),T])}const Y=o(i,[["render",B],["__file","di04jie：choujianghuodongceluekubiaosheji.html.vue"]]);export{Y as default};
