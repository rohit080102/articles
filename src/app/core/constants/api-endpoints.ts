import { environment } from 'src/environments/environment';

class ApiEndpoints {
  private PATH: string = `${environment.apiEndPoint}/${environment.routeName}`;
  public REGISTER: string = `${this.PATH}/register`;
  public LOGIN: string = `${this.PATH}/login`;
}

export let apiEndpoints = new ApiEndpoints();
