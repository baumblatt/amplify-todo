import {createAction, props} from '@ngrx/store';
import {Todo} from '../../models/todo.model';

export const createTodo = createAction('[Todo] Create Todo.', props<{todo: Todo}>());
export const updateTodo = createAction('[Todo] Update Todo.', props<{todo: Todo}>());
export const removeTodo = createAction('[Todo] Remove Todo.', props<{todo: Todo}>());
