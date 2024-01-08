import{_ as i,r as o,o as l,c,a as n,b as a,d as s,e as t}from"./app-cCF93fuz.js";const r={},p=n("p",null,"作为一名 Java 后端开发，日常工作中免不了要生成数据库表对应的持久化对象 PO，操作数据库的接口 DAO，以及 CRUD 的 XML，也就是 mapper。",-1),u=n("p",null,"Mybatis Generator 是 MyBatis 官方提供的一个代码生成工具，完全可以胜任这个工作，不过最近在开发“编程喵🐱”开源网站的时候试用了一下 MyBatis-Plus 官方提供 AutoGenerator，发现配置更简单，开发效率更高！于是就来给小伙伴们安利一波。",-1),d=n("p",null,"让我们来通过一个 gif 感受一下 AutoGenerator 的强大。",-1),v=n("p",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-1.gif",alt:""})],-1),m=n("h2",{id:"导入-sql-文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入-sql-文件","aria-hidden":"true"},"#"),a(" 导入 SQL 文件")],-1),g=n("p",null,"编程喵项目的 SQL 文件我已经同步到本教程所在的源码当中。",-1),b={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>可以通过 GitHub 桌面版从 GitHub 上下载本教程专属的项目 codingmore-autogenerator 到本地，SQL 文件的位置参照下图。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-47997c23-cb65-4801-954c-0ec611b764ad.png" alt=""></p><p>编程喵使用的 MySQL 版本是 8.0，可以在链接上 MySQL 后使用 <code>select version();</code> 命令查询版本。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-ea5bbe50-ba28-4056-a81f-a68651a58391.png" alt=""></p><p>打开 Navicat，把 SQL 文件导入到本地数据库，</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-d523792f-2d55-4485-b64d-b4763ecd7b77.png" alt=""></p><p>关闭链接，重新打开就可以看到导入后的数据库 codingmore，里面一共 27 张表。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-3cda9cb7-dda5-4aca-9cea-cc400768b921.png" alt=""></p><h2 id="先体验-mybatis-generator" tabindex="-1"><a class="header-anchor" href="#先体验-mybatis-generator" aria-hidden="true">#</a> 先体验 Mybatis Generator</h2><p>第一步，在 pom.xml 文件中添加 MySQL+MyBatis 的依赖（Mybatis Generator 的前置条件）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成后，一定要执行一次 Maven 重载（见下图），确保 MyBatis 的依赖加载完毕后再执行第二步。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-b9dc31ee-32f4-4556-b2e8-b0ed114ec81a.png" alt=""></p><p>否则下一步可能不通过，但又得不到任何错误提示。不要问我为什么，踩过坑后痛苦的领悟。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-3.png" alt=""></p><p>添加完成后，可以通过 Maven 插件来生成骨架代码，也可以通过 Java 代码来生成骨架代码，这里以 Maven 插件的形式来演示。Java 代码的形式可参照 Mybatis Generator：</p>`,16),h={href:"https://mybatis.org/generator/running/runningWithJava.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>第二步，在 pom.xml 文件中，添加 MyBatis Generator 插件，注意是在 <strong>build→plugins</strong> 下节点下添加。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- MyBatis Generator 插件 --&gt;
&lt;plugin&gt;
    &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;1.3.7&lt;/version&gt;
    &lt;configuration&gt;
        &lt;!-- MyBatis Generator 生成器的配置文件--&gt;
        &lt;configurationFile&gt;src/main/resources/mybatis-generator-config.xml&lt;/configurationFile&gt;
        &lt;!-- 允许覆盖生成的文件，确定骨架代码后就可以设为 false 了，免得覆盖原有代码 --&gt;
        &lt;overwrite&gt;true&lt;/overwrite&gt;
        &lt;!-- 将当前 pom 的依赖项添加到生成器的类路径中--&gt;
        &lt;includeCompileDependencies&gt;true&lt;/includeCompileDependencies&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyBatis Generator 插件目前最新版是 1.4.0，我们采用上一个稳定版本 1.3.7，新版本容易有坑。</p><p>来看一下添加 MyBatis Generator 插件后 pom.xml 文件的结构图。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-136e3eec-04ce-478b-aa7d-3d5913466f70.png" alt=""></p><p>只添加插件还不够，还需要对其进行配置，我们使用 configurationFile 元素来指定一个配置文件 mybatis-generator-config.xml：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configurationFile&gt;src/main/resources/mybatis-generator-config.xml&lt;/configurationFile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于数据库表可能会发生变动，因此我们需要追加一个配置 <code>&lt;overwrite&gt;true&lt;/overwrite&gt;</code>，允许覆盖旧的文件。为了防止我们编写的 SQL 语句被覆盖掉，MyBatis Generator 只会覆盖旧的 po、dao、而 *mapper.xml 不会覆盖，而是追加。</p><p>Mybatis Generator 需要连接数据库，所以还需要在 plugin 节点中添加数据库驱动依赖，就像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
&lt;/configuration&gt;
&lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但我们在 pom.xml 文件中已经添加过 MySQL 的链接驱动了，这里再添加就会显得很多余。好在 Maven 为我们提供了 includeCompileDependencies 属性，可以让我们在插件中引用之前添加的依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;includeCompileDependencies&gt;true&lt;/includeCompileDependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来看一下 mybatis-generator-config.xml 的位置。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-499b434d-4ae8-45c3-bfeb-9f5b4710b81e.png" alt=""></p><p>来看一下 mybatis-generator-config.xml 的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;generatorConfiguration&gt;
    &lt;context id=&quot;myContext&quot; targetRuntime=&quot;MyBatis3&quot; defaultModelType=&quot;flat&quot;&gt;

        &lt;!-- 注释 --&gt;
        &lt;commentGenerator&gt;
            &lt;!-- 是否不生成注释 --&gt;
            &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot;/&gt;
        &lt;/commentGenerator&gt;

        &lt;!-- jdbc连接 --&gt;
        &lt;jdbcConnection driverClass=&quot;com.mysql.cj.jdbc.Driver&quot;
                        connectionURL=&quot;jdbc:mysql://localhost:3306/codingmore?useUnicode=true&amp;amp;characterEncoding=utf-8&amp;amp;serverTimezone=Asia/Shanghai&amp;amp;useSSL=false&quot;
                        userId=&quot;root&quot;
                        password=&quot;Huicheng123&quot;&gt;
            &lt;!--高版本的 mysql-connector-java 需要设置 nullCatalogMeansCurrent=true--&gt;
            &lt;property name=&quot;nullCatalogMeansCurrent&quot; value=&quot;true&quot;/&gt;
        &lt;/jdbcConnection&gt;

        &lt;!-- 类型转换 --&gt;
        &lt;javaTypeResolver&gt;
            &lt;!--是否使用bigDecimal，默认false。
                false，把JDBC DECIMAL 和 NUMERIC 类型解析为 Integer
                true，把JDBC DECIMAL 和 NUMERIC 类型解析为java.math.BigDecimal--&gt;
            &lt;property name=&quot;forceBigDecimals&quot; value=&quot;true&quot;/&gt;
        &lt;/javaTypeResolver&gt;

        &lt;!-- 生成实体类地址 --&gt;
        &lt;javaModelGenerator targetPackage=&quot;top.codingmore.mbg.po&quot; targetProject=&quot;src/main/java&quot;&gt;
            &lt;!-- 是否针对string类型的字段在set方法中进行修剪，默认false --&gt;
            &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot;/&gt;
        &lt;/javaModelGenerator&gt;


        &lt;!-- 生成Mapper.xml文件 --&gt;
        &lt;sqlMapGenerator targetPackage=&quot;top.codingmore.mbg.mapper&quot; targetProject=&quot;src/main/resources&quot;&gt;
        &lt;/sqlMapGenerator&gt;

        &lt;!-- 生成 XxxMapper.java 接口--&gt;
        &lt;javaClientGenerator targetPackage=&quot;top.codingmore.mbg.dao&quot; targetProject=&quot;src/main/java&quot; type=&quot;XMLMAPPER&quot;&gt;
        &lt;/javaClientGenerator&gt;


        &lt;!-- schema为数据库名，oracle需要配置，mysql不需要配置。
             tableName为对应的数据库表名
             domainObjectName 是要生成的实体类名(可以不指定，默认按帕斯卡命名法将表名转换成类名)
             enableXXXByExample 默认为 true， 为 true 会生成一个对应Example帮助类，帮助你进行条件查询，不想要可以设为false
             --&gt;
        &lt;table schema=&quot;&quot; tableName=&quot;posts&quot; domainObjectName=&quot;Posts&quot;
               enableCountByExample=&quot;false&quot; enableDeleteByExample=&quot;false&quot; enableSelectByExample=&quot;false&quot;
               enableUpdateByExample=&quot;false&quot; selectByExampleQueryId=&quot;false&quot;&gt;
        &lt;/table&gt;
    &lt;/context&gt;
&lt;/generatorConfiguration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置文件至少得包含一个context</li><li>commentGenerator 用来配置生成的注释</li><li>jdbcConnection 用来链接数据库</li><li>javaTypeResolver 配置 JDBC 与 Java 的类型转换规则</li><li>javaModelGenerator 配置 po 生成的包路径和项目路径</li><li>sqlMapGenerator 配置 mapper.xml 文件生成的目录</li><li>javaClientGenerator 配置 mapper.java 文件生成的目录</li><li>一个 table 对应一张表，如果想同时生成多张表，需要配置多个 table</li></ul><p>更多配置信息可以参照下面这篇文章：</p>`,18),f={href:"https://juejin.cn/post/6844903982582743048",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>到此为止，mybatis-generator-maven-plugin 就算是配置完成了，完整内容如下图所示：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-c09c7dcd-ab4e-437b-a512-a9e0bf1f533c.png" alt=""></p><p>配置完成后可以双击运行 Maven 的插件 Mybatis Generator，没有问题的话，可以看到生成后的文件。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-843487f6-5823-4291-b6c3-b4f69b9bba51.png" alt=""></p><h2 id="再体验-mybatis-plus-的-autogenerator" tabindex="-1"><a class="header-anchor" href="#再体验-mybatis-plus-的-autogenerator" aria-hidden="true">#</a> 再体验 MyBatis-Plus 的 AutoGenerator</h2><p>MyBatis-Plus（简写 MP）是 MyBatis 的增强工具，官方宣称 MP 和 MyBatis 的关系就好像魂斗罗中的 1P 和 2P，可谓好基友，天下走。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-7.png" alt=""></p><p>AutoGenerator 是 MyBatis-Plus 推出的代码生成器，可以快速生成 Entity、Mapper、Mapper XML、Service、Controller 等各个模块的代码，比 Mybatis Generator 更强大，开发效率更高。</p><p>通过前面的体验，想必大家确实感觉到了 Mybatis Generator 的繁琐，接下来，我们来体验一下 AutoGenerator，对比过后，大家心里就有答案了。</p><p>第一步，在 pom.xml 文件中添加 AutoGenerator 的依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
    &lt;version&gt;3.4.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，添加模板引擎依赖，MyBatis-Plus 支持 Velocity（默认）、Freemarker、Beetl，这里使用 Velocity 引擎。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;
    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;
    &lt;version&gt;2.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，新建 CodeGenerator.java 文件，在 main 方法中添加 MyBatis-Plus 的 AutoGenerator 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>codingmore<span class="token punctuation">.</span>generator</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>generator<span class="token punctuation">.</span></span><span class="token class-name">AutoGenerator</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 微信搜索「沉默王二」，回复 Java
 *
 * <span class="token keyword">@author</span> 沉默王二
 * <span class="token keyword">@date</span> 5/17/22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodeGenerator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 代码生成器</span>
        <span class="token class-name">AutoGenerator</span> mpg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AutoGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 main 方法中添加全局配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 全局配置</span>
<span class="token class-name">GlobalConfig</span> gc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> projectPath <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setOutputDir</span><span class="token punctuation">(</span>projectPath <span class="token operator">+</span> <span class="token string">&quot;/src/main/java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setDateType</span><span class="token punctuation">(</span><span class="token class-name">DateType</span><span class="token punctuation">.</span><span class="token constant">ONLY_DATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setSwagger2</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setIdType</span><span class="token punctuation">(</span><span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setBaseColumnList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setBaseResultMap</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setFileOverride</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mpg<span class="token punctuation">.</span><span class="token function">setGlobalConfig</span><span class="token punctuation">(</span>gc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置数据源。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 数据源配置</span>
<span class="token class-name">DataSourceConfig</span> dsc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/codingmore?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setDriverName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mpg<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dsc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步，配置包。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 包配置</span>
<span class="token class-name">PackageConfig</span> pc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PackageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pc<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span><span class="token string">&quot;top.codingmore.mpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多配置项可以到官方查看：</p>`,22),j={href:"https://baomidou.com/pages/061573/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"完整代码如下所示：",-1),_=n("hr",null,null,-1),M={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},G=n("strong",null,"编程喵",-1),C=n("hr",null,null,-1),B=n("h2",{id:"源码地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码地址","aria-hidden":"true"},"#"),a(" 源码地址：")],-1),I={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator",target:"_blank",rel:"noopener noreferrer"},P=n("hr",null,null,-1),D=n("p",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""})],-1);function S(A,L){const e=o("ExternalLinkIcon");return l(),c("div",null,[p,u,d,v,m,g,n("blockquote",null,[n("p",null,[a("路径："),n("a",b,[a("https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator"),s(e)])])]),k,n("blockquote",null,[n("p",null,[n("a",h,[a("https://mybatis.org/generator/running/runningWithJava.html"),s(e)])])]),y,n("blockquote",null,[n("p",null,[n("a",f,[a("https://juejin.cn/post/6844903982582743048"),s(e)])])]),q,n("blockquote",null,[n("p",null,[n("a",j,[a("https://baomidou.com/pages/061573/"),s(e)])])]),x,_,n("p",null,[a("更多内容，只针对《二哥的Java进阶之路》星球用户开放，需要的小伙伴可以"),n("a",M,[a("戳链接🔗"),s(e)]),a("加入我们的星球，一起学习，一起卷。。"),G,a("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),C,B,n("blockquote",null,[n("ul",null,[n("li",null,[a("编程喵："),n("a",I,[a("https://github.com/itwanger/coding-more"),s(e)])]),n("li",null,[a("codingmore-autogenerator："),n("a",w,[a("https://github.com/itwanger/codingmore-learning"),s(e)])])])]),P,D])}const N=i(r,[["render",S],["__file","auto-generator.html.vue"]]);export{N as default};
