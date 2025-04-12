import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  categories: string[] = [];

  ngOnInit() {
    const stored = localStorage.getItem('categories');
    this.categories = stored ? JSON.parse(stored) : [];
  }
}