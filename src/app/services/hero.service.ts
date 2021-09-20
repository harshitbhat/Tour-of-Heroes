import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from '../services/message.service';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }
}
