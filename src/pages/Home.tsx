import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeCalendar from '../components/HomeCalendar';
import './Home.css';

const Home: React.FC = () => {
  const personDetails = {
    name : 'Joana',
    sex : 'F'
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Página Inicial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Página Inicial</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeCalendar { ...personDetails} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
