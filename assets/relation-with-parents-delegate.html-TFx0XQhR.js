import{_ as t,o as n,c as a,a as e}from"./app-3RcBQnkC.js";const s={},o=e("p",null,"很多人看到父加载器、子加载器这样的名字，就会认为Java中的类加载器之间存在着继承关系。",-1),l=e("p",null,"甚至网上很多文章也会有类似的错误观点。",-1),r=e("p",null,"这里需要明确一下，双亲委派模型中，类加载器之间的父子关系一般不会以继承（Inheritance）的关系来实现，而是都使用组合（Composition）关系来复用父加载器的代码的。",-1),c=e("p",null,"如下为ClassLoader中父加载器的定义：",-1),_=e("pre",null,[e("code",null,`public abstract class ClassLoader {
    // The parent class loader for delegation
    private final ClassLoader parent;
}
`)],-1),i=[o,l,r,c,_];function d(p,h){return n(),a("div",null,i)}const f=t(s,[["render",d],["__file","relation-with-parents-delegate.html.vue"]]);export{f as default};
