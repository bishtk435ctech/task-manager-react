import { FETCH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK, FETCH_TASKS_SUCCESS, ADD_TASK_SUCCESS, UPDATE_TASK_SUCCESS, DELETE_TASK_SUCCESS } from './types';

export const fetchTasks = () => ({
    type: FETCH_TASKS,
});

export const fetchTasksSuccess = (tasks) => ({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
});

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const addTaskSuccess = (task) => ({
    type: ADD_TASK_SUCCESS,
    payload: task,
});

export const updateTask = (task) => ({
    type: UPDATE_TASK,
    payload: task,
});

export const updateTaskSuccess = (task) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const deleteTaskSuccess = (taskId) => ({
    type: DELETE_TASK_SUCCESS,
    payload: taskId,
});
