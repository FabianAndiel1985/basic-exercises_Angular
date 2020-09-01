import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesExerciseComponent } from './directives-exercise/directives-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesExerciseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
