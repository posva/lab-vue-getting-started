new Vue({
  el: '#app',
  data: {
    number: 1
  },
  methods: {
    pow: function() {
      this.number *= 2;
    }
  }
})
