import{_ as s}from"./nerwork-layer-protocol-p2ZOmYy4.js";import{_ as a,r as l,o as p,c as g,a as t,b as o,d as r,w as c,f as P,e}from"./app-3RcBQnkC.js";const d={},h=e('<h2 id="osi-七层模型" tabindex="-1"><a class="header-anchor" href="#osi-七层模型" aria-hidden="true">#</a> OSI 七层模型</h2><p><strong>OSI 七层模型</strong> 是国际标准化组织提出一个网络分层模型，其大体结构以及每一层提供的功能如下图所示：</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/osi-7-model.png" alt="OSI 七层模型"></p><p>每一层都专注做一件事情，并且每一层都需要使用下一层提供的功能比如传输层需要使用网络层提供的路由和寻址功能，这样传输层才知道把数据传输到哪里去。</p><p><strong>OSI 的七层体系结构概念清楚，理论也很完整，但是它比较复杂而且不实用，而且有些功能在多个层中重复出现。</strong></p><p>上面这种图可能比较抽象，再来一个比较生动的图片。下面这个图片是我在国外的一个网站上看到的，非常赞！</p><p><img src="https://oss.javaguide.cn/github/javaguide/osi七层模型2.png" alt="osi七层模型2"></p><p><strong>既然 OSI 七层模型这么厉害，为什么干不过 TCP/IP 四 层模型呢？</strong></p><p>的确，OSI 七层模型当时一直被一些大公司甚至一些国家政府支持。这样的背景下，为什么会失败呢？我觉得主要有下面几方面原因：</p><ol><li>OSI 的专家缺乏实际经验，他们在完成 OSI 标准时缺乏商业驱动力</li><li>OSI 的协议实现起来过分复杂，而且运行效率很低</li><li>OSI 制定标准的周期太长，因而使得按 OSI 标准生产的设备无法及时进入市场（20 世纪 90 年代初期，虽然整套的 OSI 国际标准都已经制定出来，但基于 TCP/IP 的互联网已经抢先在全球相当大的范围成功运行了）</li><li>OSI 的层次划分不太合理，有些功能在多个层次中重复出现。</li></ol><p>OSI 七层模型虽然失败了，但是却提供了很多不错的理论基础。为了更好地去了解网络分层，OSI 七层模型还是非常有必要学习的。</p><p>最后再分享一个关于 OSI 七层模型非常不错的总结图片！</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/osi-model-detail.png" alt=""></p><h2 id="tcp-ip-四层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-四层模型" aria-hidden="true">#</a> TCP/IP 四层模型</h2><p><strong>TCP/IP 四层模型</strong> 是目前被广泛采用的一种模型,我们可以将 TCP / IP 模型看作是 OSI 七层模型的精简版本，由以下 4 层组成：</p><ol><li>应用层</li><li>传输层</li><li>网络层</li><li>网络接口层</li></ol><p>需要注意的是，我们并不能将 TCP/IP 四层模型 和 OSI 七层模型完全精确地匹配起来，不过可以简单将两者对应起来，如下图所示：</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/tcp-ip-4-model.png" alt="TCP/IP 四层模型"></p><h3 id="应用层-application-layer" tabindex="-1"><a class="header-anchor" href="#应用层-application-layer" aria-hidden="true">#</a> 应用层（Application layer）</h3><p><strong>应用层位于传输层之上，主要提供两个终端设备上的应用程序之间信息交换的服务，它定义了信息交换的格式，消息会交给下一层传输层来传输。</strong> 我们把应用层交互的数据单元称为报文。</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/network-five-layer-sample-diagram.png" alt=""></p><p>应用层协议定义了网络通信规则，对于不同的网络应用需要不同的应用层协议。在互联网中应用层协议很多，如支持 Web 应用的 HTTP 协议，支持电子邮件的 SMTP 协议等等。</p><p><strong>应用层常见协议</strong>：</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/application-layer-protocol.png" alt="应用层常见协议"></p><ul><li><strong>HTTP（Hypertext Transfer Protocol，超文本传输协议）</strong>：基于 TCP 协议，是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li><li><strong>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</strong>：基于 TCP 协议，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP（邮件接收协议）</strong>：基于 TCP 协议，两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>FTP（File Transfer Protocol，文件传输协议）</strong> : 基于 TCP 协议，是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>Telnet（远程登陆协议）</strong>：基于 TCP 协议，用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH（Secure Shell Protocol，安全的网络传输协议）</strong>：基于 TCP 协议，通过加密和认证机制实现安全的访问和文件传输等业务</li><li><strong>RTP（Real-time Transport Protocol，实时传输协议）</strong>：通常基于 UDP 协议，但也支持 TCP 协议。它提供了端到端的实时传输数据的功能，但不包含资源预留存、不保证实时传输质量，这些功能由 WebRTC 实现。</li><li><strong>DNS（Domain Name System，域名管理系统）</strong>: 基于 UDP 协议，用于解决域名和 IP 地址的映射问题。</li></ul>',25),u=e('<h3 id="传输层-transport-layer" tabindex="-1"><a class="header-anchor" href="#传输层-transport-layer" aria-hidden="true">#</a> 传输层（Transport layer）</h3><p><strong>传输层的主要任务就是负责向两台终端设备进程之间的通信提供通用的数据传输服务。</strong> 应用进程利用该服务传送应用层报文。“通用的”是指并不针对某一个特定的网络应用，而是多种应用可以使用同一个运输层服务。</p><p><strong>传输层常见协议</strong>：</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/transport-layer-protocol.png" alt="传输层常见协议"></p><ul><li><strong>TCP（Transmisson Control Protocol，传输控制协议 ）</strong>：提供 <strong>面向连接</strong> 的，<strong>可靠</strong> 的数据传输服务。</li><li><strong>UDP（User Datagram Protocol，用户数据协议）</strong>：提供 <strong>无连接</strong> 的，<strong>尽最大努力</strong> 的数据传输服务（不保证数据传输的可靠性），简单高效。</li></ul><h3 id="网络层-network-layer" tabindex="-1"><a class="header-anchor" href="#网络层-network-layer" aria-hidden="true">#</a> 网络层（Network layer）</h3><p><strong>网络层负责为分组交换网上的不同主机提供通信服务。</strong> 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。在 TCP/IP 体系结构中，由于网络层使用 IP 协议，因此分组也叫 IP 数据报，简称数据报。</p><p>⚠️ 注意：<strong>不要把运输层的“用户数据报 UDP”和网络层的“IP 数据报”弄混</strong>。</p><p><strong>网络层的还有一个任务就是选择合适的路由，使源主机运输层所传下来的分组，能通过网络层中的路由器找到目的主机。</strong></p><p>这里强调指出，网络层中的“网络”二字已经不是我们通常谈到的具体网络，而是指计算机网络体系结构模型中第三层的名称。</p><p>互联网是由大量的异构（heterogeneous）网络通过路由器（router）相互连接起来的。互联网使用的网络层协议是无连接的网际协议（Internet Protocol）和许多路由选择协议，因此互联网的网络层也叫做 <strong>网际层</strong> 或 <strong>IP 层</strong>。</p><p><strong>网络层常见协议</strong>：</p><p><img src="'+s+'" alt="网络层常见协议"></p><ul><li><strong>IP（Internet Protocol，网际协议）</strong>：TCP/IP 协议中最重要的协议之一，主要作用是定义数据包的格式、对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。目前 IP 协议主要分为两种，一种是过去的 IPv4，另一种是较新的 IPv6，目前这两种协议都在使用，但后者已经被提议来取代前者。</li><li><strong>ARP（Address Resolution Protocol，地址解析协议）</strong>：ARP 协议解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li><li><strong>ICMP（Internet Control Message Protocol，互联网控制报文协议）</strong>：一种用于传输网络状态和错误消息的协议，常用于网络诊断和故障排除。例如，Ping 工具就使用了 ICMP 协议来测试网络连通性。</li><li><strong>NAT（Network Address Translation，网络地址转换协议）</strong>：NAT 协议的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。</li><li><strong>OSPF（Open Shortest Path First，开放式最短路径优先）</strong> ）：一种内部网关协议（Interior Gateway Protocol，IGP），也是广泛使用的一种动态路由协议，基于链路状态算法，考虑了链路的带宽、延迟等因素来选择最佳路径。</li><li><strong>RIP(Routing Information Protocol，路由信息协议）</strong>：一种内部网关协议（Interior Gateway Protocol，IGP），也是一种动态路由协议，基于距离向量算法，使用固定的跳数作为度量标准，选择跳数最少的路径作为最佳路径。</li><li><strong>BGP（Border Gateway Protocol，边界网关协议）</strong>：一种用来在路由选择域之间交换网络层可达性信息（Network Layer Reachability Information，NLRI）的路由选择协议，具有高度的灵活性和可扩展性。</li></ul><h3 id="网络接口层-network-interface-layer" tabindex="-1"><a class="header-anchor" href="#网络接口层-network-interface-layer" aria-hidden="true">#</a> 网络接口层（Network interface layer）</h3><p>我们可以把网络接口层看作是数据链路层和物理层的合体。</p><ol><li>数据链路层(data link layer)通常简称为链路层（ 两台主机之间的数据传输，总是在一段一段的链路上传送的）。<strong>数据链路层的作用是将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如同步信息，地址信息，差错控制等）。</strong></li><li><strong>物理层的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异</strong></li></ol><p>网络接口层重要功能和协议如下图所示：</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/network-interface-layer-protocol.png" alt="网络接口层重要功能和协议"></p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>简单总结一下每一层包含的协议和核心技术:</p><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/network-protocol-overview.png" alt="TCP/IP 各层协议概览"></p><p><strong>应用层协议</strong> :</p><ul><li>HTTP（Hypertext Transfer Protocol，超文本传输协议）</li><li>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</li><li>POP3/IMAP（邮件接收协议）</li><li>FTP（File Transfer Protocol，文件传输协议）</li><li>Telnet（远程登陆协议）</li><li>SSH（Secure Shell Protocol，安全的网络传输协议）</li><li>RTP（Real-time Transport Protocol，实时传输协议）</li><li>DNS（Domain Name System，域名管理系统）</li><li>……</li></ul><p><strong>传输层协议</strong> :</p><ul><li>TCP 协议 <ul><li>报文段结构</li><li>可靠数据传输</li><li>流量控制</li><li>拥塞控制</li></ul></li><li>UDP 协议 <ul><li>报文段结构</li><li>RDT（可靠数据传输协议）</li></ul></li></ul><p><strong>网络层协议</strong> :</p><ul><li>IP（Internet Protocol，网际协议）</li><li>ARP（Address Resolution Protocol，地址解析协议）</li><li>ICMP 协议（控制报文协议，用于发送控制消息）</li><li>NAT（Network Address Translation，网络地址转换协议）</li><li>OSPF（Open Shortest Path First，开放式最短路径优先）</li><li>RIP(Routing Information Protocol，路由信息协议）</li><li>BGP（Border Gateway Protocol，边界网关协议）</li><li>……</li></ul><p><strong>网络接口层</strong> :</p><ul><li>差错检测技术</li><li>多路访问协议（信道复用技术）</li><li>CSMA/CD 协议</li><li>MAC 协议</li><li>以太网技术</li><li>……</li></ul><h2 id="网络分层的原因" tabindex="-1"><a class="header-anchor" href="#网络分层的原因" aria-hidden="true">#</a> 网络分层的原因</h2><p>在这篇文章的最后，我想聊聊：“为什么网络要分层？”。</p><p>说到分层，我们先从我们平时使用框架开发一个后台程序来说，我们往往会按照每一层做不同的事情的原则将系统分为三层（复杂的系统分层会更多）:</p><ol><li>Repository（数据库操作）</li><li>Service（业务操作）</li><li>Controller（前后端数据交互）</li></ol><p><strong>复杂的系统需要分层，因为每一层都需要专注于一类事情。网络分层的原因也是一样，每一层只专注于做一类事情。</strong></p><p>好了，再来说回：“为什么网络要分层？”。我觉得主要有 3 方面的原因：</p><ol><li><strong>各层之间相互独立</strong>：各层之间相互独立，各层之间不需要关心其他层是如何实现的，只需要知道自己如何调用下层提供好的功能就可以了（可以简单理解为接口调用）<strong>。这个和我们对开发时系统进行分层是一个道理。</strong></li><li><strong>提高了整体灵活性</strong>：每一层都可以使用最适合的技术来实现，你只需要保证你提供的功能以及暴露的接口的规则没有改变就行了。<strong>这个和我们平时开发系统的时候要求的高内聚、低耦合的原则也是可以对应上的。</strong></li><li><strong>大问题化小</strong>：分层可以将复杂的网络问题分解为许多比较小的、界线比较清晰简单的小问题来处理和解决。这样使得复杂的计算机网络系统变得易于设计，实现和标准化。 <strong>这个和我们平时开发的时候，一般会将系统功能分解，然后将复杂的问题分解为容易理解的更小的问题是相对应的，这些较小的问题具有更好的边界（目标和接口）定义。</strong></li></ol><p>我想到了计算机世界非常非常有名的一句话，这里分享一下：</p><blockquote><p>计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决，计算机整个体系从上到下都是按照严格的层次结构设计的。</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',40),I={href:"https://fiberbit.com.tw/tcpip-model-vs-osi-model/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docs.oracle.com/cd/E19683-01/806-4075/ipov-32/index.html",target:"_blank",rel:"noopener noreferrer"};function m(S,b){const n=l("RouterLink"),i=l("ExternalLinkIcon");return p(),g("div",null,[h,t("p",null,[o("关于这些协议的详细介绍请看 "),r(n,{to:"/JavaGuide/cs-basics/network/application-layer-protocol.html"},{default:c(()=>[o("应用层常见协议总结（应用层）")]),_:1}),o(" 这篇文章。")]),u,t("ul",null,[t("li",null,[o("TCP/IP model vs OSI model："),t("a",I,[o("https://fiberbit.com.tw/tcpip-model-vs-osi-model/"),r(i)])]),t("li",null,[o("Data Encapsulation and the TCP/IP Protocol Stack："),t("a",T,[o("https://docs.oracle.com/cd/E19683-01/806-4075/ipov-32/index.html"),r(i)])])]),P(" @include: @article-footer.snippet.md ")])}const k=a(d,[["render",m],["__file","osi-and-tcp-ip-model.html.vue"]]);export{k as default};
