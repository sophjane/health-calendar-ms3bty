import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import Toolbar from "../components/Toolbar";
import List from "../components/AnalysisToDo/List";



const AnalysisResults: React.FC<RouteComponentProps> = ({ history }) => {
  const analysisType = {type : "todo"};
  return (
    <IonPage>
      <IonHeader>
        <Toolbar variant="back" title="Resultados de Análises"></Toolbar>
      </IonHeader>
      <IonContent>
        <List {...analysisType}/>
      </IonContent>
    </IonPage>
  );
};

export default AnalysisResults;