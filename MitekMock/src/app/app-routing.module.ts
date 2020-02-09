import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import {HomeAddAppComponent} from './home-add-app/home-add-app.component';
import { GetAppListComponent } from './get-app-list/get-app-list.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  {path: 'createApp', component: HomeAddAppComponent},
  {path:'getAppList',component:GetAppListComponent},
  {path:'manualEntry',component:ManualEntryComponent},
  { path: '', redirectTo: '/createApp', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
