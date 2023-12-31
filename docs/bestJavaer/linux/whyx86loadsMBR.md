# 为什么 x86 中 BIOS 会把 MBR 放在 0x7c00 地址处？

* [为什么 x86 中 BIOS 会把 MBR 放在 0x7c00 地址处？](#为什么-x86-中-bios-会把-mbr-放在-0x7c00-地址处)
   * [0x7C00 首次出现在 IBM PC 5150 ROM BIOS INT 19h 处理程序中](#0x7c00-首次出现在-ibm-pc-5150-rom-bios-int-19h-处理程序中)
   * [0x7c00 的起源](#0x7c00-的起源)
      * [为什么 CPU Monitor 要把 bootloader 加载到 0x200 ?](#为什么-cpu-monitor-要把-bootloader-加载到-0x200-)
   * [谁决定了 0x7c00?](#谁决定了-0x7c00)

这是一个很值得拿来探讨一下的问题。

为什么 x86 中 BIOS 会把 MBR 放在 0x7c00 这个地址上呢？针对这个问题，你可能有两个疑惑点：

> 我读过所有的 x86 程序开发手册，但是都没有找到 0x7c00 这个魔数。

首先 0x7c00 这个魔数和 x86 CPU 无关，所以你在 intel 特定的 CPU 手册里面找不到也能说得通。然后你会好奇，那是谁决定了这个数字？

> 0x7c00 是十进制的 32kib - 1024b，这个数字是什么意思？

其实任何人都可以决定这个数字，但是，问题的关键是为什么会选择一个这样中间的地址？

所以现在围绕 0x7c00 就有两个需要讨论的问题

>1. 谁决定了 0x7c00 这个数字
>2. 0x7c00 = 32 kib - 1024b 是什么意思？ 

问题需要追溯到 IBM PC 5150 了，它是 x86 的祖先！

## 0x7C00 首次出现在 IBM PC 5150 ROM BIOS INT 19h 处理程序中

如果你了解过 x86 的历史，那么你就会知道 IBM PC 5150是 x86（32位）IBM PC/AT 的祖先。这款电脑于 1981 年 8 月发布，采用了 8088（16）位和 16 kib RAM 的最低内存型号。BIOS 和 Microsoft BASIC 存储在 ROM 中。

开机上电时，BIOS 会进行 POST 开机自检，然后调用 INT 19h 中断。在 INT 19 h 中断例程中，BIOS 会检查从哪里启动操作系统，是从硬盘，软盘还是固定磁盘。如果计算机有任何可用的磁盘，BIOS 就会将磁盘的第一个扇区 512 字节加载到 0x7c00 处。

所以你现在知道了为什么在 x86 文档中找不到这个神奇的数字了，因为这个数字属于 BIOS 规范。

## 0x7c00 的起源

SCP（一家公司）的 “86-DOS”（1980年）是 IBM PC DOS 1.0 的参考操作系统。86-DOS（最早叫 QDOS）是适用于 8086/8088 CPU 的 CP/M 兼容操作系统。在 1979 年，Digital Research Inc（数字搜索公司）还没有开发出 8086/8088 CPU 的 CP/M 操作系统。

>其实 Digital Research Inc 这家公司本来有机会能在计算机高速发展的年代占据先机，但是碍于其目光短浅最后败给了微软。
>
>大家知道，当时 Paul Allen 和 Bill Gates 开发出来了 BASIC 解释器并成立了微软公司，1980年10月，IBM公司决定推出基于Intel 8086芯片的PC。它找到 Digital Research 公司，要求获得授权使用 CP/M 系统。但是协议没有谈成。于是，IBM 又去找微软公司，要求微软为它提供操作系统。
>
>当时，微软没有操作系统产品，但是 Bill Gates 知道 SCP 公司正在开发 QDOS。微软支付2.5万美元给SCP，获得了 QDOS 的使用许可。
>
>后来 Bill Gates 看见了巨大的商机，索性直接把 QDOS 买下来了，于是 QDOS 成为了微软的财产，后来 QDOS 改名为 MS-DOS 。
>
>这段完全是 cxuan 强行拓展的，与正文无关。

SCP 卖了两块 S-100 的板子，第一个是 8086 CPU 的板子，第二个是 "CPU Monitor"的板子。CPU Monitor 程序提供了 bootloader 引导加载器和 debugger 调试器。CPU Monitor 的 bootloader 会把 MBR 加载到 "0x200" ，而非 "0x7c00"，1981年，IBM PC DOS 是 8086/8088 的下一个类似 CP/M 的操作系统。

所以，0x7c00 第一次出现在 IBM PC 5150 ROM BIOS 中，而 SCP 的 CPU Monitor 会将引导程序加载至 0x200 而非 0x7c00 处。

那么问题又来了。。。。。。

### 为什么 CPU Monitor 要把 bootloader 加载到 0x200 ?

关于 0x200 有三个原因：

1. 8086 中断向量使用 0x0 - 0x3FF 。
2. 86 - DOS 会被加载到 0x400 处。
3. 86 - DOS 并不会使用 0x200 - 0x3FF 之间的中断向量。

这些原因意味着 0x200-0x3FF 需要保留，不能妨碍操作系统，无论 86-DOS 或用户应用程序要加载到哪里。

所以 Tim Paterson（86 - DOS 的开发者）选择了 0x200 这个地址作为 MBR 的加载地址。

## 谁决定了 0x7c00?

所以决定 0x7c00 这个地址的是 IBM PC 5150 BIOS 的开发团队 (Dr. David Bradley)。如上所述，这个神奇的数字诞生于1981年，“IBM PC/at Compat” PC/BIOS 供应商没有因为 BIOS 和操作系统的向后兼容性而改变这个值。

也不是 Intel（8086/8088）或者是微软（操作系统厂商）决定的。

##0x7c00 = 32 kib - 1024b 是什么意思？  

IBM PC 5150 最小的内容模型只有 16 kib 的 RAM，所以你可能会有疑问。

> 最小内存型号仅仅 16 kib 能从软盘加载操作系统吗？BIOS 会将 MBR 加载到 32 kib - 1024 b ，但是物理 RAM 显然不够。

这种情况显然缺乏考虑，BM PC 5150 ROM BIOS 开发团队的成员，David Bradley 博士说到：

>DOS 1.0 都需要至少 32 kb，所以我们不用担心尝试以 16 kb 启动。

BIOS 的开发者团队决定使用 0x7c00 这个地址是因为下面几个原因：

1. 他们想要给 32 Kib 操作系统的加载留下足够的空间。
2. 8086/8088 使用 0x0 - 0x3FF 作为中断向量地址，并且 BIOS 的数据区在这个地址后面。
3. boot 引导扇区是 512 字节，引导程序的堆栈/数据区域需要的空间要比 512 字节多。
4. 因此，选择 0x7C00，即 32 KiB的最后 1024B。

一旦操作系统加载并启动，启动扇区将永远不会使用，直到电源重置。因此，操作系统和应用程序可以自由使用32 KiB 的最后1024B。

![](https://www.cxuan.vip/image-20230816220232763.png)

说点人话：

我们可以来计算机一下内存空间的占用情况：

0x0 - 0x3FF 用来做中断向量，所以只剩下 0x400 - 0x7FFF（32 kb） 可用。

为了把更多的内存空间给操作系统，MBR 就被放在了 32 Kib 的尾部，由于一个扇区占用 512 字节，MBR 本身也会产生数据，所以留给 MBR 和其数据区的空间就变为了 1024 字节。

于是 0x7FFF - 1024 + 1 = 0x7c00 。

这就是 0x7C00 的起源和原因，这个神奇的数字在 PC/AT Compat BIOS INT 19h 处理程序中存活了大约三十年。