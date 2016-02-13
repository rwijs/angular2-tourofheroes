import {Component, OnInit} from 'angular2/core';
import {HeroService} from './hero.service';
import {Router} from "angular2/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: [],
    providers: []
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router:Router, private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
