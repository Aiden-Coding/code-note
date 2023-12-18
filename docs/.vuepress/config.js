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
            { text: 'flowable', link: '/flowable/' }
        ], sidebar: {
            '/flowable/': [
                {
                    title: 'flowalbe 学习',
                    collapsable: true,
                    children: ['Flowable课件-基础篇', 'Flowable课件-高级篇']
                }
            ],
            '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
        },

    }
}
