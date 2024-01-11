import{_ as t}from"./50678f34-694f-45a4-91c6-34d985c83fee-8OVEf9qv.js";import{_ as c,r as p,o,c as i,a as n,b as s,d as l,e as a}from"./app-3RcBQnkC.js";const u={},r=a('<h1 id="备忘录-memento" tabindex="-1"><a class="header-anchor" href="#备忘录-memento" aria-hidden="true">#</a> 备忘录（Memento）</h1><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>在不违反封装的情况下获得对象的内部状态，从而在需要时可以将对象恢复到最初状态。</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><ul><li>Originator：原始对象</li><li>Caretaker：负责保存好备忘录</li><li>Memento：备忘录，存储原始对象的状态。备忘录实际上有两个接口，一个是提供给 Caretaker 的窄接口：它只能将备忘录传递给其它对象；一个是提供给 Originator 的宽接口，允许它访问到先前状态所需的所有数据。理想情况是只允许 Originator 访问本备忘录的内部状态。</li></ul><p><img src="'+t+'" alt="image-20220324093855618"></p><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>以下实现了一个简单计算器程序，可以输入两个值，然后计算这两个值的和。备忘录模式允许将这两个值存储起来，然后在某个时刻用存储的状态进行恢复。</p>',8),d={href:"https://www.oodesign.com/memento-pattern-calculator-example-java-sourcecode.html",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Originator Interface
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token comment">// Create Memento</span>
    <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// setMemento</span>
    <span class="token keyword">void</span> <span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToCareTaker</span> memento<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Originator Implementation
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorImp</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> firstNumber<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// create a memento object used for restoring two numbers</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PreviousCalculationImp</span><span class="token punctuation">(</span>firstNumber<span class="token punctuation">,</span> secondNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToCareTaker</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToOriginator</span><span class="token punctuation">)</span> memento<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToOriginator</span><span class="token punctuation">)</span> memento<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// result is adding two numbers</span>
        <span class="token keyword">return</span> firstNumber <span class="token operator">+</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> firstNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Memento Interface to Originator
 *
 * This interface allows the originator to restore its state
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PreviousCalculationToOriginator</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *  Memento interface to CalculatorOperator (Caretaker)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token punctuation">{</span>
    <span class="token comment">// no operations permitted for the caretaker</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Memento Object Implementation
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * Note that this object implements both interfaces to Originator and CareTaker
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PreviousCalculationImp</span> <span class="token keyword">implements</span> <span class="token class-name">PreviousCalculationToCareTaker</span><span class="token punctuation">,</span>
        <span class="token class-name">PreviousCalculationToOriginator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> firstNumber<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PreviousCalculationImp</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">,</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> firstNumber<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * CareTaker object
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// program starts</span>
        <span class="token class-name">Calculator</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// assume user enters two numbers</span>
        calculator<span class="token punctuation">.</span><span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        calculator<span class="token punctuation">.</span><span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// find result</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Store result of this calculation in case of error</span>
        <span class="token class-name">PreviousCalculationToCareTaker</span> memento <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user enters a number</span>
        calculator<span class="token punctuation">.</span><span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user enters a wrong second number and calculates result</span>
        calculator<span class="token punctuation">.</span><span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">290</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// calculate result</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user hits CTRL + Z to undo last operation and see last result</span>
        calculator<span class="token punctuation">.</span><span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span>memento<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// result restored</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>110
-273
110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><ul><li>java.io.Serializable</li></ul>`,9);function m(v,b){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("实现参考："),n("a",d,[s("Memento Pattern - Calculator Example - Java Sourcecode"),l(e)])]),k])}const g=c(u,[["render",m],["__file","shejimoshi - beiwanglu.html.vue"]]);export{g as default};
