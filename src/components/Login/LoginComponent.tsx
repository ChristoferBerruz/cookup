import React from 'react';
import {IonItem, IonLabel, IonInput, IonRouterLink, 
    IonButton} from '@ionic/react';

const LoginComponent:React.FC = () => {
    return(
        <form className="ion-padding">
            <h2>Login</h2>
            <IonItem>
            <IonLabel position="floating"> Username </IonLabel>
            <IonInput/>
            </IonItem>
            <IonItem>
            <IonLabel position="floating"> Password </IonLabel>
            <IonInput/>
            </IonItem>
            <IonRouterLink href="/cookup">
            <IonButton className="ion-margin-top" 
                color="medium"
            >
                Login
            </IonButton>
            </IonRouterLink>
            <IonButton className="ion-margin-top" color="light" >
            Cancel
            </IonButton>
        </form>
    );
}

export default LoginComponent;