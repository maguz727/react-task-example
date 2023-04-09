import { createContext, useState, useEffect } from "react";
import bdTasks from "../data/bdTasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [task, setTask] = useState([]);

  function createTask({ title, description }) {
    setTask([
      ...task,
      {
        id: task.length,
        title,
        description,
      },
    ])
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(bdTasks);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          task,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  )
}


