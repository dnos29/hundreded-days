import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  // @Input() pecentage = 30;
  private _pecentage  = 30;
  @Input() set pecentage(val: number){
    this._pecentage = val;
  }

  get pecentage(){
    return this._pecentage;
  }

  @Input() backgroundColor = '#ccc';
  constructor() {
    console.log("constructor", {
      pecentage: this.pecentage,
      backgroundColor: this.backgroundColor,
    })
   }

  ngOnInit(): void {
    console.log("OnInit", {
      pecentage: this.pecentage,
      backgroundColor: this.backgroundColor,
    })
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("OnChagnes",{
      pecentage: this.pecentage,
      backgroundColor: this.backgroundColor,
    });

  }
}
