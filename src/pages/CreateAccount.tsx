import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonGrid,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonButton,
  IonText,
  useIonToast,
  IonList,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import Toolbar from '../components/Toolbar'
import { useContext, useState } from 'react'
import { UserContext } from '../App'

const CreateAccount: React.FC<RouteComponentProps> = ({ history }) => {
  const user = useContext(UserContext);
  const [pass, setPass] = useState(false);
  const [password, setPassword] = useState("");
  const [selHospital, setSelHospital] = useState([""]);
  const [index, setIndex] = useState(0);
  const [present] = useIonToast();
  const checkPassword = (e: Event) => {
    const confPassword = (e.target as HTMLInputElement).value;
    if (confPassword.length >= password.length) {
      if (confPassword == password) {
        setPass(true);
      } else {
        present("As palavras-passe não coincidem!", 1000);
      }
    }
  }
  const setSelectedCity = (city: String) => {
    switch (city) {
      case ('Aveiro'):
        setSelHospital(user.hospitalList.Aveiro);
        setIndex(1);
        break;
      case ('Almada'):
        setSelHospital(user.hospitalList.Almada);
        setIndex(0);
        break;
      case ('Barcelos'):
        setSelHospital(user.hospitalList.Barcelos);
        setIndex(2);
        break;
      case ('Coimbra'):
        setSelHospital(user.hospitalList.Coimbra);
        setIndex(3);
        break;
      case ('Fig. Foz'):
        setSelHospital(user.hospitalList['Fig. Foz']);
        setIndex(4);

        break;
      case ('Lisboa'):
        setSelHospital(user.hospitalList.Lisboa);
        setIndex(5);

        break;
      case ('Ovar'):
        setSelHospital(user.hospitalList.Ovar);
        setIndex(6);

        break;
      case ('Porto'):
        setSelHospital(user.hospitalList.Porto);
        setIndex(7);

        break;
    }
    var c = user.userInfo;
    c.Cidade=city;
    user.setUserInfo(c);
  }
  const setSelectedHospital = (e: String) => {

  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Criar Conta" variant="back"></Toolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="d-flex justify-content-center mt-5 mb-3">
            <IonText className="align-self-center mx-3">Nova Conta</IonText>
            <img className="mx-3" src={process.env.PUBLIC_URL + '/favicon2.png'} style={{ maxHeight: "75px" }}></img>
          </IonRow>
          <IonRow className="d-flex flex-column mt-3 mb-3">
            <IonItem>
              <IonLabel position="stacked"> Nome do Utilizador</IonLabel>
              <IonInput placeholder="Nome Completo" type="text" clearInput> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"> Email</IonLabel>
              <IonInput placeholder="Email" type="email" clearInput> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"> Palavra-Passe</IonLabel>
              <IonInput placeholder="Palavra-Passe" type="password" onIonChange={(e) => setPassword((e.target as HTMLInputElement).value)} clearInput> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Confirmar Palavra-Passe</IonLabel>
              <IonInput placeholder="Palavra-Passe" type="password" onIonChange={(e) => { checkPassword(e) }} clearInput> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"> Número do Utente</IonLabel>
              <IonInput placeholder="123456789" type="email" clearInput> </IonInput>
            </IonItem>
          </IonRow>
          <IonRow className="d-flex flex-column justify-content-between mt-4 mb-3">
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Escolha a sua Cidade</IonLabel>
                <IonSelect value={user.cityList[index]} okText="Ok" cancelText="Cancelar" onIonChange={e => setSelectedCity(e.detail.value)}>
                  {user.cityList.map((city, ind) => (<IonSelectOption key={ind} value={city}>{city}</IonSelectOption>))}
                </IonSelect>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Escolha o seu Hospital</IonLabel>
                <IonSelect value={selHospital[0]} okText="Ok" cancelText="Cancelar" onIonChange={e => setSelectedHospital(e.detail.value)}>
                  {selHospital.map((h,ind) => (<IonSelectOption key={ind} value={h}>{h}</IonSelectOption>))}
                </IonSelect>
              </IonItem>
            </IonList>
          </IonRow>
          <IonRow className="d-flex justify-content-center">
            <IonButton className="col-md-4 my-2"
              onClick={() => {
                if (pass) {
                  history.push("/login");
                  user.setCreateAcc(0)
                }else{
                  present("Por favor preencha os campos!", 1000)
                }
              }}><IonLabel>Criar Conta</IonLabel></IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;