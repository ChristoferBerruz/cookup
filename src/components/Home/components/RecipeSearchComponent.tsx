import React, {useState} from 'react';
import {IonSearchbar, IonItem,
     IonModal, IonButton} from '@ionic/react';

import Repository from '../../../DataLayer/Repository';
const repo = new Repository();

const RecipeSearch : React.FC = () => {
    const [isRecipeModalOpen, setRecipeModalOpen] = useState(false);
    const [recipeSearchText, setRecipeText] = useState('');
    return(
        <React.Fragment>
            {/** Recipes Modal */}
            <IonModal isOpen={isRecipeModalOpen} 
            onDidDismiss={() => setRecipeModalOpen(false)}
            >
                <form className="ion-padding">
                    <h2>Enter a recipe name</h2>
                    <IonItem>
                        <IonSearchbar value={recipeSearchText}
                        onIonChange={e => setRecipeText(e.detail.value!)}></IonSearchbar>
                    </IonItem>
                    <IonButton
                    color="medium"
                    onClick={() => repo.getRecipeByDirectSearch(recipeSearchText)}>
                        Search Recipe
                    </IonButton>
                    <IonButton 
                    color="light"
                    onClick={() => setRecipeModalOpen(false)}>
                        Close
                    </IonButton>
                </form>
            </IonModal>

            <IonButton 
                color="medium"
                onClick={() => setRecipeModalOpen(true)}
            >
                Search Recipe
            </IonButton>
        </React.Fragment>
    );
}

export default RecipeSearch;