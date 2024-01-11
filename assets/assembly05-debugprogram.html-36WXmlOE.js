import{_ as e,o as i,c as n,e as s}from"./app-3RcBQnkC.js";const a={},d=s(`<h1 id="x86-汇编-debug-循环指令" tabindex="-1"><a class="header-anchor" href="#x86-汇编-debug-循环指令" aria-hidden="true">#</a> x86 汇编 debug 循环指令</h1><ul><li><a href="#x86-%E6%B1%87%E7%BC%96-debug-%E5%BE%AA%E7%8E%AF%E6%8C%87%E4%BB%A4">x86 汇编 debug 循环指令</a><ul><li><a href="#debug-%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B">debug 程序执行过程</a></li><li><a href="#debug-%E5%BE%AA%E7%8E%AF%E7%A8%8B%E5%BA%8F">debug 循环程序</a></li><li><a href="#%E6%80%BB%E7%BB%93">总结</a></li></ul></li></ul><p>学习任何一门语言都不能少的了 debug ，汇编也是。</p><p>我前面这篇文章给大家写了如何在 windows 、mac 等操作系统的机器上使用 dosbox 的 masm、link、debug 功能编译、解释、运行一个汇编程序，文章链接如下：</p><h2 id="debug-程序执行过程" tabindex="-1"><a class="header-anchor" href="#debug-程序执行过程" aria-hidden="true">#</a> debug 程序执行过程</h2><p>下面我们就依据这几个功能来跟踪一下程序的执行过程。</p><blockquote><p>debug 对我们来说非常重要，有很多代码细节和问题通过肉眼是观察出来的，我们肉眼可能能够判断一些简单的程序问题，但是对于很多隐藏较深的问题，还是要依据 debug 才能发现。</p></blockquote><p>下面是一段汇编代码，这段汇编代码我之前的文章中也给大家写过。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg
codesg segment

	mov ax,0123h
	mov bx,0456h
	add ax,bx
	add ax,ax

	mov ax,4c00h
	int 21h

codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建文本文件，把代码 cv 过去，然后右键保存，使用 dosbox 将其编译为 1.obj 文件，链接为 1.exe 文件后，我们使用 <code>debug 1.exe</code> 命令来分析一下这段程序，并用 -r 命令来看一下初始的寄存器情况。</p><p><img src="http://www.cxuan.vip/image-20230118091102740.png" alt=""></p><p>程序初始状态下，可以看到 CX 中的数据为 000F，这也表示着程序的长度是 000F，1.exe 中共有 15 个字节，CX 中的内容为 000FH。</p><p>好，现在我们已经知道程序被成功的载入内存并运行起来了，但是我们现在先不妨想一下，被链接成为 EXE 的程序会被装入内存的哪个地方的呢？我们怎么知道程序被装入在哪里呢？</p><p>程序装载的过程分下面几步：</p><ol><li>首先程序会从内存中找到一块区域，记为初始地址 SA，此时的偏移地址为 0 的这样一块足够容量的内存区域。</li></ol><img src="http://www.cxuan.vip/image-20230118091901358.png" style="zoom:50%;"><ol start="2"><li>在这段区域内的头 256 个字节中，会创建一块称为**程序段前缀（Program Segment Prefix ，PSP）**的区域，这块区域被 DOS 用来和被加载的程序进行通信。</li></ol><img src="http://www.cxuan.vip/image-20230118091913716.png" style="zoom:50%;"><ol start="3"><li>从这块程序的 256 个字节开始处，也就是在 PSP 程序段前缀的后面，程序会被加载到这里，此时程序的初始地址是 SA + 10H，偏移地址为 0 。也就是 SA + 10H : 0，所以程序的初始地址就是 CS = 076AH ，IP = 0000H。</li></ol><img src="http://www.cxuan.vip/image-20230118091925312.png" style="zoom:50%;"><blockquote><p>程序被装入内存后，由 DS 段寄存器存放着内存区的段地址，此时内存区域的偏移量为 0 ，所以此时的物理地址为 SA * 16:0，我们并不用知道真实的 DS 是多少，反正都是由操作系统和 DOS 分配的。</p><p>然后这个内存区域的前 256 个字节被用于存放 PSP ，所以程序的物理地址为 SA * 16 + 256 : 0 。</p><p>SA * 16 + 256 = SA * 16 + 16 * 16 = (SA + 16) * 16 ，转换为 16 进制就是 SA + 10H，所以物理地址就是 SA + 10H : 0。</p></blockquote><p>我们上面 debug 1.exe 之后可以看到，DS 段寄存器的值为 076AH ，而 CS 段寄存器的值为 076BH ，正好符合 076A * 16 + 10 = 076BH （注意这里的 * 16 就是左移 4 位的意思，之前文章中也解释过原因。）</p><p>我们使用 -u 指令可以看到完整的汇编源代码。</p><img src="http://www.cxuan.vip/image-20230118091941573.png"><p>上图中用红框圈出来的就是我们这段汇编程序的源代码，可以看到这是一个程序段，程序段的段地址始终为 076A，偏移地址在不断变化。</p><p>我们使用 -t 命令来单步执行以下这段程序，如下图所示。</p><img src="http://www.cxuan.vip/image-20230118091951366.png"><p>（为了连续的观察一下程序的执行结果，我索性直接把主要的程序步骤执行完了。）</p><p>这段程序就是 mov 和 add 的基本使用，将 0123 送入 AX 寄存器，将 0456 送入 BX 寄存器，对 AX 寄存器执行 AX = AX + BX ，再对 AX 执行 AX = AX + AX。</p><p>程序继续向下执行，当执行到 int 21H 处，程序执行完毕，此时要使用 -p 命令结束程序的执行，如下图所示。</p><img src="http://www.cxuan.vip/image-20230118092030075.png"><p>当显示 Program terminated normally 时，表示程序正常结束，这里大家先不用考虑为什么执行到 int 21 处才执行 -p 命令，也不用关心 mov ax,4c00 和 int 21 是什么意思，大家先记住就行。</p><p>由于程序装载的过程是 command 将程序装载进入内存，然后 debug 程序对 exe 程序其进行跟踪，所以程序退出后也是先从 exe 程序退出到 debug 程序中，由 debug 程序再退回到 command 程序中。</p><p>下面再分析一段程序，汇编原代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg

codesg segment

	mov ax,2000H
 	mov ss,ax
 	mov sp,0
 	add sp,10
 	pop ax
 	pop bx
 	push ax
 	push bx
 	pop ax
 	pop bx

 	mov ax,4c00H
 	int 21H

codesg ends

end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仍然是将其保存为 test.txt，然后执行编译和链接操作，将其生成可执行文件 test.exe，观察其执行过程。</p><p>我们先使用 -r 查看一下初始寄存器的内容。</p><p><img src="http://www.cxuan.vip/image-20230118092130411.png" alt=""></p><p>主要观察一下 CX 、DS 、CS 和 IP 的值，是否和我们上面描述的一致，CX 存放程序长度，DS 存放程序段地址，CS 存放程序初始地址，IP 存放程序偏移地址。</p><p>再使用 -u 看一下 exe 程序的源代码，这个 exe 程序是经过编译和链接之后的程序。</p><p><img src="http://www.cxuan.vip/image-20230118092139591.png" alt=""></p><p>我们来分析一下这段，这是一段栈段的入栈和出栈的程序，首先</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,2000H
mov ss,ax
mov sp,0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是设置栈段的栈顶指令，执行完成后会设置栈顶的物理地址为 20000 H ，即 SS:SP = 2000:0000。</p><p><img src="http://www.cxuan.vip/image-20230118092222438.png" alt=""></p><p>我们执行这个程序的过程中，发现 mov sp,0 这个指令为什么没有出现呢？难道是我们漏写了？查看了一下，源代码确实是有这条指令的，难道是没有执行？</p><p>为了验证这个假设，我们重新 debug 一下这段程序，然后先把 SP 的值进行修改，如下图所示。</p><p><img src="http://www.cxuan.vip/image-20230118092237736.png" alt=""></p><p>刚开始，我们使用 -r 把 sp 的值改成 0002，然后单步执行，在执行到 mov ss,ax 之后，发现 SP 的值变为 0000，这也就是说 mov sp,0 这条指令其实是执行了的，只是 debug 模式下没有显示而已。</p><p>程序继续向下执行，下面是两个 pop 出栈操作。</p><p><img src="http://www.cxuan.vip/image-20230118092250243.png" alt=""></p><p>pop ax 和 pop bx 做了两件事：把寄存器清空；栈顶位置 + 2 ，所以 ax 和 bx 寄存器的内容为 0 ，并且 SP = SP + 2 ，执行后 SP = 000E。</p><p>之后是两个 push 操作，把出栈的两个寄存器再进行入栈，如下图所示。</p><p><img src="http://www.cxuan.vip/image-20230118092302858.png" alt=""></p><p>push 操作也做了两件事情，将寄存器入栈，SP = SP - 2，由于 ax 和 bx 已经 pop 出栈了，所以寄存器内容为 0 ，最后再进行 pop 操作，然后再结束程序的执行过程。</p><p><img src="http://www.cxuan.vip/image-20230118092340074.png" alt=""></p><p>我们再来看一下 PSP 的情况，由于程序被装入的时候前 256 个字节是 PSP 所占用的，此时 DS（SA）处就是 PSP 的起始地址，而 CS = SA + 10H ，也就是 CS = 076AH。</p><h2 id="debug-循环程序" tabindex="-1"><a class="header-anchor" href="#debug-循环程序" aria-hidden="true">#</a> debug 循环程序</h2><p>下面我们来 debug 一下循环程序，看看有哪些有意思的细节。</p><p>现在有这样一道问题，计算 ffff:0006 单元中的数乘 3 ，让结果存储在 dx 中。</p><p>针对这个问题，有几个点需要思考：</p><ul><li>我们知道 ，8086 汇编语言中单个存储单元所能存储的最大值是 8 位，一个字节长度，范围是 0 - 255 之间，而一个寄存器 dx 中可容纳的最大值是 16 位，两个字节长度，范围是 0 - 65535，即使 255 * 3 也小于 65535，很显然乘以 3 之后，dx 中能够存放的下。</li><li>数乘 3 相当于是循环做 add 自身操作 3 次，所以需要用加法来实现乘法，可以直接使用 dx 进行累加，不过需要一个 ax 来进行中转。</li><li>ffff:6 内存单元是一个字节单元，而 ax 寄存器能容纳的是一个字单元，无法直接赋值，该如何做呢？因为 ax 可以看做 al 和 ah ，而 al 和 ah 又是两个单独的寄存器，它们之间不会发生值溢出，所以让 ah = 0 ，al = 内存单元的值即可。</li></ul><p>所以这段汇编程序的代码如下</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg

codesg segment

 mov ax,0ffffh
 mov ds,ax
 
 mov ah,0
 mov al,[6]

 mov cx,3
s: add dx,ax
 loop s

 mov ax,4c00h
 int 21h

codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写完毕，编译链接成 exe 程序后，对其进行 debug xxx.exe 操作。</p><p>我们来看下程序的执行过程。</p><p><img src="http://www.cxuan.vip/image-20230129163546437.png" alt=""></p><p>前两段没毛病，设置 DS 段寄存器的值为 FFFF 。然后继续向下执行</p><p><img src="http://www.cxuan.vip/image-20230129163709001.png" alt=""></p><p>执行到 mov al,[6] 的时候我发现，怎么 AX 寄存器中的内容变成 0006 了？我不是想要把 06 放入 ax 中啊，我是想把 ffff:06 内存单元中的值放入 ax 中啊，我突然意识到编译器是个傻子。</p><p>经过我认真仔细细心耐心用心的排查了一番问题之后，我方才大悟，原来我是个傻子！不知道各位小伙伴们看出来我代码的问题了吗？</p><p><strong>我怎么敢在源程序中把立即数当做内存偏移地址来用呢？必须要用 bx 中转啊！</strong></p><p>这也就是说，编译器编译完源代码之后，会把 06 当做立即数使用，如果想要使 06 表示内存地址，必须要用 bx 进行中转，修改之后的源代码如下：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:codesg

codesg segment

 mov ax,0ffffh
 mov ds,ax
 mov bx,6
 
 mov ah,0
 mov al,[bx] # 必须要用 bx 进行中转，才能表示内存地址
 mov dx,0  	# 累加寄存器清 0 

 mov cx,3
s: add dx,ax
 loop s

 mov ax,4c00h
 int 21h

codesg ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再重新链接成为 exe 程序之后，我们一步一步 debug 看一下。</p><p><img src="http://www.cxuan.vip/image-20230129164920365.png" alt=""></p><p>执行到 mov al,[bx] 的时候，我们发现，此时右侧有个 ds:0006 = 31，这段代码表示的是 ds:0006 处内存单元的值是 31，这才表明我们的程序是正确的。</p><p>继续向下执行程序。</p><p><img src="http://www.cxuan.vip/image-20230129165408430.png" alt=""></p><p>前两条指令执行完成后，(dx) = 0 ，(cx) = 3，完成对累加寄存器的清空和循环计数器的赋值操作。最后一条指令是第一次循环操作指令，此时 CS:IP 指向 076A:0012 ，继续向下执行。</p><p><img src="http://www.cxuan.vip/image-20230129165841158.png" alt=""></p><p>可以看到，第一次 add dx,ax 执行完成后 IP = 0014H ，此时指向的指令是 LOOP 0012，这条指令的意思是让程序再执行一次 (IP) = 0012H 处的指令，也就是再执行一次 add dx,ax，可以看到 cx 的值变成了 0002，因为循环指令执行后 (cx) = (cx) - 2 ，然后再向下执行，发现后面的循环指令还是 LOOP 0012 ，再执行一次 add dx,ax，一直到 (cx) = 0 后结束程序执行，如下图所示</p><p><img src="http://www.cxuan.vip/image-20230129170301105.png" alt=""></p><p>可以发现，整个程序一共循环三次，最终 dx 中的值是 93 ，程序执行到 int 21H 处，使用 -p 命令结束程序的执行。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这篇文章我带你从 debug 操作入手跟踪了一下循环指令，我跟踪的步骤还是比较细致的，希望各位小伙伴们看完能有所收获，最好是跟着一起执行一遍！</p>`,86),l=[d];function p(v,m){return i(),n("div",null,l)}const u=e(a,[["render",p],["__file","assembly05-debugprogram.html.vue"]]);export{u as default};
