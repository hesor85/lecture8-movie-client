import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatListModule, NgForOf],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() data: Array<any> = [];
}
