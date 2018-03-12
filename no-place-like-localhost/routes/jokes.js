const
    express = require('express'),
    jokesRouter = new express.Router(),
    jokesCntrl = require('../controllers/jokes.js')

jokesRouter.get("/", jokesCntrl.index)
jokesRouter.post("/", jokesCntrl.create)

jokesRouter.get("/new", jokesCntrl.new)
jokesRouter.get("/:id/edit", jokesCntrl.edit)

jokesRouter.get("/:id", jokesCntrl.show)
jokesRouter.patch("/:id", jokesCntrl.update)
jokesRouter.delete("/:id", jokesCntrl.destroy)



module.exports = jokesRouter