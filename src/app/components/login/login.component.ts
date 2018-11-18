import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;
  private from: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.from = this.route.snapshot.paramMap.get('from');
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      this.loggedIn = (user !== null);
      if(this.from) {
        this.router.navigate([this.from]);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }

  signOut(): void {
    this.authService.signOut();
  }
  
}
