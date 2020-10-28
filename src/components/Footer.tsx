import React from 'react';
import {IonFooter, IonTitle, IonToolbar} from '@ionic/react';

const Footer : React.FC = () => {
    return(
        <IonFooter>
            <IonToolbar>
                <IonTitle>
                    Footer
                </IonTitle>
            </IonToolbar>
        </IonFooter>
    );
}

export default Footer;