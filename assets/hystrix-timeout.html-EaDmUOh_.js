import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as l}from"./app-3RcBQnkC.js";const u="/code-note/assets/220px-Internet_dog-ZOgricVB.jpg",i={},r=n("h1",{id:"基于-timeout-机制为服务接口调用超时提供安全保护",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基于-timeout-机制为服务接口调用超时提供安全保护","aria-hidden":"true"},"#"),s(" 基于 timeout 机制为服务接口调用超时提供安全保护")],-1),k=n("p",null,[s("一般来说，在调用依赖服务的接口的时候，比较常见的一个问题就是"),n("strong",null,"超时"),s("。超时是在一个复杂的分布式系统中，导致系统不稳定，或者系统抖动。出现大量超时，线程资源会被 hang 死，从而导致吞吐量大幅度下降，甚至服务崩溃。")],-1),d=n("p",null,"你去调用各种各样的依赖服务，特别是在大公司，你甚至都不认识开发一个服务的人，你都不知道那个人的技术水平怎么样，对那个人根本不了解。",-1),m={href:"https://en.wikipedia.org/wiki/On_the_Internet,_nobody_knows_you%27re_a_dog",target:"_blank",rel:"noopener noreferrer"},v=l('<p><img src="'+u+`" alt="220px-Internet_dog.jpg"></p><p>像特别复杂的分布式系统，特别是在大公司里，多个团队、大型协作，你可能都不知道服务是谁的，很可能说开发服务的那个哥儿们甚至是一个实习生。依赖服务的接口性能可能很不稳定，有时候 2ms，有时候 200ms，甚至 2s，都有可能。</p><p>如果你不对各种依赖服务接口的调用做超时控制，来给你的服务提供安全保护措施，那么很可能你的服务就被各种垃圾的依赖服务的性能给拖死了。大量的接口调用很慢，大量的线程被卡死。如果你做了资源的隔离，那么也就是线程池的线程被卡死，但其实我们可以做超时控制，没必要让它们全卡死。</p><h3 id="timeoutmilliseconds" tabindex="-1"><a class="header-anchor" href="#timeoutmilliseconds" aria-hidden="true">#</a> TimeoutMilliseconds</h3><p>在 Hystrix 中，我们可以手动设置 timeout 时长，如果一个 command 运行时间超过了设定的时长，那么就被认为是 timeout，然后 Hystrix command 标识为 timeout，同时执行 fallback 降级逻辑。</p><p><code>TimeoutMilliseconds</code> 默认值是 1000，也就是 1000ms。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">withExecutionTimeoutInMilliseconds</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timeoutenabled" tabindex="-1"><a class="header-anchor" href="#timeoutenabled" aria-hidden="true">#</a> TimeoutEnabled</h3><p>这个参数用于控制是否要打开 timeout 机制，默认值是 true。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withExecutionTimeoutEnabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例-demo" tabindex="-1"><a class="header-anchor" href="#实例-demo" aria-hidden="true">#</a> 实例 Demo</h2><p>我们在 command 中，将超时时间设置为 500ms，然后在 run() 方法中，设置休眠时间 1s，这样一个请求过来，直接休眠 1s，结果就会因为超时而执行降级逻辑。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetProductInfoCommand</span> <span class="token keyword">extends</span> <span class="token class-name">HystrixCommand</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProductInfo</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> productId<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HystrixCommandKey</span> <span class="token constant">KEY</span> <span class="token operator">=</span> <span class="token class-name">HystrixCommandKey<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">asKey</span><span class="token punctuation">(</span><span class="token string">&quot;GetProductInfoCommand&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">GetProductInfoCommand</span><span class="token punctuation">(</span><span class="token class-name">Long</span> productId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token class-name">Setter</span><span class="token punctuation">.</span><span class="token function">withGroupKey</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandGroupKey<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">asKey</span><span class="token punctuation">(</span><span class="token string">&quot;ProductInfoService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andCommandKey</span><span class="token punctuation">(</span><span class="token constant">KEY</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andThreadPoolPropertiesDefaults</span><span class="token punctuation">(</span><span class="token class-name">HystrixThreadPoolProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withCoreSize</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withMaxQueueSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withQueueSizeRejectionThreshold</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andCommandPropertiesDefaults</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerRequestVolumeThreshold</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerErrorThresholdPercentage</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerSleepWindowInMilliseconds</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
                        <span class="token comment">// 设置是否打开超时，默认是true</span>
                        <span class="token punctuation">.</span><span class="token function">withExecutionTimeoutEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                        <span class="token comment">// 设置超时时间，默认1000(ms)</span>
                        <span class="token punctuation">.</span><span class="token function">withExecutionTimeoutInMilliseconds</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withFallbackIsolationSemaphoreMaxConcurrentRequests</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>productId <span class="token operator">=</span> productId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">ProductInfo</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用接口查询商品数据，productId=&quot;</span> <span class="token operator">+</span> productId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 休眠1s</span>
        <span class="token class-name">TimeUtils</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8081/getProductInfo?productId=&quot;</span> <span class="token operator">+</span> productId<span class="token punctuation">;</span>
        <span class="token class-name">String</span> response <span class="token operator">=</span> <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">sendGetRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token class-name">ProductInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">ProductInfo</span> <span class="token function">getFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ProductInfo</span> productInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productInfo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;降级商品&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> productInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在测试类中，我们直接发起请求。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimeoutTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">sendGetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:8080/getProductInfo?productId=1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果中可以看到，打印出了降级商品相关信息。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">ProductInfo</span><span class="token punctuation">(</span>id<span class="token operator">=</span>null<span class="token punctuation">,</span> name<span class="token operator">=</span>降级商品<span class="token punctuation">,</span> price<span class="token operator">=</span>null<span class="token punctuation">,</span> pictureList<span class="token operator">=</span>null<span class="token punctuation">,</span> specification<span class="token operator">=</span>null<span class="token punctuation">,</span> service<span class="token operator">=</span>null<span class="token punctuation">,</span> color<span class="token operator">=</span>null<span class="token punctuation">,</span> size<span class="token operator">=</span>null<span class="token punctuation">,</span> shopId<span class="token operator">=</span>null<span class="token punctuation">,</span> modifiedTime<span class="token operator">=</span>null<span class="token punctuation">,</span> cityId<span class="token operator">=</span>null<span class="token punctuation">,</span> cityName<span class="token operator">=</span>null<span class="token punctuation">,</span> brandId<span class="token operator">=</span>null<span class="token punctuation">,</span> brandName<span class="token operator">=</span>null<span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iphone7手机&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5599</span><span class="token punctuation">,</span> <span class="token string">&quot;pictureList&quot;</span><span class="token operator">:</span><span class="token string">&quot;a.jpg,b.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;specification&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iphone7的规格&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;service&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iphone7的售后服务&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红色,白色,黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;modifiedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017-01-01 12:00:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cityId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;brandId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function b(h,g){const a=p("ExternalLinkIcon");return e(),o("div",null,[r,k,d,n("p",null,[s('Peter Steiner 说过，"'),n("a",m,[s("On the Internet, nobody knows you're a dog"),c(a)]),s('"，也就是说在互联网的另外一头，你都不知道甚至坐着一条狗。')]),v])}const q=t(i,[["render",b],["__file","hystrix-timeout.html.vue"]]);export{q as default};
