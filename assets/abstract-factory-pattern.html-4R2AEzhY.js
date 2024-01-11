import{_ as s,r,o as l,c as d,a as e,b as n,d as a,e as t}from"./app-3RcBQnkC.js";const c="/code-note/assets/image-1-XVbVDhIZ.png",v="/code-note/assets/image-2-B3Jt6ifB.png",u={},p=t('<h1 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h1><p>抽象工厂模式(Abstract Factory Pattern)：提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。抽象工厂模式又称为Kit模式，属于对象创建型模式。</p><p>抽象工厂模式提供了一种方式，可以将同一产品族的单独的工厂封装起来。在正常使用中，客户端程序需要创建抽象工厂的具体实现，然后使用抽象工厂作为接口来创建这一主题的具体对象。客户端程序不需要知道（或关心）它从这些内部的工厂方法中获得对象的具体类型，因为客户端程序仅使用这些对象的通用接口。抽象工厂模式将一组对象的实现细节与他们的一般使用分离开来。</p><h3 id="产品族" tabindex="-1"><a class="header-anchor" href="#产品族" aria-hidden="true">#</a> 产品族</h3><p>来认识下什么是产品族: 位于不同产品等级结构中,功能相关的产品组成的家族。如下面的例子，就有两个产品族：跑车族和商务车族。 <img src="'+c+'" alt="Alt text"></p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>抽象工厂模式和工厂方法模式一样，都符合开放-封闭原则。但是不同的是，工厂方法模式在增加一个具体产品的时候，都要增加对应的工厂。但是抽象工厂模式只有在新增一个类型的具体产品时才需要新增工厂。也就是说，工厂方法模式的一个工厂只能创建一个具体产品。而抽象工厂模式的一个工厂可以创建属于一类类型的多种具体产品。工厂创建产品的个数介于简单工厂模式和工厂方法模式之间。</p><p>在以下情况下可以使用抽象工厂模式：</p><blockquote><p>一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。</p><p>系统中有多于一个的产品族，而每次只使用其中某一产品族。</p><p>属于同一个产品族的产品将在一起使用，这一约束必须在系统的设计中体现出来。</p><p>系统提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现。</p></blockquote><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>抽象工厂模式包含如下角色：</p><blockquote><p>AbstractFactory(抽象工厂)：用于声明生成抽象产品的方法</p><p>ConcreteFactory(具体工厂)：实现了抽象工厂声明的生成抽象产品的方法，生成一组具体产品，这些产品构成了一个产品族，每一个产品都位于某个产品等级结构中；</p><p>AbstractProduct(抽象产品)：为每种产品声明接口，在抽象产品中定义了产品的抽象业务方法；</p><p>Product(具体产品)：定义具体工厂生产的具体产品对象，实现抽象产品接口中定义的业务方法。</p></blockquote><p>本文的例子采用一个汽车代工厂造汽车的例子。假设我们是一家汽车代工厂商，我们负责给奔驰和特斯拉两家公司制造车子。我们简单的把奔驰车理解为需要加油的车，特斯拉为需要充电的车。其中奔驰车中包含跑车和商务车两种，特斯拉同样也包含跑车和商务车。 <img src="'+v+`" alt="Alt text"></p><p>以上场景，我们就可以把跑车和商务车分别对待，对于跑车有单独的工厂创建，商务车也有单独的工厂。这样，以后无论是再帮任何其他厂商造车，只要是跑车或者商务车我们都不需要再引入工厂。同样，如果我们要增加一种其他类型的车，比如越野车，我们也不需要对跑车或者商务车的任何东西做修改。</p><p>下面是抽象产品，奔驰车和特斯拉车：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public interface BenzCar {
    
        //加汽油
        public void gasUp();
    
    }
    
    public interface TeslaCar {
    
        //充电
        public void charge();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是具体产品，奔驰跑车、奔驰商务车、特斯拉跑车、特斯拉商务车：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class BenzSportCar implements BenzCar {
        public void gasUp() {
            System.out.println(&quot;给我的奔驰跑车加最好的汽油&quot;);
        }
    }
    
    public class BenzBusinessCar implements BenzCar{
        public void gasUp() {
            System.out.println(&quot;给我的奔驰商务车加一般的汽油&quot;);
        }
    }
    
    public class TeslaSportCar implements TeslaCar {
        public void charge() {
            System.out.println(&quot;给我特斯拉跑车冲满电&quot;);
        }
    }
    
    public class TeslaBusinessCar implements TeslaCar {
        public void charge() {
            System.out.println(&quot;不用给我特斯拉商务车冲满电&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是抽象工厂：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public interface CarFactory {
    
        public BenzCar getBenzCar();
        public TeslaCar getTeslaCar();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是具体工厂：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class SportCarFactory implements CarFactory {
        public BenzCar getBenzCar() {
            return new BenzSportCar();
        }
    
        public TeslaCar getTeslaCar() {
            return new TeslaSportCar();
        }
    }
    
    public class BusinessCarFactory implements CarFactory {
        public BenzCar getBenzCar() {
            return new BenzBusinessCar();
        }
    
        public TeslaCar getTeslaCar() {
            return new TeslaBusinessCar();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开闭原则-的倾斜性" tabindex="-1"><a class="header-anchor" href="#开闭原则-的倾斜性" aria-hidden="true">#</a> “开闭原则”的倾斜性</h2><p>“开闭原则”要求系统对扩展开放，对修改封闭，通过扩展达到增强其功能的目的。对于涉及到多个产品族与多个产品等级结构的系统，其功能增强包括两方面：</p><blockquote><p>增加产品族：对于增加新的产品族，工厂方法模式很好的支持了“开闭原则”，对于新增加的产品族，只需要对应增加一个新的具体工厂即可，对已有代码无须做任何修改。</p><p>增加新的产品等级结构：对于增加新的产品等级结构，需要修改所有的工厂角色，包括抽象工厂类，在所有的工厂类中都需要增加生产新产品的方法，不能很好地支持“开闭原则”。</p></blockquote><p>抽象工厂模式的这种性质称为“开闭原则”的倾斜性，抽象工厂模式以一种倾斜的方式支持增加新的产品，它为新产品族的增加提供方便，但不能为新的产品等级结构的增加提供这样的方便。</p><h2 id="三种工厂模式之间的关系" tabindex="-1"><a class="header-anchor" href="#三种工厂模式之间的关系" aria-hidden="true">#</a> 三种工厂模式之间的关系</h2><p>当抽象工厂模式中每一个具体工厂类只创建一个产品对象，也就是只存在一个产品等级结构时，抽象工厂模式退化成工厂方法模式；</p><p>抽象工厂模式与工厂方法模式最大的区别在于，工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构。</p><p>当工厂方法模式中抽象工厂与具体工厂合并，提供一个统一的工厂来创建产品对象，并将创建对象的工厂方法设计为静态方法时，工厂方法模式退化成简单工厂模式。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>抽象工厂模式提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。抽象工厂模式又称为Kit模式，属于对象创建型模式。</p><p>抽象工厂模式是所有形式的工厂模式中最为抽象和最具一般性的一种形态。</p><p>抽象工厂模式的主要优点是隔离了具体类的生成，使得客户并不需要知道什么被创建，而且每次可以通过具体工厂类创建一个产品族中的多个对象，增加或者替换产品族比较方便，增加新的具体工厂和产品族很方便；主要缺点在于增加新的产品等级结构很复杂，需要修改抽象工厂和所有的具体工厂类，对“开闭原则”的支持呈现倾斜性。</p>`,34),o={href:"https://github.com/hollischuang/DesignPattern",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),m={href:"http://s.click.taobao.com/t?e=m=2&s=R5B/xd29JVMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jN2wQzI0ZBVHBMajAjK1gBpS4hLH/P02ckKYNRBWOBBey11vvWwHXSniyi5vWXIZkKWZZq7zWpCC8X3k5aQlui0qVGgqDL2o8YMXU3NNCg/&pvid=10_42.120.73.203_224_1460382841310",target:"_blank",rel:"noopener noreferrer"},h={href:"http://s.click.taobao.com/t?e=m%3D2%26s%3DObpq8Qxse2EcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67utJaEGcptl2kfkm8XrrgBtpS4hLH%2FP02ckKYNRBWOBBey11vvWwHXTpkOAWGyim%2Bw2PNKvM2u52N5aP5%2Bgx7zgh4LxdBQDQSXEqY%2Bakgpmw&pvid=10_121.0.29.199_322_1460465025379",target:"_blank",rel:"noopener noreferrer"},g={href:"http://design-patterns.readthedocs.org/zh_CN/latest/creational_patterns/abstract_factory.html#id14",target:"_blank",rel:"noopener noreferrer"};function _(B,C){const i=r("ExternalLinkIcon");return l(),d("div",null,[p,e("p",null,[n("文中所有代码见"),e("a",o,[n("GitHub"),a(i)])]),b,e("p",null,[e("a",m,[n("大话设计模式"),a(i)])]),e("p",null,[e("a",h,[n("深入浅出设计模式"),a(i)])]),e("p",null,[e("a",g,[n("抽象工厂模式(Factory Method Pattern)"),a(i)])])])}const f=s(u,[["render",_],["__file","abstract-factory-pattern.html.vue"]]);export{f as default};
