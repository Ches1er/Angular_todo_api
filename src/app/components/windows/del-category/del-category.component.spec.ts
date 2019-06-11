import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCategoryComponent } from './del-category.component';

describe('DelCategoryComponent', () => {
  let component: DelCategoryComponent;
  let fixture: ComponentFixture<DelCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
