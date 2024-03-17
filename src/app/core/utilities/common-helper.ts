import { AppStorage } from './app-storage';
import { Injectable } from '@angular/core';
import { swalHelper } from '../constants/swal-helper';

@Injectable({
  providedIn: 'root',
})
export class CommonHelper {
  constructor(
    private appStorage: AppStorage,
  ) { }


  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  logout = () => {
    swalHelper
      .takeConfirmation('Logout', 'Do you really want to logout?', 'Logout')
      .then((result) => {
        if (result.isConfirmed) {
          this.appStorage.clearAll();
          window.location.href = 'home';
        }
      });
  };


}
