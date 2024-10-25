import TaskListItem from "../components/TaskListItem";
import React from "react";
import useService, { Task } from "../hooks/useTaskListService";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

const TaskList: React.FC = () => {
  const TaskListService = useService();
  const [Tasks, setTasks] = React.useState<Task[]>([]);

  useIonViewWillEnter(() => {
    setTasks(TaskListService.getTasks([""]));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {Tasks.map((Task) => (
            <TaskListItem key={Task.id} Task={Task}></TaskListItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
