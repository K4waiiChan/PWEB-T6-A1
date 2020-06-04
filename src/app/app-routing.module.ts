import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePresentationComponent } from './presentations/create-presentation/create-presentation.component';


const routes: Routes = [
  { path: '', redirectTo: 'presentations/create', pathMatch: 'full'},
  { path: 'presentations/create', component: CreatePresentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
