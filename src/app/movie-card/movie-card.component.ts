import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MovieDto } from '../shared/modules/MovieDto';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() dto!: MovieDto;

  constructor(private router: Router) { }

  navigateToDetails() {
    this.router.navigate(['movie-details', this.dto.imdbID]);
  }
} 
