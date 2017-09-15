import {
  HomeComponent,
  SignupComponent,
  DemoComponent,
  AccountComponent,
  ProfileComponent,
  CommunityComponent,
  InfoComponent,
  StartComponent,
  ConfirmComponent,
  ResultsComponent
} from './components/_index'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, UserGuard, ConfirmGuard } from './_guards/_index';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'about', component: InfoComponent },
    { path: 'initialize', component: StartComponent, canActivate: [AuthGuard] },
    { path: 'confirm', component: ConfirmComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, UserGuard, ConfirmGuard] },
    { path: 'results', component: ResultsComponent, canActivate: [AuthGuard, UserGuard, ConfirmGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard, UserGuard, ConfirmGuard] },
    { path: 'community', component: CommunityComponent, canActivate: [AuthGuard, UserGuard, ConfirmGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard, UserGuard, ConfirmGuard] },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
