import React, {useContext, useState} from 'react';
import {IonItem,
     IonSelect, IonModal, IonButton, IonList, 
     IonListHeader, IonLabel, IonSelectOption} from '@ionic/react';
import CookUpContext from '../context/CookUpContext';

const SelectFiltersComponent : React.FC = () => {
    const [isTagsModalOpen, setTagsModalOpen] = useState(false);
    const {selectedTags, setSelectedTags} = useContext(CookUpContext);
    return(
        <React.Fragment>
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
                        <IonSelect value={selectedTags} multiple={true}
                        cancelText="Nah" okText="Okay!"
                        onIonChange={e => setSelectedTags(e.detail.value!)}>
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
            <IonButton 
                color="medium"
                onClick={() => setTagsModalOpen(true)}
            >
                Apply filters
            </IonButton>
        </React.Fragment>
    );
}

export default SelectFiltersComponent;