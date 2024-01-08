import{_ as e,r as t,o as p,c,a as n,b as s,d as o,e as l}from"./app-cCF93fuz.js";const i={},u=n("h1",{id:"netty案例-netty4-1基础入门篇九《自定义编码解码器-处理半包、粘包数据》",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#netty案例-netty4-1基础入门篇九《自定义编码解码器-处理半包、粘包数据》","aria-hidden":"true"},"#"),s(" netty案例，netty4.1基础入门篇九《自定义编码解码器，处理半包、粘包数据》")],-1),k=n("br",null,null,-1),r={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},d=l(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！😄</p></blockquote><h2 id="前言介绍" tabindex="-1"><a class="header-anchor" href="#前言介绍" aria-hidden="true">#</a> 前言介绍</h2><p>在实际应用场景里，只要是支持sokcet通信的都可以和Netty交互，比如中继器、下位机、PLC等。这些场景下就非常需要自定义编码解码器，来处理字节码传输，并控制半包、粘包以及安全问题。那么本章节我们通过实现ByteToMessageDecoder、MessageToByteEncoder来实现我们的需求。</p><blockquote><p>数据传输过程中有各种情况；整包数据、半包数据、粘包数据，比如我们设定开始符号02、结束符号03； 整包数据；02 89 78 54 03 半包数据；02 89 78 粘包数据；02 89 78 54 03 02 89</p></blockquote><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ol><li>jdk1.8【jdk1.7以下只能部分支持netty】</li><li>Netty4.1.36.Final【netty3.x 4.x 5每次的变化较大，接口类名也随着变化】</li><li>telnet 测试【可以现在你的win7机器上测试这个命令，用于链接到服务端的测试命令】</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>netty<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">09</span>
└── src
    ├── main
    │   └── java
    │       └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>netty
    │			├── codec
    │           │ 	├── <span class="token class-name">MyDecoder</span><span class="token punctuation">.</span>java
    │           │ 	└── <span class="token class-name">MyEncoder</span><span class="token punctuation">.</span>java
    │			└── server
    │           	├── <span class="token class-name">MyChannelInitializer</span><span class="token punctuation">.</span>java
    │           	├── <span class="token class-name">MyServerHandler</span><span class="token punctuation">.</span>java
    │           	└── <span class="token class-name">NettyServer</span><span class="token punctuation">.</span>java
    └── test
         └── java
             └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test
                 └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyDecoder.java *用于处理解码，02开始 03结束</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义解码器
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛关注获取学习源码｝
 * 虫洞群：①群5398358 ②群5360692
 * Create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDecoder</span> <span class="token keyword">extends</span> <span class="token class-name">ByteToMessageDecoder</span> <span class="token punctuation">{</span>

    <span class="token comment">//数据包基础长度</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BASE_LENGTH</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> channelHandlerContext<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> in<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token comment">//基础长度不足，我们设定基础长度为4</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token constant">BASE_LENGTH</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> beginIdx<span class="token punctuation">;</span> <span class="token comment">//记录包头位置</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取包头开始的index</span>
            beginIdx <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readerIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 标记包头开始的index</span>
            in<span class="token punctuation">.</span><span class="token function">markReaderIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 读到了协议的开始标志，结束while循环</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readByte</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0x02</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 未读到包头，略过一个字节</span>
            <span class="token comment">// 每次略过，一个字节，去读取，包头信息的开始标记</span>
            in<span class="token punctuation">.</span><span class="token function">resetReaderIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            in<span class="token punctuation">.</span><span class="token function">readByte</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 当略过，一个字节之后，</span>
            <span class="token comment">// 数据包的长度，又变得不满足</span>
            <span class="token comment">// 此时，应该结束。等待后面的数据到达</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token constant">BASE_LENGTH</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token comment">//剩余长度不足可读取数量[没有内容长度位]</span>
        <span class="token keyword">int</span> readableCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>readableCount <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            in<span class="token punctuation">.</span><span class="token function">readerIndex</span><span class="token punctuation">(</span>beginIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//长度域占4字节，读取int</span>
        <span class="token class-name">ByteBuf</span> byteBuf <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readBytes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> msgLengthStr <span class="token operator">=</span> byteBuf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> msgLength <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>msgLengthStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//剩余长度不足可读取数量[没有结尾标识]</span>
        readableCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>readableCount <span class="token operator">&lt;</span> msgLength <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            in<span class="token punctuation">.</span><span class="token function">readerIndex</span><span class="token punctuation">(</span>beginIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ByteBuf</span> msgContent <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readBytes</span><span class="token punctuation">(</span>msgLength<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//如果没有结尾标识，还原指针位置[其他标识结尾]</span>
        <span class="token keyword">byte</span> end <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readByte</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">!=</span> <span class="token number">0x03</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            in<span class="token punctuation">.</span><span class="token function">readerIndex</span><span class="token punctuation">(</span>beginIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>msgContent<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyEncoder.java *用于处理编码，在byte开始和结束加上02 03</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义编码器
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛关注获取学习源码｝
 * 虫洞群：①群5398358 ②群5360692
 * Create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyEncoder</span> <span class="token keyword">extends</span> <span class="token class-name">MessageToByteEncoder</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> channelHandlerContext<span class="token punctuation">,</span> <span class="token class-name">Object</span> in<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> msg <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> send <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>bytes<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> send<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        send<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x02</span><span class="token punctuation">;</span>
        send<span class="token punctuation">[</span>send<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x03</span><span class="token punctuation">;</span>
        
        out<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span>send<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">writeBytes</span><span class="token punctuation">(</span>send<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyChannelInitializer.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛关注获取学习源码｝
 * 虫洞群：①群5398358 ②群5360692
 * Create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyChannelInitializer</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> channel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//自定义解码器</span>
        channel<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//自定义编码器</span>
        channel<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//在管道中添加我们自己的接收数据实现方法</span>
        channel<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyServerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyServerHandler.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 虫洞栈：https://bugstack.cn
 * 公众号：bugstack虫洞栈  ｛关注获取学习源码｝
 * 虫洞群：①群5398358 ②群5360692
 * Create by fuzhengwei on 2019
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SocketChannel</span> channel <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SocketChannel</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链接报告开始 {公众号：bugstack虫洞栈 &gt;获取学习源码}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链接报告信息：有一客户端链接到本服务端&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链接报告IP:&quot;</span> <span class="token operator">+</span> channel<span class="token punctuation">.</span><span class="token function">localAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链接报告Port:&quot;</span> <span class="token operator">+</span> channel<span class="token punctuation">.</span><span class="token function">localAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链接报告完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//接收msg消息{与上一章节相比，此处已经不需要自己进行解码}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 接收到消息：&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token string">&quot;hi I&#39;m ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><blockquote><p>启动NettyServer</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>demo<span class="token operator">-</span>netty server start done<span class="token punctuation">.</span> <span class="token punctuation">{</span>关注公众号：bugstack虫洞栈，获取源码<span class="token punctuation">}</span>
链接报告开始 <span class="token punctuation">{</span>公众号：bugstack虫洞栈 <span class="token operator">&gt;</span>获取学习源码<span class="token punctuation">}</span>
链接报告信息：有一客户端链接到本服务端
链接报告<span class="token constant">IP</span><span class="token operator">:</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
链接报告<span class="token class-name">Port</span><span class="token operator">:</span><span class="token number">7397</span>
链接报告完毕
<span class="token number">2019</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">01</span> 接收到消息：hihi  <span class="token operator">-</span>整包测试
<span class="token number">2019</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">16</span> 接收到消息：hihi  <span class="token operator">-</span>半包测试
<span class="token number">2019</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">23</span> 接收到消息：hihi  <span class="token operator">-</span>粘包测试
<span class="token number">2019</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">27</span> 接收到消息：hihi  <span class="token operator">-</span>粘包测试

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动模拟器NetAssist，用TcpClient链接服务端</p></blockquote><p><img src="https://bugstack.cn/assets/images/pic-content/2019/08/netty-1-09-2-1.png" alt=""></p><blockquote><p>分别发送三组数据；</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">02</span>；开始位
<span class="token number">03</span>；结束位
<span class="token number">34</span>；变量，内容长度位

第一组；整包测试数据：
<span class="token number">02</span> <span class="token number">34</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">03</span>

第二组；半包测试数据
<span class="token number">02</span> <span class="token number">34</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">68</span> <span class="token number">69</span>
<span class="token number">03</span>

第三组：粘包测试数据
<span class="token number">02</span> <span class="token number">34</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">03</span> <span class="token number">02</span> <span class="token number">34</span>
<span class="token number">68</span> <span class="token number">69</span> <span class="token number">68</span> <span class="token number">69</span> <span class="token number">03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信搜索「<strong>bugstack虫洞栈</strong>」公众号，关注后回复「<strong>Netty专题案例</strong>」获取本文源码&amp;更多原创专题案例！</p>`,24);function v(m,b){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("作者：小傅哥 "),k,s("博客："),n("a",r,[s("https://bugstack.cn"),o(a)])]),d])}const h=e(i,[["render",v],["__file","2019-08-12-nettyanli，netty4.1jichurumenpianjiu《zidingyibianmajiemaqi，chulibanbao、zhanbaoshuju》.html.vue"]]);export{h as default};
