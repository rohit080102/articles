import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';
class SwalHelper {
  public swalToast = (icon: SweetAlertIcon, titleText: string, position: SweetAlertPosition) => {
    Swal.fire({
      icon: icon,
      toast: true,
      showCloseButton: true,
      position: position,
      showConfirmButton: false,
      timerProgressBar: false,
      text: titleText,
      timer: 2500,
    });
  };

  public successToast = (title: string) => {
    Swal.fire({
      icon: 'success',
      toast: true,
      title: title,
      position: 'bottom',
      showCancelButton: false,
      showConfirmButton: false,
      timerProgressBar: false,
      timer: 2500
    })
  }

  public messageToast = async (message: string, icon: SweetAlertIcon) => {
    await Swal.fire({
      position: 'top-end',
      icon: icon,
      title: message,
      toast: true,
      showConfirmButton: false,
      timer: 2500
    });
  }

  public messageClock = async (text: string, icon: SweetAlertIcon) => {
    await Swal.fire({
      icon: icon,
      html: text,
      showConfirmButton: false,
      timer: 2000
    });
  }

  public takeConfirmation = (title: string, text: string, confirmButtonText?: string) => {
    return Swal.fire({
      icon: 'question',
      title: title,
      text: text,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmButtonText ?? "Okay!"
    });
  }
}
export let swalHelper = new SwalHelper();
