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
  useIonToast} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import Toolbar from '../components/Toolbar'
import {useContext, useState} from 'react'
import {UserContext} from '../App'

const CreateAccount: React.FC<RouteComponentProps> = ({history}) => {
  const user = useContext(UserContext);
  const [pass, setPass] = useState(false);
  const [password, setPassword] = useState("");
  const [present] = useIonToast();
  const checkPassword = (e: Event) => {
    const confPassword = (e.target as HTMLInputElement).value;
    if(confPassword.length >= password.length){
      if(confPassword != password){
          console.log(password)
          console.log(confPassword)
      }else{
        setPass(true);
      }
    }
  }
  return (
    <IonPage>
      <IonHeader>
      <Toolbar title="Criar Conta" variant="back"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
                <IonRow className="d-flex justify-content-center mt-5 mb-3">
                  <IonText className="align-self-center mx-3">Nova Conta</IonText>
                    <img className="mx-3" src={process.env.PUBLIC_URL + '/favicon2.png'} style={{ maxHeight: "75px" }}></img>
                </IonRow>
                <IonRow className="d-flex flex-column mt-3 mb-3">
                    <IonItem>
                        <IonLabel position="stacked"> Nome do Utilizador</IonLabel>
                        <IonInput placeholder="Nome Completo" type="text" clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"> Email</IonLabel>
                        <IonInput placeholder="Email" type="email" clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"> Palavra-Passe</IonLabel>
                        <IonInput placeholder="Palavra-Passe" type="password" onIonChange={(e)=>setPassword((e.target as HTMLInputElement).value)} clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Confirmar Palavra-Passe</IonLabel>
                        <IonInput placeholder="Palavra-Passe" type="password" onIonChange={(e)=> {checkPassword(e)}} clearInput> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked"> Número do Utente</IonLabel>
                        <IonInput placeholder="123456789" type="email" clearInput> </IonInput>
                    </IonItem>
                </IonRow>
                <IonRow className="d-flex justify-content-center">
                    <IonButton className="col-md-4 my-2" 
                    onClick={() => 
                    {if(pass){
                      history.push("/login"); 
                      user.setCreateAcc(0)
                      }else{
                        present("Passwords must match",2000)
                      }
                      }}><IonLabel>Criar Conta</IonLabel></IonButton>
                </IonRow>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;