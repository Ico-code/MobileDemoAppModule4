import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import { Component } from "ionicons/dist/types/stencil-public-runtime";
import TaskList from "./pages/TaskList";

setupIonicReact();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // You can check here if the user is logged in (e.g., from localStorage or an auth API)
    // and update the loggedIn state accordingly.
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem routerLink="/home">
                  <IonLabel>Home</IonLabel>
                </IonItem>
                <IonMenuToggle>
                  <IonItem routerLink="/tasklist">
                    <IonLabel>Task List</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tasklist" component={TaskList} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          {/* {loggedIn ? (
            <Route path="*">
            <Redirect to="/home" />
          </Route>
          ) : (
            <Route path="*">
          <Redirect to="/login" />
        </Route>
          )} */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
