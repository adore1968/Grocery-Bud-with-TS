import { useState, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";
import { v4 } from "uuid";
import { Alert, Task, Tasks, HandleChangeProps } from "../shared/interfaces";

type Props = { children: JSX.Element };

const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  if (tasks) {
    return tasks;
  }
};

const initialStates = {
  task: { id: "", name: "" },
  tasks: getTasks(),
  currentId: "",
  alert: {
    show: false,
    text: "",
    styles: "",
  },
};

const alertStyles = {
  success: "text-green-500 bg-green-100",
  danger: "text-red-500 bg-red-100",
};

export function AppProvider({ children }: Props) {
  const [task, setTask] = useState<Task>(initialStates.task);
  const [tasks, setTasks] = useState<Tasks>(initialStates.tasks);
  const [currentId, setCurrentId] = useState<string>(initialStates.currentId);
  const [alert, setAlert] = useState<Alert>(initialStates.alert);

  const handleChange = ({ target }: HandleChangeProps) => {
    setTask({ ...task, name: target.value });
  };

  const showAlert = (show = false, text = "", styles = "") => {
    setAlert({ show, text, styles });
  };

  const createTask = () => {
    const newTask = { ...task, id: v4() };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    showAlert(true, "Added task", alertStyles.success);
  };

  const getStates = (id: string) => {
    const currentTask = tasks.find((task) => task.id === id);
    if (currentTask) {
      setTask(currentTask);
      setCurrentId(id);
    }
  };

  const editTask = () => {
    const newTasks = tasks.map((value) => {
      if (value.id === currentId) {
        return { ...value, name: task.name };
      }
      return value;
    });
    setTasks(newTasks);
    showAlert(true, "Edited task", alertStyles.success);
  };

  const deleteTask = (id: string) => {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks(filterTasks);
    showAlert(true, "Deleted task", alertStyles.danger);
  };

  const clearTasks = () => {
    setTasks([]);
    showAlert(true, "All tasks deleted", alertStyles.danger);
  };

  useEffect(() => {
    const newTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", newTasks);
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        task,
        tasks,
        currentId,
        alert,
        taskInitialState: initialStates.task,
        handleChange,
        createTask,
        getStates,
        editTask,
        setCurrentId,
        setTask,
        showAlert,
        deleteTask,
        clearTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
