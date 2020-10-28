import React, {Dispatch, useState} from 'react';
import {IonContent, IonHeader, IonGrid, 
    IonRow, IonCol, IonSearchbar, IonTitle,
     IonToolbar, IonSegment, IonItem, IonSegmentButton,
     IonSelect, IonModal, IonButton, IonList, 
     IonListHeader, IonLabel, IonSelectOption, IonItemDivider} from '@ionic/react';


interface SearchFilterProps{

}
const SearchFilterToolbar : React.FC = () => {
    const [isRecipeModalOpen, setRecipeModalOpen] = useState(false);
    const [recipeSearchText, setRecipeText] = useState('');
    const [isTagsModalOpen, setTagsModalOpen] = useState(false);
    const [tagsSelected, setTagsSelected] = useState<string[]>([]);
    const tags = ['American', 'Asian'];
    return(
        <React.Fragment>
            {/** Recipes Modal */}
            <IonModal isOpen={isRecipeModalOpen}>
                <IonSearchbar value={recipeSearchText}
                onIonChange={e => setRecipeText(e.detail.value!)}></IonSearchbar>
                <IonButton onClick={() => setRecipeModalOpen(false)}>
                    Close
                </IonButton>
            </IonModal>

            {/** Filters modal */}
            <IonModal isOpen={isTagsModalOpen}>
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
                <IonButton onClick={() => setTagsModalOpen(false)}>
                    Close
                </IonButton>
            </IonModal>

            {/** This are the actual buttons display on the screen */}
            <IonRow>
                <IonCol size-md="12">
                    <IonButton onClick={() => setRecipeModalOpen(true)}>
                        Search Recipe
                    </IonButton>
                    <IonButton onClick={() => setTagsModalOpen(true)}>
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
    return(
        <IonGrid>
            <SearchFilterToolbar />
            <RecipesPresentation />
        </IonGrid>
    );
}

const IngredientSearch : React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return(
        <IonSearchbar value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
        >
        </IonSearchbar>
    );
}
const IngredientSearchPanel : React.FC = () => {
    return(
        <IngredientSearch/>
    );
}
const MainSearch : React.FC = () => {
    return(
        <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol size-md="3">
                        <IngredientSearchPanel />
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