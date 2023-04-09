import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-sm'>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder='Escriba aquí su tarea'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full m-2'
        />
        <textarea
          placeholder='Describa la tarea'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full m-2'
        />
        <button
          type='submit'
          className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400 p-3 m-2'
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
