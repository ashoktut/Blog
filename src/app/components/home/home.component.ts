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

  }


  // method that gets a list of users using the service
  // fix this subscribe as it is deprecated
  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        console.table(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
