import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
v1 : String;
@Input() varchild;
@Input() methchild;
@Output() evenement=new EventEmitter<String>();
  constructor() { }
  
  ngOnInit() {
     }
  senddata(){
    this.evenement.emit(this.v1);
   }
}
