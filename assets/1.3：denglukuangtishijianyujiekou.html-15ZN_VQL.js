import{_ as e,r as i,o as t,c as l,a as n,b as a,d as c,f as o,e as r}from"./app-3RcBQnkC.js";const u={},p=n("h1",{id:"_1-3-登陆框体事件与接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-登陆框体事件与接口","aria-hidden":"true"},"#"),a(" 1.3：登陆框体事件与接口")],-1),d=n("br",null,null,-1),v={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},m=n("blockquote",null,[n("p",null,"沉淀、分享、成长，让自己和他人都能有所收获！")],-1),h=n("h2",{id:"一、前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、前言","aria-hidden":"true"},"#"),a(" 一、前言")],-1),k=n("ul",null,[n("li",null,"在上一章节中我们把登陆窗体开发完成了，并进行了效果演示。那么接下来我们就需要在这个窗体里面添加行为事件和接口，待完成内容如下；")],-1),_=r(`<ul><li><p>在桌面版程序开发中不同于 web。桌面版开发需要有界面的事件的发起，例如 Button 按钮点击，当接收外部条件变化后要有接口承载，例如登陆成功后的页面跳转。但是在 web 中大部分时候只需要一个 http 请求同步响应即可。</p></li><li><p>另外也可能有一部分桌面开发程序中是类似同步请求和反馈的，那么在一个事件的发起后，就直接影响事件内容的变化，来改变窗体或者填充数据行为。</p></li><li><p>以下的章节我们会先去非常直接简单的添加事件和接口，以更清晰的直观的了解这部分内容的开发。之后我们会进行一次小的 重构，以此来适应更好的拓展。</p></li></ul><h2 id="二、工程结构-重构前" tabindex="-1"><a class="header-anchor" href="#二、工程结构-重构前" aria-hidden="true">#</a> 二、工程结构 (重构前)</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>naive<span class="token operator">-</span>chat<span class="token operator">-</span>ui<span class="token operator">-</span><span class="token number">03</span>
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>navice<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>ui
    │   │       ├── view
    │   │       │  └── <span class="token class-name">Login</span><span class="token punctuation">.</span>java
    │   │       └── <span class="token class-name">Application</span><span class="token punctuation">.</span>java
    │   └── resources
    │       └── fxml<span class="token punctuation">.</span>login
    │           ├── css
    │           ├── img
    │           └── login<span class="token punctuation">.</span>fxml
    └── test
        └── java
            └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>test
                └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在目前的工程结构下，直接在里面开发事件和接口。</li></ul>`,4);function b(g,f){const s=i("ExternalLinkIcon");return t(),l("div",null,[p,n("p",null,[a("作者：小傅哥 "),d,a("博客："),n("a",v,[a("https://bugstack.cn"),c(s)])]),m,h,k,o(" ![](/images/article/project/im/project-im-1.3-01.png) "),_])}const x=e(u,[["render",b],["__file","1.3：denglukuangtishijianyujiekou.html.vue"]]);export{x as default};
