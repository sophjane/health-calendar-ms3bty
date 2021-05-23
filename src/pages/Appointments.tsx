import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Appointments.css';

const Appointments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Consultas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Consultas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Consultas" />
      </IonContent>
    </IonPage>
  );
};

export default Appointments;
