import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {todosReducer, TodosState} from './todos.reducer';

export interface TasksState {
    todos: TodosState;
}

export const tasksReducers: ActionReducerMap<TasksState> = {
    todos: todosReducer
};

export const getTasksState = createFeatureSelector<TasksState>(
    'tasks'
);
