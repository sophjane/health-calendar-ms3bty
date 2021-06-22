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
    useIonModal,
    useIonToast,
    IonAlert} from '@ionic/react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { person, key } from 'ionicons/icons';
import { RouteComponentProps,  } from 'react-router';
import {useContext, useState} from 'react'
import {UserContext} from '../App'

var triggerEmail=false;
var triggerPass=false;
var email='';
var pass='';
var goIn=false;

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
  const [presentToast] =useIonToast();

  const handleEntrar = () => {
    if (!triggerPass || !triggerEmail || pass==='' || email==='') {
        triggerPass=false;
        triggerEmail=false;
        pass='';
        email='';
        presentToast('Preencha todos os campos, por favor!', 3000);
    }
    else{              
        setIsOpen(true);
    }
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
                        <IonInput type="email" clearInput onIonChange={(e) => {email = (e.target as HTMLInputElement).value; triggerEmail = true;}}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"><IonIcon icon={key}/> Palavra-Passe</IonLabel>
                        <IonInput type="password" clearInput onIonChange={(e) => {pass = (e.target as HTMLInputElement).value; triggerPass = true;}}> </IonInput>
                    </IonItem>
                </IonRow>
                <IonRow className="d-flex justify-content-end mb-3">
                    <IonText className="mr-3" style={{fontSize:"small"}}>Esqueci-me da palavra-passe</IonText>
                </IonRow>
                <IonRow className="d-flex justify-content-between">
                    <IonButton className="col-md-4 my-2" onClick={() => { handleEntrar();}}><IonLabel>Entrar</IonLabel></IonButton>
                    <IonButton className="col-md-4 my-2" onClick={() => {history.push("/create-account");user.setCreateAcc(1)}}><IonLabel>Criar Conta</IonLabel></IonButton>
                </IonRow>
                <div>{isOpen?
                <IonAlert
                    isOpen={isOpen}
                    onDidDismiss={() => {history.push("/home"); user.setIsLoggedIn(true);
                        setIsOpen(false);triggerPass=false;triggerEmail=false;
                        pass='';email='';}}
                    cssClass="help-alert"
                    header={"Guardar Dados?"}
                    message={"Ao clicar em 'Sim' não precisará inserir os dados de inicio novamente."}
                    buttons={["Sim", "Não"]}
                     />
                :null}</div>
                {}
            </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Login;