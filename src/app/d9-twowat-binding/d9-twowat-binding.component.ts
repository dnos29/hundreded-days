import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d9-twowat-binding',
  templateUrl: './d9-twowat-binding.component.html',
  styleUrls: ['./d9-twowat-binding.component.css']
})
export class D9TwowatBindingComponent implements OnInit {
  name: string = "Angular";
  isChecked: boolean = true;
  amount: number = 500;

  constructor() { }

  ngOnInit(): void {
  }
  onChange(check: boolean){
    console.log(check);
    
  }
  onClick(check: boolean){
    console.log(check);
    
  }
}
