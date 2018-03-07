<template>
    <div class="box-body table-responsive no-padding">
        <table class="table table-striped">
            <thead>
            <tr>
                <th v-for="header in headers">{{header.name}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in content">
                <td v-for="header in headers">
                    <template v-if="'fieldName' in header">
                        {{ row[header.fieldName] }}
                    </template>
                    <template v-else>
                        <component :is="header.componentName" :row="row"></component>
                    </template>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="12">
                    <row-per-page label="Boards RPP"
                                  :options="RppOptions"
                    >
                    </row-per-page>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import RowPerPage from '../RowsPerPage/row-per-page'
    export default {
        name: "vue-table",
        components: {
            RowPerPage
        },
        props:{
            headers: {
                type: Array,
                default: () => []
            },
            content: {
                type: Array,
                default: () => []
            },
        },
        data () {
            return {
                RppOptions: [10, 20, 50, 100]
            }
        }
    }
</script>

<style scoped>
</style>