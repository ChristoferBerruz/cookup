import React from 'react';
import {createContext, useState, useReducer} from 'react';
import {IonContent, IonGrid, IonRow, IonCol} from '@ionic/react';
import MainContent from './components/MainContent';
import IngredientsMenu from './components/IngredientsMenu';
import CookUpContext from './context/CookUpContext';

interface ItemActionInterface{
    item:string,
    action:string
}

function reducer(state:string[], itemAction:ItemActionInterface){
    const item = itemAction.item;
    const action = itemAction.action;
    switch(action){
        case "add":
            return [...state, item];
        case "remove":
            const update = [...state];
            update.splice(update.indexOf(item), 1);
            return update;
        default:
            return state
    }
}

function reducerArray(state:string[], items:string[]){
    return items;
}
const HomeComponent : React.FC = () => {
    const [selectedIngredients, setSelectedIngredients] = useReducer(reducer, []);
    const [selectedTags, setSelectedTags] = useReducer(reducerArray, []);
    return(
        <CookUpContext.Provider value={{
                selectedIngredients, 
                setSelectedIngredients,
                selectedTags,
                setSelectedTags
            }}>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol size-md="3">
                            <IngredientsMenu />
                        </IonCol>
                        <IonCol size-md="9">
                            <MainContent />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </CookUpContext.Provider>
    );
}

export default HomeComponent;