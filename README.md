# Progress Steps - Proceso de Reserva

Este proyecto es una simulación de un proceso de reserva en el que los usuarios deben completar un formulario paso a paso. Cada paso tiene diferentes campos que los usuarios deben llenar, y al final del proceso pueden revisar la información antes de enviar la reserva.

Puedes ver el demo en vivo aquí: [Progress Steps - Demo](https://bereverte.github.io/progress-steps/)

## Descripción

**Progress Steps** es una aplicación web que guía al usuario a través de un proceso de reserva en varios pasos:

1. **Paso 1:** El usuario ingresa su nombre, apellido y correo electrónico.
2. **Paso 2:** El usuario especifica el número de personas en el grupo.
3. **Paso 3:** El usuario selecciona una fecha para la reserva.
4. **Paso 4:** Se muestra un resumen de la información proporcionada antes de finalizar el proceso.

Cada paso debe ser completado correctamente para avanzar al siguiente, con validaciones que aseguran que se ingresen datos válidos.

## Características

- **Formulario paso a paso**: El usuario debe completar un campo antes de avanzar al siguiente paso.
- **Validación dinámica**: No se puede avanzar a menos que se cumplan las condiciones de validación para cada paso.
  - El nombre y el apellido no pueden estar vacíos.
  - El número de personas debe estar entre 1 y 20.
  - La fecha debe estar entre mañana y hasta 5 años en el futuro.
- **Resumen**: En el último paso, se muestra un resumen de la reserva.
- **Interfaz moderna**: Barra de progreso visual que se llena a medida que el usuario avanza.

## Tecnologías utilizadas

- **HTML5** - Estructura de la página.
- **CSS3** - Diseño de la interfaz y barra de progreso.
- **JavaScript** - Lógica del formulario y validaciones.
