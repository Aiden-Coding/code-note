import { recoTheme } from "vuepress-theme-reco";
import { tocPlugin } from '@vuepress/plugin-toc'
export default {
    plugins: [
        tocPlugin({
            // 配置项
            componentName: 'Toc',
            defaultPropsOptions: {}
        }),
    ],
    base: "/code-note/",
    title: "学习笔记",
    description: "...",
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "zh-CN",
        },
    },
    theme: recoTheme({
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
        // 默认主题配置
        navbar: [
            { text: "首页", link: "/" },
            { text: "操作系统", link: "/cs/system/Linux.md" },
            { text: "计算机网络", link: "/cs/net/HTTP.md" },
            { text: "数据库", link: "/cs/database/MySQL.md" },
            { text: "Java", link: "/cs/java/Java 基础.md" },
            { text: "算法", link: "/cs/algo/算法 - 目录.md" },
            { text: "设计模式", link: "/cs/design/设计模式 - 目录.md" },
            { text: "flowable", link: "/flowable/Flowable课件-基础篇.md" },
            { text: "代码随想录", link: "/cs/programmercarl/" },
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
                    text: "图论",
                    collapsable: false,
                    children: [
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
                    children: [
                        "/cs/programmercarl/problems/1356.根据数字二进制下1的数目排序.md",
                    ],
                },
                {
                    text: "算法模板",
                    collapsable: false,
                    children: [
                        "/cs/programmercarl/problems/算法模板.md",
                    ],
                },
            ],
        },
    }),
};
