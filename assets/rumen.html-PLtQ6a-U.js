import{_ as i,r as c,o as l,c as d,a as s,b as n,d as a,w as o,e}from"./app-3RcBQnkC.js";const u="/code-note/assets/image-7NDuCP7m.png",r="/code-note/assets/image-1-2rMVFv76.png",k="/code-note/assets/image-2-vcey1Nhk.png",v="/code-note/assets/image-3-mXSF8td-.png",m="/code-note/assets/image-4-8Lx6bnMi.png",g={},b=s("p",null,"作为一名富有责任心的技术博主，我觉得有必要把我入门 Redis 的过程分享出来，供一些小伙伴作为参考。要是我哪里写错了，别客气，过来给我一巴掌，就行了（温柔点，别打肿，影响颜值就不好了）。",-1),h=s("p",null,[s("img",{src:u,alt:"Alt text"})],-1),_=e('<h2 id="_01、redis-的数据结构" tabindex="-1"><a class="header-anchor" href="#_01、redis-的数据结构" aria-hidden="true">#</a> 01、Redis 的数据结构</h2><p>Redis 有 5 种基础数据结构，String、Hash、List、Set、SortedSet，也是学 Redis 必须掌握的。除此之外，还有 HyperLogLog、Geo、Pub/Sub，算是高级数据结构了。我们这篇入门的文章就以 String 为例吧。</p><p>String 结构使用非常广泛，比如说把用户的登陆信息转成 JSON 字符串后缓存起来，等需要取出的时候再反序列化一次。</p><p>小伙伴们应该都知道，Java 的 String 是不可变的，无法修改。Redis 的 String 是动态的，可以修改的，两者不同哦。关于 Redis 的 String 结构，我觉得老钱的 Redis 教程上讲得非常明白，大家一起拜读下。</p><p><img src="'+r+'" alt="Alt text"></p><blockquote><p>Redis 的 String 在内部结构实现上类似于 Java 的 ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配。如上图所示，当前字符串实际分配的空间为 capacity，一般高于实际的字符串长度 len。当字符串长度小于 1M 时，扩容是对现有空间的成倍增长；如果长度超过 1M 时，扩容一次只会多增加 1M 的空间。最大长度为 512M。</p></blockquote><h2 id="_02、实操-redis" tabindex="-1"><a class="header-anchor" href="#_02、实操-redis" aria-hidden="true">#</a> 02、实操 Redis</h2><p>好了好了，我估计很多小伙伴们已经整装待发，准备实操一把了。这就来。</p>',8),f=e('<p><img src="'+k+'" alt="Alt text"></p><p>当按下空格跟进关键字的时候，对应位置上的提示会自动消失。</p><p><img src="'+v+`" alt="Alt text"></p><p>以下是完整的键值对测试命令，小伙伴们可以按照格式动手实操一把。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; set name cmower
OK
&gt; get name
&quot;cmower&quot;
&gt; exists name
(integer) 1
&gt; del name
(integer) 1
&gt; get name
(nil)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）set 命令用来存储一个键值对，在本例中，name 为 key，cmower 为 值。</p><p>2）get 命令用来获取一个键值对。</p><p>3）exists 命令用来测试一个键值对是否存在，<code>(integer) 1</code> 表示存在，<code>(integer) 0</code> 表示不存在。</p><p>4）del 命令用来删除一个键值对，<code>(integer) 1</code> 表示执行成功，<code>(integer) 0</code> 表示执行失败。</p><p>5）当键值对删除后，再通过 get 命令获取时，结果就为 <code>(nil)</code> 。</p><p>可能有小伙伴会好奇，<code>nil</code> 是什么意思？它是 Objective-C、Swift、Ruby、Lua 等编程语言中的一个关键字，更详细的解释可以看一下《Programming in Lua 程序设计第二版》：</p><blockquote><p>nil 是一种类型，它只有一个值 nil，它的主要功能是用于区别其他任何值，就像之前所说的，一个全局变量在第一次赋值前的默认值就是 nil，将 nil 赋予一个全局变量等同于删除它，Lua 将 nil 用于表示一种“无效值(non-value)”的情况，即没有任何有效值的情况。</p></blockquote><p>想了解 Redis 命令的具体使用方法，可以参考以下链接：</p>`,13),x={href:"http://redisdoc.com/index.html",target:"_blank",rel:"noopener noreferrer"},y={href:"http://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},S={href:"http://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},R=e(`<h2 id="_03、在-java-中使用-redis" tabindex="-1"><a class="header-anchor" href="#_03、在-java-中使用-redis" aria-hidden="true">#</a> 03、在 Java 中使用 Redis</h2><p>有些小伙伴可能会问，“二哥，我是一名 Java 程序员，我该如何在 Java 中使用 Redis 呢？”这个问题问得好，这就来，这就来。</p><p>第一步，在项目中添加 Jedis（Java 和 Redis 的混拼） 依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;redis.clients&lt;/groupId&gt;
    &lt;artifactId&gt;jedis&lt;/artifactId&gt;
    &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，新建 UserInfo（用户信息）类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;UserInfo{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// getter / setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，在项目中添加 Gson（用于序列化和反序列化用户信息） 依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
    &lt;artifactId&gt;gson&lt;/artifactId&gt;
    &lt;version&gt;2.8.6&lt;/version&gt;
    &lt;scope&gt;compile&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步，新建测试类 RedisTest：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">REDIS_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Gson</span> gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> userInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">REDIS_KEY</span><span class="token punctuation">,</span> gson<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> getUserInfoFromRedis <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">REDIS_KEY</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get：&quot;</span> <span class="token operator">+</span> getUserInfoFromRedis<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;exists：&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token constant">REDIS_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;del：&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span><span class="token constant">REDIS_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get：&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">REDIS_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）REDIS_KEY 常量为存储用户信息到 Redis 的 key。</p><p>2）在 Jedis 的帮助下，Java 连接 Redis 服务变得非常简单，只需要一行代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数分别是主机名，端口号。</p><p>存储键值对用 <code>set()</code> 方法，获取键值对用 <code>get()</code> 方法，判断键值对是否存在用 <code>exists()</code> 方法，删除键值对用 <code>del()</code> 方法。</p>`,15),w=e(`<p>使用起来也非常简单，<code>toJson()</code> 方法将对象转成 JSON 字符串，<code>fromJson()</code> 方法将 JSON 字符串反序列化对象。</p><p>好了，来看一下程序的输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get：UserInfo{name=&#39;沉默王二&#39;, age=18}
exists：true
del：1
get：null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完全符合我们的预期，perfect！</p><p><img src="`+m+'" alt="Alt text"></p><h2 id="_04、鸣谢" tabindex="-1"><a class="header-anchor" href="#_04、鸣谢" aria-hidden="true">#</a> 04、鸣谢</h2><p>好了，我亲爱的小伙伴们，以上就是本文的全部内容了，是不是看完后很想实操一把 Redis，赶快行动吧！如果你在学习的过程中遇到了问题，欢迎随时和我交流，虽然我也是个菜鸟，但我有热情啊。</p><p>另外，如果你想写入门级别的文章，这篇就是最好的范例。</p><hr>',9);function I(q,J){const t=c("RouterLink"),p=c("ExternalLinkIcon");return l(),d("div",null,[b,h,s("p",null,[n("前面我们已经讲了 Redis 的安装，参考这里："),a(t,{to:"/toBeBetterJavaer/redis/install.html"},{default:o(()=>[n("Redis 安装，超详细")]),_:1})]),_,s("p",null,[n("进入 redis-cli 命令行客户端（怎么进入，前面"),a(t,{to:"/toBeBetterJavaer/redis/install.html"},{default:o(()=>[n("安装环节")]),_:1}),n("已经讲过了），这个客户端还是非常智能的，当键入命令的时候，会跳出对应的提示")]),f,s("blockquote",null,[s("p",null,[s("a",x,[n("http://redisdoc.com/index.html"),a(p)])])]),s("p",null,[n("是 "),s("a",y,[n("Redis Command Reference"),a(p)]),n(" 和 "),s("a",S,[n("Redis Documentation"),a(p)]),n(" 的中文翻译版，良心吧？")]),R,s("p",null,[n("3）"),a(t,{to:"/toBeBetterJavaer/gongju/gson.html"},{default:o(()=>[n("Gson")]),_:1}),n(" 是谷歌提供的一个开源库，可以将 Java 对象序列化为 JSON 字符串，同样可以将 JSON 字符串反序列化（解析）为匹配的 Java 对象。")]),w])}const E=i(g,[["render",I],["__file","rumen.html.vue"]]);export{E as default};
