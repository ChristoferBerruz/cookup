import React from 'react';
import {createContext, useState, useReducer} from 'react';
import {IonContent, IonGrid, IonRow, IonCol} from '@ionic/react';
import MainContent from './components/MainContent';
import IngredientsMenu from './components/IngredientsMenu';
import CookUpProvider from '../Providers/CookUpProvider';


const HomeComponent : React.FC = () => {
    return(
        <CookUpProvider>
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
        </CookUpProvider>
    );
}

export default HomeComponent;