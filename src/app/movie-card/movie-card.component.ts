import { Component, Input } from '@angular/core';
import { Movie } from '../shared/modules/Movie';
import { Episode } from '../shared/modules/Episode';
import { DatePipe } from '@angular/common';
import { MovieDto } from '../shared/modules/MovieDto';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() dto!: MovieDto;
} 
