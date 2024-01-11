import{_ as e,o as r,c as t,e as a}from"./app-3RcBQnkC.js";const o={},s=a(`<p>我们日常开发中，大多数时候会通过API的方式调用Java提供的那些基础类，这些基础类时被Bootstrap加载的。</p><p>但是，调用方式除了API之外，还有一种SPI的方式。</p><p>如典型的JDBC服务，我们通常通过以下方式创建数据库连接：</p><pre><code>Connection conn = DriverManager.getConnection(&quot;jdbc:mysql://localhost:3306/mysql&quot;, &quot;root&quot;, &quot;1234&quot;);
</code></pre><p>在以上代码执行之前，DriverManager会先被类加载器加载，因为java.sql.DriverManager类是位于rt.jar下面的 ，所以他会被根加载器加载。</p><p>类加载时，会执行该类的静态方法。其中有一段关键的代码是：</p><pre><code>ServiceLoader&lt;Driver&gt; loadedDrivers = ServiceLoader.load(Driver.class);
</code></pre><p>这段代码，会尝试加载classpath下面的所有实现了Driver接口的实现类。</p><p>那么，问题就来了。</p><p><strong>DriverManager是被根加载器加载的，那么在加载时遇到以上代码，会尝试加载所有Driver的实现类，但是这些实现类基本都是第三方提供的，根据双亲委派原则，第三方的类不能被根加载器加载。</strong></p><p>那么，怎么解决这个问题呢？</p><p>于是，就<strong>在JDBC中通过引入ThreadContextClassLoader（线程上下文加载器，默认情况下是AppClassLoader）的方式破坏了双亲委派原则。</strong></p><p>我们深入到ServiceLoader.load方法就可以看到：</p><pre><code>public static &lt;S&gt; ServiceLoader&lt;S&gt; load(Class&lt;S&gt; service) {
    ClassLoader cl = Thread.currentThread().getContextClassLoader();
    return ServiceLoader.load(service, cl);
}
</code></pre><p>第一行，获取当前线程的线程上下⽂类加载器 AppClassLoader，⽤于加载 classpath 中的具体实现类。</p>`,15),p=[s];function c(n,l){return r(),t("div",null,p)}const i=e(o,[["render",c],["__file","spi-parents-delegate.html.vue"]]);export{i as default};
