import{_ as p,r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const l="/code-note/assets/hystrix-circuit-breaker-state-machine-PuAghgV7.png",r={},u=t('<h1 id="深入-hystrix-断路器执行原理" tabindex="-1"><a class="header-anchor" href="#深入-hystrix-断路器执行原理" aria-hidden="true">#</a> 深入 Hystrix 断路器执行原理</h1><h3 id="状态机" tabindex="-1"><a class="header-anchor" href="#状态机" aria-hidden="true">#</a> 状态机</h3><p>Hystrix 断路器有三种状态，分别是关闭（Closed）、打开（Open）与半开（Half-Open），三种状态转化关系如下：</p><p><img src="'+l+'" alt="image-20191104211642271"></p><ol><li><code>Closed</code> 断路器关闭：调用下游的请求正常通过</li><li><code>Open</code> 断路器打开：阻断对下游服务的调用，直接走 Fallback 逻辑</li><li><code>Half-Open</code> 断路器处于半开状态：<a href="#circuitBreaker.sleepWindowInMilliseconds">SleepWindowInMilliseconds</a></li></ol>',5),d={id:"enabled",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#enabled","aria-hidden":"true"},"#",-1),m={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitbreakerenabled",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerEnabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>控制断路器是否工作，包括跟踪依赖服务调用的健康状况，以及对异常情况过多时是否允许触发断路。默认值 <code>true</code>。</p>`,2),h={id:"circuitbreaker-requestvolumethreshold",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#circuitbreaker-requestvolumethreshold","aria-hidden":"true"},"#",-1),f={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitbreakerrequestvolumethreshold",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerRequestVolumeThreshold</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示在一次统计的<strong>时间滑动窗口中（这个参数也很重要，下面有说到）</strong>，至少经过多少个请求，才可能触发断路，默认值 20。**经过 Hystrix 断路器的流量只有在超过了一定阈值后，才有可能触发断路。**比如说，要求在 10s 内经过断路器的流量必须达到 20 个，而实际经过断路器的请求有 19 个，即使这 19 个请求全都失败，也不会去判断要不要断路。</p>`,2),g={id:"circuitbreaker-errorthresholdpercentage",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#circuitbreaker-errorthresholdpercentage","aria-hidden":"true"},"#",-1),_={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitBreaker.errorThresholdPercentage",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerErrorThresholdPercentage</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示异常比例达到多少，才会触发断路，默认值是 50(%)。</p>`,2),I={id:"circuitbreaker-sleepwindowinmilliseconds",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#circuitbreaker-sleepwindowinmilliseconds","aria-hidden":"true"},"#",-1),H={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitbreakersleepwindowinmilliseconds",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerSleepWindowInMilliseconds</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>断路器状态由 Close 转换到 Open，在之后 <code>SleepWindowInMilliseconds</code> 时间内，所有经过该断路器的请求会被断路，不调用后端服务，直接走 Fallback 降级机制，默认值 5000(ms)。</p><p>而在该参数时间过后，断路器会变为 <code>Half-Open</code> 半开闭状态，尝试让一条请求经过断路器，看能不能正常调用。如果调用成功了，那么就自动恢复，断路器转为 Close 状态。</p>`,3),q={id:"forceopen",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#forceopen","aria-hidden":"true"},"#",-1),S={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitbreakerforceopen",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerForceOpen</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设置为 true 的话，直接强迫打开断路器，相当于是手动断路了，手动降级，默认值是 <code>false</code>。</p>`,2),N={id:"forceclosed",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#forceclosed","aria-hidden":"true"},"#",-1),O={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#circuitbreakerforceclosed",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">withCircuitBreakerForceClosed</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设置为 true，直接强迫关闭断路器，相当于手动停止断路了，手动升级，默认值是 <code>false</code>。</p><h3 id="metrics-统计器" tabindex="-1"><a class="header-anchor" href="#metrics-统计器" aria-hidden="true">#</a> Metrics 统计器</h3>`,3),L=n("strong",null,"统计器（Metrics）",-1),F={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#metricsrollingstatstimeinmilliseconds",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#metricsrollingstatsnumbuckets",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zhenbianshu.github.io/2018/09/hystrix_configuration_analysis.html",target:"_blank",rel:"noopener noreferrer"},G=t(`<blockquote><p>一位乘客坐在正在行驶的列车的靠窗座位上，列车行驶的公路两侧种着一排挺拔的白杨树，随着列车的前进，路边的白杨树迅速从窗口滑过。我们用每棵树来代表一个请求，用列车的行驶代表时间的流逝，那么，列车上的这个窗口就是一个典型的滑动窗口，这个乘客能通过窗口看到的白杨树就是 Hystrix 要统计的数据。</p></blockquote><p>Hystrix 并不是只要有一条请求经过就去统计，而是将整个滑动窗口均分为 numBuckets 份，时间每经过一份就去统计一次。<strong>在经过一个时间窗口后，才会判断断路器状态要不要开启，请看下面的例子。</strong></p><h2 id="实例-demo" tabindex="-1"><a class="header-anchor" href="#实例-demo" aria-hidden="true">#</a> 实例 Demo</h2><h3 id="hystrixcommand-配置参数" tabindex="-1"><a class="header-anchor" href="#hystrixcommand-配置参数" aria-hidden="true">#</a> HystrixCommand 配置参数</h3><p>在 GetProductInfoCommand 中配置 Setter 断路器相关参数。</p><ul><li>滑动窗口中，最少 20 个请求，才可能触发断路。</li><li>异常比例达到 40% 时，才触发断路。</li><li>断路后 3000ms 内，所有请求都被 reject，直接走 fallback 降级，不会调用 run() 方法。3000ms 过后，变为 half-open 状态。</li></ul><p>run() 方法中，我们判断一下 productId 是否为 -1，是的话，直接抛出异常。这么写，我们之后测试的时候就可以传入 productId=-1，<strong>模拟服务执行异常</strong>了。</p><p>在降级逻辑中，我们直接给它返回降级商品就好了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetProductInfoCommand</span> <span class="token keyword">extends</span> <span class="token class-name">HystrixCommand</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProductInfo</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> productId<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HystrixCommandKey</span> <span class="token constant">KEY</span> <span class="token operator">=</span> <span class="token class-name">HystrixCommandKey<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">asKey</span><span class="token punctuation">(</span><span class="token string">&quot;GetProductInfoCommand&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">GetProductInfoCommand</span><span class="token punctuation">(</span><span class="token class-name">Long</span> productId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token class-name">Setter</span><span class="token punctuation">.</span><span class="token function">withGroupKey</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandGroupKey<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">asKey</span><span class="token punctuation">(</span><span class="token string">&quot;ProductInfoService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andCommandKey</span><span class="token punctuation">(</span><span class="token constant">KEY</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andCommandPropertiesDefaults</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandProperties<span class="token punctuation">.</span>Setter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token comment">// 是否允许断路器工作</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                        <span class="token comment">// 滑动窗口中，最少有多少个请求，才可能触发断路</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerRequestVolumeThreshold</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
                        <span class="token comment">// 异常比例达到多少，才触发断路，默认50%</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerErrorThresholdPercentage</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
                        <span class="token comment">// 断路后多少时间内直接reject请求，之后进入half-open状态，默认5000ms</span>
                        <span class="token punctuation">.</span><span class="token function">withCircuitBreakerSleepWindowInMilliseconds</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>productId <span class="token operator">=</span> productId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">ProductInfo</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用接口查询商品数据，productId=&quot;</span> <span class="token operator">+</span> productId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>productId <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8081/getProductInfo?productId=&quot;</span> <span class="token operator">+</span> productId<span class="token punctuation">;</span>
        <span class="token class-name">String</span> response <span class="token operator">=</span> <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">sendGetRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token class-name">ProductInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">ProductInfo</span> <span class="token function">getFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ProductInfo</span> productInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productInfo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;降级商品&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> productInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断路测试类" tabindex="-1"><a class="header-anchor" href="#断路测试类" aria-hidden="true">#</a> 断路测试类</h3><p>我们在测试类中，前 30 次请求，传入 productId=-1，然后休眠 3s，之后 70 次请求，传入 productId=1。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CircuitBreakerTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCircuitBreaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> baseURL <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8080/getProductInfo?productId=&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 传入-1，会抛出异常，然后走降级逻辑</span>
            <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">sendGetRequest</span><span class="token punctuation">(</span>baseURL <span class="token operator">+</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TimeUtils</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;After sleeping...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 传入1，走服务正常调用</span>
            <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">sendGetRequest</span><span class="token punctuation">(</span>baseURL <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h3><p>测试结果，我们可以明显看出系统断路与恢复的整个过程。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>调用接口查询商品数据，productId<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span>
<span class="token class-name">ProductInfo</span><span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> name<span class="token operator">=</span>降级商品<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> pictureList<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> specification<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> service<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> shopId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> modifiedTime<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> cityId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> cityName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> brandId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> brandName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
<span class="token comment">// 这里重复打印了 20 次上面的结果</span>


<span class="token class-name">ProductInfo</span><span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> name<span class="token operator">=</span>降级商品<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> pictureList<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> specification<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> service<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> shopId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> modifiedTime<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> cityId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> cityName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> brandId<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> brandName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
<span class="token comment">// 这里重复打印了 8 次上面的结果</span>


<span class="token comment">// 休眠 3s 后</span>
调用接口查询商品数据，productId<span class="token operator">=</span><span class="token number">1</span>
<span class="token class-name">ProductInfo</span><span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">=</span>iphone7手机<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token number">5599.0</span><span class="token punctuation">,</span> pictureList<span class="token operator">=</span>a<span class="token punctuation">.</span>jpg<span class="token punctuation">,</span>b<span class="token punctuation">.</span>jpg<span class="token punctuation">,</span> specification<span class="token operator">=</span>iphone7的规格<span class="token punctuation">,</span> service<span class="token operator">=</span>iphone7的售后服务<span class="token punctuation">,</span> color<span class="token operator">=</span>红色<span class="token punctuation">,</span>白色<span class="token punctuation">,</span>黑色<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">,</span> shopId<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> modifiedTime<span class="token operator">=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">,</span> cityId<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> cityName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> brandId<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> brandName<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
<span class="token comment">// 这里重复打印了 69 次上面的结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前 30 次请求，我们传入的 productId 为 -1，所以服务执行过程中会抛出异常。我们设置了最少 20 次请求通过断路器并且异常比例超出 40% 就触发断路。因此执行了 21 次接口调用，每次都抛异常并且走降级，21 次过后，断路器就被打开了。</p><p>之后的 9 次请求，都不会执行 <code>run()</code> 方法，也就不会打印以下信息。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>调用接口查询商品数据，productId<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而是直接走降级逻辑，调用 getFallback() 执行。</p><p>休眠了 3s 后，我们在之后的 70 次请求中，都传入 productId 为 1。由于我们前面设置了 3000ms 过后断路器变为 <code>half-open</code> 状态。因此 Hystrix 会尝试执行请求，发现成功了，那么断路器关闭，之后的所有请求也都能正常调用了。</p><h3 id="参考内容" tabindex="-1"><a class="header-anchor" href="#参考内容" aria-hidden="true">#</a> 参考内容</h3>`,21),K={href:"https://github.com/Netflix/Hystrix/issues/1459",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/Netflix/Hystrix/wiki/Configuration#metrics",target:"_blank",rel:"noopener noreferrer"};function U(W,z){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("h3",d,[k,s(),n("a",m,[s("Enabled"),e(a)])]),v,n("h3",h,[b,s(),n("a",f,[s("circuitBreaker.requestVolumeThreshold"),e(a)])]),y,n("h3",g,[w,s(),n("a",_,[s("circuitBreaker.errorThresholdPercentage"),e(a)])]),x,n("h4",I,[C,s(),n("a",H,[s("circuitBreaker.sleepWindowInMilliseconds"),e(a)])]),j,n("h3",q,[P,s(),n("a",S,[s("ForceOpen"),e(a)])]),B,n("h3",N,[T,s(),n("a",O,[s("ForceClosed"),e(a)])]),E,n("p",null,[s("与 Hystrix 断路器紧密协作的，还有另一个重要组件 —— "),L,s("。统计器中最重要的参数要数滑动窗口（"),n("a",F,[s("metrics.rollingStats.timeInMilliseconds"),e(a)]),s("）以及桶（"),n("a",M,[s("metrics.rollingStats.numBuckets"),e(a)]),s("）了，这里引用"),n("a",R,[s("一段博文"),e(a)]),s("来解释滑动窗口（默认值是 10000 ms）：")]),G,n("ol",null,[n("li",null,[n("a",K,[s("Hystrix issue 1459"),e(a)])]),n("li",null,[n("a",V,[s("Hystrix Metrics"),e(a)])])])])}const D=p(r,[["render",U],["__file","hystrix-circuit-breaker.html.vue"]]);export{D as default};
