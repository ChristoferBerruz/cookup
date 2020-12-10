import axios, {AxiosResponse} from 'axios';
import Recipe from '../Models/Recipe';
import {storage} from '../../../../src/firebase';

export interface ingredientsData{
    [key:string]:string[];
}

export function getAvailableIngredients():Promise<AxiosResponse<ingredientsData>> {
    return axios.get<ingredientsData>(`http://localhost:5001/cookup-fdf96/us-central1/getIngredientsData`);
}


export function getBestMatchRecipes(ingredients:string[], tags:string[]):Promise<AxiosResponse<Recipe[]>>{
    return axios({
        method: "POST",
        url: `http://localhost:5001/cookup-fdf96/us-central1/getBestRecipes`,
        data: {
            ingredients:ingredients,
            tags:tags
        }
    });
}

export function getAvailableTags():Promise<AxiosResponse<string[]>>{
    return axios.get<string[]>(`http://localhost:5001/cookup-fdf96/us-central1/getAvailableTags`);
}

export function getImageForRecipe(recipeID:string): Promise<any>{
    return storage.ref("recipe_images/"+recipeID+'.jpg').getDownloadURL();
}