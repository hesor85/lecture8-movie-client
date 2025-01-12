import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './movies.service';
import { ResultComponent } from './result/result.component';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResultComponent, NgIf, MatButtonModule],
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
