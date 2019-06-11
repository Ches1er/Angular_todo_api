import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelNoteComponent } from './del-note.component';

describe('DelNoteComponent', () => {
  let component: DelNoteComponent;
  let fixture: ComponentFixture<DelNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
