import{_ as c,r as l,o as i,c as u,a as n,d as a,w as t,b as s,e as o}from"./app-3RcBQnkC.js";const r="/code-note/assets/image-50-kZ4e_BiG.png",d="/code-note/assets/image-51-hCvo5hrd.png",k="/code-note/assets/image-52-zm7Ew5tq.png",v="/code-note/assets/image-53-1bcLNgy4.png",m={},h=n("h1",{id:"第三节-java-类加载机制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第三节-java-类加载机制","aria-hidden":"true"},"#"),s(" 第三节：Java 类加载机制")],-1),b=n("p",null,[n("img",{src:r,alt:"Alt text"})],-1),g=o(`<p>这里再给大家普及一个小技巧，可以通过 xxd 命令来查看字节码文件，先看下面这段代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_=n("code",null,"xxd Test.class",-1),f={href:"https://superuser.com/questions/497953/convert-hex-dump-of-file-to-binary-program-file-on-windows/638850#638850",target:"_blank",rel:"noopener noreferrer"},w={href:"https://zh.wikipedia.org/zh-sg/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E8%BD%AC%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},y=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000: cafe babe 0000 0034 0022 0700 0201 0019  .......4.&quot;......
00000010: 636f 6d2f 636d 6f77 6572 2f6a 6176 615f  com/cmower/java_
00000020: 6465 6d6f 2f54 6573 7407 0004 0100 106a  demo/Test......j
00000030: 6176 612f 6c61 6e67 2f4f 626a 6563 7401  ava/lang/Object.
00000040: 0006 3c69 6e69 743e 0100 0328 2956 0100  ..&lt;init&gt;...()V..
00000050: 0443 6f64 650a 0003 0009 0c00 0500 0601  .Code...........
00000060: 000f 4c69 6e65 4e75 6d62 6572 5461 626c  ..LineNumberTabl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只说一点，这段字节码中的 <code>cafe babe</code> 被称为“魔数”，是 JVM 识别 .class 文件（字节码文件）的标志，相信大家都知道，Java 的 logo 是一杯冒着热气的咖啡，是不是又关联上了？</p><blockquote><p>文件格式的定制者可以自由选择魔数值（只要没用过），比如说 .png 文件的魔数是 <code>8950 4e47</code>。</p></blockquote><p>至于字节码文件中的其他内容，暂时先不用去管，知道这是字节码的 16 机制内容就可以了。</p><h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2><p>知道什么是 Java 字节码后，我们来聊聊 Java 的类加载过程。</p><p><img src="`+d+'" alt="Alt text"></p><p>类从被加载到 JVM 开始，到卸载出内存，整个生命周期分为七个阶段，分别是加载、验证、准备、解析、初始化、使用和卸载。其中验证、准备和解析这三个阶段统称为连接。</p><p>除去使用和卸载，就是 Java 的类加载过程。这 5 个阶段一般是顺序发生的，但在动态绑定的情况下，解析阶段发生在初始化阶段之后（我们随后来解释）。</p><h3 id="_1-loading-载入" tabindex="-1"><a class="header-anchor" href="#_1-loading-载入" aria-hidden="true">#</a> 1）Loading（载入）</h3>',10),x=n("code",null,"java.lang.Class",-1),C=n("h3",{id:"_2-verification-验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-verification-验证","aria-hidden":"true"},"#"),s(" 2）Verification（验证）")],-1),J=n("p",null,"JVM 会在该阶段对二进制字节流进行校验，只有符合 JVM 字节码规范的才能被 JVM 正确执行。该阶段是保证 JVM 安全的重要屏障，下面是一些主要的检查。",-1),B=n("li",null,[s("确保二进制字节流格式符合预期（比如说是否以 "),n("code",null,"cafe bene"),s(" 开头，前面提到过）。")],-1),j=n("li",null,"方法调用的参数个数和类型是否正确。",-1),L=n("li",null,"确保变量在使用之前被正确初始化了。",-1),S=n("li",null,"检查变量是否被赋予恰当类型的值。",-1),E=n("h3",{id:"_3-preparation-准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-preparation-准备","aria-hidden":"true"},"#"),s(" 3）Preparation（准备）")],-1),q=n("code",null,"static",-1),A=o(`<p>也就是说，假如有这样一段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> chenmo <span class="token operator">=</span> <span class="token string">&quot;沉默&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> wanger <span class="token operator">=</span> <span class="token string">&quot;王二&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chenmo 不会被分配内存，而 wanger 会；但 wanger 的初始值不是“王二”而是 <code>null</code>。</p><p>需要注意的是，<code>static final</code> 修饰的变量被称作为常量，和类变量不同（这些在讲 [static 关键字](../oo常量一旦赋值就不会改变了，所以 cmower 在准备阶段的值为“沉默王二”而不是 <code>null</code>。</p><h3 id="_4-resolution-解析" tabindex="-1"><a class="header-anchor" href="#_4-resolution-解析" aria-hidden="true">#</a> 4）Resolution（解析）</h3><p>该阶段将常量池中的符号引用转化为直接引用。</p><p>what？符号引用，直接引用？</p><p><strong>符号引用</strong>以一组符号（任何形式的字面量，只要在使用时能够无歧义的定位到目标即可）来描述所引用的目标。</p><p>在编译时，Java 类并不知道所引用的类的实际地址，因此只能使用符号引用来代替。比如 <code>com.Wanger</code> 类引用了 <code>com.Chenmo</code> 类，编译时 Wanger 类并不知道 Chenmo 类的实际内存地址，因此只能使用符号 <code>com.Chenmo</code>。</p><p><strong>直接引用</strong>通过对符号引用进行解析，找到引用的实际内存地址。我们再来对比说明一下。</p><p><strong>符号引用</strong></p>`,11),V=n("li",null,[n("strong",null,"定义"),s("：包含了类、字段、方法、接口等多种符号的全限定名。")],-1),M=n("strong",null,"特点",-1),D=n("li",null,[n("strong",null,"独立性"),s("：不依赖于具体的内存地址，提供了更好的灵活性。")],-1),T=o('<p><strong>直接引用</strong></p><ul><li><strong>定义</strong>：直接指向目标的指针、相对偏移量或者能间接定位到目标的句柄。</li><li><strong>特点</strong>：在运行时生成，依赖于具体的内存布局。</li><li><strong>效率</strong>：由于直接指向了内存地址或者偏移量，所以通过直接引用访问对象的效率较高。</li></ul><p>下面通过一张简化的图来描述它们的区别：</p><p><img src="'+k+'" alt="Alt text"></p><p>在上面的例子中：</p><ul><li><code>class A</code> 引用了 <code>class B</code>。</li><li>在编译时，这个引用变成了符号引用，存储在 <code>.class</code> 文件的常量池中。</li><li>在运行时，当 <code>class A</code> 需要使用 <code>class B</code> 的时候，JVM 会将符号引用解析为直接引用，指向内存中的 <code>class B</code> 对象或其元数据。</li></ul><p>通过这种方式，Java 程序能够在编译时和运行时具有更高的灵活性和解耦性，同时在运行时也能获得更好的性能。</p><p>Java 本身是一个静态语言，但后面又加入了动态加载特性，因此我们理解解析阶段需要从这两方面来考虑。</p><p>如果不涉及动态加载，那么一个符号的解析结果是可以缓存的，这样可以避免多次解析同一个符号，因为第一次解析成功后面多次解析也必然成功，第一次解析异常后面重新解析也会是同样的结果。</p><p>如果使用了动态加载，前面使用动态加载解析过的符号后面重新解析结果可能会不同。使用动态加载时解析过程发生在在程序执行到这条指令的时候，这就是为什么前面讲的动态加载时解析会在初始化后执行。</p><p>整个解析阶段主要做了下面几个工作：</p><ul><li>类或接口的解析</li><li>类方法解析</li><li>接口方法解析</li><li>字段解析</li></ul><h3 id="_5-initialization-初始化" tabindex="-1"><a class="header-anchor" href="#_5-initialization-初始化" aria-hidden="true">#</a> 5）Initialization（初始化）</h3>',13),F=n("code",null,"<clinit>()",-1),N=o(`<p>上面这段话可能说得很抽象，不好理解，我来举个例子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这段代码使用了 <code>new</code> 关键字来实例化一个字符串对象，那么这时候，就会调用 String 类的构造方法对 cmower 进行实例化。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">String</span> original<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> original<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hash <span class="token operator">=</span> original<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化时机包括以下这些：</p><ul><li>创建类的实例时。</li><li>访问类的静态方法或静态字段时（除了final常量，它们在编译期就已经放入常量池）。</li><li>使用java.lang.reflect包的方法对类进行反射调用时。</li><li>初始化一个类的子类（首先会初始化父类）。</li><li>JVM启动时，用户指定的主类（包含main方法的类）将被初始化。</li></ul><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器" aria-hidden="true">#</a> 类加载器</h2><p>聊完类加载过程，就不得不聊聊类加载器。</p><p><img src="`+v+'" alt="Alt text"></p>',9),P=n("code",null,"ClassNotFoundException",-1),I=n("code",null,"NoClassDefFoundError",-1),O=o(`<p>对于任意一个类，都需要由它的类加载器和这个类本身一同确定其在 JVM 中的唯一性。也就是说，如果两个类的加载器不同，即使两个类来源于同一个字节码文件，那这两个类就必定不相等（比如两个类的 Class 对象不 <code>equals</code>）。</p><p>来通过一段简单的代码了解下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ClassLoader</span> loader <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>loader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            loader <span class="token operator">=</span> loader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 Java 类都维护着一个指向定义它的类加载器的引用，通过 <code>类名.class.getClassLoader()</code> 可以获取到此引用；然后通过 <code>loader.getParent()</code> 可以获取类加载器的上层类加载器。</p><p>上面这段代码的输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdk.internal.loader.ClassLoaders$AppClassLoader@512ddf17
jdk.internal.loader.ClassLoaders$PlatformClassLoader@2d209079
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行输出为 Test 的类加载器，即应用类加载器，它是 <code>jdk.internal.loader.ClassLoaders$AppClassLoader</code> 类的实例；第二行输出为平台类加载器，是 <code>jdk.internal.loader.ClassLoaders$PlatformClassLoader</code> 类的实例。那启动类加载器呢？</p><p>按理说，扩展类加载器的上层类加载器是启动类加载器，但启动类加载器是虚拟机的内置类加载器，通常表示为 null。</p><p>也就是说，类加载器可以分为四种类型：</p><p>①、引导类加载器（Bootstrap ClassLoader）：负责加载 JVM 基础核心类库，如 rt.jar、sun.boot.class.path 路径下的类。</p><p>②、扩展类加载器（Extension ClassLoader）：负责加载 Java 扩展库中的类，例如 jre/lib/ext 目录下的类或由系统属性 java.ext.dirs 指定位置的类。</p><p>③、系统（应用）类加载器（System ClassLoader）：负责加载系统类路径 java.class.path 上指定的类库，通常是你的应用类和第三方库。</p><p>④、用户自定义类加载器：Java 允许用户创建自己的类加载器，通过继承 java.lang.ClassLoader 类的方式实现。这在需要动态加载资源、实现模块化框架或者特殊的类加载策略时非常有用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomClassLoader</span> <span class="token keyword">extends</span> <span class="token class-name">ClassLoader</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> pathToBin<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CustomClassLoader</span><span class="token punctuation">(</span><span class="token class-name">String</span> pathToBin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pathToBin <span class="token operator">=</span> pathToBin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">findClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> classData <span class="token operator">=</span> <span class="token function">loadClassData</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">defineClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> classData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> classData<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">(</span><span class="token string">&quot;Class &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; not found&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">loadClassData</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> file <span class="token operator">=</span> pathToBin <span class="token operator">+</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.class&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ByteArrayOutputStream</span> byteSt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> is<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            byteSt<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> byteSt<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个自定义类加载器做了以下几件事情：</p><ul><li>构造器：接受一个字符串参数，这个字符串指定了类文件的存放路径。</li><li>覆写 findClass 方法：当父类加载器无法加载类时，findClass 方法会被调用。在这个方法中，首先使用 loadClassData 方法读取类文件的字节码，然后调用 defineClass 方法来将这些字节码转换为 Class 对象。</li><li>loadClassData 方法：读取指定路径下的类文件内容，并将内容作为字节数组返回。</li></ul><h2 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h2><p>双亲委派模型（Parent Delegation Model）是 Java 类加载器使用的一种机制，用于确保 Java 程序的稳定性和安全性。在这个模型中，类加载器在尝试加载一个类时，首先会委派给其父加载器去尝试加载这个类，只有在父加载器无法加载该类时，子加载器才会尝试自己去加载。</p><ol><li><p><strong>委派给父加载器</strong>：当一个类加载器接收到类加载的请求时，它首先不会尝试自己去加载这个类，而是将这个请求委派给它的父加载器。</p></li><li><p><strong>递归委派</strong>：这个过程会递归向上进行，从启动类加载器（Bootstrap ClassLoader）开始，再到扩展类加载器（Extension ClassLoader），最后到系统类加载器（System ClassLoader）。</p></li><li><p><strong>加载类</strong>：如果父加载器可以加载这个类，那么就使用父加载器的结果。如果父加载器无法加载这个类（它没有找到这个类），子加载器才会尝试自己去加载。</p></li><li><p><strong>安全性和避免重复加载</strong>：这种机制可以确保不会重复加载类，并保护 Java 核心 API 的类不被恶意替换。</p></li></ol><p>类加载器的层级结构如下图所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Bootstrap ClassLoader
            ↑
            │
    Extension ClassLoader
            ↑
            │
    System/Application ClassLoader
            ↑
            │
    Custom ClassLoader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种层次关系被称作为<strong>双亲委派模型</strong>：如果一个类加载器收到了加载类的请求，它会先把请求委托给上层加载器去完成，上层加载器又会委托上上层加载器，一直到最顶层的类加载器；如果上层加载器无法完成类的加载工作时，当前类加载器才会尝试自己去加载这个类。</p><p>PS：双亲委派模型突然让我联想到朱元璋同志，这个同志当上了皇帝之后连宰相都不要了，所有的事情都亲力亲为，只有自己没精力没时间做的事才交给大臣们去干。</p><p>使用双亲委派模型有一个很明显的好处，那就是 Java 类随着它的类加载器一起具备了一种带有优先级的层次关系，这对于保证 Java 程序的稳定运作很重要。</p><p>上文中曾提到，如果两个类的加载器不同，即使两个类来源于同一个字节码文件，那这两个类就必定不相等——双亲委派模型能够保证同一个类最终会被特定的类加载器加载。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Java的类加载机制通过类加载器和类加载过程的合作，确保了Java程序的动态加载、灵活性和安全性。双亲委派模型进一步增强了这种机制的安全性和类之间的协调性。</p><p>学习就是这样，只要你敢于挑战自己，就能收获知识——就像山就在那里，只要你肯攀登，就能到达山顶。</p>`,28),z={href:"https://anye3210.github.io/2021/08/02/%E8%AF%A6%E8%A7%A3Java%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"},$=n("hr",null,null,-1),R=n("p",null,".",-1);function W(G,Z){const e=l("RouterLink"),p=l("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[a(e,{to:"/toBeBetterJavaer/jvm/how-run-java-code.html"},{default:t(()=>[s("上一节")]),_:1}),s("在讲 JVM 运行 Java 代码的时候，我们提到，JVM 需要将编译后的字节码文件加载到其内部的运行时数据区域中进行执行。这个过程涉及到了 Java 的类加载机制（面试常问的知识点），所以我们来详细地讲一讲。")]),b,n("p",null,[s("字节码我们"),a(e,{to:"/toBeBetterJavaer/jvm/how-run-java-code.html"},{default:t(()=>[s("上一节")]),_:1}),s("也讲过，它和类的加载机制息息相关，相信大家都还有印象。")]),g,n("p",null,[s("代码编译通过后，在命令行执行 "),_,s("（macOS 用户可以直接执行，Windows 用户可以戳"),n("a",f,[s("这个链接"),a(p)]),s("获取替代品）就可以快速查看字节码的十六进制内容。")]),n("blockquote",null,[n("p",null,[s("xxd 是一个用于在终端中创建十六进制转储（hex dump）或将十六进制转回二进制的工具。可通过"),n("a",w,[s("维基百科"),a(p)]),s("了解更多信息。")])]),y,n("p",null,[s("JVM 在该阶段的主要目的是将字节码从不同的数据源（可能是 class 文件、也可能是 jar 包，甚至网络）转化为二进制字节流加载到内存中，并生成一个代表该类的 "),x,s(" 对象（在学"),a(e,{to:"/toBeBetterJavaer/basic-extra-meal/fanshe.html"},{default:t(()=>[s("反射")]),_:1}),s("的时候有讲过）。")]),C,J,n("ul",null,[B,n("li",null,[s("是否所有方法都遵守"),a(e,{to:"/toBeBetterJavaer/oo/access-control.html"},{default:t(()=>[s("访问控制关键字")]),_:1}),s("的限定，protected、private 那些。")]),j,L,S]),E,n("p",null,[s("JVM 会在该阶段对类变量（也称为"),a(e,{to:"/toBeBetterJavaer/oo/static.html"},{default:t(()=>[s("静态变量")]),_:1}),s("，"),q,s(" 关键字修饰的）分配内存并初始化（对应数据类型的默认初始值，如 0、0L、null、false 等）。")]),A,n("ul",null,[V,n("li",null,[M,s("：在编译时生成，存储在编译后的"),a(e,{to:"/toBeBetterJavaer/jvm/class-file-jiegou.html"},{default:t(()=>[s("字节码文件")]),_:1}),s("的常量池中。")]),D]),T,n("p",null,[s("该阶段是类加载过程的最后一步。在准备阶段，类变量（静态变量）已经被赋过默认初始值（如 0、0.0、false、null），而在初始化阶段，类变量将被赋值为代码期望赋的值。换句话说，初始化阶段是执行类构造器方法（"),a(e,{to:"/toBeBetterJavaer/jvm/bytecode.html"},{default:t(()=>[s("javap")]),_:1}),s(" 中看到的 "),F,s(" 方法）的过程。")]),N,n("p",null,[s("一般来说，Java 程序员并不需要直接同类加载器进行交互。JVM 默认的行为就已经足够满足大多数情况的需求了。不过，如果遇到了需要和类加载器进行交互的情况，而对类加载器的机制又不是很了解的话，就不得不花大量的时间去调试 "),P,s(" 和 "),I,s(" 等"),a(e,{to:"/toBeBetterJavaer/exception/gailan.html"},{default:t(()=>[s("异常")]),_:1}),s("（前面讲过）。")]),O,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",z,[s("详解 Java 类加载过程"),a(p)])])]),$,R])}const K=c(m,[["render",W],["__file","class-load.html.vue"]]);export{K as default};
