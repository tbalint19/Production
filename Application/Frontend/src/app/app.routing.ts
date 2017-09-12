import {
  HomeComponent,
  SignupComponent,
  DemoComponent,
  AccountComponent,
  ProfileComponent,
  CommunityComponent,
  InfoComponent,
  GameComponent,
  ResultsComponent
} from './components/_index'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/_index';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'about', component: InfoComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'results', component: ResultsComponent, canActivate: [AuthGuard] },
    { path: 'community', component: CommunityComponent, canActivate: [AuthGuard] },
    { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
