import * as PersonActions from './person.actions';
import { state } from '@angular/animations';
import { Person } from '../person';

export const initialState: Person[] = [];

export function reducer(state = initialState, action: PersonActions.PersonActions){

    switch(action.type) {
        case PersonActions.PersonActionTypes.PERSON_ALL:
            return state;
            case PersonActions.PersonActionTypes.PERSON_NEW:
                return state;
                case PersonActions.PersonActionTypes.PERSON_UPDATE:
                    return state;
                    case PersonActions.PersonActionTypes.PERSON_DELETE:
                        return state;
    }

}