export interface Task {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export const useService = () => {
  const getTasks = (id: string[]): Task[] => {
    return [
      {
        id: "1",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing5",
      },
      {
        id: "2",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing4",
      },
      {
        id: "3",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing3",
      },
      {
        id: "4",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing2",
      },
      {
        id: "5",
        title: "Test Title",
        subtitle: "somekind of subtitle like recipe",
        description: "Testing1",
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
