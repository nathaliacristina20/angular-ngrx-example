import { AppState } from '..';
import { createSelector } from '@ngrx/store';

export const selectPeople = ( state: AppState ) => state.people;

// Criar um seletor
export const selectPeopleCount = createSelector(
    selectPeople,
    (people) => people.length
)

// Juntar mais de um seletor
export const selectPeopleCountMoreOne = createSelector(
    selectPeopleCount,
    selectPeople,
    (n, people) => n + 1
)