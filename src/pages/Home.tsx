import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonText,
  IonButton,
  IonLabel,
  IonHeader,
  IonPage,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Toolbar from "../components/Toolbar";
import Calendar from "../components/HomeComponents/Calendar";

import "./Home.css";

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const personDetails = {
    name: "Joana",
    sex: "F",
  };
  const genderNoun = personDetails.sex == "M" ? "o" : "a";
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <Toolbar variant="logo" title="Health Calendar"></Toolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="ion-justify-content-end">
            <IonCol className="person-name d-flex align-items-center justify-content-end">
              <strong>
                Bem vind{genderNoun}
                <IonText> {personDetails.name} </IonText>👋🏻
              </strong>
            </IonCol>
          </IonRow>
          <IonRow className="d-flex flex-grow-1 justify-content-center flex-column align-items-center ">
            <Calendar />
          </IonRow>
          <IonRow className="button-row d-flex justify-content-between mx-auto mt-3 pt-3">
            <IonButton
              color="primary"
              onClick={() => history.push("/appointments")}
            >
              <IonLabel>Marcar Consulta/Análise</IonLabel>
            </IonButton>
            <IonButton onClick={() => history.push("/analysis")}>
              <IonLabel>As Minhas Análises</IonLabel>
            </IonButton>
          </IonRow>
          <IonRow className="d-flex justify-content-center my-3 pt-3 mx-auto button-row">
            <IonButton
              color="primary"
              onClick={() => history.push("/videocall")}
            >
              <IonLabel>Video-Chamada</IonLabel>
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
