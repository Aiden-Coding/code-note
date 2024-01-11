import{_ as e,r as t,o as p,c,a as n,b as s,d as o,e as i}from"./app-3RcBQnkC.js";const l={},u=n("h1",{id:"字节码编程-javassist篇三《使用javassist在运行时重新加载类「替换原方法输出不一样的结果」》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字节码编程-javassist篇三《使用javassist在运行时重新加载类「替换原方法输出不一样的结果」》","aria-hidden":"true"},"#"),s(" 字节码编程，Javassist篇三《使用Javassist在运行时重新加载类「替换原方法输出不一样的结果」》")],-1),d=n("br",null,null,-1),r={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=i(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>通过前面两篇 <code>javassist</code> 的基本内容，大体介绍了；类池(<em>ClassPool</em>)、类(<em>CtClass</em>)、属性(<em>CtField</em>)、方法(<em>CtMethod</em>)，的使用方式，并通过创建不同类型的入参出参方法，基本可以掌握如何使用这样的代码结构进行字节码编程。</p><p><strong>那么</strong>，今天我们尝试使用 <code>javassist</code> 去修改一个正在执行中的类里面的方法内容。<em>也就是在运行时重新加载类信息</em></p><p>可能在你平时的 <em>CRUD</em> 开发中并没有想到过这样的 <em>烧操作</em>，但它却有很多的应用场景在使用，例如；</p><ol><li>热部署常用在生产环境中，主要由于这样的系统不能频繁启停且启动耗时较长的应用。</li><li>另外一些组件化风控模型包，给外部使用。当模型包进行升级时并不需要外部重新部署，甚至不需要让你知道升级了。</li><li>再者会用于开发、调试中，可以非常有效的提升编码效率，解放码农的<strong>右手</strong>和<em>左手</em>。</li></ol><p><strong>人的大脑</strong>很难创造未知的事物，<em>所以需要学习。请多看小傅哥的码文，少搞CRUD</em></p><p>关于字节编程中所有涉及的代码，都可以通过关注<code>公众号</code>：<strong>bugstack虫洞栈</strong>，回复：<em>源码</em>，进行获取。</p><h2 id="二、开发环境" tabindex="-1"><a class="header-anchor" href="#二、开发环境" aria-hidden="true">#</a> 二、开发环境</h2><ol><li>JDK 1.8.0</li><li>jdk1.8.0_161\\lib\\tools.jar - 需要使用到 <code>jdi</code> 包</li><li>javassist 3.12.1.GA</li></ol><h2 id="三、案例目标" tabindex="-1"><a class="header-anchor" href="#三、案例目标" aria-hidden="true">#</a> 三、案例目标</h2><p>为了让案例目标更具<code>色彩</code>，我们模拟一个<strong>谢飞机老婆</strong>，通过系统查询自己男朋友<code>前女友数量</code>的 <strong>危机</strong> 方法，需要紧急处理的过程。</p><p>为了保障家庭的和谐化解危机，我们通过动态重新加载类，将谢飞机前女友数量修改为<code>0</code>并返回。依次安定家庭和谐。<s>最终谢飞机会给我钱，当做报酬</s></p><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-1.png" alt="德莱联盟，王牌工程师，申请出栈"></p><p><strong>让谢飞机很慌的方法</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryGirlfriendCount</span><span class="token punctuation">(</span><span class="token class-name">String</span> boyfriendName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> boyfriendName <span class="token operator">+</span> <span class="token string">&quot;的前女友数量：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 个&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可预见的结果</strong>；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>你到底几个前女友！！！
谢飞机的前女友数量：<span class="token number">3</span> 个
谢飞机的前女友数量：<span class="token number">5</span> 个
谢飞机的前女友数量：<span class="token number">8</span> 个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、技术实现" tabindex="-1"><a class="header-anchor" href="#四、技术实现" aria-hidden="true">#</a> 四、技术实现</h2><h3 id="_1-hotswapper-操作类热加载" tabindex="-1"><a class="header-anchor" href="#_1-hotswapper-操作类热加载" aria-hidden="true">#</a> 1. HotSwapper 操作类热加载</h3><p><strong>德莱联盟，王牌工程师，申请出<code>栈</code></strong></p><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-2.jpg" alt="德莱联盟王牌工程师"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 公众号：bugstack虫洞栈
 * 博客栈：https://bugstack.cn - 沉淀、分享、成长，让自己和他人都能有所收获！
 * 本专栏是小傅哥多年从事一线互联网Java开发的学习历程技术汇总，旨在为大家提供一个清晰详细的学习教程，侧重点更倾向编写Java核心内容。如果能为您提供帮助，请给予支持(关注、点赞、分享)！
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenerateClazzMethod</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">ApiTest</span> apiTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你到底几个前女友！！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		      <span class="token comment">// 模拟谢飞机老婆一顿查询</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>apiTest<span class="token punctuation">.</span><span class="token function">queryGirlfriendCount</span><span class="token punctuation">(</span><span class="token string">&quot;谢飞机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        
        <span class="token comment">// 监听 8000 端口,在启动参数里设置</span>
        <span class="token comment">// java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000</span>
        <span class="token class-name">HotSwapper</span> hs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HotSwapper</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ClassPool</span> pool <span class="token operator">=</span> <span class="token class-name">ClassPool</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CtClass</span> ctClass <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">ApiTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取方法</span>
        <span class="token class-name">CtMethod</span> ctMethod <span class="token operator">=</span> ctClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;queryGirlfriendCount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 重写方法</span>
        ctMethod<span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span><span class="token string">&quot;{ return $1 + \\&quot;的前女友数量：\\&quot; + (0L) + \\&quot; 个\\&quot;; }&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 加载新的类</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;:: 执行HotSwapper热插拔，修改谢飞机前女友数量为0个！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hs<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token class-name">ApiTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ctClass<span class="token punctuation">.</span><span class="token function">toBytecode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-知识点讲解" tabindex="-1"><a class="header-anchor" href="#_2-知识点讲解" aria-hidden="true">#</a> 2. 知识点讲解</h3><ol><li>多线程模拟循环调用，这个方法会一直执行查询。在后续修改类之后输出的结果信息会有不同。</li><li><code>javassist.tools.HotSwapper</code>，是 <code>javassist</code> 的包中提供的热加载替换类操作。在执行时需要启用 JPDA（Java平台调试器体系结构）。</li><li><code>ctMethod.setBody</code>，重写方法的内容在上面两个章节已经很清楚的描述了。<em>$1</em> 是获取方法中的第一个入参，大括号<code>{}</code>里是具体执行替换的方法体。</li><li>最后使用 <code>hs.reload</code> 执行热加载替换操作，这里的 <code>ctClass.toBytecode()</code> 获取的是处理后类的字节码。</li></ol><h2 id="五、测试结果" tabindex="-1"><a class="header-anchor" href="#五、测试结果" aria-hidden="true">#</a> 五、测试结果</h2><h3 id="_1-引入tools-jar" tabindex="-1"><a class="header-anchor" href="#_1-引入tools-jar" aria-hidden="true">#</a> 1. 引入tools.jar</h3><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-3.png" alt="Open Module Settings，引入tools.jar"></p><h3 id="_2-配置-agentlib" tabindex="-1"><a class="header-anchor" href="#_2-配置-agentlib" aria-hidden="true">#</a> 2. 配置-agentlib</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span>agentlib<span class="token operator">:</span>jdwp<span class="token operator">=</span>transport<span class="token operator">=</span>dt_socket<span class="token punctuation">,</span>server<span class="token operator">=</span>y<span class="token punctuation">,</span>suspend<span class="token operator">=</span>n<span class="token punctuation">,</span>address<span class="token operator">=</span><span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-4.png" alt="VM options，配置-agentlib"></p><h3 id="_3-执行测试" tabindex="-1"><a class="header-anchor" href="#_3-执行测试" aria-hidden="true">#</a> 3. 执行测试</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Listening</span> <span class="token keyword">for</span> transport dt_socket at address<span class="token operator">:</span> <span class="token number">8000</span>
你到底几个前女友！！！
谢飞机的前女友数量：<span class="token number">3</span> 个
谢飞机的前女友数量：<span class="token number">5</span> 个
谢飞机的前女友数量：<span class="token number">8</span> 个
<span class="token operator">::</span> 执行<span class="token class-name">HotSwapper</span>热插拔，修改谢飞机前女友数量为<span class="token number">0</span>个！
谢飞机的前女友数量：<span class="token number">4</span> 个
谢飞机的前女友数量：<span class="token number">5</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
谢飞机的前女友数量：<span class="token number">0</span> 个
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当</strong>看到前女友数量为 <em>0</em> 时，谢飞机露出了羞涩的微笑，并兑现了承诺，将<em>4毛钱</em>给了王牌工程师<code>小傅哥</code>。</p><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-5.png" alt="来自谢飞机的收入"></p><h3 id="_4-效果演示" tabindex="-1"><a class="header-anchor" href="#_4-效果演示" aria-hidden="true">#</a> 4. 效果演示</h3><p><img src="https://bugstack.cn/assets/images/2020/itstack-demo-bytecode-1-03-6.gif" alt="热加载救火，成功拿到4毛钱"></p><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2><ol><li>没得办法，即使再好的技术不加点段子也没人看。只能坑我兄弟飞机了！<strong>德莱联盟，王牌工程师，申请出<code>栈</code></strong></li><li>关于热加载修改类的操作，在实际场景中还是蛮多的，但一般都是比较苛刻的场景诉求。在平时开发中还是比较少遇到的，并且CRUD开发不会遇到。</li><li><code>Javassist</code> 对 <code>ASM</code> 这样的字节码操作封装起来提供的<code>API</code>确实很好操作，在一些场景下也不需要考虑 <code>JVM</code> 中局部变量和操作数栈。但如果需要更高的性能，可以考虑使用 <code>ASM</code>。</li></ol>`,39);function m(v,b){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("作者：小傅哥 "),d,s("博客："),n("a",r,[s("https://bugstack.cn"),o(a)])]),k])}const g=e(l,[["render",m],["__file","2020-04-21-zijiemabiancheng，Javassistpiansan《shiyongJavassistzaiyunxingshizhongxinjiazailei「tihuanyuanfangfashuchubuyiyangdejieguo」》.html.vue"]]);export{g as default};
