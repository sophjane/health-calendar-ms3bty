import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import ActionScreen from "../components/ActionScreen";
import ThickButton from "../components/ThickButton";
import Toolbar from "../components/Toolbar";
import "./Analysis.css";

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
          <ThickButton onClick={() => history.push("/analysis/analysis-to-do")}>
            Análises A Fazer
          </ThickButton>
          <ThickButton
            onClick={() => history.push("/analysis/analysis-results")}
          >
            Resultados De Análises
          </ThickButton>
        </ActionScreen>
      </IonContent>
    </IonPage>
  );
};

export default Analysis;
