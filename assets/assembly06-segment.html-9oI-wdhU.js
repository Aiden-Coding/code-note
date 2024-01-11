import{_ as e,o as s,c as a,e as i}from"./app-3RcBQnkC.js";const d={},n=i(`<h1 id="简单了解下段" tabindex="-1"><a class="header-anchor" href="#简单了解下段" aria-hidden="true">#</a> 简单了解下段</h1><ul><li><a href="#%E7%AE%80%E5%8D%95%E4%BA%86%E8%A7%A3%E4%B8%8B%E6%AE%B5">简单了解下段</a><ul><li><a href="#%E4%B8%80%E4%B8%AA%E5%B0%8F%E7%BB%86%E8%8A%82">一个小细节</a></li><li><a href="#%E6%AE%B5%E5%89%8D%E7%BC%80">段前缀</a></li><li><a href="#%E4%B8%80%E6%AE%B5%E5%AE%89%E5%85%A8%E7%9A%84%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4">一段安全的存储空间</a></li><li><a href="#%E6%AE%B5%E5%89%8D%E7%BC%80%E7%9A%84%E4%BD%BF%E7%94%A8">段前缀的使用</a></li></ul></li></ul><p>这是 x86 汇编连载系列第六篇文章，前五篇文章见文末。</p><h2 id="一个小细节" tabindex="-1"><a class="header-anchor" href="#一个小细节" aria-hidden="true">#</a> 一个小细节</h2><p>从开始到现在我们接触到了两种汇编指令的编写方式，一种是在 dosbox 上的 debug 模式下通过 <code>debug -a</code> 的方式来编写，如下图所示</p><p><img src="http://www.cxuan.vip/image-20230215090453601.png" alt=""></p><p>这种方式能让你在 dosbox 中直接编写汇编代码，简单直接，不需要写伪指令，方便快捷。</p><p>还有一种方式需要我们在 dosbox 外部编写汇编源文件，源文件中的代码经由 MASM 汇编编译、LINK 指令链接后一种，如下图所示</p><p><img src="http://www.cxuan.vip/image-20230215091243867.png" alt=""></p><p>乍一看这两种方式编写的汇编源代码应该都能正确的执行，于是我们分别用两种不同的方式写下了</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov al,[1] 
mov bl,[2]
mov cl,[3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这几条指令。这三条指令很简单，我们的目的很明确，我们想把内存地址为 ds:[1], ds[2], ds[3] 的数据分别送入 al,bl,cl 寄存器。下面我们执行一下：</p><p><strong>使用 debug 方式的截图如下:</strong></p><p><img src="http://www.cxuan.vip/image-20230215203213882.png" alt=""></p><p>如图所示，在使用 debug 方式中，&quot;[ ]&quot; 内的指令会被直接当做内存地址进行 mov。</p><p><strong>使用 masm 编译器方式的截图如下:</strong></p><p><img src="http://www.cxuan.vip/image-20230215203556710.png" alt=""></p><p>图如所示，当我们使用 MASM 进行编译和链接后，[ ] 号中的 1 会被直接编译为数值 01，而不是 [1] 这个内存地址。这个是编译规定，大家要<strong>记住这个细节</strong>。</p><blockquote><p>也就是说，诚如 [idata] 这种形式，debug 和 masm 汇编器对其有不同的解释，debug 认为 [1] 中的就是一个内存地址，而 masm 认为 [1] 就是一个 idata 立即数。</p></blockquote><p>话又说回来了，如果我们想在汇编源文件中表示内存地址，该怎么办呢？</p><p>这就需要借助一个寄存器了 --- <code>bx</code>。</p><p>比如下面这段汇编代码</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,2000h
mov ds,ax
mov bx,0
mov al,[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先将 ds 寄存器设置为 2000 ，也就是 ds = 2000h，然后把 0 放入 bx 中，最后的 mov al,[bx] 就会默认从内存地址ds:[0] 处提取数据进行移动。</p><p>这样当然是可以的，不过仍然比较繁琐，我们不想要每次 mov 内存数据还要经过 bx 中转，我们想要像 debug 那样直接 mov ，该怎么做呢？其实也比较简单，<strong>直接显示指出段寄存器:[内存偏移]即可</strong>。</p><p>看下面这段汇编代码：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,2000h
mov ds,ax
mov al,ds:[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想要通过 MASM 的方式来取得 ds:[0] 处内存地址的话，就需要显示指定段寄存器，如果没有显示指定的话，默认按照 01 数值来处理。</p><p>所以我们可以总结一下上面所探讨的内容（基于 MASM 汇编编译器下）</p><ul><li>mov al,[0] ：将数值 0 送入 al 寄存器中，(al) = 0。</li><li>mov al,ds:[0]：(al) = ((ds) * 16 + 0) , 将内存单元中的数据送入 al 中，段地址为 ds。</li><li>mov al,[bx]：(al) = ((ds) * 16 + bx) , 将内存单元的数据送入 al 中，段地址为 ds。</li><li>mov al,ds:[bx] ：和 mov al,[bx] 含义相同</li></ul><p>还可以更为精简的总结一点：</p><p><strong>MASM 汇编编译器会将 [idata] 编译为 idata，若想访问内存地址，则必须显示指定段地址或者使用 bx 进行中转</strong>。</p><hr><p>上面这些内容在本人其他文章中已经涉及到了，不过讲的不太细致，这篇文章算是细致的讲了下。</p><h2 id="段前缀" tabindex="-1"><a class="header-anchor" href="#段前缀" aria-hidden="true">#</a> 段前缀</h2><p>上面的内容多次提到了一个名词就是 <code>段</code>，段所表示的其实也是一段内存空间，不过这种划分的方式是由 CPU 来决定的，内存并不会分为多个段。段的划分是主要为了 CPU 能够更方便的寻址，要想寻找段内的每个地址和数据，都需要有两个概念：<strong>段基址和段内偏移</strong>。</p><p>在汇编语言中，一般通过 [bx] 来给出偏移地址，它的段基础在 ds 中，ds 是默认的段寄存器。</p><p>不过，只有一个 ds 段显然是无法应对复杂程序的寻址方式的，所以还可能会有多个段，如下所示：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,ds:[bx]
mov ax,cs:[bx]
mov ax,ss:[bx]
mov ax,es:[bx]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面列举了四种不同的段寄存器和寻址方式。</p><p>第一条指令把段基址为 ds，偏移地址为 bx 的内存地址的内容送入 ax ，长度为 2 个字节单元，也就是一个字，16 位。</p><p>第二条指令把段基址为 cs，偏移地址为 bx 的内存地址的内容送入 ax ，长度为 2 个字节单元，一个字，16 位。</p><p>第三条指令把段基址为 ss，偏移地址为 bx 的内存地址的内容送入 ax ，长度为 2 个字节单元，一个字，16 位。</p><p>第四条指令把段基址为 es，偏移地址为 bx 的内存地址的内容送入 ax ，长度为 2 个字节单元，一个字，16 位。</p><p>由于 ds、cs、ss、es 都是显示指出的，所以 ds、cs、ss、es 又被称为<strong>段前缀</strong>。</p><h2 id="一段安全的存储空间" tabindex="-1"><a class="header-anchor" href="#一段安全的存储空间" aria-hidden="true">#</a> 一段安全的存储空间</h2><p>我们写出的程序经过编译连接后，会由操作系统分配内存空间，我们并不知道哪些内存空间是有用的，哪些内存空间是保留的，哪些内存空间是可以使用的，由于有些内存空间存储着重要的系统数据或代码，所以我们最好不要随意的向内存空间写入数据，这是很危险的，比如下面这几条指令：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>mov ax,1000h
mov ds,ax
mov al,0
mov ds:[0],al
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前为了方便，我们没有判断 1000:[0] 这个内存空间有没有存放重要代码或数据就将数据写入其中，这种做法是错误的，如果 1000:[0] 处刚好存放着文件系统的起始代码，那么 mov ds:[0],al 就会将其改写，引发系统崩溃。</p><p>再看一段程序：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:code
code segment

	mov ax,0
	mov ds,ax
	mov ds:[26h],ax
	
code ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们编写好代码后，进行编译链接，debug 这段代码：</p><p><img src="http://www.cxuan.vip/image-20230216150947757.png" alt=""></p><p>当我们执行完 mov ds:[26h],ax 后，说什么也执行不下去了。</p><p>并不是我不想执行了，而是系统不让我执行了，因为系统死机了。。。。。。大家可以试试。</p><p>所以，在不清楚这段内存空间是干什么的时候，最不好要随意向内存空间写入数据。由于内存空间是由操作系统直接分配的，所以要想向一段内存空间写入数据的话，要使用操作系统给我们分配的内存空间。</p><p>那么话又说回来了，操作系统给我们分配了哪些空间可以安全的写入数据呢？</p><p>在一般的 PC 机，DOS 方式下，DOS 和其他合法程序一般都不会使用 <strong>0:200 ~ 0:2ff(00200h ~ 002ffh)</strong> 这段 256 个字节的空间，可以认为这段内存区域是安全的。</p><p>不过为了谨慎起见，我们写入的时候，最好使用 debug -d 来看一下这段内存区域有没有存储数据。</p><h2 id="段前缀的使用" tabindex="-1"><a class="header-anchor" href="#段前缀的使用" aria-hidden="true">#</a> 段前缀的使用</h2><p>考虑一个问题，如何将内存 ffff:0 ~ ffff:b 单元中的数据复制到 0:200 ~ 0:20b 单元中？</p><p>需要考虑以下几点：</p><ol><li>0:200 ~ 0:20b 其实就是 200:0 ~ 200:b ，这就是对同一段内存空间的两种不同的描述。</li><li>上面是两段不同的内存空间，所以需要两个段基址，通过一个寄存器 dl 来进行中转，把 ffff:0 ~ ffff:b 地址空间的数据复制到 dl 中，然后把 dl 中的数据再复制到 0:200 ~ 0:20b 中。</li><li>一共复制 (b - 0) + 1 = 12 次。</li></ol><p>开码！</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>assume cs:code
code segment

 mov ax,0ffffh
 mov ds,ax
 
 mov ax,200h
 mov es,ax

 mov bx,0
 mov cx,12

s: mov dl,ds:[bx]
 mov es:[bx],dl
 inc dl

 loop s
 
 mov ax,4c00h
 int 21h

code ends
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可以看到，我们显示使用了两种段前缀 ds 和 es ，这就是一个段前缀的使用案例。</p><p>我们分别将 0ffffh 和 200h 赋给了 ds 和 es 寄存器，然后设置 cx 循环次数为 12 次，<code>s</code> 是一个伪指令，表示循环的开始处，每个循环中都会把 0ffff:[bx] 中的数据赋值给 dl ，因为这是一个内存地址，所以使用 8 位寄存器就可以接收，然后将 dl 中的数据赋值给 200:[bx] 处，再执行循环。</p>`,67),l=[n];function v(m,r){return s(),a("div",null,l)}const b=e(d,[["render",v],["__file","assembly06-segment.html.vue"]]);export{b as default};
