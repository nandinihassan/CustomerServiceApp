import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private q: HttpClient) { }
  private baseUrl = "http://localhost:3000";

  ngOnInit() {
  }

  register(us){
    console.log(us.value);
    this.q.post(this.baseUrl+ '/register', us.value).subscribe();
  }

}
