import{_ as a,r as l,o as r,c as t,a as i,b as e,d as s,e as d}from"./app-3RcBQnkC.js";const v="/code-note/assets/image-6-fc4cBOBt.png",o={},c=d(`<h1 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式" aria-hidden="true">#</a> 迭代器模式</h1><p>一提到迭代器模式很多人可能感觉很陌生，但是实际上，迭代器模式是所有设计模式中最简单也是最常用的设计模式，正是因为他太常用了，所以很多人忽略了他的存在。</p><blockquote><p>迭代器模式提供一种方法访问一个容器中各个元素，而又不需要暴露该对象的内部细节。</p></blockquote><p>那么，这里提到的容器是什么呢？其实就是可以包含一组对象的数据结构，如Java中的<code>Collection</code>和<code>Set</code>。</p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>从迭代器模式的概念中我们也看的出来，迭代器模式的重要用途就是帮助我们遍历容器。拿List来举例。如果我们想要遍历他的话，通常有以下几种方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        for (int i = 0; i &lt; list.size(); i++) {
            System.out.print(list.get(i) + &quot;,&quot;);
        }
    
        Iterator iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + &quot;,&quot;);
        }
    
        for (Integer i : list) {
            System.out.print(i + &quot;,&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={href:"http://www.hollischuang.com/archives/1776",target:"_blank",rel:"noopener noreferrer"},m=d('<h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>迭代器模式包含如下角色：</p><blockquote><p>Iterator 抽象迭代器</p><p>ConcreteIterator 具体迭代器</p><p>Aggregate 抽象容器</p><p>Concrete Aggregate 具体容器</p></blockquote><p><img src="'+v+`" alt="Alt text"></p><p>这里我们举一个菜单的例子，我们有一个菜单，我们想要展示出菜单中所有菜品的名字和报价信息等。</p><p>先定义抽象迭代器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public interface Iterator&lt;E&gt; {
    
        boolean hasNext();
    
        E next();
    
        default void remove() {
            throw new UnsupportedOperationException(&quot;remove&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的迭代器提供了三个方法，分别包括hasNext方法、next方法和remove方法。</p><blockquote><p>hasNext 返回该迭代器中是否还有未遍历过的元素</p><p>next 返回迭代器中的下一个元素</p></blockquote><p>在定义一个具体的迭代器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class MenuIterator implements Iterator {
    
        String[] foods;
        int      position = 0;
    
        public MenuIterator(String[] foods){
            this.foods = foods;
        }
    
        @Override
        public boolean hasNext() {
    
            return position != foods.length;
        }
    
        @Override
        public Object next() {
            String food = foods[position];
            position += 1;
            return food;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个具体的类实现了Iterator接口，并实现了其中的方法。具体实现就不详细写了，相信都能看得懂（请忽略线程安全问题）。</p><p>接下来定义一个抽象容器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * Created by hollis on 17/2/18.
     * /
    public interface Menu {
    
        void add(String name);
    
        Iterator getIterator();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义一个菜单接口，只提供两个方法，一个add方法和一个getIterator方法，用于返回一个迭代器。</p><p>然后定义一个具体的容器，用于实现Menu接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class ChineseFoodMenu implements Menu {
    
        private String[] foods    = new String[4];
        private int      position = 0;
    
        @Override
        public void add(String name) {
            foods[position] = name;
            position += 1;
        }
    
        @Override
        public Iterator getIterator() {
            return new MenuIterator(this.foods);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该类的实现也相对简单。至此，我们已经具备了一个迭代器模式需要的所有角色。接下来写一个测试类看看具体使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Main {
    
        public static void main(String[] args) {
            ChineseFoodMenu chineseFoodMenu = new ChineseFoodMenu();
            chineseFoodMenu.add(&quot;宫保鸡丁&quot;);
            chineseFoodMenu.add(&quot;孜然羊肉&quot;);
            chineseFoodMenu.add(&quot;水煮鱼&quot;);
            chineseFoodMenu.add(&quot;北京烤鸭&quot;);
    
            Iterator iterator = chineseFoodMenu.getIterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    //output:
    //宫保鸡丁
    //孜然羊肉
    //水煮鱼
    //北京烤鸭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过迭代器的方式实现了对一个容器（Menu）的遍历。迭代器的好处就是我们在Main类中使用Menu的时候根本不知道他底层的实现，只需要通过迭代器来遍历就可以了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>迭代器的使用现在非常广泛，因为Java中提供了java.util.Iterator。而且Java中的很多容器（Collection、Set）也都提供了对迭代器的支持。</p><p>迭代器甚至可以从23种设计模式中移除，因为他已经普遍的可以称之为工具了。</p><p>最后最后，迭代器模式很好用，本文中介绍了如何写迭代器模式，但是，如果你要做Java开发，请直接用Java提供的Iterator。</p>`,24),b={href:"https://github.com/hollischuang/DesignPattern",target:"_blank",rel:"noopener noreferrer"};function p(h,g){const n=l("ExternalLinkIcon");return r(),t("div",null,[c,i("p",null,[e("其实，第二种和"),i("a",u,[e("第三种"),s(n)]),e("都是基于迭代器模式实现的。本文重点是介绍迭代器模式，那么先暂不介绍Java中内置的迭代器，我们尝试自己实现一下迭代器模式，这样更有助于我们彻底理解迭代器模式。")]),m,i("p",null,[e("文中所有代码见"),i("a",b,[e("GitHub"),s(n)])])])}const f=a(o,[["render",p],["__file","iterator-pattern.html.vue"]]);export{f as default};
