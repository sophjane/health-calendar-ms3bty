import React, {useState} from 'react';
import "./Settings.css"
import { IonButton, IonContent, IonGrid, IonPage, IonCol, IonRow, IonText, useIonModal, IonItemDivider, IonInput} from '@ionic/react';

interface ContainerProps{
    onSave(arg0 : string, arg1 : string, arg2 : string) : void ;
    name : string;
    email : string;
    pacientNumber : string;
}

const dictionary = {
  name : '', email : '', pacientNumber : ''
}

var trigerName = false;
var trigerEmail = false;
var trigerPatientNumber = false;

const Body: React.FC<{
    changeName : string;
    changeEmail : string;
    changePacientNumber : string;
    onDismiss: () => void;
    handleSave: (arg0 : string, arg1: string, arg2: string) => void;
  }> = ({ changeName, changeEmail, changePacientNumber, onDismiss, handleSave}) => (
    <div>
        <IonText className="per-info-header" style = {{fontSize: 17}}><strong>ATUALIZAR INFORMAÇÕES PESSOAIS</strong></IonText>
        <IonItemDivider >
          <p className="info">Nome de Utilizador:</p>
          </IonItemDivider>
        <IonInput className="info" type="text" value={changeName} onIonChange={(e) => {dictionary.name = (e.target as HTMLInputElement).value; trigerName = true} }>
        </IonInput>
        <IonItemDivider className="info">Email:</IonItemDivider>
        <IonInput className="info" type="text" value={changeEmail} onIonChange={(e) => {dictionary.email = (e.target as HTMLInputElement).value; trigerEmail = true} }></IonInput>
        <IonItemDivider className="info">Número de Paciente:</IonItemDivider>
        <IonInput className="info" value={changePacientNumber} onIonChange={(e) => {dictionary.pacientNumber = (e.target as HTMLInputElement).value; trigerPatientNumber = true} }></IonInput>

        <IonButton expand="block" onClick={() => {
          console.log(dictionary.name);
          handleSave(dictionary.name, dictionary.email, dictionary.pacientNumber); onDismiss()}}>
            Atualizar
        </IonButton>
        <IonButton expand="block" onClick={() => onDismiss()}>
            Close
        </IonButton>
    </div>
  );

const PersonalInfo: React.FC<ContainerProps> = ({ name, email, pacientNumber, onSave }) => {
    /*const [present] = useIonAlert();*/

    const [count, setCount] = useState(0);

    const [changeName, setChangeName] = useState<string>(name);
    const [changeEmail, setChangeEmail] = useState<string>(email);
    const [changePacientNumber, setChangePacientNumber] = useState<string>(pacientNumber);
  
  const handleDismiss = () => {
    dismiss();
    if (trigerName || trigerEmail || trigerPatientNumber){
      setChangeName(name);
      setChangeEmail(email);
      setChangePacientNumber(pacientNumber);
      console.log('!!'+dictionary.name);
    }
  };


  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    changeName,
    changeEmail,
    changePacientNumber,
    onDismiss: handleDismiss,
    handleSave: onSave,
  });

  return (
      <IonGrid>
            <IonRow>
                <IonText className="per-info-header" style = {{fontSize: 20}}>INFORMAÇÕES PESSOAIS</IonText>
            </IonRow>
            <IonRow>
                <IonText className="info" style = {{fontSize: 15}}><p>Nome do Utilizador: {trigerName ? dictionary.name : name}</p></IonText>
            </IonRow>
            <IonRow>
                <IonText className="info" style = {{fontSize: 15}}><p>Email: {trigerEmail ? dictionary.email : email}</p></IonText>
            </IonRow>
            <IonRow>
              <IonText 
                className="info"
                style={{fontSize: 15}}>
                 <p>Número de Utente: {trigerPatientNumber ? dictionary.pacientNumber : pacientNumber}</p>
                 </IonText>
            </IonRow>
            <IonRow>
              <IonButton 
              className="edit-btn" 
              expand="block" 
              onClick={() => {present({cssClass: 'my-class'})}} >
                    Editar
              </IonButton>
            </IonRow>
        </IonGrid>
  );
};

export default PersonalInfo;