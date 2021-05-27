import React, {useState} from 'react';
import "./Settings.css"
import { IonButton,
    IonCol,
    IonInput,
    IonItem, 
    IonLabel,
    IonList,
    IonRow,  
    IonSelect, 
    IonSelectOption, 
    IonText,
    useIonModal,
    useIonToast} from '@ionic/react';

/*button with password + hospital chosen*/
var trigerPassword = false;
var trigerConfirmation = false;
var password = '';
var checkPassword = '';

const Model: React.FC<{
  changePassword : string;
  checkChangedPassword : string;
  onDismiss: () => void;
  onSave: (arg0: string, arg1: string) => void;
}> = ({changePassword, checkChangedPassword, onDismiss, onSave}) => (
  <div className="grey-background">
    <IonRow className="model-header">
      <IonText className="model-header-text" style = {{fontSize: 20}}>
        <strong >Alterar Palavra Passe</strong>
      </IonText>
    </IonRow>
    <IonRow>
      <IonText className="input-title"><strong>Nova Palavra Passe</strong></IonText>
    </IonRow>
    <IonItem>
      <IonInput className="info"
      type="password" 
      placeholder="Nova palavra-passe..."
      value={changePassword}  onIonChange={(e) => {password = (e.target as HTMLInputElement).value; trigerPassword = true} }></IonInput>
    </IonItem>
    <IonRow>
      <IonText className="input-title"><strong>Confirmar Nova Palavra Passe</strong></IonText>
    </IonRow>
    <IonItem>
      <IonInput className="info" 
      type="password" 
      value={checkChangedPassword}
      placeholder="Confirme a palavra-passe..."  onIonChange={(e) => {checkPassword = (e.target as HTMLInputElement).value; trigerConfirmation = true} }></IonInput>
    </IonItem>
    <IonRow>
          <IonCol size="6">
        <IonButton className="submit-btn" expand="block" onClick={() => {
          onSave(password, changePassword)}}>
            Atualizar
        </IonButton>
        </IonCol>
        <IonCol size="6">
        <IonButton className="close-btn" expand="block" onClick={() => onDismiss()}>
            Close
        </IonButton>
        </IonCol>
        </IonRow>
  </div>
);

const Buttons: React.FC = () => {
    
    const handleDismiss = () => {
      dismiss();
    }
    const handlesave = () => {
      if (trigerPassword && trigerConfirmation){
        if(password.length >3 ){
          if (password === checkPassword){
              console.log(password);
              presentToast('Palavra passe mudada com sucesso!', 3000)
              trigerPassword = false;
              trigerConfirmation = false;
          }else{
            presentToast('Escreva a mesma palavra-passe!', 3000)
          }
        }else{
          presentToast('Palavra passe tem que mais de 3 caractéres!', 3000)
        }
      }else{
        presentToast('Precisa de preencher as 2 caixas de texto!', 3000)
      }
    }

    const [present, dismiss] = useIonModal(Model, {
      password,
      checkPassword,
      onDismiss: handleDismiss,
      onSave: handlesave,
    });

     const [presentToast] =useIonToast();


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

    

    var passwordButton = (     
      <IonButton expand="block"
              onClick={() => {
                present({cssClass: 'my-class'})
              }}
            >
              Alterar Palavra Passe
            </IonButton>
    )

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
      {passwordButton}
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