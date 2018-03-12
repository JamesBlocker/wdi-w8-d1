const
    express = require('express'),
    app = express(),
    ejsLayouts = require('express-ejs-layouts'),
    PORT = 3000

app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    var info = {
        title: 'Hello'
    }
    res.render('index', {info})
})

app.get('/about', (req, res) => {
    // var info = {
    //     title: "About me"
    // }
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/food', (req, res) => {
    info = {
        foods: ["Pizza", "Tacos", "Burgers"]
    }
    res.render('food', {info})
})

app.listen(PORT, (err) => {
    console.log( err || `Server running on ${PORT}`)
})