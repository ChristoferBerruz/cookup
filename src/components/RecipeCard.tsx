import React, {Dispatch, useState} from 'react';
import {IonSearchbar, IonTitle, IonItem,
    IonLabel, IonIcon, IonList, IonHeader,
    IonToolbar, IonButtons, IonButton, IonModal, IonChip, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';

interface RecipeCardProps{
    image:any,
    recipeName:string,
    recipeDescription:string,
    isRecipeSelected?:boolean
}
const RecipeCard:React.FC<RecipeCardProps> = ({image, recipeName, recipeDescription, isRecipeSelected}) => {
    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{recipeName}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {recipeDescription}
            </IonCardContent>
        </IonCard>
    );
}

export default RecipeCard;
