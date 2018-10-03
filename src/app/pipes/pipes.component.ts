import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  

  test = [{"id":"SS01","fname":"sayali","lname":"sikania","salary":5000,"per_incr":"0.02","doj":"02/01/2015"},
  {"fname":"shivali","lname":"lalbige","salary":8000,"per_incr":"0.03","doj":"07/11/2014"},
  {"fname":"naina","lname":"patil","salary":5000,"per_incr":"0.06","doj":"12/08/2016"}]

  constructor() { }

  ngOnInit() {
  }

}
