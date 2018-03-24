Vue.component('todo-filter', {
    template: `
        <div class="todo-filter">
            <a :class="{'is-active': filterBy === 'all'}" @click="filterBy = 'all'">
                <i class="material-icons">list</i>
            </a>

            <a :class="{'is-active': filterBy === 'completed'}" @click="filterBy = 'completed'">
                <i class="material-icons">check_box</i>
            </a>

            <a :class="{'is-active': filterBy === 'uncompleted'}" @click="filterBy = 'uncompleted'">
                <i class="material-icons">check_box_outline_blank</i>
            </a>
        </div>
    `,

    // data: () => ({
    //     value: 'all'
    // }),

    computed: {
        filterBy: {
            get() {
                return this.filter;
            },

            set(value) {
                this.$emit('filter', value);
            }
        }
    },

    // methods: {
    //     handleFilter(value) {
    //         this.$emit('filter', value);
    //     }
    // },

    // watch: {
    //     value() {
    //         this.$emit('filter', this.value);
    //     }
    // },

    props: {
        filter: {
            type: String,
            required: true
        }
    }
});