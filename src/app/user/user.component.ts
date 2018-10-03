import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
fname='';
lname='';
number='';

fnameError = '';
lnameError = '';
numberError = '';
  
ad=[{fname:'sayali',lname:'sikania',number:'9876543210'}]


add(){
  if(this.fname === '')
    this.fnameError = "Please Enter Name"
  else
    this.fnameError = "";

  
  if(this.lname === '')
    this.lnameError = "Please Enter lname"
  else
    this.lnameError = "";
  
  
  if(this.number === '')
    this.numberError = "Please Enter Mobile Number"
  else if(isNaN(parseInt(this.number))){
    this.numberError = "Please Enter Valid Mobile  Number"
  }
  else if(!isNaN(parseInt(this.number)) && this.number.length !== 10){

    this.numberError = "Please Enter Valid Mobile  Number"

}
  else
    this.numberError = "";
  
  
  if(this.fname !== '' && this.lname !== '' && this.number !== '' && !isNaN(parseInt(this.number))&& !isNaN(parseInt(this.number)) && this.number.length == 10) {
    this.ad.push({fname:this.fname , lname:this.lname , number:this.number});
    this.fname = '';
    this.lname = '';
    this.number = '';
  }
}




showStudent(id){
  console.log(id);
  this.fname = (this.ad[id].fname);
  this.lname = (this.ad[id].lname);
  this.number = (this.ad[id].number);
}
updateStudent(id){
  this.ad[id] ={"fname":this.fname,"lname":this.lname,"number":this.number};
  
}

deleteStudent(id:number){
  this.ad.splice(id,1);
}

test = [{"id":10,"fname":"vijendra","lname":"sikania","number":987654321},
{"id":10,"fname":"vijendra","lname":"sikania","number":9876543210},
{"id":10,"fname":"vijendra","lname":"sikania","number":9876543210},
{"id":10,"fname":"vijendra","lname":"sikania","number":9876543210}  
]
}
