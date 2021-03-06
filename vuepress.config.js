const path = require("path")
const {defaultTheme} = require('@vuepress/theme-default')
const {viteBundler} = require('@vuepress/bundler-vite')
const {backToTopPlugin} = require('@vuepress/plugin-back-to-top')
const {mediumZoomPlugin} = require('@vuepress/plugin-medium-zoom')
const {nprogressPlugin} = require('@vuepress/plugin-nprogress')
const {searchPlugin} = require('@vuepress/plugin-search')
const sidebar = require('./docs/sidebarConfig/index')

module.exports = {
    // 如果element-plus在打包中不报错没必要！
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                noExternal: ['element-plus'],
            },
        },
        vuePluginOptions: {},
    }),
    base: '/Ashore/',
    lang: 'zh-CN',
    title: 'Ashore',
    description: 'A learning platform for in-service personnel created for 199 MBA MPA MEM postgraduate',
    public: './public',
    alias: {
        '@alias': path.resolve(__dirname, './path/to/some/dir'),
    },
    plugins: [
        backToTopPlugin(),
        //图片缩放
        mediumZoomPlugin({}),
        //切换页面进度条
        nprogressPlugin(),
        //本地搜索
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/README',
        }),
    ],
    head: [['link', {rel: 'icon', href: 'https://xsdream.github.io/Ashore/images/logo.png'}]],
    theme: defaultTheme({
        //编辑此页功能
        editLink: false,
        //最近更新时间
        lastUpdated: true,
        //启动贡献者列表
        // contributors:true,
        //贡献者名称
        // contributorsText:'xsdream',
        // 在这里进行配置
        logo: '/images/logo.png',
        //导航中logo的链接
        home: '/README.md',
        //404 提示
        notFound: ['Page not found'],
        //导航栏
        navbar: [
            // English
            {
                text: 'English',
                children: [
                    {
                        text: 'Word', //单词
                        link: '/English/Word'
                    },
                    {
                        text: 'Read', //阅读
                        link: '/English/Read'
                    },
                    {
                        text: 'Grammar', //语法
                        link: '/English/Grammar'
                    },
                ],
            },
            // Mathematics 数学
            {
                text: 'Mathematics',
                children: [
                    {
                        text: 'Formula', //公式
                        link: '/'
                    },
                    {
                        text: 'examination', //题目
                        link: '/'
                    },
                ],
            },
            // Logic 逻辑
            {
                text: 'Logic',
                children: []
            },
            // Writing 写作
            {
                text: 'Writing',
                children: []
            },
            {
                text: 'myPlan',
                link: 'https://docs.qq.com/sheet/DSXpXY05TZHFkS1NT?u=57c00e70916744e3a71c95fa5d4e5597&tab=a3rr7z'
            }
        ],
        sidebar: sidebar,
        // 仓库地址
        repo: 'https://github.com/xsdream/Ashore',
    }),
}
