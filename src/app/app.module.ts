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
import { LoadingComponent } from './loading/loading.component';
import { PageStats1Component } from './page-stats-1/page-stats-1.component';
import { PageStats2Component } from './page-stats-2/page-stats-2.component';
import { PageStats3Component } from './page-stats-3/page-stats-3.component';
import { PageStats4Component } from './page-stats-4/page-stats-4.component';
import { PageStats5Component } from './page-stats-5/page-stats-5.component';
import { PageMapP2Component } from './page-map-p2/page-map-p2.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { PageFilterComponent } from './page-filter/page-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    PageStatsComponent,
    PageMapComponent,
    PageStatsP2Component,
    PageLoadingComponent,
    LoadingComponent,
    PageStats1Component,
    PageStats2Component,
    PageStats3Component,
    PageStats4Component,
    PageStats5Component,
    PageMapP2Component,
    ModalComponent,
    PageFilterComponent
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
    D3Service,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
