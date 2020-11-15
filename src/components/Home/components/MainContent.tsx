import React, {useState} from 'react';
import {IonGrid,IonRow, IonCol} from '@ionic/react';
import SelectFiltersComponent from './FilterComponent';
import RecipeSearchComponent from './RecipeSearchComponent';
import RecipeSummary from './RecipeSummary';

const SearchFilterToolbar : React.FC = () => {
    return(
        <IonRow>
            <SelectFiltersComponent />
            <RecipeSearchComponent />
        </IonRow>
    );
}

const MainContent : React.FC = () => {
    return(
        <IonGrid>
            <SearchFilterToolbar/>
            <RecipeSummary />
        </IonGrid>
    );
}

export default MainContent;

