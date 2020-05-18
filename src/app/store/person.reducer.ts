import * as PersonActions from './person.actions';
import { Person } from '../person';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface PeopleState extends EntityState<Person> {

}

// Altera o campo id padrao
export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person> ({
    selectId: (p: Person) => p.id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});

export function reducer(state = initialState, action: PersonActions.PersonActions){
       switch(action.type) {
        case PersonActions.PersonActionTypes.PERSON_ALL:
            return state;
            case PersonActions.PersonActionTypes.PERSON_NEW:  
                return peopleAdapter.addOne(action.payload.person, state);                            
                case PersonActions.PersonActionTypes.PERSON_UPDATE:
                    return peopleAdapter.updateOne({ id: action.payload.id, changes: action.payload.changes }, state);
                    case PersonActions.PersonActionTypes.PERSON_DELETE:
                        return peopleAdapter.removeOne(action.payload.id, state);
    }

}