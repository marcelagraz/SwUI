import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data/data.service';
import { CreateFilmModel } from '../../models/create-film-model';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-create-film',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule
  ],
  templateUrl: './create-film.component.html',
  styleUrl: './create-film.component.css'
})
export class CreateFilmComponent {

  createFilmModel: CreateFilmModel = {
    title: '',
    episode: 0,
    director: '',
    releaseDate: ''
   }

   releaseDate: Date = new Date();

  constructor(
    private dataService: DataService,
    private router: Router) {}

  createFilm() {
    this.createFilmModel.releaseDate = new Date(this.releaseDate).toISOString().split('T')[0]
    this.dataService.createFilm(this.createFilmModel).subscribe({
      next: (baseResponse) => {
        const navigationDetails: string[] = ['/films'];
        this.router.navigate(navigationDetails);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
