import{_ as e,o as p,c,e as o}from"./app-3RcBQnkC.js";const t={},s=o('<h1 id="内存为什么要分段" tabindex="-1"><a class="header-anchor" href="#内存为什么要分段" aria-hidden="true">#</a> 内存为什么要分段？</h1><p>首先先来看一下内存的结构吧，如下图所示</p><p><img src="https://www.cxuan.vip/image-20230403203102860.png" alt=""></p><p>这是一段内存，从下向上内存地址依次升高。由于内存是随机读写设备，在进行内存访问时，可以访问任意的内存地址，不需要从头开始访问。比如 CPU 想要访问 0x03 这个内存地址中的数据，只需要将 0x03 这个内存地址写入总线即可送入内存，访问数据送回 CPU。</p><p>这种访问方式本来没什么问题，那么好端端的内存为啥要搞个分段呢？</p><p>分段是从 8086 CPU 开始的，由于在 8086 那个年代，CPU 和寄存器都是 16 位的，所以计算机还是很昂贵的设备，16 位的寄存器意味着只能寻址 2 ^ 16 次方的，即 65536 字节，64 KB 。那时的计算机还没有虚拟地址的概念，任何内存访问都访问的是实实在在的物理地址。</p><p>若要加载程序时，不论是内核程序还是用户程序，程序中的地址都是物理地址，那么这个程序必须固定在内存中的某个地方不会动，这样就可能会存在编译出来两个相同的内存地址，程序只能运行其中一个。针对这种情况，计算机设计人员提出了<strong>分段</strong>的概念。</p><p>分段的本质是让 CPU 采用了<strong>段基址 + 段内偏移</strong>的方式来访问任意位置的内存。每个应用程序访问的物理地址都会经过<code>重定位</code>，虽然都是访问物理地址，但是不同应用程序编译出来访问物理地址却是不同的。</p><p>假设有两个程序，每个大小各为 16 KB</p><p><img src="https://www.cxuan.vip/1515111-20200309131954335-216045779.png" alt=""></p><p>从图上可以看出，这是两个不同的 16KB 程序的装载过程，a 程序首先会跳转到地址 24，那里是一条 <code>MOV</code> 指令，然而 b 程序会首先跳转到地址 28，地址 28 是一条 <code>CMP</code> 指令。这是两个程序被<code>先后</code>加载到内存中的情况，假如这两个程序被同时加载到内存中并且从 0 地址处开始执行，内存的状态就如上面 c 图所示，程序装载完成开始运行，第一个程序首先从 0 地址处开始运行，执行 JMP 24 指令，然后依次执行后面的指令（许多指令没有画出），一段时间后第一个程序执行完毕，然后开始执行第二个程序。第二个程序的第一条指令是 28，这条指令会使程序跳转到第一个程序的 <code>ADD</code> 处，而不是事先设定好的跳转指令 CMP，由于这种不正确访问，可能会造成程序崩溃。</p><p>重定位就是把每个应用程序的相对物理地址合成为绝对物理地址的过程，这个描述大家能理解吗？</p><p>既然 CPU 要使用段基址 + 段内偏移这种方式来寻址，就必须提供相应的寄存器，段基址用 cs、ds、ss 来表示。程序中需要用到哪部分内存，就直接用段基址定位所在的段，然后给出段内偏移即可找到物理地址。</p><p>如上图所示，假如想访问 0x04 地址，那么各应用程序可以给出不同的内存访问方式：段地址为 0x00 ，偏移地址为 0x04，段地址为 0x01，偏移地址为 0x03，段地址为 0x02，偏移地址为 0x02，段地址为 0x03 ，偏移地址为 0x01 ，段地址为 0x04，偏移地址为 0 ，所以，分段后的程序如果想要访问任意内存位置，只需给出段地址 + 偏移地址即可，这是很重要的一个概念。</p>',14),n=[s];function a(d,r){return p(),c("div",null,n)}const h=e(t,[["render",a],["__file","whymemoryshouldsegment.html.vue"]]);export{h as default};
