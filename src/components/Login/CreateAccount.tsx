import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const CreateAccount: React.FC = () => {
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
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;