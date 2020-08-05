import { Action } from '@ngrx/store';
import { Person } from '../../person';

export enum PersonActionTypes {
    PERSON_ALL = '[PERSON_ALL] Get all people',
    PERSON_ONE = '[PERSON_ONE] Get one people',
    PERSON_ONE_SUCCESS = '[PERSON_ONE] Get one people SUCCESS',
    PERSON_ONE_FAIL = '[PERSON_ONE] Get one people FAIL',
    PERSON_NEW = '[PERSON_NEW] Add new person',
    PERSON_UPDATE = '[PERSON_UPDATE] Update a person',
    PERSON_DELETE = '[PERSON_DELETE] Delete a new person'
}

export class PersonAll implements Action {
    readonly type = PersonActionTypes.PERSON_ALL;
}

export class PersonNew implements Action {
    readonly type = PersonActionTypes.PERSON_NEW;
    constructor(public payload: { person: Person }){ }
}

export class PersonOne implements Action {
    readonly type = PersonActionTypes.PERSON_ONE;
    constructor(public payload: { person: string }){ }
}

export class PersonOneSuccess implements Action {
    readonly type = PersonActionTypes.PERSON_ONE_SUCCESS;
    constructor(public payload: { person: string }){ }
}


export class PersonOneFail implements Action {
    readonly type = PersonActionTypes.PERSON_ONE_FAIL;
    constructor(public payload: any){ }
}


export class PersonUpdate implements Action {
    readonly type = PersonActionTypes.PERSON_UPDATE;
    constructor(public payload: { person: Person }){ }
}

export class PersonDelete implements Action {
    readonly type = PersonActionTypes.PERSON_DELETE;
    constructor(public payload: { id: string }){ }
}

export type PersonActions = PersonAll | PersonOne | PersonOneSuccess | PersonOneFail | PersonNew | PersonUpdate | PersonDelete;