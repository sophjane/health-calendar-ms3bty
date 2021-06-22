import { Redirect, Route } from "react-router-dom";
import React, {useState} from "react"
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  RouteManagerContext,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calendarOutline,
  homeOutline,
  readerOutline,
  settingsOutline,
} from "ionicons/icons";


import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import MainApp from './MainApp'
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./App.css";
import "./theme/variables.css";

interface IUserManager {
  setIsLoggedIn : Function;
  setCreateAcc : Function;
  userInfo : {
    "Nome":String,
    "Email":String,
    "Password":String,
    "NumUtente":Number,
    "Cidade":String,
    "Hospital":String
  };
  setUserInfo : Function;
  cityList : Array<String>;
  hospitalList: {
    'Almada' : ['Garcia de Orta'],
    'Aveiro' : ['Centro Hospitalar Baixo Vouga', 'Hospital da Luz', 'Hospital Infante D. Pedro'],
    'Barcelos' : ["Sta. Maria Maior"],
    'Coimbra' : ['Centro Hospitalar Universitátio de Coimbra', 'Hospital CUF'],
    'Fig. Foz' : ["Distrital da Figueira da Foz"],
    'Lisboa' : ['Forças Armadas - Pólo de Lisboa'],
    'Ovar' : ['Dr. Francisco Zagalo'],
    'Porto' : ["Magalhães Lemos", 'S. João']
   };
   scheduledAppointments : Array<string>;
   scheduledAnalysis : Array<string>;
}
const user: IUserManager = {
  setIsLoggedIn : () =>{},
  setCreateAcc : () =>{},
  userInfo : {
    "Nome":"",
    "Email":"",
    "Password":"",
    "NumUtente":0,
    "Cidade":"",
    "Hospital":""
  },
  setUserInfo: () =>{},
  cityList: [],
  hospitalList: {
    'Almada' : ['Garcia de Orta'],
    'Aveiro' : ['Centro Hospitalar Baixo Vouga', 'Hospital da Luz', 'Hospital Infante D. Pedro'],
    'Barcelos' : ["Sta. Maria Maior"],
    'Coimbra' : ['Centro Hospitalar Universitátio de Coimbra', 'Hospital CUF'],
    'Fig. Foz' : ["Distrital da Figueira da Foz"],
    'Lisboa' : ['Forças Armadas - Pólo de Lisboa'],
    'Ovar' : ['Dr. Francisco Zagalo'],
    'Porto' : ["Magalhães Lemos", 'S. João']
   },
   scheduledAppointments :[],
   scheduledAnalysis :[],
}
export const UserContext = React.createContext<IUserManager>(user);

const IonicApp: React.FC = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [createAcc, setCreateAcc] = useState(0);
 const currPage = [
                    Login,
                    CreateAccount
                  ]
 const [userInfo, setUserInfo] = useState({
                    "Nome":"",
                    "Email":"",
                    "Password":"",
                    "NumUtente":0,
                    "Cidade":"",
                    "Hospital":""
                  })
 user.setIsLoggedIn = setIsLoggedIn;
 user.setCreateAcc = setCreateAcc;
 user.setUserInfo = setUserInfo;
 user.userInfo=userInfo;
 user.cityList = ['Almada', 'Aveiro', 'Barcelos', 'Coimbra', 'Fig. Foz', 'Lisboa', 'Ovar', 'Porto'];
  return(
  <IonApp>
    <IonReactRouter>
    <Route path="/login" render={(props) => <Login {...props} />} exact={true} />
    <Route path="/create-account" render={(props) => <CreateAccount {...props}></CreateAccount>}/>
        <Route path="/" component={isLoggedIn ? MainApp : currPage[createAcc]} />
    </IonReactRouter>
  </IonApp>
)};

const App :React.FC = () => {
  return (
    <UserContext.Provider value = {user}> 
      <IonicApp/>
    </UserContext.Provider>
  )
}

export default App;
