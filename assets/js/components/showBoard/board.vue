<template>

</template>

<script>
    import RowPerPage from '../RowsPerPage/row-per-page'
    export default {
        name: "board",
        components: {
            RowPerPage
        },

        data () {
            return {
                rowPerPageOptions: [10, 20, 50, 100],
            }
        }
    }
</script>

<style scoped>

</style>