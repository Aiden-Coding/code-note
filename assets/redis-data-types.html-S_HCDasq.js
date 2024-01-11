import{_ as s,o as n,c as e,e as a}from"./app-3RcBQnkC.js";const i={},l=a(`<h1 id="redis-都有哪些数据类型-分别在哪些场景下使用比较合适" tabindex="-1"><a class="header-anchor" href="#redis-都有哪些数据类型-分别在哪些场景下使用比较合适" aria-hidden="true">#</a> Redis 都有哪些数据类型？分别在哪些场景下使用比较合适？</h1><h2 id="面试官心理分析" tabindex="-1"><a class="header-anchor" href="#面试官心理分析" aria-hidden="true">#</a> 面试官心理分析</h2><p>除非是面试官感觉看你简历，是工作 3 年以内的比较初级的同学，可能对技术没有很深入的研究，面试官才会问这类问题。否则，在宝贵的面试时间里，面试官实在不想多问。</p><p>其实问这个问题，主要有两个原因：</p><ul><li>看看你到底有没有全面的了解 Redis 有哪些功能，一般怎么来用，啥场景用什么，就怕你别就会最简单的 KV 操作；</li><li>看看你在实际项目里都怎么玩儿过 Redis。</li></ul><p>要是你回答的不好，没说出几种数据类型，也没说什么场景，你完了，面试官对你印象肯定不好，觉得你平时就是做个简单的 set 和 get。</p><h2 id="面试题剖析" tabindex="-1"><a class="header-anchor" href="#面试题剖析" aria-hidden="true">#</a> 面试题剖析</h2><p>Redis 主要有以下几种数据类型：</p><ul><li>Strings</li><li>Hashes</li><li>Lists</li><li>Sets</li><li>Sorted Sets</li></ul><blockquote><p>Redis 除了这 5 种数据类型之外，还有 Bitmaps、HyperLogLogs、Streams 等。</p></blockquote><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h3><p>这是最简单的类型，就是普通的 set 和 get，做简单的 KV 缓存。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> college szu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hashes" tabindex="-1"><a class="header-anchor" href="#hashes" aria-hidden="true">#</a> Hashes</h3><p>这个是类似 map 的一种结构，这个一般就是可以将结构化的数据，比如一个对象（前提是<strong>这个对象没嵌套其他的对象</strong>）给缓存在 Redis 里，然后每次读写缓存的时候，可以就操作 hash 里的<strong>某个字段</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hset person name bingo
hset person age <span class="token number">20</span>
hset person <span class="token function">id</span> <span class="token number">1</span>
hget person name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>(person = <span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bingo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h3><p>Lists 是有序列表，这个可以玩儿出很多花样。</p><p>比如可以通过 list 存储一些列表型的数据结构，类似粉丝列表、文章的评论列表之类的东西。</p><p>比如可以通过 lrange 命令，读取某个闭区间内的元素，可以基于 list 实现分页查询，这个是很棒的一个功能，基于 Redis 实现简单的高性能分页，可以做类似微博那种下拉不断分页的东西，性能高，就一页一页走。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 0开始位置，-1结束位置，结束位置为-1时，表示列表的最后一个位置，即查看所有。</span>
lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如可以搞个简单的消息队列，从 list 头怼进去，从 list 尾巴那里弄出来。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lpush mylist <span class="token number">1</span>
lpush mylist <span class="token number">2</span>
lpush mylist <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>

<span class="token comment"># 1</span>
rpop mylist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sets" tabindex="-1"><a class="header-anchor" href="#sets" aria-hidden="true">#</a> Sets</h3><p>Sets 是无序集合，自动去重。</p><p>直接基于 set 将系统里需要去重的数据扔进去，自动就给去重了，如果你需要对一些数据进行快速的全局去重，你当然也可以基于 jvm 内存里的 HashSet 进行去重，但是如果你的某个系统部署在多台机器上呢？得基于 Redis 进行全局的 set 去重。</p><p>可以基于 set 玩儿交集、并集、差集的操作，比如交集吧，可以把两个人的粉丝列表整一个交集，看看俩人的共同好友是谁？对吧。</p><p>把两个大 V 的粉丝都放在两个 set 中，对两个 set 做交集。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#-------操作一个set-------</span>
<span class="token comment"># 添加元素</span>
sadd mySet <span class="token number">1</span>

<span class="token comment"># 查看全部元素</span>
smembers mySet

<span class="token comment"># 判断是否包含某个值</span>
sismember mySet <span class="token number">3</span>

<span class="token comment"># 删除某个/些元素</span>
srem mySet <span class="token number">1</span>
srem mySet <span class="token number">2</span> <span class="token number">4</span>

<span class="token comment"># 查看元素个数</span>
scard mySet

<span class="token comment"># 随机删除一个元素</span>
spop mySet

<span class="token comment">#-------操作多个set-------</span>
<span class="token comment"># 将一个set的元素移动到另外一个set</span>
smove yourSet mySet <span class="token number">2</span>

<span class="token comment"># 求两set的交集</span>
sinter yourSet mySet

<span class="token comment"># 求两set的并集</span>
sunion yourSet mySet

<span class="token comment"># 求在yourSet中而不在mySet中的元素</span>
<span class="token function">sdiff</span> yourSet mySet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorted-sets" tabindex="-1"><a class="header-anchor" href="#sorted-sets" aria-hidden="true">#</a> Sorted Sets</h3><p>Sorted Sets 是排序的 set，去重但可以排序，写进去的时候给一个分数，自动根据分数排序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zadd board <span class="token number">85</span> zhangsan
zadd board <span class="token number">72</span> lisi
zadd board <span class="token number">96</span> wangwu
zadd board <span class="token number">63</span> zhaoliu

<span class="token comment"># 获取排名前三的用户（默认是升序，所以需要 rev 改为降序）</span>
zrevrange board <span class="token number">0</span> <span class="token number">3</span>

<span class="token comment"># 获取某用户的排名</span>
zrank board zhaoliu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),d=[l];function r(t,c){return n(),e("div",null,d)}const o=s(i,[["render",r],["__file","redis-data-types.html.vue"]]);export{o as default};
