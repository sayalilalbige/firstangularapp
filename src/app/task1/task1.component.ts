import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  i:number;
  tabcontent:any; 
  tablinks: any;
  constructor() { }

  openCity(evt, cityName) {
    this.tabcontent = document.getElementsByClassName("tabcontent");
    this.tablinks = document.getElementsByClassName("tablinks");
    
    
    for (this.i = 0; this.i < this.tabcontent.length; this.i++) {
      this.tabcontent[this.i].style.display = "none";
    }
    
    for (this.i = 0; this.i < this.tablinks.length; this.i++) {
      this.tablinks[this.i].className = this.tablinks[this.i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.target.className += " active";
}

  ngOnInit() {
  }

}
