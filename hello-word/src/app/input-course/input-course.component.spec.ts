import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCourseComponent } from './input-course.component';

describe('InputCourseComponent', () => {
  let component: InputCourseComponent;
  let fixture: ComponentFixture<InputCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
