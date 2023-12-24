export interface Movie{
    Title: string;
    Year: string;
    Rated: string;
    Released: Date;
    Runtime: string;
    Genre: string[];
    Director: string;
    Writer: string;
    Actors: string[];
    Plot: string;
    Language: string;
    Country: string;
    Awraards: string;
    Poster: string;
    Ratings:{
        Source: string;
        Value: string;
    }[];
    Metascore:string;
    imdbRating:string;
    imdbVotes:string;
    imdbId:string;
    Type:string;
    DVD:Date;
    BoxOffice:string;
    PRoduction:string;
    Website:string;
}