import{_ as n,o as s,c as a,e}from"./app-3RcBQnkC.js";const t="/code-note/assets/image-22-s8VmXQ5I.png",p="/code-note/assets/image-45-tHosapNt.png",o="/code-note/assets/image-46-GoMpRbmK.png",c="/code-note/assets/image-47-tE7N3QZ_.png",i="/code-note/assets/image-48-UkLLh2eR.png",l={},u=e('<h3 id="_01、前世今生" tabindex="-1"><a class="header-anchor" href="#_01、前世今生" aria-hidden="true">#</a> 01、前世今生</h3><p>我是 fastjson，是个地地道道的杭州土著，但我始终怀揣着一颗走向全世界的雄心。这不，我在 GitHub 上的简介都换成了英文，国际范十足吧？</p><p><img src="'+t+`" alt="Alt text"></p><p>如果你的英语功底没有我家老板 666 的话，我可以简单地翻译下（说人话，不装逼）。</p><p>我是阿里巴巴开源的一款 JSON 解析库，可以将 Java 对象序列化成 JSON 字符串，同时也可以将 JSON 字符串反序列化为 Java 对象。</p><ul><li><p>我提供了服务器端和安卓客户端两种解析工具，性能表现还不错。</p></li><li><p>我提供了便捷的方式来进行 Java 对象和 JSON 之间的互转，<code>toJSONString()</code> 方法用来序列化，<code>parseObject()</code> 方法用来反序列化。</p></li><li><p>我允许转换预先存在的无法修改的对象（只有 class、没有源代码）。</p></li><li><p>对 Java 泛型有着广泛的支持。</p></li><li><p>我支持任意复杂的对象（深度的继承层次）。</p></li></ul><p>2012 年的时候，我就被开源中国评选为最受欢迎的国产开源软件之一。时隔多年，我的流行趋势没有丝毫减退，在 JSON 领域，我敢说我是 NO 1，因为我在 GitHub 上的粉丝数已经超过了 22k，没有任何人敢忽视我这样的成就。</p><h3 id="_02、使用指南" tabindex="-1"><a class="header-anchor" href="#_02、使用指南" aria-hidden="true">#</a> 02、使用指南</h3><p>在使用我的 API 之前，需要先在 pom.xml 文件中引入我的依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
    &lt;artifactId&gt;fastjson&lt;/artifactId&gt;
    &lt;version&gt;1.2.58&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我来写一个简单的测试用例，你看一下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// getter/setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Writer 是一个普通的 Java 类，有两个字段，分别是 age 和 name，还有它们俩对应的 getter 和 setter 方法。</p><p><code>main()</code> 方法中创建了一个 Writer 对象，然后调用我提供的一个静态方法 <code>JSON.toJSONString()</code> 来得到 JSON 字符串。</p><p>来看一下打印后的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;age&quot;:18,&quot;name&quot;:&quot;沉默王二&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想反序列化的话，执行以下的代码即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Writer writer1 = JSON.parseObject(json, Writer.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用静态方法 <code>JSON.parseObject()</code>，传递两个参数，一个是 JSON 字符串，一个是对象的类型。</p><p>如果想把 JSON 字符串转成集合的话，需要调用另外一个静态方法 <code>JSON.parseArray()</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Writer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseArray</span><span class="token punctuation">(</span><span class="token string">&quot;[{\\&quot;age\\&quot;:18,\\&quot;name\\&quot;:\\&quot;沉默王二\\&quot;},{\\&quot;age\\&quot;:19,\\&quot;name\\&quot;:\\&quot;沉默王一\\&quot;}]&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Writer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有特殊要求的话，我敢这么说，以上 3 个方法就可以覆盖到你绝大多数的业务场景了。</p><h3 id="_03、使用注解" tabindex="-1"><a class="header-anchor" href="#_03、使用注解" aria-hidden="true">#</a> 03、使用注解</h3><p>有时候，你的 JSON 字符串中的 key 可能与 Java 对象中的字段不匹配，比如大小写；有时候，你需要指定一些字段序列化但不反序列化；有时候，你需要日期字段显示成指定的格式。</p><p>这些特殊场景，我统统为你考虑到了，只需要在对应的字段上加上 <code>@JSONField</code> 注解就可以了。</p><p>先来看一下 <code>@JSONField</code> 注解的定义吧。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">JSONField</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>name 用来指定字段的名称，format 用来指定日期格式，serialize 和 deserialize 用来指定是否序列化和反序列化。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>format <span class="token operator">=</span> <span class="token string">&quot;yyyy年MM月dd日&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>serialize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>deserialize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我建议在 getter 字段上使用 <code>@JSONField</code> 注解。来看一下测试代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
writer<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
writer<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
writer<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的输出结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;Age&quot;:18,&quot;birthday&quot;:&quot;2020年12月17日&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JSON 字符串中的 Age 首字母为大写，birthday 的格式符合“年月日”的预期，name 字段没有出现在结果中，说明没有被序列化。</p><h3 id="_04、序列化特性" tabindex="-1"><a class="header-anchor" href="#_04、序列化特性" aria-hidden="true">#</a> 04、序列化特性</h3><p>为了满足更多个性化的需求，我在 SerializerFeature 类中定义了很多特性，你可以在调用 <code>toJSONString()</code> 方法的时候进行指定。</p><ul><li>PrettyFormat，让 JSON 格式打印得更漂亮一些</li><li>WriteClassName，输出类名</li><li>UseSingleQuotes，key 使用单引号</li><li>WriteNullListAsEmpty，List 为空则输出 []</li><li>WriteNullStringAsEmpty，String 为空则输出“”</li></ul><p>等等等等，更多新技能，等待你去开锁。我这里写个简单的 demo 供你参考。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> 
<span class="token class-name">SerializerFeature<span class="token punctuation">.</span>PrettyFormat</span><span class="token punctuation">,</span> 
<span class="token class-name">SerializerFeature<span class="token punctuation">.</span>UseSingleQuotes</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比一下配置前和配置后的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;Age&quot;:18,&quot;birthday&quot;:&quot;2020年12月17日&quot;}
{
	&#39;Age&#39;:18,
	&#39;birthday&#39;:&#39;2020年12月17日&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_05、我为什么快" tabindex="-1"><a class="header-anchor" href="#_05、我为什么快" aria-hidden="true">#</a> 05、我为什么快</h3><p>众所周知，把 Java 对象序列化成 JSON 字符串，是不可能使用字符串直接拼接的，因为这样性能很差。比字符串拼接更好的办法就是使用 <code>StringBuilder</code>。</p><p>StringBuilder 尽管已经很好了，但在性能上还有上升的空间。“自己动手，丰衣足食”，于是我就创造了一个 SerializeWriter 类，专门用来序列化。</p><p>SerializeWriter 类中包含了一个 <code>char[] buf</code>，每序列化一次，都要做一次分配，但我使用了 ThreadLocal 来进行优化，这样就能够有效地减少对象的分配和垃圾回收，从而提升性能。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal</span><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> bufLocal         <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">SerializeWriter</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Writer</span> writer<span class="token punctuation">,</span> <span class="token keyword">int</span> defaultFeatures<span class="token punctuation">,</span> <span class="token class-name">SerializerFeature</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> features<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>writer <span class="token operator">=</span> writer<span class="token punctuation">;</span>

    buf <span class="token operator">=</span> bufLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>buf <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bufLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">2048</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，还有很多其他的细节，比如说使用 IdentityHashMap 而不是 HashMap，既可以避免多余的 <code>equals</code> 操作，又可以避免多线程并发情况下的死循环。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * for concurrent IdentityHashMap
 * 
 * <span class="token keyword">@author</span> wenshao[szujobs@hotmail.com]
 */</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdentityHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> buckets<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span>           indexMask<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_SIZE</span> <span class="token operator">=</span> <span class="token number">8192</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如说，使用 asm 技术来避免反射导致的开销。</p><p><img src="`+p+'" alt="Alt text"></p><p>我承认，快的同时，也带来了一些安全性的问题。尤其是 AutoType 的引入，让黑客有了可乘之机。</p><blockquote><p>1.2.59 发布，增强 AutoType 打开时的安全性</p><p>1.2.60 发布，增加了 AutoType 黑名单，修复拒绝服务安全问题</p><p>1.2.61 发布，增加 AutoType 安全黑名单</p><p>1.2.62 发布，增加 AutoType 黑名单、增强日期反序列化和 JSONPath</p><p>1.2.66 发布，Bug 修复安全加固，并且做安全加固，补充了 AutoType 黑名单</p><p>1.2.67 发布，Bug 修复安全加固，补充了 AutoType 黑名单</p><p>1.2.68 发布，支持 GEOJSON，补充了 AutoType 黑名单。（引入一个 safeMode 的配置，配置 safeMode 后，无论白名单和黑名单，都不支持 autoType。）</p><p>1.2.69 发布，修复新发现高危 AutoType 开关绕过安全漏洞，补充了 AutoType 黑名单</p><p>1.2.70 发布，提升兼容性，补充了 AutoType 黑名单</p></blockquote><p>在于黑客的反复较量中，我虽然变得越来越稳重成熟了，但与此同时，让我的用户为此也付出了沉重的代价。</p><p><img src="'+o+'" alt="Alt text"></p><p>网络上也出现了很多不和谐的声音，他们声称我是最垃圾的国产开源软件之一，只不过凭借着一些投机取巧赢得了国内开发者的信赖。</p><p>但更多的是，对我的不离不弃。</p><p><img src="'+c+'" alt="Alt text"></p><p>最令我感到为之动容的一句话是：</p><blockquote><p>温少几乎凭一己之力撑起了一个被广泛使用 JSON 库，而其他库几乎都是靠一整个团队，就凭这一点，温少作为“初心不改的阿里初代开源人”，当之无愧。</p></blockquote><p>出现漏洞并不可怕，可怕的是发现不了漏洞，或者说无法解决掉漏洞。</p><p>为了彻底解决 AutoType 带来的问题，在 1.2.68 版本中，我引入了 safeMode 的安全模式，无论白名单和黑名单，都不支持 AutoType，这样就可以彻底地杜绝攻击。</p><p><img src="'+i+'" alt="Alt text"></p><p>安全模式下，<code>checkAutoType()</code> 方法会直接抛出异常。</p><h3 id="_06、尾声" tabindex="-1"><a class="header-anchor" href="#_06、尾声" aria-hidden="true">#</a> 06、尾声</h3><p>不管前面的路还有多少艰难困苦，也不管还要面对多少风言风语，我都会砥砺前行，为了国产开源软件的蓬勃发展，我愿意做一个先驱者，也愿意做一个持久战者。</p><p>2020 年的最后一篇文章！看到的就点个赞吧，2021 年顺顺利利。</p>',66),r=[u];function d(k,v){return s(),a("div",null,r)}const b=n(l,[["render",d],["__file","fastjson.html.vue"]]);export{b as default};
