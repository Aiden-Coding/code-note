import{_ as o,r as p,o as l,c as i,a as n,b as s,d as e,e as t}from"./app-cCF93fuz.js";const r={},c=n("h1",{id:"【部署教程】chatglm-6b-开源双语对话语言模型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#【部署教程】chatglm-6b-开源双语对话语言模型","aria-hidden":"true"},"#"),s(" 【部署教程】ChatGLM-6B 开源双语对话语言模型")],-1),d=n("br",null,null,-1),u={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},m=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！😄")],-1),v={href:"https://github.com/THUDM/ChatGLM-6B",target:"_blank",rel:"noopener noreferrer"},b=t('<p><img src="https://bugstack.cn/images/article/algorithm/model/model-3-01.png" alt=""></p><p>ChatGLM-6B 是清华开源的一个小型对话模型，让大家可以在自己部署起来跑一跑看看效果。但对于本身不是从事此类工作的其他研发伙伴来说，部署这个东西多半都会卡在环境上。所以小傅哥在<code>本地/云服务</code>部署体验后，把相关经验分享下，让有需要的伙伴也可以尝尝鲜。</p><h2 id="一、模型简述" tabindex="-1"><a class="header-anchor" href="#一、模型简述" aria-hidden="true">#</a> 一、模型简述</h2><p>ChatGLM 参考了 ChatGPT 的设计思路，在千亿基座模型 GLM-130B 中注入了代码预训练，通过有监督微调（Supervised Fine-Tuning）等技术实现人类意图对齐。2022年11月，斯坦福大学大模型中心对全球30个主流大模型进行了全方位的评测，<strong>GLM-130B 是亚洲唯一入选的大模型👍🏻</strong>。</p><p><img src="https://bugstack.cn/images/article/algorithm/model/model-3-02.png" alt=""></p><p>同时 ChatGLM 团队为与社区一起更好地推动大模型技术的发展，清华开源了 ChatGLM-6B 模型。它是一个初具中文问答和对话功能的小型模型，可以让大家即使在本地和一些小型的服务器上就可以部署体验。</p>',6),k={href:"https://github.com/THUDM/ChatGLM-6B",target:"_blank",rel:"noopener noreferrer"},h={href:"https://chatglm.cn/blog",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,[s("资源：自己训练的话，建议"),n("code",null,"10核、64g内存、22g显存")],-1),_=t('<h2 id="二、基础环境" tabindex="-1"><a class="header-anchor" href="#二、基础环境" aria-hidden="true">#</a> 二、基础环境</h2><h3 id="_1-服务配置" tabindex="-1"><a class="header-anchor" href="#_1-服务配置" aria-hidden="true">#</a> 1. 服务配置</h3><p>ChatGLM-6B 虽然已经是很温馨提供的，能最佳支持对话的最小模型了，但实际部署的时候仍需要一个不小的服务器<code>32G内存</code>配置或者有较好的<code>16G NVIDIA</code>显卡。可能就怕大家部署起来，所以官网上也提供了更低成本的部署方案，INT8和INT4 数据模型。整体所需空间如下；</p><table><thead><tr><th><strong>量化等级</strong></th><th><strong>最低 GPU 显存</strong>（推理）</th><th><strong>最低 GPU 显存</strong>（高效参数微调）</th></tr></thead><tbody><tr><td>FP16（无量化）</td><td>13 GB</td><td>14 GB</td></tr><tr><td>INT8</td><td>8 GB</td><td>9 GB</td></tr><tr><td>INT4</td><td>6 GB</td><td>7 GB</td></tr></tbody></table><p>小傅哥自己也是在 <code>Mac M1</code>、<code>轻量云主机</code>，还有一个专门用于测试<code>AIGC的服务器</code>上，都做了测试验证，这样也能避免大家走弯路。就像我在一款8G内存的轻量云主机上，部署 INT4 模型，报错如下；</p><p><img src="https://bugstack.cn/images/article/algorithm/model/model-3-03.png" alt=""></p><p>😂 所以别买一些配置不佳的机器，否则你根本跑不起来，还浪费钱。</p><h3 id="_2-工程代码" tabindex="-1"><a class="header-anchor" href="#_2-工程代码" aria-hidden="true">#</a> 2. 工程代码</h3><p><img src="https://bugstack.cn/images/article/algorithm/model/model-3-04.png" alt=""></p>',9),f=n("strong",null,"源码",-1),y={href:"https://github.com/THUDM/ChatGLM-6B",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="_3-算法模型" tabindex="-1"><a class="header-anchor" href="#_3-算法模型" aria-hidden="true">#</a> 3. 算法模型</h3><p>在 ChatGLM-6B 中有一段代码是配置模型地址的，除了说明的Mac电脑，理论上来说它可以自动下载。但这些模型太大了，所以最好是提前下载到本地使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">//</span> web_demo2<span class="token punctuation">.</span>py 部分代码
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;/Users/xfg/develop/github/chatglm-6b&quot;</span><span class="token punctuation">,</span> trust_remote_code<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> AutoModel<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;/Users/xfg/develop/github/chatglm-6b&quot;</span><span class="token punctuation">,</span> trust_remote_code<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>half<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cuda<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/algorithm/model/model-3-05.png" alt=""></p>`,4),w=n("strong",null,"官网",-1),M={href:"https://huggingface.co/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://huggingface.co/THUDM/chatglm-6b/tree/main",target:"_blank",rel:"noopener noreferrer"},T={href:"https://huggingface.co/THUDM/chatglm-6b-int4/tree/main",target:"_blank",rel:"noopener noreferrer"},G={href:"https://huggingface.co/THUDM/chatglm-6b-int8/tree/main",target:"_blank",rel:"noopener noreferrer"},U={href:"https://huggingface.co/THUDM/visualglm-6b/tree/main",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2F&mode=list",target:"_blank",rel:"noopener noreferrer"},B=n("strong",null,"注意",-1),C={href:"https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b&mode=list",target:"_blank",rel:"noopener noreferrer"},I={href:"https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b-int4&mode=list",target:"_blank",rel:"noopener noreferrer"},q={href:"https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b-int8&mode=list",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"_4-软件版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-软件版本","aria-hidden":"true"},"#"),s(" 4. 软件版本")],-1),A=n("div",{align:"center"},[n("img",{src:"https://bugstack.cn/images/article/algorithm/model/model-3-06.png?raw=true",width:"650px"})],-1),R={href:"https://developer.apple.com/metal/pytorch/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://developer.apple.com/metal/pytorch",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,"Python 3.10.8 或更高版本 - 因为有些聊天的界面模块，需要这个版本。",-1),N=t(`<h3 id="_5-软件卸载" tabindex="-1"><a class="header-anchor" href="#_5-软件卸载" aria-hidden="true">#</a> 5. 软件卸载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 卸载 python3/python 注意先看下版本 python -V 确认下名称是 python 还是 python3 以及 pip</span>
<span class="token function">whereis</span> python3 <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-frv</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/bin/python3 /usr/local/bin/pip3
<span class="token comment"># 2. 卸载 openssl - 如果安装了老版本的python，又安装新的，可能需要卸载 ssl 重新安装</span>
<span class="token function">whereis</span> openssl <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-frv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你的电脑或者服务器之前已经安装了 python 那么可以先把它卸载掉。</li></ul><h2 id="三、环境配置-服务器版本" tabindex="-1"><a class="header-anchor" href="#三、环境配置-服务器版本" aria-hidden="true">#</a> 三、环境配置 - 服务器版本</h2><p>以能运行起 ChatGLM-6B 只需要以下5个步骤；</p><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-07.png?raw=true" width="650px"></div>`,6),j={href:"https://github.com/THUDM/ChatGLM-6B",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"[2023/05/17] 发布",-1),z={href:"https://github.com/THUDM/VisualGLM-6B/",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"一个支持图像理解的多模态对话语言模型。",-1),F=t(`<h3 id="步骤1-环境安装" tabindex="-1"><a class="header-anchor" href="#步骤1-环境安装" aria-hidden="true">#</a> 步骤1：环境安装</h3><h4 id="_1-openssl" tabindex="-1"><a class="header-anchor" href="#_1-openssl" aria-hidden="true">#</a> 1. openssl</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># <span class="token number">1.</span> 卸载openssl

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-python-3-10" tabindex="-1"><a class="header-anchor" href="#_2-python-3-10" aria-hidden="true">#</a> 2. Python 3.10</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

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
ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3<span class="token operator">/</span>bin<span class="token operator">/</span>python3 <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>python3

