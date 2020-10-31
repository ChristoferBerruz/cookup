import React, {Dispatch, useState} from 'react';
import {IonSearchbar, IonTitle, IonItem,
    IonLabel, IonIcon, IonList, IonHeader,
    IonToolbar, IonButtons, IonButton, IonModal, IonChip} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import Repository from '../DataLayer/Repository';

interface IngredientSectionProps{
    sectionName:string,
    ingredients:Array<string>
}

const IngredientSection:React.FC<IngredientSectionProps> = ({sectionName, ingredients}) =>{
    const [isModalOpen, setModalOpen] = useState(false);
    const IngredientChips = ingredients.map(ing => {
        return(
            <IonChip key={ing!}>
                <IonLabel>{ing!}</IonLabel>
            </IonChip>
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
        </React.Fragment>
    );
}

const IngredientsMenu : React.FC = () => {
    return(
        <IngredientSearch/>
    );
}

export default IngredientsMenu;