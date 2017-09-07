import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/_index';
import {
  DataTableModule,
  InputTextareaModule,
  PanelModule,
  DropdownModule,
  PickListModule,
  CalendarModule,
  GrowlModule,
  SharedModule,
  Message
} from 'primeng/primeng';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from './_httpclient/httpclient';
import { AppComponent } from './app.component';
import {
  NavBarComponent,
  SignupComponent,
  SignupUsernameInputComponent,
  SignupEmailInputComponent,
  SignupPasswordInputComponent,
  SignupInviterInputComponent,
  SignupButtonComponent,
  MessagesComponent,
  HomeComponent
} from './components/_index'
import {
    UserService
} from './_services/_index';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        routing,
        DataTableModule,
        InputTextareaModule,
        FormsModule,
        PanelModule,
        DropdownModule,
        SharedModule,
        PickListModule,
        CalendarModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        SignupComponent,
        SignupUsernameInputComponent,
        SignupEmailInputComponent,
        SignupPasswordInputComponent,
        SignupInviterInputComponent,
        SignupButtonComponent,
        MessagesComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        HttpClient,
        UserService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
