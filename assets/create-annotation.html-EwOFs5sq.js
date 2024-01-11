import{_ as e,o as n,c as t,e as c}from"./app-3RcBQnkC.js";const p={},a=c(`<p>在Java中，类使用class定义，接口使用interface定义，注解和接口的定义差不多，增加了一个@符号，即@interface，代码如下：</p><pre><code>public @interface EnableAuth {

}
</code></pre><p>注解中可以定义成员变量，用于信息的描述，跟接口中方法的定义类似，代码如下：</p><pre><code>public @interface EnableAuth {
    String name();
}
</code></pre><p>还可以添加默认值：</p><pre><code>public @interface EnableAuth {
    String name() default &quot;猿天地&quot;;
}
</code></pre><p>上面的介绍只是完成了自定义注解的第一步，开发中日常使用注解大部分是用在类上，方法上，字段上，示列代码如下：</p><pre><code>@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface EnableAuth {

}
</code></pre><p>Target</p><p>用于指定被修饰的注解修饰哪些程序单元，也就是上面说的类，方法，字段</p><p>Retention</p><p>用于指定被修饰的注解被保留多长时间，分别SOURCE（注解仅存在于源码中，在class字节码文件中不包含）,CLASS（默认的保留策略，注解会在class字节码文件中存在，但运行时无法获取）,RUNTIME（注解会在class字节码文件中存在，在运行时可以通过反射获取到）三种类型，如果想要在程序运行过程中通过反射来获取注解的信息需要将Retention设置为RUNTIME</p><p>Documented</p><p>用于指定被修饰的注解类将被javadoc工具提取成文档</p><p>Inherited</p><p>用于指定被修饰的注解类将具有继承性</p>`,16),o=[a];function r(i,l){return n(),t("div",null,o)}const d=e(p,[["render",r],["__file","create-annotation.html.vue"]]);export{d as default};
