import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState {
    people: fromPersonReducer.IPeopleState;
}

export const appReducers: ActionReducerMap<AppState, Action> = {
    people: fromPersonReducer.reducer
};