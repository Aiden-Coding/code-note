import{_ as l,r as a,o as r,c as d,a as e,b as n,d as s,e as t}from"./app-cCF93fuz.js";const o={},u=e("p",null,"ORM 框架的本质是简化操作数据库的编码工作，常用的框架有两个，一个是可以灵活执行动态 SQL 的 MyBatis；一个是崇尚不用写 SQL 的 Hibernate。前者互联网行业用的多，后者传统行业用的多。",-1),v=e("p",null,"Hibernate 的特点是所有的 SQL 通过 Java 代码生成，发展到最顶端的就是 Spring Data JPA，基本上根据方法名就可以生成对应的 SQL 了。",-1),c={href:"https://javabetter.cn/springboot/jpa.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://javabetter.cn/kaiyuan/auto-generator.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://baomidou.com/",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="整合-mybatis" tabindex="-1"><a class="header-anchor" href="#整合-mybatis" aria-hidden="true">#</a> 整合 MyBatis</h3><p>第一步，在 pom.xml 文件中引入 starter。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在 application.yml 文件中添加数据库连接配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: Huicheng123**
    url: jdbc:mysql://localhost:3306/codingmore-mybatis?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&amp;useSSL=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，导入 SQL 文件。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/mybatis-3a1794fa-7c6b-4499-9c7d-a69e088c28fe.png" alt=""></p><p>第四步，新建 User.java 实体类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Tolerate</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用了 lombok 的</p>`,10),g={href:"/Data",target:"_blank",rel:"noopener noreferrer"},_={href:"/Builder",target:"_blank",rel:"noopener noreferrer"},h={href:"/Builder",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"@Tolerate",-1),x=t(`<p>第五步，新建 UserMapper.java 接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface UserMapper {
    @Select(&quot;SELECT * FROM user&quot;)
    List&lt;User&gt; getAll();

    @Select(&quot;SELECT * FROM user WHERE id = #{id}&quot;)
    User getOne(Integer id);

    @Insert(&quot;INSERT INTO user(name,password,age) VALUES(#{name}, #{password}, #{age})&quot;)
    void insert(User user);

    @Update(&quot;UPDATE user SET name=#{name},password=#{password},age=#{age} WHERE id =#{id}&quot;)
    void update(User user);

    @Delete(&quot;DELETE FROM user WHERE id =#{id}&quot;)
    void delete(Integer id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={href:"/Select",target:"_blank",rel:"noopener noreferrer"},M={href:"/Insert",target:"_blank",rel:"noopener noreferrer"},y={href:"/Update",target:"_blank",rel:"noopener noreferrer"},k={href:"/Delete",target:"_blank",rel:"noopener noreferrer"},S={href:"/MapperScan",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
@MapperScan
public class CodingmoreMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodingmoreMybatisApplication.class, args);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L={href:"/MapperScan",target:"_blank",rel:"noopener noreferrer"},P=t(`<p>第七步，在测试类中对 mapper 进行测试。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Slf4j
class CodingmoreMybatisApplicationTests {

	@Autowired
	private UserMapper userMapper;

	@Test
	void testInsert() {
		userMapper.insert(User.builder().age(18).name(&quot;沉默王二&quot;).password(&quot;123456&quot;).build());
		userMapper.insert(User.builder().age(18).name(&quot;沉默王三&quot;).password(&quot;123456&quot;).build());
		userMapper.insert(User.builder().age(18).name(&quot;沉默王四&quot;).password(&quot;123456&quot;).build());
		log.info(&quot;查询所有：{}&quot;,userMapper.getAll().stream().toArray());
	}

	@Test
	List&lt;User&gt; testQuery() {
		List&lt;User&gt; all = userMapper.getAll();
		log.info(&quot;查询所有：{}&quot;,all.stream().toArray());
		return all;
	}

	@Test
	void testUpdate() {
		User one = userMapper.getOne(1);
		log.info(&quot;更新前{}&quot;, one);
		one.setPassword(&quot;654321&quot;);
		userMapper.update(one);
		log.info(&quot;更新后{}&quot;, userMapper.getOne(1));
	}

	@Test
	void testDelete() {
		log.info(&quot;删除前{}&quot;, userMapper.getAll().toArray());
		userMapper.delete(1);
		log.info(&quot;删除后{}&quot;, userMapper.getAll().toArray());

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="极简-xml-版本" tabindex="-1"><a class="header-anchor" href="#极简-xml-版本" aria-hidden="true">#</a> 极简 xml 版本</h3><p>极简 xml 版本比较适合更加复杂的 SQL，接口层只定义空的方法，然后在 xml 中编写对应的 SQL。编程喵🐱实战项目中使用的就是这种方式。</p><p>第一步，新建 PostMapper。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface PostMapper {
    List&lt;Posts&gt; getAll();
    Posts getOne(Long id);
    void insert(Posts post);
    void update(Posts post);
    void delete(Long id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在 resources 目录下新建 PostMapper.xml 文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
&lt;mapper namespace=&quot;top.codingmore.mapper.PostMapper&quot;&gt;
    &lt;resultMap id=&quot;BaseResultMap&quot; type=&quot;top.codingmore.entity.Posts&quot;&gt;
        &lt;id column=&quot;posts_id&quot; property=&quot;postsId&quot;/&gt;
        &lt;result column=&quot;post_author&quot; property=&quot;postAuthor&quot;/&gt;
        &lt;result column=&quot;post_content&quot; property=&quot;postContent&quot;/&gt;
        &lt;result column=&quot;post_title&quot; property=&quot;postTitle&quot;/&gt;
    &lt;/resultMap&gt;

    &lt;sql id=&quot;Base_Column_List&quot;&gt;
        posts_id, post_author, post_content, post_title
    &lt;/sql&gt;

    &lt;select id=&quot;getAll&quot; resultMap=&quot;BaseResultMap&quot;&gt;
        select
        &lt;include refid=&quot;Base_Column_List&quot; /&gt;
        from posts;
    &lt;/select&gt;

    &lt;select id=&quot;getOne&quot; parameterType=&quot;java.lang.Long&quot; resultMap=&quot;BaseResultMap&quot; &gt;
        SELECT
        &lt;include refid=&quot;Base_Column_List&quot; /&gt;
        FROM users
        WHERE id = #{id}
    &lt;/select&gt;

    &lt;insert id=&quot;insert&quot; parameterType=&quot;top.codingmore.entity.Posts&quot;&gt;
        insert into
            posts
            (post_author,post_content,post_title)
        values
            (#{postAuthor},#{postContent},#{postTitle});
    &lt;/insert&gt;
    &lt;update id=&quot;update&quot; parameterType=&quot;top.codingmore.entity.Posts&quot;&gt;
        update
            posts
        set
        &lt;if test=&quot;postAuthor != null&quot;&gt;post_author=#{postAuthor},&lt;/if&gt;
        &lt;if test=&quot;postContent != null&quot;&gt;post_content=#{postContent},&lt;/if&gt;
        post_title=#{postTitle}
        where id=#{id}
    &lt;/update&gt;
    &lt;delete id=&quot;delete&quot;&gt;
        delete from
            posts
        where
            id=#{id}
    &lt;/delete&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口中方法对应的 SQL 直接写在 xml 文件中，具体位置见下图：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/mybatis-cc8515b1-e501-41e2-8dea-7612022e1bb7.png" alt=""></p><p>也可以看文件放在和 PostMapper.java 接口同级的目录下，但是这样会带来一个问题，就是 Maven 打包的时候默认会忽略 xml 文件，所以为了避免这种情况发生，我们需要在 pom.xml 文件中添加配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
    &lt;resources&gt;
        &lt;resource&gt;
            &lt;directory&gt;src/main/java&lt;/directory&gt;
            &lt;includes&gt;
                &lt;include&gt;**/*.xml&lt;/include&gt;
            &lt;/includes&gt;
        &lt;/resource&gt;
        &lt;resource&gt;
            &lt;directory&gt;src/main/resources&lt;/directory&gt;
        &lt;/resource&gt;
    &lt;/resources&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果直接放在 resources 目录下，就不用担心打包时被忽略了，但放在 resources 目录下不会被  MyBatis 自动扫描到，所以需要在 application.yml 配置文件中告诉 MyBatis 具体的扫描路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mybatis:
  mapper-locations: classpath:mapper/*.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，在测试类中添加测试方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
void testPostInsert() {
    postMapper.insert(Posts.builder()
            .postAuthor(1L)
            .postTitle(&quot;沉默王二&quot;)
            .postContent(&quot;123456&quot;)
            .build());
    log.info(&quot;查询所有：{}&quot;,postMapper.getAll().stream().toArray());
}

@Test
List&lt;Posts&gt; testPostQuery() {
    List&lt;Posts&gt; all = postMapper.getAll();
    log.info(&quot;查询所有：{}&quot;,all.stream().toArray());
    return all;
}

@Test
void testPostUpdate() {
    Posts one = postMapper.getOne(1L);
    log.info(&quot;更新前{}&quot;, one);
    one.setPostContent(&quot;沉默王二是沙比&quot;);
    postMapper.update(one);
    log.info(&quot;更新后{}&quot;, postMapper.getOne(1L));
}

@Test
void testPostDelete() {
    log.info(&quot;删除前{}&quot;, postMapper.getAll().toArray());
    postMapper.delete(1L);
    log.info(&quot;删除后{}&quot;, postMapper.getAll().toArray());

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看得出，注解版比较适合简单的 SQL 语句，一旦遇到比较复杂的 SQL 查询，比如说多表查询，xml 中写 SQL 语句会容易实现。</p><p>比如说编程喵🐱实战项目中有一个分页查询（首页展示，需要查询标签、作者名、文章信息等等），涉及到多张表，那么此时，xml 版本就更适合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;select id=&quot;findByPageWithTagPaged&quot; resultMap=&quot;PostsVoResultMapWithTagList&quot;&gt;
    SELECT a.*, pt.description, ptr.post_tag_id
    FROM (
             SELECT
                &lt;include refid=&quot;Base_Column_List_No_Content&quot; /&gt;,
                 b.term_taxonomy_id,
                 c.user_nicename
             FROM
                 posts a
                     LEFT JOIN term_relationships b ON a.posts_id = b.term_relationships_id
                     LEFT JOIN users c ON a.post_author = c.users_id
             WHERE 1=1
             &lt;if test=&quot;searchTagId != null&quot;&gt;
                and a.posts_id in (select post_id from post_tag_relation where post_tag_id=#{searchTagId})
             &lt;/if&gt;
             and \${ew.sqlSegment}
                 LIMIT #{pageStart}, #{pageSize}
         ) a
             LEFT JOIN post_tag_relation ptr on a.posts_id = ptr.post_id
             LEFT JOIN post_tag pt on pt.post_tag_id = ptr.post_tag_id
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>细心的小伙伴应该可以看到 <code>\${ew.sqlSegment}</code> 这样的表达式，它属于 MyBatis-Plus 中的内容。</p><h3 id="通过-mybatis-plus-增强" tabindex="-1"><a class="header-anchor" href="#通过-mybatis-plus-增强" aria-hidden="true">#</a> 通过 MyBatis-Plus 增强</h3>`,21),A={href:"https://javabetter.cn/springboot/jpa.html",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"MP 提供了诸多优秀的特性，比如说：",-1),E=e("li",null,"强大的 CRUD 操作：内置了通用的 mapper、service，可通过少量的配置实现大部分常用的 CRUD，不用再编写 SQL 语句。",-1),I=e("li",null,"支持主键自动生成",-1),U=e("li",null,"支持 ActiveRecord 模式：实体类只需继承 Model 类即可进行强大的 CRUD 操作",-1),C={href:"https://javabetter.cn/kaiyuan/auto-generator.html",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"内置分页插件",-1),w=e("li",null,"内置性能分析插件：可输出 SQL 语句以及其执行时间",-1),O=t(`<p>我们直接进入实战。</p><p>第一步，在 pom.xml 文件中添加 MyBatis-Plus 的 starter。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;3.4.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，新建 PostTag 实体类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
public class PostTag {
    private Long postTagId;
    private String description;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的数据库表为 post-tag。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/mybatis-d4471207-9284-43bf-b1aa-50bbc6001a9f.png" alt=""></p><p>可以看得出，类名 PostTag，字段名 postTagId 和数据库表 post_tag、字段名 post_tag_id 并不一致，但 mp 自动帮我们做了映射关联。</p><p>第二步，新建 PostTagMapper 继承 BaseMapper，继承该接口后，无需编写 mapper.xml 文件，即可获得CRUD功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface PostTagMapper extends BaseMapper&lt;PostTag&gt; {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>BaseMapper里提供的方法如下：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/mybatis-79ac66eb-25fd-44a0-8668-359d1b95b80d.png" alt="image.png"></p><p>第三步，在测试类中添加查询方法。</p><hr>`,14),R={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"编程喵",-1),Q=e("h3",{id:"源码路径",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#源码路径","aria-hidden":"true"},"#"),n(" 源码路径")],-1),N={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-mybatis",target:"_blank",rel:"noopener noreferrer"},J=e("hr",null,null,-1),H=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""})],-1);function V(W,z){const i=a("ExternalLinkIcon");return r(),d("div",null,[u,v,e("p",null,[e("a",c,[n("Spring Boot 整合 JPA"),s(i)])]),e("p",null,[n("MyBatis 早些时候用起来比较繁琐，需要各种配置文件，需要实体类和 DAO 的映射关联，经过不断地演化和改进，可以通过 "),e("a",p,[n("generator"),s(i)]),n(" 自动生成实体类、配置文件和 DAO 层代码，简化了不少开发工作。")]),e("p",null,[n("随着 "),e("a",m,[n("MyBatis-Plus"),s(i)]),n(" 的出现，又进一步加速了 MyBatis 的发展。经过 MyBatis-Plus 的增强，开发者只需要简单的配置，就可以快速进行单表的 CRUD 操作；同时，MyBatis-Plus又提供了代码生成、自动分页、逻辑删除、自动填充等丰富功能，进一步简化了开发工作。")]),b,e("ul",null,[e("li",null,[e("a",g,[n("@Data"),s(i)]),n(" 注解自动生成 getter/setter")]),e("li",null,[e("a",_,[n("@Builder"),s(i)]),n(" 生成链式调用")]),e("li",null,[n("由于 @Data和"),e("a",h,[n("@Builder"),s(i)]),n(" 配合使用的时候会导致无参构造方法丢失，所以我们主动声明了无参构造方法，并使用 "),q,n(" 注解来告诉 lombok 请允许我们的无参构造方法存在（没有无参构造方法的时候会导致 ORM 映射出错）")])]),x,e("ul",null,[e("li",null,[e("a",f,[n("@Select"),s(i)]),n(" 注解用来查询")]),e("li",null,[e("a",M,[n("@Insert"),s(i)]),n(" 注解用来插入")]),e("li",null,[e("a",y,[n("@Update"),s(i)]),n(" 注解用来修改")]),e("li",null,[e("a",k,[n("@Delete"),s(i)]),n(" 注解用来删除")])]),e("p",null,[n("第六步，在启动类 CodingmoreMybatisApplication 上添加 "),e("a",S,[n("@MapperScan"),s(i)]),n(" 注解来扫描 mapper。")]),T,e("p",null,[n("如果没有指定 "),e("a",L,[n("@MapperScan"),s(i)]),n(" 的扫描路径，将从声明该注解的类的包开始进行扫描。")]),P,e("p",null,[n("MyBatis 属于半自动的 ORM 框架，实现一些简单的 CRUD 也是需要编写 SQL 语句，那如果想省掉这些步骤的话，可以选择 "),e("a",A,[n("JPA"),s(i)]),n("，也可以选择国人开源的 MyBatis-Plus（简称 MP）。")]),B,e("ul",null,[E,I,U,e("li",null,[e("a",C,[n("强大的代码生成器"),s(i)]),n("：可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码")]),j,w]),O,e("p",null,[n("更多内容，只针对《二哥的Java进阶之路》星球用户开放，需要的小伙伴可以"),e("a",R,[n("戳链接🔗"),s(i)]),n("加入我们的星球，一起学习，一起卷。。"),D,n("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),Q,e("ul",null,[e("li",null,[n("编程喵："),e("a",N,[n("https://github.com/itwanger/coding-more"),s(i)])]),e("li",null,[n("codingmore-mybatis："),e("a",F,[n("https://github.com/itwanger/codingmore-learning"),s(i)])])]),J,H])}const Y=l(o,[["render",V],["__file","mybatis.html.vue"]]);export{Y as default};
