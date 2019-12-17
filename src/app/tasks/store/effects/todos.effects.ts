import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, from, Observable, Subscriber} from 'rxjs';
import {catchError, delay, exhaustMap, map} from 'rxjs/operators';
import {APIService, OnCreateTodoSubscription, OnDeleteTodoSubscription, OnUpdateTodoSubscription} from '../../../API.service';
import {createTodo, createTodoEvent, listTodos, removeTodo, removeTodoEvent, updateTodo, updateTodoEvent} from '../actions/todos.actions';

@Injectable()
export class TodosEffects {

    listTodo$ = createEffect(() => from(this.api.ListTodos()).pipe(
        map(({items: todos}) => listTodos({todos})),
    ));

    createTodo$ = createEffect(() => this.actions$.pipe(
        ofType(createTodo),
        exhaustMap(({todo}) => from(this.api.CreateTodo(todo))),
    ), {dispatch: false});

    createTodoEvent$ = createEffect(() => new Observable<OnCreateTodoSubscription>(
        (subscriber: Subscriber<OnCreateTodoSubscription>) => {
                this.api.OnCreateTodoListener.subscribe(
                    event => {
                        // @ts-ignore
                        subscriber.next(event.value.data.onCreateTodo);
                    },
                    error => subscriber.error(error),
                    () => subscriber.complete()
                );
            }
        ).pipe(
            map((todo: OnCreateTodoSubscription) => createTodoEvent({todo})),
            catchError(error => {
                console.error(error);
                return EMPTY;
            }),
        )
    );

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        exhaustMap(({todo}) => from(this.api.UpdateTodo(todo))),
    ), {dispatch: false});

    updateTodoEvent$ = createEffect(() => new Observable<OnUpdateTodoSubscription>(
        (subscriber: Subscriber<OnCreateTodoSubscription>) => {
            this.api.OnUpdateTodoListener.subscribe(
                event => {
                    // @ts-ignore
                    subscriber.next(event.value.data.onUpdateTodo);
                },
                error => subscriber.error(error),
                () => subscriber.complete()
            );
        }
        ).pipe(
        map((todo: OnUpdateTodoSubscription) => updateTodoEvent({todo})),
        catchError(error => {
            console.error(error);
            return EMPTY;
        }),
        )
    );

    removeTodo$ = createEffect(() => this.actions$.pipe(
        ofType(removeTodo),
        exhaustMap(({todo}) => from(this.api.DeleteTodo({id: todo.id}))),
    ), {dispatch: false});

    removeTodoEvent$ = createEffect(() => new Observable<OnDeleteTodoSubscription>(
        (subscriber: Subscriber<OnCreateTodoSubscription>) => {
            this.api.OnDeleteTodoListener.subscribe(
                event => {
                    // @ts-ignore
                    subscriber.next(event.value.data.onDeleteTodo);
                },
                error => subscriber.error(error),
                () => subscriber.complete()
            );
        }
        ).pipe(
        map((todo: OnDeleteTodoSubscription) => removeTodoEvent({todo})),
        catchError(error => {
            console.error(error);
            return EMPTY;
        }),
        )
    );

    constructor(private actions$: Actions, private api: APIService) {

    }

}
