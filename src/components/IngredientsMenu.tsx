import React, {Dispatch, useContext, useReducer, useState} from 'react';
import {IonSearchbar, IonTitle, IonItem,
    IonLabel, IonIcon, IonList, IonHeader,
    IonToolbar, IonButtons, IonButton, IonModal, IonChip} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import Repository from '../DataLayer/Repository';
import {CookUpContext, CookUpContextProps} from './MainSearch';

interface IngredientSectionProps{
    sectionName:string,
    ingredients:Array<string>
}


const reducer = (key:number) => key+1;
const IngredientChip:React.FC<{ingredient:string}> = ({ingredient}) => {
    const {setSelectedIngredients} = useContext(CookUpContext);
    const [isSelected, setIsSelected] = useState(false);
    const [id, updateId] = useReducer(reducer, 0);
    function update(){
        setSelectedIngredients(ingredient);
        updateId();
        setIsSelected(!isSelected);
    }
    return(
        <IonChip outline
            color={isSelected?"success":"primary"}
            onClick={() => update()}
        >
            <IonLabel>{ingredient}</IonLabel>
            {
                isSelected? <IonIcon icon={closeCircle} /> : null
            }
        </IonChip>
    );
}
const IngredientSection:React.FC<IngredientSectionProps> = ({sectionName, ingredients}) =>{
    
    const [isModalOpen, setModalOpen] = useState(false);
    const IngredientChips = ingredients.map(ingredient => {
        return(
            <IngredientChip ingredient={ingredient}
                key={ingredient}
            />
        );
    });
    return(
        <React.Fragment>
            <IonModal isOpen={isModalOpen}
            onDidDismiss={() => setModalOpen(false)}
            >
                <form className="ion-padding">
                    <IonTitle> Select {sectionName}</IonTitle>
                    {IngredientChips}
                    <br />
                    <IonButton onClick={() => setModalOpen(false)}
                    >
                        Done
                    </IonButton>
                </form>
            </IonModal>
            <IonItem
            button onClick={() => setModalOpen(true)}>
                <IonLabel>
                    {sectionName}
                </IonLabel>
            </IonItem>
        </React.Fragment>
    );
}

const IngredientSearch : React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const {selectedIngredients} = useContext(CookUpContext);
    const ingredientsDairy = ["milk", "cheese"];
    const ingredientsVeg = ["tomatoes", "carrots"];
    const ingredientsMeat = ["chicken", "beef"];
    const ingredientsSpices= ["paprika", "onion powder"];

    const sections:any = {
        "Dairy":ingredientsDairy,
        "Vegetables":ingredientsVeg,
        "Meats":ingredientsMeat,
        "Spices":ingredientsSpices
    };

    const SectionsComponent = [];

    for(let sec in sections){
        let ingredients = sections[sec];
        SectionsComponent.push(
            <IngredientSection sectionName={sec}
                ingredients={ingredients}
                key={sec}
             />
        );
    }
    return(
        <React.Fragment>
            {/** Heading for recipe search */}
            <IonItem lines="none">
                <IonIcon icon={restaurant}>
                </IonIcon>
                <IonTitle>Search ingredients</IonTitle>
            </IonItem>

            {/** Ingredient search bar */}
            <IonSearchbar
                value={searchText}
                onIonChange={e => setSearchText(e.detail.value!)}
            >
            </IonSearchbar>
            <IonList>
                {SectionsComponent}
            </IonList>
            <IonItem>
                Ingredients:{
                selectedIngredients.length ? 
                selectedIngredients.reduce((prev, cur) => prev + ',' + cur + ','):'None'
                }
            </IonItem>
        </React.Fragment>
    );
}

const IngredientsMenu : React.FC = () => {
    return(
        <IngredientSearch/>
    );
}

export default IngredientsMenu;