import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarItems = [
    { id: 1, name: 'Home', url: 'home' }, 
    { id: 2, name: 'User', url: 'user' }, 
    { id: 3, name: 'Kudos', url: 'kudos' }, 
    { id: 4, name: 'Contact', url: 'contact' }, 
  ]

  constructor() {}

  ngOnInit(): void {

  }
}
