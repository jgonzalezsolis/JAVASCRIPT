const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [6, "First name must be at least 6 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [6, "First name must be at least 6 characters long"]
    }
},
{timestamps: true}
);

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;