import React, {useState,} from 'react';
//import Calendar from 'react-calendar';

import {IonGrid, IonRow, IonCol, IonContent, IonText } from '@ionic/react';
//import Calendar from './Calendar';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/flex-utils.css';
import "./HomeCalendar.css";
import { construct } from 'ionicons/icons';

interface person {
    name: string;
    sex: string;
  }


const HomeCalendar: React.FC<person> = ({ name, sex }) => {
    const genderNoun = sex =="M" ? "o" : "a";
    return (
        <div style={{height:"100%"}}>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-end">
                        <IonCol size="6" className="person-name"> 
                            <strong>Bem vind{genderNoun} <IonText color="primary">{name}</IonText></strong>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                    
                    </IonRow>
                </IonGrid>
            </IonContent>
            
        </div>
            
    );
  };
  
  export default HomeCalendar;