import React, {useState} from 'react';
import {IonGrid,IonRow, IonCol} from '@ionic/react';
import SelectFiltersComponent from './FilterComponent';
import RecipeSearchComponent from './RecipeSearchComponent';
import RecipeSummary from './RecipeSummary';
import RecipeManager from './RecipeManager';

const SearchFilterToolbar : React.FC = () => {
    return(
        <IonRow>
            <SelectFiltersComponent />
        </IonRow>
    );
}

const MainContent : React.FC = () => {
    return(
        <IonGrid>
            <SearchFilterToolbar/>
            <RecipeSummary />
            <RecipeManager />
        </IonGrid>
    );
}

export default MainContent;