# <span class="token number">11.</span> 测试
python3 <span class="token operator">-</span><span class="token class-name">V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-安装pip3" tabindex="-1"><a class="header-anchor" href="#_3-安装pip3" aria-hidden="true">#</a> 3. 安装pip3</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-安装git" tabindex="-1"><a class="header-anchor" href="#_4-安装git" aria-hidden="true">#</a> 4. 安装git</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">~</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤2-代码下载" tabindex="-1"><a class="header-anchor" href="#步骤2-代码下载" aria-hidden="true">#</a> 步骤2：代码下载</h3><p>在Linux服务器，可以直接在 cd ~ 目录下执行；<code>git clone git://github.com/THUDM/ChatGLM-6B.git</code></p><h3 id="步骤3-模型下载" tabindex="-1"><a class="header-anchor" href="#步骤3-模型下载" aria-hidden="true">#</a> 步骤3：模型下载</h3>`,12),$={href:"https://huggingface.co/THUDM/chatglm-6b/tree/main",target:"_blank",rel:"noopener noreferrer"},O={href:"https://cloud.tsinghua.edu.cn/d/fb9f16d6dc8f482596c2/",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"目录：基础环境",-1),W=t(`<p>本地直接环境直接下载，网络环境可以通过 SFTP - Termius 传到一个 <code>ChatGLM-6B/data</code> 目录下。或者直接通过 <code>wget http://...</code> 这样的命令方式直接下载模型。<strong>会需要较长的耗时</strong></p><h3 id="步骤4-安装配置" tabindex="-1"><a class="header-anchor" href="#步骤4-安装配置" aria-hidden="true">#</a> 步骤4：安装配置</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># sudo su <span class="token operator">-</span> 切换到root 或者通过 sudo 执行。镜像可以换一换，看看哪个快用哪个。
sudo pip install <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt <span class="token operator">-</span>i https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirror<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple

