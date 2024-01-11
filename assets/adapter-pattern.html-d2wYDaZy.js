import{_ as l,r,o as a,c as d,a as e,b as n,d as s,e as c}from"./app-3RcBQnkC.js";const t="/code-note/assets/image-320ClT6r.png",v="/code-note/assets/image-3-7NokV0_9.png",u={},b=e("h1",{id:"适配器模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#适配器模式","aria-hidden":"true"},"#"),n(" 适配器模式")],-1),o=e("p",null,[n("GOF是这样给适配器模式("),e("code",null,"Adapter"),n(")定义的：将一个类的接口转化成用户需要的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。")],-1),m={href:"http://www.hollischuang.com/archives/1319",target:"_blank",rel:"noopener noreferrer"},p=c('<h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>相信大家都有这样的生活常识：就是目前我们使用的电子设备充电器的型号是不一样的。现在主流的手机充电器口主要包含Mini Usb、Micro Usb和Lightning三种。其中Mini Usb广泛出现在读卡器、MP3、数码相机以及移动硬盘上。由于Micro Usb比Mini Usb更薄，所有广泛应用于手机上，常见于安卓手机。还有一个比较常见的充电器口就是苹果手机常用的Lightning。</p><p>当然，特定型号的手机只能使用特定型号的充电器充电。比如Iphone6手机只能使用Lightning接口的充电器进行充电。但是，如果我们身边只有一条安卓的Micro Usb充电器线的话，我们能不能为苹果手机充电呢？答案是肯定的，只要有一个适配器就可以了。 <img src="'+t+'" alt="Alt text"></p><p>适配器，在我们日常生活中随处可见。适配器模式也正是解决了类似的问题。</p><p>在程序设计过程中我们可能也遇到类似的场景：</p><blockquote><p>1、系统需要使用现有的类，而此类的接口不符合系统的需要。</p><p>2、想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作，这些源类不一定有一致的接口。</p><p>3、通过接口转换，将一个类插入另一个类系中。（比如老虎和飞禽，现在多了一个飞虎，在不增加实体的需求下，增加一个适配器，在里面包容一个虎对象，实现飞的接口。）</p></blockquote><p>以上场景都适合使用适配器模式。</p><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>适配器模式包含如下角色：</p><blockquote><p>Target：目标抽象类</p><p>Adapter：适配器类</p><p>Adaptee：适配者类</p><p>Client：客户类</p></blockquote><p><img src="'+v+`" alt="Alt text"></p><p>这里采用文章开头介绍的手机充电口的例子，我们定义一个适配器，该适配器的功能就是使用安卓充电器给苹果设备充电。</p><p>先定义接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * MicroUsb充电器接口
     */
    public interface MicroUsbInterface {
        public void chargeWithMicroUsb();
    }
    
    /**
     * Lightning充电器接口
     */
    public interface LightningInterface {
        public void chargeWithLightning();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义具体的实现类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * 安卓设备的充电器
     */
    public class AndroidCharger implements MicroUsbInterface {
        @Override
        public void chargeWithMicroUsb() {
            System.out.println(&quot;使用MicroUsb型号的充电器充电...&quot;);
        }
    }
    
    /**
     * 苹果设备的充电器
     */
    public class AppleCharger implements LightningInterface {
        @Override
        public void chargeWithLightning() {
            System.out.println(&quot;使用Lightning型号的充电器充电...&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>因为我们要使用适配器模式将MicroUsb转成Lightning，所以这里的AppleCharger是本来不需要定义的。因为我们使用适配器的目的就是代替新建一个他。这里定义出来是为了使例子更加完整。</p></blockquote><p>定义两个手机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Iphone6Plus {
    
        private LightningInterface lightningInterface;
    
        public Iphone6Plus() {
        }
    
        public Iphone6Plus(LightningInterface lightningInterface) {
            this.lightningInterface = lightningInterface;
        }
    
        public void charge() {
            System.out.println(&quot;开始给我的Iphone6Plus手机充电...&quot;);
            lightningInterface.chargeWithLightning();
            System.out.println(&quot;结束给我的Iphone6Plus手机充电...&quot;);
        }
    
        public LightningInterface getLightningInterface() {
            return lightningInterface;
        }
    
        public void setLightningInterface(LightningInterface lightningInterface) {
            this.lightningInterface = lightningInterface;
        }
    }
    
    public class GalaxyS7 {
    
        private MicroUsbInterface microUsbInterface;
    
        public GalaxyS7() {
        }
    
        public GalaxyS7(MicroUsbInterface microUsbInterface) {
            this.microUsbInterface = microUsbInterface;
        }
    
        public void charge(){
            System.out.println(&quot;开始给我的GalaxyS7手机充电...&quot;);
            microUsbInterface.chargeWithMicroUsb();
            System.out.println(&quot;结束给我的GalaxyS7手机充电...&quot;);
        }
    
        public MicroUsbInterface getMicroUsbInterface() {
            return microUsbInterface;
        }
    
        public void setMicroUsbInterface(MicroUsbInterface microUsbInterface) {
            this.microUsbInterface = microUsbInterface;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义手机的作用是为了更方便的理解适配器模式，在该模式中他不扮演任何角色。</p><p>定义适配器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * 适配器,将MicroUsb接口转成Lightning接口
     */
    public class Adapter implements LightningInterface {
        private MicroUsbInterface microUsbInterface;
    
        public Adapter() {
        }
    
        public Adapter(MicroUsbInterface microUsbInterface) {
            this.microUsbInterface = microUsbInterface;
        }
    
        @Override
        public void chargeWithLightning() {
            microUsbInterface.chargeWithMicroUsb();
        }
    
        public MicroUsbInterface getMicroUsbInterface() {
            return microUsbInterface;
        }
    
        public void setMicroUsbInterface(MicroUsbInterface microUsbInterface) {
            this.microUsbInterface = microUsbInterface;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该适配器的功能是把一个MicroUsb转换成Lightning。实现方式是实现目标类的接口（<code>LightningInterface</code>），然后使用组合的方式，在该适配器中定义microUsb。然后在重写的<code>chargeWithLightning（）</code>方法中，采用microUsb的方法来实现具体细节。</p><p>定义客户端</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Main {
    
        public static void main(String[] args) {
            Iphone6Plus iphone6Plus = new Iphone6Plus(new AppleCharger());
            iphone6Plus.charge();
    
            System.out.println(&quot;==============================&quot;);
    
            GalaxyS7 galaxyS7 = new GalaxyS7(new AndroidCharger());
            galaxyS7.charge();
    
            System.out.println(&quot;==============================&quot;);
    
            Adapter adapter  = new Adapter(new AndroidCharger());
            Iphone6Plus newIphone = new Iphone6Plus();
            newIphone.setLightningInterface(adapter);
            newIphone.charge();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    开始给我的Iphone6Plus手机充电...
    使用Lightning型号的充电器充电...
    结束给我的Iphone6Plus手机充电...
    ==============================
    开始给我的GalaxyS7手机充电...
    使用MicroUsb型号的充电器充电...
    结束给我的GalaxyS7手机充电...
    ==============================
    开始给我的Iphone6Plus手机充电...
    使用MicroUsb型号的充电器充电...
    结束给我的Iphone6Plus手机充电...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子通过适配器，把一个MicroUsb型号的充电器用来给Iphone充电。从代码层面，就是通过适配器复用了MicroUsb接口及其实现类。在很大程度上复用了已有的代码。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>将目标类和适配者类解耦，通过引入一个适配器类来重用现有的适配者类，而无须修改原有代码。</p><p>增加了类的透明性和复用性，将具体的实现封装在适配者类中，对于客户端类来说是透明的，而且提高了适配者的复用性。</p><p>灵活性和扩展性都非常好，通过使用配置文件，可以很方便地更换适配器，也可以在不修改原有代码的基础上增加新的适配器类，完全符合“开闭原则”。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。</p><p>对于类适配器而言，由于 JAVA 至多继承一个类，所以至多只能适配一个适配者类，而且目标类必须是抽象类</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>结构型模式描述如何将类或者对象结合在一起形成更大的结构。</p><p>适配器模式用于将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器。适配器模式既可以作为类结构型模式，也可以作为对象结构型模式。</p><p>适配器模式包含四个角色：</p><blockquote><p>目标抽象类定义客户要用的特定领域的接口；</p><p>适配器类可以调用另一个接口，作为一个转换器，对适配者和抽象目标类进行适配，它是适配器模式的核心；</p><p>适配者类是被适配的角色，它定义了一个已经存在的接口，这个接口需要适配；</p><p>在客户类中针对目标抽象类进行编程，调用在目标抽象类中定义的业务方法。</p></blockquote><p>在对象适配器模式中，适配器类继承了目标抽象类(或实现接口)并定义了一个适配者类的对象实例，在所继承的目标抽象类方法中调用适配者类的相应业务方法。</p>`,42),h={href:"http://www.hollischuang.com/archives/220",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"适配器模式适用情况包括：系统需要使用现有的类，而这些类的接口不符合系统的需要；想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类一起工作。",-1),f=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),I={href:"http://www.runoob.com/design-pattern/adapter-pattern.html",target:"_blank",rel:"noopener noreferrer"},U={href:"http://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/adapter.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/hollischuang/DesignPattern",target:"_blank",rel:"noopener noreferrer"};function _(M,L){const i=r("ExternalLinkIcon");return a(),d("div",null,[b,o,e("p",null,[n("GOF中将适配器模式分为类适配器模式和对象适配器模式。区别仅在于适配器角色对于被适配角色的适配是通过继承还是组合来实现的。由于在Java 中不支持多重继承，而且有破坏封装之嫌。而且我们也提倡"),e("a",m,[n("多用组合少用继承"),s(i)]),n("。所以本文主要介绍对象适配器。")]),p,e("p",null,[n("适配器模式的主要优点是将目标类和适配者类解耦，增加了类的透明性和复用性，同时系统的灵活性和扩展性都非常好，更换适配器或者增加新的适配器都非常方便，符合“"),e("a",h,[n("开闭原则"),s(i)]),n("”；类适配器模式的缺点是适配器类在很多编程语言中不能同时适配多个适配者类，对象适配器模式的缺点是很难置换适配者类的方法。")]),g,f,e("p",null,[e("a",I,[n("适配器模式"),s(i)])]),e("p",null,[e("a",U,[n("适配器模式"),s(i)])]),e("p",null,[n("文中所有代码见"),e("a",x,[n("GitHub"),s(i)])])])}const S=l(u,[["render",_],["__file","adapter-pattern.html.vue"]]);export{S as default};
