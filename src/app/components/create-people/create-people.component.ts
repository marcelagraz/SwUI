import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data/data.service';
import { CreatePeopleModel } from '../../models/create-people-model';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-create-people',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './create-people.component.html',
  styleUrl: './create-people.component.css'
})
export class CreatePeopleComponent {

  createPeopleModel: CreatePeopleModel = {
    name: '',
    birthYear: '',
    gender: '',
    homeworldId: ''
   }

   planets: Planet[] = [];

  constructor(
    private dataService: DataService,
    private router: Router) {}

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

  createPeople() {
    this.dataService.createPeople(this.createPeopleModel).subscribe({
      next: (baseResponse) => {
        const navigationDetails: string[] = ['/peoples'];
        this.router.navigate(navigationDetails);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
