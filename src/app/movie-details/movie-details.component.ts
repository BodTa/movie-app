import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/modules/Movie';
import { MovieService } from '../shared/services/movie.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'movie-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit{
  id!: string;
  movie!: Movie;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      console.log(this.id);
      this.movieService.getMoviesWithId(this.id).subscribe((data:any)=>{
        console.log(data);
        this.movie = data;
      })
    });

   
  }
}
