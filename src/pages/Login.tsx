import React from 'react';
import {IonPage} from '@ionic/react';
import LoginComponent from '../components/Login/LoginComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login:React.FC = () => {
    return(
        <IonPage>
            <Header isUserAuthorized={false}/>
            <LoginComponent />
            <Footer />
        </IonPage>
    );
}

export default Login;