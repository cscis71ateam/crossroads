var Task = require('../models/taskModel');

//var taskServiceController = {};
/**
 * TaskService Class
 */
class TaskService {
    //List all tasks
    static list() {
        return Task.find({})
        .then((tasks) => {
            return tasks;
        });
    }

    //Find a task
    static read(id) {
        return Task.findById(id)
        .then((task) => {
            return task;
        });
    }

    //Create a new task
    static create(obj) {
        var task = new Task(obj);
        return task.save();
    }


    //Update an existing task
    static update(id, data) {
        return Task.findById(id)
        .then((task)=> {
            task.set(data);
            task.save();
            return task;
        });
    }

    //Delete a task
    static delete(id){
        return Task.remove({_id: id})
        .then((obj)=>{
            return obj;
        });
    }
} //End of TaskService Class

module.exports = TaskService;
