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

interface ContainerProps {
  /*     onSave(arg0 : string, arg1 : string, arg2 : string) : void ; */
  name: string;
  email: string;
  pacientNumber: string;
}

const dictionary = {
  name: ""
};

var trigerName = false;
var trigerCloseWinfo = false;

const Body: React.FC<{
  changeName: string;
  onDismiss: () => void;
  onSave: (arg0: string) => void;
}> = ({ changeName, onDismiss, onSave }) => (
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
      <IonCol size="6">
        <IonButton
          className="submit-btn"
          expand="block"
          onClick={() => {
            console.log(dictionary.name);
            onSave(dictionary.name);
            console.log("cliquei");
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
            onDismiss();
          }}
        >
          Cancelar
        </IonButton>
      </IonCol>
    </IonRow>
  </div>
);

const Info: React.FC<ContainerProps> = ({
  name
}) => {
  const [changeName, setChangeName] = useState<string>(name);

  const handleDismiss = () => {
    if (!trigerCloseWinfo) {
      trigerName = false;
    }
    dismiss();
    trigerCloseWinfo = false;
  };

  const handleSave = () => {
    if (trigerName) {
      setChangeName(dictionary.name);
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
          <p>Nome do Utilizador: {changeName}</p>
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

export default Info;