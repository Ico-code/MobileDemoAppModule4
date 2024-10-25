import TaskListItem from "../components/TaskListItem";
import React from "react";
import useService, { Task } from "../hooks/useTaskListService";
import { IonList, useIonViewWillEnter } from "@ionic/react";

const TaskList: React.FC = () => {
  const TaskListService = useService();
  const [Tasks, setTasks] = React.useState<Task[]>([]);

  useIonViewWillEnter(() => {
    console.log("Hello World!");
    setTasks(TaskListService.getTasks(["1"]));
  });

  return (
    <IonList>
      {Tasks.map((Task) => (
        <TaskListItem Task={Task}></TaskListItem>
      ))}
    </IonList>
  );
};

export default TaskList;
