import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mcoicop',
  imports: [CommonModule, RouterLink],
  templateUrl: './mcoicop.component.html',
  styleUrl: './mcoicop.component.css'
})
export class McoicopComponent implements OnInit {
  mcoicopData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMcoicopData().subscribe({
      next: (data) => this.mcoicopData = data,
      error: (err) => console.error('this is not workingg:', err)
    });
  }
}