# 执行成功案例 <span class="token operator">-</span> 过程较长
  
  <span class="token class-name">Looking</span> in indexes<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirror<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple
<span class="token class-name">Collecting</span> protobuf
  <span class="token class-name">Downloading</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirror<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>packages<span class="token operator">/</span><span class="token number">06</span><span class="token operator">/</span><span class="token number">38</span><span class="token operator">/</span>e72c556c25aaaaafca75018d2d0ebc50c5ab80983dd4def086624fba43f2<span class="token operator">/</span>protobuf<span class="token operator">-</span><span class="token number">4.23</span><span class="token number">.0</span><span class="token operator">-</span>cp37<span class="token operator">-</span>abi3<span class="token operator">-</span>manylinux2014_x86_64<span class="token punctuation">.</span>whl <span class="token punctuation">(</span><span class="token number">304</span> kB<span class="token punctuation">)</span>
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <span class="token number">304.5</span><span class="token operator">/</span><span class="token number">304.5</span> <span class="token constant">KB</span> <span class="token number">19.4</span> <span class="token constant">MB</span><span class="token operator">/</span>s eta <span class="token number">0</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span>
<span class="token class-name">Collecting</span> transformers<span class="token operator">==</span><span class="token number">4.27</span><span class="token number">.1</span>
  <span class="token class-name">Downloading</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirror<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>packages<span class="token operator">/</span><span class="token number">6d</span><span class="token operator">/</span><span class="token number">9</span>b<span class="token operator">/</span><span class="token number">2f</span><span class="token number">536f</span><span class="token number">9e73390209</span>e0b27b74691355dac494b7ec8154f3012fdc6debbae7<span class="token operator">/</span>transformers<span class="token operator">-</span><span class="token number">4.27</span><span class="token number">.1</span><span class="token operator">-</span>py3<span class="token operator">-</span>none<span class="token operator">-</span>any<span class="token punctuation">.</span>whl <span class="token punctuation">(</span><span class="token number">6.7</span> <span class="token constant">MB</span><span class="token punctuation">)</span>
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <span class="token number">6.7</span><span class="token operator">/</span><span class="token number">6.7</span> <span class="token constant">MB</span> <span class="token number">10.4</span> <span class="token constant">MB</span><span class="token operator">/</span>s eta <span class="token number">0</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于本地的网络和普通的服务器，这个步骤会执行较长的时间。如果执行失败了，在此继续执行就可以，直至得到上天的眷顾，你成功了！！！</li></ul><h3 id="步骤5-启动执行" tabindex="-1"><a class="header-anchor" href="#步骤5-启动执行" aria-hidden="true">#</a> 步骤5：启动执行</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 切换到 <span class="token class-name">ChatGLM</span><span class="token operator">-</span><span class="token number">6</span>B 工程目录，执行
python3 <span class="token operator">-</span>m streamlit run <span class="token punctuation">.</span>/web_demo2<span class="token punctuation">.</span>py <span class="token operator">--</span>server<span class="token punctuation">.</span>port <span class="token number">7397</span> <span class="token operator">--</span>server<span class="token punctuation">.</span>address <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span>

