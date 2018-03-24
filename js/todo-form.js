Vue.component('todo-form', {
    template: `
        <form class="todo-form" @submit.prevent="submit">
            <input class="textfield" v-model="value">
            <button class="button" type="submit" v-bind:disabled="!value">Добавить</button>
        </form>
    `,

    data() {
        return {
            value: ''
        };
    },

    methods: {
        submit() {
            this.$emit('add', this.value);
            this.value = '';
        }
    }
});