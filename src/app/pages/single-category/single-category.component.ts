import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  imports: [CommonModule],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent implements OnInit {
  products: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const allProducts = JSON.parse(localStorage.getItem('products') || '{}');
    this.products = allProducts[name!] || [];
  }
}