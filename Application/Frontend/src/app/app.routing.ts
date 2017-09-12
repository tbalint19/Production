import {
  HomeComponent,
  SignupComponent,
  DemoComponent,
  AccountComponent,
  ProfileComponent,
  CommunityComponent,
  InfoComponent,
  StartComponent,
  ResultsComponent
} from './components/_index'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, UserGuard } from './_guards/_index';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'about', component: InfoComponent },
    { path: 'initialize', component: StartComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'results', component: ResultsComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'community', component: CommunityComponent, canActivate: [AuthGuard, UserGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard, UserGuard] },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
