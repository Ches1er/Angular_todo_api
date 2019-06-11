import {Component, Inject, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../dto/category';
import {MassageService} from '../../services/massage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private pCategories: Array<Category> = [];
  private pActiveCategory: Category = null;

  constructor(@Inject(CategoryService) private categoryService: CategoryService,
              @Inject(MassageService) private messageService: MassageService) {
  }

  get categories() {
    return this.pCategories;
  }

  get activeCategory(): Category {
    return this.pActiveCategory;
  }

  set activeCategory(value: Category) {
    this.messageService.changeCategory(value);
    this.pActiveCategory = value;
  }

  ngOnInit() {
    this.updateCategoryList();
    this.messageService.updatedCategoryMessage.subscribe(mes => this.updateCategoryList())
  }

  addCategory() {
    this.messageService.addCategory();
  }

  private updateCategoryList() {
    this.categoryService.categories
      .subscribe(categories => {
        this.pCategories = categories;
      });
  }

  delCategoryBtnClick(category: Category) {
    this.messageService.delCategory(category);
  }
}
