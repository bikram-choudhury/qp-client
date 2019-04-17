import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComponent } from './query.component';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterTestingModule } from '@angular/router/testing';

describe('QueryComponent', () => {
  let component: QueryComponent;
  let fixture: ComponentFixture<QueryComponent>;
  var $: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FroalaEditorModule, FroalaViewModule, RouterTestingModule],
      declarations: [ QueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
