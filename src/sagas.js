// sagas/taskSaga.js
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/types';
import { fetchTasksSuccess, addTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from '../actions/taskActions';
import * as api from '../api'; // Import API functions

function* fetchTasksSaga() {
    try {
        const tasks = yield call(api.fetchTasks); // Call API function to fetch tasks
        yield put(fetchTasksSuccess(tasks)); // Dispatch action to update state with fetched tasks
    } catch (error) {
        // Handle error
    }
}

function* addTaskSaga(action) {
    try {
        const newTask = yield call(api.addTask, action.payload); // Call API function to add task
        yield put(addTaskSuccess(newTask)); // Dispatch action to update state with added task
    } catch (error) {
        // Handle error
    }
}

function* updateTaskSaga(action) {
    try {
        const updatedTask = yield call(api.updateTask, action.payload); // Call API function to update task
        yield put(updateTaskSuccess(updatedTask)); // Dispatch action to update state with updated task
    } catch (error) {
        // Handle error
    }
}

function* deleteTaskSaga(action) {
    try {
        yield call(api.deleteTask, action.payload); // Call API function to delete task
        yield put(deleteTaskSuccess(action.payload)); // Dispatch action to update state after deletion
    } catch (error) {
        // Handle error
    }
}

function* taskSaga() {
    yield takeLatest(FETCH_TASKS, fetchTasksSaga);
    yield takeLatest(ADD_TASK, addTaskSaga);
    yield takeLatest(UPDATE_TASK, updateTaskSaga);
    yield takeLatest(DELETE_TASK, deleteTaskSaga);
}


function* rootSaga() {
    yield all([
        taskSaga(),
    ]);
}

export default rootSaga;

