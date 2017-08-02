Feature('Hello Vue');

Scenario('test something', (I) => {
  I.amOnPage('/')
  I.see('Hello Vue')
})
