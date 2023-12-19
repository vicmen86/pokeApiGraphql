import {IonButtons,IonContent,IonGrid,IonHeader,IonItem,IonLabel,IonMenuButton,IonPage,IonSpinner,IonTitle,IonToolbar,
} from "@ionic/react";
import React from "react";
import PokemonItem from "../../components/PokemonItem";
import { gql, useQuery } from "@apollo/client";
import { Pokemon } from "../../models/pokemon";

const getAllPokemon = gql`
  query MyQuery {
    pokemon_v2_pokemon {
      id
      name
      base_experience
    }
  }
`;

const AllPokemon: React.FC = () => {

  const { loading, error, data } = useQuery(getAllPokemon);
  //console.log(data);
  
  if (loading) return (  <IonItem>
    <IonLabel>Loading...</IonLabel>
    <IonSpinner name="lines-sharp"></IonSpinner>
  </IonItem>);
  
  if (error) return <p>Error:{error.message}</p>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>App Pokémon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
              {data.pokemon_v2_pokemon.map((pokemon: Pokemon, idx: React.Key | null | undefined)=><PokemonItem key={idx} pokemon={pokemon}/>)}
        </IonGrid>
          
      </IonContent>
    </IonPage>
  );
};

export default AllPokemon;
