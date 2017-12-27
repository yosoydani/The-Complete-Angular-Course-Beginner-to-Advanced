import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseEjemploComponent } from './firebase-ejemplo.component';

describe('FirebaseEjemploComponent', () => {
  let component: FirebaseEjemploComponent;
  let fixture: ComponentFixture<FirebaseEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
