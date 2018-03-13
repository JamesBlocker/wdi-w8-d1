const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    logger  = require('morgan'),
    bodyParser = require('body-parser'),
    ejsLayouts = require('express-ejs-layouts'),
    jokesRouter = require('./routes/jokes'),
    PORT = 3000

mongoose.connect('mongodb://localhost/no=place-like-localhost', (err => {
    console.log(err || "Connected to MongoDB")
}))

// declaring an option - this is my views folder
app.set('views', `${__dirname}/views`)
// any folders in the view files will be ejs type
app.set('view engine', 'ejs')

// public 
app.use(express.static(`${__dirname}/public`))

// middleware
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(ejsLayouts)

// routes
app.get('/', (req, res) => {
    res.send("The Root Route!")
})

// all jokes routes:
app.use('/jokes', jokesRouter)

// server
app.listen(PORT, (err) => {
    console.log( err || `Server is running on ${PORT}`)
})