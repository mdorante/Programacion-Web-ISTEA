import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
