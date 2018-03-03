(() => {
'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
      {
        title: 'task 1',
        isDone: false,
      },
      {
        title: 'task 2',
        isDone: false,
      },
      {
        title: 'task 3',
        isDone: true,
      }
      ],
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
    },
    computed: {
      remaining() {
        const items = this.todos.filter((todo) => !todo.isDone)
        return items.length;
      }
    }
  });
})();
