import {Action, createReducer, on} from '@ngrx/store';
import {toggleTheme} from '../actions/laytout.actions';

export interface LayoutState {
    theme: 'aws-light' | 'aws-dark';
}

export const initialState: LayoutState = {
    theme: 'aws-light'
};

const reducer = createReducer<LayoutState, Action>(
    initialState,
    on(toggleTheme, state => ({...state, theme: state.theme === 'aws-light' ? 'aws-dark' : 'aws-light'}))
);

export function layoutReducer(state: LayoutState | undefined, action: Action): LayoutState {
    return reducer(state, action);
}
