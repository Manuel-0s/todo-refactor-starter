/*
 * MISIÓN 9 · ADAPTADOR DE INTERFAZ
 *
 * Este archivo contiene una versión inicial de interfaz basada en strings para
 * que la aplicación pueda observarse desde el comienzo. Cuando llegues a la
 * Misión 9, reemplaza la lógica de datos por llamadas a taskService.js.
 * El DOM debe leer eventos, delegar reglas al servicio y renderizar resultados.
 */

import {
  crearTarea,
  agregarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen
} from "./taskService.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const summary = document.querySelector("#summary");
const filters = [...document.querySelectorAll("[data-filter]")];

let tareas = [
  crearTarea(1, "Revisar requisitos"),
  crearTarea(2, "Diseñar pruebas"),
  crearTarea(3, "Refactorizar código")
];
let filtro = "todas";

function render() {
  list.innerHTML = "";
  const tareasVisibles =
    filtro === "pendientes"
      ? obtenerPendientes(tareas)
      : filtro === "terminadas"
        ? obtenerTerminadas(tareas)
        : tareas;

  tareasVisibles.forEach(tarea => {
    const li = document.createElement("li");
    li.className = `task${tarea.completada ? " done" : ""}`;
    const title = document.createElement("span");
    title.className = "title";
    title.textContent = tarea.titulo;

    const actions = document.createElement("span");
    actions.className = "task-actions";

    const toggleButton = document.createElement("button");
    toggleButton.dataset.toggle = tarea.id;
    toggleButton.textContent = tarea.completada ? "Reabrir" : "Completar";

    const deleteButton = document.createElement("button");
    deleteButton.dataset.delete = tarea.id;
    deleteButton.textContent = "Eliminar";

    actions.append(toggleButton, deleteButton);
    li.append(title, actions);
    list.appendChild(li);
  });

  const resumen = obtenerResumen(tareas);
  summary.textContent = `Total: ${resumen.total} · Pendientes: ${resumen.pendientes} · Completadas: ${resumen.completadas}`;
}

function calcularSiguienteId(listaTareas) {
  return listaTareas.reduce((maxId, tarea) => Math.max(maxId, tarea.id), 0) + 1;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo = input.value.trim();
  if (!titulo) {
    message.textContent = "Escribe un título antes de agregar.";
    return;
  }
  const siguienteId = calcularSiguienteId(tareas);
  const nuevaTarea = crearTarea(siguienteId, titulo);
  tareas = agregarTarea(tareas, nuevaTarea);
  input.value = "";
  message.textContent = "";
  render();
});

list.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const deleteButton = event.target.closest("[data-delete]");
  const toggleButton = event.target.closest("[data-toggle]");

  if (deleteButton) {
    tareas = eliminarTarea(tareas, Number(deleteButton.dataset.delete));
    render();
    return;
  }

  if (toggleButton) {
    tareas = cambiarEstado(tareas, Number(toggleButton.dataset.toggle));
    render();
  }
});

filters.forEach(button =>
  button.addEventListener("click", () => {
    filtro = button.dataset.filter;
    filters.forEach(b => b.classList.toggle("active", b === button));
    message.textContent = "";
    render();
  })
);

render();
