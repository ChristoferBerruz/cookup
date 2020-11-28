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

export default Recipe;