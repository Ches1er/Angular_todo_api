import {Category} from './category';

export class CategoryResponse {

  constructor(private pData: Array<Category>,
              private pStatus: string,
              private pErrors: string) {
  }

  get data(): Array<Category> {
    return this.pData;
  }

  set data(value: Array<Category>) {
    this.pData = value;
  }

  get status(): string {
    return this.pStatus;
  }

  set status(value: string) {
    this.pStatus = value;
  }

  get errors(): string {
    return this.pErrors;
  }

  set errors(value: string) {
    this.pErrors = value;
  }

  public static fromJson(jsonObj: any): CategoryResponse {
    return new CategoryResponse(
      jsonObj.data.map(e => Category.fromJson(e)),
      jsonObj.status,
      jsonObj.errors
    );
  }
}
