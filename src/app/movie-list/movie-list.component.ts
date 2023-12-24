import { Component, Input } from '@angular/core';
import { Movie } from '../shared/modules/Movie';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Series } from '../shared/modules/Series';
import { Episode } from '../shared/modules/Episode';

@Component({
    selector: 'movie-list',
    standalone: true,
    templateUrl: './movie-list.component.html',
    imports: [MovieCardComponent]
})
export class MovieListComponent {
 @Input() movie?: Movie;
 @Input() series?: Series;
  @Input() episode?: Episode;
}
