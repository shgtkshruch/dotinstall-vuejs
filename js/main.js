(() => {
'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [],
    },
    watch: {
      todos: {
        handler() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true,
      },
    },
    mounted() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem() {
        const item = {
          title: this.newItem,
          isDone: false,
        }
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem(i) {
        if (confirm('are you sure?')) {
          this.todos.splice(i, 1);
        }
      },
      purge() {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining() {
        return this.todos.filter(todo => !todo.isDone)
      }
    }
  });
})();
