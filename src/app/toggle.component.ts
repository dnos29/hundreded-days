import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: `app-toggle`,
  template: `
  <button (click)="withdraw()">With draw {{amount}}</button>
    <div class="toogle" [class.checked]="checked" (click)="onClick()">
      
    <div>
  `,
  styles: ['.toogle{width: 200px;height: 200px;background-color: #ccc}',
  '.checked{background-color: dodgerblue}']
})

export class ToggleComponent implements OnChanges{
  @Input() checked: boolean;
  @Input() amount: number;
  @Output() checkChange = new EventEmitter<boolean>();
  @Output() amountChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges){
    console.log("onchanges", this.checked);
    
  }
  withdraw(){
    this.amount -= 100;
    this.amountChange.emit(this.amount)
  }

  onClick(){
    console.log('Clicked');
    // this.checked = !this.checked;
    this.checkChange.emit(!this.checked);
  }
}