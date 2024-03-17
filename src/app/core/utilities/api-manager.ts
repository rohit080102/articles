import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiManager {
  constructor(private http: HttpClient) { }

  request(config: { url: string, method: string }, data: any) {
    switch (config.method) {
      case 'GET':
        return lastValueFrom(this.http.get<OutputModel>(config.url));
      case 'POST':
        return lastValueFrom(this.http.post<OutputModel>(config.url, data));
      case 'PUT':
        return lastValueFrom(this.http.put<OutputModel>(config.url, data));
      default:
        return lastValueFrom(this.http.delete<OutputModel>(config.url));
    }
  }
}

export interface OutputModel {
  Message: string;
  Data: any;
  Status: number;
  IsSuccess: boolean;
}
