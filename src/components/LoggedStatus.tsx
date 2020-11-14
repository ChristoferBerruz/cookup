import { IonButton, IonTitle } from '@ionic/react';
import React, {useContext} from 'react';
import {IonChip, IonLabel} from '@ionic/react';
import {UserContext} from './Providers/UserProvider';
const LoggedStatus:React.FC = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return(
        <IonChip>
            <IonLabel>
                {(user as any).user.email? (user as any).user.email : 'Guest'}
            </IonLabel>
        </IonChip>
    );
}

export default LoggedStatus;