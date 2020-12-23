<template>
    <div class="genealogy">
        <Era :genealogyData="genealogyData"></Era>
    </div>
</template>

<script>
    import Era from './common/era'

    export default {
        name: 'genealogy',
        data() {
            return {
                genealogyData: [
                    {
                        name: '夏',
                        sex: 'man',
                        son: '子四',
                        daughter: '无',
                        person: [
                            {
                                name: '中一',
                                sex: 'man',
                                son: '子二',
                                daughter: '无',
                                children: [
                                    {
                                        name: '华二',
                                        sex: 'man',
                                        children: []
                                    },
                                    {
                                        name: '华一',
                                        sex: 'woman',
                                        children: []
                                    }
                                ]
                            },
                            {
                                name: '二哥',
                                sex: 'man',
                                son: '子二',
                                daughter: '无',
                                children: [
                                    {
                                        name: '华二',
                                        sex: 'man',
                                        children: []
                                    },
                                    {
                                        name: '华一',
                                        sex: 'woman',
                                        children: []
                                    }
                                ]
                            },
                            {
                                name: '三',
                                sex: 'man',
                                children: []
                            },
                            {
                                name: '龙发',
                                sex: 'man',
                                son: '无',
                                daughter: '无',
                                children: []
                            }
                        ]
                    }
                ],
                eraData: ['一代', '二代', '三代', '四代', '五代', '六代', '七代', '八代', '九代', '十代', '十一代', '十二代']
            }
        },
        components: {
            Era
        },
        methods: {}
    }
</script>

<style scoped>

</style>
