import{_ as e,r as t,o,c as i,a as n,b as s,d as p,e as l}from"./app-3RcBQnkC.js";const c={},r=n("h1",{id:"第6章-基于github-webhook动态刷新服务配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第6章-基于github-webhook动态刷新服务配置","aria-hidden":"true"},"#"),s(" 第6章：基于github webhook动态刷新服务配置")],-1),u=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=l(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><p>在实际开发中经常会有一个叫做配置中心的服务，这个服务经过变更参数来动态刷新线上业务数据行为配置。比如；行为开关、活动数据、黑白名单、本地/预发/线上环境切换等等，这些配置信息往往需要在我们不重启系统的时候就可以被更新执行。那么我们一般会使用具备此类属性在分布式系统中适合的组件进行开发配置中心，像是zookeeper、redis发布订阅、或者http定时轮许拉取，他们都可以做成统一配置中心服务。而在Spring Cloud Config 中，默认采用 Git 来存储配置信息，所以使用 Spring Cloud Config 构建的配置服务器，天然就支持对微服务应用配置信息的版本管理，在加上Github的Webhook钩子服务，可以在我们push等行为操作的时候，自动执行我们的http行为，以达到自动刷新配置服务。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>jdk 1.8、idea2018、Maven3</li><li>Spring Boot 2.0.6.RELEASE</li><li>Spring Cloud Finchley.SR2</li><li>需要有一个Git帐号，用来创建配置中心以及开启Webhooks服务，添加回调</li></ol><h2 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明" aria-hidden="true">#</a> 案例说明</h2><p>通过在个人Git创建配置服务工程，开启Webhooks服务添加回调钩子http://xxx:port/actuator/refresh在更新配置后自动刷新服务配置内容，如图； <img src="https://bugstack.cn/assets/images/pic-content/2019/11/springcloud-6-1.png" alt="微信公众号：bugstack虫洞栈 &amp; Git配置中心Webhooks刷新服务配置"></p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span><span class="token number">06</span>
├── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>config<span class="token operator">-</span>client
│   └── src
│       └── main
│           ├── java
│           │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo
│           │        ├── web
│           │        │   └── <span class="token class-name">ConfigClientController</span><span class="token punctuation">.</span>java      
│           │        └── <span class="token class-name">ConfigClientApplication</span><span class="token punctuation">.</span>java
│           └── resources   
│               ├── application<span class="token punctuation">.</span>yml
│               └── bootstrap<span class="token punctuation">.</span>yml
└── itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>config<span class="token operator">-</span>server
    └── src
        └── main
            ├── java
            │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo   
            │        └── <span class="token class-name">ConfigServerApplication</span><span class="token punctuation">.</span>java
            └── resources   
                └── application<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码欢迎关注公众号：bugstack虫洞栈 回复“SpringCloud专题”进行下载</strong></p><h3 id="itstack-demo-springcloud-config-client-配置获取客户端方-提供自动刷新http" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-config-client-配置获取客户端方-提供自动刷新http" aria-hidden="true">#</a> itstack-demo-springcloud-config-client | 配置获取客户端方，提供自动刷新Http</h3><blockquote><p>web/ConfigClientController.java &amp; 添加注解@RefreshScope自动刷新配置</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RefreshScope</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigClientController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${info.profile:error}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> profile<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/config&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Mono</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Mono</span><span class="token punctuation">.</span><span class="token function">justOrEmpty</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ConfigClientApplication.java &amp; 普通配置即可</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigClientApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigClientApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml &amp; 需要配置endpoints，这样才可以暴漏刷新服务</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>config<span class="token operator">-</span>client
server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">9001</span>

# <span class="token operator">/</span>actuator<span class="token operator">/</span>refresh 这个 <span class="token class-name">Endpoint</span> 暴露出来
management<span class="token operator">:</span>
  endpoints<span class="token operator">:</span>
    web<span class="token operator">:</span>
      exposure<span class="token operator">:</span>
        include<span class="token operator">:</span> refresh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>bootstrap.yml &amp; 配置中心服务配置，http://localhost:7397</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  cloud<span class="token operator">:</span>
    config<span class="token operator">:</span>
      uri<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">7397</span>  # 配置中心的具体地址；itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>config<span class="token operator">-</span>server
      name<span class="token operator">:</span> config<span class="token operator">-</span>client         # 对应 <span class="token punctuation">{</span>application<span class="token punctuation">}</span> 部分，例如；config<span class="token operator">-</span>client<span class="token operator">-</span>dev <span class="token operator">=</span> 只取最后一个符号<span class="token char">&#39;-&#39;</span>之前的
      profile<span class="token operator">:</span> dev                # 对应 <span class="token punctuation">{</span>profile<span class="token punctuation">}</span> 部分
      label<span class="token operator">:</span> master               # 对应 <span class="token punctuation">{</span>label<span class="token punctuation">}</span> 部分，即 <span class="token class-name">Git</span> 的分支。如果配置中心使用的是本地存储，则该参数无用

#配置文件会被转换成 <span class="token class-name">Web</span>，访问规则如下；
#<span class="token operator">/</span><span class="token punctuation">{</span>application<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>profile<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token operator">/</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token punctuation">]</span>
#<span class="token operator">/</span><span class="token punctuation">{</span>application<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>profile<span class="token punctuation">}</span><span class="token punctuation">.</span>yml
#<span class="token operator">/</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>application<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>profile<span class="token punctuation">}</span><span class="token punctuation">.</span>yml
#<span class="token operator">/</span><span class="token punctuation">{</span>application<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>profile<span class="token punctuation">}</span><span class="token punctuation">.</span>properties
#<span class="token operator">/</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>application<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>profile<span class="token punctuation">}</span><span class="token punctuation">.</span>properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itstack-demo-springcloud-config-server-配置提供服务端方-链接git配置工程地址" tabindex="-1"><a class="header-anchor" href="#itstack-demo-springcloud-config-server-配置提供服务端方-链接git配置工程地址" aria-hidden="true">#</a> itstack-demo-springcloud-config-server | 配置提供服务端方，链接Git配置工程地址</h3><blockquote><p>ConfigServerApplication.java &amp; 添加注解@EnableConfigServer设置成配置服务中心</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信公众号：bugstack虫洞栈 | 沉淀、分享、成长，专注于原创专题案例
 * 论坛：http://bugstack.cn
 * Create by 付政委 on @2019
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableConfigServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigServerApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigServerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>application.yml &amp;</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>server<span class="token operator">:</span>
  port<span class="token operator">:</span> <span class="token number">7397</span>

spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> itstack<span class="token operator">-</span>demo<span class="token operator">-</span>springcloud<span class="token operator">-</span>config
  cloud<span class="token operator">:</span>
    config<span class="token operator">:</span>
      server<span class="token operator">:</span>
        git<span class="token operator">:</span>
          uri<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>fuzhengwei<span class="token operator">/</span>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>config  # 换成自己的配置<span class="token class-name">Git</span>仓库的地址，如果没有可以新建工程地址，也可以克隆我的
          search<span class="token operator">-</span>paths<span class="token operator">:</span> config<span class="token operator">-</span>repo                               # <span class="token class-name">Git</span>仓库地址下的底层配置文件名称，如果配置多个用逗号<span class="token char">&#39;,&#39;</span>分割。

# 如果配置中心需要访问权限，则开启配置
# spring<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>git<span class="token punctuation">.</span>username：<span class="token class-name">Github</span>账户
# spring<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>git<span class="token punctuation">.</span>password：<span class="token class-name">Github</span>密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证" aria-hidden="true">#</a> 测试验证</h2><ol><li><p>准备好自己Github的配置仓库，也可以克隆我的Git；https://github.com/fuzhengwei/itstack-demo-config ｛有一组配置配置文件｝</p></li><li><p>配置Webhooks，在https://github.com/换你自己的fuzhengwei/换你自己的itstack-demo-netty/settings/hooks/new</p></li><li><p>分别启动服务</p><ol><li>itstack-demo-springcloud-config-server 配置Server</li><li>itstack-demo-springcloud-config-client 配置Client</li></ol></li><li><p>访问配置服务，端口7397；http://localhost:7397/config-client/dev</p><ol><li>访问结果</li></ol><div class="language-hava line-numbers-mode" data-ext="hava"><pre class="language-hava"><code>{
	&quot;name&quot;: &quot;config-client&quot;,
	&quot;profiles&quot;: [
		&quot;dev&quot;
	],
	&quot;label&quot;: null,
	&quot;version&quot;: &quot;ea0b1a1017595d542aa01b8b2bda68f9620dd81a&quot;,
	&quot;state&quot;: null,
	&quot;propertySources&quot;: [
		{
			&quot;name&quot;: &quot;https://github.com/fuzhengwei/itstack-demo-config/config-repo/config-client-dev.yml&quot;,
			&quot;source&quot;: {
				&quot;info.profile&quot;: &quot;dev bus&quot;
			}
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>访问规则｛配置文件会被转换成 Web 接口，规则如下｝</li></ol><ul><li>/{application}/{profile}[/{label}]</li><li>/{application}-{profile}.yml</li><li>/{label}/{application}-{profile}.yml</li><li>/{application}-{profile}.properties</li><li>/{label}/{application}-{profile}.properties</li></ul><ol start="3"><li>访问配置文件；http://localhost:8080/config-client-dev.yml ｛可以直接访问查看配置信息｝</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>info<span class="token operator">:</span>
	profile<span class="token operator">:</span> dev bus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问使用配置的客户端，端口9001；http://localhost:9001/config ｛可以提交配置代码反复刷新测试｝</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>dev bus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="综上总结" tabindex="-1"><a class="header-anchor" href="#综上总结" aria-hidden="true">#</a> 综上总结</h2><ol><li>Spring Cloud Config 可以很方便的依赖于Github提供的回调钩子进行更新配置，同时也支持本地配置</li><li>Webhooks 不止可以用于变更配置，还可以用于一起启动触发工程打包部署发布的行为</li><li>不要局限于知识点，往往每一个新知识所带来的架构设计更值得学习，这些都可以灵活的用于项目系统中</li></ol><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>SpringCloud专题</strong>」获取本文源码&amp;更多原创专题案例！</p>`,30);function k(m,b){const a=t("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",d,[s("https://bugstack.cn"),p(a)])]),v])}const h=e(c,[["render",k],["__file","2019-11-06-Spring Cloudliu《jiyuGithub Webhookdongtaishuaxinfuwupeizhi》.html.vue"]]);export{h as default};
