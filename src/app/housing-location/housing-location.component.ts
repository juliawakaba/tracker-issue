import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housinglocation!: Housinglocation;

}