import{_ as e,o as n,c as o,a as t}from"./app-3RcBQnkC.js";const a={},r=t("p",null,"函数接口不同",-1),s=t("pre",null,[t("code",null,`    Enumeration只有2个函数接口。通过Enumeration，我们只能读取集合的数据，而不能对数据进行修改。
    Iterator只有3个函数接口。Iterator除了能读取集合的数据之外，也能数据进行删除操作。
`)],-1),l=t("p",null,"Iterator支持fail-fast机制，而Enumeration不支持。",-1),i=t("pre",null,[t("code",null,`    Enumeration 是JDK 1.0添加的接口。使用到它的函数包括Vector、Hashtable等类，这些类都是JDK 1.0中加入的，Enumeration存在的目的就是为它们提供遍历接口。Enumeration本身并没有支持同步，而在Vector、Hashtable实现Enumeration时，添加了同步。
    而Iterator 是JDK 1.2才添加的接口，它也是为了HashMap、ArrayList等集合提供遍历接口。Iterator是支持fail-fast机制的：当多个线程对同一个集合的内容进行操作时，就可能会产生fail-fast事件。
`)],-1),c=t("p",null,"注意：Enumeration迭代器只能遍历Vector、Hashtable这种古老的集合，因此通常不要使用它，除非在某些极端情况下，不得不使用Enumeration，否则都应该选择Iterator迭代器。",-1),_=[r,s,l,i,c];function u(m,d){return n(),o("div",null,_)}const h=e(a,[["render",u],["__file","Enumeration-vs-Iterator.html.vue"]]);export{h as default};
