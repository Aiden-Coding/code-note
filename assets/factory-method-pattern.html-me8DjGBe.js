import{_ as r,r as a,o,c as l,a as e,b as n,d as t,e as s}from"./app-3RcBQnkC.js";const d="/code-note/assets/image-5-KMozeDHI.png",c={},u=e("h1",{id:"工厂方法模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工厂方法模式","aria-hidden":"true"},"#"),n(" 工厂方法模式")],-1),p=e("p",null,"工厂方法模式(Factory Method Pattern)又称为工厂模式，也叫虚拟构造器(Virtual Constructor)模式或者多态工厂(Polymorphic Factory)模式，它属于类创建型模式。",-1),h=e("p",null,"工厂方法模式是一种实现了“工厂”概念的面向对象设计模式。就像其他创建型模式一样，它也是处理在不指定对象具体类型的情况下创建对象的问题。",-1),v=e("blockquote",null,[e("p",null,"工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。”")],-1),b=e("h2",{id:"用途",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用途","aria-hidden":"true"},"#"),n(" 用途")],-1),_={href:"http://www.hollischuang.com/archives/1391",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.hollischuang.com/archives/220",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"在以下情况下可以使用工厂方法模式：",-1),f=e("p",null,"一个类不知道它所需要的对象的类：在工厂方法模式中，客户端不需要知道具体产品类的类名，只需要知道所对应的工厂即可，具体的产品对象由具体工厂类创建；客户端需要知道创建具体产品的工厂类。",-1),k={href:"http://www.hollischuang.com/archives/220",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"将创建对象的任务委托给多个工厂子类中的某一个，客户端在使用时可以无须关心是哪一个工厂子类创建产品子类，需要时再动态指定，可将具体工厂类的类名存储在配置文件或数据库中。",-1),O=s('<h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>工厂方法模式包含如下角色：</p><blockquote><p>Product：抽象产品（<code>Operation</code>）</p><p>ConcreteProduct：具体产品(<code>OperationAdd</code>)</p><p>Factory：抽象工厂(<code>IFactory</code>)</p><p>ConcreteFactory：具体工厂(<code>AddFactory</code>)</p></blockquote><p><img src="'+d+`" alt="Alt text"></p><p>这里还用计算器的例子。在保持<code>Operation</code>，<code>OperationAdd</code>，<code>OperationDiv</code>，<code>OperationSub</code>，<code>OperationMul</code>等几个方法不变的情况下，修改简单工厂模式中的工厂类（<code>OperationFactory</code>）。替代原有的那个&quot;万能&quot;的大工厂类，这里使用工厂方法来代替：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    //工厂接口
    public interface IFactory {
        Operation CreateOption();
    }
    
    //加法类工厂
    public class AddFactory implements IFactory {
    
        public Operation CreateOption() {
            return new OperationAdd();
        }
    }
    
    //除法类工厂
    public class DivFactory implements IFactory {
    
        public Operation CreateOption() {
            return new OperationDiv();
        }
    }
    
    //除法类工厂
    public class MulFactory implements IFactory {
    
        public Operation CreateOption() {
            return new OperationMul();
        }
    }
    
    //减法类工厂
    public class SubFactory implements IFactory {
    
        public Operation CreateOption() {
            return new OperationSub();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在客户端中想要执行加法运算时，需要以下方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Main {
    
        public static void main(String[] args) {
            IFactory factory = new AddFactory();
            Operation operationAdd =  factory.CreateOption();
            operationAdd.setValue1(10);
            operationAdd.setValue2(5);
            System.out.println(operationAdd.getResult());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，一个工厂方法模式就已经写好了。</p><hr><p>从代码量上看，这种工厂方法模式比简单工厂方法模式更加复杂。针对不同的操作（Operation）类都有对应的工厂。很多人会有以下疑问：</p><blockquote><p>貌似工厂方法模式比简单工厂模式要复杂的多？</p><p>工厂方法模式和我自己创建对象没什么区别？为什么要多搞出一些工厂来？</p></blockquote><p>下面就针对以上两个问题来深入理解一下工厂方法模式。</p><h2 id="工厂方法模式的利与弊" tabindex="-1"><a class="header-anchor" href="#工厂方法模式的利与弊" aria-hidden="true">#</a> 工厂方法模式的利与弊</h2><h3 id="为什么要使用工厂来创建对象" tabindex="-1"><a class="header-anchor" href="#为什么要使用工厂来创建对象" aria-hidden="true">#</a> 为什么要使用工厂来创建对象？</h3><blockquote><p>封装对象的创建过程</p></blockquote><p>在工厂方法模式中，工厂方法用来创建客户所需要的产品，同时还向客户<strong>隐藏了哪种具体产品类将被实例化这一细节，用户只需要关心所需产品对应的工厂，无须关心创建细节，甚至无须知道具体产品类的类名。</strong></p><p>基于工厂角色和产品角色的多态性设计是工厂方法模式的关键。**它能够使工厂可以自主确定创建何种产品对象，而如何创建这个对象的细节则完全封装在具体工厂内部。**工厂方法模式之所以又被称为多态工厂模式，是因为所有的具体工厂类都具有同一抽象父类。</p><h3 id="为什么每种对象要单独有一个工厂" tabindex="-1"><a class="header-anchor" href="#为什么每种对象要单独有一个工厂" aria-hidden="true">#</a> 为什么每种对象要单独有一个工厂？</h3>`,19),y={href:"http://www.hollischuang.com/archives/220http://",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.hollischuang.com/archives/220",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"以上就是工厂方法模式的优点。但是，工厂模式也有一些不尽如人意的地方：",-1),B=e("blockquote",null,[e("p",null,"在添加新产品时，需要编写新的具体产品类，而且还要提供与之对应的具体工厂类，系统中类的个数将成对增加，在一定程度上增加了系统的复杂度，有更多的类需要编译和运行，会给系统带来一些额外的开销。"),e("p",null,"由于考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度，且在实现时可能需要用到DOM、反射等技术，增加了系统的实现难度。")],-1),V=e("h2",{id:"工厂方法与简单工厂的区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工厂方法与简单工厂的区别","aria-hidden":"true"},"#"),n(" 工厂方法与简单工厂的区别")],-1),q={href:"http://www.hollischuang.com/archives/220",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"他们都是集中封装了对象的创建，使得要更换对象时，不需要做大的改动就可实现，降低了客户端与产品对象的耦合。",-1),I=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),N=e("p",null,"工厂方法模式是简单工厂模式的进一步抽象和推广。",-1),A=e("p",null,"由于使用了面向对象的多态性，工厂方法模式保持了简单工厂模式的优点，而且克服了它的缺点。",-1),M=e("p",null,"在工厂方法模式中，核心的工厂类不再负责所有产品的创建，而是将具体创建工作交给子类去做。这个核心类仅仅负责给出具体工厂必须实现的接口，而不负责产品类被实例化这种细节，这使得工厂方法模式可以允许系统在不修改工厂角色的情况下引进新产品。",-1),P=e("p",null,"工厂方法模式的主要优点是增加新的产品类时无须修改现有系统，并封装了产品对象的创建细节，系统具有良好的灵活性和可扩展性；其缺点在于增加新产品的同时需要增加新的工厂，导致系统类的个数成对增加，在一定程度上增加了系统的复杂性。",-1),D={href:"https://github.com/hollischuang/DesignPattern",target:"_blank",rel:"noopener noreferrer"},K=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),S={href:"http://s.click.taobao.com/t?e=m=2&s=R5B/xd29JVMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jN2wQzI0ZBVHBMajAjK1gBpS4hLH/P02ckKYNRBWOBBey11vvWwHXSniyi5vWXIZkKWZZq7zWpCC8X3k5aQlui0qVGgqDL2o8YMXU3NNCg/&pvid=10_42.120.73.203_224_1460382841310",target:"_blank",rel:"noopener noreferrer"},H={href:"http://s.click.taobao.com/t?e=m%3D2%26s%3DObpq8Qxse2EcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67utJaEGcptl2kfkm8XrrgBtpS4hLH%2FP02ckKYNRBWOBBey11vvWwHXTpkOAWGyim%2Bw2PNKvM2u52N5aP5%2Bgx7zgh4LxdBQDQSXEqY%2Bakgpmw&pvid=10_121.0.29.199_322_1460465025379",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://design-patterns.readthedocs.org/zh_CN/latest/creational_patterns/factory_method.html#id11",target:"_blank",rel:"noopener noreferrer"};function E(W,z){const i=a("ExternalLinkIcon");return o(),l("div",null,[u,p,h,v,b,e("p",null,[n("工厂方法模式和"),e("a",_,[n("简单工厂模式"),t(i)]),n("虽然都是通过工厂来创建对象，他们之间最大的不同是——"),e("strong",null,[n("工厂方法模式在设计上完全完全符合“"),e("a",m,[n("开闭原则"),t(i)]),n("”。")])]),g,e("blockquote",null,[f,e("p",null,[n("一个类通过其子类来指定创建哪个对象：在工厂方法模式中，对于抽象工厂类只需要提供一个创建产品的接口，而由其子类来确定具体要创建的对象，利用面向对象的多态性和"),e("a",k,[n("里氏代换原则"),t(i)]),n("，在程序运行时，子类对象将覆盖父类对象，从而使得系统更容易扩展。")]),w]),O,e("blockquote",null,[e("p",null,[n("符合『"),e("a",y,[n("开放-封闭原则"),t(i)]),n("』")])]),e("p",null,[n("主要目的是为了解耦。在系统中加入新产品时，无须修改抽象工厂和抽象产品提供的接口，无须修改客户端，也无须修改其他的具体工厂和具体产品，而只要添加一个具体工厂和具体产品就可以了。这样，系统的可扩展性也就变得非常好，完全符合“"),e("a",x,[n("开闭原则"),t(i)]),n("”。")]),F,B,V,e("p",null,[n("工厂模式克服了简单工厂模式违背"),e("a",q,[n("开放-封闭原则"),t(i)]),n("的缺点，又保持了封装对象创建过程的优点。")]),C,I,N,A,M,P,e("p",null,[n("文中所有代码见"),e("a",D,[n("GitHub"),t(i)])]),K,e("p",null,[e("a",S,[n("大话设计模式"),t(i)])]),e("p",null,[e("a",H,[n("深入浅出设计模式"),t(i)])]),e("p",null,[e("a",Q,[n("工厂方法模式(Factory Method Pattern)"),t(i)])])])}const L=r(c,[["render",E],["__file","factory-method-pattern.html.vue"]]);export{L as default};
