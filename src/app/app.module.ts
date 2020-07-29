import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SquareComponent } from './square/square.component';
import { D8OuputBindingComponent } from './d8-ouput-binding/d8-ouput-binding.component';
import { UserListComponent } from './users/user-list.component';
import { UserItemComponent } from './users/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    SquareComponent,
    D8OuputBindingComponent,
    UserListComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
