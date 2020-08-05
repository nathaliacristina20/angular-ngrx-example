import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";

export const selectPeople = (state: AppState) => state.people;

// Criar um seletor
export const selectPeopleCount = createSelector(selectPeople, (people) => {
  return people && people.people ? people.people.length : 0;
});

// Juntar mais de um seletor
export const selectPeopleCountMoreOne = createSelector(
  selectPeopleCount,
  selectPeople,
  (n, people) => n + 1
);
