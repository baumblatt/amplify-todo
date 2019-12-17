import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {toggleTheme} from '../../store/actions/laytout.actions';
import {CoreState} from '../../store/reducers/feature.reducers';
import {getTheme} from '../../store/selectors/layout.selectors';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

    theme$: Observable<string>;

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.theme$ = this.store.pipe(
            select(getTheme),
            map(color => `layout mat-app-background ${color}`)
        );
    }

    toggle() {
        this.store.dispatch(toggleTheme());
    }
}
