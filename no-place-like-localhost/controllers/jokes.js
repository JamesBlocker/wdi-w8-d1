const Joke = require('../models/joke.js')

module.exports = {
    index: (req, res) => {
        Joke.find({}, (err, allDemJokes) => {
            res.render('jokes/index', { jokes: allDemJokes})
        })
    },
    
    // show
    show: (req, res) => {
        Joke.findById(req.params.id, (err, thatJoke) => {
            res.render("jokes/show", { joke: thatJoke})
        })
    },

    //new
    new: (req, res) => {
        res.render("jokes/new")
    },

    // create
    create: (req, res) => {
        // 1. build joke object
        // 2. save joke
        Joke.create(req.body, (err, brandNewJoke) => {
            // 3. redirect
            res.redirect("/jokes")
        })
    },

    //edit
    edit: (req, res) => {
        Joke.findById(req.params.id, (err, thatJoke) => {
            res.render("jokes/edit", { joke: thatJoke })
        })
    },
    
    // update
    update: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, (err, updatedJoke) => {
            res.redirect(`/jokes/${req.params.id}`)
        })
    },
    
    // destroy
    destroy: (req, res) => {
        Joke.findByIdAndRemove(req.params.id, (err => {
            res.redirect("/jokes")
        }))
    },
}