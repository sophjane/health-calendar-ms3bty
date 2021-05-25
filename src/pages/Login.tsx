import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonRow, 
    IonGrid, 
    IonItem, 
    IonLabel, 
    IonInput,
    IonIcon, 
    IonButton,
    IonText} from '@ionic/react';
import CreateAccount from '../components/Login/CreateAccount';

import 'bootstrap/dist/css/bootstrap.min.css'
import { person, key } from 'ionicons/icons';

const Login: React.FC = () => {
  const joanaSilva = {
    name : 'Joana Silva',
    email:'joanasilva@gmail.com',
    sex : 'F',
    password:'joanasilva01.password',
    city:'Aveiro',
    defaultHospital:'',
  }
  const loginInfo = {
      email:'default email',
      password:'default password'
  }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="d-flex justify-content-center mt-5 mb-3">
                    <img src={process.env.PUBLIC_URL + '/favicon2.png'} style={{ maxHeight: "200px" }}></img>
                </IonRow>
                <IonRow className="d-flex flex-column mt-3 mb-3">
                    <IonItem>
                        <IonLabel position="stacked"><IonIcon icon={person}/> Email</IonLabel>
                        <IonInput value={loginInfo.email} clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"><IonIcon icon={key}/> Palavra-Passe</IonLabel>
                        <IonInput value={loginInfo.password} clearInput> </IonInput>
                    </IonItem>
                </IonRow>
                <IonRow className="d-flex justify-content-end mb-3">
                    <IonText className="mr-3" style={{fontSize:"small"}}>Esqueci-me da palavra-passe</IonText>
                </IonRow>
                <IonRow className="d-flex justify-content-between">
                    <IonButton className="col-md-4 my-2"><IonLabel>Entrar</IonLabel></IonButton>
                    <IonButton className="col-md-4 my-2"><IonLabel>Criar Conta</IonLabel></IonButton>
                </IonRow>
            </IonGrid>
            {false && <CreateAccount />}
        </IonContent>
    </IonPage>
  );
};

export default Login;