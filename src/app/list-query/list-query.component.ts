import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-query',
  templateUrl: './list-query.component.html',
  styleUrls: ['./list-query.component.scss']
})
export class ListQueryComponent implements OnInit {
  users:any[];
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe(params => {
      this.users = params.users;
    })
  }

}
