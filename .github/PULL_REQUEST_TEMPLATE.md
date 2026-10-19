# Guía 5 - Arquitectura de software

Aprendiz: Julián Felipe Carvajal Caballero

Ficha: 3171618

GitHub: @julianfelipecarvajalcaballero-art
Instructor: Cristian González (@crgonzalez3212)
Programa: Análisis y Desarrollo de Software - SENA

## Cambios del taller

El gestor de tareas quedó separado en modelo, servicio, controlador y repositorio. En el frontend también se separaron las peticiones a la API, la vista y los eventos.

Las respuestas y el diagrama están en [GUIA_RESUELTA.md](../GUIA_RESUELTA.md). El código base está en `main` y la entrega está en `refactor/arquitectura`.

## Pruebas

Las tres pruebas automáticas pasaron. Desde el navegador se comprobó la creación de una tarea, el cambio de estado y el rechazo de un título con solo espacios.

Para repetir las pruebas, entrar a `backend` y ejecutar `npm ci` y `npm test`. Para abrir la aplicación, ejecutar `npm start` e ir a http://localhost:3000.

## Revisión

Revisión del punto 3.5 a cargo del profesor Cristian González. La invitación a @crgonzalez3212 fue enviada; falta su aceptación para poder asignarlo como revisor.

Los datos siguen guardándose en memoria y se borran al detener el servidor.
