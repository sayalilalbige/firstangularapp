import { Component, OnInit } from '@angular/core';
import { EmpaddService } from '../empadd.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  
  constructor(private empservice:EmpaddService) { }
  emp=[];
  
  ngOnInit() {
    this.emp=this.empservice.getemp();
  }

}
