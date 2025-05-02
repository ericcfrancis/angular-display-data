import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-msic',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './msic.component.html',
  styleUrl: './msic.component.css'
})
export class MsicComponent implements OnInit {
  msicData : any[] = [];
  constructor(private dataService: DataService){}

  ngOnInit() {
    this.dataService.getMsicData().subscribe({
      next: (data) => this.msicData = data,
      error: (err) => console.error('this is not workingg:', err)
    });
  }
}
