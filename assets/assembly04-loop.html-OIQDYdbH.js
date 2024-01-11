import{_ as a,o as e,c as s,e as i}from"./app-3RcBQnkC.js";const d={},l=i(`<h1 id="x86-汇编循环指令" tabindex="-1"><a class="header-anchor" href="#x86-汇编循环指令" aria-hidden="true">#</a> x86 汇编循环指令</h1><ul><li><a href="#x86-%E6%B1%87%E7%BC%96%E5%BE%AA%E7%8E%AF%E6%8C%87%E4%BB%A4">x86 汇编循环指令</a><ul><li><a href="#%E5%86%85%E5%AD%98%E5%8D%95%E5%85%83%E7%9A%84%E6%8F%8F%E8%BF%B0">内存单元的描述</a><ul><li><a href="#--%E8%A1%A8%E7%A4%BA%E6%B3%95">( ) 表示法</a></li><li><a href="#idata">idata</a></li></ul></li><li><a href="#bx">[BX]</a></li><li><a href="#loop-%E6%8C%87%E4%BB%A4">Loop 指令</a></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li></ul></li></ul><h2 id="内存单元的描述" tabindex="-1"><a class="header-anchor" href="#内存单元的描述" aria-hidden="true">#</a> 内存单元的描述</h2><p>之前的文章中介绍过 [0] 表示的是偏移地址为 0 的内存单元 。比如下面的指令</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就是将一个内存单元的内容送入 ax，这个内存单元的长度为 2 个字节，是一个字型数据，偏移地址为 0 ，段地址在 ds 中，也就是这个内存单元的地址是 ds:0 ，它的物理地址是 （ds * 16 + 0）H。</p><p>除了可以传输字型数据，还可以传输字节型数据，比如下面代码。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov al,[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就是将一个内存单元的地址送入 al 中，这个内存单元的长度是 1 字节，存放字节型数据，偏移地址为 0 ，段地址在 ds 中，大白话说也就是将 ds:0 处的一个字节传入到 al 中。</p><p>从上面两个例子可以看出，假如要描述一个完整的一个内存单元，应该需要两种信息：即<strong>内存单元的地址和内存单元的长度</strong>。</p><p>比如我们要读取一个 10000H 的数据，你可能会需要下面这段代码。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov bx,1000H 	#将 1000H 放入 bx 寄存器中
mov ds,bx   	#将段寄存器 ds 的值设为 1000H
mov al,[0]		#从内存单元 1000:0 处读出1字节内容放入 al 中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是表示内存地址的方式除了能够直接指定其内存地址之外，还可以用一种<strong>间接寻址</strong>的方式，这就是 [bx]，它表示的是一种寄存器间接寻址，也是一种偏移地址，同样的，比如我们要读取一个物理地址为 10001H 处的数据，使用 [bx] 这种方式的代码如下</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,1000H
mov ds,ax
mov bx,1
mov ax,[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样计算机就会寻找段地址为 1000H，偏移地址为 0001H 的数据放入到 ax 中。</p><p>它的中文解释就是 <strong>把 [bx] 指向的地址中的内容，送入 ax 寄存器中</strong>。</p><p>比如下面这段代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它表示的就是将偏移地址为 bx 的数据，送入到 ax 中，送入的是 2 个字节，也就是字型数据。</p><p>又比如下面这段代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov al,[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它表示的就是将偏移地址为 bx 的数据，送入到 al 中，送入的内存单元地址是 1 个字节的字节型数据。</p><p>[bx] 这种间接寻址的好处就是每次偏移地址不是固定的，这为我们接下来的循环指令奠定了基础。</p><h3 id="表示法" tabindex="-1"><a class="header-anchor" href="#表示法" aria-hidden="true">#</a> ( ) 表示法</h3><p>为了更方便的描述后面，我们使用 <code>()</code> 来表示一个寄存器或者内存单元中的内容。</p><blockquote><p>这里需要注意一下，( ) 内的能够表示的内容一般有三种类型：</p><ul><li>寄存器名，比如 (ax) 就表示 ax 中的内容，(al) 就表示 al 中的内容。</li><li>段寄存器名，比如 (ds) 就表示段寄存器 ds 中的内容。</li><li>内存单元的物理地址，比如 ((ds) * 16 + (bx))，一个 20 位的数据。</li></ul></blockquote><p>我们知道，寄存器存储的数据类型有两种，字型和字节型，字型数据一般用 ax 这类寄存器来存储，字节型数据一般用 ah 、al 这种寄存器来存储。</p><p>同样的，( ) 内的数据类型也有两种，字型和字节型。比如 (al)、(bl)、(cl) 这种表示的数据就是字节型，而 (ax)、(bx)、(cx) 表示的数据就是字型。下面是几类 ( ) 的一些用法：</p><ul><li>ax 中的内容为 0020H：(ax) = 0020H;</li><li>2000:1000 处的内容为 0010H：(21000H) = 0010H;</li><li>mov ax,[2] 则表示为：ax = ((ds * 16) + 2);</li><li>mov [2],ax 则表示为：((ds) * 16 + 2) = (ax);</li><li>add ax,2 表示为：(ax) = (ax) + 2;</li><li>push ax 表示为： (sp) = (sp) - 2, ((ss * 16) + sp) = (ax);</li><li>pop ax 表示为：(ax) = ((ss) * 16) + sp), (sp) = (sp) + 2;</li></ul><h3 id="idata" tabindex="-1"><a class="header-anchor" href="#idata" aria-hidden="true">#</a> idata</h3><p>idata 表示的就是立即数，这个概念就更简单了，立即数顾名思义就是直接的数字，也就是常量。比如 mov ax,[0] ，其中的 0 就是立即数，即 idata = 0 ，所以 [立即数] = [idata]，所以以后我们通常使用 idata 来表示常量，比如下面几个例子</p><ul><li>mov ax,[idata] 可以表示为 mov ax,[1] mov ax,[2] mov ax,[3]</li><li>mov ax,idata 可以表示为 mov ax,1 mov ax,2 mov ax,3</li></ul><p>知道上面是 啥意思了吧？</p><h2 id="bx" tabindex="-1"><a class="header-anchor" href="#bx" aria-hidden="true">#</a> [BX]</h2><p>再来啰嗦一下 [bx] 的寻址方式，比如下面代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>bx 中存放的数据作为一个偏移地址，这里用 EA 表示（没有其他意思，只是单纯地表示偏移地址），段地址在 ds 中，用 SA 表示（同 EA 的解释），将 SA:EA 处的数据送入 ax 中，即 (ax) = ((ds) * 16 + (bx))。</p><p>可以将内存单元送入寄存器中，也可以将寄存器的数据送入到内存单元中，如下代码所示</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov [bx],ax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就是将 ax 中的数据送入到 SA：EA 处，即 ((ds) * 16 + (bx)) = (ax)。</p><p>为了让大家加深对 [bx] 的认识，我们通过一些汇编指令来认识一下程序的执行过程，代码如下</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,2000H
mov ds,ax
mov bx,1000H
mov ax,[bx]
inc bx
inc bx
mov [bx],ax
inc bx
inc bx
mov [bx],ax
inc bx
mov [bx],al
inc bx
mov [bx],al
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始内存示意图：</p><img src="http://www.cxuan.vip/image-20230121120829367.png" style="zoom:50%;"><p>下面我们就按照每一行指令来分析一下</p><p>首先，mov ax,2000H 就是将 2000 送入 ax 中，mov ds,ax 就是将设置段地址为 2000 H，mov bx,1000H 就是将 1000 送入 bx 中，mov ax,[bx] 就是将 2000:1000 处的地址送入到 ax 中（因为段基址为 2000，偏移地址 dx 为 1000），2000H:1000H 处的指令是 00be，所以 ax = 00BEH ，存储字型数据。</p><p>inc bx 就是将寄存器 bx 的值加 1，此处有两条 inc 指令，所以执行完成后 bx = 1002H，此处段基址：偏移地址为 2000H:1002H。</p><p>然后下面 （第七行指令）mov [bx],ax 就是将 ax 中的数据送入到 [bx] 中，也就是 1002H 处，指令执行后，2000:1002 单元的内容为 BE，2000:1003 单元的内容为 00，存放字型数据，执行完成后的示意图如下</p><img src="http://www.cxuan.vip/image-20230121120840427.png" style="zoom:50%;"><p>继续执行第 8、9 行的指令，inc bx ，执行完成后 bx = 1004H，然后执行第 10 行指令 mov [bx],ax ，指令执行前： ds = 2000H，bx = 1004H，mov [bx],ax 相当于是把 ax 中的数据送到 2000:1004 处，指令执行完成后，2000:1004 的单元内容为 BE ，如下示意图所示</p><img src="http://www.cxuan.vip/image-20230121120852660.png" style="zoom:50%;"><p>接下来执行第 11 行指令，inc bx，执行完成后 bx = 1005H，mov [bx],al 是把 al 中的数据送入内存 2000:1005 处，指令执行完成后，2000:1005 处的单元内容为 BE，如下示意图所示</p><img src="http://www.cxuan.vip/image-20230121120905026.png" style="zoom:50%;"><p>继续执行指令，第13、14 行指令和 11 、12 行指令一样，它的意思就是将 bx 的值加一之后，将 al 的值送入到指定地址处，执行完成后的 ds = 2000H，bx = 1006H，所以 2000:1006 处的内容是 BE（al 存储的数据），示意图如下</p><img src="http://www.cxuan.vip/image-20230121120922281.png" style="zoom:50%;"><p>想必大家跟完上面的流程后，应该对 [bx] 这个间接寻址方式有了比较深刻的认识。</p><p>下面想个问题，使用汇编编程计算 2 * 2 ，并将结果存储在 ax 寄存器中。</p><p>这个思路还是比较简单的，直接将 2 放在 ax 寄存器中，然后执行 ax 的 add 操作就可以了，下面是汇编代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg
codesg segment
 mov ax,2
 add ax,ax
 
 mov ax,4c00h
 int 21h
codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码中的计算量还比较低，但是如果要让你计算 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 呢，你难道要写 n 个 add ax,ax 吗？</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg
codesg segment
 mov ax,2
 add ax,ax
 add ax,ax
 add ax,ax
 add ax,ax
 。。。
 
 mov ax,4c00h
 int 21h
codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就很繁琐啊，所以不能这么玩，那该怎么搞呢？这里就需要一种能够循环之星 add ax,ax 的指令了，这个指令就是 <code>Loop</code>。</p><h2 id="loop-指令" tabindex="-1"><a class="header-anchor" href="#loop-指令" aria-hidden="true">#</a> Loop 指令</h2><p>Loop 指令能够循环判断是否执行指定的指令，它的执行流程就相当于我们 Java 中的 for 循环。</p><p>我们先来使用 Loop 改写一下上面 n 个 2 相乘的代码，然后再讲解一下 Loop 的使用。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg
codesg segment
	mov ax,2
	mov cx,8
s: add ax,ax
	loop s

	mov ax,4c00h
	int 21h
codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们使用 8 个 2 相乘的代码被优化的这么简单，这就是 loop 指令的精髓所在。</p><p>其实关键代码就是三条指令，即</p><ul><li>mov cx,8</li><li>s: add ax,ax</li><li>loop s</li></ul><p>翻译过来的意思就是将 8 放在 cx 中，然后给 add ax,ax 处设置一个标号，然后执行 s 循环。</p><p>loop 指令的格式是：loop 标号，CPU 执行 loop 指令的时候，要进行两步操作，第一步：(cx) = (cx) - 1，第二步：判断 cx 的值，不为 0 则转至标号（上面代码是 s）处继续执行指令，如果为 0 则向下执行（上面代码中乡下继续执行就是 mov ax,4c00h）。上面代码中，我们把 8 送入了 cx 中，也就是说，cx 中存储的就是执行次数。</p><p>下面我们详细介绍一下上面这段程序的执行过程，从中体会一下 cx 和 loop s 是如何配合实现循环的。</p><p>(1) 执行 cx,8 ，设置 cx = 8</p><p>(2) 执行 add ax,ax（第 1 次）</p><p>(3) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 7，(cx) != 0 ，所以转至 s 处</p><p>(4) 执行 add ax,ax（第 2 次）</p><p>(5) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 6，(cx) != 0 ，所以转至 s 处</p><p>(6) 执行 add ax,ax（第 3 次）</p><p>(7) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 5，(cx) != 0 ，所以转至 s 处</p><p>(8) 执行 add ax,ax（第 4 次）</p><p>(9) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 4，(cx) != 0 ，所以转至 s 处</p><p>(10) 执行 add ax,ax（第 5 次）</p><p>(11) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 3，(cx) != 0 ，所以转至 s 处</p><p>(12) 执行 add ax,ax（第 6 次）</p><p>(13) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 2，(cx) != 0 ，所以转至 s 处</p><p>(14) 执行 add ax,ax（第 7 次）</p><p>(15) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 1，(cx) != 0 ，所以转至 s 处</p><p>(16) 执行 add ax,ax（第 8 次）</p><p>(15) 执行 loop s 将 cx 的值 - 1，此时 (cx) = 0，(cx) == 0 ，所以转至 s 处</p><p>(16) 执行 mov ax,4c00h（循环结束）</p><p>从上面这个过程中，我们可以总结处用 cx 和 loop 指令相配合实现循环功能的 3 点注意事项：</p><ul><li>在 cx 中存放循环次数。</li><li>loop 指令中的标号所标识的地址要在前面</li><li>要循环执行的程序段，要写在标号和 loop 指令的中间。</li></ul><p>所以综上所述，使用 Loop 和 cx 相配合实现的循环功能的结构如下：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>	mov cx,循环次数
s: 
	循环执行的程序段
	loop s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们想用 Loop 循环计算出 123 * 456 这个值，就可以使用这种方式</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg
codesg segment
	mov ax,0
	mov cx,456
s:add ax,123
	loop s
	
	mov ax,4c00h
	int 21h
codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这篇文章我为你讲解了一下汇编语言中的 loop 循环是如何实现的。</p><p>如果你在阅读文章的过程中发现错误和问题，请及时与我联系！</p><p>如果文章对你有帮助，希望小伙伴们三连走起！</p>`,100),n=[l];function v(c,m){return e(),s("div",null,n)}const p=a(d,[["render",v],["__file","assembly04-loop.html.vue"]]);export{p as default};
