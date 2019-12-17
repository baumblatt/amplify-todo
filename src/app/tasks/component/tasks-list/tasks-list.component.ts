import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Action} from '@ngrx/store';
import {Todo} from '../../models/todo.model';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {

    @Input()
    todos: Todo[];

    @Output()
    actions = new EventEmitter<Action>();

    constructor(private fb: FormBuilder) {
    }

    dispatch(action: Action) {
        this.actions.emit(action);
    }
}
