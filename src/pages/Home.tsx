import React from 'react';
import {IonPage} from '@ionic/react';
import HomeComponent from '../components/Home/HomeComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home : React.FC = () => {
    return(
        <IonPage>
            <Header isUserAuthorized={false}/>
            <HomeComponent />
            <Footer />
        </IonPage>
    );
}

export default Home;