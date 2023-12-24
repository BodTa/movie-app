import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/modules/Movie';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { Series } from '../shared/modules/Series';
import { Episode } from '../shared/modules/Episode';
@Component({
    selector: 'movie-app',
    standalone: true,
    templateUrl: './movie-app.component.html',
    imports: [FormsModule,ReactiveFormsModule, MovieListComponent]
})
export class MovieAppComponent {
  movie?:Movie;
  series?:Series;
  constructor(private movieService:MovieService){}
  formBuilder = new FormBuilder().nonNullable;
  formGroup = this.formBuilder.group(
    {
      title: this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      season: this.formBuilder.control<number|undefined>(undefined,[Validators.min(1)]),
      episode: this.formBuilder.control<number|undefined>(undefined,[Validators.min(1)])
    }
  )
  getMoviesViaTitle(){
    if(this.formGroup.get("title")!.valid){
      let title = this.formGroup.controls.title.value;
      let season = this.formGroup.controls.season.value;
      let episode = this.formGroup.controls.episode.value;
      this.movieService.getMoviesWithTitle(title!,season,episode).subscribe((data:any)=>{
        console.log(data);
        if(episode){
          this.movie = data;  
          this.series = undefined;
        }  
        else if(season){
          this.series = data;
          this.movie = undefined;
        }
        else{
          this.movie = data;
          this.series = undefined;
        }
      })
    }
  }
}
