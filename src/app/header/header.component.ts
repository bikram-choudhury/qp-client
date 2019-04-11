import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _routes: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
    this._routes.navigateByUrl('');
  }

}
