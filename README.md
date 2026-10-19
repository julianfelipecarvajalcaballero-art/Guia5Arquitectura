# Guía 5 - Arquitectura de software

Este es el gestor de tareas del taller, organizado por capas. Las respuestas, el diagrama y la explicación de los cambios están en [GUIA_RESUELTA.md](GUIA_RESUELTA.md).

## Para ejecutarlo

Entrar a `backend` y ejecutar:

```sh
npm ci
npm test
npm start
```

Abrir http://localhost:3000. Los datos se guardan en memoria y se borran al apagar el servidor.

## Cambios

Se separaron el modelo, el servicio, el controlador y el repositorio. En el frontend se dejaron aparte las peticiones, la vista y los eventos.

Las tres pruebas automáticas pasaron. También se probó crear una tarea, cambiar su estado y validar el título desde el navegador. La captura está en `docs/verificacion-interfaz.png`.

## Revisión

En `main` está el código base y en `refactor/arquitectura` están los cambios.

[Pull Request para el profesor](https://github.com/julianfelipecarvajalcaballero-art/Guia5Arquitectura/pull/1). La invitación a `crgonzalez3212` está enviada; falta que la acepte para asignarlo como revisor.

Base del taller: https://github.com/crgonzalez3212/Guia5Arquitectura
