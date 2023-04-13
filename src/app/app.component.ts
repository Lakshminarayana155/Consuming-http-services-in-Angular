import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  userpost: any=[];
  constructor(private user: UserService){
    this.user.getuserdata().subscribe(data =>{
      console.log(data)
      this.userpost=data
    })
  }
}
