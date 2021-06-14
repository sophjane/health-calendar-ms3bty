import React, { useState } from "react";
import "./Settings.css";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  useIonModal,
  IonInput,
  useIonToast,
  IonItem,
} from "@ionic/react";
import Card from 'react-bootstrap/Card';

interface ContainerProps {
  /*     onSave(arg0 : string, arg1 : string, arg2 : string) : void ; */
  name: string;
  email: string;
  pacientNumber: string;
}

const dictionary = {
  name: "",
  email: "",
  pacientNumber: "",
};

var trigerName = false;
var trigerEmail = false;
var trigerPatientNumber = false;
var trigerCloseWinfo = false;

const Body: React.FC<{
  changeName: string;
  changeEmail: string;
  changePacientNumber: string;
  onDismiss: () => void;
  onSave: (arg0: string, arg1: string, arg2: string) => void;
}> = ({ changeName, changeEmail, changePacientNumber, onDismiss, onSave }) => (
  <div className="grey-background">
    <IonRow className="model-header">
      <IonText className="model-header-text" style={{ fontSize: 20 }}>
        <strong>Atualizar Info Pessoal</strong>
      </IonText>
    </IonRow>
    <IonRow>
      <IonText className="input-title">
        <strong>Nome de Utilizador</strong>
      </IonText>
    </IonRow>
    <IonItem>
      <IonInput
        className="info"
        type="text"
        value={trigerName ? dictionary.name : changeName}
        onIonChange={(e) => {
          dictionary.name = (e.target as HTMLInputElement).value;
          trigerName = true;
        }}
      ></IonInput>
    </IonItem>
    <IonRow>
      <IonText className="input-title">
        <strong>Email</strong>
      </IonText>
    </IonRow>
    <IonItem className="info">
      <IonInput
        type="email"
        value={trigerEmail ? dictionary.email : changeEmail}
        onIonChange={(e) => {
          dictionary.email = (e.target as HTMLInputElement).value;
          trigerEmail = true;
        }}
      ></IonInput>
    </IonItem>
    <IonRow>
      <IonText className="input-title">
        <strong>Número de Paciente</strong>
      </IonText>
    </IonRow>
    <IonItem>
      <IonInput
        className="info"
        value={
          trigerPatientNumber ? dictionary.pacientNumber : changePacientNumber
        }
        onIonChange={(e) => {
          dictionary.pacientNumber = (e.target as HTMLInputElement).value;
          trigerPatientNumber = true;
        }}
      ></IonInput>
    </IonItem>
    <IonRow>
      <IonCol size="6">
        <IonButton
          className="submit-btn"
          expand="block"
          onClick={() => {
            onSave(dictionary.name, dictionary.email, dictionary.pacientNumber);
          }}
        >
          Confirmar
        </IonButton>
      </IonCol>
      <IonCol size="6">
        <IonButton
          className="close-btn"
          expand="block"
          onClick={() => {
            dictionary.name = changeName;
            dictionary.email = changeEmail;
            dictionary.pacientNumber = changePacientNumber;
            onDismiss();
          }}
        >
          Cancelar
        </IonButton>
      </IonCol>
    </IonRow>
  </div>
);

const PersonalInfo: React.FC<ContainerProps> = ({
  name,
  email,
  pacientNumber /*, onSave*/,
}) => {
  const [changeName, setChangeName] = useState<string>(name);
  const [changeEmail, setChangeEmail] = useState<string>(email);
  const [changePacientNumber, setChangePacientNumber] =
    useState<string>(pacientNumber);

  const handleDismiss = () => {
    dismiss();
    trigerCloseWinfo = false;
  };

  const handleSave = () => {
    if(trigerName||trigerEmail||trigerPatientNumber){
      console.log(trigerEmail)
      if(trigerName)
        setChangeName(dictionary.name);
      if(trigerEmail)
        setChangeEmail(dictionary.email);
      if(trigerPatientNumber)
        setChangePacientNumber(dictionary.pacientNumber);
      dismiss();
      presentToast("Informações Atualizadas!", 3000);
      trigerCloseWinfo = true;
    }
  };

  const [presentToast] = useIonToast();

  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    changeName,
    changeEmail,
    changePacientNumber,
    onDismiss: handleDismiss,
    onSave: handleSave,
  });

  return (
    <IonGrid>

<Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title className="card-title">INFORMAÇÕES PESSOAIS</Card.Title>
    <Card.Text>
    <IonRow>
        <IonText className="info" style={{ fontSize: 17 }}>
          <p>Nome do Utilizador: {trigerName ? changeName:name}</p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonText className="info" style={{ fontSize: 17 }}>
          <p>Email: {trigerEmail?changeEmail:email}</p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonText className="info" style={{ fontSize: 17 }}>
          <p>
            Número de Utente:{" "}
            {trigerPatientNumber?changePacientNumber:pacientNumber}
          </p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonButton
          className="edit-btn"
          expand="block"
          onClick={() => {
            present({ cssClass: "my-class" });
          }}
        >
          Editar
        </IonButton>
      </IonRow>
    </Card.Text>
  </Card.Body>
</Card>
      
    </IonGrid>
  );
};

export default PersonalInfo;