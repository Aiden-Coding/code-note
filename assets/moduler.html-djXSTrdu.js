import{_ as e,o as n,c as o,e as a}from"./app-3RcBQnkC.js";const d={},l=a(`<h1 id="moduler" tabindex="-1"><a class="header-anchor" href="#moduler" aria-hidden="true">#</a> moduler</h1><p>近几年模块化技术已经很成熟了，在JDK 9中已经应用了模块化的技术。</p><p>其实早在JDK 9之前，OSGI这种框架已经是模块化的了，<strong>而OSGI之所以能够实现模块热插拔和模块内部可见性的精准控制都归结于其特殊的类加载机制，加载器之间的关系不再是双亲委派模型的树状结构，而是发展成复杂的网状结构。</strong></p><p><img src="https://www.hollischuang.com/wp-content/uploads/2021/01/16102754973998.jpg" alt="w942"></p><p><strong>在JDK中，双亲委派也不是绝对的了。</strong></p><p>在JDK9之前，JVM的基础类以前都是在rt.jar这个包里，这个包也是JRE运行的基石。</p><p>这不仅是违反了单一职责原则，同样程序在编译的时候会将很多无用的类也一并打包，造成臃肿。</p><p><strong>在JDK9中，整个JDK都基于模块化进行构建，以前的rt.jar, tool.jar被拆分成数十个模块，编译的时候只编译实际用到的模块，同时各个类加载器各司其职，只加载自己负责的模块。</strong></p><pre><code>Class&lt;?&gt; c = findLoadedClass(cn);
if (c == null) {
    // 找到当前类属于哪个模块
    LoadedModule loadedModule = findLoadedModule(cn);
    if (loadedModule != null) {
        //获取当前模块的类加载器
        BuiltinClassLoader loader = loadedModule.loader();
        //进行类加载
        c = findClassInModuleOrNull(loadedModule, cn);
     } else {
          // 找不到模块信息才会进行双亲委派
            if (parent != null) {
              c = parent.loadClassOrNull(cn);
            }
      }
}
</code></pre><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>以上，从什么是双亲委派，到如何实现与破坏双亲委派，又从破坏双亲委派的示例等多个方面全面介绍了关于双亲委派的知识。</p><p>相信通过学习本文，你一定对双亲委派机制有了更加深刻的了解。</p><p>阅读过本文之后，反手在简历上写下：熟悉Java的类加载机制，不服来问！</p>`,13),r=[l];function t(s,c){return n(),o("div",null,r)}const u=e(d,[["render",t],["__file","moduler.html.vue"]]);export{u as default};
