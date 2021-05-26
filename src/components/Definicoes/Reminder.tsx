import React, {useState} from 'react';
import "./Settings.css"
import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonText } from '@ionic/react';


const Reminder: React.FC = () => {
    const [days, setDays] = useState<string>('1');
    const [hours, setHours] = useState<string>('0');
    const [minutes, setMinutes] = useState<string>('0');
    return (
        <IonGrid>
            <IonRow>
                <IonText className="per-info-header" style = {{fontSize: 20}}>LEMBRETE</IonText>
            </IonRow>
            <IonRow>
                <p className="info">Lembrar-me sempre antes das consultas</p>
            </IonRow>
            <IonRow>
                <IonCol size="4">
                    <IonList>
                        <IonItem>
                            <IonLabel>Dias</IonLabel>
                            <IonSelect value={days} okText="Okay" cancelText="Dismiss" onIonChange={e => setDays(e.detail.value)}>
                                {/* {for (var i = 0; i<10; i++){
                                    <IonSelectOption value=i>i</IonSelectOption>
                                }} */}
                                <IonSelectOption value='0'>0</IonSelectOption>
                                <IonSelectOption value='1'>1</IonSelectOption>
                                <IonSelectOption value='2'>2</IonSelectOption>
                                <IonSelectOption value='3'>3</IonSelectOption>
                                <IonSelectOption value='4'>4</IonSelectOption>
                                <IonSelectOption value='5'>5</IonSelectOption>
                                <IonSelectOption value='6'>6</IonSelectOption>
                                <IonSelectOption value='7'>7</IonSelectOption>
                                <IonSelectOption value='8'>8</IonSelectOption>
                                <IonSelectOption value='9'>9</IonSelectOption>
                                <IonSelectOption value='10'>10</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                </IonCol>
                <IonCol size="4">
                    <IonList>
                        <IonItem>
                            <IonLabel>Horas</IonLabel>
                            <IonSelect value={hours} okText="Okay" cancelText="Dismiss" onIonChange={e => setHours(e.detail.value)}>
                            <IonSelectOption value='0'>0</IonSelectOption>
                                <IonSelectOption value='1'>1</IonSelectOption>
                                <IonSelectOption value='2'>2</IonSelectOption>
                                <IonSelectOption value='3'>3</IonSelectOption>
                                <IonSelectOption value='4'>4</IonSelectOption>
                                <IonSelectOption value='5'>5</IonSelectOption>
                                <IonSelectOption value='6'>6</IonSelectOption>
                                <IonSelectOption value='7'>7</IonSelectOption>
                                <IonSelectOption value='8'>8</IonSelectOption>
                                <IonSelectOption value='9'>9</IonSelectOption>
                                <IonSelectOption value='10'>10</IonSelectOption>
                                <IonSelectOption value='11'>11</IonSelectOption>
                                <IonSelectOption value='12'>12</IonSelectOption>
                                <IonSelectOption value='13'>13</IonSelectOption>
                                <IonSelectOption value='14'>14</IonSelectOption>
                                <IonSelectOption value='15'>15</IonSelectOption>
                                <IonSelectOption value='16'>16</IonSelectOption>
                                <IonSelectOption value='17'>17</IonSelectOption>
                                <IonSelectOption value='18'>18</IonSelectOption>
                                <IonSelectOption value='19'>19</IonSelectOption>
                                <IonSelectOption value='20'>20</IonSelectOption>
                                <IonSelectOption value='21'>21</IonSelectOption>
                                <IonSelectOption value='22'>22</IonSelectOption>
                                <IonSelectOption value='23'>23</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                </IonCol>
                <IonCol size="4">
                    <IonList>
                        <IonItem>
                            <IonLabel>Minutos</IonLabel>
                            <IonSelect value={minutes} okText="Okay" cancelText="Dismiss" onIonChange={e => setMinutes(e.detail.value)}>
                            <IonSelectOption value='0'>0</IonSelectOption>
                                <IonSelectOption value='5'>5</IonSelectOption>
                                <IonSelectOption value='10'>10</IonSelectOption>
                                <IonSelectOption value='15'>15</IonSelectOption>
                                <IonSelectOption value='20'>20</IonSelectOption>
                                <IonSelectOption value='25'>25</IonSelectOption>
                                <IonSelectOption value='30'>30</IonSelectOption>
                                <IonSelectOption value='35'>35</IonSelectOption>
                                <IonSelectOption value='40'>40</IonSelectOption>
                                <IonSelectOption value='45'>45</IonSelectOption>
                                <IonSelectOption value='50'>50</IonSelectOption>
                                <IonSelectOption value='55'>55</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Reminder;