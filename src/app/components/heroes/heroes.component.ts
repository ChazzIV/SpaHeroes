import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroe-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void  {

    this.heroes = this.heroesService.getHeroes();

    // console.log(this.heroes);
  }

  verHeroe(idx: number ): void {
    // console.log(idx);
     this.router.navigate( ['/heroe', idx] );
  }


}
