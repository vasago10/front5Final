
import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';//los metodos q usamos
import TodoApp from '../components/TodoApp';
test('Permite agregar una tarea a la lista', () => {
render(<TodoApp />);//render para q se muestre
const input = screen.getByRole('textbox');//el input 
const button = screen.getByRole('button', { name: /agregar tarea/i });//esta linea dice q busque un boton con el nombre "agregar tarea" y lo guardamos en la variable button
fireEvent.change(input, { target: { value: 'Nueva tarea' } });// un firevent para cambiar el valor del input a "Nueva tarea"
fireEvent.click(button);//un fireEvent para simular un click en el boton
const newTask = screen.getByText(/nueva tarea/i);//buscamos el texto "Nueva tarea" en la pantalla y lo guardamos en la variable newTask
expect(newTask).toBeInTheDocument();//miramos si el texto "Nueva tarea" esta en el documento
});