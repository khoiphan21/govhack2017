import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataService } from './data.service';
import { PageDataComponent } from './page-data/page-data.component';
import { D3Service} from 'd3-ng2-service';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    PageDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
