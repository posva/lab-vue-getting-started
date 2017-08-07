# Vue.js - Day 1

## Resources

- Vue.js: [Introduction](https://vuejs.org/v2/guide/index.html)
- Vue.js: [The Vue Instance](https://vuejs.org/v2/guide/instance.html)
- Vue.js: [Template Syntax](https://vuejs.org/v2/guide/syntax.html)
- Vue.js: [Computed Properties and Watchers](https://vuejs.org/v2/guide/computed.html)



## Learning goals

After theses courses, you will:
- Understand what is Vue.js and in which case it is used
- Be able to create your first Vue.js application
- Understand the steps used by Vue.js (lifecyle)
- Learn how to use the Vue.js syntax
- Use directives, filters, computed properties and watchers



## Exercices

### Exercice 1
Instead of displaying `Hello Vue`, display `Hola Ironhack` just by changing the _index.js_ file. 

@[Display Time]({"project": "vue-simple", "stubs": ["hello-world/index.html", "hello-world/index.js"], "command": "./run.sh hello-world -s"})


### Exercice 2
Instead of displaying `Hello Vue`, display the current time like this: 
`The current time is 09:42` (if the hour is _09:42_). Don't worry if the time is not dynamically updating.

@[Display Time]({"project": "vue-simple", "stubs": ["1-display-dates/index.html", "1-display-dates/index.js", "1-display-dates/hint1.md"], "command": "./run.sh 1-display-dates -s"})

### Exercice 3

Tutorial: [Instance-Lifecycle-Hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)

Add the following lifecyle hooks in the _index.js_ file and display the value of `number` in the console to see what happens:
- `created` 
- `mounted` 
- `beforeUpdate` 
- `updated` 
- `destroyed` 

@[Display Time]({"project": "vue-simple", "stubs": ["1-lifecycle/index.html", "1-lifecycle/index.js", "1-lifecycle/hint1.md", ], "command": "./run.sh 1-lifecycle -s"})


### Exercice 4

Tutorial: [Template Syntax](https://vuejs.org/v2/guide/syntax.html)

Adapt _index.html_ to display the waited answer. For the 3 last ones (`sentence1`, `sentence2`, `sentence3`), you will need to change `filters` in _index.js_.

@[Template syntax]({"project": "vue-simple", "stubs": ["1-basic-template-syntax/index.html", "1-basic-template-syntax/index.js", "1-basic-template-syntax/style.css", "1-basic-template-syntax/hint1.md", "1-basic-template-syntax/hint2.md"], "command": "./run.sh 1-basic-template-syntax -s"})


### Exercice 4

Tutorial: [Computed Properties and Watchers](https://vuejs.org/v2/guide/computed.html)


(Work in progress)
