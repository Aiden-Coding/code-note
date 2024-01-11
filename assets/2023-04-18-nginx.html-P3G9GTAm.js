import{_ as i,r as p,o,c as l,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},r=n("h1",{id:"nginx-环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-环境配置","aria-hidden":"true"},"#"),s(" Nginx 环境配置")],-1),u=n("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),m=t("<li>停止：<code>docker stop Nginx</code></li><li>重启：<code>docker restart Nginx</code></li><li>删除服务：<code>docker rm Nginx</code></li><li>删除镜像：<code>docker rmi Nginx</code></li><li>进入服务：<code>docker exec -it Nginx /bin/bash</code></li>",5),k={href:"https://github.com/fuzhengwei/RoadMap/tree/main/10-%E5%8F%91%E5%B8%83%E9%83%A8%E7%BD%B2/103-%E6%9C%8D%E5%8A%A1%E5%99%A8/1-Nginx/data",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="一、基础安装" tabindex="-1"><a class="header-anchor" href="#一、基础安装" aria-hidden="true">#</a> 一、基础安装</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker run \\
<span class="token operator">--</span>restart always \\
<span class="token operator">--</span>name <span class="token class-name">Nginx</span> \\
<span class="token operator">-</span>d \\
<span class="token operator">-</span>p <span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> \\
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/devops/dev-ops-nginx-230418-01.png" alt=""></p><ul><li>restart 重启策略，always 是一直保持重启。如果不设置，可以把这条删掉。<code>never\\always</code></li><li><code>8090</code> - 容器端口、<code>80</code> - 服务器端口，这样外部通过80端口即可访问。</li></ul><h2 id="二、管理配置" tabindex="-1"><a class="header-anchor" href="#二、管理配置" aria-hidden="true">#</a> 二、管理配置</h2><p>首次部署 nginx 后，其实我们还不好操作配置文件。也就是 Nginx 的配置文件是在 Docker 容器的程序下，只有把它拷贝到服务器上才好操作。</p><h3 id="_1-进入-nginx" tabindex="-1"><a class="header-anchor" href="#_1-进入-nginx" aria-hidden="true">#</a> 1. 进入 Nginx</h3><p>进入程序：docker exec -it Nginx /bin/bash - 退出程序：exit</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span>root<span class="token annotation punctuation">@vultr</span> <span class="token operator">~</span><span class="token punctuation">]</span># docker exec <span class="token operator">-</span>it <span class="token class-name">Nginx</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span># ls
bin  boot  dev  docker<span class="token operator">-</span>entrypoint<span class="token punctuation">.</span>d  docker<span class="token operator">-</span>entrypoint<span class="token punctuation">.</span>sh  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  <span class="token keyword">var</span>
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span># cd etc<span class="token operator">/</span>nginx<span class="token operator">/</span>
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx# ls
conf<span class="token punctuation">.</span>d  fastcgi_params  mime<span class="token punctuation">.</span>types  modules  nginx<span class="token punctuation">.</span>conf  scgi_params  uwsgi_params
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx# pwd
<span class="token operator">/</span>etc<span class="token operator">/</span>nginx
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span># cd <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html# ls
<span class="token number">50</span>x<span class="token punctuation">.</span>html  index<span class="token punctuation">.</span>html
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html# cat index<span class="token punctuation">.</span>html 
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>html<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">&gt;</span></span><span class="token class-name">Welcome</span> <span class="token keyword">to</span> <span class="token namespace">nginx</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>style<span class="token punctuation">&gt;</span></span>
html <span class="token punctuation">{</span> color<span class="token operator">-</span>scheme<span class="token operator">:</span> light dark<span class="token punctuation">;</span> <span class="token punctuation">}</span>
body <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">35</span>em<span class="token punctuation">;</span> margin<span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token class-name">Tahoma</span><span class="token punctuation">,</span> <span class="token class-name">Verdana</span><span class="token punctuation">,</span> <span class="token class-name">Arial</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token class-name">Welcome</span> <span class="token keyword">to</span> <span class="token namespace">nginx</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span><span class="token class-name">If</span> you see <span class="token keyword">this</span> page<span class="token punctuation">,</span> the nginx web server is successfully installed and
<span class="token class-name"><span class="token namespace">working<span class="token punctuation">.</span></span> Further</span> configuration is required<span class="token punctuation">.</span>&lt;<span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span><span class="token class-name">For</span> online documentation and support please refer <span class="token keyword">to</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;http://nginx.org/&quot;</span><span class="token operator">&gt;</span>nginx<span class="token punctuation">.</span>org<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token punctuation">.</span>&lt;br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token class-name">Commercial</span> support is available at
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;http://nginx.com/&quot;</span><span class="token operator">&gt;</span>nginx<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token punctuation">.</span>&lt;<span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span><span class="token generics"><span class="token punctuation">&lt;</span>em<span class="token punctuation">&gt;</span></span><span class="token class-name">Thank</span> you <span class="token keyword">for</span> using nginx<span class="token punctuation">.</span>&lt;<span class="token operator">/</span>em<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html# 
root<span class="token annotation punctuation">@ed8dc07f2ae6</span><span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html# exit
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置：<code>/etc/nginx</code></li><li>网页：<code>/usr/share/nginx/html</code></li></ul><h3 id="_2-拷贝-nginx" tabindex="-1"><a class="header-anchor" href="#_2-拷贝-nginx" aria-hidden="true">#</a> 2. 拷贝 Nginx</h3><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /data/nginx/conf</span>
<span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /data/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>拷贝文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># docker container cp Nginx:/etc/nginx/nginx.conf /data/nginx/conf</span>
<span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># docker container cp Nginx:/usr/share/nginx/html/index.html /data/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># ls /data/nginx/conf/</span>
nginx.conf
<span class="token punctuation">[</span>root@vultr ~<span class="token punctuation">]</span><span class="token comment"># ls /data/nginx/html/</span>
index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-部署-nginx" tabindex="-1"><a class="header-anchor" href="#_3-部署-nginx" aria-hidden="true">#</a> 3. 部署 Nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> Nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启：<code>sudo service nginx restart</code></li></ul><h2 id="三、证书安装" tabindex="-1"><a class="header-anchor" href="#三、证书安装" aria-hidden="true">#</a> 三、证书安装</h2><h3 id="_4-1-创建证书" tabindex="-1"><a class="header-anchor" href="#_4-1-创建证书" aria-hidden="true">#</a> 4.1 创建证书</h3><p>SSL 免费的证书，在各个云服务厂商都有提供，可以自己申请。这里以阿里云举例；</p>`,23),h={href:"https://yundun.console.aliyun.com/?p=cas#/certExtend/free/cn-hangzhou",target:"_blank",rel:"noopener noreferrer"},g=t(`<p><img src="https://bugstack.cn/images/article/devops/dev-ops-nginx-230418-02.png" alt=""></p><ul><li>步骤1；通过免费的方式创建 SSL，之后通过引导的 DNS 方式进行验证。其实就是在你的域名里配置下验证信息。</li><li>步骤2；申请后，3-5分钟左右 DNS 会验证通过，这个时候你直接下载 Nginx 的 SSL 包即可。里面有2个文件【x.key、x.pem】</li></ul><h3 id="_4-2-准备内容" tabindex="-1"><a class="header-anchor" href="#_4-2-准备内容" aria-hidden="true">#</a> 4.2 准备内容</h3><h4 id="_4-2-1-单个证书" tabindex="-1"><a class="header-anchor" href="#_4-2-1-单个证书" aria-hidden="true">#</a> 4.2.1 单个证书</h4><ul><li>把下载好的 SSL 文件解压到桌面，你会得到一个文件夹，里面含有 x.key、x.pem 两个文件。</li><li>创建一个 default.conf 这个文件配置的 SSL 信息</li></ul><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       80;
    listen  [::]:80;
    server_name  openai.xfg.im;

    rewrite ^(.*) https://$server_name$1 permanent;

}

