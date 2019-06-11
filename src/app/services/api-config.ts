export class ApiConfig {
  private static BASE_API_URL = 'http://pdfstep.zzz.com.ua';

  get getCategoriesUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=user&method=getAll';
  }

  get addCategoryUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=user&method=add';
  }

  get delCategoryUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=user&method=del';
  }
  get getNotesUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=todo&method=get';
  }
  get addNoteUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=todo&method=add';
  }
  get delNoteUrl(): string {
    return ApiConfig.BASE_API_URL + '?action=todo&method=delete';
  }
}
