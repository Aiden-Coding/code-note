import{_ as t,r as i,o as c,c as l,a as n,b as a,d as e,e as p}from"./app-3RcBQnkC.js";const o={},u=n("h1",{id:"基于javaagent的全链路监控一《嗨-javaagent》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基于javaagent的全链路监控一《嗨-javaagent》","aria-hidden":"true"},"#"),a(" 基于JavaAgent的全链路监控一《嗨！JavaAgent》")],-1),d=n("br",null,null,-1),r={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),v=n("h2",{id:"前言介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言介绍","aria-hidden":"true"},"#"),a(" 前言介绍")],-1),m={href:"https://mp.weixin.qq.com/s?__biz=MzIxMDAwMDAxMw==&mid=2650724660&idx=1&sn=0f33d3386c7652bf536cb071e9f79921&chksm=8f6138d6b816b1c0d92fb75257da4fc8ddefb7ec53dfcad98dffec87740df455cc75aa7b4a5c&token=144816615&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="案例简述" tabindex="-1"><a class="header-anchor" href="#案例简述" aria-hidden="true">#</a> 案例简述</h2><p>JavaAgent是在JDK5之后提供的新特性，也可以叫java代理。开发者通过这种机制(Instrumentation)可以在加载class文件之前修改方法的字节码(此时字节码尚未加入JVM)，动态更改类方法实现AOP，提供监控服务如；方法调用时长、可用率、内存等。本章节初步怎么让java代码执行时可以进入我们的agent方法。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>IntelliJ IDEA Community Edition</li><li>jdk1.8.0_45 64位</li></ol><h2 id="配置信息-路径相关修改为自己的" tabindex="-1"><a class="header-anchor" href="#配置信息-路径相关修改为自己的" aria-hidden="true">#</a> 配置信息 （路径相关修改为自己的）</h2><ol><li>配置位置：Run/Debug Configurations -&gt; VM options</li><li>配置内容：-javaagent:E:\\itstack\\GIT\\itstack.org\\itstack-demo-agent\\itstack-demo-agent-01\\target\\itstack-demo-agent-01-1.0.0-SNAPSHOT.jar=testargs</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>agent<span class="token operator">-</span><span class="token number">01</span>
├── pom<span class="token punctuation">.</span>xml
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>agent
    │   │       └── <span class="token class-name">MyAgent</span><span class="token punctuation">.</span>java
    │	└── resources
    │       └── <span class="token constant">META</span><span class="token operator">-</span><span class="token constant">INF</span>
    │           └── <span class="token constant">MANIFEST</span><span class="token punctuation">.</span><span class="token constant">MF</span> 	
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>pom.xml</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- Build args --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>argline</span><span class="token punctuation">&gt;</span></span>-Xms512m -Xmx512m<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>argline</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skip_maven_deploy</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skip_maven_deploy</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>updateReleaseInfo</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>updateReleaseInfo</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.test.skip</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.test.skip</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 自定义MANIFEST.MF --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.configuration.manifestFile</span><span class="token punctuation">&gt;</span></span>src/main/resources/META-INF/MANIFEST.MF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.configuration.manifestFile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyAgent.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAgent</span> <span class="token punctuation">{</span>

    <span class="token comment">//JVM 首先尝试在代理类上调用以下方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">premain</span><span class="token punctuation">(</span><span class="token class-name">String</span> agentArgs<span class="token punctuation">,</span> <span class="token class-name">Instrumentation</span> inst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;嗨！JavaAgent &quot;</span> <span class="token operator">+</span> agentArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//如果代理类没有实现上面的方法，那么 JVM 将尝试调用该方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">premain</span><span class="token punctuation">(</span><span class="token class-name">String</span> agentArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MANIFEST.MF</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Manifest-Version: 1.0
Premain-Class: org.itstack.demo.agent.MyAgent
Can-Redefine-Classes: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ApiTest.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * http://bigbully.github.io/Dapper-translation/
 *
 * 配置监控
 * VM options：
 * -javaagent:E:\\itstack\\GIT\\itstack.org\\itstack-demo-agent\\itstack-demo-agent-01\\target\\itstack-demo-agent-01-1.0.0-SNAPSHOT.jar=testargs
 *
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hi itstack-demo-agent-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">this</span> is my agent：testargs
嗨！<span class="token class-name">JavaAgent</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>基于JavaAgent的全链路监控</strong>」获取本文源码&amp;更多原创专题案例！</p>`,19);function b(h,f){const s=i("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[a("作者：小傅哥 "),d,a("博客："),n("a",r,[a("https://bugstack.cn"),e(s)])]),k,v,n("blockquote",null,[n("p",null,[a("全链路监控又名分布式监控系统全链路追踪，目前市面的全链路监控系统基本都是参考Google的"),n("a",m,[a("Dapper"),e(s)]),a("（大规模分布式系统的跟踪系统）来做的。例如；蚂蚁金服分布式链路跟踪组件SOFATracer、Gokit微服务-服务链路追踪 、Pinpoint、Prometheus(普罗米修斯)等等。")])]),g])}const j=t(o,[["render",b],["__file","2019-07-10-jiyuJavaAgentdequanlianlujiankongyi《hai！JavaAgent》.html.vue"]]);export{j as default};
