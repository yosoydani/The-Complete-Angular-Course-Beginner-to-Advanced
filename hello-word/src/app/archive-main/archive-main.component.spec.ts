import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMainComponent } from './archive-main.component';

describe('ArchiveMainComponent', () => {
  let component: ArchiveMainComponent;
  let fixture: ComponentFixture<ArchiveMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
