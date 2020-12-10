import React, {useContext, useEffect, useState} from 'react';
import {IonModal,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton} from '@ionic/react';
import Recipe from '../Models/Recipe';
import {getImageForRecipe} from '../datalayer/repository';
import {CookUpContext} from '../../Providers/CookUpProvider';

import '../styles/RecipeCard.css';
import { count } from 'console';


const RecipeCard:React.FC<{recipe:Recipe}> = ({recipe}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const {selectedIngredients} = useContext(CookUpContext);
    const [url, setUrl] = useState('');
    useEffect(() => {
        getImageForRecipe(recipe.recipeID).
        then((url) => {
            setUrl(url);
        }).catch((error) => {
            getImageForRecipe("default").
            then((url) => {
                setUrl(url);
            }).catch((error) => {
                console.log(error);
            })
        })
    }, []);
    let recipeName = recipe.recipeName;
    let recipeDescription = recipe.description;
    let ingredients = recipe.ingredients.map((ingredient) =>
        <li key={ingredient}>
            {ingredient}
        </li>
    );

    let steps = recipe.steps.map((step) =>
        <li key={step}>
            {step}
        </li>
    );

    let countMatching = 0;
    for(let ing of selectedIngredients){
        if(recipe.ingredients.includes(ing)){
            countMatching++;
        }
    }
    let matchingMessage:string = "You have: " + countMatching + "/" + recipe.ingredients.length + " ingredients";
    return(
        <React.Fragment>
            <IonModal isOpen={isModalOpen} onDidDismiss={() => setModalOpen(false)}>
                <IonCard>
                    <IonCardHeader>
                        <IonImg className="recipe-img img-fluid" src={url}
                        />
                        <IonCardTitle>
                            {recipeName}
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="modal-body">
                        <p>
                            {recipeDescription}
                        </p>
                        <p>
                            <span style={{fontWeight:"bold", fontSize:"1.1em"}}>Preparation Time: </span> 
                            {recipe.minutes}
                        </p>
                        <h2 style={{fontWeight:"bold"}}>Ingredients</h2>
                        <ul>
                            {ingredients}
                        </ul>
                        <h2 style={{fontWeight:"bold"}}>Preparation</h2>
                        <ol>
                            {steps}
                        </ol>
                    </IonCardContent>
                </IonCard>
            </IonModal>
            <IonCard className="recipe-card">
                <IonCardHeader>
                    <IonImg className="recipe-img img-fluid" src={url}
                    />
                    <IonCardTitle>{recipeName}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <p>{matchingMessage}</p>
                    <IonButton onClick={() => setModalOpen(true)}>
                        Show More
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </React.Fragment>
    );
}

export default RecipeCard;
