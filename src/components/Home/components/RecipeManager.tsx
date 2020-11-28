import React, {useContext, useState} from 'react';
import {
    IonButton,
    IonGrid,
    IonCol,
    IonRow} from '@ionic/react';
import {CookUpContext} from '../../Providers/CookUpProvider';
import {getBestMatchRecipes} from '../datalayer/repository';
import RecipeCard from './RecipeCard';
import Recipe from '../Models/Recipe';

const RecipeManager:React.FC = () => {

    const [recipeArray, setRecipeArray] = useState(new Array<Recipe>());
    const {selectedIngredients, selectedTags} = useContext(CookUpContext);

    function handleRecipeSubmit(ingredientsHad:string[], tagsHad:string[]){
        getBestMatchRecipes(ingredientsHad, tagsHad)
        .then(res => {
            console.log(res);
            setRecipeArray(res.data)
        })
        .catch(error => {
            console.log(error);
            alert('Something went wrong... Please try again');
        });
    }

    let recipeCards = [];
    for(let recipe of recipeArray){
        recipeCards.push(
            <IonCol sizeSm="12" sizeMd="6" sizeLg="4" key={recipe.recipeID}>
                <RecipeCard recipe={recipe} />
            </IonCol>
        );
    }
    return(
        <IonGrid>
            <IonRow>
                <IonCol sizeSm="12">
                    <IonButton onClick={() => handleRecipeSubmit(selectedIngredients, selectedTags)}>
                        Get recipes!
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                {recipeCards}
            </IonRow>
        </IonGrid>
    )
}

export default RecipeManager;