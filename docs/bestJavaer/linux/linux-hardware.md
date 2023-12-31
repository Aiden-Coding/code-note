# Linux 硬件环境和 BIOS

* [Linux 硬件环境和 BIOS](#linux-硬件环境和-bios)
   * [硬件构成](#硬件构成)
      * [IO 端口寻址和访问](#io-端口寻址和访问)
      * [IO 数据传输的三种方式](#io-数据传输的三种方式)
   * [存储器和 BIOS](#存储器和-bios)
      * [主存](#主存)
      * [BIOS](#bios)
      * [计算机启动过程](#计算机启动过程)
   * [总结](#总结)

我们大家知道，计算机其实就是硬件和软件的集合体，硬件和软件相互依存缺一不可。硬件是计算机实实在在看得见摸得着的实体部分，而软件是存在于硬件之上，是控制硬件的一系列指令流。

操作系统是一种软件，虽然是软件，但是操作系统却是和硬件关系非常密切的一类。其他软件都可以理解是运行在操作系统之上的一类软件。如果想要彻底理解操作系统运行的全过程，就需要了解它的硬件结构和硬件基础。

这篇文章会和大家聊聊以 Linux 0.11 为背景下的硬件基础，我们主要说明基于 Intel 80x86 的 IBM PC 微型计算机极其兼容机的计算机系统。

>一般我们说的 PC/AT 指的就是 80386 或以上 CPU 的 IBM PC 极其兼容机，而 PC 用来泛指所有微机，包括IBM PC/XT 极其兼容微机。

## 硬件构成

一个传统的计算机硬件组成结构如下图所示：

![](https://www.cxuan.vip/image-20230130093943068.png)

从概念上来看，一台简单的个人电脑可以被抽象为上面这种相似的模型，CPU、内存、I/O 设备都和总线串联起来并通过总线与其他设备进行通信。图中上部控制器和存储器接口都被集成在计算机主板上，这些控制器分别是以一块大规模集成电路芯片为主组成的电路。当然现代操作系统有着更为复杂的结构，会设计很多条总线，我们稍后会看到。暂时来讲，这个模型能够满足我们的讨论。

**CPU**

CPU 是计算机的大脑，它也是整个计算机的核心，CPU 的内部包含有寄存器，而寄存器是用于存储指令和数据的，汇编语言的本质也就是 CPU 内部操作数所执行的一系列计算。

**存储器（内存）**

没有存储器，计算机就像是一个没有记忆的人类，只会永无休止的重复性劳动。CPU 所需的指令和数据都由存储器 - 内存来提供，CPU 指令经由内存提供，经过一系列计算后再输出到内存。

**磁盘**

磁盘也是一种存储设备，它和内存的最大区别在于永久存储，程序需要在内存装载后才能运行，而提供给内存的程序都是由磁盘存储的。

**控制器**

控制器就是一些控制设备的统称，比如中断控制器、DMA 控制器、键盘鼠标控制器等。

**总线**

一般来说，内存内部会划分多个存储单元，存储单元用来存储指令和数据，就像是房子一样，存储单元就是房子的门牌号。而 CPU 与存储器、控制器之间的交互是通过地址总线来进行的，总线从逻辑上分为三种：地址线、数据线和控制线。

![](https://www.cxuan.vip/image-20230811104003298.png)

总线会插在总线插槽中，而这些总线插槽（也叫总线接口）有各种各样的标准：通常有工业接口标准结构 ISA（Industry Standard Architecture）总线、扩展工业标准结构总线 EISA（Extend ISA）、外围组件互连 PCI（Peripheral Component interconnect）总线、加速图形端口 AGP（Accelerated Graphics Port）、视频总线 等。这些总线接口的主要区别在于**数据传输速率**和**控制灵活性**方面。

不过随着计算机的发展，传输速率更高，控制更灵活的总线接口在不断推出，比如使用串行接口总线的 PCIE（PCI Express）总线。

>这其实是三代计算机总线的发展历史，一代是 ISA EISA，二代总线是 PCI ，三代是 PCIE。

另外，在最早的计算机中，是有控制卡这个硬件的，比如显示器控制卡、打印机控制卡、软驱控制卡，不过随着计算机的发展，这些单独的控制卡都被集成在了计算机主板上的几个超大规模集成电路芯片中。为了让系统的不同部分都能达到最高的传输效率，总线结构也发生了很大改变。现代 PC 机的组成结构大致如下。

![](https://www.cxuan.vip/image-20230808234014662.png)

现代 PC 机的主板主要使用两个超大规模芯片构成的芯片组和芯片集，分为北桥（Northbridge）和南桥（Southbridge）芯片。北桥芯片主要用于 AGP 接口、与 CPU 交互和内存接口。除此之外还用于控制内存，因此 Intel 将其标注为 MCH（Memory Controller Hub），北桥芯片因此传输速率比较高。

相对的，南桥芯片传输速率比较低，南桥芯片用于管理中低速的组件，比如 PCI 总线、硬盘接口、USB 端口等。Intel 将其称为 ICH（IO Controller Hub）。

### IO 端口寻址和访问

大伙可以想象一个场景，把你自身缩小化无数倍然后置身于机箱内，你会看到无数个总线互联，无数个时钟周期内 CPU 和各种存储器外设的交互，那么 CPU 是如何和这些组件进行交互的呢？

我们要出门前通常会思考两件事情：去哪里以及如何去。CPU 为了实现和组件进行通信也是这样，CPU 通过总线把这些组件连接起来，所以传输媒介就是总线，CPU 还需要知道去哪里，这就需要知道这些组件的`地址`。地址分为两类，一种是存储器的地址，比如内存地址。一种是外设的地址，称为 IO 端口地址或者简称端口。

IO 端口地址的编制方法一般有两种方式：**统一编址和独立编址**。

端口统一编址的方式就是将 IO 控制器中的端口地址归纳入存储器寻址地址空间范围内，这种方式也称为存储器映像编址，说白了就是把端口的地址归为内存的一部分，CPU 通过对内存进行读写来达到对端口读写的目的。比如说外设 0x1000 ~ 0x1fff 这段内存空间是输入外设映射过来的，那么你对这段内存空间写入数据，经过总线传输后给外设，实现对外设的读写。这段地址空间就称作是 IO 地址空间。业界也叫这种映射方式为内存映射。

IBM PC 机及其兼容微机主要使用的是独立编址的方式，采用了一个独立的 IO 地址空间对设备中的寄存器进行寻址和访问。使用 ISA 总线结构的传统 PC 机其 IO 地址空间范围是 0x000 ~ 0x3FF，一般有 1024 个端口地址可以使用。关于这些端口和外设的映射表如下：

| 端口地址范围    | 说明                            |
| --------------- | ------------------------------- |
| 0x000 --- 0x01F | 8237A DMA 控制器 1              |
| 0x020 --- 0x03F | 8259A 可编程中断控制器 1        |
| 0x040 --- 0x05F | 8253/8254A 定时计数器           |
| 0x060 --- 0x06F | 8042 键盘控制器                 |
| 0x070 --- 0x07F | 访问 CMOS RAM 实时时钟 RTC 端口 |
| 0x080 -- 0x09F  | DMA 页面寄存器访问端口          |
| 0x0A0 -- 0x0BF  | 8259A 可编程中断控制器 2        |
| 0x0C0 -- 0x0DF  | 8237A DMA 控制器 2              |
| 0x0F0 -- 0x0FF  | 协处理器访问端口                |
| 0x170 -- 0x177  | IDE 硬盘控制器 1                |
| 0x1F0 -- 0x1F7  | IDE 硬盘控制器 0                |
| 0x278 -- 0x27F  | 并行打印机端口 2                |
| 0x2F8 -- 0x2FF  | 串行控制器 2                    |
| 0x378 -- 0x37F  | 并行打印机端口 1                |
| 0x3B0 -- 0x3BF  | 单色 MDA 显示控制器             |
| 0x3C0 -- 0x3CF  | 彩色 VGA 显示控制器             |
| 0x3D0 -- 0x3DF  | 彩色 EGA/VGA 显示控制器         |
| 0x3F0 -- 0x3F7  | 软盘控制器                      |
| 0x3F8 -- 0x3FF  | 串行控制器 1                    |

CPU通过设立专门的 I/O 指令，比如 x86 中的 in 就是写入，out 就是读出，这种方式来访问这一空间中的地址单元（也即 I/O端口）。这种方式有个缺点，就是需要专门的汇编语言才能处理。

### IO 数据传输的三种方式

一般 IO 对数据进行传输有三种方式：**循环查询方式、中断处理方式和 DMA 传输方式**。

**循环查询方式（Programmed IO）** ：是指 CPU 通过在程序中循环查询指定设备控制器的状态来判断是否能够与其进行数据交换。这种方式不需要通过硬件的支持，使用和编程比较简单，缺点是比较耗费 CPU 资源。因此除非在多任务操作系统中需要等待极短的时间，否则不应该使用此方式。很像 Java 关键字 synchronized 的自旋锁。

**中断处理方式（Interrupt IO）**：由于上述的方式会让 CPU 处于不必要的繁忙之中，所以出现了中断驱动的方法，通过中断功能和特殊命令来通知接口，只要 I/O 设备有了需要的数据，便会发出中断请求信号给 CPU，CPU 才会给当前任务进行快照后执行 IO 操作，CPU 通过通过使用中断向量表来寻址中断服务程序的入口地址。因此采用中断处理方式的话，首先要设置好中断向量表 IDT 表，并编写好相应的中断处理程序。Linux 操作系统中大多数设备 IO 采用的都是这种方式。

**DMA 传输方式（Direct Memory Access）**：前面两种方式都需要 CPU 的直接参与，而 DMA 不需要 CPU 的参与，DMA 顾名思义就是直接内存传输，也就是内存能够直接和 IO 进行传输，当然需要专用的 DMA 控制器来完成，这中间无需 CPU 干预。使用 DMA 方式效率比较高，在 Linux 操作系统中，软盘驱动程序使用中断和 DMA 的方式来配合实现数据的传输工作。

## 存储器和 BIOS

### 主存

在很早的时候，也就是 DOS 操作系统流行的那个年代，640K 或者 1MB 的内存容量基本上就能够满足普通应用程序的运行。随着计算机的不断发展，内存容量也在急剧扩大，现在 16G 内存空间都有些无法满足。不过在 Linux 的那个时候，PC/AT 计算机通常使用 512 M 的内存和 Intel 32 位 CPU，CPU 的寻址能力达到了 4GB。为了保证能够向下兼容，系统 1MB 以下物理内存使用分配上仍然与原来的 PC 保持一致。

![](https://www.cxuan.vip/image-20230811104403769.png)

当计算机开机上电时，物理内存被设置为从 0 开始连续的区域。除了地址从 0xA0000 到 0xFFFFF（640K 到 1M 共 384 K）和 0xFFFFE000 到 0xFFFFFFFF（4G 处最后一 64K）范围以外的所有内存都可用做系统内存。

这两个特定的部分用于 IO 设备和 BIOS 程序。

给大家举个例子，假如计算机有 2G 的内存，下面是内存空间分配情况：

0 - 640K 用于存放内核代码和数据，从 0xA0000 开始的 128 K 用于显示内存缓冲区，随后的其他部分用于控制卡的 ROM BIOS 或其映射区域，而 0xF0000 -> 1M（0xFFFFF） 的范围用于高端系统的 ROM BIOS 映射区，从 1M 到 2G 用作可分配的主存区。

### BIOS

BIOS 的全称是 Basic Input/Output System，基本的输入输出系统，它是计算机加电是首先要执行的自检系统。

BIOS 启动时会进行下面这些检查：

1. 自检（POST）：BIOS 会进行自检以确保主板、内存、显卡、硬盘等硬件是否能够正常工作。
2. 启动设备检测：BIOS 会检测可用的启动设备，例如硬盘、光驱、USB 设备等，并按照预设的启动顺序来寻找可启动的操作系统。
3. CMOS 检查：BIOS 会读取 CMOS 芯片中保存的配置信息，包括系统时间、硬件设置等，并根据这些信息进行相应的配置。
4. 引导加载程序检查：BIOS 会加载引导加载程序（Bootloader），该程序负责引导操作系统的加载和启动。
5. 硬件设备初始化：BIOS 会初始化各个硬件设备，包括设置硬盘参数、检测和初始化外部设备等。

>什么是 CMOS 存储器：在 PC/AT 机中，除了需要使用内存等存储器保存计算机常用信息之外，往往还需要一块很小的容量（往往是 64 或 128 字节）来存储计算机的实时时钟信息和系统硬件配置信息，这块很小的容量就是 CMOS（Complementary Metal Oxide Semiconductor，互补金属氧化物半导体）。这部分内存通常和实时时钟芯片集成在一块。它也是一块集成电路。

准备工作做完后，BIOS 的工作基本上就完结了，Linux 操作系统运行时并不会使用 BIOS 中的功能，总的来说，BIOS 主要负责硬件设备的检测和初始化，以及启动操作系统的准备工作。

### 计算机启动过程

当我们按下电源键的开关时，电源会马上给主板上的硬件设备开始供电，此时电压还不算稳，所以主板上的控制芯片组会给 CPU 发出一个 RESET（重置）信号，让 CPU 内部自动恢复到初始状态下，当控制芯片组检测到电源处于平稳状态下后（从不稳定到稳定状态只需一个瞬间），芯片组开始撤回 RESET 信号。

CPU 首先会把代码段寄存器 CS 设置为 0xF000，其段基地址被设置为 0xFFFF0000，段长度设置为 64KB。故 IP 被设置为 0xFFF0（注意这里还不能使用 CS:IP 来寻址，因为此时还没有完全进入实模式），此时 CPU 指针指向 0xFFFFFFF0 处，这是 4G 空间的最后一个 16KB 处，也就是 ROM BIOS 所存放的位置。

![](https://www.cxuan.vip/image-20230814080957306.png)

BIOS 启动后，首先会进行 Power-On-Self-Test ，也就是开机自检（见上面 BIOS 流程检查操作）。ROM BIOS 这里会有一条 JMP 指令，所以当 CPU 执行到这里的时候，会执行 JMP 指令进行跳转，这里是 JMP 到 BIOS 代码 64 KB 范围内某一条指令开始执行。

>由于目前 PC/AT 微机中 BIOS 容量为 1MB - 2MB ，并存储在闪存（Flash Memory）ROM 中，因此为了能够执行或者访问 BIOS 中超过 64 KB 范围并且又远远不在 0 - 1MB 地址空间中其他 BIOS 代码和数据，BIOS 会使用一种 32 位大模式，这样就能够在 0 - 4 GB 内访问数据。

在 BIOS 执行完一系列的自检之后，就会把与原来 PC 机兼容的 64 KB BIOS 代码和数据复制到内存低端 1M 末端的 64 KB 处，然后跳转到这里并让 CPU 真正进入`实模式`开始工作。

![](https://www.cxuan.vip/image-20230814153721778.png)

硬件自检结束后，BIOS 会将控制转移权交给下一阶段的启动程序，这个时候 BIOS 需要知道下一阶段启动程序在哪，这也就是我们常说的 BIOS 启动顺序，排在第一位就是优先需要移交的程序，启动顺序可以修改。

BIOS 按照设定好的启动顺序将控制权交给第一位的存储设备，然后从该设备中读出 MBR ，并将程序放在 0x7c00 处的内存地址中。

>0x7c00 这个地址是 IBM 机器的历史遗留问题，它是指 32 KB内存的最后 1024 字节处。

>MBR ：Master Boot Record，主引导记录，位于存储设备中的 0 磁道 1 扇区，磁盘最前面的 512 字节。

如果这 512 个字节的最后两个字节是 0x55 和 0xAA，表明这个设备可以用于启动；如果不是，表明设备不能用于启动，BIOS 会继续去找下一个设备，并将控制权转交给启动顺序中的下一个设备。

MBR 很小，只有512字节，它的主要作用是：告诉计算机在哪一个位置去找操作系统。

MBR 记录中会有分区表的记录，分区会有三种管理方式，这里就不再多说了，大家知道这会告诉计算机从哪个分区来启动操作系统就可以了。然后就会把控制权交给操作系统，进行操作系统的 boot ，关于操作系统的 boot 后面会细说。

## 总结

这篇文章主要介绍了 Linux 0.11 的硬件和 BIOS 相关内容。硬件是操作系统运行的基础平台，而 BIOS 则为了操作系统运行提供了环境支持和自检，这两者都是 Linux 操作系统运行非常重要的组成部分。