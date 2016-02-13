import { Component, OnInit } from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}
