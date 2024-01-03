import { recoTheme } from "vuepress-theme-reco";
import { tocPlugin } from "@vuepress/plugin-toc";
export default {
    plugins: [
        tocPlugin({
            //配置项
            componentName: "Toc",
            defaultPropsOptions: {},
        }),
    ],
    base: "/code-note/",
    title: "学习笔记",
    description: "...",
    locales: {
        //键名是该语言所属的子路径
        //作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "zh-CN",
        },
    },
    theme: recoTheme({
        // 自动设置分类
        // autoSetBlogCategories: true,
        // 自动将分类和标签添加至头部导航条
        autoAddCategoryToNavbar: {
            location: 1, // 默认 0
            categoryText: "分类", // 默认 categories
            tagText: "标签", // 默认 tags
        },
        // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
        // autoAddCategoryToNavbar: true,
        bulletin: {
            body: [
                {
                    type: "text",
                    content: `🎉🎉🎉 reco 主题 2.x 已经发布 RC 版本，在发布 Latest 版本之前不会再有大的更新，
          大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
                    style: "font-size: 12px;",
                },
                { type: "hr" },
                { type: "title", content: "QQ 群" },
                {
                    type: "text",
                    content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
                    style: "font-size: 12px;",
                },
                { type: "hr" },
                { type: "title", content: "GitHub" },
                {
                    type: "text",
                    content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco/discussions/1">Discussions<a/></li>
          </ul>`,
                    style: "font-size: 12px;",
                },
                { type: "hr" },
                {
                    type: "buttongroup",
                    children: [{ text: "打赏", link: "/docs/others/donate.html" }],
                },
            ],
        },
        subSidebar: "auto",
        //默认主题配置
        navbar: [
            { text: "首页", link: "/" },
            { text: "Java", link: "/cs/java/Java 基础.md" },
            { text: "操作系统", link: "/cs/system/Linux.md" },
            { text: "计算机网络", link: "/cs/net/HTTP.md" },
            { text: "数据库", link: "/cs/database/MySQL.md" },
            { text: "算法", link: "/cs/algo/算法 - 目录.md" },
            { text: "设计模式", link: "/cs/design/设计模式 - 目录.md" },
            { text: "flowable", link: "/flowable/Flowable课件-基础篇.md" },
            { text: "代码随想录", link: "/cs/programmercarl/" },
            { text: "微服务", link: "/cs/cloud/微服务和Spring Cloud Alibaba介绍.md" },
            { text: "advanced-java", link: "/advanced-java/java/Java 基础.md" },
            { text: "toBeTopJavaer", link: "/toBeTopJavaer/menu.md" },
            {
                text: "toBeBetterJavaer",
                children: [
                    { text: "home", link: "/toBeBetterJavaer/home.md" },
                    { text: "comments", link: "/toBeBetterJavaer/comments" },
                    { text: "vue-previews", link: "/toBeBetterJavaer/vue-previews" },
                    { text: "bulletin-popover", link: "/toBeBetterJavaer/bulletin-popover" },
                ],
            },
            { text: "其他", link: "/cs/others/面向对象思想.md" },
        ],
        series: {
            "/flowable/": [
                {
                    text: "flowalbe 学习",
                    collapsable: true,
                    children: ["Flowable课件-基础篇.md", "Flowable课件-高级篇.md"],
                },
            ],
            "/cs/cloud/": [
                {
                    text: "springcloud",
                    collapsable: true,
                    children: ["/cs/cloud/微服务和Spring Cloud Alibaba介绍.md"],
                },
                {
                    text: "nginx",
                    collapsable: true,
                    children: ["/cs/cloud/nginx.md"],
                },
            ],
            "/cs/others/": [
                {
                    text: "工具",
                    children: ["Git.md", "Docker.md", "构建工具.md"],
                },
                {
                    text: "其他",
                    children: [
                        "正则表达式.md",
                        "面向对象思想.md",
                        "集群.md",
                        "分布式.md",
                        "攻击技术.md",
                        "代码风格规范.md",
                        "代码可读性.md",
                    ],
                },
            ],
            "/cs/system/": [
                "Linux.md",
                {
                    text: "计算机操作系统",
                    collapsable: false,
                    children: [
                        "计算机操作系统 - 目录.md",
                        "计算机操作系统 - 概述.md",
                        "计算机操作系统 - 进程管理.md",
                        "计算机操作系统 - 死锁.md",
                        "计算机操作系统 - 内存管理.md",
                        "计算机操作系统 - 设备管理.md",
                        "计算机操作系统 - 链接.md",
                    ],
                },
            ],
            "/cs/net/": [
                "HTTP.md",
                "Socket.md",
                {
                    text: "计算机网络",
                    collapsable: false,
                    children: [
                        "计算机网络 - 目录.md",
                        "计算机网络 - 概述.md",
                        "计算机网络 - 物理层.md",
                        "计算机网络 - 链路层.md",
                        "计算机网络 - 网络层.md",
                        "计算机网络 - 传输层.md",
                        "计算机网络 - 应用层.md",
                    ],
                },
            ],
            "/cs/java/": ["Java 基础.md", "Java IO.md", "Java 容器.md", "Java 虚拟机.md", "Java 并发.md"],
            "/cs/design/": [
                "系统设计基础.md",
                {
                    text: "设计模式",
                    collapsable: false,
                    children: [
                        "设计模式 - 目录.md",
                        "设计模式  - 单例.md",
                        "设计模式 - 简单工厂.md",
                        "设计模式 - 工厂方法.md",
                        "设计模式 - 抽象工厂.md",
                        "设计模式 - 生成器.md",
                        "设计模式 - 原型模式.md",

                        "设计模式 - 责任链.md",
                        "设计模式 - 命令.md",
                        "设计模式 - 解释器.md",
                        "设计模式 - 迭代器.md",
                        "设计模式 - 中介者.md",
                        "设计模式 - 备忘录.md",
                        "设计模式 - 观察者.md",
                        "设计模式 - 状态.md",
                        "设计模式 - 策略.md",
                        "设计模式 - 模板方法.md",
                        "设计模式 - 访问者.md",
                        "设计模式 - 空对象.md",

                        "设计模式 - 适配器.md",
                        "设计模式 - 桥接.md",
                        "设计模式 - 组合.md",
                        "设计模式 - 装饰.md",
                        "设计模式 - 外观.md",
                        "设计模式 - 享元.md",
                        "设计模式 - 代理.md",
                        "设计模式.md",
                    ],
                },
            ],
            "/cs/database/": [
                "缓存.md",
                "Redis.md",
                "消息队列.md",
                "MySQL.md",
                "数据库系统原理.md",
                {
                    text: "SQL",
                    collapsable: true,
                    children: ["SQL 语法.md", "SQL 练习.md"],
                },
            ],
            "/cs/algo/": [
                {
                    text: "基础",
                    collapsable: true,
                    children: [
                        "算法 - 目录.md",
                        "算法 - 算法分析.md",
                        "算法 - 排序.md",
                        "算法 - 并查集.md",
                        "算法 - 栈和队列.md",
                        "算法 - 符号表.md",
                        "算法 - 其它.md",
                    ],
                },
                {
                    text: "Leetcode 题解",
                    collapsable: true,
                    children: [
                        "Leetcode 题解 - 目录.md",

                        "Leetcode 题解 - 双指针.md",
                        "Leetcode 题解 - 排序.md",
                        "Leetcode 题解 - 贪心思想.md",
                        "Leetcode 题解 - 二分查找.md",
                        "Leetcode 题解 - 分治.md",
                        "Leetcode 题解 - 搜索.md",
                        "Leetcode 题解 - 动态规划.md",
                        "Leetcode 题解 - 数学.md",

                        "Leetcode 题解 - 链表.md",
                        "Leetcode 题解 - 树.md",
                        "Leetcode 题解 - 栈和队列.md",
                        "Leetcode 题解 - 哈希表.md",
                        "Leetcode 题解 - 字符串.md",
                        "Leetcode 题解 - 数组与矩阵.md",
                        "Leetcode 题解 - 图.md",
                        "Leetcode 题解 - 位运算.md",
                    ],
                },
                "剑指 Offer 题解 - 目录.md",
                {
                    text: "数组与矩阵",
                    collapsable: true,
                    children: [
                        "3. 数组中重复的数字.md",
                        "4. 二维数组中的查找.md",
                        "5. 替换空格.md",
                        "29. 顺时针打印矩阵.md",
                        "50. 第一个只出现一次的字符位置.md",
                    ],
                },
                {
                    text: "栈队列堆",
                    collapsable: true,
                    children: [
                        "39. 用两个栈实现队列.md",
                        "30. 包含 min 函数的栈.md",
                        "31. 栈的压入、弹出序列.md",
                        "40. 最小的 K 个数.md",
                        "41.1 数据流中的中位数.md",
                        "41.2 字符流中第一个不重复的字符.md",
                        "59. 滑动窗口的最大值.md",
                    ],
                },
                {
                    text: "双指针",
                    collapsable: true,
                    children: [
                        "57.1 和为 S 的两个数字.md",
                        "57.2 和为 S 的连续正数序列.md",
                        "58.1 翻转单词顺序列.md",
                        "58.2 左旋转字符串.md",
                    ],
                },
                {
                    text: "链表",
                    collapsable: true,
                    children: [
                        "6. 从尾到头打印链表.md",
                        "18.1 在 O(1) 时间内删除链表节点.md",
                        "18.2 删除链表中重复的结点.md",
                        "22. 链表中倒数第 K 个结点.md",
                        "23. 链表中环的入口结点.md",
                        "24. 反转链表.md",
                        "25. 合并两个排序的链表.md",
                        "35. 复杂链表的复制.md",
                        "52. 两个链表的第一个公共结点.md",
                    ],
                },
                {
                    text: "树",
                    collapsable: true,
                    children: [
                        "7. 重建二叉树.md",
                        "8. 二叉树的下一个结点.md",
                        "26. 树的子结构.md",
                        "27. 二叉树的镜像.md",
                        "28. 对称的二叉树.md",
                        "32.1 从上往下打印二叉树.md",
                        "32.2 把二叉树打印成多行.md",
                        "32.3 按之字形顺序打印二叉树.md",
                        "33. 二叉搜索树的后序遍历序列.md",
                        "34. 二叉树中和为某一值的路径.md",
                        "36. 二叉搜索树与双向链表.md",
                        "37. 序列化二叉树.md",
                        "54. 二叉查找树的第 K 个结点.md",
                        "55.1 二叉树的深度.md",
                        "55.2 平衡二叉树.md",
                        "68. 树中两个节点的最低公共祖先.md",
                    ],
                },
                {
                    text: "贪心思想",
                    collapsable: true,
                    children: ["14. 剪绳子.md", "63. 股票的最大利润.md"],
                },
                {
                    text: "二分查找",
                    collapsable: true,
                    children: ["11. 旋转数组的最小数字.md", "53. 数字在排序数组中出现的次数.md"],
                },
                {
                    text: "分治",
                    collapsable: true,
                    children: ["16. 数值的整数次方.md"],
                },
                {
                    text: "搜索",
                    collapsable: true,
                    children: ["12. 矩阵中的路径.md", "13. 机器人的运动范围.md", "38. 字符串的排列.md"],
                },
                {
                    text: "排序.md",
                    collapsable: true,
                    children: [
                        "21. 调整数组顺序使奇数位于偶数前面.md",
                        "45. 把数组排成最小的数.md",
                        "51. 数组中的逆序对.md",
                    ],
                },
                {
                    text: "动态规划",
                    collapsable: true,
                    children: [
                        "10.1 斐波那契数列.md",
                        "10.2 矩形覆盖.md",
                        "10.3 跳台阶.md",
                        "10.4 变态跳台阶.md",
                        "42. 连续子数组的最大和.md",
                        "47. 礼物的最大价值.md",
                        "48. 最长不含重复字符的子字符串.md",
                        "49. 丑数.md",
                        "60. n 个骰子的点数.md",
                        "66. 构建乘积数组.md",
                    ],
                },
                {
                    text: "数学",
                    collapsable: true,
                    children: [
                        "39. 数组中出现次数超过一半的数字.md",
                        "62. 圆圈中最后剩下的数.md",
                        "43. 从 1 到 n 整数中 1 出现的次数.md",
                    ],
                },
                {
                    text: "位运算",
                    collapsable: true,
                    children: ["15. 二进制中 1 的个数.md", "56. 数组中只出现一次的数字.md"],
                },
                {
                    text: "其它",
                    collapsable: true,
                    children: [
                        "17. 打印从 1 到最大的 n 位数.md",
                        "19. 正则表达式匹配.md",
                        "20. 表示数值的字符串.md",
                        "44. 数字序列中的某一位数字.md",
                        "46. 把数字翻译成字符串.md",
                        "61. 扑克牌顺子.md",
                        "64. 求 1 + 2 + 3 +...+n.md",
                        "65. 不用加减乘除做加法.md",
                        "67. 把字符串转换成整数.md",
                    ],
                },
            ],
            "/cs/programmercarl/": [
                {
                    text: "算法性能分析",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/前序/关于时间复杂度，你不知道的都在这里！.md",
                        "/cs/programmercarl/problems/前序/On的算法居然超时了，此时的n究竟是多大？.md",
                        "/cs/programmercarl/problems/前序/通过一道面试题目，讲一讲递归算法的时间复杂度！.md",
                        "/cs/programmercarl/problems/周总结/20201210复杂度分析周末总结.md",
                        "/cs/programmercarl/problems/前序/关于空间复杂度，可能有几个疑问？.md",
                        "/cs/programmercarl/problems/前序/递归算法的时间与空间复杂度分析.md",
                        "/cs/programmercarl/problems/前序/刷了这么多题，你了解自己代码的内存消耗么？.md",
                    ],
                },
                {
                    text: "数组",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/数组理论基础.md",
                        "/cs/programmercarl/problems/0704.二分查找.md",
                        "/cs/programmercarl/problems/0027.移除元素.md",
                        "/cs/programmercarl/problems/0977.有序数组的平方.md",
                        "/cs/programmercarl/problems/0209.长度最小的子数组.md",
                        "/cs/programmercarl/problems/0059.螺旋矩阵II.md",
                        "/cs/programmercarl/problems/数组总结篇.md",
                        "/cs/programmercarl/problems/1365.有多少小于当前数字的数字.md",
                        "/cs/programmercarl/problems/0941.有效的山脉数组.md",
                        "/cs/programmercarl/problems/1207.独一无二的出现次数.md",
                        "/cs/programmercarl/problems/0283.移动零.md",
                        "/cs/programmercarl/problems/0189.旋转数组.md",
                        "/cs/programmercarl/problems/0724.寻找数组的中心索引.md",
                        "/cs/programmercarl/problems/0034.在排序数组中查找元素的第一个和最后一个位置.md",
                        "/cs/programmercarl/problems/0922.按奇偶排序数组II.md",
                        "/cs/programmercarl/problems/0035.搜索插入位置.md",
                    ],
                },
                {
                    text: "链表",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/链表理论基础.md",
                        "/cs/programmercarl/problems/0203.移除链表元素.md",
                        "/cs/programmercarl/problems/0707.设计链表.md",
                        "/cs/programmercarl/problems/0206.翻转链表.md",
                        "/cs/programmercarl/problems/0024.两两交换链表中的节点.md",
                        "/cs/programmercarl/problems/0019.删除链表的倒数第N个节点.md",
                        "/cs/programmercarl/problems/面试题02.07.链表相交.md",
                        "/cs/programmercarl/problems/0142.环形链表II.md",
                        "/cs/programmercarl/problems/链表总结篇.md",
                        "/cs/programmercarl/problems/0024.两两交换链表中的节点.md",
                        "/cs/programmercarl/problems/0234.回文链表.md",
                        "/cs/programmercarl/problems/0143.重排链表.md",
                        "/cs/programmercarl/problems/0141.环形链表.md",
                        "/cs/programmercarl/problems/面试题02.07.链表相交.md",
                    ],
                },
                {
                    text: "哈希表",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/哈希表理论基础.md",
                        "/cs/programmercarl/problems/0242.有效的字母异位词.md",
                        "/cs/programmercarl/problems/1002.查找常用字符.md",
                        "/cs/programmercarl/problems/0349.两个数组的交集.md",
                        "/cs/programmercarl/problems/0202.快乐数.md",
                        "/cs/programmercarl/problems/0001.两数之和.md",
                        "/cs/programmercarl/problems/0454.四数相加II.md",
                        "/cs/programmercarl/problems/0383.赎金信.md",
                        "/cs/programmercarl/problems/0015.三数之和.md",
                        "/cs/programmercarl/problems/0018.四数之和.md",
                        "/cs/programmercarl/problems/哈希表总结.md",
                        "/cs/programmercarl/problems/0205.同构字符串.md",
                    ],
                },
                {
                    text: "字符串",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/0344.反转字符串.md",
                        "/cs/programmercarl/problems/0541.反转字符串II.md",
                        "/cs/programmercarl/problems/kama54.替换数字.md",
                        "/cs/programmercarl/problems/0151.翻转字符串里的单词.md",
                        "/cs/programmercarl/problems/kama55.右旋字符串.md",
                        "/cs/programmercarl/problems/0028.实现strStr.md",
                        "/cs/programmercarl/problems/0459.重复的子字符串.md",
                        "/cs/programmercarl/problems/字符串总结.md",
                        "/cs/programmercarl/problems/0925.长按键入.md",
                        "/cs/programmercarl/problems/0844.比较含退格的字符串.md",
                    ],
                },
                {
                    text: "双指针法",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/0027.移除元素.md",
                        "/cs/programmercarl/problems/0344.反转字符串.md",
                        "/cs/programmercarl/problems/kama54.替换数字.md",
                        "/cs/programmercarl/problems/0151.翻转字符串里的单词.md",
                        "/cs/programmercarl/problems/0206.翻转链表.md",
                        "/cs/programmercarl/problems/0019.删除链表的倒数第N个节点.md",
                        "/cs/programmercarl/problems/面试题02.07.链表相交.md",
                        "/cs/programmercarl/problems/0142.环形链表II.md",
                        "/cs/programmercarl/problems/0015.三数之和.md",
                        "/cs/programmercarl/problems/0018.四数之和.md",
                        "/cs/programmercarl/problems/双指针总结.md",
                    ],
                },
                {
                    text: "栈与队列",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/栈与队列理论基础.md",
                        "/cs/programmercarl/problems/0232.用栈实现队列.md",
                        "/cs/programmercarl/problems/0225.用队列实现栈.md",
                        "/cs/programmercarl/problems/0020.有效的括号.md",
                        "/cs/programmercarl/problems/1047.删除字符串中的所有相邻重复项.md",
                        "/cs/programmercarl/problems/0150.逆波兰表达式求值.md",
                        "/cs/programmercarl/problems/0239.滑动窗口最大值.md",
                        "/cs/programmercarl/problems/0347.前K个高频元素.md",
                        "/cs/programmercarl/problems/栈与队列总结.md",
                    ],
                },
                {
                    text: "二叉树",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/二叉树理论基础.md",
                        "/cs/programmercarl/problems/二叉树的递归遍历.md",
                        "/cs/programmercarl/problems/二叉树的迭代遍历.md",
                        "/cs/programmercarl/problems/二叉树的统一迭代法.md",
                        "/cs/programmercarl/problems/0102.二叉树的层序遍历.md",
                        "/cs/programmercarl/problems/0226.翻转二叉树.md",
                        "/cs/programmercarl/problems/周总结/20200927二叉树周末总结.md",
                        "/cs/programmercarl/problems/0101.对称二叉树.md",
                        "/cs/programmercarl/problems/0104.二叉树的最大深度.md",
                        "/cs/programmercarl/problems/0111.二叉树的最小深度.md",
                        "/cs/programmercarl/problems/0222.完全二叉树的节点个数.md",
                        "/cs/programmercarl/problems/0110.平衡二叉树.md",
                        "/cs/programmercarl/problems/0257.二叉树的所有路径.md",
                        "/cs/programmercarl/problems/周总结/20201003二叉树周末总结.md",
                        "/cs/programmercarl/problems/二叉树中递归带着回溯.md",
                        "/cs/programmercarl/problems/0404.左叶子之和.md",
                        "/cs/programmercarl/problems/0513.找树左下角的值.md",
                        "/cs/programmercarl/problems/0112.路径总和.md",
                        "/cs/programmercarl/problems/0106.从中序与后序遍历序列构造二叉树.md",
                        "/cs/programmercarl/problems/0654.最大二叉树.md",
                        "/cs/programmercarl/problems/周总结/20201010二叉树周末总结.md",
                        "/cs/programmercarl/problems/0617.合并二叉树.md",
                        "/cs/programmercarl/problems/0700.二叉搜索树中的搜索.md",
                        "/cs/programmercarl/problems/0098.验证二叉搜索树.md",
                        "/cs/programmercarl/problems/0530.二叉搜索树的最小绝对差.md",
                        "/cs/programmercarl/problems/0501.二叉搜索树中的众数.md",
                        "/cs/programmercarl/problems/0236.二叉树的最近公共祖先.md",
                        "/cs/programmercarl/problems/周总结/20201017二叉树周末总结.md",
                        "/cs/programmercarl/problems/0235.二叉搜索树的最近公共祖先.md",
                        "/cs/programmercarl/problems/0701.二叉搜索树中的插入操作.md",
                        "/cs/programmercarl/problems/0450.删除二叉搜索树中的节点.md",
                        "/cs/programmercarl/problems/0669.修剪二叉搜索树.md",
                        "/cs/programmercarl/problems/0108.将有序数组转换为二叉搜索树.md",
                        "/cs/programmercarl/problems/0538.把二叉搜索树转换为累加树.md",
                        "/cs/programmercarl/problems/二叉树总结篇.md",
                        "/cs/programmercarl/problems/0129.求根到叶子节点数字之和.md",
                        "/cs/programmercarl/problems/1382.将二叉搜索树变平衡.md",
                        "/cs/programmercarl/problems/0100.相同的树.md",
                        "/cs/programmercarl/problems/0116.填充每个节点的下一个右侧节点指针.md",
                    ],
                },
                {
                    text: "回溯算法",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/回溯算法理论基础.md",
                        "/cs/programmercarl/problems/0077.组合.md",
                        "/cs/programmercarl/problems/0077.组合优化.md",
                        "/cs/programmercarl/problems/0216.组合总和III.md",
                        "/cs/programmercarl/problems/0017.电话号码的字母组合.md",
                        "/cs/programmercarl/problems/周总结/20201030回溯周末总结.md",
                        "/cs/programmercarl/problems/0039.组合总和.md",
                        "/cs/programmercarl/problems/0040.组合总和II.md",
                        "/cs/programmercarl/problems/0131.分割回文串.md",
                        "/cs/programmercarl/problems/0093.复原IP地址.md",
                        "/cs/programmercarl/problems/0078.子集.md",
                        "/cs/programmercarl/problems/周总结/20201107回溯周末总结.md",
                        "/cs/programmercarl/problems/0090.子集II.md",
                        "/cs/programmercarl/problems/0491.递增子序列.md",
                        "/cs/programmercarl/problems/0046.全排列.md",
                        "/cs/programmercarl/problems/0047.全排列II.md",
                        "/cs/programmercarl/problems/周总结/20201112回溯周末总结.md",
                        "/cs/programmercarl/problems/回溯算法去重问题的另一种写法.md",
                        "/cs/programmercarl/problems/0332.重新安排行程.md",
                        "/cs/programmercarl/problems/0051.N皇后.md",
                        "/cs/programmercarl/problems/0037.解数独.md",
                        "/cs/programmercarl/problems/回溯总结.md",
                        "/cs/programmercarl/problems/0052.N皇后II.md",
                    ],
                },
                {
                    text: "贪心算法",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/贪心算法理论基础.md",
                        "/cs/programmercarl/problems/0455.分发饼干.md",
                        "/cs/programmercarl/problems/0376.摆动序列.md",
                        "/cs/programmercarl/problems/0053.最大子序和.md",
                        "/cs/programmercarl/problems/周总结/20201126贪心周末总结.md",
                        "/cs/programmercarl/problems/0122.买卖股票的最佳时机II.md",
                        "/cs/programmercarl/problems/0055.跳跃游戏.md",
                        "/cs/programmercarl/problems/0045.跳跃游戏II.md",
                        "/cs/programmercarl/problems/1005.K次取反后最大化的数组和.md",
                        "/cs/programmercarl/problems/周总结/20201203贪心周末总结.md",
                        "/cs/programmercarl/problems/0134.加油站.md",
                        "/cs/programmercarl/problems/0135.分发糖果.md",
                        "/cs/programmercarl/problems/0860.柠檬水找零.md",
                        "/cs/programmercarl/problems/0406.根据身高重建队列.md",
                        "/cs/programmercarl/problems/周总结/20201217贪心周末总结.md",
                        "/cs/programmercarl/problems/根据身高重建队列（vector原理讲解）.md",
                        "/cs/programmercarl/problems/0452.用最少数量的箭引爆气球.md",
                        "/cs/programmercarl/problems/0435.无重叠区间.md",
                        "/cs/programmercarl/problems/0763.划分字母区间.md",
                        "/cs/programmercarl/problems/0056.合并区间.md",
                        "/cs/programmercarl/problems/周总结/20201224贪心周末总结.md",
                        "/cs/programmercarl/problems/0738.单调递增的数字.md",
                        "/cs/programmercarl/problems/0968.监控二叉树.md",
                        "/cs/programmercarl/problems/贪心算法总结篇.md",
                        "/cs/programmercarl/problems/0649.Dota2参议院.md",
                        "/cs/programmercarl/problems/1221.分割平衡字符串.md",
                    ],
                },
                {
                    text: "动态规划",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/动态规划理论基础.md",
                        "/cs/programmercarl/problems/0509.斐波那契数.md",
                        "/cs/programmercarl/problems/0070.爬楼梯.md",
                        "/cs/programmercarl/problems/0746.使用最小花费爬楼梯.md",
                        "/cs/programmercarl/problems/周总结/20210107动规周末总结.md",
                        "/cs/programmercarl/problems/0062.不同路径.md",
                        "/cs/programmercarl/problems/0063.不同路径II.md",
                        "/cs/programmercarl/problems/0343.整数拆分.md",
                        "/cs/programmercarl/problems/0096.不同的二叉搜索树.md",
                        "/cs/programmercarl/problems/周总结/20210114动规周末总结.md",
                        "/cs/programmercarl/problems/背包理论基础01背包-1.md",
                        "/cs/programmercarl/problems/背包理论基础01背包-2.md",
                        "/cs/programmercarl/problems/0416.分割等和子集.md",
                        "/cs/programmercarl/problems/1049.最后一块石头的重量II.md",
                        "/cs/programmercarl/problems/周总结/20210121动规周末总结.md",
                        "/cs/programmercarl/problems/0494.目标和.md",
                        "/cs/programmercarl/problems/0474.一和零.md",
                        "/cs/programmercarl/problems/背包问题理论基础完全背包.md",
                        "/cs/programmercarl/problems/0518.零钱兑换II.md",
                        "/cs/programmercarl/problems/周总结/20210128动规周末总结.md",
                        "/cs/programmercarl/problems/0377.组合总和Ⅳ.md",
                        "/cs/programmercarl/problems/0070.爬楼梯完全背包版本.md",
                        "/cs/programmercarl/problems/0322.零钱兑换.md",
                        "/cs/programmercarl/problems/0279.完全平方数.md",
                        "/cs/programmercarl/problems/周总结/20210204动规周末总结.md",
                        "/cs/programmercarl/problems/0139.单词拆分.md",
                        "/cs/programmercarl/problems/背包问题理论基础多重背包.md",
                        "/cs/programmercarl/problems/背包总结篇.md",
                        "/cs/programmercarl/problems/0198.打家劫舍.md",
                        "/cs/programmercarl/problems/0213.打家劫舍II.md",
                        "/cs/programmercarl/problems/0337.打家劫舍III.md",
                        "/cs/programmercarl/problems/0121.买卖股票的最佳时机.md",
                        "/cs/programmercarl/problems/周总结/20210225动规周末总结.md",
                        "/cs/programmercarl/problems/0122.买卖股票的最佳时机II（动态规划）.md",
                        "/cs/programmercarl/problems/0123.买卖股票的最佳时机III.md",
                        "/cs/programmercarl/problems/0188.买卖股票的最佳时机IV.md",
                        "/cs/programmercarl/problems/0309.最佳买卖股票时机含冷冻期.md",
                        "/cs/programmercarl/problems/周总结/20210304动规周末总结.md",
                        "/cs/programmercarl/problems/0714.买卖股票的最佳时机含手续费（动态规划）.md",
                        "/cs/programmercarl/problems/动态规划-股票问题总结篇.md",
                        "/cs/programmercarl/problems/0300.最长上升子序列.md",
                        "/cs/programmercarl/problems/0674.最长连续递增序列.md",
                        "/cs/programmercarl/problems/0718.最长重复子数组.md",
                        "/cs/programmercarl/problems/1143.最长公共子序列.md",
                        "/cs/programmercarl/problems/1035.不相交的线.md",
                        "/cs/programmercarl/problems/0053.最大子序和（动态规划）.md",
                        "/cs/programmercarl/problems/0392.判断子序列.md",
                        "/cs/programmercarl/problems/0115.不同的子序列.md",
                        "/cs/programmercarl/problems/0583.两个字符串的删除操作.md",
                        "/cs/programmercarl/problems/0072.编辑距离.md",
                        "/cs/programmercarl/problems/为了绝杀编辑距离，卡尔做了三步铺垫.md",
                        "/cs/programmercarl/problems/0647.回文子串.md",
                        "/cs/programmercarl/problems/0516.最长回文子序列.md",
                        "/cs/programmercarl/problems/动态规划总结篇.md",
                        "/cs/programmercarl/problems/0005.最长回文子串.md",
                        "/cs/programmercarl/problems/0132.分割回文串II.md",
                        "/cs/programmercarl/problems/0673.最长递增子序列的个数.md",
                    ],
                },
                {
                    text: "单调栈",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/0739.每日温度.md",
                        "/cs/programmercarl/problems/0496.下一个更大元素I.md",
                        "/cs/programmercarl/problems/0503.下一个更大元素II.md",
                        "/cs/programmercarl/problems/0042.接雨水.md",
                        "/cs/programmercarl/problems/0084.柱状图中最大的矩形.md",
                    ],
                },
                {
                    text: "图论",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/图论深搜理论基础.md",
                        "/cs/programmercarl/problems/0797.所有可能的路径.md",
                        "/cs/programmercarl/problems/图论广搜理论基础.md",
                        "/cs/programmercarl/problems/0200.岛屿数量.深搜版.md",
                        "/cs/programmercarl/problems/0200.岛屿数量.广搜版.md",
                        "/cs/programmercarl/problems/0695.岛屿的最大面积.md",
                        "/cs/programmercarl/problems/1020.飞地的数量.md",
                        "/cs/programmercarl/problems/0130.被围绕的区域.md",
                        "/cs/programmercarl/problems/0417.太平洋大西洋水流问题.md",
                        "/cs/programmercarl/problems/0827.最大人工岛.md",
                        "/cs/programmercarl/problems/0127.单词接龙.md",
                        "/cs/programmercarl/problems/0841.钥匙和房间.md",
                        "/cs/programmercarl/problems/0463.岛屿的周长.md",
                        "/cs/programmercarl/problems/图论并查集理论基础.md",
                        "/cs/programmercarl/problems/1971.寻找图中是否存在路径.md",
                        "/cs/programmercarl/problems/0684.冗余连接.md",
                        "/cs/programmercarl/problems/0685.冗余连接II.md",
                        "/cs/programmercarl/problems/0463.岛屿的周长.md",
                        "/cs/programmercarl/problems/0841.钥匙和房间.md",
                        "/cs/programmercarl/problems/0127.单词接龙.md",
                        "/cs/programmercarl/problems/0463.岛屿的周长.md",
                        "/cs/programmercarl/problems/0841.钥匙和房间.md",
                        "/cs/programmercarl/problems/0127.单词接龙.md",
                    ],
                },
                {
                    text: "并查集",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/0684.冗余连接.md",
                        "/cs/programmercarl/problems/0685.冗余连接II.md",
                    ],
                },
                {
                    text: "模拟",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/0657.机器人能否返回原点.md",
                        "/cs/programmercarl/problems/0031.下一个排列.md",
                    ],
                },
                {
                    text: "位运算",
                    collapsable: false,
                    children: ["/cs/programmercarl/problems/1356.根据数字二进制下1的数目排序.md"],
                },
                {
                    text: "算法模板",
                    collapsable: false,
                    children: ["/cs/programmercarl/problems/算法模板.md"],
                },
            ],
        },
    }),
};
