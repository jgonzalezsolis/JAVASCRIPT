const Jokes = require('../models/jokes.model');


module.exports = { 
    allTheJokes : (req, res) => {
        Jokes.find({})
            .then((jokes) => {
                res.json(jokes)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in the find all houses controller', error: err })
            })
    },
    getOneJoke: (req,res) =>{
        Jokes.findOne({ _id:req.params.id })
            .then((onejoke)=>{
                res.json(onejoke)
            })
            .catch((err)=>{
                res.json({message: 'error in the controllers in the get one joke', error: err })
            })
    },
    createNewJoke: (req,res)=> {
        Jokes.create(req.body)
            .then(newjoke=>{
                res.json({ newjoke })
            })
            .catch((err)=>{
                res.json({ message: 'error in the controllers in the create one joke', error: err })
            })
    },
    editJoke: (req,res)=> {
        Jokes.findOneAndUpdate({_id:req.params.id} , req.body, { new: true, runValidators: true })
            .then(updatedJoke=>{
                res.json({ updatedJoke })
            })
            .catch((err)=>{
                res.json({ message: 'error in the controllers in the update one joke', error: err })
            })
    },
    deleteJoke: (req,res)=> {
        Jokes.deleteOne({_id:req.params.id})
            .then(result=>{
                res.json({ result: result })
            })
            .catch((err)=>{
                res.json({ message: 'error in the controllers in the delete one joke', error: err })
            })
    },
} 

