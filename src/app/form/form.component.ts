import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
v1 : String;
@Input() varchild;
@Input() methchild;
  constructor() { }
  
  ngOnInit() {
     }
  AlertMsg(){

   }
}
