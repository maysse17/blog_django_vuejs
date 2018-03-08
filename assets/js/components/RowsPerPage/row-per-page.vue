<template>
    <div class="form-horizontal">
        <label>{{label}}</label>
        <select class="form-control select2" v-on:change="onRowchanged()" v-model="selectedValue">
            <option v-for="value in options"> {{value}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'row-per-page',
        props: {
            label: {
                type: String,
                default: 'Row Per Page'
            },
            options: {
                type: Array,
                default: 10,

                validator: function (values) {
                    if (values.length === 0) {
                        return false
                    }
                    for (let value in values) {
                        if (!Number.isInteger(values[value])) return false
                    }
                    return true
                }
            }
        },

        data () {
            return {
                selectedValue: 10
            }
        },

        methods: {
            onRowchanged: function () {
                this.$store.dispatch('Rpp/updateRpp', this.selectedValue);
            }
        },

        mounted: function () {
            this.selectedValue = this.options[0]
        }
    }
</script>

<style scoped>
    .select2 {
        width: auto;
    }

</style>
