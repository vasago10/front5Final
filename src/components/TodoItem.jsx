
import React, { useState } from 'react';//esto es para poder usar el useState y el react

export default function TodoItem({ task, onDelete }) {  //creamos la funcion default y le pasamos las props task y onDelete
  const [completed, setCompleted] = useState(false);  //con el metodo del useState para las tareaspara poder modificar todo

  return (
    <li
      className={completed ? 'completed' : ''}  //el operador ternario para cambiar la clase de completed a vacio
      onClick={() => setCompleted(!completed)}  //
    >
      {task}
      {onDelete && (
        <button
          onClick={(e) => { //cuando pulsamos click en el boton
            e.stopPropagation(); // evita que el click burbujee al <li> osea q no suba a los padres
            onDelete();//borramos la tareaporque se lo hemos pasado antes como prop
          }}
        >
          Eliminar
        </button>
      )}
    </li>
  );
}