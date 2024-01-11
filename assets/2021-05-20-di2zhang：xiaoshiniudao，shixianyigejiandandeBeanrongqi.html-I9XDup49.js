import{_ as t,r as i,o as p,c,a as n,b as a,d as e,e as o}from"./app-3RcBQnkC.js";const l={},r=n("h1",{id:"《spring-手撸专栏》第-2-章-小试牛刀-实现一个简单的bean容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#《spring-手撸专栏》第-2-章-小试牛刀-实现一个简单的bean容器","aria-hidden":"true"},"#"),a(" 《Spring 手撸专栏》第 2 章：小试牛刀，实现一个简单的Bean容器")],-1),u=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),v={href:"https://mp.weixin.qq.com/s/fiWX6abSCiUKHAUa-HKg4A",target:"_blank",rel:"noopener noreferrer"},b=o(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p><code>上学时，老师总说：不会你就问，但多数时候都不知道要问什么！</code></p><p>你总会在小傅哥的文章前言里，发现一些关于成长、学习、感悟以及对当篇内容的一个介绍，其实之所以写这样的铺垫性内容，主要是为了让大家对接下来的内容学习有一个较轻松的开场和过度。</p><p>就像我们上学时如果某一科的内容不会时，老师经常会说，你有不会的就要问。但对于学生本身来讲，可能已经不会的太多了，或者压根不知道自己不会什么，只有等看到老师出完的试卷才发现自己什么都不会。但要是让问，又不知道从哪问，问出萝卜带出泥，到处都是知识漏洞。</p><p>所以我希望用一些前置内容的铺垫，让大家可以在一个稍有共识的场景下进行学习，或多或少能为你铺垫出一个稍许平缓的接受期。有可能某些时候也会打打鸡血、刺激刺激学习、总归把知识学到手就是好的！</p><h2 id="二、目标" tabindex="-1"><a class="header-anchor" href="#二、目标" aria-hidden="true">#</a> 二、目标</h2><p><code>Spring Bean 容器是什么？</code></p><p>Spring 包含并管理应用对象的配置和生命周期，在这个意义上它是一种用于承载对象的容器，你可以配置你的每个 Bean 对象是如何被创建的，这些 Bean 可以创建一个单独的实例或者每次需要时都生成一个新的实例，以及它们是如何相互关联构建和使用的。</p><p>如果一个 Bean 对象交给 Spring 容器管理，那么这个 Bean 对象就应该以类似零件的方式被拆解后存放到 Bean 的定义中，这样相当于一种把对象解耦的操作，可以由 Spring 更加容易的管理，就像处理循环依赖等操作。</p><p>当一个 Bean 对象被定义存放以后，再由 Spring 统一进行装配，这个过程包括 Bean 的初始化、属性填充等，最终我们就可以完整的使用一个 Bean 实例化后的对象了。</p><p>而我们本章节的案例目标就是定义一个简单的 Spring 容器，用于定义、存放和获取 Bean 对象。</p><h2 id="三、设计" tabindex="-1"><a class="header-anchor" href="#三、设计" aria-hidden="true">#</a> 三、设计</h2><p>凡是可以存放数据的具体数据结构实现，都可以称之为容器。例如：ArrayList、LinkedList、HashSet等，但在 Spring Bean 容器的场景下，我们需要一种可以用于存放和名称索引式的数据结构，所以选择 HashMap 是最合适不过的。</p><p>这里简单介绍一下 HashMap，HashMap 是一种基于扰动函数、负载因子、红黑树转换等技术内容，形成的拉链寻址的数据结构，它能让数据更加散列的分布在哈希桶以及碰撞时形成的链表和红黑树上。它的数据结构会尽可能最大限度的让整个数据读取的复杂度在 O(1) ~ O(Logn) ~O(n)之间，当然在极端情况下也会有 O(n) 链表查找数据较多的情况。不过我们经过10万数据的扰动函数再寻址验证测试，数据会均匀的散列在各个哈希桶索引上，所以 HashMap 非常适合用在 Spring Bean 的容器实现上。</p><p>另外一个简单的 Spring Bean 容器实现，还需 Bean 的定义、注册、获取三个基本步骤，简化设计如下；</p><p><img src="https://bugstack.cn/assets/images/spring/spring-2-01.png" alt=""></p><ul><li>定义：BeanDefinition，可能这是你在查阅 Spring 源码时经常看到的一个类，例如它会包括 singleton、prototype、BeanClassName 等。但目前我们初步实现会更加简单的处理，只定义一个 Object 类型用于存放对象。</li><li>注册：这个过程就相当于我们把数据存放到 HashMap 中，只不过现在 HashMap 存放的是定义了的 Bean 的对象信息。</li><li>获取：最后就是获取对象，Bean 的名字就是key，Spring 容器初始化好 Bean 以后，就可以直接获取了。</li></ul><p>接下来我们就按照这个设计，做一个简单的 Spring Bean 容器代码实现。<em>编码的过程往往并不会有多复杂，但知晓设计过程却更加重要！</em></p><h2 id="四、实现" tabindex="-1"><a class="header-anchor" href="#四、实现" aria-hidden="true">#</a> 四、实现</h2><h3 id="_1-工程结构" tabindex="-1"><a class="header-anchor" href="#_1-工程结构" aria-hidden="true">#</a> 1. 工程结构</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>small<span class="token operator">-</span>spring<span class="token operator">-</span>step<span class="token operator">-</span><span class="token number">01</span>
└── src
    ├── main
    │   └── java
    │       └── cn<span class="token punctuation">.</span>bugstack<span class="token punctuation">.</span>springframework
    │           ├── <span class="token class-name">BeanDefinition</span><span class="token punctuation">.</span>java
    │           └── <span class="token class-name">BeanFactory</span><span class="token punctuation">.</span>java
    └── test
        └── java
            └── cn<span class="token punctuation">.</span>bugstack<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test  
                ├── bean
                │   └── <span class="token class-name">UserService</span><span class="token punctuation">.</span>java                
                └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工程源码</strong>：<code>公众号「bugstack虫洞栈」，回复：Spring 专栏，获取完整源码</code></p><p>Spring Bean 容器类关系，如图 2-2</p><p><img src="https://bugstack.cn/assets/images/spring/spring-2-02.png" alt="图 2-2"></p><p>Spring Bean 容器的整个实现内容非常简单，也仅仅是包括了一个简单的 BeanFactory 和 BeanDefinition，这里的类名称是与 Spring 源码中一致，只不过现在的类实现会相对来说更简化一些，在后续的实现过程中再不断的添加内容。</p><ol><li>BeanDefinition，用于定义 Bean 实例化信息，现在的实现是以一个 Object 存放对象</li><li>BeanFactory，代表了 Bean 对象的工厂，可以存放 Bean 定义到 Map 中以及获取。</li></ol><h3 id="_2-bean-定义" tabindex="-1"><a class="header-anchor" href="#_2-bean-定义" aria-hidden="true">#</a> 2. Bean 定义</h3><p><strong>cn.bugstack.springframework.BeanDefinition</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanDefinition</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Object</span> bean<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bean <span class="token operator">=</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>目前的 Bean 定义中，只有一个 Object 用于存放 Bean 对象。如果感兴趣可以参考 Spring 源码中这个类的信息，名称都是一样的。</li><li>不过在后面陆续的实现中会逐步完善 BeanDefinition 相关属性的填充，例如：SCOPE_SINGLETON、SCOPE_PROTOTYPE、ROLE_APPLICATION、ROLE_SUPPORT、ROLE_INFRASTRUCTURE 以及 Bean Class 信息。</li></ul><h3 id="_3-bean-工厂" tabindex="-1"><a class="header-anchor" href="#_3-bean-工厂" aria-hidden="true">#</a> 3. Bean 工厂</h3><p><strong>cn.bugstack.springframework.BeanFactory</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinition</span><span class="token punctuation">&gt;</span></span> beanDefinitionMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanDefinitionMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">BeanDefinition</span> beanDefinition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        beanDefinitionMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 Bean 工厂的实现中，包括了 Bean 的注册，这里注册的是 Bean 的定义信息。同时在这个类中还包括了获取 Bean 的操作。</li><li>目前的 BeanFactory 仍然是非常简化的实现，但这种简化的实现内容也是整个 Spring 容器中关于 Bean 使用的最终体现结果，只不过实现过程只展示出基本的核心原理。在后续的补充实现中，这个会不断变得庞大。</li></ul><h2 id="五、测试" tabindex="-1"><a class="header-anchor" href="#五、测试" aria-hidden="true">#</a> 五、测试</h2><h3 id="_1-事先准备" tabindex="-1"><a class="header-anchor" href="#_1-事先准备" aria-hidden="true">#</a> 1. 事先准备</h3><p><strong>cn.bugstack.springframework.test.bean.UserService</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询用户信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里简单定义了一个 UserService 对象，方便我们后续对 Spring 容器测试。</li></ul><h3 id="_2-测试用例" tabindex="-1"><a class="header-anchor" href="#_2-测试用例" aria-hidden="true">#</a> 2. 测试用例</h3><p><strong>cn.bugstack.springframework.test.ApiTest</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test_BeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.初始化 BeanFactory</span>
    <span class="token class-name">BeanFactory</span> beanFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 2.注册 bean</span>
    <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanDefinition</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    beanFactory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">,</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 3.获取 bean</span>
    <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userService<span class="token punctuation">.</span><span class="token function">queryUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在单测中主要包括初始化 Bean 工厂、注册 Bean、获取 Bean，三个步骤，使用效果上贴近与 Spring，但显得会更简化。</li><li>在 Bean 的注册中，这里是直接把 UserService 实例化后作为入参传递给 BeanDefinition 的，在后续的陆续实现中，我们会把这部分内容放入 Bean 工厂中实现。</li></ul><h3 id="_3-测试结果" tabindex="-1"><a class="header-anchor" href="#_3-测试结果" aria-hidden="true">#</a> 3. 测试结果</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>查询用户信息

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过测试结果可以看到，目前的 Spring Bean 容器案例，已经稍有雏形。</li></ul><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2><ul><li>整篇关于 Spring Bean 容器的一个雏形就已经实现完成了，相对来说这部分代码并不会难住任何人，只要你稍加尝试就可以接受这部分内容的实现。</li><li>但对于一个知识的学习来说，写代码只是最后的步骤，往往整个思路、设计、方案，才更重要，只要你知道了因为什么、所以什么，才能让你有一个真正的理解。</li><li>下一章节会在此工程基础上扩容实现，要比现在的类多一些。不过每一篇的实现上，我都会以一个需求视角进行目标分析和方案设计，让大家在学习编码之外更能注重更多技术价值的学习。</li></ul><h2 id="七、优秀作业" tabindex="-1"><a class="header-anchor" href="#七、优秀作业" aria-hidden="true">#</a> 七、优秀作业</h2>`,50),m={href:"https://t.zsxq.com/07Or409lv",target:"_blank",rel:"noopener noreferrer"},h={href:"https://t.zsxq.com/08cTtlygk",target:"_blank",rel:"noopener noreferrer"},g={href:"https://t.zsxq.com/081RfLAlL",target:"_blank",rel:"noopener noreferrer"},f={href:"https://t.zsxq.com/08sg1lCFX",target:"_blank",rel:"noopener noreferrer"},B={href:"https://t.zsxq.com/09cnRyTu2",target:"_blank",rel:"noopener noreferrer"},_={href:"https://t.zsxq.com/09mIgDsm0",target:"_blank",rel:"noopener noreferrer"},S={href:"https://t.zsxq.com/0a2mcHw7w",target:"_blank",rel:"noopener noreferrer"};function y(w,x){const s=i("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[a("作者：小傅哥 "),u,a("博客："),n("a",d,[a("https://bugstack.cn"),e(s)]),k,a("原文："),n("a",v,[a("https://mp.weixin.qq.com/s/fiWX6abSCiUKHAUa-HKg4A"),e(s)])]),b,n("ul",null,[n("li",null,[n("a",m,[a("模拟Spring，创建简单的Bean容器 @刘小白"),e(s)])]),n("li",null,[n("a",h,[a("定义一个简单的 Spring 容器，用于定义、存放和获取 Bean 对象。@水中捞月"),e(s)])]),n("li",null,[n("a",g,[a("实现一个简单的 Spring 容器 @微风"),e(s)])]),n("li",null,[n("a",f,[a("单例的Bean注册表接口 - 主要是提供 获取单例Bean和注册单例对象方法 @刘溜溜"),e(s)])]),n("li",null,[n("a",B,[a("创建一个简单的spring容器，需要实现bean的定义、注册、获取 @Doraemon"),e(s)])]),n("li",null,[n("a",_,[a("将对象和代表对象的实例信息(BeanDefinition)进行区分 @Liuliuliu"),e(s)])]),n("li",null,[n("a",S,[a(")修改beanDefinition中Object对象为Class对象，将创建对象工作交给容器实现 @小汤哥"),e(s)])])])])}const D=t(l,[["render",y],["__file","2021-05-20-di2zhang：xiaoshiniudao，shixianyigejiandandeBeanrongqi.html.vue"]]);export{D as default};
