import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllPokemon from './pages/AllPokemon/AllPokemon';
import Pokemon from './pages/AddPokemon/AddPokemon';
import { homeOutline, arrowUpCircleOutline } from 'ionicons/icons';
setupIonicReact()
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu  side="start" contentId='menuAppPoke'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Pokémon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink='/home' routerDirection='none' lines='none'>
              <IonIcon color="medium" slot='start' icon={homeOutline}/>
              <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink='/add-pokemon' routerDirection='none' lines='none'>
              <IonIcon color="medium" slot='start' icon={arrowUpCircleOutline}/>
              <IonLabel>Add Pokémon</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id='menuAppPoke' placeholder="Menu principal">
       <Route path="/home" component={AllPokemon} exact/>
       <Route path="/add-pokemon" component={Pokemon} exact/>
       <Redirect to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
