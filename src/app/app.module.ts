import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataService } from './data.service';
import { PageDataComponent } from './page-data/page-data.component';
import { D3Service } from 'd3-ng2-service';
import { PageStatsComponent } from './page-stats/page-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    PageDataComponent,
    PageStatsComponent
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
