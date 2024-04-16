import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './movies.service';
import { ResultComponent } from './result/result.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResultComponent, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';
  data: Array<any> = [];

  constructor(private moviesService: MoviesService) {}

  getMovies() {
    this.moviesService.getMovies().subscribe((result: any) => {
      this.data = result;
    });
  }
}
