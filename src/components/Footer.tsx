import React from 'react';
import {IonFooter, IonTitle, IonToolbar} from '@ionic/react';

const Footer : React.FC = () => {
    return(
        <IonFooter>
            <IonToolbar>
               <IonTitle style={{fontSize:"0.9em"}}>
                    &copy; Cookup 2020. Developed at the University of Bridgeport.
               </IonTitle>
            </IonToolbar>
        </IonFooter>
    );
}

export default Footer;