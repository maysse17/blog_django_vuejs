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
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: "vue-table",
        props:{
            headers: {
                type: Array,
                default: () => []
            },
            content: {
                type: Array,
                default: () => []
            },
        }
    }
</script>

<style scoped>

</style>