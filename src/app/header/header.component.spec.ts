import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// https://jasmine.github.io/2.0/introduction
// By default jasmine will wait for 5 seconds for an asynchronous spec to finish before causing a timeout failure
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixtures: ComponentFixture<HeaderComponent>;

  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }))
  beforeEach(() => {
    fixtures = TestBed.createComponent(HeaderComponent);
    component = fixtures.componentInstance;
    fixtures.detectChanges();
  })

  it('Is Headercomponent exists?', () => {
    expect(component).toBeTruthy()
  })

  it('findSum function should return value greaterThan 5 ', () => {
    const a = 5, b = 1;
    const sum = component.findSum(a,b);
    expect(sum).toBeGreaterThan(5)
  })

  it('navbar-brand class should exist', () => {
    const element = fixtures.debugElement.query(By.css('.navbar-brand'));
    expect(element).toBeTruthy()
  })

  it('navbar-brand should contain Query Poll', () => {
    const element = fixtures.debugElement.nativeElement.querySelector('.navbar-brand').innerText;
    expect(element).toContain('Query Poll');
  })


})