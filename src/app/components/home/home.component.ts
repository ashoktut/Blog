import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// To navigate to a new page – and its associated component – we need as a first
// measure to inject a variable of type Router. See export class and the userDetails function below for its usage.
export class HomeComponent {
  constructor(private reqresService: ReqresService, private router: Router) {
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
    this.router.navigate(['user', id]);
  }

  addUser(): void {
    this.router.navigate(['add']);
  }
}
