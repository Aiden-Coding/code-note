import{_ as e,o as a,c as l,a as n}from"./app-3RcBQnkC.js";const t={},s=n("p",null,"Java中定义枚举是使用enum关键字的，但是Java中其实还有一个java.lang.Enum类。这是一个抽象类，定义如下：",-1),o=n("pre",null,[n("code",null,`package java.lang;

public abstract class Enum<E extends Enum<E>> implements Constable, Comparable<E>, Serializable {
    private final String name;
    private final int ordinal;

}
`)],-1),c=n("p",null,"这个类我们在日常开发中不会用到，但是其实我们使用enum定义的枚举，其实现方式就是通过继承Enum类实现的。",-1),i=n("p",null,"当我们使用enum来定义一个枚举类型的时候，编译器会自动帮我们创建一个final类型的类继承Enum类，所以枚举类型不能被继承。",-1),_=[s,o,c,i];function u(m,r){return a(),l("div",null,_)}const d=e(t,[["render",u],["__file","enum-class.html.vue"]]);export{d as default};
