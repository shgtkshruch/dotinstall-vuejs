(() => {
'use strict';

  const likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: 'Like',
      },
    },
    data() {
      return {
        count: 0
      };
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
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
