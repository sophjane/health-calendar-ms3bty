import React, {useState} from 'react';
import "./Settings.css"
import {IonContent, IonItem, IonLabel, IonList, IonSelect, IonSelectOption} from '@ionic/react';

const Buttons: React.FC = () => {
    
    const cities = [
      'Aveiro', 'Coimbra'
    ]

    const hospitals = {
      'Aveiro' : ['Centro Hospitalar Baixo Vouga', 'Hospital da Luz', 'Hospital Infante D. Pedro'],
      'Coimbra' : ['Centro Hospitalar Universitátio de Coimbra', 'Hospital CUF']
    }
    const [city, setCity] = useState<string>(cities[0]);
    const [hospital, setHospital] = useState<string>(hospitals.Aveiro[0]);
    var display = null;
    if (city === 'Aveiro' ){
        display = (
          <IonList>
            <IonItem>
            <IonLabel>Hospital em {city}</IonLabel>
            <IonSelect value={hospital} okText="Okay" cancelText="Dismiss" onIonChange={e => setHospital(e.detail.value)}>
            {hospitals.Aveiro.map((h, index) => (<IonSelectOption key={index} value={h}>{h}</IonSelectOption>))}
            </IonSelect>
            </IonItem>
          </IonList>
        );
    }
    else if (city === 'Coimbra'){
      display = (
        <IonList>
          <IonItem>
            <IonLabel>Hospital em {city}</IonLabel>
            <IonSelect value={hospital} okText="Okay" cancelText="Dismiss" onIonChange={e => setHospital(e.detail.value)}>
              {hospitals.Coimbra.map((h, index) => (<IonSelectOption key={index} value={h}>{h}</IonSelectOption>))}
              </IonSelect>
          </IonItem>
        </IonList>
      )
    }
    return (
      <>
        <IonList>
          <IonItem>
            <IonLabel>Cidade</IonLabel>
              <IonSelect value={city} okText="Okay" cancelText="Dismiss" onIonChange={e => setCity(e.detail.value)}>
                {cities.map((c, index) => (<IonSelectOption key={index} value={c}>{c}</IonSelectOption>))}
              </IonSelect>
            </IonItem>
        </IonList>
        {display}
      </>
    );
}


export default Buttons;