import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  private refreshSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  triggerRefresh() {
    this.refreshSubject.next(true);
  }

  getRefresh(): Observable<boolean> {
    return this.refreshSubject.asObservable();
  }
}
