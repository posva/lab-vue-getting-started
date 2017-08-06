*You should look hints only if your are stuck on the exercice!*

For the `updated` hook, you can write it like that:

```
new Vue({
  el: '#app',
  // ...
  updated: function () {
    console.log('updated', this.number);
  }
}
```

It should display the following line in the console, just after clicking on the button the first time.
> updated 2