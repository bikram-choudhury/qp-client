// https://codecraft.tv/courses/angular/unit-testing/routing/

import { async, fakeAsync, ComponentFixture, TestBed, tick, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { Location } from '@angular/common';
import { NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

describe('Check AppRouting', () => {
    let location: Location; 
    let router: Router;
    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes), LoginModule
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        router.initialNavigation();
    }))

    it('Check "" route should reditect to "login"', fakeAsync(() => {
        
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {lazyModule: LoginModule};
      
        router.resetConfig([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {path: 'login', loadChildren: 'lazyModule'}
        ]);
      
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/login');
    }))

    it('Check "" route should reditect to "login" and login component should load', fakeAsync(() => {
        
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {lazyModule: LoginModule};
      
        router.resetConfig([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {path: 'login', loadChildren: 'lazyModule'}
        ]);
      
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/login');

        const element = fixture.debugElement.nativeElement.querySelector('caption');
        expect(element.innerText).toBe('Login Form');
    }))
    
})