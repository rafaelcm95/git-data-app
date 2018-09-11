import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './features/shared-components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchAccordionComponent } from './features/pages/home-page/search-accordion/search-accordion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SearchAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
