import React, { useState } from "react";
//import Calendar from 'react-calendar';

import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonText,
  IonButton,
  IonLabel,
} from "@ionic/react";

import icon from "%PUBLIC_URL%/assets/icon/favicon.png";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/flex-utils.css";
import "./HomeCalendar.css";
import Calendar from "./Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

interface person {
  name: string;
  sex: string;
}

const HomeCalendar: React.FC<person> = ({ name, sex }) => {
  const genderNoun = sex == "M" ? "o" : "a";
  return (
    <div style={{ height: "100%" }}>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-start">
            <IonCol>
              <img
                src={process.env.PUBLIC_URL + "/assets/icon/icon.png"}
                style={{ maxHeight: "50px" }}
              ></img>
            </IonCol>
            <IonCol className="person-name d-flex align-items-center">
              <strong>
                Bem vind{genderNoun} <IonText color="primary">{name}</IonText>
              </strong>
            </IonCol>
          </IonRow>
          <IonRow className="d-flex flex-grow-1 justify-content-center flex-column align-items-center ">
            <Calendar />
          </IonRow>
          <IonRow className="button-row d-flex justify-content-between mx-auto mt-3 pt-3">
            <IonButton color="primary" href="/appointments  ">
              <IonLabel>Marcar Consulta/Análise</IonLabel>
            </IonButton>
            <IonButton href="/analysis">
              <IonLabel>As Minhas Análises</IonLabel>
            </IonButton>
          </IonRow>
          <IonRow className="d-flex justify-content-center my-3 pt-3 mx-auto button-row">
            <IonButton color="danger" href="/home/videocall">
              <IonLabel>Video-Chamada</IonLabel>
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};

export default HomeCalendar;
