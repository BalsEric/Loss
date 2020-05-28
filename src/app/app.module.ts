import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppAngularMaterialModule} from './app-angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfigurationsComponent} from './pages/configurations/configurations.component';
import {HomeComponent} from './pages/home/home.component';
import {EmptyListMessageComponent} from './shared/components/empty-list-message/empty-list-message.component';
import {LoginComponent} from './shared/components/login/login.component';
import {AuthGuard} from './util/auth.guard';
import { RegisterComponent } from './shared/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent,
    HomeComponent,
    LoginComponent,
    EmptyListMessageComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppAngularMaterialModule
  ],
  exports: [
    AppAngularMaterialModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
