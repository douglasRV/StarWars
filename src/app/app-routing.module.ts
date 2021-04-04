import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';

const routes: Routes = [{
  path: '',
  component: PersonagensComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
