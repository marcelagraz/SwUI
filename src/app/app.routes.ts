import { Routes } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { CreatePlanetComponent } from './components/create-planet/create-planet.component';

export const routes: Routes = [
    {
        path: 'planets',
        component: PlanetsComponent
    },
    {
        path: 'planets/create',
        component: CreatePlanetComponent
    }
];
