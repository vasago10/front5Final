
import React from 'react';
import { render, screen } from '@testing-library/react';//los metodos q usamos
import TodoItem from '../components/TodoItem';

test('Muestra la tarea correctamente', () => {//lo q deberia hacer el test 
render(<TodoItem task="Aprender Jest" />);//renderiazr
const taskElement = screen.getByText(/Aprender Jest/i);//esta el texto ?los guardamos en la variable
expect(taskElement).toBeInTheDocument();//esperamos q la const tanks element este en el documento
});