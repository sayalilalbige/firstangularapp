import{Directive,ElementRef,OnInit}from'@angular/core';

@Directive({
selector:'[app-custom]'


})

export class custom_directive implements OnInit{

constructor(private elementRef: ElementRef){

}


ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='gray';

}
}