import {
  IonCard,
  IonItem,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { Task } from "../hooks/useTaskListService";

interface ListItem {
  Task: Task;
}

const TaskListItem: React.FC<ListItem> = ({ Task }) => {
  return (
    <IonItem id={Task.id}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{Task.title}</IonCardTitle>
          <IonCardSubtitle>{Task.subtitle}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{Task.description}</IonCardContent>
      </IonCard>
    </IonItem>
  );
};

export default TaskListItem;
