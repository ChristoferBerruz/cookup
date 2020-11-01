import React, {Dispatch, useState, createContext, useReducer} from 'react';
import {IonContent, IonGrid, 
    IonRow, IonCol} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import RecipeCard from './RecipeCard';
import SearchFilterToolbar from './SearchFilterComponent';
import Repository from '../DataLayer/Repository';
import IngredientsMenu from './IngredientsMenu';
const repo = new Repository();

const RecipesPresentation : React.FC = () => {
    return(
        <IonRow>
            <IonCol>
                Recipe presentations
            </IonCol>
        </IonRow>
    );
}
const MainContent : React.FC = () => {
    const [tagsSelected, setTagsSelected] = useState<string[]>([]);
    const tags = ['American', 'Asian'];
    return(
        <IonGrid>
            <SearchFilterToolbar
            tagsSelected={tagsSelected}
            setTagsSelected={setTagsSelected}
            />
            <RecipesPresentation />
        </IonGrid>
    );
}

export interface CookUpContextProps{
    selectedIngredients:string[],
    setSelectedIngredients:Function,
    selectedTags:string[],
    setSelectedTags:Function
}

export const CookUpContext = createContext({
    selectedIngredients:new Array<string>(),
    setSelectedIngredients:new Function(),
    selectedTags:new Array<string>(),
    setSelectedTags:new Function()
});

function reducer(state:string[], item:string){
    return [...state, item];
}

const MainSearch : React.FC = () => {
    const [selectedIngredients, setSelectedIngredients] = useReducer(reducer, []);
    const [selectedTags, setSelectedTags] = useReducer(reducer, []);
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

export default MainSearch;