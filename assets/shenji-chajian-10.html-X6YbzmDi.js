import{_ as e,o as t,c as a,e as s}from"./app-3RcBQnkC.js";const i="/code-note/assets/image-9-hK-3b-MJ.png",p="/code-note/assets/image-10-zrtmS0ye.png",n="/code-note/assets/image-11-k7IW0BkD.png",o="/code-note/assets/image-12-kzIccNgS.png",r="/code-note/assets/image-13-devdraCP.png",l="/code-note/assets/image-14-zdGk7rNQ.png",c="/code-note/assets/image-15-mc5kd5w6.png",d="/code-note/assets/image-16-kJqo8Gzp.png",m="/code-note/assets/image-17-TsAMLIlS.png",h="/code-note/assets/image-18-QQU3fhVV.png",g="/code-note/assets/image-19-PdewXOvL.png",_="/code-note/assets/image-20-jLHD793I.png",x="/code-note/assets/image-21-dMnrXWlL.png",u="/code-note/assets/image-22-O35tZvi5.png",b="/code-note/assets/image-23-rBBG1s6J.png",A="/code-note/assets/image-24-WDde7Hbn.png",v="/code-note/assets/image-25-dBq-GWvQ.png",f="/code-note/assets/image-26-2Q7KJypl.png",k="/code-note/assets/image-27-DLkSDoXj.png",I="/code-note/assets/image-28-hC-Fa1Et.png",j="/code-note/assets/image-29-yC-7pnmv.png",D="/code-note/assets/image-4-cbH8NLUs.png",y={},E=s('<p>昨天，有球友私信发我一篇文章，说里面提到的 Intellij IDEA 插件真心不错，基本上可以一站式开发了，希望能分享给更多的小伙伴，我在本地装了体验了一下，觉得确实值得推荐，希望小伙伴们有时间也可以尝试一下。</p><h2 id="vuesion-theme" tabindex="-1"><a class="header-anchor" href="#vuesion-theme" aria-hidden="true">#</a> Vuesion Theme</h2><p>颜值是生产力的第一要素，IDE 整好看了，每天对着它也是神清气爽，有木有？就 Intellij IDEA 提供的暗黑和亮白主色，虽然说已经非常清爽了，但时间久了总觉得需要再来点新鲜感？</p><p>Vuesion Theme 这个主题装上后，你会感觉整个 Intellij IDEA 更高级了。</p><p><img src="'+i+'" alt="Alt text"></p><p>安装完插件就立马生效了，瞧这该死的漂亮，整个代码着色，以及文件的图标，都更炫酷了：</p><p><img src="'+p+'" alt="Alt text"></p><p>当然了，主题这事，萝卜白菜各有所爱，就像玩 dota，我就喜欢露娜。</p><h2 id="lombok" tabindex="-1"><a class="header-anchor" href="#lombok" aria-hidden="true">#</a> lombok</h2><p>可能提到 lombok，多多少少有些争议，但不得不说，这玩意的确是很能省代码，并且很多开源的第三方 jar 包，以及 Intellij IDEA 2020.3 以后的版本也都默认加了 lombok。</p><p><img src="'+n+'" alt="Alt text"></p><p>这么多注解可以选择，在写 VO、DO、DTO 的时候是真的省心省力。</p><p><img src="'+o+'" alt="Alt text"></p><p>如果没有 lombok 的帮助，那整个代码就要炸了呀。对比一下，是不是感受还挺明显的？</p><p><img src="'+r+`" alt="Alt text"></p><p>当然了，要使用 lombok，你得在 pom.xml 文件中引入 lombok 的依赖包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
    &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-expander" tabindex="-1"><a class="header-anchor" href="#file-expander" aria-hidden="true">#</a> File Expander</h2><p>这个插件不仅可以反编译，还可以打开 tar.gz，zip 等压缩文件，</p><p><img src="`+l+'" alt="Alt text"></p><p>如果有小伙伴反驳说自己不装插件也可以打开 jar 包里的代码，那是因为你的 jar 在 classpath。如果单独打开一个 jar 包，不装插件是看不了的。</p><p><img src="'+c+'" alt="Alt text"></p><h2 id="gittoolbox" tabindex="-1"><a class="header-anchor" href="#gittoolbox" aria-hidden="true">#</a> GitToolBox</h2><p>如果你经常使用 Git 提交代码的话，这款插件就非常的爽。</p><p><img src="'+d+'" alt="Alt text"></p><p>它能直接提示你远程版本库里有多少文件更新，你有多少文件没有提交到版本库，甚至可以显示上一次提交的时间和版本更新者。</p><p><img src="'+m+'" alt="Alt text"></p><h2 id="maven-helper" tabindex="-1"><a class="header-anchor" href="#maven-helper" aria-hidden="true">#</a> Maven Helper</h2><p>这插件几乎人手一个了吧，Java 后端开发必备啊。</p><p><img src="'+h+'" alt="Alt text"></p><p>依赖可视化的神器，可以很清楚地知道依赖的关系图谱，假如有冲突的话，也是一目了然。</p><p><img src="'+g+'" alt="Alt text"></p><h2 id="translation" tabindex="-1"><a class="header-anchor" href="#translation" aria-hidden="true">#</a> Translation</h2><p>对于英文能力差的同学来说，这个翻译插件简直神了，它支持 Google 翻译、有道翻译、百度翻译、Alibaba 翻译。</p><p><img src="'+_+'" alt="Alt text"></p><p>刚好写这篇内容的时候，发现最新的版本是 3.3.5，趁机升级一波。有了这款翻译插件，看源码绝对是爽歪歪。以前遇到不认识的单词，真的是好烦，还要切到翻译软件那里查，现在可好，单词翻译、文档翻译、注释翻译，都有了。</p><p><img src="'+x+'" alt="Alt text"></p><h2 id="arthas-idea" tabindex="-1"><a class="header-anchor" href="#arthas-idea" aria-hidden="true">#</a> arthas idea</h2><p>Arthas 应该大家都很熟悉了，阿里开源的一款强大的 java 在线诊断工具。</p><p>但如果每次都要你输入一长串命令的话，相信你也会很崩溃，尤其是很多时候我还记忆模糊，很多记不住。这款插件刚好解决了我这个烦恼，极大地提高了生产力</p><p><img src="'+u+'" alt="Alt text"></p><p>使用起来也非常方便，直接进入你要诊断的方法和类，右键选择对应的命令，就会自动帮你生成了。</p><p><img src="'+b+'" alt="Alt text"></p><h2 id="free-mybatis-plugin" tabindex="-1"><a class="header-anchor" href="#free-mybatis-plugin" aria-hidden="true">#</a> Free Mybatis plugin</h2><p>Mybatis 基本上是目前最主流的 ORM 框架了，相比于 hibernate 更加灵活，性能也更好。所以我们一般在 Spring Boot 项目中都会写对应的 mapper.java 和 mapper.xml。</p><p>那有了这款插件之后，两者就可以轻松关联起来。</p><p><img src="'+A+'" alt="Alt text"></p><p>比如，我这里要查看 ArticleMapper 的 xml，那么编辑器的行号右侧就会有一个向右的→，直接点击就跳转过去了。</p><p><img src="'+v+'" alt="Alt text"></p><p>想跳转回来的话，也是同样的道理，所以有了这款产检，mapper 和 xml 之间就可以自由切换了，丝滑。</p><h2 id="visualgc" tabindex="-1"><a class="header-anchor" href="#visualgc" aria-hidden="true">#</a> VisualGC</h2><p>这里给大家推荐一个 JVM 堆栈可视化工具，可以和 Intellij IDEA 深度集成——VisualGC。</p><p><img src="'+f+'" alt="Alt text"></p><p>当我们需要监控一个进程的时候，直接打开 VisualGC面板，就可以查看到堆栈和垃圾收集情况，可以说是一目了然。</p><p><img src="'+k+'" alt="Alt text"></p><h2 id="checkstyle-idea" tabindex="-1"><a class="header-anchor" href="#checkstyle-idea" aria-hidden="true">#</a> CheckStyle-IDEA</h2><p>如果你比较追求代码规范的话，可以安装这个插件，它会提醒你注意无用导入、注释、语法错误❎、代码冗余等等。</p><p><img src="'+I+'" alt="Alt text"></p><p>在 CheckStyle 面板中，你可以选择 Google 代码规范或者 sun 的代码规范，跑一遍检查，就可以看到所有的修改建议了。</p><p><img src="'+j+'" alt="Alt text"></p><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>以上这 10 款 Intellij IDEA 插件也是我平常开发中经常用到的，如果大家有更好更效率的插件，也可以评论里留言。</p><p><img src="'+D+'" alt="Alt text"></p><hr>',64),G=[E];function V(C,M){return t(),a("div",null,G)}const S=e(y,[["render",V],["__file","shenji-chajian-10.html.vue"]]);export{S as default};
