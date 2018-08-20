import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import TaskApi from '../api/taskApi'

export function loadTasksSuccess(tasks) {
    return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function loadTasks() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return TaskApi.getAllTasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createTask(task) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return TaskApi.createTask(task).then(tasks => {
            dispatch(createTaskSuccess(tasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createTaskSuccess(tasks) {
    return { type: types.CREATE_TASK_SUCCESS, tasks };
}


export function deleteTask(taskID) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return TaskApi.deleteTask(taskID).then(tasks => {
             dispatch(deleteTaskSuccess(tasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteTaskSuccess(tasks) {
    return { type: types.DELETE_TASK_SUCCESS, tasks };
}


export function completeTask(taskID) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return TaskApi.completeTask(taskID).then(tasks => {
             dispatch(completeTaskSuccess(tasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function completeTaskSuccess(tasks) {
    return { type: types.COMPLETE_TASK_SUCCESS, tasks };
}

export function updateTask(taskID,task) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return TaskApi.updateTask(taskID,task).then(tasks => {
             dispatch(updateTaskSuccess(tasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateTaskSuccess(tasks) {
    return { type: types.UPDATE_TASK_SUCCESS, tasks };
}