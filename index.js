const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'foxTest1')))
  .set('views', path.join(__dirname, 'foxTest1'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('home'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
