import React, {useEffect, useState} from 'react';
import {IonModal,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton} from '@ionic/react';
import Recipe from '../Models/Recipe';
import {getImageForRecipe} from '../datalayer/repository';
import '../styles/RecipeCard.css';


const RecipeCard:React.FC<{recipe:Recipe}> = ({recipe}) => {
    const [isModalOpen, setModalOpen] = useState(false);
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
        <p>
            {ingredient}
        </p>);
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
                    <IonCardContent>
                        <p>
                            {recipeDescription}
                        </p>
                        <h2>Ingredients</h2>
                        {ingredients}
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
                    <IonButton onClick={() => setModalOpen(true)}>
                        Show More
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </React.Fragment>
    );
}

export default RecipeCard;
