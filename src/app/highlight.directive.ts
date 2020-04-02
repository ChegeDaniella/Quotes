import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

@HostListener("click") onClicks(){
  this.high("yellow")
}

@HostListener("dblclick") onDoubleClicks(){
  this.high("None")
}

private high(action:string){
  this.elem.nativeElement.style.backgroundColor=action;
}







    
  



}


