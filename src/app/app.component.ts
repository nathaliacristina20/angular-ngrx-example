import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "./person";

import * as faker from "faker";
import { Store, select } from "@ngrx/store";
import { AppState } from "./store/reducers";
import { selectPeopleCount } from "./store/selectors/person.selector";
import {
  PersonNew,
  PersonAll,
  PersonUpdate,
  PersonDelete,
  PersonOne,
  PersonActionTypes,
} from "./store/actions/person.actions";
import { Actions, ofType } from "@ngrx/effects";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //people$: Observable<Person[]>;
  countPeoples$: Observable<number>;

  public peoples = [];

  public error: any;
  public loading: boolean;

  constructor(private store: Store<AppState>, actions$: Actions) {
    //this.store.dispatch(new PersonAll());

    this.store.dispatch(new PersonOne("nathaliacristina20"));

    this.store.pipe(select("people")).subscribe((data) => {
      console.log("data", data);
      this.loading = data.loading;
      this.peoples = data.people;
    });

    actions$
      .pipe(ofType(PersonActionTypes.PERSON_ONE_FAIL))
      .subscribe((error: { error: { message: string } }) => {
        this.error = error.error.message;
      });

    //this.people$ = this.store.select(selectPeople);
  }

  ngOnInit() {
    this.countPeoples$ = this.store.select(selectPeopleCount);
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      id: new Date().getMilliseconds().toString(),
    };

    this.store.dispatch(new PersonNew({ person }));
  }

  update(p: Person) {
    const person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
    };

    this.store.dispatch(new PersonUpdate({ person: { ...p, ...person } }));
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p.id }));
  }
}
