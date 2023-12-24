import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/modules/Movie';
import { MovieListComponent } from "../movie-list/movie-list.component";
@Component({
    selector: 'movie-app',
    standalone: true,
    templateUrl: './movie-app.component.html',
    imports: [FormsModule,ReactiveFormsModule, MovieListComponent]
})
export class MovieAppComponent {
  movies:Movie[] = [];
  constructor(private movieService:MovieService){}

  title = new FormControl('',[Validators.required,Validators.minLength(3)]);
  getMoviesViaTitle(){
    if(this.title.valid){
      this.movieService.getMoviesWithTitle(this.title.value!).subscribe((data:any)=>{
        console.log(data);
        this.movies = [data];
      })
    }
  }
}
