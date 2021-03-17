import { Injectable } from '@angular/core';
import { show } from '../models/show.models';
import { Episodes } from '../models/episode.model';
import {Observable, of} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
shows: Array<show>;
episodes: Array<Episode>;
  constructor() {
    this.shows = [
      new Show( {
        name: 'Doctor Who',
      language: 'English',
      genres: ['Sci-Fi', 'Action', 'Adventure'],
      id: 210,
      summary: 'A show about a time travelling alien called The Doctor.',
      status: 'ongoing',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
    }),
      new Show({
        name: 'The magicians',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about magicians and their trauma.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      }),
      new Show({
        name: 'Smallville',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about Superman as a teenager.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      })
    ];
    getShows(): Observable<Array<Show>> {
      return of<Array<Show>>(this.shows);
    }

    getEpisodes(): Observable<Array<Episode>>{
      return of<Array<Episode>>(this.episodes)



  }
}
