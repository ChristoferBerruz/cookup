import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {IonSearchbar, IonTitle, IonItem,
    IonLabel, IonIcon, IonList, IonButton, IonModal, IonChip} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import {CookUpContext} from '../../Providers/CookUpProvider';

import getAvailableIngredients, {ingredientsData} from '../datalayer/repository';
import SelectFiltersComponent from './FilterComponent';

interface IngredientSectionProps{
    sectionName:string,
    ingredients:Array<string>
}

const IngredientChip:React.FC<{ingredient:string}> = ({ingredient}) => {
    {/** Each chip controls adding and removing ingredients to the search context */}
    const {selectedIngredients, setSelectedIngredients} = useContext(CookUpContext);
    {/** On render, the chip checks if the ingredient is already present */}
    const initialState:boolean = selectedIngredients.includes(ingredient);

    {/** Each chip manages own state to re render on click */}
    const [isSelected, setIsSelected] = useState(initialState);


    function updateIngredientList(){
        const action = !isSelected ? "add":"remove";
        setSelectedIngredients({item:ingredient, action:action});
        setIsSelected(!isSelected);
    }
    return(
        <IonChip outline
            color={isSelected?"success":"primary"}
            onClick={() => updateIngredientList()}
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

const IngredientsMenu : React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const {selectedIngredients} = useContext(CookUpContext);

    const initialData:ingredientsData = {};
    const [sections, setData] = useState(initialData);
    //const sections:ingredientsData = getAvailableIngredients();
    const SectionsComponent = [];

    useEffect(() => {
        axios.get<ingredientsData>(`http://localhost:5001/cookup-fdf96/us-central1/getIngredientsData`)
        .then(res =>{
            setData(res.data);
        }).catch(e => {
            alert('Server is down... Refresh the page');
        })
    },[]);

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

            
            <IonList>
                {SectionsComponent}
            </IonList>
        </React.Fragment>
    );
}

export default IngredientsMenu;