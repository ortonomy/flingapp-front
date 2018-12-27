const Express = require('express')
const app = new Express()
const PORT = process.env.PORT || 3000

app.use(Express.static('dist/'))

app.listen(PORT, () => {
  console.log(`App up on: ${PORT}`)
})
