import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private baseUrl: string  = "http://localhost:3000";
  user: any=[];

  alluser: any= [];
  constructor( private q: HttpClient) { }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewcustomer').subscribe(k => {
      this.alluser = k['data'];
    })
  }

  toupdate(k) {
    this.user = k;
  }

  customerupdate(cu) {
    this.q.put(this.baseUrl + "/updatecustomer", cu.value).subscribe(k => {
      this.ngOnInit();
    });
  }

}
