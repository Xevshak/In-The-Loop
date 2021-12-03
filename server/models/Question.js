const { Schema } = require('mongoose');

const questionSchema = new Schema({
    question: {
     type:String,
     required: true,
    },
    correct: {
     type: Boolean,
    },
    title: {
     type: String,
     required: true
    },
    choices: {
     type: Array,
     required: true
    },
    answer: {
     type: String,
     required: true
    },
});

module.exports = questionSchema