import {createSelector} from '@ngrx/store';
import {getTasksState} from '../reducers/feature.reducers';
import {todoAdapter} from '../reducers/todos.reducer';

export const getTodosState = createSelector(getTasksState, state => state.todos);
export const getTodos = createSelector(getTodosState, state => todoAdapter.getSelectors().selectAll(state));
