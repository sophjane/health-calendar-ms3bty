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
}
const user: IUserManager = {
  setIsLoggedIn : () =>{},
  setCreateAcc : () =>{}
}
export const UserContext = React.createContext<IUserManager>(user);

const IonicApp: React.FC = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [createAcc, setCreateAcc] = useState(0);
 const currPage = [
                    Login,
                    CreateAccount
                  ]

 user.setIsLoggedIn = setIsLoggedIn;
 user.setCreateAcc = setCreateAcc;
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
