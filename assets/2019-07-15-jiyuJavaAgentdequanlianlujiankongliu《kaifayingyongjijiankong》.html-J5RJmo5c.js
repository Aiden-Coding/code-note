import{_ as t,r as p,o as e,c,a as n,b as s,d as o,e as i}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"基于javaagent的全链路监控六《开发应用级监控》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基于javaagent的全链路监控六《开发应用级监控》","aria-hidden":"true"},"#"),s(" 基于JavaAgent的全链路监控六《开发应用级监控》")],-1),k=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},r=i(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="案例简述" tabindex="-1"><a class="header-anchor" href="#案例简述" aria-hidden="true">#</a> 案例简述</h2><p>在我们的监控程序中，需要对各种模块进行监控；servlet、rpc、http、jdbc、redis、logic等，那么我们在设计监控程序时就需要对监控的程序进行模块化开发，可以在需要的时候进行组装配置即可，以方便我们监控程序的扩展和可控制性。这一章节我们把监控模块剥离，采用工厂模式进行调用｛目前是静态工厂在我们实际使用中可以把工厂做成动态配置化｝。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>IntelliJ IDEA Community Edition</li><li>jdk1.8.0_45 64位</li></ol><h2 id="配置信息-路径相关修改为自己的" tabindex="-1"><a class="header-anchor" href="#配置信息-路径相关修改为自己的" aria-hidden="true">#</a> 配置信息（路径相关修改为自己的）</h2><ol><li>配置位置：Run/Debug Configurations -&gt; VM options</li><li>配置内容：-javaagent:E:\\itstack\\GIT\\itstack.org\\itstack-demo-agent\\itstack-demo-agent-06\\target\\itstack-demo-agent-06-1.0.0-SNAPSHOT.jar=testargs</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>agent<span class="token operator">-</span><span class="token number">06</span>
├── pom<span class="token punctuation">.</span>xml
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>agent
    │   │       ├──	plugin
    │   │ 	    │   ├──	impl
    │   │ 	    │   │   ├── jvm
    │   │ 	    │   │   │   ├──	<span class="token class-name">JvmAdvice</span><span class="token punctuation">.</span>java
    │   │ 	    │   │   │   ├──	<span class="token class-name">JvmPlugin</span><span class="token punctuation">.</span>java
    │   │ 	    │   │   │   └──	<span class="token class-name">JvmStack</span><span class="token punctuation">.</span>java	
    │   │ 	    │   │   └──	link 	
    │   │ 	    │   │       ├── <span class="token class-name">LinkAdvice</span><span class="token punctuation">.</span>java
    │   │ 	    │   │       └──	<span class="token class-name">LinkPlugin</span><span class="token punctuation">.</span>java	
    │   │ 	    │   ├──	<span class="token class-name">InterceptPoint</span><span class="token punctuation">.</span>java
    │   │ 	    │   ├──	<span class="token class-name">IPlugin</span><span class="token punctuation">.</span>java
    │   │ 	    │   └──	<span class="token class-name">PluginFactory</span><span class="token punctuation">.</span>java
    │   │ 	    │ 	
    │   │       ├──	track
    │   │ 	    │   ├── <span class="token class-name">Span</span><span class="token punctuation">.</span>java	
    │   │ 	    │   ├── <span class="token class-name">TrackContext</span><span class="token punctuation">.</span>java	
    │   │ 	    │   └── <span class="token class-name">TrackManager</span><span class="token punctuation">.</span>java	
    │   │	    └── <span class="token class-name">MyAgent</span><span class="token punctuation">.</span>java
    │	└── resources
    │       └── <span class="token constant">META</span><span class="token operator">-</span><span class="token constant">INF</span>
    │           └── <span class="token constant">MANIFEST</span><span class="token punctuation">.</span><span class="token constant">MF</span> 	
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>JvmAdvice.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JvmAdvice</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Advice.OnMethodExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JvmStack</span><span class="token punctuation">.</span><span class="token function">printMemoryInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JvmStack</span><span class="token punctuation">.</span><span class="token function">printGCInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>JvmPlugin.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JvmPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">IPlugin</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;jvm&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">buildInterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
                <span class="token keyword">new</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TypeDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildTypesMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">nameStartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;org.itstack.demo.test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MethodDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildMethodsMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">isMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">nameStartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Class</span> <span class="token function">adviceClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">JvmAdvice</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>LinkAdvice.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkAdvice</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Advice.OnMethodEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">enter</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Advice.Origin</span><span class="token punctuation">(</span><span class="token string">&quot;#t&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> className<span class="token punctuation">,</span> <span class="token annotation punctuation">@Advice.Origin</span><span class="token punctuation">(</span><span class="token string">&quot;#m&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> methodName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Span</span> currentSpan <span class="token operator">=</span> <span class="token class-name">TrackManager</span><span class="token punctuation">.</span><span class="token function">getCurrentSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> currentSpan<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> linkId <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackContext</span><span class="token punctuation">.</span><span class="token function">setLinkId</span><span class="token punctuation">(</span>linkId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">TrackManager</span><span class="token punctuation">.</span><span class="token function">createEntrySpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Advice.OnMethodExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Advice.Origin</span><span class="token punctuation">(</span><span class="token string">&quot;#t&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> className<span class="token punctuation">,</span> <span class="token annotation punctuation">@Advice.Origin</span><span class="token punctuation">(</span><span class="token string">&quot;#m&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> methodName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Span</span> exitSpan <span class="token operator">=</span> <span class="token class-name">TrackManager</span><span class="token punctuation">.</span><span class="token function">getExitSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> exitSpan<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链路追踪(MQ)：&quot;</span> <span class="token operator">+</span> exitSpan<span class="token punctuation">.</span><span class="token function">getLinkId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> className <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> methodName <span class="token operator">+</span> <span class="token string">&quot; 耗时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> exitSpan<span class="token punctuation">.</span><span class="token function">getEnterTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>LinkPlugin.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">IPlugin</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">buildInterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
                <span class="token keyword">new</span> <span class="token class-name">InterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TypeDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildTypesMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">nameStartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;org.itstack.demo.test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MethodDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildMethodsMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">isMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token class-name">ElementMatchers</span><span class="token punctuation">.</span><span class="token function">nameStartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Class</span> <span class="token function">adviceClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LinkAdvice</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>InterceptPoint.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 拦截点
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InterceptPoint</span> <span class="token punctuation">{</span>

    <span class="token comment">//类匹配规则</span>
    <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TypeDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildTypesMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//方法匹配规则</span>
    <span class="token class-name">ElementMatcher</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MethodDescription</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildMethodsMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>IPlugin.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 监控组件
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IPlugin</span> <span class="token punctuation">{</span>

    <span class="token comment">//名称</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//监控点</span>
    <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">buildInterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//拦截器类</span>
    <span class="token class-name">Class</span> <span class="token function">adviceClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PluginFactory.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PluginFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IPlugin</span><span class="token punctuation">&gt;</span></span> pluginGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">//链路监控</span>
        pluginGroup<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//Jvm监控</span>
        pluginGroup<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JvmPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>TrackManager.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 追踪管控
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TrackManager</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stack</span><span class="token punctuation">&lt;</span><span class="token class-name">Span</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> track <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Span</span> <span class="token function">createSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Span</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> track<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            track<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> linkId<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            linkId <span class="token operator">=</span> <span class="token class-name">TrackContext</span><span class="token punctuation">.</span><span class="token function">getLinkId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>linkId <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                linkId <span class="token operator">=</span> <span class="token string">&quot;nvl&quot;</span><span class="token punctuation">;</span>
                <span class="token class-name">TrackContext</span><span class="token punctuation">.</span><span class="token function">setLinkId</span><span class="token punctuation">(</span>linkId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Span</span> span <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            linkId <span class="token operator">=</span> span<span class="token punctuation">.</span><span class="token function">getLinkId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackContext</span><span class="token punctuation">.</span><span class="token function">setLinkId</span><span class="token punctuation">(</span>linkId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Span</span><span class="token punctuation">(</span>linkId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Span</span> <span class="token function">createEntrySpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Span</span> span <span class="token operator">=</span> <span class="token function">createSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Span</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> track<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> span<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Span</span> <span class="token function">getExitSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Span</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> track<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TrackContext</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Span</span> <span class="token function">getCurrentSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Span</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> track<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyAgent.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 博客：http://itstack.org
 * 论坛：http://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛获取学习源码｝
 * create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAgent</span> <span class="token punctuation">{</span>

    <span class="token comment">//JVM 首先尝试在代理类上调用以下方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">premain</span><span class="token punctuation">(</span><span class="token class-name">String</span> agentArgs<span class="token punctuation">,</span> <span class="token class-name">Instrumentation</span> inst<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;基于javaagent链路追踪｛源码微信公众号：bugstack虫洞栈｝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================================================\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AgentBuilder</span> agentBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AgentBuilder<span class="token punctuation">.</span>Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IPlugin</span><span class="token punctuation">&gt;</span></span> pluginGroup <span class="token operator">=</span> <span class="token class-name">PluginFactory</span><span class="token punctuation">.</span>pluginGroup<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">IPlugin</span> plugin <span class="token operator">:</span> pluginGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">InterceptPoint</span><span class="token punctuation">[</span><span class="token punctuation">]</span> interceptPoints <span class="token operator">=</span> plugin<span class="token punctuation">.</span><span class="token function">buildInterceptPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">InterceptPoint</span> point <span class="token operator">:</span> interceptPoints<span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token class-name">AgentBuilder<span class="token punctuation">.</span>Transformer</span> transformer <span class="token operator">=</span> <span class="token punctuation">(</span>builder<span class="token punctuation">,</span> typeDescription<span class="token punctuation">,</span> classLoader<span class="token punctuation">,</span> javaModule<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    builder <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">Advice</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span><span class="token function">adviceClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span><span class="token function">buildMethodsMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> builder<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
                agentBuilder <span class="token operator">=</span> agentBuilder<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span><span class="token function">buildTypesMatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>transformer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//监听</span>
        <span class="token class-name">AgentBuilder<span class="token punctuation">.</span>Listener</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AgentBuilder<span class="token punctuation">.</span>Listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onDiscovery</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">JavaModule</span> javaModule<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTransformation</span><span class="token punctuation">(</span><span class="token class-name">TypeDescription</span> typeDescription<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">JavaModule</span> javaModule<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">,</span> <span class="token class-name">DynamicType</span> dynamicType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;onTransformation：&quot;</span> <span class="token operator">+</span> typeDescription<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onIgnored</span><span class="token punctuation">(</span><span class="token class-name">TypeDescription</span> typeDescription<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">JavaModule</span> javaModule<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">JavaModule</span> javaModule<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onComplete</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">JavaModule</span> javaModule<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        agentBuilder<span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">installOn</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MANIFEST.MF</p></blockquote><div class="language-其他语言 line-numbers-mode" data-ext="其他语言"><pre class="language-其他语言"><code>Manifest-Version: 1.0
Premain-Class: org.itstack.demo.agent.MyAgent
Can-Redefine-Classes: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ApiTest.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">*</span><span class="token operator">*</span>
 <span class="token operator">*</span> 链路追踪
 <span class="token operator">*</span> <span class="token constant">VM</span> options：
 <span class="token operator">*</span> <span class="token operator">-</span>javaagent<span class="token operator">:</span><span class="token class-name">E</span><span class="token operator">:</span>\\itstack\\<span class="token constant">GIT</span>\\itstack<span class="token punctuation">.</span>org\\itstack<span class="token operator">-</span>demo<span class="token operator">-</span>agent\\itstack<span class="token operator">-</span>demo<span class="token operator">-</span>agent<span class="token operator">-</span><span class="token number">06</span>\\target\\itstack<span class="token operator">-</span>demo<span class="token operator">-</span>agent<span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">1.0</span><span class="token number">.0</span><span class="token operator">-</span><span class="token constant">SNAPSHOT</span><span class="token punctuation">.</span>jar<span class="token operator">=</span>testargs
 <span class="token operator">*</span>
 <span class="token operator">*</span> 按需打开需要测试的模块
 <span class="token operator">*</span> 链路监控
 <span class="token operator">*</span> pluginGroup<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token operator">*</span> <span class="token class-name">Jvm</span>监控
 <span class="token operator">*</span> pluginGroup<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JvmPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token operator">*</span>
 <span class="token operator">*</span> 博客：http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>itstack<span class="token punctuation">.</span>org
 <span class="token operator">*</span> 论坛：http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>bugstack<span class="token punctuation">.</span>cn
 <span class="token operator">*</span> 公众号：bugstack虫洞栈  ｛获取学习源码｝
 <span class="token operator">*</span> create by fuzhengwei on <span class="token number">2019</span>
 <span class="token operator">*</span>
 <span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//线程一</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ApiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">http_lt1</span><span class="token punctuation">(</span><span class="token string">&quot;哪咤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//线程二</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">ApiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">http_lt2</span><span class="token punctuation">(</span><span class="token string">&quot;悟空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">http_lt1</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;测试结果：hi1 &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">http_lt2</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">http_lt2</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;测试结果：hi2 &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">http_lt3</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">http_lt3</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;测试结果：hi3 &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><div class="language-其他语言 line-numbers-mode" data-ext="其他语言"><pre class="language-其他语言"><code>基于javaagent链路追踪｛源码微信公众号：bugstack虫洞栈｝
==========================================================

onTransformation：class org.itstack.demo.test.ApiTest
测试结果：hi2 悟空
测试结果：hi1 哪咤
测试结果：hi3 悟空
链路追踪(MQ)：608a1cbf-ef1f-4195-bdc7-c3729a114f8d org.itstack.demo.test.ApiTest.http_lt3 耗时：111ms
测试结果：hi2 哪咤

init: 192MB	 max: 2708MB	 used: 43MB	 committed: 184MB	 use rate: 23%
init: 2MB	 max: 0MB	 used: 13MB	 committed: 14MB	 use rate: 95%

name: PS Scavenge	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space]
name: PS MarkSweep	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space, PS Old Gen]
-------------------------------------------------------------------------------------------------
链路追踪(MQ)：608a1cbf-ef1f-4195-bdc7-c3729a114f8d org.itstack.demo.test.ApiTest.http_lt2 耗时：338ms

init: 192MB	 max: 2708MB	 used: 43MB	 committed: 184MB	 use rate: 23%
init: 2MB	 max: 0MB	 used: 13MB	 committed: 14MB	 use rate: 95%

name: PS Scavenge	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space]
name: PS MarkSweep	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space, PS Old Gen]
-------------------------------------------------------------------------------------------------
测试结果：hi3 哪咤
链路追踪(MQ)：2f28ed75-650a-4f0f-bd69-fe0709a8985e org.itstack.demo.test.ApiTest.http_lt3 耗时：221ms

init: 192MB	 max: 2708MB	 used: 43MB	 committed: 184MB	 use rate: 23%
init: 2MB	 max: 0MB	 used: 13MB	 committed: 14MB	 use rate: 95%

name: PS Scavenge	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space]
name: PS MarkSweep	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space, PS Old Gen]
-------------------------------------------------------------------------------------------------
链路追踪(MQ)：2f28ed75-650a-4f0f-bd69-fe0709a8985e org.itstack.demo.test.ApiTest.http_lt2 耗时：316ms

init: 192MB	 max: 2708MB	 used: 43MB	 committed: 184MB	 use rate: 23%
init: 2MB	 max: 0MB	 used: 13MB	 committed: 14MB	 use rate: 95%

name: PS Scavenge	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space]
name: PS MarkSweep	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space, PS Old Gen]
-------------------------------------------------------------------------------------------------
链路追踪(MQ)：2f28ed75-650a-4f0f-bd69-fe0709a8985e org.itstack.demo.test.ApiTest.http_lt1 耗时：547ms

init: 192MB	 max: 2708MB	 used: 43MB	 committed: 184MB	 use rate: 23%
init: 2MB	 max: 0MB	 used: 13MB	 committed: 14MB	 use rate: 95%

name: PS Scavenge	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space]
name: PS MarkSweep	 count:0	 took:0	 pool name:[PS Eden Space, PS Survivor Space, PS Old Gen]
-------------------------------------------------------------------------------------------------

Process finished with exit code 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>基于JavaAgent的全链路监控</strong>」获取本文源码&amp;更多原创专题案例！</p>`,35);function v(m,b){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[s("作者：小傅哥 "),k,s("博客："),n("a",d,[s("https://bugstack.cn"),o(a)])]),r])}const y=t(l,[["render",v],["__file","2019-07-15-jiyuJavaAgentdequanlianlujiankongliu《kaifayingyongjijiankong》.html.vue"]]);export{y as default};
