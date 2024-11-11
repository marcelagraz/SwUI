import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data/data.service';
import { Film } from '../../models/film';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule, 
    MatButtonModule, 
    RouterModule
  ],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {

  displayedColumns: string[] = ['title', 'episode', 'director', 'created', 'edited'];
  films: Film[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getAllFilms().subscribe({
      next: (baseResponse) => {
        this.films = baseResponse.data;
        console.log(this.films);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
  goToCreateFilm() {
    const navigationDetails: string[] = ['/films/create'];
    this.router.navigate(navigationDetails);
  }
}
