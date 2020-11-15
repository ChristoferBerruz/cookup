import React from 'react';
import {IonHeader, IonToolbar,IonCol, IonRow, IonGrid, IonTitle, IonRouterLink} from '@ionic/react';
import LoggedStatus from './LoggedStatus';


const Header : React.FC = () => {
    return(
        <IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol sizeMd="6">
                        <IonRouterLink href="/home">
                            <IonTitle> CookUp</IonTitle>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol sizeMd="3" pushMd="3">  
                    <LoggedStatus />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonHeader>
    );
}

export default Header;