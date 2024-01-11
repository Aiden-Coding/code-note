const e=JSON.parse('{"key":"v-a3b1e9c0","path":"/CodeGuide/md/spring/source-code/2019-12-25-_yuanmafenxi_Mybatisjiekoumeiyoushixianleiweishimekeyizhixingzengshangaicha.html","title":"源码分析 | Mybatis接口没有实现类为什么可以执行增删改查","lang":"zh-CN","frontmatter":{"category":"itstack-demo-any","title":"源码分析 | Mybatis接口没有实现类为什么可以执行增删改查","tagline":"by 付政委","tag":["itstack-demo-code","itstack-demo-any"],"excerpt":"MyBatis 是一款非常优秀的持久层框架，相对于IBatis更是精进了不少。与此同时它还提供了很多的扩展点，比如最常用的插件；语言驱动器，执行器，对象工厂，对象包装器工厂等等都可以扩展。那么，如果想成为一个有深度的男人(程序猿)，还是应该好好的学习一下这款开源框架的源码，以此可以更好的领会设计模式的精髓(面试？)。其实可能平常的业务开发中，并不会去深究各个框架的源代码，也常常会听到即使不会也可以开发代码。但！每个人的目标不同，就像；代码写的好工资加的少(没有bug怎么看出你工作嘞！)，好！为了改变世界，开始分析喽！","lock":"need"},"headers":[{"level":2,"title":"一、前言介绍","slug":"一、前言介绍","link":"#一、前言介绍","children":[]},{"level":2,"title":"二、案例工程","slug":"二、案例工程","link":"#二、案例工程","children":[]},{"level":2,"title":"三、环境配置","slug":"三、环境配置","link":"#三、环境配置","children":[]},{"level":2,"title":"四、(mybatis)源码分析","slug":"四、-mybatis-源码分析","link":"#四、-mybatis-源码分析","children":[{"level":3,"title":"1. 从一个简单的案例开始","slug":"_1-从一个简单的案例开始","link":"#_1-从一个简单的案例开始","children":[]},{"level":3,"title":"2. 容器初始化","slug":"_2-容器初始化","link":"#_2-容器初始化","children":[]},{"level":3,"title":"3. 配置文件解析","slug":"_3-配置文件解析","link":"#_3-配置文件解析","children":[]},{"level":3,"title":"4. Mapper加载与动态代理","slug":"_4-mapper加载与动态代理","link":"#_4-mapper加载与动态代理","children":[]}]},{"level":2,"title":"五、(mybatis-spring)源码分析","slug":"五、-mybatis-spring-源码分析","link":"#五、-mybatis-spring-源码分析","children":[{"level":3,"title":"1. 从一个简单的案例开始","slug":"_1-从一个简单的案例开始-1","link":"#_1-从一个简单的案例开始-1","children":[]},{"level":3,"title":"2. 扫描装配注册(MapperScannerConfigurer)","slug":"_2-扫描装配注册-mapperscannerconfigurer","link":"#_2-扫描装配注册-mapperscannerconfigurer","children":[]},{"level":3,"title":"3. SqlSession容器工厂初始化(SqlSessionFactoryBean)","slug":"_3-sqlsession容器工厂初始化-sqlsessionfactorybean","link":"#_3-sqlsession容器工厂初始化-sqlsessionfactorybean","children":[]}]},{"level":2,"title":"六、综上总结","slug":"六、综上总结","link":"#六、综上总结","children":[]}],"git":{"createdTime":1704301416000,"updatedTime":1704373598000,"contributors":[{"name":"dong","email":"dwx_job@163.com","commits":2}]},"filePathRelative":"CodeGuide/md/spring/source-code/2019-12-25-[源码分析]Mybatis接口没有实现类为什么可以执行增删改查.md"}');export{e as data};
