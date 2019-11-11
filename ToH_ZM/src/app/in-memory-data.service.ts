import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'All Might' },
      { id: 12, name: 'Endevor' },
      { id: 13, name: 'Todoroki' },
      { id: 14, name: 'Deku' },
      { id: 15, name: 'No. 13' },
      { id: 16, name: 'Gran Torio' },
      { id: 17, name: 'Midnight' },
      { id: 18, name: 'Snipe' },
      { id: 19, name: 'Hound Dog' },
      { id: 20, name: 'Eraser Head' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}