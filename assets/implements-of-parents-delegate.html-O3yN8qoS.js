import{_ as n,o as e,c as s,e as a}from"./app-3RcBQnkC.js";const t={},o=a(`<h1 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h1><p>双亲委派模型对于保证Java程序的稳定运作很重要，但它的实现并不复杂。</p><p>实现双亲委派的代码都集中在java.lang.ClassLoader的loadClass()方法之中：</p><pre><code>protected Class&lt;?&gt; loadClass(String name, boolean resolve)
        throws ClassNotFoundException
    {
        synchronized (getClassLoadingLock(name)) {
            // First, check if the class has already been loaded
            Class&lt;?&gt; c = findLoadedClass(name);
            if (c == null) {
                long t0 = System.nanoTime();
                try {
                    if (parent != null) {
                        c = parent.loadClass(name, false);
                    } else {
                        c = findBootstrapClassOrNull(name);
                    }
                } catch (ClassNotFoundException e) {
                    // ClassNotFoundException thrown if class not found
                    // from the non-null parent class loader
                }

                if (c == null) {
                    // If still not found, then invoke findClass in order
                    // to find the class.
                    long t1 = System.nanoTime();
                    c = findClass(name);

                    // this is the defining class loader; record the stats
                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                    sun.misc.PerfCounter.getFindClasses().increment();
                }
            }
            if (resolve) {
                resolveClass(c);
            }
            return c;
        }
    }
</code></pre><p>代码不难理解，主要就是以下几个步骤：</p><p>1、先检查类是否已经被加载过</p><p>2、若没有加载则调用父加载器的loadClass()方法进行加载</p><p>3、若父加载器为空则默认使用启动类加载器作为父加载器。</p><p>4、如果父类加载失败，抛出ClassNotFoundException异常后，再调用自己的findClass()方法进行加载。</p>`,9),l=[o];function r(i,d){return e(),s("div",null,l)}const p=n(t,[["render",r],["__file","implements-of-parents-delegate.html.vue"]]);export{p as default};
