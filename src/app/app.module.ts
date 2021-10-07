import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegformComponent } from './regform/regform.component';
import { StudlistComponent } from './studlist/studlist.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegformComponent,
    StudlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule, 
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
