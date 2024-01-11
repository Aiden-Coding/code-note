import{_ as a,r as e,o as d,c as _,a as t,b as n,d as i,w as s}from"./app-3RcBQnkC.js";const h={},u=t("h3",{id:"一、当泛型遇到重载",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一、当泛型遇到重载","aria-hidden":"true"},"#"),n(" 一、当泛型遇到重载")],-1),p=t("pre",null,[t("code",null,`public class GenericTypes {  

    public static void method(List<String> list) {  
        System.out.println("invoke method(List<String> list)");  
    }  

    public static void method(List<Integer> list) {  
        System.out.println("invoke method(List<Integer> list)");  
    }  
}  
`)],-1),g=t("code",null,"List<String>",-1),m=t("code",null,"List<Integer>",-1),f=t("code",null,"List<Integer>",-1),b=t("code",null,"List<String>",-1),v=t("h3",{id:"二、当泛型遇到catch",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#二、当泛型遇到catch","aria-hidden":"true"},"#"),n(" 二、当泛型遇到catch")],-1),x=t("h3",{id:"三、当泛型内包含静态变量",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#三、当泛型内包含静态变量","aria-hidden":"true"},"#"),n(" 三、当泛型内包含静态变量")],-1),S=t("pre",null,[t("code",null,`public class StaticTest{
    public static void main(String[] args){
        GT<Integer> gti = new GT<Integer>();
        gti.var=1;
        GT<String> gts = new GT<String>();
        gts.var=2;
        System.out.println(gti.var);
    }
}
class GT<T>{
    public static int var=0;
    public void nothing(T x){}
}
`)],-1),T=t("p",null,"答案是——2！",-1),G=t("p",null,"由于经过类型擦除，所有的泛型类实例都关联到同一份字节码上，泛型类的所有静态变量是共享的。",-1);function L(I,k){const c=e("e"),o=e("integer"),l=e("string"),r=e("t");return d(),_("div",null,[u,p,t("p",null,[n("上面这段代码，有两个重载的函数，因为他们的参数类型不同，一个是"),g,n("另一个是"),m,n(" ，但是，这段代码是编译通不过的。因为我们前面讲过，参数"),f,n("和"),b,n("编译之后都被擦除了，变成了一样的原生类型List"),i(c,null,{default:s(()=>[n("，擦除动作导致这两个方法的特征签名变得一模一样。")]),_:1})]),v,t("p",null,[n("如果我们自定义了一个泛型异常类GenericException"),i(r,null,{default:s(()=>[n("，那么，不要尝试用多个catch取匹配不同的异常类型，例如你想要分别捕获GenericException"),i(l,null,{default:s(()=>[n("、GenericException"),i(o,null,{default:s(()=>[n("，这也是有问题的。")]),_:1})]),_:1})]),_:1})]),x,S,T,G])}const y=a(h,[["render",L],["__file","generics-problem.html.vue"]]);export{y as default};
