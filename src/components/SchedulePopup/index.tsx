import { IonButton, IonModal, IonItem, IonLabel, IonToolbar, IonTitle, IonRadioGroup, IonRadio} from "@ionic/react";
import React, { useState } from "react";
import "./index.css";

import {CalendarComponent, ChangedEventArgs, RenderDayCellEventArgs} from '@syncfusion/ej2-react-calendars'

interface DateButtonProps {
  isDisplayed:boolean,
  onClick: (arg0:boolean) => void
}

const SchedulePopup = ({ isDisplayed, onClick }: DateButtonProps) => {
  var currentDay: string | undefined;
  const hoursOnDay = [
    {
      date:"17/06/2021",
      hours: ['9','10','16']
    },
    {
      date:"01/06/2021",
      hours: ['10','14','17']
    },
    {
      date:"30/05/2021",
      hours: ['9','11']
    }
  ]
  var selectedDay:string[] = [];
  const [selected, setSelected] = useState(selectedDay);
  const [hasSelected, setHasSelected] = useState(false);
  const onClickDay = (args: ChangedEventArgs): void =>{
    currentDay = args.value?.toLocaleDateString();
    
    hoursOnDay.map((day) => (day.date===currentDay &&  setSelected(day.hours)))
    setHasSelected(true);
}
  var count =0;
  const setHour = (e: React.MouseEvent<HTMLIonRowElement, MouseEvent>) =>  {
    if(count==0){
      e.currentTarget.classList.add("selected-hour")
      count++;
  }
  }
  return (
    <IonModal isOpen={isDisplayed}>
      <div className="align-self-start">
      <IonToolbar className=""><IonTitle style={{height:"100%", width:"100%"}} className="align-self-center">Escolha o Dia</IonTitle></IonToolbar>
      <CalendarComponent
                    id="calendar"   
                    isMultiSelection={false}
                    depth="Month"
                    showTodayButton={false}
                    onChange={onClickDay}
                    min={new Date()}
        />
        <IonToolbar className=""><IonTitle>Escolha a Hora</IonTitle></IonToolbar>
        <IonRadioGroup>
        {hasSelected && selected.map((hour, index) => (
          <IonItem className="ml-3 mb-3 available-hour">
            <IonLabel>Marcar para as {hour} horas</IonLabel>
            <IonRadio slot="start" color="success" value={hour}></IonRadio>
            </IonItem>
        ))
        }</IonRadioGroup>
        </div>
        <IonButton className="mt-5" onClick={() => onClick(!isDisplayed)}>Confirmar</IonButton>
        
      </IonModal>
  );
};

export default SchedulePopup;