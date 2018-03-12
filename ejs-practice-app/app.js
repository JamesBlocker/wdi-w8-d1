const
    express = require('express'),
    app = express()

app.set('views', `${__dirname}/views`)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    var users = [
        {name: "Jack", email: "jack@gmail.com"},
        {name: "Jill", email: "jill@gmail.com"},
        {name: "Pat", email: "pat@gmail.com"}
    ]

    res.render('index', {title: 'Hola, bienvenido', users: users})
})

app.listen(3000, (err) => {
    console.log(err || 'Server running on port 3000')
})
