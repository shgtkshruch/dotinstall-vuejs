(() => {
'use strict';

  const likeComponent = Vue.extend({
    template: '<button>Like</button>'
  });

  const app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent,
    },
  });

})();
