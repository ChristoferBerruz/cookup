import React from 'react';
import {IonHeader, IonToolbar,IonCol, IonRow, IonGrid, IonTitle} from '@ionic/react';
import LoggedStatus from './LoggedStatus';
interface HeaderProps{
    isUserAuthorized: boolean
}


const Header : React.FC<HeaderProps> = () => {
    return(
        <IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol sizeMd="6">
                        <IonTitle> CookUp</IonTitle>
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