import{_ as e,o as t,c as s,e as i}from"./app-3RcBQnkC.js";const n={},a=i(`<p>Java 1.7 之前 switch 参数可用类型为 short、byte、int、char，枚举类型之所以能使用其实是编译器层面实现的</p><p>编译器会将枚举 switch 转换为类似</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch(s.ordinal()) { 
    case Status.START.ordinal() 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形式，所以实质还是 int 参数类型，感兴趣的可以自己写个使用枚举的 switch 代码然后通过 javap -v 去看下字节码就明白了。</p>`,4),c=[a];function d(l,r){return t(),s("div",null,c)}const u=e(n,[["render",d],["__file","enum-switch.html.vue"]]);export{u as default};
