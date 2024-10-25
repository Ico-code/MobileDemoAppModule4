import {
  IonCard,
  IonItem,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { Task } from "../hooks/useTaskListService";
import { trashOutline } from "ionicons/icons";

interface ListItem {
  Task: Task;
}

const TaskListItem: React.FC<ListItem> = ({ Task }) => {
  return (
      <IonCard id={Task.id} className="flexContainer">
        <div>
          <IonCardHeader>
            <IonCardTitle>{Task.title}</IonCardTitle>
            <IonCardSubtitle>{Task.subtitle}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{Task.description}</IonCardContent>
        </div>
        <IonButton color="danger" className="ms-a button-size"><IonIcon icon={trashOutline}></IonIcon></IonButton>
      </IonCard>
  );
};

export default TaskListItem;
