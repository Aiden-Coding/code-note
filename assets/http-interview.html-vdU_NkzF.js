import{_ as e,o as t,c as a,e as o}from"./app-3RcBQnkC.js";const n={},s=o(`<h1 id="http-常见面试题" tabindex="-1"><a class="header-anchor" href="#http-常见面试题" aria-hidden="true">#</a> HTTP 常见面试题</h1><ul><li><a href="#http-%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98">HTTP 常见面试题</a><ul><li><a href="#http-%E5%92%8C-https-%E7%9A%84%E5%8C%BA%E5%88%AB">HTTP 和 HTTPS 的区别</a></li><li><a href="#http-get-%E5%92%8C-post-%E5%8C%BA%E5%88%AB">HTTP Get 和 Post 区别</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%97%A0%E7%8A%B6%E6%80%81%E5%8D%8F%E8%AE%AEhttp-%E6%98%AF%E6%97%A0%E7%8A%B6%E6%80%81%E5%8D%8F%E8%AE%AE%E5%90%97%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3">什么是无状态协议，HTTP 是无状态协议吗，怎么解决</a></li><li><a href="#udp-%E5%92%8C-tcp-%E7%9A%84%E5%8C%BA%E5%88%AB">UDP 和 TCP 的区别</a><ul><li><a href="#udp-%E6%98%AF%E4%BB%80%E4%B9%88">UDP 是什么</a></li><li><a href="#tcp-%E6%98%AF%E4%BB%80%E4%B9%88">TCP 是什么</a></li><li><a href="#tcp-%E5%92%8C-udp-%E7%9A%84%E4%B8%8D%E5%90%8C">TCP 和 UDP 的不同</a></li></ul></li><li><a href="#tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B">TCP 三次握手和四次挥手</a><ul><li><a href="#tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B">TCP 三次握手</a></li><li><a href="#tcp-%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B">TCP 四次挥手</a></li></ul></li><li><a href="#%E7%AE%80%E8%BF%B0-http101120-%E7%9A%84%E5%8C%BA%E5%88%AB">简述 HTTP1.0/1.1/2.0 的区别</a><ul><li><a href="#http-10">HTTP 1.0</a></li><li><a href="#http-11">HTTP 1.1</a></li><li><a href="#http-20">HTTP 2.0</a></li></ul></li><li><a href="#%E8%AF%B7%E4%BD%A0%E8%AF%B4%E4%B8%80%E4%B8%8B-http-%E5%B8%B8%E8%A7%81%E7%9A%84%E8%AF%B7%E6%B1%82%E5%A4%B4">请你说一下 HTTP 常见的请求头</a><ul><li><a href="#%E9%80%9A%E7%94%A8%E6%A0%87%E5%A4%B4">通用标头</a></li><li><a href="#%E5%AE%9E%E4%BD%93%E6%A0%87%E5%A4%B4">实体标头</a></li><li><a href="#%E8%AF%B7%E6%B1%82%E6%A0%87%E5%A4%B4">请求标头</a></li><li><a href="#%E5%93%8D%E5%BA%94%E6%A0%87%E5%A4%B4">响应标头</a></li></ul></li><li><a href="#%E5%9C%B0%E5%9D%80%E6%A0%8F%E8%BE%93%E5%85%A5-url-%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">地址栏输入 URL 发生了什么</a></li><li><a href="#https-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86">HTTPS 的工作原理</a></li></ul></li></ul><h2 id="http-和-https-的区别" tabindex="-1"><a class="header-anchor" href="#http-和-https-的区别" aria-hidden="true">#</a> HTTP 和 HTTPS 的区别</h2><p>HTTP 是一种 <code>超文本传输协议(Hypertext Transfer Protocol)</code>，<strong>HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范</strong></p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070234931-1546260397.png" alt=""></p><p>HTTP 主要内容分为三部分，<strong>超文本（Hypertext）、传输（Transfer）、协议（Protocol）</strong>。</p><ul><li>超文本就是不单单只是本文，它还可以传输图片、音频、视频，甚至点击文字或图片能够进行<code>超链接</code>的跳转。</li><li>上面这些概念可以统称为数据，传输就是数据需要经过一系列的物理介质从一个端系统传送到另外一个端系统的过程。通常我们把传输数据包的一方称为<code>请求方</code>，把接到二进制数据包的一方称为<code>应答方</code>。</li><li>而协议指的就是是网络中(包括互联网)传递、管理信息的一些规范。如同人与人之间相互交流是需要遵循一定的规矩一样，计算机之间的相互通信需要共同遵守一定的规则，这些规则就称为协议，只不过是网络协议。</li></ul><p>说到 HTTP，不得不提的就是 TCP/IP 网络模型，一般是五层模型。如下图所示</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070245831-867564603.png" alt=""></p><p>但是也可以分为四层，就是<strong>把链路层和物理层都表示为网络接口层</strong></p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070252826-386757517.png" alt=""></p><p>还有一种就是 OSI 七层网络模型，它就是在五层协议之上加了<strong>表示层和会话层</strong></p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070300443-907560535.png" alt=""></p><p>而 HTTPS 的全称是 <code>Hypertext Transfer Protocol Secure</code>，从名称我们可以看出 HTTPS 要比 HTTPS 多了 secure 安全性这个概念，实际上， HTTPS 并不是一个新的应用层协议，它其实就是 HTTP + TLS/SSL 协议组合而成，而安全性的保证正是 TLS/SSL 所做的工作。</p><p>也就是说，<strong>HTTPS 就是身披了一层 SSL 的 HTTP</strong>。</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070308592-242968210.png" alt=""></p><p>那么，HTTP 和 HTTPS 的主要区别是什么呢？</p><ul><li>最简单的，HTTP 在地址栏上的协议是以 <code>http://</code> 开头，而 HTTPS 在地址栏上的协议是以 <code>https://</code> 开头</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//www.cxuanblog.com/</span></span>
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.cxuanblog.com/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>HTTP 是未经安全加密的协议，它的传输过程容易被攻击者监听、数据容易被窃取、发送方和接收方容易被伪造；而 HTTPS 是安全的协议，它通过 <strong>密钥交换算法 - 签名算法 - 对称加密算法 - 摘要算法</strong> 能够解决上面这些问题。</li></ul><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070326006-1741295366.png" alt=""></p><ul><li>HTTP 的默认端口是 80，而 HTTPS 的默认端口是 443。</li></ul><h2 id="http-get-和-post-区别" tabindex="-1"><a class="header-anchor" href="#http-get-和-post-区别" aria-hidden="true">#</a> HTTP Get 和 Post 区别</h2><p>HTTP 中包括许多方法，<strong>Get 和 Post 是 HTTP 中最常用的两个方法</strong>，基本上使用 HTTP 方法中有 99% 都是在使用 Get 方法和 Post 方法，所以有必要我们对这两个方法有更加深刻的认识。</p><ul><li>get 方法一般用于请求，比如你在浏览器地址栏输入 <code>www.cxuanblog.com</code> 其实就是发送了一个 get 请求，它的主要特征是请求服务器返回资源，而 post 方法一般用于 <code>&lt;form&gt; 表单</code>的提交，相当于是把信息提交给服务器，等待服务器作出响应，get 相当于一个是 pull/拉的操作，而 post 相当于是一个 push/推的操作。</li><li>get 方法是不安全的，因为你在发送请求的过程中，你的请求参数会拼在 URL 后面，从而导致容易被攻击者窃取，对你的信息造成破坏和伪造；</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>/test/demo_form.asp?name1=value1&amp;name2=value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而 post 方法是把参数放在请求体 body 中的，这对用户来说不可见。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/test/demo_form.asp</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">w3schools.com</span></span>
name1=value1&amp;name2=value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>get 请求的 URL 有长度限制，而 post 请求会把参数和值放在消息体中，对数据长度没有要求。</p></li><li><p>get 请求会被浏览器主动 cache，而 post 不会，除非手动设置。</p></li><li><p>get 请求在浏览器反复的 <code>回退/前进</code> 操作是无害的，而 post 操作会再次提交表单请求。</p></li><li><p>get 请求在发送过程中会产生一个 TCP 数据包；post 在发送过程中会产生两个 TCP 数据包。对于 get 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）；而对于 post，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。</p></li></ul><h2 id="什么是无状态协议-http-是无状态协议吗-怎么解决" tabindex="-1"><a class="header-anchor" href="#什么是无状态协议-http-是无状态协议吗-怎么解决" aria-hidden="true">#</a> 什么是无状态协议，HTTP 是无状态协议吗，怎么解决</h2><p><code>无状态协议(Stateless Protocol)</code> 就是指<strong>浏览器对于事务的处理没有记忆能力</strong>。举个例子来说就是比如客户请求获得网页之后关闭浏览器，然后再次启动浏览器，登录该网站，但是服务器并不知道客户关闭了一次浏览器。</p><p>HTTP 就是一种无状态的协议，他对用户的操作没有记忆能力。可能大多数用户不相信，他可能觉得每次输入用户名和密码登陆一个网站后，下次登陆就不再重新输入用户名和密码了。这其实不是 HTTP 做的事情，起作用的是一个叫做 <code>小甜饼(Cookie)</code> 的机制。它能够让浏览器具有<code>记忆</code>能力。</p><p>如果你的浏览器允许 cookie 的话，查看方式 <strong>chrome://settings/content/cookies</strong></p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070342864-2070396598.png" alt=""></p><p>也就说明你的记忆芯片通电了...... 当你想服务端发送请求时，服务端会给你发送一个认证信息，服务器第一次接收到请求时，开辟了一块 Session 空间（创建了Session对象），同时生成一个 sessionId ，并通过响应头的 **Set-Cookie：JSESSIONID=XXXXXXX **命令，向客户端发送要求设置 Cookie 的响应； 客户端收到响应后，在本机客户端设置了一个 **JSESSIONID=XXXXXXX **的 Cookie 信息，该 Cookie 的过期时间为浏览器会话结束；</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070352977-586746205.png" alt=""></p><p>接下来客户端每次向同一个网站发送请求时，请求头都会带上该 Cookie信息（包含 sessionId ）， 然后，服务器通过读取请求头中的 Cookie 信息，获取名称为 JSESSIONID 的值，得到此次请求的 sessionId。这样，你的浏览器才具有了记忆能力。</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070402885-1879965053.png" alt=""></p><p>还有一种方式是使用 JWT 机制，它也是能够让你的浏览器具有记忆能力的一种机制。与 Cookie 不同，JWT 是保存在客户端的信息，它广泛的应用于单点登录的情况。JWT 具有两个特点</p><ul><li>JWT 的 Cookie 信息存储在<code>客户端</code>，而不是服务端内存中。也就是说，JWT 直接本地进行验证就可以，验证完毕后，这个 Token 就会在 Session 中随请求一起发送到服务器，通过这种方式，可以节省服务器资源，并且 token 可以进行多次验证。</li><li>JWT 支持跨域认证，Cookies 只能用在<code>单个节点的域</code>或者它的<code>子域</code>中有效。如果它们尝试通过第三个节点访问，就会被禁止。使用 JWT 可以解决这个问题，使用 JWT 能够通过<code>多个节点</code>进行用户认证，也就是我们常说的<code>跨域认证</code>。</li></ul><h2 id="udp-和-tcp-的区别" tabindex="-1"><a class="header-anchor" href="#udp-和-tcp-的区别" aria-hidden="true">#</a> UDP 和 TCP 的区别</h2><p>TCP 和 UDP 都位于计算机网络模型中的运输层，它们负责传输应用层产生的数据。下面我们就来聊一聊 TCP 和 UDP 分别的特征和他们的区别</p><h3 id="udp-是什么" tabindex="-1"><a class="header-anchor" href="#udp-是什么" aria-hidden="true">#</a> UDP 是什么</h3><p>UDP 的全称是 <code>User Datagram Protocol</code>，用户数据报协议。它不需要所谓的<code>握手</code>操作，从而加快了通信速度，允许网络上的其他主机在接收方同意通信之前进行数据传输。</p><blockquote><p>数据报是与分组交换网络关联的传输单元。</p></blockquote><p>UDP 的特点主要有</p><ul><li>UDP 能够支持容忍数据包丢失的带宽密集型应用程序</li><li>UDP 具有低延迟的特点</li><li>UDP 能够发送大量的数据包</li><li>UDP 能够允许 DNS 查找，DNS 是建立在 UDP 之上的应用层协议。</li></ul><h3 id="tcp-是什么" tabindex="-1"><a class="header-anchor" href="#tcp-是什么" aria-hidden="true">#</a> TCP 是什么</h3><p>TCP 的全称是<code>Transmission Control Protocol</code> ，传输控制协议。它能够帮助你确定计算机连接到 Internet 以及它们之间的数据传输。通过三次握手来建立 TCP 连接，三次握手就是用来启动和确认 TCP 连接的过程。一旦连接建立后，就可以发送数据了，当数据传输完成后，会通过关闭虚拟电路来断开连接。</p><p>TCP 的主要特点有</p><ul><li>TCP 能够确保连接的建立和数据包的发送</li><li>TCP 支持错误重传机制</li><li>TCP 支持拥塞控制，能够在网络拥堵的情况下延迟发送</li><li>TCP 能够提供错误校验和，甄别有害的数据包。</li></ul><h3 id="tcp-和-udp-的不同" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的不同" aria-hidden="true">#</a> TCP 和 UDP 的不同</h3><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070414578-759690763.png" alt=""></p><p>下面为你罗列了一些 TCP 和 UDP 的不同点，方便理解，方便记忆。</p><table><thead><tr><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>TCP 是面向连接的协议</td><td>UDP 是无连接的协议</td></tr><tr><td>TCP 在发送数据前先需要建立连接，然后再发送数据</td><td>UDP 无需建立连接就可以直接发送大量数据</td></tr><tr><td>TCP 会按照特定顺序重新排列数据包</td><td>UDP 数据包没有固定顺序，所有数据包都相互独立</td></tr><tr><td>TCP 传输的速度比较慢</td><td>UDP 的传输会更快</td></tr><tr><td>TCP 的头部字节有 20 字节</td><td>UDP 的头部字节只需要 8 个字节</td></tr><tr><td>TCP 是重量级的，在发送任何用户数据之前，TCP需要三次握手建立连接。</td><td>UDP 是轻量级的。没有跟踪连接，消息排序等。</td></tr><tr><td>TCP 会进行错误校验，并能够进行错误恢复</td><td>UDP 也会错误检查，但会丢弃错误的数据包。</td></tr><tr><td>TCP 有发送确认</td><td>UDP 没有发送确认</td></tr><tr><td>TCP 会使用握手协议，例如 SYN，SYN-ACK，ACK</td><td>无握手协议</td></tr><tr><td>TCP 是可靠的，因为它可以确保将数据传送到路由器。</td><td>在 UDP 中不能保证将数据传送到目标。</td></tr></tbody></table><h2 id="tcp-三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手和四次挥手" aria-hidden="true">#</a> TCP 三次握手和四次挥手</h2><p>TCP 三次握手和四次挥手也是面试题的热门考点，它们分别对应 TCP 的连接和释放过程。下面就来简单认识一下这两个过程</p><h3 id="tcp-三次握手" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手" aria-hidden="true">#</a> TCP 三次握手</h3><p>在了解具体的流程前，我们需要先认识几个概念</p><table><thead><tr><th>消息类型</th><th>描述</th></tr></thead><tbody><tr><td>SYN</td><td>这个消息是用来初始化和建立连接的。</td></tr><tr><td>ACK</td><td>帮助对方确认收到的 SYN 消息</td></tr><tr><td>SYN-ACK</td><td>本地的 SYN 消息和较早的 ACK 数据包</td></tr><tr><td>FIN</td><td>用来断开连接</td></tr></tbody></table><ul><li><p>SYN：它的全称是 <code>Synchronize Sequence Numbers</code>，同步序列编号。是 TCP/IP 建立连接时使用的握手信号。在客户机和服务器之间建立 TCP 连接时，首先会发送的一个信号。客户端在接受到 SYN 消息时，就会在自己的段内生成一个随机值 X。</p></li><li><p>SYN-ACK：服务器收到 SYN 后，打开客户端连接，发送一个 SYN-ACK 作为答复。确认号设置为比接收到的序列号多一个，即 X + 1，服务器为数据包选择的序列号是另一个随机数 Y。</p></li><li><p>ACK：<code>Acknowledge character</code>, 确认字符，表示发来的数据已确认接收无误。最后，客户端将 ACK 发送给服务器。序列号被设置为所接收的确认值即 Y + 1。</p></li></ul><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070424280-1762755163.png" alt=""></p><p>如果用现实生活来举例的话就是</p><p>小明 - 客户端 小红 - 服务端</p><ul><li>小明给小红打电话，接通了后，小明说<strong>喂，能听到吗</strong>，这就相当于是连接建立。</li><li>小红给小明回应，<strong>能听到，你能听到我说的话吗</strong>，这就相当于是请求响应。</li><li>小明听到小红的回应后，<strong>好的</strong>，这相当于是连接确认。在这之后小明和小红就可以通话/交换信息了。</li></ul><h3 id="tcp-四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-四次挥手" aria-hidden="true">#</a> TCP 四次挥手</h3><p>在连接终止阶段使用四次挥手，连接的每一端都会独立的终止。下面我们来描述一下这个过程。</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070433284-37040778.png" alt=""></p><ul><li>首先，客户端应用程序决定要终止连接(这里服务端也可以选择断开连接)。这会使客户端将 FIN 发送到服务器，并进入 <code>FIN_WAIT_1</code> 状态。当客户端处于 FIN_WAIT_1 状态时，它会等待来自服务器的 ACK 响应。</li><li>然后第二步，当服务器收到 FIN 消息时，服务器会立刻向客户端发送 ACK 确认消息。</li><li>当客户端收到服务器发送的 ACK 响应后，客户端就进入 <code>FIN_WAIT_2</code> 状态，然后等待来自服务器的 <code>FIN</code> 消息</li><li>服务器发送 ACK 确认消息后，一段时间（可以进行关闭后）会发送 FIN 消息给客户端，告知客户端可以进行关闭。</li><li>当客户端收到从服务端发送的 FIN 消息时，客户端就会由 FIN_WAIT_2 状态变为 <code>TIME_WAIT</code> 状态。处于 TIME_WAIT 状态的客户端允许重新发送 ACK 到服务器为了防止信息丢失。客户端在 TIME_WAIT 状态下花费的时间取决于它的实现，在等待一段时间后，连接关闭，客户端上所有的资源（包括端口号和缓冲区数据）都被释放。</li></ul><p>还是可以用上面那个通话的例子来进行描述</p><ul><li>小明对小红说，我所有的东西都说完了，我要挂电话了。</li><li>小红说，收到，我这边还有一些东西没说。</li><li>经过若干秒后，小红也说完了，小红说，我说完了，现在可以挂断了</li><li>小明收到消息后，又等了若干时间后，挂断了电话。</li></ul><h2 id="简述-http1-0-1-1-2-0-的区别" tabindex="-1"><a class="header-anchor" href="#简述-http1-0-1-1-2-0-的区别" aria-hidden="true">#</a> 简述 HTTP1.0/1.1/2.0 的区别</h2><h3 id="http-1-0" tabindex="-1"><a class="header-anchor" href="#http-1-0" aria-hidden="true">#</a> HTTP 1.0</h3><p>HTTP 1.0 是在 1996 年引入的，从那时开始，它的普及率就达到了惊人的效果。</p><ul><li>HTTP 1.0 仅仅提供了最基本的认证，这时候用户名和密码还未经加密，因此很容易收到窥探。</li><li>HTTP 1.0 被设计用来使用短链接，即每次发送数据都会经过 TCP 的三次握手和四次挥手，效率比较低。</li><li>HTTP 1.0 只使用 header 中的 If-Modified-Since 和 Expires 作为缓存失效的标准。</li><li>HTTP 1.0 不支持断点续传，也就是说，每次都会传送全部的页面和数据。</li><li>HTTP 1.0 认为每台计算机只能绑定一个 IP，所以请求消息中的 URL 并没有传递主机名（hostname）。</li></ul><h3 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP 1.1</h3><p>HTTP 1.1 是 HTTP 1.0 开发三年后出现的，也就是 1999 年，它做出了以下方面的变化</p><ul><li>HTTP 1.1 使用了摘要算法来进行身份验证</li><li>HTTP 1.1 默认使用长连接，长连接就是只需一次建立就可以传输多次数据，传输完成后，只需要一次切断连接即可。长连接的连接时长可以通过请求头中的 <code>keep-alive</code> 来设置</li><li>HTTP 1.1 中新增加了 E-tag，If-Unmodified-Since, If-Match, If-None-Match 等缓存控制标头来控制缓存失效。</li><li>HTTP 1.1 支持断点续传，通过使用请求头中的 <code>Range</code> 来实现。</li><li>HTTP 1.1 使用了虚拟网络，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。</li></ul><h3 id="http-2-0" tabindex="-1"><a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a> HTTP 2.0</h3><p>HTTP 2.0 是 2015 年开发出来的标准，它主要做的改变如下</p><ul><li><code>头部压缩</code>，由于 HTTP 1.1 经常会出现 <strong>User-Agent、Cookie、Accept、Server、Range</strong> 等字段可能会占用几百甚至几千字节，而 Body 却经常只有几十字节，所以导致头部偏重。HTTP 2.0 使用 <code>HPACK</code> 算法进行压缩。</li><li><code>二进制格式</code>，HTTP 2.0 使用了更加靠近 TCP/IP 的二进制格式，而抛弃了 ASCII 码，提升了解析效率</li><li><code>强化安全</code>，由于安全已经成为重中之重，所以 HTTP2.0 一般都跑在 HTTPS 上。</li><li><code>多路复用</code>，即每一个请求都是是用作连接共享。一个请求对应一个id，这样一个连接上可以有多个请求。</li></ul><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070445646-598174426.png" alt=""></p><h2 id="请你说一下-http-常见的请求头" tabindex="-1"><a class="header-anchor" href="#请你说一下-http-常见的请求头" aria-hidden="true">#</a> 请你说一下 HTTP 常见的请求头</h2><p>这个问题比较开放，因为 HTTP 请求头有很多，这里只简单举出几个例子，具体的可以参考我的另一篇文章</p><p>https://mp.weixin.qq.com/s/XZZR0945IcI6X4S0g5fZXg</p><p>HTTP 标头会分为四种，分别是 <code>通用标头</code>、<code>实体标头</code>、<code>请求标头</code>、<code>响应标头</code>。分别介绍一下</p><h3 id="通用标头" tabindex="-1"><a class="header-anchor" href="#通用标头" aria-hidden="true">#</a> 通用标头</h3><p>通用标头主要有三个，分别是 <code>Date</code>、<code>Cache-Control</code> 和 <code>Connection</code></p><p><strong>Date</strong></p><p>Date 是一个通用标头，它可以出现在请求标头和响应标头中，它的基本表示如下</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Wed, 21 Oct 2015 07:28:00 GMT </span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示的是格林威治标准时间，这个时间要比北京时间慢八个小时</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070506989-1008635632.png" alt=""></p><p><strong>Cache-Control</strong></p><p>Cache-Control 是一个通用标头，他可以出现在<code>请求标头</code>和<code>响应标头</code>中，Cache-Control 的种类比较多，虽然说这是一个通用标头，但是又一些特性是请求标头具有的，有一些是响应标头才有的。主要大类有 <code>可缓存性</code>、<code>阈值性</code>、 <code>重新验证并重新加载</code> 和<code>其他特性</code></p><p><strong>Connection</strong></p><p>Connection 决定当前事务（一次三次握手和四次挥手）完成后，是否会关闭网络连接。Connection 有两种，一种是<code>持久性连接</code>，即一次事务完成后不关闭网络连接</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另一种是<code>非持久性连接</code>，即一次事务完成后关闭网络连接</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTTP1.1 其他通用标头如下</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070517966-2139009759.png" alt=""></p><h3 id="实体标头" tabindex="-1"><a class="header-anchor" href="#实体标头" aria-hidden="true">#</a> 实体标头</h3><p>实体标头是描述消息正文内容的 HTTP 标头。实体标头用于 HTTP 请求和响应中。头部<code>Content-Length</code>、 <code>Content-Language</code>、 <code>Content-Encoding</code> 是实体头。</p><ul><li><p>Content-Length 实体报头指示实体主体的大小，以字节为单位，发送到接收方。</p></li><li><p>Content-Language 实体报头描述了客户端或者服务端能够接受的语言。</p></li><li><p>Content-Encoding 这又是一个比较麻烦的属性，这个实体报头用来压缩媒体类型。Content-Encoding 指示对实体应用了何种编码。</p><p>常见的内容编码有这几种： <strong>gzip、compress、deflate、identity</strong> ，这个属性可以应用在请求报文和响应报文中</p></li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate //请求头</span></span>
<span class="token header"><span class="token header-name keyword">Content-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip  //响应头</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些实体标头字段</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070525511-1872030407.png" alt=""></p><h3 id="请求标头" tabindex="-1"><a class="header-anchor" href="#请求标头" aria-hidden="true">#</a> 请求标头</h3><p><strong>Host</strong></p><p>Host 请求头指明了服务器的域名（对于虚拟主机来说），以及（可选的）服务器监听的 TCP 端口号。如果没有给定端口号，会自动使用被请求服务的默认端口（比如请求一个 HTTP 的 URL 会自动使用 80 作为端口）。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 <code>Accpet</code>、 <code>Accept-Language</code>、<code>Accept-Encoding</code> 都是属于内容协商的请求标头。</p><p><strong>Referer</strong></p><p>HTTP Referer 属性是请求标头的一部分，当浏览器向 web 服务器发送请求的时候，一般会带上 Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Referer</span><span class="token punctuation">:</span> <span class="token header-value">https://developer.mozilla.org/testpage.html</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>If-Modified-Since</strong></p><p>If-Modified-Since 通常会与 If-None-Match 搭配使用，If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。获取资源的更新日期时间，可通过确认首部字段 <code>Last-Modified</code> 来确定。</p><p>大白话说就是如果在 <code>Last-Modified</code> 之后更新了服务器资源，那么服务器会响应 200，如果在 <code>Last-Modified</code> 之后没有更新过资源，则返回 304。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">If-Modified-Since</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 18 Jul 2016 02:36:04 GMT</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>If-None-Match</strong></p><p>If-None-Match HTTP 请求标头使请求成为条件请求。 对于 GET 和 HEAD 方法，仅当服务器没有与给定资源匹配的 <code>ETag</code> 时，服务器才会以 200 状态发送回请求的资源。 对于其他方法，仅当最终现有资源的<code>ETag</code>与列出的任何值都不匹配时，才会处理请求。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">If-None-Match</span><span class="token punctuation">:</span> <span class="token header-value">&quot;c561c68d0ba92bbeb8b0fff2a9199f722e3a621a&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Accept</strong></p><p>接受请求 HTTP 标头会通告客户端其能够理解的 MIME 类型</p><p><strong>Accept-Charset</strong></p><p>accept-charset 属性规定服务器处理表单数据所接受的字符集。</p><p>常用的字符集有： UTF-8 - Unicode 字符编码 ； ISO-8859-1 - 拉丁字母表的字符编码</p><p><strong>Accept-Language</strong></p><p>首部字段 Accept-Language 用来告知服务器用户代理能够处理的自然语言集（指中文或英文等），以及自然语言集的相对优先级。可一次指定多种自然语言集。</p><p>请求标头我们大概就介绍这几种，后面会有一篇文章详细深挖所有的响应头的，下面是一个响应头的汇总，基于 HTTP 1.1</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070537767-846263525.png" alt=""></p><h3 id="响应标头" tabindex="-1"><a class="header-anchor" href="#响应标头" aria-hidden="true">#</a> 响应标头</h3><p><strong>Access-Control-Allow-Origin</strong></p><p>一个返回的 HTTP 标头可能会具有 Access-Control-Allow-Origin ，<code>Access-Control-Allow-Origin</code> 指定一个来源，它告诉浏览器允许该来源进行资源访问。</p><p><strong>Keep-Alive</strong></p><p>Keep-Alive 表示的是 Connection 非持续连接的存活时间，可以进行指定。</p><p><strong>Server</strong></p><p>服务器标头包含有关原始服务器用来处理请求的软件的信息。</p><p>应该避免使用过于冗长和详细的 Server 值，因为它们可能会泄露内部实施细节，这可能会使攻击者容易地发现并利用已知的安全漏洞。例如下面这种写法</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache/2.4.1 (Unix)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Set-Cookie</strong></p><p>Set-Cookie 用于服务器向客户端发送 sessionID。</p><p><strong>Transfer-Encoding</strong></p><p>首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。</p><p>HTTP /1.1 的传输编码方式仅对分块传输编码有效。</p><p><strong>X-Frame-Options</strong></p><p>HTTP 首部字段是可以自行扩展的。所以在 Web 服务器和浏览器的应用上，会出现各种非标准的首部字段。</p><p>首部字段 <code>X-Frame-Options</code> 属于 HTTP 响应首部，用于控制网站内容在其他 Web 网站的 Frame 标签内的显示问题。其主要目的是为了防止点击劫持（clickjacking）攻击。</p><p>下面是一个响应头的汇总，基于 HTTP 1.1</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070547364-1951785761.png" alt=""></p><h2 id="地址栏输入-url-发生了什么" tabindex="-1"><a class="header-anchor" href="#地址栏输入-url-发生了什么" aria-hidden="true">#</a> 地址栏输入 URL 发生了什么</h2><p>这道题也是一道经常会考的面试题。那么下面我们就来探讨一下从你输入 URL 后到响应，都经历了哪些过程。</p><ul><li>首先，你需要在浏览器中的 URL 地址上，输入你想访问的地址，如下</li></ul><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070603984-33979171.png" alt=""></p><p>你应该访问不到的，对不对~</p><ul><li>然后，浏览器会根据你输入的 URL 地址，去查找域名是否被本地 DNS 缓存，不同浏览器对 DNS 的设置不同，如果浏览器缓存了你想访问的 URL 地址，那就直接返回 ip。如果没有缓存你的 URL 地址，浏览器就会发起系统调用来查询本机 <code>hosts</code> 文件是否有配置 ip 地址，如果找到，直接返回。如果找不到，就向网络中发起一个 DNS 查询。</li></ul><blockquote><p>首先来看一下 DNS 是啥，互联网中识别主机的方式有两种，通过<code>主机名</code>和 <code>IP 地址</code>。我们人喜欢用名字的方式进行记忆，但是通信链路中的路由却喜欢定长、有层次结构的 IP 地址。所以就需要一种能够把主机名到 IP 地址的转换服务，这种服务就是由 DNS 提供的。DNS 的全称是 <code>Domain Name System</code> 域名系统。DNS 是一种由分层的 DNS 服务器实现的分布式数据库。DNS 运行在 UDP 上，使用 53 端口。</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070613476-618983445.png" alt=""></p></blockquote><p>DNS 是一种分层数据库，它的主要层次结构如下</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070620978-673308076.png" alt=""></p><p>一般域名服务器的层次结构主要是以上三种，除此之外，还有另一类重要的 DNS 服务器，它是 <code>本地 DNS 服务器(local DNS server)</code>。严格来说，本地 DNS 服务器并不属于上述层次结构，但是本地 DNS 服务器又是至关重要的。每个 <code>ISP(Internet Service Provider)</code> 比如居民区的 ISP 或者一个机构的 ISP 都有一台本地 DNS 服务器。当主机和 ISP 进行连接时，该 ISP 会提供一台主机的 IP 地址，该主机会具有一台或多台其本地 DNS 服务器的 IP地址。通过访问网络连接，用户能够容易的确定 DNS 服务器的 IP地址。当主机发出 DNS 请求后，该请求被发往本地 DNS 服务器，它起着代理的作用，并将该请求转发到 DNS 服务器层次系统中。</p><p>首先，查询请求会先找到本地 DNS 服务器来查询是否包含 IP 地址，如果本地 DNS 无法查询到目标 IP 地址，就会向根域名服务器发起一个 DNS 查询。</p><blockquote><p>注意：DNS 涉及两种查询方式：一种是<code>递归查询(Recursive query)</code> ，一种是<code>迭代查询(Iteration query)</code>。《计算机网络：自顶向下方法》竟然没有给出递归查询和迭代查询的区别，找了一下网上的资料大概明白了下。</p><p>如果根域名服务器无法告知本地 DNS 服务器下一步需要访问哪个顶级域名服务器，就会使用递归查询；</p><p>如果根域名服务器能够告知 DNS 服务器下一步需要访问的顶级域名服务器，就会使用迭代查询。</p></blockquote><p>在由根域名服务器 -&gt; 顶级域名服务器 -&gt; 权威 DNS 服务器后，由权威服务器告诉本地服务器目标 IP 地址，再有本地 DNS 服务器告诉用户需要访问的 IP 地址。</p><ul><li>第三步，浏览器需要和目标服务器建立 TCP 连接，需要经过三次握手的过程，具体的握手过程请参考上面的回答。</li><li>在建立连接后，浏览器会向目标服务器发起 <code>HTTP-GET</code> 请求，包括其中的 URL，HTTP 1.1 后默认使用长连接，只需要一次握手即可多次传输数据。</li><li>如果目标服务器只是一个简单的页面，就会直接返回。但是对于某些大型网站的站点，往往不会直接返回主机名所在的页面，而会直接重定向。返回的状态码就不是 200 ，而是 301,302 以 3 开头的重定向码，浏览器在获取了重定向响应后，在响应报文中 Location 项找到重定向地址，浏览器重新第一步访问即可。</li><li>然后浏览器重新发送请求，携带新的 URL，返回状态码 200 OK，表示服务器可以响应请求，返回报文。</li></ul><h2 id="https-的工作原理" tabindex="-1"><a class="header-anchor" href="#https-的工作原理" aria-hidden="true">#</a> HTTPS 的工作原理</h2><p>我们上面描述了一下 HTTP 的工作原理，下面来讲述一下 HTTPS 的工作原理。因为我们知道 HTTPS 不是一种新出现的协议，而是</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070636714-2087758576.png" alt=""></p><p>所以，我们探讨 HTTPS 的握手过程，其实就是 SSL/TLS 的握手过程。</p><p>TLS 旨在为 Internet 提供通信安全的加密协议。TLS 握手是启动和使用 TLS 加密的通信会话的过程。在 TLS 握手期间，Internet 中的通信双方会彼此交换信息，验证密码套件，交换会话密钥。</p><p>每当用户通过 HTTPS 导航到具体的网站并发送请求时，就会进行 TLS 握手。除此之外，每当其他任何通信使用HTTPS（包括 API 调用和在 HTTPS 上查询 DNS）时，也会发生 TLS 握手。</p><p>TLS 具体的握手过程会根据所使用的<code>密钥交换算法的类型</code>和双方支持的<code>密码套件</code>而不同。 我们以<code>RSA 非对称加密</code>来讨论这个过程。整个 TLS 通信流程图如下</p><p><img src="https://img2020.cnblogs.com/blog/1515111/202004/1515111-20200420070646273-169528725.png" alt=""></p><ul><li>在进行通信前，首先会进行 HTTP 的三次握手，握手完成后，再进行 TLS 的握手过程</li><li>ClientHello：客户端通过向服务器发送 <code>hello</code> 消息来发起握手过程。这个消息中会夹带着客户端支持的 <code>TLS 版本号(TLS1.0 、TLS1.2、TLS1.3)</code> 、客户端支持的密码套件、以及一串 <code>客户端随机数</code>。</li><li>ServerHello：在客户端发送 hello 消息后，服务器会发送一条消息，这条消息包含了服务器的 SSL 证书、服务器选择的密码套件和服务器生成的随机数。</li><li>认证(Authentication)：客户端的证书颁发机构会认证 SSL 证书，然后发送 <code>Certificate</code> 报文，报文中包含公开密钥证书。最后服务器发送 <code>ServerHelloDone</code> 作为 <code>hello</code> 请求的响应。第一部分握手阶段结束。</li><li><code>加密阶段</code>：在第一个阶段握手完成后，客户端会发送 <code>ClientKeyExchange</code> 作为响应，这个响应中包含了一种称为 <code>The premaster secret</code> 的密钥字符串，这个字符串就是使用上面公开密钥证书进行加密的字符串。随后客户端会发送 <code>ChangeCipherSpec</code>，告诉服务端使用私钥解密这个 <code>premaster secret</code> 的字符串，然后客户端发送 <code>Finished</code> 告诉服务端自己发送完成了。</li></ul><blockquote><p>Session key 其实就是用公钥证书加密的公钥。</p></blockquote><ul><li><code>实现了安全的非对称加密</code>：然后，服务器再发送 <code>ChangeCipherSpec</code> 和 <code>Finished</code> 告诉客户端解密完成，至此实现了 RSA 的非对称加密。</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivkbczxoj31l20t8al5.jpg" alt="image-20210716163352584"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gsivl4khz9j31d60h8mze.jpg" alt="image-20210716163433337"></p>`,178),p=[s];function d(l,i){return t(),a("div",null,p)}const r=e(n,[["render",d],["__file","http-interview.html.vue"]]);export{r as default};
