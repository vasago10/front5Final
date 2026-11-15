# Readme

-Archivos:

- TodoApp.jsx — archivo principal
- TodoList.jsx — Renderizar.
- TodoItem.jsx — Renderizar y añadir `completed`.



-Los Test:

- TodoItem.test.js — Test unitario.
- TodoList.test.jsx — Test Snapshot.
- TodoApp.test.js — Test de integración, delete añadido.
- TodoAppAcceptance.test.js — Test de aceptación, eliminar añadido.

npm test
npm test -- -u  # para actualizar o borrar la carpeta __snapshot__

En el package.json  el jsdom es un entorno de prueba que simula un navegador web en Node.js,lo que permite ejecutar pruebas de componentes React que dependen del DOM. La propiedad setupFilesAfterEnv se utiliza para especificar archivos que se ejecutarán después de que se haya configurado el entorno de prueba, lo que permite realizar configuraciones adicionales o importar bibliotecas necesarias para las pruebas.

linea 15 para usar babel


https://github.com/vasago10/front5Final.git