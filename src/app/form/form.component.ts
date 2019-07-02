import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
@ViewChild('inputText', {static: true} )value :ElementRef
  constructor() { }
  
  ngOnInit() {
    this.value.nativeElement.value='imen';
     }
  senddata(){
    this.evenement.emit(this.v1);
   }
   test(){
     console.log(this.value.nativeElement.value);
   }
}
