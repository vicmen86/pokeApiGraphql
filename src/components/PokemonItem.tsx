import React from "react";
import { Pokemon } from "../models/pokemon";
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,  IonItem, IonLabel, IonRow } from "@ionic/react";

const PokemonItem: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
const image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  
  return (
    <IonRow>
      <IonCol className="ion-text-center">
        <IonCard>
      <img src={image} alt="Image pokemon"/>
      <IonCardHeader>
        <IonCardTitle>{pokemon.name.toUpperCase()}</IonCardTitle>
        <IonCardSubtitle>Nivel de poder: {pokemon.base_experience}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
      </IonCol>
    </IonRow>
    
  );
 
};
export default PokemonItem;
