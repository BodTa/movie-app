import { Component, Input } from '@angular/core';
import { Movie } from '../shared/modules/Movie';
import { Episode } from '../shared/modules/Episode';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() title!: string;
  @Input() imdbRating?: string;
  @Input() poster?: string;
  @Input() episode?: number;
  @Input() season?: number;
  @Input() totalSeasons?: number;
  @Input() released?: Date;
} 
