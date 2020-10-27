import React, {useState} from 'react';
import './ExploreContainer.css';
import {IonButton, IonIcon, IonContent, IonModal, IonLabel, IonItem, IonInput} from '@ionic/react';
interface ContainerProps { }

const LoginForm : React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return(
    <React.Fragment>
      <IonModal isOpen={showModal}>
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
        <IonButton className="ion-margin-top" color="medium" type="submit">
          Login
        </IonButton>
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

function openLoginForm(){
  alert("Login in...")
}

function handleLogin(){

}

const ExploreContainer: React.FC<ContainerProps> = () => {
  
  return (
    <div className="container">
      <strong>What will you CookUp today?</strong>
      <br></br>
      <LoginForm />
      <IonButton color="light">
        Guest
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
