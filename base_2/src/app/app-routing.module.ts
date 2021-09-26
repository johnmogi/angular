import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  // { path: "products", component: ProductsComponent },
  { path: "about", component: AboutComponent },
  // { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact
  // { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
