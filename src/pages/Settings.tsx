import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
  IonToolbar 
} from '@ionic/react';
import PersonalInfo from '../components/Definicoes/PersonalInfo';
import Buttons from '../components/Definicoes/Buttons';
import Reminder from '../components/Definicoes/Reminder';
import './Settings.css';

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
    <IonPage className = 'Page'>
      <IonHeader>
        <IonToolbar title="Definições">
        <IonTitle>Definições</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PersonalInfo { ...personDetails} />
      </IonContent>
      <IonContent>
        <Buttons />
      </IonContent>
      <IonContent style={{overflow: "hidden"}}>
        <Reminder />
      </IonContent>
    </IonPage>
  );
};

export default userDetails;