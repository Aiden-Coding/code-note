import{_ as p,o as t,c as l,e as o}from"./app-3RcBQnkC.js";const c={},e=o('<p>我们知道，计算机的数字的存储和运算都是通过二进制进行的，对于，十进制整数转换为二进制整数采用&quot;除2取余，逆序排列&quot;法</p><p>具体做法是：</p><ul><li>用2整除十进制整数，可以得到一个商和余数；</li><li>再用2去除商，又会得到一个商和余数，如此进行，直到商为小于1时为止</li><li>然后把先得到的余数作为二进制数的低位有效位，后得到的余数作为二进制数的高位有效位，依次排列起来。</li></ul><p>如，我们想要把127转换成二进制，做法如下：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/10/16024170911973.jpg" alt="-w624"></p><p>那么，十进制小数转换成二进制小数，又该如何计算呢？</p><p>十进制小数转换成二进制小数采用&quot;乘2取整，顺序排列&quot;法。</p><p>具体做法是：</p><ul><li>用2乘十进制小数，可以得到积</li><li>将积的整数部分取出，再用2乘余下的小数部分，又得到一个积</li><li>再将积的整数部分取出，如此进行，直到积中的小数部分为零，此时0或1为二进制的最后一位。或者达到所要求的精度为止。</li></ul><p>如尝试将0.625转成二进制：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/10/16024172361526.jpg" alt="-w624"></p><p>但是0.625是一个特列，用同样的算法，请计算下0.1对应的二进制是多少：</p><p><img src="https://www.hollischuang.com/wp-content/uploads/2020/10/16024175486626.jpg" alt="-w624"></p><p>我们发现，0.1的二进制表示中出现了无限循环的情况，也就是(0.1)10 = (0.000110011001100…)2</p><p>这种情况，计算机就没办法用二进制精确的表示0.1了。</p><p>所以，为了解决部分小数无法使用二进制精确表示的问题，于是就有了IEEE 754规范。</p><p>IEEE二进制浮点数算术标准（IEEE 754）是20世纪80年代以来最广泛使用的浮点数运算标准，为许多CPU与浮点运算器所采用。</p><blockquote><p>浮点数和小数并不是完全一样的，计算机中小数的表示法，其实有定点和浮点两种。因为在位数相同的情况下，定点数的表示范围要比浮点数小。所以在计算机科学中，使用浮点数来表示实数的近似值。</p></blockquote><p>IEEE 754规定了四种表示浮点数值的方式：单精确度（32位）、双精确度（64位）、延伸单精确度（43比特以上，很少使用）与延伸双精确度（79比特以上，通常以80位实现）。</p><p>其中最常用的就是32位单精度浮点数和64位双精度浮点数。</p><p>IEEE并没有解决小数无法精确表示的问题，只是提出了一种使用近似值表示小数的方式，并且引入了精度的概念。</p><p>一个浮点数a由两个数m和e来表示：a = m × b^e。</p><p>在任意一个这样的系统中，我们选择一个基数b（记数系统的基）和精度p（即使用多少位来存储）。m（即尾数）是形如±d.ddd...ddd的p位数（每一位是一个介于0到b-1之间的整数，包括0和b-1)。</p><p>如果m的第一位是非0整数,m称作规格化的。有一些描述使用一个单独的符号位(s 代表+或者-）来表示正负，这样m必须是正的。e是指数。</p>',24),s=[e];function i(a,n){return t(),l("div",null,s)}const m=p(c,[["render",i],["__file","float.html.vue"]]);export{m as default};
