// https://codecraft.tv/courses/angular/unit-testing/routing/

import { async, fakeAsync, ComponentFixture, TestBed, tick, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Router } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { QueryModule } from './query/query.module';
import { Location } from '@angular/common';
import { NgModuleFactoryLoader } from '@angular/core';
import { LoginModule } from './login/login.module';

describe('Check AppRouting', () => {
    let location: Location; 
    let router: Router;
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations:[]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        router.initialNavigation();
    }))

    it('Check "" route should reditect to "login"', inject([Router], fakeAsync(() => {
        
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {lazyModule: LoginModule};
      
        router.resetConfig([
          {path: '', loadChildren: 'lazyModule'},
        ]);
      
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/login');
    })))
    
})