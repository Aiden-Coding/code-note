import{_ as l,r as s,o as r,c as a,a as e,b as n,d,e as v}from"./app-3RcBQnkC.js";const c="/code-note/assets/image-4-DbmVIbcS.png",u={},b=v('<h1 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h1><p>建造者模式（英：Builder Pattern）是一种创建型设计模式，又名：生成器模式。GOF 给建造者模式的定义为：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。这句话说的比较抽象，其实解释一下就是：将建造复杂对象的过程和组成对象的部件解耦。</p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>假设现在我们是一家网游设计公司，现在我们要&quot;抄袭&quot;梦幻西游这款游戏，你是该公司的游戏角色设计人员。你怎么设计出该游戏中的各种角色呢？ 在梦幻西游来中包括人、仙、魔等种族的角色，而每种不同的种族的角色中又包含龙太子、逍遥生等具体的角色。</p><p>作为一个出色的开发人员，我们设计的角色生成系统应该包含以下功能和特性：</p><blockquote><p>为了保证游戏平衡，所有角色的基本属性应该一致</p><p>因为角色的创建过程可能很复杂，所以角色的生成细节不应该对外暴露</p><p>随时可以新增角色</p><p>对某个具体角色的修改应该不影响其他角色</p></blockquote><p>其实，对于角色的设计，我们可以使用抽象工厂模式，将同一种族的角色看成是一个产品族。但是，这样做可能存在一个问题，那就是我们可能要在每个角色的创建过程中都要从头到尾的构建一遍该角色。比如一个角色包含头部、身体。其中头部又包括脸部、和其他部位。其中脸部又包含眉毛、嘴巴、鼻子等部位。整个角色的创建过程是极其复杂的。很容易遗漏其中的某个步骤。</p><p>那么，我们可以将这些具体部位的创建工作和对象的创建进行解耦。这就是建造者模式。</p><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>建造者模式包含如下角色：</p><blockquote><p>Builder：抽象建造者(<code>Builder</code>)</p><p>ConcreteBuilder：具体建造者(<code>CommonBuilder</code>、<code>SuperBuilder</code>)</p><p>Director：指挥者(<code>Director</code>)</p><p>Product：产品角色(<code>Role</code>) <img src="'+c+`" alt="Alt text"></p></blockquote><p>这里采用设计角色的例子，为了便于理解，我们只创建两个角色，分别是普通角色和超级角色。他们都有设置头部、脸部、身体、气血值、魔法值、能量值等方法。值得注意的是设置脸部是依赖于设置头部的，要有先后顺序。</p><p>产品角色：Role</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Role {
    
        private String head; //头部
        private String face; //脸部（脸部依赖于头部）
        private String body; //身体
        private Double hp;   //生命值
        private Double sp;   //能量值
        private Double mp;   //魔法值
    
        //setter and getter 
         // toString 
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象建造者：Builder</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public abstract class Builder {
    
        protected Role role = new Role();
    
        public abstract void buildHead();
    
        public abstract void buildFace();
    
        public abstract void buildBody();
    
        public abstract void buildHp();
    
        public abstract void buildSp();
    
        public abstract void buildMp();
    
        public Role getResult() {
            return role;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体建造者：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class CommonRoleBuilder extends Builder {
    
        private Role role = new Role();
    
        @Override
        public void buildHead() {
            role.setBody(&quot;common head&quot;);
        }
    
        @Override
        public void buildFace() {
            role.setFace(&quot;common face&quot;);
        }
    
        @Override
        public void buildBody() {
            role.setBody(&quot;common body&quot;);
        }
    
        @Override
        public void buildHp() {
            role.setHp(100d);
        }
    
        @Override
        public void buildSp() {
            role.setSp(100d);
        }
    
        @Override
        public void buildMp() {
            role.setMp(100d);
        }
    
        @Override
        public Role getResult() {
            return role;
        }
    }
    
    public class SuperRoleBuilder extends Builder {
    
        private Role role = new Role();
    
        @Override
        public void buildHead() {
            role.setBody(&quot;suoer head&quot;);
        }
    
        @Override
        public void buildFace() {
            role.setFace(&quot;super face&quot;);
        }
    
        @Override
        public void buildBody() {
            role.setBody(&quot;super body&quot;);
        }
    
        @Override
        public void buildHp() {
            role.setHp(120d);
        }
    
        @Override
        public void buildSp() {
            role.setSp(120d);
        }
    
        @Override
        public void buildMp() {
            role.setMp(120d);
        }
    
        @Override
        public Role getResult() {
            return role;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指挥者：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Director {
    
        public void construct(Builder builder){
            builder.buildBody();
            builder.buildHead();
            builder.buildFace();
            builder.buildHp();
            builder.buildMp();
            builder.buildSp();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Main {
    
        public static void main(String[] args) {
    
            Director director = new Director();
            Builder commonBuilder = new CommonRoleBuilder();
    
            director.construct(commonBuilder);
            Role commonRole = commonBuilder.getResult();
            System.out.println(commonRole);
    
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，一个建造者模式已经完成了，是不是很简单？</p><hr><p>再回到之前的需求，看看我们是否都满足？</p><p>由于建造角色的过程比较复杂，其中还有相互依赖关系（如脸部依赖于头部），所以我们使用建造者模式将将建造复杂对象的过程和组成对象的部件解耦。这样既保证了基本属性全都一致（这里的一致指的是该包含的应该全都包含）也封装了其中的具体实现细节。</p><p>同时，在修改某个具体角色的时候我们只需要修改对应的具体角色就可以了，不会影响到其他角色。</p><p>如果需要新增角色，只要再增加一个具体建造者，并在该建造者中写好具体细节的建造部分代码就OK了。</p><h2 id="建造者模式的优缺点" tabindex="-1"><a class="header-anchor" href="#建造者模式的优缺点" aria-hidden="true">#</a> 建造者模式的优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>建造者模式的<strong>封装性很好。使用建造者模式可以有效的封装变化</strong>，在使用建造者模式的场景中，一般产品类和建造者类是比较稳定的，因此，将主要的业务逻辑封装在导演类中对整体而言可以取得比较好的稳定性。</p><p>在建造者模式中，<strong>客户端不必知道产品内部组成的细节</strong>，将产品本身与产品的创建过程解耦，使得相同的创建过程可以创建不同的产品对象。</p><p><strong>可以更加精细地控制产品的创建过程</strong> 。将复杂产品的创建步骤分解在不同的方法中，使得创建过程更加清晰，也更方便使用程序来控制创建过程。</p><p>其次，<strong>建造者模式很容易进行扩展</strong>。如果有新的需求，通过实现一个新的建造者类就可以完成，基本上不用修改之前已经测试通过的代码，因此也就不会对原有功能引入风险。符合开闭原则。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>建造者模式所创建的产品一般具有较多的共同点，其组成部分相似，如果产品之间的差异性很大，则不适合使用建造者模式，因此其使用范围受到一定的限制。</p><p>如果产品的内部变化复杂，可能会导致需要定义很多具体建造者类来实现这种变化，导致系统变得很庞大。</p><h2 id="适用环境" tabindex="-1"><a class="header-anchor" href="#适用环境" aria-hidden="true">#</a> 适用环境</h2><p>在以下情况下可以使用建造者模式：</p><blockquote><p>需要生成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员属性。</p><p>需要生成的产品对象的属性相互依赖，需要指定其生成顺序。</p><p>对象的创建过程独立于创建该对象的类。在建造者模式中引入了指挥者类，将创建过程封装在指挥者类中，而不在建造者类中。</p><p>隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品。</p></blockquote><h2 id="建造者模式与工厂模式的区别" tabindex="-1"><a class="header-anchor" href="#建造者模式与工厂模式的区别" aria-hidden="true">#</a> 建造者模式与工厂模式的区别</h2><p>我们可以看到，建造者模式与工厂模式是极为相似的，总体上，建造者模式仅仅只比工厂模式多了一个&quot;指挥者&quot;的角色。在建造者模式的类图中，假如把这个导演类看做是最终调用的客户端，那么图中剩余的部分就可以看作是一个简单的工厂模式了。</p><p>与工厂模式相比，建造者模式一般用来创建更为复杂的对象，因为对象的创建过程更为复杂，因此将对象的创建过程独立出来组成一个新的类——导演类。</p><p>也就是说，工厂模式是将对象的全部创建过程封装在工厂类中，由工厂类向客户端提供最终的产品；而建造者模式中，建造者类一般只提供产品类中各个组件的建造，而将具体建造过程交付给导演类。由导演类负责将各个组件按照特定的规则组建为产品，然后将组建好的产品交付给客户端。</p><p>建造者模式与工厂模式类似，适用的场景也很相似。一般来说，如果产品的建造很复杂，那么请用工厂模式；如果产品的建造更复杂，那么请用建造者模式。哈哈哈。。。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>建造者模式将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。</p><p>在建造者模式的结构中引入了一个指挥者类，该类的作用主要有两个：一方面它隔离了客户与生产过程；另一方面它负责控制产品的生成过程。指挥者针对抽象建造者编程，客户端只需要知道具体建造者的类型，即可通过指挥者类调用建造者的相关方法，返回一个完整的产品对象。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),t={href:"http://s.click.taobao.com/t?e=m=2&s=R5B/xd29JVMcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67jN2wQzI0ZBVHBMajAjK1gBpS4hLH/P02ckKYNRBWOBBey11vvWwHXSniyi5vWXIZkKWZZq7zWpCC8X3k5aQlui0qVGgqDL2o8YMXU3NNCg/&pvid=10_42.120.73.203_224_1460382841310",target:"_blank",rel:"noopener noreferrer"},o={href:"http://s.click.taobao.com/t?e=m=2&s=Obpq8Qxse2EcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67utJaEGcptl2kfkm8XrrgBtpS4hLH/P02ckKYNRBWOBBey11vvWwHXTpkOAWGyim%2bw2PNKvM2u52N5aP5%2bgx7zgh4LxdBQDQSXEqY%2bakgpmw&pvid=10_121.0.29.199_322_1460465025379",target:"_blank",rel:"noopener noreferrer"},m={href:"http://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/builder.html",target:"_blank",rel:"noopener noreferrer"};function p(h,g){const i=s("ExternalLinkIcon");return r(),a("div",null,[b,e("p",null,[e("a",t,[n("大话设计模式"),d(i)])]),e("p",null,[e("a",o,[n("深入浅出设计模式"),d(i)])]),e("p",null,[e("a",m,[n("建造者模式"),d(i)])])])}const B=l(u,[["render",p],["__file","builder-pattern.html.vue"]]);export{B as default};
