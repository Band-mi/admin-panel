import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AppNzLayoutComponent} from "../../layouts/nz-layout/nz-layout.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'booking',
      }, {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      }, {
        path: 'booking',
        loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent)
      }, {
        path: 'analytics',
        loadComponent: () => import('./analytics/analytics.component').then(m => m.AnalyticsComponent)
      }, {
        path: 'edit',
        loadComponent: () => import('./edit/edit.component').then(m => m.EditComponent)
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppNzLayoutComponent,
    RouterOutlet,
  ],
  providers: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
