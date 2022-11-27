const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, default: "N/A"},
    description: {type: String, default: "Please refer to Google"},
    duration: {type: String, default: "Use your best Judgement :)"}
});

const Recipe = mongoose.model("Recipe", recipeSchema);


module.exports = Recipe;
