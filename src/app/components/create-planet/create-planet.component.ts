import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data/data.service';
import { CreatePlanetModel } from '../../models/create-planet-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-planet',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './create-planet.component.html',
  styleUrl: './create-planet.component.css'
})
export class CreatePlanetComponent {

  createPlanetModel: CreatePlanetModel = {
    name: '',
    gravity: '',
    climate: ''
   }

  constructor(
    private dataService: DataService,
    private router: Router) {}

  createPlanet() {
    this.dataService.createPlanet(this.createPlanetModel).subscribe({
      next: (baseResponse) => {
        const navigationDetails: string[] = ['/planets'];
        this.router.navigate(navigationDetails);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
