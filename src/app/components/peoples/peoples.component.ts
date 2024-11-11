import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data/data.service';
import { People } from '../../models/people';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule, 
    MatButtonModule, 
    RouterModule
  ],
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css'
})
export class PeoplesComponent {

  displayedColumns: string[] = ['name', 'birthYear', 'gender', 'created', 'edited'];
  peoples: People[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getAllPeoples().subscribe({
      next: (baseResponse) => {
        this.peoples = baseResponse.data;
        console.log(this.peoples);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
  goToCreatePeople() {
    const navigationDetails: string[] = ['/peoples/create'];
    this.router.navigate(navigationDetails);
  }
}
