//la main 
import React, { useState } from 'react';
import TodoList from './TodoList';

export default function TodoApp() { //creamos funcion default
  const [tasks, setTasks] = useState([]); //con el metodo del useState para las tareas y el pintup para modificar todo 
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => { 
    if (inputValue.trim() === '') return; // evita agregar vacíos
    setTasks([...tasks, inputValue]); //deconstruccion
    setInputValue('');
  };

  // la tarea por índice
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));//filtramos
  };

  return (  //como es "html" devolvemos div
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}//controlamos el valor de e del input
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>//el boton

      /* cambiamos direccionyredirigimos a  TodoList */
      <TodoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}