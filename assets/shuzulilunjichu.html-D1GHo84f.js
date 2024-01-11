import{_ as e,o as n,c as i,e as t}from"./app-3RcBQnkC.js";const s={},a=t(`<h1 id="数组理论基础" tabindex="-1"><a class="header-anchor" href="#数组理论基础" aria-hidden="true">#</a> 数组理论基础</h1><p>数组是非常基础的数据结构，在面试中，考察数组的题目一般在思维上都不难，主要是考察对代码的掌控能力</p><p>也就是说，想法很简单，但实现起来 可能就不是那么回事了。</p><p>首先要知道数组在内存中的存储方式，这样才能真正理解数组相关的面试题</p><p><strong>数组是存放在连续内存空间上的相同类型数据的集合。</strong></p><p>数组可以方便的通过下标索引的方式获取到下标下对应的数据。</p><p>举一个字符数组的例子，如图所示：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/算法通关数组.png" alt="算法通关数组"></p><p>需要两点注意的是</p><ul><li><strong>数组下标都是从0开始的。</strong></li><li><strong>数组内存空间的地址是连续的</strong></li></ul><p>正是<strong>因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。</strong></p><p>例如删除下标为3的元素，需要对下标为3的元素后面的所有元素都要做移动操作，如图所示：</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/算法通关数组1.png" alt="算法通关数组1"></p><p>而且大家如果使用C++的话，要注意vector 和 array的区别，vector的底层实现是array，严格来讲vector是容器，不是数组。</p><p><strong>数组的元素是不能删的，只能覆盖。</strong></p><p>那么二维数组直接上图，大家应该就知道怎么回事了</p><p><img src="https://code-thinking.cdn.bcebos.com/pics/算法通关数组2.png" alt="算法通关数组2"></p><p><strong>那么二维数组在内存的空间地址是连续的么？</strong></p><p>不同编程语言的内存管理是不一样的，以C++为例，在C++中二维数组是连续分布的。</p><p>我们来做一个实验，C++测试代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>void test_arr() {
    int array[2][3] = {
		{0, 1, 2},
		{3, 4, 5}
    };
    cout &lt;&lt; &amp;array[0][0] &lt;&lt; &quot; &quot; &lt;&lt; &amp;array[0][1] &lt;&lt; &quot; &quot; &lt;&lt; &amp;array[0][2] &lt;&lt; endl;
    cout &lt;&lt; &amp;array[1][0] &lt;&lt; &quot; &quot; &lt;&lt; &amp;array[1][1] &lt;&lt; &quot; &quot; &lt;&lt; &amp;array[1][2] &lt;&lt; endl;
}

int main() {
    test_arr();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试地址为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x7ffee4065820 0x7ffee4065824 0x7ffee4065828
0x7ffee406582c 0x7ffee4065830 0x7ffee4065834
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意地址为16进制，可以看出二维数组地址是连续一条线的。</p><p>一些录友可能看不懂内存地址，我就简单介绍一下， 0x7ffee4065820 与 0x7ffee4065824 差了一个4，就是4个字节，因为这是一个int型的数组，所以两个相邻数组元素地址差4个字节。</p><p>0x7ffee4065828 与 0x7ffee406582c 也是差了4个字节，在16进制里8 + 4 = c，c就是12。</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210310150641186.png" alt="数组内存"></p><p><strong>所以可以看出在C++中二维数组在地址空间上是连续的</strong>。</p><p>像Java是没有指针的，同时也不对程序员暴露其元素的地址，寻址操作完全交给虚拟机。</p><p>所以看不到每个元素的地址情况，这里我以Java为例，也做一个实验。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void test_arr() {
    int[][] arr = {{1, 2, 3}, {3, 4, 5}, {6, 7, 8}, {9,9,9}};
    System.out.println(arr[0]);
    System.out.println(arr[1]);
    System.out.println(arr[2]);
    System.out.println(arr[3]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的地址为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[I@7852e922
[I@4e25154f
[I@70dea4e
[I@5c647e05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的数值也是16进制，这不是真正的地址，而是经过处理过后的数值了，我们也可以看出，二维数组的每一行头结点的地址是没有规则的，更谈不上连续。</p><p>所以Java的二维数组可能是如下排列的方式：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201214111631844.png" alt="算法通关数组3"></p><p>这里面试中数组相关的理论知识就介绍完了。</p>`,38),l=[a];function r(d,c){return n(),i("div",null,l)}const v=e(s,[["render",r],["__file","shuzulilunjichu.html.vue"]]);export{v as default};
