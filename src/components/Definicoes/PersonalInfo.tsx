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
} from "@ionic/react";

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
    <IonRow>
      <IonInput
        className="info"
        type="text"
        value={trigerName ? dictionary.name : changeName}
        onIonChange={(e) => {
          dictionary.name = (e.target as HTMLInputElement).value;
          trigerName = true;
        }}
      ></IonInput>
    </IonRow>
    <IonRow>
      <IonText className="input-title">
        <strong>Email</strong>
      </IonText>
    </IonRow>
    <IonRow className="info">
      <IonInput
        type="email"
        value={trigerEmail ? dictionary.email : changeEmail}
        onIonChange={(e) => {
          dictionary.email = (e.target as HTMLInputElement).value;
          trigerEmail = true;
        }}
      ></IonInput>
    </IonRow>
    <IonRow>
      <IonText className="input-title">
        <strong>Número de Paciente</strong>
      </IonText>
    </IonRow>
    <IonRow>
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
    </IonRow>
    <IonRow>
      <IonCol size="6">
        <IonButton
          className="submit-btn"
          expand="block"
          onClick={() => {
            console.log(dictionary.name);
            onSave(dictionary.name, dictionary.email, dictionary.pacientNumber);
          }}
        >
          Atualizar
        </IonButton>
      </IonCol>
      <IonCol size="6">
        <IonButton
          className="close-btn"
          expand="block"
          onClick={() => {
            onDismiss();
          }}
        >
          Close
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
    if (!trigerCloseWinfo) {
      trigerName = false;
      trigerEmail = false;
      trigerPatientNumber = false;
    }
    dismiss();
    trigerCloseWinfo = false;
  };

  const handleSave = () => {
    if (trigerName || trigerEmail || trigerPatientNumber) {
      setChangeName(name);
      setChangeEmail(email);
      setChangePacientNumber(pacientNumber);
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
      <IonRow>
        <IonText className="per-info-header" style={{ fontSize: 20 }}>
          INFORMAÇÕES PESSOAIS
        </IonText>
      </IonRow>
      <IonRow>
        <IonText className="info" style={{ fontSize: 15 }}>
          <p>Nome do Utilizador: {trigerName ? dictionary.name : name}</p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonText className="info" style={{ fontSize: 15 }}>
          <p>Email: {trigerEmail ? dictionary.email : email}</p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonText className="info" style={{ fontSize: 15 }}>
          <p>
            Número de Utente:{" "}
            {trigerPatientNumber ? dictionary.pacientNumber : pacientNumber}
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
    </IonGrid>
  );
};

export default PersonalInfo;
