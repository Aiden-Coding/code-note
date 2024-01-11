import{_ as t,r as o,o as l,c,a as n,b as s,d as e,e as p}from"./app-3RcBQnkC.js";const i={},r=n("h1",{id:"面经手册-·-第14篇《volatile-怎么实现的内存可见-没有-volatile-一定不可见吗-》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#面经手册-·-第14篇《volatile-怎么实现的内存可见-没有-volatile-一定不可见吗-》","aria-hidden":"true"},"#"),s(" 面经手册 · 第14篇《volatile 怎么实现的内存可见？没有 volatile 一定不可见吗？》")],-1),u=n("br",null,null,-1),k={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},d=p(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="一、码场心得" tabindex="-1"><a class="header-anchor" href="#一、码场心得" aria-hidden="true">#</a> 一、码场心得</h2><p><img src="https://bugstack.cn/assets/images/2020/interview/interview-14-02.png" alt=""></p><p><code>你是个能吃苦的人吗？</code></p><p>从前的能吃苦大多指的体力劳动的苦，但现在的能吃苦已经包括太多维度，包括：<code>读书学习&amp;寂寞的苦</code>、<code>深度思考&amp;脑力的苦</code>、<code>自律习惯&amp;修行的苦</code>、<code>自控能力&amp;放弃的苦</code>、<code>低头做人&amp;尊严的苦</code>。</p><p>虽然这些苦摆在眼前，但大多数人还是喜欢吃简单的苦。熬夜加班、日复一日、重复昨天、CRUD，最后身体发胖、体质下降、能力不足、自抱自泣！所以有些苦能不吃就不吃，要吃就吃那些有成长价值的苦。</p><p><code>今天你写博客了吗？</code></p><p>如果一件小事能坚持5年以上，那你一定是很了不起的人。是的，很了不起。人最难的就是想清楚了但做不到，或者偶尔做到长期做不到。</p><p>其实大多数走在研发路上的伙伴们，都知道自己该努力，但明明下好了的决心就是坚持不了多久。就像你是否也想过要写技术博客，做技术积累。直到有一天被瓶颈限制在困局中才会着急，但这时候在想破局就真的很难了！</p><h2 id="二、面试题" tabindex="-1"><a class="header-anchor" href="#二、面试题" aria-hidden="true">#</a> 二、面试题</h2><p><code>谢飞机，小记</code>，飞机趁着周末，吃完火锅。又去约面试官喝茶了！</p><p><strong>谢飞机</strong>：嗨，我在这，这边，这边。</p><p><strong>面试官</strong>：你怎么又来了，最近学的不错了？</p><p><strong>谢飞机</strong>：还是想来大厂，别害羞，面我吧！</p><p><strong>面试官</strong>：我好像是你补课老师... 既然来了，就问问你吧！volatile 是干啥的？</p><p><strong>谢飞机</strong>：啊，volatile 是保证变量对所有线程的可见性的。</p><p><strong>面试官</strong>：那 volatile 可以解决原子性问题吗？</p><p><strong>谢飞机</strong>：不可以！</p><p><strong>面试官</strong>：那 volatile 的底层原理是如何实现的呢？</p><p><strong>谢飞机</strong>：...，这！<em>面试官，刚问两个题就甩雷</em>，你是不家里有事要忙？</p><p><strong>面试官</strong>：你管我！</p><h2 id="三、volatile-讲解" tabindex="-1"><a class="header-anchor" href="#三、volatile-讲解" aria-hidden="true">#</a> 三、volatile 讲解</h2><h3 id="_1-可见性案例" tabindex="-1"><a class="header-anchor" href="#_1-可见性案例" aria-hidden="true">#</a> 1. 可见性案例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">VT</span> vt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> <span class="token class-name">Thread01</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>vt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> <span class="token class-name">Thread02</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ignore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span>
                vt<span class="token punctuation">.</span>sign <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;vt.sign = true 通知 while (!sign) 结束！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread01</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread02</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">VT</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> sign <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sign<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你坏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这段代码</strong>，是两个线程操作一个变量，程序期望当 <code>sign</code> 在线程 Thread01 被操作 <code>vt.sign = true</code> 时，Thread02 输出 <em>你坏</em>。</p><p>但实际上这段代码永远不会输出 <em>你坏</em>，而是一直处于死循环。这是为什么呢？接下来我们就一步步讲解和验证。</p><h3 id="_2-加上volatile关键字" tabindex="-1"><a class="header-anchor" href="#_2-加上volatile关键字" aria-hidden="true">#</a> 2. 加上volatile关键字</h3><p>我们把 sign 关键字加上 volatitle 描述，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">VT</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> sign <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sign<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你坏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>vt<span class="token punctuation">.</span>sign <span class="token operator">=</span> <span class="token boolean">true</span> 通知 <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sign<span class="token punctuation">)</span> 结束！
你坏

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>volatile关键字是Java虚拟机提供的的最轻量级的同步机制，它作为一个修饰符出现，用来修饰变量，但是这里不包括局部变量哦</p><p>在添加 volatile 关键字后，程序就符合预期的输出了 <em>你坏</em>。从我们对 volatile 的学习认知可以知道。volatile关键字是 JVM 提供的最轻量级的同步机制，用来修饰变量，用来保证变量对所有线程可见性。</p><p>正在修饰后可以让字段在线程见可见，那么这个属性被修改值后，可以及时的在另外的线程中做出相应的反应。</p><h3 id="_3-volatile怎么保证的可见性" tabindex="-1"><a class="header-anchor" href="#_3-volatile怎么保证的可见性" aria-hidden="true">#</a> 3. volatile怎么保证的可见性</h3><h4 id="_3-1-无volatile时-内存变化" tabindex="-1"><a class="header-anchor" href="#_3-1-无volatile时-内存变化" aria-hidden="true">#</a> 3.1 无volatile时，内存变化</h4><p><img src="https://bugstack.cn/assets/images/2020/interview/interview-14-03.png" alt="无volatile时，内存变化"></p><p>首先是当 sign 没有 volatitle 修饰时 <code>public boolean sign = false;</code>，线程01对变量进行操作，线程02并不会拿到变化的值。所以程序也就不会输出结果 “你坏”</p><h4 id="_3-2-有volatile时-内存变化" tabindex="-1"><a class="header-anchor" href="#_3-2-有volatile时-内存变化" aria-hidden="true">#</a> 3.2 有volatile时，内存变化</h4><p><img src="https://bugstack.cn/assets/images/2020/interview/interview-14-04.png" alt="有volatile时，内存变化"></p><p>当我们把变量使用 volatile 修饰时 <code>public volatile boolean sign = false;</code>，线程01对变量进行操作时，会把变量变化的值强制刷新的到主内存。当线程02获取值时，会把自己的内存里的 sign 值过期掉，之后从主内存中读取。所以添加关键字后程序如预期输出结果。</p><h3 id="_4-反编译解毒可见性" tabindex="-1"><a class="header-anchor" href="#_4-反编译解毒可见性" aria-hidden="true">#</a> 4. 反编译解毒可见性</h3><p>类似这样有深度的技术知识，最佳的方式就是深入理解原理，看看它到底做了什么才保证的内存可见性操作。</p><h4 id="_4-1-查看jvm指令" tabindex="-1"><a class="header-anchor" href="#_4-1-查看jvm指令" aria-hidden="true">#</a> 4.1 查看JVM指令</h4><p><strong>指令</strong>：<code>javap -v -p VT</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> sign<span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token class-name">Z</span>
    flags<span class="token operator">:</span> <span class="token constant">ACC_PUBLIC</span><span class="token punctuation">,</span> <span class="token constant">ACC_VOLATILE</span>

  org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>interview<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token function">VT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    flags<span class="token operator">:</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
      stack<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> locals<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> args_size<span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span><span class="token operator">:</span> aload_0
         <span class="token number">1</span><span class="token operator">:</span> invokespecial #<span class="token number">1</span>                  <span class="token comment">// Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
         <span class="token number">4</span><span class="token operator">:</span> aload_0
         <span class="token number">5</span><span class="token operator">:</span> iconst_0
         <span class="token number">6</span><span class="token operator">:</span> putfield      #<span class="token number">2</span>                  <span class="token comment">// Field sign:Z</span>
         <span class="token number">9</span><span class="token operator">:</span> <span class="token keyword">return</span>
      <span class="token class-name">LineNumberTable</span><span class="token operator">:</span>
        line <span class="token number">35</span><span class="token operator">:</span> <span class="token number">0</span>
        line <span class="token number">37</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token class-name">LocalVariableTable</span><span class="token operator">:</span>
        <span class="token class-name">Start</span>  <span class="token class-name">Length</span>  <span class="token class-name">Slot</span>  <span class="token class-name">Name</span>   <span class="token class-name">Signature</span>
            <span class="token number">0</span>      <span class="token number">10</span>     <span class="token number">0</span>  <span class="token keyword">this</span>   <span class="token class-name">Lorg</span><span class="token operator">/</span>itstack<span class="token operator">/</span>interview<span class="token operator">/</span>test<span class="token operator">/</span><span class="token constant">VT</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    flags<span class="token operator">:</span> <span class="token constant">ACC_PUBLIC</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
      stack<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> locals<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> args_size<span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span><span class="token operator">:</span> aload_0
         <span class="token number">1</span><span class="token operator">:</span> getfield      #<span class="token number">2</span>                  <span class="token comment">// Field sign:Z</span>
         <span class="token number">4</span><span class="token operator">:</span> ifne          <span class="token number">10</span>
         <span class="token number">7</span><span class="token operator">:</span> <span class="token keyword">goto</span>          <span class="token number">0</span>
        <span class="token number">10</span><span class="token operator">:</span> getstatic     #<span class="token number">3</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>
        <span class="token number">13</span><span class="token operator">:</span> ldc           #<span class="token number">4</span>                  <span class="token comment">// String 你坏</span>
        <span class="token number">15</span><span class="token operator">:</span> invokevirtual #<span class="token number">5</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>
        <span class="token number">18</span><span class="token operator">:</span> <span class="token keyword">return</span>
      <span class="token class-name">LineNumberTable</span><span class="token operator">:</span>
        line <span class="token number">40</span><span class="token operator">:</span> <span class="token number">0</span>
        line <span class="token number">42</span><span class="token operator">:</span> <span class="token number">10</span>
        line <span class="token number">43</span><span class="token operator">:</span> <span class="token number">18</span>
      <span class="token class-name">LocalVariableTable</span><span class="token operator">:</span>
        <span class="token class-name">Start</span>  <span class="token class-name">Length</span>  <span class="token class-name">Slot</span>  <span class="token class-name">Name</span>   <span class="token class-name">Signature</span>
            <span class="token number">0</span>      <span class="token number">19</span>     <span class="token number">0</span>  <span class="token keyword">this</span>   <span class="token class-name">Lorg</span><span class="token operator">/</span>itstack<span class="token operator">/</span>interview<span class="token operator">/</span>test<span class="token operator">/</span><span class="token constant">VT</span><span class="token punctuation">;</span>
      <span class="token class-name">StackMapTable</span><span class="token operator">:</span> number_of_entries <span class="token operator">=</span> <span class="token number">2</span>
        frame_type <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">/* same */</span>
        frame_type <span class="token operator">=</span> <span class="token number">9</span> <span class="token comment">/* same */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从JVM指令码中只会发现多了，<code>ACC_VOLATILE</code>，并没有什么其他的点。所以，也不能看出是怎么实现的可见性。</p><h4 id="_4-2-查看汇编指令" tabindex="-1"><a class="header-anchor" href="#_4-2-查看汇编指令" aria-hidden="true">#</a> 4.2 查看汇编指令</h4><p>通过Class文件查看汇编，需要下载 hsdis-amd64.dll 文件，复制到 <code>JAVA_HOME\\jre\\bin\\server目录下</code>。下载资源如下：</p>`,49),m={href:"http://vorboss.dl.sourceforge.net/project/fcml/fcml-1.1.1/hsdis-1.1.1-win32-amd64.zip",target:"_blank",rel:"noopener noreferrer"},v={href:"http://vorboss.dl.sourceforge.net/project/fcml/fcml-1.1.1/hsdis-1.1.1-win32-i386.zip",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>另外是执行命令，包括：</p><ol><li>基础指令：<code>java -Xcomp -XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly</code></li><li>指定打印：<code>-XX:CompileCommand=dontinline,类名.方法名</code></li><li>指定打印：<code>-XX:CompileCommand=compileonly,类名.方法名</code></li><li>输出位置：<code>&gt; xxx</code></li></ol><p>最终使用：<code>java -Xcomp -XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly -XX:CompileCommand=dontinline,ApiTest.main -XX:CompileCommand=compileonly,ApiTest.mian</code></p><p><em>指令可以在IDEA中的 Terminal 里使用，也可以到 DOS黑窗口中使用</em></p><p><strong>另外</strong>，为了更简单的使用，我们把指令可以配置到idea的 VM options 里，如下图：</p><p><img src="https://bugstack.cn/assets/images/2020/interview/interview-14-05.png" alt="Idea VM options 配置编译指令"></p><p>配置完成后，不出意外的运行结果如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Loaded</span> disassembler from <span class="token class-name">C</span><span class="token operator">:</span>\\<span class="token class-name">Program</span> <span class="token class-name">Files</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_161</span>\\jre\\bin\\server\\hsdis<span class="token operator">-</span>amd64<span class="token punctuation">.</span>dll
<span class="token class-name">Decoding</span> compiled method <span class="token number">0x0000000003744990</span><span class="token operator">:</span>
<span class="token class-name">Code</span><span class="token operator">:</span>
<span class="token class-name">Argument</span> <span class="token number">0</span> is unknown<span class="token punctuation">.</span><span class="token constant">RIP</span><span class="token operator">:</span> <span class="token number">0x3744ae0</span> <span class="token class-name">Code</span> size<span class="token operator">:</span> <span class="token number">0x00000110</span>
<span class="token punctuation">[</span><span class="token class-name">Disassembling</span> <span class="token keyword">for</span> mach<span class="token operator">=</span><span class="token char">&#39;amd64&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token class-name">Entry</span> <span class="token class-name">Point</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token class-name">Constants</span><span class="token punctuation">]</span>
  # <span class="token punctuation">{</span>method<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token number">0x000000001c853d18</span><span class="token punctuation">}</span> &#39;getSnapshotTransformerList<span class="token char">&#39; &#39;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token class-name">Lsun</span><span class="token operator">/</span>instrument<span class="token operator">/</span><span class="token class-name">TransformerManager</span>$<span class="token class-name">TransformerInfo</span><span class="token punctuation">;</span><span class="token char">&#39; in &#39;</span>sun<span class="token operator">/</span>instrument<span class="token operator">/</span><span class="token class-name">TransformerManager</span>&#39;
  #           <span class="token punctuation">[</span>sp<span class="token operator">+</span><span class="token number">0x40</span><span class="token punctuation">]</span>  <span class="token punctuation">(</span>sp of caller<span class="token punctuation">)</span>
  <span class="token number">0x0000000003744ae0</span><span class="token operator">:</span> mov     r10d<span class="token punctuation">,</span>dword ptr <span class="token punctuation">[</span>rdx<span class="token operator">+</span><span class="token number">8</span>h<span class="token punctuation">]</span>
  <span class="token number">0x0000000003744ae4</span><span class="token operator">:</span> shl     r10<span class="token punctuation">,</span><span class="token number">3</span>h
  <span class="token number">0x0000000003744ae8</span><span class="token operator">:</span> cmp     r10<span class="token punctuation">,</span>rax
  <span class="token number">0x0000000003744aeb</span><span class="token operator">:</span> jne     <span class="token number">3685f</span><span class="token number">60</span>h          <span class="token punctuation">;</span>   <span class="token punctuation">{</span>runtime_call<span class="token punctuation">}</span>
  <span class="token number">0x0000000003744af1</span><span class="token operator">:</span> nop     word ptr <span class="token punctuation">[</span>rax<span class="token operator">+</span>rax<span class="token operator">+</span><span class="token number">0</span>h<span class="token punctuation">]</span>
  <span class="token number">0x0000000003744afc</span><span class="token operator">:</span> nop
<span class="token punctuation">[</span><span class="token class-name">Verified</span> <span class="token class-name">Entry</span> <span class="token class-name">Point</span><span class="token punctuation">]</span>
  <span class="token number">0x0000000003744b00</span><span class="token operator">:</span> mov     dword ptr <span class="token punctuation">[</span>rsp<span class="token operator">+</span><span class="token number">0f</span>fffffffffffa000h<span class="token punctuation">]</span><span class="token punctuation">,</span>eax
  <span class="token number">0x0000000003744b07</span><span class="token operator">:</span> push    rbp
  <span class="token number">0x0000000003744b08</span><span class="token operator">:</span> sub     rsp<span class="token punctuation">,</span><span class="token number">30</span>h           <span class="token punctuation">;</span><span class="token operator">*</span>aload_0
                                                <span class="token punctuation">;</span> <span class="token operator">-</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>instrument<span class="token punctuation">.</span></span>TransformerManager</span><span class="token operator">::</span><span class="token function">getSnapshotTransformerList</span><span class="token annotation punctuation">@0</span> <span class="token punctuation">(</span>line <span class="token number">166</span><span class="token punctuation">)</span>

  <span class="token number">0x0000000003744b0c</span><span class="token operator">:</span> mov     eax<span class="token punctuation">,</span>dword ptr <span class="token punctuation">[</span>rdx<span class="token operator">+</span><span class="token number">10</span>h<span class="token punctuation">]</span>
  <span class="token number">0x0000000003744b0f</span><span class="token operator">:</span> shl     rax<span class="token punctuation">,</span><span class="token number">3</span>h            <span class="token punctuation">;</span><span class="token operator">*</span>getfield mTransformerList
                                                <span class="token punctuation">;</span> <span class="token operator">-</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>instrument<span class="token punctuation">.</span></span>TransformerManager</span><span class="token operator">::</span><span class="token function">getSnapshotTransformerList</span><span class="token annotation punctuation">@1</span> <span class="token punctuation">(</span>line <span class="token number">166</span><span class="token punctuation">)</span>

  <span class="token number">0x0000000003744b13</span><span class="token operator">:</span> add     rsp<span class="token punctuation">,</span><span class="token number">30</span>h
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果就是汇编指令</strong>，比较多这里就不都放了。我们只观察🕵重点部分：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token number">0x0000000003324cda</span><span class="token operator">:</span> mov    <span class="token function">0x74</span><span class="token punctuation">(</span><span class="token operator">%</span>r8<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">%</span>edx     <span class="token punctuation">;</span><span class="token operator">*</span>getstatic state
                                                 <span class="token punctuation">;</span> <span class="token operator">-</span> <span class="token constant">VT</span><span class="token operator">::</span><span class="token function">run</span><span class="token annotation punctuation">@28</span> <span class="token punctuation">(</span>line <span class="token number">27</span><span class="token punctuation">)</span>
 
   <span class="token number">0x0000000003324cde</span><span class="token operator">:</span> inc    <span class="token operator">%</span>edx
   <span class="token number">0x0000000003324ce0</span><span class="token operator">:</span> mov    <span class="token operator">%</span>edx<span class="token punctuation">,</span><span class="token function">0x74</span><span class="token punctuation">(</span><span class="token operator">%</span>r8<span class="token punctuation">)</span>
   <span class="token number">0x0000000003324ce4</span><span class="token operator">:</span> lock addl $<span class="token number">0x0</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">%</span>rsp<span class="token punctuation">)</span>     <span class="token punctuation">;</span><span class="token operator">*</span>putstatic state
                                                 <span class="token punctuation">;</span> <span class="token operator">-</span> <span class="token constant">VT</span><span class="token operator">::</span><span class="token function">run</span><span class="token annotation punctuation">@33</span> <span class="token punctuation">(</span>line <span class="token number">27</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的汇编指令中，有volatile关键字和没有volatile关键字，主要差别在于多了一个 <code>lock addl $0x0,(%rsp)</code>，也就是lock的前缀指令。</p><p><strong>lock指令</strong>相当于一个<em>内存屏障</em>，它保证如下三点：</p><ol><li>将本处理器的缓存写入内存。</li><li>重排序时不能把后面的指令重排序到内存屏障之前的位置。</li><li>如果是写入动作会导致其他处理器中对应的内存无效。</li></ol><p>那么，这里的1、3就是用来保证被修饰的变量，保证内存可见性。</p><h3 id="_5-不加volatile也可见吗" tabindex="-1"><a class="header-anchor" href="#_5-不加volatile也可见吗" aria-hidden="true">#</a> 5. 不加volatile也可见吗</h3><p><code>有质疑就要有验证</code></p><p>我们现在再把例子修改下，在 <code>while (!sign)</code> 循环体中添加一段执行代码，如下；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">VT</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> sign <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sign<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你坏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后去掉了 <code>volatile</code> 关键字，并在while循环中添加一段代码。现在的运行结果是：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
你好
你好
你好
vt<span class="token punctuation">.</span>sign <span class="token operator">=</span> <span class="token boolean">true</span> 通知 <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sign<span class="token punctuation">)</span> 结束！
你坏

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>咋样</strong>，又可见了吧！</p><p>这是因为在没 volatile 修饰时，jvm也会尽量保证可见性。​有 volatile 修饰的时候，一定保证可见性。<strong>但可能并非如此，下章节继续深挖！</strong></p><h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2><ul><li>最后我们再总结下 volatile，它呢，会控制被修饰的变量在内存操作上主动把值刷新到主内存，JMM 会把该线程对应的CPU内存设置过期，从主内存中读取最新值。</li><li>那么，volatile 如何防止指令重排也是内存屏障，volatile 的内存屏故障是在读写操作的前后各添加一个 StoreStore屏障，也就是四个位置，来保证重排序时不能把内存屏障后面的指令重排序到内存屏障之前的位置。</li><li>另外 volatile 并不能解决原子性，如果需要解决原子性问题，需要使用 synchronzied 或者 lock，这部分内容在我们后续章节中介绍。</li></ul>`,24);function h(g,f){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",k,[s("https://bugstack.cn"),e(a)])]),d,n("ul",null,[n("li",null,[n("a",m,[s("http://vorboss.dl.sourceforge.net/project/fcml/fcml-1.1.1/hsdis-1.1.1-win32-amd64.zip"),e(a)])]),n("li",null,[n("a",v,[s("http://vorboss.dl.sourceforge.net/project/fcml/fcml-1.1.1/hsdis-1.1.1-win32-i386.zip"),e(a)])])]),b])}const _=t(i,[["render",h],["__file","2020-10-21-mianjingshouce · di14pian《volatile zenmeshixiandenacunkejian？meiyou volatile yidingbukejianma？》.html.vue"]]);export{_ as default};
