
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accountinfo } from './accountinfo'
import { Userloginfo } from './userloginfo';
import { ApiManager } from '../core/utilities/api-manager';
import { apiEndpoints } from '../core/constants/api-endpoints';



@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  constructor(private http: HttpClient, private apiManager: ApiManager) { }

  async register(data: any) {
    let results: any = null;
    try {
      let response: any = await this.apiManager.request(
        { url: apiEndpoints.REGISTER, method: 'POST' },
        data,
      );
      results = response;
      if (response.status == 'success') {
      }
      return results;
    } catch (err) {
      return results;
    }
  }

  async login(data: any) {
    let results: any = null;
    try {
      let response: any = await this.apiManager.request(
        { url: apiEndpoints.LOGIN, method: 'POST' },
        data,
      );
      results = response;
      if (response.IsSuccess) {
        if (response.Data != 0) {
        }
      }
      return results;
    } catch (err) {
      return results;
    }
  }




  // createaccount(accinfo: Accountinfo): Observable<Accountinfo> {

  //   return this.http.post<Accountinfo>(this.url + 'api/register', accinfo)
  // }
  // userlogin(logininfo: Userloginfo): Observable<Userloginfo> {

  //   return this.http.post<Userloginfo>(this.url + 'api/login', logininfo)
  // }

}
