const l=JSON.parse('{"key":"v-b7b01a1c","path":"/cs/java/Java bingfa.html","title":"并发","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、使用线程","slug":"一、使用线程","link":"#一、使用线程","children":[{"level":3,"title":"实现 Runnable 接口","slug":"实现-runnable-接口","link":"#实现-runnable-接口","children":[]},{"level":3,"title":"实现 Callable 接口","slug":"实现-callable-接口","link":"#实现-callable-接口","children":[]},{"level":3,"title":"继承 Thread 类","slug":"继承-thread-类","link":"#继承-thread-类","children":[]},{"level":3,"title":"实现接口 VS 继承 Thread","slug":"实现接口-vs-继承-thread","link":"#实现接口-vs-继承-thread","children":[]}]},{"level":2,"title":"二、基础线程机制","slug":"二、基础线程机制","link":"#二、基础线程机制","children":[{"level":3,"title":"Executor","slug":"executor","link":"#executor","children":[]},{"level":3,"title":"Daemon","slug":"daemon","link":"#daemon","children":[]},{"level":3,"title":"sleep()","slug":"sleep","link":"#sleep","children":[]},{"level":3,"title":"yield()","slug":"yield","link":"#yield","children":[]}]},{"level":2,"title":"三、中断","slug":"三、中断","link":"#三、中断","children":[{"level":3,"title":"InterruptedException","slug":"interruptedexception","link":"#interruptedexception","children":[]},{"level":3,"title":"interrupted()","slug":"interrupted","link":"#interrupted","children":[]},{"level":3,"title":"Executor 的中断操作","slug":"executor-的中断操作","link":"#executor-的中断操作","children":[]}]},{"level":2,"title":"四、互斥同步","slug":"四、互斥同步","link":"#四、互斥同步","children":[{"level":3,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[]},{"level":3,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[]},{"level":3,"title":"比较","slug":"比较","link":"#比较","children":[]},{"level":3,"title":"使用选择","slug":"使用选择","link":"#使用选择","children":[]}]},{"level":2,"title":"五、线程之间的协作","slug":"五、线程之间的协作","link":"#五、线程之间的协作","children":[{"level":3,"title":"join()","slug":"join","link":"#join","children":[]},{"level":3,"title":"wait() notify() notifyAll()","slug":"wait-notify-notifyall","link":"#wait-notify-notifyall","children":[]},{"level":3,"title":"await() signal() signalAll()","slug":"await-signal-signalall","link":"#await-signal-signalall","children":[]}]},{"level":2,"title":"六、线程状态","slug":"六、线程状态","link":"#六、线程状态","children":[{"level":3,"title":"新建（NEW）","slug":"新建-new","link":"#新建-new","children":[]},{"level":3,"title":"可运行（RUNABLE）","slug":"可运行-runable","link":"#可运行-runable","children":[]},{"level":3,"title":"阻塞（BLOCKED）","slug":"阻塞-blocked","link":"#阻塞-blocked","children":[]},{"level":3,"title":"无限期等待（WAITING）","slug":"无限期等待-waiting","link":"#无限期等待-waiting","children":[]},{"level":3,"title":"限期等待（TIMED_WAITING）","slug":"限期等待-timed-waiting","link":"#限期等待-timed-waiting","children":[]},{"level":3,"title":"死亡（TERMINATED）","slug":"死亡-terminated","link":"#死亡-terminated","children":[]}]},{"level":2,"title":"七、J.U.C - AQS","slug":"七、j-u-c-aqs","link":"#七、j-u-c-aqs","children":[{"level":3,"title":"CountDownLatch","slug":"countdownlatch","link":"#countdownlatch","children":[]},{"level":3,"title":"CyclicBarrier","slug":"cyclicbarrier","link":"#cyclicbarrier","children":[]},{"level":3,"title":"Semaphore","slug":"semaphore","link":"#semaphore","children":[]}]},{"level":2,"title":"八、J.U.C - 其它组件","slug":"八、j-u-c-其它组件","link":"#八、j-u-c-其它组件","children":[{"level":3,"title":"FutureTask","slug":"futuretask","link":"#futuretask","children":[]},{"level":3,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[]},{"level":3,"title":"ForkJoin","slug":"forkjoin","link":"#forkjoin","children":[]}]},{"level":2,"title":"九、线程不安全示例","slug":"九、线程不安全示例","link":"#九、线程不安全示例","children":[]},{"level":2,"title":"十、Java 内存模型","slug":"十、java-内存模型","link":"#十、java-内存模型","children":[{"level":3,"title":"主内存与工作内存","slug":"主内存与工作内存","link":"#主内存与工作内存","children":[]},{"level":3,"title":"内存间交互操作","slug":"内存间交互操作","link":"#内存间交互操作","children":[]},{"level":3,"title":"内存模型三大特性","slug":"内存模型三大特性","link":"#内存模型三大特性","children":[]},{"level":3,"title":"先行发生原则","slug":"先行发生原则","link":"#先行发生原则","children":[]}]},{"level":2,"title":"十一、线程安全","slug":"十一、线程安全","link":"#十一、线程安全","children":[{"level":3,"title":"不可变","slug":"不可变","link":"#不可变","children":[]},{"level":3,"title":"互斥同步","slug":"互斥同步","link":"#互斥同步","children":[]},{"level":3,"title":"非阻塞同步","slug":"非阻塞同步","link":"#非阻塞同步","children":[]},{"level":3,"title":"无同步方案","slug":"无同步方案","link":"#无同步方案","children":[]}]},{"level":2,"title":"十二、锁优化","slug":"十二、锁优化","link":"#十二、锁优化","children":[{"level":3,"title":"自旋锁","slug":"自旋锁","link":"#自旋锁","children":[]},{"level":3,"title":"锁消除","slug":"锁消除","link":"#锁消除","children":[]},{"level":3,"title":"锁粗化","slug":"锁粗化","link":"#锁粗化","children":[]},{"level":3,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]}]},{"level":2,"title":"十三、多线程开发良好的实践","slug":"十三、多线程开发良好的实践","link":"#十三、多线程开发良好的实践","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1703077946000,"updatedTime":1703774167000,"contributors":[{"name":"dong","email":"dwx_job@163.com","commits":4}]},"filePathRelative":"cs/java/Java 并发.md"}');export{l as data};
