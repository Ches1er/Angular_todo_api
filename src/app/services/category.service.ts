import {Inject, Injectable} from '@angular/core';
import {ApiConfig} from './api-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../dto/category';
import {filter, map} from 'rxjs/operators';
import {CategoryResponse} from '../dto/CategoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private config: ApiConfig = new ApiConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  get categories(): Observable<Array<Category>> {
    return this.http.get(this.config.getCategoriesUrl)
      .pipe(map(resp => CategoryResponse.fromJson(resp)))
      .pipe(map(categoryResponse => categoryResponse.data));
  }

  public addCategory(name: string): Observable<any> {
    const params = new FormData();
    params.append('name', name);
    return this.http.post(this.config.addCategoryUrl, params);
  }

  public delCategory(category: Category): Observable<any> {
    const params = new FormData();
    params.append('id', category.id.toString());
    return this.http.post(this.config.delCategoryUrl, params);
  }
}
