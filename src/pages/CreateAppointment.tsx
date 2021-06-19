import Toolbar from "../components/Toolbar";
import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import "./CreateAppointment.css";
import Layout from "../components/Layout";
import DateButton from "../components/DateButton";
import SchedulePopup from "../components/SchedulePopup";

const dummySpecialities = [
  { value: "acupuntura", label: "Acupuntura" },
  { value: "cardiologia", label: "Cardiologia" },
  { value: "dermatologia", label: "Dermatologia" },
  { value: "estomatologia", label: "Estomatologia" },
  { value: "ginecologia", label: "Ginecologia" },
  { value: "infecciologia", label: "Infecciologia" },
  { value: "medicina dentária", label: "Medicina Dentária" },
  { value: "nutrição", label: "Nutrição" },
  { value: "ortopedia", label: "Ortopedia" },
  { value: "pediatria", label: "Pediatria" },
];

const dummyTypeAppointment = [
  { value: "presencial", label: "Presencial" },
  { value: "videochamada", label: "Videochamada" },
];

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
const dummyDoctor = [
  { value: "Dr. Artur Ravara", label: "Dr. Artur Ravara" },
  { value: "Dr. Cândido Pinto", label: "Dr. Cândido Pinto" },
  { value: "Dra. Amélia Oliveira", label: "Dra. Amélia Oliveira" },
  {
    value: "Dr. Egas Moniz",
    label: "Dr. Egas Moniz",
  },
  { value: "Dra.Conceição Fernandes", label: "Dra.Conceição Fernandes" },
  { value: "Dr. João Lopes", label: "Dr. João Lopes" },
  { value: "Dra. Joana Almeida", label: "Dra. Joana Almeida" },
  {
    value: "Dr. Fernando Dias",
    label: "Dr. Fernando Dias",
  },
];

const CreateAppointment: React.FC<RouteComponentProps> = ({ history }) => {
  const [form, setFormValue] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  console.log(form);
  return (
    <IonPage>
      <IonHeader>
        <Toolbar variant="back" title="Marcar Consulta"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <IonItem className="appointment-select">
              <IonLabel>Tipo</IonLabel>
              <IonSelect
                onIonChange={(e) => {
                  setFormValue((s) => ({ ...s, type: e.detail.value }));
                  console.log(e);
                }}
              >
                {dummyTypeAppointment.map((e, i) => (
                  <IonSelectOption key={i} value={e.value}>
                    {e.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem className="appointment-select">
              <IonLabel>Especialidade</IonLabel>
              <IonSelect
                onIonChange={(e) => {
                  setFormValue((s) => ({ ...s, speciality: e.detail.value }));
                  console.log(e);
                }}
              >
                {dummySpecialities.map((e, i) => (
                  <IonSelectOption key={i} value={e.value}>
                    {e.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem className="appointment-select">
              <IonLabel>Hospital</IonLabel>
              <IonSelect
                onIonChange={(e) => {
                  setFormValue((s) => ({ ...s, hospital: e.detail.value }));
                  console.log(e);
                }}
              >
                {dummyHospital.map((e, i) => (
                  <IonSelectOption key={i} value={e.value}>
                    {e.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem className="appointment-select">
              <IonLabel>Médico</IonLabel>
              <IonSelect
                onIonChange={(e) => {
                  setFormValue((s) => ({ ...s, doctor: e.detail.value }));
                  console.log(e);
                }}
              >
                {dummyDoctor.map((e, i) => (
                  <IonSelectOption key={i} value={e.value}>
                    {e.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            {/* TODO: fazer onClick */}
            <DateButton
              onClick={setIsDisplayed}
              isDisplayed={isDisplayed}
            ></DateButton>
            <SchedulePopup
              onClick={setIsDisplayed}
              isDisplayed={isDisplayed}
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
          </form>
        </Layout>
      </IonContent>
    </IonPage>
  );
};

export default CreateAppointment;
