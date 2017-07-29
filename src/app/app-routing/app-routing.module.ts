import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';
import { PageDataComponent } from '../page-data/page-data.component';

const routes: Routes = [
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
 { path: 'welcome', component: PageWelcomeComponent },
 { path: 'data', component: PageDataComponent },
 
]

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }


