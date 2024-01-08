import{_ as t,r as p,o,c as l,a as n,b as s,d as e,e as c}from"./app-cCF93fuz.js";const i={},u=n("h1",{id:"第9章-服务网关zuul-动态路由与权限过滤器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第9章-服务网关zuul-动态路由与权限过滤器","aria-hidden":"true"},"#"),s(" 第9章：服务网关Zuul 动态路由与权限过滤器")],-1),r=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=c(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><p>在实际的业务开发中不只是将路由配置放到文件中，而是需要进行动态管理并且可以在变化时不用重启系统就可以更新。与此同时还需要在接口访问的时候，可以增加一些权限验证以防止恶意访问。</p><ol><li>Filter过滤器，通过继承实现对应方法可以进行控制过滤；</li></ol><ul><li>PRE：这种过滤器在请求被路由之前调用。我们可利用这种过滤器实现身份验证、在集群中选择请求的微服务、记录调试信息等。</li><li>ROUTING：这种过滤器将请求路由到微服务。这种过滤器用于构建发送给微服务的请求，并使用 Apache HttpClient 或 Netfilx Ribbon 请求微服务。</li><li>POST：这种过滤器在路由到微服务以后执行。这种过滤器可用来为响应添加标准的 HTTP Header、收集统计信息和指标、将响应从微服务发送给客户端等。</li><li>ERROR：在其他阶段发生错误时执行该过滤器。 除了默认的过滤器类型，Zuul 还允许我们创建自定义的过滤器类型。例如，我们可以定制一种 STATIC 类型的过滤器，直接在 Zuul 中生成响应，而不将请求转发到后端的微服务。</li></ul><ol start="2"><li>自定义路由，同构实现SimpleRouteLocator和RefreshableRouteLocator自动刷新</li></ol><ul><li>protected Map&lt;String, ZuulRoute&gt; locateRoutes()：此方法是加载路由配置的，父类中是获取properties中的路由配置，可以通过扩展此方法，达到动态获取配置的目的</li><li>public Route getMatchingRoute(String path)：此方法是根据访问路径，获取匹配的路由配置，父类中已经匹配到路由，可以通过路由id查找自定义配置的路由规则，以达到根据自定义规则动态分流的效果</li></ul><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ul><li>jdk 1.8、idea2018、Maven3</li><li>Spring Boot 2.0.6.RELEASE</li><li>Spring Cloud Finchley.SR2</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span><span class="token number">08</span>
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>client
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── web
│           │        │   └── <span class="token class-name">EurekaClientController</span><span class="token punctuation">.</span>java
│           │        └── <span class="token class-name">EurekaClientApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>eureka<span class="token operator">-</span>server
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        └── <span class="token class-name">EurekaServerApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>hystrix<span class="token operator">-</span>feign
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── service
│           │        │   ├── hystrix
│           │        │   │   └── <span class="token class-name">FeignServiceHystrix</span><span class="token punctuation">.</span>java
│           │        │   └── <span class="token class-name">FeignService</span><span class="token punctuation">.</span>java
│           │        ├── web
│           │        │   └── <span class="token class-name">FeignController</span><span class="token punctuation">.</span>java
│           │        └── <span class="token class-name">FeignApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>hystrix<span class="token operator">-</span>ribbon
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── service
│           │        │   └── <span class="token class-name">RibbonService</span><span class="token punctuation">.</span>java
│           │        ├── web
│           │        │   └── <span class="token class-name">RibbonController</span><span class="token punctuation">.</span>java      
│           │        └── <span class="token class-name">RibbonApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               └── application<span class="token punctuation">.</span>yml
└── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>zuul
    └── src
        └── main
            ├── java
            │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo   
            │        ├── config
            │        │   └── <span class="token class-name">ZuulConfig</span><span class="token punctuation">.</span>java
            │        ├── filter
            │        │   └── <span class="token class-name">TokenFilter</span><span class="token punctuation">.</span>java
            │        ├── router
            │        │   └── <span class="token class-name">RouteLocator</span><span class="token punctuation">.</span>java
            │        ├── service
            │        │   └── <span class="token class-name">RefreshRouteService</span><span class="token punctuation">.</span>java
            │        └── <span class="token class-name">ZuulApplication</span><span class="token punctuation">.</span>java
            └── resources   
                └── application<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码欢迎关注公众号：bugstack虫洞栈 回复“SpringCloud专题”进行下载</strong></p><blockquote><p>itstack-demo-springcloud-zuul &amp; 动态路由与权限过滤</p></blockquote><ol><li><p>通过RouteLocator实现自己的动态路由配置，其实就是把配置文件内容转移到这里用代码类实现，并且可以根据需要修改为从数据库里获取。</p></li><li><p>TokenFilter提供了权限验证功能，当用户访问时候会带上token否则拦截</p></li><li><p>此外还提供了自动刷新的接口，用于外部调用刷新配置</p></li><li><p>最后我们需要修改application配置，zuul中还需要排除不做路由的接口[刷新权限接口]</p></li></ol><blockquote><p>config/ZuulConfig.java &amp; 路由配置类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 路由配置
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZuulConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ZuulProperties</span> zuulProperties<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ServerProperties</span> server<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RouteLocator</span> <span class="token function">routeLocator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RouteLocator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>server<span class="token punctuation">.</span><span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>zuulProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>filter/TokenFilter.java &amp; 权限校验类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenFilter</span> <span class="token keyword">extends</span> <span class="token class-name">ZuulFilter</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 过滤器的类型，它决定过滤器在请求的哪个生命周期中执行。
     * FilterConstants.PRE_TYPE：代表会在请求被路由之前执行。
     * PRE、ROUTING、POST、ERROR
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">filterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterConstants</span><span class="token punctuation">.</span><span class="token constant">PRE_TYPE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * filter执行顺序，通过数字指定。[数字越大，优先级越低]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">filterOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断该过滤器是否需要被执行。这里我们直接返回了true，因此该过滤器对所有请求都会生效。
     * 实际运用中我们可以利用该函数来指定过滤器的有效范围。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * 具体执行逻辑
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RequestContext</span> ctx <span class="token operator">=</span> <span class="token class-name">RequestContext</span><span class="token punctuation">.</span><span class="token function">getCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> token<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span><span class="token function">setSendZuulResponse</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">setResponseStatusCode</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">setResponseBody</span><span class="token punctuation">(</span><span class="token string">&quot;refuse! token is empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>router/RouteLocator.java &amp; 路由类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RouteLocator</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleRouteLocator</span> <span class="token keyword">implements</span> <span class="token class-name">RefreshableRouteLocator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ZuulProperties</span> properties<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RouteLocator</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletPath<span class="token punctuation">,</span> <span class="token class-name">ZuulProperties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>servletPath<span class="token punctuation">,</span> properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>properties <span class="token operator">=</span> properties<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">doRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> <span class="token function">locateRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> routesMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//从application.properties中加载路由信息</span>
        routesMap<span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">locateRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//从db中加载路由信息</span>
        routesMap<span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span><span class="token function">routesConfigGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//优化一下配置</span>
        <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> values <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> routesMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> path <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// Prepend with slash if not already present.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">hasText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>properties<span class="token punctuation">.</span><span class="token function">getPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                path <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>properties<span class="token punctuation">.</span><span class="token function">getPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> path<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            values<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> values<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 路由配置组，可以从数据库中读取
     * 基本配置与写在文件中配置类似，如下；
     * #  routes:
     * #    api-a:
     * #      path: /route-a/**
     * #      serviceId: itstack-demo-springcloud-feign
     * #    api-b:
     * #      path: /route-b/**
     * #      serviceId: itstack-demo-springcloud-ribbon
     * <span class="token keyword">@return</span> 配置组内容
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> <span class="token function">routesConfigGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">&gt;</span></span> routes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ZuulRoute</span> zuulRoute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZuulRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;route-a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">&quot;/route-a/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setServiceId</span><span class="token punctuation">(</span><span class="token string">&quot;itstack-demo-springcloud-feign&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果使用了注册中心，那么可以根据serviceId进行访问。</span>
        <span class="token comment">// zuulRoute.setUrl(&quot;http://localhost:9001&quot;);</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setRetryable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setStripPrefix</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zuulRoute<span class="token punctuation">.</span><span class="token function">setSensitiveHeaders</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        routes<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>zuulRoute<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> zuulRoute<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> routes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>service/RefreshRouteService.java &amp; 路由刷新服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RefreshRouteService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationEventPublisher</span> publisher<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RouteLocator</span> routeLocator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">refreshRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RoutesRefreshedEvent</span> routesRefreshedEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoutesRefreshedEvent</span><span class="token punctuation">(</span>routeLocator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        publisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span>routesRefreshedEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ZuulApplication.java &amp; 启动服务注意注解，另外提供了服务接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 专注原创技术专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableZuulProxy</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZuulApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ZuulApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">TokenFilter</span> <span class="token function">tokenFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TokenFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RefreshRouteService</span> refreshRouteService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ZuulHandlerMapping</span> zuulHandlerMapping<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;api/refresh&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        refreshRouteService<span class="token punctuation">.</span><span class="token function">refreshRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;api/queryRouteInfo&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryRouteInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> zuulHandlerMapping<span class="token punctuation">.</span><span class="token function">getHandlerMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml &amp; 配置文件修改，路由过滤</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">10001</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>ddd<span class="token operator">-</span>zuul

eureka<span class="token operator">:</span>
  client<span class="token operator">:</span>
    serviceUrl<span class="token operator">:</span>
      defaultZone<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">7397</span><span class="token operator">/</span>eureka<span class="token operator">/</span>

# 动态路由，以下配置注释；
# http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">10001</span><span class="token operator">/</span>route<span class="token operator">-</span>a<span class="token operator">/</span>api<span class="token operator">/</span>queryUserInfo<span class="token operator">?</span>userId<span class="token operator">=</span><span class="token number">111</span>
# http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">10001</span><span class="token operator">/</span>route<span class="token operator">-</span>b<span class="token operator">/</span>api<span class="token operator">/</span>queryUserInfo<span class="token operator">?</span>userId<span class="token operator">=</span><span class="token number">111</span>
zuul<span class="token operator">:</span>
   ignoredPatterns<span class="token operator">:</span> <span class="token operator">/</span>api<span class="token doc-comment comment">/**
#  routes:
#    api-a:
#      path: /route-a/**
#      serviceId: itstack-demo-springcloud-feign
#    api-b:
#      path: /route-b/**
#      serviceId: itstack-demo-springcloud-ribbon
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证" aria-hidden="true">#</a> 测试验证</h2><ol><li>分别启动如下服务； <ol><li>itstack-demo-springcloud-eureka-server 服务注册与发现</li><li>itstack-demo-springcloud-eureka-client 接口提供方</li><li>itstack-demo-springcloud-hystrix-feign 调用端</li><li>itstack-demo-springcloud-hystrix-ribbon 调用端</li><li>itstack-demo-springcloud-zuul 路由服务</li></ol></li><li>可测试接口列表； <ol><li>路由服务：http://localhost:10001/route-a/api/queryUserInfo?userId=111&amp;token=111<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Hi</span> 微信公众号：bugstack虫洞栈 <span class="token operator">|</span> <span class="token number">111</span> <span class="token operator">&gt;</span><span class="token operator">:</span> from eureka client port<span class="token operator">:</span> <span class="token number">8001</span> <span class="token class-name">From</span> <span class="token class-name">Feign</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>刷新配置：http://localhost:10001/api/refresh</li><li>内容配置：http://localhost:10001/api/queryRouteInfo</li></ol></li></ol><h2 id="综上总结" tabindex="-1"><a class="header-anchor" href="#综上总结" aria-hidden="true">#</a> 综上总结</h2><ol><li>路由服务可以方便的帮我们控制业务类型的区分访问，同时自动刷新可以更加方便的使用网关路由</li><li>权限验证是几乎不可少的在实际开发过程中会经常用到，所有的接口必须是安全可靠的，保证数据不泄露</li><li>另外还可以考虑从入参的用户身份进行路由，这样可以把数据库路由提前，让不同用户组直接访问到不同的数据库组</li></ol><h2 id="文章汇总" tabindex="-1"><a class="header-anchor" href="#文章汇总" aria-hidden="true">#</a> 文章汇总</h2>`,31),v={href:"https://bugstack.cn/itstack-demo-springcloud/2019/10/31/Spring-Cloud(%E9%9B%B6)-%E6%80%BB%E6%9C%89%E4%B8%80%E5%81%8F%E6%A6%82%E8%BF%B0%E5%91%8A%E8%AF%89%E4%BD%A0SpringCloud%E6%98%AF%E4%BB%80%E4%B9%88.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/01/Spring-Cloud(%E4%B8%80)-%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0-Eureka.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/02/Spring-Cloud(%E4%BA%8C)-%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E4%B8%8E%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E8%B0%83%E7%94%A8-Eureka.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/03/Spring-Cloud(%E4%B8%89)-%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%BF%AB%E9%80%9F%E5%A4%B1%E8%B4%A5%E7%86%94%E6%96%AD%E9%99%8D%E7%BA%A7%E4%BF%9D%E6%8A%A4-Hystrix.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/04/Spring-Cloud(%E5%9B%9B)-%E6%9C%8D%E5%8A%A1%E5%93%8D%E5%BA%94%E6%80%A7%E8%83%BD%E6%88%90%E5%8A%9F%E7%8E%87%E7%9B%91%E6%8E%A7-Hystrix.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/05/Spring-Cloud(%E4%BA%94)-Turbine-%E7%9B%91%E6%8E%A7%E4%BF%A1%E6%81%AF%E8%81%9A%E5%90%88%E5%B1%95%E7%A4%BA-Hystrix.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/06/Spring-Cloud(%E5%85%AD)-%E5%9F%BA%E4%BA%8EGithub-Webhook%E5%8A%A8%E6%80%81%E5%88%B7%E6%96%B0%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/07/Spring-Cloud(%E4%B8%83)-%E5%9F%BA%E4%BA%8ERabbitMQ%E6%B6%88%E6%81%AF%E6%80%BB%E7%BA%BF%E6%96%B9%E5%BC%8F%E5%88%B7%E6%96%B0%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://bugstack.cn/itstack-demo-springcloud/2019/11/08/Spring-Cloud(%E5%85%AB)-%E6%9C%8D%E5%8A%A1%E7%BD%91%E5%85%B3%E8%B7%AF%E7%94%B1-Zuul1.html",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,[s("微信搜索「"),n("strong",null,"bugstack虫洞栈"),s("」公众号，关注后回复「"),n("strong",null,"SpringCloud专题"),s("」获取本文源码&更多原创专题案例！")],-1);function A(B,S){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[s("作者：小傅哥 "),r,s("博客："),n("a",d,[s("https://bugstack.cn"),e(a)])]),k,n("ol",null,[n("li",null,[n("a",v,[s("Spring Cloud(零)《总有一偏概述告诉你SpringCloud是什么》"),e(a)])]),n("li",null,[n("a",m,[s("Spring Cloud(一)《服务集群注册与发现 Eureka》"),e(a)])]),n("li",null,[n("a",b,[s("Spring Cloud(二)《服务提供与负载均衡调用 Eureka》"),e(a)])]),n("li",null,[n("a",g,[s("Spring Cloud(三)《应用服务快速失败熔断降级保护 Hystrix》"),e(a)])]),n("li",null,[n("a",h,[s("Spring Cloud(四)《服务响应性能成功率监控 Hystrix》"),e(a)])]),n("li",null,[n("a",E,[s("Spring Cloud(五)《Turbine 监控信息聚合展示 Hystrix》"),e(a)])]),n("li",null,[n("a",f,[s("Spring Cloud(六)《基于github webhook动态刷新服务配置》"),e(a)])]),n("li",null,[n("a",y,[s("Spring Cloud(七)《基于RabbitMQ消息总线方式刷新配置服务》"),e(a)])]),n("li",null,[n("a",w,[s("Spring Cloud(八)《服务网关路由 Zuul1》"),e(a)])])]),R])}const q=t(i,[["render",A],["__file","2019-11-24-Spring Cloudjiu《fuwuwangguanZuul dongtailuyouyuquanxianguolvqi》.html.vue"]]);export{q as default};
