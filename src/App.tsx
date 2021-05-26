import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calendarOutline,
  homeOutline,
  readerOutline,
  settingsOutline,
} from "ionicons/icons";

import Login from './pages/Login'
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Analysis from "./pages/Analysis";
import Settings from "./pages/Settings";
import CreateAppointment from "./pages/CreateAppointment";
import CreateAccount from './pages/CreateAccount'
import CreateAnalysis from "./pages/CreateAnalysis";
import AnalysisToDo from "./pages/AnalysisToDo";
import AnalysisResults from "./pages/AnalysisResults";

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/login"
            render={(props) => <Login {...props}/>}></Route>
              <Route
            exact
            path="/create-account"
            render={(props) => <CreateAccount {...props} />}
          >
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route
            exact
            path="/appointments"
            render={(props) => <Appointments {...props} />}
          ></Route>
          <Route
            exact
            path="/appointments/createAppointment"
            render={(props) => <CreateAppointment {...props} />}
          ></Route>
          <Route
            exact
            path="/appointments/createAnalysis"
            render={(props) => <CreateAnalysis {...props} />}
          ></Route>
          <Route
            path="/Analysis"
            render={(props) => <Analysis {...props} />}
          ></Route>
          <Route
            exact
            path="/Analysis/analysisToDo"
            render={(props) => <AnalysisToDo {...props} />}
          ></Route>
          <Route
            exact
            path="/Analysis/analysisResults"
            render={(props) => <AnalysisResults {...props} />}
          ></Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Página Inicial</IonLabel>
          </IonTabButton>
          <IonTabButton tab="appointments" href="/appointments">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Consultas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="analysis" href="/analysis">
            <IonIcon icon={readerOutline} />
            <IonLabel>Análises</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Definições</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
