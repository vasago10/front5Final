
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ tasks, onDelete }) {//creamos la funcion default y le pasamos las props tasks y onDelete
  return (
    <ul>
      {tasks.map((task, index) => (//un map ppara recorrer las task  y como prop el indes
        <TodoItem
          key={index} //esto tengo q preguntar
          task={task}
          onDelete={() => onDelete && onDelete(index)}  //si onDelete existe, llamamos a la función onDelete con el índice de la tarea  
        />
      ))}
    </ul>
  );
}