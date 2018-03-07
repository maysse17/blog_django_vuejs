<template>
    <ul class="pagination pagination-sm pull-right">
        <li v-if="pagination.hasPrevious" ><a href="?page={{ pagination.previousPageNumber }}">&laquo;</a></li>
        <li v-else class="disabled"><span>&laquo;</span></li>
    {% for page_number in page_obj.paginator|page_range:page_obj.number %}
        {%if page_number%}
            {% if page_number == page_obj.number %}
                <li class="active"><span>{{ page_number }} <span class="sr-only">(current)</span></span></li>
            {% else %}
                <li><a href="?page={{ page_number }}">{{ page_number }}</a></li>
            {% endif %}
        {% else %}
             <li class="disabled"><a href="#">...</a></li>
        {% endif %}
    {% endfor %}
        <li v-if="pagination.hasNext"><a href="?page={{ pagination.nextPageNumber }}">&raquo;</a></li>
        <li v-else class="disabled"><span>&raquo;</span></li>
    </ul>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            pagination: {
                type: Object,
                require: true
            },
            pageRangeDisplayed: {
                type: Number,
                default: 4
            },
            MarginPagesDisplayed: {
                type: Number,
                default: 2
            }
        },
        methodes: {
            pages (number) {
                if (this.pagination.numPages <= this.pageRangeDisplayed) {
                    return _.range(1, this.pagination.numPages + 1)
                }

                let result = Array()

                let left_side = this.pageRangeDisplayed/2
                let right_side = this.pageRangeDisplayed - left_side

                if (number > this.pagination.numPages - left_side){
                    right_side = this.pagination.numPages - number
                    left_side = this.pageRangeDisplayed - right_side
                }
                else if (number < PAGE_RANGE_DISPLAYED/2){
        left_side = number
        right_side = PAGE_RANGE_DISPLAYED - left_side
            }
        }
    }
</script>

<style scoped>

</style>