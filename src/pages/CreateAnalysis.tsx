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
import React, { useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import DateButton from "../components/DateButton";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";
import SchedulePopup from "../components/SchedulePopup";
import {UserContext} from '../App'

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
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const user = useContext(UserContext);
  const [selHospital, setSelHospital] = useState([""]);
  const [selClinic, setSelClinic] = useState([""]);
  const location = selected === "Hospital" ? selHospital : selClinic;
  const [index, setIndex] = useState(0);

  const setSelectedCity = (city: String) => {
    switch (city) {
      case "Aveiro":
        setSelHospital(user.hospitalList.Aveiro);
        setSelClinic(user.clinicList.Aveiro);
        setIndex(1);
        break;
      case "Almada":
        setSelHospital(user.hospitalList.Almada);
        setSelClinic(user.clinicList.Almada);
        setIndex(0);
        break;
      case "Barcelos":
        setSelHospital(user.hospitalList.Barcelos);
        setSelClinic(user.clinicList.Barcelos);
        setIndex(2);
        break;
      case "Coimbra":
        setSelHospital(user.hospitalList.Coimbra);
        setSelClinic(user.clinicList.Coimbra);
        setIndex(3);
        break;
      case "Fig. Foz":
        setSelHospital(user.hospitalList["Fig. Foz"]);
        setSelClinic(user.clinicList["Fig. Foz"]);
        setIndex(4);
  
        break;
      case "Lisboa":
        setSelHospital(user.hospitalList.Lisboa);
        setSelClinic(user.clinicList.Lisboa);
        setIndex(5);
  
        break;
      case "Ovar":
        setSelHospital(user.hospitalList.Ovar);
        setSelClinic(user.clinicList.Ovar);
        setIndex(6);
  
        break;
      case "Porto":
        setSelHospital(user.hospitalList.Porto);
        setSelClinic(user.clinicList.Porto);
        setIndex(7);
  
        break;
    }
  }
  const setSelectedHospital = (e: String) => {};

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
              <IonItem className="location-select">
                <IonLabel>Cidade</IonLabel>
                <IonSelect
                  okText="Ok"
                  cancelText="Cancelar"
                  onIonChange={(e) => setSelectedCity(e.detail.value)}
                >
                  {user.cityList.map((city, ind) => (
                    <IonSelectOption key={ind} value={city}>
                      {city}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem className="location-select">
                <IonLabel>Hospital</IonLabel>
                <IonRadio slot="start" value="Hospital" />
              </IonItem>

              <IonItem className="location-select">
                <IonLabel>Clínica</IonLabel>
                <IonRadio slot="start" value="Clínica" />
              </IonItem>
            </IonRadioGroup>
            <IonItem className="location-select">
              <IonLabel>{selected}</IonLabel>
              <IonSelect>
                {location.map((e, i) => (
                  <IonSelectOption key={i} value={e}>
                    {e}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonList>
          {/* TODO: fazer onClick */}
          <DateButton
            onClick={setIsDisplayed}
            isDisplayed={isDisplayed}
          ></DateButton>
          <SchedulePopup
            onClick={setIsDisplayed}
            isDisplayed={isDisplayed}
            path={"analysis"}
          ></SchedulePopup>
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
                  history.push("/settings");
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
