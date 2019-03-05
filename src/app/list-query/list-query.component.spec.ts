import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQueryComponent } from './list-query.component';

describe('ListQueryComponent', () => {
  let component: ListQueryComponent;
  let fixture: ComponentFixture<ListQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
