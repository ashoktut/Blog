import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const users = [
      {id: 11, first_name: 'Kendall', last_name: 'Jenner', avatar: 'assets/img/user.jpg'},
      {id: 12, first_name: 'Charles', last_name: 'Dickson', avatar: 'assets/img/user.jpg'},
      {id: 13, first_name: 'Mona', last_name: 'Lisa', avatar: 'assets/img/user.jpg'},
      {id: 14, first_name: 'Adam', last_name: 'Sandler', avatar: 'assets/img/user.jpg'},
      {id: 15, first_name: 'Chuck', last_name: 'Norris', avatar: 'assets/img/user.jpg'},
      {id: 16, first_name: 'Eva', last_name: 'Mendez', avatar: 'assets/img/user.jpg'},
      {id: 17, first_name: 'Salma', last_name: 'Hayek', avatar: 'assets/img/user.jpg'},
      {id: 18, first_name: 'Chris', last_name: 'Rock', avatar: 'assets/img/user.jpg'},
      {id: 19, first_name: 'Halle', last_name: 'Berry', avatar: 'assets/img/user.jpg'},
      {id: 20, first_name: 'Jessica', last_name: 'Alba', avatar: 'assets/img/user.jpg'},
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
