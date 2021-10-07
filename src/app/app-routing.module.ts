import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform/regform.component';
import { StudlistComponent } from './studlist/studlist.component';

const routes: Routes = [
  { path: 'Studentregistration', component: RegformComponent },
  { path: 'StudentDatabase', component: StudlistComponent },
  { path: '**', redirectTo: '/Studentregistration' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
