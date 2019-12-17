import {createAction, props} from '@ngrx/store';
import {OnCreateTodoSubscription, OnDeleteTodoSubscription, OnUpdateTodoSubscription} from '../../../API.service';
import {Todo} from '../../models/todo.model';

export const listTodos = createAction('[Todo] List Todos', props<{ todos: Todo[] }>());

export const createTodo = createAction('[Todo] Create Todo.', props<{todo: Todo}>());
export const updateTodo = createAction('[Todo] Update Todo.', props<{todo: Todo}>());
export const removeTodo = createAction('[Todo] Remove Todo.', props<{todo: Todo}>());

export const createTodoEvent = createAction('[Todo] Create Todo Event', props<{todo: Todo}>());
export const updateTodoEvent = createAction('[Todo] Update Todo Event', props<{todo: Todo}>());
export const removeTodoEvent = createAction('[Todo] Remove Todo Event', props<{todo: Todo}>());

