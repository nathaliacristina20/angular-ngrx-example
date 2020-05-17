import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PersonComponent } from './person/person.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