# 执行结果 <span class="token operator">-</span> 成功后有这样的效果
<span class="token class-name">Collecting</span> usage <span class="token class-name"><span class="token namespace">statistics<span class="token punctuation">.</span></span> To</span> deactivate<span class="token punctuation">,</span> set browser<span class="token punctuation">.</span>gatherUsageStats <span class="token keyword">to</span> <span class="token class-name">False<span class="token punctuation">.</span>


  You</span> can now view your <span class="token class-name">Streamlit</span> app in your browser<span class="token punctuation">.</span>

  <span class="token constant">URL</span><span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">7397</span>

<span class="token class-name">Explicitly</span> passing a \`revision\` is encouraged when loading a model <span class="token keyword">with</span> <span class="token namespace">custom</span> code <span class="token keyword">to</span> <span class="token namespace">ensure</span> no malicious code has been contributed in a newer <span class="token class-name"><span class="token namespace">revision<span class="token punctuation">.</span></span>
Explicitly</span> passing a \`revision\` is encouraged when loading a configuration <span class="token keyword">with</span> <span class="token namespace">custom</span> code <span class="token keyword">to</span> <span class="token namespace">ensure</span> no malicious code has been contributed in a newer <span class="token class-name"><span class="token namespace">revision<span class="token punctuation">.</span></span>
Explicitly</span> passing a \`revision\` is encouraged when loading a model <span class="token keyword">with</span> <span class="token namespace">custom</span> code <span class="token keyword">to</span> <span class="token namespace">ensure</span> no malicious code has been contributed in a newer <span class="token class-name"><span class="token namespace">revision<span class="token punctuation">.</span></span>
Loading</span> checkpoint shards<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token operator">|</span>██████████████████████████████████████████████████████████████████████████████████████████████████████████<span class="token operator">|</span> <span class="token number">8</span><span class="token operator">/</span><span class="token number">8</span> <span class="token punctuation">[</span><span class="token number">01</span><span class="token operator">:</span><span class="token number">30</span><span class="token operator">&lt;</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">11.35</span>s<span class="token operator">/</span>it<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>你可以指定端口，并对端口开放访问权限。之后就可以反问地址；<code>http://你的服务器地址:端口</code></li><li>初次使用的时候，会进行模型的启动，也就是这个阶段，很多配置不佳的服务器是没法启动成功的。</li></ul><h2 id="四、环境配置-aigc版本" tabindex="-1"><a class="header-anchor" href="#四、环境配置-aigc版本" aria-hidden="true">#</a> 四、环境配置 - AIGC版本</h2><p>这是一个<code>钞能力</code>版本，你只需要花钱到位，体验个几小时，那么这个是最节省成本的。你可以通过我的邀请链接进入，这样会得到一些使用配额，可能不需要花钱。</p><h3 id="_1-注册服务" tabindex="-1"><a class="header-anchor" href="#_1-注册服务" aria-hidden="true">#</a> 1. 注册服务</h3>`,10),K={href:"https://www.lanrui-ai.com/register?invitation_code=3931177594",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.lanrui-ai.com/console/workspace",target:"_blank",rel:"noopener noreferrer"},X=t(`<h3 id="_2-选择服务" tabindex="-1"><a class="header-anchor" href="#_2-选择服务" aria-hidden="true">#</a> 2. 选择服务</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-08.png?raw=true" width="950px"></div><ul><li>￥1.90/时，不确定一直有。同配置的4.9元每小时。从你购买启动开始计费，安装环境较好时，整个过程需要大概需要20元左右，能体验到。</li></ul><h3 id="_3-配置环境" tabindex="-1"><a class="header-anchor" href="#_3-配置环境" aria-hidden="true">#</a> 3. 配置环境</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-09.png?raw=true" width="950px"></div><ul><li>创建服务后，运行镜像选择；pytorch -&gt; cuda 最后这个版本。</li><li>预训练模型选择 chatglm-6b 这样你也不需要自己下载模型数据了。</li></ul><h3 id="_4-控制平台" tabindex="-1"><a class="header-anchor" href="#_4-控制平台" aria-hidden="true">#</a> 4. 控制平台</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-10.png?raw=true" width="950px"></div><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-11.png?raw=true" width="950px"></div><ul><li>从工作空间进入到控制台，你可以分别<code>从 data 看到 ChatGLM-6B 的代码</code> 在<code>imported_models 看到预训练模型 chatglm-6b</code></li></ul><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-12.png?raw=true" width="950px"></div><ul><li>检查工程 web_demo2.py 中加载模型的路径是否正确，如果不对需要修改。</li><li>如果你的服务中，没有默认下载或者需要重新下载。那么你可以安装 git 指令，下载代码到 data 仓库即可。</li></ul><h3 id="_5-初始配置" tabindex="-1"><a class="header-anchor" href="#_5-初始配置" aria-hidden="true">#</a> 5. 初始配置</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-13.png?raw=true" width="950px"></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>user<span class="token annotation punctuation">@lsp</span><span class="token operator">-</span>ws<span class="token operator">:</span><span class="token operator">~</span><span class="token operator">/</span>data$ sudo su
root<span class="token annotation punctuation">@lsp</span><span class="token operator">-</span>ws<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>user<span class="token operator">/</span>data# cd <span class="token class-name">ChatGLM</span><span class="token operator">-</span><span class="token number">6</span>B<span class="token operator">/</span>
root<span class="token annotation punctuation">@lsp</span><span class="token operator">-</span>ws<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>user<span class="token operator">/</span>data<span class="token operator">/</span><span class="token class-name">ChatGLM</span><span class="token operator">-</span><span class="token number">6</span>B# pip install <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这个安装速度会非常快，几乎不需要太久的等待。</li></ul><h3 id="_6-启动服务" tabindex="-1"><a class="header-anchor" href="#_6-启动服务" aria-hidden="true">#</a> 6. 启动服务</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-14.png?raw=true" width="950px"></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>python3 <span class="token operator">-</span>m streamlit run <span class="token punctuation">.</span>/web_demo2<span class="token punctuation">.</span>py <span class="token operator">--</span>server<span class="token punctuation">.</span>port <span class="token number">27777</span> <span class="token operator">--</span>server<span class="token punctuation">.</span>address <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>另外 ChatGLM-6B 还提供了命令行测试 <code>python cli_demo.py</code> 和 API 启动 <code>python api.py</code></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>curl <span class="token operator">-</span><span class="token class-name">X</span> <span class="token constant">POST</span> <span class="token string">&quot;http://127.0.0.1:8000&quot;</span> \\
     <span class="token operator">-</span><span class="token class-name">H</span> &#39;<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> application<span class="token operator">/</span>json&#39; \\
     <span class="token operator">-</span>d &#39;<span class="token punctuation">{</span><span class="token string">&quot;prompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你好&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;history&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-访问服务" tabindex="-1"><a class="header-anchor" href="#_7-访问服务" aria-hidden="true">#</a> 7. 访问服务</h3><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-15.png?raw=true" width="950px"></div><ul><li>回到控制台复制调试地址，即可访问；</li></ul><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-16.png?raw=true" width="650px"></div><ul><li>如果你报错了，那么在控制台执行安装即可。</li><li><code>control + c</code> 停止服务，执行 <code>pip install icetk</code></li><li>再次执行步骤6启动服务，现在在访问。<code>python3 -m streamlit run ./web_demo2.py --server.port 27777 --server.address 0.0.0.0</code></li></ul><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-17.png?raw=true" width="650px"></div><ul><li>初次运行，它会加载模型。在控制台可以看到加载的模型进度，大概几分钟就加载好了。</li></ul><div align="center"><img src="https://bugstack.cn/images/article/algorithm/model/model-3-18.png?raw=true" width="650px"></div><ul><li>看到控制台的模型加载完毕后，再次点击下<strong>发送</strong> 好了，到你也可以测试下发送其他的内容，进行体验。</li></ul><h2 id="五、环境配置-docker-版本" tabindex="-1"><a class="header-anchor" href="#五、环境配置-docker-版本" aria-hidden="true">#</a> 五、环境配置 - Docker 版本</h2>`,31),J={href:"https://www.luckzym.com/posts/e95da08c/",target:"_blank",rel:"noopener noreferrer"},Q=t(`<h3 id="_1-编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#_1-编写dockerfile文件" aria-hidden="true">#</a> 1. 编写<code>DockerFile</code>文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置基础映像
FROM nvidia/cuda:11.8.0-cudnn8-devel-ubuntu22.04

# 定义构建参数
# 例如ARG USER=test为USER变量设置默认值&quot;test&quot;。
ARG USER=test
ARG PASSWORD=\${USER}123$

# 处理讨厌的 Python 3 编码问题
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND noninteractive
ENV MPLLOCALFREETYPE 1

# 更新软件包列表并安装软件属性通用包
RUN apt-get update &amp;&amp; apt-get install -y software-properties-common

# 添加Python ppa，以便后续安装Python版本
RUN add-apt-repository ppa:deadsnakes/ppa

# 安装Ubuntu的常用软件包，包括wget、vim、curl、zip、unzip等
RUN apt-get update &amp;&amp; apt-get install -y \\
    build-essential \\
    git \\
    wget \\
    vim \\
    curl \\
    zip \\
    zlib1g-dev \\
    unzip \\
    pkg-config \\
    libgl-dev \\
    libblas-dev \\
    liblapack-dev \\
    python3-tk \\
    python3-wheel \\
    graphviz \\
    libhdf5-dev \\
    python3.9 \\
    python3.9-dev \\
    python3.9-distutils \\
    openssh-server \\
    swig \\
    apt-transport-https \\
    lsb-release \\
    libpng-dev \\
    ca-certificates &amp;&amp;\\
    apt-get clean &amp;&amp;\\
    ln -s /usr/bin/python3.9 /usr/local/bin/python &amp;&amp;\\
    ln -s /usr/bin/python3.9 /usr/local/bin/python3 &amp;&amp;\\
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py &amp;&amp;\\
    python3 get-pip.py &amp;&amp;\\
    rm get-pip.py &amp;&amp;\\
    # 清理APT缓存以减小Docker镜像大小
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# 设置时区
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone

# 为应用程序创建一个用户
RUN useradd --create-home --shell /bin/bash --groups sudo \${USER}
RUN echo \${USER}:\${PASSWORD} | chpasswd
USER \${USER}
ENV HOME /home/\${USER}
WORKDIR $HOME

# 安装一些Python库，例如numpy、matplotlib、scipy等
RUN python3 -m pip --no-cache-dir install \\
    blackcellmagic\\
    pytest \\
    pytest-cov \\
    numpy \\
    matplotlib \\
    scipy \\
    pandas \\
    jupyter \\
    scikit-learn \\
    scikit-image \\
    seaborn \\
    graphviz \\
    gpustat \\
    h5py \\
    gitpython \\
    ptvsd \\
    Pillow==6.1.0 \\
    opencv-python

# 安装PyTorch和DataJoint等其他库
# 其中torch==1.13.1表示安装版本为1.13.1的PyTorch
RUN python3 -m pip --no-cache-dir install \\
    torch==1.13.1 \\
    torchvision==0.14.1 \\
    torchaudio==0.13.1 \\
    &#39;jupyterlab&gt;=2&#39;

RUN python3 -m pip --no-cache-dir install datajoint==0.12.9

# 设置环境变量LD_LIBRARY_PATH，以便支持性能分析库
ENV LD_LIBRARY_PATH /usr/local/cuda/extras/CUPTI/lib64:\${LD_LIBRARY_PATH}

# 启动ssh服务器，打开22号端口
USER root

RUN mkdir /var/run/sshd
EXPOSE 22
CMD [&quot;/usr/sbin/sshd&quot;, &quot;-D&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-编写docker-compose文件" tabindex="-1"><a class="header-anchor" href="#_2-编写docker-compose文件" aria-hidden="true">#</a> 2. 编写<code>Docker-Compose</code>文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.9&quot;
services:
  nvidia:
    build: .        # 告诉Docker Compose在当前目录中查找Dockerfile并构建镜像
    runtime: nvidia # 启用nvidia-container-runtime作为Docker容器的参数，从而实现对GPU的支持
    environment:
      - NVIDIA_VISIBLE_DEVICES=all  # 设置所有可用的GPU设备
    ports:
      - &quot;22:22&quot;         # port for ssh
      - &quot;80:80&quot;         # port for Web
      - &quot;8000:8000&quot;     # port for API
    tty: true           # 创建一个伪终端以保持容器运行状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-搭建步骤" tabindex="-1"><a class="header-anchor" href="#_3-搭建步骤" aria-hidden="true">#</a> 3. 搭建步骤</h3><h4 id="_3-1-准备docker容器-ai模型文件" tabindex="-1"><a class="header-anchor" href="#_3-1-准备docker容器-ai模型文件" aria-hidden="true">#</a> 3.1 准备Docker容器&amp;AI模型文件</h4><ul><li>修改<code>Docker Compose</code>文件，添加<code>volumes</code>路径</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.9&quot;
services:
  nvidia:
    build: .        # 告诉Docker Compose在当前目录中查找Dockerfile并构建镜像
    runtime: nvidia # 启用nvidia-container-runtime作为Docker容器的参数，从而实现对GPU的支持
    environment:
      - NVIDIA_VISIBLE_DEVICES=all  # 设置所有可用的GPU设备
    ports:
      - &quot;22:22&quot;         # port for ssh
      - &quot;80:80&quot;         # port for Web
      - &quot;8000:8000&quot;     # port for API
    tty: true           # 创建一个伪终端以保持容器运行状态
    # 添加一个和宿主机连接的路径
    volumes:
      - ./:/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>下载对应的AI模块文件</li></ul><p>从<code>Hugging Face Hub</code>下载所需要的模型，由于我使用的显卡只有<code>8G</code>显存，所以直接下载了<code>INT4</code>量化后的模型。</p>`,10),nn=n("p",null,[n("strong",null,"AI模型下载地址：")],-1),sn={href:"https://huggingface.co/THUDM/chatglm-6b",target:"_blank",rel:"noopener noreferrer"},an={href:"https://huggingface.co/THUDM/chatglm-6b-int4",target:"_blank",rel:"noopener noreferrer"},en={href:"https://huggingface.co/THUDM/chatglm-6b-int8",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"Git",-1),on=n("code",null,"Git",-1),pn={href:"https://docs.github.com/zh/repositories/working-with-files/managing-large-files/installing-git-large-file-storage",target:"_blank",rel:"noopener noreferrer"},ln=t(`<p>仓库存储的地方就放在我当前创建<code>Docker Compose</code>文件目录下，这样刚好可以利用<code>volumes</code>将其映射进容器中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Make sure you have git-lfs installed (https://git-lfs.com)
git lfs install
git clone https://huggingface.co/THUDM/chatglm-6b-int4

# if you want to clone without large files – just their pointers
# prepend your git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-准备chatglm-6b并运行" tabindex="-1"><a class="header-anchor" href="#_3-2-准备chatglm-6b并运行" aria-hidden="true">#</a> 3.2 准备ChatGLM-6B并运行</h4><ul><li>拉取官方<code>ChatGLM-6B</code>项目仓库文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/THUDM/ChatGLM-6B.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仓库存储的地方依旧是当前创建<code>Docker Compose</code>文件目录。如果大家不希望存放在该目录下可以自行修改一下<code>Docker Compose</code>中的<code>volumes</code>映射路径。</p><ul><li>拉起该深度学习<code>Docker</code>容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up --build -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>进入容器中</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看刚刚启动的深度学习容器的ID号
docker ps

# 进入容器内部
docker exec -it xxxxxxx /bin/bash # xxxxxxx 是PS后容器的CONTAINER ID号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装项目依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd到刚刚拖拽下来的项目仓库中

cd /data/ChatGLM-6B

# 安装项目依赖文件

pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改本地AI模型路径</li></ul><p>在这里我们使用官方提供的命令行Demo程序来做测试。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 打开cli_demo.py文件对其进行修改
VI cli_demo.py

# 修改第6、第7行的代码，将原有的模型名称修改为本地AI模型路径
# 修改结果如下,其中/data/chatglm-6b-int4为你本地AI模型的路径地址
tokenizer = AutoTokenizer.from_pretrained(&quot;/data/chatglm-6b-int4&quot;, trust_remote_code=True)
model = AutoModel.from_pretrained(&quot;/data/chatglm-6b-int4&quot;, trust_remote_code=True).half().cuda()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行仓库中命令行Demo程序：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python cli_demo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不出意外，在命令执行完之后你将可以体验到清华开源的ChatGLM-6B自然语言模型了。</p>`,18);function rn(cn,dn){const a=p("ExternalLinkIcon");return l(),i("div",null,[c,n("p",null,[s("作者：小傅哥 "),d,s("博客："),n("a",u,[s("https://bugstack.cn"),e(a)])]),m,n("p",null,[n("a",v,[s("ChatGLM-6B"),e(a)]),s(" 开源双语对话语言模型，太牛皮了！我要能做一个这个水平的东西，我就AI创业，融资、赚钱、发财，躺平去！哈哈哈！—— 真好，看到这样一个东西，感觉看到了国内 AI 的希望！感谢清华 ChatGLM 团队。")]),b,n("ul",null,[n("li",null,[s("源码："),n("a",k,[s("https://github.com/THUDM/ChatGLM-6B"),e(a)]),s(" - 这里有最新更新的内容和部署说明")]),n("li",null,[s("社区："),n("a",h,[s("https://chatglm.cn/blog"),e(a)]),s(" - 这里有更全面的介绍信息")]),g]),_,n("p",null,[f,s("："),n("a",y,[s("https://github.com/THUDM/ChatGLM-6B"),e(a)]),s(" - 无论你使用哪种部署方式，都需要把代码下载到对应的服务上。")]),x,n("p",null,[w,s("："),n("a",M,[s("https://huggingface.co/"),e(a)]),s(" - 提供模型下载，按照你的需要下载对应的测试模型到服务器上；")]),n("ul",null,[n("li",null,[s("chatglm-6b："),n("a",D,[s("https://huggingface.co/THUDM/chatglm-6b/tree/main"),e(a)])]),n("li",null,[s("chatglm-6b-int4："),n("a",T,[s("https://huggingface.co/THUDM/chatglm-6b-int4/tree/main"),e(a)])]),n("li",null,[s("chatglm-6b-int8："),n("a",G,[s("https://huggingface.co/THUDM/chatglm-6b-int8/tree/main"),e(a)])]),n("li",null,[s("visualglm-6b："),n("a",U,[s("https://huggingface.co/THUDM/visualglm-6b/tree/main"),e(a)]),s(" - 用于图形识别的模型，在镜像中还没有。")])]),n("p",null,[s("镜像："),n("a",L,[s("https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2F&mode=list"),e(a)]),s(" - 镜像的下载速度比较快。"),B,s("：镜像中没有基础的内容，需要从官网下载。")]),n("ul",null,[n("li",null,[s("chatglm-6b："),n("a",C,[s("https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b&mode=list"),e(a)])]),n("li",null,[s("chatglm-6b-int4："),n("a",I,[s("https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b-int4&mode=list"),e(a)])]),n("li",null,[s("chatglm-6b-int8："),n("a",q,[s("https://cloud.tsinghua.edu.cn/d/674208019e314311ab5c/?p=%2Fchatglm-6b-int8&mode=list"),e(a)])])]),P,A,n("ul",null,[n("li",null,[n("a",R,[s("macOS 12.3 或更高版本"),e(a)]),s(" - "),n("a",H,[s("https://developer.apple.com/metal/pytorch"),e(a)])]),E]),N,n("p",null,[s("只要你能按照顺序，正确的执行这些步骤，就可以运行起 ChatGLM-6B 模型，接下来就跟着小傅哥的步骤执行吧。注意如果你需要绘图能力，可以在本文学习后。按照官网介绍，替换下模型重新启动即可；"),n("a",j,[s("https://github.com/THUDM/ChatGLM-6B"),e(a)]),s(" - "),S,s(),n("a",z,[s("VisualGLM-6B"),e(a)]),s(),V]),F,n("p",null,[s("可以从官网："),n("a",$,[s("https://huggingface.co/THUDM/chatglm-6b/tree/main"),e(a)]),s(" 或者清华的镜像仓库下载 "),n("a",O,[s("https://cloud.tsinghua.edu.cn/d/fb9f16d6dc8f482596c2/"),e(a)]),s(" - 如果你需要其他模型，可以在"),Y,s("中找到。")]),W,n("p",null,[s("地址："),n("a",K,[s("https://www.lanrui-ai.com/register?invitation_code=3931177594"),e(a)])]),n("p",null,[s("后台："),n("a",Z,[s("https://www.lanrui-ai.com/console/workspace"),e(a)])]),X,n("p",null,[s("在官网的地址中还看到了一个 Docker 的配置方式，我把它引入过来，方便有需要的伙伴进行操作。原文地址："),n("a",J,[s("https://www.luckzym.com/posts/e95da08c/"),e(a)])]),Q,n("blockquote",null,[nn,n("ul",null,[n("li",null,[n("a",sn,[s("THUDM/chatglm-6b"),e(a)])]),n("li",null,[n("a",an,[s("THUDM/chatglm-6b-int4"),e(a)])]),n("li",null,[n("a",en,[s("THUDM/chatglm-6b-int8"),e(a)])])])]),n("p",null,[s("这里推荐使用"),tn,s("工具进行拖拽对应的仓库，在拖拽前记得给"),on,s("工具安装上"),n("a",pn,[s("Git LFS"),e(a)]),s("。")]),ln])}const mn=o(r,[["render",rn],["__file","2023-05-21-chatglm-6b.html.vue"]]);export{mn as default};
