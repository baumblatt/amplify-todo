import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {layoutReducer, LayoutState} from './layout.reducers';

export interface CoreState {
    layout: LayoutState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
    layout: layoutReducer
};

export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);
