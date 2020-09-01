import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExerciseComponent } from './directives-exercise.component';

describe('DirectivesExerciseComponent', () => {
  let component: DirectivesExerciseComponent;
  let fixture: ComponentFixture<DirectivesExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
