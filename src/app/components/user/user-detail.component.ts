import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

// ActivatedRoute is an interface that contains information on a route associated with a component.
// The “params” property is an Observable, and as such we can subscribe to it.
// The observable, if executed successfully, will return a function whose argument is an array of all received parameters.
// Then, it is a matter of using our service to obtain the information of the selected user,
// remembering at all times that our service will always return an Observable because it is executed asynchronously
export class UserDetailComponent implements OnInit{

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private reqresService: ReqresService, private router: Router) {
    this.activatedRoute.params.subscribe((params)=> {
      reqresService.getUser(params['id']).subscribe((res: User) => this.user = res);
    });
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  save(): void {
    // this.reqresService.updateUser(this.user).subscribe(()=>this.router.navigate(['users'])); <- before
    this.reqresService.updateUser(this.user).subscribe(()=>this.router.navigate(['home']));
  }
}
