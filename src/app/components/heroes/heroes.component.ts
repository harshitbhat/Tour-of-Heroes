import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Original
    // this.heroes = this.heroService.getHeroes();

    // With observables: rxjs
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
