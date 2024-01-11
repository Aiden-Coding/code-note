const l=JSON.parse('{"key":"v-01440fe4","path":"/CodeGuide/md/develop/framework/scheme/2021-07-19-diaoyanzijiemachazhuangjishu，yongyuxitongjiankongshejiheshixian.html","title":"调研字节码插桩技术，用于系统监控设计和实现","lang":"zh-CN","frontmatter":{"category":"framework","title":"调研字节码插桩技术，用于系统监控设计和实现","tagline":"by 小傅哥","tag":["java","framework"],"excerpt":"咋滴，你那上线的系统是裸奔呢？一套线上系统是否稳定运行，取决于它的运行健康度，而这包括；调用量、可用率、影响时长以及服务器性能等各项指标的一个综合值。并且在系统出现异常问题时，可以抓取整个业务方法执行链路并输出；当时的入参、出参、异常信息等等。当然还包括一些JVM、Redis、Mysql的各项性能指标，以用于快速定位并解决问题。","lock":"need"},"headers":[{"level":2,"title":"一、来自深夜的电话！","slug":"一、来自深夜的电话","link":"#一、来自深夜的电话","children":[]},{"level":2,"title":"二、准备工作","slug":"二、准备工作","link":"#二、准备工作","children":[]},{"level":2,"title":"三、使用 AOP 做个切面监控","slug":"三、使用-aop-做个切面监控","link":"#三、使用-aop-做个切面监控","children":[{"level":3,"title":"1. 工程结构","slug":"_1-工程结构","link":"#_1-工程结构","children":[]},{"level":3,"title":"2. 定义监控注解","slug":"_2-定义监控注解","link":"#_2-定义监控注解","children":[]},{"level":3,"title":"3. 定义切面拦截","slug":"_3-定义切面拦截","link":"#_3-定义切面拦截","children":[]},{"level":3,"title":"4. 初始化切面类","slug":"_4-初始化切面类","link":"#_4-初始化切面类","children":[]},{"level":3,"title":"5. 运行测试","slug":"_5-运行测试","link":"#_5-运行测试","children":[]}]},{"level":2,"title":"四、ASM","slug":"四、asm","link":"#四、asm","children":[{"level":3,"title":"1. 先来个测试","slug":"_1-先来个测试","link":"#_1-先来个测试","children":[]},{"level":3,"title":"2. 监控设计工程结构","slug":"_2-监控设计工程结构","link":"#_2-监控设计工程结构","children":[]},{"level":3,"title":"3. 监控类入口","slug":"_3-监控类入口","link":"#_3-监控类入口","children":[]},{"level":3,"title":"4. 字节码方法处理","slug":"_4-字节码方法处理","link":"#_4-字节码方法处理","children":[]},{"level":3,"title":"5.字节码方法解析","slug":"_5-字节码方法解析","link":"#_5-字节码方法解析","children":[]},{"level":3,"title":"6. 运行测试","slug":"_6-运行测试","link":"#_6-运行测试","children":[]}]},{"level":2,"title":"五、Javassist","slug":"五、javassist","link":"#五、javassist","children":[{"level":3,"title":"1. 先来个测试","slug":"_1-先来个测试-1","link":"#_1-先来个测试-1","children":[]},{"level":3,"title":"2. 监控设计工程结构","slug":"_2-监控设计工程结构-1","link":"#_2-监控设计工程结构-1","children":[]},{"level":3,"title":"3. 监控方法插桩","slug":"_3-监控方法插桩","link":"#_3-监控方法插桩","children":[]},{"level":3,"title":"4. 运行测试","slug":"_4-运行测试","link":"#_4-运行测试","children":[]}]},{"level":2,"title":"六、Byte-Buddy","slug":"六、byte-buddy","link":"#六、byte-buddy","children":[{"level":3,"title":"1. 先来个测试","slug":"_1-先来个测试-2","link":"#_1-先来个测试-2","children":[]},{"level":3,"title":"2. 监控设计工程结构","slug":"_2-监控设计工程结构-2","link":"#_2-监控设计工程结构-2","children":[]},{"level":3,"title":"3. 监控方法插桩","slug":"_3-监控方法插桩-1","link":"#_3-监控方法插桩-1","children":[]},{"level":3,"title":"4. 配置入口方法","slug":"_4-配置入口方法","link":"#_4-配置入口方法","children":[]},{"level":3,"title":"5. 运行测试","slug":"_5-运行测试-1","link":"#_5-运行测试-1","children":[]}]},{"level":2,"title":"七、总结","slug":"七、总结","link":"#七、总结","children":[]}],"git":{"createdTime":1704301416000,"updatedTime":1704373598000,"contributors":[{"name":"dong","email":"dwx_job@163.com","commits":2}]},"filePathRelative":"CodeGuide/md/develop/framework/scheme/2021-07-19-调研字节码插桩技术，用于系统监控设计和实现.md"}');export{l as data};
