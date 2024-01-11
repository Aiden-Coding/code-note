import{_ as a,o as n,c as e,e as i}from"./app-3RcBQnkC.js";const l={},r=i(`<p>final是Java中的一个关键字，它所表示的是“这部分是无法修改的”。</p><p>使用 final 可以定义 ：变量、方法、类。</p><h3 id="final变量" tabindex="-1"><a class="header-anchor" href="#final变量" aria-hidden="true">#</a> final变量</h3><p>如果将变量设置为final，则不能更改final变量的值(它将是常量)。</p><pre><code>class Test{
     final String name = &quot;Hollis&quot;;
 
}
</code></pre><p>一旦final变量被定义之后，是无法进行修改的。</p><h3 id="final方法" tabindex="-1"><a class="header-anchor" href="#final方法" aria-hidden="true">#</a> final方法</h3><p>如果任何方法声明为final，则不能覆盖它。</p><pre><code>class Parent {
    final void name() {
        System.out.println(&quot;Hollis&quot;);
    }
}
</code></pre><p>当我们定义以上类的子类的时候，无法覆盖其name方法，会编译失败。</p><h3 id="final类" tabindex="-1"><a class="header-anchor" href="#final类" aria-hidden="true">#</a> final类</h3><p>如果把任何一个类声明为final，则不能继承它。</p><pre><code>final class Parent {
    
}
</code></pre><p>以上类不能被继承！</p>`,14),t=[r];function o(c,f){return n(),e("div",null,t)}const d=a(l,[["render",o],["__file","final-in-java.html.vue"]]);export{d as default};
