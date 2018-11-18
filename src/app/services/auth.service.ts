import { Injectable } from "@angular/core";
import { AuthService as SocialAuthService, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

export function provideAuthConfig() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("105175543591-k90psr3ledg9rav0o19l4pva5mks32gj.apps.googleusercontent.com")
    }
  ]);
  return config;
}

export interface SocialUser {
  provider: string;
  id: string;
  email: string;
  name: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  authToken: string;
  idToken: string;
  /**
   * Contains the entire object returned from the Facebook API based on the fields you requested.
   * Only available for the Facebook provider.
   * Refer to the Graph API for details: https://developers.facebook.com/docs/graph-api
   */
  facebook?: any;
  /**
   * Contains the entire object returned from the Linked In API based on the fields you requested.
   * Only available for the Linked In provider.
   * Refer to the Linked In docs: https://developer.linkedin.com/docs/fields
   */
  linkedIn?: any;
}

@Injectable()
export class AuthService {
  private _user: SocialUser;
  private _isAuthenticated: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {
    authService.authState.subscribe(user => {
      this._user = user;
      this._isAuthenticated = (user !== null);
    });
  }

  public get user(): SocialUser {
    return this._user;
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public get authState(): Observable<SocialUser> {
    return this.authService.authState;
  }

  public signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signOut(): Promise<any> {
    return this.authService.signOut();
  }

}