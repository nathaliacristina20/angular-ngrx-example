import * as PersonActions from '../actions/person.actions';
import { Person } from '../../person';

export const initialState: Person[] = [];

export function reducer(state = initialState, action: PersonActions.PersonActions){
       switch(action.type) {
        case PersonActions.PersonActionTypes.PERSON_ALL:
            return state;
            case PersonActions.PersonActionTypes.PERSON_NEW:               
                return state.concat([action.payload.person]);                
                case PersonActions.PersonActionTypes.PERSON_UPDATE:
                    let people = state.slice();
                    let i = people.findIndex(p => p.id == action.payload.person.id);
                    if (i >= 0){
                        people[i] = action.payload.person;
                    }
                    return people;
                    case PersonActions.PersonActionTypes.PERSON_DELETE:
                        return state.filter(p => p.id != action.payload.id);
    }

}