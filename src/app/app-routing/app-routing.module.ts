import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';
import { PageStatsComponent } from '../page-stats/page-stats.component';
import { PageMapComponent } from '../page-map/page-map.component';
import { PageStatsP2Component } from '../page-stats-p2/page-stats-p2.component';
import { PageLoadingComponent } from '../page-loading/page-loading.component';
import { PageStats1Component } from '../page-stats-1/page-stats-1.component';
import { PageStats2Component } from '../page-stats-2/page-stats-2.component';
import { PageStats3Component } from '../page-stats-3/page-stats-3.component';
import { PageStats4Component } from '../page-stats-4/page-stats-4.component';
import { PageStats5Component } from '../page-stats-5/page-stats-5.component';
import { PageMapP2Component } from '../page-map-p2/page-map-p2.component';
import { PageFilterComponent } from '../page-filter/page-filter.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  {
    path: 'welcome', component: PageWelcomeComponent,
    children: [
      {  path: 'stats-nundah', component: PageStatsComponent },
      {  path: 'stats-kedron', component: PageStats1Component },
      {  path: 'stats-hendra', component: PageStats2Component },
      {  path: 'stats-wooloowin', component: PageStats3Component },
      {  path: 'stats-clayfield', component: PageStats4Component },
      {  path: 'stats-wavellHeights', component: PageStats5Component },
      {  path: 'maps', component: PageMapComponent },
      {  path: 'filter', component: PageFilterComponent },  
      {  path: 'maps2', component: PageMapP2Component },
      {  path: 'stats2', component: PageStatsP2Component }
    ]
  },
  { path: 'loading', component: PageLoadingComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


