import{_ as p,r as t,o as e,c,a as n,b as s,d as o,e as l}from"./app-cCF93fuz.js";const i={},u=n("h1",{id:"用java实现jvm第四章《运行时数据区》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用java实现jvm第四章《运行时数据区》","aria-hidden":"true"},"#"),s(" 用Java实现JVM第四章《运行时数据区》")],-1),k=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},r=l(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><p><img src="https://fuzhengwei.github.io/assets/images/pic-content/2019/08/jvm04.png" alt=""></p><h2 id="案例介绍" tabindex="-1"><a class="header-anchor" href="#案例介绍" aria-hidden="true">#</a> 案例介绍</h2><p>本案例初步实现运行时数据区里；线程、Java虚拟机栈、帧、操作数栈、局部变量表。</p><blockquote><p>在运行Java程序时，Java虚拟机需要使用内存来存放各种各样的数据。Java虚拟机规范把这些内存区域叫作运行时数据区。运行时数据区可以分为两类：一类是多线程共享的，另一类则是线程私有的。多线程共享的运行时数据区需要在Java虚拟机启动时创建好在Java虚拟机推出时销毁。线程私有的运行时数据区则在创建线程时才创建，线程退出时销毁。</p></blockquote><blockquote><p>线程私有的运行时数据区用于辅助执行Java字节码。每个线程都有自己的pc寄存器（Program Counter）和Java虚拟机栈（JVM Stack）。Java虚拟机栈又由栈帧（Stack Frame，后面简称帧）构成，帧中保存方法执行的状态，包括局部变量表（Local Variable）和操作数栈（Operand Stack）等。在任一时刻，某一线程肯定是在执行某个方法。这个方法叫作该线程的当前方法；执行该方法的帧叫作线程的当前帧；声明该方法的类叫作当前类。如果当前方法是Java方法，则pc寄存器中存放当前正在执行的Java虚拟机指令的地址，否则，当前方法是本地方法，pc寄存器中的值没有明确定义。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Run</span><span class="token operator">-</span><span class="token class-name">Time</span> <span class="token class-name">Data</span> <span class="token class-name">Area</span>
├── <span class="token class-name">Thread</span>
│   └── pc
│  	└── <span class="token class-name">Jvm</span> <span class="token class-name">Stack</span>  
│       └── <span class="token class-name">Frame</span>
│  	        ├── <span class="token class-name">Local</span> <span class="token class-name">Variable</span>
│  	        └── <span class="token class-name">Operand</span> <span class="token class-name">Stack</span>
└── <span class="token class-name">Heap</span>
    ├── <span class="token class-name">Method</span> <span class="token class-name">Area</span>
	│   └── <span class="token class-name">Class</span>
	│       ├── <span class="token class-name">Run</span><span class="token operator">-</span><span class="token class-name">Time</span>
	│ 	    └── <span class="token class-name">Constant</span> <span class="token class-name">Pool</span>
	└── <span class="token class-name">Object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>jdk 1.8.0</li><li>IntelliJ IDEA Community Edition 2018.3.1 x64</li></ol><h2 id="配置信息" tabindex="-1"><a class="header-anchor" href="#配置信息" aria-hidden="true">#</a> 配置信息</h2><ol><li>调试配置 <ol><li>配置位置：Run/Debug Configurations -&gt; program arguments</li><li>配置内容：-Xjre &quot;C:\\Program Files\\Java\\jdk1.8.0_161\\jre&quot; E:\\itstack\\git\\istack-demo\\itstack-demo-jvm\\itstack-demo-jvm-04\\target\\test-classes\\org\\itstack\\demo\\test\\HelloWorld</li></ol></li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>jvm<span class="token operator">-</span><span class="token number">04</span>
├── pom<span class="token punctuation">.</span>xml
└── src
    └── main
    │    └── java
    │        └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm
	│             ├── classfile
    │             │   ├── attributes   <span class="token punctuation">{</span><span class="token class-name">BootstrapMethods</span><span class="token operator">/</span><span class="token class-name">Code</span><span class="token operator">/</span><span class="token class-name">ConstantValue</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
    │             │   ├── constantpool <span class="token punctuation">{</span><span class="token constant">CONSTANT_TAG_CLASS</span><span class="token operator">/</span><span class="token constant">CONSTANT_TAG_FIELDREF</span><span class="token operator">/</span><span class="token constant">CONSTANT_TAG_METHODREF</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
    │             │   ├── <span class="token class-name">ClassFile</span><span class="token punctuation">.</span>java
    │             │   ├── <span class="token class-name">ClassReader</span><span class="token punctuation">.</span>java
    │             │   └── <span class="token class-name">MemberInfo</span><span class="token punctuation">.</span>java	
    │             ├── classpath
    │             │   ├── impl
    │             │   │   ├── <span class="token class-name">CompositeEntry</span><span class="token punctuation">.</span>java
    │             │   │   ├── <span class="token class-name">DirEntry</span><span class="token punctuation">.</span>java 
    │             │   │   ├── <span class="token class-name">WildcardEntry</span><span class="token punctuation">.</span>java 
    │             │   │   └── <span class="token class-name">ZipEntry</span><span class="token punctuation">.</span>java    
    │             │   ├── <span class="token class-name">Classpath</span><span class="token punctuation">.</span>java
    │             │   └── <span class="token class-name">Entry</span><span class="token punctuation">.</span>java   
    │             ├── rtda
    │             │   ├── <span class="token class-name">Frame</span><span class="token punctuation">.</span>java
    │             │   ├── <span class="token class-name">JvmStack</span><span class="token punctuation">.</span>java
    │             │   ├── <span class="token class-name">LocalVars</span><span class="token punctuation">.</span>java
    │             │   ├── <span class="token class-name">OperandStack</span><span class="token punctuation">.</span>java
    │             │   ├── <span class="token class-name">Slot</span><span class="token punctuation">.</span>java	
    │             │   └── <span class="token class-name">Thread</span><span class="token punctuation">.</span>java
    │             ├── <span class="token class-name">Cmd</span><span class="token punctuation">.</span>java
    │             └── <span class="token class-name">Main</span><span class="token punctuation">.</span>java
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Frame.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 栈帧
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Frame</span> <span class="token punctuation">{</span>

    <span class="token comment">//stack is implemented as linked list</span>
    <span class="token class-name">Frame</span> lower<span class="token punctuation">;</span>

    <span class="token comment">//局部变量表</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalVars</span> localVars<span class="token punctuation">;</span>

    <span class="token comment">//操作数栈</span>
    <span class="token keyword">private</span> <span class="token class-name">OperandStack</span> operandStack<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Frame</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxLocals<span class="token punctuation">,</span> <span class="token keyword">int</span> maxStack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>localVars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalVars</span><span class="token punctuation">(</span>maxLocals<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>operandStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OperandStack</span><span class="token punctuation">(</span>maxStack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">LocalVars</span> <span class="token function">localVars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> localVars<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">OperandStack</span> <span class="token function">operandStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> operandStack<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>JvmStack.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 虚拟机栈
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JvmStack</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Frame</span> _top<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">JvmStack</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Frame</span> frame<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StackOverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_top <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            frame<span class="token punctuation">.</span>lower <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_top<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>_top <span class="token operator">=</span> frame<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Frame</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_top <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;jvm stack is empty!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Frame</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_top<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_top <span class="token operator">=</span> top<span class="token punctuation">.</span>lower<span class="token punctuation">;</span>
        top<span class="token punctuation">.</span>lower <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> top<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Frame</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_top <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;jvm stack is empty!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_top<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>LocalVars.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 局部变量表
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalVars</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Slot</span><span class="token punctuation">[</span><span class="token punctuation">]</span> slots<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LocalVars</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxLocals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxLocals <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slots <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Slot</span><span class="token punctuation">[</span>maxLocals<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxLocals<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                slots<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Slot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFloat</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token keyword">float</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Float</span> <span class="token function">getFloat</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLong</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token keyword">long</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;&gt;</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">getLong</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
        <span class="token keyword">int</span> high <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slots<span class="token punctuation">[</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> high <span class="token operator">&lt;&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> low<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDouble</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token keyword">double</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setLong</span><span class="token punctuation">(</span>idx<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token function">getLong</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRef</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token class-name">Object</span> ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> ref<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getRef</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> slots<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>OperandStack.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 操作数栈
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperandStack</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Slot</span><span class="token punctuation">[</span><span class="token punctuation">]</span> slots<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OperandStack</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxStack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxStack <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slots <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Slot</span><span class="token punctuation">[</span>maxStack<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxStack<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                slots<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Slot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slots<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> val<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">popInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        size <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> slots<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushRef</span><span class="token punctuation">(</span><span class="token class-name">Object</span> ref<span class="token punctuation">)</span><span class="token punctuation">{</span>
        slots<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> ref<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">popRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        size <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> ref <span class="token operator">=</span> slots<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
        slots<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ref<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Slot.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 数据槽
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Slot</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token class-name">Object</span> ref<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Thread.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>rtda</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * http://www.itstack.org
 * create by fuzhengwei on 2019/4/26
 * 线程
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

    <span class="token comment">//Program Counter 寄存器</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> pc<span class="token punctuation">;</span>

    <span class="token comment">//虚拟机栈</span>
    <span class="token keyword">private</span> <span class="token class-name">JvmStack</span> stack<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JvmStack</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPC</span><span class="token punctuation">(</span><span class="token keyword">int</span> pc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pc <span class="token operator">=</span> pc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushFrame</span><span class="token punctuation">(</span><span class="token class-name">Frame</span> frame<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>frame<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Frame</span> <span class="token function">popFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Frame</span> <span class="token function">currentFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">100</span>
<span class="token operator">-</span><span class="token number">100</span>
<span class="token keyword">null</span>
<span class="token operator">-</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>用Java实现jvm源码</strong>」获取本文源码&amp;更多原创专题案例！</p>`,28);function v(m,b){const a=t("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[s("作者：小傅哥 "),k,s("博客："),n("a",d,[s("https://bugstack.cn"),o(a)])]),r])}const y=p(i,[["render",v],["__file","2019-05-05-yongJavashixianJVMdisizhang《yunxingshishujuqu》.html.vue"]]);export{y as default};
