

//   Ronald Kiefer
//    ר ו נ  א ל ד 
//   February 24, 2022
//   rest-rant application back end programming
//   boot camp


require('dotenv').config()  //configuration
const express = require('express')// dependency
const app = express()//configuration
const PORT = process.env.PORT


// MIDDLEWARE
app.set('views', __dirname + '/views')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// places
app.use('/places', require('./controllers/places'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})//home page


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen
app.listen(PORT, () => {
    console.log('nomming at port ' + PORT)
})
