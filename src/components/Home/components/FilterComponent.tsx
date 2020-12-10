import React, {useContext, useEffect, useState} from 'react';
import {IonItem,
     IonSelect, IonModal, IonButton, IonList, 
     IonListHeader, IonLabel, IonSelectOption} from '@ionic/react';
import {CookUpContext} from '../../Providers/CookUpProvider';
import {getAvailableTags} from '../datalayer/repository';

const SelectFiltersComponent : React.FC = () => {
    const {selectedTags, setSelectedTags} = useContext(CookUpContext);
    const [tagsData, setTagsData] = useState(Array<string>());


    useEffect(() => {
        getAvailableTags()
        .then((tags) => setTagsData(tags.data))
        .catch(error => {
            alert("Could not fetch data from server. Refresh the page.");
        });
    },[]);

    let options = [];
    for(let tag of tagsData){
        options.push(
            <IonSelectOption key={tag} value={tag}>
                {tag}
            </IonSelectOption>
        );
    }
    return(
        <React.Fragment>
            <IonItem>
                <IonLabel> Tags </IonLabel>
                <IonSelect value={selectedTags} multiple={true}
                cancelText="Nah" okText="Okay!"
                onIonChange={e => setSelectedTags(e.detail.value!)}>
                    {options}
                </IonSelect>
            </IonItem>
        </React.Fragment>
    );
}

export default SelectFiltersComponent;