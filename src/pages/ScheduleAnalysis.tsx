import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";

const ScheduleAnalysis: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Marcar Análises"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout>
            <div>Hello</div>
        </Layout>
      </IonContent>
    </IonPage>
  );
};

export default ScheduleAnalysis;
