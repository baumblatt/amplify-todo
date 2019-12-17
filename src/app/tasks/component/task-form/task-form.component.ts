import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Action} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Todo} from '../../models/todo.model';
import {removeTodo, updateTodo} from '../../store/actions/todos.actions';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent implements OnInit, OnDestroy {

    taskForm = this.fb.group({
        id: [''],
        title: ['', {validators: [Validators.required], updateOn: 'blur' }],
        done: ['']
    });

    subscriptions: Subscription[] = [];

    @Input()
    set task(t: Todo) {
        if (!!t) {
            this.taskForm.patchValue(t);
        }
    }

    @Output()
    actions = new EventEmitter<Action>();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.taskForm.valueChanges.subscribe(
            todo => this.actions.emit(updateTodo({todo}))
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subs => subs.unsubscribe());
    }

    remove() {
        this.actions.emit(removeTodo({todo: this.taskForm.value}));
    }
}
