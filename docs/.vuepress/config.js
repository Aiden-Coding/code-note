module.exports = {
    base: "/code-note/",
    title: "学习笔记",
    description: "...",
    theme: "reco",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        subSidebar: "auto",
        nav: [
            { text: "首页", link: "/" },
            { text: "flowable", link: "/flowable/Flowable课件-基础篇" },
            { text: "Java", link: "/cs/java/Java 基础" },
            { text: "操作系统", link: "/cs/system/Linux" },
            { text: "计算机网络", link: "/cs/net/HTTP" },
            { text: "其他", link: "/cs/others/面向对象思想" }
        ],
        sidebar: {
            "/flowable/": [
                {
                    title: "flowalbe 学习",
                    collapsable: true,
                    children: ["Flowable课件-基础篇", "Flowable课件-高级篇"],
                }
            ],
            "/cs/others/": [
                {
                    title: "工具",
                    children: [
                        "Docker",
                        "构建工具",
                        "Git"
                    ]
                },
                {
                    title: "其他",
                    children: [
                        '代码风格规范', '代码可读性', '分布式', '攻击技术', '集群', '面向对象思想', '正则表达式'
                    ]
                }
            ],
            "/cs/system/": [
                "Linux",
                {
                    title: "计算机操作系统",
                    collapsable: false,
                    children: [
                        '计算机操作系统 - 目录', '计算机操作系统 - 概述', '计算机操作系统 - 进程管理', '计算机操作系统 - 链接', '计算机操作系统 - 内存管理', '计算机操作系统 - 设备管理', '计算机操作系统 - 死锁', '计算机操作系统'
                    ]
                }
            ],
            "/cs/net/": [
                "HTTP",
                "Socket",
                {
                    title: "计算机网络",
                    collapsable: false,
                    children: [
                        '计算机网络 - 目录', '计算机网络 - 传输层', '计算机网络 - 概述', '计算机网络 - 链路层', '计算机网络 - 网络层', '计算机网络 - 物理层', '计算机网络 - 应用层', '计算机网络'
                    ]
                }
            ],
            "/cs/java/": [
                'Java 并发', 'Java 基础', 'Java 容器', 'Java 虚拟机', 'Java IO'
            ]
        }
    }
};
