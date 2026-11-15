import React from 'react';  
import { render } from '@testing-library/react';//solo el render pq solo vamos a hacer un snapshot
import TodoList from '../components/TodoList';

test('Genera un snapshot del componente TodoList', () => {//la descripcion del test
const tasks = ['Tarea 1', 'Tarea 2'];//un array como prop para el componente TodoList
const { asFragment } = render(<TodoList tasks={tasks} />);//renderizamos el componente TodoList con las props tasks
expect(asFragment()).toMatchSnapshot();//miramos si el snapshot coincide con el renderizado actual del componente
});
