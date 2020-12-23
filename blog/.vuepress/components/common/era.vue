<template>
    <main class="era">
        <div class="eraItem" v-for="(item, $index) in eraData" :key="$index">
            <div class="">

            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: '',
        props: {
            genealogyData: {
                type: Array,
                default: () => ([
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
                ])
            },
            eraData: {
                type: Array,
                default: () => (['一代', '二代', '三代', '四代', '五代', '六代', '七代', '八代', '九代', '十代', '十一代', '十二代'])
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

</style>
