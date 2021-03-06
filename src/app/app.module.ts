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
import { SidebarComponent } from './features/shared-components/sidebar/sidebar.component';
import { WelcomeCardComponent } from './features/pages/home-page/welcome-card/welcome-card.component';
import { AppDividerComponent } from './features/shared-components/app-divider/app-divider.component';
import { AboutCardComponent } from './features/pages/home-page/about-card/about-card.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './features/shared-components/chart/chart.component';
import { DonateBarComponent } from './features/shared-components/donate-bar/donate-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SearchAccordionComponent,
    SidebarComponent,
    WelcomeCardComponent,
    AppDividerComponent,
    AboutCardComponent,
    ChartComponent,
    DonateBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
