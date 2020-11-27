import axios from 'axios';

const csv = require('csv-parser');
const fs = require('fs');


function convertStringedArrayToArray(stringedArray:string) : string[] {
  let newString = removeExtraSequentialWhitespaces(stringedArray);
  newString = newString.replace(/[\[\]]+/g, '');
  let arr = newString.split("',");
  arr = arr.map((word) => cleanUpString(word));
  return arr;
}

function cleanUpString(word:string):string{
  return word.replace(/\s+([.,!":])/g, '$1').replace(/\s+/g, ' ').replace(/['"]+/g, '').trim();
}

function removeExtraSequentialWhitespaces(word:string):string{
  let newString = word.replace(/\s+/g, ' ').trim();
  return newString;
}

class Recipe{
  recipeName:string;
  minutes:number;
  description:string;
  numberOfIngredients:number;
  tags:string[];
  steps:string[];
  ingredients:string[];
  recipeID:string

  constructor(recipeID:string, recipeName:string, minutes:number, 
    description:string, numberOfIngredients:number, tags:string[],
    steps:string[], ingredients:string[]){
      this.recipeID = recipeID;
      this.recipeName = recipeName;
      this.minutes = minutes;
      this.description = description;
      this.numberOfIngredients = numberOfIngredients;
      this.tags = tags;
      this.steps = steps;
      this.ingredients = ingredients;
    }
}

function toTitleCase(word:string):string{
  return word.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function sentenceCase(word:string):string{
  return word.replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
    return separator + char.toUpperCase();
    });
}

let dataToSend:Recipe[] = [];

fs.createReadStream('cherry-picked_recipes.csv')
  .pipe(csv())
  .on('data', (row:any) => {
    let recipeID = row.id;
    let recipeName = sentenceCase(cleanUpString(row.name));
    let minutes = parseInt(row.minutes);
    let description = sentenceCase(cleanUpString(row.description));
    let numberOfIngredients = parseInt(row.n_ingredients);
    let tags = convertStringedArrayToArray(row.tags);
    let steps = convertStringedArrayToArray(row.steps);
    steps = steps.map((word) => sentenceCase(word));
    let ingredients = convertStringedArrayToArray(row.ingredients);
    let rec = new Recipe(recipeID, recipeName, minutes, description, numberOfIngredients, tags, steps, ingredients);
    dataToSend.push(rec);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log('Sending to database...');
    axios({
      method:'GET',
      url: 'http://localhost:5001/cookup-fdf96/us-central1/createRecipes',
      data: dataToSend
    }).then((response) => console.log(response))
    .catch((error) => console.log(error));
  });