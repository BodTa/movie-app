import { Episode } from "./Episode";

export interface Series{
    Title:string;
    Episodes:Episode[];
    Season:number;
    totalSeasons:number;
}