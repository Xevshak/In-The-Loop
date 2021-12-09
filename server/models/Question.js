const mongoose = require('mongoose');
const Schema = mongoose.Schema
const questionSchema = new Schema({
    question: {
     type:String,
     required: true,
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
const Question = mongoose.model('Question', questionSchema);
module.exports = Question
