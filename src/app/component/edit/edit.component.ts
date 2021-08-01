import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private q: HttpClient, private tos: ToastrService) { }
  private baseUrl = "http://localhost:3000";

  ngOnInit() {
  }

  addcus(ad){
    console.log(ad.value);
    this.q.post(this.baseUrl+ '/addcustomer', ad.value).subscribe();
      this.tos.success("Added","Customer")
  }


}
