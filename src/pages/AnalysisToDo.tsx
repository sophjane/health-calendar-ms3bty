import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";

const AnalysisToDo: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar variant="back" title="Análises A Fazer"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout>Hi</Layout>
      </IonContent>
    </IonPage>
  );
};

export default AnalysisToDo;
