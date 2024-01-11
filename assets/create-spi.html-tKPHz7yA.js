import{_ as o,o as e,c as n,e as t}from"./app-3RcBQnkC.js";const a={},r=t(`<p>步骤1、定义一组接口 (假设是org.foo.demo.IShout)，并写出接口的一个或多个实现，(假设是org.foo.demo.animal.Dog、org.foo.demo.animal.Cat)。</p><pre><code>public interface IShout {
    void shout();
}
public class Cat implements IShout {
    @Override
    public void shout() {
        System.out.println(&quot;miao miao&quot;);
    }
}
public class Dog implements IShout {
    @Override
    public void shout() {
        System.out.println(&quot;wang wang&quot;);
    }
}
</code></pre><p>步骤2、在 src/main/resources/ 下建立 /META-INF/services 目录， 新增一个以接口命名的文件 (org.foo.demo.IShout文件)，内容是要应用的实现类（这里是org.foo.demo.animal.Dog和org.foo.demo.animal.Cat，每行一个类）。</p><pre><code>org.foo.demo.animal.Dog
org.foo.demo.animal.Cat
</code></pre><p>步骤3、使用 ServiceLoader 来加载配置文件中指定的实现。</p><pre><code>public class SPIMain {
    public static void main(String[] args) {
        ServiceLoader&lt;IShout&gt; shouts = ServiceLoader.load(IShout.class);
        for (IShout s : shouts) {
            s.shout();
        }
    }
}
</code></pre><p>代码输出：</p><pre><code>wang wang
miao miao
</code></pre>`,8),i=[r];function c(s,d){return e(),n("div",null,i)}const u=o(a,[["render",c],["__file","create-spi.html.vue"]]);export{u as default};
