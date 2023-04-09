import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function Tasklist() {
  const { task } = useContext(TaskContext);

  if (task.length === 0) {
    return <h1 className="text-2xl font-bold text-white mb-3 text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {task.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default Tasklist;
