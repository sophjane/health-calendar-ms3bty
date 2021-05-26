import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";
import "./VideoCall.css";
import { differenceInDays, differenceInHours, isEqual } from "date-fns";

const VideoCall: React.FC<RouteComponentProps> = () => {
  const days = differenceInDays(new Date("06/30/2021"), new Date());
  const hours = differenceInHours(new Date("06/30/2021"), new Date());
  const isDanger = days > 0;
  const isWarning = days === 0 && hours > 0;
  // const isSuccess = isEqual(new Date("06/30/2021"), new Date());
  const colorButton =
    (isDanger && "danger") || (isWarning && "warning") || "success";
  const messageButton =
    (isDanger && `A sua consulta será em ${days} dias`) ||
    (isWarning && `A sua consulta será em ${hours} horas`) ||
    "Entrar na reunião";

  return (
    <IonPage>
      <IonHeader>
        <Toolbar variant="back" title="Video-Chamada"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout>
          <IonList>
            <IonItem>
              <IonLabel>
                <b className="bold-name">Médico:</b> Dr. Fernando Dias
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <b className="bold-name">Utente:</b> Joana Silva
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <b className="bold-name">Nº de Utente:</b> 123456789
              </IonLabel>
            </IonItem>
          </IonList>
          <div className="chip">
            <IonChip className="chip-type">
              <IonLabel>Dermatologia</IonLabel>
            </IonChip>
          </div>
          <IonNote color="primary">Consulta marcada no dia 06/30/2021</IonNote>
          <br />
          <IonButton color={colorButton} className="videocall-button">
            {messageButton}
          </IonButton>
        </Layout>
      </IonContent>
    </IonPage>
  );
};

export default VideoCall;
