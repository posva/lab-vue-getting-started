new Vue({
  el: '#app',
  data: { // You shouldn't change the "data" part
    company: 'Ironhack',
    htmlContent: 'I am <strong>strong</strong>',
    x: 6,
    y: 7,
    elementClass: 'red',
    age: (this.x*this.y)-18,
    sentence1: 'This text is writen normally but displayed in uppercase',
    sentence2: 'This text is reversed',
    sentence3: 'This text is in uppercase and reversed',
  },
  methods: { // You shouldn't change the "methods" part
    displayAlert: function() {
      alert("The best company is " + this.company)
    }
  },
  filters: { // You must add a "capitalize" and "reverse" filters
    // TODO
  },
})
