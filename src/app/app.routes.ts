import { Routes } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { CreatePlanetComponent } from './components/create-planet/create-planet.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { FilmsComponent } from './components/films/films.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'planets',
        component: PlanetsComponent
    },
    {
        path: 'planets/create',
        component: CreatePlanetComponent
    },
    {
        path: 'peoples',
        component: PeoplesComponent
    },
    {
        path: 'peoples/create',
        component: CreatePeopleComponent
    },
    {
        path: 'films',
        component: FilmsComponent
    },
    {
        path: 'films/create',
        component: CreateFilmComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '', 
        redirectTo:'home', 
        pathMatch:'full'
    }
];
