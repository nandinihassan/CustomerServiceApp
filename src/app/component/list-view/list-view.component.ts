import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  private baseUrl: string  = "http://localhost:3000";

  alluser: any= [];

  constructor(private q: HttpClient) { }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewcustomer').subscribe(k => {
      this.alluser = k['data'];
    })
  }

}
