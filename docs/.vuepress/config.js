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
            { text: "others", title: "其他", link: "/cs/others/面向对象思想" }
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
            ]
        }
    }
};
