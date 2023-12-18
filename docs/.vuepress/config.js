module.exports = {
    base: '/code-note/',
    title: '学习笔记',
    description: '...',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { text: 'flowable', link: '/flowable/Flowable课件-基础篇' },
            { text: 'test', link: '/language/' }
        ], sidebar: {
            '/flowable/': [
                {
                    title: 'flowalbe 学习',
                    collapsable: true,
                    children: ['Flowable课件-基础篇', 'Flowable课件-高级篇']
                }
            ],
            '/language/': [
                //Group1
                {
                    title: 'Group1',
                    children: [
                        'c'
                        // {
                        //     title: 'chinese',   // 必要的
                        //     children: ['c']
                        // }
                    ]
                },
                //Group2
                {
                    title: 'Group2',
                    children: [
                        //小组A
                        {
                            title: 'A',
                            children: ['a'],
                        },
                        //小组B
                        {
                            title: 'B',
                            children: ['b'],
                        },
                    ],
                },

            ],
            '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
        },

    }
}
