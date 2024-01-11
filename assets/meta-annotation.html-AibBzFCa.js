import{_ as t,o as n,c as o,a as e}from"./app-3RcBQnkC.js";const a={},c=e("p",null,"说简单点，就是 定义其他注解的注解 。 比如Override这个注解，就不是一个元注解。而是通过元注解定义出来的。",-1),i=e("pre",null,[e("code",null,`@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {
}
`)],-1),l=e("p",null,"这里面的 @Target @Retention 就是元注解。",-1),r=e("p",null,"元注解有六个:@Target（表示该注解可以用于什么地方）、@Retention（表示再什么级别保存该注解信息）、@Documented（将此注解包含再javadoc中）、@Inherited（允许子类继承父类中的注解）、@Repeatable（1.8新增，允许一个注解在一个元素上使用多次）、@Native（1.8新增，修饰成员变量，表示这个变量可以被本地代码引用，常常被代码生成工具使用）。",-1),_=[c,i,l,r];function s(d,u){return n(),o("div",null,_)}const m=t(a,[["render",s],["__file","meta-annotation.html.vue"]]);export{m as default};
