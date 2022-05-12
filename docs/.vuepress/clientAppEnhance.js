import {defineClientAppEnhance} from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ClickAble from './ClickAble.vue'

export default defineClientAppEnhance(({app, router, siteData}) => {
    app.use(ElementPlus)
    app.component('ClickAble', ClickAble)
})
