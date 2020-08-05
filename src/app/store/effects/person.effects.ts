import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { PersonOne, PersonOneSuccess, PersonOneFail, PersonActionTypes } from '../actions/person.actions';

import { PersonService } from 'src/app/services/person.service';

@Injectable()
export class PersonEffects {
    constructor(
        private actions$: Actions,
        public personService: PersonService
    ) {}

    @Effect()
    loadPerson$ = this.actions$.pipe( ofType<PersonOne>( PersonActionTypes.PERSON_ONE ),
    mergeMap((userInfo) => {
        return this.personService.getUser(userInfo.payload.person).
            pipe(
                map(person => new PersonOneSuccess({ person: person.name })),
                catchError(error => {
                    return of(new PersonOneFail(error && error.message ? error.message : 'Internal Error'));
                })
            );
        }
    ));
}
