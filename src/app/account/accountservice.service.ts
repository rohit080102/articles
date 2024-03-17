
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
      console.log(response)
      if (response.IsSuccess) {
        return results = response
      }
    } catch (err) {
      return results;
    }
  }

  async login(data: any) {
    let results: any = "";
    try {
      let response: any = await this.apiManager.request(
        { url: apiEndpoints.LOGIN, method: 'POST' },
        data,
      );
      if (response.IsSuccess) {
        if (response.Data != 0) {
          return results = response;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }


}
