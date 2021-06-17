import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import DateButton from "../components/DateButton";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";
import SchedulePopup from "../components/SchedulePopup";

import "./CreateAnalysis.css";

const dummyHospital = [
  { value: "Dr. Francisco Zagalo", label: "Dr. Francisco Zagalo" },
  { value: "Sta. Maria Maior", label: "Sta. Maria Maior" },
  { value: "S. João", label: "S. João" },
  {
    value: "Distrital da Figueira da Foz",
    label: "Distrital da Figueira da Foz",
  },
  { value: "Magalhães Lemos", label: "Magalhães Lemos" },
  { value: "Garcia de Orta", label: "Garcia de Orta" },
  { value: "Luz", label: "Luz" },
  {
    value: "Forças Armadas - Pólo de Lisboa",
    label: "Forças Armadas - Pólo de Lisboa",
  },
];

const dummyClinic = [
  {
    value: "Clínica Médica Nazaré, Lda.",
    label: "Clínica Médica Nazaré, Lda.",
  },
  {
    value: "CLISO Clínica Medicina Trabalho",
    label: "CLISO Clínica Medicina Trabalho",
  },
  {
    value: "BeLife-Gabinete Saúde Integrada",
    label: "BeLife-Gabinete Saúde Integrada",
  },
  { value: "Clínica Osvaldo Moutinho", label: "Clínica Osvaldo Moutinho" },
  { value: "Clínica Saúde Atlântica", label: "Clínica Saúde Atlântica" },
  {
    value: "Clínica Médica de Matosinhos",
    label: "Clínica Médica de Matosinhos",
  },
  {
    value: "Centro Clínico Pedro Santos Saúde",
    label: "Centro Clínico Pedro Santos Saúde",
  },
  { value: "Clínica Euro-Saude", label: "Clínica Euro-Saude" },
];

const CreateAnalysis: React.FC<RouteComponentProps> = ({ history }) => {
  const [selected, setSelected] = useState<string>("Hospital");
  const location = selected === "Hospital" ? dummyHospital : dummyClinic;
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <Toolbar variant="back" title="Marcar Análise"></Toolbar>
      </IonHeader>
      <IonContent>
        <Layout>
          <IonList>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => setSelected(e.detail.value)}
            >
              <IonListHeader>
                <IonLabel style={{ color: "grey", display: "flex" }}>
                  Escolha um local
                </IonLabel>
              </IonListHeader>
              <IonItem>
                <IonLabel>Hospital</IonLabel>
                <IonRadio slot="start" value="Hospital" />
              </IonItem>

              <IonItem>
                <IonLabel>Clínica</IonLabel>
                <IonRadio slot="start" value="Clínica" />
              </IonItem>
            </IonRadioGroup>
            <IonItem className="location-select">
              <IonLabel>{selected}</IonLabel>
              <IonSelect>
                {location.map((e, i) => (
                  <IonSelectOption key={i} value={e.value}>
                    {e.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonList>
          {/* TODO: fazer onClick */}
          <DateButton onClick={setIsDisplayed} isDisplayed={isDisplayed}></DateButton>
            <SchedulePopup onClick={setIsDisplayed} isDisplayed={isDisplayed}></SchedulePopup>
          <IonButton
            className="schedule-btn"
            size="large"
            onClick={() => setIsOpen(true)}
          >
            Marcar
          </IonButton>
          <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            cssClass=""
            header="DESEJA CRIAR LEMBRETE?"
            buttons={[
              {
                text: "SIM",
                handler: () => {
                  // TODO: Redirecionar para definições
                  console.log("Sim");
                },
              },
              {
                text: "NÃO",
                handler: () => {
                  history.push("/appointments");
                },
              },
            ]}
          />
        </Layout>
      </IonContent>
    </IonPage>
  );
};

export default CreateAnalysis;
