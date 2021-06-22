import { IonButton, IonModal, IonItem, IonLabel, IonToolbar, IonTitle, IonRadioGroup, IonRadio} from "@ionic/react";
import React, { useState, useContext } from "react";
import {UserContext} from '../../App'

import "./index.css";

import {CalendarComponent, ChangedEventArgs, RenderDayCellEventArgs} from '@syncfusion/ej2-react-calendars'

interface DateButtonProps {
  isDisplayed:boolean,
  onClick: (arg0:boolean) => void,
  path: string
}

const SchedulePopup = ({ isDisplayed, onClick, path }: DateButtonProps) => {
  var currentDay: string | undefined;
  const user = useContext(UserContext);
  const hoursOnDay = [
    {
      date:"03/07/2021",
      hours: ['9','10','16']
    },
    {
      date:"30/06/2021",
      hours: ['10','14','17']
    },
    {
      date:"12/07/2021",
      hours: ['9','11']
    },
    {
      date:"20/07/2021",
      hours: ['9','11', '12', '17']
    }
  ]
  var selectedDay:string[] = [];
  const [selected, setSelected] = useState(selectedDay);
  const [hasSelected, setHasSelected] = useState(false);
  const onClickDay = (args: ChangedEventArgs): void =>{
    currentDay = args.value?.toLocaleDateString();
    console.log(currentDay);
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
  const highlightWeekend = (args?: RenderDayCellEventArgs): void =>{
    hoursOnDay.forEach(element => {
      console.log((args?.date as Date).toLocaleDateString())
        if ((args?.date as Date).toLocaleDateString() === element.date) {
            
            args?.element?.classList.add('appointment');
        }
    });
    
}
  return (
    <IonModal isOpen={isDisplayed}>
      <div className="align-self-start">
      <IonToolbar className=""><IonTitle style={{height:"100%", width:"100%"}} className="align-self-center">Escolha o Dia</IonTitle></IonToolbar>
      <CalendarComponent
                    id="calendar"   
                    isMultiSelection={false}
                    depth="Month"
                    renderDayCell={highlightWeekend}
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
        <IonButton className="mt-5" 
        onClick={() => {
          onClick(!isDisplayed);
          if(path==="appointment"){
          user.setHasScheduledAppointment(true);
        }else if(path==="analysis"){
          user.setHasScheduledAnalysis(true);
        }
          }}>Confirmar</IonButton>
        
      </IonModal>
  );
};

export default SchedulePopup;