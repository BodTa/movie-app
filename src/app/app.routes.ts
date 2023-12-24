import { Routes } from '@angular/router';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieAppComponent
    },
    {
        path: 'movie-details/:id',
        component: MovieDetailsComponent
    }
];
