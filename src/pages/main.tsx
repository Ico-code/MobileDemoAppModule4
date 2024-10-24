import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Welcome to the main page!</p>
      </IonContent>
    </IonPage>
  );
};

export default Main;