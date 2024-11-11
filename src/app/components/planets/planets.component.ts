import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data/data.service';
import { Planet } from '../../models/planet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule, 
    MatButtonModule, 
    RouterModule
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {

  displayedColumns: string[] = ['name', 'gravity', 'climate', 'created', 'edited'];
  planets: Planet[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getAllPlanets().subscribe({
      next: (baseResponse) => {
        this.planets = baseResponse.data;
        console.log(this.planets);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
  goToCreatePlanet() {
    const navigationDetails: string[] = ['/planets/create'];
    this.router.navigate(navigationDetails);
  }
}
