import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { D8OuputBindingComponent } from './d8-ouput-binding/d8-ouput-binding.component';
import { D9TwowatBindingComponent } from './d9-twowat-binding/d9-twowat-binding.component';

const routes: Routes = [
  {path: 'input-binding', component: SquareComponent},
  {path: 'd8-output-binding', component: D8OuputBindingComponent},
  {path: 'd9-twoway-binding', component: D9TwowatBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
