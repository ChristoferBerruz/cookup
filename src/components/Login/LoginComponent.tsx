import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {IonItem, IonLabel, IonInput, 
    IonButton, IonContent, IonRow, IonGrid, IonCol} from '@ionic/react';
import {auth} from '../../firebase';


const LoginComponent:React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function handleLogin(email:string, password:string){
        var success = true;
        auth.signInWithEmailAndPassword(email, password).catch(function(error){
            success = false;
            setError(error.message);
        }).then(() => {
            if(success){
                alert('Login succesful!');
                history.push('/home');
            }
        });
    }
    return(
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol 
                        sizeXs="12"
                        sizeSm="10"
                        sizeMd="8"
                        offsetSm="1"
                        offsetMd="2"
                    >
                    <form className="ion-padding">
                        <h2>Login</h2>
                        <IonItem>
                        <IonLabel position="floating"> Username </IonLabel>
                        <IonInput name="email" type="text"
                            value={email}
                            onIonChange={event => setEmail(event.detail.value!)}
                        />
                        </IonItem>
                        <IonItem>
                        <IonLabel position="floating"> Password </IonLabel>
                        <IonInput name="password" type="password"
                            value={password}
                            onIonChange={event => setPassword(event.detail.value!)}
                        />
                        </IonItem>
                        {error.length ?
                            <p style={{color:"red", fontSize:"12px"}}>{error}</p>:
                            null
                        }
                        <IonButton className="ion-margin-top" 
                            color="medium"
                            onClick={() => handleLogin(email, password)}
                        >
                            Login
                        </IonButton>
                    </form>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}

export default LoginComponent;