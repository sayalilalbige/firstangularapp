import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  name="sayali"
  city="pune"
  state="Maharashtra"
onSubmit(value:any)
{ 
  

  console.log(value);
}
  constructor() { }

  ngOnInit() {
  }

}
