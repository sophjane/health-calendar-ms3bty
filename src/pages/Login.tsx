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
    IonText,
    IonAlert} from '@ionic/react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { person, key } from 'ionicons/icons';
import { RouteComponentProps,  } from 'react-router';
import {useContext, useState} from 'react'
import {UserContext} from '../App'
import Toolbar from '../components/Toolbar';


const Login: React.FC<RouteComponentProps> = ({history}) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(UserContext);

  return (
    <IonPage>
        <IonHeader>
        <Toolbar title="Login"></Toolbar>
      </IonHeader>
        <IonContent fullscreen>
            <IonGrid>
                <IonRow className="d-flex justify-content-center mt-5 mb-3">
                    <img src={process.env.PUBLIC_URL + '/favicon2.png'} style={{ maxHeight: "200px" }}></img>
                </IonRow>
                <IonRow className="d-flex flex-column mt-3 mb-3">
                    <IonItem>
                        <IonLabel position="stacked"><IonIcon icon={person}/> Email</IonLabel>
                        <IonInput type="email" clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"><IonIcon icon={key}/> Palavra-Passe</IonLabel>
                        <IonInput type="password" clearInput> </IonInput>
                    </IonItem>
                </IonRow>
                <IonRow className="d-flex justify-content-end mb-3">
                    <IonText className="mr-3" style={{fontSize:"small"}}>Esqueci-me da palavra-passe</IonText>
                </IonRow>
                <IonRow className="d-flex justify-content-between">
                    <IonButton className="col-md-4 my-2" onClick={() => {setIsOpen(true);}}><IonLabel>Entrar</IonLabel></IonButton>
                    <IonButton className="col-md-4 my-2" onClick={() => {history.push("/create-account");user.setCreateAcc(1)}}><IonLabel>Criar Conta</IonLabel></IonButton>
                </IonRow>
                <IonAlert
          isOpen={isOpen}
          onDidDismiss={() => {history.push("/home"); user.setIsLoggedIn(true);}}
          cssClass="help-alert"
          header={"Guardar Dados?"}
          message={"Ao clicar em 'Sim' não precisará inserir os dados de inicio novamente."}
          buttons={["Sim", "Não"]}
        />
            </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Login;