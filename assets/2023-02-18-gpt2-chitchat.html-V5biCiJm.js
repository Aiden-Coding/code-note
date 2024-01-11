import{_ as t,r as o,o as l,c as r,a as s,b as n,d as e,e as p}from"./app-3RcBQnkC.js";const c={},i=s("h1",{id:"【部署教程】基于gpt2训练了一个傻狗机器人",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#【部署教程】基于gpt2训练了一个傻狗机器人","aria-hidden":"true"},"#"),n(" 【部署教程】基于GPT2训练了一个傻狗机器人")],-1),u=s("br",null,null,-1),d={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},k=s("blockquote",null,[s("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),v=s("p",null,[n("首先我想告诉你，从事编程开发这一行，要学会的是"),s("strong",null,"学习的方式方法"),n("。方向对了，才能事半功倍。而我认为最快且行之有效的技术技能学习，就是上手实践。先不要搞太多的理论，买回来的自行车不能上来就拆，得先想办法骑起来。")],-1),m=s("p",null,[n("所以小傅哥就是这样，学东西嘛。以目标为驱动，搭建可运行测试的最小单元版本。因为康威定律说；问题越小，越容易被理解和处理。所以在接触 ChatGPT 以后，我时常都在想怎么自己训练和部署一个这样的聊天对话模型，哪怕是很少的训练数据，让我测试也好。"),s("strong",null,"所以这个会喷人的傻狗机器人来了！")],-1),b=s("h2",{id:"一、傻狗机器聊天",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#一、傻狗机器聊天","aria-hidden":"true"},"#"),n(" 一、傻狗机器聊天")],-1),h={href:"https://bugstack.cn/md/algorithm/model/2023-02-12-chat-gpt.html",target:"_blank",rel:"noopener noreferrer"},g=s("strong",null,"很变态",-1),_=s("div",{align:"center"},[s("img",{src:"https://bugstack.cn/images/article/algorithm/model/model-2-01.png?raw=true",width:"650px"}),s("div",null,"此页面为小傅哥所编程的WEB版聊天对话窗口")],-1),f=s("strong",null,"访问地址",-1),y={href:"http://120.48.169.252/",target:"_blank",rel:"noopener noreferrer"},w=s("strong",null,"视频演示",-1),x={href:"https://www.bilibili.com/video/BV1LG4y1P7bo",target:"_blank",rel:"noopener noreferrer"},j=s("h2",{id:"二、基础配置环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#二、基础配置环境","aria-hidden":"true"},"#"),n(" 二、基础配置环境")],-1),P=s("p",null,"OpenAI GPT2 的模型训练和服务使用，需要用到 Python、TensorFlow 机器学习等相关配置，并且这些环境间有些版本依赖。所以为了顺利调试尽可能和我保持一样的版本。如果你对环境安装有难度，也可以找小傅哥帮忙买一台云服务器，之后我把我的环境镜像到你的服务器上就可以直接使用了。以下是所需的基本环境、代码和数据。",-1),T=s("li",null,[s("strong",null,"系统配置"),n("：Centos 7.9 - "),s("code",null,"2核4GB内存200G磁盘4Mbps带宽的云服务器")],-1),q=s("li",null,[s("strong",null,"部署环境"),n("：Python3.7、 Transformers==4.2.0、pytorch==1.7.0")],-1),G=s("strong",null,"模型代码",-1),z={href:"https://github.com/fuzhengwei/GPT2-chitchat",target:"_blank",rel:"noopener noreferrer"},A=s("strong",null,"模型数据",-1),E={href:"https://pan.baidu.com/s/1iEu_-Avy-JTRsO4aJNiRiA",target:"_blank",rel:"noopener noreferrer"},R=s("code",null,"ju6m",-1),I=p(`<h3 id="_1-环境依赖" tabindex="-1"><a class="header-anchor" href="#_1-环境依赖" aria-hidden="true">#</a> 1 环境依赖</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>yum <span class="token operator">-</span>y install zlib<span class="token operator">-</span>devel bzip2<span class="token operator">-</span>devel openssl<span class="token operator">-</span>devel ncurses<span class="token operator">-</span>devel sqlite<span class="token operator">-</span>devel readline<span class="token operator">-</span>devel tk<span class="token operator">-</span>devel gdbm<span class="token operator">-</span>devel db4<span class="token operator">-</span>devel libpcap<span class="token operator">-</span>devel xz<span class="token operator">-</span>devel

yum install gcc <span class="token operator">-</span>y

yum <span class="token operator">-</span>y install libffi<span class="token operator">-</span>devel

make

make altinstall 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-openssl-结合3使用" tabindex="-1"><a class="header-anchor" href="#_2-openssl-结合3使用" aria-hidden="true">#</a> 2. openssl + 结合3使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># <span class="token number">1.</span> 卸载openssl

whereis openssl <span class="token operator">|</span>xargs rm <span class="token operator">-</span>frv

# <span class="token number">2.</span> 官网下载openssl编译安装

wget http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>openssl<span class="token punctuation">.</span>org<span class="token operator">/</span>source<span class="token operator">/</span>openssl<span class="token operator">-</span><span class="token number">1.1</span><span class="token number">.1</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
tar zxf openssl<span class="token operator">-</span><span class="token number">1.1</span><span class="token number">.1</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
cd openssl<span class="token operator">-</span><span class="token number">1.1</span><span class="token number">.1</span>
<span class="token punctuation">.</span>/config <span class="token operator">--</span>prefix<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>openssl shared zlib
make <span class="token operator">&amp;&amp;</span> make install 

# <span class="token number">3.</span> 设置环境变量 <span class="token constant">LD_LIBRARY_PATH</span>

echo <span class="token string">&quot;export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/openssl/lib&quot;</span> <span class="token operator">&gt;&gt;</span>  <span class="token operator">/</span>etc<span class="token operator">/</span>profile
source <span class="token operator">/</span>etc<span class="token operator">/</span>profile

# <span class="token number">4.</span> 卸载重新编译安装python3

whereis python3 <span class="token operator">|</span>xargs rm <span class="token operator">-</span>frv
rm <span class="token operator">-</span>rf <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>python3 <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>pip3
mkdir <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3
<span class="token punctuation">.</span>/configure <span class="token operator">--</span>prefix<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3 <span class="token operator">--</span>enable<span class="token operator">-</span>optimizations <span class="token operator">--</span><span class="token keyword">with</span><span class="token operator">-</span>openssl<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>openssl
make <span class="token operator">-</span>j8 <span class="token operator">&amp;&amp;</span> make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-python-3-10" tabindex="-1"><a class="header-anchor" href="#_3-python-3-10" aria-hidden="true">#</a> 3. Python 3.10</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

# <span class="token number">1.</span>下载<span class="token class-name">Python</span>安装包
wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>python<span class="token punctuation">.</span>org<span class="token operator">/</span>ftp<span class="token operator">/</span>python<span class="token operator">/</span><span class="token number">3.10</span><span class="token number">.8</span><span class="token operator">/</span><span class="token class-name">Python</span><span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.8</span><span class="token punctuation">.</span>tgz

# <span class="token number">2.</span>将安装包移动到<span class="token operator">/</span>usr<span class="token operator">/</span>local文件夹下
mv <span class="token class-name">Python</span><span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.8</span><span class="token punctuation">.</span>tgz <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>

# <span class="token number">3.</span>在local目录下创建<span class="token class-name">Python3</span>目录
mkdir <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3

# <span class="token number">4.</span>进入的<span class="token class-name">Python</span>安装包压缩包所在的目录
cd <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>

# <span class="token number">5.</span>解压安装包
tar <span class="token operator">-</span>xvf <span class="token class-name">Python</span><span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.8</span><span class="token punctuation">.</span>tgz

# <span class="token number">6.</span>进入解压后的目录
cd <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span><span class="token class-name">Python</span><span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.8</span><span class="token operator">/</span>

# <span class="token number">7.</span>配置安装目录
<span class="token punctuation">.</span>/configure <span class="token operator">--</span>prefix<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3

# <span class="token number">8.</span>编译源码
make

# <span class="token number">9.</span>执行源码安装
make install

# <span class="token number">10.</span>创建软连接
ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3<span class="token operator">/</span>bin<span class="token operator">/</span>python3  <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>python3

# <span class="token number">11.</span> 测试
python3 <span class="token operator">-</span><span class="token class-name">V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-安装pip3" tabindex="-1"><a class="header-anchor" href="#_4-安装pip3" aria-hidden="true">#</a> 4. 安装pip3</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

# <span class="token number">1.</span>下载
wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>bootstrap<span class="token punctuation">.</span>pypa<span class="token punctuation">.</span>io<span class="token operator">/</span>get<span class="token operator">-</span>pip<span class="token punctuation">.</span>py

# <span class="token number">2.</span>安装；注意咱们安装了 python3 所以是 pyhton3 get<span class="token operator">-</span>pip<span class="token punctuation">.</span>py
python3 get<span class="token operator">-</span>pip<span class="token punctuation">.</span>py
  
# <span class="token number">3.</span>查找pip安装路径
find <span class="token operator">/</span> <span class="token operator">-</span>name pip
  
# <span class="token number">4.</span>将pip添加到系统命令
ln <span class="token operator">-</span>s  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python<span class="token operator">/</span>bin<span class="token operator">/</span>pip <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>pip  
  
# <span class="token number">5.</span>测试
pip <span class="token operator">-</span><span class="token class-name">V</span>
  
# <span class="token number">6.</span>更换源，如果不更换那么使用 pip 下载软件会很慢
pip config set global<span class="token punctuation">.</span>index<span class="token operator">-</span>url https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple
pip config set install<span class="token punctuation">.</span>trusted<span class="token operator">-</span>host mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com
pip config list
  
# pip国内镜像源：

# 阿里云 http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
# 中国科技大学  https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>mirrors<span class="token punctuation">.</span>ustc<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple<span class="token operator">/</span>
# 豆瓣 http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>douban<span class="token punctuation">.</span>com<span class="token operator">/</span>simple
# <span class="token class-name">Python</span>官方 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>python<span class="token punctuation">.</span>org<span class="token operator">/</span>simple<span class="token operator">/</span>
# v2ex http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>v2ex<span class="token punctuation">.</span>com<span class="token operator">/</span>simple<span class="token operator">/</span>
# 中国科学院  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>mirrors<span class="token punctuation">.</span>opencas<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple<span class="token operator">/</span>
# 清华大学 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple<span class="token operator">/</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-安装git" tabindex="-1"><a class="header-anchor" href="#_5-安装git" aria-hidden="true">#</a> 5. 安装git</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

# <span class="token number">1.</span>安装前首先得安装依赖环境
yum install <span class="token operator">-</span>y perl<span class="token operator">-</span>devel

# <span class="token number">2.</span>下载源码包到 <span class="token class-name">CentOS</span> 服务器后进行解压
wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>edge<span class="token punctuation">.</span>kernel<span class="token punctuation">.</span>org<span class="token operator">/</span>pub<span class="token operator">/</span>software<span class="token operator">/</span>scm<span class="token operator">/</span>git<span class="token operator">/</span>git<span class="token operator">-</span><span class="token number">2.9</span><span class="token number">.5</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz

tar <span class="token operator">-</span>zxf git<span class="token operator">-</span><span class="token number">2.9</span><span class="token number">.5</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz

cd git<span class="token operator">-</span><span class="token number">2.9</span><span class="token number">.5</span>

# <span class="token number">3.</span>执行如下命令进行编译安装 

<span class="token punctuation">.</span>/configure <span class="token operator">--</span>prefix<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>git

make <span class="token operator">&amp;&amp;</span> make install

# <span class="token number">4.</span>添加到系统环境变量
vim <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc

export <span class="token constant">PATH</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/git/bin:$PATH&quot;</span>

# <span class="token number">5.</span>使配置生效
source <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc

# <span class="token number">6.</span>测试
git version

# <span class="token number">7.</span> 使用
git clone git<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>fuzhengwei<span class="token operator">/</span><span class="token constant">GPT2</span><span class="token operator">-</span>chitchat<span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-安装宝塔" tabindex="-1"><a class="header-anchor" href="#_6-安装宝塔" aria-hidden="true">#</a> 6. 安装宝塔</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>yum install <span class="token operator">-</span>y wget <span class="token operator">&amp;&amp;</span> wget <span class="token operator">-</span><span class="token class-name">O</span> install<span class="token punctuation">.</span>sh https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>download<span class="token punctuation">.</span>bt<span class="token punctuation">.</span>cn<span class="token operator">/</span>install<span class="token operator">/</span>install_6<span class="token punctuation">.</span><span class="token number">0.</span>sh <span class="token operator">&amp;&amp;</span> sh install<span class="token punctuation">.</span>sh <span class="token number">12f</span><span class="token number">2</span>c1d72
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>安装后登录宝塔提示的地址，默认它会使用8888端口，因此你需要在服务器上开启8888端口访问权限。</li><li>宝塔的安装是为了在服务端部署一个网页版聊天界面，使用到了 Nginx 服务。这里用宝塔操作更加容易。</li></ol><h2 id="三、模型运行环境" tabindex="-1"><a class="header-anchor" href="#三、模型运行环境" aria-hidden="true">#</a> 三、模型运行环境</h2><p>模型训练需要用到 transformers 机器学习服务，以及 pytorch、sklearn 等组件；以下内容需要分别安装；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>transformers<span class="token operator">==</span><span class="token number">4.4</span><span class="token number">.2</span>
pytorch<span class="token operator">==</span><span class="token number">1.7</span><span class="token number">.0</span>
sklearn
tqdm
numpy
scipy<span class="token operator">==</span><span class="token number">1.2</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-transformers" tabindex="-1"><a class="header-anchor" href="#_1-transformers" aria-hidden="true">#</a> 1. transformers</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pip install transformers<span class="token operator">==</span><span class="token number">4.4</span><span class="token number">.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-pytorch" tabindex="-1"><a class="header-anchor" href="#_2-pytorch" aria-hidden="true">#</a> 2. pytorch</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pip install torch<span class="token operator">==</span><span class="token number">1.7</span><span class="token number">.0</span><span class="token operator">+</span>cpu torchvision<span class="token operator">==</span><span class="token number">0.8</span><span class="token number">.1</span><span class="token operator">+</span>cpu torchaudio<span class="token operator">==</span><span class="token operator">=</span><span class="token number">0.7</span><span class="token number">.0</span> <span class="token operator">-</span>f https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>download<span class="token punctuation">.</span>pytorch<span class="token punctuation">.</span>org<span class="token operator">/</span>whl<span class="token operator">/</span>torch_stable<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这个torch版本+cpu与torchvision 需要匹配。</li></ul><h3 id="_3-其他安装" tabindex="-1"><a class="header-anchor" href="#_3-其他安装" aria-hidden="true">#</a> 3. 其他安装</h3><p>剩余的按照使用指令 pip install 就可以，另外在运行 GTP2-chitchat 时，如果提示缺少了某些组件，直接使用 pip 按照即可。</p><h2 id="四、聊天页面配置" tabindex="-1"><a class="header-anchor" href="#四、聊天页面配置" aria-hidden="true">#</a> 四、聊天页面配置</h2><p>这里先把小傅哥给你准备好的websocket页面代码，通过宝塔创建站点后部署起来。代码：https://github.com/fuzhengwei/GPT2-chitchat/tree/master/web</p><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-2-02.png?raw=true" width="550px"></div><p>之后通过打开你的宝塔地址，创建站点和上传Web代码。</p><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-2-03.png?raw=true" width="550px"></div><p><strong>注意</strong>：目前的这份代码中访问websocket的配置在index.js中，你需要修改成你的服务器地址。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name"><span class="token namespace">window<span class="token punctuation">.</span></span>WebSocket</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;您的浏览器不支持WebSocket协议！推荐使用谷歌浏览器进行测试。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://120.48.169.252:7397&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、模型训练部署" tabindex="-1"><a class="header-anchor" href="#五、模型训练部署" aria-hidden="true">#</a> 五、模型训练部署</h2><h3 id="_1-下载代码" tabindex="-1"><a class="header-anchor" href="#_1-下载代码" aria-hidden="true">#</a> 1. 下载代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">/</span>home

git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>fuzhengwei<span class="token operator">/</span><span class="token constant">GPT2</span><span class="token operator">-</span>chitchat<span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要修改下 interact.py 代码，变更这里有Websocket 的 IP和端口配置；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>async def <span class="token function">start_server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">try</span><span class="token operator">:</span>
        async <span class="token keyword">with</span> <span class="token namespace">websockets<span class="token punctuation">.</span>serve</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.4&quot;</span><span class="token punctuation">,</span> <span class="token number">7397</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Starting server at ws://localhost:7397&quot;</span><span class="token punctuation">)</span>
            await <span class="token class-name"><span class="token namespace">asyncio<span class="token punctuation">.</span></span>Future</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  # run forever
    except <span class="token class-name">OSError</span> as e<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>f<span class="token string">&quot;Error starting server: {e}&quot;</span><span class="token punctuation">)</span>
    except <span class="token class-name">Exception</span> as e<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>f<span class="token string">&quot;Unexpected error: {e}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-上传模型" tabindex="-1"><a class="header-anchor" href="#_2-上传模型" aria-hidden="true">#</a> 2. 上传模型</h3>`,36),B={href:"https://pan.baidu.com/s/1iEu_-Avy-JTRsO4aJNiRiA#list/path=%2F",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>上传模型：这里你需要在本机安装一个 SFTP 工具，或者使用 IntelliJ IDEA 提供的工具进行链接。链接后就可以把解压的模型上传到 /home/GPT2-chitchat/model 下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>async def <span class="token function">start_server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">try</span><span class="token operator">:</span>
        async <span class="token keyword">with</span> <span class="token namespace">websockets<span class="token punctuation">.</span>serve</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.4&quot;</span><span class="token punctuation">,</span> <span class="token number">7397</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Starting server at ws://localhost:7397&quot;</span><span class="token punctuation">)</span>
            await <span class="token class-name"><span class="token namespace">asyncio<span class="token punctuation">.</span></span>Future</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  # run forever
    except <span class="token class-name">OSError</span> as e<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>f<span class="token string">&quot;Error starting server: {e}&quot;</span><span class="token punctuation">)</span>
    except <span class="token class-name">Exception</span> as e<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>f<span class="token string">&quot;Unexpected error: {e}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改这部分代码的IP和端口，以及在云服务上开启 7397 的访问权限。另外为了安全起见，可以在云服务的防火墙IP来源中授权，只有你当前的台机器才可以链接到 websocket 上。</p><h3 id="_3-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-启动服务" aria-hidden="true">#</a> 3. 启动服务</h3><p>这里小傅哥通过 mac nuoshell 连接工具，进行模型启动；<code>模型路径：/home/GPT2-chitchat/model/model_epoch40_50w</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>python3 interact<span class="token punctuation">.</span>py <span class="token operator">--</span>no_cuda <span class="token operator">--</span>model_path <span class="token operator">/</span>home<span class="token operator">/</span><span class="token constant">GPT2</span><span class="token operator">-</span>chitchat<span class="token operator">/</span>model<span class="token operator">/</span>model_epoch40_50w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-2-04.png?raw=true" width="750px"></div><ul><li>启动后就可以把你的 websocket 页面打开了，它会自动的链接到这个 websocket 服务上。</li><li>如果你还需要 Socket 或者命令行的服务，也可以修改 interact.py 代码进行处理。</li></ul><hr><p>以上就是整个 GPT2-chitchat 一个闲聊模型的部署，你也可以尝试使用 Docker 部署。如果在部署过程中实在很难部署成功，也可以找小傅哥买云服务，这样我可以直接把镜像部署到你的云服务上，就可以直接使用了。</p>`,10);function L(O,J){const a=o("ExternalLinkIcon");return l(),r("div",null,[i,s("p",null,[n("作者：小傅哥 "),u,n("博客："),s("a",d,[n("https://bugstack.cn"),e(a)])]),k,v,m,b,s("p",null,[n("在基于前文小傅哥"),s("a",h,[n("《搭个ChatGPT算法模型》"),e(a)]),n("的学习基础之上，以 OpenAI 开源的 GPT-2 和相关的 GPT2-chitchat 模型训练代码，部署了这个会喷人的傻狗机器人。但由于训练数据的问题，这个聊天机器人对起话来，总感觉"),g,n("。—— 不过不影响我们做算法模型训练的学习。")]),_,s("ul",null,[s("li",null,[f,n("："),s("a",y,[n("http://120.48.169.252/"),e(a)]),n(" - 服务器配置有限，不能承载过大的并发访问。")]),s("li",null,[w,n("："),s("a",x,[n("https://www.bilibili.com/video/BV1LG4y1P7bo"),e(a)]),n(" - 也可以通过B站视频，观看GPT2模型部署演示。")])]),j,P,s("ul",null,[T,q,s("li",null,[G,n("："),s("a",z,[n("https://github.com/fuzhengwei/GPT2-chitchat"),e(a)]),n(" - 此代码已开源，含websocket通信页面")]),s("li",null,[A,n("："),s("a",E,[n("https://pan.baidu.com/s/1iEu_-Avy-JTRsO4aJNiRiA"),e(a)]),n(" - "),R])]),I,s("p",null,[n("下载模型："),s("a",B,[n("https://pan.baidu.com/s/1iEu_-Avy-JTRsO4aJNiRiA#list/path=%2F"),e(a)]),n(" - 密码：ju6m")]),S])}const V=t(c,[["render",L],["__file","2023-02-18-gpt2-chitchat.html.vue"]]);export{V as default};
