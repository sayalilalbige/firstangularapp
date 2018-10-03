import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpaddService {
getemp(){

  return[{ename:'sayali',tech:'php'},
  {ename:'Rutu',tech:'.net'},
  {ename:'vijendra',tech:'java'},
  ];


}
  constructor() { }
}
