import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';
import { PageStatsComponent } from '../page-stats/page-stats.component';
import { PageMapComponent } from '../page-map/page-map.component';

const routes: Routes = [
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
 { path: 'welcome', component: PageWelcomeComponent,
  children: [
    { path: 'stats', component: PageStatsComponent },
    { path: 'maps', component: PageMapComponent }
  ] 
  },
]

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }


