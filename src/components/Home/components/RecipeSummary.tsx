import React, {useContext} from 'react';
import {IonItem} from '@ionic/react';
import {CookUpContext} from '../../Providers/CookUpProvider';


function stringAnArray(arr:string[]):string{
    let res = "";
    arr.forEach(function (value, idx){
        res += value;
        if(idx < res.length - 1){
            res += ", ";
        }
    })
    return res;
}
const RecipeSummary:React.FC = () => {
    const {selectedIngredients, setSelectedIngredients,
    selectedTags, setSelectedTags} = useContext(CookUpContext);
    return(
        <React.Fragment>
            <IonItem>
                Ingredients:{
                selectedIngredients.length ? 
                stringAnArray(selectedIngredients):''
                }
            </IonItem>
            <IonItem>
                Tags:{
                    selectedTags.length ?
                    stringAnArray(selectedTags): ''
                }
            </IonItem>
        </React.Fragment>
    );
}

export default RecipeSummary;