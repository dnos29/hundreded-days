import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SquareComponent } from './square/square.component';
import { D8OuputBindingComponent } from './d8-ouput-binding/d8-ouput-binding.component';
import { UserListComponent } from './users/user-list.component';
import { UserItemComponent } from './users/user-item.component';
import { D9TwowatBindingComponent } from './d9-twowat-binding/d9-twowat-binding.component';
import { ToggleComponent } from './toggle.component';
import { D10ViewChildComponent } from './d10-view-child/d10-view-child.component';
import { D13ContentProjectionComponent } from './d13-content-projection/d13-content-projection.component';
import { ExContentProjectionsComponent } from './common_components/ex-content-projections.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    SquareComponent,
    D8OuputBindingComponent,
    UserListComponent,
    UserItemComponent,
    D9TwowatBindingComponent,
    ToggleComponent,
    D10ViewChildComponent,
    D13ContentProjectionComponent,
    ExContentProjectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
