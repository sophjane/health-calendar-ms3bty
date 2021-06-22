import React, {useContext,useState} from 'react'
import {UserContext} from '../../App'
import {CalendarComponent, ChangedEventArgs, RenderDayCellEventArgs} from '@syncfusion/ej2-react-calendars'
import {Row, Col} from 'react-bootstrap';
import './Calendar.css'
import { IonButton, IonLabel, IonText } from '@ionic/react';
const Calendar = () => {
    const user = useContext(UserContext);
    const [date, setDate] = useState(new Date());
    const dateAnalysis:Array<Date> = [];
    const dateAppointments:Array<Date> = [];
    user.scheduledAppointments.forEach(element => {
        dateAppointments.push(new Date(element))
    });
    user.scheduledAnalysis.forEach(element => {
        dateAppointments.push(new Date(element))
    });
    
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
                                <IonButton href="/settings" size="small" className="col-sm-4 col-lg-5"><IonLabel>Adicionar Lembrete</IonLabel></IonButton></div>
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


