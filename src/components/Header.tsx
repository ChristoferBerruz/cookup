import React from 'react';
import {IonHeader, IonToolbar, IonTitle} from '@ionic/react';
interface HeaderProps{
    isUserAuthorized: boolean
}


const Header : React.FC<HeaderProps> = () => {
    return(
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    CookUp
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;