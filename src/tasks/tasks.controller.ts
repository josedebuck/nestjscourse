import { Controller, Delete, Get, Patch, Post, Put, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService:TasksService){
    }

    // Get de todas las tareas
    @Get()
    getAllTasks(@Query() query: any){
        console.log(query)
       return this.tasksService.getTasks();
    }

    // Get de una tarea especifica
    @Get('/:id')
    getTask(@Param('id') id: string){
        console.log(id)
       return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: any){
        return this.tasksService.createTask(task);
    }

    @Put() // {title: 'primera tarea', status: false} -> {title: "tarea actualizando", status: true}
    updateTask(){
        return this.tasksService.updateTask;
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask;
    }

    @Patch() // {title: 'primera tarea', status: false} -> {status: true}
    patchTask(){
        return this.tasksService.updateTaskStatus;
    }

}