import{_ as n,r as l,o as s,c as a,a as e,b as r,d as o,e as h}from"./app-3RcBQnkC.js";const _={},p=e("blockquote",null,[e("p",null,"哈希表总结篇如约而至")],-1),d=e("h1",{id:"哈希表总结篇",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#哈希表总结篇","aria-hidden":"true"},"#"),r(" 哈希表总结篇")],-1),c=e("h2",{id:"哈希表理论基础",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#哈希表理论基础","aria-hidden":"true"},"#"),r(" 哈希表理论基础")],-1),i={href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},m=h("<p><strong>一般来说哈希表都是用来快速判断一个元素是否出现集合里</strong>。</p><p>对于哈希表，要知道<strong>哈希函数</strong>和<strong>哈希碰撞</strong>在哈希表中的作用。</p><p>哈希函数是把传入的key映射到符号表的索引上。</p><p>哈希碰撞处理有多个key映射到相同索引上时的情景，处理碰撞的普遍方式是拉链法和线性探测法。</p><p>接下来是常见的三种哈希结构：</p><ul><li>数组</li><li>set（集合）</li><li>map（映射）</li></ul>",6),E={href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"例如什么时候用std::set，什么时候用std::multiset，什么时候用std::unordered_set，都是很有考究的。",-1),B=e("p",null,[e("strong",null,"只有对这些数据结构的底层实现很熟悉，才能灵活使用，否则很容易写出效率低下的程序"),r("。")],-1),f=e("h2",{id:"哈希表经典题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#哈希表经典题目","aria-hidden":"true"},"#"),r(" 哈希表经典题目")],-1),g=e("h3",{id:"数组作为哈希表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数组作为哈希表","aria-hidden":"true"},"#"),r(" 数组作为哈希表")],-1),A=e("p",null,"一些应用场景就是为数组量身定做的。",-1),b={href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"这道题目包含小写字母，那么使用数组来做哈希最合适不过。",-1),C={href:"https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"一些同学可能想，用数组干啥，都用map不就完事了。",-1),v=e("p",null,[e("strong",null,"上面两道题目用map确实可以，但使用map的空间消耗要比数组大一些，因为map要维护红黑树或者符号表，而且还要做哈希函数的运算。所以数组更加简单直接有效！")],-1),I=e("h3",{id:"set作为哈希表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set作为哈希表","aria-hidden":"true"},"#"),r(" set作为哈希表")],-1),N={href:"https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"这道题目没有限制数值的大小，就无法使用数组来做哈希表了。",-1),j=e("p",null,[e("strong",null,"主要因为如下两点：")],-1),z=e("ul",null,[e("li",null,"数组的大小是有限的，受到系统栈空间（不是数据结构的栈）的限制。"),e("li",null,"如果数组空间够大，但哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费。")],-1),L=e("p",null,"所以此时一样的做映射的话，就可以使用set了。",-1),q={href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,"std::set"),e("li",null,"std::multiset"),e("li",null,"std::unordered_set")],-1),T=e("p",null,"std::set和std::multiset底层实现都是红黑树，std::unordered_set的底层实现是哈希， 使用unordered_set 读写效率是最高的，本题并不需要对数据进行排序，而且还不要让数据重复，所以选择unordered_set。",-1),w={href:"https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"map作为哈希表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#map作为哈希表","aria-hidden":"true"},"#"),r(" map作为哈希表")],-1),H={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,"来说一说：使用数组和set来做哈希法的局限。",-1),K=e("ul",null,[e("li",null,"数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。"),e("li",null,"set是一个集合，里面放的元素只能是一个key，而两数之和这道题目，不仅要判断y是否存在而且还要记录y的下标位置，因为要返回x 和 y的下标。所以set 也不能用。")],-1),M=e("p",null,[r("map是一种"),e("code",null,"<key, value>"),r("的结构，本题可以用key保存数值，用value在保存数值所在的下标。所以使用map最为合适。")],-1),O={href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},P=e("ul",null,[e("li",null,"std::map"),e("li",null,"std::multimap"),e("li",null,"std::unordered_map")],-1),Q=e("p",null,"std::unordered_map 底层实现为哈希，std::map 和std::multimap 的底层实现是红黑树。",-1),R={href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,"用哈希法解决了两数之和，很多同学会感觉用哈希法也可以解决三数之和，四数之和。",-1),ee=e("p",null,"其实是可以解决，但是非常麻烦，需要去重导致代码效率很低。",-1),re={href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"},te=e("p",null,"所以18. 四数之和，15.三数之和都推荐使用双指针法！",-1),oe=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),r(" 总结")],-1),ne=e("p",null,"对于哈希表的知识相信很多同学都知道，但是没有成体系。",-1),le=e("p",null,"本篇我们从哈希表的理论基础到数组、set和map的经典应用，把哈希表的整个全貌完整的呈现给大家。",-1),se=e("p",null,[e("strong",null,"同时也强调虽然map是万能的，详细介绍了什么时候用数组，什么时候用set"),r("。")],-1),ae=e("p",null,"相信通过这个总结篇，大家可以对哈希表有一个全面的了解。",-1);function he(_e,pe){const t=l("ExternalLinkIcon");return s(),a("div",null,[p,d,c,e("p",null,[r("在"),e("a",i,[r("关于哈希表，你该了解这些！"),o(t)]),r("中，我们介绍了哈希表的基础理论知识，不同于枯燥的讲解，这里介绍了都是对刷题有帮助的理论知识点。")]),m,e("p",null,[r("在C++语言中，set 和 map 都分别提供了三种数据结构，每种数据结构的底层实现和用途都有所不同，在"),e("a",E,[r("关于哈希表，你该了解这些！"),o(t)]),r("中我给出了详细分析，这一知识点很重要！")]),u,B,f,g,A,e("p",null,[r("在"),e("a",b,[r("242.有效的字母异位词"),o(t)]),r("中，我们提到了数组就是简单的哈希表，但是数组的大小是受限的！")]),k,e("p",null,[r("在"),e("a",C,[r("383.赎金信"),o(t)]),r("中同样要求只有小写字母，那么就给我们浓浓的暗示，用数组！")]),e("p",null,[r("本题和"),e("a",x,[r("242.有效的字母异位词"),o(t)]),r("很像，"),e("a",D,[r("242.有效的字母异位词"),o(t)]),r("是求 字符串a 和 字符串b 是否可以相互组成，在"),e("a",F,[r("383.赎金信"),o(t)]),r("中是求字符串a能否组成字符串b，而不用管字符串b 能不能组成字符串a。")]),y,v,I,e("p",null,[r("在"),e("a",N,[r("349. 两个数组的交集"),o(t)]),r("中我们给出了什么时候用数组就不行了，需要用set。")]),V,j,z,L,e("p",null,[r("关于set，C++ 给提供了如下三种可用的数据结构：（详情请看"),e("a",q,[r("关于哈希表，你该了解这些！"),o(t)]),r("）")]),S,T,e("p",null,[r("在"),e("a",w,[r("202.快乐数"),o(t)]),r("中，我们再次使用了unordered_set来判断一个数是否重复出现过。")]),G,e("p",null,[r("在"),e("a",H,[r("1.两数之和"),o(t)]),r("中map正式登场。")]),J,K,M,e("p",null,[r("C++提供如下三种map：（详情请看"),e("a",O,[r("关于哈希表，你该了解这些！"),o(t)]),r("）")]),P,Q,e("p",null,[r("同理，std::map 和std::multimap 的key也是有序的（这个问题也经常作为面试题，考察对语言容器底层的理解），"),e("a",R,[r("1.两数之和"),o(t)]),r("中并不需要key有序，选择std::unordered_map 效率更高！")]),e("p",null,[r("在"),e("a",U,[r("454.四数相加"),o(t)]),r("中我们提到了其实需要哈希的地方都能找到map的身影。")]),e("p",null,[r("本题咋眼一看好像和"),e("a",W,[r("18. 四数之和"),o(t)]),r("，"),e("a",X,[r("15.三数之和"),o(t)]),r("差不多，其实差很多！")]),e("p",null,[e("strong",null,[r("关键差别是本题为四个独立的数组，只要找到A[i] + B[j] + C[k] + D[l] = 0就可以，不用考虑重复问题，而"),e("a",Y,[r("18. 四数之和"),o(t)]),r("，"),e("a",Z,[r("15.三数之和"),o(t)]),r("是一个数组（集合）里找到和为0的组合，可就难很多了！")])]),$,ee,e("p",null,[r("在"),e("a",re,[r("15.三数之和"),o(t)]),r("中我给出了哈希法和双指针两个解法，大家就可以体会到，使用哈希法还是比较麻烦的。")]),te,oe,ne,le,se,ae])}const ce=n(_,[["render",he],["__file","haxibiaozongjie.html.vue"]]);export{ce as default};
