const TodoItem = {
    template: `
        <div class="todo-item" :class="{completed: todo.completed}">
            <input class="checkbox" type="checkbox" v-model="todo.completed">

            <input class="textfield" v-if="editing" v-model="todo.title">
            <span class="title" v-else>{{ todo.title }}</span>

            <button class="button icon" v-if="editing" @click="save">
                <i class="material-icons">save</i>
            </button>

            <button class="button icon" v-else @click="edit">
                <i class="material-icons">edit</i>
            </button>

            <button class="button icon" @click="remove">
                <i class="material-icons">delete</i>
            </button>
        </div>
    `,

    data: () => ({
        editing: false
    }),

    methods: {
        edit() {
            this.editing = true;
        },

        remove() {
            this.$emit('remove', this.todo.id);
        },

        save() {
            this.editing = false;
            this.$emit('edit', { id: this.todo.id, title: this.todo.title });
        }
    },

    props: {
        todo: {
            type: Object,
            require: true
        }
    }
};