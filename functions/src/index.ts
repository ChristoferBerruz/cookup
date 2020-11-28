import * as functions from 'firebase-functions';

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const cors = require('cors')({origin: true});

export const getIngredientsData = functions.https.onRequest(async (request, response)=>{
  cors(request, response, async () => {
      const recipes = await db.collection('ingredients').get();
      var result:any= {}
      recipes.forEach((doc:any) => {
        result[doc.id] = doc.data().ingredients;
      });
      response.send(result)
    });
});

export const createRecipes = functions.https.onRequest(async (request, response) => {
  let payload:any = request.body;
  try{
    payload.forEach((document:any) => {
      const recipeName:string = document.recipeName;
      const minutes:number = document.minutes;
      const description:string = document.description;
      const numberOfIngredients:number = document.numberOfIngredients;
      const tags:string[] = document.tags;
      const steps:string[] = document.steps;
      const ingredients:string[] = document.ingredients;
      const recipeID:string = document.recipeID;
      
      db.collection("Recipes").doc(recipeID).set({
        recipeName:recipeName,
        minutes:minutes,
        description:description,
        numberOfIngredients:numberOfIngredients,
        tags:tags,
        steps:steps,
        ingredients:ingredients
      }).then()
        .catch();
    });
    response.send("Succesfully created");
  }catch (error){
    response.statusCode = 400;
    response.send("Bad request");
  }
});

export const populateIngredients = functions.https.onRequest(async (request, response)=>{
  let payload:any = request.body;
  try{
    payload.forEach((document:any) => {
      const sectionName:string = document.sectionName;
      const ingredients:string[] = document.ingredients;
      db.collection("ingredients").doc(sectionName).set({
        sectionName:sectionName,
        ingredients:ingredients
      }, {merge:true}).then().catch();
    });
    response.send("Succesfully updated ingredients list for sections");
  }catch(error){
    response.statusCode = 400;
    response.send("Bad request");
  }
});


function getScore(ingredientsHad:string[], ingredientsPresent:string[],
  tagsHad:string[], tagsPresent:string[]): any{
    let matchingIngredients = 0;
    for(let ingredient of ingredientsHad){
      if(ingredientsPresent.includes(ingredient)){
        matchingIngredients += 1;
      }
    }

    let matchingTags = 0;
    for(let tag of tagsHad){
      if(tagsPresent.includes(tag)){
        matchingTags += 1;
      }
    }

    return {
      countMatchingIngredients:matchingIngredients,
      countMatchingTags:matchingTags
    }
  }

// Main function that receives tags and ingredients to find best match
export const getBestRecipes = functions.https.onRequest(async (request, response)=>{
  let payload:any = request.body;
  try{

    let recipesWithScores:any[] = [];
    let ingredients:string[] = payload.ingredients? payload.ingredients : [];
    let tags:string[] = payload.tags? payload.tags : [];
    let snapshot = await db.collection('Recipes').get();

    snapshot.forEach((doc:any) => {
      let data = doc.data();
      let {countMatchingIngredients, countMatchingTags} = getScore(
        ingredients, data.ingredients, tags, data.tags
      );

      recipesWithScores.push(
        {
          recipeID:doc.id,
          ingredientScore:countMatchingIngredients,
          tagScore:countMatchingTags
        }
      );
    });

    // Sorting the values
    recipesWithScores.sort(function (a:any, b:any){
      return b.ingredientScore - a.ingredientScore || b.tagScore - a.tagScore;
    });

    console.log(recipesWithScores);

    response.send('Success...');
  }catch(error){
    console.log(error);
    response.statusCode = 400;
    response.send('Bad request');
  }
});