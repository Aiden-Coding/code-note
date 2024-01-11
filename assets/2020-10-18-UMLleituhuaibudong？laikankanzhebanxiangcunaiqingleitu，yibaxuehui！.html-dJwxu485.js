import{_ as i,r as p,o as t,c as l,a as n,b as s,d as e,e as c}from"./app-3RcBQnkC.js";const o={},d=n("h1",{id:"uml类图还不懂-来看看这版乡村爱情类图-一把学会",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uml类图还不懂-来看看这版乡村爱情类图-一把学会","aria-hidden":"true"},"#"),s(" UML类图还不懂？来看看这版乡村爱情类图，一把学会！")],-1),u=n("br",null,null,-1),r={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),v={href:"https://mp.weixin.qq.com/s/swue5bjpDjqfCYYK6kTgfg",target:"_blank",rel:"noopener noreferrer"},b=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),m=n("h2",{id:"一、码场心得",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、码场心得","aria-hidden":"true"},"#"),s(" 一、码场心得")],-1),g=n("p",null,[n("code",null,"🤔有个词叫内卷严重！")],-1),h={href:"https://bugstack.cn/interview/2020/08/07/%E9%9D%A2%E7%BB%8F%E6%89%8B%E5%86%8C-%E7%AC%AC3%E7%AF%87-HashMap%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86-%E6%89%B0%E5%8A%A8%E5%87%BD%E6%95%B0-%E8%B4%9F%E8%BD%BD%E5%9B%A0%E5%AD%90-%E6%89%A9%E5%AE%B9%E9%93%BE%E8%A1%A8%E6%8B%86%E5%88%86-%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.html",target:"_blank",rel:"noopener noreferrer"},w=c(`<p>那什么叫内卷呢，乍一看这词还是有点新的。其实内卷化来自单词 <code>involution</code>，也可以称作“过密化”。这样就好解释了，比如；</p><ol><li>100个人上卫生间就3个坑，没法公平分配，那就谁今天谁穿裤衩谁先上</li><li>100个700分以上的，就30%个名额能去清北。3万多600分以上的考生里，很多人可能连211都上不了。</li><li>道路拥堵，不能让每个人都开车，只能遥遥无期的摇号排队。</li></ol><p>这些都可以解释为过密化带来的内卷严重问题，但好在这些都在不断的优化完善。</p><p><code>🤒程序员也有内卷？！</code></p><p>其实大部分时候大家说的程序员内卷，指的是面试造火箭，求职越来越难。</p><p>其实从某种角度来说，我个人是不太认可说程序员有内卷的。就整个行业来看，程序员的工作就业情况和薪资待遇都是不错的。有人会觉得面试还得刷题、学源码、看框架、懂架构等等，可这些难道不应该是你做成程序员职业发展道路上，必经的突破吗？</p><p>可能每个人都会在某个时期感觉自己一直处于瓶颈期，做着重复的事情、码着CRUD的逻辑、接触不到核心的技术等等，都会猛的瞬间觉得自己快狒狒了。那这样的你似乎只能用内卷这个词让自己内心平衡了，<strong>试问自己</strong>，你对自己投入过学习成长的时间吗？你有计划破局突破自己的瓶颈吗？如果没有那不叫内卷！</p><h2 id="二、会议室" tabindex="-1"><a class="header-anchor" href="#二、会议室" aria-hidden="true">#</a> 二、会议室</h2><p><code>谢飞机，小记</code>，假期回来上班的一周的🛩飞机，被组长安排了一次项目成长分享。</p><p><strong>小组长</strong>：飞机，你分享的项目中，核心模块要给大家讲清楚。这块蛮有技术点的！</p><p><strong>谢飞机</strong>：嗯嗯，我也在想怎么能让大家听懂。</p><p><strong>小组长</strong>：最好借助一些工具，把代码逻辑、功能流程，通过图的方式表达出来。</p><p><strong>谢飞机</strong>：流程图我会画了，但是这里的核心功能类，我还不知道怎么弄。</p><p><strong>小组长</strong>：咳咳，用UML类图哇，把核心类体现出来。</p><p><strong>谢飞机</strong>：...，没画过，我内卷了吗？</p><p><strong>小组长</strong>：不要脸！等我画点资料，教你！</p><h2 id="三、乡村爱情类图学习" tabindex="-1"><a class="header-anchor" href="#三、乡村爱情类图学习" aria-hidden="true">#</a> 三、乡村爱情类图学习</h2><p><strong>UML（Unified Modeling Language）</strong>，是一种面向对象设计的建模工具，建模的核心是模型，模型是现实的简化、真实的抽象。</p><p>在 UML 中，所有的描述包括：事务、关系、图这三部分构件组成，如下图为所有构件的关系。</p><p><img src="https://bugstack.cn/assets/images/2020/all-7-00.png" alt="UML 构件关系图，来自设计模式"></p><p><strong>接下来</strong>，我们就着重讲解UML中的类图关系，在乡村爱情人物里的体现。</p><h3 id="_1-类图模型" tabindex="-1"><a class="header-anchor" href="#_1-类图模型" aria-hidden="true">#</a> 1. 类图模型</h3><p><strong>UML 类图（Class Diagrams）</strong>，是使用频率最高的 UML 图之一，类图可以表示出类、接口和它们之间的协作关系。各个接口、类、属性、方法，可以用如下方式表达。</p><p><img src="https://bugstack.cn/assets/images/2020/all-7-01.png" alt="UML 类图中，接口、类、属性、方法，表达方式"></p><h3 id="_2-继承关系" tabindex="-1"><a class="header-anchor" href="#_2-继承关系" aria-hidden="true">#</a> 2. 继承关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 谢广坤 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> 辈分<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 作妖<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 谢永强 <span class="token keyword">extends</span> 谢广坤 <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 谢飞机 <span class="token keyword">extends</span> 谢广坤 <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-02.png" alt="UML类图，继承关系"></p><hr><ul><li>功能：继承关系</li><li>概念：继承（Generaliztion）又叫泛化，用于表示子类继承父类的所有功能。</li><li>场景：谢广坤的作妖技能，谢永强和谢飞机继承。谢飞机继承的更好，更能作。</li></ul><h3 id="_3-实现关系" tabindex="-1"><a class="header-anchor" href="#_3-实现关系" aria-hidden="true">#</a> 3. 实现关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> 舞术 <span class="token punctuation">{</span>
    <span class="token keyword">void</span> 招式<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 刘能 <span class="token keyword">implements</span> 舞术 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> 来将姓名<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 招式<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 赵四 <span class="token keyword">implements</span> 舞术 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> 来将姓名<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 招式<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-03.png" alt="UML类图，实现关系"></p><hr><ul><li>功能：实现关系</li><li>概念：接口、抽象类声明的方法，由类实现（Realiztion）其功能。</li><li>场景：在赵四和刘能的一场比舞中，赵四花式走位，被刘能找准时机一踢撂倒。</li></ul><h3 id="_4-组合关系" tabindex="-1"><a class="header-anchor" href="#_4-组合关系" aria-hidden="true">#</a> 4. 组合关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 结婚证 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> 赵玉田 男方<span class="token punctuation">;</span>
    <span class="token keyword">private</span> 刘英 女方<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> set男方<span class="token punctuation">(</span>赵玉田 男方<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>男方 <span class="token operator">=</span> 男方<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> set女方<span class="token punctuation">(</span>刘英 女方<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>女方 <span class="token operator">=</span> 女方<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 赵玉田 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> 年龄<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> 性别<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 刘英 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> 年龄<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> 性别<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-04.png" alt="UML类图，组合关系"></p><hr><ul><li>功能：组合关系</li><li>概念：组合（Combination）关系表示类中整体与部分的关系，整体与部分相依相存。</li><li>场景：赵玉田和刘英的结婚证，缺一不可。</li></ul><h3 id="_5-聚合关系" tabindex="-1"><a class="header-anchor" href="#_5-聚合关系" aria-hidden="true">#</a> 5. 聚合关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 山庄 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> 宋晓峰 晓峰<span class="token punctuation">;</span>
    <span class="token keyword">private</span> 李宝库 宝库<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> 药膳房<span class="token punctuation">(</span>李宝库 宝库<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>宝库 <span class="token operator">=</span> 宝库<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> 保安部<span class="token punctuation">(</span>宋晓峰 晓峰<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>晓峰 <span class="token operator">=</span> 晓峰<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 李宝库 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> 职业<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 宋晓峰 <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> 职业<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-05.png" alt="UML类图，聚合关系"></p><hr><ul><li>功能：聚合关系</li><li>概念：聚合（Aggregate）关系，也是用于表示对象的整体和部分，但成员对象可以与整体对象分离独立存在。</li><li>场景：在⛰山庄中药膳方有李宝库、保安部有宋晓峰。但李宝库和宋晓峰都只是其中的一员，都可以离开山庄。</li></ul><h3 id="_6-关联关系" tabindex="-1"><a class="header-anchor" href="#_6-关联关系" aria-hidden="true">#</a> 6. 关联关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 豆腐厂 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> 王小蒙 员工<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 添加员工<span class="token punctuation">(</span>王小蒙 小蒙<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>员工 <span class="token operator">=</span> 小蒙<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 王小蒙 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> 豆腐厂 企业<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 添加企业<span class="token punctuation">(</span>豆腐厂 豆腐厂<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>企业 <span class="token operator">=</span> 豆腐厂<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-06.png" alt="UML类图，关联关系"></p><hr><ul><li>功能：关联关系</li><li>概念：关联（Association）关系，是类之间常用的一种关系，表示一类对象与另一类对象的联系。组合、聚合也属于这种关系，但关联关系更弱。</li><li>场景：豆腐厂里有王小蒙，但豆腐厂里又不只是有王小蒙，还有王老七。即使小蒙不在，豆腐厂也可以正常运行。而王小蒙还有自己的其他企业，所以这属于一种关联关系。</li></ul><h3 id="_7-依赖关系" tabindex="-1"><a class="header-anchor" href="#_7-依赖关系" aria-hidden="true">#</a> 7. 依赖关系</h3><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 招商引资 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> 招商<span class="token punctuation">(</span>王大拿 大拿<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 王大拿 <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> 资源<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类图</strong></p><p><img src="https://bugstack.cn/assets/images/2020/all-7-07.png" alt="UML类图，依赖关系"></p><hr><ul><li>功能：依赖关系</li><li>概念：依赖（Dependency）关系当表示一个事务需要使用另外一个事务时，可以使用依赖关系。</li><li>场景：招商引资需要王大拿，但并只是就只有这一个大拿。王大拿不来，可能还有李大拿、张大拿。</li></ul><h2 id="四、赵家班全景类图" tabindex="-1"><a class="header-anchor" href="#四、赵家班全景类图" aria-hidden="true">#</a> 四、赵家班全景类图</h2><p><strong>综上</strong>，这6种关系里，组合、聚合、关联代码结构类似，可以从依赖的强弱进行理解。强弱关系依次是：继承 &gt; 实现 &gt; 组合 &gt; 聚合 &gt; 关联 &gt; 依赖。</p><p>为了更清楚的表达出 UML 类关系，我们把这些画到一整张图中，如下；</p><p><img src="https://bugstack.cn/assets/images/2020/all-7-08.png" alt="UML类图，赵家班全景类图"></p><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2><ul><li>有人说，如果我们和外星人👽非常友善的通信了。那么两个星球之间会进行一些交流，比如问，你好，地球人🌐人你多高呀？地球说1.75米。外星人晕了，米是什么单位？<strong>这样就只能选取两个星球通用的标准来定义，比如：1米是光在真空中1/299792458秒内经过的距离。</strong></li><li>其实程序开发也是这样的，为了可以让大家减少对新知识内容的理解的沟通成本，需要定义一些沟通标准，比如UML类图。所以我们需要学习这些标准的工具化语言，来减少沟通成本，提升工作效率。</li><li>UML类图也是最常用的图稿，同时也非常易于掌握。为了可以把自己的知识面铺设的更加完善，技术栈掌握的更加夯实，也为了突破每一个阶段的瓶颈。那就需要不断学习，不断的积累，找机会破局。</li></ul>`,72);function y(_,x){const a=p("ExternalLinkIcon");return t(),l("div",null,[d,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",r,[s("https://bugstack.cn"),e(a)]),k,s("原文："),n("a",v,[s("https://mp.weixin.qq.com/s/swue5bjpDjqfCYYK6kTgfg"),e(a)])]),b,m,g,n("p",null,[s("最开始听到这个词是有个小伙伴在我的一篇HashMap源码分析文章下的留言：“哥们，你这叫内卷！”。这篇文章深度解释了扰动函数、负载因子以及相关数学方式的结果验证，有兴趣的可以跳过去阅读。"),n("a",h,[s("《HashMap核心知识，扰动函数、负载因子、扩容链表拆分，深度学习》"),e(a)])]),w])}const f=i(o,[["render",y],["__file","2020-10-18-UMLleituhuaibudong？laikankanzhebanxiangcunaiqingleitu，yibaxuehui！.html.vue"]]);export{f as default};
