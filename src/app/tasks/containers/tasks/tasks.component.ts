import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../../models/todo.model';
import {createTodo} from '../../store/actions/todos.actions';
import {TodosState} from '../../store/reducers/todos.reducer';
import {getTodos} from '../../store/selectors/todos.selectors';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

    todos$: Observable<Todo[]>;

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
        this.todos$ = this.store.pipe(select(getTodos));
    }

    create() {
        this.dispatch(createTodo({todo: {id: `${new Date().getTime()}`, title: '   ', done: false}}));
    }

    dispatch(action: Action) {
        this.store.dispatch(action);
    }
}
