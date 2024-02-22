import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HomeComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tracker-issue';
}
