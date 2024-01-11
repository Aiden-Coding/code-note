import{_ as i,r as l,o as c,c as p,a as n,b as a,d as e,e as t}from"./app-3RcBQnkC.js";const d="/code-note/assets/c0874e0a-dba3-467e-9c86-dd9313e0843e-9GYlTKTw.jpg",o="/code-note/assets/83d466bd-946b-4430-854a-cf7b0696d4c8-KXSpC-Aj.jpg",r="/code-note/assets/a0ce43b7-afa8-4397-a96e-5c12a070f2ae-Ze7HVA5f.jpg",u="/code-note/assets/6a88a398-c494-41f5-bb62-9f7fb811df7c-69Usvaky.jpg",v="/code-note/assets/a3e4dc62-0da5-4d22-94f2-140078281812-6oNJ23zx.jpg",m={},k=t(`<h1 id="面向对象思想" tabindex="-1"><a class="header-anchor" href="#面向对象思想" aria-hidden="true">#</a> 面向对象思想</h1><h2 id="一、三大特性" tabindex="-1"><a class="header-anchor" href="#一、三大特性" aria-hidden="true">#</a> 一、三大特性</h2><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><p>利用抽象数据类型将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体。数据被保护在抽象数据类型的内部，尽可能地隐藏内部的细节，只保留一些对外的接口使其与外部发生联系。用户无需关心对象内部的细节，但可以通过对象对外提供的接口来访问该对象。</p><p>优点：</p><ul><li>减少耦合：可以独立地开发、测试、优化、使用、理解和修改</li><li>减轻维护的负担：可以更容易被理解，并且在调试的时候可以不影响其他模块</li><li>有效地调节性能：可以通过剖析来确定哪些模块影响了系统的性能</li><li>提高软件的可重用性</li><li>降低了构建大型系统的风险：即使整个系统不可用，但是这些独立的模块却有可能是可用的</li></ul><p>以下 Person 类封装 name、gender、age 等属性，外界只能通过 get() 方法获取一个 Person 对象的 name 属性和 gender 属性，而无法获取 age 属性，但是 age 属性可以供 work() 方法使用。</p><p>注意到 gender 属性使用 int 数据类型进行存储，封装使得用户注意不到这种实现细节。并且在需要修改 gender 属性使用的数据类型时，也可以在不影响客户端代码的情况下进行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> gender <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;man&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;woman&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">18</span> <span class="token operator">&lt;=</span> age <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; is working very hard!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; can&#39;t work any more!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>继承实现了 <strong>IS-A</strong> 关系，例如 Cat 和 Animal 就是一种 IS-A 关系，因此 Cat 可以继承自 Animal，从而获得 Animal 非 private 的属性和方法。</p><p>继承应该遵循里氏替换原则，子类对象必须能够替换掉所有父类对象。</p><p>Cat 可以当做 Animal 来使用，也就是说可以使用 Animal 引用 Cat 对象。父类引用指向子类对象称为 <strong>向上转型</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Animal</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>多态分为编译时多态和运行时多态：</p><ul><li>编译时多态主要指方法的重载</li><li>运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定</li></ul><p>运行时多态有三个条件：</p><ul><li>继承</li><li>覆盖（重写）</li><li>向上转型</li></ul><p>下面的代码中，乐器类（Instrument）有两个子类：Wind 和 Percussion，它们都覆盖了父类的 play() 方法，并且在 main() 方法中使用父类 Instrument 来引用 Wind 和 Percussion 对象。在 Instrument 引用调用 play() 方法时，会执行实际引用对象所在类的 play() 方法，而不是 Instrument 类的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Instument is playing...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wind</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Wind is playing...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Percussion</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Percussion is playing...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Music</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Instrument</span><span class="token punctuation">&gt;</span></span> instruments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instruments<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Wind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instruments<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Percussion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span> instrument <span class="token operator">:</span> instruments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instrument<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Wind is playing...
Percussion is playing...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、类图" tabindex="-1"><a class="header-anchor" href="#二、类图" aria-hidden="true">#</a> 二、类图</h2>`,26),b={href:"https://www.planttext.com/",target:"_blank",rel:"noopener noreferrer"},h=t('<h3 id="泛化关系-generalization" tabindex="-1"><a class="header-anchor" href="#泛化关系-generalization" aria-hidden="true">#</a> 泛化关系 (Generalization)</h3><p>用来描述继承关系，在 Java 中使用 extends 关键字。</p><p><img src="'+d+`" alt="image-20220324093855618"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Generalization

class Vihical
class Car
class Trunck

Vihical &lt;|-- Car
Vihical &lt;|-- Trunck

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现关系-realization" tabindex="-1"><a class="header-anchor" href="#实现关系-realization" aria-hidden="true">#</a> 实现关系 (Realization)</h3><p>用来实现一个接口，在 Java 中使用 implements 关键字。</p><p><img src="`+o+`" alt="image-20220324093855618"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Realization

interface MoveBehavior
class Fly
class Run

MoveBehavior &lt;|.. Fly
MoveBehavior &lt;|.. Run

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合关系-aggregation" tabindex="-1"><a class="header-anchor" href="#聚合关系-aggregation" aria-hidden="true">#</a> 聚合关系 (Aggregation)</h3><p>表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。</p><p><img src="`+r+`" alt="image-20220324093855618"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Aggregation

class Computer
class Keyboard
class Mouse
class Screen

Computer o-- Keyboard
Computer o-- Mouse
Computer o-- Screen

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合关系-composition" tabindex="-1"><a class="header-anchor" href="#组合关系-composition" aria-hidden="true">#</a> 组合关系 (Composition)</h3><p>和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。</p><p><img src="`+u+`" alt="image-20220324093855618"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Composition

class Company
class DepartmentA
class DepartmentB

Company *-- DepartmentA
Company *-- DepartmentB

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联关系-association" tabindex="-1"><a class="header-anchor" href="#关联关系-association" aria-hidden="true">#</a> 关联关系 (Association)</h3><p>表示不同类对象之间有关联，这是一种静态关系，与运行过程的状态无关，在最开始就可以确定。因此也可以用 1 对 1、多对 1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生，但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。</p><p><img src="`+v+`" alt="image-20220324093855618"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Association

class School
class Student

School &quot;1&quot; - &quot;n&quot; Student

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖关系-dependency" tabindex="-1"><a class="header-anchor" href="#依赖关系-dependency" aria-hidden="true">#</a> 依赖关系 (Dependency)</h3><p>和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系主要有三种形式：</p><ul><li>A 类是 B 类方法的局部变量；</li><li>A 类是 B 类方法的参数；</li><li>A 类向 B 类发送消息，从而影响 B 类发生变化。</li></ul><p>![image-20220324093855618](../pics/</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@startuml

title Dependency

class Vihicle {
    move(MoveBehavior)
}

interface MoveBehavior {
    move()
}

note &quot;MoveBehavior.move()&quot; as N

Vihicle ..&gt; MoveBehavior

Vihicle .. N

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、设计原则" tabindex="-1"><a class="header-anchor" href="#三、设计原则" aria-hidden="true">#</a> 三、设计原则</h2><h3 id="s-o-l-i-d" tabindex="-1"><a class="header-anchor" href="#s-o-l-i-d" aria-hidden="true">#</a> S.O.L.I.D</h3><table><thead><tr><th style="text-align:center;">简写</th><th style="text-align:center;">全拼</th><th style="text-align:center;">中文翻译</th></tr></thead><tbody><tr><td style="text-align:center;">SRP</td><td style="text-align:center;">The Single Responsibility Principle</td><td style="text-align:center;">单一责任原则</td></tr><tr><td style="text-align:center;">OCP</td><td style="text-align:center;">The Open Closed Principle</td><td style="text-align:center;">开放封闭原则</td></tr><tr><td style="text-align:center;">LSP</td><td style="text-align:center;">The Liskov Substitution Principle</td><td style="text-align:center;">里氏替换原则</td></tr><tr><td style="text-align:center;">ISP</td><td style="text-align:center;">The Interface Segregation Principle</td><td style="text-align:center;">接口分离原则</td></tr><tr><td style="text-align:center;">DIP</td><td style="text-align:center;">The Dependency Inversion Principle</td><td style="text-align:center;">依赖倒置原则</td></tr></tbody></table><h4 id="_1-单一责任原则" tabindex="-1"><a class="header-anchor" href="#_1-单一责任原则" aria-hidden="true">#</a> 1. 单一责任原则</h4><blockquote><p>修改一个类的原因应该只有一个。</p></blockquote><p>换句话说就是让一个类只负责一件事，当这个类需要做过多事情的时候，就需要分解这个类。</p><p>如果一个类承担的职责过多，就等于把这些职责耦合在了一起，一个职责的变化可能会削弱这个类完成其它职责的能力。</p><h4 id="_2-开放封闭原则" tabindex="-1"><a class="header-anchor" href="#_2-开放封闭原则" aria-hidden="true">#</a> 2. 开放封闭原则</h4><blockquote><p>类应该对扩展开放，对修改关闭。</p></blockquote><p>扩展就是添加新功能的意思，因此该原则要求在添加新功能时不需要修改代码。</p><p>符合开闭原则最典型的设计模式是装饰者模式，它可以动态地将责任附加到对象上，而不用去修改类的代码。</p><h4 id="_3-里氏替换原则" tabindex="-1"><a class="header-anchor" href="#_3-里氏替换原则" aria-hidden="true">#</a> 3. 里氏替换原则</h4><blockquote><p>子类对象必须能够替换掉所有父类对象。</p></blockquote><p>继承是一种 IS-A 关系，子类需要能够当成父类来使用，并且需要比父类更特殊。</p><p>如果不满足这个原则，那么各个子类的行为上就会有很大差异，增加继承体系的复杂度。</p><h4 id="_4-接口分离原则" tabindex="-1"><a class="header-anchor" href="#_4-接口分离原则" aria-hidden="true">#</a> 4. 接口分离原则</h4><blockquote><p>不应该强迫客户依赖于它们不用的方法。</p></blockquote><p>因此使用多个专门的接口比使用单一的总接口要好。</p><h4 id="_5-依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#_5-依赖倒置原则" aria-hidden="true">#</a> 5. 依赖倒置原则</h4><blockquote><p>高层模块不应该依赖于低层模块，二者都应该依赖于抽象； 抽象不应该依赖于细节，细节应该依赖于抽象。</p></blockquote><p>高层模块包含一个应用程序中重要的策略选择和业务模块，如果高层模块依赖于低层模块，那么低层模块的改动就会直接影响到高层模块，从而迫使高层模块也需要改动。</p><p>依赖于抽象意味着：</p><ul><li>任何变量都不应该持有一个指向具体类的指针或者引用；</li><li>任何类都不应该从具体类派生；</li><li>任何方法都不应该覆写它的任何基类中的已经实现的方法。</li></ul><h3 id="其他常见原则" tabindex="-1"><a class="header-anchor" href="#其他常见原则" aria-hidden="true">#</a> 其他常见原则</h3><p>除了上述的经典原则，在实际开发中还有下面这些常见的设计原则。</p><table><thead><tr><th style="text-align:center;">简写</th><th style="text-align:center;">全拼</th><th style="text-align:center;">中文翻译</th></tr></thead><tbody><tr><td style="text-align:center;">LOD</td><td style="text-align:center;">The Law of Demeter</td><td style="text-align:center;">迪米特法则</td></tr><tr><td style="text-align:center;">CRP</td><td style="text-align:center;">The Composite Reuse Principle</td><td style="text-align:center;">合成复用原则</td></tr><tr><td style="text-align:center;">CCP</td><td style="text-align:center;">The Common Closure Principle</td><td style="text-align:center;">共同封闭原则</td></tr><tr><td style="text-align:center;">SAP</td><td style="text-align:center;">The Stable Abstractions Principle</td><td style="text-align:center;">稳定抽象原则</td></tr><tr><td style="text-align:center;">SDP</td><td style="text-align:center;">The Stable Dependencies Principle</td><td style="text-align:center;">稳定依赖原则</td></tr></tbody></table><h4 id="_1-迪米特法则" tabindex="-1"><a class="header-anchor" href="#_1-迪米特法则" aria-hidden="true">#</a> 1. 迪米特法则</h4><p>迪米特法则又叫作最少知识原则（Least Knowledge Principle，简写 LKP），就是说一个对象应当对其他对象有尽可能少的了解，不和陌生人说话。</p><h4 id="_2-合成复用原则" tabindex="-1"><a class="header-anchor" href="#_2-合成复用原则" aria-hidden="true">#</a> 2. 合成复用原则</h4><p>尽量使用对象组合，而不是通过继承来达到复用的目的。</p><h4 id="_3-共同封闭原则" tabindex="-1"><a class="header-anchor" href="#_3-共同封闭原则" aria-hidden="true">#</a> 3. 共同封闭原则</h4><p>一起修改的类，应该组合在一起（同一个包里）。如果必须修改应用程序里的代码，我们希望所有的修改都发生在一个包里（修改关闭），而不是遍布在很多包里。</p><h4 id="_4-稳定抽象原则" tabindex="-1"><a class="header-anchor" href="#_4-稳定抽象原则" aria-hidden="true">#</a> 4. 稳定抽象原则</h4><p>最稳定的包应该是最抽象的包，不稳定的包应该是具体的包，即包的抽象程度跟它的稳定性成正比。</p><h4 id="_5-稳定依赖原则" tabindex="-1"><a class="header-anchor" href="#_5-稳定依赖原则" aria-hidden="true">#</a> 5. 稳定依赖原则</h4><p>包之间的依赖关系都应该是稳定方向依赖的，包要依赖的包要比自己更具有稳定性。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,62),g=n("li",null,"Java 编程思想",-1),y=n("li",null,"敏捷软件开发：原则、模式与实践",-1),x={href:"http://www.cnblogs.com/shanyou/archive/2009/09/21/1570716.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html#generalization",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.cnblogs.com/wolf-sun/p/UML-Sequence-diagram.html",target:"_blank",rel:"noopener noreferrer"},w={href:"http://blog.csdn.net/jianyuerensheng/article/details/51602015",target:"_blank",rel:"noopener noreferrer"};function S(q,P){const s=l("ExternalLinkIcon");return c(),p("div",null,[k,n("p",null,[a("以下类图使用 "),n("a",b,[a("PlantUML"),e(s)]),a(" 绘制，更多语法及使用请参考：http://plantuml.com/ 。")]),h,n("ul",null,[g,y,n("li",null,[n("a",x,[a("面向对象设计的 SOLID 原则"),e(s)])]),n("li",null,[n("a",f,[a("看懂 UML 类图和时序图"),e(s)])]),n("li",null,[n("a",_,[a("UML 系列——时序图（顺序图）sequence diagram"),e(s)])]),n("li",null,[n("a",w,[a("面向对象编程三大特性 ------ 封装、继承、多态"),e(s)])])])])}const j=i(m,[["render",S],["__file","mianxiangduixiangsixiang.html.vue"]]);export{j as default};
