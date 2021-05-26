import { IonContent, 
  IonHeader, 
  IonPage 
} from '@ionic/react';
import PersonalInfo from '../components/Definicoes/PersonalInfo';
import Buttons from '../components/Definicoes/Buttons';
import Reminder from '../components/Definicoes/Reminder';

import Toolbar from "../components/Toolbar";

const userDetails: React.FC = () => {
  const onSave = (nameP: string, email: string, pacientNumber: string) => {
    personDetails.name = nameP;
    personDetails.email = email;
    personDetails.pacientNumber = pacientNumber;
    console.log(personDetails.name);
  }
  const personDetails = {
    onSave : onSave,
    name : 'Joana Silva',
    email : 'joanasilva@gmail.com',
    pacientNumber : '123456789'
  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Definições"></Toolbar>
      </IonHeader>
      <IonContent>
        <PersonalInfo { ...personDetails} />
        <Buttons />
        <Reminder />
      </IonContent>
    </IonPage>
  );
};

export default userDetails;