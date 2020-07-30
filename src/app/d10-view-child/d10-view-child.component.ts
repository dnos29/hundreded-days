import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'app-d10-view-child',
  templateUrl: './d10-view-child.component.html',
  styleUrls: ['./d10-view-child.component.css']
})
export class D10ViewChildComponent implements OnInit {
  @ViewChild('toggleComp') toggleComp: ToggleComponent;
  @ViewChild('toggleButton') toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('inputName', {static: true}) inputName: ElementRef<HTMLInputElement>;
  // @ViewChildren return list 
  name: string = "angular";
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputName.nativeElement.focus();
    }, 2000);
    console.log("onInit",this.inputName);
    
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit", this.toggleComp,this.toggleBtn, this.inputName);
  }
}
