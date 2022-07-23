import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;

  }

  onInActiveLinkClick(index: number) {
    this.userService.removeFromActiveUsers(index);
  }

}
