import{_ as a,o as s,c as n,e}from"./app-3RcBQnkC.js";const t={},i=e(`<h1 id="_5-1-引言" tabindex="-1"><a class="header-anchor" href="#_5-1-引言" aria-hidden="true">#</a> 5.1 引言</h1><p>过去已经在类文件格式中引入了新的元素，未来还将继续添加新元素（例如，用于模块化、 Java 类型的注释，等等）。到 ASM 3.x，这样的每一次变化都会导致 ASM API 中的后向不兼容变化，这不是件好事情。为解决这些问题，ASM 4.0 中已经引入了一种新机制。它的目的是确保未来所有 ASM 版本都将与之前直到 ASM 4.0 的任意版本保持后向兼容，即使向类文件格式中引入了新的功能时也能保持这种兼容性。这意味着，从 4.0 开始，为一个 ASM 版本编写的类生成器、类分析器或类适配器，将可以在任何未来 ASM 版本中使用。但是，仅靠 ASM 自身是不能确保这一性质的。它需要用户在编写代码时遵循一些简单的准则。本章的目的就是介绍这些准则，并大致介绍一下 ASM 核心 API 中用于确保后向兼容性的内部机制。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>注意： <span class="token constant">ASM</span> <span class="token number">4.0</span> 中引入的后向兼容机制要求将 <span class="token class-name">ClassVisitor</span> 、 <span class="token class-name">FieldVisitor</span> 、 <span class="token class-name">MethodVisitor</span> 等由接口变为抽象类，具有一个以 <span class="token constant">ASM</span> 版本为参数的构造器。如果你的代码是为 <span class="token constant">ASM</span> <span class="token number">3.</span>x 实现的，可以将其升级至 <span class="token constant">ASM</span> <span class="token number">4.0</span>：将代码分析器和适配器中的 <span class="token keyword">implements</span> 用 <span class="token keyword">extends</span> 替换， 并在它们的构造器中指定一个 <span class="token constant">ASM</span> 版本。此外，<span class="token class-name">ClassAdapter</span> 和 <span class="token class-name">MethodAdapter</span> 还被合并到 <span class="token class-name">ClassVisitor</span> 和 <span class="token class-name">MethodVisitor</span> 中。要转换代码，只需用 <span class="token class-name">ClassVisitor</span> 代替 <span class="token class-name">ClassAdapter</span>，用 <span class="token class-name">MethodVisitor</span> 代替 <span class="token class-name">MethodAdapter</span>。另外，如果定义了自定义的 <span class="token class-name">FieldAdapter</span> 或  <span class="token class-name">AnnotationAdapter</span> 类 ， 现 在 可 以 用  <span class="token class-name">FieldVisitor</span>  和 <span class="token class-name">AnnotationVisitor</span> 代替它们。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-1-1-后向兼容约定" tabindex="-1"><a class="header-anchor" href="#_5-1-1-后向兼容约定" aria-hidden="true">#</a> 5.1.1 后向兼容约定</h2><p>在给出用以确保后向兼容性的规则之前，首先给出“后向兼容”的更准确定义。</p><p>首先，研究一下新的类文件特征如何影响代码生成器、分析器和适配器是非常重要的。也就是说，在不受任何实现和二进制兼容问题影响时，在引入这些新特征之前设计的类生成器、分析器或适配器在进行这些修改之后还是否有效？换言之，如果有一个在引入这些新功能之前设计的转换链，假定这些新功功直接被忽略，原封不动地通过转换链，那这个转换链还是否依然有效？ 事实上，类生成器、分析器和适配器受到的影响是不同的：</p><ul><li>类生成器不受影响：它们生成具有某一固定类版本的代码，这些生成的类在未来的 JVM 版本中依然有效，因为 JVM 确定了后向二进制兼容。</li><li>类分析器可能受到影响，也可能不受影响。例如，有一段用于分析字节代码指令的代码， 它是为 Java 4 编写的，它也许能够正常处理 Java 5 类，尽管 Java 5 中引入了注释。但同一段代码也许不再能处理 Java 7 类，因为它不能忽略新的动态调用指令。</li><li>类适配器可能受到影响，也可能不受影响。死代码清除工具不会因为引入注释而受到影响，甚至不会受到新的动态调用指令的影响。但另一方面，这两种新特性可能都会影响到为类进行重命名的工具。</li></ul><p>这表明，新的类文件特性可能会对已有的类分析器或适配器产生不可预测的影响。如果新的特性直接被忽略，原封不动地通过一个分析链或转换链，这个链在某些情况下可以运行，不产生错误，并给出有效结果，而在某些情况下，也可以运行，不产生错误，但却给出无效结果，而在另外一些情况下，可能会在执行期间失败。第二种情景的问题尤其严重，因为它会在用户不知晓的情况下破坏分析链或转换链的语义，从而导致难以找出 Bug。为解决这一问题，我们认为最好不要忽略新特性，而是只要在分析链或转换链中遇到未知特性，就产生一条错误。这种错误发出信号：这个链也许能够处理新的类格式，也许不能，链的编写者必须分析具体情景，并在必要时进行更新。</p><p>所有上述内容引出了后向兼容性约定的如下定义：</p><ul><li>SM 版本 X 是为版本号低于小等于 x 的 Java 类编写的。它不能生成版本号 y&gt;x 的类， 如果在 ClassReader.accept 中，以一个版本号大于 x 的类作为输入，它必须失败。</li><li>于为 ASM X 编写且遵循了以下所述规则的代码，当输入类的版本不超过 x，对于 ASM 未来任意大于 X 的版本 Y，该代码都能不加修改地正常工作。</li><li>于为 ASM X 编写且遵循了以下所述规则的代码，当输入类的声明版本为 y，但仅使用了在不晚于版本 x 中定义的功能，则在使用 ASM Y 或任意未来版本时，该代码能够不加修改地正常工作。</li><li>于为 ASM X 编写且遵循了以下所述规则的代码，当输入类使用了在版本号为 y&gt;x 的类中定义的功能时，对于 ASM X 或任意其他未来版本，该代码都必须失败。</li></ul><p><em>注意，最后三点与类生成器无关，因为它没有类输入。</em></p><h2 id="_5-1-2-一个例子" tabindex="-1"><a class="header-anchor" href="#_5-1-2-一个例子" aria-hidden="true">#</a> 5.1.2 一个例子</h2><p>为说明这些用户规则及用于保证后向兼容性的内部 ASM 机制，本章假定将向 Java 8 类中添加两个新的假设属性，一个用于存储类的作者，另一个用于存储它的许可。还假设这些新的属性在 ASM 5.0 中通过 ClassVisitor 的两个新方法公开，一个是：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">visitLicense</span><span class="token punctuation">(</span><span class="token class-name">String</span> license<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于访问许可，还有一个是 visitSource 的新版本，用于在访问源文件名和调试信息的同时访问作者①：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Deprecated</span> <span class="token keyword">void</span> <span class="token function">visitSource</span><span class="token punctuation">(</span><span class="token class-name">String</span> source<span class="token punctuation">,</span> <span class="token class-name">String</span> debug<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>① 事实上，可能仅添加一个visitLicense(String author, String license)方法，因为修改一个方法签名要比添加一个方法更复杂，如下所示。这里的做法只是出于说明目的。</em></p><p>作者和许可属性是可选的，即对 visitLicense 的调用并非强制的，在一个 visitSource 调用中，author 可能是 null。</p>`,18),l=[i];function p(c,o){return s(),n("div",null,l)}const d=a(t,[["render",p],["__file","5.1yinyan.html.vue"]]);export{d as default};
