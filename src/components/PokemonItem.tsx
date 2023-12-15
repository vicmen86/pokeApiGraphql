import React from 'react';
import { Pokemon } from '../models/pokemon';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
const PokemonItem: React.FC<{pokemon:Pokemon}>=({pokemon})=>{
return (
<IonItem>
  <IonAvatar slot='start'>
    <img/>
  </IonAvatar>
  <IonLabel>
    <h2></h2>
    <p></p>
  </IonLabel>
</IonItem>
);
}
export default PokemonItem