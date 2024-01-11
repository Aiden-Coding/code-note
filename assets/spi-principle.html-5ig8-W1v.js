import{_ as e,o as r,c as a,e as p}from"./app-3RcBQnkC.js";const t={},n=p(`<p>看ServiceLoader类的签名类的成员变量：</p><pre><code>public final class ServiceLoader&lt;S&gt; implements Iterable&lt;S&gt;{
private static final String PREFIX = &quot;META-INF/services/&quot;;

    // 代表被加载的类或者接口
    private final Class&lt;S&gt; service;

    // 用于定位，加载和实例化providers的类加载器
    private final ClassLoader loader;

    // 创建ServiceLoader时采用的访问控制上下文
    private final AccessControlContext acc;

    // 缓存providers，按实例化的顺序排列
    private LinkedHashMap&lt;String,S&gt; providers = new LinkedHashMap&lt;&gt;();

    // 懒查找迭代器
    private LazyIterator lookupIterator;

    ......
}
</code></pre><p>参考具体源码，梳理了一下，实现的流程如下：</p><p>1 应用程序调用ServiceLoader.load方法</p><p>ServiceLoader.load方法内先创建一个新的ServiceLoader，并实例化该类中的成员变量，包括：</p><p>loader(ClassLoader类型，类加载器)</p><p>acc(AccessControlContext类型，访问控制器)</p><p>providers(LinkedHashMap类型，用于缓存加载成功的类)</p><p>lookupIterator(实现迭代器功能)</p><p>2 应用程序通过迭代器接口获取对象实例</p><p>ServiceLoader先判断成员变量providers对象中(LinkedHashMap类型)是否有缓存实例对象，如果有缓存，直接返回。 如果没有缓存，执行类的装载：</p><p>读取META-INF/services/下的配置文件，获得所有能被实例化的类的名称</p><p>通过反射方法Class.forName()加载类对象，并用instance()方法将类实例化</p><p>把实例化后的类缓存到providers对象中(LinkedHashMap类型）</p><p>然后返回实例对象。</p>`,15),o=[n];function i(s,c){return r(),a("div",null,o)}const d=e(t,[["render",i],["__file","spi-principle.html.vue"]]);export{d as default};
