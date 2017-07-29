import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';

const routes: Routes = [
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
 { path: 'welcome', component: PageWelcomeComponent }
]

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }


