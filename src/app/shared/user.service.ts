import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class UserService {
    activeUsers: User[] = [];
    inActiveUsers: User[] = [];

    constructor(private counter: CounterService) {
        this.activeUsers.push(new User('Tom', 'active'),
            new User('Jerry', 'active'), new User('Mickey', 'active'));

        this.inActiveUsers.push(new User('Jack', 'inactive'),
            new User('Jill', 'inactive'), new User('John', 'inactive'));
    }

    addToActiveUsers(id: number) {
        const inActiveUser = this.inActiveUsers.splice(id, 1);
        this.toggleUserStatus(inActiveUser[0]);
        this.activeUsers.push(inActiveUser[0]);
    }

    removeFromActiveUsers(id: number) {
        const activeUser = this.activeUsers.splice(id, 1);
        this.toggleUserStatus(activeUser[0]);
        this.inActiveUsers.push(activeUser[0]);
    }

    private toggleUserStatus(user: User) {
        if (user.status === 'active') {
            user.status = 'active';
            this.counter.incrementCounter();
        } else {
            user.status = 'inactive';
            this.counter.incrementCounter();
        }
        console.log(this.counter.getCounterValue());
    }

}