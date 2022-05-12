<template>

</template>


<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        /**
         * 阅读点击上色功能
         */
        const li_HTMLcollection = document.getElementsByClassName('theme-default-content')[0].getElementsByTagName('li')
        const li_Array = Array.from(li_HTMLcollection)
        li_Array.forEach((el) => {
            el.onclick = function (e) {
                const el = e.path[0]
                const style = el.style.getPropertyValue('color')
                if (style) {
                    el.style.setProperty('color', '');
                } else {
                    el.style.setProperty('color', '#1D828A', 'important');
                }
            }
        })
    })
</script>

<style lang="scss" scoped>
</style>
