import React, {useContext} from 'react';
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom';
import {IonPage} from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountComponent from '../components/Account/AccountComponent';
import {UserContext} from '../components/Providers/UserProvider';

const Account:React.FC = () => {
    return(
        <IonPage>
            <Header />
            <AccountComponent />
            <Footer />
        </IonPage>

    );
}

export default Account;