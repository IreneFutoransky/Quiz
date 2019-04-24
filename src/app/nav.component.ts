import { AuthService } from './auth.service';
import { Component } from '@angular/core'


@Component({  
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/quiz">Quiz</button>
        <span style="flex: 1 1 auto;"></span>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
        <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()" >Logout</button>

    </mat-toolbar>
  `
})
export class NavComponent {
  constructor(private auth: AuthService) {}

}
