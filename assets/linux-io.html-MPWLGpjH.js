import{_ as e,o as a,c as i,e as d}from"./app-3RcBQnkC.js";const r={},s=d(`<h3 id="阻塞式io模型" tabindex="-1"><a class="header-anchor" href="#阻塞式io模型" aria-hidden="true">#</a> 阻塞式IO模型</h3><p>最传统的一种IO模型，即在读写数据过程中会发生阻塞现象。</p><p>当用户线程发出IO请求之后，内核会去查看数据是否就绪，如果没有就绪就会等待数据就绪，而用户线程就会处于阻塞状态，用户线程交出CPU。当数据就绪之后，内核会将数据拷贝到用户线程，并返回结果给用户线程，用户线程才解除block状态。</p><p>典型的阻塞IO模型的例子为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data = socket.read();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果数据没有就绪，就会一直阻塞在read方法。</p><h3 id="非阻塞io模型" tabindex="-1"><a class="header-anchor" href="#非阻塞io模型" aria-hidden="true">#</a> 非阻塞IO模型</h3><p>当用户线程发起一个read操作后，并不需要等待，而是马上就得到了一个结果。如果结果是一个error时，它就知道数据还没有准备好，于是它可以再次发送read操作。一旦内核中的数据准备好了，并且又再次收到了用户线程的请求，那么它马上就将数据拷贝到了用户线程，然后返回。</p><p>所以事实上，在非阻塞IO模型中，用户线程需要不断地询问内核数据是否就绪，也就说非阻塞IO不会交出CPU，而会一直占用CPU。</p><p>典型的非阻塞IO模型一般如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(true){
    data = socket.read();
    if(data!= error){
        处理数据
        break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是对于非阻塞IO就有一个非常严重的问题，在while循环中需要不断地去询问内核数据是否就绪，这样会导致CPU占用率非常高，因此一般情况下很少使用while循环这种方式来读取数据。</p><h3 id="io复用模型" tabindex="-1"><a class="header-anchor" href="#io复用模型" aria-hidden="true">#</a> IO复用模型</h3><p>多路复用IO模型是目前使用得比较多的模型。Java NIO实际上就是多路复用IO。</p><p>在多路复用IO模型中，会有一个线程不断去轮询多个socket的状态，只有当socket真正有读写事件时，才真正调用实际的IO读写操作。因为在多路复用IO模型中，只需要使用一个线程就可以管理多个socket，系统不需要建立新的进程或者线程，也不必维护这些线程和进程，并且只有在真正有socket读写事件进行时，才会使用IO资源，所以它大大减少了资源占用。</p><p>在Java NIO中，是通过selector.select()去查询每个通道是否有到达事件，如果没有事件，则一直阻塞在那里，因此这种方式会导致用户线程的阻塞。</p><p>也许有朋友会说，我可以采用 多线程+ 阻塞IO 达到类似的效果，但是由于在多线程 + 阻塞IO 中，每个socket对应一个线程，这样会造成很大的资源占用，并且尤其是对于长连接来说，线程的资源一直不会释放，如果后面陆续有很多连接的话，就会造成性能上的瓶颈。</p><p>而多路复用IO模式，通过一个线程就可以管理多个socket，只有当socket真正有读写事件发生才会占用资源来进行实际的读写操作。因此，多路复用IO比较适合连接数比较多的情况。</p><p>另外多路复用IO为何比非阻塞IO模型的效率高是因为在非阻塞IO中，不断地询问socket状态是通过用户线程去进行的，而在多路复用IO中，轮询每个socket状态是内核在进行的，这个效率要比用户线程要高的多。</p><p>不过要注意的是，多路复用IO模型是通过轮询的方式来检测是否有事件到达，并且对到达的事件逐一进行响应。因此对于多路复用IO模型来说，一旦事件响应体很大，那么就会导致后续的事件迟迟得不到处理，并且会影响新的事件轮询。</p><h3 id="信号驱动io模型" tabindex="-1"><a class="header-anchor" href="#信号驱动io模型" aria-hidden="true">#</a> 信号驱动IO模型</h3><p>在信号驱动IO模型中，当用户线程发起一个IO请求操作，会给对应的socket注册一个信号函数，然后用户线程会继续执行，当内核数据就绪时会发送一个信号给用户线程，用户线程接收到信号之后，便在信号函数中调用IO读写操作来进行实际的IO请求操作。</p><h3 id="异步io模型" tabindex="-1"><a class="header-anchor" href="#异步io模型" aria-hidden="true">#</a> 异步IO模型</h3><p>异步IO模型是比较理想的IO模型，在异步IO模型中，当用户线程发起read操作之后，立刻就可以开始去做其它的事。而另一方面，从内核的角度，当它受到一个asynchronous read之后，它会立刻返回，说明read请求已经成功发起了，因此不会对用户线程产生任何block。然后，内核会等待数据准备完成，然后将数据拷贝到用户线程，当这一切都完成之后，内核会给用户线程发送一个信号，告诉它read操作完成了。也就说用户线程完全不需要知道实际的整个IO操作是如何进行的，只需要先发起一个请求，当接收内核返回的成功信号时表示IO操作已经完成，可以直接去使用数据了。</p><p>也就说在异步IO模型中，IO操作的两个阶段都不会阻塞用户线程，这两个阶段都是由内核自动完成，然后发送一个信号告知用户线程操作已完成。用户线程中不需要再次调用IO函数进行具体的读写。这点是和信号驱动模型有所不同的，在信号驱动模型中，当用户线程接收到信号表示数据已经就绪，然后需要用户线程调用IO函数进行实际的读写操作；而在异步IO模型中，收到信号表示IO操作已经完成，不需要再在用户线程中调用IO函数进行实际的读写操作。</p><p>注意，异步IO是需要操作系统的底层支持，在Java 7中，提供了Asynchronous IO。</p><p>前面四种IO模型实际上都属于同步IO，只有最后一种是真正的异步IO，因为无论是多路复用IO还是信号驱动模型，IO操作的第2个阶段都会引起用户线程阻塞，也就是内核进行数据拷贝的过程都会让用户线程阻塞。</p>`,27),n=[s];function t(c,o){return a(),i("div",null,n)}const l=e(r,[["render",t],["__file","linux-io.html.vue"]]);export{l as default};
