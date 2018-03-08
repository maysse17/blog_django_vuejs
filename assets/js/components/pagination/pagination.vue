<template>
    <ul v-show="pages.length != 0" class="pagination pull-right">
        <li v-if="currentPage == 1" class="disabled"><span>&laquo;</span></li>
        <li v-else><a href="1" v-on:click.stop.prevent="onPageClick(1)">&laquo;</a></li>
        <template v-for="page in pages">
            <template v-if="page">
                <li v-if="page==currentPage" class="active">
                    <span>{{ currentPage }} <span class="sr-only">(current)</span></span>
                </li>
                <li v-else>
                    <a href="?page=" :href="page" v-on:click.stop.prevent="onPageClick(page)">{{ page }}</a>
                </li>
            </template>
            <li v-else class="disabled">
                <a href="#">...</a>
            </li>
        </template>
        <li v-if="currentPage == pages[pages.length - 1]" class="disabled"><span>&raquo;</span></li>
        <li v-else><a href="last" v-on:click.stop.prevent="onPageClick('last')">&raquo;</a></li>
    </ul>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            currentPage: {
                type: Number,
                default: 1
            },
            pages: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onPageClick (page) {
                this.$store.dispatch('Pagination/updatePage', page);
            }
        }
    }
</script>

<style scoped>

</style>