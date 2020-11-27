"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var csv = require('csv-parser');
var fs = require('fs');
function convertStringedArrayToArray(stringedArray) {
    var newString = removeExtraSequentialWhitespaces(stringedArray);
    newString = newString.replace(/[\[\]]+/g, '');
    var arr = newString.split("',");
    arr = arr.map(function (word) { return cleanUpString(word); });
    return arr;
}
function cleanUpString(word) {
    return word.replace(/\s+([.,!":])/g, '$1').replace(/\s+/g, ' ').replace(/['"]+/g, '').trim();
}
function removeExtraSequentialWhitespaces(word) {
    var newString = word.replace(/\s+/g, ' ').trim();
    return newString;
}
var Recipe = /** @class */ (function () {
    function Recipe(recipeID, recipeName, minutes, description, numberOfIngredients, tags, steps, ingredients) {
        this.recipeID = recipeID;
        this.recipeName = recipeName;
        this.minutes = minutes;
        this.description = description;
        this.numberOfIngredients = numberOfIngredients;
        this.tags = tags;
        this.steps = steps;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
function toTitleCase(word) {
    return word.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function sentenceCase(word) {
    return word.replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
    });
}
var dataToSend = [];
fs.createReadStream('cherry-picked_recipes.csv')
    .pipe(csv())
    .on('data', function (row) {
    var recipeID = row.id;
    var recipeName = sentenceCase(cleanUpString(row.name));
    var minutes = parseInt(row.minutes);
    var description = sentenceCase(cleanUpString(row.description));
    var numberOfIngredients = parseInt(row.n_ingredients);
    var tags = convertStringedArrayToArray(row.tags);
    var steps = convertStringedArrayToArray(row.steps);
    steps = steps.map(function (word) { return sentenceCase(word); });
    var ingredients = convertStringedArrayToArray(row.ingredients);
    var rec = new Recipe(recipeID, recipeName, minutes, description, numberOfIngredients, tags, steps, ingredients);
    dataToSend.push(rec);
})
    .on('end', function () {
    console.log('CSV file successfully processed');
    console.log('Sending to database...');
    axios_1["default"]({
        method: 'GET',
        url: 'http://localhost:5001/cookup-fdf96/us-central1/createRecipes',
        data: dataToSend
    }).then(function (response) { return console.log(response); })["catch"](function (error) { return console.log(error); });
});
