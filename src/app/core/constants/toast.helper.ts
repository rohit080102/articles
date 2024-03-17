import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})

export class ToastHelper {
  constructor(private toast: HotToastService) { }

  success = (message: string) => this.toast.success(message, {
    theme: 'snackbar',
    id: 'success',
    position: 'bottom-center',
    style: { "font-size": "16px", "margin-bottom": "100px" }
  });

  warning = (message: string) => this.toast.warning(message, {
    theme: 'snackbar',
    id: 'warning',
    position: 'bottom-center',
    style: { "font-size": "16px", "margin-bottom": "100px" }
  });

  error = (message: string) => this.toast.error(message, {
    theme: 'snackbar',
    id: 'error',
    position: 'bottom-center',
    style: { "font-size": "16px", "margin-bottom": "100px" }
  });

  info = (message: string) => this.toast.info(message, {
    theme: 'snackbar',
    id: 'info',
    position: 'bottom-center',
    style: { "font-size": "16px", "margin-bottom": "100px" }
  });

  showOneSuccess = (message: string, id: string) => this.toast.success(message, {
    theme: 'snackbar',
    position: 'bottom-center',
    id: id
  });

  showOneWarning = (message: string, id: string) => this.toast.warning(message, {
    theme: 'snackbar',
    position: 'bottom-center',
    id: id
  });

  showOneError = (message: string, id: string) => this.toast.error(message, {
    theme: 'snackbar',
    position: 'bottom-center',
    id: id
  });
}
