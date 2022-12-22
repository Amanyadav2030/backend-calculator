const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    category:{type:String,required:true},
    type:{type:String,required:true}, 
    difficulty:{type:String,required:true}, 
    question:{type:String,required:true}, 
    correct_answer:{type:String,required:true}, 
    incorrect_answers:{type:Array,required:true}, 
}
)
const Question = mongoose.model('question',QuestionSchema);
module.exports  = Question;
// category: "Entertainment: Video Games",
// type: "multiple",
// difficulty: "hard",
// question: "In the Super Mario Bros. Series, what is Yoshi&#039;s scientific name?",
// correct_answer: "T. Yoshisaur Munchakoopas",
// incorrect_answers: [
// "Yoshi",
// "T. Yoshisotop Munchakoopas",
// "Yossy"
// ]
