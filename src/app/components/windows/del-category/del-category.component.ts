import {Component, Inject, OnInit} from '@angular/core';
import {MassageService} from '../../../services/massage.service';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../dto/category';

@Component({
  selector: 'app-del-category',
  templateUrl: './del-category.component.html',
  styleUrls: ['./del-category.component.css']
})
export class DelCategoryComponent implements OnInit {

  category: Category = null;
  visible = false;

  constructor(@Inject(MassageService) private msgService: MassageService,
              @Inject(CategoryService) private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.msgService.delCategoryMessage.subscribe(category => {
      this.visible = true;
      this.category = category;
    });

  }

  cancel() {
    this.visible = false;
    this.category = null;
  }

  clickOKDelCategoryWin() {
    this.categoryService.delCategory(this.category).subscribe(resp => {
        this.msgService.updatedCategory();
      }
    );
    this.visible = false;
    alert('Category: ' + this.category.name + ' has been deleted');
    this.category = null;

  }

}
