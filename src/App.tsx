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
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Analysis from "./pages/Analysis";
import Settings from "./pages/Settings";
import CreateAppointment from "./pages/CreateAppointment";

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
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
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
            path="/appointments/create"
            render={(props) => <CreateAppointment {...props} />}
          ></Route>
          <Route
            path="/Analysis"
            render={(props) => <Analysis {...props} />}
          ></Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
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
