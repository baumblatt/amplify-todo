import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import {createTodo, createTodoEvent, listTodos, removeTodo, removeTodoEvent, updateTodo, updateTodoEvent} from '../actions/todos.actions';

export const todoAdapter = createEntityAdapter<Todo>();

export interface TodosState extends EntityState<Todo> {}

const initialState: TodosState = todoAdapter.getInitialState({}) ;

const reducer = createReducer<TodosState, Action>(
    initialState,
    on(listTodos, (state, {todos}) => todoAdapter.addAll(todos, state)),
    on(createTodoEvent, (state, {todo}) => todoAdapter.addOne(todo, state)),
    on(updateTodoEvent, (state, {todo}) => todoAdapter.updateOne({id: todo.id, changes: todo}, state)),
    on(removeTodoEvent, (state, {todo}) => todoAdapter.removeOne(todo.id, state)),
);

export function todosReducer(state: TodosState | undefined, action: Action): TodosState {
    return reducer(state, action);
}
