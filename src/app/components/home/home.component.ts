import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private reqresService: ReqresService) {
    this.getUsers();
  }


  // method that gets a list of users using the service
  // fixed this subscribe as it is deprecated
  // reference research video: https://www.youtube.com/watch?v=ahFEatzThIg
  // getUsers() {
  //   this.reqresService.getUsers().subscribe(
  //     (res: User[]) => {
  //       console.table(res);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }

  users: User[] = [];

  getUsers() {
    this.reqresService.getUsers().subscribe({
      next: (res: User[]) => this.users = res,
      error: (err) => console.log(err),
      complete: () => console.log('Successfully Completed')
    })
  }

  userDetails(id: number) {
    console.log('User ID: ', id);
  }
}
