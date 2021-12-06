import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../services/users-service/users-service.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor(public userService: UsersServiceService) { }

  ngOnInit(): void {
  }

}
