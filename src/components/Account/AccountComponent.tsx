import React from 'react';
import {IonContent, IonGrid, IonRow, IonCol, IonButton} from '@ionic/react';
import {auth} from '../../firebase';


const AccountComponent:React.FC = () => {

    function handleSignOut(){
        auth.signOut();
    }
    
    return(
        <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton onClick={() => handleSignOut()}>
                            SignOut
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}

export default AccountComponent;