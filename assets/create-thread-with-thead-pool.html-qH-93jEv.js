import{_ as t,o as n,c as o,a as e}from"./app-3RcBQnkC.js";const r={},c=e("p",null,"Java中提供了对线程池的支持，有很多种方式。Jdk提供给外部的接口也很简单。直接调用ThreadPoolExecutor构造一个就可以了：",-1),a=e("pre",null,[e("code",null,`public class MultiThreads {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        System.out.println(Thread.currentThread().getName());
        System.out.println("通过线程池创建线程");
        ExecutorService executorService = new ThreadPoolExecutor(1, 1, 60L, TimeUnit.SECONDS,
            new ArrayBlockingQueue<Runnable>(10));
        executorService.execute(new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName());
            }
        });
    }
}
`)],-1),l=e("p",null,"输出结果：",-1),u=e("pre",null,[e("code",null,`main
通过线程池创建线程
pool-1-thread-1
`)],-1),i=e("p",null,"所谓线程池本质是一个hashSet。多余的任务会放在阻塞队列中。",-1),s=e("p",null,"线程池的创建方式其实也有很多，也可以通过Executors静态工厂构建，但一般不建议。建议使用线程池来创建线程，并且建议使用带有ThreadFactory参数的ThreadPoolExecutor（需要依赖guava）构造方法设置线程名字，具体原因我们在后面的章节中在详细介绍。",-1),d=[c,a,l,u,i,s];function h(_,p){return n(),o("div",null,d)}const x=t(r,[["render",h],["__file","create-thread-with-thead-pool.html.vue"]]);export{x as default};
