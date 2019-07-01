import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
v1 : String;
@Input() varchild;
  constructor() { }
  
  ngOnInit() {
  }
  AlertMsg(){
    alert(this.varchild);
   }
}
