
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; //los metods q usamos
import TodoApp from "../components/TodoApp";

test("Permite al usuario agregar, completar y eliminar tareas", () => {//la descripcion del test
  render(<TodoApp />);

  const input = screen.getByRole("textbox");//esta linea dice q busque un input de tipo texto y lo guardamos en la variable input
  const button = screen.getByRole("button", { name: /agregar tarea/i });//esta linea dice q busque un boton con el nombre "agregar tarea" y lo guardamos en la variable button

  // 1) Agregar
  fireEvent.change(input, { target: { value: "Tarea importante" } });//un firevent para cambiar el valor del input a "Tarea importante"
  fireEvent.click(button);//un fireEvent para simular un click en el boton
  const task = screen.getByText(/tarea importante/i);//buscamos el texto "Tarea importante" en la pantalla y lo guardamos en la variable task
  expect(task).toBeInTheDocument();//miramos si el texto "Tarea importante" esta en el documento

  // 2) Completar
  fireEvent.click(task);////de nuevo sijmulaos un click
  expect(task).toHaveClass("completed");//se espera que el texto "Tarea importante" tiene la clase "completed"

  // 3) Eliminar
  const deleteBtn = screen.getByRole("button", { name: /eliminar/i });//hay un boton con el texto eliminar?pues lo guardamos en lña variable
  fireEvent.click(deleteBtn);//simular click
  expect(screen.queryByText(/tarea importante/i)).not.toBeInTheDocument();//esperamos q el texto tarea importnate este en el documentoº
});
