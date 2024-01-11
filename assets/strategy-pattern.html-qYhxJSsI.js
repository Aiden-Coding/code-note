import{_ as d,r,o as a,c,a as e,b as i,d as l,e as s}from"./app-3RcBQnkC.js";const t="/code-note/assets/image-8-qGZeN5WB.png",v="/code-note/assets/image-9-kfu5eIYl.png",u={},o=e("h1",{id:"策略模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#策略模式","aria-hidden":"true"},"#"),i(" 策略模式")],-1),b={href:"http://s.click.taobao.com/DxA2xSx",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"封装变化",-1),p=e("code",null,"多用组合，少用继承",-1),h=e("code",null,"针对接口编程，不针对实现编程",-1),_=s('<blockquote><p>策略模式(Strategy Pattern)：定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)。</p></blockquote><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>结合策略模式的概念，我们找一个实际的场景来理解一下。</p><p>假设我们是一家新开的书店，为了招揽顾客，我们推出会员服务，我们把店里的会员分为三种，分别是初级会员、中级会员和高级会员。针对不同级别的会员我们给予不同的优惠。初级会员买书我们不打折、中级会员买书我们打九折、高级会员买书我们打八折。 <img src="'+t+'" alt="Alt text"> 我们希望用户在付款的时候，只要刷一下书的条形码，会员再刷一下他的会员卡，收银台的工组人员就能直接知道应该向顾客收取多少钱。</p><p>在不使用模式的情况下，我们可以在结算的方法中使用<code>if/else</code>语句来区别出不同的会员来计算价格。</p><p>但是，如果我们有一天想要把初级会员的折扣改成9.8折怎么办？有一天我要推出超级会员怎么办？有一天我要针对中级会员可打折的书的数量做限制怎么办？</p><p>使用<code>if\\else</code>设计出来的系统，所有的算法都写在了一起，只要有改动我就要修改整个类。我们都知道，只要是修改代码就有可能引入问题。为了避免这个问题，我们可以使用策略模式。。。</p><blockquote><p>对于收银台系统，计算应收款的时候，一个客户只可能是初级、中级、高级会员中的一种。不同的会员使用不同的算法来计算价格。收银台系统其实不关心具体的会员类型和折扣之间的关系。也不希望会员和折扣之间的任何改动会影响到收银台系统。</p></blockquote><p>在介绍策略模式的具体实现方式之前，再来巩固一下几个面向对象设计原则：<code>封装变化</code>、<code>多用组合，少用继承</code>、<code>针对接口编程，不针对实现编程</code>。想一想如何运用到策略模式中，并且有什么好处。</p><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>策略模式包含如下角色：</p><blockquote><p>Context: 环境类</p><p>Strategy: 抽象策略类</p><p>ConcreteStrategy: 具体策略类</p></blockquote><p><img src="'+v+`" alt="Alt text"></p><p>我们运用策略模式来实现一下书店的收银台系统。我们可以把会员抽象成一个策略类，不同的会员类型是具体的策略类。不同策略类里面实现了计算价格这一算法。然后通过组合的方式把会员集成到收银台中。</p><p>先定义一个接口，这个接口就是抽象策略类，该接口定义了计算价格方法，具体实现方式由具体的策略类来定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * Created by hollis on 16/9/19. 会员接口
     */
    public interface Member {
    
        /**
         * 计算应付价格
         * @param bookPrice 书籍原价(针对金额,建议使用BigDecimal,double会损失精度)
         * @return 应付金额
         */
        public double calPrice(double bookPrice);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对不同的会员，定义三种具体的策略类，每个类中都分别实现计算价格方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * Created by hollis on 16/9/19. 初级会员
     */
    public class PrimaryMember implements Member {
    
        @Override
        public double calPrice(double bookPrice) {
            System.out.println(&quot;对于初级会员的没有折扣&quot;);
            return bookPrice;
        }
    }
    
    
    /**
     * Created by hollis on 16/9/19. 中级会员,买书打九折
     */
    public class IntermediateMember implements Member {
    
        @Override
        public double calPrice(double bookPrice) {
            System.out.println(&quot;对于中级会员的折扣为10%&quot;);
            return bookPrice * 0.9;
        }
    }
    
    
    /**
     * Created by hollis on 16/9/19. 高级会员,买书打八折
     */
    public class AdvancedMember implements Member {
    
        @Override
        public double calPrice(double bookPrice) {
            System.out.println(&quot;对于高级会员的折扣为20%&quot;);
            return bookPrice * 0.8;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面几个类的定义体现了<code>封装变化</code>的设计原则，不同会员的具体折扣方式改变不会影响到其他的会员。</p><p>定义好了抽象策略类和具体策略类之后，我们再来定义环境类，所谓环境类，就是集成算法的类。这个例子中就是收银台系统。采用组合的方式把会员集成进来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * Created by hollis on 16/9/19. 书籍价格类
     */
    public class Cashier {
    
        /**
         * 会员,策略对象
         */
        private Member member;
    
        public Cashier(Member member){
            this.member = member;
        }
    
        /**
         * 计算应付价格
         * @param booksPrice
         * @return
         */
        public double quote(double booksPrice) {
            return this.member.calPrice(booksPrice);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个Cashier类就是一个环境类，该类的定义体现了<code>多用组合，少用继承</code>、<code>针对接口编程，不针对实现编程</code>两个设计原则。由于这里采用了组合+接口的方式，后面我们在推出超级会员的时候无须修改Cashier类。只要再定义一个<code>SuperMember implements Member</code> 就可以了。</p><p>下面定义一个客户端来测试一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /**
     * Created by hollis on 16/9/19.
     */
    public class BookStore {
    
        public static void main(String[] args) {
    
            //选择并创建需要使用的策略对象
            Member strategy = new AdvancedMember();
            //创建环境
            Cashier cashier = new Cashier(strategy);
            //计算价格
            double quote = cashier.quote(300);
            System.out.println(&quot;高级会员图书的最终价格为：&quot; + quote);
    
            strategy = new IntermediateMember();
            cashier = new Cashier(strategy);
            quote = cashier.quote(300);
            System.out.println(&quot;中级会员图书的最终价格为：&quot; + quote);
        }
    }
    
    //对于高级会员的折扣为20%
    //高级会员图书的最终价格为：240.0
    //对于中级会员的折扣为10%
    //中级会员图书的最终价格为：270.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的示例可以看出，策略模式仅仅封装算法，提供新的算法插入到已有系统中，策略模式并不决定在何时使用何种算法。在什么情况下使用什么算法是由客户端决定的。</p>`,25),g=s("<li><p>策略模式的重心</p><ul><li>策略模式的重心不是如何实现算法，而是如何组织、调用这些算法，从而让程序结构更灵活，具有更好的维护性和扩展性。</li></ul></li><li><p>算法的平等性</p><ul><li><p>策略模式一个很大的特点就是各个策略算法的平等性。对于一系列具体的策略算法，大家的地位是完全一样的，正因为这个平等性，才能实现算法之间可以相互替换。所有的策略算法在实现上也是相互独立的，相互之间是没有依赖的。</p></li><li><p>所以可以这样描述这一系列策略算法：策略算法是相同行为的不同实现。</p></li></ul></li><li><p>运行时策略的唯一性</p><ul><li>运行期间，策略模式在每一个时刻只能使用一个具体的策略实现对象，虽然可以动态地在不同的策略实现中切换，但是同时只能使用一个。</li></ul></li>",3),x=e("p",null,"公有的行为",-1),f={href:"http://www.cnblogs.com/java-my-life/archive/2012/05/10/2491891.html",target:"_blank",rel:"noopener noreferrer"},k=s('<h2 id="策略模式的优缺点" tabindex="-1"><a class="header-anchor" href="#策略模式的优缺点" aria-hidden="true">#</a> 策略模式的优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>策略模式提供了对“开闭原则”的完美支持，用户可以在不修改原有系统的基础上选择算法或行为，也可以灵活地增加新的算法或行为。</li><li>策略模式提供了管理相关的算法族的办法。策略类的等级结构定义了一个算法或行为族。恰当使用继承可以把公共的代码移到父类里面，从而避免代码重复。</li><li>使用策略模式可以避免使用多重条件(if-else)语句。多重条件语句不易维护，它把采取哪一种算法或采取哪一种行为的逻辑与算法或行为的逻辑混合在一起，统统列在一个多重条件语句里面，比使用继承的办法还要原始和落后。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>客户端必须知道所有的策略类，并自行决定使用哪一个策略类。这就意味着客户端必须理解这些算法的区别，以便适时选择恰当的算法类。</li><li>由于策略模式把每个具体的策略实现都单独封装成为类，如果备选的策略很多的话，那么对象的数目就会很可观。可以通过使用享元模式在一定程度上减少对象的数量。</li></ul>',5),y={href:"https://github.com/hollischuang/DesignPattern",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),i(" 参考资料")],-1),P={href:"http://www.cnblogs.com/java-my-life/archive/2012/05/10/2491891.html",target:"_blank",rel:"noopener noreferrer"};function C(M,S){const n=r("ExternalLinkIcon");return a(),c("div",null,[o,e("p",null,[i("学习过设计模式的人大概都知道"),e("a",b,[i("Head First设计模式"),l(n)]),i("这本书，这本书中介绍的第一个模式就是策略模式。把策略模式放在第一个，笔者认为主要有两个原因：1、这的确是一个比较简单的模式。2、这个模式可以充分的体现面向对象设计原则中的"),m,i("、"),p,i("、"),h,i("等原则。")]),_,e("ul",null,[g,e("li",null,[x,e("ul",null,[e("li",null,[i("经常见到的是，所有的具体策略类都有一些公有的行为。这时候，就应当把这些公有的行为放到共同的抽象策略角色Strategy类里面。当然这时候抽象策略角色必须要用Java抽象类实现，而不能使用接口。（"),e("a",f,[i("《JAVA与模式》之策略模式"),l(n)]),i("）")])])])]),k,e("p",null,[i("文中所有代码见"),e("a",y,[i("GitHub"),l(n)])]),q,e("p",null,[e("a",P,[i("《JAVA与模式》之策略模式"),l(n)])])])}const A=d(u,[["render",C],["__file","strategy-pattern.html.vue"]]);export{A as default};
