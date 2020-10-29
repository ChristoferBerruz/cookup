import React, {useState} from 'react';
import './ExploreContainer.css';
import {IonButton, IonIcon, IonContent, 
  IonRouterLink, IonModal, IonLabel, IonItem, IonInput} from '@ionic/react';
interface ContainerProps { }

const LoginForm : React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return(
    <React.Fragment>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
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
              onClick={handleLogin}>
            Login
          </IonButton>
        </IonRouterLink>
        <IonButton className="ion-margin-top" color="light" onClick={()=>setShowModal(false)} >
          Cancel
        </IonButton>
      </form>
      </IonModal>

      <IonButton color="medium" onClick={() => setShowModal(true)}>
        Login
      </IonButton>
    </React.Fragment>
  );
}

function handleLogin(){
  alert('Logging you in..')
}

function continueToHomePage(){
  alert('Going to homepage...')
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  
  return (
    <div className="container">
      <strong>What will you CookUp today?</strong>
      <br></br>
      <LoginForm />
      <IonRouterLink href="/cookup">
        <IonButton color="light" onClick={continueToHomePage}>
          Guest
        </IonButton>
      </IonRouterLink>
    </div>
  );
};

export default ExploreContainer;
