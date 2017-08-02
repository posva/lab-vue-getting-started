Vue.filter('uppercase', str => str.toUpperCase())

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue'
  }
})
