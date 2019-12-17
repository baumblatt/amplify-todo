import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/feature.reducers';

export const getLayoutState = createSelector(
    getCoreState,
    state => state.layout
);

export const getTheme = createSelector(
    getLayoutState,
    state => state.theme
);
