import{_ as n,o as e,c as i,e as s}from"./app-3RcBQnkC.js";const a="/code-note/assets/image-18-wO9qnq3S.png",l="/code-note/assets/image-19-dm1pxeAU.png",d="/code-note/assets/image-20-MYjUnaBE.png",r="/code-note/assets/image-21-SZUqRV-c.png",t={},c=s('<h2 id="nginx介绍篇" tabindex="-1"><a class="header-anchor" href="#nginx介绍篇" aria-hidden="true">#</a> Nginx介绍篇</h2><p>Nginx 是异步框架的网页服务器，也可以用作反向代理、负载平衡器和 HTTP 缓存。该软件由俄罗斯程序员伊戈尔． 赛索耶夫开发并于 2004 年首次公开发布。2011年成立同名公司以提供支持服务。2019年3月11日，Nginx 公司被 F5网络公司以6.7 亿美元收购。Nginx 是免费的开源软件，根据类 BSD 许可证的条款发布。</p><h2 id="nginx-优点" tabindex="-1"><a class="header-anchor" href="#nginx-优点" aria-hidden="true">#</a> Nginx 优点</h2><p>高并发支持单机能够支持10W+ 的并发连接（取决于内存大小，极限能够到百万），那么在实际生产中也是非常能接近这个数字的，这主要得益于 nginx 在linux 环境下使用了 epoll lO 多路复用模型。</p><p>内存消耗低在同类型 web 服务中，nginx 比 apache 占用的内存资源更少，在一般情况下10K 非活跃的 HTTP Keep-Alive 连接在 nginx 中仅消耗 2.5M 内存。</p><p>高扩展性低耦合的模块设计， 并且有丰富的第三方模块支持。</p><p>高可靠性经过十几年各种复杂场景和各大公司的生产环境验证，并且 nginx 的架构是由 master 进程和 worker 进程组成的，如果 worker 进程出现问题，那么 master 进程可以快速开启一个新的 worker 进程提供服务。</p><p>主流 Web 服务器市场占有率对比 <img src="'+a+'" alt="Alt text"><img src="'+l+`" alt="Alt text"></p><h2 id="nginx-全局命令介绍" tabindex="-1"><a class="header-anchor" href="#nginx-全局命令介绍" aria-hidden="true">#</a> Nginx 全局命令介绍</h2><p>查看当前 nginx 版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V

#返回

nginx version: nginx/1.18.0 （Ubuntu）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查配置文件是否正确</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -t

# 成功见如下

nginx: the configuration file Vetc/nginx/nginx. conf syntax is ok nginx: configuration file /etc/nginx/nginx.conf test is successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>快速关闭</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优雅关闭</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -S quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新打开日志文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过系统信号进行停机</p><p>工作方式是通过获取 Nginx 的主进程号，然后通过 kill 命令进行停止 Nginx 获取 Nginx 的PID</p><p>如下可以看到进程信息分为 master process 和 worker process，前者代表主进程后者代表的是工作进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>＃ 获取NginxPID号

ps -eflgrep nginx

#二二========效果如下图=====

root 508258 1 0 11:11 n

www-data 508260 508258 0 11:11 n www-data 508261 508258 0 11:11 ？

www-data 508262 508258 11:11 ？

www-data 508263 508258 11:11？

root 572099 506069 12:19 pts/10

00:00:00 nginx: master process 00:00:00 nginx： worker process 00:00:00 nginx： worker process 00 :00:00 nginx: worker process 00 :00:00 nginx: worker process 00:00:00 grep --coLor=auto nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种方式就是直接访问 / run/nginx.pid 文件获取 PID号。</p><p>优雅停机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -quit /run/nginx.pid*

kill -quit （输入nginx主进程号）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速停机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -term /run/nginx.pid

kill -term （输入nginx主进程号）
#或者
kill -int /run/nginx.pid

kill -int （输入nginx主进程号）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强制停机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 /run/nginx.pid kill -9 （输入nginx主进程号） # 或者

pKill -9 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平滑重启</p><p>当 Nginx 接收到 HUP 信号时，它会尝试先解析配置文件（如果指定配置文件，就使用指定的，否则使用默认的），如果成功，就应用新的配置文件（例如，重新打开日志文件或监听的套接字）。之后，Nginx 运行新的工作进程并从容关闭旧的工作进程。通知工作进程关闭监听套接字，但是继续为当前连接的客户提供服务。所有客户端的服务完</p><p>成后，旧的工作进程被关闭。如果新的配置文件应用失败，Nginx 将继续使用旧的配置进行工作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -hup \`/run/nginx.pid\`
kill -hup（输入nginx主进程号）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx 目录文件＆配置文件讲解 <img src="`+d+'" alt="Alt text"><img src="'+r+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user nobody；</span>

worker_processes

//定义执行nginx程序的用户

<span class="token number">1</span> <span class="token comment">#指定nginx进程数</span>

<span class="token comment">#错误日志定义类型有：debug、 info、 notice、 warn、 error、 crit</span>

<span class="token comment">#error_Log Logs/error. Log； //指定错误日志目录 #enror_Log Logs /error. Log notice；</span>

<span class="token comment">#error_Log Logs/error. Log #worker_rLimit_nofile 1024；</span>

info；

//指定notice类型的错误日志目录 //指定全局错误日志目录

<span class="token comment">#pid Logs /nginx.pid；</span>

//指定但进程最多打开文件数量

//指定进程文件的目录

events ｛ <span class="token comment">#事件区块</span>

<span class="token comment">#事件模型有：kqueue、 rtsig、 epoll、 / dev/polL, seLect、 poll</span>

use epoll； <span class="token comment">#指指定参考事件模型</span>

worker_connections

｝

<span class="token number">1024</span>； <span class="token comment">#指定单进程最大链接数</span>

http ｛ <span class="token comment">#http区块</span>

include mime. types； <span class="token comment">#指定nginx支持的媒体类型</span>

default_type appLication/octet-stream； <span class="token comment">#指定默认的媒体类型</span>

<span class="token comment">#指定日志记录格式</span>

<span class="token comment">#Log_format main</span>

<span class="token comment">#</span>

<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> ［<span class="token variable">$time_LocaL</span>］ <span class="token string">&quot;<span class="token variable">$request</span>

‡

<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;</span><span class="token variable">$http_referen</span><span class="token string">&quot; I &quot;</span><span class="token variable">$http_user_agent</span><span class="token string">&quot;&quot;</span><span class="token variable">$http_x_forwarded_for</span>&quot;&#39;；
<span class="token comment">#access_Log Logs /access. 1og main； //指定nginx的访问日志目录</span>

sendfile on <span class="token comment">#开启高效的传输模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),v=[c];function m(o,u){return e(),i("div",null,v)}const b=n(t,[["render",m],["__file","nginx.html.vue"]]);export{b as default};
