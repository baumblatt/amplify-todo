import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import {createTodo, removeTodo, updateTodo} from '../actions/todos.actions';

export const todoAdapter = createEntityAdapter<Todo>();

export interface TodosState extends EntityState<Todo> {}

const initialState: TodosState = todoAdapter.getInitialState({}) ;

const reducer = createReducer<TodosState, Action>(
    initialState,
    on(createTodo, (state, {todo}) => todoAdapter.addOne(todo, state)),
    on(updateTodo, (state, {todo}) => todoAdapter.updateOne({id: todo.id, changes: todo}, state)),
    on(removeTodo, (state, {todo}) => todoAdapter.removeOne(todo.id, state)),
);

export function todosReducer(state: TodosState | undefined, action: Action): TodosState {
    return reducer(state, action);
}
