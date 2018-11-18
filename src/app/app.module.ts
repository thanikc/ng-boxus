import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppMaterialModule } from './app-material.module';
import { PagesModule } from './modules/pages/pages.module';
import { provideAuthConfig } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SassHelperComponent } from './components/sass-helper/sass-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SassHelperComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AppMaterialModule,
    PagesModule,
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: provideAuthConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
