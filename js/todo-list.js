Vue.component('todo-list', {
    template: `
        <div class="todo-list">
            <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="remove" @edit="edit"></todo-item>
        </div>
    `,

    components: {
        'todo-item': TodoItem
    },

    props: {
        todos: {
            type: Array,
            default: []
        },

        remove: {
            type: Function,
            required: true
        },
        
        edit: {
            type: Function,
            required: true
        }
    }
});