import React, {Dispatch, useState} from 'react';
import {IonContent, IonHeader, IonGrid, 
    IonRow, IonCol, IonSearchbar, IonTitle,
     IonToolbar, IonSegment, IonItem, IonSegmentButton,
     IonSelect, IonModal, IonButton, IonList, 
     IonListHeader, IonLabel, IonSelectOption, IonItemDivider, IonMenu, IonIcon, IonChip} from '@ionic/react';
import {restaurant, closeCircle} from 'ionicons/icons';
import RecipeCard from './RecipeCard';
import Repository from '../DataLayer/Repository';
import IngredientsMenu from './IngredientsMenu';
const repo = new Repository();

interface SearchFilterToolbarProps{
    tagsSelected : Array<string>,
    setTagsSelected: Function
}

const SearchFilterToolbar : React.FC<SearchFilterToolbarProps> = (props) => {
    const [isRecipeModalOpen, setRecipeModalOpen] = useState(false);
    const [recipeSearchText, setRecipeText] = useState('');
    const [isTagsModalOpen, setTagsModalOpen] = useState(false);
    var {
        tagsSelected,
        setTagsSelected
    } = props;

    return(
        <React.Fragment>
            {/** Recipes Modal */}
            <IonModal isOpen={isRecipeModalOpen} 
            onDidDismiss={() => setRecipeModalOpen(false)}
            >
                <form className="ion-padding">
                    <h2>Enter a recipe name</h2>
                    <IonItem>
                        <IonSearchbar value={recipeSearchText}
                        onIonChange={e => setRecipeText(e.detail.value!)}></IonSearchbar>
                    </IonItem>
                    <IonButton
                    color="medium"
                    onClick={() => repo.getRecipeByDirectSearch(recipeSearchText)}>
                        Search Recipe
                    </IonButton>
                    <IonButton 
                    color="light"
                    onClick={() => setRecipeModalOpen(false)}>
                        Close
                    </IonButton>
                </form>
            </IonModal>

            {/** Filters modal */}
            <IonModal isOpen={isTagsModalOpen}
            onDidDismiss={() => setTagsModalOpen(false)}
            >
                <IonList>
                    <IonListHeader>
                        <IonLabel>Available filters</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel> Cuisine </IonLabel>
                        <IonSelect value={tagsSelected} multiple={true}
                        cancelText="Nah" okText="Okay!"
                        onIonChange={e => setTagsSelected(e.detail.value)}>
                            <IonSelectOption value="Asian">
                                Asian
                            </IonSelectOption>
                            <IonSelectOption value="North American">
                                North America
                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                <IonButton 
                color="light"
                onClick={() => setTagsModalOpen(false)}>
                    Close
                </IonButton>
            </IonModal>

            {/** These are the actual buttons display on the screen */}
            <IonRow>
                <IonCol size-md="12">
                    <IonButton 
                    color="medium"
                    onClick={() => setRecipeModalOpen(true)}>
                        Search Recipe
                    </IonButton>
                    <IonButton 
                    color="medium"
                    onClick={() => setTagsModalOpen(true)}>
                        Apply filters
                    </IonButton>
                </IonCol>
                <IonCol size-md="12">
                    <IonItem style={{"marginLeft":0}}>
                        Tags : {tagsSelected.length ? 
                        tagsSelected.reduce((cur, prev) => prev + ', ' + cur, ''):'None'}
                    </IonItem>
                </IonCol>
            </IonRow>
        </React.Fragment>
    );
}

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
const MainSearch : React.FC = () => {
    return(
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
    );
}

export default MainSearch;