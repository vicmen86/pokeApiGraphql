import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const AddPokemon: React.FC=()=>{
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
          <IonRow>
            <IonCol>
              <h1>Add Pokémon</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
);
}

export default AddPokemon;