server {
    listen       443 ssl;
    server_name  openai.xfg.im;

    ssl_certificate      /etc/nginx/ssl/9740289_openai.xfg.im.pem;
    ssl_certificate_key  /etc/nginx/ssl/9740289_openai.xfg.im.key;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    location / {
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   Host              $http_host;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>你可以复制这份文件，在自己本地创建。注意修改域名和SSL文件路径。</li></ul><h4 id="_4-2-2-多个证书" tabindex="-1"><a class="header-anchor" href="#_4-2-2-多个证书" aria-hidden="true">#</a> 4.2.2 多个证书</h4><p>如果你需要给1个以上的域名配置SSL，那么可以配置多组 server 如下；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  itedus.cn<span class="token punctuation">;</span>

    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$server_name</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  itedus.cn<span class="token punctuation">;</span>

    ssl_certificate      /etc/nginx/ssl/9750021_itedus.cn.pem<span class="token punctuation">;</span>
    ssl_certificate_key  /etc/nginx/ssl/9750021_itedus.cn.key<span class="token punctuation">;</span>

    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>

    ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_set_header   X-Real-IP         <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header   X-Forwarded-For   <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  chatgpt.itedus.cn<span class="token punctuation">;</span>

    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$server_name</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  chatgpt.itedus.cn<span class="token punctuation">;</span>

    ssl_certificate      /etc/nginx/ssl/9749920_chatgpt.itedus.cn.pem<span class="token punctuation">;</span>
    ssl_certificate_key  /etc/nginx/ssl/9749920_chatgpt.itedus.cn.key<span class="token punctuation">;</span>

    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>

    ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_pass http://180.76.119.100:3002<span class="token punctuation">;</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        chunked_transfer_encoding off<span class="token punctuation">;</span>
        proxy_buffering off<span class="token punctuation">;</span>
        proxy_cache off<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-上传文件" tabindex="-1"><a class="header-anchor" href="#_4-3-上传文件" aria-hidden="true">#</a> 4.3 上传文件</h3>`,11),_=n("code",null,"SFTP",-1),x=n("code",null,"mkdir -p",-1),f=n("code",null,"touch",-1),y={href:"https://www.termius.com/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p><img src="https://bugstack.cn/images/article/devops/dev-ops-nginx-230418-03.png" alt=""></p><ul><li>文件1；html</li><li>文件2；ssl - 把本地的 ssh 文件上传进来</li><li>文件3；conf - 在 conf 下有个 <code>conf.d</code> 的文件夹，把 <code>default.conf</code> 上传进去。而 nginx.conf 传到 conf 中。</li><li>文件4；logs - 创建日志</li></ul><h3 id="_4-4-启动服务" tabindex="-1"><a class="header-anchor" href="#_4-4-启动服务" aria-hidden="true">#</a> 4.4 启动服务</h3><p>在 nginx.conf 的配置文件有这么一句；<code>include /etc/nginx/conf.d/*.conf;</code> 那么只要是 conf.d 文件夹下的文件都会被加载。所以直接在 conf.d/default.conf 配置 SSL 就会被加载。接下来重新安装 Nginx 即可。<code>安装前记得删除 Nginx 你可以用命令【docker stop Nginx、docker rm Nginx】或者在 Portainer 中操作即可</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> Nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/ssl:/etc/nginx/ssl/  <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/devops/dev-ops-nginx-230418-04.png" alt=""></p><h2 id="五、openai-访问" tabindex="-1"><a class="header-anchor" href="#五、openai-访问" aria-hidden="true">#</a> 五、OpenAI 访问</h2><h3 id="_1-重定向" tabindex="-1"><a class="header-anchor" href="#_1-重定向" aria-hidden="true">#</a> 1. 重定向</h3><p>在 default.conf 中添加如下配置后重启 Nginx 即可；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /d5fe/ <span class="token punctuation">{</span>
  rewrite ^/d5fe/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
  proxy_pass  https://api.openai.com<span class="token punctuation">;</span>
  proxy_ssl_server_name on<span class="token punctuation">;</span>
  proxy_set_header Host api.openai.com<span class="token punctuation">;</span>
  proxy_set_header Connection <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
  chunked_transfer_encoding off<span class="token punctuation">;</span>
  proxy_buffering off<span class="token punctuation">;</span>
  proxy_cache off<span class="token punctuation">;</span>
  proxy_set_header X-Forwarded-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
  proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-auth-request" tabindex="-1"><a class="header-anchor" href="#_2-auth-request" aria-hidden="true">#</a> 2. auth_request</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  api.xfg.im<span class="token punctuation">;</span>

    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://<span class="token variable">$server_name</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  api.xfg.im<span class="token punctuation">;</span>

    ssl_certificate      /etc/nginx/ssl/9877497_api.xfg.im.pem<span class="token punctuation">;</span>
    ssl_certificate_key  /etc/nginx/ssl/9877497_api.xfg.im.key<span class="token punctuation">;</span>
    
    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>
    
    ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>
    
    location / <span class="token punctuation">{</span>
        proxy_set_header   X-Real-IP         <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header   X-Forwarded-For   <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    location /abc/ <span class="token punctuation">{</span>
    	 auth_request /auth<span class="token punctuation">;</span>
         rewrite ^/abc/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
         proxy_pass  https://api.openai.com<span class="token punctuation">;</span>
         proxy_ssl_server_name on<span class="token punctuation">;</span>
         proxy_set_header Host api.openai.com<span class="token punctuation">;</span>
         proxy_set_header Connection <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
         proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
         chunked_transfer_encoding off<span class="token punctuation">;</span>
         proxy_buffering off<span class="token punctuation">;</span>
         proxy_cache off<span class="token punctuation">;</span>
         proxy_set_header X-Forwarded-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
         proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     
     location <span class="token operator">=</span> /auth <span class="token punctuation">{</span>
        <span class="token comment"># 发送子请求到HTTP服务，验证客户端的凭据，返回响应码</span>
        internal<span class="token punctuation">;</span>
        <span class="token comment"># 设置参数</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$query</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_uri</span> ~* <span class="token string">&quot;[^\\?]+\\?(.*)$&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin class-name">set</span> <span class="token variable">$query</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># 验证成功，返回200 OK</span>
        proxy_pass http://207.246.123.*:8090/auth/token?<span class="token variable">$query</span><span class="token punctuation">;</span>
        <span class="token comment"># 发送原始请求</span>
        proxy_pass_request_body off<span class="token punctuation">;</span>
        <span class="token comment"># 清空 Content-Type</span>
        proxy_set_header Content-Type <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,13),N=n("strong",null,"其他资料",-1),$={href:"https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart",target:"_blank",rel:"noopener noreferrer"};function S(L,q){const a=p("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[s("作者：小傅哥 "),u,s("博客："),n("a",d,[s("https://bugstack.cn"),e(a)])]),v,n("ul",null,[m,n("li",null,[s("配置文件："),n("a",k,[s("nginx - conf/html/logs/ssl"),e(a)])])]),b,n("p",null,[s("阿里云免费域名证书："),n("a",h,[s("https://yundun.console.aliyun.com/?p=cas#/certExtend/free/cn-hangzhou"),e(a)])]),g,n("p",null,[s("你可以通过 "),_,s(" 工具或者 "),x,s("、"),f,s(" 命令创建一些服务器本地用于映射的文件夹和文件，这里小傅哥使用了 "),n("a",y,[s("Termius"),e(a)]),s(" 工具进行创建操作。")]),w,n("p",null,[N,s("："),n("a",$,[s("Nginx 简明教程 @dunwu"),e(a)]),s(" - 非常适合学习Nginx配置。")])])}const H=i(c,[["render",S],["__file","2023-04-18-nginx.html.vue"]]);export{H as default};
