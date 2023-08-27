import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any; 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUser() 
    .subscribe(response => {
      this.users = response;
    })
  }
}

