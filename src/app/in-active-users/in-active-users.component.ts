import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-in-active-users',
  templateUrl: './in-active-users.component.html',
  styleUrls: ['./in-active-users.component.css']
})
export class InActiveUsersComponent implements OnInit {
  inActiveUsers: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.inActiveUsers = this.userService.inActiveUsers;
  }

  onActiveLinkClick(index: number) {
    this.userService.addToActiveUsers(index);
  }



}
