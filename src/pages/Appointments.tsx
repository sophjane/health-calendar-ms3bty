import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import ActionScreen from "../components/ActionScreen";
import ThickButton from "../components/ThickButton";
import Toolbar from "../components/Toolbar";
import "./Appointments.css";

const Appointments: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Consultas"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ActionScreen
          alertHeader="MARCAR"
          alertMessage="Pode marcar consulta com o seu médico ou marcar consulta para fazer análises clínicas"
        >
          <ThickButton onClick={() => history.push("/appointments/create")}>
            Marcar Consulta
          </ThickButton>
          <ThickButton onClick={() => history.push("/")}>
            Marcar Análise
          </ThickButton>
        </ActionScreen>
      </IonContent>
    </IonPage>
  );
};

export default Appointments;
