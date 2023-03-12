import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgRFormModule } from 'AgRForm';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AgRFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
