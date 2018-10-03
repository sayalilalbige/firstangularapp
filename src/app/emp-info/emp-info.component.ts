import { Component, OnInit } from '@angular/core';
import { EmpaddService } from '../empadd.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {


  constructor(private empservice:EmpaddService) { }

  emp=[];




  ngOnInit() {
    this.emp=this.empservice.getemp();
  }

}
