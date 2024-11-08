import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CategoryRequest, CategoryResponse } from '../Models/category';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)
  apiUrl = environment.apiUrl

  getCategory() {
    const url = this.apiUrl + 'Category';
    return this.http.get<CategoryResponse>(url);
  }

  categoryDetails(id: number) {
    const url = this.apiUrl + `Category/${id}`;
    return this.http.get<CategoryResponse>(url);
  }

  addCategory(data: CategoryRequest) {
    const url = this.apiUrl + 'Category'
    return this.http.post(url, data);
  }

  updateCategory(data: CategoryRequest, id: number) {
    const url = this.apiUrl + `Category/${id}`;
    return this.http.put(url, data);
  }

  deleteCategory(id: number) {
    const url = this.apiUrl + `Category/${id}`;
    return this.http.delete(url);
  }

}
