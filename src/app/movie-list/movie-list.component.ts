import { Component, Input } from '@angular/core';
import { Movie } from '../shared/modules/Movie';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
    selector: 'movie-list',
    standalone: true,
    templateUrl: './movie-list.component.html',
    imports: [MovieCardComponent]
})
export class MovieListComponent {
 @Input() movies!:Movie[];
}
