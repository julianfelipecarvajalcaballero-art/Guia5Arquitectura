## Cambio

Se separan transporte, presentación, negocio y persistencia del gestor de tareas. El servicio utiliza errores semánticos y recibe el repositorio por inyección. La aplicación se construye sin abrir un puerto y sirve el frontend desde el mismo origen.

## Validación

npm ci y npm test desde backend. Tres pruebas aprobadas: negocio aislado, estados y encapsulación, e integración HTTP.

## Revisión solicitada

Verificar separación de responsabilidades, dirección de dependencias, correspondencia con el diagrama y suficiencia de las pruebas. Registrar comprobación visual y observaciones antes de cerrar la entrega.
