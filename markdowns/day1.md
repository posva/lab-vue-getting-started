# Vue.js - Day 1

## Resources

- [Introduction](https://vuejs.org/v2/guide/index.html)
- [The Vue Instance](https://vuejs.org/v2/guide/instance.html)
- [Template Syntax](https://vuejs.org/v2/guide/syntax.html)
- [Computed Properties and Watchers](https://vuejs.org/v2/guide/computed.html)



## Learning goals

After theses courses, you will:
- Understand what is Vue.js and in which case it is used
- Be able to create your first Vue.js application
- Understand the steps used by Vue.js (lifecyle)
- Learn how to use the Vue.js syntax
- Use directives, filters, computed properties and watchers



## Exercices

### Exercice 1
Instead of displaying `Hello Vue`, display the current time like this: 
`The current time is 09:00`

@[Display Time]({"project": "vue-simple", "stubs": ["1-display-dates/index.html", "1-display-dates/index.js", "1-display-dates/hint1.md"], "command": "./run.sh 1-display-dates"})

### Exercice 2

Tutorial: [Instance-Lifecycle-Hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)

Add the following lifecyle hooks in the _index.js_ file and display the value of `number` in the console to see what happens:
- `created` 
- `mounted` 
- `beforeUpdate` 
- `updated` 
- `destroyed` 

@[Display Time]({"project": "vue-simple", "stubs": ["1-lifecycle/index.html", "1-lifecycle/index.js", "1-lifecycle/hint1.md", ], "command": "./run.sh 1-lifecycle"})


### Exercice 3

Tutorial: [Template Syntax](https://vuejs.org/v2/guide/syntax.html)

Adapt _index.html_ to display the waited answer. For the 3 last ones (`sentence1`, `sentence2`, `sentence3`), you will need to change `filters` in _index.js_.

@[Template syntax]({"project": "vue-simple", "stubs": ["1-basic-template-syntax/index.html", "1-basic-template-syntax/index.js", "1-basic-template-syntax/style.css", "1-basic-template-syntax/hint1.md", "1-basic-template-syntax/hint2.md"], "command": "./run.sh 1-basic-template-syntax"})


(Work in progress)
