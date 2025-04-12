import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule , FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  categoryName: string = '';

  addCategory() {
    if (!this.categoryName.trim()) {
      alert('Please enter a category name!');
      return;
    }    
    let categories = JSON.parse(localStorage.getItem('categories') || '[]');
    if (!categories.includes(this.categoryName)) {
      categories.push(this.categoryName);
      localStorage.setItem('categories', JSON.stringify(categories));
      alert('Category Added!');
    } else {
      alert('Category already exists!');
    }
    this.categoryName = '';
  }
}

