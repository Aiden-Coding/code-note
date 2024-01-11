import{_ as e,r as p,o as l,c,a as s,b as n,d as o,e as t}from"./app-3RcBQnkC.js";const r={},i=s("h1",{id:"第1节-idea-插件怎么开发",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第1节-idea-插件怎么开发","aria-hidden":"true"},"#"),n(" 第1节：IDEA 插件怎么开发")],-1),u=s("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=s("br",null,null,-1),g={href:"https://mp.weixin.qq.com/s/ckbu4ej4P2fEA8D_5cNUpw",target:"_blank",rel:"noopener noreferrer"},m=t('<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p><code>不踩些坑，根本不是成熟的码农！</code></p><p>你觉得肯德基全家桶是什么？一家人一起吃的桶吗，就那么一点点？不是，肯德基全家桶说的是，鸡的全家桶！</p><p>听到这个故事就像有时候我因为需要解决某些问题去<code>搜索</code>、<code>折腾</code>、<code>验证</code>、<code>排除</code>的技术方案，因为方向不对，所以努力也就白费。只能一次次在众多的资料、文档、源码中一点点找到并组合出适合自己的问题场景的技术处理手段。</p><p>但这个过程有时候又是必须经历的，很少有时候能一次就找到正确的答案或者人，哪怕开始就找到了，也会再去排查下其他的资料，看看还有没有更好的。<em>是不，这就是你吧？</em></p><h2 id="二、抛出问题" tabindex="-1"><a class="header-anchor" href="#二、抛出问题" aria-hidden="true">#</a> 二、抛出问题</h2><p><code>我又要冲IDEA插件开发了！</code></p><p>在研究字节码插桩的相关技术后，🤔考虑着除了通常的用在代码上线后的非入侵式监控外，是不是也可以用于研发在开发阶段对系统接口的提取呢？</p><p>带着这个从脑袋中冒出的想法，想到如果要处理这个事情，最核心的问题就是开发一款IDEA插件+字节码插桩能力，在代码运行时对运行方法增强，提取相关的必要信息。别说案例还真做出来了，如下：</p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-1.png" alt=""></p>',11),h={href:"https://bugstack.cn/framework/2021/02/04/%E5%9F%BA%E4%BA%8EIDEA%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E5%92%8C%E5%AD%97%E8%8A%82%E7%A0%81%E6%8F%92%E6%A1%A9%E6%8A%80%E6%9C%AF-%E5%AE%9E%E7%8E%B0%E7%A0%94%E5%8F%91%E4%BA%A4%E4%BB%98%E8%B4%A8%E9%87%8F%E8%87%AA%E5%8A%A8%E5%88%86%E6%9E%90.html",target:"_blank",rel:"noopener noreferrer"},v=s("li",null,"后续问题：其实实现到这里还只能算是一个案例，对于 IDEA 插件开发能力并没有完全弄透，比如这个 IDEA 插件需要做一些基础配置，那么在哪里打开呢？还有实时监控并产生的接口信息能在 IDEA 界面右侧展示出来或者支持导出吗？如果我再有一些集合 IDEA 插件开发的能力做的其他的功能引入咋办呢？这里用到了哪些技术呢？等等，这些问题都需要去一一解决掉，才能完完整整的开发一个可用的 IDEA 插件，为此，需要做更深入的资料整理和实践验证。",-1),b=t('<h2 id="三、开发插件涉及的问题" tabindex="-1"><a class="header-anchor" href="#三、开发插件涉及的问题" aria-hidden="true">#</a> 三、开发插件涉及的问题</h2><p><strong>问题汇总</strong>：开发一个 IDEA 插件基本要涉及到的问题过程如下：</p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-2.png" alt=""></p><ul><li><strong>开发方式</strong>：在官网的描述中，创建IDEA插件工程的方式有两种分别是，IntelliJ Platform Plugin 模版创建和 Gradle 构建方式。</li><li><strong>框架入口</strong>：一个 IDEA 插件开发完，要考虑把它嵌入到哪，比如是从 IDEA 窗体的 Edit、Tools 等进入配置还是把窗体嵌入到左、右工具条还是IDEA窗体下的对话框。</li><li><strong>UI</strong>：思考的是窗体需要用到什么语言开发，没错，用的就是 Swing、Awt 的技术能力。</li><li><strong>API</strong>：在 IDEA 插件开发中，一般都是围绕工程进行的，那么基本要从通过 IDEA 插件 JDK 开发能力中获取到工程信息、类信息、文件信息等。</li><li><strong>外部功能</strong>：这一个是用于把插件能力与外部系统结合，比如你是需要把拿到的接口上传到服务器，还是从远程下载文件等等。</li></ul><h2 id="四、开发插件的两种配置" tabindex="-1"><a class="header-anchor" href="#四、开发插件的两种配置" aria-hidden="true">#</a> 四、开发插件的两种配置</h2>',5),_={href:"https://plugins.jetbrains.com/docs/intellij/disposers.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/JetBrains/intellij-sdk-docs",target:"_blank",rel:"noopener noreferrer"},q=t('<h3 id="_1-基础配置" tabindex="-1"><a class="header-anchor" href="#_1-基础配置" aria-hidden="true">#</a> 1. 基础配置</h3><ol><li><p>IntelliJ IDEA 2019.3.1 x64</p></li><li><p>JDK 需要配置 IntelliJ Platform Plugin JDK，在 Project Setting 中设置，这样才可以正常开发 IDEA 插件</p></li><li><p>id &#39;org.jetbrains.intellij&#39; version &#39;0.6.3&#39;</p></li><li><p>gradle-5.2.1 <code>与 2019 IDEA 版本下的插件开发匹配</code></p></li><li><p>Settings -&gt; Build, Execution,Deloyment -&gt; Build Tools，配置 Gradle。Gradle user home = <code>D:/Program Files (x86)/gradle/gradle-5.2.1/.gradle</code> User Gradle from =<code>gradle-wrapper.properties</code> 或者 <code>Specified location</code> 具体如下图：</p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-3.png" alt=""></p></li></ol><p>如果你是使用 IDEA New Project 默认的 IntelliJ Platform Plugin 方式，其实只关注1、2两步骤就可以了，但如果你需要 Gradle，那么需要注意3、4、5步骤的设置。当然通常也更推荐使用 Gradle 来搭建工程，这样你在需要一些额外的 Jar 包时候，只需要在 Gradle <code>build.gradle</code> 配置即可，而不是把需要的 Jar 包复制到工程的 lib 下。</p><h3 id="_2-遇到问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到问题" aria-hidden="true">#</a> 2. 遇到问题</h3><p>在使用 Gradle 构建项目后，你会遇到几个问题；</p>',5),w={href:"https://gradle.org/next-steps/?version=5.2.1&format=all",target:"_blank",rel:"noopener noreferrer"},A=s("li",null,"构建工程时候拉取相关内容，会比较慢，如果你有代理会好一些。",-1),E=s("code",null,"ideaIC-2019.3.1.zip",-1),I=s("code",null," Could not resolve all files for configuration ':detachedConfiguration1'.",-1),y=s("code",null,".gradle\\caches\\modules-2\\files-2.1",-1),D=s("li",null,[n("打开系统盘下当前用户的"),s("code",null,".gradle"),n("目录，进入"),s("code",null,".gradle\\caches\\modules-2\\files-2.1"),n("目录，即为缓存文件的目录。这个目录是你的报错构建过程中的报错地址，"),s("code",null,"Could not get resource D:\\Program Files (x86)\\gradle\\gradle-5.2.1\\.gradle\\caches\\modules-2\\files-2.1\\com.jetbrains.intellij.idea\\ideaIC\\2019.3.1")],-1),x=s("code",null,"2dae8e50d4b0508cad2e680b53414f657954f390",-1),M={href:"http://msd.misuland.com/pd/4146263708462488226",target:"_blank",rel:"noopener noreferrer"},j=s("code",null,"SHA1",-1),P=s("code",null,"SHA1",-1),C={href:"http://msd.misuland.com/pd/4146263708462488416",target:"_blank",rel:"noopener noreferrer"},B=s("code",null,"SHA1",-1),S=s("code",null,"git hash",-1),F=s("code",null,"ideaIC-2019.3.1.zip",-1),T=s("code",null,"sha1sum.exe ideaIC-2019.3.1.zip",-1),H=s("code",null,"2dae8e50d4b0508cad2e680b53414f657954f390",-1),J=s("li",null,[n("接下来在"),s("code",null,"2019.3.1"),n("目录下，新建目录"),s("code",null,"2dae8e50d4b0508cad2e680b53414f657954f390"),n("，将"),s("code",null,"ideaIC-2019.3.1.zip"),n("移动进去即可。")],-1),z=s("li",null,[n("【堆栈溢出】在 Gradle 构建的过程中，消耗内存较大，可能会报错 "),s("code",null,"Java heap space"),n(" 所以也可以 在IDEA项目根目录下，新建文件"),s("code",null,"gradle.properties"),n("，添加如下内容，变更gradle Jvm参数 "),s("code",null,"org.gradle.jvmargs=-Xmx2024m -XX:MaxPermSize=512m"),n(" 别说还挺好用，竟然构建成功了。")],-1),N=t(`<h2 id="五、写个测试案例" tabindex="-1"><a class="header-anchor" href="#五、写个测试案例" aria-hidden="true">#</a> 五、写个测试案例</h2><h3 id="_1-工程结构" tabindex="-1"><a class="header-anchor" href="#_1-工程结构" aria-hidden="true">#</a> 1. 工程结构</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PluginGuide</span>
├── <span class="token punctuation">.</span>gradle
└── src
    ├── main
    │   └── java
    │       ├── <span class="token class-name">HiClazz</span><span class="token punctuation">.</span>java
    │       ├── <span class="token class-name">MyDumbAwareAction</span><span class="token punctuation">.</span>java
    │       ├── <span class="token class-name">MySearchableConfigurable</span><span class="token punctuation">.</span>java
    │       ├── <span class="token class-name">MyToolWindowFactory</span><span class="token punctuation">.</span>java    
    │       └── <span class="token class-name">TestUI</span><span class="token punctuation">.</span>java    
    └── resources
        ├── icons  
        └── <span class="token constant">META</span><span class="token operator">-</span><span class="token constant">INF</span>
            └── plugin<span class="token punctuation">.</span>xml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>HiClazz 是继承 AnAction 的实现类，用于附着到 IDEA 的窗体上，点击后打开对应页面</li><li>MyDumbAwareAction、MyToolWindowFactory，配合使用，用于在 IDEA 最下面的窗体设置，与你看见的控制台输出信息位置一样。</li><li>MySearchableConfigurable，可以用于 Settings 中配置窗体。</li><li>TestUI 是基于 Swing 开发的窗体，验证在 AnAction 实现类中打开。</li><li>plugin.xml 是整个 IDEA 咖啡的配置文件，你所有的窗体都会在这个配置文件里有所体现。</li></ul><h3 id="_2-anaction" tabindex="-1"><a class="header-anchor" href="#_2-anaction" aria-hidden="true">#</a> 2. AnAction</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HiClazz</span> <span class="token keyword">extends</span> <span class="token class-name">AnAction</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">AnActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Project</span> project <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">PlatformDataKeys</span><span class="token punctuation">.</span><span class="token constant">PROJECT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PsiFile</span> psiFile <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">CommonDataKeys</span><span class="token punctuation">.</span><span class="token constant">PSI_FILE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> classPath <span class="token operator">=</span> psiFile<span class="token punctuation">.</span><span class="token function">getVirtualFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> title <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Messages</span><span class="token punctuation">.</span><span class="token function">showMessageDialog</span><span class="token punctuation">(</span>project<span class="token punctuation">,</span> classPath<span class="token punctuation">,</span> title<span class="token punctuation">,</span> <span class="token class-name">Messages</span><span class="token punctuation">.</span><span class="token function">getInformationIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试在 IDEA 中读取鼠标停留在类文件中的信息。我们可以把这个 AnAction 配置到各个 IDEA 菜单中。</li></ul><h3 id="_3-mytoolwindowfactory" tabindex="-1"><a class="header-anchor" href="#_3-mytoolwindowfactory" aria-hidden="true">#</a> 3. MyToolWindowFactory</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyToolWindowFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ToolWindowFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createToolWindowContent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Project</span> project<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">ToolWindow</span> toolWindow<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        toolWindow<span class="token punctuation">.</span><span class="token function">setToHideOnEmptyContent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">class</span> <span class="token class-name">MyPanel</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleToolWindowPanel</span> <span class="token punctuation">{</span>

            <span class="token keyword">public</span> <span class="token class-name">MyPanel</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> vertical<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span>vertical<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">DefaultActionGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultActionGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyDumbAwareAction</span><span class="token punctuation">(</span><span class="token string">&quot;Login1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyDumbAwareAction</span><span class="token punctuation">(</span><span class="token string">&quot;Login2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyDumbAwareAction</span><span class="token punctuation">(</span><span class="token string">&quot;Login3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">ActionToolbar</span> toolbar <span class="token operator">=</span> <span class="token class-name">ActionManager</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createActionToolbar</span><span class="token punctuation">(</span><span class="token string">&quot;ToolBar&quot;</span><span class="token punctuation">,</span> group<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">setToolbar</span><span class="token punctuation">(</span>toolbar<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token comment">// 添加一个页</span>
        toolWindow<span class="token punctuation">.</span><span class="token function">getContentManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addContent</span><span class="token punctuation">(</span><span class="token class-name">ContentFactory</span><span class="token punctuation">.</span><span class="token constant">SERVICE</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createContent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyPanel</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;First&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 IDEA 的最下面窗体中，如果想展示自己的窗体，则需要开发对应的 ToolWindowFactory 实现类，这样才可以展示你的内容。</li><li>这里的思想基本是 Swing 技术的开发方式，如果你不熟悉 Swing 最这块内容会比较陌生。</li></ul><h3 id="_4-plugin-xml" tabindex="-1"><a class="header-anchor" href="#_4-plugin-xml" aria-hidden="true">#</a> 4. plugin.xml</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>extensions defaultExtensionNs<span class="token operator">=</span><span class="token string">&quot;com.intellij&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token class-name">Add</span> your extensions here <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>toolWindow canCloseContents<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;bottom&quot;</span>
                id<span class="token operator">=</span><span class="token string">&quot;SmartIM&quot;</span>
                factoryClass<span class="token operator">=</span><span class="token string">&quot;MyToolWindowFactory&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>toolWindow<span class="token operator">&gt;</span>
    
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在<span class="token class-name">Setting</span>中添加自定义配置模版 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>projectConfigurable groupId<span class="token operator">=</span><span class="token string">&quot;Other Settings&quot;</span> displayName<span class="token operator">=</span><span class="token string">&quot;My Config&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;thief.id&quot;</span>
                         instance<span class="token operator">=</span><span class="token string">&quot;MySearchableConfigurable&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>extensions<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>actions<span class="token punctuation">&gt;</span></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token class-name">Add</span> your actions here <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>action id<span class="token operator">=</span><span class="token string">&quot;HiId_FileMenu&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;HiClazz&quot;</span> text<span class="token operator">=</span><span class="token string">&quot;HiName&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;FileMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;MainMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;EditMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;ViewMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;CodeMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;AnalyzeMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;RefactoringMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;BuildMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;RunMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;ToolsMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;WindowMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;HelpMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>action<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>action id<span class="token operator">=</span><span class="token string">&quot;HiId_EditorPopupMenu&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;HiClazz&quot;</span> text<span class="token operator">=</span><span class="token string">&quot;HiName&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;EditorPopupMenu&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>action<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>action id<span class="token operator">=</span><span class="token string">&quot;HiId_MainToolBar&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;HiClazz&quot;</span> text<span class="token operator">=</span><span class="token string">&quot;HiName&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>group group<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;MainToolBar&quot;</span> anchor<span class="token operator">=</span><span class="token string">&quot;first&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>action<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>actions<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 plugin.xml 的配置中，主要是把各个功能实现窗体配置到对应的菜单下，比如 Tools 下、toolWindow 里等。</li></ul><h3 id="_5-测试结果" tabindex="-1"><a class="header-anchor" href="#_5-测试结果" aria-hidden="true">#</a> 5. 测试结果</h3><p><strong>启动运行</strong></p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-4.png" alt=""></p><ul><li>IDEA 插件开发运行会基于 Plugin 或者 Gradle 下配置的 <code>::runIde</code></li></ul><p><strong>运行界面</strong></p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-5.png" alt=""></p><ul><li>在 IDEA 的各个菜单中都可以看到新增加的 HiName 插件，在你实际开发的时候选择需要的内容进行配置即可。</li></ul><p><strong>运行效果</strong></p><p><img src="https://bugstack.cn/assets/images/middleware/middleware-5-6.png" alt=""></p><ul><li>当鼠标点到类的上，在点 HiName 就可以看到对应的工程类信息了。</li></ul><h2 id="六、插件开发能做啥都" tabindex="-1"><a class="header-anchor" href="#六、插件开发能做啥都" aria-hidden="true">#</a> 六、插件开发能做啥都</h2>`,24),W={href:"https://github.com/search?p=41&q=idea%E6%8F%92%E4%BB%B6&type=Repositories",target:"_blank",rel:"noopener noreferrer"},G=s("h3",{id:"_1-快速生成-crud-工程代码",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-快速生成-crud-工程代码","aria-hidden":"true"},"#"),n(" 1. 快速生成 CRUD 工程代码")],-1),U=s("p",null,[s("img",{src:"https://bugstack.cn/assets/images/middleware/middleware-5-7.png",alt:""})],-1),V=s("strong",null,"地址",-1),R={href:"https://github.com/mars05/crud-intellij-plugin",target:"_blank",rel:"noopener noreferrer"},L=s("li",null,[s("strong",null,"描述"),n("：一个增删改查的idea插件，可以根据数据库表结构，帮助您快速生成model、dao、service、controller等相关代码。同时支持MyBatis、JPA、MybatisPlus。")],-1),O=s("h3",{id:"_2-在-idea-中摸鱼聊天",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-在-idea-中摸鱼聊天","aria-hidden":"true"},"#"),n(" 2. 在 IDEA 中摸鱼聊天")],-1),K=s("p",null,[s("img",{src:"https://bugstack.cn/assets/images/middleware/middleware-5-8.png",alt:""})],-1),Q=s("strong",null,"地址",-1),X={href:"https://github.com/Jamling/SmartIM4IntelliJ",target:"_blank",rel:"noopener noreferrer"},Y=s("li",null,[s("strong",null,"描述"),n("：ntelliJ IDEA上的SmartIM(原SmartQQ)插件，可以在IDEA中使用QQ或微信聊天。安装成功后，会在底部栏出现一个SmartIM的tab（如果没有底部栏，则在菜单View中把ToolButtons勾选上）")],-1),Z=s("h3",{id:"_3-可视化流程编排",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-可视化流程编排","aria-hidden":"true"},"#"),n(" 3. 可视化流程编排")],-1),$=s("p",null,[s("img",{src:"https://bugstack.cn/assets/images/middleware/middleware-5-9.png",alt:""})],-1),ss=s("strong",null,"地址",-1),ns={href:"https://github.com/alibaba/compileflow",target:"_blank",rel:"noopener noreferrer"},as=s("li",null,[s("strong",null,"描述"),n("："),s("code",null,"compileflow Process"),n("引擎是淘宝工作流"),s("code",null,"TBBPM"),n("引擎之一，是专注于纯内存执行，无状态的流程引擎，通过将流程文件转换生成"),s("code",null,"java"),n("代码编译执行，简洁高效。当前是阿里业务中台交易等多个核心系统的流程引擎。在阿里巴巴中台解决方案中广泛使用，支撑了导购、交易、履约、资金等多个业务场景。")],-1),os=s("h2",{id:"七、总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#七、总结","aria-hidden":"true"},"#"),n(" 七、总结")],-1),ts=s("ul",null,[s("li",null,"IDEA 开发技术涉及到了对 IDEA 插件开发 API 的熟悉以及UI界面的开发，所以如果想开发一款 IDEA 插件，基本离不开对 Swing 的编写，不过也不需要太复杂的页面，所有这部分技能还好。"),s("li",null,"IDEA 官网文档仅提供了两种构建 IDEA 插件工程的方法，但更推荐 Gradle 方式，这样可以满足你对后续其他功能组件的便捷引入，以及做其他内容的扩展。"),s("li",null,"IDEA 插件开发可以开发出很多用于提效研发编程的技术插件，例如一些监控、脚手架、接口API以及调试、流程化低代码编排等等，所以这部分内容的价值还是蛮大的。")],-1);function es(ps,ls){const a=p("ExternalLinkIcon");return l(),c("div",null,[i,s("p",null,[n("作者：小傅哥 "),u,n("博客："),s("a",d,[n("https://bugstack.cn"),o(a)]),k,n("原文："),s("a",g,[n("https://mp.weixin.qq.com/s/ckbu4ej4P2fEA8D_5cNUpw"),o(a)])]),m,s("ul",null,[s("li",null,[n("案例地址："),s("a",h,[n("基于IDEA插件开发和字节码插桩技术，实现研发交付质量自动分析"),o(a)])]),v]),b,s("ul",null,[s("li",null,[n("官方文档："),s("a",_,[n("https://plugins.jetbrains.com/docs/intellij/disposers.html"),o(a)])]),s("li",null,[n("官方案例："),s("a",f,[n("https://github.com/JetBrains/intellij-sdk-docs"),o(a)])])]),q,s("ol",null,[s("li",null,[n("提前下载好 Gradle 5.2.1 版本并配置上，否则构建工程自动下载会比较慢 "),s("a",w,[n("https://gradle.org/next-steps/?version=5.2.1&format=all"),o(a)])]),A,s("li",null,[n("【麻烦的问题】基于 Gradle 的 IDEA 插件开发会在构建过程中，会下载一个匹配版本的 IDEA 软件用于启动测试开发插件，几百兆那种zip包 "),E,n("。这个时候基本你会遇到一个崩溃的报错 "),I,n(" 咋办呢，如果你不嫌弃麻烦可以手动下载并SHA1加密后把下载的文件放到缓存文件夹中 "),y,n(" 具体操作如下： "),s("ul",null,[D,s("li",null,[n("加密文件夹"),x,n("目录名称(你的可能不是这样的)，我去，这个应该是"),s("a",M,[n("加密"),o(a)]),n("过的，但是是什么加密呢？,经过了解知道了这个是"),j,n("加密，且是对文件进行"),P,n("的加密生成的唯一"),s("a",C,[n("字符串"),o(a)]),n("，但是windows上没有这个命令，在线"),B,n("也太麻烦了，还要上传文件，于是想到了Java的API，还有就是通过"),S,n("命令行来实现。 把我们的文件"),F,n("先临时拷贝到这个目录。运行"),T,n("命令，生成唯一的唯一字符串（用来校验文件的完整性），这样就拿到这个"),H,n("目录名")]),J])]),z]),N,s("p",null,[n("在 GitHub 上搜索 IDEA 插件开发，一共有44页内容，"),s("a",W,[n("https://github.com/search?p=41&q=idea%E6%8F%92%E4%BB%B6&type=Repositories"),o(a)]),n(" 涉及到自动化测试、工程脚手架、API生成、生成数据库的DAO类、一些常用工具，当然还有一些比较有意思的，比如：摸鱼看书、听郭德纲相声、微信聊天、局域网聊天、英语翻译等等。这里我给大家列举几个，开阔开阔思路。")]),G,U,s("ul",null,[s("li",null,[V,n("："),s("a",R,[n("https://github.com/mars05/crud-intellij-plugin"),o(a)])]),L]),O,K,s("ul",null,[s("li",null,[Q,n("："),s("a",X,[n("https://github.com/Jamling/SmartIM4IntelliJ"),o(a)])]),Y]),Z,$,s("ul",null,[s("li",null,[ss,n("："),s("a",ns,[n("https://github.com/alibaba/compileflow"),o(a)])]),as]),os,ts])}const rs=e(r,[["render",es],["__file","2021-08-27-jishudiaoyan，IDEA chajianzenmekaifa？.html.vue"]]);export{rs as default};
