import * as PersonActions from "../actions/person.actions";
import { Person } from "../../person";

export interface IPeopleState {
  people: Person[];
  error: {
    message: string;
  };
  loading: boolean;
}

export const initialState: IPeopleState = {
  people: [],
  error: null,
  loading: false
};

export function reducer(
  state = initialState,
  action: PersonActions.PersonActions
): IPeopleState {
  switch (action.type) {
    case PersonActions.PersonActionTypes.PERSON_ALL:
      return state;
      case PersonActions.PersonActionTypes.PERSON_ONE:
        return {
          people: [],
          error: null,
          loading: true
        };
    case PersonActions.PersonActionTypes.PERSON_ONE_SUCCESS:
      const aux = [];
      aux.push({
        name: action.payload.person,
        age: 10,
        address: "dsadsa",
        city: "dsadsa",
        country: "sdadsa",
        id: "dsadsa",
      });
      return {
        people: state.people.concat(aux),
        error: null,
        loading: false
      };

    case PersonActions.PersonActionTypes.PERSON_ONE_FAIL:
      
      return {
        people: [],
        error: {
          message: action.payload
        },
        loading: false,
      };

    case PersonActions.PersonActionTypes.PERSON_NEW:
      return {
        people: state.people.concat([action.payload.person]),
        error: null,
        loading: false,
      };
    case PersonActions.PersonActionTypes.PERSON_UPDATE:
      let people = state.people.slice();
      let i = people.findIndex((p) => p.id == action.payload.person.id);
      if (i >= 0) {
        people[i] = action.payload.person;
      }

      return {
        people: people,
        error: null,
        loading: false,
      };

    case PersonActions.PersonActionTypes.PERSON_DELETE:
      return {
        people: state.people.filter((p) => p.id != action.payload.id),
        error: null,
        loading: false,
      };
  }
}
