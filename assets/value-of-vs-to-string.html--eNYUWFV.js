import{_ as n,o as e,c as i,a as t}from"./app-3RcBQnkC.js";const r={},o=t("p",null,"我们有三种方式将一个int类型的变量变成一个String类型，那么他们有什么区别？",-1),l=t("pre",null,[t("code",null,`1.int i = 5;
2.String i1 = "" + i;
3.String i2 = String.valueOf(i);
4.String i3 = Integer.toString(i);
`)],-1),s=t("p",null,"第三行和第四行没有任何区别，因为String.valueOf(i)也是调用Integer.toString(i)来实现的。",-1),_=t("p",null,"第二行代码其实是String i1 = (new StringBuilder()).append(i).toString();，首先创建一个StringBuilder对象，然后再调用append方法，再调用toString方法。",-1),c=[o,l,s,_];function a(g,u){return e(),i("div",null,c)}const S=n(r,[["render",a],["__file","value-of-vs-to-string.html.vue"]]);export{S as default};
