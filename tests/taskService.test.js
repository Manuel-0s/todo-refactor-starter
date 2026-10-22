import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen
} from "../src/taskService.js";

/*
 * TODO REFACTOR LAB · SUITE STARTER
 *
 * Activa/crea pruebas misión por misión. No escribas todas las soluciones de
 * una vez. Para cada comportamiento sigue RED → GREEN → REFACTOR.
 */

describe("crearTarea", () => {
  it("crea una tarea pendiente con id y título", () => {
    // Arrange
    const id = 10;
    const titulo = "Diseñar pruebas";

    // Act
    const tarea = crearTarea(id, titulo);

    // Assert
    expect(tarea).toEqual({ 
      id: 10, 
      titulo: "Diseñar pruebas", 
      completada: false 
    });
  });
});

// MISIÓN 3: agrega al menos dos pruebas para agregarTarea().
// Prueba 1: Verifica que la nueva tarea esté dentro del arreglo devuelto
describe("agregarTarea", () => {
  it('agrega una tarea a la lista existente', () => {
    // Arrange
    const tareasIniciales = [{ id: 1, titulo: "Tarea 1", completada: false }];
    const nuevaTarea = { id: 2, titulo: "Nueva tarea", completada: false };

    // Act
    const resultado = agregarTarea(tareasIniciales, nuevaTarea);

    // Assert
    expect(resultado).toContainEqual(nuevaTarea);
  });
});

// Prueba 2: Verifica que el resultado contenga un elemento más que el inicial
describe("agregarTarea", () => {
  it('incrementa en uno la cantidad total de tareas', () => {
    // Arrange
    const tareasIniciales = [{ id: 1, titulo: "Tarea 1", completada: false }];
    const nuevaTarea = { id: 2, titulo: "Tarea 2", completada: false };

    // Act
    const resultado = agregarTarea(tareasIniciales, nuevaTarea);

    // Assert
    expect(resultado.length).toBe(tareasIniciales.length + 1);
  });
});

// Prueba 3: Verifica que el nuevo arreglo no sea el mismo que el original (inmutabilidad)
describe("agregarTarea", () => {
  it('no muta el arreglo original de tareas', () => {
    // Arrange
    const tareasIniciales = [{ id: 1, titulo: "Tarea 1", completada: false }];
    const copiaInicial = [{ id: 1, titulo: "Tarea 1", completada: false }];
    const nuevaTarea = { id: 2, titulo: "Tarea 2", completada: false };

    // Act
    const resultado = agregarTarea(tareasIniciales, nuevaTarea);

    // Assert
    expect(resultado).not.toBe(tareasIniciales); // Referencias distintas
    expect(tareasIniciales).toEqual(copiaInicial); // El contenido original no cambia
  });
});

// MISIÓN 4: prueba id existente e inexistente para buscarTarea().
describe("buscarTarea", () => {
  it("encuentra y retorna la tarea cuando el id existe", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Primera tarea", completada: false },
      { id: 2, titulo: "Segunda tarea", completada: true }
    ];

    // Act
    const resultado = buscarTarea(tareas, 2);

    // Assert
    expect(resultado).toEqual({ id: 2, titulo: "Segunda tarea", completada: true });
  });

  it("retorna undefined cuando el id no existe", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Primera tarea", completada: false }
    ];

    // Act
    const resultado = buscarTarea(tareas, 999);

    // Assert
    expect(resultado).toBeUndefined();
  });
});

// MISIÓN 5: prueba colección mixta, sin coincidencias y vacía.
// MISIÓN 6: prueba cambio correcto, otra tarea intacta e id inexistente.
// MISIÓN 7: prueba eliminar existente, inexistente y colección vacía.
// MISIÓN 8: prueba obtenerResumen(), incluyendo colección vacía.

// Los imports anteriores quedan preparados para que construyas la suite de forma incremental.
void agregarTarea;
void buscarTarea;
void obtenerPendientes;
void obtenerTerminadas;
void cambiarEstado;
void eliminarTarea;
void obtenerResumen;
