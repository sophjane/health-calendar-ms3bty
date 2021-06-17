import React from 'react'
import { Redirect, Route } from "react-router-dom";
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
import CreateAnalysis from "./pages/CreateAnalysis";
import AnalysisToDo from "./pages/AnalysisToDo";
import AnalysisResults from "./pages/AnalysisResults";
import VideoCall from "./pages/VideoCall";
const MainApp: React.FC = () => {
    return (
        <div>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/Home"
                        render={(props) => <Home {...props} />}
                    >
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
                        exact
                        path="/analysis"
                        render={(props) => <Analysis {...props} />}
                    ></Route>
                    <Route
                        path="/analysis/analysis-to-do"
                        render={(props) => <AnalysisToDo {...props} />}
                    ></Route>
                    <Route
                        exact
                        path="/analysis/analysis-results"
                        render={(props) => <AnalysisResults {...props} />}
                    ></Route>
                    <Route
                        exact
                        path="/settings"
                        render={(props) => <Settings {...props}/>}
                    ></Route>
                    <Route
                        exact
                        path="/videocall"
                        render={(props) => <VideoCall {...props} />}
                    ></Route>
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
        </div>
    )
}

export default MainApp
