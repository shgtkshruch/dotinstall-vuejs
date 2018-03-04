(() => {
'use strict';

  const likeComponent = Vue.extend({
    data() {
      return {
        count: 0
      };
    },
    template: '<button @click="countUp">Like {{ count }}</button>',
    methods: {
      countUp() {
        this.count++;
      },
    },
  });

  const app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent,
    },
  });

})();
