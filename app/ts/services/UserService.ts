import { Injectable, bind } from 'angular2/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models';

/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
//   // `currentUser` contains the current user
//   currentUser: Rx.Subject<User> = new Rx.BehaviorSubject<User>(null);

//   public setCurrentUser(newUser: User): void {
//     this.currentUser.next(newUser);
//   }
}

export var userServiceInjectables: Array<any> = [
//  bind(UserService).toClass(UserService)
];
