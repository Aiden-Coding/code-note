import{_ as p,r as c,o as l,c as i,a as s,b as n,d as t,w as e,e as o}from"./app-3RcBQnkC.js";const u="/code-note/assets/image-251-qgOXsBCb.png",r="/code-note/assets/image-252-bGw8D4S9.png",d="/code-note/assets/image-253-fOMExunE.png",k="/code-note/assets/image-254-W6M3juSm.png",v="/code-note/assets/image-255-PBdLvLWf.png",m="/code-note/assets/image-256-9gnengaK.png",_="/code-note/assets/image-257-T3n2nRod.png",g="/code-note/assets/image-258--ncvKfK-.png",b="/code-note/assets/image-132-tX70ITp9.png",h="/code-note/assets/image-260-nmKYpHQE.png",J="/code-note/assets/image-261-e3EWCoRd.png",y="/code-note/assets/image-262-wsI6XR7u.png",w="/code-note/assets/image-131-vwrc460N.png",f="/code-note/assets/image-83-yFTRg8ZE.png",M="/code-note/assets/image-265-Fzp4i4PR.png",j="/code-note/assets/image-266-O6aJHr22.png",x="/code-note/assets/image-267-jOMB5Xko.png",B="/code-note/assets/image-268-7uBg65zp.png",V="/code-note/assets/image-160-qyRTmzyQ.png",S="/code-note/assets/image-270-bnAvC6_-.png",A={},O=o('<h1 id="第九节-深入理解内存数据区" tabindex="-1"><a class="header-anchor" href="#第九节-深入理解内存数据区" aria-hidden="true">#</a> 第九节：深入理解内存数据区</h1><p>前面我们就讲过，Java 源代码文件经过编译器编译后会生成字节码文件，经过加载器加载完毕后会交给执行引擎执行。在执行的过程中，JVM 会划出来一块空间来存储程序执行期间需要用到的数据，这块空间一般被称为运行时数据区，见下图。</p><p><img src="'+u+'" alt="Alt text"></p><p>根据 Java 虚拟机规范的规定，运行时数据区可以分为以下几个部分：</p><ul><li>程序计数器（Program Counter Register）</li><li>Java 虚拟机栈（Java Virtual Machine Stacks）</li><li>本地方法栈（Native Method Stack）</li><li>堆（Heap）</li><li>方法区（Method Area）与元空间（Metaspace）</li></ul><p><img src="'+r+'" alt="Alt text"></p><h2 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h2>',7),C=s("p",null,"在 JVM 中，多线程是通过线程轮流切换来获得 CPU 执行时间的，因此，在任一具体时刻，一个 CPU 的内核只会执行一条线程中的指令，因此，为了线程切换后能恢复到正确的执行位置，每个线程都需要有一个独立的程序计数器，并且不能互相干扰，否则就会影响到程序的正常执行次序。",-1),P=s("p",null,[n("也就是说，我们要求"),s("strong",null,"程序计数器是线程私有的"),n("。")],-1),E=s("p",null,"《Java 虚拟机规范》中规定，如果线程执行的是非本地方法，则程序计数器中保存的是当前需要执行的指令地址；如果线程执行的是本地方法，则程序计数器中的值是 undefined。",-1),K=o(`<p>我们来通过代码以及字节码指令来看看程序计数器的作用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字节码指令大致如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">0</span><span class="token operator">:</span> iload_0      <span class="token comment">// 从局部变量表中加载变量 a 到操作数栈</span>
<span class="token number">1</span><span class="token operator">:</span> iload_1      <span class="token comment">// 从局部变量表中加载变量 b 到操作数栈</span>
<span class="token number">2</span><span class="token operator">:</span> iadd         <span class="token comment">// 两数相加</span>
<span class="token number">3</span><span class="token operator">:</span> ireturn      <span class="token comment">// 返回</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们逐步分析程序计数器是如何在执行这些指令时更新的：</p><ol><li><p><strong>初始状态</strong>：当方法开始执行时，PC 计数器设置为 0，指向第一条指令 <code>0: iload_0</code>。</p></li><li><p><strong>执行第一条指令</strong>：</p><ul><li>执行 <code>iload_0</code> 指令，将局部变量表中索引为 0 的整数（即方法的第一个参数 <code>a</code>）加载到操作数栈顶。</li><li>执行完成后，PC 计数器更新为 1，指向下一条指令 <code>1: iload_1</code>。</li></ul></li><li><p><strong>执行第二条指令</strong>：</p><ul><li>执行 <code>iload_1</code> 指令，将局部变量表中索引为 1 的整数（即方法的第二个参数 <code>b</code>）加载到操作数栈顶。</li><li>执行完成后，PC 计数器更新为 2，指向下一条指令 <code>2: iadd</code>。</li></ul></li><li><p><strong>执行第三条指令</strong>：</p><ul><li>执行 <code>iadd</code> 指令，弹出操作数栈顶的两个整数（即 <code>a</code> 和 <code>b</code>），将它们相加，然后将结果压入操作数栈顶。</li><li>执行完成后，PC 计数器更新为 3，指向下一条指令 <code>3: ireturn</code>。</li></ul></li><li><p><strong>执行最后一条指令：</strong></p><ul><li>执行 <code>ireturn</code> 指令，弹出操作数栈顶的整数（即 <code>a + b</code> 的结果），并将这个值作为方法的返回值。</li><li>方法执行完成，控制权返回到方法调用者。</li></ul></li></ol><h2 id="java-虚拟机栈" tabindex="-1"><a class="header-anchor" href="#java-虚拟机栈" aria-hidden="true">#</a> Java 虚拟机栈</h2>`,7),R=o('<p><img src="'+d+`" alt="Alt text"></p><p>假设我们有一个简单的 add 方法，如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),T=s("code",null,"add",-1),H=s("p",null,[n("当 "),s("code",null,"add"),n(" 方法执行完毕后，对应的栈帧会从 JVM 栈中弹出。")],-1),q=s("p",null,"Java 虚拟机栈的特点如下：",-1),z=s("li",null,[s("strong",null,"线程私有："),n(" 每个线程都有自己的 JVM 栈，线程之间的栈是不共享的。")],-1),X=s("strong",null,"栈溢出：",-1),N=s("code",null,"StackOverflowError",-1),D=o(`<p>大家可以猜一下 JVM 栈的默认大小是多少？</p><p>还用我们之前的讲栈帧时候的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackOverflowErrorTest1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">testStackOverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testStackOverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">testStackOverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认配置下，堆栈异常出现在 10886 次：</p><p><img src="`+k+'" alt="Alt text"></p><p>增加 <code>-Xss256k</code> 后，来试试。</p><p><img src="'+v+'" alt="Alt text"></p><p>1991 次出现了堆栈异常。</p><p><img src="'+m+'" alt="Alt text"></p><p>这之间存在什么关系呢？</p><p>通过 <code>java -XX:+PrintFlagsFinal -version | grep ThreadStackSize</code> 这个命令可以查看 JVM 栈的默认大小。</p><p><img src="'+_+'" alt="Alt text"></p><p>其中 <code>ThreadStackSize</code> 的单位是字节，也就是说默认的 JVM 栈大小是 1024 KB，也就是 1M。</p><p>也就是说，默认 1024 KB 的 JVM 栈可以执行 10885 次 <code>testStackOverflowError</code> 方法，而 256 KB 的 JVM 栈只能执行 1990 次 <code>testStackOverflowError</code> 方法，四五倍的样子。</p><h2 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h2>',15),I=s("h2",{id:"堆",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#堆","aria-hidden":"true"},"#"),n(" 堆")],-1),F=s("p",null,"堆是所有线程共享的一块内存区域，在 JVM 启动的时候创建，用来存储对象（数组也是一种对象）。",-1),G=s("p",null,[s("img",{src:g,alt:"Alt text"})],-1),L=s("p",null,"栈就是前面提到的 JVM 栈（主要存储局部变量、方法参数、对象引用等），属于线程私有，通常随着方法调用的结束而消失，也就无需进行垃圾收集；堆前面也讲了，属于线程共享的内存区域，几乎所有的对象都在对上分配，生命周期不由单个方法调用所决定，可以在方法调用结束后继续存在，直到不在被任何变量引用，然后被垃圾收集器回收。",-1),U=o('<p>常见的编译型语言如 C++，通常会把代码直接编译成 CPU 所能理解的机器码来运行。而 Java 为了实现“一次编译，处处运行”的特性，把编译的过程分成两部分，首先它会先由 javac 编译成通用的中间形式——字节码，然后再由解释器逐条将字节码解释为机器码来执行。所以在性能上，Java 可能会干不过 C++ 这类编译型语言。</p><p><img src="'+b+`" alt="Alt text"></p><p>为了优化 Java 的性能 ，JVM 在解释器之外引入了 JIT 编译器：当程序运行时，解释器首先发挥作用，代码可以直接执行。随着时间推移，即时编译器逐渐发挥作用，把越来越多的代码编译优化成本地代码，来获取更高的执行效率。解释器这时可以作为编译运行的降级手段，在一些不可靠的编译优化出现问题时，再切换回解释执行，保证程序可以正常运行。</p><p>逃逸分析（Escape Analysis）是一种编译器优化技术，用于判断对象的作用域和生命周期。如果编译器确定一个对象不会逃逸出方法或线程的范围，它可以选择在栈上分配这个对象，而不是在堆上。这样做可以减少垃圾回收的压力，并提高性能。</p><p>我们来写一段可能触发栈分配的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EscapeAnalysisExample</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> y<span class="token punctuation">;</span>

        <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            total <span class="token operator">+=</span> <span class="token function">createAndCalculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">createAndCalculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Point</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>createAndCalculate 方法创建了一个 Point 对象，并调用它的 calculate 方法。</li><li>Point 对象在 createAndCalculate 方法中创建，并且不会逃逸到该方法之外。</li><li>如果 JVM 的逃逸分析确定 Point 对象不会逃逸出 createAndCalculate 方法，它可能会在栈上分配 Point 对象，而不是在堆上。</li></ul>`,7),W=o(`<ul><li><code>OutOfMemoryError: GC Overhead Limit Exceeded</code>：当 JVM 花太多时间执行垃圾回收并且只能回收很少的堆空间时，就会发生该错误。</li><li><code>java.lang.OutOfMemoryError: Java heap space</code>：假如在创建新的对象时, 堆内存中的空间不足以存放新创建的对象, 就会引发该错误。和本机的物理内存无关，和我们配置的虚拟机内存大小有关！</li></ul><p>我们先来通过代码模拟一下堆内存溢出的情况。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeapSpaceErrorGenerator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> bigObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 创建一个大约 10MB 的数组</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bigObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                bigObjects<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bigObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OutOfMemoryError</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;OutOfMemoryError 发生在 &quot;</span> <span class="token operator">+</span> bigObjects<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 对象后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 VM 参数设置堆内存大小为 <code>-Xmx128M</code>，然后运行程序。</p><p><img src="`+h+'" alt="Alt text"></p><p>可以看到，堆内存溢出发生在 11 个对象后。</p><p><img src="'+J+'" alt="Alt text"></p><p>默认的堆内存大小是多少呢？</p><p>通过 <code>java -XX:+PrintFlagsFinal -version | grep HeapSize</code> 这个命令可以查看 JVM 堆的默认大小。</p><p><img src="'+y+`" alt="Alt text"></p><p>也可以通过下面这行代码获取：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">maxMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024.0</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">+</span> <span class="token string">&quot;MB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大家可以通过上面的方法查看一下自己本机电脑的堆内存大小。</p><h2 id="元空间和方法区" tabindex="-1"><a class="header-anchor" href="#元空间和方法区" aria-hidden="true">#</a> 元空间和方法区</h2><p>方法区是 Java 虚拟机规范上的一个逻辑区域，在不同的 JDK 版本上有着不同的实现。在 JDK 7 的时候，方法区被称为永久代（PermGen），而在 JDK 8 的时候，永久代被彻底移除，取而代之的是元空间。</p><p>如果你在有些资料上依然看到了永久代，要么就是二哥这样在给你解释，要么就是内容过时了。</p><blockquote><p>《Java 虚拟机规范》中只规定了有方法区这么一个概念和它的作用，并没有规定如何去实现它。不同的 Java 虚拟机可能就会有不同的实现。永久代是 HotSpot 对方法区的一种实现形式。也就是说，永久代是 HotSpot 旧版本中的一个实现，而方法区则是 Java 虚拟机规范中的一个定义，一种规范。</p></blockquote><p>换句话说，方法区和永久代的关系就像是 Java 中接口和类的关系，类实现了接口，接口还是那个接口，但实现已经完全升级了。</p><p><img src="`+w+'" alt="Alt text"></p><p>JDK 7 之前，只有常量池的概念，都在方法区中。</p><p>JDK 7 的时候，字符串常量池从方法区中拿出来放到了堆中，运行时常量池还在方法区中（也就是永久代中）。</p>',21),Q=o('<p><img src="'+f+'" alt="Alt text"></p><p><strong>为什么要废弃永久代，而使用元空间来进行替换呢？</strong></p><p>旧版的 Hotspot 虚拟机是没有 JIT 的，而 Oracle 旗下的另外一款虚拟机 JRocket 是有的，那为了将 Java 帝国更好的传下去，Oracle 就想把庶长子 JRocket 的 JIT 技术融合到嫡长子 Hotspot 中。</p><p>但 JRockit 虚拟机中并没有永久代的概念，因此新的 HotSpot 索性就不要永久代了，直接占用操作系统的一部分内存好了，并且把这块内存取名叫做元空间。</p><p>元空间的大小不再受限于 JVM 启动时设置的最大堆大小，而是直接利用本地内存，也就是操作系统的内存。有效地解决了 OutOfMemoryError 错误。</p><blockquote><p>可以通过 <code>java -XX:+PrintFlagsFinal -version | grep HeapSize</code> 查看 JVM 默认的堆内存大小。</p></blockquote><p><img src="'+M+'" alt="Alt text"></p><p>当元空间的数据增长时，JVM 会请求操作系统分配更多的内存。如果内存空间足够，操作系统就会满足 JVM 的请求。那会不会出现元空间溢出的情况呢？</p>',8),Y=s("h3",{id:"运行时常量池",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#运行时常量池","aria-hidden":"true"},"#"),n(" 运行时常量池")],-1),Z=s("p",null,[s("img",{src:j,alt:"Alt text"})],-1),$=s("p",null,"运行时常量池，顾名思义，就是在运行时期间，JVM 会将字节码文件中的常量池加载到内存中，存放在运行时常量池中。",-1),nn=s("p",null,"也就是说，常量池是在字节码文件中，而运行时常量池在元空间当中（JDK 8 及以后），讲的是一个东西，但形态不一样，就好像一个是固态，一个是液态；或者一个是模子，一个是模子里的锅碗瓢盆。",-1),sn=s("p",null,[s("img",{src:x,alt:"Alt text"})],-1),an=s("h3",{id:"字符串常量池",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#字符串常量池","aria-hidden":"true"},"#"),n(" 字符串常量池")],-1),tn=s("p",null,[s("img",{src:B,alt:"Alt text"})],-1),en=s("p",null,[n("OK，方法区（不管是永久代还是元空间的实现）和堆一样，"),s("strong",null,"是线程共享的区域"),n("。")],-1),on=s("p",null,[s("img",{src:V,alt:"Alt text"})],-1),pn=s("h2",{id:"小结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#小结","aria-hidden":"true"},"#"),n(" 小结")],-1),cn=s("p",null,"来总结一下运行时数据区的主要组成：",-1),ln=s("li",null,"PC 寄存器（PC Register），也叫程序计数器（Program Counter Register），是一块较小的内存空间，它的作用可以看做是当前线程所执行的字节码的信号指示器。",-1),un=s("li",null,"JVM 栈（Java Virtual Machine Stack），与 PC 寄存器一样，JVM 栈也是线程私有的。每一个 JVM 线程都有自己的 JVM 栈（也叫方法栈），这个栈与线程同时创建，它的生命周期与线程相同。",-1),rn=s("li",null,"本地方法栈（Native Method Stack），JVM 可能会使用到传统的栈来支持 [Native 方法](../oo",-1),dn=s("li",null,"堆（Heap），在 JVM 中，堆是可供各条线程共享的运行时内存区域，也是供所有类实例和数据对象分配内存的区域。",-1),kn=s("li",null,[n("方法区（Method area），JDK 8 开始，使用元空间取代了永久代。"),s("strong",null,"方法区是 JVM 中的一个逻辑区域"),n("，用于存储类的结构信息，包括类的定义、方法的定义、字段的定义以及字节码指令。不同的是，元空间不再是 JVM 内存的一部分，而是通过本地内存（Native Memory）来实现的。")],-1),vn=s("p",null,"在 JVM 启动时，元空间的大小由 MaxMetaspaceSize 参数指定，JVM 在运行时会自动调整元空间的大小，以适应不同的程序需求。",-1),mn=s("p",null,[s("img",{src:S,alt:"Alt text"})],-1),_n=s("hr",null,null,-1);function gn(bn,hn){const a=c("RouterLink");return l(),i("div",null,[O,s("p",null,[n("程序计数器（Program Counter Register）所占的内存空间不大，很小很小一块，可以看作是当前线程所执行的"),t(a,{to:"/toBeBetterJavaer/jvm/zijiema-zhiling.html"},{default:e(()=>[n("字节码指令")]),_:1}),n("的行号指示器。字节码解释器会在工作的时候改变这个计数器的值来选取下一条需要执行的字节码指令，像分支、循环、跳转、异常处理、线程恢复等功能都需要依赖这个计数器来完成。")]),C,P,E,s("p",null,[n("为什么本地方法在程序计数器中的值是 undefined 的？因为"),t(a,{to:"/toBeBetterJavaer/oo/native-method.html"},{default:e(()=>[n("本地方法")]),_:1}),n("大多是通过 C/C++ 实现的，并未编译成需要执行的字节码指令。")]),K,s("p",null,[n("Java 虚拟机栈（JVM 栈）中是一个个"),t(a,{to:"/toBeBetterJavaer/jvm/stack-frame.html"},{default:e(()=>[n("栈帧")]),_:1}),n("，每个栈帧对应一个被调用的方法。当线程执行一个方法时，会创建一个对应的栈帧，并将栈帧压入栈中。当方法执行完毕后，将栈帧从栈中移除。")]),s("p",null,[n("栈帧包含以下 5 个部分，见下图。我们前面已经详细地讲过"),t(a,{to:"/toBeBetterJavaer/jvm/stack-frame.html"},{default:e(()=>[n("栈帧")]),_:1}),n("了，忘记的球友可以回头去看一下。")]),R,s("p",null,[n("当 "),T,n(" 方法被调用时，JVM 为这次方法调用创建一个新的栈帧。然后执行方法内的字节码指令，这部分我们前面已经讲过了，大家可以自己通过 "),t(a,{to:"/toBeBetterJavaer/jvm/bytecode.html"},{default:e(()=>[n("javap")]),_:1}),n(" 查看字节码并模拟一下"),t(a,{to:"/toBeBetterJavaer/jvm/zijiema-zhiling.html"},{default:e(()=>[n("字节码指令")]),_:1}),n("执行的过程。")]),H,q,s("ul",null,[z,s("li",null,[X,n(" 如果栈的深度超过了 JVM 栈所允许的深度，将会抛出 "),N,n("，这个我们讲"),t(a,{to:"/toBeBetterJavaer/jvm/stack-frame.html"},{default:e(()=>[n("栈帧")]),_:1}),n("的时候讲过了。")])]),D,s("p",null,[n("本地方法栈（Native Method Stack）与 Java 虚拟机栈类似，只不过 Java 虚拟机栈为虚拟机执行 Java 方法服务，而本地方法栈则为虚拟机使用到的 "),t(a,{to:"/toBeBetterJavaer/oo/native-method.html"},{default:e(()=>[n("Native 方法")]),_:1}),n("服务。")]),I,F,s("p",null,[n("以前，Java 中“几乎”所有的对象都会在堆中分配，但随着 "),t(a,{to:"/toBeBetterJavaer/jvm/jit.html"},{default:e(()=>[n("JIT")]),_:1}),n(" 编译器的发展和逃逸技术的逐渐成熟，所有的对象都分配到堆上渐渐变得不那么“绝对”了。从 JDK 7 开始，Java 虚拟机已经默认开启逃逸分析了，意味着如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在栈上分配内存。")]),G,L,s("p",null,[n("简单解释一下 JIT 和逃逸分析（后面讲 "),t(a,{to:"/toBeBetterJavaer/jvm/jit.html"},{default:e(()=>[n("JIT")]),_:1}),n(" 会细讲）。")]),U,s("p",null,[n("堆我们前面已经讲过了，它除了是对象的聚集地，也是 "),t(a,{to:"/toBeBetterJavaer/jvm/gc.html"},{default:e(()=>[n("Java 垃圾收集器")]),_:1}),n("管理的主要区域，因此也被称作 GC 堆（Garbage Collected Heap）。从垃圾回收的角度来看，由于垃圾收集器基本都采用了分代垃圾收集的算法，所以堆还可以细分为：新生代和老年代。新生代还可以细分为：Eden 空间、From Survivor、To Survivor 空间等。进一步划分的目的是更好地回收内存，或者更快地分配内存。")]),s("blockquote",null,[s("p",null,[n("不要担心，这些我们会放到后面"),t(a,{to:"/toBeBetterJavaer/jvm/gc.html"},{default:e(()=>[n("垃圾回收")]),_:1}),n("的章节来细讲。")])]),s("p",null,[n("堆这最容易出现的就是 "),t(a,{to:"/toBeBetterJavaer/jvm/oom.html"},{default:e(()=>[n("OutOfMemoryError 错误")]),_:1}),n("，分为以下几种表现形式：")]),W,s("p",null,[n("JDK 8 的时候，HotSpot 移除了永久代，取而代之的是元空间。"),t(a,{to:"/toBeBetterJavaer/string/constant-pool.html"},{default:e(()=>[n("字符串常量池")]),_:1}),n("还在堆中，而运行时常量池跑到了元空间。")]),Q,s("p",null,[n("答案是肯定的，这个我们留到"),t(a,{to:"/toBeBetterJavaer/jvm/oom.html"},{default:e(()=>[n("内存溢出")]),_:1}),n("的章节里来细讲。")]),Y,s("p",null,[n("在讲字节码的时候，我们详细的讲过"),t(a,{to:"/toBeBetterJavaer/jvm/bytecode.html"},{default:e(()=>[n("常量池")]),_:1}),n("，它是字节码文件的资源仓库，先是一个常量池大小，从 1 到 n-1，0 为保留索引，然后是常量池项的集合，包括类信息、字段信息、方法信息、接口信息、字符串常量等。")]),Z,$,nn,sn,an,s("p",null,[n("字符串常量池我们在讲"),t(a,{to:"/toBeBetterJavaer/string/constant-pool.html"},{default:e(()=>[n("字符串")]),_:1}),n("的时候已经详细讲过了，它的作用是存放字符串常量，也就是我们在代码中写的字符串。依然在堆中。")]),tn,en,on,pn,cn,s("ul",null,[ln,un,rn,dn,kn,s("li",null,[t(a,{to:"/toBeBetterJavaer/jvm/neicun-jiegou.html"},{default:e(()=>[n("运行时常量池")]),_:1}),n("，运行时常量池是每一个类或接口的常量在运行时的表现形式，它包括了编译器可知的数值字面量，以及运行期解析后才能获得的方法或字段的引用。简而言之，当一个方法或者变量被引用时，JVM 通过运行时常量区来查找方法或者变量在内存里的实际地址。")])]),vn,mn,_n])}const yn=p(A,[["render",gn],["__file","neicun-jiegou.html.vue"]]);export{yn as default};
