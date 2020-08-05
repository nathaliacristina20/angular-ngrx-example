import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "./person";

import * as faker from "faker";
import { Store, select } from "@ngrx/store";
import { AppState } from "./store/reducers";
import {
  selectPeople,
  selectPeopleCount,
} from "./store/selectors/person.selector";
import {
  PersonNew,
  PersonAll,
  PersonUpdate,
  PersonDelete,
  PersonOne,
} from "./store/actions/person.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  people$: Observable<Person[]>;
  countPeoples$: Observable<number>;

  constructor(private store: Store<AppState>) {
    //this.store.dispatch(new PersonAll());
    this.store.dispatch(new PersonOne({ person: "nathaliacristina20" }));

    // Pega o state inteiro de peoples
    this.people$ = this.store.pipe(select("people"));

    // this.people$ = this.store.select(selectPeople);

    
  }

  ngOnInit(){
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
