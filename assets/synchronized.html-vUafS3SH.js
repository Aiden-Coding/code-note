import{_ as r,r as t,o as i,c as a,a as o,b as e,d as c,e as d}from"./app-3RcBQnkC.js";const s={},l={href:"http://www.hollischuang.com/archives/2550",target:"_blank",rel:"noopener noreferrer"},h=o("code",null,"synchronized",-1),p=o("code",null,"volatile",-1),_=o("code",null,"final",-1),u=o("code",null,"concurren包",-1),y=d(`<p>在《深入理解Java虚拟机》中，有这样一段话：</p><blockquote><p><code>synchronized</code>关键字在需要原子性、可见性和有序性这三种特性的时候都可以作为其中一种解决方案，看起来是“万能”的。的确，大部分并发控制操作都能使用synchronized来完成。</p></blockquote><p>海明威在他的《午后之死》说过的：“冰山运动之雄伟壮观，是因为他只有八分之一在水面上。”对于程序员来说，<code>synchronized</code>只是个关键字而已，用起来很简单。之所以我们可以在处理多线程问题时可以不用考虑太多，就是因为这个关键字帮我们屏蔽了很多细节。</p><p>那么，本文就围绕<code>synchronized</code>展开，主要介绍<code>synchronized</code>的用法、<code>synchronized</code>的原理，以及<code>synchronized</code>是如何提供原子性、可见性和有序性保障的等。</p><h3 id="synchronized的用法" tabindex="-1"><a class="header-anchor" href="#synchronized的用法" aria-hidden="true">#</a> synchronized的用法</h3><p><code>synchronized</code>是Java提供的一个并发控制的关键字。主要有两种用法，分别是同步方法和同步代码块。也就是说，<code>synchronized</code>既可以修饰方法也可以修饰代码块。</p><pre><code>/**
 * @author Hollis 18/08/04.
 */
public class SynchronizedDemo {
     //同步方法
    public synchronized void doSth(){
        System.out.println(&quot;Hello World&quot;);
    }

    //同步代码块
    public void doSth1(){
        synchronized (SynchronizedDemo.class){
            System.out.println(&quot;Hello World&quot;);
        }
    }
}
</code></pre><p>被<code>synchronized</code>修饰的代码块及方法，在同一时间，只能被单个线程访问。</p><h3 id="synchronized的实现原理" tabindex="-1"><a class="header-anchor" href="#synchronized的实现原理" aria-hidden="true">#</a> synchronized的实现原理</h3><p><code>synchronized</code>，是Java中用于解决并发情况下数据同步访问的一个很重要的关键字。当我们想要保证一个共享资源在同一时间只会被一个线程访问到时，我们可以在代码中使用<code>synchronized</code>关键字对类或者对象加锁。</p>`,10),z={href:"http://www.hollischuang.com/archives/1883",target:"_blank",rel:"noopener noreferrer"},m=o("p",null,"我们对上面的代码进行反编译，可以得到如下代码：",-1),v=o("pre",null,[o("code",null,`public synchronized void doSth();
    descriptor: ()V
    flags: ACC_PUBLIC, ACC_SYNCHRONIZED
    Code:
      stack=2, locals=1, args_size=1
         0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
         3: ldc           #3                  // String Hello World
         5: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
         8: return

  public void doSth1();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=2, locals=3, args_size=1
         0: ldc           #5                  // class com/hollis/SynchronizedTest
         2: dup
         3: astore_1
         4: monitorenter
         5: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
         8: ldc           #3                  // String Hello World
        10: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
        13: aload_1
        14: monitorexit
        15: goto          23
        18: astore_2
        19: aload_1
        20: monitorexit
        21: aload_2
        22: athrow
        23: return
`)],-1),f=o("p",null,[e("通过反编译后代码可以看出：对于同步方法，JVM采用"),o("code",null,"ACC_SYNCHRONIZED"),e("标记符来实现同步。 对于同步代码块。JVM采用"),o("code",null,"monitorenter"),e("、"),o("code",null,"monitorexit"),e("两个指令来实现同步。")],-1),b={href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.11.10",target:"_blank",rel:"noopener noreferrer"},g=d("<blockquote><p>方法级的同步是隐式的。同步方法的常量池中会有一个<code>ACC_SYNCHRONIZED</code>标志。当某个线程要访问某个方法的时候，会检查是否有<code>ACC_SYNCHRONIZED</code>，如果有设置，则需要先获得监视器锁，然后开始执行方法，方法执行之后再释放监视器锁。这时如果其他线程来请求执行方法，会因为无法获得监视器锁而被阻断住。值得注意的是，如果在方法执行过程中，发生了异常，并且方法内部并没有处理该异常，那么在异常被抛到方法外面之前监视器锁会被自动释放。</p><p>同步代码块使用<code>monitorenter</code>和<code>monitorexit</code>两个指令实现。可以把执行<code>monitorenter</code>指令理解为加锁，执行<code>monitorexit</code>理解为释放锁。 每个对象维护着一个记录着被锁次数的计数器。未被锁定的对象的该计数器为0，当一个线程获得锁（执行<code>monitorenter</code>）后，该计数器自增变为 1 ，当同一个线程再次获得该对象的锁的时候，计数器再次自增。当同一个线程释放锁（执行<code>monitorexit</code>指令）的时候，计数器再自减。当计数器为0的时候。锁将被释放，其他线程便可以获得锁。</p></blockquote><p>无论是<code>ACC_SYNCHRONIZED</code>还是<code>monitorenter</code>、<code>monitorexit</code>都是基于Monitor实现的，在Java虚拟机(HotSpot)中，Monitor是基于C++实现的，由ObjectMonitor实现。</p>",2),C=o("code",null,"enter",-1),S=o("code",null,"exit",-1),w=o("code",null,"wait",-1),x=o("code",null,"notify",-1),k=o("code",null,"notifyAll",-1),J=o("code",null,"sychronized",-1),j={href:"http://www.hollischuang.com/archives/2030",target:"_blank",rel:"noopener noreferrer"},M=o("h3",{id:"synchronized与原子性",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#synchronized与原子性","aria-hidden":"true"},"#"),e(" synchronized与原子性")],-1),N=o("p",null,"原子性是指一个操作是不可中断的，要全部执行完成，要不就都不执行。",-1),H={href:"http://www.hollischuang.com/archives/2618",target:"_blank",rel:"noopener noreferrer"},P=d('<p>在Java中，为了保证原子性，提供了两个高级的字节码指令<code>monitorenter</code>和<code>monitorexit</code>。前面中，介绍过，这两个字节码指令，在Java中对应的关键字就是<code>synchronized</code>。</p><p>通过<code>monitorenter</code>和<code>monitorexit</code>指令，可以保证被<code>synchronized</code>修饰的代码在同一时间只能被一个线程访问，在锁未释放之前，无法被其他线程访问到。因此，在Java中可以使用<code>synchronized</code>来保证方法和代码块内的操作是原子性的。</p><blockquote><p>线程1在执行<code>monitorenter</code>指令的时候，会对Monitor进行加锁，加锁后其他线程无法获得锁，除非线程1主动解锁。即使在执行过程中，由于某种原因，比如CPU时间片用完，线程1放弃了CPU，但是，他并没有进行解锁。而由于<code>synchronized</code>的锁是可重入的，下一个时间片还是只能被他自己获取到，还是会继续执行代码。直到所有代码执行完。这就保证了原子性。</p></blockquote><h3 id="synchronized与可见性" tabindex="-1"><a class="header-anchor" href="#synchronized与可见性" aria-hidden="true">#</a> synchronized与可见性</h3><p>可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。</p>',5),V={href:"http://www.hollischuang.com/archives/2550",target:"_blank",rel:"noopener noreferrer"},q=o("p",null,[e("前面我们介绍过，被"),o("code",null,"synchronized"),e("修饰的代码，在开始执行时会加锁，执行完成后会进行解锁。而为了保证可见性，有一条规则是这样的：对一个变量解锁之前，必须先把此变量同步回主存中。这样解锁后，后续线程就可以访问到被修改后的值。")],-1),D=o("p",null,"所以，synchronized关键字锁住的对象，其值是具有可见性的。",-1),I=o("h3",{id:"synchronized与有序性",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#synchronized与有序性","aria-hidden":"true"},"#"),e(" synchronized与有序性")],-1),A=o("p",null,"有序性即程序执行的顺序按照代码的先后顺序执行。",-1),E={href:"http://www.hollischuang.com/archives/2550",target:"_blank",rel:"noopener noreferrer"},L=d('<p>这里需要注意的是，<code>synchronized</code>是无法禁止指令重排和处理器优化的。也就是说，<code>synchronized</code>无法避免上述提到的问题。</p><p>那么，为什么还说<code>synchronized</code>也提供了有序性保证呢？</p><p>这就要再把有序性的概念扩展一下了。Java程序中天然的有序性可以总结为一句话：如果在本线程内观察，所有操作都是天然有序的。如果在一个线程中观察另一个线程，所有操作都是无序的。</p><p>以上这句话也是《深入理解Java虚拟机》中的原句，但是怎么理解呢？周志明并没有详细的解释。这里我简单扩展一下，这其实和<code>as-if-serial语义</code>有关。</p><p><code>as-if-serial</code>语义的意思指：不管怎么重排序（编译器和处理器为了提高并行度），单线程程序的执行结果都不能被改变。编译器和处理器无论如何优化，都必须遵守<code>as-if-serial</code>语义。</p><p>这里不对<code>as-if-serial语义</code>详细展开了，简单说就是，<code>as-if-serial语义</code>保证了单线程中，指令重排是有一定的限制的，而只要编译器和处理器都遵守了这个语义，那么就可以认为单线程程序是按照顺序执行的。当然，实际上还是有重排的，只不过我们无须关心这种重排的干扰。</p><p>所以呢，由于<code>synchronized</code>修饰的代码，同一时间只能被同一线程访问。那么也就是单线程执行的。所以，可以保证其有序性。</p><h3 id="synchronized与锁优化" tabindex="-1"><a class="header-anchor" href="#synchronized与锁优化" aria-hidden="true">#</a> synchronized与锁优化</h3><p>前面介绍了<code>synchronized</code>的用法、原理以及对并发编程的作用。是一个很好用的关键字。</p><p><code>synchronized</code>其实是借助Monitor实现的，在加锁时会调用objectMonitor的<code>enter</code>方法，解锁的时候会调用<code>exit</code>方法。事实上，只有在JDK1.6之前，synchronized的实现才会直接调用ObjectMonitor的<code>enter</code>和<code>exit</code>，这种锁被称之为重量级锁。</p><p>所以，在JDK1.6中出现对锁进行了很多的优化，进而出现轻量级锁，偏向锁，锁消除，适应性自旋锁，锁粗化(自旋锁在1.4就有，只不过默认的是关闭的，jdk1.6是默认开启的)，这些操作都是为了在线程之间更高效的共享数据 ，解决竞争问题。</p>',11),O={href:"http://www.hollischuang.com/archives/2344",target:"_blank",rel:"noopener noreferrer"},U=o("p",null,[e("好啦，关于"),o("code",null,"synchronized"),e("关键字，我们介绍了其用法、原理、以及如何保证的原子性、顺序性和可见性，同时也扩展的留下了锁优化相关的资料及思考。后面我们会继续介绍"),o("code",null,"volatile"),e("关键字以及他和"),o("code",null,"synchronized"),e("的区别等。敬请期待。")],-1);function B(R,Y){const n=t("ExternalLinkIcon");return i(),a("div",null,[o("p",null,[e("在"),o("a",l,[e("再有人问你Java内存模型是什么，就把这篇文章发给他。"),c(n)]),e("中我们曾经介绍过，Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如"),h,e("、"),p,e("、"),_,e("、"),u,e("等。")]),y,o("p",null,[e("在"),o("a",z,[e("深入理解多线程（一）——Synchronized的实现原理"),c(n)]),e("中我曾经介绍过其实现原理，为了保证知识的完整性，这里再简单介绍一下，详细的内容请去原文阅读。")]),m,v,f,o("p",null,[e("在"),o("a",b,[e("The Java® Virtual Machine Specification"),c(n)]),e("中有关于同步方法和同步代码块的实现原理的介绍，我翻译成中文如下：")]),g,o("p",null,[e("ObjectMonitor类中提供了几个方法，如"),C,e("、"),S,e("、"),w,e("、"),x,e("、"),k,e("等。"),J,e("加锁的时候，会调用objectMonitor的enter方法，解锁的时候会调用exit方法。（关于Monitor详见"),o("a",j,[e("深入理解多线程（四）—— Moniter的实现原理"),c(n)]),e("）")]),M,N,o("p",null,[e("我们在"),o("a",H,[e("Java的并发编程中的多线程问题到底是怎么回事儿？"),c(n)]),e("中分析过：线程是CPU调度的基本单位。CPU有时间片的概念，会根据不同的调度算法进行线程调度。当一个线程获得时间片之后开始执行，在时间片耗尽之后，就会失去CPU使用权。所以在多线程场景下，由于时间片在线程间轮换，就会发生原子性问题。")]),P,o("p",null,[e("我们在"),o("a",V,[e("再有人问你Java内存模型是什么，就把这篇文章发给他。"),c(n)]),e("中分析过：Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存中保存了该线程中是用到的变量的主内存副本拷贝，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存。不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量的传递均需要自己的工作内存和主存之间进行数据同步进行。所以，就可能出现线程1改了某个变量的值，但是线程2不可见的情况。")]),q,D,I,A,o("p",null,[e("我们在"),o("a",E,[e("再有人问你Java内存模型是什么，就把这篇文章发给他。"),c(n)]),e("中分析过：除了引入了时间片以外，由于处理器优化和指令重排等，CPU还可能对输入代码进行乱序执行，比如load->add->save 有可能被优化成load->save->add 。这就是可能存在有序性问题。")]),L,o("p",null,[e("关于自旋锁、锁粗化和锁消除可以参考"),o("a",O,[e("深入理解多线程（五）—— Java虚拟机的锁优化技术"),c(n)]),e("，关于轻量级锁和偏向锁，已经在排期规划中，我后面会有文章单独介绍，将独家发布在我的博客(http://www.hollischuang.com)和公众号(Hollis)中，敬请期待。")]),U])}const W=r(s,[["render",B],["__file","synchronized.html.vue"]]);export{W as default};
