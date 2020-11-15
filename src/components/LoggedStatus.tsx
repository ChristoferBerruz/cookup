import { IonButton, IonTitle } from '@ionic/react';
import React, {useContext} from 'react';
import {IonChip, IonLabel, IonRouterLink} from '@ionic/react';
import {UserContext} from './Providers/UserProvider';

const Content:React.FC<{content:string}> = ({content}) => {
    return(
        <IonChip>
            <IonLabel>
                {content}
            </IonLabel>
        </IonChip>
    );
}

const LoggedStatus:React.FC = () => {
    const {user, isLoggedIn} = useContext(UserContext);
    console.log(user)   
    return(
        <React.Fragment>
            {
                isLoggedIn?
                <IonRouterLink href="/account">
                    <Content content={(user as any).email} />    
                </IonRouterLink>
                :
                <IonRouterLink href="/login">
                    <Content content="Log in" />
                </IonRouterLink>
            }
        </React.Fragment>
    );
}

export default LoggedStatus;