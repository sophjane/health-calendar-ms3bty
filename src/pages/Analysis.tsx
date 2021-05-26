import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import ActionScreen from "../components/ActionScreen";
import ThickButton from "../components/ThickButton";
import Toolbar from "../components/Toolbar";
import "./Analysis.css";
import Analysis_ToDo from "./Analysis_ToDo";

const Analysis: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Análises"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ActionScreen
          alertHeader="ANÁLISES"
          alertMessage="Pode obter a sua lista de exames/análises a fazer ou obter os seus resultados"
        >
          <ThickButton onClick={() => history.push("/")}>
            Análises A Fazer
          </ThickButton>
          <ThickButton onClick={() => history.push("/")}>
            Resultados De Análises
          </ThickButton>
        </ActionScreen>
        <Analysis_ToDo />
      </IonContent>
    </IonPage>
  );
};

export default Analysis;
