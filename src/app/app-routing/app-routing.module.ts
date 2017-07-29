import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';
import { PageStatsComponent } from '../page-stats/page-stats.component';
import { PageMapComponent } from '../page-map/page-map.component';
import { PageStatsP2Component } from '../page-stats-p2/page-stats-p2.component';
import { PageLoadingComponent } from '../page-loading/page-loading.component';
import { PageStats1Component } from '../page-stats-1/page-stats-1.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  {
    path: 'welcome', component: PageWelcomeComponent,
    children: [
      {  path: 'stats-nundah', component: PageStatsComponent },
      {  path: 'stats-kedron', component: PageStats1Component },
      {  path: 'maps', component: PageMapComponent },
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


