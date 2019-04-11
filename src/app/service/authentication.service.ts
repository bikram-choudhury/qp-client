import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor(){}
    private random() {
        return Math.random().toString(36).substr(2); // remove `0.`
    }
    
    createAndSaveToken() {
        const token = this.random() + this.random();
        localStorage.setItem('token', token);
    }
    checkAndValidateToken() {
        return !!localStorage.getItem('token');
    }
}