import {Component, Inject, Input, OnInit} from '@angular/core';
import {MassageService} from '../../../services/massage.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name = '';
  visible = false;

  constructor(@Inject(MassageService) private msgService: MassageService,
              @Inject(CategoryService) private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.msgService.addCategoryMessage.subscribe(m => this.visible = true);
  }

  cancel() {
    this.visible = false;
    this.name = '';
  }

  clickOKAddCategoryWin() {
/*    if (this.name.length > 10) {
      alert('Category name must consists less then 10 characters. Try again.');
      this.cancel();
    }*/

    this.categoryService.addCategory(this.name).subscribe(resp => {
      this.msgService.updatedCategory();
    });
    this.visible = false;
    this.name = '';
  }

}
