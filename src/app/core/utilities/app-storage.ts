import { Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
@Injectable({
  providedIn: 'root',
})
export class AppStorage {

  constructor(private cookieService: SsrCookieService) { }

  public set = (key: string, value: any) => {
    this.cookieService.set(key, JSON.stringify(value), {path: '/'});
  };

  public get = (key: string) => {
    let values = this.cookieService.get(key);
    return values != null && values != '' ? JSON.parse(values) : null;
  };

  public clearKey = (key: string) => this.cookieService.delete(key);

  public clearAll = () => this.cookieService.deleteAll();

  public setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  public getLocalStorage = (key: string) => {
    let values = localStorage.getItem(key);
    return values != null && values != '' ? JSON.parse(values) : null;
  };

  public clearLocalStorage = (key: string) => localStorage.removeItem(key);

  public clearAllLocalStorage = () => localStorage.clear();


  public setSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  public getSessionStorage = (key: string) => {
    let values = sessionStorage.getItem(key);
    return values != null && values != '' ? JSON.parse(values) : null;
  };

  public clearSessionStorage = (key: string) => sessionStorage.removeItem(key);

  public clearAllSessionStorage = () => sessionStorage.clear();

}
