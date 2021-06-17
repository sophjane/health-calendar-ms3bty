import { IonButton, IonContent, IonGrid, IonHeader, IonPage } from "@ionic/react";
import PersonalInfo from "../components/Definicoes/PersonalInfo";
import Buttons from "../components/Definicoes/Buttons";
import Reminder from "../components/Definicoes/Reminder";
import { RouteComponentProps } from "react-router";
import {UserContext} from '../App'
import {useContext} from 'react'

import Toolbar from "../components/Toolbar";

const Settings: React.FC<RouteComponentProps> = ({ history }) => {
  /* const onSave = (nameP: string, email: string, pacientNumber: string) => {
    personDetails.name = nameP;
    personDetails.email = email;
    personDetails.pacientNumber = pacientNumber;
    console.log(personDetails.name);
  } */
  const personDetails = {
    /*     onSave : onSave, */
    name: "Joana Silva",
    email: "joanasilva@gmail.com",
    pacientNumber: "123456789",
  };
  const user = useContext(UserContext);
  var logOutButton = (
    <IonButton
        className="edit-btn"
        expand="block"
        onClick={() => {history.push("/login"); user.setIsLoggedIn(false);}}>
            Terminar Sessão
    </IonButton>
  )
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Definições"></Toolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <Reminder />
          <PersonalInfo {...personDetails} />
          <Buttons />
          {logOutButton}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;