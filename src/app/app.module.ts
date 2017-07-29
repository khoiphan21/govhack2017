import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataService } from './data.service';
import { D3Service } from 'd3-ng2-service';
import { PageStatsComponent } from './page-stats/page-stats.component';
import { PageMapComponent } from './page-map/page-map.component';
import { PageStatsP2Component } from './page-stats-p2/page-stats-p2.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    PageStatsComponent,
    PageMapComponent,
    PageStatsP2Component,
    PageLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
