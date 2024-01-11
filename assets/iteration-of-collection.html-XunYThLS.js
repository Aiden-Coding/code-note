import{_ as i,o as e,c as n,e as t}from"./app-3RcBQnkC.js";const s={},l=t(`<p>Collection的迭代有很多种方式：</p><p>1、通过普通for循环迭代</p><p>2、通过增强for循环迭代</p><p>3、使用Iterator迭代</p><p>4、使用Stream迭代</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; list = ImmutableList.of(&quot;Hollis&quot;, &quot;hollischuang&quot;);

// 普通for循环遍历
for (int i = 0; i &lt; list.size(); i++) {
    System.out.println(list.get(i));
}

//增强for循环遍历
for (String s : list) {
    System.out.println(s);
}

//Iterator遍历
Iterator it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}

//Stream 遍历
list.forEach(System.out::println);

list.stream().forEach(System.out::println);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[l];function d(a,o){return e(),n("div",null,r)}const v=i(s,[["render",d],["__file","iteration-of-collection.html.vue"]]);export{v as default};
