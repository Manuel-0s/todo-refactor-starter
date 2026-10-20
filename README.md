# ToDo Refactor Starter

Proyecto inicial para **ToDo Refactor Lab**: refactorización, pruebas unitarias y Pair Programming.

## Requisitos

- Node.js 18 o superior.
- npm, incluido con Node.js.

Comprueba las versiones instaladas:

```bash
node --version
npm --version
```

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd todo-refactor-starter
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar las pruebas

Ejecuta la suite de pruebas una vez:

```bash
npm test
```

Durante el desarrollo:

```bash
npm run test:watch
```

La primera prueba puede estar preparada para fallar: es el punto de partida de la
**Misión 2** y del ciclo **RED → GREEN → REFACTOR**.

## Ejecutar la aplicación

Abre `index.html` en un navegador o utiliza la extensión **Live Server** de
Visual Studio Code para servir el proyecto localmente. La aplicación se
encuentra en:

```text
http://localhost:5500/index.html
```

El puerto puede cambiar según la configuración de Live Server.

## Estructura

- `src/legacy.js`: código funcional simple para analizar antes de cambiar.
- `src/taskService.js`: lógica de dominio que completarás misión por misión.
- `src/app.js`: interfaz inicial; en la Misión 9 deberá delegar la lógica a `taskService.js`.
- `tests/taskService.test.js`: suite incremental de pruebas unitarias con Vitest.

## Misión 0 · Antes de modificar código

Responde aquí:

1. ¿Dónde almacenarías ahora el estado `completada` de una tarea?
   Lo almacenaría en el local storage usando de base un archivo JSON.
2. ¿Qué ocurriría si mañana cada tarea necesita prioridad, fecha o responsable?
   Se debería de añadir un nuevo atributo al objeto de la tarea, ya que se planeo desde antes como un objeto JSON.
3. ¿Qué parte del código representa datos y qué parte representa interfaz?
   La interfaz está en el archivo index.html y los datos están en el archivo App.js, aun que en el futuro se planea moverlos a un JSON y se modificaran desde el archivo TaskService.js
4. ¿Qué comportamiento debemos conservar durante el refactor?
   Todo el comportamiento observable y funcionalidad para el usuario final, por ejemplo los botones y listas.

### Tres comportamientos observables que NO deben cambiar

1. Agregar tareas al DOM
2. Eliminar tareas del DOM
3. Contador de tareas

## Registro RED → GREEN → REFACTOR

Documenta al menos una iteración:

- **RED:** ¿qué prueba escribiste y por qué falló?
- **GREEN:** ¿cuál fue el cambio mínimo que la hizo pasar?
- **REFACTOR:** ¿qué mejoraste sin cambiar el comportamiento?

## Pair Programming

Registra por misión quién fue **Driver** y quién **Navigator**. Intercambien roles con frecuencia y no hagan commit hasta que ambos puedan explicar el código y la prueba.
