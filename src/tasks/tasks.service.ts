import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
    private tasks: any[] = []; // aqui se guardan las tareas que se reciben

  //Función para obtener todas las tareas
  getTasks() {
    return this.tasks;
  }

  //Función para obtener una tarea específica
  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);

    if(!taskFound){
        throw new NotFoundException(`Tarea con el id ${id} no encontrada`);
    }
    return taskFound
  }


  createTask(task: any){
    console.log(task)
    this.tasks.push({
    ...task, // copia todos los valores de tareas
        id: this.tasks.length + 1 // y le coloco un ID en + 1
    });
    return task
  }

  updateTask() {
    return 'actualizando tareas';
  }

  deleteTask() {
    return 'eliminando tareas';
  }

  updateTaskStatus() {
    return 'actualizando parcialmente tareas';
  }
}
