import React, {useContext} from 'react';
import {IonItem} from '@ionic/react';
import {CookUpContext} from '../../Providers/CookUpProvider';

const RecipeSummary:React.FC = () => {
    const {selectedIngredients, setSelectedIngredients,
    selectedTags, setSelectedTags} = useContext(CookUpContext);
    return(
        <React.Fragment>
            <IonItem>
                Ingredients:{
                selectedIngredients.length ? 
                selectedIngredients.reduce((prev, cur) => prev + ',' + cur + ','):'None'
                }
            </IonItem>
            <IonItem>
                Tags:{
                    selectedTags.length ?
                    selectedTags.reduce((prev, cur) => prev + ', ' + cur + ',') : 'None'
                }
            </IonItem>
        </React.Fragment>
    );
}

export default RecipeSummary;