import{_ as t,o,c as e,e as n}from"./app-3RcBQnkC.js";const p={},u=n(`<p>Java中，想要拼接字符串，最简单的方式就是通过&quot;+&quot;连接两个字符串。</p><p>有人把Java中使用+拼接字符串的功能理解为运算符重载。其实并不是，Java是不支持运算符重载的。这其实只是Java提供的一个语法糖。</p><blockquote><p>运算符重载：在计算机程序设计中，运算符重载（英语：operator overloading）是多态的一种。运算符重载，就是对已有的运算符重新进行定义，赋予其另一种功能，以适应不同的数据类型。</p></blockquote><blockquote><p>语法糖：语法糖（Syntactic sugar），也译为糖衣语法，是由英国计算机科学家彼得·兰丁发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能没有影响，但是更方便程序员使用。语法糖让程序更加简洁，有更高的可读性。</p></blockquote><p>前面提到过，使用+拼接字符串，其实只是Java提供的一个语法糖， 那么，我们就来解一解这个语法糖，看看他的内部原理到底是如何实现的。</p><p>还是这样一段代码。我们把他生成的字节码进行反编译，看看结果。</p><pre><code>String wechat = &quot;Hollis&quot;;
String introduce = &quot;每日更新Java相关技术文章&quot;;
String hollis = wechat + &quot;,&quot; + introduce;
</code></pre><p>反编译后的内容如下，反编译工具为jad。</p><pre><code>String wechat = &quot;Hollis&quot;;
String introduce = &quot;\\u6BCF\\u65E5\\u66F4\\u65B0Java\\u76F8\\u5173\\u6280\\u672F\\u6587\\u7AE0&quot;;//每日更新Java相关技术文章
String hollis = (new StringBuilder()).append(wechat).append(&quot;,&quot;).append(introduce).toString();
</code></pre><p>通过查看反编译以后的代码，我们可以发现，原来字符串常量在拼接过程中，是将String转成了StringBuilder后，使用其append方法进行处理的。</p><p>那么也就是说，Java中的+对字符串的拼接，其实现原理是使用StringBuilder.append。</p><p>但是，String的使用+字符串拼接也不全都是基于StringBuilder.append，还有种特殊情况，那就是如果是两个固定的字面量拼接，如：</p><pre><code>String s = &quot;a&quot; + &quot;b&quot;
</code></pre><p>编译器会进行常量折叠(因为两个都是编译期常量，编译期可知)，直接变成 String s = &quot;ab&quot;。</p>`,14),a=[u];function r(i,c){return o(),e("div",null,a)}const l=t(p,[["render",r],["__file","string-append.html.vue"]]);export{l as default};
