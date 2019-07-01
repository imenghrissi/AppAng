import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAngdfsdfsdfsdfs';
    shorttext(){
     return this.title.substring(0,3);
  }
  receivedata(imen){
  console.log(imen);
  }
}
