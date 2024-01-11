import{_ as e,r as i,o as c,c as l,a as n,b as a,d as t,e as o}from"./app-3RcBQnkC.js";const d={},p=n("h1",{id:"_1-11-解答篇-聊天表情框体实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-11-解答篇-聊天表情框体实现","aria-hidden":"true"},"#"),a(" 1.11：解答篇-聊天表情框体实现")],-1),u=n("br",null,null,-1),v={href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"},r=o(`<blockquote><p>沉淀、分享、成长，让自己和他人都能有所收获！</p></blockquote><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>在上一章节我们设定一个练习题，“聊天表情框体”的实现。那么在没有继续往下看之前你是否有实现了自己的框体效果呢？或者思考到了哪些点，实现了多少功能以及遇到了什么样的问题。现在可以带着你的问题继续往下看，这里我会提供一种实现方式。当然，如果你实现了自己的效果可以在留言区回复哦！</p><h2 id="二、工程结构" tabindex="-1"><a class="header-anchor" href="#二、工程结构" aria-hidden="true">#</a> 二、工程结构</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>itstack<span class="token operator">-</span>naive<span class="token operator">-</span>chat<span class="token operator">-</span>ui
└── src
    ├── main
    │   ├── java
    │   │   └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>navice<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>ui
    │   │       ├── view
    │   │       │  └── chat
    │   │       │  │    ├── data
    │   │       │  │    ├── element
    │   │       │  │    │  ├── group_bar_chat
    │   │       │  │    │  └── group_bar_friend
    │   │       │  │    ├── <span class="token class-name">ChatController</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">ChatEventDefine</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">ChatInit</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">ChatView</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">IChatEvent</span><span class="token punctuation">.</span>java
    │   │       │  │    └── <span class="token class-name">IChatMethod</span><span class="token punctuation">.</span>java
    │   │       │  └── face
    │   │       │  │    ├── <span class="token class-name">FaceController</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">FaceEventDefine</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">FaceInit</span><span class="token punctuation">.</span>java
    │   │       │  │    ├── <span class="token class-name">FaceView</span><span class="token punctuation">.</span>java
    │   │       │  │    └── <span class="token class-name">IFaceMethod</span><span class="token punctuation">.</span>java
    │   │       │  └── login
    │   │       │  └── <span class="token class-name">UIObject</span><span class="token punctuation">.</span>java
    │   │       └── <span class="token class-name">Application</span><span class="token punctuation">.</span>java
    │   └── resources
    │       └── fxml
    │           ├── chat
    │           ├── face
    │           │  ├── css
    │           │  │  └── face<span class="token punctuation">.</span>css
    │           │  ├── img
    │           │  └── face<span class="token punctuation">.</span>fxml
    │           └── login
    │               ├── css
    │               ├── img
    │               └── login<span class="token punctuation">.</span>fxml
    └── test
        └── java
            └── org<span class="token punctuation">.</span>itstack<span class="token punctuation">.</span>test
                └── <span class="token class-name">ApiTest</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在这里我们主要体现新增 聊天表情框体 的功能代码结构；<code>org.itstack.navice.chat.ui.view.face</code></li></ul>`,6);function m(b,k){const s=i("ExternalLinkIcon");return c(),l("div",null,[p,n("p",null,[a("作者：小傅哥 "),u,a("博客："),n("a",v,[a("https://bugstack.cn"),t(s)])]),r])}const _=e(d,[["render",m],["__file","1.11：jiedapian-liaotianbiaoqingkuangtishixian.html.vue"]]);export{_ as default};
