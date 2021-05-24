import React, {useState} from 'react'
import {CalendarComponent, ChangedEventArgs, RenderDayCellEventArgs} from '@syncfusion/ej2-react-calendars'
import {Row, Col} from 'react-bootstrap';
import './Calendar.css'
const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const dateValues = [new Date("05/24/2021"), new Date("05/27/2021"), new Date("05/30/2021")];
    const maxDates = [new Date("06/30/2021")]
    const minDates = [new Date()]
    var currentDay;
    const onClickDay = (args: ChangedEventArgs): void =>{
        currentDay = args.value?.toLocaleDateString();
        console.log(currentDay);   
    }
    const highlightWeekend = (args?: RenderDayCellEventArgs): void =>{
        dateValues.forEach(element => {
            if ((args?.date as Date).toLocaleDateString() === element.toLocaleDateString()) {
                // To highlight the week end of every month
                args?.element?.classList.add('available-day');
                console.log((args?.date as Date).toLocaleDateString())
            }
        });
        
    }
    return (
        <div className="home-calendar">
        <Row className="calendar-header d-flex justify-content-center align-items-center mx-0">
                            <div><h5><strong className="primary">O seu Calendário</strong></h5></div>
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
                    ></CalendarComponent>
        </div>
    )
}

export default Calendar

