import React, {Dispatch, useState} from 'react';
import {IonContent, IonHeader, IonGrid, 
    IonRow, IonCol, IonSearchbar, IonTitle,
     IonToolbar, IonSegment, IonItem, IonSegmentButton,
     IonSelect, IonModal, IonButton, IonList, 
     IonListHeader, IonLabel, IonSelectOption, IonItemDivider, IonMenu, IonIcon, IonChip} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import Repository from '../DataLayer/Repository';

interface IngredientSectionProps{
    sectionName:string
}

const IngredientSection:React.FC<IngredientSectionProps> = ({sectionName}) =>{
    return(
        <IonItem button onClick={() => {}}>
            <IonLabel>
                {sectionName}
            </IonLabel>
        </IonItem>
    );
}

const IngredientSearch : React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const sections = ["Dairy", "Vegetables", "Meat", "Spices"];
    const Sections = sections.map(
        sec => <IngredientSection sectionName={sec!}/>
    );
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
            {Sections}
        </React.Fragment>
    );
}

const IngredientsMenu : React.FC = () => {
    return(
        <IngredientSearch/>
    );
}

export default IngredientsMenu;