import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule , CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  category = '';
  productName = '';
  description = '';

  addProduct() {
    let products = JSON.parse(localStorage.getItem('products') || '{}');

    if (!products[this.category]) {
      products[this.category] = [];
    }

    products[this.category].push({
      name: this.productName,
      description: this.description,
    });

    localStorage.setItem('products', JSON.stringify(products));
    alert('Product Added!');
    
    this.category = this.productName = this.description = '';
  }
}
