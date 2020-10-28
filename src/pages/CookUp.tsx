import React from 'react';
import {IonPage} from '@ionic/react';
import MainSearch from '../components/MainSearch';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CookUp : React.FC = () => {
    return(
        <IonPage>
            <Header isUserAuthorized={false}/>
            <MainSearch />
            <Footer />
        </IonPage>
    );
}

export default CookUp;