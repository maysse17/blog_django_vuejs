<template>
    <vue-table :headers="headers"
               :content="content"
    >

    </vue-table>
</template>

<script>
    import VueTable from '../components/vueTable/vue-table'

    export default {
        name: "board-app",
        components: {
            VueTable
        },
        data () {
            return {
                headers: [
                    {name: 'Name', fieldName: 'name'},
                    {name: 'Description', fieldName: 'description'},
                    {name: 'Date', fieldName: 'createdAt'},
                    {name: 'Author', fieldName: 'user'},
                ]
            }
        },
        computed: {
            content () {
                return this.$store.getters.boards;
            }
        },
        created () {
            this.$store.dispatch('init');
        }
    }
</script>

<style scoped>

</style>