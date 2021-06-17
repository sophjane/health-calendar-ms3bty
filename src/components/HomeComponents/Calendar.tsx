import React, {useState} from 'react'
import {CalendarComponent, ChangedEventArgs, RenderDayCellEventArgs} from '@syncfusion/ej2-react-calendars'
import {Row, Col} from 'react-bootstrap';
import './Calendar.css'
import { IonButton, IonLabel, IonText } from '@ionic/react';
const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const dateAnalysis = [new Date("06/10/2021"), new Date("05/27/2021"), new Date("06/12/2021")];
    const dateAppointments = [new Date("06/02/2021"), new Date("06/01/2021"), new Date("05/30/2021")];
    const maxDates = [new Date("06/30/2021")]
    const minDates = [new Date()];
    console.log((new Date()).getHours() - (new Date("06/30/2021")).getHours())
    var currentDay;
    const onClickDay = (args: ChangedEventArgs): void =>{
        currentDay = args.value?.toLocaleDateString();
        console.log(currentDay);   
    }
    const highlightWeekend = (args?: RenderDayCellEventArgs): void =>{
        dateAnalysis.forEach(element => {
            if ((args?.date as Date).toLocaleDateString() === element.toLocaleDateString()) {
                // To highlight the week end of every month
                args?.element?.classList.add('analysis');
            }
        });
        dateAppointments.forEach(element => {
            if ((args?.date as Date).toLocaleDateString() === element.toLocaleDateString()) {
                // To highlight the week end of every month
                args?.element?.classList.add('appointment');
            }
        });
        
    }
    return (
        <div className="home-calendar">
        <Row className="mx-0">
                            <div className="calendar-header d-flex flex-row justify-content-between mx-0" style={{width:"100%"}} > 
                                <IonText className="d-flex align-items-center col-sm-6" color="light">
                                <h4 style={{fontWeight:"bold"}} id="your-calendar" className="my-0 ml-2">O seu Calendário</h4>
                                </IonText>
                                <IonButton href="/settings" size="default" className="col-sm-4 col-lg-5"><IonLabel>Adicionar Lembrete</IonLabel></IonButton></div>
                        </Row>
            <CalendarComponent
                    id="calendar"
                    value={date}
                    renderDayCell={highlightWeekend}
                    isMultiSelection={false}
                    depth="Month"
                    onChange={onClickDay}
                    min={minDates[0]}
                    max={maxDates[0]}
                    showTodayButton={false}
                    ></CalendarComponent>
        </div>
    )
}

export default Calendar


