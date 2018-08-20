import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.tasks, action) {
    switch (action.type) {
        case types.LOAD_TASKS_SUCCESS:
            return action.tasks;

        case types.CREATE_TASK_SUCCESS:
            return action.tasks;

        case types.DELETE_TASK_SUCCESS:
            return action.tasks;

        case types.COMPLETE_TASK_SUCCESS:
            return action.tasks;

        case types.UPDATE_TASK_SUCCESS:
            return action.tasks;

        default:
            return state;
    }
}