import React, { createContext, useContext, useState } from 'react';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

enum TaskState {
    completed = "Completed",
    incomplete = "Incomplete"
}
export interface Task {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  state:TaskState,
}

export const useService = () => {
  const getTasks = (id: string[]): Task[] => {
    return [
      {
        id: "1",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing5",
        state: TaskState.completed
      },
      {
        id: "2",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing4",
        state: TaskState.completed
      },
      {
        id: "3",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing3",
        state: TaskState.completed
      },
      {
        id: "4",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing2",
        state: TaskState.incomplete
      },
      {
        id: "5",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing1",
        state: TaskState.incomplete
      },
    ];
  };
  const deleteTasks = () => {};
  const updateTasks = () => {};
  const addTasks = () => {};

  return {
    getTasks,
    deleteTasks,
    updateTasks,
    addTasks,
  };
};

export default useService;
